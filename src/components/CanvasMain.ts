/*
 *  Components - Canvas Transition
 */

import {
  Flowmap,
  Geometry,
  Mesh,
  Post,
  Program,
  Renderer,
  Texture,
  Vec2,
  Vec4,
} from "ogl";

import { LitElement, html, css } from "lit";

import { customElement, property } from "lit/decorators.js";

@customElement("c-canvas-main")
export class CCanvasMain extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: absolute;
    }
  `;

  @property({ type: String })
  theme = "";

  @property({ type: Array })
  darkImages = [
    "/images/Hero-Paint-1-Dark.jpg",
    "/images/Hero-Paint-2-Dark.jpg",
  ];

  @property({ type: Array })
  lightImages = [
    "/images/Hero-Paint-1-Light.jpg",
    "/images/Hero-Paint-2-Light.jpg",
  ];

  updated() {
    const vertex = `
        attribute vec2 uv;
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = vec4(position, 0, 1);
        }
      `;

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
      `;

    const fragmentPost = `
        #define DELTA 0.00001
        #define TAU 6.28318530718
        #define NOISE_TEXTURE_SIZE 256.0
        #define NOISE_TEXTURE_PIXEL_COUNT (NOISE_TEXTURE_SIZE * NOISE_TEXTURE_SIZE)

        varying vec2 v_vTexcoord;
        varying vec4 v_vColour;

        // MAIN CONTROLLER UNIFORMS
        uniform float intensity;       // overall effect intensity, 0-1 (no upper limit)
        uniform float time;            // global timer variable
        uniform vec2  resolution;      // screen resolution
        uniform float rngSeed;         // seed offset (changes configuration around)
        uniform vec3  randomValues;    // random values changing every frame, passed in by the CPU
        uniform sampler2D noiseTexture;// noise texture sampler

        //TUNING
        uniform float lineSpeed;       // line speed
        uniform float lineDrift;       // horizontal line drifting
        uniform float lineResolution;  // line resolution
        uniform float lineVertShift;   // wave phase offset of horizontal lines
        uniform float lineShift;       // horizontal shift
        uniform float jumbleness;      // amount of "block" glitchiness
        uniform float jumbleResolution;// resolution of blocks
        uniform float jumbleShift;     // texture shift by blocks
        uniform float jumbleSpeed;     // speed of block variation
        uniform float dispersion;      // color channel horizontal dispersion
        uniform float channelShift;    // horizontal RGB shift
        uniform float noiseLevel;      // level of noise
        uniform float shakiness;       // horizontal shakiness
        //

        vec4 extractRed(vec4 col){
            return vec4(col.r, 0., 0., col.a);
        }

        vec4 extractGreen(vec4 col){
            return vec4(0., col.g, 0., col.a);
        }

        vec4 extractBlue(vec4 col){
            return vec4(0., 0., col.b, col.a);
        }

        // Replacement for the mirror address mode, hopefully nobody needs filtering.
        vec2 mirror(vec2 v) {
            return abs((fract((v * 0.5) + 0.5) * 2.0) - 1.0);
        }

        vec2 downsample(vec2 v, vec2 res) {
            // Division by zero protected by uniform getters.
            return floor(v * res) / res;
        }

        // Fetches four random values from an RGBA noise texture
        vec4 whiteNoise(vec2 coord, vec2 texelOffset) {
            vec2 offset = downsample(vec2(rngSeed * NOISE_TEXTURE_SIZE, rngSeed) + texelOffset, vec2(NOISE_TEXTURE_SIZE));
            vec2 ratio = resolution / vec2(NOISE_TEXTURE_SIZE);
            return texture2D(noiseTexture, (coord * ratio) + offset);
        }

        // Fetch noise texture texel based on single offset in the [0-1] range
        vec4 random(float dataOffset) {
            vec2 halfTexelSize = vec2((0.5 / NOISE_TEXTURE_SIZE));
            float offset = rngSeed + dataOffset;
            return texture2D(noiseTexture, vec2(offset * NOISE_TEXTURE_SIZE, offset) + halfTexelSize);
        }

        // Jumble coord generation
        vec2 jumble(vec2 coord){
            // Static branch.
            if ((jumbleShift * jumbleness * jumbleResolution) < DELTA) {
                return vec2(0.0);
            }

            vec2 gridCoords = (coord * jumbleResolution) / (NOISE_TEXTURE_SIZE * 0.0245);
            float jumbleTime = mod(floor(time * 0.02 * jumbleSpeed), NOISE_TEXTURE_PIXEL_COUNT);
            vec2 offset = random(jumbleTime / NOISE_TEXTURE_PIXEL_COUNT).ga * jumbleResolution;
            vec4 cellRandomValues = whiteNoise(gridCoords, vec2(jumbleResolution * -10.0) + offset);
            return (cellRandomValues.ra - 0.5) * jumbleShift * floor(min(0.99999, cellRandomValues.b) + jumbleness);
        }

        // Horizontal line offset generation
        float lineOffset(vec2 coord) {
            // Static branch.
            if (lineShift < DELTA) {
                return 0.0;
            }

            // Wave offsets
            vec2 waveHeights = vec2(50.0 * lineResolution, 25.0 * lineResolution);
            vec4 lineRandom = whiteNoise(downsample(v_vTexcoord.yy, waveHeights), vec2(0.0));
            float driftTime = v_vTexcoord.y * resolution.y * 2.778;

            // XY: big waves, ZW: drift waves
            vec4 waveTimes = (vec4(downsample(lineRandom.ra * TAU, waveHeights) * 80.0, driftTime + 2.0, (driftTime * 0.1) + 1.0) + (time * lineSpeed)) + (lineVertShift * TAU);
            vec4 waveLineOffsets = vec4(sin(waveTimes.x), cos(waveTimes.y), sin(waveTimes.z), cos(waveTimes.w));
            waveLineOffsets.xy *= ((whiteNoise(waveTimes.xy, vec2(0.0)).gb - 0.5) * shakiness) + 1.0;
            waveLineOffsets.zw *= lineDrift;
            return dot(waveLineOffsets, vec4(1.0));
        }

        void main()
        {
            // Sample random high-frequency noise
            vec4 randomHiFreq = whiteNoise(v_vTexcoord, randomValues.xy);

            // Apply line offsets
            vec2 offsetCoords = v_vTexcoord;
            offsetCoords.x += ((((2.0 * randomValues.z) - 1.0) * shakiness * lineSpeed) + lineOffset(offsetCoords)) * lineShift * intensity;

            // Apply jumbles
            offsetCoords += jumble(offsetCoords) * intensity * intensity * 0.25;

            // Channel split
            vec2 shiftFactors = (channelShift + (randomHiFreq.rg * dispersion)) * intensity;
            vec4 outColour;

            // Static branch.
            if (((channelShift + dispersion) * intensity) < DELTA) {
                outColour = texture2D(gm_BaseTexture, mirror(offsetCoords));
            } else {
                outColour = extractRed(texture2D(gm_BaseTexture, mirror(offsetCoords + vec2(shiftFactors.r, 0.0)))) + extractBlue(texture2D(gm_BaseTexture, mirror(offsetCoords + vec2(-shiftFactors.g, 0.0)))) + extractGreen(texture2D(gm_BaseTexture, mirror(offsetCoords)));
            }

            // Add noise
            outColour.rgb *= (vec3(.55, .5, .4) * randomHiFreq.gab * intensity * noiseLevel) + 1.0;

            gl_FragColor = v_vColour * outColour;
        }
      `;

    const bg = {
      start1: "/images/Hero-Paint-1-Dark.jpg",
      end1: "/images/Hero-Paint-2-Dark.jpg",
      start2: "/images/Hero-Paint-1-Light.jpg",
      end2: "/images/Hero-Paint-2-Light.jpg",
      width: 1600,
      height: 1080,
    };

    const wrapper = this;

    const renderer = new Renderer({
      dpr: 2,
    });

    const gl = renderer.gl;

    const post = new Post(gl);

    wrapper.innerHTML = "";
    wrapper.appendChild(gl.canvas);

    // Variable inputs to control flowmap
    let aspect = 1;
    const mouse = new Vec2(-1);
    const velocity = new Vec2();
    let updateVelocity: boolean;

    function resize() {
      let a1, a2;

      const imageAspect = bg.height / bg.width;

      if (window.innerHeight / window.innerWidth < imageAspect) {
        a1 = 1;
        a2 = window.innerHeight / window.innerWidth / imageAspect;
      } else {
        a1 = (window.innerWidth / window.innerHeight) * imageAspect;
        a2 = 1;
      }
      mesh.program.uniforms.res.value = new Vec4(
        window.innerWidth,
        window.innerHeight,
        a1,
        a2
      );

      renderer.setSize(window.innerWidth, window.innerHeight);
      aspect = window.innerWidth / window.innerHeight;
    }

    const flowmap = new Flowmap(gl, {
      size: 8,
      falloff: 0.25,
      dissipation: 0.95,
      alpha: 0.68,
    });

    // Triangle that includes -1 to 1 range for 'position',
    // 0 to 1 range for 'uv'.
    const geometry = new Geometry(gl, {
      position: {
        size: 2,
        data: new Float32Array([-1, -1, 3, -1, -1, 3]),
      },
      uv: {
        size: 2,
        data: new Float32Array([0, 0, 2, 0, 0, 2]),
      },
    });

    const texture1a = new Texture(gl, {
      minFilter: gl.LINEAR,
      magFilter: gl.LINEAR,
    });

    const texture1b = new Texture(gl, {
      minFilter: gl.LINEAR,
      magFilter: gl.LINEAR,
    });

    const texture2a = new Texture(gl, {
      minFilter: gl.LINEAR,
      magFilter: gl.LINEAR,
    });

    const texture2b = new Texture(gl, {
      minFilter: gl.LINEAR,
      magFilter: gl.LINEAR,
    });

    const img1a = new Image();
    const img1b = new Image();
    const img2a = new Image();
    const img2b = new Image();

    img1a.onload = () => (texture1a.image = img1a);
    img1a.crossOrigin = "Anonymous";
    img1a.src = bg.start1;

    img1b.onload = () => (texture1b.image = img1b);
    img1b.crossOrigin = "Anonymous";
    img1b.src = bg.end1;

    img2a.onload = () => (texture2a.image = img2a);
    img2a.crossOrigin = "Anonymous";
    img2a.src = bg.start2;

    img2b.onload = () => (texture2b.image = img2b);
    img2b.crossOrigin = "Anonymous";
    img2b.src = bg.end2;

    let a1, a2;

    const imageAspect = bg.height / bg.width;

    if (window.innerHeight / window.innerWidth < imageAspect) {
      a1 = 1;
      a2 = window.innerHeight / window.innerWidth / imageAspect;
    } else {
      a1 = (window.innerWidth / window.innerHeight) * imageAspect;
      a2 = 1;
    }

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: {
          value: 0,
        },
        tPaintStart: {
          value: texture1a,
        },
        tPaintEnd: {
          value: texture1b,
        },
        res: {
          value: new Vec4(window.innerWidth, window.innerHeight, a1, a2),
        },
        img: {
          value: new Vec2(bg.height, bg.width),
        },

        // Note that the uniform is applied without using an
        // object and value property. Because the class
        // alternates this texture between two render targets
        // and updates the value property after each render.
        tFlow: flowmap.uniform,
      },
    });

    const pass = post.addPass({
      // If not passed in, pass will use the default
      // vertex/fragment shaders found within the class.
      textureUniform: fragmentPost,
      uniforms: {},
    });

    const mesh = new Mesh(gl, {
      geometry,
      program,
    });

    window.addEventListener("resize", resize, false);

    resize();

    // Create handlers to get mouse position and velocity
    const isTouchCapable = "ontouchstart" in window;

    if (isTouchCapable) {
      window.addEventListener("touchstart", updateMouse, false);
      window.addEventListener("touchmove", updateMouse, {
        passive: false,
      });
    } else {
      window.addEventListener("mousemove", updateMouse, false);
    }

    let lastTime: number;
    const lastMouse = new Vec2();

    function updateMouse(e: any) {
      if (
        e.target.tagName.toLowerCase() === "canvas" ||
        e.target.hasAttribute("data-scrambler")
      ) {
        e.preventDefault();

        if (e.changedTouches && e.changedTouches.length) {
          e.x = e.changedTouches[0].pageX;
          e.y = e.changedTouches[0].pageY;
        }
        if (e.x === undefined) {
          e.x = e.pageX;
          e.y = e.pageY;
        }

        // Get mouse value in 0 to 1 range, with y flipped
        mouse.set(e.x / gl.renderer.width, 1.0 - e.y / gl.renderer.height);

        // Calculate velocity
        if (!lastTime) {
          // First frame
          lastTime = performance.now();
          lastMouse.set(e.x, e.y);
        }

        const deltaX = e.x - lastMouse.x;
        const deltaY = e.y - lastMouse.y;

        lastMouse.set(e.x, e.y);

        let time = performance.now();

        // Avoid dividing by 0
        let delta = Math.max(10.4, time - lastTime);
        lastTime = time;
        velocity.x = deltaX / delta;
        velocity.y = deltaY / delta;

        // Flag update to prevent hanging velocity values when
        // not moving

        updateVelocity = true;
      }
    }

    requestAnimationFrame(update);

    const themeSwitch = () => {
      const theme = document.body.dataset.theme;

      if (theme === "light") {
        mesh.program.uniforms.tPaintStart.value = texture2a;
        mesh.program.uniforms.tPaintEnd.value = texture2b;
      } else {
        mesh.program.uniforms.tPaintStart.value = texture1a;
        mesh.program.uniforms.tPaintEnd.value = texture1b;
      }
    };

    setTimeout(themeSwitch, 200);

    window.addEventListener("themeChange", themeSwitch);

    function update(t: number) {
      requestAnimationFrame(update);
      // Reset velocity when mouse not moving
      if (!updateVelocity) {
        mouse.set(-1);
        velocity.set(0);
      }
      updateVelocity = false;

      // Update flowmap inputs
      flowmap.aspect = aspect;
      flowmap.mouse.copy(mouse);

      // Ease velocity input, slower when fading out
      flowmap.velocity.lerp(velocity, velocity.len() ? 0.15 : 0.1);
      flowmap.update();
      program.uniforms.uTime.value = t * 0.01;
      renderer.render({
        scene: mesh,
      });
    }
  }

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "c-canvas-main": CCanvasMain;
  }
}
