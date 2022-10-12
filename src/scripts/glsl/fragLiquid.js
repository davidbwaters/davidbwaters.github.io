/*
 *  Fragment - Liquid
 */

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

export default fragment
