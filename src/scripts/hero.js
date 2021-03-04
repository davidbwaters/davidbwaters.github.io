import {
  Flowmap,
  Geometry,
  Mesh,
  Program,
  Renderer,
  Texture,
  Vec2,
  Vec4
} from 'ogl'

const vertex = `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
      vUv = uv;
      gl_Position = vec4(position, 0, 1);
  }
`
const fragment = `
  precision highp float;
  precision highp int;
  uniform sampler2D tPaintStart;
  uniform sampler2D tPaintEnd;
  uniform sampler2D tFlow;
  uniform float uTime;
  varying vec2 vUv;
  uniform vec4 res;
  void main() {
      // R and G values are velocity in the x and y direction
      // B value is the velocity length
      vec3 flow = texture2D(tFlow, vUv).rgb;
      vec2 uv = .5 * gl_FragCoord.xy / res.xy;
      vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);
      myUV -= flow.xy * (0.15 * 0.7);
      vec3 tex1 = texture2D(tPaintStart, myUV).rgb;
      vec3 tex2 = texture2D(tPaintEnd, myUV).rgb;
      vec3 tex = mix(tex1, tex2, sin(uTime * .1));
      gl_FragColor = vec4(tex.r, tex.g, tex.b, 1.0);
  }
`

const bg = {
  start1: '/images/Hero-Paint-1-Dark.jpg',
  end1: '/images/Hero-Paint-2-Dark.jpg',
  start2: '/images/Hero-Paint-1-Light.jpg',
  end2: '/images/Hero-Paint-2-Light.jpg',
  width: 1600,
  height: 1080
}

const wrapper = document.body

const renderer = new Renderer({
  dpr: 2
})

const gl = renderer.gl

wrapper.appendChild(gl.canvas)

// Variable inputs to control flowmap
let aspect = 1
const mouse = new Vec2(-1)
const velocity = new Vec2()

function resize() {

  let a1, a2

  const imageAspect = bg.height / bg.width

  if (
    window.innerHeight / window.innerWidth < imageAspect
  ) {

    a1 = 1
    a2 =
      window.innerHeight / window.innerWidth / imageAspect

  }
  else {

    a1 =
      (window.innerWidth / window.innerHeight) * imageAspect
    a2 = 1

  }
  mesh.program.uniforms.res.value = new Vec4(
    window.innerWidth,
    window.innerHeight,
    a1,
    a2
  )

  renderer.setSize(window.innerWidth, window.innerHeight)
  aspect = window.innerWidth / window.innerHeight

}

const flowmap = new Flowmap(
  gl, {
    size: 5,
    falloff: 0.25,
    dissipation: 0.992,
    alpha: 0.72
  }
)

// Triangle that includes -1 to 1 range for 'position', and
// 0 to 1 range for 'uv'.
const geometry = new Geometry(gl, {
  position: {
    size: 2,
    data: new Float32Array([-1, -1, 3, -1, -1, 3])
  },
  uv: {
    size: 2,
    data: new Float32Array([0, 0, 2, 0, 0, 2])
  }
})

const texture1a = new Texture(gl, {
  minFilter: gl.LINEAR,
  magFilter: gl.LINEAR
})

const texture1b = new Texture(gl, {
  minFilter: gl.LINEAR,
  magFilter: gl.LINEAR
})

const texture2a = new Texture(gl, {
  minFilter: gl.LINEAR,
  magFilter: gl.LINEAR
})

const texture2b = new Texture(gl, {
  minFilter: gl.LINEAR,
  magFilter: gl.LINEAR
})

const img1a = new Image()
const img1b = new Image()
const img2a = new Image()
const img2b = new Image()


img1a.onload = () => (texture1a.image = img1a)
img1a.crossOrigin = 'Anonymous'
img1a.src = bg.start1

img1b.onload = () => (texture1b.image = img1b)
img1b.crossOrigin = 'Anonymous'
img1b.src = bg.end1

img2a.onload = () => (texture2a.image = img2a)
img2a.crossOrigin = 'Anonymous'
img2a.src = bg.start2

img2b.onload = () => (texture2b.image = img2b)
img2b.crossOrigin = 'Anonymous'
img2b.src = bg.end2


let a1, a2

const imageAspect = bg.height / bg.width

if (window.innerHeight / window.innerWidth < imageAspect) {

  a1 = 1
  a2 = window.innerHeight / window.innerWidth / imageAspect

}
else {

  a1 =
    (window.innerWidth / window.innerHeight) *
    imageAspect
  a2 = 1

}

const program = new Program(gl, {
  vertex,
  fragment,
  uniforms: {
    uTime: {
      value: 0
    },
    tPaintStart: {
      value: texture1a
    },
    tPaintEnd: {
      value: texture1b
    },
    res: {
      value: new Vec4(
        window.innerWidth, window.innerHeight, a1, a2
      )
    },
    img: {
      value: new Vec2(bg.height, bg.width)
    },

    // Note that the uniform is applied without using an
    // object and value property. This is because the class
    // alternates this texture between two render targets
    // and updates the value property after each render.
    tFlow: flowmap.uniform
  }
})

const mesh = new Mesh(gl, {
  geometry,
  program
})

window.addEventListener('resize', resize, false)

resize()

// Create handlers to get mouse position and velocity
const isTouchCapable = 'ontouchstart' in window

if (isTouchCapable) {

  window.addEventListener('touchstart', updateMouse, false)
  window.addEventListener('touchmove', updateMouse, {
    passive: false
  })

}
else {

  window.addEventListener('mousemove', updateMouse, false)

}

let lastTime
const lastMouse = new Vec2()

function updateMouse(e) {

  e.preventDefault()
  if (e.changedTouches && e.changedTouches.length) {

    e.x = e.changedTouches[0].pageX
    e.y = e.changedTouches[0].pageY

  }
  if (e.x === undefined) {

    e.x = e.pageX
    e.y = e.pageY

  }

  // Get mouse value in 0 to 1 range, with y flipped
  mouse.set(
    e.x / gl.renderer.width, 1.0 - e.y / gl.renderer.height
  )

  // Calculate velocity
  if (!lastTime) {

    // First frame
    lastTime = performance.now()
    lastMouse.set(e.x, e.y)

  }

  const deltaX = e.x - lastMouse.x
  const deltaY = e.y - lastMouse.y

  lastMouse.set(e.x, e.y)

  let time = performance.now()

  // Avoid dividing by 0
  let delta = Math.max(10.4, time - lastTime)
  lastTime = time
  velocity.x = deltaX / delta
  velocity.y = deltaY / delta

  // Flag update to prevent hanging velocity values when not
  // moving

  velocity.needsUpdate = true

}

requestAnimationFrame(update)

window.themeSwitch = theme => {

  if (theme === 'light') {

    mesh.program.uniforms.tPaintStart.value = texture2a
    mesh.program.uniforms.tPaintEnd.value = texture2b

  }
  else {

    mesh.program.uniforms.tPaintStart.value = texture1a
    mesh.program.uniforms.tPaintEnd.value = texture1b

  }

}

function update(t) {

  requestAnimationFrame(update)
  // Reset velocity when mouse not moving
  if (!velocity.needsUpdate) {

    mouse.set(-1)
    velocity.set(0)

  }
  velocity.needsUpdate = false

  // Update flowmap inputs
  flowmap.aspect = aspect
  flowmap.mouse.copy(mouse)

  // Ease velocity input, slower when fading out
  flowmap.velocity.lerp(velocity, velocity.len ? 0.15 : 0.1)
  flowmap.update()
  program.uniforms.uTime.value = t * 0.01
  renderer.render({
    scene: mesh
  })

}
