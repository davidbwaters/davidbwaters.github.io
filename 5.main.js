/*! For license information please see 5.main.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],Array(19).concat([function(e,t,i){"use strict";var n=i(101),a=i(7),s=i(12),r=i(15),o=i(25),l=i(105),c=i(106),d=i(107),h=Math.max,u=Math.min;n("replace",2,(function(e,t,i,n){var g=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,p=n.REPLACE_KEEPS_$0,m=g?"$":"$0";return[function(i,n){var a=o(this),s=null==i?void 0:i[e];return void 0!==s?s.call(i,a,n):t.call(String(a),i,n)},function(e,n){if(!g&&p||"string"==typeof n&&-1===n.indexOf(m)){var o=i(t,e,this,n);if(o.done)return o.value}var f=a(e),v=String(this),y="function"==typeof n;y||(n=String(n));var b=f.global;if(b){var w=f.unicode;f.lastIndex=0}for(var _=[];;){var x=d(f,v);if(null===x)break;if(_.push(x),!b)break;""===String(x[0])&&(f.lastIndex=l(v,s(f.lastIndex),w))}for(var k,S="",E=0,A=0;A<_.length;A++){x=_[A];for(var T=String(x[0]),L=h(u(r(x.index),v.length),0),C=[],M=1;M<x.length;M++)C.push(void 0===(k=x[M])?k:String(k));var I=x.groups;if(y){var P=[T].concat(C,L,v);void 0!==I&&P.push(I);var j=String(n.apply(void 0,P))}else j=c(T,v,L,C,I,n);L>=E&&(S+=v.slice(E,L)+j,E=L+T.length)}return S+v.slice(E)}]}))},,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,i){"use strict";var n,a,s=i(103),r=i(104),o=RegExp.prototype.exec,l=String.prototype.replace,c=o,d=(n=/a/,a=/b*/g,o.call(n,"a"),o.call(a,"a"),0!==n.lastIndex||0!==a.lastIndex),h=r.UNSUPPORTED_Y||r.BROKEN_CARET,u=void 0!==/()??/.exec("")[1];(d||u||h)&&(c=function(e){var t,i,n,a,r=this,c=h&&r.sticky,g=s.call(r),p=r.source,m=0,f=e;return c&&(-1===(g=g.replace("y","")).indexOf("g")&&(g+="g"),f=String(e).slice(r.lastIndex),r.lastIndex>0&&(!r.multiline||r.multiline&&"\n"!==e[r.lastIndex-1])&&(p="(?: "+p+")",f=" "+f,m++),i=new RegExp("^(?:"+p+")",g)),u&&(i=new RegExp("^"+p+"$(?!\\s)",g)),d&&(t=r.lastIndex),n=o.call(c?i:r,f),c?n?(n.input=n.input.slice(m),n[0]=n[0].slice(m),n.index=r.lastIndex,r.lastIndex+=n[0].length):r.lastIndex=0:d&&n&&(r.lastIndex=r.global?n.index+n[0].length:t),u&&n&&n.length>1&&l.call(n[0],i,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(n[a]=void 0)})),n}),e.exports=c},function(e,t,i){var n=i(15),a=i(25),s=function(e){return function(t,i){var s,r,o=String(a(t)),l=n(i),c=o.length;return l<0||l>=c?e?"":void 0:(s=o.charCodeAt(l))<55296||s>56319||l+1===c||(r=o.charCodeAt(l+1))<56320||r>57343?e?o.charAt(l):s:e?o.slice(l,l+2):r-56320+(s-55296<<10)+65536}};e.exports={codeAt:s(!1),charAt:s(!0)}},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,i){var n=i(2),a=i(1),s=i(27),r=a("iterator");e.exports=!n((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,i="";return e.pathname="c%20d",t.forEach((function(e,n){t.delete("b"),i+=n+e})),s&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[r]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==i||"x"!==new URL("http://x",void 0).host}))},function(e,t,i){"use strict";i(17)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},function(e,t,i){"use strict";(function(e){i(19),i(4),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self;var n=function(e,t,i){return e(i={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&i.path)}},i.exports),i.exports}((function(e,t){e.exports=function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function a(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var r=Date.now();function o(){var e={},t=!0,i=0,n=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],i++);for(var a=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t&&"[object Object]"===Object.prototype.toString.call(i[n])?e[n]=o(!0,e[n],i[n]):e[n]=i[n])};i<n;i++)a(arguments[i]);return e}function l(e,t){if((T(e)||e===window||e===document)&&(e=[e]),C(e)||M(e)||(e=[e]),0!=j(e))if(C(e)&&!M(e))for(var i=e.length,n=0;n<i&&!1!==t.call(e[n],e[n],n,e);n++);else if(M(e))for(var a in e)if(P(e,a)&&!1===t.call(e[a],e[a],a,e))break}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=e[r]=e[r]||[],a={all:n,evt:null,found:null};return t&&i&&j(n)>0&&l(n,(function(e,n){if(e.eventName==t&&e.fn.toString()==i.toString())return a.found=!0,a.evt=n,!1})),a}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.onElement,n=t.withCallback,a=t.avoidDuplicate,s=void 0===a||a,r=t.once,o=void 0!==r&&r,d=t.useCapture,h=void 0!==d&&d,u=arguments.length>2?arguments[2]:void 0,g=i||[];function p(e){E(n)&&n.call(u,e,this),o&&p.destroy()}return A(g)&&(g=document.querySelectorAll(g)),p.destroy=function(){l(g,(function(t){var i=c(t,e,p);i.found&&i.all.splice(i.evt,1),t.removeEventListener&&t.removeEventListener(e,p,h)}))},l(g,(function(t){var i=c(t,e,p);(t.addEventListener&&s&&!i.found||!s)&&(t.addEventListener(e,p,h),i.all.push({eventName:e,fn:p}))})),p}function h(e,t){l(t.split(" "),(function(t){return e.classList.add(t)}))}function u(e,t){l(t.split(" "),(function(t){return e.classList.remove(t)}))}function g(e,t){return e.classList.contains(t)}function p(e,t){for(;e!==document.body;){if(!(e=e.parentElement))return!1;if("function"==typeof e.matches?e.matches(t):e.msMatchesSelector(t))return e}}function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||""===t)return!1;if("none"==t)return E(i)&&i(),!1;var n=_(),a=t.split(" ");l(a,(function(t){h(e,"g"+t)})),d(n,{onElement:e,avoidDuplicate:!1,once:!0,withCallback:function(e,t){l(a,(function(e){u(t,"g"+e)})),E(i)&&i()}})}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(""==t)return e.style.webkitTransform="",e.style.MozTransform="",e.style.msTransform="",e.style.OTransform="",e.style.transform="",!1;e.style.webkitTransform=t,e.style.MozTransform=t,e.style.msTransform=t,e.style.OTransform=t,e.style.transform=t}function v(e){e.style.display="block"}function y(e){e.style.display="none"}function b(e){var t=document.createDocumentFragment(),i=document.createElement("div");for(i.innerHTML=e;i.firstChild;)t.appendChild(i.firstChild);return t}function w(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}}function _(){var e,t=document.createElement("fakeelement"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}function x(e,t,i,n){if(e())t();else{var a;i||(i=100);var s=setInterval((function(){e()&&(clearInterval(s),a&&clearTimeout(a),t())}),i);n&&(a=setTimeout((function(){clearInterval(s)}),n))}}function k(e,t,i){if(I(e))console.error("Inject assets error");else if(E(t)&&(i=t,t=!1),A(t)&&t in window)E(i)&&i();else{var n;if(-1!==e.indexOf(".css")){if((n=document.querySelectorAll('link[href="'+e+'"]'))&&n.length>0)return void(E(i)&&i());var a=document.getElementsByTagName("head")[0],s=a.querySelectorAll('link[rel="stylesheet"]'),r=document.createElement("link");return r.rel="stylesheet",r.type="text/css",r.href=e,r.media="all",s?a.insertBefore(r,s[0]):a.appendChild(r),void(E(i)&&i())}if((n=document.querySelectorAll('script[src="'+e+'"]'))&&n.length>0){if(E(i)){if(A(t))return x((function(){return void 0!==window[t]}),(function(){i()})),!1;i()}}else{var o=document.createElement("script");o.type="text/javascript",o.src=e,o.onload=function(){if(E(i)){if(A(t))return x((function(){return void 0!==window[t]}),(function(){i()})),!1;i()}},document.body.appendChild(o)}}}function S(){return"navigator"in window&&window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)}function E(e){return"function"==typeof e}function A(e){return"string"==typeof e}function T(e){return!(!e||!e.nodeType||1!=e.nodeType)}function L(e){return Array.isArray(e)}function C(e){return e&&e.length&&isFinite(e.length)}function M(t){return"object"===e(t)&&null!=t&&!E(t)&&!L(t)}function I(e){return null==e}function P(e,t){return null!==e&&hasOwnProperty.call(e,t)}function j(e){if(M(e)){if(e.keys)return e.keys().length;var t=0;for(var i in e)P(e,i)&&t++;return t}return e.length}function O(e){return!isNaN(parseFloat(e))&&isFinite(e)}function D(e){if(e.events.hasOwnProperty("keyboard"))return!1;e.events.keyboard=d("keydown",{onElement:window,withCallback:function(t,i){var n=(t=t||window.event).keyCode;if(9==n){var s=!(!document.activeElement||!document.activeElement.nodeName)&&document.activeElement.nodeName.toLocaleLowerCase();if("input"==s||"textarea"==s||"button"==s)return;t.preventDefault();var r=document.querySelectorAll(".gbtn");if(!r||r.length<=0)return;var o=a(r).filter((function(e){return g(e,"focused")}));if(!o.length){var l=document.querySelector('.gbtn[tabindex="0"]');return void(l&&(l.focus(),h(l,"focused")))}r.forEach((function(e){return u(e,"focused")}));var c=o[0].getAttribute("tabindex");c=c||"0";var d=parseInt(c)+1;d>r.length-1&&(d="0");var p=document.querySelector('.gbtn[tabindex="'.concat(d,'"]'));p&&(p.focus(),h(p,"focused"))}39==n&&e.nextSlide(),37==n&&e.prevSlide(),27==n&&e.close()}})}function z(e){return Math.sqrt(e.x*e.x+e.y*e.y)}function R(e,t){var i=function(e,t){var i=z(e)*z(t);if(0===i)return 0;var n=function(e,t){return e.x*t.x+e.y*t.y}(e,t)/i;return n>1&&(n=1),Math.acos(n)}(e,t);return function(e,t){return e.x*t.y-t.x*e.y}(e,t)>0&&(i*=-1),180*i/Math.PI}var q=function(){function e(i){t(this,e),this.handlers=[],this.el=i}return n(e,[{key:"add",value:function(e){this.handlers.push(e)}},{key:"del",value:function(e){e||(this.handlers=[]);for(var t=this.handlers.length;t>=0;t--)this.handlers[t]===e&&this.handlers.splice(t,1)}},{key:"dispatch",value:function(){for(var e=0,t=this.handlers.length;e<t;e++){var i=this.handlers[e];"function"==typeof i&&i.apply(this.el,arguments)}}}]),e}();function N(e,t){var i=new q(e);return i.add(t),i}var B=function(){function e(i,n){t(this,e),this.element="string"==typeof i?document.querySelector(i):i,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var a=function(){};this.rotate=N(this.element,n.rotate||a),this.touchStart=N(this.element,n.touchStart||a),this.multipointStart=N(this.element,n.multipointStart||a),this.multipointEnd=N(this.element,n.multipointEnd||a),this.pinch=N(this.element,n.pinch||a),this.swipe=N(this.element,n.swipe||a),this.tap=N(this.element,n.tap||a),this.doubleTap=N(this.element,n.doubleTap||a),this.longTap=N(this.element,n.longTap||a),this.singleTap=N(this.element,n.singleTap||a),this.pressMove=N(this.element,n.pressMove||a),this.twoFingerPressMove=N(this.element,n.twoFingerPressMove||a),this.touchMove=N(this.element,n.touchMove||a),this.touchEnd=N(this.element,n.touchEnd||a),this.touchCancel=N(this.element,n.touchCancel||a),this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}}return n(e,[{key:"start",value:function(e){if(e.touches){this.now=Date.now(),this.x1=e.touches[0].pageX,this.y1=e.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(e,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var t=this.preV;if(e.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var i={x:e.touches[1].pageX-this.x1,y:e.touches[1].pageY-this.y1};t.x=i.x,t.y=i.y,this.pinchStartLen=z(t),this.multipointStart.dispatch(e,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(e,this.element),this._preventTap=!0}.bind(this),750)}}},{key:"move",value:function(e){if(e.touches){var t=this.preV,i=e.touches.length,n=e.touches[0].pageX,a=e.touches[0].pageY;if(this.isDoubleTap=!1,i>1){var s=e.touches[1].pageX,r=e.touches[1].pageY,o={x:e.touches[1].pageX-n,y:e.touches[1].pageY-a};null!==t.x&&(this.pinchStartLen>0&&(e.zoom=z(o)/this.pinchStartLen,this.pinch.dispatch(e,this.element)),e.angle=R(o,t),this.rotate.dispatch(e,this.element)),t.x=o.x,t.y=o.y,null!==this.x2&&null!==this.sx2?(e.deltaX=(n-this.x2+s-this.sx2)/2,e.deltaY=(a-this.y2+r-this.sy2)/2):(e.deltaX=0,e.deltaY=0),this.twoFingerPressMove.dispatch(e,this.element),this.sx2=s,this.sy2=r}else{if(null!==this.x2){e.deltaX=n-this.x2,e.deltaY=a-this.y2;var l=Math.abs(this.x1-this.x2),c=Math.abs(this.y1-this.y2);(l>10||c>10)&&(this._preventTap=!0)}else e.deltaX=0,e.deltaY=0;this.pressMove.dispatch(e,this.element)}this.touchMove.dispatch(e,this.element),this._cancelLongTap(),this.x2=n,this.y2=a,i>1&&e.preventDefault()}}},{key:"end",value:function(e){if(e.changedTouches){this._cancelLongTap();var t=this;e.touches.length<2&&(this.multipointEnd.dispatch(e,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(e.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout((function(){t.swipe.dispatch(e,t.element)}),0)):(this.tapTimeout=setTimeout((function(){t._preventTap||t.tap.dispatch(e,t.element),t.isDoubleTap&&(t.doubleTap.dispatch(e,t.element),t.isDoubleTap=!1)}),0),t.isDoubleTap||(t.singleTapTimeout=setTimeout((function(){t.singleTap.dispatch(e,t.element)}),250))),this.touchEnd.dispatch(e,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}}},{key:"cancelAll",value:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)}},{key:"cancel",value:function(e){this.cancelAll(),this.touchCancel.dispatch(e,this.element)}},{key:"_cancelLongTap",value:function(){clearTimeout(this.longTapTimeout)}},{key:"_cancelSingleTap",value:function(){clearTimeout(this.singleTapTimeout)}},{key:"_swipeDirection",value:function(e,t,i,n){return Math.abs(e-t)>=Math.abs(i-n)?e-t>0?"Left":"Right":i-n>0?"Up":"Down"}},{key:"on",value:function(e,t){this[e]&&this[e].add(t)}},{key:"off",value:function(e,t){this[e]&&this[e].del(t)}},{key:"destroy",value:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}}]),e}();function U(e){var t=function(){var e,t=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(e in i)if(void 0!==t.style[e])return i[e]}(),i=g(e,"gslide-media")?e:e.querySelector(".gslide-media"),n=e.querySelector(".gslide-description");h(i,"greset"),f(i,"translate3d(0, 0, 0)"),d(t,{onElement:i,once:!0,withCallback:function(e,t){u(i,"greset")}}),i.style.opacity="",n&&(n.style.opacity="")}function W(e){if(e.events.hasOwnProperty("touch"))return!1;var t,i,n,a=w(),s=a.width,r=a.height,o=!1,l=null,c=null,d=null,m=!1,v=1,y=1,b=!1,_=!1,x=null,k=null,S=null,E=null,A=0,T=0,L=!1,C=!1,M={},I={},P=0,j=0,O=document.getElementById("glightbox-slider"),D=document.querySelector(".goverlay"),z=new B(O,{touchStart:function(t){if(o=!0,(g(t.targetTouches[0].target,"ginner-container")||p(t.targetTouches[0].target,".gslide-desc")||"a"==t.targetTouches[0].target.nodeName.toLowerCase())&&(o=!1),p(t.targetTouches[0].target,".gslide-inline")&&!g(t.targetTouches[0].target.parentNode,"gslide-inline")&&(o=!1),o){if(I=t.targetTouches[0],M.pageX=t.targetTouches[0].pageX,M.pageY=t.targetTouches[0].pageY,P=t.targetTouches[0].clientX,j=t.targetTouches[0].clientY,l=e.activeSlide,c=l.querySelector(".gslide-media"),n=l.querySelector(".gslide-inline"),d=null,g(c,"gslide-image")&&(d=c.querySelector("img")),u(D,"greset"),t.pageX>20&&t.pageX<window.innerWidth-20)return;t.preventDefault()}},touchMove:function(a){if(o&&(I=a.targetTouches[0],!b&&!_)){if(n&&n.offsetHeight>r){var l=M.pageX-I.pageX;if(Math.abs(l)<=13)return!1}m=!0;var h,u=a.targetTouches[0].clientX,g=a.targetTouches[0].clientY,p=P-u,v=j-g;if(Math.abs(p)>Math.abs(v)?(L=!1,C=!0):(C=!1,L=!0),t=I.pageX-M.pageX,A=100*t/s,i=I.pageY-M.pageY,T=100*i/r,L&&d&&(h=1-Math.abs(i)/r,D.style.opacity=h,e.settings.touchFollowAxis&&(A=0)),C&&(h=1-Math.abs(t)/s,c.style.opacity=h,e.settings.touchFollowAxis&&(T=0)),!d)return f(c,"translate3d(".concat(A,"%, 0, 0)"));f(c,"translate3d(".concat(A,"%, ").concat(T,"%, 0)"))}},touchEnd:function(){if(o){if(m=!1,_||b)return S=x,void(E=k);var t=Math.abs(parseInt(T)),i=Math.abs(parseInt(A));if(!(t>29&&d))return t<29&&i<25?(h(D,"greset"),D.style.opacity=1,U(c)):void 0;e.close()}},multipointEnd:function(){setTimeout((function(){b=!1}),50)},multipointStart:function(){b=!0,v=y||1},pinch:function(e){if(!d||m)return!1;b=!0,d.scaleX=d.scaleY=v*e.zoom;var t=v*e.zoom;if(_=!0,t<=1)return _=!1,t=1,E=null,S=null,x=null,k=null,void d.setAttribute("style","");t>4.5&&(t=4.5),d.style.transform="scale3d(".concat(t,", ").concat(t,", 1)"),y=t},pressMove:function(e){if(_&&!b){var t=I.pageX-M.pageX,i=I.pageY-M.pageY;S&&(t+=S),E&&(i+=E),x=t,k=i;var n="translate3d(".concat(t,"px, ").concat(i,"px, 0)");y&&(n+=" scale3d(".concat(y,", ").concat(y,", 1)")),f(d,n)}},swipe:function(t){if(!_)if(b)b=!1;else{if("Left"==t.direction){if(e.index==e.elements.length-1)return U(c);e.nextSlide()}if("Right"==t.direction){if(0==e.index)return U(c);e.prevSlide()}}}});e.events.touch=z}var H=function(){function e(i,n){var a=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(t(this,e),this.img=i,this.slide=n,this.onclose=s,this.img.setZoomEvents)return!1;this.active=!1,this.zoomedIn=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.img.addEventListener("mousedown",(function(e){return a.dragStart(e)}),!1),this.img.addEventListener("mouseup",(function(e){return a.dragEnd(e)}),!1),this.img.addEventListener("mousemove",(function(e){return a.drag(e)}),!1),this.img.addEventListener("click",(function(e){return a.slide.classList.contains("dragging-nav")?(a.zoomOut(),!1):a.zoomedIn?void(a.zoomedIn&&!a.dragging&&a.zoomOut()):a.zoomIn()}),!1),this.img.setZoomEvents=!0}return n(e,[{key:"zoomIn",value:function(){var e=this.widowWidth();if(!(this.zoomedIn||e<=768)){var t=this.img;if(t.setAttribute("data-style",t.getAttribute("style")),t.style.maxWidth=t.naturalWidth+"px",t.style.maxHeight=t.naturalHeight+"px",t.naturalWidth>e){var i=e/2-t.naturalWidth/2;this.setTranslate(this.img.parentNode,i,0)}this.slide.classList.add("zoomed"),this.zoomedIn=!0}}},{key:"zoomOut",value:function(){this.img.parentNode.setAttribute("style",""),this.img.setAttribute("style",this.img.getAttribute("data-style")),this.slide.classList.remove("zoomed"),this.zoomedIn=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.onclose&&"function"==typeof this.onclose&&this.onclose()}},{key:"dragStart",value:function(e){e.preventDefault(),this.zoomedIn?("touchstart"===e.type?(this.initialX=e.touches[0].clientX-this.xOffset,this.initialY=e.touches[0].clientY-this.yOffset):(this.initialX=e.clientX-this.xOffset,this.initialY=e.clientY-this.yOffset),e.target===this.img&&(this.active=!0,this.img.classList.add("dragging"))):this.active=!1}},{key:"dragEnd",value:function(e){var t=this;e.preventDefault(),this.initialX=this.currentX,this.initialY=this.currentY,this.active=!1,setTimeout((function(){t.dragging=!1,t.img.isDragging=!1,t.img.classList.remove("dragging")}),100)}},{key:"drag",value:function(e){this.active&&(e.preventDefault(),"touchmove"===e.type?(this.currentX=e.touches[0].clientX-this.initialX,this.currentY=e.touches[0].clientY-this.initialY):(this.currentX=e.clientX-this.initialX,this.currentY=e.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.img.isDragging=!0,this.dragging=!0,this.setTranslate(this.img,this.currentX,this.currentY))}},{key:"onMove",value:function(e){if(this.zoomedIn){var t=e.clientX-this.img.naturalWidth/2,i=e.clientY-this.img.naturalHeight/2;this.setTranslate(this.img,t,i)}}},{key:"setTranslate",value:function(e,t,i){e.style.transform="translate3d("+t+"px, "+i+"px, 0)"}},{key:"widowWidth",value:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}}]),e}(),Y=function(){function e(){var i=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e);var a=n.dragEl,s=n.toleranceX,r=void 0===s?40:s,o=n.toleranceY,l=void 0===o?65:o,c=n.slide,d=void 0===c?null:c,h=n.instance,u=void 0===h?null:h;this.el=a,this.active=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.direction=null,this.lastDirection=null,this.toleranceX=r,this.toleranceY=l,this.toleranceReached=!1,this.dragContainer=this.el,this.slide=d,this.instance=u,this.el.addEventListener("mousedown",(function(e){return i.dragStart(e)}),!1),this.el.addEventListener("mouseup",(function(e){return i.dragEnd(e)}),!1),this.el.addEventListener("mousemove",(function(e){return i.drag(e)}),!1)}return n(e,[{key:"dragStart",value:function(e){if(this.slide.classList.contains("zoomed"))this.active=!1;else{"touchstart"===e.type?(this.initialX=e.touches[0].clientX-this.xOffset,this.initialY=e.touches[0].clientY-this.yOffset):(this.initialX=e.clientX-this.xOffset,this.initialY=e.clientY-this.yOffset);var t=e.target.nodeName.toLowerCase();e.target.classList.contains("nodrag")||p(e.target,".nodrag")||-1!==["input","select","textarea","button","a"].indexOf(t)?this.active=!1:(e.preventDefault(),(e.target===this.el||"img"!==t&&p(e.target,".gslide-inline"))&&(this.active=!0,this.el.classList.add("dragging"),this.dragContainer=p(e.target,".ginner-container")))}}},{key:"dragEnd",value:function(e){var t=this;e&&e.preventDefault(),this.initialX=0,this.initialY=0,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.active=!1,this.doSlideChange&&(this.instance.preventOutsideClick=!0,"right"==this.doSlideChange&&this.instance.prevSlide(),"left"==this.doSlideChange&&this.instance.nextSlide()),this.doSlideClose&&this.instance.close(),this.toleranceReached||this.setTranslate(this.dragContainer,0,0,!0),setTimeout((function(){t.instance.preventOutsideClick=!1,t.toleranceReached=!1,t.lastDirection=null,t.dragging=!1,t.el.isDragging=!1,t.el.classList.remove("dragging"),t.slide.classList.remove("dragging-nav"),t.dragContainer.style.transform="",t.dragContainer.style.transition=""}),100)}},{key:"drag",value:function(e){if(this.active){e.preventDefault(),this.slide.classList.add("dragging-nav"),"touchmove"===e.type?(this.currentX=e.touches[0].clientX-this.initialX,this.currentY=e.touches[0].clientY-this.initialY):(this.currentX=e.clientX-this.initialX,this.currentY=e.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.el.isDragging=!0,this.dragging=!0,this.doSlideChange=!1,this.doSlideClose=!1;var t=Math.abs(this.currentX),i=Math.abs(this.currentY);if(t>0&&t>=Math.abs(this.currentY)&&(!this.lastDirection||"x"==this.lastDirection)){this.yOffset=0,this.lastDirection="x",this.setTranslate(this.dragContainer,this.currentX,0);var n=this.shouldChange();if(!this.instance.settings.dragAutoSnap&&n&&(this.doSlideChange=n),this.instance.settings.dragAutoSnap&&n)return this.instance.preventOutsideClick=!0,this.toleranceReached=!0,this.active=!1,this.instance.preventOutsideClick=!0,this.dragEnd(null),"right"==n&&this.instance.prevSlide(),void("left"==n&&this.instance.nextSlide())}if(this.toleranceY>0&&i>0&&i>=t&&(!this.lastDirection||"y"==this.lastDirection)){this.xOffset=0,this.lastDirection="y",this.setTranslate(this.dragContainer,0,this.currentY);var a=this.shouldClose();return!this.instance.settings.dragAutoSnap&&a&&(this.doSlideClose=!0),void(this.instance.settings.dragAutoSnap&&a&&this.instance.close())}}}},{key:"shouldChange",value:function(){var e=!1;if(Math.abs(this.currentX)>=this.toleranceX){var t=this.currentX>0?"right":"left";("left"==t&&this.slide!==this.slide.parentNode.lastChild||"right"==t&&this.slide!==this.slide.parentNode.firstChild)&&(e=t)}return e}},{key:"shouldClose",value:function(){var e=!1;return Math.abs(this.currentY)>=this.toleranceY&&(e=!0),e}},{key:"setTranslate",value:function(e,t,i){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.style.transition=n?"all .2s ease":"",e.style.transform="translate3d(".concat(t,"px, ").concat(i,"px, 0)")}}]),e}();function X(e,t,i,n){var a=e.querySelector(".gslide-media"),s=new Image,r="gSlideTitle_"+i,o="gSlideDesc_"+i;s.addEventListener("load",(function(){E(n)&&n()}),!1),s.src=t.href,s.alt="",""!==t.title&&s.setAttribute("aria-labelledby",r),""!==t.description&&s.setAttribute("aria-describedby",o),a.insertBefore(s,a.firstChild)}function F(e,t,i,n){var a=this,s=e.querySelector(".ginner-container"),r="gvideo"+i,o=e.querySelector(".gslide-media"),l=this.getAllPlayers();h(s,"gvideo-container"),o.insertBefore(b('<div class="gvideo-wrapper"></div>'),o.firstChild);var c=e.querySelector(".gvideo-wrapper");k(this.settings.plyr.css,"Plyr");var d=t.href;location.protocol.replace(":","");var u="",g="",p=!1;o.style.maxWidth=t.width,k(this.settings.plyr.js,"Plyr",(function(){if(d.match(/vimeo\.com\/([0-9]*)/)){var e=/vimeo.*\/(\d+)/i.exec(d);u="vimeo",g=e[1]}if(d.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||d.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||d.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)){var s=function(e){return void 0!==(e=e.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]?e[2].split(/[^0-9a-z_\-]/i)[0]:e}(d);u="youtube",g=s}if(null!==d.match(/\.(mp4|ogg|webm|mov)$/)){u="local";var o='<video id="'+r+'" ';o+='style="background:#000; max-width: '.concat(t.width,';" '),o+='preload="metadata" ',o+='x-webkit-airplay="allow" ',o+='webkit-playsinline="" ',o+="controls ",o+='class="gvideo-local">';var m=d.toLowerCase().split(".").pop(),f={mp4:"",ogg:"",webm:""};for(var v in f[m="mov"==m?"mp4":m]=d,f)if(f.hasOwnProperty(v)){var y=f[v];t.hasOwnProperty(v)&&(y=t[v]),""!==y&&(o+='<source src="'.concat(y,'" type="video/').concat(v,'">'))}p=b(o+="</video>")}var w=p||b('<div id="'.concat(r,'" data-plyr-provider="').concat(u,'" data-plyr-embed-id="').concat(g,'"></div>'));h(c,"".concat(u,"-video gvideo")),c.appendChild(w),c.setAttribute("data-id",r),c.setAttribute("data-index",i);var _=P(a.settings.plyr,"config")?a.settings.plyr.config:{},x=new Plyr("#"+r,_);x.on("ready",(function(e){var t=e.detail.plyr;l[r]=t,E(n)&&n()})),x.on("enterfullscreen",$),x.on("exitfullscreen",$)}))}function $(e){var t=p(e.target,".gslide-media");"enterfullscreen"==e.type&&h(t,"fullscreen"),"exitfullscreen"==e.type&&u(t,"fullscreen")}function V(e,t,i,n){var a,s=this,r=e.querySelector(".gslide-media"),o=!(!P(t,"href")||!t.href)&&t.href.split("#").pop().trim(),l=!(!P(t,"content")||!t.content)&&t.content;if(l&&(A(l)&&(a=b('<div class="ginlined-content">'.concat(l,"</div>"))),T(l))){"none"==l.style.display&&(l.style.display="block");var c=document.createElement("div");c.className="ginlined-content",c.appendChild(l),a=c}if(o){var u=document.getElementById(o);if(!u)return!1;var g=u.cloneNode(!0);g.style.height=t.height,g.style.maxWidth=t.width,h(g,"ginlined-content"),a=g}if(!a)return console.error("Unable to append inline slide content",t),!1;r.style.height=t.height,r.style.width=t.width,r.appendChild(a),this.events["inlineclose"+o]=d("click",{onElement:r.querySelectorAll(".gtrigger-close"),withCallback:function(e){e.preventDefault(),s.close()}}),E(n)&&n()}function G(e,t,i,n){var a=e.querySelector(".gslide-media"),s=function(e){var t=e.url,i=e.allow,n=e.callback,a=e.appendTo,s=document.createElement("iframe");return s.className="vimeo-video gvideo",s.src=t,s.style.width="100%",s.style.height="100%",i&&s.setAttribute("allow",i),s.onload=function(){h(s,"node-ready"),E(n)&&n()},a&&a.appendChild(s),s}({url:t.href,callback:n});a.parentNode.style.maxWidth=t.width,a.parentNode.style.height=t.height,a.appendChild(s)}var K=function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),this.defaults={href:"",title:"",type:"",description:"",descPosition:"bottom",effect:"",width:"",height:"",content:!1,zoomable:!0,draggable:!0},M(i)&&(this.defaults=o(this.defaults,i))}return n(e,[{key:"sourceType",value:function(e){var t=e;return null!==(e=e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|svg)$/)?"image":e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)||e.match(/vimeo\.com\/([0-9]*)/)||null!==e.match(/\.(mp4|ogg|webm|mov)$/)?"video":null!==e.match(/\.(mp3|wav|wma|aac|ogg)$/)?"audio":e.indexOf("#")>-1&&""!==t.split("#").pop().trim()?"inline":e.indexOf("goajax=true")>-1?"ajax":"external"}},{key:"parseConfig",value:function(e,t){var i=this,n=o({descPosition:t.descPosition},this.defaults);if(M(e)&&!T(e)){P(e,"type")||(P(e,"content")&&e.content?e.type="inline":P(e,"href")&&(e.type=this.sourceType(e.href)));var a=o(n,e);return this.setSize(a,t),a}var s="",r=e.getAttribute("data-glightbox"),c=e.nodeName.toLowerCase();if("a"===c&&(s=e.href),"img"===c&&(s=e.src),n.href=s,l(n,(function(a,s){P(t,s)&&"width"!==s&&(n[s]=t[s]);var r=e.dataset[s];I(r)||(n[s]=i.sanitizeValue(r))})),n.content&&(n.type="inline"),!n.type&&s&&(n.type=this.sourceType(s)),I(r)){if(!n.title&&"a"==c){var d=e.title;I(d)||""===d||(n.title=d)}if(!n.title&&"img"==c){var h=e.alt;I(h)||""===h||(n.title=h)}}else{var u=[];l(n,(function(e,t){u.push(";\\s?"+t)})),u=u.join("\\s?:|"),""!==r.trim()&&l(n,(function(e,t){var a=r,s=new RegExp("s?"+t+"s?:s?(.*?)("+u+"s?:|$)"),o=a.match(s);if(o&&o.length&&o[1]){var l=o[1].trim().replace(/;\s*$/,"");n[t]=i.sanitizeValue(l)}}))}if(n.description&&"."==n.description.substring(0,1)&&document.querySelector(n.description))n.description=document.querySelector(n.description).innerHTML;else{var g=e.querySelector(".glightbox-desc");g&&(n.description=g.innerHTML)}return this.setSize(n,t),this.slideConfig=n,n}},{key:"setSize",value:function(e,t){var i="video"==e.type?this.checkSize(t.videosWidth):this.checkSize(t.width),n=this.checkSize(t.height);return e.width=P(e,"width")&&""!==e.width?this.checkSize(e.width):i,e.height=P(e,"height")&&""!==e.height?this.checkSize(e.height):n,e}},{key:"checkSize",value:function(e){return O(e)?"".concat(e,"px"):e}},{key:"sanitizeValue",value:function(e){return"true"!==e&&"false"!==e?e:"true"===e}}]),e}(),Z=function(){function e(i,n,a){t(this,e),this.element=i,this.instance=n,this.index=a}return n(e,[{key:"setContent",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(g(t,"loaded"))return!1;var n=this.instance.settings,a=this.slideConfig,s=S();E(n.beforeSlideLoad)&&n.beforeSlideLoad({index:this.index,slide:t,player:!1});var r=a.type,o=a.descPosition,l=t.querySelector(".gslide-media"),c=t.querySelector(".gslide-title"),d=t.querySelector(".gslide-desc"),u=t.querySelector(".gdesc-inner"),p=i,m="gSlideTitle_"+this.index,f="gSlideDesc_"+this.index;if(E(n.afterSlideLoad)&&(p=function(){E(i)&&i(),n.afterSlideLoad({index:e.index,slide:t,player:e.instance.getSlidePlayerInstance(e.index)})}),""==a.title&&""==a.description?u&&u.parentNode.parentNode.removeChild(u.parentNode):(c&&""!==a.title?(c.id=m,c.innerHTML=a.title):c.parentNode.removeChild(c),d&&""!==a.description?(d.id=f,s&&n.moreLength>0?(a.smallDescription=this.slideShortDesc(a.description,n.moreLength,n.moreText),d.innerHTML=a.smallDescription,this.descriptionEvents(d,a)):d.innerHTML=a.description):d.parentNode.removeChild(d),h(l.parentNode,"desc-".concat(o)),h(u.parentNode,"description-".concat(o))),h(l,"gslide-".concat(r)),h(t,"loaded"),"video"!==r){if("external"!==r)return"inline"===r?(V.apply(this.instance,[t,a,this.index,p]),void(n.draggable&&new Y({dragEl:t.querySelector(".gslide-inline"),toleranceX:n.dragToleranceX,toleranceY:n.dragToleranceY,slide:t,instance:this.instance}))):void("image"!==r?E(p)&&p():X(t,a,this.index,(function(){var i=t.querySelector("img");n.draggable&&new Y({dragEl:i,toleranceX:n.dragToleranceX,toleranceY:n.dragToleranceY,slide:t,instance:e.instance}),a.zoomable&&i.naturalWidth>i.offsetWidth&&(h(i,"zoomable"),new H(i,t,(function(){e.instance.resize()}))),E(p)&&p()})));G.apply(this,[t,a,this.index,p])}else F.apply(this.instance,[t,a,this.index,p])}},{key:"slideShortDesc",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=document.createElement("div");n.innerHTML=e;var a=i;if((e=n.innerText.trim()).length<=t)return e;var s=e.substr(0,t-1);return a?(n=null,s+'... <a href="#" class="desc-more">'+i+"</a>"):s}},{key:"descriptionEvents",value:function(e,t){var i=this,n=e.querySelector(".desc-more");if(!n)return!1;d("click",{onElement:n,withCallback:function(e,n){e.preventDefault();var a=document.body,s=p(n,".gslide-desc");if(!s)return!1;s.innerHTML=t.description,h(a,"gdesc-open");var r=d("click",{onElement:[a,p(s,".gslide-description")],withCallback:function(e,n){"a"!==e.target.nodeName.toLowerCase()&&(u(a,"gdesc-open"),h(a,"gdesc-closed"),s.innerHTML=t.smallDescription,i.descriptionEvents(s,t),setTimeout((function(){u(a,"gdesc-closed")}),400),r.destroy())}})}})}},{key:"create",value:function(){return b(this.instance.settings.slideHTML)}},{key:"getConfig",value:function(){var e=new K(this.instance.settings.slideExtraAttributes);return this.slideConfig=e.parseConfig(this.element,this.instance.settings),this.slideConfig}}]),e}(),J=S(),Q=null!==S()||void 0!==document.createTouch||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints,ee=document.getElementsByTagName("html")[0],te={selector:".glightbox",elements:null,skin:"clean",theme:"clean",closeButton:!0,startAt:null,autoplayVideos:!0,autofocusVideos:!0,descPosition:"bottom",width:"900px",height:"506px",videosWidth:"960px",beforeSlideChange:null,afterSlideChange:null,beforeSlideLoad:null,afterSlideLoad:null,slideInserted:null,slideRemoved:null,slideExtraAttributes:null,onOpen:null,onClose:null,loop:!1,zoomable:!0,draggable:!0,dragAutoSnap:!1,dragToleranceX:40,dragToleranceY:65,preload:!0,oneSlidePerOpen:!1,touchNavigation:!0,touchFollowAxis:!0,keyboardNavigation:!0,closeOnOutsideClick:!0,plugins:!1,plyr:{css:"https://cdn.plyr.io/3.6.3/plyr.css",js:"https://cdn.plyr.io/3.6.3/plyr.js",config:{ratio:"16:9",fullscreen:{enabled:!0,iosNative:!0},youtube:{noCookie:!0,rel:0,showinfo:0,iv_load_policy:3},vimeo:{byline:!1,portrait:!1,title:!1,transparent:!1}}},openEffect:"zoom",closeEffect:"zoom",slideEffect:"slide",moreText:"See more",moreLength:60,cssEfects:{fade:{in:"fadeIn",out:"fadeOut"},zoom:{in:"zoomIn",out:"zoomOut"},slide:{in:"slideInRight",out:"slideOutLeft"},slideBack:{in:"slideInLeft",out:"slideOutRight"},none:{in:"none",out:"none"}},svg:{close:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',next:'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',prev:'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'},slideHTML:'<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',lightboxHTML:'<div id="glightbox-body" class="glightbox-container">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gnext gbtn" tabindex="0" aria-label="Next">{nextSVG}</button>\n    <button class="gprev gbtn" tabindex="1" aria-label="Previous">{prevSVG}</button>\n    <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>\n</div>\n</div>'},ie=function(){function e(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t(this,e),this.settings=o(te,i),this.effectsClasses=this.getAnimationClasses(),this.videoPlayers={},this.apiEvents=[],this.fullElementsList=!1}return n(e,[{key:"init",value:function(){var e=this,t=this.getSelector();t&&(this.baseEvents=d("click",{onElement:t,withCallback:function(t,i){t.preventDefault(),e.open(i)}})),this.elements=this.getElements()}},{key:"open",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(0==this.elements.length)return!1;this.activeSlide=null,this.prevActiveSlideIndex=null,this.prevActiveSlide=null;var i=O(t)?t:this.settings.startAt;if(T(e)){var n=e.getAttribute("data-gallery");n&&(this.fullElementsList=this.elements,this.elements=this.getGalleryElements(this.elements,n)),I(i)&&(i=this.getElementIndex(e))<0&&(i=0)}O(i)||(i=0),this.build(),m(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.in);var a=document.body,s=window.innerWidth-document.documentElement.clientWidth;if(s>0){var r=document.createElement("style");r.type="text/css",r.className="gcss-styles",r.innerText=".gscrollbar-fixer {margin-right: ".concat(s,"px}"),document.head.appendChild(r),h(a,"gscrollbar-fixer")}h(a,"glightbox-open"),h(ee,"glightbox-open"),J&&(h(document.body,"glightbox-mobile"),this.settings.slideEffect="slide"),this.showSlide(i,!0),1==this.elements.length?(h(this.prevButton,"glightbox-button-hidden"),h(this.nextButton,"glightbox-button-hidden")):(u(this.prevButton,"glightbox-button-hidden"),u(this.nextButton,"glightbox-button-hidden")),this.lightboxOpen=!0,this.trigger("open"),E(this.settings.onOpen)&&this.settings.onOpen(),Q&&this.settings.touchNavigation&&W(this),this.settings.keyboardNavigation&&D(this)}},{key:"openAt",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.open(null,e)}},{key:"showSlide",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];v(this.loader),this.index=parseInt(t);var n=this.slidesContainer.querySelector(".current");n&&u(n,"current"),this.slideAnimateOut();var a=this.slidesContainer.querySelectorAll(".gslide")[t];if(g(a,"loaded"))this.slideAnimateIn(a,i),y(this.loader);else{v(this.loader);var s=this.elements[t],r={index:this.index,slide:a,slideNode:a,slideConfig:s.slideConfig,slideIndex:this.index,trigger:s.node,player:null};this.trigger("slide_before_load",r),s.instance.setContent(a,(function(){y(e.loader),e.resize(),e.slideAnimateIn(a,i),e.trigger("slide_after_load",r)}))}this.slideDescription=a.querySelector(".gslide-description"),this.slideDescriptionContained=this.slideDescription&&g(this.slideDescription.parentNode,"gslide-media"),this.settings.preload&&(this.preloadSlide(t+1),this.preloadSlide(t-1)),this.updateNavigationClasses(),this.activeSlide=a}},{key:"preloadSlide",value:function(e){var t=this;if(e<0||e>this.elements.length-1)return!1;if(I(this.elements[e]))return!1;var i=this.slidesContainer.querySelectorAll(".gslide")[e];if(g(i,"loaded"))return!1;var n=this.elements[e],a=n.type,s={index:e,slide:i,slideNode:i,slideConfig:n.slideConfig,slideIndex:e,trigger:n.node,player:null};this.trigger("slide_before_load",s),"video"==a||"external"==a?setTimeout((function(){n.instance.setContent(i,(function(){t.trigger("slide_after_load",s)}))}),200):n.instance.setContent(i,(function(){t.trigger("slide_after_load",s)}))}},{key:"prevSlide",value:function(){this.goToSlide(this.index-1)}},{key:"nextSlide",value:function(){this.goToSlide(this.index+1)}},{key:"goToSlide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.prevActiveSlide=this.activeSlide,this.prevActiveSlideIndex=this.index,!this.loop()&&(e<0||e>this.elements.length-1))return!1;e<0?e=this.elements.length-1:e>=this.elements.length&&(e=0),this.showSlide(e)}},{key:"insertSlide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;t<0&&(t=this.elements.length);var i=new Z(e,this,t),n=i.getConfig(),a=o({},n),s=i.create(),r=this.elements.length-1;a.index=t,a.node=!1,a.instance=i,a.slideConfig=n,this.elements.splice(t,0,a);var l=null,c=null;if(this.slidesContainer){if(t>r)this.slidesContainer.appendChild(s);else{var d=this.slidesContainer.querySelectorAll(".gslide")[t];this.slidesContainer.insertBefore(s,d)}(this.settings.preload&&0==this.index&&0==t||this.index-1==t||this.index+1==t)&&this.preloadSlide(t),0==this.index&&0==t&&(this.index=1),this.updateNavigationClasses(),l=this.slidesContainer.querySelectorAll(".gslide")[t],c=this.getSlidePlayerInstance(t),a.slideNode=l}this.trigger("slide_inserted",{index:t,slide:l,slideNode:l,slideConfig:n,slideIndex:t,trigger:null,player:c}),E(this.settings.slideInserted)&&this.settings.slideInserted({index:t,slide:l,player:c})}},{key:"removeSlide",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;if(e<0||e>this.elements.length-1)return!1;var t=this.slidesContainer&&this.slidesContainer.querySelectorAll(".gslide")[e];t&&(this.getActiveSlideIndex()==e&&(e==this.elements.length-1?this.prevSlide():this.nextSlide()),t.parentNode.removeChild(t)),this.elements.splice(e,1),this.trigger("slide_removed",e),E(this.settings.slideRemoved)&&this.settings.slideRemoved(e)}},{key:"slideAnimateIn",value:function(e,t){var i=this,n=e.querySelector(".gslide-media"),a=e.querySelector(".gslide-description"),s={index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlide,slideConfig:I(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:I(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},r={index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideConfig:this.elements[this.index].slideConfig,slideIndex:this.index,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)};if(n.offsetWidth>0&&a&&(y(a),a.style.display=""),u(e,this.effectsClasses),t)m(e,this.settings.cssEfects[this.settings.openEffect].in,(function(){i.settings.autoplayVideos&&i.slidePlayerPlay(e),i.trigger("slide_changed",{prev:s,current:r}),E(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[s,r])}));else{var o=this.settings.slideEffect,l="none"!==o?this.settings.cssEfects[o].in:o;this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(l=this.settings.cssEfects.slideBack.in),m(e,l,(function(){i.settings.autoplayVideos&&i.slidePlayerPlay(e),i.trigger("slide_changed",{prev:s,current:r}),E(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[s,r])}))}setTimeout((function(){i.resize(e)}),100),h(e,"current")}},{key:"slideAnimateOut",value:function(){if(!this.prevActiveSlide)return!1;var e=this.prevActiveSlide;u(e,this.effectsClasses),h(e,"prev");var t=this.settings.slideEffect,i="none"!==t?this.settings.cssEfects[t].out:t;this.slidePlayerPause(e),this.trigger("slide_before_change",{prev:{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlideIndex,slideConfig:I(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:I(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},current:{index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideIndex:this.index,slideConfig:this.elements[this.index].slideConfig,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)}}),E(this.settings.beforeSlideChange)&&this.settings.beforeSlideChange.apply(this,[{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},{index:this.index,slide:this.activeSlide,player:this.getSlidePlayerInstance(this.index)}]),this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(i=this.settings.cssEfects.slideBack.out),m(e,i,(function(){var t=e.querySelector(".gslide-media"),i=e.querySelector(".gslide-description");t.style.transform="",u(t,"greset"),t.style.opacity="",i&&(i.style.opacity=""),u(e,"prev")}))}},{key:"getAllPlayers",value:function(){return this.videoPlayers}},{key:"getSlidePlayerInstance",value:function(e){var t="gvideo"+e,i=this.getAllPlayers();return!(!P(i,t)||!i[t])&&i[t]}},{key:"stopSlideVideo",value:function(e){if(T(e)){var t=e.querySelector(".gvideo-wrapper");t&&(e=t.getAttribute("data-index"))}console.log("stopSlideVideo is deprecated, use slidePlayerPause");var i=this.getSlidePlayerInstance(e);i&&i.playing&&i.pause()}},{key:"slidePlayerPause",value:function(e){if(T(e)){var t=e.querySelector(".gvideo-wrapper");t&&(e=t.getAttribute("data-index"))}var i=this.getSlidePlayerInstance(e);i&&i.playing&&i.pause()}},{key:"playSlideVideo",value:function(e){if(T(e)){var t=e.querySelector(".gvideo-wrapper");t&&(e=t.getAttribute("data-index"))}console.log("playSlideVideo is deprecated, use slidePlayerPlay");var i=this.getSlidePlayerInstance(e);i&&!i.playing&&i.play()}},{key:"slidePlayerPlay",value:function(e){if(T(e)){var t=e.querySelector(".gvideo-wrapper");t&&(e=t.getAttribute("data-index"))}var i=this.getSlidePlayerInstance(e);console.log("Player is"),console.log(i),i&&!i.playing&&(i.play(),this.settings.autofocusVideos&&i.elements.container.focus())}},{key:"setElements",value:function(e){var t=this;this.settings.elements=!1;var i=[];e&&e.length&&l(e,(function(e,n){var a=new Z(e,t,n),s=a.getConfig(),r=o({},s);r.slideConfig=s,r.instance=a,r.index=n,i.push(r)})),this.elements=i,this.lightboxOpen&&(this.slidesContainer.innerHTML="",this.elements.length&&(l(this.elements,(function(){var e=b(t.settings.slideHTML);t.slidesContainer.appendChild(e)})),this.showSlide(0,!0)))}},{key:"getElementIndex",value:function(e){var t=!1;return l(this.elements,(function(i,n){if(P(i,"node")&&i.node==e)return t=n,!0})),t}},{key:"getElements",value:function(){var e=this,t=[];this.elements=this.elements?this.elements:[],!I(this.settings.elements)&&L(this.settings.elements)&&this.settings.elements.length&&l(this.settings.elements,(function(i,n){var a=new Z(i,e,n),s=a.getConfig(),r=o({},s);r.node=!1,r.index=n,r.instance=a,r.slideConfig=s,t.push(r)}));var i=!1;return this.getSelector()&&(i=document.querySelectorAll(this.getSelector())),i?(l(i,(function(i,n){var a=new Z(i,e,n),s=a.getConfig(),r=o({},s);r.node=i,r.index=n,r.instance=a,r.slideConfig=s,r.gallery=i.getAttribute("data-gallery"),t.push(r)})),t):t}},{key:"getGalleryElements",value:function(e,t){return e.filter((function(e){return e.gallery==t}))}},{key:"getSelector",value:function(){return!this.settings.elements&&(this.settings.selector&&"data-"==this.settings.selector.substring(0,5)?"*[".concat(this.settings.selector,"]"):this.settings.selector)}},{key:"getActiveSlide",value:function(){return this.slidesContainer.querySelectorAll(".gslide")[this.index]}},{key:"getActiveSlideIndex",value:function(){return this.index}},{key:"getAnimationClasses",value:function(){var e=[];for(var t in this.settings.cssEfects)if(this.settings.cssEfects.hasOwnProperty(t)){var i=this.settings.cssEfects[t];e.push("g".concat(i.in)),e.push("g".concat(i.out))}return e.join(" ")}},{key:"build",value:function(){var e=this;if(this.built)return!1;var t=P(this.settings.svg,"next")?this.settings.svg.next:"",i=P(this.settings.svg,"prev")?this.settings.svg.prev:"",n=P(this.settings.svg,"close")?this.settings.svg.close:"",a=this.settings.lightboxHTML;a=b(a=(a=(a=a.replace(/{nextSVG}/g,t)).replace(/{prevSVG}/g,i)).replace(/{closeSVG}/g,n)),document.body.appendChild(a);var s=document.getElementById("glightbox-body");this.modal=s;var r=s.querySelector(".gclose");this.prevButton=s.querySelector(".gprev"),this.nextButton=s.querySelector(".gnext"),this.overlay=s.querySelector(".goverlay"),this.loader=s.querySelector(".gloader"),this.slidesContainer=document.getElementById("glightbox-slider"),this.events={},h(this.modal,"glightbox-"+this.settings.skin),this.settings.closeButton&&r&&(this.events.close=d("click",{onElement:r,withCallback:function(t,i){t.preventDefault(),e.close()}})),r&&!this.settings.closeButton&&r.parentNode.removeChild(r),this.nextButton&&(this.events.next=d("click",{onElement:this.nextButton,withCallback:function(t,i){t.preventDefault(),e.nextSlide()}})),this.prevButton&&(this.events.prev=d("click",{onElement:this.prevButton,withCallback:function(t,i){t.preventDefault(),e.prevSlide()}})),this.settings.closeOnOutsideClick&&(this.events.outClose=d("click",{onElement:s,withCallback:function(t,i){e.preventOutsideClick||g(document.body,"glightbox-mobile")||p(t.target,".ginner-container")||p(t.target,".gbtn")||g(t.target,"gnext")||g(t.target,"gprev")||e.close()}})),l(this.elements,(function(t,i){e.slidesContainer.appendChild(t.instance.create()),t.slideNode=e.slidesContainer.querySelectorAll(".gslide")[i]})),Q&&h(document.body,"glightbox-touch"),this.events.resize=d("resize",{onElement:window,withCallback:function(){e.resize()}}),this.built=!0}},{key:"resize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if((e=e||this.activeSlide)&&!g(e,"zoomed")){var t=w(),i=e.querySelector(".gvideo-wrapper"),n=e.querySelector(".gslide-image"),a=this.slideDescription,s=t.width,r=t.height;if(s<=768?h(document.body,"glightbox-mobile"):u(document.body,"glightbox-mobile"),i||n){var o=!1;if(a&&(g(a,"description-bottom")||g(a,"description-top"))&&!g(a,"gabsolute")&&(o=!0),n)if(s<=768)n.querySelector("img").setAttribute("style","");else if(o){var l=a.offsetHeight,c=n.querySelector("img");c.setAttribute("style","max-height: calc(100vh - ".concat(l,"px)")),a.setAttribute("style","max-width: ".concat(c.offsetWidth,"px;"))}if(i){var d=(P(this.settings.plyr.config,"ratio")?this.settings.plyr.config.ratio:"16:9").split(":"),p=900,m=p/(parseInt(d[0])/parseInt(d[1]));if(m=Math.floor(m),o&&(r-=a.offsetHeight),r<m&&s>p){var f=i.offsetWidth,v=i.offsetHeight,y=r/v,b={width:f*y,height:v*y};i.parentNode.setAttribute("style","max-width: ".concat(b.width,"px")),o&&a.setAttribute("style","max-width: ".concat(b.width,"px;"))}else i.parentNode.style.maxWidth="".concat(p,"px"),o&&a.setAttribute("style","max-width: ".concat(p,"px;"))}}}}},{key:"reload",value:function(){this.init()}},{key:"updateNavigationClasses",value:function(){var e=this.loop();u(this.nextButton,"disabled"),u(this.prevButton,"disabled"),0==this.index&&this.elements.length-1==0?(h(this.prevButton,"disabled"),h(this.nextButton,"disabled")):0!==this.index||e?this.index!==this.elements.length-1||e||h(this.nextButton,"disabled"):h(this.prevButton,"disabled")}},{key:"loop",value:function(){var e=P(this.settings,"loopAtEnd")?this.settings.loopAtEnd:null;return e=P(this.settings,"loop")?this.settings.loop:e}},{key:"close",value:function(){var e=this;if(!this.lightboxOpen){if(this.events){for(var t in this.events)this.events.hasOwnProperty(t)&&this.events[t].destroy();this.events=null}return!1}if(this.closing)return!1;this.closing=!0,this.slidePlayerPause(this.activeSlide),this.fullElementsList&&(this.elements=this.fullElementsList),h(this.modal,"glightbox-closing"),m(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.out),m(this.activeSlide,this.settings.cssEfects[this.settings.closeEffect].out,(function(){if(e.activeSlide=null,e.prevActiveSlideIndex=null,e.prevActiveSlide=null,e.built=!1,e.events){for(var t in e.events)e.events.hasOwnProperty(t)&&e.events[t].destroy();e.events=null}var i=document.body;u(ee,"glightbox-open"),u(i,"glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"),e.modal.parentNode.removeChild(e.modal),e.trigger("close"),E(e.settings.onClose)&&e.settings.onClose();var n=document.querySelector(".gcss-styles");n&&n.parentNode.removeChild(n),e.lightboxOpen=!1,e.closing=null}))}},{key:"destroy",value:function(){this.close(),this.clearAllEvents(),this.baseEvents&&this.baseEvents.destroy()}},{key:"on",value:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e||!E(t))throw new TypeError("Event name and callback must be defined");this.apiEvents.push({evt:e,once:i,callback:t})}},{key:"once",value:function(e,t){this.on(e,t,!0)}},{key:"trigger",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[];l(this.apiEvents,(function(t,a){var s=t.evt,r=t.once,o=t.callback;s==e&&(o(i),r&&n.push(a))})),n.length&&l(n,(function(e){return t.apiEvents.splice(e,1)}))}},{key:"clearAllEvents",value:function(){this.apiEvents.splice(0,this.apiEvents.length)}},{key:"version",value:function(){return"3.0.7"}}]),e}();return function(){var e=new ie(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{});return e.init(),e}}()}));t.a=n}).call(this,i(49))},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,i){"use strict";i(102);var n=i(13),a=i(2),s=i(1),r=i(46),o=i(6),l=s("species"),c=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d="$0"==="a".replace(/./,"$0"),h=s("replace"),u=!!/./[h]&&""===/./[h]("a","$0"),g=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var i="ab".split(e);return 2!==i.length||"a"!==i[0]||"b"!==i[1]}));e.exports=function(e,t,i,h){var p=s(e),m=!a((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),f=m&&!a((function(){var t=!1,i=/a/;return"split"===e&&((i={}).constructor={},i.constructor[l]=function(){return i},i.flags="",i[p]=/./[p]),i.exec=function(){return t=!0,null},i[p](""),!t}));if(!m||!f||"replace"===e&&(!c||!d||u)||"split"===e&&!g){var v=/./[p],y=i(p,""[e],(function(e,t,i,n,a){return t.exec===r?m&&!a?{done:!0,value:v.call(t,i,n)}:{done:!0,value:e.call(i,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:u}),b=y[0],w=y[1];n(String.prototype,e,b),n(RegExp.prototype,p,2==t?function(e,t){return w.call(e,this,t)}:function(e){return w.call(e,this)})}h&&o(RegExp.prototype[p],"sham",!0)}},function(e,t,i){"use strict";var n=i(17),a=i(46);n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},function(e,t,i){"use strict";var n=i(7);e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},function(e,t,i){"use strict";var n=i(2);function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},function(e,t,i){"use strict";var n=i(47).charAt;e.exports=function(e,t,i){return t+(i?n(e,t).length:1)}},function(e,t,i){var n=i(16),a=Math.floor,s="".replace,r=/\$([$&'`]|\d\d?|<[^>]*>)/g,o=/\$([$&'`]|\d\d?)/g;e.exports=function(e,t,i,l,c,d){var h=i+e.length,u=l.length,g=o;return void 0!==c&&(c=n(c),g=r),s.call(d,g,(function(n,s){var r;switch(s.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,i);case"'":return t.slice(h);case"<":r=c[s.slice(1,-1)];break;default:var o=+s;if(0===o)return n;if(o>u){var d=a(o/10);return 0===d?n:d<=u?void 0===l[d-1]?s.charAt(1):l[d-1]+s.charAt(1):n}r=l[o-1]}return void 0===r?"":r}))}},function(e,t,i){var n=i(24),a=i(46);e.exports=function(e,t){var i=e.exec;if("function"==typeof i){var s=i.call(e,t);if("object"!=typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},function(e,t,i){"use strict";i(109);var n,a=i(17),s=i(5),r=i(71),o=i(0),l=i(62),c=i(13),d=i(31),h=i(3),u=i(110),g=i(111),p=i(47).codeAt,m=i(115),f=i(21),v=i(116),y=i(14),b=o.URL,w=v.URLSearchParams,_=v.getState,x=y.set,k=y.getterFor("URL"),S=Math.floor,E=Math.pow,A="Invalid scheme",T="Invalid host",L="Invalid port",C=/[A-Za-z]/,M=/[\d+-.A-Za-z]/,I=/\d/,P=/^(0x|0X)/,j=/^[0-7]+$/,O=/^\d+$/,D=/^[\dA-Fa-f]+$/,z=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,R=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,q=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,N=/[\u0009\u000A\u000D]/g,B=function(e,t){var i,n,a;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return T;if(!(i=W(t.slice(1,-1))))return T;e.host=i}else if(K(e)){if(t=m(t),z.test(t))return T;if(null===(i=U(t)))return T;e.host=i}else{if(R.test(t))return T;for(i="",n=g(t),a=0;a<n.length;a++)i+=V(n[a],Y);e.host=i}},U=function(e){var t,i,n,a,s,r,o,l=e.split(".");if(l.length&&""==l[l.length-1]&&l.pop(),(t=l.length)>4)return e;for(i=[],n=0;n<t;n++){if(""==(a=l[n]))return e;if(s=10,a.length>1&&"0"==a.charAt(0)&&(s=P.test(a)?16:8,a=a.slice(8==s?1:2)),""===a)r=0;else{if(!(10==s?O:8==s?j:D).test(a))return e;r=parseInt(a,s)}i.push(r)}for(n=0;n<t;n++)if(r=i[n],n==t-1){if(r>=E(256,5-t))return null}else if(r>255)return null;for(o=i.pop(),n=0;n<i.length;n++)o+=i[n]*E(256,3-n);return o},W=function(e){var t,i,n,a,s,r,o,l=[0,0,0,0,0,0,0,0],c=0,d=null,h=0,u=function(){return e.charAt(h)};if(":"==u()){if(":"!=e.charAt(1))return;h+=2,d=++c}for(;u();){if(8==c)return;if(":"!=u()){for(t=i=0;i<4&&D.test(u());)t=16*t+parseInt(u(),16),h++,i++;if("."==u()){if(0==i)return;if(h-=i,c>6)return;for(n=0;u();){if(a=null,n>0){if(!("."==u()&&n<4))return;h++}if(!I.test(u()))return;for(;I.test(u());){if(s=parseInt(u(),10),null===a)a=s;else{if(0==a)return;a=10*a+s}if(a>255)return;h++}l[c]=256*l[c]+a,2!=++n&&4!=n||c++}if(4!=n)return;break}if(":"==u()){if(h++,!u())return}else if(u())return;l[c++]=t}else{if(null!==d)return;h++,d=++c}}if(null!==d)for(r=c-d,c=7;0!=c&&r>0;)o=l[c],l[c--]=l[d+r-1],l[d+--r]=o;else if(8!=c)return;return l},H=function(e){var t,i,n,a;if("number"==typeof e){for(t=[],i=0;i<4;i++)t.unshift(e%256),e=S(e/256);return t.join(".")}if("object"==typeof e){for(t="",n=function(e){for(var t=null,i=1,n=null,a=0,s=0;s<8;s++)0!==e[s]?(a>i&&(t=n,i=a),n=null,a=0):(null===n&&(n=s),++a);return a>i&&(t=n,i=a),t}(e),i=0;i<8;i++)a&&0===e[i]||(a&&(a=!1),n===i?(t+=i?":":"::",a=!0):(t+=e[i].toString(16),i<7&&(t+=":")));return"["+t+"]"}return e},Y={},X=u({},Y,{" ":1,'"':1,"<":1,">":1,"`":1}),F=u({},X,{"#":1,"?":1,"{":1,"}":1}),$=u({},F,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),V=function(e,t){var i=p(e,0);return i>32&&i<127&&!h(t,e)?e:encodeURIComponent(e)},G={ftp:21,file:null,http:80,https:443,ws:80,wss:443},K=function(e){return h(G,e.scheme)},Z=function(e){return""!=e.username||""!=e.password},J=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},Q=function(e,t){var i;return 2==e.length&&C.test(e.charAt(0))&&(":"==(i=e.charAt(1))||!t&&"|"==i)},ee=function(e){var t;return e.length>1&&Q(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},te=function(e){var t=e.path,i=t.length;!i||"file"==e.scheme&&1==i&&Q(t[0],!0)||t.pop()},ie=function(e){return"."===e||"%2e"===e.toLowerCase()},ne={},ae={},se={},re={},oe={},le={},ce={},de={},he={},ue={},ge={},pe={},me={},fe={},ve={},ye={},be={},we={},_e={},xe={},ke={},Se=function(e,t,i,a){var s,r,o,l,c,d=i||ne,u=0,p="",m=!1,f=!1,v=!1;for(i||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(q,"")),t=t.replace(N,""),s=g(t);u<=s.length;){switch(r=s[u],d){case ne:if(!r||!C.test(r)){if(i)return A;d=se;continue}p+=r.toLowerCase(),d=ae;break;case ae:if(r&&(M.test(r)||"+"==r||"-"==r||"."==r))p+=r.toLowerCase();else{if(":"!=r){if(i)return A;p="",d=se,u=0;continue}if(i&&(K(e)!=h(G,p)||"file"==p&&(Z(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=p,i)return void(K(e)&&G[e.scheme]==e.port&&(e.port=null));p="","file"==e.scheme?d=fe:K(e)&&a&&a.scheme==e.scheme?d=re:K(e)?d=de:"/"==s[u+1]?(d=oe,u++):(e.cannotBeABaseURL=!0,e.path.push(""),d=_e)}break;case se:if(!a||a.cannotBeABaseURL&&"#"!=r)return A;if(a.cannotBeABaseURL&&"#"==r){e.scheme=a.scheme,e.path=a.path.slice(),e.query=a.query,e.fragment="",e.cannotBeABaseURL=!0,d=ke;break}d="file"==a.scheme?fe:le;continue;case re:if("/"!=r||"/"!=s[u+1]){d=le;continue}d=he,u++;break;case oe:if("/"==r){d=ue;break}d=we;continue;case le:if(e.scheme=a.scheme,r==n)e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query=a.query;else if("/"==r||"\\"==r&&K(e))d=ce;else if("?"==r)e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query="",d=xe;else{if("#"!=r){e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.path.pop(),d=we;continue}e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,e.path=a.path.slice(),e.query=a.query,e.fragment="",d=ke}break;case ce:if(!K(e)||"/"!=r&&"\\"!=r){if("/"!=r){e.username=a.username,e.password=a.password,e.host=a.host,e.port=a.port,d=we;continue}d=ue}else d=he;break;case de:if(d=he,"/"!=r||"/"!=p.charAt(u+1))continue;u++;break;case he:if("/"!=r&&"\\"!=r){d=ue;continue}break;case ue:if("@"==r){m&&(p="%40"+p),m=!0,o=g(p);for(var y=0;y<o.length;y++){var b=o[y];if(":"!=b||v){var w=V(b,$);v?e.password+=w:e.username+=w}else v=!0}p=""}else if(r==n||"/"==r||"?"==r||"#"==r||"\\"==r&&K(e)){if(m&&""==p)return"Invalid authority";u-=g(p).length+1,p="",d=ge}else p+=r;break;case ge:case pe:if(i&&"file"==e.scheme){d=ye;continue}if(":"!=r||f){if(r==n||"/"==r||"?"==r||"#"==r||"\\"==r&&K(e)){if(K(e)&&""==p)return T;if(i&&""==p&&(Z(e)||null!==e.port))return;if(l=B(e,p))return l;if(p="",d=be,i)return;continue}"["==r?f=!0:"]"==r&&(f=!1),p+=r}else{if(""==p)return T;if(l=B(e,p))return l;if(p="",d=me,i==pe)return}break;case me:if(!I.test(r)){if(r==n||"/"==r||"?"==r||"#"==r||"\\"==r&&K(e)||i){if(""!=p){var _=parseInt(p,10);if(_>65535)return L;e.port=K(e)&&_===G[e.scheme]?null:_,p=""}if(i)return;d=be;continue}return L}p+=r;break;case fe:if(e.scheme="file","/"==r||"\\"==r)d=ve;else{if(!a||"file"!=a.scheme){d=we;continue}if(r==n)e.host=a.host,e.path=a.path.slice(),e.query=a.query;else if("?"==r)e.host=a.host,e.path=a.path.slice(),e.query="",d=xe;else{if("#"!=r){ee(s.slice(u).join(""))||(e.host=a.host,e.path=a.path.slice(),te(e)),d=we;continue}e.host=a.host,e.path=a.path.slice(),e.query=a.query,e.fragment="",d=ke}}break;case ve:if("/"==r||"\\"==r){d=ye;break}a&&"file"==a.scheme&&!ee(s.slice(u).join(""))&&(Q(a.path[0],!0)?e.path.push(a.path[0]):e.host=a.host),d=we;continue;case ye:if(r==n||"/"==r||"\\"==r||"?"==r||"#"==r){if(!i&&Q(p))d=we;else if(""==p){if(e.host="",i)return;d=be}else{if(l=B(e,p))return l;if("localhost"==e.host&&(e.host=""),i)return;p="",d=be}continue}p+=r;break;case be:if(K(e)){if(d=we,"/"!=r&&"\\"!=r)continue}else if(i||"?"!=r)if(i||"#"!=r){if(r!=n&&(d=we,"/"!=r))continue}else e.fragment="",d=ke;else e.query="",d=xe;break;case we:if(r==n||"/"==r||"\\"==r&&K(e)||!i&&("?"==r||"#"==r)){if(".."===(c=(c=p).toLowerCase())||"%2e."===c||".%2e"===c||"%2e%2e"===c?(te(e),"/"==r||"\\"==r&&K(e)||e.path.push("")):ie(p)?"/"==r||"\\"==r&&K(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&Q(p)&&(e.host&&(e.host=""),p=p.charAt(0)+":"),e.path.push(p)),p="","file"==e.scheme&&(r==n||"?"==r||"#"==r))for(;e.path.length>1&&""===e.path[0];)e.path.shift();"?"==r?(e.query="",d=xe):"#"==r&&(e.fragment="",d=ke)}else p+=V(r,F);break;case _e:"?"==r?(e.query="",d=xe):"#"==r?(e.fragment="",d=ke):r!=n&&(e.path[0]+=V(r,Y));break;case xe:i||"#"!=r?r!=n&&("'"==r&&K(e)?e.query+="%27":e.query+="#"==r?"%23":V(r,Y)):(e.fragment="",d=ke);break;case ke:r!=n&&(e.fragment+=V(r,X))}u++}},Ee=function(e){var t,i,n=d(this,Ee,"URL"),a=arguments.length>1?arguments[1]:void 0,r=String(e),o=x(n,{type:"URL"});if(void 0!==a)if(a instanceof Ee)t=k(a);else if(i=Se(t={},String(a)))throw TypeError(i);if(i=Se(o,r,null,t))throw TypeError(i);var l=o.searchParams=new w,c=_(l);c.updateSearchParams(o.query),c.updateURL=function(){o.query=String(l)||null},s||(n.href=Te.call(n),n.origin=Le.call(n),n.protocol=Ce.call(n),n.username=Me.call(n),n.password=Ie.call(n),n.host=Pe.call(n),n.hostname=je.call(n),n.port=Oe.call(n),n.pathname=De.call(n),n.search=ze.call(n),n.searchParams=Re.call(n),n.hash=qe.call(n))},Ae=Ee.prototype,Te=function(){var e=k(this),t=e.scheme,i=e.username,n=e.password,a=e.host,s=e.port,r=e.path,o=e.query,l=e.fragment,c=t+":";return null!==a?(c+="//",Z(e)&&(c+=i+(n?":"+n:"")+"@"),c+=H(a),null!==s&&(c+=":"+s)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?r[0]:r.length?"/"+r.join("/"):"",null!==o&&(c+="?"+o),null!==l&&(c+="#"+l),c},Le=function(){var e=k(this),t=e.scheme,i=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(e){return"null"}return"file"!=t&&K(e)?t+"://"+H(e.host)+(null!==i?":"+i:""):"null"},Ce=function(){return k(this).scheme+":"},Me=function(){return k(this).username},Ie=function(){return k(this).password},Pe=function(){var e=k(this),t=e.host,i=e.port;return null===t?"":null===i?H(t):H(t)+":"+i},je=function(){var e=k(this).host;return null===e?"":H(e)},Oe=function(){var e=k(this).port;return null===e?"":String(e)},De=function(){var e=k(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},ze=function(){var e=k(this).query;return e?"?"+e:""},Re=function(){return k(this).searchParams},qe=function(){var e=k(this).fragment;return e?"#"+e:""},Ne=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(s&&l(Ae,{href:Ne(Te,(function(e){var t=k(this),i=String(e),n=Se(t,i);if(n)throw TypeError(n);_(t.searchParams).updateSearchParams(t.query)})),origin:Ne(Le),protocol:Ne(Ce,(function(e){var t=k(this);Se(t,String(e)+":",ne)})),username:Ne(Me,(function(e){var t=k(this),i=g(String(e));if(!J(t)){t.username="";for(var n=0;n<i.length;n++)t.username+=V(i[n],$)}})),password:Ne(Ie,(function(e){var t=k(this),i=g(String(e));if(!J(t)){t.password="";for(var n=0;n<i.length;n++)t.password+=V(i[n],$)}})),host:Ne(Pe,(function(e){var t=k(this);t.cannotBeABaseURL||Se(t,String(e),ge)})),hostname:Ne(je,(function(e){var t=k(this);t.cannotBeABaseURL||Se(t,String(e),pe)})),port:Ne(Oe,(function(e){var t=k(this);J(t)||(""==(e=String(e))?t.port=null:Se(t,e,me))})),pathname:Ne(De,(function(e){var t=k(this);t.cannotBeABaseURL||(t.path=[],Se(t,e+"",be))})),search:Ne(ze,(function(e){var t=k(this);""==(e=String(e))?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",Se(t,e,xe)),_(t.searchParams).updateSearchParams(t.query)})),searchParams:Ne(Re),hash:Ne(qe,(function(e){var t=k(this);""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",Se(t,e,ke)):t.fragment=null}))}),c(Ae,"toJSON",(function(){return Te.call(this)}),{enumerable:!0}),c(Ae,"toString",(function(){return Te.call(this)}),{enumerable:!0}),b){var Be=b.createObjectURL,Ue=b.revokeObjectURL;Be&&c(Ee,"createObjectURL",(function(e){return Be.apply(b,arguments)})),Ue&&c(Ee,"revokeObjectURL",(function(e){return Ue.apply(b,arguments)}))}f(Ee,"URL"),a({global:!0,forced:!r,sham:!s},{URL:Ee})},function(e,t,i){"use strict";var n=i(47).charAt,a=i(14),s=i(68),r="String Iterator",o=a.set,l=a.getterFor(r);s(String,"String",(function(e){o(this,{type:r,string:String(e),index:0})}),(function(){var e,t=l(this),i=t.string,a=t.index;return a>=i.length?{value:void 0,done:!0}:(e=n(i,a),t.index+=e.length,{value:e,done:!1})}))},function(e,t,i){"use strict";var n=i(5),a=i(2),s=i(63),r=i(57),o=i(50),l=i(16),c=i(37),d=Object.assign,h=Object.defineProperty;e.exports=!d||a((function(){if(n&&1!==d({b:1},d(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},i=Symbol(),a="abcdefghijklmnopqrst";return e[i]=7,a.split("").forEach((function(e){t[e]=e})),7!=d({},e)[i]||s(d({},t)).join("")!=a}))?function(e,t){for(var i=l(e),a=arguments.length,d=1,h=r.f,u=o.f;a>d;)for(var g,p=c(arguments[d++]),m=h?s(p).concat(h(p)):s(p),f=m.length,v=0;f>v;)g=m[v++],n&&!u.call(p,g)||(i[g]=p[g]);return i}:d},function(e,t,i){"use strict";var n=i(34),a=i(16),s=i(112),r=i(64),o=i(12),l=i(114),c=i(33);e.exports=function(e){var t,i,d,h,u,g,p=a(e),m="function"==typeof this?this:Array,f=arguments.length,v=f>1?arguments[1]:void 0,y=void 0!==v,b=c(p),w=0;if(y&&(v=n(v,f>2?arguments[2]:void 0,2)),null==b||m==Array&&r(b))for(i=new m(t=o(p.length));t>w;w++)g=y?v(p[w],w):p[w],l(i,w,g);else for(u=(h=b.call(p)).next,i=new m;!(d=u.call(h)).done;w++)g=y?s(h,v,[d.value,w],!0):d.value,l(i,w,g);return i.length=w,i}},function(e,t,i){var n=i(7),a=i(113);e.exports=function(e,t,i,s){try{return s?t(n(i)[0],i[1]):t(i)}catch(t){throw a(e),t}}},function(e,t,i){var n=i(7);e.exports=function(e){var t=e.return;if(void 0!==t)return n(t.call(e)).value}},function(e,t,i){"use strict";var n=i(26),a=i(10),s=i(18);e.exports=function(e,t,i){var r=n(t);r in e?a.f(e,r,s(0,i)):e[r]=i}},function(e,t,i){"use strict";var n=2147483647,a=/[^\0-\u007E]/,s=/[.\u3002\uFF0E\uFF61]/g,r="Overflow: input needs wider integers to process",o=Math.floor,l=String.fromCharCode,c=function(e){return e+22+75*(e<26)},d=function(e,t,i){var n=0;for(e=i?o(e/700):e>>1,e+=o(e/t);e>455;n+=36)e=o(e/35);return o(n+36*e/(e+38))},h=function(e){var t,i,a=[],s=(e=function(e){for(var t=[],i=0,n=e.length;i<n;){var a=e.charCodeAt(i++);if(a>=55296&&a<=56319&&i<n){var s=e.charCodeAt(i++);56320==(64512&s)?t.push(((1023&a)<<10)+(1023&s)+65536):(t.push(a),i--)}else t.push(a)}return t}(e)).length,h=128,u=0,g=72;for(t=0;t<e.length;t++)(i=e[t])<128&&a.push(l(i));var p=a.length,m=p;for(p&&a.push("-");m<s;){var f=n;for(t=0;t<e.length;t++)(i=e[t])>=h&&i<f&&(f=i);var v=m+1;if(f-h>o((n-u)/v))throw RangeError(r);for(u+=(f-h)*v,h=f,t=0;t<e.length;t++){if((i=e[t])<h&&++u>n)throw RangeError(r);if(i==h){for(var y=u,b=36;;b+=36){var w=b<=g?1:b>=g+26?26:b-g;if(y<w)break;var _=y-w,x=36-w;a.push(l(c(w+_%x))),y=o(_/x)}a.push(l(c(y))),g=d(u,v,m==p),u=0,++m}}++u,++h}return a.join("")};e.exports=function(e){var t,i,n=[],r=e.toLowerCase().replace(s,".").split(".");for(t=0;t<r.length;t++)i=r[t],n.push(a.test(i)?"xn--"+h(i):i);return n.join(".")}},function(e,t,i){"use strict";i(67);var n=i(17),a=i(28),s=i(71),r=i(13),o=i(60),l=i(21),c=i(69),d=i(14),h=i(31),u=i(3),g=i(34),p=i(29),m=i(7),f=i(9),v=i(32),y=i(18),b=i(117),w=i(33),_=i(1),x=a("fetch"),k=a("Headers"),S=_("iterator"),E="URLSearchParams",A="URLSearchParamsIterator",T=d.set,L=d.getterFor(E),C=d.getterFor(A),M=/\+/g,I=Array(4),P=function(e){return I[e-1]||(I[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},j=function(e){try{return decodeURIComponent(e)}catch(t){return e}},O=function(e){var t=e.replace(M," "),i=4;try{return decodeURIComponent(t)}catch(e){for(;i;)t=t.replace(P(i--),j);return t}},D=/[!'()~]|%20/g,z={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},R=function(e){return z[e]},q=function(e){return encodeURIComponent(e).replace(D,R)},N=function(e,t){if(t)for(var i,n,a=t.split("&"),s=0;s<a.length;)(i=a[s++]).length&&(n=i.split("="),e.push({key:O(n.shift()),value:O(n.join("="))}))},B=function(e){this.entries.length=0,N(this.entries,e)},U=function(e,t){if(e<t)throw TypeError("Not enough arguments")},W=c((function(e,t){T(this,{type:A,iterator:b(L(e).entries),kind:t})}),"Iterator",(function(){var e=C(this),t=e.kind,i=e.iterator.next(),n=i.value;return i.done||(i.value="keys"===t?n.key:"values"===t?n.value:[n.key,n.value]),i})),H=function(){h(this,H,E);var e,t,i,n,a,s,r,o,l,c=arguments.length>0?arguments[0]:void 0,d=this,g=[];if(T(d,{type:E,entries:g,updateURL:function(){},updateSearchParams:B}),void 0!==c)if(f(c))if("function"==typeof(e=w(c)))for(i=(t=e.call(c)).next;!(n=i.call(t)).done;){if((r=(s=(a=b(m(n.value))).next).call(a)).done||(o=s.call(a)).done||!s.call(a).done)throw TypeError("Expected sequence with length 2");g.push({key:r.value+"",value:o.value+""})}else for(l in c)u(c,l)&&g.push({key:l,value:c[l]+""});else N(g,"string"==typeof c?"?"===c.charAt(0)?c.slice(1):c:c+"")},Y=H.prototype;o(Y,{append:function(e,t){U(arguments.length,2);var i=L(this);i.entries.push({key:e+"",value:t+""}),i.updateURL()},delete:function(e){U(arguments.length,1);for(var t=L(this),i=t.entries,n=e+"",a=0;a<i.length;)i[a].key===n?i.splice(a,1):a++;t.updateURL()},get:function(e){U(arguments.length,1);for(var t=L(this).entries,i=e+"",n=0;n<t.length;n++)if(t[n].key===i)return t[n].value;return null},getAll:function(e){U(arguments.length,1);for(var t=L(this).entries,i=e+"",n=[],a=0;a<t.length;a++)t[a].key===i&&n.push(t[a].value);return n},has:function(e){U(arguments.length,1);for(var t=L(this).entries,i=e+"",n=0;n<t.length;)if(t[n++].key===i)return!0;return!1},set:function(e,t){U(arguments.length,1);for(var i,n=L(this),a=n.entries,s=!1,r=e+"",o=t+"",l=0;l<a.length;l++)(i=a[l]).key===r&&(s?a.splice(l--,1):(s=!0,i.value=o));s||a.push({key:r,value:o}),n.updateURL()},sort:function(){var e,t,i,n=L(this),a=n.entries,s=a.slice();for(a.length=0,i=0;i<s.length;i++){for(e=s[i],t=0;t<i;t++)if(a[t].key>e.key){a.splice(t,0,e);break}t===i&&a.push(e)}n.updateURL()},forEach:function(e){for(var t,i=L(this).entries,n=g(e,arguments.length>1?arguments[1]:void 0,3),a=0;a<i.length;)n((t=i[a++]).value,t.key,this)},keys:function(){return new W(this,"keys")},values:function(){return new W(this,"values")},entries:function(){return new W(this,"entries")}},{enumerable:!0}),r(Y,S,Y.entries),r(Y,"toString",(function(){for(var e,t=L(this).entries,i=[],n=0;n<t.length;)e=t[n++],i.push(q(e.key)+"="+q(e.value));return i.join("&")}),{enumerable:!0}),l(H,E),n({global:!0,forced:!s},{URLSearchParams:H}),s||"function"!=typeof x||"function"!=typeof k||n({global:!0,enumerable:!0,forced:!0},{fetch:function(e){var t,i,n,a=[e];return arguments.length>1&&(f(t=arguments[1])&&(i=t.body,p(i)===E&&((n=t.headers?new k(t.headers):new k).has("content-type")||n.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=v(t,{body:y(0,String(i)),headers:y(0,n)}))),a.push(t)),x.apply(this,a)}}),e.exports={URLSearchParams:H,getState:L}},function(e,t,i){var n=i(7),a=i(33);e.exports=function(e){var t=a(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return n(t.call(e))}},function(e,t,i){i(11)("Float64",(function(e){return function(t,i,n){return e(this,t,i,n)}}))},function(e,t,i){i(11)("Int8",(function(e){return function(t,i,n){return e(this,t,i,n)}}))},function(e,t,i){i(11)("Int16",(function(e){return function(t,i,n){return e(this,t,i,n)}}))},function(e,t,i){i(11)("Int32",(function(e){return function(t,i,n){return e(this,t,i,n)}}))},function(e,t,i){i(11)("Uint8",(function(e){return function(t,i,n){return e(this,t,i,n)}}),!0)},function(e,t,i){i(11)("Uint32",(function(e){return function(t,i,n){return e(this,t,i,n)}}))},function(e,t,i){"use strict";i.r(t);i(4);!function(){var e="function"==typeof Promise?Promise:function(e){var t,i=[],n=0;return e((function(e){t=e,n=1,i.splice(0).forEach(a)})),{then:a};function a(e){return n?setTimeout(e,0,t):i.push(e),this}},t=function(e,t){var i=function(e){for(var t=0,i=e.length;t<i;t++)n(e[t])},n=function(e){var t=e.target,i=e.attributeName,n=e.oldValue;t.attributeChangedCallback(i,n,t.getAttribute(i))};return function(a,s){var r=a.constructor.observedAttributes;return r&&e(s).then((function(){new t(i).observe(a,{attributes:!0,attributeOldValue:!0,attributeFilter:r});for(var e=0,s=r.length;e<s;e++)a.hasAttribute(r[e])&&n({target:a,attributeName:r[e],oldValue:null})})),a}},i=self,n=i.document,a=i.MutationObserver,s=i.Set,r=i.WeakMap,o=function(e){return"querySelectorAll"in e},l=[].filter,c=function(e){var t=new r,i=function(t){var i=e.query;if(i.length)for(var n=0,a=t.length;n<a;n++)c(l.call(t[n].addedNodes,o),!0,i),c(l.call(t[n].removedNodes,o),!1,i)},c=function i(n,a,r){for(var o,l,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new s,h=function(h,g,p,m){if(!c.has(g=n[p])){if(c.add(g),a)for(var f,v=d(g),y=0,b=r.length;y<b;y++)v.call(g,f=r[y])&&(t.has(g)||t.set(g,new s),(h=t.get(g)).has(f)||(h.add(f),e.handle(g,a,f)));else t.has(g)&&(h=t.get(g),t.delete(g),h.forEach((function(t){e.handle(g,a,t)})));i(u(g),a,r,c)}o=h,l=g},g=0,p=n.length;g<p;g++)h(o,l,g)},d=function(e){return e.matches||e.webkitMatchesSelector||e.msMatchesSelector},h=function(t){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];c(t,i,e.query)},u=function(e){return m.length?e.querySelectorAll(m):m},g=new a(i),p=e.root||n,m=e.query;return g.observe(p,{childList:!0,subtree:!0}),h(u(p)),{drop:function(e){for(var i=0,n=e.length;i<n;i++)t.delete(e[i])},flush:function(){i(g.takeRecords())},observer:g,parse:h}},d=self,h=d.document,u=d.Map,g=d.MutationObserver,p=d.Object,m=d.Set,f=d.WeakMap,v=d.Element,y=d.HTMLElement,b=d.Node,w=d.Error,_=d.TypeError,x=d.Reflect,k=self.Promise||e,S=p.defineProperty,E=p.keys,A=p.getOwnPropertyNames,T=p.setPrototypeOf,L=!self.customElements;if(L){var C=function(){var e=this.constructor;if(!I.has(e))throw new _("Illegal constructor");var t=I.get(e);if(R)return N(R,t);var i=M.call(h,t);return N(T(i,e.prototype),t)},M=h.createElement,I=new u,P=new u,j=new u,O=new u,D=[],z=c({query:D,handle:function(e,t,i){var n=j.get(i);if(t&&!n.isPrototypeOf(e)){R=T(e,n);try{new n.constructor}finally{R=null}}var a="".concat(t?"":"dis","connectedCallback");a in n&&e[a]()}}).parse,R=null,q=function(t){if(!P.has(t)){var i,n=new e((function(e){i=e}));P.set(t,{$:n,_:i})}return P.get(t).$},N=t(q,g);S(self,"customElements",{configurable:!0,value:{define:function(e,t){if(O.has(e))throw new w('the name "'.concat(e,'" has already been used with this registry'));I.set(t,e),j.set(e,t.prototype),O.set(e,t),D.push(e),q(e).then((function(){z(h.querySelectorAll(e))})),P.get(e)._(t)},get:function(e){return O.get(e)},whenDefined:q}}),S(C.prototype=y.prototype,"constructor",{value:C}),S(self,"HTMLElement",{configurable:!0,value:C}),S(h,"createElement",{configurable:!0,value:function(e,t){var i=t&&t.is,n=i?O.get(i):O.get(e);return n?new n:M.call(h,e)}}),"isConnected"in b.prototype||S(b.prototype,"isConnected",{configurable:!0,get:function(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else try{var B=function e(){return self.Reflect.construct(HTMLLIElement,[],e)};B.prototype=HTMLLIElement.prototype;var U="extends-li";self.customElements.define("extends-li",B,{extends:"li"}),L=h.createElement("li",{is:U}).outerHTML.indexOf(U)<0;var W=self.customElements,H=W.get,Y=W.whenDefined;S(self.customElements,"whenDefined",{configurable:!0,value:function(e){var t=this;return Y.call(this,e).then((function(i){return i||H.call(t,e)}))}})}catch(e){L=!L}if(L){var X=function(e){var t=J.get(e);(0,t.parse)(t.root.querySelectorAll(this),e.isConnected)},F=self.customElements,$=v.prototype.attachShadow,V=h.createElement,G=F.define,K=F.get,Z=(x||{construct:function(e){return e.call(this)}}).construct,J=new f,Q=new m,ee=new u,te=new u,ie=new u,ne=new u,ae=[],se=[],re=function(e){return ne.get(e)||K.call(F,e)},oe=function(e,t,i){var n=ie.get(i);if(t&&!n.isPrototypeOf(e)){var a=E(e),s=a.map((function(t){var i=e[t];return delete e[t],i}));ue=T(e,n);try{new n.constructor}finally{ue=null;for(var r=0,o=a.length;r<o;r++)e[a[r]]=s[r]}}var l="".concat(t?"":"dis","connectedCallback");l in n&&e[l]()},le=c({query:se,handle:oe}).parse,ce=c({query:ae,handle:function(e,t){J.has(e)&&(t?Q.add(e):Q.delete(e),se.length&&X.call(se,e))}}).parse,de=function(e){if(!te.has(e)){var t,i=new k((function(e){t=e}));te.set(e,{$:i,_:t})}return te.get(e).$},he=t(de,g),ue=null;A(self).filter((function(e){return/^HTML/.test(e)})).forEach((function(e){var t=self[e];function i(){var e=this.constructor;if(!ee.has(e))throw new _("Illegal constructor");var i=ee.get(e),n=i.is,a=i.tag;if(n){if(ue)return he(ue,n);var s=V.call(h,a);return s.setAttribute("is",n),he(T(s,e.prototype),n)}return Z.call(this,t,[],e)}S(i.prototype=t.prototype,"constructor",{value:i}),S(self,e,{value:i})})),S(h,"createElement",{configurable:!0,value:function(e,t){var i=t&&t.is;if(i){var n=ne.get(i);if(n&&ee.get(n).tag===e)return new n}var a=V.call(h,e);return i&&a.setAttribute("is",i),a}}),$&&S(v.prototype,"attachShadow",{configurable:!0,value:function(){var e=$.apply(this,arguments),t=c({query:se,root:e,handle:oe}),i=t.parse;return J.set(this,{root:e,parse:i}),e}}),S(F,"get",{configurable:!0,value:re}),S(F,"whenDefined",{configurable:!0,value:de}),S(F,"define",{configurable:!0,value:function(e,t,i){if(re(e))throw new w("'".concat(e,"' has already been defined as a custom element"));var n,a=i&&i.extends;ee.set(t,a?{is:e,tag:a}:{is:"",tag:e}),a?(n="".concat(a,'[is="').concat(e,'"]'),ie.set(n,t.prototype),ne.set(e,t),se.push(n)):(G.apply(F,arguments),ae.push(n=e)),de(e).then((function(){a?(le(h.querySelectorAll(n)),Q.forEach(X,[n])):ce(h.querySelectorAll(n))})),te.get(e)._(t)}})}}();i(19);var n=e=>({get:t=>e.get(t),set:(t,i)=>(e.set(t,i),i)});const a=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,s=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,r=/<[a-z][^>]+$/i,o=/>[^<>]*$/,l=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,c=/\s+$/,d=(e,t)=>0<t--&&(r.test(e[t])||!o.test(e[t])&&d(e,t)),h=(e,t,i)=>s.test(t)?e:`<${t}${i.replace(c,"")}></${t}>`;const{isArray:u}=Array,{indexOf:g,slice:p}=[],m=(e,t)=>111===e.nodeType?1/t<0?t?(({firstChild:e,lastChild:t})=>{const i=document.createRange();return i.setStartAfter(e),i.setEndAfter(t),i.deleteContents(),e})(e):e.lastChild:t?e.valueOf():e.firstChild:e;var f=function(e){var t="fragment",i="template",n="content"in s(i)?function(e){var t=s(i);return t.innerHTML=e,t.content}:function(e){var n=s(t),r=s(i),o=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(e)){var l=RegExp.$1;r.innerHTML="<table>"+e+"</table>",o=r.querySelectorAll(l)}else r.innerHTML=e,o=r.childNodes;return a(n,o),n};return function(e,t){return("svg"===t?r:n)(e)};function a(e,t){for(var i=t.length;i--;)e.appendChild(t[0])}function s(i){return i===t?e.createDocumentFragment():e.createElementNS("http://www.w3.org/1999/xhtml",i)}function r(e){var i=s(t),n=s("div");return n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+e+"</svg>",a(i,n.firstChild.childNodes),i}}(document);const v=({childNodes:e},t)=>e[t],y=e=>{const t=[];let{parentNode:i}=e;for(;i;)t.push(g.call(i.childNodes,e)),i=(e=i).parentNode;return t},{createTreeWalker:b,importNode:w}=document,_=1!=w.length,x=_?(e,t,i)=>w.call(document,f(e,t,i),!0):f,k=_?e=>b.call(document,e,129,null,!1):e=>b.call(document,e,129),S=(e,t,i)=>((e,t,i,n,a)=>{const s=i.length;let r=t.length,o=s,l=0,c=0,d=null;for(;l<r||c<o;)if(r===l){const t=o<s?c?n(i[c-1],-0).nextSibling:n(i[o-c],0):a;for(;c<o;)e.insertBefore(n(i[c++],1),t)}else if(o===c)for(;l<r;)d&&d.has(t[l])||e.removeChild(n(t[l],-1)),l++;else if(t[l]===i[c])l++,c++;else if(t[r-1]===i[o-1])r--,o--;else if(t[l]===i[o-1]&&i[c]===t[r-1]){const a=n(t[--r],-1).nextSibling;e.insertBefore(n(i[c++],1),n(t[l++],-1).nextSibling),e.insertBefore(n(i[--o],1),a),t[r]=i[o]}else{if(!d){d=new Map;let e=c;for(;e<o;)d.set(i[e],e++)}if(d.has(t[l])){const a=d.get(t[l]);if(c<a&&a<o){let s=l,h=1;for(;++s<r&&s<o&&d.get(t[s])===a+h;)h++;if(h>a-c){const s=n(t[l],0);for(;c<a;)e.insertBefore(n(i[c++],1),s)}else e.replaceChild(n(i[c++],1),n(t[l++],-1))}else l++}else e.removeChild(n(t[l++],-1))}return i})(e.parentNode,t,i,m,e),E=(e,t)=>{switch(t[0]){case"?":return((e,t,i)=>n=>{i!==!!n&&((i=!!n)?e.setAttribute(t,""):e.removeAttribute(t))})(e,t.slice(1),!1);case".":return((e,t)=>"dataset"===t?(({dataset:e})=>t=>{for(const i in t){const n=t[i];null==n?delete e[i]:e[i]=n}})(e):i=>{e[t]=i})(e,t.slice(1));case"o":if("n"===t[1])return((e,t)=>{let i,n=t.slice(2);return!(t in e)&&t.toLowerCase()in e&&(n=n.toLowerCase()),t=>{const a=u(t)?t:[t,!1];i!==a[0]&&(i&&e.removeEventListener(n,i,a[1]),(i=a[0])&&e.addEventListener(n,i,a[1]))}})(e,t)}switch(t){case"ref":return(e=>t=>{"function"==typeof t?t(e):t.current=e})(e);case"aria":return(e=>t=>{for(const i in t){const n="role"===i?i:`aria-${i}`,a=t[i];null==a?e.removeAttribute(n):e.setAttribute(n,a)}})(e)}return((e,t)=>{let i,n=!0;const a=document.createAttributeNS(null,t);return t=>{i!==t&&(i=t,null==i?n||(e.removeAttributeNode(a),n=!0):(a.value=t,n&&(e.setAttributeNodeNS(a),n=!1)))}})(e,t)};function A(e){const{type:t,path:i}=e,n=i.reduceRight(v,this);return"node"===t?(e=>{let t,i,n=[];const a=s=>{switch(typeof s){case"string":case"number":case"boolean":t!==s&&(t=s,i?i.textContent=s:i=document.createTextNode(s),n=S(e,n,[i]));break;case"object":case"undefined":if(null==s){t!=s&&(t=s,n=S(e,n,[]));break}if(u(s)){t=s,0===s.length?n=S(e,n,[]):"object"==typeof s[0]?n=S(e,n,s):a(String(s));break}"ELEMENT_NODE"in s&&t!==s&&(t=s,n=S(e,n,11===s.nodeType?p.call(s.childNodes):[s]))}};return a})(n):"attr"===t?E(n,e.name):(e=>{let t;return i=>{t!=i&&(t=i,e.textContent=null==i?"":i)}})(n)}const T="isµ",L=n(new WeakMap),C=/^(?:plaintext|script|style|textarea|title|xmp)$/i,M=(e,t)=>{const i=((e,t,i)=>{const n=[],{length:s}=e;for(let i=1;i<s;i++){const s=e[i-1];n.push(a.test(s)&&d(e,i)?s.replace(a,((e,n,a)=>`${t}${i-1}=${a||'"'}${n}${a?"":'"'}`)):`${s}\x3c!--${t}${i-1}--\x3e`)}n.push(e[s-1]);const r=n.join("").trim();return i?r:r.replace(l,h)})(t,T,"svg"===e),n=x(i,e),s=k(n),r=[],o=t.length-1;let c=0,u=`isµ${c}`;for(;c<o;){const e=s.nextNode();if(!e)throw`bad template: ${i}`;if(8===e.nodeType)e.textContent===u&&(r.push({type:"node",path:y(e)}),u="isµ"+ ++c);else{for(;e.hasAttribute(u);)r.push({type:"attr",path:y(e),name:e.getAttribute(u)}),e.removeAttribute(u),u="isµ"+ ++c;C.test(e.tagName)&&e.textContent.trim()===`\x3c!--${u}--\x3e`&&(e.textContent="",r.push({type:"text",path:y(e)}),u="isµ"+ ++c)}}return{content:n,nodes:r}},I=(e,t)=>{const{content:i,nodes:n}=L.get(t)||L.set(t,M(e,t)),a=w.call(document,i,!0);return{content:a,updates:n.map(A,a)}},P=(e,{type:t,template:i,values:n})=>{const{length:a}=n;j(e,n,a);let{entry:s}=e;s&&s.template===i&&s.type===t||(e.entry=s=((e,t)=>{const{content:i,updates:n}=I(e,t);return{type:e,template:t,content:i,updates:n,wire:null}})(t,i));const{content:r,updates:o,wire:l}=s;for(let e=0;e<a;e++)o[e](n[e]);return l||(s.wire=(e=>{const{childNodes:t}=e,{length:i}=t;if(i<2)return i?t[0]:e;const n=p.call(t,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:n[0],lastChild:n[i-1],valueOf(){if(t.length!==i){let t=0;for(;t<i;)e.appendChild(n[t++])}return e}}})(r))},j=({stack:e},t,i)=>{for(let n=0;n<i;n++){const i=t[n];i instanceof O?t[n]=P(e[n]||(e[n]={stack:[],entry:null,wire:null}),i):u(i)?j(e[n]||(e[n]={stack:[],entry:null,wire:null}),i,i.length):e[n]=null}i<e.length&&e.splice(i)};function O(e,t,i){this.type=e,this.template=t,this.values=i}const{create:D,defineProperties:z}=Object,R=e=>{const t=n(new WeakMap);return z(((t,...i)=>new O(e,t,i)),{for:{value(i,n){const a=t.get(i)||t.set(i,D(null));return a[n]||(a[n]=(t=>(i,...n)=>P(t,{type:e,template:i,values:n}))({stack:[],entry:null,wire:null}))}},node:{value:(t,...i)=>P({stack:[],entry:null,wire:null},{type:e,template:t,values:i}).valueOf()}})},q=n(new WeakMap),N=(e,t)=>{const i="function"==typeof t?t():t,n=q.get(e)||q.set(e,{stack:[],entry:null,wire:null}),a=i instanceof O?P(n,i):i;return a!==n.wire&&(n.wire=a,e.textContent="",e.appendChild(a.valueOf())),e},B=R("html"),U=R("svg");function W(e){for(var t=e[0],i=1,n=arguments.length;i<n;i++)t+=arguments[i]+e[i];return t}const{defineProperties:H,keys:Y}=Object,X=(e,t,i,n,a)=>({configurable:!0,get:()=>n,set(s){(e||s!==n||t&&"object"==typeof s&&s)&&(n=s,i?a.call(this,n):a.call(this))}}),F=()=>{};const $=(({all:e=!1,shallow:t=!0,useState:i=F,getAttribute:n=((e,t)=>e.getAttribute(t))}={})=>(a,s,r)=>{const o=((e,t,i,n,a,s)=>{const r={},o=a!==F,l=[i,n,o];for(let i=Y(e),n=0;n<i.length;n++){const c=t(e,i[n]),d=o?a(c):[c,a];s&&(d[1]=s),r[i[n]]=X.apply(null,l.concat(d))}return r})(s,((e,t)=>{let i=e[t],s=typeof i;return a.hasOwnProperty(t)?(i=a[t],delete a[t]):a.hasAttribute(t)&&(i=n(a,t),"number"==s?i=+i:"boolean"==s&&(i=!/^(?:false|0|)$/.test(i))),i}),e,t,i,r);return H(a,o)})({dom:!0}),V=customElements,{define:G}=V,{create:K,defineProperties:Z,getOwnPropertyDescriptor:J,keys:Q}=Object,ee="element",te=n(new Map([[ee,{c:HTMLElement,e:ee}]])),ie=e=>document.createElement(e),ne=e=>te.get(e)||te.set(e,{c:ie(e).constructor,e:e}),ae=(e,t)=>{const{attachShadow:i,attributeChanged:n,bound:a,connected:s,disconnected:r,handleEvent:o,init:l,observedAttributes:c,props:d,render:h,style:u}=t,g=new WeakMap,p={},m={},f=[],v=K(null),y=(e,t,n)=>{if(!g.has(e)){g.set(e,0),Z(e,{html:{configurable:!0,value:re.bind(i?e.attachShadow(i):e)}});for(let t=0;t<b;t++){const{type:i,options:n}=f[t];e.addEventListener(i,e,n)}a&&a.forEach(se,e),d&&$(e,d,h),(l||h)&&(l||h).call(e),t&&(e[t]=n)}};for(let e=Q(t),i=0,{length:n}=e;i<n;i++){const n=e[i];if(/^on./.test(n)&&!/Options$/.test(n)){const e=t[n+"Options"]||!1,i=n.toLowerCase();let a=i.slice(2);f.push({type:a,options:e}),v[a]=n,i!==n&&(a=i.slice(2,3)+n.slice(3),v[a]=n,f.push({type:a,options:e}))}switch(n){case"attachShadow":case"observedAttributes":case"style":break;default:m[n]=J(t,n)}}const{length:b}=f;if(b&&!o&&(m.handleEvent={value(e){this[v[e.type]](e)}}),null!==d)if(d)for(let e=Q(d),t=0;t<e.length;t++){const i=e[t];m[i]={get(){return y(this),d[i]},set(e){y(this,i,e)}}}else m.props={get(){const e={};for(let{attributes:t}=this,{length:i}=t,n=0;n<i;n++){const{name:i,value:a}=t[n];e[i]=a}return e}};c&&(p.observedAttributes={value:c}),m.attributeChangedCallback={value(){y(this),n&&n.apply(this,arguments)}},m.connectedCallback={value(){y(this),s&&s.call(this)}},r&&(m.disconnectedCallback={value:r});const{c:w,e:_}=ne(t.extends||ee);class x extends w{}Z(x,p),Z(x.prototype,m);const k=[e,x];return _!==ee&&k.push({extends:_}),G.apply(V,k),te.set(e,{c:x,e:_}),u&&(document.head.appendChild(ie("style")).textContent=u(_===ee?e:_+'[is="'+e+'"]')),x};function se(e){this[e]=this[e].bind(this)}function re(){return N(this,B.apply(null,arguments))}V.get("uce-lib")||V.define("uce-lib",class extends ne(ee).c{static get define(){return ae}static get render(){return N}static get html(){return B}static get svg(){return U}static get css(){return W}});var oe=i(73);var le=function(e,t){var i=e.map((function(e){return e.then((function(e){return{value:e,status:!0}}),(function(e){return{value:e,status:!1}})).then((function(e){return"function"==typeof t&&t(e),e}))}));return Promise.all(i)},ce=function(e,t){this.onProgress="function"==typeof t?t:null,this.fallbackImage="string"==typeof e||e instanceof HTMLImageElement?e:null};ce.simplePreload=function(e){return new Promise((function(t,i){var n;e instanceof HTMLImageElement?(n=e).complete?n.naturalHeight?t(n):i(n):(n.onload=t.bind(null,n),n.onerror=n.onabort=i.bind(null,n)):"string"==typeof e&&((n=new Image).onload=t.bind(null,n),n.onerror=n.onabort=i.bind(null,n),n.src=e)}))},ce.prototype.preload=function(e){var t=this,i=Array.prototype.concat.apply([],Array.prototype.slice.call(arguments));return i=i.map((function(e){return ce.simplePreload(e).catch((function(e){return t.fallbackImage?ce.simplePreload(t.fallbackImage).then((function(t){return e.setAttribute("data-fail-src",e.src),e.src=t.src,e}),(function(){return Promise.reject(e)})):Promise.reject(e)}))})),le(i,t.onProgress)};var de=ce;function he(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=[],n=!0,a=!1,s=void 0;try{for(var r,o=e[Symbol.iterator]();!(n=(r=o.next()).done)&&(i.push(r.value),!t||i.length!==t);n=!0);}catch(e){a=!0,s=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw s}}return i}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function ue(e){return function(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function ge(e){if(!be(e))return!1;var t=xe(e,pe(e)),i=ue(pe(t)?document.querySelectorAll(t.target):document.querySelectorAll(t)),n=[];if(i.forEach((function(e){var i=function(e,t){return new Promise((function(i,n){if(void 0===e&&n("Target element is undefined"),"true"!==e.getAttribute("data-scramble-active")){t.beforeEach&&t.beforeEach(e),e.setAttribute("data-scramble-active","true"),e.classList.add("scrambling");var a,s=e.innerHTML,r=[],o=t.speed?t.speed:100,l=e.textContent.split(""),c=l,d=e.textContent.split(""),h=!1;ye(t.text)?a=Se(t.text):e.getAttribute("data-scramble-text")&&""!==e.getAttribute("data-scramble-text")&&(a=Se(e.getAttribute("data-scramble-text"))),a&&(h=!0,l=a.truth,d=a.newLetters,c=a.startText);var u=function(){if(c.map((function(t,i){return!(" \t\n\r\v".indexOf(t)>-1||(d[i]=we(),!0===r[i]&&(d[i]=l[i]),e.textContent=d.join(""),0))})),ke(d,l)){if(e.innerHTML=s,h){var n=e.children[0];n&&""!==n?n.textContent=d.join(""):e.textContent=d.join("")}clearInterval(g),e.setAttribute("data-scramble-active","false"),e.classList.remove("scrambling"),t.afterEach&&t.afterEach(e),i(e)}};!function(e){if(e&&me(e))for(var i=0;i<=e.length;i++)!function(e){setTimeout((function(){r[e]=!0}),_e(pe(t),t.random,t.speed))}(i)}(c),u();var g=setInterval((function(){u()}),o)}else n("Animation already triggered")}))}(e,t);n.push(i)})),!(n.length>0))return!1;t.beforeAll&&t.beforeAll(i),Promise.all(n).then((function(e){t.afterAll&&t.afterAll(e)})).catch((function(e){t.errorHandler&&t.errorHandler(e)}))}var pe=function(e){return!!e&&e.constructor===Object},me=function(e){return!!e&&e.constructor===Array},fe=function(e){return"function"==typeof e},ve=function(e){return Number.isInteger(e)},ye=function(e){return!(!e||""===e||!("string"==typeof e||e instanceof String))},be=function(e){return!me(e)&&!function(e){return"boolean"==typeof e}(e)&&"number"!=typeof e&&"function"!=typeof e&&void 0!==e},we=function(e,t){var i=e||1,n=t||!1,a=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,i);return" \t\n\r\v".indexOf(a)<0&&!0!==n&&a},_e=function(e,t,i){var n=i||100;if((e||!1)&&me(t)&&t.length>1){var a=he(t,2),s=a[0],r=a[1];if((i>=r||n>=r)&&(n=r-1),s>(r-=n)&&(s=r),ve(s)&&ve(r))return Math.floor(Math.random()*(r-s))+s}return Math.floor(1999*Math.random())+1e3},xe=function(e,t){var i={target:"[data-scrambler]",random:[1e3,3e3],speed:100,text:!1,beforeEach:!1,afterEach:!1,beforeAll:!1,afterAll:!1,errorHandler:!1};return e&&(t||!1)&&(i.target=void 0!==e.target?e.target:"[data-scrambler]",i.random=void 0!==e.random?e.random:[1e3,3e3],i.speed=void 0!==e.speed?e.speed:100,i.text=void 0!==e.text&&e.text,i.beforeEach=!(void 0===e.beforeEach||!fe(e.beforeEach))&&e.beforeEach,i.afterEach=!(void 0===e.afterEach||!fe(e.afterEach))&&e.afterEach,i.beforeAll=!(void 0===e.beforeAll||!fe(e.beforeAll))&&e.beforeAll,i.afterAll=!(void 0===e.afterAll||!fe(e.afterAll))&&e.afterAll,i.errorHandler=!(void 0===e.errorHandler||!fe(e.errorHandler))&&e.errorHandler),i},ke=function(e,t){return!(e.length!==t.length||!e.every((function(e,i){return e===t[i]})))},Se=function(e){if(!e||void 0===e||!("string"==typeof e||e instanceof String))return!1;var t=e,i=t.split(""),n=t.split(""),a=[];return i.forEach((function(e,t){" \t\n\r\v".indexOf(i[t])>-1?a.push(" "):a.push(we())})),{truth:i,newLetters:n,startText:a}},Ee=ge,Ae=(i(108),i(72),function(e,t){return function(){for(var i=new Array(arguments.length),n=0;n<i.length;n++)i[n]=arguments[n];return e.apply(t,i)}}),Te=Object.prototype.toString;function Le(e){return"[object Array]"===Te.call(e)}function Ce(e){return void 0===e}function Me(e){return null!==e&&"object"==typeof e}function Ie(e){if("[object Object]"!==Te.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function Pe(e){return"[object Function]"===Te.call(e)}function je(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),Le(e))for(var i=0,n=e.length;i<n;i++)t.call(null,e[i],i,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}var Oe={isArray:Le,isArrayBuffer:function(e){return"[object ArrayBuffer]"===Te.call(e)},isBuffer:function(e){return null!==e&&!Ce(e)&&null!==e.constructor&&!Ce(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:Me,isPlainObject:Ie,isUndefined:Ce,isDate:function(e){return"[object Date]"===Te.call(e)},isFile:function(e){return"[object File]"===Te.call(e)},isBlob:function(e){return"[object Blob]"===Te.call(e)},isFunction:Pe,isStream:function(e){return Me(e)&&Pe(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:je,merge:function e(){var t={};function i(i,n){Ie(t[n])&&Ie(i)?t[n]=e(t[n],i):Ie(i)?t[n]=e({},i):Le(i)?t[n]=i.slice():t[n]=i}for(var n=0,a=arguments.length;n<a;n++)je(arguments[n],i);return t},extend:function(e,t,i){return je(t,(function(t,n){e[n]=i&&"function"==typeof t?Ae(t,i):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function De(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ze=function(e,t,i){if(!t)return e;var n;if(i)n=i(t);else if(Oe.isURLSearchParams(t))n=t.toString();else{var a=[];Oe.forEach(t,(function(e,t){null!=e&&(Oe.isArray(e)?t+="[]":e=[e],Oe.forEach(e,(function(e){Oe.isDate(e)?e=e.toISOString():Oe.isObject(e)&&(e=JSON.stringify(e)),a.push(De(t)+"="+De(e))})))})),n=a.join("&")}if(n){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+n}return e};function Re(){this.handlers=[]}Re.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},Re.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},Re.prototype.forEach=function(e){Oe.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var qe=Re,Ne=function(e,t,i){return Oe.forEach(i,(function(i){e=i(e,t)})),e},Be=function(e){return!(!e||!e.__CANCEL__)};function Ue(){throw new Error("setTimeout has not been defined")}function We(){throw new Error("clearTimeout has not been defined")}var He,Ye=Ue,Xe=We;function Fe(e){if(Ye===setTimeout)return setTimeout(e,0);if((Ye===Ue||!Ye)&&setTimeout)return Ye=setTimeout,setTimeout(e,0);try{return Ye(e,0)}catch(t){try{return Ye.call(null,e,0)}catch(t){return Ye.call(this,e,0)}}}"function"==typeof(He="undefined"!=typeof window?window:"undefined"!=typeof self?self:{}).setTimeout&&(Ye=setTimeout),"function"==typeof He.clearTimeout&&(Xe=clearTimeout);var $e,Ve=[],Ge=!1,Ke=-1;function Ze(){Ge&&$e&&(Ge=!1,$e.length?Ve=$e.concat(Ve):Ke=-1,Ve.length&&Je())}function Je(){if(!Ge){var e=Fe(Ze);Ge=!0;for(var t=Ve.length;t;){for($e=Ve,Ve=[];++Ke<t;)$e&&$e[Ke].run();Ke=-1,t=Ve.length}$e=null,Ge=!1,function(e){if(Xe===clearTimeout)return clearTimeout(e);if((Xe===We||!Xe)&&clearTimeout)return Xe=clearTimeout,clearTimeout(e);try{Xe(e)}catch(t){try{return Xe.call(null,e)}catch(t){return Xe.call(this,e)}}}(e)}}function Qe(e,t){this.fun=e,this.array=t}Qe.prototype.run=function(){this.fun.apply(null,this.array)};function et(){}var tt=et,it=et,nt=et,at=et,st=et,rt=et,ot=et;var lt=He.performance||{},ct=lt.now||lt.mozNow||lt.msNow||lt.oNow||lt.webkitNow||function(){return(new Date).getTime()};var dt=new Date;var ht={nextTick:function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];Ve.push(new Qe(e,t)),1!==Ve.length||Ge||Fe(Je)},title:"browser",browser:!0,env:{NODE_ENV:"production"},argv:[],version:"",versions:{},on:tt,addListener:it,once:nt,off:at,removeListener:st,removeAllListeners:rt,emit:ot,binding:function(e){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(e){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(e){var t=.001*ct.call(lt),i=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(i-=e[0],(n-=e[1])<0&&(i--,n+=1e9)),[i,n]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-dt)/1e3}},ut=function(e,t){Oe.forEach(e,(function(i,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=i,delete e[n])}))},gt=function(e,t,i,n,a){return function(e,t,i,n,a){return e.config=t,i&&(e.code=i),e.request=n,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,i,n,a)},pt=Oe.isStandardBrowserEnv()?{write:function(e,t,i,n,a,s){var r=[];r.push(e+"="+encodeURIComponent(t)),Oe.isNumber(i)&&r.push("expires="+new Date(i).toGMTString()),Oe.isString(n)&&r.push("path="+n),Oe.isString(a)&&r.push("domain="+a),!0===s&&r.push("secure"),document.cookie=r.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},mt=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],ft=Oe.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a");function n(e){var n=e;return t&&(i.setAttribute("href",n),n=i.href),i.setAttribute("href",n),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:"/"===i.pathname.charAt(0)?i.pathname:"/"+i.pathname}}return e=n(window.location.href),function(t){var i=Oe.isString(t)?n(t):t;return i.protocol===e.protocol&&i.host===e.host}}():function(){return!0},vt=function(e){return new Promise((function(t,i){var n=e.data,a=e.headers;Oe.isFormData(n)&&delete a["Content-Type"];var s=new XMLHttpRequest;if(e.auth){var r=e.auth.username||"",o=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.Authorization="Basic "+btoa(r+":"+o)}var l,c,d=(l=e.baseURL,c=e.url,l&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(c)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(l,c):c);if(s.open(e.method.toUpperCase(),ze(d,e.params,e.paramsSerializer),!0),s.timeout=e.timeout,s.onreadystatechange=function(){if(s&&4===s.readyState&&(0!==s.status||s.responseURL&&0===s.responseURL.indexOf("file:"))){var n,a,r,o,l,c="getAllResponseHeaders"in s?(n=s.getAllResponseHeaders(),l={},n?(Oe.forEach(n.split("\n"),(function(e){if(o=e.indexOf(":"),a=Oe.trim(e.substr(0,o)).toLowerCase(),r=Oe.trim(e.substr(o+1)),a){if(l[a]&&mt.indexOf(a)>=0)return;l[a]="set-cookie"===a?(l[a]?l[a]:[]).concat([r]):l[a]?l[a]+", "+r:r}})),l):l):null,d={data:e.responseType&&"text"!==e.responseType?s.response:s.responseText,status:s.status,statusText:s.statusText,headers:c,config:e,request:s};!function(e,t,i){var n=i.config.validateStatus;i.status&&n&&!n(i.status)?t(gt("Request failed with status code "+i.status,i.config,null,i.request,i)):e(i)}(t,i,d),s=null}},s.onabort=function(){s&&(i(gt("Request aborted",e,"ECONNABORTED",s)),s=null)},s.onerror=function(){i(gt("Network Error",e,null,s)),s=null},s.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),i(gt(t,e,"ECONNABORTED",s)),s=null},Oe.isStandardBrowserEnv()){var h=(e.withCredentials||ft(d))&&e.xsrfCookieName?pt.read(e.xsrfCookieName):void 0;h&&(a[e.xsrfHeaderName]=h)}if("setRequestHeader"in s&&Oe.forEach(a,(function(e,t){void 0===n&&"content-type"===t.toLowerCase()?delete a[t]:s.setRequestHeader(t,e)})),Oe.isUndefined(e.withCredentials)||(s.withCredentials=!!e.withCredentials),e.responseType)try{s.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&s.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&s.upload&&s.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){s&&(s.abort(),i(e),s=null)})),n||(n=null),s.send(n)}))},yt={"Content-Type":"application/x-www-form-urlencoded"};function bt(e,t){!Oe.isUndefined(e)&&Oe.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var wt,_t={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==ht&&"[object process]"===Object.prototype.toString.call(ht))&&(wt=vt),wt),transformRequest:[function(e,t){return ut(t,"Accept"),ut(t,"Content-Type"),Oe.isFormData(e)||Oe.isArrayBuffer(e)||Oe.isBuffer(e)||Oe.isStream(e)||Oe.isFile(e)||Oe.isBlob(e)?e:Oe.isArrayBufferView(e)?e.buffer:Oe.isURLSearchParams(e)?(bt(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):Oe.isObject(e)?(bt(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};_t.headers={common:{Accept:"application/json, text/plain, */*"}},Oe.forEach(["delete","get","head"],(function(e){_t.headers[e]={}})),Oe.forEach(["post","put","patch"],(function(e){_t.headers[e]=Oe.merge(yt)}));var xt=_t;function kt(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var St=function(e){return kt(e),e.headers=e.headers||{},e.data=Ne(e.data,e.headers,e.transformRequest),e.headers=Oe.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Oe.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||xt.adapter)(e).then((function(t){return kt(e),t.data=Ne(t.data,t.headers,e.transformResponse),t}),(function(t){return Be(t)||(kt(e),t&&t.response&&(t.response.data=Ne(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},Et=function(e,t){t=t||{};var i={},n=["url","method","data"],a=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],r=["validateStatus"];function o(e,t){return Oe.isPlainObject(e)&&Oe.isPlainObject(t)?Oe.merge(e,t):Oe.isPlainObject(t)?Oe.merge({},t):Oe.isArray(t)?t.slice():t}function l(n){Oe.isUndefined(t[n])?Oe.isUndefined(e[n])||(i[n]=o(void 0,e[n])):i[n]=o(e[n],t[n])}Oe.forEach(n,(function(e){Oe.isUndefined(t[e])||(i[e]=o(void 0,t[e]))})),Oe.forEach(a,l),Oe.forEach(s,(function(n){Oe.isUndefined(t[n])?Oe.isUndefined(e[n])||(i[n]=o(void 0,e[n])):i[n]=o(void 0,t[n])})),Oe.forEach(r,(function(n){n in t?i[n]=o(e[n],t[n]):n in e&&(i[n]=o(void 0,e[n]))}));var c=n.concat(a).concat(s).concat(r),d=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===c.indexOf(e)}));return Oe.forEach(d,l),i};function At(e){this.defaults=e,this.interceptors={request:new qe,response:new qe}}At.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=Et(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[St,void 0],i=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)i=i.then(t.shift(),t.shift());return i},At.prototype.getUri=function(e){return e=Et(this.defaults,e),ze(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},Oe.forEach(["delete","get","head","options"],(function(e){At.prototype[e]=function(t,i){return this.request(Et(i||{},{method:e,url:t,data:(i||{}).data}))}})),Oe.forEach(["post","put","patch"],(function(e){At.prototype[e]=function(t,i,n){return this.request(Et(n||{},{method:e,url:t,data:i}))}}));var Tt=At;function Lt(e){this.message=e}Lt.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},Lt.prototype.__CANCEL__=!0;var Ct=Lt;function Mt(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var i=this;e((function(e){i.reason||(i.reason=new Ct(e),t(i.reason))}))}Mt.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},Mt.source=function(){var e;return{token:new Mt((function(t){e=t})),cancel:e}};var It=Mt;function Pt(e){var t=new Tt(e),i=Ae(Tt.prototype.request,t);return Oe.extend(i,Tt.prototype,t),Oe.extend(i,t),i}var jt=Pt(xt);jt.Axios=Tt,jt.create=function(e){return Pt(Et(jt.defaults,e))},jt.Cancel=Ct,jt.CancelToken=It,jt.isCancel=Be,jt.all=function(e){return Promise.all(e)},jt.spread=function(e){return function(t){return e.apply(null,t)}},jt.isAxiosError=function(e){return"object"==typeof e&&!0===e.isAxiosError};var Ot=jt,Dt=jt;Ot.default=Dt;var zt=Ot;class Rt{constructor(e,t){this.axios=t,this.endpoint=e.startsWith("directus_")?`/${e.substring(9)}/`:`/items/${e}/`}async create(e,t){return(await this.axios.post(this.endpoint,e,{params:t})).data}async read(e,t){let i=null;e&&(Array.isArray(e)||"string"==typeof e||"number"==typeof e)&&(i=e);let n={};t?n=t:t||"object"!=typeof e||!1!==Array.isArray(e)||(n=e);let a=this.endpoint;i&&(a+=i);return(await this.axios.get(a,{params:n})).data}async update(e,t,i){if("string"==typeof e||"number"==typeof e||Array.isArray(e)&&e.every((e=>["string","number"].includes(typeof e)))){const n=e,a=t;return(await this.axios.patch(`${this.endpoint}${n}`,a,{params:i})).data}return(await this.axios.patch(`${this.endpoint}`,e,{params:t})).data}async delete(e){await this.axios.delete(`${this.endpoint}${e}`)}}class qt{constructor(e){this.specs={oas:async()=>(await this.axios.get("/server/specs/oas")).data},this.axios=e}async ping(){return await this.axios.get("/server/ping"),"pong"}async info(){return(await this.axios.get("/server/info")).data}}class Nt{constructor(e){this.random={string:async(e=32)=>(await this.axios.get("/utils/random/string",{params:{length:e}})).data},this.hash={generate:async e=>(await this.axios.post("/utils/hash/generate",{string:e})).data,verify:async(e,t)=>(await this.axios.post("/utils/hash/verify",{string:e,hash:t})).data},this.axios=e}async sort(e,t,i){await this.axios.post(`/utils/sort/${e}`,{item:t,to:i})}async revert(e){await this.axios.post(`/utils/revert/${e}`)}}class Bt{constructor(e){this.comments={create:async e=>(await this.axios.post("/activity/comments",e)).data,update:async(e,t)=>(await this.axios.patch(`/activity/comments/${e}`,t)).data,delete:async e=>{await this.axios.delete(`/activity/comments/${e}`)}},this.axios=e,this.itemsHandler=new Rt("directus_activity",e)}async read(e,t){return await this.itemsHandler.read(e,t)}}class Ut extends Rt{constructor(e){super("directus_folders",e)}}class Wt extends Rt{constructor(e){super("directus_permissions",e)}}class Ht extends Rt{constructor(e){super("directus_presets",e)}}class Yt extends Rt{constructor(e){super("directus_relations",e)}}class Xt extends Rt{constructor(e){super("directus_revisions",e)}}class Ft extends Rt{constructor(e){super("directus_roles",e)}}class $t extends Rt{constructor(e){super("directus_users",e),this.tfa={enable:async e=>{await this.axios.post("/users/tfa/enable",{password:e})},disable:async e=>{await this.axios.post("/users/tfa/disable",{otp:e})}},this.me={read:async e=>(await this.axios.get("/users/me",{params:e})).data,update:async(e,t)=>(await this.axios.patch("/users/me",e,{params:t})).data}}async invite(e,t){await this.axios.post("/users/invite",{email:e,role:t})}async acceptInvite(e,t){await this.axios.post("/users/invite/accept",{token:e,password:t})}}class Vt extends Rt{constructor(e){super("directus_settings",e)}}class Gt extends Rt{constructor(e){super("directus_files",e)}}class Kt extends Rt{constructor(e){super("directus_collections",e)}}class Zt extends Rt{constructor(e){super("directus_fields",e)}}class Jt{constructor(e,t){this.autoRefreshTimeout=null,this.accessTokenInitId=null,this.password={request:async e=>{await this.axios.post("/auth/password/request",{email:e})},reset:async(e,t)=>{await this.axios.post("/auth/password/reset",{token:e,password:t})}},this.axios=e,this.storage=t.storage,this.mode=t.mode,this.autoRefresh=t.autoRefresh,this.accessTokenInitId=this.axios.interceptors.request.use((e=>this.initializeAccessToken(e))),this.autoRefresh&&this.refresh()}get token(){var e,t;return(null===(t=null===(e=this.axios.defaults.headers)||void 0===e?void 0:e.Authorization)||void 0===t?void 0:t.split(" ")[1])||null}set token(e){var t;null===e?null===(t=this.axios.defaults.headers)||void 0===t||delete t.Authorization:this.axios.defaults.headers={...this.axios.defaults.headers||{},Authorization:`Bearer ${e}`}}async login(e){this.removeTimeout();const t=await this.axios.post("/auth/login",{...e,mode:this.mode}),i=t.data.data;return this.token=i.access_token,this.expiresAt=Date.now()+i.expires,await this.storage.setItem("directus_access_token",this.token),await this.storage.setItem("directus_access_token_expires",this.expiresAt),"json"===this.mode&&await this.storage.setItem("directus_refresh_token",i.refresh_token),this.autoRefresh&&this.refresh(),t.data}async refresh(){if(this.removeTimeout(),this.expiresAt=await this.storage.getItem("directus_access_token_expires"),!this.expiresAt)return;if(Date.now()+1e4<this.expiresAt&&this.autoRefresh)return void(this.autoRefreshTimeout=setTimeout((()=>this.refresh()),this.expiresAt-Date.now()-1e4));const e={mode:this.mode};if("json"===this.mode){const t=await this.storage.getItem("directus_refresh_token");e.refresh_token=t}this.expiresAt<Date.now()+1e3&&(this.token=null);const t=await this.axios.post("/auth/refresh",e),i=t.data.data;return this.token=i.access_token,this.expiresAt=Date.now()+i.expires,await this.storage.setItem("directus_access_token",this.token),await this.storage.setItem("directus_access_token_expires",this.expiresAt),"json"===this.mode&&await this.storage.setItem("directus_refresh_token",t.data.data.refresh_token),this.autoRefresh&&(this.autoRefreshTimeout=setTimeout((()=>this.refresh()),i.expires-1e4)),t.data}async logout(){this.removeTimeout();const e={};"json"===this.mode&&(e.refresh_token=await this.storage.getItem("directus_refresh_token")),await this.axios.post("/auth/logout",e),this.token=null}async initializeAccessToken(e){if(null!==this.accessTokenInitId){const t=await this.storage.getItem("directus_access_token");t&&(this.token=t,e.headers.Authorization=`Bearer ${t}`),this.axios.interceptors.request.eject(this.accessTokenInitId),this.accessTokenInitId=null}return e}removeTimeout(){null!==this.autoRefreshTimeout&&(clearTimeout(this.autoRefreshTimeout),this.autoRefreshTimeout=null)}}class Qt{async getItem(e){return window.localStorage.getItem(e)}async setItem(e,t){window.localStorage.setItem(e,t)}}class ei{constructor(){this.values={}}async getItem(e){return this.values[e]}async setItem(e,t){this.values[e]=t}}var ti=class{constructor(e,t){var i,n,a,s,r,o;this.axios=zt.create({baseURL:e,withCredentials:!0}),this.authOptions={storage:null!==(n=null===(i=null==t?void 0:t.auth)||void 0===i?void 0:i.storage)&&void 0!==n?n:"undefined"==typeof window?new ei:new Qt,mode:null!==(s=null===(a=null==t?void 0:t.auth)||void 0===a?void 0:a.mode)&&void 0!==s?s:"cookie",autoRefresh:null!==(o=null===(r=null==t?void 0:t.auth)||void 0===r?void 0:r.autoRefresh)&&void 0!==o&&o},this.auth=new Jt(this.axios,this.authOptions)}get url(){return this.axios.defaults.baseURL}set url(e){this.axios.defaults.baseURL=e}items(e){if(e.startsWith("directus_"))throw new Error(`You can't read the "${e}" collection directly.`);return new Rt(e,this.axios)}get activity(){return new Bt(this.axios)}get collections(){return new Kt(this.axios)}get fields(){return new Zt(this.axios)}get files(){return new Gt(this.axios)}get folders(){return new Ut(this.axios)}get permissions(){return new Wt(this.axios)}get presets(){return new Ht(this.axios)}get relations(){return new Yt(this.axios)}get revisions(){return new Xt(this.axios)}get roles(){return new Ft(this.axios)}get server(){return new qt(this.axios)}get settings(){return new Vt(this.axios)}get users(){return new $t(this.axios)}get utils(){return new Nt(this.axios)}},ii=e=>{const t=[].concat(e);return Promise.all(t.map((e=>customElements.whenDefined(e).then((t=>t||customElements.get(e)))))).then((e=>t.length<2?e[0]:e))};let ni,ai,si=e=>e;const{url:ri,assets:oi}={url:"https://admin.davidbwaters.com/",assets:"https://admin.davidbwaters.com/assets/"},li=new ti(ri);ii("uce-lib").then((({define:e,css:t})=>{e("c-app",{styles:t(ni||(ni=si`
      :host {
        display: block;
        height: 100%;
        opacity: 1;
        width: 100%;
        will-change: opacity;
      }
    `)),init(){},bound:["setLogo"],setLogo(){this.theme=document.body.dataset.theme,this.data.logo="dark"===this.theme?this.data.site.images.branding_light.image:this.data.site.images.branding_dark.image,console.log(this.data.logo),this.render()},async preload(){await this.getData(),this.setLogo(),this.render(),this.addEventListener("themeChange",this.setLogo)},data:{},formatData(e){let t={text:{}};return Object.keys(e).forEach((i=>{if(e[i]&&e[i].icon)t.images||(t.images={}),t.images[e[i].name]={},t.images[e[i].name].image=oi+e[i].icon;else if(e[i]&&e[i].directus_files_id)t.images||(t.images={}),e[i]&&e[i].directus_files_id?t.images[i]=oi+e[i].directus_files_id:e[i].filename_disk&&e[i].id&&(t.images[i]=oi+e[i].id);else if(e[i]&&e[i].filename_disk)t.images||(t.images={}),t.images[i]={},t.images[i].image=oi+e[i].id;else if(e[i]&&e[i].filename_disk)t.images||(t.images={}),t.images[i].image=oi+e[i].id;else if(e[i]&&e[i].length&&"string"!=typeof e[i]&&e[i][0].filename_disk){t.images||(t.images={}),t.images[i]=[];let n=0;e[i].forEach((a=>{e[i][n]&&e[i][n].filename_disk&&(t.images[i][n]={}),e[i][n]&&"icons"===i&&Object.keys(e[i]).forEach((n=>{t.images[i]={},t.images[i][e[i].name]={},t.images[i][e[i].name].image=ri+e[i].icon})),e[i][n]&&e[i][n].sort&&(t.images[i][n].sort=e[i][n].sort),e[i][n]&&e[i][n].directus_files_id?t.images[i][n].image=oi+e[i][n].directus_files_id:e[i][n].filename_disk&&e[i][n].id&&(t.images[i][n].image=oi+e[i][n].id),n++})),console.log(i),console.log(e[i])}else e[i]&&"string"!=typeof e[i]&&e[i][Object.keys(e[i])[0]]&&e[i][Object.keys(e[i])[0]].filename_disk?(console.log(i),console.log(e[i]),t.images||(t.images={}),t.images[i]={},Object.keys(e[i]).forEach((n=>{e[i][n].filename_disk&&(t.images[i][n]={}),e[i][n].sort&&null!==e[i][n].sort&&(t.images[i][n].sort=e[i][n].sort),e[i][n].directus_files_id?t.images[i][n].image=oi+e[i][n].directus_files_id:e[i][n].filename_disk&&e[i][n].id&&(t.images[i][n].image=oi+e[i][n].id)}))):e[i]&&(t.text||(t.text={}),t.text[i]=e[i])})),t},async getData(){let e=await li.items("site").read({fields:["*.directus_files_id","*.icon.*","*.*"]}),{siteId:t,...i}=e.data;i=this.formatData(i),this.data.site=i;let n=await li.items("icons").read(),{iconsId:a,...s}=n.data;this.data.icons=[],Object.keys(s).forEach((e=>{this.data.icons=this.formatData(s)}));let r=await li.items("social_links").read({fields:["*.directus_files_id","*.icon.icon.directus_files_id"],sort:"sort"}),{socialLinksId:o,...l}=r.data;this.data.socialLinks=[],Object.keys(l).forEach((e=>{this.data.socialLinks=this.data.socialLinks.concat(l[e]),this.data.socialLinks[e].icon=this.data.socialLinks[e].icon.icon}));let c=await li.items("home").read({fields:["*.*","*.icon.*"]}),{homeId:d,...h}=c.data;h=this.formatData(h),this.data.home=h;let u=await li.items("skills").read({fields:["*.*","*.icon.*"]}),{skillsId:g,...p}=u.data;this.data.skills=[],Object.keys(p).forEach((e=>{this.data.skills=this.data.skills.concat(this.formatData(p[e]))}));let m=await li.items("portfolio_items").read({fields:["*","*.directus_files_id"]}),{portfolioItemsId:f,...v}=m.data;this.data.portfolioItems=[],Object.keys(v).forEach((e=>{this.data.portfolioItems=this.data.portfolioItems.concat(this.formatData(v[e]))})),console.log(u)},render(){this.html(ai||(ai=si`
        <main class="u-transparent">

          <c-top-bar>
            <a
              slot="logo"
              href="/"
              title="Home"
            >
              <object
                type="image/svg+xml"
                data=${0}
                class="u-theme-fill" width="30" height="24"
              >
              </object>
            </a>
            <a
              slot="link"
              href="mailto:mrdavidbwaters@gmail.com"
              title="Email"
            >
              <i class="c-icon c-icon--mail"></i>
            </a>
            <a
              slot="link"
              href="https://twitter.com/dbwatersdesigns"
              title="Twitter"
            >
              <i class="c-icon c-icon--twitter"></i>
            </a>
            <a
              slot="link"
              href="https://dribbble.com/dbwatersdesigns"
              title="Dribbble"
            >
              <i class="c-icon c-icon--dribbble"></i>
            </a>
            <a
              slot="link"
              href="https://github.com/davidbwaters"
              title="Github"
            >
              <i class="c-icon c-icon--github"></i>
            </a>
            <a
              slot="link"
              href="https://www.npmjs.com/~davidbwaters"
              title="NPM"
            >
              <i class="c-icon c-icon--npm"></i>
            </a>
          </c-top-bar>

          <c-hero
            class="u-bg-noise"
            data-preload
            id="hero"
          >
            <div slot="tagline">
              Artist & <br />
              Designer & <br />
              Developer
            </div>
            <div slot="name-stylized">DAVIDBWATERS</div>
            <div slot="heading">
              Building digital solutions to promote growth.
              <c-squiggle></c-squiggle>
            </div>
            <c-theme-switch slot="footer-box-left">
              <i class="c-icon c-icon--switch"></i>
            </c-theme-switch>
            <div slot="footer-content-left">
              <a
                class="c-icon c-icon--hand u-animation-wave u-text-large-2 u-margin-bottom-0"
                href="mailto:mrdavidbwaters@gmail.com"
                title="Get in Touch!"
              ></a>
              <span> Available Now! </span>
            </div>
            <div slot="footer-content-right">
              <a
                class="c-button"
                href="mailto:mrdavidbwaters@gmail.com"
              >
                Contact
              </a>
              <span>
                Start
                <span class="u-hidden@small">Your</span>
                Project!
              </span>
            </div>
            <div slot="footer-box-right">
              <a
                class="
                  c-icon
                  c-icon--arrow-down
                "
                href="#skills"
              ></a>
            </div>
            <hr slot="bottom" class="u-separator" />
          </c-hero>

          <section id="skills">
            <c-section-header class="u-bg-noise">
              <div slot="title">
                Skills
                <c-squiggle></c-squiggle>
              </div>
              <div slot="description">
                Skills, tools of the trade, and technologies I
                enjoy working with.
              </div>
            </c-section-header>
            <ul class="c-skill-list">
              <li class="c-skill-list__skill">
                <img
                  class="c-skill-list__image"
                  src="images/Elephant.png"
                  alt="Elephant"
                />
                <div class="c-skill-list__text">
                  <h4 class="c-skill-list__title u-text-title">
                    Web Platform
                  </h4>
                  <span class="c-skill-list__gap"></span>
                  <span class="c-skill-list__number u-text-title"
                    >01</span
                  >
                  <span class="c-skill-list__description">
                    Web Components, Applications, #UseThePlatform
                  </span>
                </div>
              </li>
              <li class="c-skill-list__skill">
                <img
                  class="c-skill-list__image"
                  src="images/Lion.png"
                  alt="Lion"
                />
                <div class="c-skill-list__text">
                  <h4 class="c-skill-list__title u-text-title">
                    Design
                  </h4>
                  <span class="c-skill-list__gap"></span>
                  <span class="c-skill-list__number u-text-title"
                    >02</span
                  >
                  <span class="c-skill-list__description">
                    Figma, Sketch, Adobe CS**
                  </span>
                </div>
              </li>
              <li class="c-skill-list__skill">
                <img
                  class="c-skill-list__image"
                  src="images/Squirrel.png"
                  alt="Squirrel"
                />
                <div class="c-skill-list__text">
                  <h4 class="c-skill-list__title u-text-title">
                    Development
                  </h4>
                  <span class="c-skill-list__gap"></span>
                  <span class="c-skill-list__number u-text-title"
                    >03</span
                  >
                  <span class="c-skill-list__description">
                    JS/ES*, Node.js, Jamstack
                  </span>
                </div>
              </li>
              <li class="c-skill-list__skill">
                <img
                  class="c-skill-list__image"
                  src="images/Camel.png"
                  alt="Camel"
                />
                <div class="c-skill-list__text">
                  <h4 class="c-skill-list__title u-text-title">
                    Consultation
                  </h4>
                  <span class="c-skill-list__gap"></span>
                  <span class="c-skill-list__number u-text-title"
                    >04</span
                  >
                  <span class="c-skill-list__description">
                    Not sure where to start? I can help!
                  </span>
                </div>
              </li>
            </ul>
            <hr class="u-separator-alternate" />
          </section>

          <section id="work">
            <c-section-header class="u-bg-noise u-z-index-3">
              <div slot="title">
                Selected <br />
                Works
                <c-squiggle></c-squiggle>
              </div>
              <div slot="description">
                A curated list of projects worked on and things I
                built.
              </div>
            </c-section-header>

            <ul
              class="
              c-work-list
              u-bg-pattern-diagonal
            "
            >

              <li class="c-work-list__item">
                <div data-sticky class="c-work-list__item-info">
                  <div class="c-work-list__item-info-inner">
                    <h4 class="c-work-list__item-info-title">
                      macOS Modern
                    </h4>
                    <div
                      class="
                        c-work-list__item-info-taglist
                        u-text-title
                      "
                    >
                      Techologies Used: Frontend Development
                    </div>
                    <div
                      class="
                        c-work-list__item-info-description
                      "
                    >
                      <p>
                        A popular Visual Studio Code theme to match
                        native macOS.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="
                    c-work-list__item-preview
                    u-cursor-zoom-in"
                  data-modal-target="modal-macos-modern"
                >
                  <c-glitch-image
                    src="images/Work/macOS-Modern-All.jpg"
                    alt="macOS Modern Light Theme Screenshot"
                    glitch=2
                    width="800"
                    height="600"
                  >
                  </c-glitch-image>
                  <c-glitch-image
                    src="images/Work/macOS-Modern-Dark-1.jpg"
                    alt="macOS Modern Dark Theme Screenshot"
                    glitch=2
                    width="800"
                    height="600"
                  >
                  </c-glitch-image>
                </div>
                <div class="c-work-list__item-lower-three">
                  <a
                    class="c-button"
                    href="https://github.com/davidbwaters/macos-modern-vscode-theme"
                    title="macOS Modern Github Repo Link"
                  >
                    <i
                      class="
                        c-icon
                        c-icon--github
                      "
                    ></i>
                    Star on Github
                  </a>

                  <button
                    class="c-button"
                    data-modal-target="modal-macos-modern"
                    data-modal-trigger-primary
                  >
                    <i
                      class="
                        c-icon
                        c-icon--expand
                      "
                    ></i>
                    Show More
                  </button>

                  <a
                    class="c-button"
                    href="https://marketplace.visualstudio.com/items?itemName=davidbwaters.macos-modern-theme"
                    title="VSCode Market Link"
                  >
                    <i
                      class="
                        c-icon
                        c-icon--microsoft
                      "
                    ></i>
                    VSC Market Link
                  </a>

                  <c-modal
                    data-modal-trigger="modal-macos-modern"
                  >
                    <c-section-header
                      class="u-bg-noise u-z-index-3"
                    >
                      <div slot="title">
                        macOS Modern
                        <c-squiggle></c-squiggle>
                      </div>
                      <div slot="description" class="u-text-title">
                          Techologies Used: Frontend Development
                      </div>
                    </c-section-header>

                    <div
                      class="
                      c-media-grid
                      u-bg-pattern-diagonal-alternate
                    "
                    >
                      <article
                        class="c-media-grid__text-item-wide"
                      >
                        <p>
                          I created the macOS Modern Visual Studio
                          Code theme to enable users to experience
                          the best code editor while maintaining a
                          native-like look and feel.
                        </p>
                        <p>
                          The theme includes multiple icon sets
                          and a matching light and dark app icon.
                        </p>
                        <p>
                          At the time of this writing, it has over
                          22 thousand installs.
                        </p>
                      </article>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=1
                          href="images/Work/macOS-Modern-All.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/macOS-Modern-All.jpg"
                            alt="macOS Modern All Color Schemes"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=1
                          href="images/Work/macOS-Modern-Light-1.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/macOS-Modern-Light-1.jpg"
                            alt="macOS Modern Light 1"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=1
                          href="images/Work/macOS-Modern-Dark-1.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/macOS-Modern-Dark-1.jpg"
                            alt="macOS Modern Dark 1"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=1
                          href="images/Work/macOS-Modern-Light-2.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/macOS-Modern-Light-2.jpg"
                            alt="macOS Modern Light 2"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=1
                          href="images/Work/macOS-Modern-Dark-2.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/macOS-Modern-Dark-2.jpg"
                            alt="macOS Modern Dark 2"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=1
                          href="images/Work/macOS-Modern-Icons.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/macOS-Modern-Icons.jpg"
                            alt="macOS Modern App Icons"
                          />
                        </a>
                      </div>
                    </div>
                  </c-modal>
                </div>
              </li>

              <li class="c-work-list__item">
                <div data-sticky class="c-work-list__item-info">
                  <div class="c-work-list__item-info-inner">
                    <h4 class="c-work-list__item-info-title">
                      Limber Logic Brand Identity
                    </h4>
                    <div
                      class="
                        c-work-list__item-info-taglist
                        u-text-title
                      "
                    >
                      Techologies Used: Adobe Illustrator
                    </div>
                    <div
                      class="
                        c-work-list__item-info-description
                      "
                    >
                      <p>
                        I created the brand identity for Limber
                        Logic, a digital product design company
                        in Charleston.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="
                    c-work-list__item-preview
                    u-cursor-zoom-in"
                  data-modal-target="modal-limber-logic"
                >
                  <c-glitch-image
                    src="images/Work/Limber-Logic-Mockup-1-Dark.jpg"
                    alt="Limber Logic Logo Mockup 1 Dark"
                    glitch=2
                    width="800"
                    height="600"
                  >
                  </c-glitch-image>
                  <c-glitch-image
                      src="images/Work/Limber-Logic-Both.svg"
                      alt="Limber Logic Logo Dark and Light Versions"

                      glitch=2
                      width="800"
                      height="600"
                    >
                  </c-glitch-image>
                </div>
                <div class="c-work-list__item-lower">

                  <button
                    class="c-button"
                    data-modal-target="modal-limber-logic"
                    data-modal-trigger-primary
                  >
                    <i
                      class="
                        c-icon
                        c-icon--expand
                      "
                    ></i>
                    Show More
                  </button>

                  <c-modal
                    data-modal-trigger="modal-limber-logic"
                  >
                    <c-section-header
                      class="u-bg-noise u-z-index-3"
                    >
                      <div slot="title">
                        Limber Logic Identity
                        <c-squiggle></c-squiggle>
                      </div>
                      <div slot="description" class="u-text-title">
                        Techologies Used: Adobe Illustrator
                      </div>
                    </c-section-header>

                    <div
                      class="
                      c-media-grid
                      u-bg-pattern-diagonal-alternate
                    "
                    >
                      <article
                        class="c-media-grid__text-item-wide"
                      >
                        <p>
                          I created the brand identity for
                          Limber Logic, a digital product design
                          company in Charleston. I wanted the
                          branding to have a sleek, techy,
                          aesthetic.
                        </p>
                        <p>
                          Limber Logic was the collaboration of
                          my friend as Lead Developer and me as
                          Lead Designer. We worked on various
                          projects and I learned a lot in my
                          time there.
                        </p>
                      </article>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=2
                          href="images/Work/Limber-Logic-Light.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Limber-Logic-Light.jpg"
                            alt="Limber Logic Logo Light"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=2
                          href="images/Work/Limber-Logic-Dark.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Limber-Logic-Dark.jpg"
                            alt="Limber Logic Logo Dark"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=2
                          href="images/Work/Limber-Logic-Mockup-1-Dark.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Limber-Logic-Mockup-1-Dark.jpg"
                            alt="Limber Logic Mockup Dark"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=2
                          href="images/Work/Limber-Logic-Mockup-1-Light.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Limber-Logic-Mockup-1-Light.jpg"
                            alt="Limber Logic Mockup Light"
                          />
                        </a>
                      </div>
                    </div>
                  </c-modal>
                </div>
              </li>

              <li class="c-work-list__item">
                <div data-sticky class="c-work-list__item-info">
                  <div class="c-work-list__item-info-inner">
                    <h4 class="c-work-list__item-info-title">
                      Map Dashboard
                    </h4>
                    <div
                      class="
                        c-work-list__item-info-taglist u-text-title
                      "
                    >
                      Techologies Used: Figma, Javascript, React
                    </div>
                    <div
                      class="c-work-list__item-info-description"
                    >
                      <p>
                        UI created for an in-development web and
                        mobile app for land developers.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="
                    c-work-list__item-preview
                    u-cursor-zoom-in
                  "
                  data-modal-target="modal-map-dashboard"
                >
                  <c-glitch-image
                    src="images/Work/Map-Browser.jpg"
                    alt="Map Dashboard in a Browser"
                    glitch=2
                    width="912"
                    height="712"
                  >
                  </c-glitch-image>
                  <c-glitch-image
                    src="images/Work/Map-Figma.jpg"
                    alt="Map Dashboard in Figma"
                    glitch=2
                    width="912"
                    height="712"
                  >
                  </c-glitch-image>
                </div>

                <div class="c-work-list__item-lower">
                  <button
                    class="c-button c-button--block"
                    data-modal-target="modal-map-dashboard"
                    data-modal-trigger-primary
                  >
                    <i
                      class="
                        c-icon
                        c-icon--expand
                      "
                    ></i>
                    Show More
                  </button>

                  <c-modal data-modal-trigger="modal-map-dashboard">
                    <c-section-header
                      class="u-bg-noise u-z-index-3"
                    >
                      <div slot="title">
                        Map Dashboard
                        <c-squiggle></c-squiggle>
                      </div>
                      <div slot="description" class="u-text-title">
                          Techologies Used: Figma, Javascript, React
                      </div>
                    </c-section-header>
                    <div
                      class="c-media-grid u-bg-pattern-diagonal-alternate"
                    >
                      <article
                        class="c-media-grid__text-item-wide"
                      >
                        <p>
                          These shots were created for an
                          in-development web and mobile app
                          for land developers.
                        </p>
                        <p>
                          I was recruited to improve the overall
                          user experience and help design the map
                          interface. I used Figma to create
                          wireframes, mockups, and a component
                          system.
                        </p>
                        <p>
                          I also helped the team refine the
                          React-based frontend during a sprint
                          before a deadline.
                        </p>
                      </article>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=3
                          href="images/Work/Map-Browser.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Map-Browser.jpg"
                            alt="Map Dashboard in Browser"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=3
                          href="images/Work/Map-Components.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Map-Components.jpg"
                            alt="Map Dashboard Components"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=3
                          href="images/Work/Map-Figma.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Map-Figma.jpg"
                            alt="Map Dashboard Figma Project"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=3
                          href="images/Work/Map-Wireframe.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Map-Wireframe.jpg"
                            alt="Map Dashboard Mockup"
                          />
                        </a>
                      </div>
                    </div>
                  </c-modal>
                </div>
              </li>

              <li class="c-work-list__item">
                <div></div>
                <div data-sticky class="c-work-list__item-info">
                  <div class="c-work-list__item-info-inner">
                    <h4 class="c-work-list__item-info-title">
                      Personal Branding
                    </h4>
                    <div
                      class="
                        c-work-list__item-info-taglist u-text-title
                      "
                    >
                      Techologies Used: Adobe Illustrator
                    </div>
                    <div
                      class="c-work-list__item-info-description"
                    >
                      <p>
                        Collection of logo variations created as
                        part of a personal branding update.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="c-work-list__item-preview u-cursor-zoom-in"
                  data-modal-target="modal-logos"
                >
                  <c-glitch-image
                    src="images/Work/Personal-Branding-Mockup-1.jpg"
                    alt="Personal Branding VHS Mockup"
                    glitch=2
                    width="912"
                    height="712"
                  >
                  </c-glitch-image>
                  <c-glitch-image
                    src="images/Work/Personal-Branding-All-2.jpg"
                    alt="Personal Branding Logos Dark BG"
                    glitch=2
                    width="912"
                    height="712"
                  >
                  </c-glitch-image>
                </div>

                <div class="c-work-list__item-lower">
                  <button
                    class="c-button c-button--block"
                    data-modal-target="modal-logos"
                    data-modal-trigger-primary
                  >
                    <i
                      class="
                        c-icon
                        c-icon--expand
                      "
                    ></i>
                    Show More
                  </button>

                  <c-modal data-modal-trigger="modal-logos">
                    <c-section-header
                      class="u-bg-noise u-z-index-3"
                    >
                      <div slot="title">
                        Personal Branding
                        <c-squiggle></c-squiggle>
                      </div>
                      <div slot="description" class="u-text-title">
                          Techologies Used: Adobe Illustrator
                      </div>
                    </c-section-header>
                    <div
                      class="c-media-grid u-bg-pattern-diagonal-alternate"
                    >
                      <article
                        class="c-media-grid__text-item-wide"
                      >
                        <p>
                          This is a collection of logo variations
                          created as part of a personal branding
                          update.
                        </p>
                        <p>
                          This project was a great exercise in
                          using the process of rapid iteration to
                          develop a final product.
                        </p>
                      </article>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=4
                          href="images/Work/Personal-Branding-Mockup-1.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Personal-Branding-Mockup-1.jpg"
                            alt="Personal Branding VHS Mockup"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=4
                          href="images/Work/Personal-Branding-Mockup-2.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Personal-Branding-Mockup-2.jpg"
                            alt="Personal Branding Stamp Mockup"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=4
                          href="images/Work/Personal-Branding-All-1.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Personal-Branding-All-1.jpg"
                            alt="All Personal Branding Logos Dark"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=4
                          href="images/Work/Personal-Branding-All-2.jpg"
                        >
                        <img
                          class="c-media-grid__image"
                          src="images/Work/Personal-Branding-All-2.jpg"
                          alt="All Personal Branding Logos Light"
                        />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=4
                          href="images/Work/Personal-Branding-Logo-Final.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Personal-Branding-Logo-Final.jpg"
                            alt="Selected Personal Branding Logo"
                          />
                        </a>
                        <span
                          class="c-media-grid__image-caption-alternate"
                        >
                          This was the version I ended up using.
                        </span>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=4
                          href="images/Work/Personal-Branding-Logo-Alt-1.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Personal-Branding-Logo-Alt-1.jpg"
                            alt="Personal Branding Alternate Logo 1"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=4
                          href="images/Work/Personal-Branding-Logo-Alt-2.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Personal-Branding-Logo-Alt-2.jpg"
                            alt="Personal Branding Alternate Logo 2"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=4
                          href="images/Work/Personal-Branding-Logo-Alt-3.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Personal-Branding-Logo-Alt-3.jpg"
                            alt="Personal Branding Alternate Logo 3"
                          />
                        </a>
                      </div>
                    </div>

                  </c-modal>
                </div>
              </li>

              <li class="c-work-list__item">
                <div data-sticky class="c-work-list__item-info">
                  <div class="c-work-list__item-info-inner">
                    <h4 class="c-work-list__item-info-title">
                      Substructure ITCSS Framework
                    </h4>
                    <div
                      class="
                        c-work-list__item-info-taglist
                        u-text-title
                      "
                    >
                      Techologies Used: CSS/SASS, BEM, ITCSS, Lerna
                    </div>
                    <div
                      class="
                        c-work-list__item-info-description
                      "
                    >
                      <p>
                        My modular CSS boilerplate inspired by
                        the work of Harry Roberts and others
                        with modern features sprinkled in.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="
                    c-work-list__item-preview
                    u-bg-color-muted"
                >
                  <c-glitch-image
                    src="images/Work/Substructure-Text.svg"
                    alt="Substructure Text Logo"
                    class="
                      u-max-width-30
                    "
                    glitch=2
                    width="800"
                    height="600"
                  >
                  </c-glitch-image>
                  <c-glitch-image
                    src="images/Work/Substructure-Shot.jpg"
                    alt="Substructure Code Editor Screenshot"
                    class="
                      u-max-width-30
                    "
                    glitch=2
                    width="800"
                    height="600"
                  >
                  </c-glitch-image>
                </div>
                <div class="c-work-list__item-lower">
                  <a
                    class="c-button"
                    href="https://github.com/davidbwaters/substructure"
                    title="Substructure Github Repo Link"
                  >
                    <i
                      class="
                        c-icon
                        c-icon--github
                      "
                    ></i>
                    Star on Github
                  </a>
                  <a
                    class="c-button"
                    href="https://www.npmjs.com/settings/substructure/packages"
                    title="Substructure NPM Link"
                  >
                    <i
                      class="
                        c-icon
                        c-icon--npm
                      "
                    ></i>
                    NPM Packages
                  </a>
                </div>
              </li>

              <li class="c-work-list__item">
                <div data-sticky class="c-work-list__item-info">
                  <div class="c-work-list__item-info-inner">
                    <h4 class="c-work-list__item-info-title">
                      Yippy Clipboard Manager
                    </h4>
                    <div
                      class="
                        c-work-list__item-info-taglist
                        u-text-title
                      "
                    >
                      Techologies Used: Figma, Adobe Illustrator
                    </div>
                    <div
                      class="
                        c-work-list__item-info-description
                      "
                    >
                      <p>
                        I contributed app and UI icons to an
                        open-source clipboard manager for macOS
                        made by Matt Davidson.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="
                    c-work-list__item-preview
                    u-cursor-zoom-in
                  "
                  data-modal-target="modal-yippy"
                >
                  <c-glitch-image
                    src="images/Work/Yippy-1.jpg"
                    alt="Yippy Icon for macOS Big Sur"
                    glitch=2
                    width="800"
                    height="600"
                  >
                  </c-glitch-image>
                  <c-glitch-image
                    src="images/Work/Yippy-Menu-Bar.jpg"
                    alt="Yippy Menu Bar Icon"
                    glitch=2
                    width="800"
                    height="600"
                  >
                  </c-glitch-image>
                </div>
                <div class="c-work-list__item-lower">
                  <a
                    class="c-button"
                    href="https://github.com/mattDavo/Yippy"
                    title="Yippy Github Repo Link"
                  >
                    <i
                      class="
                        c-icon
                        c-icon--github
                      "
                    ></i>
                    Star on Github
                  </a>
                  <button
                    class="c-button"
                    data-modal-target="modal-yippy"
                    data-modal-trigger-primary
                  >
                    <i
                      class="
                        c-icon
                        c-icon--expand
                      "
                    ></i>
                    Show More
                  </button>

                  <c-modal
                    data-modal-trigger="modal-yippy"
                  >
                    <c-section-header
                      class="u-bg-noise u-z-index-3"
                    >
                      <div slot="title">
                        macOS Modern
                        <c-squiggle></c-squiggle>
                      </div>
                      <div slot="description" class="u-text-title">
                        Techologies Used: Figma, Adobe Illustrator
                      </div>
                    </c-section-header>

                    <div
                      class="
                      c-media-grid
                      u-bg-pattern-diagonal-alternate
                    "
                    >
                      <article
                        class="c-media-grid__text-item-wide"
                      >
                        <p>
                          I contributed icons to an
                          open-source clipboard manager for
                          macOS made by Matt Davidson.
                        </p>
                        <p>
                          I created a menu bar icon and three
                          reversions of the app icon, included an
                          updated version for macOS Big Sur.
                          This project adheres to Apple's design
                          guidelines.
                        </p>
                      </article>
                      <div class="c-media-grid__image-item">
                        <img
                          class="c-media-grid__image"
                          src="images/Work/Yippy-1.jpg"
                          alt="Yippy Big Sur Icon"
                        />
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=5
                          href="images/Work/Yippy-Menu-Bar.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Yippy-Menu-Bar.jpg"
                            alt="Yippy Menu Bar Icon"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=5
                          href="images/Work/Yippy-2.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Yippy-2.jpg"
                            alt="Yippy Updated Icon"
                          />
                        </a>
                      </div>
                      <div class="c-media-grid__image-item">
                        <a
                          data-glightbox
                          data-gallery=5
                          href="images/Work/Yippy-3.jpg"
                        >
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Yippy-3.jpg"
                            alt="Yippy Original Icon"
                          />
                        </a>
                      </div>
                    </div>
                  </c-modal>
                </div>
              </li>

              <!--
                <li class="c-work-list__item">
                  <div data-sticky class="c-work-list__item-info">
                    <div class="c-work-list__item-info-inner">
                      <h4 class="c-work-list__item-info-title">
                        Artwork
                      </h4>
                      <div
                        class="
                          c-work-list__item-info-taglist
                          u-text-title
                        "
                      >
                        Techologies Used: Adobe Photoshop, Adobe Illustrator, Figma, Blender
                      </div>
                      <div
                        class="
                          c-work-list__item-info-description
                        "
                      >
                        <p>
                          Miscellaneous digital art.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    class="
                      c-work-list__item-preview
                      u-cursor-zoom"
                    data-modal-target="modal-artwork"
                  >
                    <c-glitch-image
                      src="images/Work/Art Me.jpg"
                      alt="Artwork Me"
                      class="
                        u-max-width-30
                      "
                      glitch=2
                      width="1024"
                      height="1024"
                    >
                    </c-glitch-image>
                    <c-glitch-image
                      src="images/Work/Art Melted.jpg"
                      alt="Artwork Melted"
                      glitch=2
                      width="1024"
                      height="1024"
                    >
                    </c-glitch-image>
                  </div>
                  <div class="c-work-list__item-lower">
                    <button
                      class="c-button"
                      data-modal-target="modal-artwork"
                      data-modal-trigger-primary
                    >
                      <i
                        class="
                          c-icon
                          c-icon--expand
                        "
                      ></i>
                      Show More
                    </button>

                    <c-modal
                      data-modal-trigger="modal-artwork"
                    >
                      <c-section-header
                        class="u-bg-noise u-z-index-3"
                      >
                        <div slot="title">
                          Artwork
                          <c-squiggle></c-squiggle>
                        </div>
                        <div slot="description" class="u-text-title">
                          Techologies Used: Adobe Photoshop,
                          Adobe Illustrator, Figma, Blender
                        </div>
                      </c-section-header>

                      <div
                        class="
                        c-media-grid
                        u-bg-pattern-diagonal-alternate
                      "
                      >
                        <div class="c-media-grid__image-item">
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Art Chuck 1.jpg"
                            alt="Artwork Charleston 1"
                          />
                        </div>
                        <div class="c-media-grid__image-item">
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Art Chuck 2.jpg"
                            alt="Artwork Charleston 2"
                          />
                        </div>
                        <div class="c-media-grid__image-item">
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Art Melted.jpg"
                            alt="Artwork Abstract Melted"
                          />
                        </div>
                        <div class="c-media-grid__image-item">
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Art Me.jpg"
                            alt="Artwork Me Abstract"
                          />
                        </div>
                        <div class="c-media-grid__image-item">
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Art Statue.jpg"
                            alt="Artwork Statue"
                          />
                        </div>
                        <div class="c-media-grid__image-item">
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Art Pyramids.jpg"
                            alt="Artwork Pyramics"
                          />
                        </div>
                        <div class="c-media-grid__image-item">
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Art Vapor.jpg"
                            alt="Artwork Vaporwave"
                          />
                        </div>
                        <div class="c-media-grid__image-item">
                          <img
                            class="c-media-grid__image"
                            src="images/Work/Art Church.jpg"
                            alt="Artwork Church"
                          />
                        </div>
                      </div>
                    </c-modal>

                  </div>
                </li>
              -->
            </ul>
          </section>

          <footer class="c-page-footer u-bg-noise">
            <hr class="u-separator-alternate u-margin-0" />
            <div class="c-page-footer__upper u-text-large-1">
              Made with <3 by David B Waters in 2020.
            </div>
            <div class="c-page-footer__lower">
              <small class="u-text-bolder">
                This site's source code is freely available under
                the MIT license
                <a
                  href="https://github.com/davidbwaters/davidbwaters.github.io"
                  title="This Site's Github Repo Link"
                >here</a>.
                <br>
                Stay tuned! It's still very much a
                work in progress.
              </small>
            </div>
          </footer>


          <c-loader>
            <div class="u-bg-noise-heavy">
              <c-glitch-image
                src="images/Loader.svg"
                active
                glitch=1
                width="100"
                height="100"
              >
              </c-glitch-image>
            </div>
          </c-loader>

        </main>
      `),this.data.logo)}})}));let ci,di,hi=e=>e;ii("uce-lib").then((({define:e,css:t})=>{e("c-canvas-noise",{styles:t(ci||(ci=hi`
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
    `)),init(){this.render();!function(e,t=12,i=28){new class{constructor(e){this.patternSize=200,this.patternScaleX=8,this.patternScaleY=8,this.patternRefreshInterval=t,this.patternAlpha=i,this.canvas=e,this.ctx=this.canvas.getContext("2d"),this.ctx.scale(this.patternScaleX,this.patternScaleY),this.patternCanvas=document.createElement("canvas"),this.patternCanvas.width=this.patternSize,this.patternCanvas.height=this.patternSize,this.patternCtx=this.patternCanvas.getContext("2d"),this.patternData=this.patternCtx.createImageData(this.patternSize,this.patternSize),this.patternPixelDataLength=this.patternSize*this.patternSize*4,this.resize=this.resize.bind(this),this.loop=this.loop.bind(this),this.frame=0,window.addEventListener("resize",this.resize),this.resize(),window.requestAnimationFrame(this.loop)}resize(){this.canvas.width=window.innerWidth*devicePixelRatio,this.canvas.height=window.innerHeight*devicePixelRatio}update(){const{patternPixelDataLength:e,patternData:t,patternAlpha:i,patternCtx:n}=this;for(let n=0;n<e;n+=4){const e=200*Math.random();t.data[n]=e,t.data[n+1]=e,t.data[n+2]=e,t.data[n+3]=i}n.putImageData(t,0,0)}draw(){const{ctx:e,patternCanvas:t,canvas:i,viewHeight:n}=this,{width:a,height:s}=i;e.clearRect(0,0,a,s),e.fillStyle=e.createPattern(t,"repeat"),e.fillRect(0,0,a,s)}loop(){++this.frame%this.patternRefreshInterval==0&&(this.update(),this.draw()),window.requestAnimationFrame(this.loop)}}(e)}(this.shadowRoot.querySelector(".c-canvas-noise__canvas"),12)},attachShadow:{mode:"open"},render(){this.html(di||(di=hi`
        <style>
          ${0}
        </style>
        <canvas class="c-canvas-noise__canvas">
        </canvas>
      `),this.styles)}})}));var ui=i(8),gi=i(48);class pi{constructor(e,t,i){this.scene=new ui.e,this.vertex="varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}",this.fragment=i.fragment,this.uniforms=i.uniforms,this.renderer=new ui.i,this.width=window.innerWidth,this.height=window.innerHeight,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.setClearColor(15658734,1),this.duration=i.duration||1,this.debug=i.debug||!1,this.easing=i.easing||"easeInOut",this.container=t,this.images=e,this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.container.appendChild(this.renderer.domElement),this.camera=new ui.c(70,window.innerWidth/window.innerHeight,.001,1e3),this.camera.position.set(0,0,2),this.time=0,this.current=0,this.textures=[],this.paused=!1,this.initiate((()=>{this.setupResize(),this.settings(),this.addObjects(),this.resize(),this.autoplay(),this.play()}))}initiate(e){const t=[];let i=this;this.images.forEach(((e,n)=>{let a=new Promise((t=>{i.textures[n]=(new ui.g).load(e,t)}));t.push(a)})),Promise.all(t).then((()=>{e()}))}autoplay(){setTimeout((()=>{this.paused||(this.next(),this.autoplay())}),this.duration)}settings(){this.settings={progress:.5},Object.keys(this.uniforms).forEach((e=>{this.settings[e]=this.uniforms[e].value}))}setupResize(){window.addEventListener("resize",this.resize.bind(this))}resize(){let e,t;this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.imageAspect=this.textures[0].image.height/this.textures[0].image.width,this.height/this.width>this.imageAspect?(e=this.width/this.height*this.imageAspect,t=1):(e=1,t=this.height/this.width/this.imageAspect),this.material.uniforms.resolution.value.x=this.width,this.material.uniforms.resolution.value.y=this.height,this.material.uniforms.resolution.value.z=e,this.material.uniforms.resolution.value.w=t;const i=this.camera.position.z;this.camera.fov=180/Math.PI*2*Math.atan(1/(2*i)),this.plane.scale.x=this.camera.aspect,this.plane.scale.y=1,this.camera.updateProjectionMatrix()}addObjects(){this.material=new ui.f({extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:ui.a,uniforms:{time:{type:"f",value:0},progress:{type:"f",value:0},border:{type:"f",value:0},intensity:{type:"f",value:0},scaleX:{type:"f",value:40},scaleY:{type:"f",value:40},transition:{type:"f",value:40},swipe:{type:"f",value:0},width:{type:"f",value:0},radius:{type:"f",value:0},texture1:{type:"f",value:this.textures[0]},texture2:{type:"f",value:this.textures[1]},displacement:{type:"f",value:(new ui.g).load("/images/Displacement-1.jpg")},resolution:{type:"v4",value:new ui.h}},vertexShader:this.vertex,fragmentShader:this.fragment}),this.geometry=new ui.d(1,1,2,2),this.plane=new ui.b(this.geometry,this.material),this.scene.add(this.plane)}stop(){this.paused=!0}play(){this.paused=!1,this.render()}reset(){this.current=0,this.time=0;let e=this.textures[0],t=this.textures[1];this.material.uniforms.texture1.value=e,this.material.uniforms.texture2.value=t,this.material.uniforms.progress.value=0,this.material.uniforms.time.value=0}next(){if(this.isRunning)return;this.isRunning=!0;let e=this.textures.length,t=this.textures[(this.current+1)%e];this.material.uniforms.texture2.value=t,gi.b.timeline().to(this.material.uniforms.progress,this.duration,{value:1,ease:gi.a[this.easing],onComplete:()=>{this.current=(this.current+1)%e,this.material.uniforms.texture1.value=t,this.material.uniforms.progress.value=0,this.isRunning=!1}})}render(){this.paused||(this.time+=.05,this.material.uniforms.time.value=this.time,Object.keys(this.uniforms).forEach((e=>{this.material.uniforms[e].value=this.settings[e]})),requestAnimationFrame(this.render.bind(this)),this.renderer.render(this.scene,this.camera))}}let mi,fi,vi=e=>e;ii("uce-lib").then((({define:e,css:t})=>{e("c-canvas-transition",{styles:t(mi||(mi=vi`
      :host {
        display: block;
        position: absolute;
      }
    `)),props:{theme:document.body.dataset.theme,darkImages:["/images/Hero-Paint-1-Dark.jpg","/images/Hero-Paint-2-Dark.jpg"],lightImages:["/images/Hero-Paint-1-Light.jpg","/images/Hero-Paint-2-Light.jpg"]},init(){this.html(fi||(fi=vi`
        <style>
          ${0}
        </style>
        <div class="c-canvas-transition__wrapper">
          <div
            class="c-canvas-transition__slider"
            data-displacement=""
          >
          </div>
        </div>
      `),this.styles),this.slider=this.shadowRoot.querySelector(".c-canvas-transition__slider"),this.addSketch()},addSketch(){this.images="light"===this.theme?this.lightImages:this.darkImages,this.sketch=new pi(this.images,this.slider,{duration:2,debug:!0,easing:"easeOut",uniforms:{width:{value:.5,type:"f",min:0,max:10},scaleX:{value:40,type:"f",min:.1,max:60},scaleY:{value:40,type:"f",min:.1,max:60}},fragment:"\n          uniform float time;\n          uniform float progress;\n          uniform sampler2D texture1;\n          uniform sampler2D texture2;\n          uniform vec4 resolution;\n          varying vec2 vUv;\n          varying vec4 vPosition;\n          void main()\t{\n            vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);\n            vec2 p = newUV;\n            float x = progress;\n            vec4 f = mix(\n              texture2D(texture1, p),\n              texture2D(texture2, p),\n              x);\n            gl_FragColor = f;\n          }\n        "})},updateImages(){this.theme=document.body.dataset.theme,this.images="light"===this.theme?this.lightImages:this.darkImages,this.sketch.images=this.images,this.sketch.textures=[],this.sketch.stop(),this.sketch.initiate((()=>{this.sketch.paused=!0,this.sketch.duration=.02,requestAnimationFrame((()=>{this.sketch.reset(),this.sketch.render()})),requestAnimationFrame((()=>{this.sketch.duration=2})),this.sketch.paused=!1}))},attachShadow:{mode:"open"},render(){console.log("ctr"),this.updateImages()}})}));let yi,bi,wi=e=>e;ii("uce-lib").then((({define:e,render:t,html:i,svg:n,css:a})=>{e("c-glitch-image",{styles:a(yi||(yi=wi`
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
    `)),props:{glitch:{type:String,attribute:!0},src:{type:String,attribute:!0},active:{type:Boolean,attribute:!0},aspectRatio:{type:Number},wrapper:{type:Object}},init(){this.glitch="1",this.active=!1,this.aspectRatio=1,this.render();const e=this.hasAttribute("width"),t=this.hasAttribute("height"),i=e&&t;if(this._wrapper=this.shadowRoot.querySelector(".c-glitch-image__inner"),this.active&&this._wrapper.querySelectorAll(".c-glitch-image__image").forEach((e=>{e.classList.add("is-glitching")})),this.classList.add("c-glitch-image--style-"+this.glitch),i){const e=this.getAttribute("width"),t=this.getAttribute("height");this.aspectRatio=e/t}this._wrapper.style.setProperty("--glitch-aspect-ratio",this.aspectRatio),this._wrapper.style.setProperty("--glitch-image",'url("'+this.src+'")')},attachShadow:{mode:"open"},render(){this.html(bi||(bi=wi`
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
      `),this.styles)}})}));let _i,xi,ki=e=>e;ii("uce-lib").then((({define:e,render:t,html:i,svg:n,css:a})=>{e("c-hero",{styles:a(_i||(_i=ki`
        * {
          box-sizing: border-box;
        }

        :host {
          --hero-image-me-dark: url('/images/Me-Dark.jpg');
          --hero-image-me-light: url('/images/Me-Light.jpg');
          --hero-image-paint-1-dark: url('/images/Hero-Paint-1-Dark.jpg');
          --hero-image-paint-1-light: url('/images/Hero-Paint-1-Light.jpg');
          --hero-image-paint-2-dark: url('/images/Hero-Paint-2-Dark.jpg');
          --hero-image-paint-2-light: url('/images/Hero-Paint-2-Light.jpg');

          display: grid;
          grid-template-rows: 4fr 5fr 4.5rem;
          height: 100%;
          max-height: 100%;
          min-height: 30rem;
          z-index: 2;
        }

        @media (min-width: 45em) {
          :host {
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
          font-size: clamp(1.25rem, 6.5vw, 4.25rem);
          line-height: 1.05;
          min-height: 0vw;
          text-transform: uppercase;
          width: auto;
        }

        @media (min-height: 35em) {
          .c-hero__tagline {
            line-height: 1.1;
            margin-top: 0.5rem;
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
          background-image: url('/images/Me-Dark.jpg');
          border-right: solid 1px var(--color-accent);

          filter: hue-rotate(-2deg);
          opacity: 0.9;
          position: relative;
        }

        .c-hero__me::before {
          background-blend-mode: luminosity;
          background-color: var(--color-bg-primary);
          background-image: url('/images/Me-Light.jpg');
          content: '';
          height: 100%;
          opacity: var(--theme-light-opacity);
          position: absolute;
          width: 100%;
        }

        .c-hero__name-stylized {
          background-image: linear-gradient(
            -45deg,
            var(--color-opaque) 0%,
            var(--color-opaque) 12.5%,
            transparent 12.51%,
            transparent 37.49%,
            var(--color-opaque) 37.5%,
            var(--color-opaque) 62.5%,
            transparent 62.51%,
            transparent 87.49%,
            var(--color-opaque) 87.5%,
            var(--color-opaque) 100%
          );
          background-position: 0 0;
          background-repeat: repeat;
          background-size: var(
              --bg-pattern-diagonal-tight-size
            )
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
          opacity: 0.05;
          position: absolute;
          width: 100%;
          z-index: -1;
        }

        .c-hero__name-stylized-letter {
          font-family: var(--font-accent), sans-serif;
          font-size: 0.8rem;
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
          column-gap: 0.5rem;
          display: grid;
          font-family: var(--font-main-regular), sans-serif;
          font-size: 0.6rem;
          justify-content: center;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
        }

        @media (min-width: 25em) {
          ::slotted([slot='footer-content-left']),
          ::slotted([slot='footer-content-right']) {
            column-gap: 0.75rem;
            font-family: var(--font-main-light), sans-serif;
            font-size: 0.8rem;
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
      `)),init(){this.render(),this._taglineSetup(),this._nameStylizedSetup();const e=this.render;this.addEventListener("themeChange",e)},props:{theme:document.body.dataset.theme},_taglineSetup(){const e=this.querySelector("[slot=tagline]").innerHTML.replaceAll("  ","").replaceAll("\n",""),t=e.split("<br>"),i=t.map(((e,i)=>{const n="<span data-scrambler>"+e+"</span>";return t.length-1===i?n:n+"<br>"})).join(""),n=[this.shadowRoot.querySelector(".c-hero__tagline-accent-1"),this.shadowRoot.querySelector(".c-hero__tagline-accent-2"),this.shadowRoot.querySelector(".c-hero__tagline-accent-3")];this.innerHTML+='<div slot="tagline-main">'+i+"</div>",n.map((t=>{t.innerHTML=e}))},_nameStylizedSetup(){const e=this.querySelector('[slot="name-stylized"').innerHTML.replaceAll(" ","").replaceAll("\n","").split("");this.shadowRoot.querySelector(".c-hero__name-stylized").innerHTML=e.map((e=>'<div class="c-hero__name-stylized-letter">'+e+"</div>")).join("")},attachShadow:{mode:"open"},render(){this.theme=document.body.dataset.theme,this.html(xi||(xi=ki`
        <style>
          ${0}
        </style>
        <div class="c-hero__upper">
          <div class="c-hero__paint-dark"></div>
          <div class="c-hero__paint-light"></div>
          <c-canvas-transition
            .theme=${0}
          >
          </c-canvas-transition>
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
          ">
            <div class="c-hero__me-light">
            </div>
          </div>
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
      `),this.styles,this.theme)}})}));let Si,Ei,Ai=e=>e;ii("uce-lib").then((({define:e,render:t,html:i,svg:n,css:a})=>{e("c-loader",{styles:a(Si||(Si=Ai`

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

    `)),init(){this.render()},disable(){const e=document.querySelector("main"),t=e.classList.contains("u-transparent");document.documentElement.style.position="",t&&e.classList.remove("u-transparent"),setTimeout((()=>{this.style.opacity=0,this.style.pointerEvents="none"}),800),setTimeout((()=>{this.style.display="none"}),2e3)},attachShadow:{mode:"open"},render(){this.html(Ei||(Ei=Ai`
        <style>
          ${0}
        </style>
        <slot>
        </slot>
      `),this.styles)}})}));var Ti=window.CustomEvent;function Li(e,t){var i="on"+t.type.toLowerCase();return"function"==typeof e[i]&&e[i](t),e.dispatchEvent(t)}function Ci(e){for(;e;){if("dialog"===e.localName)return e;e=e.parentElement?e.parentElement:e.parentNode?e.parentNode.host:null}return null}function Mi(e){for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;e&&e.blur&&e!==document.body&&e.blur()}function Ii(e,t){for(var i=0;i<e.length;++i)if(e[i]===t)return!0;return!1}function Pi(e){return!(!e||!e.hasAttribute("method"))&&"dialog"===e.getAttribute("method").toLowerCase()}function ji(e){var t=["button","input","keygen","select","textarea"].map((function(e){return e+":not([disabled])"}));t.push('[tabindex]:not([disabled]):not([tabindex=""])');var i=e.querySelector(t.join(", "));if(!i&&"attachShadow"in Element.prototype)for(var n=e.querySelectorAll("*"),a=0;a<n.length&&!(n[a].tagName&&n[a].shadowRoot&&(i=ji(n[a].shadowRoot)));a++);return i}function Oi(e){return e.isConnected||document.body.contains(e)}function Di(e){if(e.submitter)return e.submitter;var t=e.target;if(!(t instanceof HTMLFormElement))return null;var i=qi.formSubmitter;if(!i){var n=e.target;i=("getRootNode"in n&&n.getRootNode()||document).activeElement}return i&&i.form===t?i:null}function zi(e){if(!e.defaultPrevented){var t=e.target,i=qi.imagemapUseValue,n=Di(e);null===i&&n&&(i=n.value);var a=Ci(t);if(a)"dialog"===(n&&n.getAttribute("formmethod")||t.getAttribute("method"))&&(e.preventDefault(),null!=i?a.close(i):a.close())}}function Ri(e){if(this.dialog_=e,this.replacedStyleTop_=!1,this.openAsModal_=!1,e.hasAttribute("role")||e.setAttribute("role","dialog"),e.show=this.show.bind(this),e.showModal=this.showModal.bind(this),e.close=this.close.bind(this),e.addEventListener("submit",zi,!1),"returnValue"in e||(e.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(e,{attributes:!0,attributeFilter:["open"]})}else{var t,i=!1,n=function(){i?this.downgradeModal():this.maybeHideModal(),i=!1}.bind(this),a=function(a){if(a.target===e){var s="DOMNodeRemoved";i|=a.type.substr(0,s.length)===s,window.clearTimeout(t),t=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(t){e.addEventListener(t,a)}))}Object.defineProperty(e,"open",{set:this.setOpen.bind(this),get:e.hasAttribute.bind(e,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}Ti&&"object"!=typeof Ti||((Ti=function(e,t){t=t||{};var i=document.createEvent("CustomEvent");return i.initCustomEvent(e,!!t.bubbles,!!t.cancelable,t.detail||null),i}).prototype=window.Event.prototype),Ri.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Oi(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),qi.dm.removeDialog(this))},setOpen:function(e){e?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(e){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var i=document.createEvent("MouseEvents");i.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget),this.dialog_.dispatchEvent(i),e.stopPropagation()},focus_:function(){var e=this.dialog_.querySelector("[autofocus]:not([disabled])");!e&&this.dialog_.tabIndex>=0&&(e=this.dialog_),e||(e=ji(this.dialog_)),Mi(document.activeElement),e&&e.focus()},updateZIndex:function(e,t){if(e<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=e,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Oi(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!qi.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(e){for(;e&&e!==document.body;){var t=window.getComputedStyle(e),i=function(e,i){return!(void 0===t[e]||t[e]===i)};if(t.opacity<1||i("zIndex","auto")||i("transform","none")||i("mixBlendMode","normal")||i("filter","none")||i("perspective","none")||"isolate"===t.isolation||"fixed"===t.position||"touch"===t.webkitOverflowScrolling)return!0;e=e.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,qi.needsCentering(this.dialog_)?(qi.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(e){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==e&&(this.dialog_.returnValue=e);var t=new Ti("close",{bubbles:!1,cancelable:!1});Li(this.dialog_,t)}};var qi={reposition:function(e){var t=document.body.scrollTop||document.documentElement.scrollTop,i=t+(window.innerHeight-e.offsetHeight)/2;e.style.top=Math.max(t,i)+"px"},isInlinePositionSetByStylesheet:function(e){for(var t=0;t<document.styleSheets.length;++t){var i=document.styleSheets[t],n=null;try{n=i.cssRules}catch(e){}if(n)for(var a=0;a<n.length;++a){var s=n[a],r=null;try{r=document.querySelectorAll(s.selectorText)}catch(e){}if(r&&Ii(r,e)){var o=s.style.getPropertyValue("top"),l=s.style.getPropertyValue("bottom");if(o&&"auto"!==o||l&&"auto"!==l)return!0}}}return!1},needsCentering:function(e){return"absolute"===window.getComputedStyle(e).position&&(!("auto"!==e.style.top&&""!==e.style.top||"auto"!==e.style.bottom&&""!==e.style.bottom)&&!qi.isInlinePositionSetByStylesheet(e))},forceRegisterDialog:function(e){if((window.HTMLDialogElement||e.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",e),"dialog"!==e.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new Ri(e)},registerDialog:function(e){e.showModal||qi.forceRegisterDialog(e)},DialogManager:function(){this.pendingDialogStack=[];var e=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),e([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(t){var i=[];t.forEach((function(e){for(var t,n=0;t=e.removedNodes[n];++n)t instanceof Element&&("dialog"===t.localName&&i.push(t),i=i.concat(t.querySelectorAll("dialog")))})),i.length&&e(i)})))}};if(qi.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},qi.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},qi.DialogManager.prototype.updateStacking=function(){for(var e,t=this.zIndexHigh_,i=0;e=this.pendingDialogStack[i];++i)e.updateZIndex(--t,--t),0===i&&(this.overlay.style.zIndex=--t);var n=this.pendingDialogStack[0];n?(n.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},qi.DialogManager.prototype.containedByTopDialog_=function(e){for(;e=Ci(e);){for(var t,i=0;t=this.pendingDialogStack[i];++i)if(t.dialog===e)return 0===i;e=e.parentElement}return!1},qi.DialogManager.prototype.handleFocus_=function(e){var t=e.composedPath?e.composedPath()[0]:e.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(e.preventDefault(),e.stopPropagation(),Mi(t),void 0!==this.forwardTab_)){var i=this.pendingDialogStack[0];return i.dialog.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?i.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}},qi.DialogManager.prototype.handleKey_=function(e){if(this.forwardTab_=void 0,27===e.keyCode){e.preventDefault(),e.stopPropagation();var t=new Ti("cancel",{bubbles:!1,cancelable:!0}),i=this.pendingDialogStack[0];i&&Li(i.dialog,t)&&i.dialog.close()}else 9===e.keyCode&&(this.forwardTab_=!e.shiftKey)},qi.DialogManager.prototype.checkDOM_=function(e){this.pendingDialogStack.slice().forEach((function(t){-1!==e.indexOf(t.dialog)?t.downgradeModal():t.maybeHideModal()}))},qi.DialogManager.prototype.pushDialog=function(e){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=t)&&(1===this.pendingDialogStack.unshift(e)&&this.blockDocument(),this.updateStacking(),!0)},qi.DialogManager.prototype.removeDialog=function(e){var t=this.pendingDialogStack.indexOf(e);-1!==t&&(this.pendingDialogStack.splice(t,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},qi.dm=new qi.DialogManager,qi.formSubmitter=null,qi.imagemapUseValue=null,void 0===window.HTMLDialogElement){var Ni=document.createElement("form");if(Ni.setAttribute("method","dialog"),"dialog"!==Ni.method){var Bi=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(Bi){var Ui=Bi.get;Bi.get=function(){return Pi(this)?"dialog":Ui.call(this)};var Wi=Bi.set;Bi.set=function(e){return"string"==typeof e&&"dialog"===e.toLowerCase()?this.setAttribute("method",e):Wi.call(this,e)},Object.defineProperty(HTMLFormElement.prototype,"method",Bi)}}document.addEventListener("click",(function(e){if(qi.formSubmitter=null,qi.imagemapUseValue=null,!e.defaultPrevented){var t=e.target;if("composedPath"in e)t=e.composedPath().shift()||t;if(t&&Pi(t.form)){if(!("submit"===t.type&&["button","input"].indexOf(t.localName)>-1)){if("input"!==t.localName||"image"!==t.type)return;qi.imagemapUseValue=e.offsetX+","+e.offsetY}Ci(t)&&(qi.formSubmitter=t)}}}),!1),document.addEventListener("submit",(function(e){var t=e.target;if(!Ci(t)){var i=Di(e);"dialog"===(i&&i.getAttribute("formmethod")||t.getAttribute("method"))&&e.preventDefault()}}));var Hi=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!Pi(this))return Hi.call(this);var e=Ci(this);e&&e.close()}}var Yi=qi;let Xi,Fi,$i=e=>e;ii("uce-lib").then((({define:e,render:t,html:i,svg:n,css:a})=>{e("c-modal",{styles:a(Xi||(Xi=$i`
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
    `)),props:{open:{type:Boolean,attribute:!0}},init(){this.open=!1,this.render(),this._setup(),Yi.registerDialog(this._dialogEl),window.addEventListener("click",(e=>{e.target.closest("[data-modal-target="+this._triggerData+"]")&&this.showModal()}),!0),this.shadowRoot.addEventListener("click",(e=>{e.target.closest(".c-modal__back-button")&&this.close(),e.target.closest(".c-modal__close-button")&&this.close()})),this._dialogEl.classList.add("is-closed"),this.open?this.showModal():this._dialogEl.classList.add("is-closed")},_setup(){const e=window.getComputedStyle(this);this._documentEl=document.documentElement,this._triggerData=this.dataset.modalTrigger,this._triggerEl=document.querySelector("[data-modal-target="+this._triggerData+"][data-modal-trigger-primary]"),this._triggerParent=this._triggerEl.parentElement,this._dialogEl=this.shadowRoot.querySelector("dialog"),this._closeButtonEl=this._dialogEl.querySelector(".c-modal__close-button"),this._triggerDuration=1e3*parseFloat(e.getPropertyValue("--modal-trigger-transition-duration")),this._modalDuration=1e3*parseFloat(e.getPropertyValue("--modal-transition-duration"))},close(){this._handleClose()},_open(){this._triggerEl.classList.add("is-expanded"),this._triggerParent.style.zIndex="9",setTimeout((()=>{this.setAttribute("open",""),this._dialogEl.classList.remove("is-closed"),this._dialogEl.classList.add("is-opening"),this._documentEl.style.overflow="hidden",this._dialogEl.classList.remove("is-opening"),this._dialogEl.classList.add("is-open")}),this._triggerDuration)},showModal(){this._open()},_handleClose(){this.removeAttribute("open"),this._dialogEl.classList.remove("is-open"),this._dialogEl.classList.add("is-closing"),setTimeout((()=>{this._documentEl.style.overflow="",this._dialogEl.classList.remove("is-closing"),this._dialogEl.classList.add("is-closed"),this._triggerEl.classList.remove("is-expanded"),setTimeout((()=>{this._triggerParent.style.zIndex=""}),this._triggerDuration)}),this._modalDuration)},attachShadow:{mode:"open"},render(){this.html(Fi||(Fi=$i`
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
      `),this.styles)}})}));let Vi,Gi,Ki=e=>e;ii("uce-lib").then((({define:e,render:t,html:i,svg:n,css:a})=>{e("c-squiggle",{style:e=>a(Vi||(Vi=Ki`
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
    `),e),render(){this.html(Gi||(Gi=Ki`
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
      `))}})}));let Zi,Ji,Qi=e=>e;ii("uce-lib").then((({define:e,render:t,html:i,svg:n,css:a})=>{e("c-section-header",{styles:a(Zi||(Zi=Qi`
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
    `)),attachShadow:{mode:"open"},render(){this.html(Ji||(Ji=Qi`
        <style>
          ${0}
        </style>
        <slot name="title"> </slot>
        <slot name="description"> </slot>
      `),this.styles)}})}));let en,tn,nn=e=>e;ii("uce-lib").then((({define:e,render:t,html:i,svg:n,css:a})=>{e("c-theme-switch",{styles:a(en||(en=nn`
        * {
          box-sizing: border-box;
        }
        *::selection {
          background-color: transparent;
        }
        :host {
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
          column-gap: 0.4rem;
          cursor: pointer;
          display: grid;
          grid-auto-flow: column;
          justify-content: center;
          position: relative;
        }
        @media (min-width: 35em) {
          .c-theme-switch__label {
            column-gap: 0.5rem;
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
          border: solid var(--theme-switch-switch-border)
            1px;
          height: 1.8rem;
          width: 0.9rem;
        }
        @media (min-width: 35em) {
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
        @media (min-width: 35em) {
          ::slotted(i) {
            font-size: 0.75rem;
          }
        }
      `)),handleChange(){const e=document.body.dataset.theme;document.body.dataset.theme="dark"===e?"light":"dark",this.dispatchEvent(new CustomEvent("themeChange",{detail:{theme:document.body.dataset.theme},bubbles:!0,composed:!0}))},attachShadow:{mode:"open"},render(){this.html(tn||(tn=nn`
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
        `),this.styles,this.handleChange)}})}));let an,sn,rn=e=>e;ii("uce-lib").then((({define:e,render:t,html:i,svg:n,css:a})=>{e("c-top-bar",{styles:a(an||(an=rn`

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
    `)),attachShadow:{mode:"open"},render(){this.html(sn||(sn=rn`
        <style>
          ${0}
        </style>
        <slot name="logo"> </slot>
        <nav class="c-top-bar__nav">
          <slot name="link"> </slot>
        </nav>
      `),this.styles)}})}));const on=new de;!function(){const e=["background: #fff","border-bottom: solid 1px black","border-left: solid 1px black","border-top: solid 1px black","color: #666","line-height: 35px","padding: 10px 0px 10px 10px"].join(";"),t=["background: #fff","border-bottom: solid 1px black","border-top: solid 1px black","color: red","line-height: 35px","padding: 10px 5px 10px 0px","width: 300px"].join(";"),i=["background: #fff","border-bottom: solid 1px black","border-right: solid 1px black","border-top: solid 1px black","color: #666","line-height: 35px","padding: 10px 20px 10px 0px","width: 300px"].join(";");console.log("%c Coded with %c ♥️ %c https://davidbwaters.com",e,t,i)}(),Object(oe.a)({selector:"*[data-glightbox]",touchNavigation:!0,loop:!0,autoplayVideos:!0,openEffect:"fade",closeEffect:"fade",skin:"dbw"}),on.preload("/images/Loader.svg","/images/Me-Dark.jpg","/images/Me-Light.jpg","/images/Hero-Paint-1-Dark.jpg","/images/Hero-Paint-1-Light.jpg","/images/Hero-Paint-2-Dark.jpg","/images/Hero-Paint-2-Light.jpg","/images/Noise-Clear.svg").then((function(e){let t=document.querySelector("c-app");console.log(t.preload),t.preload().then((()=>{document.querySelector("c-loader").disable(),setTimeout((()=>{Ee({target:"[data-scrambler]",random:[1e3,1e3],speed:60})}),1500)}))}))}]),[[124,1,6,4,3,0]]]);