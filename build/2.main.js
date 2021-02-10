/*! For license information please see 2.main.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[function(t,e,i){"use strict";i.d(e,"a",(function(){return y})),i.d(e,"b",(function(){return _})),i.d(e,"c",(function(){return o})),i.d(e,"d",(function(){return N})),i.d(e,"e",(function(){return s})),i.d(e,"f",(function(){return R})),i.d(e,"g",(function(){return a})),i.d(e,"h",(function(){return k})),i.d(e,"i",(function(){return h}));i(58);const n=[];for(let t=0;t<256;t++)n[t]=(t<16?"0":"")+t.toString(16);let r=1234567;const o={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const t=4294967295*Math.random()|0,e=4294967295*Math.random()|0,i=4294967295*Math.random()|0,r=4294967295*Math.random()|0;return(n[255&t]+n[t>>8&255]+n[t>>16&255]+n[t>>24&255]+"-"+n[255&e]+n[e>>8&255]+"-"+n[e>>16&15|64]+n[e>>24&255]+"-"+n[63&i|128]+n[i>>8&255]+"-"+n[i>>16&255]+n[i>>24&255]+n[255&r]+n[r>>8&255]+n[r>>16&255]+n[r>>24&255]).toUpperCase()},clamp:function(t,e,i){return Math.max(e,Math.min(i,t))},euclideanModulo:function(t,e){return(t%e+e)%e},mapLinear:function(t,e,i,n,r){return n+(t-e)*(r-n)/(i-e)},lerp:function(t,e,i){return(1-i)*t+i*e},damp:function(t,e,i,n){return o.lerp(t,e,1-Math.exp(-i*n))},pingpong:function(t,e=1){return e-Math.abs(o.euclideanModulo(t,2*e)-e)},smoothstep:function(t,e,i){return t<=e?0:t>=i?1:(t=(t-e)/(i-e))*t*(3-2*t)},smootherstep:function(t,e,i){return t<=e?0:t>=i?1:(t=(t-e)/(i-e))*t*t*(t*(6*t-15)+10)},randInt:function(t,e){return t+Math.floor(Math.random()*(e-t+1))},randFloat:function(t,e){return t+Math.random()*(e-t)},randFloatSpread:function(t){return t*(.5-Math.random())},seededRandom:function(t){return void 0!==t&&(r=t%2147483647),r=16807*r%2147483647,(r-1)/2147483646},degToRad:function(t){return t*o.DEG2RAD},radToDeg:function(t){return t*o.RAD2DEG},isPowerOfTwo:function(t){return 0==(t&t-1)&&0!==t},ceilPowerOfTwo:function(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))},floorPowerOfTwo:function(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))},setQuaternionFromProperEuler:function(t,e,i,n,r){const o=Math.cos,s=Math.sin,a=o(i/2),l=s(i/2),c=o((e+n)/2),h=s((e+n)/2),u=o((e-n)/2),d=s((e-n)/2),g=o((n-e)/2),p=s((n-e)/2);switch(r){case"XYX":t.set(a*h,l*u,l*d,a*c);break;case"YZY":t.set(l*d,a*h,l*u,a*c);break;case"ZXZ":t.set(l*u,l*d,a*h,a*c);break;case"XZX":t.set(a*h,l*p,l*g,a*c);break;case"YXY":t.set(l*g,a*h,l*p,a*c);break;case"ZYZ":t.set(l*p,l*g,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}};class s{constructor(t=0,e=0,i=0,n=1){Object.defineProperty(this,"isQuaternion",{value:!0}),this._x=t,this._y=e,this._z=i,this._w=n}static slerp(t,e,i,n){return i.copy(t).slerp(e,n)}static slerpFlat(t,e,i,n,r,o,s){let a=i[n+0],l=i[n+1],c=i[n+2],h=i[n+3];const u=r[o+0],d=r[o+1],g=r[o+2],p=r[o+3];if(h!==p||a!==u||l!==d||c!==g){let t=1-s;const e=a*u+l*d+c*g+h*p,i=e>=0?1:-1,n=1-e*e;if(n>Number.EPSILON){const r=Math.sqrt(n),o=Math.atan2(r,e*i);t=Math.sin(t*o)/r,s=Math.sin(s*o)/r}const r=s*i;if(a=a*t+u*r,l=l*t+d*r,c=c*t+g*r,h=h*t+p*r,t===1-s){const t=1/Math.sqrt(a*a+l*l+c*c+h*h);a*=t,l*=t,c*=t,h*=t}}t[e]=a,t[e+1]=l,t[e+2]=c,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,n,r,o){const s=i[n],a=i[n+1],l=i[n+2],c=i[n+3],h=r[o],u=r[o+1],d=r[o+2],g=r[o+3];return t[e]=s*g+c*h+a*d-l*u,t[e+1]=a*g+c*u+l*h-s*d,t[e+2]=l*g+c*d+s*u-a*h,t[e+3]=c*g-s*h-a*u-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!t||!t.isEuler)throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const i=t._x,n=t._y,r=t._z,o=t._order,s=Math.cos,a=Math.sin,l=s(i/2),c=s(n/2),h=s(r/2),u=a(i/2),d=a(n/2),g=a(r/2);switch(o){case"XYZ":this._x=u*c*h+l*d*g,this._y=l*d*h-u*c*g,this._z=l*c*g+u*d*h,this._w=l*c*h-u*d*g;break;case"YXZ":this._x=u*c*h+l*d*g,this._y=l*d*h-u*c*g,this._z=l*c*g-u*d*h,this._w=l*c*h+u*d*g;break;case"ZXY":this._x=u*c*h-l*d*g,this._y=l*d*h+u*c*g,this._z=l*c*g+u*d*h,this._w=l*c*h-u*d*g;break;case"ZYX":this._x=u*c*h-l*d*g,this._y=l*d*h+u*c*g,this._z=l*c*g-u*d*h,this._w=l*c*h+u*d*g;break;case"YZX":this._x=u*c*h+l*d*g,this._y=l*d*h+u*c*g,this._z=l*c*g-u*d*h,this._w=l*c*h-u*d*g;break;case"XZY":this._x=u*c*h-l*d*g,this._y=l*d*h-u*c*g,this._z=l*c*g+u*d*h,this._w=l*c*h+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return!1!==e&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],s=e[5],a=e[9],l=e[2],c=e[6],h=e[10],u=i+s+h;if(u>0){const t=.5/Math.sqrt(u+1);this._w=.25/t,this._x=(c-a)*t,this._y=(r-l)*t,this._z=(o-n)*t}else if(i>s&&i>h){const t=2*Math.sqrt(1+i-s-h);this._w=(c-a)/t,this._x=.25*t,this._y=(n+o)/t,this._z=(r+l)/t}else if(s>h){const t=2*Math.sqrt(1+s-i-h);this._w=(r-l)/t,this._x=(n+o)/t,this._y=.25*t,this._z=(a+c)/t}else{const t=2*Math.sqrt(1+h-i-s);this._w=(o-n)/t,this._x=(r+l)/t,this._y=(a+c)/t,this._z=.25*t}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-6?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(o.clamp(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(0===i)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return 0===t?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return void 0!==e?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,o=t._w,s=e._x,a=e._y,l=e._z,c=e._w;return this._x=i*c+o*s+n*l-r*a,this._y=n*c+o*a+r*s-i*l,this._z=r*c+o*l+i*a-n*s,this._w=o*c-i*s-n*a-r*l,this._onChangeCallback(),this}slerp(t,e){if(0===e)return this;if(1===e)return this.copy(t);const i=this._x,n=this._y,r=this._z,o=this._w;let s=o*t._w+i*t._x+n*t._y+r*t._z;if(s<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,s=-s):this.copy(t),s>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const a=1-s*s;if(a<=Number.EPSILON){const t=1-e;return this._w=t*o+e*this._w,this._x=t*i+e*this._x,this._y=t*n+e*this._y,this._z=t*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(a),c=Math.atan2(l,s),h=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l;return this._w=o*h+this._w*u,this._x=i*h+this._x*u,this._y=n*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}class a{constructor(t=0,e=0,i=0){Object.defineProperty(this,"isVector3",{value:!0}),this.x=t,this.y=e,this.z=i}set(t,e,i){return void 0===i&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return void 0!==e?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return void 0!==e?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return void 0!==e?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(c.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(c.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,s=t.z,a=t.w,l=a*e+o*n-s*i,c=a*i+s*e-r*n,h=a*n+r*i-o*e,u=-r*e-o*i-s*n;return this.x=l*a+u*-r+c*-s-h*-o,this.y=c*a+u*-o+h*-r-l*-s,this.z=h*a+u*-s+l*-o-c*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t,e){return void 0!==e?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,o=e.x,s=e.y,a=e.z;return this.x=n*a-r*s,this.y=r*o-i*a,this.z=i*s-n*o,this}projectOnVector(t){const e=t.lengthSq();if(0===e)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return l.copy(this).projectOnVector(t),this.sub(l)}reflect(t){return this.sub(l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(0===e)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(o.clamp(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,4*e)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,3*e)}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,i){return void 0!==i&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}}const l=new a,c=new s;class h{constructor(){Object.defineProperty(this,"isMatrix4",{value:!0}),this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,i,n,r,o,s,a,l,c,h,u,d,g,p,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=n,m[1]=r,m[5]=o,m[9]=s,m[13]=a,m[2]=l,m[6]=c,m[10]=h,m[14]=u,m[3]=d,m[7]=g,m[11]=p,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return(new h).fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/u.setFromMatrixColumn(t,0).length(),r=1/u.setFromMatrixColumn(t,1).length(),o=1/u.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),s=Math.sin(i),a=Math.cos(n),l=Math.sin(n),c=Math.cos(r),h=Math.sin(r);if("XYZ"===t.order){const t=o*c,i=o*h,n=s*c,r=s*h;e[0]=a*c,e[4]=-a*h,e[8]=l,e[1]=i+n*l,e[5]=t-r*l,e[9]=-s*a,e[2]=r-t*l,e[6]=n+i*l,e[10]=o*a}else if("YXZ"===t.order){const t=a*c,i=a*h,n=l*c,r=l*h;e[0]=t+r*s,e[4]=n*s-i,e[8]=o*l,e[1]=o*h,e[5]=o*c,e[9]=-s,e[2]=i*s-n,e[6]=r+t*s,e[10]=o*a}else if("ZXY"===t.order){const t=a*c,i=a*h,n=l*c,r=l*h;e[0]=t-r*s,e[4]=-o*h,e[8]=n+i*s,e[1]=i+n*s,e[5]=o*c,e[9]=r-t*s,e[2]=-o*l,e[6]=s,e[10]=o*a}else if("ZYX"===t.order){const t=o*c,i=o*h,n=s*c,r=s*h;e[0]=a*c,e[4]=n*l-i,e[8]=t*l+r,e[1]=a*h,e[5]=r*l+t,e[9]=i*l-n,e[2]=-l,e[6]=s*a,e[10]=o*a}else if("YZX"===t.order){const t=o*a,i=o*l,n=s*a,r=s*l;e[0]=a*c,e[4]=r-t*h,e[8]=n*h+i,e[1]=h,e[5]=o*c,e[9]=-s*c,e[2]=-l*c,e[6]=i*h+n,e[10]=t-r*h}else if("XZY"===t.order){const t=o*a,i=o*l,n=s*a,r=s*l;e[0]=a*c,e[4]=-h,e[8]=l*c,e[1]=t*h+r,e[5]=o*c,e[9]=i*h-n,e[2]=n*h-i,e[6]=s*c,e[10]=r*h+t}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(g,t,p)}lookAt(t,e,i){const n=this.elements;return v.subVectors(t,e),0===v.lengthSq()&&(v.z=1),v.normalize(),f.crossVectors(i,v),0===f.lengthSq()&&(1===Math.abs(i.z)?v.x+=1e-4:v.z+=1e-4,v.normalize(),f.crossVectors(i,v)),f.normalize(),m.crossVectors(v,f),n[0]=f.x,n[4]=m.x,n[8]=v.x,n[1]=f.y,n[5]=m.y,n[9]=v.y,n[2]=f.z,n[6]=m.z,n[10]=v.z,this}multiply(t,e){return void 0!==e?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],s=i[4],a=i[8],l=i[12],c=i[1],h=i[5],u=i[9],d=i[13],g=i[2],p=i[6],f=i[10],m=i[14],v=i[3],y=i[7],b=i[11],x=i[15],w=n[0],_=n[4],k=n[8],S=n[12],E=n[1],M=n[5],A=n[9],z=n[13],T=n[2],C=n[6],O=n[10],L=n[14],P=n[3],D=n[7],I=n[11],j=n[15];return r[0]=o*w+s*E+a*T+l*P,r[4]=o*_+s*M+a*C+l*D,r[8]=o*k+s*A+a*O+l*I,r[12]=o*S+s*z+a*L+l*j,r[1]=c*w+h*E+u*T+d*P,r[5]=c*_+h*M+u*C+d*D,r[9]=c*k+h*A+u*O+d*I,r[13]=c*S+h*z+u*L+d*j,r[2]=g*w+p*E+f*T+m*P,r[6]=g*_+p*M+f*C+m*D,r[10]=g*k+p*A+f*O+m*I,r[14]=g*S+p*z+f*L+m*j,r[3]=v*w+y*E+b*T+x*P,r[7]=v*_+y*M+b*C+x*D,r[11]=v*k+y*A+b*O+x*I,r[15]=v*S+y*z+b*L+x*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],s=t[5],a=t[9],l=t[13],c=t[2],h=t[6],u=t[10],d=t[14];return t[3]*(+r*a*h-n*l*h-r*s*u+i*l*u+n*s*d-i*a*d)+t[7]*(+e*a*d-e*l*u+r*o*u-n*o*d+n*l*c-r*a*c)+t[11]*(+e*l*h-e*s*d-r*o*h+i*o*d+r*s*c-i*l*c)+t[15]*(-n*s*c-e*a*h+e*s*u+n*o*h-i*o*u+i*a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],s=t[5],a=t[6],l=t[7],c=t[8],h=t[9],u=t[10],d=t[11],g=t[12],p=t[13],f=t[14],m=t[15],v=h*f*l-p*u*l+p*a*d-s*f*d-h*a*m+s*u*m,y=g*u*l-c*f*l-g*a*d+o*f*d+c*a*m-o*u*m,b=c*p*l-g*h*l+g*s*d-o*p*d-c*s*m+o*h*m,x=g*h*a-c*p*a-g*s*u+o*p*u+c*s*f-o*h*f,w=e*v+i*y+n*b+r*x;if(0===w)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const _=1/w;return t[0]=v*_,t[1]=(p*u*r-h*f*r-p*n*d+i*f*d+h*n*m-i*u*m)*_,t[2]=(s*f*r-p*a*r+p*n*l-i*f*l-s*n*m+i*a*m)*_,t[3]=(h*a*r-s*u*r-h*n*l+i*u*l+s*n*d-i*a*d)*_,t[4]=y*_,t[5]=(c*f*r-g*u*r+g*n*d-e*f*d-c*n*m+e*u*m)*_,t[6]=(g*a*r-o*f*r-g*n*l+e*f*l+o*n*m-e*a*m)*_,t[7]=(o*u*r-c*a*r+c*n*l-e*u*l-o*n*d+e*a*d)*_,t[8]=b*_,t[9]=(g*h*r-c*p*r-g*i*d+e*p*d+c*i*m-e*h*m)*_,t[10]=(o*p*r-g*s*r+g*i*l-e*p*l-o*i*m+e*s*m)*_,t[11]=(c*s*r-o*h*r-c*i*l+e*h*l+o*i*d-e*s*d)*_,t[12]=x*_,t[13]=(c*p*n-g*h*n+g*i*u-e*p*u-c*i*f+e*h*f)*_,t[14]=(g*s*n-o*p*n-g*i*a+e*p*a+o*i*f-e*s*f)*_,t[15]=(o*h*n-c*s*n+c*i*a-e*h*a-o*i*u+e*s*u)*_,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,s=t.y,a=t.z,l=r*o,c=r*s;return this.set(l*o+i,l*s-n*a,l*a+n*s,0,l*s+n*a,c*s+i,c*a-n*o,0,l*a-n*s,c*a+n*o,r*a*a+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i){return this.set(1,e,i,0,t,1,i,0,t,e,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,o=e._y,s=e._z,a=e._w,l=r+r,c=o+o,h=s+s,u=r*l,d=r*c,g=r*h,p=o*c,f=o*h,m=s*h,v=a*l,y=a*c,b=a*h,x=i.x,w=i.y,_=i.z;return n[0]=(1-(p+m))*x,n[1]=(d+b)*x,n[2]=(g-y)*x,n[3]=0,n[4]=(d-b)*w,n[5]=(1-(u+m))*w,n[6]=(f+v)*w,n[7]=0,n[8]=(g+y)*_,n[9]=(f-v)*_,n[10]=(1-(u+p))*_,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=u.set(n[0],n[1],n[2]).length();const o=u.set(n[4],n[5],n[6]).length(),s=u.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],d.copy(this);const a=1/r,l=1/o,c=1/s;return d.elements[0]*=a,d.elements[1]*=a,d.elements[2]*=a,d.elements[4]*=l,d.elements[5]*=l,d.elements[6]*=l,d.elements[8]*=c,d.elements[9]*=c,d.elements[10]*=c,e.setFromRotationMatrix(d),i.x=r,i.y=o,i.z=s,this}makePerspective(t,e,i,n,r,o){void 0===o&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const s=this.elements,a=2*r/(e-t),l=2*r/(i-n),c=(e+t)/(e-t),h=(i+n)/(i-n),u=-(o+r)/(o-r),d=-2*o*r/(o-r);return s[0]=a,s[4]=0,s[8]=c,s[12]=0,s[1]=0,s[5]=l,s[9]=h,s[13]=0,s[2]=0,s[6]=0,s[10]=u,s[14]=d,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(t,e,i,n,r,o){const s=this.elements,a=1/(e-t),l=1/(i-n),c=1/(o-r),h=(e+t)*a,u=(i+n)*l,d=(o+r)*c;return s[0]=2*a,s[4]=0,s[8]=0,s[12]=-h,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-u,s[2]=0,s[6]=0,s[10]=-2*c,s[14]=-d,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let t=0;t<16;t++)if(e[t]!==i[t])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const u=new a,d=new h,g=new a(0,0,0),p=new a(1,1,1),f=new a,m=new a,v=new a;function y(){}Object.assign(y.prototype,{addEventListener:function(t,e){void 0===this._listeners&&(this._listeners={});const i=this._listeners;void 0===i[t]&&(i[t]=[]),-1===i[t].indexOf(e)&&i[t].push(e)},hasEventListener:function(t,e){if(void 0===this._listeners)return!1;const i=this._listeners;return void 0!==i[t]&&-1!==i[t].indexOf(e)},removeEventListener:function(t,e){if(void 0===this._listeners)return;const i=this._listeners[t];if(void 0!==i){const t=i.indexOf(e);-1!==t&&i.splice(t,1)}},dispatchEvent:function(t){if(void 0===this._listeners)return;const e=this._listeners[t.type];if(void 0!==e){t.target=this;const i=e.slice(0);for(let e=0,n=i.length;e<n;e++)i[e].call(this,t)}}});class b{constructor(t=0,e=0,i=0,n=b.DefaultOrder){Object.defineProperty(this,"isEuler",{value:!0}),this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._order=n||this._order,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e,i){const n=o.clamp,r=t.elements,s=r[0],a=r[4],l=r[8],c=r[1],h=r[5],u=r[9],d=r[2],g=r[6],p=r[10];switch(e=e||this._order){case"XYZ":this._y=Math.asin(n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-n(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(n(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-n(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(n(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,!1!==i&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return x.makeRotationFromQuaternion(t),this.setFromRotationMatrix(x,e,i)}setFromVector3(t,e){return this.set(t.x,t.y,t.z,e||this._order)}reorder(t){return w.setFromEuler(this),this.setFromQuaternion(w,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],void 0!==t[3]&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}toVector3(t){return t?t.set(this._x,this._y,this._z):new a(this._x,this._y,this._z)}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}b.DefaultOrder="XYZ",b.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];const x=new h,w=new s;class _{constructor(){this.mask=1}set(t){this.mask=1<<t|0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return 0!=(this.mask&t.mask)}}class k{constructor(){Object.defineProperty(this,"isMatrix3",{value:!0}),this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,i,n,r,o,s,a,l){const c=this.elements;return c[0]=t,c[1]=n,c[2]=s,c[3]=e,c[4]=r,c[5]=a,c[6]=i,c[7]=o,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}clone(){return(new this.constructor).fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],s=i[3],a=i[6],l=i[1],c=i[4],h=i[7],u=i[2],d=i[5],g=i[8],p=n[0],f=n[3],m=n[6],v=n[1],y=n[4],b=n[7],x=n[2],w=n[5],_=n[8];return r[0]=o*p+s*v+a*x,r[3]=o*f+s*y+a*w,r[6]=o*m+s*b+a*_,r[1]=l*p+c*v+h*x,r[4]=l*f+c*y+h*w,r[7]=l*m+c*b+h*_,r[2]=u*p+d*v+g*x,r[5]=u*f+d*y+g*w,r[8]=u*m+d*b+g*_,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],s=t[5],a=t[6],l=t[7],c=t[8];return e*o*c-e*s*l-i*r*c+i*s*a+n*r*l-n*o*a}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],s=t[5],a=t[6],l=t[7],c=t[8],h=c*o-s*l,u=s*a-c*r,d=l*r-o*a,g=e*h+i*u+n*d;if(0===g)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return t[0]=h*p,t[1]=(n*l-c*i)*p,t[2]=(s*i-n*o)*p,t[3]=u*p,t[4]=(c*e-n*a)*p,t[5]=(n*r-s*e)*p,t[6]=d*p,t[7]=(i*a-l*e)*p,t[8]=(o*e-i*r)*p,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).copy(this).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,s){const a=Math.cos(r),l=Math.sin(r);return this.set(i*a,i*l,-i*(a*o+l*s)+o+t,-n*l,n*a,-n*(-l*o+a*s)+s+e,0,0,1),this}scale(t,e){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=e,i[4]*=e,i[7]*=e,this}rotate(t){const e=Math.cos(t),i=Math.sin(t),n=this.elements,r=n[0],o=n[3],s=n[6],a=n[1],l=n[4],c=n[7];return n[0]=e*r+i*a,n[3]=e*o+i*l,n[6]=e*s+i*c,n[1]=-i*r+e*a,n[4]=-i*o+e*l,n[7]=-i*s+e*c,this}translate(t,e){const i=this.elements;return i[0]+=t*i[2],i[3]+=t*i[5],i[6]+=t*i[8],i[1]+=e*i[2],i[4]+=e*i[5],i[7]+=e*i[8],this}equals(t){const e=this.elements,i=t.elements;for(let t=0;t<9;t++)if(e[t]!==i[t])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}}let S=0;const E=new a,M=new s,A=new h,z=new a,T=new a,C=new a,O=new s,L=new a(1,0,0),P=new a(0,1,0),D=new a(0,0,1),I={type:"added"},j={type:"removed"};function N(){Object.defineProperty(this,"id",{value:S++}),this.uuid=o.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=N.DefaultUp.clone();const t=new a,e=new b,i=new s,n=new a(1,1,1);e._onChange((function(){i.setFromEuler(e,!1)})),i._onChange((function(){e.setFromQuaternion(i,void 0,!1)})),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new h},normalMatrix:{value:new k}}),this.matrix=new h,this.matrixWorld=new h,this.matrixAutoUpdate=N.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new _,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}N.DefaultUp=new a(0,1,0),N.DefaultMatrixAutoUpdate=!0,N.prototype=Object.assign(Object.create(y.prototype),{constructor:N,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(t){return this.quaternion.premultiply(t),this},setRotationFromAxisAngle:function(t,e){this.quaternion.setFromAxisAngle(t,e)},setRotationFromEuler:function(t){this.quaternion.setFromEuler(t,!0)},setRotationFromMatrix:function(t){this.quaternion.setFromRotationMatrix(t)},setRotationFromQuaternion:function(t){this.quaternion.copy(t)},rotateOnAxis:function(t,e){return M.setFromAxisAngle(t,e),this.quaternion.multiply(M),this},rotateOnWorldAxis:function(t,e){return M.setFromAxisAngle(t,e),this.quaternion.premultiply(M),this},rotateX:function(t){return this.rotateOnAxis(L,t)},rotateY:function(t){return this.rotateOnAxis(P,t)},rotateZ:function(t){return this.rotateOnAxis(D,t)},translateOnAxis:function(t,e){return E.copy(t).applyQuaternion(this.quaternion),this.position.add(E.multiplyScalar(e)),this},translateX:function(t){return this.translateOnAxis(L,t)},translateY:function(t){return this.translateOnAxis(P,t)},translateZ:function(t){return this.translateOnAxis(D,t)},localToWorld:function(t){return t.applyMatrix4(this.matrixWorld)},worldToLocal:function(t){return t.applyMatrix4(A.copy(this.matrixWorld).invert())},lookAt:function(t,e,i){t.isVector3?z.copy(t):z.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),T.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?A.lookAt(T,z,this.up):A.lookAt(z,T,this.up),this.quaternion.setFromRotationMatrix(A),n&&(A.extractRotation(n.matrixWorld),M.setFromRotationMatrix(A),this.quaternion.premultiply(M.invert()))},add:function(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(null!==t.parent&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(I)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)},remove:function(t){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.remove(arguments[t]);return this}const e=this.children.indexOf(t);return-1!==e&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(j)),this},clear:function(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(j)}return this.children.length=0,this},attach:function(t){return this.updateWorldMatrix(!0,!1),A.copy(this.matrixWorld).invert(),null!==t.parent&&(t.parent.updateWorldMatrix(!0,!1),A.multiply(t.parent.matrixWorld)),t.applyMatrix4(A),t.updateWorldMatrix(!1,!1),this.add(t),this},getObjectById:function(t){return this.getObjectByProperty("id",t)},getObjectByName:function(t){return this.getObjectByProperty("name",t)},getObjectByProperty:function(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const n=this.children[i].getObjectByProperty(t,e);if(void 0!==n)return n}},getWorldPosition:function(t){return void 0===t&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),t=new a),this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(t){return void 0===t&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),t=new s),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(T,t,C),t},getWorldScale:function(t){return void 0===t&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),t=new a),this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(T,O,t),t},getWorldDirection:function(t){void 0===t&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),t=new a),this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()},raycast:function(){},traverse:function(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)},traverseVisible:function(t){if(!1===this.visible)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)},traverseAncestors:function(t){const e=this.parent;null!==e&&(t(e),e.traverseAncestors(t))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)},updateWorldMatrix:function(t,e){const i=this.parent;if(!0===t&&null!==i&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),!0===e){const t=this.children;for(let e=0,i=t.length;e<i;e++)t[e].updateWorldMatrix(!1,!0)}},toJSON:function(t){const e=void 0===t||"string"==typeof t,i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};function r(e,i){return void 0===e[i.uuid]&&(e[i.uuid]=i.toJSON(t)),i.uuid}if(n.uuid=this.uuid,n.type=this.type,""!==this.name&&(n.name=this.name),!0===this.castShadow&&(n.castShadow=!0),!0===this.receiveShadow&&(n.receiveShadow=!0),!1===this.visible&&(n.visible=!1),!1===this.frustumCulled&&(n.frustumCulled=!1),0!==this.renderOrder&&(n.renderOrder=this.renderOrder),"{}"!==JSON.stringify(this.userData)&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),!1===this.matrixAutoUpdate&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON()),this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const e=this.geometry.parameters;if(void 0!==e&&void 0!==e.shapes){const i=e.shapes;if(Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const n=i[e];r(t.shapes,n)}else r(t.shapes,i)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),void 0!==this.skeleton&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),void 0!==this.material)if(Array.isArray(this.material)){const e=[];for(let i=0,n=this.material.length;i<n;i++)e.push(r(t.materials,this.material[i]));n.material=e}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let e=0;e<this.children.length;e++)n.children.push(this.children[e].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let e=0;e<this.animations.length;e++){const i=this.animations[e];n.animations.push(r(t.animations,i))}}if(e){const e=o(t.geometries),n=o(t.materials),r=o(t.textures),s=o(t.images),a=o(t.shapes),l=o(t.skeletons),c=o(t.animations);e.length>0&&(i.geometries=e),n.length>0&&(i.materials=n),r.length>0&&(i.textures=r),s.length>0&&(i.images=s),a.length>0&&(i.shapes=a),l.length>0&&(i.skeletons=l),c.length>0&&(i.animations=c)}return i.object=n,i;function o(t){const e=[];for(const i in t){const n=t[i];delete n.metadata,e.push(n)}return e}},clone:function(t){return(new this.constructor).copy(this,t)},copy:function(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),!0===e)for(let e=0;e<t.children.length;e++){const i=t.children[e];this.add(i.clone())}return this}});class R extends N{constructor(){super(),Object.defineProperty(this,"isScene",{value:!0}),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,"undefined"!=typeof __THREE_DEVTOOLS__&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),null!==t.background&&(this.background=t.background.clone()),null!==t.environment&&(this.environment=t.environment.clone()),null!==t.fog&&(this.fog=t.fog.clone()),null!==t.overrideMaterial&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return null!==this.background&&(e.object.background=this.background.toJSON(t)),null!==this.environment&&(e.object.environment=this.environment.toJSON(t)),null!==this.fog&&(e.object.fog=this.fog.toJSON()),e}}},function(t,e,i){(function(e){var i=function(t){return t&&t.Math==Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,i(44))},function(t,e,i){var n=i(1),r=i(46),o=i(5),s=i(31),a=i(49),l=i(63),c=r("wks"),h=n.Symbol,u=l?h:h&&h.withoutSetter||s;t.exports=function(t){return o(c,t)||(a&&o(h,t)?c[t]=h[t]:c[t]=u("Symbol."+t)),c[t]}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,i){var n=i(8),r=i(9),o=i(23);t.exports=n?function(t,e,i){return r.f(t,e,o(1,i))}:function(t,e,i){return t[e]=i,t}},function(t,e){var i={}.hasOwnProperty;t.exports=function(t,e){return i.call(t,e)}},,function(t,e,i){var n=i(1),r=i(60),o=i(61),s=i(4),a=i(2),l=a("iterator"),c=a("toStringTag"),h=o.values;for(var u in r){var d=n[u],g=d&&d.prototype;if(g){if(g[l]!==h)try{s(g,l,h)}catch(t){g[l]=h}if(g[c]||s(g,c,u),r[u])for(var p in o)if(g[p]!==o[p])try{s(g,p,o[p])}catch(t){g[p]=o[p]}}}},function(t,e,i){var n=i(3);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,i){var n=i(8),r=i(47),o=i(13),s=i(30),a=Object.defineProperty;e.f=n?a:function(t,e,i){if(o(t),e=s(e,!0),o(i),r)try{return a(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported");return"value"in i&&(t[e]=i.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,i){"use strict";var n=i(25),r=i(1),o=i(8),s=i(88),a=i(41),l=i(91),c=i(55),h=i(23),u=i(4),d=i(12),g=i(56),p=i(95),f=i(30),m=i(5),v=i(42),y=i(10),b=i(32),x=i(18),w=i(38).f,_=i(97),k=i(101).forEach,S=i(104),E=i(9),M=i(37),A=i(24),z=i(105),T=A.get,C=A.set,O=E.f,L=M.f,P=Math.round,D=r.RangeError,I=l.ArrayBuffer,j=l.DataView,N=a.NATIVE_ARRAY_BUFFER_VIEWS,R=a.TYPED_ARRAY_TAG,q=a.TypedArray,F=a.TypedArrayPrototype,Y=a.aTypedArrayConstructor,H=a.isTypedArray,X="BYTES_PER_ELEMENT",W="Wrong length",V=function(t,e){for(var i=0,n=e.length,r=new(Y(t))(n);n>i;)r[i]=e[i++];return r},B=function(t,e){O(t,e,{get:function(){return T(this)[e]}})},U=function(t){var e;return t instanceof I||"ArrayBuffer"==(e=v(t))||"SharedArrayBuffer"==e},$=function(t,e){return H(t)&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},Z=function(t,e){return $(t,e=f(e,!0))?h(2,t[e]):L(t,e)},G=function(t,e,i){return!($(t,e=f(e,!0))&&y(i)&&m(i,"value"))||m(i,"get")||m(i,"set")||i.configurable||m(i,"writable")&&!i.writable||m(i,"enumerable")&&!i.enumerable?O(t,e,i):(t[e]=i.value,t)};o?(N||(M.f=Z,E.f=G,B(F,"buffer"),B(F,"byteOffset"),B(F,"byteLength"),B(F,"length")),n({target:"Object",stat:!0,forced:!N},{getOwnPropertyDescriptor:Z,defineProperty:G}),t.exports=function(t,e,i){var o=t.match(/\d+$/)[0]/8,a=t+(i?"Clamped":"")+"Array",l="get"+t,h="set"+t,f=r[a],m=f,v=m&&m.prototype,E={},M=function(t,e){O(t,e,{get:function(){return function(t,e){var i=T(t);return i.view[l](e*o+i.byteOffset,!0)}(this,e)},set:function(t){return function(t,e,n){var r=T(t);i&&(n=(n=P(n))<0?0:n>255?255:255&n),r.view[h](e*o+r.byteOffset,n,!0)}(this,e,t)},enumerable:!0})};N?s&&(m=e((function(t,e,i,n){return c(t,m,a),z(y(e)?U(e)?void 0!==n?new f(e,p(i,o),n):void 0!==i?new f(e,p(i,o)):new f(e):H(e)?V(m,e):_.call(m,e):new f(g(e)),t,m)})),x&&x(m,q),k(w(f),(function(t){t in m||u(m,t,f[t])})),m.prototype=v):(m=e((function(t,e,i,n){c(t,m,a);var r,s,l,h=0,u=0;if(y(e)){if(!U(e))return H(e)?V(m,e):_.call(m,e);r=e,u=p(i,o);var f=e.byteLength;if(void 0===n){if(f%o)throw D(W);if((s=f-u)<0)throw D(W)}else if((s=d(n)*o)+u>f)throw D(W);l=s/o}else l=g(e),r=new I(s=l*o);for(C(t,{buffer:r,byteOffset:u,byteLength:s,length:l,view:new j(r)});h<l;)M(t,h++)})),x&&x(m,q),v=m.prototype=b(F)),v.constructor!==m&&u(v,"constructor",m),R&&u(v,R,a),E[a]=m,n({global:!0,forced:m!=f,sham:!N},E),X in m||u(m,X,o),X in v||u(v,X,o),S(a)}):t.exports=function(){}},function(t,e,i){var n=i(14),r=Math.min;t.exports=function(t){return t>0?r(n(t),9007199254740991):0}},function(t,e,i){var n=i(10);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){var i=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:i)(t)}},function(t,e){t.exports={}},function(t,e,i){var n=i(1),r=i(4),o=i(5),s=i(29),a=i(52),l=i(24),c=l.get,h=l.enforce,u=String(String).split("String");(t.exports=function(t,e,i,a){var l,c=!!a&&!!a.unsafe,d=!!a&&!!a.enumerable,g=!!a&&!!a.noTargetGet;"function"==typeof i&&("string"!=typeof e||o(i,"name")||r(i,"name",e),(l=h(i)).source||(l.source=u.join("string"==typeof e?e:""))),t!==n?(c?!g&&t[e]&&(d=!0):delete t[e],d?t[e]=i:r(t,e,i)):d?t[e]=i:s(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||a(this)}))},function(t,e,i){var n=i(22);t.exports=function(t){return Object(n(t))}},function(t,e,i){var n=i(13),r=i(78);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,i={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(i,[]),e=i instanceof Array}catch(t){}return function(i,o){return n(i),r(o),e?t.call(i,o):i.__proto__=o,i}}():void 0)},function(t,e,i){"use strict";var n=i(79),r=i(13),o=i(12),s=i(14),a=i(22),l=i(83),c=i(85),h=i(86),u=Math.max,d=Math.min;n("replace",2,(function(t,e,i,n){var g=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,p=n.REPLACE_KEEPS_$0,f=g?"$":"$0";return[function(i,n){var r=a(this),o=null==i?void 0:i[t];return void 0!==o?o.call(i,r,n):e.call(String(r),i,n)},function(t,n){if(!g&&p||"string"==typeof n&&-1===n.indexOf(f)){var a=i(e,t,this,n);if(a.done)return a.value}var m=r(t),v=String(this),y="function"==typeof n;y||(n=String(n));var b=m.global;if(b){var x=m.unicode;m.lastIndex=0}for(var w=[];;){var _=h(m,v);if(null===_)break;if(w.push(_),!b)break;""===String(_[0])&&(m.lastIndex=l(v,o(m.lastIndex),x))}for(var k,S="",E=0,M=0;M<w.length;M++){_=w[M];for(var A=String(_[0]),z=u(d(s(_.index),v.length),0),T=[],C=1;C<_.length;C++)T.push(void 0===(k=_[C])?k:String(k));var O=_.groups;if(y){var L=[A].concat(T,z,v);void 0!==O&&L.push(O);var P=String(n.apply(void 0,L))}else P=c(A,v,z,T,O,n);z>=E&&(S+=v.slice(E,z)+P,E=z+A.length)}return S+v.slice(E)}]}))},function(t,e,i){var n=i(45),r=i(22);t.exports=function(t){return n(r(t))}},function(t,e){var i={}.toString;t.exports=function(t){return i.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,i){var n,r,o,s=i(69),a=i(1),l=i(10),c=i(4),h=i(5),u=i(28),d=i(36),g=i(33),p=a.WeakMap;if(s){var f=u.state||(u.state=new p),m=f.get,v=f.has,y=f.set;n=function(t,e){return e.facade=t,y.call(f,t,e),e},r=function(t){return m.call(f,t)||{}},o=function(t){return v.call(f,t)}}else{var b=d("state");g[b]=!0,n=function(t,e){return e.facade=t,c(t,b,e),e},r=function(t){return h(t,b)?t[b]:{}},o=function(t){return h(t,b)}}t.exports={set:n,get:r,has:o,enforce:function(t){return o(t)?r(t):n(t,{})},getterFor:function(t){return function(e){var i;if(!l(e)||(i=r(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return i}}}},function(t,e,i){var n=i(1),r=i(37).f,o=i(4),s=i(16),a=i(29),l=i(72),c=i(75);t.exports=function(t,e){var i,h,u,d,g,p=t.target,f=t.global,m=t.stat;if(i=f?n:m?n[p]||a(p,{}):(n[p]||{}).prototype)for(h in e){if(d=e[h],u=t.noTargetGet?(g=r(i,h))&&g.value:i[h],!c(f?h:p+(m?".":"#")+h,t.forced)&&void 0!==u){if(typeof d==typeof u)continue;l(d,u)}(t.sham||u&&u.sham)&&o(d,"sham",!0),s(i,h,d,t)}}},function(t,e,i){var n=i(5),r=i(17),o=i(36),s=i(77),a=o("IE_PROTO"),l=Object.prototype;t.exports=s?Object.getPrototypeOf:function(t){return t=r(t),n(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?l:null}},function(t,e){t.exports=!1},function(t,e,i){var n=i(1),r=i(29),o="__core-js_shared__",s=n[o]||r(o,{});t.exports=s},function(t,e,i){var n=i(1),r=i(4);t.exports=function(t,e){try{r(n,t,e)}catch(i){n[t]=e}return e}},function(t,e,i){var n=i(10);t.exports=function(t,e){if(!n(t))return t;var i,r;if(e&&"function"==typeof(i=t.toString)&&!n(r=i.call(t)))return r;if("function"==typeof(i=t.valueOf)&&!n(r=i.call(t)))return r;if(!e&&"function"==typeof(i=t.toString)&&!n(r=i.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){var i=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++i+n).toString(36)}},function(t,e,i){var n,r=i(13),o=i(64),s=i(34),a=i(33),l=i(67),c=i(48),h=i(36),u=h("IE_PROTO"),d=function(){},g=function(t){return"<script>"+t+"</"+"script>"},p=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;p=n?function(t){t.write(g("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((e=c("iframe")).style.display="none",l.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(g("document.F=Object")),t.close(),t.F);for(var i=s.length;i--;)delete p.prototype[s[i]];return p()};a[u]=!0,t.exports=Object.create||function(t,e){var i;return null!==t?(d.prototype=r(t),i=new d,d.prototype=null,i[u]=t):i=p(),void 0===e?i:o(i,e)}},function(t,e){t.exports={}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,i){var n=i(68),r=i(1),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(n[t])||o(r[t]):n[t]&&n[t][e]||r[t]&&r[t][e]}},function(t,e,i){var n=i(46),r=i(31),o=n("keys");t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e,i){var n=i(8),r=i(71),o=i(23),s=i(20),a=i(30),l=i(5),c=i(47),h=Object.getOwnPropertyDescriptor;e.f=n?h:function(t,e){if(t=s(t),e=a(e,!0),c)try{return h(t,e)}catch(t){}if(l(t,e))return o(!r.f.call(t,e),t[e])}},function(t,e,i){var n=i(50),r=i(34).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},function(t,e,i){var n=i(9).f,r=i(5),o=i(2)("toStringTag");t.exports=function(t,e,i){t&&!r(t=i?t:t.prototype,o)&&n(t,o,{configurable:!0,value:e})}},function(t,e,i){"use strict";var n,r,o=i(81),s=i(82),a=RegExp.prototype.exec,l=String.prototype.replace,c=a,h=(n=/a/,r=/b*/g,a.call(n,"a"),a.call(r,"a"),0!==n.lastIndex||0!==r.lastIndex),u=s.UNSUPPORTED_Y||s.BROKEN_CARET,d=void 0!==/()??/.exec("")[1];(h||d||u)&&(c=function(t){var e,i,n,r,s=this,c=u&&s.sticky,g=o.call(s),p=s.source,f=0,m=t;return c&&(-1===(g=g.replace("y","")).indexOf("g")&&(g+="g"),m=String(t).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==t[s.lastIndex-1])&&(p="(?: "+p+")",m=" "+m,f++),i=new RegExp("^(?:"+p+")",g)),d&&(i=new RegExp("^"+p+"$(?!\\s)",g)),h&&(e=s.lastIndex),n=a.call(c?i:s,m),c?n?(n.input=n.input.slice(f),n[0]=n[0].slice(f),n.index=s.lastIndex,s.lastIndex+=n[0].length):s.lastIndex=0:h&&n&&(s.lastIndex=s.global?n.index+n[0].length:e),d&&n&&n.length>1&&l.call(n[0],i,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(n[r]=void 0)})),n}),t.exports=c},function(t,e,i){"use strict";var n,r=i(54),o=i(8),s=i(1),a=i(10),l=i(5),c=i(42),h=i(4),u=i(16),d=i(9).f,g=i(26),p=i(18),f=i(2),m=i(31),v=s.Int8Array,y=v&&v.prototype,b=s.Uint8ClampedArray,x=b&&b.prototype,w=v&&g(v),_=y&&g(y),k=Object.prototype,S=k.isPrototypeOf,E=f("toStringTag"),M=m("TYPED_ARRAY_TAG"),A=r&&!!p&&"Opera"!==c(s.opera),z=!1,T={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},C={BigInt64Array:8,BigUint64Array:8},O=function(t){if(!a(t))return!1;var e=c(t);return l(T,e)||l(C,e)};for(n in T)s[n]||(A=!1);if((!A||"function"!=typeof w||w===Function.prototype)&&(w=function(){throw TypeError("Incorrect invocation")},A))for(n in T)s[n]&&p(s[n],w);if((!A||!_||_===k)&&(_=w.prototype,A))for(n in T)s[n]&&p(s[n].prototype,_);if(A&&g(x)!==_&&p(x,_),o&&!l(_,E))for(n in z=!0,d(_,E,{get:function(){return a(this)?this[M]:void 0}}),T)s[n]&&h(s[n],M,n);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:A,TYPED_ARRAY_TAG:z&&M,aTypedArray:function(t){if(O(t))return t;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(t){if(p){if(S.call(w,t))return t}else for(var e in T)if(l(T,n)){var i=s[e];if(i&&(t===i||S.call(i,t)))return t}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(t,e,i){if(o){if(i)for(var n in T){var r=s[n];r&&l(r.prototype,t)&&delete r.prototype[t]}_[t]&&!i||u(_,t,i?e:A&&y[t]||e)}},exportTypedArrayStaticMethod:function(t,e,i){var n,r;if(o){if(p){if(i)for(n in T)(r=s[n])&&l(r,t)&&delete r[t];if(w[t]&&!i)return;try{return u(w,t,i?e:A&&v[t]||e)}catch(t){}}for(n in T)!(r=s[n])||r[t]&&!i||u(r,t,e)}},isView:function(t){if(!a(t))return!1;var e=c(t);return"DataView"===e||l(T,e)||l(C,e)},isTypedArray:O,TypedArray:w,TypedArrayPrototype:_}},function(t,e,i){var n=i(90),r=i(21),o=i(2)("toStringTag"),s="Arguments"==r(function(){return arguments}());t.exports=n?r:function(t){var e,i,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),o))?i:s?r(e):"Object"==(n=r(e))&&"function"==typeof e.callee?"Arguments":n}},,function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){var n=i(3),r=i(21),o="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==r(t)?o.call(t,""):Object(t)}:Object},function(t,e,i){var n=i(27),r=i(28);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.3",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,e,i){var n=i(8),r=i(3),o=i(48);t.exports=!n&&!r((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},function(t,e,i){var n=i(1),r=i(10),o=n.document,s=r(o)&&r(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},function(t,e,i){var n=i(3);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},function(t,e,i){var n=i(5),r=i(20),o=i(66).indexOf,s=i(33);t.exports=function(t,e){var i,a=r(t),l=0,c=[];for(i in a)!n(s,i)&&n(a,i)&&c.push(i);for(;e.length>l;)n(a,i=e[l++])&&(~o(c,i)||c.push(i));return c}},function(t,e,i){var n=i(14),r=Math.max,o=Math.min;t.exports=function(t,e){var i=n(t);return i<0?r(i+e,0):o(i,e)}},function(t,e,i){var n=i(28),r=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return r.call(t)}),t.exports=n.inspectSource},function(t,e,i){"use strict";var n,r,o,s=i(3),a=i(26),l=i(4),c=i(5),h=i(2),u=i(27),d=h("iterator"),g=!1;[].keys&&("next"in(o=[].keys())?(r=a(a(o)))!==Object.prototype&&(n=r):g=!0);var p=null==n||s((function(){var t={};return n[d].call(t)!==t}));p&&(n={}),u&&!p||c(n,d)||l(n,d,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:g}},function(t,e){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},function(t,e){t.exports=function(t,e,i){if(!(t instanceof e))throw TypeError("Incorrect "+(i?i+" ":"")+"invocation");return t}},function(t,e,i){var n=i(14),r=i(12);t.exports=function(t){if(void 0===t)return 0;var e=n(t),i=r(e);if(e!==i)throw RangeError("Wrong length or index");return i}},function(t,e,i){var n=i(100);t.exports=function(t,e,i){if(n(t),void 0===e)return t;switch(i){case 0:return function(){return t.call(e)};case 1:return function(i){return t.call(e,i)};case 2:return function(i,n){return t.call(e,i,n)};case 3:return function(i,n,r){return t.call(e,i,n,r)}}return function(){return t.apply(e,arguments)}}},function(t,e,i){"use strict";i(25)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},function(t,e,i){"use strict";(function(t){i(19),i(7),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t||"undefined"!=typeof self&&self;var n=function(t,e,i){return t(i={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&i.path)}},i.exports),i.exports}((function(t,e){t.exports=function(){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function r(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?o(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var s=Date.now();function a(){var t={},e=!0,i=0,n=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],i++);for(var r=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e&&"[object Object]"===Object.prototype.toString.call(i[n])?t[n]=a(!0,t[n],i[n]):t[n]=i[n])};i<n;i++)r(arguments[i]);return t}function l(t,e){if((A(t)||t===window||t===document)&&(t=[t]),T(t)||C(t)||(t=[t]),0!=P(t))if(T(t)&&!C(t))for(var i=t.length,n=0;n<i&&!1!==e.call(t[n],t[n],n,t);n++);else if(C(t))for(var r in t)if(L(t,r)&&!1===e.call(t[r],t[r],r,t))break}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=t[s]=t[s]||[],r={all:n,evt:null,found:null};return e&&i&&P(n)>0&&l(n,(function(t,n){if(t.eventName==e&&t.fn.toString()==i.toString())return r.found=!0,r.evt=n,!1})),r}function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.onElement,n=e.withCallback,r=e.avoidDuplicate,o=void 0===r||r,s=e.once,a=void 0!==s&&s,h=e.useCapture,u=void 0!==h&&h,d=arguments.length>2?arguments[2]:void 0,g=i||[];function p(t){E(n)&&n.call(d,t,this),a&&p.destroy()}return M(g)&&(g=document.querySelectorAll(g)),p.destroy=function(){l(g,(function(e){var i=c(e,t,p);i.found&&i.all.splice(i.evt,1),e.removeEventListener&&e.removeEventListener(t,p,u)}))},l(g,(function(e){var i=c(e,t,p);(e.addEventListener&&o&&!i.found||!o)&&(e.addEventListener(t,p,u),i.all.push({eventName:t,fn:p}))})),p}function u(t,e){l(e.split(" "),(function(e){return t.classList.add(e)}))}function d(t,e){l(e.split(" "),(function(e){return t.classList.remove(e)}))}function g(t,e){return t.classList.contains(e)}function p(t,e){for(;t!==document.body;){if(!(t=t.parentElement))return!1;if("function"==typeof t.matches?t.matches(e):t.msMatchesSelector(e))return t}}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t||""===e)return!1;if("none"==e)return E(i)&&i(),!1;var n=w(),r=e.split(" ");l(r,(function(e){u(t,"g"+e)})),h(n,{onElement:t,avoidDuplicate:!1,once:!0,withCallback:function(t,e){l(r,(function(t){d(e,"g"+t)})),E(i)&&i()}})}function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(""==e)return t.style.webkitTransform="",t.style.MozTransform="",t.style.msTransform="",t.style.OTransform="",t.style.transform="",!1;t.style.webkitTransform=e,t.style.MozTransform=e,t.style.msTransform=e,t.style.OTransform=e,t.style.transform=e}function v(t){t.style.display="block"}function y(t){t.style.display="none"}function b(t){var e=document.createDocumentFragment(),i=document.createElement("div");for(i.innerHTML=t;i.firstChild;)e.appendChild(i.firstChild);return e}function x(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}}function w(){var t,e=document.createElement("fakeelement"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(t in i)if(void 0!==e.style[t])return i[t]}function _(t,e,i,n){if(t())e();else{var r;i||(i=100);var o=setInterval((function(){t()&&(clearInterval(o),r&&clearTimeout(r),e())}),i);n&&(r=setTimeout((function(){clearInterval(o)}),n))}}function k(t,e,i){if(O(t))console.error("Inject assets error");else if(E(e)&&(i=e,e=!1),M(e)&&e in window)E(i)&&i();else{var n;if(-1!==t.indexOf(".css")){if((n=document.querySelectorAll('link[href="'+t+'"]'))&&n.length>0)return void(E(i)&&i());var r=document.getElementsByTagName("head")[0],o=r.querySelectorAll('link[rel="stylesheet"]'),s=document.createElement("link");return s.rel="stylesheet",s.type="text/css",s.href=t,s.media="all",o?r.insertBefore(s,o[0]):r.appendChild(s),void(E(i)&&i())}if((n=document.querySelectorAll('script[src="'+t+'"]'))&&n.length>0){if(E(i)){if(M(e))return _((function(){return void 0!==window[e]}),(function(){i()})),!1;i()}}else{var a=document.createElement("script");a.type="text/javascript",a.src=t,a.onload=function(){if(E(i)){if(M(e))return _((function(){return void 0!==window[e]}),(function(){i()})),!1;i()}},document.body.appendChild(a)}}}function S(){return"navigator"in window&&window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)}function E(t){return"function"==typeof t}function M(t){return"string"==typeof t}function A(t){return!(!t||!t.nodeType||1!=t.nodeType)}function z(t){return Array.isArray(t)}function T(t){return t&&t.length&&isFinite(t.length)}function C(e){return"object"===t(e)&&null!=e&&!E(e)&&!z(e)}function O(t){return null==t}function L(t,e){return null!==t&&hasOwnProperty.call(t,e)}function P(t){if(C(t)){if(t.keys)return t.keys().length;var e=0;for(var i in t)L(t,i)&&e++;return e}return t.length}function D(t){return!isNaN(parseFloat(t))&&isFinite(t)}function I(t){if(t.events.hasOwnProperty("keyboard"))return!1;t.events.keyboard=h("keydown",{onElement:window,withCallback:function(e,i){var n=(e=e||window.event).keyCode;if(9==n){var o=!(!document.activeElement||!document.activeElement.nodeName)&&document.activeElement.nodeName.toLocaleLowerCase();if("input"==o||"textarea"==o||"button"==o)return;e.preventDefault();var s=document.querySelectorAll(".gbtn");if(!s||s.length<=0)return;var a=r(s).filter((function(t){return g(t,"focused")}));if(!a.length){var l=document.querySelector('.gbtn[tabindex="0"]');return void(l&&(l.focus(),u(l,"focused")))}s.forEach((function(t){return d(t,"focused")}));var c=a[0].getAttribute("tabindex");c=c||"0";var h=parseInt(c)+1;h>s.length-1&&(h="0");var p=document.querySelector('.gbtn[tabindex="'.concat(h,'"]'));p&&(p.focus(),u(p,"focused"))}39==n&&t.nextSlide(),37==n&&t.prevSlide(),27==n&&t.close()}})}function j(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function N(t,e){var i=function(t,e){var i=j(t)*j(e);if(0===i)return 0;var n=function(t,e){return t.x*e.x+t.y*e.y}(t,e)/i;return n>1&&(n=1),Math.acos(n)}(t,e);return function(t,e){return t.x*e.y-e.x*t.y}(t,e)>0&&(i*=-1),180*i/Math.PI}var R=function(){function t(i){e(this,t),this.handlers=[],this.el=i}return n(t,[{key:"add",value:function(t){this.handlers.push(t)}},{key:"del",value:function(t){t||(this.handlers=[]);for(var e=this.handlers.length;e>=0;e--)this.handlers[e]===t&&this.handlers.splice(e,1)}},{key:"dispatch",value:function(){for(var t=0,e=this.handlers.length;t<e;t++){var i=this.handlers[t];"function"==typeof i&&i.apply(this.el,arguments)}}}]),t}();function q(t,e){var i=new R(t);return i.add(e),i}var F=function(){function t(i,n){e(this,t),this.element="string"==typeof i?document.querySelector(i):i,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var r=function(){};this.rotate=q(this.element,n.rotate||r),this.touchStart=q(this.element,n.touchStart||r),this.multipointStart=q(this.element,n.multipointStart||r),this.multipointEnd=q(this.element,n.multipointEnd||r),this.pinch=q(this.element,n.pinch||r),this.swipe=q(this.element,n.swipe||r),this.tap=q(this.element,n.tap||r),this.doubleTap=q(this.element,n.doubleTap||r),this.longTap=q(this.element,n.longTap||r),this.singleTap=q(this.element,n.singleTap||r),this.pressMove=q(this.element,n.pressMove||r),this.twoFingerPressMove=q(this.element,n.twoFingerPressMove||r),this.touchMove=q(this.element,n.touchMove||r),this.touchEnd=q(this.element,n.touchEnd||r),this.touchCancel=q(this.element,n.touchCancel||r),this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}}return n(t,[{key:"start",value:function(t){if(t.touches){this.now=Date.now(),this.x1=t.touches[0].pageX,this.y1=t.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(t,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var e=this.preV;if(t.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var i={x:t.touches[1].pageX-this.x1,y:t.touches[1].pageY-this.y1};e.x=i.x,e.y=i.y,this.pinchStartLen=j(e),this.multipointStart.dispatch(t,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(t,this.element),this._preventTap=!0}.bind(this),750)}}},{key:"move",value:function(t){if(t.touches){var e=this.preV,i=t.touches.length,n=t.touches[0].pageX,r=t.touches[0].pageY;if(this.isDoubleTap=!1,i>1){var o=t.touches[1].pageX,s=t.touches[1].pageY,a={x:t.touches[1].pageX-n,y:t.touches[1].pageY-r};null!==e.x&&(this.pinchStartLen>0&&(t.zoom=j(a)/this.pinchStartLen,this.pinch.dispatch(t,this.element)),t.angle=N(a,e),this.rotate.dispatch(t,this.element)),e.x=a.x,e.y=a.y,null!==this.x2&&null!==this.sx2?(t.deltaX=(n-this.x2+o-this.sx2)/2,t.deltaY=(r-this.y2+s-this.sy2)/2):(t.deltaX=0,t.deltaY=0),this.twoFingerPressMove.dispatch(t,this.element),this.sx2=o,this.sy2=s}else{if(null!==this.x2){t.deltaX=n-this.x2,t.deltaY=r-this.y2;var l=Math.abs(this.x1-this.x2),c=Math.abs(this.y1-this.y2);(l>10||c>10)&&(this._preventTap=!0)}else t.deltaX=0,t.deltaY=0;this.pressMove.dispatch(t,this.element)}this.touchMove.dispatch(t,this.element),this._cancelLongTap(),this.x2=n,this.y2=r,i>1&&t.preventDefault()}}},{key:"end",value:function(t){if(t.changedTouches){this._cancelLongTap();var e=this;t.touches.length<2&&(this.multipointEnd.dispatch(t,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(t.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout((function(){e.swipe.dispatch(t,e.element)}),0)):(this.tapTimeout=setTimeout((function(){e._preventTap||e.tap.dispatch(t,e.element),e.isDoubleTap&&(e.doubleTap.dispatch(t,e.element),e.isDoubleTap=!1)}),0),e.isDoubleTap||(e.singleTapTimeout=setTimeout((function(){e.singleTap.dispatch(t,e.element)}),250))),this.touchEnd.dispatch(t,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}}},{key:"cancelAll",value:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)}},{key:"cancel",value:function(t){this.cancelAll(),this.touchCancel.dispatch(t,this.element)}},{key:"_cancelLongTap",value:function(){clearTimeout(this.longTapTimeout)}},{key:"_cancelSingleTap",value:function(){clearTimeout(this.singleTapTimeout)}},{key:"_swipeDirection",value:function(t,e,i,n){return Math.abs(t-e)>=Math.abs(i-n)?t-e>0?"Left":"Right":i-n>0?"Up":"Down"}},{key:"on",value:function(t,e){this[t]&&this[t].add(e)}},{key:"off",value:function(t,e){this[t]&&this[t].del(e)}},{key:"destroy",value:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}}]),t}();function Y(t){var e=function(){var t,e=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(void 0!==e.style[t])return i[t]}(),i=g(t,"gslide-media")?t:t.querySelector(".gslide-media"),n=t.querySelector(".gslide-description");u(i,"greset"),m(i,"translate3d(0, 0, 0)"),h(e,{onElement:i,once:!0,withCallback:function(t,e){d(i,"greset")}}),i.style.opacity="",n&&(n.style.opacity="")}function H(t){if(t.events.hasOwnProperty("touch"))return!1;var e,i,n,r=x(),o=r.width,s=r.height,a=!1,l=null,c=null,h=null,f=!1,v=1,y=1,b=!1,w=!1,_=null,k=null,S=null,E=null,M=0,A=0,z=!1,T=!1,C={},O={},L=0,P=0,D=document.getElementById("glightbox-slider"),I=document.querySelector(".goverlay"),j=new F(D,{touchStart:function(e){if(a=!0,(g(e.targetTouches[0].target,"ginner-container")||p(e.targetTouches[0].target,".gslide-desc")||"a"==e.targetTouches[0].target.nodeName.toLowerCase())&&(a=!1),p(e.targetTouches[0].target,".gslide-inline")&&!g(e.targetTouches[0].target.parentNode,"gslide-inline")&&(a=!1),a){if(O=e.targetTouches[0],C.pageX=e.targetTouches[0].pageX,C.pageY=e.targetTouches[0].pageY,L=e.targetTouches[0].clientX,P=e.targetTouches[0].clientY,l=t.activeSlide,c=l.querySelector(".gslide-media"),n=l.querySelector(".gslide-inline"),h=null,g(c,"gslide-image")&&(h=c.querySelector("img")),d(I,"greset"),e.pageX>20&&e.pageX<window.innerWidth-20)return;e.preventDefault()}},touchMove:function(r){if(a&&(O=r.targetTouches[0],!b&&!w)){if(n&&n.offsetHeight>s){var l=C.pageX-O.pageX;if(Math.abs(l)<=13)return!1}f=!0;var u,d=r.targetTouches[0].clientX,g=r.targetTouches[0].clientY,p=L-d,v=P-g;if(Math.abs(p)>Math.abs(v)?(z=!1,T=!0):(T=!1,z=!0),e=O.pageX-C.pageX,M=100*e/o,i=O.pageY-C.pageY,A=100*i/s,z&&h&&(u=1-Math.abs(i)/s,I.style.opacity=u,t.settings.touchFollowAxis&&(M=0)),T&&(u=1-Math.abs(e)/o,c.style.opacity=u,t.settings.touchFollowAxis&&(A=0)),!h)return m(c,"translate3d(".concat(M,"%, 0, 0)"));m(c,"translate3d(".concat(M,"%, ").concat(A,"%, 0)"))}},touchEnd:function(){if(a){if(f=!1,w||b)return S=_,void(E=k);var e=Math.abs(parseInt(A)),i=Math.abs(parseInt(M));if(!(e>29&&h))return e<29&&i<25?(u(I,"greset"),I.style.opacity=1,Y(c)):void 0;t.close()}},multipointEnd:function(){setTimeout((function(){b=!1}),50)},multipointStart:function(){b=!0,v=y||1},pinch:function(t){if(!h||f)return!1;b=!0,h.scaleX=h.scaleY=v*t.zoom;var e=v*t.zoom;if(w=!0,e<=1)return w=!1,e=1,E=null,S=null,_=null,k=null,void h.setAttribute("style","");e>4.5&&(e=4.5),h.style.transform="scale3d(".concat(e,", ").concat(e,", 1)"),y=e},pressMove:function(t){if(w&&!b){var e=O.pageX-C.pageX,i=O.pageY-C.pageY;S&&(e+=S),E&&(i+=E),_=e,k=i;var n="translate3d(".concat(e,"px, ").concat(i,"px, 0)");y&&(n+=" scale3d(".concat(y,", ").concat(y,", 1)")),m(h,n)}},swipe:function(e){if(!w)if(b)b=!1;else{if("Left"==e.direction){if(t.index==t.elements.length-1)return Y(c);t.nextSlide()}if("Right"==e.direction){if(0==t.index)return Y(c);t.prevSlide()}}}});t.events.touch=j}var X=function(){function t(i,n){var r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e(this,t),this.img=i,this.slide=n,this.onclose=o,this.img.setZoomEvents)return!1;this.active=!1,this.zoomedIn=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.img.addEventListener("mousedown",(function(t){return r.dragStart(t)}),!1),this.img.addEventListener("mouseup",(function(t){return r.dragEnd(t)}),!1),this.img.addEventListener("mousemove",(function(t){return r.drag(t)}),!1),this.img.addEventListener("click",(function(t){return r.slide.classList.contains("dragging-nav")?(r.zoomOut(),!1):r.zoomedIn?void(r.zoomedIn&&!r.dragging&&r.zoomOut()):r.zoomIn()}),!1),this.img.setZoomEvents=!0}return n(t,[{key:"zoomIn",value:function(){var t=this.widowWidth();if(!(this.zoomedIn||t<=768)){var e=this.img;if(e.setAttribute("data-style",e.getAttribute("style")),e.style.maxWidth=e.naturalWidth+"px",e.style.maxHeight=e.naturalHeight+"px",e.naturalWidth>t){var i=t/2-e.naturalWidth/2;this.setTranslate(this.img.parentNode,i,0)}this.slide.classList.add("zoomed"),this.zoomedIn=!0}}},{key:"zoomOut",value:function(){this.img.parentNode.setAttribute("style",""),this.img.setAttribute("style",this.img.getAttribute("data-style")),this.slide.classList.remove("zoomed"),this.zoomedIn=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.onclose&&"function"==typeof this.onclose&&this.onclose()}},{key:"dragStart",value:function(t){t.preventDefault(),this.zoomedIn?("touchstart"===t.type?(this.initialX=t.touches[0].clientX-this.xOffset,this.initialY=t.touches[0].clientY-this.yOffset):(this.initialX=t.clientX-this.xOffset,this.initialY=t.clientY-this.yOffset),t.target===this.img&&(this.active=!0,this.img.classList.add("dragging"))):this.active=!1}},{key:"dragEnd",value:function(t){var e=this;t.preventDefault(),this.initialX=this.currentX,this.initialY=this.currentY,this.active=!1,setTimeout((function(){e.dragging=!1,e.img.isDragging=!1,e.img.classList.remove("dragging")}),100)}},{key:"drag",value:function(t){this.active&&(t.preventDefault(),"touchmove"===t.type?(this.currentX=t.touches[0].clientX-this.initialX,this.currentY=t.touches[0].clientY-this.initialY):(this.currentX=t.clientX-this.initialX,this.currentY=t.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.img.isDragging=!0,this.dragging=!0,this.setTranslate(this.img,this.currentX,this.currentY))}},{key:"onMove",value:function(t){if(this.zoomedIn){var e=t.clientX-this.img.naturalWidth/2,i=t.clientY-this.img.naturalHeight/2;this.setTranslate(this.img,e,i)}}},{key:"setTranslate",value:function(t,e,i){t.style.transform="translate3d("+e+"px, "+i+"px, 0)"}},{key:"widowWidth",value:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}}]),t}(),W=function(){function t(){var i=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t);var r=n.dragEl,o=n.toleranceX,s=void 0===o?40:o,a=n.toleranceY,l=void 0===a?65:a,c=n.slide,h=void 0===c?null:c,u=n.instance,d=void 0===u?null:u;this.el=r,this.active=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.direction=null,this.lastDirection=null,this.toleranceX=s,this.toleranceY=l,this.toleranceReached=!1,this.dragContainer=this.el,this.slide=h,this.instance=d,this.el.addEventListener("mousedown",(function(t){return i.dragStart(t)}),!1),this.el.addEventListener("mouseup",(function(t){return i.dragEnd(t)}),!1),this.el.addEventListener("mousemove",(function(t){return i.drag(t)}),!1)}return n(t,[{key:"dragStart",value:function(t){if(this.slide.classList.contains("zoomed"))this.active=!1;else{"touchstart"===t.type?(this.initialX=t.touches[0].clientX-this.xOffset,this.initialY=t.touches[0].clientY-this.yOffset):(this.initialX=t.clientX-this.xOffset,this.initialY=t.clientY-this.yOffset);var e=t.target.nodeName.toLowerCase();t.target.classList.contains("nodrag")||p(t.target,".nodrag")||-1!==["input","select","textarea","button","a"].indexOf(e)?this.active=!1:(t.preventDefault(),(t.target===this.el||"img"!==e&&p(t.target,".gslide-inline"))&&(this.active=!0,this.el.classList.add("dragging"),this.dragContainer=p(t.target,".ginner-container")))}}},{key:"dragEnd",value:function(t){var e=this;t&&t.preventDefault(),this.initialX=0,this.initialY=0,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.active=!1,this.doSlideChange&&(this.instance.preventOutsideClick=!0,"right"==this.doSlideChange&&this.instance.prevSlide(),"left"==this.doSlideChange&&this.instance.nextSlide()),this.doSlideClose&&this.instance.close(),this.toleranceReached||this.setTranslate(this.dragContainer,0,0,!0),setTimeout((function(){e.instance.preventOutsideClick=!1,e.toleranceReached=!1,e.lastDirection=null,e.dragging=!1,e.el.isDragging=!1,e.el.classList.remove("dragging"),e.slide.classList.remove("dragging-nav"),e.dragContainer.style.transform="",e.dragContainer.style.transition=""}),100)}},{key:"drag",value:function(t){if(this.active){t.preventDefault(),this.slide.classList.add("dragging-nav"),"touchmove"===t.type?(this.currentX=t.touches[0].clientX-this.initialX,this.currentY=t.touches[0].clientY-this.initialY):(this.currentX=t.clientX-this.initialX,this.currentY=t.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.el.isDragging=!0,this.dragging=!0,this.doSlideChange=!1,this.doSlideClose=!1;var e=Math.abs(this.currentX),i=Math.abs(this.currentY);if(e>0&&e>=Math.abs(this.currentY)&&(!this.lastDirection||"x"==this.lastDirection)){this.yOffset=0,this.lastDirection="x",this.setTranslate(this.dragContainer,this.currentX,0);var n=this.shouldChange();if(!this.instance.settings.dragAutoSnap&&n&&(this.doSlideChange=n),this.instance.settings.dragAutoSnap&&n)return this.instance.preventOutsideClick=!0,this.toleranceReached=!0,this.active=!1,this.instance.preventOutsideClick=!0,this.dragEnd(null),"right"==n&&this.instance.prevSlide(),void("left"==n&&this.instance.nextSlide())}if(this.toleranceY>0&&i>0&&i>=e&&(!this.lastDirection||"y"==this.lastDirection)){this.xOffset=0,this.lastDirection="y",this.setTranslate(this.dragContainer,0,this.currentY);var r=this.shouldClose();return!this.instance.settings.dragAutoSnap&&r&&(this.doSlideClose=!0),void(this.instance.settings.dragAutoSnap&&r&&this.instance.close())}}}},{key:"shouldChange",value:function(){var t=!1;if(Math.abs(this.currentX)>=this.toleranceX){var e=this.currentX>0?"right":"left";("left"==e&&this.slide!==this.slide.parentNode.lastChild||"right"==e&&this.slide!==this.slide.parentNode.firstChild)&&(t=e)}return t}},{key:"shouldClose",value:function(){var t=!1;return Math.abs(this.currentY)>=this.toleranceY&&(t=!0),t}},{key:"setTranslate",value:function(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t.style.transition=n?"all .2s ease":"",t.style.transform="translate3d(".concat(e,"px, ").concat(i,"px, 0)")}}]),t}();function V(t,e,i,n){var r=t.querySelector(".gslide-media"),o=new Image,s="gSlideTitle_"+i,a="gSlideDesc_"+i;o.addEventListener("load",(function(){E(n)&&n()}),!1),o.src=e.href,o.alt="",""!==e.title&&o.setAttribute("aria-labelledby",s),""!==e.description&&o.setAttribute("aria-describedby",a),r.insertBefore(o,r.firstChild)}function B(t,e,i,n){var r=this,o=t.querySelector(".ginner-container"),s="gvideo"+i,a=t.querySelector(".gslide-media"),l=this.getAllPlayers();u(o,"gvideo-container"),a.insertBefore(b('<div class="gvideo-wrapper"></div>'),a.firstChild);var c=t.querySelector(".gvideo-wrapper");k(this.settings.plyr.css,"Plyr");var h=e.href;location.protocol.replace(":","");var d="",g="",p=!1;a.style.maxWidth=e.width,k(this.settings.plyr.js,"Plyr",(function(){if(h.match(/vimeo\.com\/([0-9]*)/)){var t=/vimeo.*\/(\d+)/i.exec(h);d="vimeo",g=t[1]}if(h.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||h.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||h.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)){var o=function(t){return void 0!==(t=t.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]?t[2].split(/[^0-9a-z_\-]/i)[0]:t}(h);d="youtube",g=o}if(null!==h.match(/\.(mp4|ogg|webm|mov)$/)){d="local";var a='<video id="'+s+'" ';a+='style="background:#000; max-width: '.concat(e.width,';" '),a+='preload="metadata" ',a+='x-webkit-airplay="allow" ',a+='webkit-playsinline="" ',a+="controls ",a+='class="gvideo-local">';var f=h.toLowerCase().split(".").pop(),m={mp4:"",ogg:"",webm:""};for(var v in m[f="mov"==f?"mp4":f]=h,m)if(m.hasOwnProperty(v)){var y=m[v];e.hasOwnProperty(v)&&(y=e[v]),""!==y&&(a+='<source src="'.concat(y,'" type="video/').concat(v,'">'))}p=b(a+="</video>")}var x=p||b('<div id="'.concat(s,'" data-plyr-provider="').concat(d,'" data-plyr-embed-id="').concat(g,'"></div>'));u(c,"".concat(d,"-video gvideo")),c.appendChild(x),c.setAttribute("data-id",s),c.setAttribute("data-index",i);var w=L(r.settings.plyr,"config")?r.settings.plyr.config:{},_=new Plyr("#"+s,w);_.on("ready",(function(t){var e=t.detail.plyr;l[s]=e,E(n)&&n()})),_.on("enterfullscreen",U),_.on("exitfullscreen",U)}))}function U(t){var e=p(t.target,".gslide-media");"enterfullscreen"==t.type&&u(e,"fullscreen"),"exitfullscreen"==t.type&&d(e,"fullscreen")}function $(t,e,i,n){var r,o=this,s=t.querySelector(".gslide-media"),a=!(!L(e,"href")||!e.href)&&e.href.split("#").pop().trim(),l=!(!L(e,"content")||!e.content)&&e.content;if(l&&(M(l)&&(r=b('<div class="ginlined-content">'.concat(l,"</div>"))),A(l))){"none"==l.style.display&&(l.style.display="block");var c=document.createElement("div");c.className="ginlined-content",c.appendChild(l),r=c}if(a){var d=document.getElementById(a);if(!d)return!1;var g=d.cloneNode(!0);g.style.height=e.height,g.style.maxWidth=e.width,u(g,"ginlined-content"),r=g}if(!r)return console.error("Unable to append inline slide content",e),!1;s.style.height=e.height,s.style.width=e.width,s.appendChild(r),this.events["inlineclose"+a]=h("click",{onElement:s.querySelectorAll(".gtrigger-close"),withCallback:function(t){t.preventDefault(),o.close()}}),E(n)&&n()}function Z(t,e,i,n){var r=t.querySelector(".gslide-media"),o=function(t){var e=t.url,i=t.allow,n=t.callback,r=t.appendTo,o=document.createElement("iframe");return o.className="vimeo-video gvideo",o.src=e,o.style.width="100%",o.style.height="100%",i&&o.setAttribute("allow",i),o.onload=function(){u(o,"node-ready"),E(n)&&n()},r&&r.appendChild(o),o}({url:e.href,callback:n});r.parentNode.style.maxWidth=e.width,r.parentNode.style.height=e.height,r.appendChild(o)}var G=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),this.defaults={href:"",title:"",type:"",description:"",descPosition:"bottom",effect:"",width:"",height:"",content:!1,zoomable:!0,draggable:!0},C(i)&&(this.defaults=a(this.defaults,i))}return n(t,[{key:"sourceType",value:function(t){var e=t;return null!==(t=t.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|svg)$/)?"image":t.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||t.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||t.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)||t.match(/vimeo\.com\/([0-9]*)/)||null!==t.match(/\.(mp4|ogg|webm|mov)$/)?"video":null!==t.match(/\.(mp3|wav|wma|aac|ogg)$/)?"audio":t.indexOf("#")>-1&&""!==e.split("#").pop().trim()?"inline":t.indexOf("goajax=true")>-1?"ajax":"external"}},{key:"parseConfig",value:function(t,e){var i=this,n=a({descPosition:e.descPosition},this.defaults);if(C(t)&&!A(t)){L(t,"type")||(L(t,"content")&&t.content?t.type="inline":L(t,"href")&&(t.type=this.sourceType(t.href)));var r=a(n,t);return this.setSize(r,e),r}var o="",s=t.getAttribute("data-glightbox"),c=t.nodeName.toLowerCase();if("a"===c&&(o=t.href),"img"===c&&(o=t.src),n.href=o,l(n,(function(r,o){L(e,o)&&"width"!==o&&(n[o]=e[o]);var s=t.dataset[o];O(s)||(n[o]=i.sanitizeValue(s))})),n.content&&(n.type="inline"),!n.type&&o&&(n.type=this.sourceType(o)),O(s)){if(!n.title&&"a"==c){var h=t.title;O(h)||""===h||(n.title=h)}if(!n.title&&"img"==c){var u=t.alt;O(u)||""===u||(n.title=u)}}else{var d=[];l(n,(function(t,e){d.push(";\\s?"+e)})),d=d.join("\\s?:|"),""!==s.trim()&&l(n,(function(t,e){var r=s,o=new RegExp("s?"+e+"s?:s?(.*?)("+d+"s?:|$)"),a=r.match(o);if(a&&a.length&&a[1]){var l=a[1].trim().replace(/;\s*$/,"");n[e]=i.sanitizeValue(l)}}))}if(n.description&&"."==n.description.substring(0,1)&&document.querySelector(n.description))n.description=document.querySelector(n.description).innerHTML;else{var g=t.querySelector(".glightbox-desc");g&&(n.description=g.innerHTML)}return this.setSize(n,e),this.slideConfig=n,n}},{key:"setSize",value:function(t,e){var i="video"==t.type?this.checkSize(e.videosWidth):this.checkSize(e.width),n=this.checkSize(e.height);return t.width=L(t,"width")&&""!==t.width?this.checkSize(t.width):i,t.height=L(t,"height")&&""!==t.height?this.checkSize(t.height):n,t}},{key:"checkSize",value:function(t){return D(t)?"".concat(t,"px"):t}},{key:"sanitizeValue",value:function(t){return"true"!==t&&"false"!==t?t:"true"===t}}]),t}(),Q=function(){function t(i,n,r){e(this,t),this.element=i,this.instance=n,this.index=r}return n(t,[{key:"setContent",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(g(e,"loaded"))return!1;var n=this.instance.settings,r=this.slideConfig,o=S();E(n.beforeSlideLoad)&&n.beforeSlideLoad({index:this.index,slide:e,player:!1});var s=r.type,a=r.descPosition,l=e.querySelector(".gslide-media"),c=e.querySelector(".gslide-title"),h=e.querySelector(".gslide-desc"),d=e.querySelector(".gdesc-inner"),p=i,f="gSlideTitle_"+this.index,m="gSlideDesc_"+this.index;if(E(n.afterSlideLoad)&&(p=function(){E(i)&&i(),n.afterSlideLoad({index:t.index,slide:e,player:t.instance.getSlidePlayerInstance(t.index)})}),""==r.title&&""==r.description?d&&d.parentNode.parentNode.removeChild(d.parentNode):(c&&""!==r.title?(c.id=f,c.innerHTML=r.title):c.parentNode.removeChild(c),h&&""!==r.description?(h.id=m,o&&n.moreLength>0?(r.smallDescription=this.slideShortDesc(r.description,n.moreLength,n.moreText),h.innerHTML=r.smallDescription,this.descriptionEvents(h,r)):h.innerHTML=r.description):h.parentNode.removeChild(h),u(l.parentNode,"desc-".concat(a)),u(d.parentNode,"description-".concat(a))),u(l,"gslide-".concat(s)),u(e,"loaded"),"video"!==s){if("external"!==s)return"inline"===s?($.apply(this.instance,[e,r,this.index,p]),void(n.draggable&&new W({dragEl:e.querySelector(".gslide-inline"),toleranceX:n.dragToleranceX,toleranceY:n.dragToleranceY,slide:e,instance:this.instance}))):void("image"!==s?E(p)&&p():V(e,r,this.index,(function(){var i=e.querySelector("img");n.draggable&&new W({dragEl:i,toleranceX:n.dragToleranceX,toleranceY:n.dragToleranceY,slide:e,instance:t.instance}),r.zoomable&&i.naturalWidth>i.offsetWidth&&(u(i,"zoomable"),new X(i,e,(function(){t.instance.resize()}))),E(p)&&p()})));Z.apply(this,[e,r,this.index,p])}else B.apply(this.instance,[e,r,this.index,p])}},{key:"slideShortDesc",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=document.createElement("div");n.innerHTML=t;var r=i;if((t=n.innerText.trim()).length<=e)return t;var o=t.substr(0,e-1);return r?(n=null,o+'... <a href="#" class="desc-more">'+i+"</a>"):o}},{key:"descriptionEvents",value:function(t,e){var i=this,n=t.querySelector(".desc-more");if(!n)return!1;h("click",{onElement:n,withCallback:function(t,n){t.preventDefault();var r=document.body,o=p(n,".gslide-desc");if(!o)return!1;o.innerHTML=e.description,u(r,"gdesc-open");var s=h("click",{onElement:[r,p(o,".gslide-description")],withCallback:function(t,n){"a"!==t.target.nodeName.toLowerCase()&&(d(r,"gdesc-open"),u(r,"gdesc-closed"),o.innerHTML=e.smallDescription,i.descriptionEvents(o,e),setTimeout((function(){d(r,"gdesc-closed")}),400),s.destroy())}})}})}},{key:"create",value:function(){return b(this.instance.settings.slideHTML)}},{key:"getConfig",value:function(){var t=new G(this.instance.settings.slideExtraAttributes);return this.slideConfig=t.parseConfig(this.element,this.instance.settings),this.slideConfig}}]),t}(),J=S(),K=null!==S()||void 0!==document.createTouch||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints,tt=document.getElementsByTagName("html")[0],et={selector:".glightbox",elements:null,skin:"clean",theme:"clean",closeButton:!0,startAt:null,autoplayVideos:!0,autofocusVideos:!0,descPosition:"bottom",width:"900px",height:"506px",videosWidth:"960px",beforeSlideChange:null,afterSlideChange:null,beforeSlideLoad:null,afterSlideLoad:null,slideInserted:null,slideRemoved:null,slideExtraAttributes:null,onOpen:null,onClose:null,loop:!1,zoomable:!0,draggable:!0,dragAutoSnap:!1,dragToleranceX:40,dragToleranceY:65,preload:!0,oneSlidePerOpen:!1,touchNavigation:!0,touchFollowAxis:!0,keyboardNavigation:!0,closeOnOutsideClick:!0,plugins:!1,plyr:{css:"https://cdn.plyr.io/3.6.3/plyr.css",js:"https://cdn.plyr.io/3.6.3/plyr.js",config:{ratio:"16:9",fullscreen:{enabled:!0,iosNative:!0},youtube:{noCookie:!0,rel:0,showinfo:0,iv_load_policy:3},vimeo:{byline:!1,portrait:!1,title:!1,transparent:!1}}},openEffect:"zoom",closeEffect:"zoom",slideEffect:"slide",moreText:"See more",moreLength:60,cssEfects:{fade:{in:"fadeIn",out:"fadeOut"},zoom:{in:"zoomIn",out:"zoomOut"},slide:{in:"slideInRight",out:"slideOutLeft"},slideBack:{in:"slideInLeft",out:"slideOutRight"},none:{in:"none",out:"none"}},svg:{close:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',next:'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',prev:'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'},slideHTML:'<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',lightboxHTML:'<div id="glightbox-body" class="glightbox-container">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gnext gbtn" tabindex="0" aria-label="Next">{nextSVG}</button>\n    <button class="gprev gbtn" tabindex="1" aria-label="Previous">{prevSVG}</button>\n    <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>\n</div>\n</div>'},it=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),this.settings=a(et,i),this.effectsClasses=this.getAnimationClasses(),this.videoPlayers={},this.apiEvents=[],this.fullElementsList=!1}return n(t,[{key:"init",value:function(){var t=this,e=this.getSelector();e&&(this.baseEvents=h("click",{onElement:e,withCallback:function(e,i){e.preventDefault(),t.open(i)}})),this.elements=this.getElements()}},{key:"open",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(0==this.elements.length)return!1;this.activeSlide=null,this.prevActiveSlideIndex=null,this.prevActiveSlide=null;var i=D(e)?e:this.settings.startAt;if(A(t)){var n=t.getAttribute("data-gallery");n&&(this.fullElementsList=this.elements,this.elements=this.getGalleryElements(this.elements,n)),O(i)&&(i=this.getElementIndex(t))<0&&(i=0)}D(i)||(i=0),this.build(),f(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.in);var r=document.body,o=window.innerWidth-document.documentElement.clientWidth;if(o>0){var s=document.createElement("style");s.type="text/css",s.className="gcss-styles",s.innerText=".gscrollbar-fixer {margin-right: ".concat(o,"px}"),document.head.appendChild(s),u(r,"gscrollbar-fixer")}u(r,"glightbox-open"),u(tt,"glightbox-open"),J&&(u(document.body,"glightbox-mobile"),this.settings.slideEffect="slide"),this.showSlide(i,!0),1==this.elements.length?(u(this.prevButton,"glightbox-button-hidden"),u(this.nextButton,"glightbox-button-hidden")):(d(this.prevButton,"glightbox-button-hidden"),d(this.nextButton,"glightbox-button-hidden")),this.lightboxOpen=!0,this.trigger("open"),E(this.settings.onOpen)&&this.settings.onOpen(),K&&this.settings.touchNavigation&&H(this),this.settings.keyboardNavigation&&I(this)}},{key:"openAt",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.open(null,t)}},{key:"showSlide",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];v(this.loader),this.index=parseInt(e);var n=this.slidesContainer.querySelector(".current");n&&d(n,"current"),this.slideAnimateOut();var r=this.slidesContainer.querySelectorAll(".gslide")[e];if(g(r,"loaded"))this.slideAnimateIn(r,i),y(this.loader);else{v(this.loader);var o=this.elements[e],s={index:this.index,slide:r,slideNode:r,slideConfig:o.slideConfig,slideIndex:this.index,trigger:o.node,player:null};this.trigger("slide_before_load",s),o.instance.setContent(r,(function(){y(t.loader),t.resize(),t.slideAnimateIn(r,i),t.trigger("slide_after_load",s)}))}this.slideDescription=r.querySelector(".gslide-description"),this.slideDescriptionContained=this.slideDescription&&g(this.slideDescription.parentNode,"gslide-media"),this.settings.preload&&(this.preloadSlide(e+1),this.preloadSlide(e-1)),this.updateNavigationClasses(),this.activeSlide=r}},{key:"preloadSlide",value:function(t){var e=this;if(t<0||t>this.elements.length-1)return!1;if(O(this.elements[t]))return!1;var i=this.slidesContainer.querySelectorAll(".gslide")[t];if(g(i,"loaded"))return!1;var n=this.elements[t],r=n.type,o={index:t,slide:i,slideNode:i,slideConfig:n.slideConfig,slideIndex:t,trigger:n.node,player:null};this.trigger("slide_before_load",o),"video"==r||"external"==r?setTimeout((function(){n.instance.setContent(i,(function(){e.trigger("slide_after_load",o)}))}),200):n.instance.setContent(i,(function(){e.trigger("slide_after_load",o)}))}},{key:"prevSlide",value:function(){this.goToSlide(this.index-1)}},{key:"nextSlide",value:function(){this.goToSlide(this.index+1)}},{key:"goToSlide",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.prevActiveSlide=this.activeSlide,this.prevActiveSlideIndex=this.index,!this.loop()&&(t<0||t>this.elements.length-1))return!1;t<0?t=this.elements.length-1:t>=this.elements.length&&(t=0),this.showSlide(t)}},{key:"insertSlide",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;e<0&&(e=this.elements.length);var i=new Q(t,this,e),n=i.getConfig(),r=a({},n),o=i.create(),s=this.elements.length-1;r.index=e,r.node=!1,r.instance=i,r.slideConfig=n,this.elements.splice(e,0,r);var l=null,c=null;if(this.slidesContainer){if(e>s)this.slidesContainer.appendChild(o);else{var h=this.slidesContainer.querySelectorAll(".gslide")[e];this.slidesContainer.insertBefore(o,h)}(this.settings.preload&&0==this.index&&0==e||this.index-1==e||this.index+1==e)&&this.preloadSlide(e),0==this.index&&0==e&&(this.index=1),this.updateNavigationClasses(),l=this.slidesContainer.querySelectorAll(".gslide")[e],c=this.getSlidePlayerInstance(e),r.slideNode=l}this.trigger("slide_inserted",{index:e,slide:l,slideNode:l,slideConfig:n,slideIndex:e,trigger:null,player:c}),E(this.settings.slideInserted)&&this.settings.slideInserted({index:e,slide:l,player:c})}},{key:"removeSlide",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;if(t<0||t>this.elements.length-1)return!1;var e=this.slidesContainer&&this.slidesContainer.querySelectorAll(".gslide")[t];e&&(this.getActiveSlideIndex()==t&&(t==this.elements.length-1?this.prevSlide():this.nextSlide()),e.parentNode.removeChild(e)),this.elements.splice(t,1),this.trigger("slide_removed",t),E(this.settings.slideRemoved)&&this.settings.slideRemoved(t)}},{key:"slideAnimateIn",value:function(t,e){var i=this,n=t.querySelector(".gslide-media"),r=t.querySelector(".gslide-description"),o={index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlide,slideConfig:O(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:O(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},s={index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideConfig:this.elements[this.index].slideConfig,slideIndex:this.index,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)};if(n.offsetWidth>0&&r&&(y(r),r.style.display=""),d(t,this.effectsClasses),e)f(t,this.settings.cssEfects[this.settings.openEffect].in,(function(){i.settings.autoplayVideos&&i.slidePlayerPlay(t),i.trigger("slide_changed",{prev:o,current:s}),E(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[o,s])}));else{var a=this.settings.slideEffect,l="none"!==a?this.settings.cssEfects[a].in:a;this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(l=this.settings.cssEfects.slideBack.in),f(t,l,(function(){i.settings.autoplayVideos&&i.slidePlayerPlay(t),i.trigger("slide_changed",{prev:o,current:s}),E(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[o,s])}))}setTimeout((function(){i.resize(t)}),100),u(t,"current")}},{key:"slideAnimateOut",value:function(){if(!this.prevActiveSlide)return!1;var t=this.prevActiveSlide;d(t,this.effectsClasses),u(t,"prev");var e=this.settings.slideEffect,i="none"!==e?this.settings.cssEfects[e].out:e;this.slidePlayerPause(t),this.trigger("slide_before_change",{prev:{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlideIndex,slideConfig:O(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:O(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},current:{index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideIndex:this.index,slideConfig:this.elements[this.index].slideConfig,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)}}),E(this.settings.beforeSlideChange)&&this.settings.beforeSlideChange.apply(this,[{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},{index:this.index,slide:this.activeSlide,player:this.getSlidePlayerInstance(this.index)}]),this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(i=this.settings.cssEfects.slideBack.out),f(t,i,(function(){var e=t.querySelector(".gslide-media"),i=t.querySelector(".gslide-description");e.style.transform="",d(e,"greset"),e.style.opacity="",i&&(i.style.opacity=""),d(t,"prev")}))}},{key:"getAllPlayers",value:function(){return this.videoPlayers}},{key:"getSlidePlayerInstance",value:function(t){var e="gvideo"+t,i=this.getAllPlayers();return!(!L(i,e)||!i[e])&&i[e]}},{key:"stopSlideVideo",value:function(t){if(A(t)){var e=t.querySelector(".gvideo-wrapper");e&&(t=e.getAttribute("data-index"))}console.log("stopSlideVideo is deprecated, use slidePlayerPause");var i=this.getSlidePlayerInstance(t);i&&i.playing&&i.pause()}},{key:"slidePlayerPause",value:function(t){if(A(t)){var e=t.querySelector(".gvideo-wrapper");e&&(t=e.getAttribute("data-index"))}var i=this.getSlidePlayerInstance(t);i&&i.playing&&i.pause()}},{key:"playSlideVideo",value:function(t){if(A(t)){var e=t.querySelector(".gvideo-wrapper");e&&(t=e.getAttribute("data-index"))}console.log("playSlideVideo is deprecated, use slidePlayerPlay");var i=this.getSlidePlayerInstance(t);i&&!i.playing&&i.play()}},{key:"slidePlayerPlay",value:function(t){if(A(t)){var e=t.querySelector(".gvideo-wrapper");e&&(t=e.getAttribute("data-index"))}var i=this.getSlidePlayerInstance(t);console.log("Player is"),console.log(i),i&&!i.playing&&(i.play(),this.settings.autofocusVideos&&i.elements.container.focus())}},{key:"setElements",value:function(t){var e=this;this.settings.elements=!1;var i=[];t&&t.length&&l(t,(function(t,n){var r=new Q(t,e,n),o=r.getConfig(),s=a({},o);s.slideConfig=o,s.instance=r,s.index=n,i.push(s)})),this.elements=i,this.lightboxOpen&&(this.slidesContainer.innerHTML="",this.elements.length&&(l(this.elements,(function(){var t=b(e.settings.slideHTML);e.slidesContainer.appendChild(t)})),this.showSlide(0,!0)))}},{key:"getElementIndex",value:function(t){var e=!1;return l(this.elements,(function(i,n){if(L(i,"node")&&i.node==t)return e=n,!0})),e}},{key:"getElements",value:function(){var t=this,e=[];this.elements=this.elements?this.elements:[],!O(this.settings.elements)&&z(this.settings.elements)&&this.settings.elements.length&&l(this.settings.elements,(function(i,n){var r=new Q(i,t,n),o=r.getConfig(),s=a({},o);s.node=!1,s.index=n,s.instance=r,s.slideConfig=o,e.push(s)}));var i=!1;return this.getSelector()&&(i=document.querySelectorAll(this.getSelector())),i?(l(i,(function(i,n){var r=new Q(i,t,n),o=r.getConfig(),s=a({},o);s.node=i,s.index=n,s.instance=r,s.slideConfig=o,s.gallery=i.getAttribute("data-gallery"),e.push(s)})),e):e}},{key:"getGalleryElements",value:function(t,e){return t.filter((function(t){return t.gallery==e}))}},{key:"getSelector",value:function(){return!this.settings.elements&&(this.settings.selector&&"data-"==this.settings.selector.substring(0,5)?"*[".concat(this.settings.selector,"]"):this.settings.selector)}},{key:"getActiveSlide",value:function(){return this.slidesContainer.querySelectorAll(".gslide")[this.index]}},{key:"getActiveSlideIndex",value:function(){return this.index}},{key:"getAnimationClasses",value:function(){var t=[];for(var e in this.settings.cssEfects)if(this.settings.cssEfects.hasOwnProperty(e)){var i=this.settings.cssEfects[e];t.push("g".concat(i.in)),t.push("g".concat(i.out))}return t.join(" ")}},{key:"build",value:function(){var t=this;if(this.built)return!1;var e=L(this.settings.svg,"next")?this.settings.svg.next:"",i=L(this.settings.svg,"prev")?this.settings.svg.prev:"",n=L(this.settings.svg,"close")?this.settings.svg.close:"",r=this.settings.lightboxHTML;r=b(r=(r=(r=r.replace(/{nextSVG}/g,e)).replace(/{prevSVG}/g,i)).replace(/{closeSVG}/g,n)),document.body.appendChild(r);var o=document.getElementById("glightbox-body");this.modal=o;var s=o.querySelector(".gclose");this.prevButton=o.querySelector(".gprev"),this.nextButton=o.querySelector(".gnext"),this.overlay=o.querySelector(".goverlay"),this.loader=o.querySelector(".gloader"),this.slidesContainer=document.getElementById("glightbox-slider"),this.events={},u(this.modal,"glightbox-"+this.settings.skin),this.settings.closeButton&&s&&(this.events.close=h("click",{onElement:s,withCallback:function(e,i){e.preventDefault(),t.close()}})),s&&!this.settings.closeButton&&s.parentNode.removeChild(s),this.nextButton&&(this.events.next=h("click",{onElement:this.nextButton,withCallback:function(e,i){e.preventDefault(),t.nextSlide()}})),this.prevButton&&(this.events.prev=h("click",{onElement:this.prevButton,withCallback:function(e,i){e.preventDefault(),t.prevSlide()}})),this.settings.closeOnOutsideClick&&(this.events.outClose=h("click",{onElement:o,withCallback:function(e,i){t.preventOutsideClick||g(document.body,"glightbox-mobile")||p(e.target,".ginner-container")||p(e.target,".gbtn")||g(e.target,"gnext")||g(e.target,"gprev")||t.close()}})),l(this.elements,(function(e,i){t.slidesContainer.appendChild(e.instance.create()),e.slideNode=t.slidesContainer.querySelectorAll(".gslide")[i]})),K&&u(document.body,"glightbox-touch"),this.events.resize=h("resize",{onElement:window,withCallback:function(){t.resize()}}),this.built=!0}},{key:"resize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if((t=t||this.activeSlide)&&!g(t,"zoomed")){var e=x(),i=t.querySelector(".gvideo-wrapper"),n=t.querySelector(".gslide-image"),r=this.slideDescription,o=e.width,s=e.height;if(o<=768?u(document.body,"glightbox-mobile"):d(document.body,"glightbox-mobile"),i||n){var a=!1;if(r&&(g(r,"description-bottom")||g(r,"description-top"))&&!g(r,"gabsolute")&&(a=!0),n)if(o<=768)n.querySelector("img").setAttribute("style","");else if(a){var l=r.offsetHeight,c=n.querySelector("img");c.setAttribute("style","max-height: calc(100vh - ".concat(l,"px)")),r.setAttribute("style","max-width: ".concat(c.offsetWidth,"px;"))}if(i){var h=(L(this.settings.plyr.config,"ratio")?this.settings.plyr.config.ratio:"16:9").split(":"),p=900,f=p/(parseInt(h[0])/parseInt(h[1]));if(f=Math.floor(f),a&&(s-=r.offsetHeight),s<f&&o>p){var m=i.offsetWidth,v=i.offsetHeight,y=s/v,b={width:m*y,height:v*y};i.parentNode.setAttribute("style","max-width: ".concat(b.width,"px")),a&&r.setAttribute("style","max-width: ".concat(b.width,"px;"))}else i.parentNode.style.maxWidth="".concat(p,"px"),a&&r.setAttribute("style","max-width: ".concat(p,"px;"))}}}}},{key:"reload",value:function(){this.init()}},{key:"updateNavigationClasses",value:function(){var t=this.loop();d(this.nextButton,"disabled"),d(this.prevButton,"disabled"),0==this.index&&this.elements.length-1==0?(u(this.prevButton,"disabled"),u(this.nextButton,"disabled")):0!==this.index||t?this.index!==this.elements.length-1||t||u(this.nextButton,"disabled"):u(this.prevButton,"disabled")}},{key:"loop",value:function(){var t=L(this.settings,"loopAtEnd")?this.settings.loopAtEnd:null;return t=L(this.settings,"loop")?this.settings.loop:t}},{key:"close",value:function(){var t=this;if(!this.lightboxOpen){if(this.events){for(var e in this.events)this.events.hasOwnProperty(e)&&this.events[e].destroy();this.events=null}return!1}if(this.closing)return!1;this.closing=!0,this.slidePlayerPause(this.activeSlide),this.fullElementsList&&(this.elements=this.fullElementsList),u(this.modal,"glightbox-closing"),f(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.out),f(this.activeSlide,this.settings.cssEfects[this.settings.closeEffect].out,(function(){if(t.activeSlide=null,t.prevActiveSlideIndex=null,t.prevActiveSlide=null,t.built=!1,t.events){for(var e in t.events)t.events.hasOwnProperty(e)&&t.events[e].destroy();t.events=null}var i=document.body;d(tt,"glightbox-open"),d(i,"glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"),t.modal.parentNode.removeChild(t.modal),t.trigger("close"),E(t.settings.onClose)&&t.settings.onClose();var n=document.querySelector(".gcss-styles");n&&n.parentNode.removeChild(n),t.lightboxOpen=!1,t.closing=null}))}},{key:"destroy",value:function(){this.close(),this.clearAllEvents(),this.baseEvents&&this.baseEvents.destroy()}},{key:"on",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t||!E(e))throw new TypeError("Event name and callback must be defined");this.apiEvents.push({evt:t,once:i,callback:e})}},{key:"once",value:function(t,e){this.on(t,e,!0)}},{key:"trigger",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[];l(this.apiEvents,(function(e,r){var o=e.evt,s=e.once,a=e.callback;o==t&&(a(i),s&&n.push(r))})),n.length&&l(n,(function(t){return e.apiEvents.splice(t,1)}))}},{key:"clearAllEvents",value:function(){this.apiEvents.splice(0,this.apiEvents.length)}},{key:"version",value:function(){return"3.0.7"}}]),t}();return function(){var t=new it(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{});return t.init(),t}}()}));e.a=n}).call(this,i(44))},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,i){"use strict";var n=i(20),r=i(62),o=i(15),s=i(24),a=i(70),l="Array Iterator",c=s.set,h=s.getterFor(l);t.exports=a(Array,"Array",(function(t,e){c(this,{type:l,target:n(t),index:0,kind:e})}),(function(){var t=h(this),e=t.target,i=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==i?{value:n,done:!1}:"values"==i?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},function(t,e,i){var n=i(2),r=i(32),o=i(9),s=n("unscopables"),a=Array.prototype;null==a[s]&&o.f(a,s,{configurable:!0,value:r(null)}),t.exports=function(t){a[s][t]=!0}},function(t,e,i){var n=i(49);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,i){var n=i(8),r=i(9),o=i(13),s=i(65);t.exports=n?Object.defineProperties:function(t,e){o(t);for(var i,n=s(e),a=n.length,l=0;a>l;)r.f(t,i=n[l++],e[i]);return t}},function(t,e,i){var n=i(50),r=i(34);t.exports=Object.keys||function(t){return n(t,r)}},function(t,e,i){var n=i(20),r=i(12),o=i(51),s=function(t){return function(e,i,s){var a,l=n(e),c=r(l.length),h=o(s,c);if(t&&i!=i){for(;c>h;)if((a=l[h++])!=a)return!0}else for(;c>h;h++)if((t||h in l)&&l[h]===i)return t||h||0;return!t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)}},function(t,e,i){var n=i(35);t.exports=n("document","documentElement")},function(t,e,i){var n=i(1);t.exports=n},function(t,e,i){var n=i(1),r=i(52),o=n.WeakMap;t.exports="function"==typeof o&&/native code/.test(r(o))},function(t,e,i){"use strict";var n=i(25),r=i(76),o=i(26),s=i(18),a=i(39),l=i(4),c=i(16),h=i(2),u=i(27),d=i(15),g=i(53),p=g.IteratorPrototype,f=g.BUGGY_SAFARI_ITERATORS,m=h("iterator"),v="keys",y="values",b="entries",x=function(){return this};t.exports=function(t,e,i,h,g,w,_){r(i,e,h);var k,S,E,M=function(t){if(t===g&&O)return O;if(!f&&t in T)return T[t];switch(t){case v:case y:case b:return function(){return new i(this,t)}}return function(){return new i(this)}},A=e+" Iterator",z=!1,T=t.prototype,C=T[m]||T["@@iterator"]||g&&T[g],O=!f&&C||M(g),L="Array"==e&&T.entries||C;if(L&&(k=o(L.call(new t)),p!==Object.prototype&&k.next&&(u||o(k)===p||(s?s(k,p):"function"!=typeof k[m]&&l(k,m,x)),a(k,A,!0,!0),u&&(d[A]=x))),g==y&&C&&C.name!==y&&(z=!0,O=function(){return C.call(this)}),u&&!_||T[m]===O||l(T,m,O),d[e]=O,g)if(S={values:M(y),keys:w?O:M(v),entries:M(b)},_)for(E in S)(f||z||!(E in T))&&c(T,E,S[E]);else n({target:e,proto:!0,forced:f||z},S);return S}},function(t,e,i){"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!n.call({1:2},1);e.f=o?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},function(t,e,i){var n=i(5),r=i(73),o=i(37),s=i(9);t.exports=function(t,e){for(var i=r(e),a=s.f,l=o.f,c=0;c<i.length;c++){var h=i[c];n(t,h)||a(t,h,l(e,h))}}},function(t,e,i){var n=i(35),r=i(38),o=i(74),s=i(13);t.exports=n("Reflect","ownKeys")||function(t){var e=r.f(s(t)),i=o.f;return i?e.concat(i(t)):e}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,i){var n=i(3),r=/#|\.prototype\./,o=function(t,e){var i=a[s(t)];return i==c||i!=l&&("function"==typeof e?n(e):!!e)},s=o.normalize=function(t){return String(t).replace(r,".").toLowerCase()},a=o.data={},l=o.NATIVE="N",c=o.POLYFILL="P";t.exports=o},function(t,e,i){"use strict";var n=i(53).IteratorPrototype,r=i(32),o=i(23),s=i(39),a=i(15),l=function(){return this};t.exports=function(t,e,i){var c=e+" Iterator";return t.prototype=r(n,{next:o(1,i)}),s(t,c,!1,!0),a[c]=l,t}},function(t,e,i){var n=i(3);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,i){var n=i(10);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,i){"use strict";i(80);var n=i(16),r=i(3),o=i(2),s=i(40),a=i(4),l=o("species"),c=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),h="$0"==="a".replace(/./,"$0"),u=o("replace"),d=!!/./[u]&&""===/./[u]("a","$0"),g=!r((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2!==i.length||"a"!==i[0]||"b"!==i[1]}));t.exports=function(t,e,i,u){var p=o(t),f=!r((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),m=f&&!r((function(){var e=!1,i=/a/;return"split"===t&&((i={}).constructor={},i.constructor[l]=function(){return i},i.flags="",i[p]=/./[p]),i.exec=function(){return e=!0,null},i[p](""),!e}));if(!f||!m||"replace"===t&&(!c||!h||d)||"split"===t&&!g){var v=/./[p],y=i(p,""[t],(function(t,e,i,n,r){return e.exec===s?f&&!r?{done:!0,value:v.call(e,i,n)}:{done:!0,value:t.call(i,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:h,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),b=y[0],x=y[1];n(String.prototype,t,b),n(RegExp.prototype,p,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}u&&a(RegExp.prototype[p],"sham",!0)}},function(t,e,i){"use strict";var n=i(25),r=i(40);n({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},function(t,e,i){"use strict";var n=i(13);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,i){"use strict";var n=i(3);function r(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,i){"use strict";var n=i(84).charAt;t.exports=function(t,e,i){return e+(i?n(t,e).length:1)}},function(t,e,i){var n=i(14),r=i(22),o=function(t){return function(e,i){var o,s,a=String(r(e)),l=n(i),c=a.length;return l<0||l>=c?t?"":void 0:(o=a.charCodeAt(l))<55296||o>56319||l+1===c||(s=a.charCodeAt(l+1))<56320||s>57343?t?a.charAt(l):o:t?a.slice(l,l+2):s-56320+(o-55296<<10)+65536}};t.exports={codeAt:o(!1),charAt:o(!0)}},function(t,e,i){var n=i(17),r=Math.floor,o="".replace,s=/\$([$&'`]|\d\d?|<[^>]*>)/g,a=/\$([$&'`]|\d\d?)/g;t.exports=function(t,e,i,l,c,h){var u=i+t.length,d=l.length,g=a;return void 0!==c&&(c=n(c),g=s),o.call(h,g,(function(n,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(u);case"<":s=c[o.slice(1,-1)];break;default:var a=+o;if(0===a)return n;if(a>d){var h=r(a/10);return 0===h?n:h<=d?void 0===l[h-1]?o.charAt(1):l[h-1]+o.charAt(1):n}s=l[a-1]}return void 0===s?"":s}))}},function(t,e,i){var n=i(21),r=i(40);t.exports=function(t,e){var i=t.exec;if("function"==typeof i){var o=i.call(t,e);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},function(t,e,i){i(11)("Float32",(function(t){return function(e,i,n){return t(this,e,i,n)}}))},function(t,e,i){var n=i(1),r=i(3),o=i(89),s=i(41).NATIVE_ARRAY_BUFFER_VIEWS,a=n.ArrayBuffer,l=n.Int8Array;t.exports=!s||!r((function(){l(1)}))||!r((function(){new l(-1)}))||!o((function(t){new l,new l(null),new l(1.5),new l(t)}),!0)||r((function(){return 1!==new l(new a(2),1,void 0).length}))},function(t,e,i){var n=i(2)("iterator"),r=!1;try{var o=0,s={next:function(){return{done:!!o++}},return:function(){r=!0}};s[n]=function(){return this},Array.from(s,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!r)return!1;var i=!1;try{var o={};o[n]=function(){return{next:function(){return{done:i=!0}}}},t(o)}catch(t){}return i}},function(t,e,i){var n={};n[i(2)("toStringTag")]="z",t.exports="[object z]"===String(n)},function(t,e,i){"use strict";var n=i(1),r=i(8),o=i(54),s=i(4),a=i(92),l=i(3),c=i(55),h=i(14),u=i(12),d=i(56),g=i(93),p=i(26),f=i(18),m=i(38).f,v=i(9).f,y=i(94),b=i(39),x=i(24),w=x.get,_=x.set,k="ArrayBuffer",S="DataView",E="Wrong index",M=n.ArrayBuffer,A=M,z=n.DataView,T=z&&z.prototype,C=Object.prototype,O=n.RangeError,L=g.pack,P=g.unpack,D=function(t){return[255&t]},I=function(t){return[255&t,t>>8&255]},j=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},N=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},R=function(t){return L(t,23,4)},q=function(t){return L(t,52,8)},F=function(t,e){v(t.prototype,e,{get:function(){return w(this)[e]}})},Y=function(t,e,i,n){var r=d(i),o=w(t);if(r+e>o.byteLength)throw O(E);var s=w(o.buffer).bytes,a=r+o.byteOffset,l=s.slice(a,a+e);return n?l:l.reverse()},H=function(t,e,i,n,r,o){var s=d(i),a=w(t);if(s+e>a.byteLength)throw O(E);for(var l=w(a.buffer).bytes,c=s+a.byteOffset,h=n(+r),u=0;u<e;u++)l[c+u]=h[o?u:e-u-1]};if(o){if(!l((function(){M(1)}))||!l((function(){new M(-1)}))||l((function(){return new M,new M(1.5),new M(NaN),M.name!=k}))){for(var X,W=(A=function(t){return c(this,A),new M(d(t))}).prototype=M.prototype,V=m(M),B=0;V.length>B;)(X=V[B++])in A||s(A,X,M[X]);W.constructor=A}f&&p(T)!==C&&f(T,C);var U=new z(new A(2)),$=T.setInt8;U.setInt8(0,2147483648),U.setInt8(1,2147483649),!U.getInt8(0)&&U.getInt8(1)||a(T,{setInt8:function(t,e){$.call(this,t,e<<24>>24)},setUint8:function(t,e){$.call(this,t,e<<24>>24)}},{unsafe:!0})}else A=function(t){c(this,A,k);var e=d(t);_(this,{bytes:y.call(new Array(e),0),byteLength:e}),r||(this.byteLength=e)},z=function(t,e,i){c(this,z,S),c(t,A,S);var n=w(t).byteLength,o=h(e);if(o<0||o>n)throw O("Wrong offset");if(o+(i=void 0===i?n-o:u(i))>n)throw O("Wrong length");_(this,{buffer:t,byteLength:i,byteOffset:o}),r||(this.buffer=t,this.byteLength=i,this.byteOffset=o)},r&&(F(A,"byteLength"),F(z,"buffer"),F(z,"byteLength"),F(z,"byteOffset")),a(z.prototype,{getInt8:function(t){return Y(this,1,t)[0]<<24>>24},getUint8:function(t){return Y(this,1,t)[0]},getInt16:function(t){var e=Y(this,2,t,arguments.length>1?arguments[1]:void 0);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=Y(this,2,t,arguments.length>1?arguments[1]:void 0);return e[1]<<8|e[0]},getInt32:function(t){return N(Y(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return N(Y(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return P(Y(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return P(Y(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,e){H(this,1,t,D,e)},setUint8:function(t,e){H(this,1,t,D,e)},setInt16:function(t,e){H(this,2,t,I,e,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,e){H(this,2,t,I,e,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,e){H(this,4,t,j,e,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,e){H(this,4,t,j,e,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,e){H(this,4,t,R,e,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,e){H(this,8,t,q,e,arguments.length>2?arguments[2]:void 0)}});b(A,k),b(z,S),t.exports={ArrayBuffer:A,DataView:z}},function(t,e,i){var n=i(16);t.exports=function(t,e,i){for(var r in e)n(t,r,e[r],i);return t}},function(t,e){var i=1/0,n=Math.abs,r=Math.pow,o=Math.floor,s=Math.log,a=Math.LN2;t.exports={pack:function(t,e,l){var c,h,u,d=new Array(l),g=8*l-e-1,p=(1<<g)-1,f=p>>1,m=23===e?r(2,-24)-r(2,-77):0,v=t<0||0===t&&1/t<0?1:0,y=0;for((t=n(t))!=t||t===i?(h=t!=t?1:0,c=p):(c=o(s(t)/a),t*(u=r(2,-c))<1&&(c--,u*=2),(t+=c+f>=1?m/u:m*r(2,1-f))*u>=2&&(c++,u/=2),c+f>=p?(h=0,c=p):c+f>=1?(h=(t*u-1)*r(2,e),c+=f):(h=t*r(2,f-1)*r(2,e),c=0));e>=8;d[y++]=255&h,h/=256,e-=8);for(c=c<<e|h,g+=e;g>0;d[y++]=255&c,c/=256,g-=8);return d[--y]|=128*v,d},unpack:function(t,e){var n,o=t.length,s=8*o-e-1,a=(1<<s)-1,l=a>>1,c=s-7,h=o-1,u=t[h--],d=127&u;for(u>>=7;c>0;d=256*d+t[h],h--,c-=8);for(n=d&(1<<-c)-1,d>>=-c,c+=e;c>0;n=256*n+t[h],h--,c-=8);if(0===d)d=1-l;else{if(d===a)return n?NaN:u?-1/0:i;n+=r(2,e),d-=l}return(u?-1:1)*n*r(2,d-e)}}},function(t,e,i){"use strict";var n=i(17),r=i(51),o=i(12);t.exports=function(t){for(var e=n(this),i=o(e.length),s=arguments.length,a=r(s>1?arguments[1]:void 0,i),l=s>2?arguments[2]:void 0,c=void 0===l?i:r(l,i);c>a;)e[a++]=t;return e}},function(t,e,i){var n=i(96);t.exports=function(t,e){var i=n(t);if(i%e)throw RangeError("Wrong offset");return i}},function(t,e,i){var n=i(14);t.exports=function(t){var e=n(t);if(e<0)throw RangeError("The argument can't be less than 0");return e}},function(t,e,i){var n=i(17),r=i(12),o=i(98),s=i(99),a=i(57),l=i(41).aTypedArrayConstructor;t.exports=function(t){var e,i,c,h,u,d,g=n(t),p=arguments.length,f=p>1?arguments[1]:void 0,m=void 0!==f,v=o(g);if(null!=v&&!s(v))for(d=(u=v.call(g)).next,g=[];!(h=d.call(u)).done;)g.push(h.value);for(m&&p>2&&(f=a(f,arguments[2],2)),i=r(g.length),c=new(l(this))(i),e=0;i>e;e++)c[e]=m?f(g[e],e):g[e];return c}},function(t,e,i){var n=i(42),r=i(15),o=i(2)("iterator");t.exports=function(t){if(null!=t)return t[o]||t["@@iterator"]||r[n(t)]}},function(t,e,i){var n=i(2),r=i(15),o=n("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||s[o]===t)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,i){var n=i(57),r=i(45),o=i(17),s=i(12),a=i(102),l=[].push,c=function(t){var e=1==t,i=2==t,c=3==t,h=4==t,u=6==t,d=7==t,g=5==t||u;return function(p,f,m,v){for(var y,b,x=o(p),w=r(x),_=n(f,m,3),k=s(w.length),S=0,E=v||a,M=e?E(p,k):i||d?E(p,0):void 0;k>S;S++)if((g||S in w)&&(b=_(y=w[S],S,x),t))if(e)M[S]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return S;case 2:l.call(M,y)}else switch(t){case 4:return!1;case 7:l.call(M,y)}return u?-1:c||h?h:M}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},function(t,e,i){var n=i(10),r=i(103),o=i(2)("species");t.exports=function(t,e){var i;return r(t)&&("function"!=typeof(i=t.constructor)||i!==Array&&!r(i.prototype)?n(i)&&null===(i=i[o])&&(i=void 0):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},function(t,e,i){var n=i(21);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,e,i){"use strict";var n=i(35),r=i(9),o=i(2),s=i(8),a=o("species");t.exports=function(t){var e=n(t),i=r.f;s&&e&&!e[a]&&i(e,a,{configurable:!0,get:function(){return this}})}},function(t,e,i){var n=i(10),r=i(18);t.exports=function(t,e,i){var o,s;return r&&"function"==typeof(o=e.constructor)&&o!==i&&n(s=o.prototype)&&s!==i.prototype&&r(t,s),t}},function(t,e,i){i(11)("Float64",(function(t){return function(e,i,n){return t(this,e,i,n)}}))},function(t,e,i){i(11)("Int8",(function(t){return function(e,i,n){return t(this,e,i,n)}}))},function(t,e,i){i(11)("Int16",(function(t){return function(e,i,n){return t(this,e,i,n)}}))},function(t,e,i){i(11)("Int32",(function(t){return function(e,i,n){return t(this,e,i,n)}}))},function(t,e,i){i(11)("Uint8",(function(t){return function(e,i,n){return t(this,e,i,n)}}))},function(t,e,i){i(11)("Uint8",(function(t){return function(e,i,n){return t(this,e,i,n)}}),!0)},function(t,e,i){i(11)("Uint16",(function(t){return function(e,i,n){return t(this,e,i,n)}}))},function(t,e,i){i(11)("Uint32",(function(t){return function(e,i,n){return t(this,e,i,n)}}))},function(t,e,i){"use strict";i.r(e);i(7),i(19);var n=t=>({get:e=>t.get(e),set:(e,i)=>(t.set(e,i),i)});const r=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,o=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,s=/<[a-z][^>]+$/i,a=/>[^<>]*$/,l=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,c=/\s+$/,h=(t,e)=>0<e--&&(s.test(t[e])||!a.test(t[e])&&h(t,e)),u=(t,e,i)=>o.test(e)?t:`<${e}${i.replace(c,"")}></${e}>`;const{isArray:d}=Array,{indexOf:g,slice:p}=[],f=(t,e)=>111===t.nodeType?1/e<0?e?(({firstChild:t,lastChild:e})=>{const i=document.createRange();return i.setStartAfter(t),i.setEndAfter(e),i.deleteContents(),t})(t):t.lastChild:e?t.valueOf():t.firstChild:t;var m=function(t){var e="fragment",i="template",n="content"in o(i)?function(t){var e=o(i);return e.innerHTML=t,e.content}:function(t){var n=o(e),s=o(i),a=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var l=RegExp.$1;s.innerHTML="<table>"+t+"</table>",a=s.querySelectorAll(l)}else s.innerHTML=t,a=s.childNodes;return r(n,a),n};return function(t,e){return("svg"===e?s:n)(t)};function r(t,e){for(var i=e.length;i--;)t.appendChild(e[0])}function o(i){return i===e?t.createDocumentFragment():t.createElementNS("http://www.w3.org/1999/xhtml",i)}function s(t){var i=o(e),n=o("div");return n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t+"</svg>",r(i,n.firstChild.childNodes),i}}(document);const v=({childNodes:t},e)=>t[e],y=t=>{const e=[];let{parentNode:i}=t;for(;i;)e.push(g.call(i.childNodes,t)),i=(t=i).parentNode;return e},{createTreeWalker:b,importNode:x}=document,w=1!=x.length,_=w?(t,e,i)=>x.call(document,m(t,e,i),!0):m,k=w?t=>b.call(document,t,129,null,!1):t=>b.call(document,t,129),S=(t,e,i)=>((t,e,i,n,r)=>{const o=i.length;let s=e.length,a=o,l=0,c=0,h=null;for(;l<s||c<a;)if(s===l){const e=a<o?c?n(i[c-1],-0).nextSibling:n(i[a-c],0):r;for(;c<a;)t.insertBefore(n(i[c++],1),e)}else if(a===c)for(;l<s;)h&&h.has(e[l])||t.removeChild(n(e[l],-1)),l++;else if(e[l]===i[c])l++,c++;else if(e[s-1]===i[a-1])s--,a--;else if(e[l]===i[a-1]&&i[c]===e[s-1]){const r=n(e[--s],-1).nextSibling;t.insertBefore(n(i[c++],1),n(e[l++],-1).nextSibling),t.insertBefore(n(i[--a],1),r),e[s]=i[a]}else{if(!h){h=new Map;let t=c;for(;t<a;)h.set(i[t],t++)}if(h.has(e[l])){const r=h.get(e[l]);if(c<r&&r<a){let o=l,u=1;for(;++o<s&&o<a&&h.get(e[o])===r+u;)u++;if(u>r-c){const o=n(e[l],0);for(;c<r;)t.insertBefore(n(i[c++],1),o)}else t.replaceChild(n(i[c++],1),n(e[l++],-1))}else l++}else t.removeChild(n(e[l++],-1))}return i})(t.parentNode,e,i,f,t),E=(t,e)=>"ref"===e?(t=>e=>{"function"==typeof e?e(t):e.current=t})(t):"aria"===e?(t=>e=>{for(const i in e){const n="role"===i?i:`aria-${i}`,r=e[i];null==r?t.removeAttribute(n):t.setAttribute(n,r)}})(t):".dataset"===e?(({dataset:t})=>e=>{for(const i in e){const n=e[i];null==n?delete t[i]:t[i]=n}})(t):"."===e.slice(0,1)?((t,e)=>i=>{t[e]=i})(t,e.slice(1)):"on"===e.slice(0,2)?((t,e)=>{let i,n=e.slice(2);return!(e in t)&&e.toLowerCase()in t&&(n=n.toLowerCase()),e=>{const r=d(e)?e:[e,!1];i!==r[0]&&(i&&t.removeEventListener(n,i,r[1]),(i=r[0])&&t.addEventListener(n,i,r[1]))}})(t,e):((t,e)=>{let i,n=!0;const r=document.createAttributeNS(null,e);return e=>{i!==e&&(i=e,null==i?n||(t.removeAttributeNode(r),n=!0):(r.value=e,n&&(t.setAttributeNodeNS(r),n=!1)))}})(t,e);function M(t){const{type:e,path:i}=t,n=i.reduceRight(v,this);return"node"===e?(t=>{let e,i,n=[];const r=o=>{switch(typeof o){case"string":case"number":case"boolean":e!==o&&(e=o,i?i.textContent=o:i=document.createTextNode(o),n=S(t,n,[i]));break;case"object":case"undefined":if(null==o){e!=o&&(e=o,n=S(t,n,[]));break}if(d(o)){e=o,0===o.length?n=S(t,n,[]):"object"==typeof o[0]?n=S(t,n,o):r(String(o));break}"ELEMENT_NODE"in o&&e!==o&&(e=o,n=S(t,n,11===o.nodeType?p.call(o.childNodes):[o]))}};return r})(n):"attr"===e?E(n,t.name):(t=>{let e;return i=>{e!=i&&(e=i,t.textContent=null==i?"":i)}})(n)}const A="isµ",z=n(new WeakMap),T=/^(?:plaintext|script|style|textarea|title|xmp)$/i,C=(t,e)=>{const i=((t,e,i)=>{const n=[],{length:o}=t;for(let i=1;i<o;i++){const o=t[i-1];n.push(r.test(o)&&h(t,i)?o.replace(r,((t,n,r)=>`${e}${i-1}=${r||'"'}${n}${r?"":'"'}`)):`${o}\x3c!--${e}${i-1}--\x3e`)}n.push(t[o-1]);const s=n.join("").trim();return i?s:s.replace(l,u)})(e,A,"svg"===t),n=_(i,t),o=k(n),s=[],a=e.length-1;let c=0,d=`isµ${c}`;for(;c<a;){const t=o.nextNode();if(!t)throw`bad template: ${i}`;if(8===t.nodeType)t.textContent===d&&(s.push({type:"node",path:y(t)}),d="isµ"+ ++c);else{for(;t.hasAttribute(d);)s.push({type:"attr",path:y(t),name:t.getAttribute(d)}),t.removeAttribute(d),d="isµ"+ ++c;T.test(t.tagName)&&t.textContent.trim()===`\x3c!--${d}--\x3e`&&(t.textContent="",s.push({type:"text",path:y(t)}),d="isµ"+ ++c)}}return{content:n,nodes:s}},O=(t,e)=>{const{content:i,nodes:n}=z.get(e)||z.set(e,C(t,e)),r=x.call(document,i,!0);return{content:r,updates:n.map(M,r)}},L=(t,{type:e,template:i,values:n})=>{const{length:r}=n;P(t,n,r);let{entry:o}=t;o&&o.template===i&&o.type===e||(t.entry=o=((t,e)=>{const{content:i,updates:n}=O(t,e);return{type:t,template:e,content:i,updates:n,wire:null}})(e,i));const{content:s,updates:a,wire:l}=o;for(let t=0;t<r;t++)a[t](n[t]);return l||(o.wire=(t=>{const{childNodes:e}=t,{length:i}=e;if(i<2)return i?e[0]:t;const n=p.call(e,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:n[0],lastChild:n[i-1],valueOf(){if(e.length!==i){let e=0;for(;e<i;)t.appendChild(n[e++])}return t}}})(s))},P=({stack:t},e,i)=>{for(let n=0;n<i;n++){const i=e[n];i instanceof D?e[n]=L(t[n]||(t[n]={stack:[],entry:null,wire:null}),i):d(i)?P(t[n]||(t[n]={stack:[],entry:null,wire:null}),i,i.length):t[n]=null}i<t.length&&t.splice(i)};function D(t,e,i){this.type=t,this.template=e,this.values=i}const{create:I,defineProperties:j}=Object,N=t=>{const e=n(new WeakMap);return j(((e,...i)=>new D(t,e,i)),{for:{value(i,n){const r=e.get(i)||e.set(i,I(null));return r[n]||(r[n]=(e=>(i,...n)=>L(e,{type:t,template:i,values:n}))({stack:[],entry:null,wire:null}))}},node:{value:(e,...i)=>L({stack:[],entry:null,wire:null},{type:t,template:e,values:i}).valueOf()}})},R=n(new WeakMap),q=(t,e)=>{const i="function"==typeof e?e():e,n=R.get(t)||R.set(t,{stack:[],entry:null,wire:null}),r=i instanceof D?L(n,i):i;return r!==n.wire&&(n.wire=r,t.textContent="",t.appendChild(r.valueOf())),t},F=N("html"),Y=N("svg");function H(t){for(var e=t[0],i=1,n=arguments.length;i<n;i++)e+=arguments[i]+t[i];return e}const{defineProperties:X,keys:W}=Object,V=(t,e,i,n,r)=>({configurable:!0,get:()=>n,set(o){(t||o!==n||e&&"object"==typeof o&&o)&&(n=o,i?r.call(this,n):r.call(this))}}),B=()=>{};const U=(({all:t=!1,shallow:e=!0,useState:i=B,getAttribute:n=((t,e)=>t.getAttribute(e))}={})=>(r,o,s)=>{const a=((t,e,i,n,r,o)=>{const s={},a=r!==B,l=[i,n,a];for(let i=W(t),n=0;n<i.length;n++){const c=e(t,i[n]),h=a?r(c):[c,r];o&&(h[1]=o),s[i[n]]=V.apply(null,l.concat(h))}return s})(o,((t,e)=>{let i=t[e],o=typeof i;return r.hasOwnProperty(e)?(i=r[e],delete r[e]):r.hasAttribute(e)&&(i=n(r,e),"number"==o?i=+i:"boolean"==o&&(i=!/^(?:false|0|)$/.test(i))),i}),t,e,i,s);return X(r,a)})({dom:!0}),$=customElements,{define:Z}=$,{create:G,defineProperties:Q,getOwnPropertyDescriptor:J,keys:K}=Object,tt="element",et=n(new Map([[tt,{c:HTMLElement,e:tt}]])),it=t=>document.createElement(t),nt=t=>et.get(t)||et.set(t,{c:it(t).constructor,e:t}),rt=(t,e)=>{const{attachShadow:i,attributeChanged:n,bound:r,connected:o,disconnected:s,handleEvent:a,init:l,observedAttributes:c,props:h,render:u,style:d}=e,g=new WeakMap,p={},f={},m=[],v=G(null),y=(t,e,n)=>{if(!g.has(t)){g.set(t,0),Q(t,{html:{configurable:!0,value:st.bind(i?t.attachShadow(i):t)}});for(let e=0;e<b;e++){const{type:i,options:n}=m[e];t.addEventListener(i,t,n)}r&&r.forEach(ot,t),h&&U(t,h,u),(l||u)&&(l||u).call(t),e&&(t[e]=n)}};for(let t=K(e),i=0,{length:n}=t;i<n;i++){const n=t[i];if(/^on./.test(n)&&!/Options$/.test(n)){const t=e[n+"Options"]||!1,i=n.toLowerCase();let r=i.slice(2);m.push({type:r,options:t}),v[r]=n,i!==n&&(r=i.slice(2,3)+n.slice(3),v[r]=n,m.push({type:r,options:t}))}switch(n){case"attachShadow":case"observedAttributes":case"style":break;default:f[n]=J(e,n)}}const{length:b}=m;if(b&&!a&&(f.handleEvent={value(t){this[v[t.type]](t)}}),null!==h)if(h)for(let t=K(h),e=0;e<t.length;e++){const i=t[e];f[i]={get(){return y(this),h[i]},set(t){y(this,i,t)}}}else f.props={get(){const t={};for(let{attributes:e}=this,{length:i}=e,n=0;n<i;n++){const{name:i,value:r}=e[n];t[i]=r}return t}};c&&(p.observedAttributes={value:c}),f.attributeChangedCallback={value(){y(this),n&&n.apply(this,arguments)}},f.connectedCallback={value(){y(this),o&&o.call(this)}},s&&(f.disconnectedCallback={value:s});const{c:x,e:w}=nt(e.extends||tt);class _ extends x{}Q(_,p),Q(_.prototype,f);const k=[t,_];return w!==tt&&k.push({extends:w}),Z.apply($,k),et.set(t,{c:_,e:w}),d&&(document.head.appendChild(it("style")).textContent=d(w===tt?t:w+'[is="'+t+'"]')),_};function ot(t){this[t]=this[t].bind(this)}function st(){return q(this,F.apply(null,arguments))}$.get("uce-lib")||$.define("uce-lib",class extends nt(tt).c{static get define(){return rt}static get render(){return q}static get html(){return F}static get svg(){return Y}static get css(){return H}}),function(){var t="function"==typeof Promise?Promise:function(t){var e,i=[],n=0;return t((function(t){e=t,n=1,i.splice(0).forEach(r)})),{then:r};function r(t){return n?setTimeout(t,0,e):i.push(t),this}},e=function(t,e){var i=function(t){for(var e=0,i=t.length;e<i;e++)n(t[e])},n=function(t){var e=t.target,i=t.attributeName,n=t.oldValue;e.attributeChangedCallback(i,n,e.getAttribute(i))};return function(r,o){var s=r.constructor.observedAttributes;return s&&t(o).then((function(){new e(i).observe(r,{attributes:!0,attributeOldValue:!0,attributeFilter:s});for(var t=0,o=s.length;t<o;t++)r.hasAttribute(s[t])&&n({target:r,attributeName:s[t],oldValue:null})})),r}},i=self,n=i.document,r=i.MutationObserver,o=i.Set,s=i.WeakMap,a=function(t){return"querySelectorAll"in t},l=[].filter,c=function(t){var e=new s,i=function(e){var i=t.query;if(i.length)for(var n=0,r=e.length;n<r;n++)c(l.call(e[n].addedNodes,a),!0,i),c(l.call(e[n].removedNodes,a),!1,i)},c=function i(n,r,s){for(var a,l,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new o,u=function(u,g,p,f){if(!c.has(g=n[p])){if(c.add(g),r)for(var m,v=h(g),y=0,b=s.length;y<b;y++)v.call(g,m=s[y])&&(e.has(g)||e.set(g,new o),(u=e.get(g)).has(m)||(u.add(m),t.handle(g,r,m)));else e.has(g)&&(u=e.get(g),e.delete(g),u.forEach((function(e){t.handle(g,r,e)})));i(d(g),r,s,c)}a=u,l=g},g=0,p=n.length;g<p;g++)u(a,l,g)},h=function(t){return t.matches||t.webkitMatchesSelector||t.msMatchesSelector},u=function(e){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];c(e,i,t.query)},d=function(t){return f.length?t.querySelectorAll(f):f},g=new r(i),p=t.root||n,f=t.query;return g.observe(p,{childList:!0,subtree:!0}),u(d(p)),{drop:function(t){for(var i=0,n=t.length;i<n;i++)e.delete(t[i])},flush:function(){i(g.takeRecords())},observer:g,parse:u}},h=self,u=h.document,d=h.Map,g=h.MutationObserver,p=h.Object,f=h.Set,m=h.WeakMap,v=h.Element,y=h.HTMLElement,b=h.Node,x=h.Error,w=h.TypeError,_=h.Reflect,k=self.Promise||t,S=p.defineProperty,E=p.keys,M=p.getOwnPropertyNames,A=p.setPrototypeOf,z=!self.customElements;if(z){var T=function(){var t=this.constructor;if(!O.has(t))throw new w("Illegal constructor");var e=O.get(t);if(N)return q(N,e);var i=C.call(u,e);return q(A(i,t.prototype),e)},C=u.createElement,O=new d,L=new d,P=new d,D=new d,I=[],j=c({query:I,handle:function(t,e,i){var n=P.get(i);if(e&&!n.isPrototypeOf(t)){N=A(t,n);try{new n.constructor}finally{N=null}}var r="".concat(e?"":"dis","connectedCallback");r in n&&t[r]()}}).parse,N=null,R=function(e){if(!L.has(e)){var i,n=new t((function(t){i=t}));L.set(e,{$:n,_:i})}return L.get(e).$},q=e(R,g);S(self,"customElements",{configurable:!0,value:{define:function(t,e){if(D.has(t))throw new x('the name "'.concat(t,'" has already been used with this registry'));O.set(e,t),P.set(t,e.prototype),D.set(t,e),I.push(t),R(t).then((function(){j(u.querySelectorAll(t))})),L.get(t)._(e)},get:function(t){return D.get(t)},whenDefined:R}}),S(T.prototype=y.prototype,"constructor",{value:T}),S(self,"HTMLElement",{configurable:!0,value:T}),S(u,"createElement",{configurable:!0,value:function(t,e){var i=e&&e.is,n=i?D.get(i):D.get(t);return n?new n:C.call(u,t)}}),"isConnected"in b.prototype||S(b.prototype,"isConnected",{configurable:!0,get:function(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else try{var F=function t(){return self.Reflect.construct(HTMLLIElement,[],t)};F.prototype=HTMLLIElement.prototype;var Y="extends-li";self.customElements.define("extends-li",F,{extends:"li"}),z=u.createElement("li",{is:Y}).outerHTML.indexOf(Y)<0;var H=self.customElements,X=H.get,W=H.whenDefined;S(self.customElements,"whenDefined",{configurable:!0,value:function(t){var e=this;return W.call(this,t).then((function(i){return i||X.call(e,t)}))}})}catch(t){z=!z}if(z){var V=function(t){var e=J.get(t);(0,e.parse)(e.root.querySelectorAll(this),t.isConnected)},B=self.customElements,U=v.prototype.attachShadow,$=u.createElement,Z=B.define,G=B.get,Q=(_||{construct:function(t){return t.call(this)}}).construct,J=new m,K=new f,tt=new d,et=new d,it=new d,nt=new d,rt=[],ot=[],st=function(t){return nt.get(t)||G.call(B,t)},at=function(t,e,i){var n=it.get(i);if(e&&!n.isPrototypeOf(t)){var r=E(t),o=r.map((function(e){var i=t[e];return delete t[e],i}));dt=A(t,n);try{new n.constructor}finally{dt=null;for(var s=0,a=r.length;s<a;s++)t[r[s]]=o[s]}}var l="".concat(e?"":"dis","connectedCallback");l in n&&t[l]()},lt=c({query:ot,handle:at}).parse,ct=c({query:rt,handle:function(t,e){J.has(t)&&(e?K.add(t):K.delete(t),V.call(ot,t))}}).parse,ht=function(t){if(!et.has(t)){var e,i=new k((function(t){e=t}));et.set(t,{$:i,_:e})}return et.get(t).$},ut=e(ht,g),dt=null;M(self).filter((function(t){return/^HTML/.test(t)})).forEach((function(t){var e=self[t];function i(){var t=this.constructor;if(!tt.has(t))throw new w("Illegal constructor");var i=tt.get(t),n=i.is,r=i.tag;if(n){if(dt)return ut(dt,n);var o=$.call(u,r);return o.setAttribute("is",n),ut(A(o,t.prototype),n)}return Q.call(this,e,[],t)}S(i.prototype=e.prototype,"constructor",{value:i}),S(self,t,{value:i})})),S(u,"createElement",{configurable:!0,value:function(t,e){var i=e&&e.is;if(i){var n=nt.get(i);if(n&&tt.get(n).tag===t)return new n}var r=$.call(u,t);return i&&r.setAttribute("is",i),r}}),U&&S(v.prototype,"attachShadow",{configurable:!0,value:function(){var t=U.apply(this,arguments),e=c({query:ot,root:t,handle:at}),i=e.parse;return J.set(this,{root:t,parse:i}),t}}),S(B,"get",{configurable:!0,value:st}),S(B,"whenDefined",{configurable:!0,value:ht}),S(B,"define",{configurable:!0,value:function(t,e,i){if(st(t))throw new x("'".concat(t,"' has already been defined as a custom element"));var n,r=i&&i.extends;tt.set(e,r?{is:t,tag:r}:{is:"",tag:t}),r?(n="".concat(r,'[is="').concat(t,'"]'),it.set(n,e.prototype),nt.set(t,e),ot.push(n)):(Z.apply(B,arguments),rt.push(n=t)),ht(t).then((function(){r?(lt(u.querySelectorAll(n)),K.forEach(V,[n])):ct(u.querySelectorAll(n))})),et.get(t)._(e)}})}}();var at=t=>{const e=[].concat(t);return Promise.all(e.map((t=>customElements.whenDefined(t).then((e=>e||customElements.get(t)))))).then((t=>e.length<2?t[0]:t))};let lt,ct,ht=t=>t;at("uce-lib").then((({define:t,css:e})=>{t("c-canvas-noise",{styles:e(lt||(lt=ht`
      :host {
        display: block;
        height: 100%;
        mix-blend-mode: hard-light;
        opacity: 1;
        pointer-events: none;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 12;
      }

      .c-canvas-noise__canvas {
        position: absolute;
        height: 100%;
        left: 0;
        top: 0;
        width: 100%;
      }
    `)),init(){this.render();!function(t,e=12,i=28){new class{constructor(t){this.patternSize=200,this.patternScaleX=8,this.patternScaleY=8,this.patternRefreshInterval=e,this.patternAlpha=i,this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.ctx.scale(this.patternScaleX,this.patternScaleY),this.patternCanvas=document.createElement("canvas"),this.patternCanvas.width=this.patternSize,this.patternCanvas.height=this.patternSize,this.patternCtx=this.patternCanvas.getContext("2d"),this.patternData=this.patternCtx.createImageData(this.patternSize,this.patternSize),this.patternPixelDataLength=this.patternSize*this.patternSize*4,this.resize=this.resize.bind(this),this.loop=this.loop.bind(this),this.frame=0,window.addEventListener("resize",this.resize),this.resize(),window.requestAnimationFrame(this.loop)}resize(){this.canvas.width=window.innerWidth*devicePixelRatio,this.canvas.height=window.innerHeight*devicePixelRatio}update(){const{patternPixelDataLength:t,patternData:e,patternAlpha:i,patternCtx:n}=this;for(let n=0;n<t;n+=4){const t=200*Math.random();e.data[n]=t,e.data[n+1]=t,e.data[n+2]=t,e.data[n+3]=i}n.putImageData(e,0,0)}draw(){const{ctx:t,patternCanvas:e,canvas:i,viewHeight:n}=this,{width:r,height:o}=i;t.clearRect(0,0,r,o),t.fillStyle=t.createPattern(e,"repeat"),t.fillRect(0,0,r,o)}loop(){++this.frame%this.patternRefreshInterval==0&&(this.update(),this.draw()),window.requestAnimationFrame(this.loop)}}(t)}(this.shadowRoot.querySelector(".c-canvas-noise__canvas"),12)},attachShadow:{mode:"open"},render(){this.html(ct||(ct=ht`
        <style>
          ${0}
        </style>
        <canvas class="c-canvas-noise__canvas">
        </canvas>
      `),this.styles)}})}));var ut=i(6),dt=(i(0),i(43));class gt{constructor(t,e){this.scene=new ut.e,this.vertex="varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}",this.fragment=e.fragment,this.uniforms=e.uniforms,this.renderer=new ut.i,this.width=window.innerWidth,this.height=window.innerHeight,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.setClearColor(15658734,1),this.duration=e.duration||1,this.debug=e.debug||!1,this.easing=e.easing||"easeInOut",this.container=t,this.images=JSON.parse(this.container.getAttribute("data-images")),this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.container.appendChild(this.renderer.domElement),this.camera=new ut.c(70,window.innerWidth/window.innerHeight,.001,1e3),this.camera.position.set(0,0,2),this.time=0,this.current=0,this.textures=[],this.paused=!1,this.initiate((()=>{this.setupResize(),this.settings(),this.addObjects(),this.resize(),this.autoplay(),this.play()}))}initiate(t){const e=[];let i=this;this.images.forEach(((t,n)=>{let r=new Promise((e=>{i.textures[n]=(new ut.g).load(t,e)}));e.push(r)})),Promise.all(e).then((()=>{t()}))}autoplay(){setTimeout((()=>{this.next(),this.autoplay()}),2e3)}settings(){this.settings={progress:.5},Object.keys(this.uniforms).forEach((t=>{this.settings[t]=this.uniforms[t].value}))}setupResize(){window.addEventListener("resize",this.resize.bind(this))}resize(){let t,e;this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.imageAspect=this.textures[0].image.height/this.textures[0].image.width,this.height/this.width>this.imageAspect?(t=this.width/this.height*this.imageAspect,e=1):(t=1,e=this.height/this.width/this.imageAspect),this.material.uniforms.resolution.value.x=this.width,this.material.uniforms.resolution.value.y=this.height,this.material.uniforms.resolution.value.z=t,this.material.uniforms.resolution.value.w=e;const i=this.camera.position.z;this.camera.fov=180/Math.PI*2*Math.atan(1/(2*i)),this.plane.scale.x=this.camera.aspect,this.plane.scale.y=1,this.camera.updateProjectionMatrix()}addObjects(){this.material=new ut.f({extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:ut.a,uniforms:{time:{type:"f",value:0},progress:{type:"f",value:0},border:{type:"f",value:0},intensity:{type:"f",value:0},scaleX:{type:"f",value:40},scaleY:{type:"f",value:40},transition:{type:"f",value:40},swipe:{type:"f",value:0},width:{type:"f",value:0},radius:{type:"f",value:0},texture1:{type:"f",value:this.textures[0]},texture2:{type:"f",value:this.textures[1]},displacement:{type:"f",value:(new ut.g).load("/images/Displacement-1.jpg")},resolution:{type:"v4",value:new ut.h}},vertexShader:this.vertex,fragmentShader:this.fragment}),this.geometry=new ut.d(1,1,2,2),this.plane=new ut.b(this.geometry,this.material),this.scene.add(this.plane)}stop(){this.paused=!0}play(){this.paused=!1,this.render()}next(){if(this.isRunning)return;this.isRunning=!0;let t=this.textures.length,e=this.textures[(this.current+1)%t];this.material.uniforms.texture2.value=e,dt.b.timeline().to(this.material.uniforms.progress,this.duration,{value:1,ease:dt.a[this.easing],onComplete:()=>{this.current=(this.current+1)%t,this.material.uniforms.texture1.value=e,this.material.uniforms.progress.value=0,this.isRunning=!1}})}render(){this.paused||(this.time+=.05,this.material.uniforms.time.value=this.time,Object.keys(this.uniforms).forEach((t=>{this.material.uniforms[t].value=this.settings[t]})),requestAnimationFrame(this.render.bind(this)),this.renderer.render(this.scene,this.camera))}}let pt,ft,mt=t=>t;at("uce-lib").then((({define:t,css:e})=>{t("c-canvas-transition",{styles:e(pt||(pt=mt`
      :host {
        display: block;
        position: absolute;
      }
    `)),init(){this.render();const t=this.shadowRoot.querySelector(".c-canvas-transition__slider");new gt(t,{duration:2,debug:!0,easing:"easeOut",uniforms:{width:{value:.5,type:"f",min:0,max:10},scaleX:{value:40,type:"f",min:.1,max:60},scaleY:{value:40,type:"f",min:.1,max:60}},fragment:"\n          uniform float time;\n          uniform float progress;\n          uniform sampler2D texture1;\n          uniform sampler2D texture2;\n          uniform vec4 resolution;\n          varying vec2 vUv;\n          varying vec4 vPosition;\n          void main()\t{\n            vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);\n            vec2 p = newUV;\n            float x = progress;\n            vec4 f = mix(\n              texture2D(texture1, p),\n              texture2D(texture2, p),\n              x);\n            gl_FragColor = f;\n          }\n        "})},attachShadow:{mode:"open"},render(){this.html(ft||(ft=mt`
        <style>
          ${0}
        </style>
        <div class="c-canvas-transition__wrapper">
          <div
            class="c-canvas-transition__slider"
            data-images='[
              "/images/Hero-Paint-1-Dark.jpg",
              "/images/Hero-Paint-2-Dark.jpg"
            ]'
            data-displacement=""
          >
          </div>
        </div>
      `),this.styles)}})}));let vt,yt,bt=t=>t;at("uce-lib").then((({define:t,render:e,html:i,svg:n,css:r})=>{t("c-glitch-image",{styles:r(vt||(vt=bt`
      :host  {
        --glitch-image-height: 100%;
        --glitch-image-width: 100%;

        align-items: center;
        display: grid;
        min-height: 1px;
        width: 100%;
      }

      :host(.c-glitch-image--style-1) {
        --glitch-image-gap-horizontal: 0px;
        --glitch-image-gap-vertical: 0px;
        --glitch-image-time-anim: 2.25s;
        --glitch-image-blend-mode-1: none;
        --glitch-image-blend-mode-2: none;
        --glitch-image-blend-mode-3: none;
        --glitch-image-blend-mode-4: none;
        --glitch-image-blend-mode-5: none;
        --glitch-image-blend-color-1: transparent;
        --glitch-image-blend-color-2: transparent;
        --glitch-image-blend-color-3: transparent;
        --glitch-image-blend-color-4: transparent;
        --glitch-image-blend-color-5: transparent;
      }

      :host(.c-glitch-image--style-2) {
        --glitch-image-gap-horizontal: 0px;
        --glitch-image-gap-vertical: 0px;
        --glitch-image-time-anim: 2s;
        --glitch-image-blend-mode-1: none;
        --glitch-image-blend-mode-2: none;
        --glitch-image-blend-mode-3: luminosity;
        --glitch-image-blend-mode-4: none;
        --glitch-image-blend-mode-5: none;
        --glitch-image-blend-color-1: transparent;
        --glitch-image-blend-color-2: transparent;
        --glitch-image-blend-color-3: #95d6eb;
        --glitch-image-blend-color-4: transparent;
        --glitch-image-blend-color-5: #95d6eb;
      }

      :host(.c-glitch-image--style-3) {
        --glitch-image-gap-horizontal: 20px;
        --glitch-image-gap-vertical: 2px;
        --glitch-image-time-anim: 2.25s;
        --glitch-image-blend-mode-1: none;
        --glitch-image-blend-mode-2: none;
        --glitch-image-blend-mode-3: multiply;
        --glitch-image-blend-mode-4: none;
        --glitch-image-blend-mode-5: none;
        --glitch-image-blend-color-1: transparent;
        --glitch-image-blend-color-2: transparent;
        --glitch-image-blend-color-3: #af4563;
        --glitch-image-blend-color-4: transparent;
        --glitch-image-blend-color-5: transparent;
      }

      :host(.c-glitch-image--style-4) {
        --glitch-image-gap-horizontal: 5px;
        --glitch-image-gap-vertical: 20px;
        --glitch-image-time-anim: 5s;
        --glitch-image-blend-mode-1: none;
        --glitch-image-blend-mode-2: exclusion;
        --glitch-image-blend-mode-3: hard-light;
        --glitch-image-blend-mode-4: overlay;
        --glitch-image-blend-mode-5: none;
        --glitch-image-blend-color-1: transparent;
        --glitch-image-blend-color-2: #52f1cd;
        --glitch-image-blend-color-3: #525df1;
        --glitch-image-blend-color-4: #f19b52;
        --glitch-image-blend-color-5: transparent;
      }

      :host(.c-glitch-image--style-5) {
        --glitch-image-gap-horizontal: 50px;
        --glitch-image-gap-vertical: 100px;
        --glitch-image-time-anim: 2.25s;
        --glitch-image-blend-mode-1: none;
        --glitch-image-blend-mode-2: none;
        --glitch-image-blend-mode-3: none;
        --glitch-image-blend-mode-4: overlay;
        --glitch-image-blend-mode-5: overlay;
        --glitch-image-blend-color-1: transparent;
        --glitch-image-blend-color-2: transparent;
        --glitch-image-blend-color-3: transparent;
        --glitch-image-blend-color-4: #000;
        --glitch-image-blend-color-5: #8d16f2;
      }

      :host(.c-glitch-image--style-6) {
        --glitch-image-gap-horizontal: 3px;
        --glitch-image-gap-vertical: 70px;
        --glitch-image-time-anim: 2.25s;
        --glitch-image-blend-mode-1: none;
        --glitch-image-blend-mode-2: none;
        --glitch-image-blend-mode-3: overlay;
        --glitch-image-blend-mode-4: none;
        --glitch-image-blend-mode-5: none;
        --glitch-image-blend-color-1: transparent;
        --glitch-image-blend-color-2: transparent;
        --glitch-image-blend-color-3: rgba(
          255,
          255,
          255,
          0.2
        );
        --glitch-image-blend-color-4: transparent;
        --glitch-image-blend-color-5: transparent;
      }

      .c-glitch-image__inner {
        height: 1px;
        margin: 0 auto;
        max-width: 100%;
        min-height: 1px;
        overflow: hidden;
        padding-bottom: calc(
          100% / var(--glitch-aspect-ratio) - 1px
        );
        position: relative;
        width: var(--glitch-image-width);
      }

      .c-glitch-image__image {
        background-blend-mode: var(
          --glitch-image-blend-mode-1
        );
        background-color: var(--glitch-image-blend-color-1);
        background-image: var(--glitch-image);
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: calc(
          100% + var(--glitch-image-gap-vertical) * 2
        );
        left: calc(-1 * var(--glitch-image-gap-horizontal));
        position: absolute;
        top: calc(var(--glitch-image-gap-vertical) * -1);
        transform: translate3d(0, 0, 0);
        width: calc(
          100% + var(--glitch-image-gap-horizontal) * 2
        );
      }

      .c-glitch-image__image:nth-child(2) {
        background-color: var(--glitch-image-blend-color-2);
        background-blend-mode: var(
          --glitch-image-blend-mode-2
        );
      }

      .c-glitch-image__image:nth-child(3) {
        background-color: var(--glitch-image-blend-color-3);
        background-blend-mode: var(
          --glitch-image-blend-mode-3
        );
      }

      .c-glitch-image__image:nth-child(4) {
        background-color: var(--glitch-image-blend-color-4);
        background-blend-mode: var(
          --glitch-image-blend-mode-4
        );
      }

      .c-glitch-image__image:nth-child(5) {
        background-color: var(--glitch-image-blend-color-5);
        background-blend-mode: var(
          --glitch-image-blend-mode-5
        );
      }

      .c-glitch-image__image:nth-child(n + 2) {
        opacity: 0;
      }

      .c-glitch-image__inner:hover
        .c-glitch-image__image:nth-child(n + 2),
      .c-glitch-image__image.is-glitching:nth-child(n + 2) {
        opacity: 1;
      }

      .c-glitch-image__inner:hover
        .c-glitch-image__image:nth-child(2),
      .c-glitch-image__image.is-glitching:nth-child(2) {
        transform: translate3d(
          var(--glitch-image-gap-horizontal),
          0,
          0
        );
        animation: glitch-anim-1-horizontal
          var(--glitch-image-time-anim) infinite linear
          alternate;
      }

      .c-glitch-image__inner:hover
        > .c-glitch-image__image:nth-child(3),
      .c-glitch-image__inner.is-glitching
        > .c-glitch-image__image:nth-child(3) {
        transform: translate3d(
          calc(-1 * var(--glitch-image-gap-horizontal)),
          0,
          0
        );
        animation: glitch-anim-2-horizontal
          var(--glitch-image-time-anim) infinite linear
          alternate;
      }

      .c-glitch-image__inner:hover
        > .c-glitch-image__image:nth-child(4),
      .c-glitch-image__inner.is-glitching
        > .c-glitch-image__image:nth-child(4) {
        transform: translate3d(
            0,
            calc(-1 * var(--glitch-image-gap-vertical)),
            0
          )
          scale3d(-1, -1, 1);
        animation: glitch-anim-3-horizontal
          var(--glitch-image-time-anim) infinite linear
          alternate;
      }

      /* Hover flash animation on last image */
      .c-glitch-image__inner:hover
        > .c-glitch-image__image:nth-child(5),
      .c-glitch-image__inner.is-glitching
        > .c-glitch-image__image:nth-child(5) {
        animation: glitch-anim-flash 0.5s steps(1, end)
          infinite;
      }

      @keyframes glitch-anim-1-horizontal {
        0% {
          -webkit-clip-path: polygon(
            0 2%,
            100% 2%,
            100% 5%,
            0 5%
          );
          clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
        }
        10% {
          -webkit-clip-path: polygon(
            0 15%,
            100% 15%,
            100% 15%,
            0 15%
          );
          clip-path: polygon(
            0 15%,
            100% 15%,
            100% 15%,
            0 15%
          );
        }
        20% {
          -webkit-clip-path: polygon(
            0 10%,
            100% 10%,
            100% 20%,
            0 20%
          );
          clip-path: polygon(
            0 10%,
            100% 10%,
            100% 20%,
            0 20%
          );
        }
        30% {
          -webkit-clip-path: polygon(
            0 1%,
            100% 1%,
            100% 2%,
            0 2%
          );
          clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
        }
        40% {
          -webkit-clip-path: polygon(
            0 33%,
            100% 33%,
            100% 33%,
            0 33%
          );
          clip-path: polygon(
            0 33%,
            100% 33%,
            100% 33%,
            0 33%
          );
        }
        50% {
          -webkit-clip-path: polygon(
            0 44%,
            100% 44%,
            100% 44%,
            0 44%
          );
          clip-path: polygon(
            0 44%,
            100% 44%,
            100% 44%,
            0 44%
          );
        }
        60% {
          -webkit-clip-path: polygon(
            0 50%,
            100% 50%,
            100% 20%,
            0 20%
          );
          clip-path: polygon(
            0 50%,
            100% 50%,
            100% 20%,
            0 20%
          );
        }
        70% {
          -webkit-clip-path: polygon(
            0 70%,
            100% 70%,
            100% 70%,
            0 70%
          );
          clip-path: polygon(
            0 70%,
            100% 70%,
            100% 70%,
            0 70%
          );
        }
        80% {
          -webkit-clip-path: polygon(
            0 80%,
            100% 80%,
            100% 80%,
            0 80%
          );
          clip-path: polygon(
            0 80%,
            100% 80%,
            100% 80%,
            0 80%
          );
        }
        90% {
          -webkit-clip-path: polygon(
            0 50%,
            100% 50%,
            100% 55%,
            0 55%
          );
          clip-path: polygon(
            0 50%,
            100% 50%,
            100% 55%,
            0 55%
          );
        }
        100% {
          -webkit-clip-path: polygon(
            0 70%,
            100% 70%,
            100% 80%,
            0 80%
          );
          clip-path: polygon(
            0 70%,
            100% 70%,
            100% 80%,
            0 80%
          );
        }
      }

      @keyframes glitch-anim-2-horizontal {
        0% {
          -webkit-clip-path: polygon(
            0 25%,
            100% 25%,
            100% 30%,
            0 30%
          );
          clip-path: polygon(
            0 25%,
            100% 25%,
            100% 30%,
            0 30%
          );
        }
        15% {
          -webkit-clip-path: polygon(
            0 3%,
            100% 3%,
            100% 3%,
            0 3%
          );
          clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
        }
        22% {
          -webkit-clip-path: polygon(
            0 5%,
            100% 5%,
            100% 20%,
            0 20%
          );
          clip-path: polygon(
            0 5%,
            100% 5%,
            100% 20%,
            0 20%
          );
        }
        31% {
          -webkit-clip-path: polygon(
            0 20%,
            100% 20%,
            100% 20%,
            0 20%
          );
          clip-path: polygon(
            0 20%,
            100% 20%,
            100% 20%,
            0 20%
          );
        }
        45% {
          -webkit-clip-path: polygon(
            0 40%,
            100% 40%,
            100% 40%,
            0 40%
          );
          clip-path: polygon(
            0 40%,
            100% 40%,
            100% 40%,
            0 40%
          );
        }
        51% {
          -webkit-clip-path: polygon(
            0 52%,
            100% 52%,
            100% 59%,
            0 59%
          );
          clip-path: polygon(
            0 52%,
            100% 52%,
            100% 59%,
            0 59%
          );
        }
        63% {
          -webkit-clip-path: polygon(
            0 60%,
            100% 60%,
            100% 60%,
            0 60%
          );
          clip-path: polygon(
            0 60%,
            100% 60%,
            100% 60%,
            0 60%
          );
        }
        76% {
          -webkit-clip-path: polygon(
            0 75%,
            100% 75%,
            100% 75%,
            0 75%
          );
          clip-path: polygon(
            0 75%,
            100% 75%,
            100% 75%,
            0 75%
          );
        }
        81% {
          -webkit-clip-path: polygon(
            0 65%,
            100% 65%,
            100% 40%,
            0 40%
          );
          clip-path: polygon(
            0 65%,
            100% 65%,
            100% 40%,
            0 40%
          );
        }
        94% {
          -webkit-clip-path: polygon(
            0 45%,
            100% 45%,
            100% 50%,
            0 50%
          );
          clip-path: polygon(
            0 45%,
            100% 45%,
            100% 50%,
            0 50%
          );
        }
        100% {
          -webkit-clip-path: polygon(
            0 14%,
            100% 14%,
            100% 33%,
            0 33%
          );
          clip-path: polygon(
            0 14%,
            100% 14%,
            100% 33%,
            0 33%
          );
        }
      }

      @keyframes glitch-anim-3-horizontal {
        0% {
          -webkit-clip-path: polygon(
            0 1%,
            100% 1%,
            100% 3%,
            0 3%
          );
          clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
        }
        5% {
          -webkit-clip-path: polygon(
            0 10%,
            100% 10%,
            100% 9%,
            0 9%
          );
          clip-path: polygon(
            0 10%,
            100% 10%,
            100% 9%,
            0 9%
          );
        }
        10% {
          -webkit-clip-path: polygon(
            0 5%,
            100% 5%,
            100% 6%,
            0 6%
          );
          clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
        }
        25% {
          -webkit-clip-path: polygon(
            0 20%,
            100% 20%,
            100% 20%,
            0 20%
          );
          clip-path: polygon(
            0 20%,
            100% 20%,
            100% 20%,
            0 20%
          );
        }
        27% {
          -webkit-clip-path: polygon(
            0 10%,
            100% 10%,
            100% 10%,
            0 10%
          );
          clip-path: polygon(
            0 10%,
            100% 10%,
            100% 10%,
            0 10%
          );
        }
        30% {
          -webkit-clip-path: polygon(
            0 30%,
            100% 30%,
            100% 25%,
            0 25%
          );
          clip-path: polygon(
            0 30%,
            100% 30%,
            100% 25%,
            0 25%
          );
        }
        33% {
          -webkit-clip-path: polygon(
            0 15%,
            100% 15%,
            100% 16%,
            0 16%
          );
          clip-path: polygon(
            0 15%,
            100% 15%,
            100% 16%,
            0 16%
          );
        }
        37% {
          -webkit-clip-path: polygon(
            0 40%,
            100% 40%,
            100% 39%,
            0 39%
          );
          clip-path: polygon(
            0 40%,
            100% 40%,
            100% 39%,
            0 39%
          );
        }
        40% {
          -webkit-clip-path: polygon(
            0 20%,
            100% 20%,
            100% 21%,
            0 21%
          );
          clip-path: polygon(
            0 20%,
            100% 20%,
            100% 21%,
            0 21%
          );
        }
        45% {
          -webkit-clip-path: polygon(
            0 60%,
            100% 60%,
            100% 55%,
            0 55%
          );
          clip-path: polygon(
            0 60%,
            100% 60%,
            100% 55%,
            0 55%
          );
        }
        50% {
          -webkit-clip-path: polygon(
            0 30%,
            100% 30%,
            100% 31%,
            0 31%
          );
          clip-path: polygon(
            0 30%,
            100% 30%,
            100% 31%,
            0 31%
          );
        }
        53% {
          -webkit-clip-path: polygon(
            0 70%,
            100% 70%,
            100% 69%,
            0 69%
          );
          clip-path: polygon(
            0 70%,
            100% 70%,
            100% 69%,
            0 69%
          );
        }
        57% {
          -webkit-clip-path: polygon(
            0 40%,
            100% 40%,
            100% 41%,
            0 41%
          );
          clip-path: polygon(
            0 40%,
            100% 40%,
            100% 41%,
            0 41%
          );
        }
        60% {
          -webkit-clip-path: polygon(
            0 80%,
            100% 80%,
            100% 75%,
            0 75%
          );
          clip-path: polygon(
            0 80%,
            100% 80%,
            100% 75%,
            0 75%
          );
        }
        65% {
          -webkit-clip-path: polygon(
            0 50%,
            100% 50%,
            100% 51%,
            0 51%
          );
          clip-path: polygon(
            0 50%,
            100% 50%,
            100% 51%,
            0 51%
          );
        }
        70% {
          -webkit-clip-path: polygon(
            0 90%,
            100% 90%,
            100% 90%,
            0 90%
          );
          clip-path: polygon(
            0 90%,
            100% 90%,
            100% 90%,
            0 90%
          );
        }
        73% {
          -webkit-clip-path: polygon(
            0 60%,
            100% 60%,
            100% 60%,
            0 60%
          );
          clip-path: polygon(
            0 60%,
            100% 60%,
            100% 60%,
            0 60%
          );
        }
        80% {
          -webkit-clip-path: polygon(
            0 100%,
            100% 100%,
            100% 99%,
            0 99%
          );
          clip-path: polygon(
            0 100%,
            100% 100%,
            100% 99%,
            0 99%
          );
        }
        100% {
          -webkit-clip-path: polygon(
            0 70%,
            100% 70%,
            100% 71%,
            0 71%
          );
          clip-path: polygon(
            0 70%,
            100% 70%,
            100% 71%,
            0 71%
          );
        }
      }

      @keyframes glitch-anim-flash {
        0% {
          opacity: 0.2;
          transform: translate3d(
            var(--glitch-image-gap-horizontal),
            var(--glitch-image-gap-vertical),
            0
          );
        }
        33%,
        100% {
          opacity: 0;
          transform: translate3d(0, 0, 0);
        }
      }
    `)),props:{glitch:{type:String,attribute:!0},src:{type:String,attribute:!0},active:{type:Boolean,attribute:!0},aspectRatio:{type:Number},wrapper:{type:Object}},init(){this.glitch="1",this.active=!1,this.aspectRatio=1,this.render();const t=this.hasAttribute("width"),e=this.hasAttribute("height"),i=t&&e;if(this._wrapper=this.shadowRoot.querySelector(".c-glitch-image__inner"),this.active&&this._wrapper.querySelectorAll(".c-glitch-image__image").forEach((t=>{t.classList.add("is-glitching")})),this.classList.add("c-glitch-image--style-"+this.glitch),i){const t=this.getAttribute("width"),e=this.getAttribute("height");this.aspectRatio=t/e}this._wrapper.style.setProperty("--glitch-aspect-ratio",this.aspectRatio),this._wrapper.style.setProperty("--glitch-image",'url("'+this.src+'")')},attachShadow:{mode:"open"},render(){this.html(yt||(yt=bt`
        <style>
          ${0}
        </style>
        <div
          class="c-glitch-image__inner"
        >
          <div
            class="c-glitch-image__image"
          >
          </div>
          <div
            class="c-glitch-image__image"
          >
          </div>
          <div
            class="c-glitch-image__image"
          >
          </div>
          <div
            class="c-glitch-image__image"
          >
          </div>
          <div
            class="c-glitch-image__image"
          >
          </div>
        </div>
      `),this.styles)}})}));let xt,wt,_t=t=>t;at("uce-lib").then((({define:t,render:e,html:i,svg:n,css:r})=>{t("c-hero",{styles:r(xt||(xt=_t`

      * {
        box-sizing: border-box;
      }

      :host  {
        --hero-image-me-dark:       url(
          '/images/Me-Dark.jpg'
        );
        --hero-image-me-light: url(
          '/images/Me-Light.jpg'
        );
        --hero-image-paint-1-dark: url(
          '/images/Hero-Paint-1-Dark.jpg'
        );
        --hero-image-paint-1-light: url(
          '/images/Hero-Paint-1-Light.jpg'
        );
        --hero-image-paint-2-dark: url(
          '/images/Hero-Paint-2-Dark.jpg'
        );
        --hero-image-paint-2-light: url(
          '/images/Hero-Paint-2-Light.jpg'
        );

        display: grid;
        grid-template-rows: 4fr 5fr 4.5rem;
        height: 100%;
        max-height: 100%;
        min-height: 30rem;
        z-index: 2;
      }

      @media (min-width: 45em) {
        :host  {
          grid-template-rows: 2fr 1fr 4.5rem;
          min-height: 30rem;
        }
      }

      .c-hero__upper {
        align-content: center;
        border-bottom: solid 1px var(--color-accent);
        display: grid;
        justify-content: center;
        overflow: hidden;
        position: relative;
      }

      .c-hero__upper::after {
        backface-visibility: hidden;
        background-image: linear-gradient(
            0deg,
            var(--color-opaque-overlay) 000%,
            var(--color-opaque-overlay) 050%,
            rgba(0, 0, 0, 0) 050.01%,
            rgba(0, 0, 0, 0) 100%
          ),
          linear-gradient(
            0deg,
            rgba(0, 0, 0, 0) 000%,
            rgba(0, 0, 0, 0.02) 030%,
            rgba(0, 0, 0, 0.02) 070%,
            rgba(0, 0, 0, 0) 100%
          );
        background-repeat: repeat, no-repeat;
        background-size: 100% 4px, 100% 20%;
        /* content: ''; */
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: 0;
      }

      .c-hero__paint-dark,
      .c-hero__paint-light,
      .c-hero__paint-dark::before,
      .c-hero__paint-light::before {
        backface-visibility: hidden;
        background-position: top left;
        background-size: cover;
        display: none;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transition: all 0.25s;
        width: 100%;
      }

      .c-hero__paint-dark::before,
      .c-hero__paint-light::before {
        animation: hero-paint 6s infinite;
        content: '';
      }

      .c-hero__paint-dark {
        background-image: var(--hero-image-paint-1-dark);
        opacity: var(--theme-dark-opacity);
      }

      .c-hero__paint-dark::before {
        background-image: var(--hero-image-paint-2-dark);
      }

      .c-hero__paint-light {
        backface-visibility: hidden;
        background-image: var(--hero-image-paint-1-light);
        opacity: var(--theme-light-opacity);
      }

      .c-hero__paint-light::before {
        background-image: var(--hero-image-paint-1-light);
      }

      .c-hero__tagline,
      .c-hero__name,
      .c-hero__location {
        position: relative;
        z-index: 1;
      }

      .c-hero__tagline {
        font-family: var(--font-display), sans-serif;
        font-weight: var(--font-display-weight);
        font-size: clamp(1.5rem, 7vw, 4.25rem);
        line-height: 1.05;
        text-transform: uppercase;
        width: auto;
      }

      @media (min-height: 35em) {

        .c-hero__tagline {
          margin-top: 0.5rem;
          line-height: 1.1;
        }

      }

      .c-hero__tagline-main {
        position: relative;
        z-index: 1;
      }

      .c-hero__tagline-accent-1,
      .c-hero__tagline-accent-2,
      .c-hero__tagline-accent-3 {
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--color-fg);
        opacity: 0.05;
        position: absolute;
        top: 0;
        z-index: 0;
      }

      .c-hero__tagline-accent-1 {
        animation: hero-tagline-accent-fade-in-1 0.5s 1s
          forwards;
        transform: translateY(0.4vw);
      }

      .c-hero__tagline-accent-2 {
        animation: hero-tagline-accent-fade-in-2 0.5s 1s
          forwards;
        transform: translateY(0.8vw);
      }

      .c-hero__tagline-accent-3 {
        animation: hero-tagline-accent-fade-in-3 0.5s 1s
          forwards;
        transform: translateY(1.2vw);
      }

      .c-hero__name,
      .c-hero__location {
        bottom: 0;
        display: block;
        font-family: var(--font-main-regular), sans-serif;
        font-size: 0.6rem;
        font-weight: var(--font-main-regular-weight);
        height: 0.6rem;
        letter-spacing: 0.1em;
        line-height: 1;
        padding-bottom: 1.25rem;
        position: absolute;
        text-transform: uppercase;
      }

      .c-hero__name {
        text-align: right;
        transform-origin: top left;
        padding-left: 1.5rem;
      }

      .c-hero__location {
        right: 0;
        text-align: left;
        transform-origin: top right;
        padding-right: 1.5rem;
      }

      @media (min-width: 45em) {
        .c-hero__name,
        .c-hero__location {
          font-size: 0.7rem;
          height: 0.7rem;
          padding-bottom: 0;
          padding-left: 1rem;
          padding-right: 1rem;
          width: 40vh;
        }

        .c-hero__name {
          left: 1.5rem;
          text-align: right;
          transform: rotate(90deg) translateY(-0.6rem)
            translateX(-100%);
          transform-origin: top left;
        }

        .c-hero__location {
          right: 1.5rem;
          text-align: left;
          transform: rotate(-90deg) translateY(-0.6rem)
            translateX(100%);
          transform-origin: top right;
        }
      }

      .c-hero__lower {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 5fr 4fr;
      }

      @media (min-width: 45em) {
        .c-hero__lower {
          grid-template-columns: 1fr 1fr 2fr;
          grid-template-rows: auto;
        }
      }

      .c-hero__me,
      .c-hero__me::before {
        background-position: center;
        background-size: cover;
      }

      .c-hero__me {
        background-image: var(--hero-image-me-dark);
        border-right: solid 1px var(--color-accent);
        opacity: .9;
        position: relative;
      }

      .c-hero__me::before {
        background-blend-mode: luminosity;
        background-color: var(--color-bg-primary);
        background-image: var(--hero-image-me-light);
        content: '';
        height: 100%;
        opacity: var(--theme-light-opacity);
        position: absolute;
        width: 100%;
      }

      .c-hero__name-stylized {
        background-image: linear-gradient(
          -45deg,
          var(--color-opaque)   0.00%,
          var(--color-opaque)  12.50%,
          transparent          12.51%,
          transparent          37.49%,
          var(--color-opaque)  37.50%,
          var(--color-opaque)  62.50%,
          transparent          62.51%,
          transparent          87.49%,
          var(--color-opaque)  87.50%,
          var(--color-opaque) 100.00%
        );
        background-position: 0 0;
        background-repeat: repeat;
        background-size:
          var(--bg-pattern-diagonal-tight-size)
          var(--bg-pattern-diagonal-tight-size);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        height: 100%;
        justify-items: center;
        padding-bottom: var(--spacing-responsive-y);
        padding-left: var(--spacing-responsive-x);
        padding-right: var(--spacing-responsive-x);
        padding-top: var(--spacing-responsive-y);
        position: relative;
        text-align: center;
        width: 100%;
      }

      @media (min-width: 45em) {
        .c-hero__name-stylized {
          border-right: solid 1px var(--color-accent);
        }
      }

      .c-hero__name-stylized::before {
        background-color: var(--color-bg);
        content: '';
        height: 100%;
        opacity: .05;
        position: absolute;
        width: 100%;
        z-index: -1;
      }

      .c-hero__name-stylized-letter {
        font-family: var(--font-accent), sans-serif;
        font-size: .8rem;
        font-weight: var(--font-accent-weight);
        margin-bottom: auto;
        margin-left: auto;
        margin-right: auto;
        margin-top: auto;
      }

      @media (min-width: 35em) {

        .c-hero__name-stylized-letter {
          font-size: 1rem;
        }

      }

      .c-hero__heading {
        align-content: center;
        border-top: solid 1px var(--color-accent);
        display: grid;
        font-family: var(--font-heading), sans-serif;
        font-weight: var(--font-heading-weight);
        font-size: clamp(1.5rem, 3vw, 2.25rem);
        grid-column-end: 3;
        grid-column-start: 1;
        justify-content: center;
        line-height: 1;
        padding-left: 2rem;
        padding-right: 2rem;
      }

      ::slotted([slot='heading']) {
        max-width: 30rem;
      }

      @media (min-width: 45em) {
        .c-hero__heading {
          border-top: none;
          grid-column-end: 4;
          grid-column-start: 3;
        }

        .c-hero__heading > * {
          line-height: 1.1;
        }
      }

      .c-hero__footer {
        border-top: solid 1px var(--color-accent);
        display: grid;
        grid-template-columns:
            3.2rem
            auto
            auto
            2.1rem;
        grid-template-rows: 1fr 0.5rem;
      }

      @media (min-width: 35em) {

        .c-hero__footer {
          grid-template-columns:
            4rem
            calc(50% - 4rem)
            calc(50% - 4rem)
            4rem;
        }

      }

      ::slotted([slot='footer-box-left']),
      ::slotted([slot='footer-content-left']),
      ::slotted([slot='footer-content-right']) {
        border-right: solid 1px var(--color-subtle);
      }

      ::slotted([slot='footer-content-left']),
      ::slotted([slot='footer-content-right']) {
        align-items: center;
        column-gap: .5rem;
        display: grid;
        font-family: var(--font-main-regular), sans-serif;
        font-size: 0.6rem;
        justify-content: center;
        padding-left: .5rem;
        padding-right: .5rem;
      }

      @media (min-width: 25em) {

        ::slotted([slot='footer-content-left']),
        ::slotted([slot='footer-content-right']) {
          column-gap: .75rem;
          font-family: var(--font-main-light), sans-serif;
          font-size: .8rem;
          padding-left: 1rem;
          padding-right: 1rem;
        }
      }

      @media (min-width: 45em) {

        ::slotted([slot='footer-content-left']),
        ::slotted([slot='footer-content-right']) {
          column-gap: 1rem;
          font-size: 1rem;
          padding-left: 1.25rem;
          padding-right: 1.25rem;
        }

      }

      ::slotted([slot='footer-content-left']) {
        grid-template-columns: auto 1fr;
      }


      ::slotted([slot='footer-content-right']) {
        grid-template-columns: auto 1fr;
      }

      @media (min-width: 45em) {

        ::slotted([slot='footer-content-right']) {
          grid-template-columns: auto 1fr;
        }

      }

      ::slotted([slot='footer-box-right']) {
        align-items: center;
        display: grid;
        font-size: 1.2rem;
        justify-content: center;
      }

      @media (min-width: 35em) {

        ::slotted([slot='footer-box-right']) {
          font-size: 1.33rem;
        }

      }

      ::slotted([slot='bottom']) {
        grid-column-start: 1;
        grid-column-end: 5;
        margin-bottom: 0;
        margin-top: 0;
      }


      /* Animations */

      @keyframes hero-paint {
        0% {
          opacity: 0.04;
        }
        10% {
          opacity: 0.04;
        }
        50% {
          opacity: 0.96;
        }
        60% {
          opacity: 0.96;
        }
        100% {
          opacity: 0.04;
        }
      }

      @keyframes hero-scanlines {
        0% {
          background-position: 0 0, 0 -100%;
        }
        50% {
          background-position: 0 0, 0 200%;
        }
        100% {
          background-position: 0 0, 0 200%;
        }
      }

      @keyframes hero-tagline-accent-fade-in-1 {
        0% {
          opacity: 0.04;
        }
        100% {
          opacity: 0.6;
        }
      }

      @keyframes hero-tagline-accent-fade-in-2 {
        0% {
          opacity: 0.04;
        }
        100% {
          opacity: 0.4;
        }
      }

      @keyframes hero-tagline-accent-fade-in-3 {
        0% {
          opacity: 0.04;
        }
        100% {
          opacity: 0.2;
        }
      }

    `)),init(){this.render(),this._taglineSetup(),this._nameStylizedSetup()},_scramble(){Scrambler({target:"[data-scrambler]",random:[1e3,1e3],speed:60})},_taglineSetup(){const t=this.querySelector("[slot=tagline]").innerHTML.replaceAll("  ","").replaceAll("\n",""),e=t.split("<br>"),i=e.map(((t,i)=>{const n="<span data-scrambler>"+t+"</span>";return e.length-1===i?n:n+"<br>"})).join(""),n=[this.shadowRoot.querySelector(".c-hero__tagline-accent-1"),this.shadowRoot.querySelector(".c-hero__tagline-accent-2"),this.shadowRoot.querySelector(".c-hero__tagline-accent-3")];this.innerHTML+='<div slot="tagline-main">'+i+"</div>",n.map((e=>{e.innerHTML=t}))},_nameStylizedSetup(){const t=this.querySelector('[slot="name-stylized"').innerHTML.replaceAll(" ","").replaceAll("\n","").split("");this.shadowRoot.querySelector(".c-hero__name-stylized").innerHTML=t.map((t=>'<div class="c-hero__name-stylized-letter">'+t+"</div>")).join("")},attachShadow:{mode:"open"},render(){this.html(wt||(wt=_t`
        <style>
          ${0}
        </style>
        <div class="c-hero__upper">
          <div class="c-hero__paint-dark"></div>
          <div class="c-hero__paint-light"></div>
          <c-canvas-transition></c-canvas-transition>
          <div class="c-hero__tagline">
            <div class="c-hero__tagline-main">
              <slot name="tagline-main"></slot>
            </div>
            <div class="c-hero__tagline-accent-1"></div>
            <div class="c-hero__tagline-accent-2"></div>
            <div class="c-hero__tagline-accent-3"></div>
          </div>
          <div class="c-hero__name">David B. Waters</div>
          <div class="c-hero__location">Charleston, SC</div>
        </div>
        <div class="c-hero__lower">
          <div class="
            c-hero__me
          "></div>
          <div class="
            c-hero__name-stylized
          "></div>
          <div class="c-hero__heading">
            <slot name="heading"></slot>
          </div>
        </div>
        <footer class="c-hero__footer">
          <slot name="footer-box-left"> </slot>
          <slot name="footer-content-left"> </slot>
          <slot name="footer-content-right"> </slot>
          <slot name="footer-box-right"> </slot>
          <slot name="bottom"> </slot>
        </footer>
      `),this.styles)}})}));let kt,St,Et=t=>t;at("uce-lib").then((({define:t,render:e,html:i,svg:n,css:r})=>{t("c-loader",{styles:r(kt||(kt=Et`

      :host  {
        --loader-color-bg: var(--color-bg);
      }

      :host,
      ::slotted(*) {
        height: 100vh;
        left: 0;
        top: 0;
        transition: opacity var(--transition-duration);
        width: 100%;
        z-index: 9;
      }

      :host  {
        background-color: var(--loader-color-bg);
        position: fixed;
        height: 100%;
        width: 100%;
      }

      ::slotted(*) {
        align-content: center;
        cursor: progress;
        display: grid;
        grid-template-columns: 100px;
        grid-template-rows: min-content;
        justify-content: center;
        position: absolute;
      }

    `)),init(){this.render()},disable(){const t=document.querySelector("main"),e=t.classList.contains("u-transparent");document.documentElement.style.position="",e&&t.classList.remove("u-transparent"),setTimeout((()=>{this.style.opacity=0,this.style.pointerEvents="none"}),800),setTimeout((()=>{this.style.display="none"}),2e3)},attachShadow:{mode:"open"},render(){this.html(St||(St=Et`
        <style>
          ${0}
        </style>
        <slot>
        </slot>
      `),this.styles)}})}));var Mt=window.CustomEvent;function At(t,e){var i="on"+e.type.toLowerCase();return"function"==typeof t[i]&&t[i](e),t.dispatchEvent(e)}function zt(t){for(;t;){if("dialog"===t.localName)return t;t=t.parentElement?t.parentElement:t.parentNode?t.parentNode.host:null}return null}function Tt(t){for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;t&&t.blur&&t!==document.body&&t.blur()}function Ct(t,e){for(var i=0;i<t.length;++i)if(t[i]===e)return!0;return!1}function Ot(t){return!(!t||!t.hasAttribute("method"))&&"dialog"===t.getAttribute("method").toLowerCase()}function Lt(t){var e=["button","input","keygen","select","textarea"].map((function(t){return t+":not([disabled])"}));e.push('[tabindex]:not([disabled]):not([tabindex=""])');var i=t.querySelector(e.join(", "));if(!i&&"attachShadow"in Element.prototype)for(var n=t.querySelectorAll("*"),r=0;r<n.length&&!(n[r].tagName&&n[r].shadowRoot&&(i=Lt(n[r].shadowRoot)));r++);return i}function Pt(t){return t.isConnected||document.body.contains(t)}function Dt(t){if(t.submitter)return t.submitter;var e=t.target;if(!(e instanceof HTMLFormElement))return null;var i=Nt.formSubmitter;if(!i){var n=t.target;i=("getRootNode"in n&&n.getRootNode()||document).activeElement}return i&&i.form===e?i:null}function It(t){if(!t.defaultPrevented){var e=t.target,i=Nt.imagemapUseValue,n=Dt(t);null===i&&n&&(i=n.value);var r=zt(e);if(r)"dialog"===(n&&n.getAttribute("formmethod")||e.getAttribute("method"))&&(t.preventDefault(),null!=i?r.close(i):r.close())}}function jt(t){if(this.dialog_=t,this.replacedStyleTop_=!1,this.openAsModal_=!1,t.hasAttribute("role")||t.setAttribute("role","dialog"),t.show=this.show.bind(this),t.showModal=this.showModal.bind(this),t.close=this.close.bind(this),t.addEventListener("submit",It,!1),"returnValue"in t||(t.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(t,{attributes:!0,attributeFilter:["open"]})}else{var e,i=!1,n=function(){i?this.downgradeModal():this.maybeHideModal(),i=!1}.bind(this),r=function(r){if(r.target===t){var o="DOMNodeRemoved";i|=r.type.substr(0,o.length)===o,window.clearTimeout(e),e=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(e){t.addEventListener(e,r)}))}Object.defineProperty(t,"open",{set:this.setOpen.bind(this),get:t.hasAttribute.bind(t,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}Mt&&"object"!=typeof Mt||((Mt=function(t,e){e=e||{};var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,!!e.bubbles,!!e.cancelable,e.detail||null),i}).prototype=window.Event.prototype),jt.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Pt(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),Nt.dm.removeDialog(this))},setOpen:function(t){t?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(t){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var e=document.createElement("div");this.dialog_.insertBefore(e,this.dialog_.firstChild),e.tabIndex=-1,e.focus(),this.dialog_.removeChild(e)}var i=document.createEvent("MouseEvents");i.initMouseEvent(t.type,t.bubbles,t.cancelable,window,t.detail,t.screenX,t.screenY,t.clientX,t.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget),this.dialog_.dispatchEvent(i),t.stopPropagation()},focus_:function(){var t=this.dialog_.querySelector("[autofocus]:not([disabled])");!t&&this.dialog_.tabIndex>=0&&(t=this.dialog_),t||(t=Lt(this.dialog_)),Tt(document.activeElement),t&&t.focus()},updateZIndex:function(t,e){if(t<e)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=t,this.backdrop_.style.zIndex=e},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Pt(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!Nt.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(t){for(;t&&t!==document.body;){var e=window.getComputedStyle(t),i=function(t,i){return!(void 0===e[t]||e[t]===i)};if(e.opacity<1||i("zIndex","auto")||i("transform","none")||i("mixBlendMode","normal")||i("filter","none")||i("perspective","none")||"isolate"===e.isolation||"fixed"===e.position||"touch"===e.webkitOverflowScrolling)return!0;t=t.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,Nt.needsCentering(this.dialog_)?(Nt.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(t){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==t&&(this.dialog_.returnValue=t);var e=new Mt("close",{bubbles:!1,cancelable:!1});At(this.dialog_,e)}};var Nt={reposition:function(t){var e=document.body.scrollTop||document.documentElement.scrollTop,i=e+(window.innerHeight-t.offsetHeight)/2;t.style.top=Math.max(e,i)+"px"},isInlinePositionSetByStylesheet:function(t){for(var e=0;e<document.styleSheets.length;++e){var i=document.styleSheets[e],n=null;try{n=i.cssRules}catch(t){}if(n)for(var r=0;r<n.length;++r){var o=n[r],s=null;try{s=document.querySelectorAll(o.selectorText)}catch(t){}if(s&&Ct(s,t)){var a=o.style.getPropertyValue("top"),l=o.style.getPropertyValue("bottom");if(a&&"auto"!==a||l&&"auto"!==l)return!0}}}return!1},needsCentering:function(t){return"absolute"===window.getComputedStyle(t).position&&(!("auto"!==t.style.top&&""!==t.style.top||"auto"!==t.style.bottom&&""!==t.style.bottom)&&!Nt.isInlinePositionSetByStylesheet(t))},forceRegisterDialog:function(t){if((window.HTMLDialogElement||t.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",t),"dialog"!==t.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new jt(t)},registerDialog:function(t){t.showModal||Nt.forceRegisterDialog(t)},DialogManager:function(){this.pendingDialogStack=[];var t=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(e){this.forwardTab_=void 0,e.stopPropagation(),t([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(e){var i=[];e.forEach((function(t){for(var e,n=0;e=t.removedNodes[n];++n)e instanceof Element&&("dialog"===e.localName&&i.push(e),i=i.concat(e.querySelectorAll("dialog")))})),i.length&&t(i)})))}};if(Nt.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},Nt.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},Nt.DialogManager.prototype.updateStacking=function(){for(var t,e=this.zIndexHigh_,i=0;t=this.pendingDialogStack[i];++i)t.updateZIndex(--e,--e),0===i&&(this.overlay.style.zIndex=--e);var n=this.pendingDialogStack[0];n?(n.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},Nt.DialogManager.prototype.containedByTopDialog_=function(t){for(;t=zt(t);){for(var e,i=0;e=this.pendingDialogStack[i];++i)if(e.dialog===t)return 0===i;t=t.parentElement}return!1},Nt.DialogManager.prototype.handleFocus_=function(t){var e=t.composedPath?t.composedPath()[0]:t.target;if(!this.containedByTopDialog_(e)&&document.activeElement!==document.documentElement&&(t.preventDefault(),t.stopPropagation(),Tt(e),void 0!==this.forwardTab_)){var i=this.pendingDialogStack[0];return i.dialog.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?i.focus_():e!==document.documentElement&&document.documentElement.focus()),!1}},Nt.DialogManager.prototype.handleKey_=function(t){if(this.forwardTab_=void 0,27===t.keyCode){t.preventDefault(),t.stopPropagation();var e=new Mt("cancel",{bubbles:!1,cancelable:!0}),i=this.pendingDialogStack[0];i&&At(i.dialog,e)&&i.dialog.close()}else 9===t.keyCode&&(this.forwardTab_=!t.shiftKey)},Nt.DialogManager.prototype.checkDOM_=function(t){this.pendingDialogStack.slice().forEach((function(e){-1!==t.indexOf(e.dialog)?e.downgradeModal():e.maybeHideModal()}))},Nt.DialogManager.prototype.pushDialog=function(t){var e=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=e)&&(1===this.pendingDialogStack.unshift(t)&&this.blockDocument(),this.updateStacking(),!0)},Nt.DialogManager.prototype.removeDialog=function(t){var e=this.pendingDialogStack.indexOf(t);-1!==e&&(this.pendingDialogStack.splice(e,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},Nt.dm=new Nt.DialogManager,Nt.formSubmitter=null,Nt.imagemapUseValue=null,void 0===window.HTMLDialogElement){var Rt=document.createElement("form");if(Rt.setAttribute("method","dialog"),"dialog"!==Rt.method){var qt=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(qt){var Ft=qt.get;qt.get=function(){return Ot(this)?"dialog":Ft.call(this)};var Yt=qt.set;qt.set=function(t){return"string"==typeof t&&"dialog"===t.toLowerCase()?this.setAttribute("method",t):Yt.call(this,t)},Object.defineProperty(HTMLFormElement.prototype,"method",qt)}}document.addEventListener("click",(function(t){if(Nt.formSubmitter=null,Nt.imagemapUseValue=null,!t.defaultPrevented){var e=t.target;if("composedPath"in t)e=t.composedPath().shift()||e;if(e&&Ot(e.form)){if(!("submit"===e.type&&["button","input"].indexOf(e.localName)>-1)){if("input"!==e.localName||"image"!==e.type)return;Nt.imagemapUseValue=t.offsetX+","+t.offsetY}zt(e)&&(Nt.formSubmitter=e)}}}),!1),document.addEventListener("submit",(function(t){var e=t.target;if(!zt(e)){var i=Dt(t);"dialog"===(i&&i.getAttribute("formmethod")||e.getAttribute("method"))&&t.preventDefault()}}));var Ht=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!Ot(this))return Ht.call(this);var t=zt(this);t&&t.close()}}var Xt=Nt;let Wt,Vt,Bt=t=>t;at("uce-lib").then((({define:t,render:e,html:i,svg:n,css:r})=>{t("c-modal",{styles:r(Wt||(Wt=Bt`
      :host  {
        --modal-color-fg: var(--color-fg);
        --modal-color-bg: var(--color-bg);
        --modal-spacing: 1.5rem;
        --modal-button-color-fg: var(--color-fg);
        --modal-button-color-bg: var(--color-bg);
        --modal-button-color-border: var(--color-fg);
        --modal-button-color-shadow: var(
          --color-opaque
        );
        --modal-button-color-shadow-hover: var(
          --color-opaque-alternate
        );
        --modal-button-font: var(--font-main-regular);
        --modal-button-font-weight: normal;
        --modal-button-size: 1.8rem;
        --modal-button-thickness: 1.5px;
        --modal-transition-duration: 0.15s;
        --modal-trigger-transition-duration: 0.15s;

        position: absolute;
      }

      .c-modal__body {
        background-color: var(--modal-color-bg);
        border: none;
        box-sizing: border-box;
        color: var(--modal-color-fg);
        height: 100%;
        left: 0;
        max-height: none;
        max-width: none;
        overflow-y: scroll;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        position: fixed;
        transition: var(--modal-transition-duration);
        top: 0;
        width: 100%;
        z-index: 9;
      }

      .c-modal__body:not([open]) {
        display: none;
        opacity: 0;
        pointer-events: none;
      }

      .c-modal__body.is-opening {
        display: block;
        opacity: 0;
        visibility: visible;
      }

      .c-modal__body.is-open {
        display: block;
        opacity: 1;
        pointer-events: initial;
      }

      .c-modal__body.is-closing {
        opacity: 0;
      }

      .c-modal__body.-is-closed {
        display: none;
        visibility: hidden;
      }

      .c-modal__back-button,
      .c-modal__back-button:focus,
      .c-modal__close-button,
      .c-modal__close-button:focus {
        border: solid 1px
          var(--modal-button-color-border);
        outline: none;
      }

      .c-modal__back-button,
      .c-modal__close-button {
        align-items: center;
        background-color: var(
          --modal-button-color-bg
        );
        color: inherit;
        cursor: pointer;
        display: grid;
        font-family: var(--modal-button-font);
        font-weight: var(--modal-button-font-weight);
        grid-template-columns: var(
          --modal-button-size
        );
        grid-template-rows: var(--modal-button-size);
        letter-spacing: 0.025em;
        padding-bottom: calc(var(--modal-spacing) / 3);
        padding-top: calc(var(--modal-spacing) / 3);
        position: sticky;
        top: calc(var(--modal-spacing) / 2);
        text-transform: uppercase;
        transition-duration: var(
          --modal-transition-duration
        );
        z-index: 9;
      }

      .c-modal__back-button:active,
      .c-modal__close-button:active {
        transform: translateY(2px);
      }

      .c-modal__back-button:hover,
      .c-modal__close-button:hover {
        box-shadow: 0 0 1px 1px
          var(--modal-button-color-shadow-hover);
      }

      .c-modal__back-button {
        border-radius: 100%;
        float: left;
        justify-items: center;
        margin-left: calc(var(--modal-spacing) / 2);
        width: calc(
          var(--modal-button-size) +
          (var(--modal-spacing) / 3 * 2)
        );
      }

      .c-modal__back-button i {
        font-family: 'icons';
        font-size: 1.4em;
        font-style: normal;
        left: .025em;
        position: relative;
        text-transform: none;
      }

      .c-modal__close-button {
        display: none;
        font-size: 0.7rem;
        float: right;
        margin-right: calc(var(--modal-spacing) / 2);
        margin-top: calc(var(--modal-spacing) / 2);
        padding-left: calc(var(--modal-spacing) / 3);
        padding-right: calc(var(--modal-spacing) / 3);
      }

      @media (min-width: 45em) {

        .c-modal__close-button {
          grid-gap: 0.25rem;
          grid-template-columns:var(
            --modal-button-size
          );
        }

      }

      .c-modal__close-button span {
        display: none;
      }

      @media (min-width: 45em) {

        .c-modal__close-button span {
          display: inline-block;
          margin-top: 1px;
        }

      }

      .c-modal__close-button i {
        height: var(--modal-button-size);
        position: relative;
        text-align: center;
      }

      .c-modal__close-button i::before,
      .c-modal__close-button i::after {
        background-color: var(
          --modal-button-color-fg
        );
        content: '';
        height: 100%;
        margin: auto;
        position: absolute;
        transform-origin: center;
        width: var(--modal-button-thickness);
      }

      .c-modal__close-button i::before {
        transform: rotate(-45deg);
      }

      .c-modal__close-button i::after {
        transform: rotate(45deg);
      }

      .c-modal__content {
        position: absolute;
        width: 100%;
      }
    `)),props:{open:{type:Boolean,attribute:!0}},init(){this.open=!1,this.render(),this._setup(),Xt.registerDialog(this._dialogEl),window.addEventListener("click",(t=>{t.target.closest("[data-modal-target="+this._triggerData+"]")&&this.showModal()}),!0),this.shadowRoot.addEventListener("click",(t=>{t.target.closest(".c-modal__back-button")&&this.close(),t.target.closest(".c-modal__close-button")&&this.close()})),this._dialogEl.classList.add("is-closed"),this.open?this.showModal():this._dialogEl.classList.add("is-closed")},_setup(){const t=window.getComputedStyle(this);this._documentEl=document.documentElement,this._triggerData=this.dataset.modalTrigger,this._triggerEl=document.querySelector("[data-modal-target="+this._triggerData+"][data-modal-trigger-primary]"),this._triggerParent=this._triggerEl.parentElement,this._dialogEl=this.shadowRoot.querySelector("dialog"),this._closeButtonEl=this._dialogEl.querySelector(".c-modal__close-button"),this._triggerDuration=1e3*parseFloat(t.getPropertyValue("--modal-trigger-transition-duration")),this._modalDuration=1e3*parseFloat(t.getPropertyValue("--modal-transition-duration"))},close(){this._handleClose()},_open(){this._triggerEl.classList.add("is-expanded"),this._triggerParent.style.zIndex="9",setTimeout((()=>{this.setAttribute("open",""),this._dialogEl.classList.remove("is-closed"),this._dialogEl.classList.add("is-opening"),this._documentEl.style.overflow="hidden",this._dialogEl.classList.remove("is-opening"),this._dialogEl.classList.add("is-open")}),this._triggerDuration)},showModal(){this._open()},_handleClose(){this.removeAttribute("open"),this._dialogEl.classList.remove("is-open"),this._dialogEl.classList.add("is-closing"),setTimeout((()=>{this._documentEl.style.overflow="",this._dialogEl.classList.remove("is-closing"),this._dialogEl.classList.add("is-closed"),this._triggerEl.classList.remove("is-expanded"),setTimeout((()=>{this._triggerParent.style.zIndex=""}),this._triggerDuration)}),this._modalDuration)},attachShadow:{mode:"open"},render(){this.html(Vt||(Vt=Bt`
        <style>
          ${0}
        </style>
        <dialog class="c-modal__body">
          <button class="c-modal__back-button">
            <i>l</i>
          </button>
          <button class="c-modal__close-button">
            <i></i>
          </button>
          <section class="c-modal__content">
            <slot> </slot>
          </section>
        </dialog>
      `),this.styles)}})}));let Ut,$t,Zt=t=>t;at("uce-lib").then((({define:t,render:e,html:i,svg:n,css:r})=>{t("c-squiggle",{style:t=>r(Ut||(Ut=Zt`
      ${0}  {
        display: block;
        height: 0.5rem;
        line-height: 0;
        margin-top: 1rem;
      }

      .c-squiggle__svg {
        display: inline-block;
        fill: var(--color-accent);
      }
    `),t),render(){this.html($t||($t=Zt`
        <svg
          class="c-squiggle__svg"
          height="8px"
          width="80px"
        >
          <path
            class="c-squiggle__path"
            d="m 42.476186,0.7481025 4.037372,2.70742 c 0.902472,0.61748 2.089934,0.61748 2.944907,0 l 4.037373,-2.70742 c 1.519952,-0.99747 3.46739,-0.99747 4.939843,0 l 4.037373,2.70742 c 0.902471,0.61748 2.089934,0.61748 2.944907,0 l 4.084871,-2.70742 c 1.472453,-0.99747 3.419892,-0.99747 4.939844,0 l 4.084871,2.70742 c 0.189994,0.14249 0.379988,0.23749 0.61748,0.28499 0.474985,0.14249 0.807475,0.52248 0.854973,1.04496 0,0.42749 -0.284991,0.80748 -0.712477,0.80748 h -0.142496 v 0 c -0.569982,-0.095 -1.092465,-0.33249 -1.56745,-0.66498 l -4.037373,-2.70742 c -0.902471,-0.61748 -2.089934,-0.61748 -2.944907,0 l -4.037372,2.70742 c -1.472454,0.99747 -3.46739,0.99747 -4.939844,0 l -3.989874,-2.75491 c -0.902471,-0.61748 -2.089934,-0.61748 -2.944907,0 l -4.037372,2.70741 c -1.472454,0.99747 -3.467391,0.99747 -4.939844,0 l -4.037373,-2.70741 c -0.902471,-0.61748 -2.089934,-0.61748 -2.944907,0 l -4.037372,2.70741 c -0.745083,0.50473 -1.621663,0.81336 -2.49891,0.80751 -4.86e-4,2.2e-4 -4.55e-4,1.6e-4 -4.23e-4,8e-5 -0.891255,0.0145 -1.790987,-0.23538 -2.548035,-0.74822 l -4.037373,-2.70741 c -0.902471,-0.61748 -2.089934,-0.61748 -2.944906,0 l -4.037373,2.70741 c -1.472453,0.99747 -3.46739,0.99747 -4.939844,0 l -4.0373723,-2.70741 c -0.902472,-0.61748 -2.089934,-0.61748 -2.944907,0 l -4.0373727,2.70741 c -0.664979,0.33249 -1.1874625,0.56999 -1.7574445,0.66498 C 0.474985,5.6523225 0.094997,5.3673325 0,4.9873425 v -0.14249 0 c 0.047499,-0.47499 0.379988,-0.90248 0.854973,-1.04497 0.2374925,-0.095 0.4274865,-0.18999 0.6174805,-0.28499 l 4.0373724,-2.70742 c 1.5199518,-0.99746 3.4673908,-0.99746 4.9398441,0 l 4.037373,2.70742 c 0.902471,0.61748 2.089934,0.61748 2.944907,0 l 4.037372,-2.70742 c 1.519952,-0.99746 3.467391,-0.99746 4.939844,0 l 4.037372,2.70742 c 0.513481,0.35133 1.151725,0.50276 1.73599,0.4543 0.463081,-0.0278 0.931741,-0.23584 1.316441,-0.51367 l 4.037373,-2.70742 c 1.519952,-0.99747 3.46739,-0.99747 4.939844,0 z"
          />
        </svg>
      `))}})}));let Gt,Qt,Jt=t=>t;at("uce-lib").then((({define:t,render:e,html:i,svg:n,css:r})=>{t("c-section-header",{styles:r(Gt||(Gt=Jt`
      :host  {
        --section-header-title-font: var(--font-display);
        --section-header-title-font-weight: var(--font-display-weight);

        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
        display: block;
        text-align: center;
      }

      ::slotted([slot='title']),
      ::slotted([slot='description']) {
        border-bottom: solid 1px
          var(--color-subtle-alternate);
        box-sizing: border-box;
        display: block;
      }

      ::slotted([slot='title']) {
        font-size: 1.4rem;
        font-family: var(--section-header-title-font), sans-serif;
        font-weight: var(--section-header-title-font-weight);
        line-height: 1.25;
        padding-bottom: 3rem;
        padding-left: .5rem;
        padding-right: .5rem;
        padding-top: 4rem;
        text-transform: uppercase;
      }

      @media (min-width: 16em) {

        ::slotted([slot='title']) {
          font-size: 1.5rem;
          padding-left: 1rem;
          padding-right: 1rem;
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 1px;
          -webkit-text-stroke-color: var(--color-fg);
        }
      }

      @media (min-width: 25em) {

        ::slotted([slot='title']) {
          font-size: 2.0736rem;
          font-size: clamp(
            2.0736rem,
            32.832px + 0.108vw,
            2.16rem
          );
        }

      }

      @media (min-width: 45em) {
        ::slotted([slot='title']) {
          padding-left: 6rem;
          padding-right: 6rem;
        }
      }

      ::slotted([slot='description']) {
        box-shadow: 0 0 0 1px var(--color-subtle-alternate);
        padding-bottom: 1.5rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: 1.5rem;
      }
    `)),attachShadow:{mode:"open"},render(){this.html(Qt||(Qt=Jt`
        <style>
          ${0}
        </style>
        <slot name="title"> </slot>
        <slot name="description"> </slot>
      `),this.styles)}})}));let Kt,te,ee=t=>t;at("uce-lib").then((({define:t,render:e,html:i,svg:n,css:r})=>{t("c-theme-switch",{styles:r(Kt||(Kt=ee`
      * {
        box-sizing: border-box;
      }

      *::selection {
        background-color: transparent;
      }

      :host  {
        --theme-switch-border: var(--color-subtle);
        --theme-switch-bg: var(--color-subtle);
        --theme-switch-switch-border: rgba(0, 0, 0, 0.8);
        --theme-switch-switch: white;

        align-items: center;
        border-right: solid 1px var(--theme-switch-border);
        display: grid;
        height: 100%;
        width: 100%;
      }

      .c-theme-switch__label {
        align-items: center;
        column-gap: .4rem;
        cursor: pointer;
        display: grid;
        grid-auto-flow: column;
        justify-content: center;
        position: relative;
      }

      @media (min-width:35em) {

        .c-theme-switch__label {
          column-gap: .5rem;
        }

      }

      .c-theme-switch__input {
        position: absolute;
        height: 0;
        opacity: 0;
        width: 0;
      }

      .c-theme-switch__switch {
        background: var(--theme-switch-bg);
        border: solid var(--theme-switch-switch-border) 1px;
        height: 1.8rem;
        width: .9rem;
      }

      @media (min-width:35em) {

        .c-theme-switch__switch {
          height: 2rem;
          width: 1rem;
        }

      }

      .c-theme-switch__switch::before {
        background: white;
        content: '';
        display: block;
        height: 50%;
        transition: all 0.25s;
      }

      .c-theme-switch__input:checked
        + .c-theme-switch__switch::before {
        transform: translateY(100%);
      }

      ::slotted(i) {
        font-size: 0.66rem;
      }

      @media (min-width:35em) {

        ::slotted(i) {
          font-size: 0.75rem;
        }

      }
    `)),_handleChange(){const t=document.body.dataset.theme;document.body.dataset.theme="dark"===t?"light":"dark"},attachShadow:{mode:"open"},render(){this.html(te||(te=ee`
        <style>
          ${0}
        </style>
        <label class="c-theme-switch__label">
          <input
            type="checkbox"
            class="c-theme-switch__input"
            onChange=${0}
          />
          <span class="c-theme-switch__switch"></span>
          <slot></slot>
        </label>

      `),this.styles,this._handleChange)}})}));let ie,ne,re=t=>t;at("uce-lib").then((({define:t,render:e,html:i,svg:n,css:r})=>{t("c-top-bar",{styles:r(ie||(ie=re`

      :host {
        align-items: flex-start;
        display: grid;
        grid-template-columns: min-content min-content;
        justify-content: space-between;
        max-height: 72px;
        padding-bottom: 1rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-top: 1rem;
        position: fixed;
        width: 100%;
        z-index: 9;
      }

      @media (min-height: 35em) {
        :host {
          padding-bottom: 1.5rem;
          padding-top: 1.5rem;
        }
      }

      .c-top-bar__nav {
        display: grid;
        font-size: 125%;
        grid-auto-flow: column;
        grid-gap: 0.25rem;
        transform: translatex(0);
      }

      @media (min-width: 45em) and (min-height: 35em) {
        .c-top-bar__nav {
          grid-auto-flow: row;
          grid-gap: 0;
          transform: translatex(0.25rem);
        }
      }

      ::slotted([slot='link']) {
        padding: 0 0.25rem;
        text-align: center;
        text-decoration: none;
      }
    `)),attachShadow:{mode:"open"},render(){this.html(ne||(ne=re`
        <style>
          ${0}
        </style>
        <slot name="logo"> </slot>
        <nav class="c-top-bar__nav">
          <slot name="link"> </slot>
        </nav>
      `),this.styles)}})}));var oe=i(59);var se=function(t,e){var i=t.map((function(t){return t.then((function(t){return{value:t,status:!0}}),(function(t){return{value:t,status:!1}})).then((function(t){return"function"==typeof e&&e(t),t}))}));return Promise.all(i)},ae=function(t,e){this.onProgress="function"==typeof e?e:null,this.fallbackImage="string"==typeof t||t instanceof HTMLImageElement?t:null};function le(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],n=!0,r=!1,o=void 0;try{for(var s,a=t[Symbol.iterator]();!(n=(s=a.next()).done)&&(i.push(s.value),!e||i.length!==e);n=!0);}catch(t){r=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(r)throw o}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ce(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function he(t){if(!me(t))return!1;var e=be(t,ue(t)),i=ce(ue(e)?document.querySelectorAll(e.target):document.querySelectorAll(e)),n=[];if(i.forEach((function(t){var i=function(t,e){return new Promise((function(i,n){if(void 0===t&&n("Target element is undefined"),"true"!==t.getAttribute("data-scramble-active")){e.beforeEach&&e.beforeEach(t),t.setAttribute("data-scramble-active","true"),t.classList.add("scrambling");var r,o=t.innerHTML,s=[],a=e.speed?e.speed:100,l=t.textContent.split(""),c=l,h=t.textContent.split(""),u=!1;fe(e.text)?r=we(e.text):t.getAttribute("data-scramble-text")&&""!==t.getAttribute("data-scramble-text")&&(r=we(t.getAttribute("data-scramble-text"))),r&&(u=!0,l=r.truth,h=r.newLetters,c=r.startText);var d=function(){if(c.map((function(e,i){return!(" \t\n\r\v".indexOf(e)>-1||(h[i]=ve(),!0===s[i]&&(h[i]=l[i]),t.textContent=h.join(""),0))})),xe(h,l)){if(t.innerHTML=o,u){var n=t.children[0];n&&""!==n?n.textContent=h.join(""):t.textContent=h.join("")}clearInterval(g),t.setAttribute("data-scramble-active","false"),t.classList.remove("scrambling"),e.afterEach&&e.afterEach(t),i(t)}};!function(t){if(t&&de(t))for(var i=0;i<=t.length;i++)!function(t){setTimeout((function(){s[t]=!0}),ye(ue(e),e.random,e.speed))}(i)}(c),d();var g=setInterval((function(){d()}),a)}else n("Animation already triggered")}))}(t,e);n.push(i)})),!(n.length>0))return!1;e.beforeAll&&e.beforeAll(i),Promise.all(n).then((function(t){e.afterAll&&e.afterAll(t)})).catch((function(t){e.errorHandler&&e.errorHandler(t)}))}ae.simplePreload=function(t){return new Promise((function(e,i){var n;t instanceof HTMLImageElement?(n=t).complete?n.naturalHeight?e(n):i(n):(n.onload=e.bind(null,n),n.onerror=n.onabort=i.bind(null,n)):"string"==typeof t&&((n=new Image).onload=e.bind(null,n),n.onerror=n.onabort=i.bind(null,n),n.src=t)}))},ae.prototype.preload=function(t){var e=this,i=Array.prototype.concat.apply([],Array.prototype.slice.call(arguments));return i=i.map((function(t){return ae.simplePreload(t).catch((function(t){return e.fallbackImage?ae.simplePreload(e.fallbackImage).then((function(e){return t.setAttribute("data-fail-src",t.src),t.src=e.src,t}),(function(){return Promise.reject(t)})):Promise.reject(t)}))})),se(i,e.onProgress)};var ue=function(t){return!!t&&t.constructor===Object},de=function(t){return!!t&&t.constructor===Array},ge=function(t){return"function"==typeof t},pe=function(t){return Number.isInteger(t)},fe=function(t){return!(!t||""===t||!("string"==typeof t||t instanceof String))},me=function(t){return!de(t)&&!function(t){return"boolean"==typeof t}(t)&&"number"!=typeof t&&"function"!=typeof t&&void 0!==t},ve=function(t,e){var i=t||1,n=e||!1,r=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,i);return" \t\n\r\v".indexOf(r)<0&&!0!==n&&r},ye=function(t,e,i){var n=i||100;if((t||!1)&&de(e)&&e.length>1){var r=le(e,2),o=r[0],s=r[1];if((i>=s||n>=s)&&(n=s-1),o>(s-=n)&&(o=s),pe(o)&&pe(s))return Math.floor(Math.random()*(s-o))+o}return Math.floor(1999*Math.random())+1e3},be=function(t,e){var i={target:"[data-scrambler]",random:[1e3,3e3],speed:100,text:!1,beforeEach:!1,afterEach:!1,beforeAll:!1,afterAll:!1,errorHandler:!1};return t&&(e||!1)&&(i.target=void 0!==t.target?t.target:"[data-scrambler]",i.random=void 0!==t.random?t.random:[1e3,3e3],i.speed=void 0!==t.speed?t.speed:100,i.text=void 0!==t.text&&t.text,i.beforeEach=!(void 0===t.beforeEach||!ge(t.beforeEach))&&t.beforeEach,i.afterEach=!(void 0===t.afterEach||!ge(t.afterEach))&&t.afterEach,i.beforeAll=!(void 0===t.beforeAll||!ge(t.beforeAll))&&t.beforeAll,i.afterAll=!(void 0===t.afterAll||!ge(t.afterAll))&&t.afterAll,i.errorHandler=!(void 0===t.errorHandler||!ge(t.errorHandler))&&t.errorHandler),i},xe=function(t,e){return!(t.length!==e.length||!t.every((function(t,i){return t===e[i]})))},we=function(t){if(!t||void 0===t||!("string"==typeof t||t instanceof String))return!1;var e=t,i=e.split(""),n=e.split(""),r=[];return i.forEach((function(t,e){" \t\n\r\v".indexOf(i[e])>-1?r.push(" "):r.push(ve())})),{truth:i,newLetters:n,startText:r}},_e=he;const ke=new ae,Se=document.querySelector("c-loader");!function(){const t=["background: #fff","border-bottom: solid 1px black","border-left: solid 1px black","border-top: solid 1px black","color: #666","line-height: 35px","padding: 10px 0px 10px 10px"].join(";"),e=["background: #fff","border-bottom: solid 1px black","border-top: solid 1px black","color: red","line-height: 35px","padding: 10px 5px 10px 0px","width: 300px"].join(";"),i=["background: #fff","border-bottom: solid 1px black","border-right: solid 1px black","border-top: solid 1px black","color: #666","line-height: 35px","padding: 10px 20px 10px 0px","width: 300px"].join(";");console.log("%c Coded with %c ♥️ %c https://davidbwaters.com",t,e,i)}(),Object(oe.a)({selector:"*[data-glightbox]",touchNavigation:!0,loop:!0,autoplayVideos:!0,openEffect:"fade",closeEffect:"fade",skin:"dbw"}),document.querySelectorAll("c-modal"),ke.preload("/images/Loader.svg","/images/Me-Dark.jpg","/images/Me-Light.jpg","/images/Hero-Paint-1-Dark.jpg","/images/Hero-Paint-1-Light.jpg","/images/Hero-Paint-2-Dark.jpg","/images/Hero-Paint-2-Light.jpg","/images/Noise-Clear.svg").then((function(t){Se.disable(),setTimeout((()=>{_e({target:"[data-scrambler]",random:[1e3,1e3],speed:60})}),1500)}))}],[[114,4,3,1,0]]]);