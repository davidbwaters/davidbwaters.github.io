/*! For license information please see 2.main.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],[function(t,e,i){(function(e){var i=function(t){return t&&t.Math==Math&&t};t.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof e&&e)||function(){return this}()||Function("return this")()}).call(this,i(43))},function(t,e,i){var n=i(0),o=i(45),r=i(4),a=i(30),s=i(48),l=i(61),c=o("wks"),h=n.Symbol,d=l?h:h&&h.withoutSetter||a;t.exports=function(t){return r(c,t)||(s&&r(h,t)?c[t]=h[t]:c[t]=d("Symbol."+t)),c[t]}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,i){var n=i(7),o=i(8),r=i(22);t.exports=n?function(t,e,i){return o.f(t,e,r(1,i))}:function(t,e,i){return t[e]=i,t}},function(t,e){var i={}.hasOwnProperty;t.exports=function(t,e){return i.call(t,e)}},,function(t,e,i){var n=i(0),o=i(58),r=i(59),a=i(3),s=i(1),l=s("iterator"),c=s("toStringTag"),h=r.values;for(var d in o){var u=n[d],g=u&&u.prototype;if(g){if(g[l]!==h)try{a(g,l,h)}catch(t){g[l]=h}if(g[c]||a(g,c,d),o[d])for(var p in r)if(g[p]!==r[p])try{a(g,p,r[p])}catch(t){g[p]=r[p]}}}},function(t,e,i){var n=i(2);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,i){var n=i(7),o=i(46),r=i(12),a=i(29),s=Object.defineProperty;e.f=n?s:function(t,e,i){if(r(t),e=a(e,!0),r(i),o)try{return s(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported");return"value"in i&&(t[e]=i.value),t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,i){"use strict";var n=i(24),o=i(0),r=i(7),a=i(86),s=i(40),l=i(89),c=i(54),h=i(22),d=i(3),u=i(11),g=i(55),p=i(93),f=i(29),m=i(4),v=i(41),y=i(9),b=i(31),w=i(17),x=i(37).f,_=i(95),S=i(99).forEach,k=i(102),E=i(8),T=i(36),A=i(23),C=i(103),L=A.get,O=A.set,M=E.f,I=T.f,P=Math.round,z=o.RangeError,D=l.ArrayBuffer,N=l.DataView,j=s.NATIVE_ARRAY_BUFFER_VIEWS,R=s.TYPED_ARRAY_TAG,q=s.TypedArray,H=s.TypedArrayPrototype,Y=s.aTypedArrayConstructor,X=s.isTypedArray,B="BYTES_PER_ELEMENT",F="Wrong length",V=function(t,e){for(var i=0,n=e.length,o=new(Y(t))(n);n>i;)o[i]=e[i++];return o},$=function(t,e){M(t,e,{get:function(){return L(this)[e]}})},W=function(t){var e;return t instanceof D||"ArrayBuffer"==(e=v(t))||"SharedArrayBuffer"==e},U=function(t,e){return X(t)&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},G=function(t,e){return U(t,e=f(e,!0))?h(2,t[e]):I(t,e)},K=function(t,e,i){return!(U(t,e=f(e,!0))&&y(i)&&m(i,"value"))||m(i,"get")||m(i,"set")||i.configurable||m(i,"writable")&&!i.writable||m(i,"enumerable")&&!i.enumerable?M(t,e,i):(t[e]=i.value,t)};r?(j||(T.f=G,E.f=K,$(H,"buffer"),$(H,"byteOffset"),$(H,"byteLength"),$(H,"length")),n({target:"Object",stat:!0,forced:!j},{getOwnPropertyDescriptor:G,defineProperty:K}),t.exports=function(t,e,i){var r=t.match(/\d+$/)[0]/8,s=t+(i?"Clamped":"")+"Array",l="get"+t,h="set"+t,f=o[s],m=f,v=m&&m.prototype,E={},T=function(t,e){M(t,e,{get:function(){return function(t,e){var i=L(t);return i.view[l](e*r+i.byteOffset,!0)}(this,e)},set:function(t){return function(t,e,n){var o=L(t);i&&(n=(n=P(n))<0?0:n>255?255:255&n),o.view[h](e*r+o.byteOffset,n,!0)}(this,e,t)},enumerable:!0})};j?a&&(m=e((function(t,e,i,n){return c(t,m,s),C(y(e)?W(e)?void 0!==n?new f(e,p(i,r),n):void 0!==i?new f(e,p(i,r)):new f(e):X(e)?V(m,e):_.call(m,e):new f(g(e)),t,m)})),w&&w(m,q),S(x(f),(function(t){t in m||d(m,t,f[t])})),m.prototype=v):(m=e((function(t,e,i,n){c(t,m,s);var o,a,l,h=0,d=0;if(y(e)){if(!W(e))return X(e)?V(m,e):_.call(m,e);o=e,d=p(i,r);var f=e.byteLength;if(void 0===n){if(f%r)throw z(F);if((a=f-d)<0)throw z(F)}else if((a=u(n)*r)+d>f)throw z(F);l=a/r}else l=g(e),o=new D(a=l*r);for(O(t,{buffer:o,byteOffset:d,byteLength:a,length:l,view:new N(o)});h<l;)T(t,h++)})),w&&w(m,q),v=m.prototype=b(H)),v.constructor!==m&&d(v,"constructor",m),R&&d(v,R,s),E[s]=m,n({global:!0,forced:m!=f,sham:!j},E),B in m||d(m,B,r),B in v||d(v,B,r),k(s)}):t.exports=function(){}},function(t,e,i){var n=i(13),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e,i){var n=i(9);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){var i=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:i)(t)}},function(t,e){t.exports={}},function(t,e,i){var n=i(0),o=i(3),r=i(4),a=i(28),s=i(51),l=i(23),c=l.get,h=l.enforce,d=String(String).split("String");(t.exports=function(t,e,i,s){var l,c=!!s&&!!s.unsafe,u=!!s&&!!s.enumerable,g=!!s&&!!s.noTargetGet;"function"==typeof i&&("string"!=typeof e||r(i,"name")||o(i,"name",e),(l=h(i)).source||(l.source=d.join("string"==typeof e?e:""))),t!==n?(c?!g&&t[e]&&(u=!0):delete t[e],u?t[e]=i:o(t,e,i)):u?t[e]=i:a(e,i)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||s(this)}))},function(t,e,i){var n=i(21);t.exports=function(t){return Object(n(t))}},function(t,e,i){var n=i(12),o=i(76);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,i={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(i,[]),e=i instanceof Array}catch(t){}return function(i,r){return n(i),o(r),e?t.call(i,r):i.__proto__=r,i}}():void 0)},function(t,e,i){"use strict";var n=i(77),o=i(12),r=i(11),a=i(13),s=i(21),l=i(81),c=i(83),h=i(84),d=Math.max,u=Math.min;n("replace",2,(function(t,e,i,n){var g=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,p=n.REPLACE_KEEPS_$0,f=g?"$":"$0";return[function(i,n){var o=s(this),r=null==i?void 0:i[t];return void 0!==r?r.call(i,o,n):e.call(String(o),i,n)},function(t,n){if(!g&&p||"string"==typeof n&&-1===n.indexOf(f)){var s=i(e,t,this,n);if(s.done)return s.value}var m=o(t),v=String(this),y="function"==typeof n;y||(n=String(n));var b=m.global;if(b){var w=m.unicode;m.lastIndex=0}for(var x=[];;){var _=h(m,v);if(null===_)break;if(x.push(_),!b)break;""===String(_[0])&&(m.lastIndex=l(v,r(m.lastIndex),w))}for(var S,k="",E=0,T=0;T<x.length;T++){_=x[T];for(var A=String(_[0]),C=d(u(a(_.index),v.length),0),L=[],O=1;O<_.length;O++)L.push(void 0===(S=_[O])?S:String(S));var M=_.groups;if(y){var I=[A].concat(L,C,v);void 0!==M&&I.push(M);var P=String(n.apply(void 0,I))}else P=c(A,v,C,L,M,n);C>=E&&(k+=v.slice(E,C)+P,E=C+A.length)}return k+v.slice(E)}]}))},function(t,e,i){var n=i(44),o=i(21);t.exports=function(t){return n(o(t))}},function(t,e){var i={}.toString;t.exports=function(t){return i.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,i){var n,o,r,a=i(67),s=i(0),l=i(9),c=i(3),h=i(4),d=i(27),u=i(35),g=i(32),p=s.WeakMap;if(a){var f=d.state||(d.state=new p),m=f.get,v=f.has,y=f.set;n=function(t,e){return e.facade=t,y.call(f,t,e),e},o=function(t){return m.call(f,t)||{}},r=function(t){return v.call(f,t)}}else{var b=u("state");g[b]=!0,n=function(t,e){return e.facade=t,c(t,b,e),e},o=function(t){return h(t,b)?t[b]:{}},r=function(t){return h(t,b)}}t.exports={set:n,get:o,has:r,enforce:function(t){return r(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var i;if(!l(e)||(i=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return i}}}},function(t,e,i){var n=i(0),o=i(36).f,r=i(3),a=i(15),s=i(28),l=i(70),c=i(73);t.exports=function(t,e){var i,h,d,u,g,p=t.target,f=t.global,m=t.stat;if(i=f?n:m?n[p]||s(p,{}):(n[p]||{}).prototype)for(h in e){if(u=e[h],d=t.noTargetGet?(g=o(i,h))&&g.value:i[h],!c(f?h:p+(m?".":"#")+h,t.forced)&&void 0!==d){if(typeof u==typeof d)continue;l(u,d)}(t.sham||d&&d.sham)&&r(u,"sham",!0),a(i,h,u,t)}}},function(t,e,i){var n=i(4),o=i(16),r=i(35),a=i(75),s=r("IE_PROTO"),l=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),n(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?l:null}},function(t,e){t.exports=!1},function(t,e,i){var n=i(0),o=i(28),r="__core-js_shared__",a=n[r]||o(r,{});t.exports=a},function(t,e,i){var n=i(0),o=i(3);t.exports=function(t,e){try{o(n,t,e)}catch(i){n[t]=e}return e}},function(t,e,i){var n=i(9);t.exports=function(t,e){if(!n(t))return t;var i,o;if(e&&"function"==typeof(i=t.toString)&&!n(o=i.call(t)))return o;if("function"==typeof(i=t.valueOf)&&!n(o=i.call(t)))return o;if(!e&&"function"==typeof(i=t.toString)&&!n(o=i.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){var i=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++i+n).toString(36)}},function(t,e,i){var n,o=i(12),r=i(62),a=i(33),s=i(32),l=i(65),c=i(47),h=i(35),d=h("IE_PROTO"),u=function(){},g=function(t){return"<script>"+t+"</"+"script>"},p=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;p=n?function(t){t.write(g("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((e=c("iframe")).style.display="none",l.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(g("document.F=Object")),t.close(),t.F);for(var i=a.length;i--;)delete p.prototype[a[i]];return p()};s[d]=!0,t.exports=Object.create||function(t,e){var i;return null!==t?(u.prototype=o(t),i=new u,u.prototype=null,i[d]=t):i=p(),void 0===e?i:r(i,e)}},function(t,e){t.exports={}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,i){var n=i(66),o=i(0),r=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?r(n[t])||r(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},function(t,e,i){var n=i(45),o=i(30),r=n("keys");t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,e,i){var n=i(7),o=i(69),r=i(22),a=i(19),s=i(29),l=i(4),c=i(46),h=Object.getOwnPropertyDescriptor;e.f=n?h:function(t,e){if(t=a(t),e=s(e,!0),c)try{return h(t,e)}catch(t){}if(l(t,e))return r(!o.f.call(t,e),t[e])}},function(t,e,i){var n=i(49),o=i(33).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},function(t,e,i){var n=i(8).f,o=i(4),r=i(1)("toStringTag");t.exports=function(t,e,i){t&&!o(t=i?t:t.prototype,r)&&n(t,r,{configurable:!0,value:e})}},function(t,e,i){"use strict";var n,o,r=i(79),a=i(80),s=RegExp.prototype.exec,l=String.prototype.replace,c=s,h=(n=/a/,o=/b*/g,s.call(n,"a"),s.call(o,"a"),0!==n.lastIndex||0!==o.lastIndex),d=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1];(h||u||d)&&(c=function(t){var e,i,n,o,a=this,c=d&&a.sticky,g=r.call(a),p=a.source,f=0,m=t;return c&&(-1===(g=g.replace("y","")).indexOf("g")&&(g+="g"),m=String(t).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==t[a.lastIndex-1])&&(p="(?: "+p+")",m=" "+m,f++),i=new RegExp("^(?:"+p+")",g)),u&&(i=new RegExp("^"+p+"$(?!\\s)",g)),h&&(e=a.lastIndex),n=s.call(c?i:a,m),c?n?(n.input=n.input.slice(f),n[0]=n[0].slice(f),n.index=a.lastIndex,a.lastIndex+=n[0].length):a.lastIndex=0:h&&n&&(a.lastIndex=a.global?n.index+n[0].length:e),u&&n&&n.length>1&&l.call(n[0],i,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n}),t.exports=c},function(t,e,i){"use strict";var n,o=i(53),r=i(7),a=i(0),s=i(9),l=i(4),c=i(41),h=i(3),d=i(15),u=i(8).f,g=i(25),p=i(17),f=i(1),m=i(30),v=a.Int8Array,y=v&&v.prototype,b=a.Uint8ClampedArray,w=b&&b.prototype,x=v&&g(v),_=y&&g(y),S=Object.prototype,k=S.isPrototypeOf,E=f("toStringTag"),T=m("TYPED_ARRAY_TAG"),A=o&&!!p&&"Opera"!==c(a.opera),C=!1,L={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},O={BigInt64Array:8,BigUint64Array:8},M=function(t){if(!s(t))return!1;var e=c(t);return l(L,e)||l(O,e)};for(n in L)a[n]||(A=!1);if((!A||"function"!=typeof x||x===Function.prototype)&&(x=function(){throw TypeError("Incorrect invocation")},A))for(n in L)a[n]&&p(a[n],x);if((!A||!_||_===S)&&(_=x.prototype,A))for(n in L)a[n]&&p(a[n].prototype,_);if(A&&g(w)!==_&&p(w,_),r&&!l(_,E))for(n in C=!0,u(_,E,{get:function(){return s(this)?this[T]:void 0}}),L)a[n]&&h(a[n],T,n);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:A,TYPED_ARRAY_TAG:C&&T,aTypedArray:function(t){if(M(t))return t;throw TypeError("Target is not a typed array")},aTypedArrayConstructor:function(t){if(p){if(k.call(x,t))return t}else for(var e in L)if(l(L,n)){var i=a[e];if(i&&(t===i||k.call(i,t)))return t}throw TypeError("Target is not a typed array constructor")},exportTypedArrayMethod:function(t,e,i){if(r){if(i)for(var n in L){var o=a[n];o&&l(o.prototype,t)&&delete o.prototype[t]}_[t]&&!i||d(_,t,i?e:A&&y[t]||e)}},exportTypedArrayStaticMethod:function(t,e,i){var n,o;if(r){if(p){if(i)for(n in L)(o=a[n])&&l(o,t)&&delete o[t];if(x[t]&&!i)return;try{return d(x,t,i?e:A&&v[t]||e)}catch(t){}}for(n in L)!(o=a[n])||o[t]&&!i||d(o,t,e)}},isView:function(t){if(!s(t))return!1;var e=c(t);return"DataView"===e||l(L,e)||l(O,e)},isTypedArray:M,TypedArray:x,TypedArrayPrototype:_}},function(t,e,i){var n=i(88),o=i(20),r=i(1)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=n?o:function(t){var e,i,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),r))?i:a?o(e):"Object"==(n=o(e))&&"function"==typeof e.callee?"Arguments":n}},,function(t,e){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(t){"object"==typeof window&&(i=window)}t.exports=i},function(t,e,i){var n=i(2),o=i(20),r="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?r.call(t,""):Object(t)}:Object},function(t,e,i){var n=i(26),o=i(27);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.8.3",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,e,i){var n=i(7),o=i(2),r=i(47);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(r("div"),"a",{get:function(){return 7}}).a}))},function(t,e,i){var n=i(0),o=i(9),r=n.document,a=o(r)&&o(r.createElement);t.exports=function(t){return a?r.createElement(t):{}}},function(t,e,i){var n=i(2);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},function(t,e,i){var n=i(4),o=i(19),r=i(64).indexOf,a=i(32);t.exports=function(t,e){var i,s=o(t),l=0,c=[];for(i in s)!n(a,i)&&n(s,i)&&c.push(i);for(;e.length>l;)n(s,i=e[l++])&&(~r(c,i)||c.push(i));return c}},function(t,e,i){var n=i(13),o=Math.max,r=Math.min;t.exports=function(t,e){var i=n(t);return i<0?o(i+e,0):r(i,e)}},function(t,e,i){var n=i(27),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},function(t,e,i){"use strict";var n,o,r,a=i(2),s=i(25),l=i(3),c=i(4),h=i(1),d=i(26),u=h("iterator"),g=!1;[].keys&&("next"in(r=[].keys())?(o=s(s(r)))!==Object.prototype&&(n=o):g=!0);var p=null==n||a((function(){var t={};return n[u].call(t)!==t}));p&&(n={}),d&&!p||c(n,u)||l(n,u,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:g}},function(t,e){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},function(t,e){t.exports=function(t,e,i){if(!(t instanceof e))throw TypeError("Incorrect "+(i?i+" ":"")+"invocation");return t}},function(t,e,i){var n=i(13),o=i(11);t.exports=function(t){if(void 0===t)return 0;var e=n(t),i=o(e);if(e!==i)throw RangeError("Wrong length or index");return i}},function(t,e,i){var n=i(98);t.exports=function(t,e,i){if(n(t),void 0===e)return t;switch(i){case 0:return function(){return t.call(e)};case 1:return function(i){return t.call(e,i)};case 2:return function(i,n){return t.call(e,i,n)};case 3:return function(i,n,o){return t.call(e,i,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,i){"use strict";(function(t){i(18),i(6),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t||"undefined"!=typeof self&&self;var n=function(t,e,i){return t(i={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&i.path)}},i.exports),i.exports}((function(t,e){t.exports=function(){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function o(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?r(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var a=Date.now();function s(){var t={},e=!0,i=0,n=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],i++);for(var o=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e&&"[object Object]"===Object.prototype.toString.call(i[n])?t[n]=s(!0,t[n],i[n]):t[n]=i[n])};i<n;i++)o(arguments[i]);return t}function l(t,e){if((A(t)||t===window||t===document)&&(t=[t]),L(t)||O(t)||(t=[t]),0!=P(t))if(L(t)&&!O(t))for(var i=t.length,n=0;n<i&&!1!==e.call(t[n],t[n],n,t);n++);else if(O(t))for(var o in t)if(I(t,o)&&!1===e.call(t[o],t[o],o,t))break}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=t[a]=t[a]||[],o={all:n,evt:null,found:null};return e&&i&&P(n)>0&&l(n,(function(t,n){if(t.eventName==e&&t.fn.toString()==i.toString())return o.found=!0,o.evt=n,!1})),o}function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.onElement,n=e.withCallback,o=e.avoidDuplicate,r=void 0===o||o,a=e.once,s=void 0!==a&&a,h=e.useCapture,d=void 0!==h&&h,u=arguments.length>2?arguments[2]:void 0,g=i||[];function p(t){E(n)&&n.call(u,t,this),s&&p.destroy()}return T(g)&&(g=document.querySelectorAll(g)),p.destroy=function(){l(g,(function(e){var i=c(e,t,p);i.found&&i.all.splice(i.evt,1),e.removeEventListener&&e.removeEventListener(t,p,d)}))},l(g,(function(e){var i=c(e,t,p);(e.addEventListener&&r&&!i.found||!r)&&(e.addEventListener(t,p,d),i.all.push({eventName:t,fn:p}))})),p}function d(t,e){l(e.split(" "),(function(e){return t.classList.add(e)}))}function u(t,e){l(e.split(" "),(function(e){return t.classList.remove(e)}))}function g(t,e){return t.classList.contains(e)}function p(t,e){for(;t!==document.body;){if(!(t=t.parentElement))return!1;if("function"==typeof t.matches?t.matches(e):t.msMatchesSelector(e))return t}}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t||""===e)return!1;if("none"==e)return E(i)&&i(),!1;var n=x(),o=e.split(" ");l(o,(function(e){d(t,"g"+e)})),h(n,{onElement:t,avoidDuplicate:!1,once:!0,withCallback:function(t,e){l(o,(function(t){u(e,"g"+t)})),E(i)&&i()}})}function m(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(""==e)return t.style.webkitTransform="",t.style.MozTransform="",t.style.msTransform="",t.style.OTransform="",t.style.transform="",!1;t.style.webkitTransform=e,t.style.MozTransform=e,t.style.msTransform=e,t.style.OTransform=e,t.style.transform=e}function v(t){t.style.display="block"}function y(t){t.style.display="none"}function b(t){var e=document.createDocumentFragment(),i=document.createElement("div");for(i.innerHTML=t;i.firstChild;)e.appendChild(i.firstChild);return e}function w(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}}function x(){var t,e=document.createElement("fakeelement"),i={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(t in i)if(void 0!==e.style[t])return i[t]}function _(t,e,i,n){if(t())e();else{var o;i||(i=100);var r=setInterval((function(){t()&&(clearInterval(r),o&&clearTimeout(o),e())}),i);n&&(o=setTimeout((function(){clearInterval(r)}),n))}}function S(t,e,i){if(M(t))console.error("Inject assets error");else if(E(e)&&(i=e,e=!1),T(e)&&e in window)E(i)&&i();else{var n;if(-1!==t.indexOf(".css")){if((n=document.querySelectorAll('link[href="'+t+'"]'))&&n.length>0)return void(E(i)&&i());var o=document.getElementsByTagName("head")[0],r=o.querySelectorAll('link[rel="stylesheet"]'),a=document.createElement("link");return a.rel="stylesheet",a.type="text/css",a.href=t,a.media="all",r?o.insertBefore(a,r[0]):o.appendChild(a),void(E(i)&&i())}if((n=document.querySelectorAll('script[src="'+t+'"]'))&&n.length>0){if(E(i)){if(T(e))return _((function(){return void 0!==window[e]}),(function(){i()})),!1;i()}}else{var s=document.createElement("script");s.type="text/javascript",s.src=t,s.onload=function(){if(E(i)){if(T(e))return _((function(){return void 0!==window[e]}),(function(){i()})),!1;i()}},document.body.appendChild(s)}}}function k(){return"navigator"in window&&window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)}function E(t){return"function"==typeof t}function T(t){return"string"==typeof t}function A(t){return!(!t||!t.nodeType||1!=t.nodeType)}function C(t){return Array.isArray(t)}function L(t){return t&&t.length&&isFinite(t.length)}function O(e){return"object"===t(e)&&null!=e&&!E(e)&&!C(e)}function M(t){return null==t}function I(t,e){return null!==t&&hasOwnProperty.call(t,e)}function P(t){if(O(t)){if(t.keys)return t.keys().length;var e=0;for(var i in t)I(t,i)&&e++;return e}return t.length}function z(t){return!isNaN(parseFloat(t))&&isFinite(t)}function D(t){if(t.events.hasOwnProperty("keyboard"))return!1;t.events.keyboard=h("keydown",{onElement:window,withCallback:function(e,i){var n=(e=e||window.event).keyCode;if(9==n){var r=!(!document.activeElement||!document.activeElement.nodeName)&&document.activeElement.nodeName.toLocaleLowerCase();if("input"==r||"textarea"==r||"button"==r)return;e.preventDefault();var a=document.querySelectorAll(".gbtn");if(!a||a.length<=0)return;var s=o(a).filter((function(t){return g(t,"focused")}));if(!s.length){var l=document.querySelector('.gbtn[tabindex="0"]');return void(l&&(l.focus(),d(l,"focused")))}a.forEach((function(t){return u(t,"focused")}));var c=s[0].getAttribute("tabindex");c=c||"0";var h=parseInt(c)+1;h>a.length-1&&(h="0");var p=document.querySelector('.gbtn[tabindex="'.concat(h,'"]'));p&&(p.focus(),d(p,"focused"))}39==n&&t.nextSlide(),37==n&&t.prevSlide(),27==n&&t.close()}})}function N(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function j(t,e){var i=function(t,e){var i=N(t)*N(e);if(0===i)return 0;var n=function(t,e){return t.x*e.x+t.y*e.y}(t,e)/i;return n>1&&(n=1),Math.acos(n)}(t,e);return function(t,e){return t.x*e.y-e.x*t.y}(t,e)>0&&(i*=-1),180*i/Math.PI}var R=function(){function t(i){e(this,t),this.handlers=[],this.el=i}return n(t,[{key:"add",value:function(t){this.handlers.push(t)}},{key:"del",value:function(t){t||(this.handlers=[]);for(var e=this.handlers.length;e>=0;e--)this.handlers[e]===t&&this.handlers.splice(e,1)}},{key:"dispatch",value:function(){for(var t=0,e=this.handlers.length;t<e;t++){var i=this.handlers[t];"function"==typeof i&&i.apply(this.el,arguments)}}}]),t}();function q(t,e){var i=new R(t);return i.add(e),i}var H=function(){function t(i,n){e(this,t),this.element="string"==typeof i?document.querySelector(i):i,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var o=function(){};this.rotate=q(this.element,n.rotate||o),this.touchStart=q(this.element,n.touchStart||o),this.multipointStart=q(this.element,n.multipointStart||o),this.multipointEnd=q(this.element,n.multipointEnd||o),this.pinch=q(this.element,n.pinch||o),this.swipe=q(this.element,n.swipe||o),this.tap=q(this.element,n.tap||o),this.doubleTap=q(this.element,n.doubleTap||o),this.longTap=q(this.element,n.longTap||o),this.singleTap=q(this.element,n.singleTap||o),this.pressMove=q(this.element,n.pressMove||o),this.twoFingerPressMove=q(this.element,n.twoFingerPressMove||o),this.touchMove=q(this.element,n.touchMove||o),this.touchEnd=q(this.element,n.touchEnd||o),this.touchCancel=q(this.element,n.touchCancel||o),this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}}return n(t,[{key:"start",value:function(t){if(t.touches){this.now=Date.now(),this.x1=t.touches[0].pageX,this.y1=t.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(t,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var e=this.preV;if(t.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var i={x:t.touches[1].pageX-this.x1,y:t.touches[1].pageY-this.y1};e.x=i.x,e.y=i.y,this.pinchStartLen=N(e),this.multipointStart.dispatch(t,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(t,this.element),this._preventTap=!0}.bind(this),750)}}},{key:"move",value:function(t){if(t.touches){var e=this.preV,i=t.touches.length,n=t.touches[0].pageX,o=t.touches[0].pageY;if(this.isDoubleTap=!1,i>1){var r=t.touches[1].pageX,a=t.touches[1].pageY,s={x:t.touches[1].pageX-n,y:t.touches[1].pageY-o};null!==e.x&&(this.pinchStartLen>0&&(t.zoom=N(s)/this.pinchStartLen,this.pinch.dispatch(t,this.element)),t.angle=j(s,e),this.rotate.dispatch(t,this.element)),e.x=s.x,e.y=s.y,null!==this.x2&&null!==this.sx2?(t.deltaX=(n-this.x2+r-this.sx2)/2,t.deltaY=(o-this.y2+a-this.sy2)/2):(t.deltaX=0,t.deltaY=0),this.twoFingerPressMove.dispatch(t,this.element),this.sx2=r,this.sy2=a}else{if(null!==this.x2){t.deltaX=n-this.x2,t.deltaY=o-this.y2;var l=Math.abs(this.x1-this.x2),c=Math.abs(this.y1-this.y2);(l>10||c>10)&&(this._preventTap=!0)}else t.deltaX=0,t.deltaY=0;this.pressMove.dispatch(t,this.element)}this.touchMove.dispatch(t,this.element),this._cancelLongTap(),this.x2=n,this.y2=o,i>1&&t.preventDefault()}}},{key:"end",value:function(t){if(t.changedTouches){this._cancelLongTap();var e=this;t.touches.length<2&&(this.multipointEnd.dispatch(t,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(t.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout((function(){e.swipe.dispatch(t,e.element)}),0)):(this.tapTimeout=setTimeout((function(){e._preventTap||e.tap.dispatch(t,e.element),e.isDoubleTap&&(e.doubleTap.dispatch(t,e.element),e.isDoubleTap=!1)}),0),e.isDoubleTap||(e.singleTapTimeout=setTimeout((function(){e.singleTap.dispatch(t,e.element)}),250))),this.touchEnd.dispatch(t,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}}},{key:"cancelAll",value:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)}},{key:"cancel",value:function(t){this.cancelAll(),this.touchCancel.dispatch(t,this.element)}},{key:"_cancelLongTap",value:function(){clearTimeout(this.longTapTimeout)}},{key:"_cancelSingleTap",value:function(){clearTimeout(this.singleTapTimeout)}},{key:"_swipeDirection",value:function(t,e,i,n){return Math.abs(t-e)>=Math.abs(i-n)?t-e>0?"Left":"Right":i-n>0?"Up":"Down"}},{key:"on",value:function(t,e){this[t]&&this[t].add(e)}},{key:"off",value:function(t,e){this[t]&&this[t].del(e)}},{key:"destroy",value:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}}]),t}();function Y(t){var e=function(){var t,e=document.createElement("fakeelement"),i={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in i)if(void 0!==e.style[t])return i[t]}(),i=g(t,"gslide-media")?t:t.querySelector(".gslide-media"),n=t.querySelector(".gslide-description");d(i,"greset"),m(i,"translate3d(0, 0, 0)"),h(e,{onElement:i,once:!0,withCallback:function(t,e){u(i,"greset")}}),i.style.opacity="",n&&(n.style.opacity="")}function X(t){if(t.events.hasOwnProperty("touch"))return!1;var e,i,n,o=w(),r=o.width,a=o.height,s=!1,l=null,c=null,h=null,f=!1,v=1,y=1,b=!1,x=!1,_=null,S=null,k=null,E=null,T=0,A=0,C=!1,L=!1,O={},M={},I=0,P=0,z=document.getElementById("glightbox-slider"),D=document.querySelector(".goverlay"),N=new H(z,{touchStart:function(e){if(s=!0,(g(e.targetTouches[0].target,"ginner-container")||p(e.targetTouches[0].target,".gslide-desc")||"a"==e.targetTouches[0].target.nodeName.toLowerCase())&&(s=!1),p(e.targetTouches[0].target,".gslide-inline")&&!g(e.targetTouches[0].target.parentNode,"gslide-inline")&&(s=!1),s){if(M=e.targetTouches[0],O.pageX=e.targetTouches[0].pageX,O.pageY=e.targetTouches[0].pageY,I=e.targetTouches[0].clientX,P=e.targetTouches[0].clientY,l=t.activeSlide,c=l.querySelector(".gslide-media"),n=l.querySelector(".gslide-inline"),h=null,g(c,"gslide-image")&&(h=c.querySelector("img")),u(D,"greset"),e.pageX>20&&e.pageX<window.innerWidth-20)return;e.preventDefault()}},touchMove:function(o){if(s&&(M=o.targetTouches[0],!b&&!x)){if(n&&n.offsetHeight>a){var l=O.pageX-M.pageX;if(Math.abs(l)<=13)return!1}f=!0;var d,u=o.targetTouches[0].clientX,g=o.targetTouches[0].clientY,p=I-u,v=P-g;if(Math.abs(p)>Math.abs(v)?(C=!1,L=!0):(L=!1,C=!0),e=M.pageX-O.pageX,T=100*e/r,i=M.pageY-O.pageY,A=100*i/a,C&&h&&(d=1-Math.abs(i)/a,D.style.opacity=d,t.settings.touchFollowAxis&&(T=0)),L&&(d=1-Math.abs(e)/r,c.style.opacity=d,t.settings.touchFollowAxis&&(A=0)),!h)return m(c,"translate3d(".concat(T,"%, 0, 0)"));m(c,"translate3d(".concat(T,"%, ").concat(A,"%, 0)"))}},touchEnd:function(){if(s){if(f=!1,x||b)return k=_,void(E=S);var e=Math.abs(parseInt(A)),i=Math.abs(parseInt(T));if(!(e>29&&h))return e<29&&i<25?(d(D,"greset"),D.style.opacity=1,Y(c)):void 0;t.close()}},multipointEnd:function(){setTimeout((function(){b=!1}),50)},multipointStart:function(){b=!0,v=y||1},pinch:function(t){if(!h||f)return!1;b=!0,h.scaleX=h.scaleY=v*t.zoom;var e=v*t.zoom;if(x=!0,e<=1)return x=!1,e=1,E=null,k=null,_=null,S=null,void h.setAttribute("style","");e>4.5&&(e=4.5),h.style.transform="scale3d(".concat(e,", ").concat(e,", 1)"),y=e},pressMove:function(t){if(x&&!b){var e=M.pageX-O.pageX,i=M.pageY-O.pageY;k&&(e+=k),E&&(i+=E),_=e,S=i;var n="translate3d(".concat(e,"px, ").concat(i,"px, 0)");y&&(n+=" scale3d(".concat(y,", ").concat(y,", 1)")),m(h,n)}},swipe:function(e){if(!x)if(b)b=!1;else{if("Left"==e.direction){if(t.index==t.elements.length-1)return Y(c);t.nextSlide()}if("Right"==e.direction){if(0==t.index)return Y(c);t.prevSlide()}}}});t.events.touch=N}var B=function(){function t(i,n){var o=this,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(e(this,t),this.img=i,this.slide=n,this.onclose=r,this.img.setZoomEvents)return!1;this.active=!1,this.zoomedIn=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.img.addEventListener("mousedown",(function(t){return o.dragStart(t)}),!1),this.img.addEventListener("mouseup",(function(t){return o.dragEnd(t)}),!1),this.img.addEventListener("mousemove",(function(t){return o.drag(t)}),!1),this.img.addEventListener("click",(function(t){return o.slide.classList.contains("dragging-nav")?(o.zoomOut(),!1):o.zoomedIn?void(o.zoomedIn&&!o.dragging&&o.zoomOut()):o.zoomIn()}),!1),this.img.setZoomEvents=!0}return n(t,[{key:"zoomIn",value:function(){var t=this.widowWidth();if(!(this.zoomedIn||t<=768)){var e=this.img;if(e.setAttribute("data-style",e.getAttribute("style")),e.style.maxWidth=e.naturalWidth+"px",e.style.maxHeight=e.naturalHeight+"px",e.naturalWidth>t){var i=t/2-e.naturalWidth/2;this.setTranslate(this.img.parentNode,i,0)}this.slide.classList.add("zoomed"),this.zoomedIn=!0}}},{key:"zoomOut",value:function(){this.img.parentNode.setAttribute("style",""),this.img.setAttribute("style",this.img.getAttribute("data-style")),this.slide.classList.remove("zoomed"),this.zoomedIn=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.onclose&&"function"==typeof this.onclose&&this.onclose()}},{key:"dragStart",value:function(t){t.preventDefault(),this.zoomedIn?("touchstart"===t.type?(this.initialX=t.touches[0].clientX-this.xOffset,this.initialY=t.touches[0].clientY-this.yOffset):(this.initialX=t.clientX-this.xOffset,this.initialY=t.clientY-this.yOffset),t.target===this.img&&(this.active=!0,this.img.classList.add("dragging"))):this.active=!1}},{key:"dragEnd",value:function(t){var e=this;t.preventDefault(),this.initialX=this.currentX,this.initialY=this.currentY,this.active=!1,setTimeout((function(){e.dragging=!1,e.img.isDragging=!1,e.img.classList.remove("dragging")}),100)}},{key:"drag",value:function(t){this.active&&(t.preventDefault(),"touchmove"===t.type?(this.currentX=t.touches[0].clientX-this.initialX,this.currentY=t.touches[0].clientY-this.initialY):(this.currentX=t.clientX-this.initialX,this.currentY=t.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.img.isDragging=!0,this.dragging=!0,this.setTranslate(this.img,this.currentX,this.currentY))}},{key:"onMove",value:function(t){if(this.zoomedIn){var e=t.clientX-this.img.naturalWidth/2,i=t.clientY-this.img.naturalHeight/2;this.setTranslate(this.img,e,i)}}},{key:"setTranslate",value:function(t,e,i){t.style.transform="translate3d("+e+"px, "+i+"px, 0)"}},{key:"widowWidth",value:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}}]),t}(),F=function(){function t(){var i=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t);var o=n.dragEl,r=n.toleranceX,a=void 0===r?40:r,s=n.toleranceY,l=void 0===s?65:s,c=n.slide,h=void 0===c?null:c,d=n.instance,u=void 0===d?null:d;this.el=o,this.active=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.direction=null,this.lastDirection=null,this.toleranceX=a,this.toleranceY=l,this.toleranceReached=!1,this.dragContainer=this.el,this.slide=h,this.instance=u,this.el.addEventListener("mousedown",(function(t){return i.dragStart(t)}),!1),this.el.addEventListener("mouseup",(function(t){return i.dragEnd(t)}),!1),this.el.addEventListener("mousemove",(function(t){return i.drag(t)}),!1)}return n(t,[{key:"dragStart",value:function(t){if(this.slide.classList.contains("zoomed"))this.active=!1;else{"touchstart"===t.type?(this.initialX=t.touches[0].clientX-this.xOffset,this.initialY=t.touches[0].clientY-this.yOffset):(this.initialX=t.clientX-this.xOffset,this.initialY=t.clientY-this.yOffset);var e=t.target.nodeName.toLowerCase();t.target.classList.contains("nodrag")||p(t.target,".nodrag")||-1!==["input","select","textarea","button","a"].indexOf(e)?this.active=!1:(t.preventDefault(),(t.target===this.el||"img"!==e&&p(t.target,".gslide-inline"))&&(this.active=!0,this.el.classList.add("dragging"),this.dragContainer=p(t.target,".ginner-container")))}}},{key:"dragEnd",value:function(t){var e=this;t&&t.preventDefault(),this.initialX=0,this.initialY=0,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.active=!1,this.doSlideChange&&(this.instance.preventOutsideClick=!0,"right"==this.doSlideChange&&this.instance.prevSlide(),"left"==this.doSlideChange&&this.instance.nextSlide()),this.doSlideClose&&this.instance.close(),this.toleranceReached||this.setTranslate(this.dragContainer,0,0,!0),setTimeout((function(){e.instance.preventOutsideClick=!1,e.toleranceReached=!1,e.lastDirection=null,e.dragging=!1,e.el.isDragging=!1,e.el.classList.remove("dragging"),e.slide.classList.remove("dragging-nav"),e.dragContainer.style.transform="",e.dragContainer.style.transition=""}),100)}},{key:"drag",value:function(t){if(this.active){t.preventDefault(),this.slide.classList.add("dragging-nav"),"touchmove"===t.type?(this.currentX=t.touches[0].clientX-this.initialX,this.currentY=t.touches[0].clientY-this.initialY):(this.currentX=t.clientX-this.initialX,this.currentY=t.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.el.isDragging=!0,this.dragging=!0,this.doSlideChange=!1,this.doSlideClose=!1;var e=Math.abs(this.currentX),i=Math.abs(this.currentY);if(e>0&&e>=Math.abs(this.currentY)&&(!this.lastDirection||"x"==this.lastDirection)){this.yOffset=0,this.lastDirection="x",this.setTranslate(this.dragContainer,this.currentX,0);var n=this.shouldChange();if(!this.instance.settings.dragAutoSnap&&n&&(this.doSlideChange=n),this.instance.settings.dragAutoSnap&&n)return this.instance.preventOutsideClick=!0,this.toleranceReached=!0,this.active=!1,this.instance.preventOutsideClick=!0,this.dragEnd(null),"right"==n&&this.instance.prevSlide(),void("left"==n&&this.instance.nextSlide())}if(this.toleranceY>0&&i>0&&i>=e&&(!this.lastDirection||"y"==this.lastDirection)){this.xOffset=0,this.lastDirection="y",this.setTranslate(this.dragContainer,0,this.currentY);var o=this.shouldClose();return!this.instance.settings.dragAutoSnap&&o&&(this.doSlideClose=!0),void(this.instance.settings.dragAutoSnap&&o&&this.instance.close())}}}},{key:"shouldChange",value:function(){var t=!1;if(Math.abs(this.currentX)>=this.toleranceX){var e=this.currentX>0?"right":"left";("left"==e&&this.slide!==this.slide.parentNode.lastChild||"right"==e&&this.slide!==this.slide.parentNode.firstChild)&&(t=e)}return t}},{key:"shouldClose",value:function(){var t=!1;return Math.abs(this.currentY)>=this.toleranceY&&(t=!0),t}},{key:"setTranslate",value:function(t,e,i){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];t.style.transition=n?"all .2s ease":"",t.style.transform="translate3d(".concat(e,"px, ").concat(i,"px, 0)")}}]),t}();function V(t,e,i,n){var o=t.querySelector(".gslide-media"),r=new Image,a="gSlideTitle_"+i,s="gSlideDesc_"+i;r.addEventListener("load",(function(){E(n)&&n()}),!1),r.src=e.href,r.alt="",""!==e.title&&r.setAttribute("aria-labelledby",a),""!==e.description&&r.setAttribute("aria-describedby",s),o.insertBefore(r,o.firstChild)}function $(t,e,i,n){var o=this,r=t.querySelector(".ginner-container"),a="gvideo"+i,s=t.querySelector(".gslide-media"),l=this.getAllPlayers();d(r,"gvideo-container"),s.insertBefore(b('<div class="gvideo-wrapper"></div>'),s.firstChild);var c=t.querySelector(".gvideo-wrapper");S(this.settings.plyr.css,"Plyr");var h=e.href;location.protocol.replace(":","");var u="",g="",p=!1;s.style.maxWidth=e.width,S(this.settings.plyr.js,"Plyr",(function(){if(h.match(/vimeo\.com\/([0-9]*)/)){var t=/vimeo.*\/(\d+)/i.exec(h);u="vimeo",g=t[1]}if(h.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||h.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||h.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)){var r=function(t){return void 0!==(t=t.replace(/(>|<)/gi,"").split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/))[2]?t[2].split(/[^0-9a-z_\-]/i)[0]:t}(h);u="youtube",g=r}if(null!==h.match(/\.(mp4|ogg|webm|mov)$/)){u="local";var s='<video id="'+a+'" ';s+='style="background:#000; max-width: '.concat(e.width,';" '),s+='preload="metadata" ',s+='x-webkit-airplay="allow" ',s+='webkit-playsinline="" ',s+="controls ",s+='class="gvideo-local">';var f=h.toLowerCase().split(".").pop(),m={mp4:"",ogg:"",webm:""};for(var v in m[f="mov"==f?"mp4":f]=h,m)if(m.hasOwnProperty(v)){var y=m[v];e.hasOwnProperty(v)&&(y=e[v]),""!==y&&(s+='<source src="'.concat(y,'" type="video/').concat(v,'">'))}p=b(s+="</video>")}var w=p||b('<div id="'.concat(a,'" data-plyr-provider="').concat(u,'" data-plyr-embed-id="').concat(g,'"></div>'));d(c,"".concat(u,"-video gvideo")),c.appendChild(w),c.setAttribute("data-id",a),c.setAttribute("data-index",i);var x=I(o.settings.plyr,"config")?o.settings.plyr.config:{},_=new Plyr("#"+a,x);_.on("ready",(function(t){var e=t.detail.plyr;l[a]=e,E(n)&&n()})),_.on("enterfullscreen",W),_.on("exitfullscreen",W)}))}function W(t){var e=p(t.target,".gslide-media");"enterfullscreen"==t.type&&d(e,"fullscreen"),"exitfullscreen"==t.type&&u(e,"fullscreen")}function U(t,e,i,n){var o,r=this,a=t.querySelector(".gslide-media"),s=!(!I(e,"href")||!e.href)&&e.href.split("#").pop().trim(),l=!(!I(e,"content")||!e.content)&&e.content;if(l&&(T(l)&&(o=b('<div class="ginlined-content">'.concat(l,"</div>"))),A(l))){"none"==l.style.display&&(l.style.display="block");var c=document.createElement("div");c.className="ginlined-content",c.appendChild(l),o=c}if(s){var u=document.getElementById(s);if(!u)return!1;var g=u.cloneNode(!0);g.style.height=e.height,g.style.maxWidth=e.width,d(g,"ginlined-content"),o=g}if(!o)return console.error("Unable to append inline slide content",e),!1;a.style.height=e.height,a.style.width=e.width,a.appendChild(o),this.events["inlineclose"+s]=h("click",{onElement:a.querySelectorAll(".gtrigger-close"),withCallback:function(t){t.preventDefault(),r.close()}}),E(n)&&n()}function G(t,e,i,n){var o=t.querySelector(".gslide-media"),r=function(t){var e=t.url,i=t.allow,n=t.callback,o=t.appendTo,r=document.createElement("iframe");return r.className="vimeo-video gvideo",r.src=e,r.style.width="100%",r.style.height="100%",i&&r.setAttribute("allow",i),r.onload=function(){d(r,"node-ready"),E(n)&&n()},o&&o.appendChild(r),r}({url:e.href,callback:n});o.parentNode.style.maxWidth=e.width,o.parentNode.style.height=e.height,o.appendChild(r)}var K=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),this.defaults={href:"",title:"",type:"",description:"",descPosition:"bottom",effect:"",width:"",height:"",content:!1,zoomable:!0,draggable:!0},O(i)&&(this.defaults=s(this.defaults,i))}return n(t,[{key:"sourceType",value:function(t){var e=t;return null!==(t=t.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|svg)$/)?"image":t.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||t.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||t.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)||t.match(/vimeo\.com\/([0-9]*)/)||null!==t.match(/\.(mp4|ogg|webm|mov)$/)?"video":null!==t.match(/\.(mp3|wav|wma|aac|ogg)$/)?"audio":t.indexOf("#")>-1&&""!==e.split("#").pop().trim()?"inline":t.indexOf("goajax=true")>-1?"ajax":"external"}},{key:"parseConfig",value:function(t,e){var i=this,n=s({descPosition:e.descPosition},this.defaults);if(O(t)&&!A(t)){I(t,"type")||(I(t,"content")&&t.content?t.type="inline":I(t,"href")&&(t.type=this.sourceType(t.href)));var o=s(n,t);return this.setSize(o,e),o}var r="",a=t.getAttribute("data-glightbox"),c=t.nodeName.toLowerCase();if("a"===c&&(r=t.href),"img"===c&&(r=t.src),n.href=r,l(n,(function(o,r){I(e,r)&&"width"!==r&&(n[r]=e[r]);var a=t.dataset[r];M(a)||(n[r]=i.sanitizeValue(a))})),n.content&&(n.type="inline"),!n.type&&r&&(n.type=this.sourceType(r)),M(a)){if(!n.title&&"a"==c){var h=t.title;M(h)||""===h||(n.title=h)}if(!n.title&&"img"==c){var d=t.alt;M(d)||""===d||(n.title=d)}}else{var u=[];l(n,(function(t,e){u.push(";\\s?"+e)})),u=u.join("\\s?:|"),""!==a.trim()&&l(n,(function(t,e){var o=a,r=new RegExp("s?"+e+"s?:s?(.*?)("+u+"s?:|$)"),s=o.match(r);if(s&&s.length&&s[1]){var l=s[1].trim().replace(/;\s*$/,"");n[e]=i.sanitizeValue(l)}}))}if(n.description&&"."==n.description.substring(0,1)&&document.querySelector(n.description))n.description=document.querySelector(n.description).innerHTML;else{var g=t.querySelector(".glightbox-desc");g&&(n.description=g.innerHTML)}return this.setSize(n,e),this.slideConfig=n,n}},{key:"setSize",value:function(t,e){var i="video"==t.type?this.checkSize(e.videosWidth):this.checkSize(e.width),n=this.checkSize(e.height);return t.width=I(t,"width")&&""!==t.width?this.checkSize(t.width):i,t.height=I(t,"height")&&""!==t.height?this.checkSize(t.height):n,t}},{key:"checkSize",value:function(t){return z(t)?"".concat(t,"px"):t}},{key:"sanitizeValue",value:function(t){return"true"!==t&&"false"!==t?t:"true"===t}}]),t}(),Z=function(){function t(i,n,o){e(this,t),this.element=i,this.instance=n,this.index=o}return n(t,[{key:"setContent",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(g(e,"loaded"))return!1;var n=this.instance.settings,o=this.slideConfig,r=k();E(n.beforeSlideLoad)&&n.beforeSlideLoad({index:this.index,slide:e,player:!1});var a=o.type,s=o.descPosition,l=e.querySelector(".gslide-media"),c=e.querySelector(".gslide-title"),h=e.querySelector(".gslide-desc"),u=e.querySelector(".gdesc-inner"),p=i,f="gSlideTitle_"+this.index,m="gSlideDesc_"+this.index;if(E(n.afterSlideLoad)&&(p=function(){E(i)&&i(),n.afterSlideLoad({index:t.index,slide:e,player:t.instance.getSlidePlayerInstance(t.index)})}),""==o.title&&""==o.description?u&&u.parentNode.parentNode.removeChild(u.parentNode):(c&&""!==o.title?(c.id=f,c.innerHTML=o.title):c.parentNode.removeChild(c),h&&""!==o.description?(h.id=m,r&&n.moreLength>0?(o.smallDescription=this.slideShortDesc(o.description,n.moreLength,n.moreText),h.innerHTML=o.smallDescription,this.descriptionEvents(h,o)):h.innerHTML=o.description):h.parentNode.removeChild(h),d(l.parentNode,"desc-".concat(s)),d(u.parentNode,"description-".concat(s))),d(l,"gslide-".concat(a)),d(e,"loaded"),"video"!==a){if("external"!==a)return"inline"===a?(U.apply(this.instance,[e,o,this.index,p]),void(n.draggable&&new F({dragEl:e.querySelector(".gslide-inline"),toleranceX:n.dragToleranceX,toleranceY:n.dragToleranceY,slide:e,instance:this.instance}))):void("image"!==a?E(p)&&p():V(e,o,this.index,(function(){var i=e.querySelector("img");n.draggable&&new F({dragEl:i,toleranceX:n.dragToleranceX,toleranceY:n.dragToleranceY,slide:e,instance:t.instance}),o.zoomable&&i.naturalWidth>i.offsetWidth&&(d(i,"zoomable"),new B(i,e,(function(){t.instance.resize()}))),E(p)&&p()})));G.apply(this,[e,o,this.index,p])}else $.apply(this.instance,[e,o,this.index,p])}},{key:"slideShortDesc",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=document.createElement("div");n.innerHTML=t;var o=i;if((t=n.innerText.trim()).length<=e)return t;var r=t.substr(0,e-1);return o?(n=null,r+'... <a href="#" class="desc-more">'+i+"</a>"):r}},{key:"descriptionEvents",value:function(t,e){var i=this,n=t.querySelector(".desc-more");if(!n)return!1;h("click",{onElement:n,withCallback:function(t,n){t.preventDefault();var o=document.body,r=p(n,".gslide-desc");if(!r)return!1;r.innerHTML=e.description,d(o,"gdesc-open");var a=h("click",{onElement:[o,p(r,".gslide-description")],withCallback:function(t,n){"a"!==t.target.nodeName.toLowerCase()&&(u(o,"gdesc-open"),d(o,"gdesc-closed"),r.innerHTML=e.smallDescription,i.descriptionEvents(r,e),setTimeout((function(){u(o,"gdesc-closed")}),400),a.destroy())}})}})}},{key:"create",value:function(){return b(this.instance.settings.slideHTML)}},{key:"getConfig",value:function(){var t=new K(this.instance.settings.slideExtraAttributes);return this.slideConfig=t.parseConfig(this.element,this.instance.settings),this.slideConfig}}]),t}(),J=k(),Q=null!==k()||void 0!==document.createTouch||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints,tt=document.getElementsByTagName("html")[0],et={selector:".glightbox",elements:null,skin:"clean",theme:"clean",closeButton:!0,startAt:null,autoplayVideos:!0,autofocusVideos:!0,descPosition:"bottom",width:"900px",height:"506px",videosWidth:"960px",beforeSlideChange:null,afterSlideChange:null,beforeSlideLoad:null,afterSlideLoad:null,slideInserted:null,slideRemoved:null,slideExtraAttributes:null,onOpen:null,onClose:null,loop:!1,zoomable:!0,draggable:!0,dragAutoSnap:!1,dragToleranceX:40,dragToleranceY:65,preload:!0,oneSlidePerOpen:!1,touchNavigation:!0,touchFollowAxis:!0,keyboardNavigation:!0,closeOnOutsideClick:!0,plugins:!1,plyr:{css:"https://cdn.plyr.io/3.6.3/plyr.css",js:"https://cdn.plyr.io/3.6.3/plyr.js",config:{ratio:"16:9",fullscreen:{enabled:!0,iosNative:!0},youtube:{noCookie:!0,rel:0,showinfo:0,iv_load_policy:3},vimeo:{byline:!1,portrait:!1,title:!1,transparent:!1}}},openEffect:"zoom",closeEffect:"zoom",slideEffect:"slide",moreText:"See more",moreLength:60,cssEfects:{fade:{in:"fadeIn",out:"fadeOut"},zoom:{in:"zoomIn",out:"zoomOut"},slide:{in:"slideInRight",out:"slideOutLeft"},slideBack:{in:"slideInLeft",out:"slideOutRight"},none:{in:"none",out:"none"}},svg:{close:'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',next:'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',prev:'<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'},slideHTML:'<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',lightboxHTML:'<div id="glightbox-body" class="glightbox-container">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gnext gbtn" tabindex="0" aria-label="Next">{nextSVG}</button>\n    <button class="gprev gbtn" tabindex="1" aria-label="Previous">{prevSVG}</button>\n    <button class="gclose gbtn" tabindex="2" aria-label="Close">{closeSVG}</button>\n</div>\n</div>'},it=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),this.settings=s(et,i),this.effectsClasses=this.getAnimationClasses(),this.videoPlayers={},this.apiEvents=[],this.fullElementsList=!1}return n(t,[{key:"init",value:function(){var t=this,e=this.getSelector();e&&(this.baseEvents=h("click",{onElement:e,withCallback:function(e,i){e.preventDefault(),t.open(i)}})),this.elements=this.getElements()}},{key:"open",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(0==this.elements.length)return!1;this.activeSlide=null,this.prevActiveSlideIndex=null,this.prevActiveSlide=null;var i=z(e)?e:this.settings.startAt;if(A(t)){var n=t.getAttribute("data-gallery");n&&(this.fullElementsList=this.elements,this.elements=this.getGalleryElements(this.elements,n)),M(i)&&(i=this.getElementIndex(t))<0&&(i=0)}z(i)||(i=0),this.build(),f(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.in);var o=document.body,r=window.innerWidth-document.documentElement.clientWidth;if(r>0){var a=document.createElement("style");a.type="text/css",a.className="gcss-styles",a.innerText=".gscrollbar-fixer {margin-right: ".concat(r,"px}"),document.head.appendChild(a),d(o,"gscrollbar-fixer")}d(o,"glightbox-open"),d(tt,"glightbox-open"),J&&(d(document.body,"glightbox-mobile"),this.settings.slideEffect="slide"),this.showSlide(i,!0),1==this.elements.length?(d(this.prevButton,"glightbox-button-hidden"),d(this.nextButton,"glightbox-button-hidden")):(u(this.prevButton,"glightbox-button-hidden"),u(this.nextButton,"glightbox-button-hidden")),this.lightboxOpen=!0,this.trigger("open"),E(this.settings.onOpen)&&this.settings.onOpen(),Q&&this.settings.touchNavigation&&X(this),this.settings.keyboardNavigation&&D(this)}},{key:"openAt",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.open(null,t)}},{key:"showSlide",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];v(this.loader),this.index=parseInt(e);var n=this.slidesContainer.querySelector(".current");n&&u(n,"current"),this.slideAnimateOut();var o=this.slidesContainer.querySelectorAll(".gslide")[e];if(g(o,"loaded"))this.slideAnimateIn(o,i),y(this.loader);else{v(this.loader);var r=this.elements[e],a={index:this.index,slide:o,slideNode:o,slideConfig:r.slideConfig,slideIndex:this.index,trigger:r.node,player:null};this.trigger("slide_before_load",a),r.instance.setContent(o,(function(){y(t.loader),t.resize(),t.slideAnimateIn(o,i),t.trigger("slide_after_load",a)}))}this.slideDescription=o.querySelector(".gslide-description"),this.slideDescriptionContained=this.slideDescription&&g(this.slideDescription.parentNode,"gslide-media"),this.settings.preload&&(this.preloadSlide(e+1),this.preloadSlide(e-1)),this.updateNavigationClasses(),this.activeSlide=o}},{key:"preloadSlide",value:function(t){var e=this;if(t<0||t>this.elements.length-1)return!1;if(M(this.elements[t]))return!1;var i=this.slidesContainer.querySelectorAll(".gslide")[t];if(g(i,"loaded"))return!1;var n=this.elements[t],o=n.type,r={index:t,slide:i,slideNode:i,slideConfig:n.slideConfig,slideIndex:t,trigger:n.node,player:null};this.trigger("slide_before_load",r),"video"==o||"external"==o?setTimeout((function(){n.instance.setContent(i,(function(){e.trigger("slide_after_load",r)}))}),200):n.instance.setContent(i,(function(){e.trigger("slide_after_load",r)}))}},{key:"prevSlide",value:function(){this.goToSlide(this.index-1)}},{key:"nextSlide",value:function(){this.goToSlide(this.index+1)}},{key:"goToSlide",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.prevActiveSlide=this.activeSlide,this.prevActiveSlideIndex=this.index,!this.loop()&&(t<0||t>this.elements.length-1))return!1;t<0?t=this.elements.length-1:t>=this.elements.length&&(t=0),this.showSlide(t)}},{key:"insertSlide",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;e<0&&(e=this.elements.length);var i=new Z(t,this,e),n=i.getConfig(),o=s({},n),r=i.create(),a=this.elements.length-1;o.index=e,o.node=!1,o.instance=i,o.slideConfig=n,this.elements.splice(e,0,o);var l=null,c=null;if(this.slidesContainer){if(e>a)this.slidesContainer.appendChild(r);else{var h=this.slidesContainer.querySelectorAll(".gslide")[e];this.slidesContainer.insertBefore(r,h)}(this.settings.preload&&0==this.index&&0==e||this.index-1==e||this.index+1==e)&&this.preloadSlide(e),0==this.index&&0==e&&(this.index=1),this.updateNavigationClasses(),l=this.slidesContainer.querySelectorAll(".gslide")[e],c=this.getSlidePlayerInstance(e),o.slideNode=l}this.trigger("slide_inserted",{index:e,slide:l,slideNode:l,slideConfig:n,slideIndex:e,trigger:null,player:c}),E(this.settings.slideInserted)&&this.settings.slideInserted({index:e,slide:l,player:c})}},{key:"removeSlide",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;if(t<0||t>this.elements.length-1)return!1;var e=this.slidesContainer&&this.slidesContainer.querySelectorAll(".gslide")[t];e&&(this.getActiveSlideIndex()==t&&(t==this.elements.length-1?this.prevSlide():this.nextSlide()),e.parentNode.removeChild(e)),this.elements.splice(t,1),this.trigger("slide_removed",t),E(this.settings.slideRemoved)&&this.settings.slideRemoved(t)}},{key:"slideAnimateIn",value:function(t,e){var i=this,n=t.querySelector(".gslide-media"),o=t.querySelector(".gslide-description"),r={index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlide,slideConfig:M(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:M(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},a={index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideConfig:this.elements[this.index].slideConfig,slideIndex:this.index,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)};if(n.offsetWidth>0&&o&&(y(o),o.style.display=""),u(t,this.effectsClasses),e)f(t,this.settings.cssEfects[this.settings.openEffect].in,(function(){i.settings.autoplayVideos&&i.slidePlayerPlay(t),i.trigger("slide_changed",{prev:r,current:a}),E(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[r,a])}));else{var s=this.settings.slideEffect,l="none"!==s?this.settings.cssEfects[s].in:s;this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(l=this.settings.cssEfects.slideBack.in),f(t,l,(function(){i.settings.autoplayVideos&&i.slidePlayerPlay(t),i.trigger("slide_changed",{prev:r,current:a}),E(i.settings.afterSlideChange)&&i.settings.afterSlideChange.apply(i,[r,a])}))}setTimeout((function(){i.resize(t)}),100),d(t,"current")}},{key:"slideAnimateOut",value:function(){if(!this.prevActiveSlide)return!1;var t=this.prevActiveSlide;u(t,this.effectsClasses),d(t,"prev");var e=this.settings.slideEffect,i="none"!==e?this.settings.cssEfects[e].out:e;this.slidePlayerPause(t),this.trigger("slide_before_change",{prev:{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlideIndex,slideConfig:M(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:M(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},current:{index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideIndex:this.index,slideConfig:this.elements[this.index].slideConfig,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)}}),E(this.settings.beforeSlideChange)&&this.settings.beforeSlideChange.apply(this,[{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},{index:this.index,slide:this.activeSlide,player:this.getSlidePlayerInstance(this.index)}]),this.prevActiveSlideIndex>this.index&&"slide"==this.settings.slideEffect&&(i=this.settings.cssEfects.slideBack.out),f(t,i,(function(){var e=t.querySelector(".gslide-media"),i=t.querySelector(".gslide-description");e.style.transform="",u(e,"greset"),e.style.opacity="",i&&(i.style.opacity=""),u(t,"prev")}))}},{key:"getAllPlayers",value:function(){return this.videoPlayers}},{key:"getSlidePlayerInstance",value:function(t){var e="gvideo"+t,i=this.getAllPlayers();return!(!I(i,e)||!i[e])&&i[e]}},{key:"stopSlideVideo",value:function(t){if(A(t)){var e=t.querySelector(".gvideo-wrapper");e&&(t=e.getAttribute("data-index"))}console.log("stopSlideVideo is deprecated, use slidePlayerPause");var i=this.getSlidePlayerInstance(t);i&&i.playing&&i.pause()}},{key:"slidePlayerPause",value:function(t){if(A(t)){var e=t.querySelector(".gvideo-wrapper");e&&(t=e.getAttribute("data-index"))}var i=this.getSlidePlayerInstance(t);i&&i.playing&&i.pause()}},{key:"playSlideVideo",value:function(t){if(A(t)){var e=t.querySelector(".gvideo-wrapper");e&&(t=e.getAttribute("data-index"))}console.log("playSlideVideo is deprecated, use slidePlayerPlay");var i=this.getSlidePlayerInstance(t);i&&!i.playing&&i.play()}},{key:"slidePlayerPlay",value:function(t){if(A(t)){var e=t.querySelector(".gvideo-wrapper");e&&(t=e.getAttribute("data-index"))}var i=this.getSlidePlayerInstance(t);console.log("Player is"),console.log(i),i&&!i.playing&&(i.play(),this.settings.autofocusVideos&&i.elements.container.focus())}},{key:"setElements",value:function(t){var e=this;this.settings.elements=!1;var i=[];t&&t.length&&l(t,(function(t,n){var o=new Z(t,e,n),r=o.getConfig(),a=s({},r);a.slideConfig=r,a.instance=o,a.index=n,i.push(a)})),this.elements=i,this.lightboxOpen&&(this.slidesContainer.innerHTML="",this.elements.length&&(l(this.elements,(function(){var t=b(e.settings.slideHTML);e.slidesContainer.appendChild(t)})),this.showSlide(0,!0)))}},{key:"getElementIndex",value:function(t){var e=!1;return l(this.elements,(function(i,n){if(I(i,"node")&&i.node==t)return e=n,!0})),e}},{key:"getElements",value:function(){var t=this,e=[];this.elements=this.elements?this.elements:[],!M(this.settings.elements)&&C(this.settings.elements)&&this.settings.elements.length&&l(this.settings.elements,(function(i,n){var o=new Z(i,t,n),r=o.getConfig(),a=s({},r);a.node=!1,a.index=n,a.instance=o,a.slideConfig=r,e.push(a)}));var i=!1;return this.getSelector()&&(i=document.querySelectorAll(this.getSelector())),i?(l(i,(function(i,n){var o=new Z(i,t,n),r=o.getConfig(),a=s({},r);a.node=i,a.index=n,a.instance=o,a.slideConfig=r,a.gallery=i.getAttribute("data-gallery"),e.push(a)})),e):e}},{key:"getGalleryElements",value:function(t,e){return t.filter((function(t){return t.gallery==e}))}},{key:"getSelector",value:function(){return!this.settings.elements&&(this.settings.selector&&"data-"==this.settings.selector.substring(0,5)?"*[".concat(this.settings.selector,"]"):this.settings.selector)}},{key:"getActiveSlide",value:function(){return this.slidesContainer.querySelectorAll(".gslide")[this.index]}},{key:"getActiveSlideIndex",value:function(){return this.index}},{key:"getAnimationClasses",value:function(){var t=[];for(var e in this.settings.cssEfects)if(this.settings.cssEfects.hasOwnProperty(e)){var i=this.settings.cssEfects[e];t.push("g".concat(i.in)),t.push("g".concat(i.out))}return t.join(" ")}},{key:"build",value:function(){var t=this;if(this.built)return!1;var e=I(this.settings.svg,"next")?this.settings.svg.next:"",i=I(this.settings.svg,"prev")?this.settings.svg.prev:"",n=I(this.settings.svg,"close")?this.settings.svg.close:"",o=this.settings.lightboxHTML;o=b(o=(o=(o=o.replace(/{nextSVG}/g,e)).replace(/{prevSVG}/g,i)).replace(/{closeSVG}/g,n)),document.body.appendChild(o);var r=document.getElementById("glightbox-body");this.modal=r;var a=r.querySelector(".gclose");this.prevButton=r.querySelector(".gprev"),this.nextButton=r.querySelector(".gnext"),this.overlay=r.querySelector(".goverlay"),this.loader=r.querySelector(".gloader"),this.slidesContainer=document.getElementById("glightbox-slider"),this.events={},d(this.modal,"glightbox-"+this.settings.skin),this.settings.closeButton&&a&&(this.events.close=h("click",{onElement:a,withCallback:function(e,i){e.preventDefault(),t.close()}})),a&&!this.settings.closeButton&&a.parentNode.removeChild(a),this.nextButton&&(this.events.next=h("click",{onElement:this.nextButton,withCallback:function(e,i){e.preventDefault(),t.nextSlide()}})),this.prevButton&&(this.events.prev=h("click",{onElement:this.prevButton,withCallback:function(e,i){e.preventDefault(),t.prevSlide()}})),this.settings.closeOnOutsideClick&&(this.events.outClose=h("click",{onElement:r,withCallback:function(e,i){t.preventOutsideClick||g(document.body,"glightbox-mobile")||p(e.target,".ginner-container")||p(e.target,".gbtn")||g(e.target,"gnext")||g(e.target,"gprev")||t.close()}})),l(this.elements,(function(e,i){t.slidesContainer.appendChild(e.instance.create()),e.slideNode=t.slidesContainer.querySelectorAll(".gslide")[i]})),Q&&d(document.body,"glightbox-touch"),this.events.resize=h("resize",{onElement:window,withCallback:function(){t.resize()}}),this.built=!0}},{key:"resize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if((t=t||this.activeSlide)&&!g(t,"zoomed")){var e=w(),i=t.querySelector(".gvideo-wrapper"),n=t.querySelector(".gslide-image"),o=this.slideDescription,r=e.width,a=e.height;if(r<=768?d(document.body,"glightbox-mobile"):u(document.body,"glightbox-mobile"),i||n){var s=!1;if(o&&(g(o,"description-bottom")||g(o,"description-top"))&&!g(o,"gabsolute")&&(s=!0),n)if(r<=768)n.querySelector("img").setAttribute("style","");else if(s){var l=o.offsetHeight,c=n.querySelector("img");c.setAttribute("style","max-height: calc(100vh - ".concat(l,"px)")),o.setAttribute("style","max-width: ".concat(c.offsetWidth,"px;"))}if(i){var h=(I(this.settings.plyr.config,"ratio")?this.settings.plyr.config.ratio:"16:9").split(":"),p=900,f=p/(parseInt(h[0])/parseInt(h[1]));if(f=Math.floor(f),s&&(a-=o.offsetHeight),a<f&&r>p){var m=i.offsetWidth,v=i.offsetHeight,y=a/v,b={width:m*y,height:v*y};i.parentNode.setAttribute("style","max-width: ".concat(b.width,"px")),s&&o.setAttribute("style","max-width: ".concat(b.width,"px;"))}else i.parentNode.style.maxWidth="".concat(p,"px"),s&&o.setAttribute("style","max-width: ".concat(p,"px;"))}}}}},{key:"reload",value:function(){this.init()}},{key:"updateNavigationClasses",value:function(){var t=this.loop();u(this.nextButton,"disabled"),u(this.prevButton,"disabled"),0==this.index&&this.elements.length-1==0?(d(this.prevButton,"disabled"),d(this.nextButton,"disabled")):0!==this.index||t?this.index!==this.elements.length-1||t||d(this.nextButton,"disabled"):d(this.prevButton,"disabled")}},{key:"loop",value:function(){var t=I(this.settings,"loopAtEnd")?this.settings.loopAtEnd:null;return t=I(this.settings,"loop")?this.settings.loop:t}},{key:"close",value:function(){var t=this;if(!this.lightboxOpen){if(this.events){for(var e in this.events)this.events.hasOwnProperty(e)&&this.events[e].destroy();this.events=null}return!1}if(this.closing)return!1;this.closing=!0,this.slidePlayerPause(this.activeSlide),this.fullElementsList&&(this.elements=this.fullElementsList),d(this.modal,"glightbox-closing"),f(this.overlay,"none"==this.settings.openEffect?"none":this.settings.cssEfects.fade.out),f(this.activeSlide,this.settings.cssEfects[this.settings.closeEffect].out,(function(){if(t.activeSlide=null,t.prevActiveSlideIndex=null,t.prevActiveSlide=null,t.built=!1,t.events){for(var e in t.events)t.events.hasOwnProperty(e)&&t.events[e].destroy();t.events=null}var i=document.body;u(tt,"glightbox-open"),u(i,"glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"),t.modal.parentNode.removeChild(t.modal),t.trigger("close"),E(t.settings.onClose)&&t.settings.onClose();var n=document.querySelector(".gcss-styles");n&&n.parentNode.removeChild(n),t.lightboxOpen=!1,t.closing=null}))}},{key:"destroy",value:function(){this.close(),this.clearAllEvents(),this.baseEvents&&this.baseEvents.destroy()}},{key:"on",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!t||!E(e))throw new TypeError("Event name and callback must be defined");this.apiEvents.push({evt:t,once:i,callback:e})}},{key:"once",value:function(t,e){this.on(t,e,!0)}},{key:"trigger",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[];l(this.apiEvents,(function(e,o){var r=e.evt,a=e.once,s=e.callback;r==t&&(s(i),a&&n.push(o))})),n.length&&l(n,(function(t){return e.apiEvents.splice(t,1)}))}},{key:"clearAllEvents",value:function(){this.apiEvents.splice(0,this.apiEvents.length)}},{key:"version",value:function(){return"3.0.7"}}]),t}();return function(){var t=new it(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{});return t.init(),t}}()}));e.a=n}).call(this,i(43))},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,i){"use strict";var n=i(19),o=i(60),r=i(14),a=i(23),s=i(68),l="Array Iterator",c=a.set,h=a.getterFor(l);t.exports=s(Array,"Array",(function(t,e){c(this,{type:l,target:n(t),index:0,kind:e})}),(function(){var t=h(this),e=t.target,i=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==i?{value:n,done:!1}:"values"==i?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),r.Arguments=r.Array,o("keys"),o("values"),o("entries")},function(t,e,i){var n=i(1),o=i(31),r=i(8),a=n("unscopables"),s=Array.prototype;null==s[a]&&r.f(s,a,{configurable:!0,value:o(null)}),t.exports=function(t){s[a][t]=!0}},function(t,e,i){var n=i(48);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,i){var n=i(7),o=i(8),r=i(12),a=i(63);t.exports=n?Object.defineProperties:function(t,e){r(t);for(var i,n=a(e),s=n.length,l=0;s>l;)o.f(t,i=n[l++],e[i]);return t}},function(t,e,i){var n=i(49),o=i(33);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,i){var n=i(19),o=i(11),r=i(50),a=function(t){return function(e,i,a){var s,l=n(e),c=o(l.length),h=r(a,c);if(t&&i!=i){for(;c>h;)if((s=l[h++])!=s)return!0}else for(;c>h;h++)if((t||h in l)&&l[h]===i)return t||h||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,e,i){var n=i(34);t.exports=n("document","documentElement")},function(t,e,i){var n=i(0);t.exports=n},function(t,e,i){var n=i(0),o=i(51),r=n.WeakMap;t.exports="function"==typeof r&&/native code/.test(o(r))},function(t,e,i){"use strict";var n=i(24),o=i(74),r=i(25),a=i(17),s=i(38),l=i(3),c=i(15),h=i(1),d=i(26),u=i(14),g=i(52),p=g.IteratorPrototype,f=g.BUGGY_SAFARI_ITERATORS,m=h("iterator"),v="keys",y="values",b="entries",w=function(){return this};t.exports=function(t,e,i,h,g,x,_){o(i,e,h);var S,k,E,T=function(t){if(t===g&&M)return M;if(!f&&t in L)return L[t];switch(t){case v:case y:case b:return function(){return new i(this,t)}}return function(){return new i(this)}},A=e+" Iterator",C=!1,L=t.prototype,O=L[m]||L["@@iterator"]||g&&L[g],M=!f&&O||T(g),I="Array"==e&&L.entries||O;if(I&&(S=r(I.call(new t)),p!==Object.prototype&&S.next&&(d||r(S)===p||(a?a(S,p):"function"!=typeof S[m]&&l(S,m,w)),s(S,A,!0,!0),d&&(u[A]=w))),g==y&&O&&O.name!==y&&(C=!0,M=function(){return O.call(this)}),d&&!_||L[m]===M||l(L,m,M),u[e]=M,g)if(k={values:T(y),keys:x?M:T(v),entries:T(b)},_)for(E in k)(f||C||!(E in L))&&c(L,E,k[E]);else n({target:e,proto:!0,forced:f||C},k);return k}},function(t,e,i){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,r=o&&!n.call({1:2},1);e.f=r?function(t){var e=o(this,t);return!!e&&e.enumerable}:n},function(t,e,i){var n=i(4),o=i(71),r=i(36),a=i(8);t.exports=function(t,e){for(var i=o(e),s=a.f,l=r.f,c=0;c<i.length;c++){var h=i[c];n(t,h)||s(t,h,l(e,h))}}},function(t,e,i){var n=i(34),o=i(37),r=i(72),a=i(12);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(a(t)),i=r.f;return i?e.concat(i(t)):e}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,i){var n=i(2),o=/#|\.prototype\./,r=function(t,e){var i=s[a(t)];return i==c||i!=l&&("function"==typeof e?n(e):!!e)},a=r.normalize=function(t){return String(t).replace(o,".").toLowerCase()},s=r.data={},l=r.NATIVE="N",c=r.POLYFILL="P";t.exports=r},function(t,e,i){"use strict";var n=i(52).IteratorPrototype,o=i(31),r=i(22),a=i(38),s=i(14),l=function(){return this};t.exports=function(t,e,i){var c=e+" Iterator";return t.prototype=o(n,{next:r(1,i)}),a(t,c,!1,!0),s[c]=l,t}},function(t,e,i){var n=i(2);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,i){var n=i(9);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,i){"use strict";i(78);var n=i(15),o=i(2),r=i(1),a=i(39),s=i(3),l=r("species"),c=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),h="$0"==="a".replace(/./,"$0"),d=r("replace"),u=!!/./[d]&&""===/./[d]("a","$0"),g=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2!==i.length||"a"!==i[0]||"b"!==i[1]}));t.exports=function(t,e,i,d){var p=r(t),f=!o((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),m=f&&!o((function(){var e=!1,i=/a/;return"split"===t&&((i={}).constructor={},i.constructor[l]=function(){return i},i.flags="",i[p]=/./[p]),i.exec=function(){return e=!0,null},i[p](""),!e}));if(!f||!m||"replace"===t&&(!c||!h||u)||"split"===t&&!g){var v=/./[p],y=i(p,""[t],(function(t,e,i,n,o){return e.exec===a?f&&!o?{done:!0,value:v.call(e,i,n)}:{done:!0,value:t.call(i,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:h,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:u}),b=y[0],w=y[1];n(String.prototype,t,b),n(RegExp.prototype,p,2==e?function(t,e){return w.call(t,this,e)}:function(t){return w.call(t,this)})}d&&s(RegExp.prototype[p],"sham",!0)}},function(t,e,i){"use strict";var n=i(24),o=i(39);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,e,i){"use strict";var n=i(12);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,i){"use strict";var n=i(2);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,i){"use strict";var n=i(82).charAt;t.exports=function(t,e,i){return e+(i?n(t,e).length:1)}},function(t,e,i){var n=i(13),o=i(21),r=function(t){return function(e,i){var r,a,s=String(o(e)),l=n(i),c=s.length;return l<0||l>=c?t?"":void 0:(r=s.charCodeAt(l))<55296||r>56319||l+1===c||(a=s.charCodeAt(l+1))<56320||a>57343?t?s.charAt(l):r:t?s.slice(l,l+2):a-56320+(r-55296<<10)+65536}};t.exports={codeAt:r(!1),charAt:r(!0)}},function(t,e,i){var n=i(16),o=Math.floor,r="".replace,a=/\$([$&'`]|\d\d?|<[^>]*>)/g,s=/\$([$&'`]|\d\d?)/g;t.exports=function(t,e,i,l,c,h){var d=i+t.length,u=l.length,g=s;return void 0!==c&&(c=n(c),g=a),r.call(h,g,(function(n,r){var a;switch(r.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,i);case"'":return e.slice(d);case"<":a=c[r.slice(1,-1)];break;default:var s=+r;if(0===s)return n;if(s>u){var h=o(s/10);return 0===h?n:h<=u?void 0===l[h-1]?r.charAt(1):l[h-1]+r.charAt(1):n}a=l[s-1]}return void 0===a?"":a}))}},function(t,e,i){var n=i(20),o=i(39);t.exports=function(t,e){var i=t.exec;if("function"==typeof i){var r=i.call(t,e);if("object"!=typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},function(t,e,i){i(10)("Float32",(function(t){return function(e,i,n){return t(this,e,i,n)}}))},function(t,e,i){var n=i(0),o=i(2),r=i(87),a=i(40).NATIVE_ARRAY_BUFFER_VIEWS,s=n.ArrayBuffer,l=n.Int8Array;t.exports=!a||!o((function(){l(1)}))||!o((function(){new l(-1)}))||!r((function(t){new l,new l(null),new l(1.5),new l(t)}),!0)||o((function(){return 1!==new l(new s(2),1,void 0).length}))},function(t,e,i){var n=i(1)("iterator"),o=!1;try{var r=0,a={next:function(){return{done:!!r++}},return:function(){o=!0}};a[n]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var i=!1;try{var r={};r[n]=function(){return{next:function(){return{done:i=!0}}}},t(r)}catch(t){}return i}},function(t,e,i){var n={};n[i(1)("toStringTag")]="z",t.exports="[object z]"===String(n)},function(t,e,i){"use strict";var n=i(0),o=i(7),r=i(53),a=i(3),s=i(90),l=i(2),c=i(54),h=i(13),d=i(11),u=i(55),g=i(91),p=i(25),f=i(17),m=i(37).f,v=i(8).f,y=i(92),b=i(38),w=i(23),x=w.get,_=w.set,S="ArrayBuffer",k="DataView",E="Wrong index",T=n.ArrayBuffer,A=T,C=n.DataView,L=C&&C.prototype,O=Object.prototype,M=n.RangeError,I=g.pack,P=g.unpack,z=function(t){return[255&t]},D=function(t){return[255&t,t>>8&255]},N=function(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]},j=function(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]},R=function(t){return I(t,23,4)},q=function(t){return I(t,52,8)},H=function(t,e){v(t.prototype,e,{get:function(){return x(this)[e]}})},Y=function(t,e,i,n){var o=u(i),r=x(t);if(o+e>r.byteLength)throw M(E);var a=x(r.buffer).bytes,s=o+r.byteOffset,l=a.slice(s,s+e);return n?l:l.reverse()},X=function(t,e,i,n,o,r){var a=u(i),s=x(t);if(a+e>s.byteLength)throw M(E);for(var l=x(s.buffer).bytes,c=a+s.byteOffset,h=n(+o),d=0;d<e;d++)l[c+d]=h[r?d:e-d-1]};if(r){if(!l((function(){T(1)}))||!l((function(){new T(-1)}))||l((function(){return new T,new T(1.5),new T(NaN),T.name!=S}))){for(var B,F=(A=function(t){return c(this,A),new T(u(t))}).prototype=T.prototype,V=m(T),$=0;V.length>$;)(B=V[$++])in A||a(A,B,T[B]);F.constructor=A}f&&p(L)!==O&&f(L,O);var W=new C(new A(2)),U=L.setInt8;W.setInt8(0,2147483648),W.setInt8(1,2147483649),!W.getInt8(0)&&W.getInt8(1)||s(L,{setInt8:function(t,e){U.call(this,t,e<<24>>24)},setUint8:function(t,e){U.call(this,t,e<<24>>24)}},{unsafe:!0})}else A=function(t){c(this,A,S);var e=u(t);_(this,{bytes:y.call(new Array(e),0),byteLength:e}),o||(this.byteLength=e)},C=function(t,e,i){c(this,C,k),c(t,A,k);var n=x(t).byteLength,r=h(e);if(r<0||r>n)throw M("Wrong offset");if(r+(i=void 0===i?n-r:d(i))>n)throw M("Wrong length");_(this,{buffer:t,byteLength:i,byteOffset:r}),o||(this.buffer=t,this.byteLength=i,this.byteOffset=r)},o&&(H(A,"byteLength"),H(C,"buffer"),H(C,"byteLength"),H(C,"byteOffset")),s(C.prototype,{getInt8:function(t){return Y(this,1,t)[0]<<24>>24},getUint8:function(t){return Y(this,1,t)[0]},getInt16:function(t){var e=Y(this,2,t,arguments.length>1?arguments[1]:void 0);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=Y(this,2,t,arguments.length>1?arguments[1]:void 0);return e[1]<<8|e[0]},getInt32:function(t){return j(Y(this,4,t,arguments.length>1?arguments[1]:void 0))},getUint32:function(t){return j(Y(this,4,t,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(t){return P(Y(this,4,t,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(t){return P(Y(this,8,t,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(t,e){X(this,1,t,z,e)},setUint8:function(t,e){X(this,1,t,z,e)},setInt16:function(t,e){X(this,2,t,D,e,arguments.length>2?arguments[2]:void 0)},setUint16:function(t,e){X(this,2,t,D,e,arguments.length>2?arguments[2]:void 0)},setInt32:function(t,e){X(this,4,t,N,e,arguments.length>2?arguments[2]:void 0)},setUint32:function(t,e){X(this,4,t,N,e,arguments.length>2?arguments[2]:void 0)},setFloat32:function(t,e){X(this,4,t,R,e,arguments.length>2?arguments[2]:void 0)},setFloat64:function(t,e){X(this,8,t,q,e,arguments.length>2?arguments[2]:void 0)}});b(A,S),b(C,k),t.exports={ArrayBuffer:A,DataView:C}},function(t,e,i){var n=i(15);t.exports=function(t,e,i){for(var o in e)n(t,o,e[o],i);return t}},function(t,e){var i=1/0,n=Math.abs,o=Math.pow,r=Math.floor,a=Math.log,s=Math.LN2;t.exports={pack:function(t,e,l){var c,h,d,u=new Array(l),g=8*l-e-1,p=(1<<g)-1,f=p>>1,m=23===e?o(2,-24)-o(2,-77):0,v=t<0||0===t&&1/t<0?1:0,y=0;for((t=n(t))!=t||t===i?(h=t!=t?1:0,c=p):(c=r(a(t)/s),t*(d=o(2,-c))<1&&(c--,d*=2),(t+=c+f>=1?m/d:m*o(2,1-f))*d>=2&&(c++,d/=2),c+f>=p?(h=0,c=p):c+f>=1?(h=(t*d-1)*o(2,e),c+=f):(h=t*o(2,f-1)*o(2,e),c=0));e>=8;u[y++]=255&h,h/=256,e-=8);for(c=c<<e|h,g+=e;g>0;u[y++]=255&c,c/=256,g-=8);return u[--y]|=128*v,u},unpack:function(t,e){var n,r=t.length,a=8*r-e-1,s=(1<<a)-1,l=s>>1,c=a-7,h=r-1,d=t[h--],u=127&d;for(d>>=7;c>0;u=256*u+t[h],h--,c-=8);for(n=u&(1<<-c)-1,u>>=-c,c+=e;c>0;n=256*n+t[h],h--,c-=8);if(0===u)u=1-l;else{if(u===s)return n?NaN:d?-1/0:i;n+=o(2,e),u-=l}return(d?-1:1)*n*o(2,u-e)}}},function(t,e,i){"use strict";var n=i(16),o=i(50),r=i(11);t.exports=function(t){for(var e=n(this),i=r(e.length),a=arguments.length,s=o(a>1?arguments[1]:void 0,i),l=a>2?arguments[2]:void 0,c=void 0===l?i:o(l,i);c>s;)e[s++]=t;return e}},function(t,e,i){var n=i(94);t.exports=function(t,e){var i=n(t);if(i%e)throw RangeError("Wrong offset");return i}},function(t,e,i){var n=i(13);t.exports=function(t){var e=n(t);if(e<0)throw RangeError("The argument can't be less than 0");return e}},function(t,e,i){var n=i(16),o=i(11),r=i(96),a=i(97),s=i(56),l=i(40).aTypedArrayConstructor;t.exports=function(t){var e,i,c,h,d,u,g=n(t),p=arguments.length,f=p>1?arguments[1]:void 0,m=void 0!==f,v=r(g);if(null!=v&&!a(v))for(u=(d=v.call(g)).next,g=[];!(h=u.call(d)).done;)g.push(h.value);for(m&&p>2&&(f=s(f,arguments[2],2)),i=o(g.length),c=new(l(this))(i),e=0;i>e;e++)c[e]=m?f(g[e],e):g[e];return c}},function(t,e,i){var n=i(41),o=i(14),r=i(1)("iterator");t.exports=function(t){if(null!=t)return t[r]||t["@@iterator"]||o[n(t)]}},function(t,e,i){var n=i(1),o=i(14),r=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[r]===t)}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,i){var n=i(56),o=i(44),r=i(16),a=i(11),s=i(100),l=[].push,c=function(t){var e=1==t,i=2==t,c=3==t,h=4==t,d=6==t,u=7==t,g=5==t||d;return function(p,f,m,v){for(var y,b,w=r(p),x=o(w),_=n(f,m,3),S=a(x.length),k=0,E=v||s,T=e?E(p,S):i||u?E(p,0):void 0;S>k;k++)if((g||k in x)&&(b=_(y=x[k],k,w),t))if(e)T[k]=b;else if(b)switch(t){case 3:return!0;case 5:return y;case 6:return k;case 2:l.call(T,y)}else switch(t){case 4:return!1;case 7:l.call(T,y)}return d?-1:c||h?h:T}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterOut:c(7)}},function(t,e,i){var n=i(9),o=i(101),r=i(1)("species");t.exports=function(t,e){var i;return o(t)&&("function"!=typeof(i=t.constructor)||i!==Array&&!o(i.prototype)?n(i)&&null===(i=i[r])&&(i=void 0):i=void 0),new(void 0===i?Array:i)(0===e?0:e)}},function(t,e,i){var n=i(20);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,e,i){"use strict";var n=i(34),o=i(8),r=i(1),a=i(7),s=r("species");t.exports=function(t){var e=n(t),i=o.f;a&&e&&!e[s]&&i(e,s,{configurable:!0,get:function(){return this}})}},function(t,e,i){var n=i(9),o=i(17);t.exports=function(t,e,i){var r,a;return o&&"function"==typeof(r=e.constructor)&&r!==i&&n(a=r.prototype)&&a!==i.prototype&&o(t,a),t}},function(t,e,i){i(10)("Float64",(function(t){return function(e,i,n){return t(this,e,i,n)}}))},function(t,e,i){i(10)("Int8",(function(t){return function(e,i,n){return t(this,e,i,n)}}))},function(t,e,i){i(10)("Int16",(function(t){return function(e,i,n){return t(this,e,i,n)}}))},function(t,e,i){i(10)("Int32",(function(t){return function(e,i,n){return t(this,e,i,n)}}))},function(t,e,i){i(10)("Uint8",(function(t){return function(e,i,n){return t(this,e,i,n)}}))},function(t,e,i){i(10)("Uint8",(function(t){return function(e,i,n){return t(this,e,i,n)}}),!0)},function(t,e,i){i(10)("Uint16",(function(t){return function(e,i,n){return t(this,e,i,n)}}))},function(t,e,i){i(10)("Uint32",(function(t){return function(e,i,n){return t(this,e,i,n)}}))},function(t,e,i){"use strict";i(24)({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},function(t,e,i){"use strict";i.r(e);i(6);!function(){var t="function"==typeof Promise?Promise:function(t){var e,i=[],n=0;return t((function(t){e=t,n=1,i.splice(0).forEach(o)})),{then:o};function o(t){return n?setTimeout(t,0,e):i.push(t),this}},e=function(t,e){var i=function(t){for(var e=0,i=t.length;e<i;e++)n(t[e])},n=function(t){var e=t.target,i=t.attributeName,n=t.oldValue;e.attributeChangedCallback(i,n,e.getAttribute(i))};return function(o,r){var a=o.constructor.observedAttributes;return a&&t(r).then((function(){new e(i).observe(o,{attributes:!0,attributeOldValue:!0,attributeFilter:a});for(var t=0,r=a.length;t<r;t++)o.hasAttribute(a[t])&&n({target:o,attributeName:a[t],oldValue:null})})),o}},i=self,n=i.document,o=i.MutationObserver,r=i.Set,a=i.WeakMap,s=function(t){return"querySelectorAll"in t},l=[].filter,c=function(t){var e=new a,i=function(e){var i=t.query;if(i.length)for(var n=0,o=e.length;n<o;n++)c(l.call(e[n].addedNodes,s),!0,i),c(l.call(e[n].removedNodes,s),!1,i)},c=function i(n,o,a){for(var s,l,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new r,d=function(d,g,p,f){if(!c.has(g=n[p])){if(c.add(g),o)for(var m,v=h(g),y=0,b=a.length;y<b;y++)v.call(g,m=a[y])&&(e.has(g)||e.set(g,new r),(d=e.get(g)).has(m)||(d.add(m),t.handle(g,o,m)));else e.has(g)&&(d=e.get(g),e.delete(g),d.forEach((function(e){t.handle(g,o,e)})));i(u(g),o,a,c)}s=d,l=g},g=0,p=n.length;g<p;g++)d(s,l,g)},h=function(t){return t.matches||t.webkitMatchesSelector||t.msMatchesSelector},d=function(e){var i=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];c(e,i,t.query)},u=function(t){return f.length?t.querySelectorAll(f):f},g=new o(i),p=t.root||n,f=t.query;return g.observe(p,{childList:!0,subtree:!0}),d(u(p)),{drop:function(t){for(var i=0,n=t.length;i<n;i++)e.delete(t[i])},flush:function(){i(g.takeRecords())},observer:g,parse:d}},h=self,d=h.document,u=h.Map,g=h.MutationObserver,p=h.Object,f=h.Set,m=h.WeakMap,v=h.Element,y=h.HTMLElement,b=h.Node,w=h.Error,x=h.TypeError,_=h.Reflect,S=self.Promise||t,k=p.defineProperty,E=p.keys,T=p.getOwnPropertyNames,A=p.setPrototypeOf,C=!self.customElements;if(C){var L=function(){var t=this.constructor;if(!M.has(t))throw new x("Illegal constructor");var e=M.get(t);if(j)return q(j,e);var i=O.call(d,e);return q(A(i,t.prototype),e)},O=d.createElement,M=new u,I=new u,P=new u,z=new u,D=[],N=c({query:D,handle:function(t,e,i){var n=P.get(i);if(e&&!n.isPrototypeOf(t)){j=A(t,n);try{new n.constructor}finally{j=null}}var o="".concat(e?"":"dis","connectedCallback");o in n&&t[o]()}}).parse,j=null,R=function(e){if(!I.has(e)){var i,n=new t((function(t){i=t}));I.set(e,{$:n,_:i})}return I.get(e).$},q=e(R,g);k(self,"customElements",{configurable:!0,value:{define:function(t,e){if(z.has(t))throw new w('the name "'.concat(t,'" has already been used with this registry'));M.set(e,t),P.set(t,e.prototype),z.set(t,e),D.push(t),R(t).then((function(){N(d.querySelectorAll(t))})),I.get(t)._(e)},get:function(t){return z.get(t)},whenDefined:R}}),k(L.prototype=y.prototype,"constructor",{value:L}),k(self,"HTMLElement",{configurable:!0,value:L}),k(d,"createElement",{configurable:!0,value:function(t,e){var i=e&&e.is,n=i?z.get(i):z.get(t);return n?new n:O.call(d,t)}}),"isConnected"in b.prototype||k(b.prototype,"isConnected",{configurable:!0,get:function(){return!(this.ownerDocument.compareDocumentPosition(this)&this.DOCUMENT_POSITION_DISCONNECTED)}})}else try{var H=function t(){return self.Reflect.construct(HTMLLIElement,[],t)};H.prototype=HTMLLIElement.prototype;var Y="extends-li";self.customElements.define("extends-li",H,{extends:"li"}),C=d.createElement("li",{is:Y}).outerHTML.indexOf(Y)<0;var X=self.customElements,B=X.get,F=X.whenDefined;k(self.customElements,"whenDefined",{configurable:!0,value:function(t){var e=this;return F.call(this,t).then((function(i){return i||B.call(e,t)}))}})}catch(t){C=!C}if(C){var V=function(t){var e=J.get(t);(0,e.parse)(e.root.querySelectorAll(this),t.isConnected)},$=self.customElements,W=v.prototype.attachShadow,U=d.createElement,G=$.define,K=$.get,Z=(_||{construct:function(t){return t.call(this)}}).construct,J=new m,Q=new f,tt=new u,et=new u,it=new u,nt=new u,ot=[],rt=[],at=function(t){return nt.get(t)||K.call($,t)},st=function(t,e,i){var n=it.get(i);if(e&&!n.isPrototypeOf(t)){var o=E(t),r=o.map((function(e){var i=t[e];return delete t[e],i}));ut=A(t,n);try{new n.constructor}finally{ut=null;for(var a=0,s=o.length;a<s;a++)t[o[a]]=r[a]}}var l="".concat(e?"":"dis","connectedCallback");l in n&&t[l]()},lt=c({query:rt,handle:st}).parse,ct=c({query:ot,handle:function(t,e){J.has(t)&&(e?Q.add(t):Q.delete(t),V.call(rt,t))}}).parse,ht=function(t){if(!et.has(t)){var e,i=new S((function(t){e=t}));et.set(t,{$:i,_:e})}return et.get(t).$},dt=e(ht,g),ut=null;T(self).filter((function(t){return/^HTML/.test(t)})).forEach((function(t){var e=self[t];function i(){var t=this.constructor;if(!tt.has(t))throw new x("Illegal constructor");var i=tt.get(t),n=i.is,o=i.tag;if(n){if(ut)return dt(ut,n);var r=U.call(d,o);return r.setAttribute("is",n),dt(A(r,t.prototype),n)}return Z.call(this,e,[],t)}k(i.prototype=e.prototype,"constructor",{value:i}),k(self,t,{value:i})})),k(d,"createElement",{configurable:!0,value:function(t,e){var i=e&&e.is;if(i){var n=nt.get(i);if(n&&tt.get(n).tag===t)return new n}var o=U.call(d,t);return i&&o.setAttribute("is",i),o}}),W&&k(v.prototype,"attachShadow",{configurable:!0,value:function(){var t=W.apply(this,arguments),e=c({query:rt,root:t,handle:st}),i=e.parse;return J.set(this,{root:t,parse:i}),t}}),k($,"get",{configurable:!0,value:at}),k($,"whenDefined",{configurable:!0,value:ht}),k($,"define",{configurable:!0,value:function(t,e,i){if(at(t))throw new w("'".concat(t,"' has already been defined as a custom element"));var n,o=i&&i.extends;tt.set(e,o?{is:t,tag:o}:{is:"",tag:t}),o?(n="".concat(o,'[is="').concat(t,'"]'),it.set(n,e.prototype),nt.set(t,e),rt.push(n)):(G.apply($,arguments),ot.push(n=t)),ht(t).then((function(){o?(lt(d.querySelectorAll(n)),Q.forEach(V,[n])):ct(d.querySelectorAll(n))})),et.get(t)._(e)}})}}();i(18);var n=t=>({get:e=>t.get(e),set:(e,i)=>(t.set(e,i),i)});const o=/([^\s\\>"'=]+)\s*=\s*(['"]?)$/,r=/^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i,a=/<[a-z][^>]+$/i,s=/>[^<>]*$/,l=/<([a-z]+[a-z0-9:._-]*)([^>]*?)(\/>)/gi,c=/\s+$/,h=(t,e)=>0<e--&&(a.test(t[e])||!s.test(t[e])&&h(t,e)),d=(t,e,i)=>r.test(e)?t:`<${e}${i.replace(c,"")}></${e}>`;const{isArray:u}=Array,{indexOf:g,slice:p}=[],f=(t,e)=>111===t.nodeType?1/e<0?e?(({firstChild:t,lastChild:e})=>{const i=document.createRange();return i.setStartAfter(t),i.setEndAfter(e),i.deleteContents(),t})(t):t.lastChild:e?t.valueOf():t.firstChild:t;var m=function(t){var e="fragment",i="template",n="content"in r(i)?function(t){var e=r(i);return e.innerHTML=t,e.content}:function(t){var n=r(e),a=r(i),s=null;if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var l=RegExp.$1;a.innerHTML="<table>"+t+"</table>",s=a.querySelectorAll(l)}else a.innerHTML=t,s=a.childNodes;return o(n,s),n};return function(t,e){return("svg"===e?a:n)(t)};function o(t,e){for(var i=e.length;i--;)t.appendChild(e[0])}function r(i){return i===e?t.createDocumentFragment():t.createElementNS("http://www.w3.org/1999/xhtml",i)}function a(t){var i=r(e),n=r("div");return n.innerHTML='<svg xmlns="http://www.w3.org/2000/svg">'+t+"</svg>",o(i,n.firstChild.childNodes),i}}(document);const v=({childNodes:t},e)=>t[e],y=t=>{const e=[];let{parentNode:i}=t;for(;i;)e.push(g.call(i.childNodes,t)),i=(t=i).parentNode;return e},{createTreeWalker:b,importNode:w}=document,x=1!=w.length,_=x?(t,e,i)=>w.call(document,m(t,e,i),!0):m,S=x?t=>b.call(document,t,129,null,!1):t=>b.call(document,t,129),k=(t,e,i)=>((t,e,i,n,o)=>{const r=i.length;let a=e.length,s=r,l=0,c=0,h=null;for(;l<a||c<s;)if(a===l){const e=s<r?c?n(i[c-1],-0).nextSibling:n(i[s-c],0):o;for(;c<s;)t.insertBefore(n(i[c++],1),e)}else if(s===c)for(;l<a;)h&&h.has(e[l])||t.removeChild(n(e[l],-1)),l++;else if(e[l]===i[c])l++,c++;else if(e[a-1]===i[s-1])a--,s--;else if(e[l]===i[s-1]&&i[c]===e[a-1]){const o=n(e[--a],-1).nextSibling;t.insertBefore(n(i[c++],1),n(e[l++],-1).nextSibling),t.insertBefore(n(i[--s],1),o),e[a]=i[s]}else{if(!h){h=new Map;let t=c;for(;t<s;)h.set(i[t],t++)}if(h.has(e[l])){const o=h.get(e[l]);if(c<o&&o<s){let r=l,d=1;for(;++r<a&&r<s&&h.get(e[r])===o+d;)d++;if(d>o-c){const r=n(e[l],0);for(;c<o;)t.insertBefore(n(i[c++],1),r)}else t.replaceChild(n(i[c++],1),n(e[l++],-1))}else l++}else t.removeChild(n(e[l++],-1))}return i})(t.parentNode,e,i,f,t),E=(t,e)=>"ref"===e?(t=>e=>{"function"==typeof e?e(t):e.current=t})(t):"aria"===e?(t=>e=>{for(const i in e){const n="role"===i?i:`aria-${i}`,o=e[i];null==o?t.removeAttribute(n):t.setAttribute(n,o)}})(t):".dataset"===e?(({dataset:t})=>e=>{for(const i in e){const n=e[i];null==n?delete t[i]:t[i]=n}})(t):"."===e.slice(0,1)?((t,e)=>i=>{t[e]=i})(t,e.slice(1)):"on"===e.slice(0,2)?((t,e)=>{let i,n=e.slice(2);return!(e in t)&&e.toLowerCase()in t&&(n=n.toLowerCase()),e=>{const o=u(e)?e:[e,!1];i!==o[0]&&(i&&t.removeEventListener(n,i,o[1]),(i=o[0])&&t.addEventListener(n,i,o[1]))}})(t,e):((t,e)=>{let i,n=!0;const o=document.createAttributeNS(null,e);return e=>{i!==e&&(i=e,null==i?n||(t.removeAttributeNode(o),n=!0):(o.value=e,n&&(t.setAttributeNodeNS(o),n=!1)))}})(t,e);function T(t){const{type:e,path:i}=t,n=i.reduceRight(v,this);return"node"===e?(t=>{let e,i,n=[];const o=r=>{switch(typeof r){case"string":case"number":case"boolean":e!==r&&(e=r,i?i.textContent=r:i=document.createTextNode(r),n=k(t,n,[i]));break;case"object":case"undefined":if(null==r){e!=r&&(e=r,n=k(t,n,[]));break}if(u(r)){e=r,0===r.length?n=k(t,n,[]):"object"==typeof r[0]?n=k(t,n,r):o(String(r));break}"ELEMENT_NODE"in r&&e!==r&&(e=r,n=k(t,n,11===r.nodeType?p.call(r.childNodes):[r]))}};return o})(n):"attr"===e?E(n,t.name):(t=>{let e;return i=>{e!=i&&(e=i,t.textContent=null==i?"":i)}})(n)}const A="isµ",C=n(new WeakMap),L=/^(?:plaintext|script|style|textarea|title|xmp)$/i,O=(t,e)=>{const i=((t,e,i)=>{const n=[],{length:r}=t;for(let i=1;i<r;i++){const r=t[i-1];n.push(o.test(r)&&h(t,i)?r.replace(o,((t,n,o)=>`${e}${i-1}=${o||'"'}${n}${o?"":'"'}`)):`${r}\x3c!--${e}${i-1}--\x3e`)}n.push(t[r-1]);const a=n.join("").trim();return i?a:a.replace(l,d)})(e,A,"svg"===t),n=_(i,t),r=S(n),a=[],s=e.length-1;let c=0,u=`isµ${c}`;for(;c<s;){const t=r.nextNode();if(!t)throw`bad template: ${i}`;if(8===t.nodeType)t.textContent===u&&(a.push({type:"node",path:y(t)}),u="isµ"+ ++c);else{for(;t.hasAttribute(u);)a.push({type:"attr",path:y(t),name:t.getAttribute(u)}),t.removeAttribute(u),u="isµ"+ ++c;L.test(t.tagName)&&t.textContent.trim()===`\x3c!--${u}--\x3e`&&(t.textContent="",a.push({type:"text",path:y(t)}),u="isµ"+ ++c)}}return{content:n,nodes:a}},M=(t,e)=>{const{content:i,nodes:n}=C.get(e)||C.set(e,O(t,e)),o=w.call(document,i,!0);return{content:o,updates:n.map(T,o)}},I=(t,{type:e,template:i,values:n})=>{const{length:o}=n;P(t,n,o);let{entry:r}=t;r&&r.template===i&&r.type===e||(t.entry=r=((t,e)=>{const{content:i,updates:n}=M(t,e);return{type:t,template:e,content:i,updates:n,wire:null}})(e,i));const{content:a,updates:s,wire:l}=r;for(let t=0;t<o;t++)s[t](n[t]);return l||(r.wire=(t=>{const{childNodes:e}=t,{length:i}=e;if(i<2)return i?e[0]:t;const n=p.call(e,0);return{ELEMENT_NODE:1,nodeType:111,firstChild:n[0],lastChild:n[i-1],valueOf(){if(e.length!==i){let e=0;for(;e<i;)t.appendChild(n[e++])}return t}}})(a))},P=({stack:t},e,i)=>{for(let n=0;n<i;n++){const i=e[n];i instanceof z?e[n]=I(t[n]||(t[n]={stack:[],entry:null,wire:null}),i):u(i)?P(t[n]||(t[n]={stack:[],entry:null,wire:null}),i,i.length):t[n]=null}i<t.length&&t.splice(i)};function z(t,e,i){this.type=t,this.template=e,this.values=i}const{create:D,defineProperties:N}=Object,j=t=>{const e=n(new WeakMap);return N(((e,...i)=>new z(t,e,i)),{for:{value(i,n){const o=e.get(i)||e.set(i,D(null));return o[n]||(o[n]=(e=>(i,...n)=>I(e,{type:t,template:i,values:n}))({stack:[],entry:null,wire:null}))}},node:{value:(e,...i)=>I({stack:[],entry:null,wire:null},{type:t,template:e,values:i}).valueOf()}})},R=n(new WeakMap),q=(t,e)=>{const i="function"==typeof e?e():e,n=R.get(t)||R.set(t,{stack:[],entry:null,wire:null}),o=i instanceof z?I(n,i):i;return o!==n.wire&&(n.wire=o,t.textContent="",t.appendChild(o.valueOf())),t},H=j("html"),Y=j("svg");function X(t){for(var e=t[0],i=1,n=arguments.length;i<n;i++)e+=arguments[i]+t[i];return e}const{defineProperties:B,keys:F}=Object,V=(t,e,i,n,o)=>({configurable:!0,get:()=>n,set(r){(t||r!==n||e&&"object"==typeof r&&r)&&(n=r,i?o.call(this,n):o.call(this))}}),$=()=>{};const W=(({all:t=!1,shallow:e=!0,useState:i=$,getAttribute:n=((t,e)=>t.getAttribute(e))}={})=>(o,r,a)=>{const s=((t,e,i,n,o,r)=>{const a={},s=o!==$,l=[i,n,s];for(let i=F(t),n=0;n<i.length;n++){const c=e(t,i[n]),h=s?o(c):[c,o];r&&(h[1]=r),a[i[n]]=V.apply(null,l.concat(h))}return a})(r,((t,e)=>{let i=t[e],r=typeof i;return o.hasOwnProperty(e)?(i=o[e],delete o[e]):o.hasAttribute(e)&&(i=n(o,e),"number"==r?i=+i:"boolean"==r&&(i=!/^(?:false|0|)$/.test(i))),i}),t,e,i,a);return B(o,s)})({dom:!0}),U=customElements,{define:G}=U,{create:K,defineProperties:Z,getOwnPropertyDescriptor:J,keys:Q}=Object,tt="element",et=n(new Map([[tt,{c:HTMLElement,e:tt}]])),it=t=>document.createElement(t),nt=t=>et.get(t)||et.set(t,{c:it(t).constructor,e:t}),ot=(t,e)=>{const{attachShadow:i,attributeChanged:n,bound:o,connected:r,disconnected:a,handleEvent:s,init:l,observedAttributes:c,props:h,render:d,style:u}=e,g=new WeakMap,p={},f={},m=[],v=K(null),y=(t,e,n)=>{if(!g.has(t)){g.set(t,0),Z(t,{html:{configurable:!0,value:at.bind(i?t.attachShadow(i):t)}});for(let e=0;e<b;e++){const{type:i,options:n}=m[e];t.addEventListener(i,t,n)}o&&o.forEach(rt,t),h&&W(t,h,d),(l||d)&&(l||d).call(t),e&&(t[e]=n)}};for(let t=Q(e),i=0,{length:n}=t;i<n;i++){const n=t[i];if(/^on./.test(n)&&!/Options$/.test(n)){const t=e[n+"Options"]||!1,i=n.toLowerCase();let o=i.slice(2);m.push({type:o,options:t}),v[o]=n,i!==n&&(o=i.slice(2,3)+n.slice(3),v[o]=n,m.push({type:o,options:t}))}switch(n){case"attachShadow":case"observedAttributes":case"style":break;default:f[n]=J(e,n)}}const{length:b}=m;if(b&&!s&&(f.handleEvent={value(t){this[v[t.type]](t)}}),null!==h)if(h)for(let t=Q(h),e=0;e<t.length;e++){const i=t[e];f[i]={get(){return y(this),h[i]},set(t){y(this,i,t)}}}else f.props={get(){const t={};for(let{attributes:e}=this,{length:i}=e,n=0;n<i;n++){const{name:i,value:o}=e[n];t[i]=o}return t}};c&&(p.observedAttributes={value:c}),f.attributeChangedCallback={value(){y(this),n&&n.apply(this,arguments)}},f.connectedCallback={value(){y(this),r&&r.call(this)}},a&&(f.disconnectedCallback={value:a});const{c:w,e:x}=nt(e.extends||tt);class _ extends w{}Z(_,p),Z(_.prototype,f);const S=[t,_];return x!==tt&&S.push({extends:x}),G.apply(U,S),et.set(t,{c:_,e:x}),u&&(document.head.appendChild(it("style")).textContent=u(x===tt?t:x+'[is="'+t+'"]')),_};function rt(t){this[t]=this[t].bind(this)}function at(){return q(this,H.apply(null,arguments))}U.get("uce-lib")||U.define("uce-lib",class extends nt(tt).c{static get define(){return ot}static get render(){return q}static get html(){return H}static get svg(){return Y}static get css(){return X}});class st{constructor(t,e,i){this.patternSize=200,this.patternScaleX=8,this.patternScaleY=8,this.patternRefreshInterval=e,this.patternAlpha=i,this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.ctx.scale(this.patternScaleX,this.patternScaleY),this.patternCanvas=document.createElement("canvas"),this.patternCanvas.width=this.patternSize,this.patternCanvas.height=this.patternSize,this.patternCtx=this.patternCanvas.getContext("2d"),this.patternData=this.patternCtx.createImageData(this.patternSize,this.patternSize),this.patternPixelDataLength=this.patternSize*this.patternSize*4,this.resize=this.resize.bind(this),this.loop=this.loop.bind(this),this.frame=0,window.addEventListener("resize",this.resize),this.resize(),window.requestAnimationFrame(this.loop)}resize(){this.canvas.width=window.innerWidth*devicePixelRatio,this.canvas.height=window.innerHeight*devicePixelRatio}update(){const{patternPixelDataLength:t,patternData:e,patternAlpha:i,patternCtx:n}=this;for(let n=0;n<t;n+=4){const t=200*Math.random();e.data[n]=t,e.data[n+1]=t,e.data[n+2]=t,e.data[n+3]=i}n.putImageData(e,0,0)}draw(){const{ctx:t,patternCanvas:e,canvas:i}=this,{width:n,height:o}=i;t.clearRect(0,0,n,o),t.fillStyle=t.createPattern(e,"repeat"),t.fillRect(0,0,n,o)}loop(){++this.frame%this.patternRefreshInterval==0&&(this.update(),this.draw()),window.requestAnimationFrame(this.loop)}}var lt=t=>{const e=[].concat(t);return Promise.all(e.map((t=>customElements.whenDefined(t).then((e=>e||customElements.get(t)))))).then((t=>e.length<2?t[0]:t))};let ct,ht,dt=t=>t;lt("uce-lib").then((({define:t,css:e})=>{t("c-canvas-noise",{styles:e(ct||(ct=dt`
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
    `)),init(){this.render();!function(t,e=12,i=28){new st(t,e,i)}(this.shadowRoot.querySelector(".c-canvas-noise__canvas"),12)},attachShadow:{mode:"open"},render(){this.html(ht||(ht=dt`
        <style>
          ${0}
        </style>
        <canvas class="c-canvas-noise__canvas">
        </canvas>
      `),this.styles)}})}));var ut=i(5),gt=i(42);class pt{constructor(t,e,i){this.scene=new ut.e,this.vertex="varying vec2 vUv;void main() {vUv = uv;gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );}",this.fragment=i.fragment,this.uniforms=i.uniforms,this.renderer=new ut.i,this.width=window.innerWidth,this.height=window.innerHeight,this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.setClearColor(15658734,1),this.duration=i.duration||1,this.debug=i.debug||!1,this.easing=i.easing||"easeInOut",this.container=e,this.images=t,this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.container.appendChild(this.renderer.domElement),this.camera=new ut.c(70,window.innerWidth/window.innerHeight,.001,1e3),this.camera.position.set(0,0,2),this.time=0,this.current=0,this.textures=[],this.paused=!1,this.initiate((()=>{this.setupResize(),this.settings(),this.addObjects(),this.resize(),this.autoplay(),this.play()}))}initiate(t){const e=[];let i=this;this.images.forEach(((t,n)=>{let o=new Promise((e=>{i.textures[n]=(new ut.g).load(t,e)}));e.push(o)})),Promise.all(e).then((()=>{t()}))}autoplay(){setTimeout((()=>{this.next(),this.autoplay()}),2e3)}settings(){this.settings={progress:.5},Object.keys(this.uniforms).forEach((t=>{this.settings[t]=this.uniforms[t].value}))}setupResize(){window.addEventListener("resize",this.resize.bind(this))}resize(){let t,e;this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.renderer.setSize(this.width,this.height),this.camera.aspect=this.width/this.height,this.imageAspect=this.textures[0].image.height/this.textures[0].image.width,this.height/this.width>this.imageAspect?(t=this.width/this.height*this.imageAspect,e=1):(t=1,e=this.height/this.width/this.imageAspect),this.material.uniforms.resolution.value.x=this.width,this.material.uniforms.resolution.value.y=this.height,this.material.uniforms.resolution.value.z=t,this.material.uniforms.resolution.value.w=e;const i=this.camera.position.z;this.camera.fov=180/Math.PI*2*Math.atan(1/(2*i)),this.plane.scale.x=this.camera.aspect,this.plane.scale.y=1,this.camera.updateProjectionMatrix()}addObjects(){this.material=new ut.f({extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:ut.a,uniforms:{time:{type:"f",value:0},progress:{type:"f",value:0},border:{type:"f",value:0},intensity:{type:"f",value:0},scaleX:{type:"f",value:40},scaleY:{type:"f",value:40},transition:{type:"f",value:40},swipe:{type:"f",value:0},width:{type:"f",value:0},radius:{type:"f",value:0},texture1:{type:"f",value:this.textures[0]},texture2:{type:"f",value:this.textures[1]},displacement:{type:"f",value:(new ut.g).load("/images/Displacement-1.jpg")},resolution:{type:"v4",value:new ut.h}},vertexShader:this.vertex,fragmentShader:this.fragment}),this.geometry=new ut.d(1,1,2,2),this.plane=new ut.b(this.geometry,this.material),this.scene.add(this.plane)}stop(){this.paused=!0}play(){this.paused=!1,this.render()}reset(){this.current=0,this.time=0;let t=this.textures[0],e=this.textures[1];this.material.uniforms.texture1.value=t,this.material.uniforms.texture2.value=e,this.material.uniforms.progress.value=0,this.material.uniforms.time.value=0}next(){if(this.isRunning)return;this.isRunning=!0;let t=this.textures.length,e=this.textures[(this.current+1)%t];this.material.uniforms.texture2.value=e,gt.b.timeline().to(this.material.uniforms.progress,this.duration,{value:1,ease:gt.a[this.easing],onComplete:()=>{this.current=(this.current+1)%t,this.material.uniforms.texture1.value=e,this.material.uniforms.progress.value=0,this.isRunning=!1}})}render(){this.paused||(this.time+=.05,this.material.uniforms.time.value=this.time,Object.keys(this.uniforms).forEach((t=>{this.material.uniforms[t].value=this.settings[t]})),requestAnimationFrame(this.render.bind(this)),this.renderer.render(this.scene,this.camera))}}let ft,mt,vt=t=>t;lt("uce-lib").then((({define:t,css:e})=>{t("c-canvas-transition",{styles:e(ft||(ft=vt`
      :host {
        display: block;
        position: absolute;
        position: absolute;
        z-index: 0;
        height: 100%;
        width: 100%;
      }

      .c-canvas-transition__wrapper {
        height: 100%;
        width: 100%;
      }
    `)),props:{theme:document.body.dataset.theme,darkImages:["/images/Hero-Paint-1-Dark.jpg","/images/Hero-Paint-2-Dark.jpg"],lightImages:["/images/Hero-Paint-1-Light.jpg","/images/Hero-Paint-2-Light.jpg"]},init(){this.html(mt||(mt=vt`
        <style>
          ${0}
        </style>
        <div
          class="c-canvas-transition__wrapper"
          data-displacement=""
        >
        </div>
      `),this.styles),this.slider=this.shadowRoot.querySelector(".c-canvas-transition__wrapper"),this.images="light"===this.theme?this.lightImages:this.darkImages,this.sketch=new pt(this.images,this.slider,{duration:2,debug:!0,easing:"easeOut",uniforms:{width:{value:.5,type:"f",min:0,max:10},scaleX:{value:40,type:"f",min:.1,max:60},scaleY:{value:40,type:"f",min:.1,max:60}},fragment:"\n          uniform float time;\n          uniform float progress;\n          uniform sampler2D texture1;\n          uniform sampler2D texture2;\n          uniform vec4 resolution;\n          varying vec2 vUv;\n          varying vec4 vPosition;\n          void main()\t{\n            vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);\n            vec2 p = newUV;\n            float x = progress;\n            vec4 f = mix(\n              texture2D(texture1, p),\n              texture2D(texture2, p),\n              x);\n            gl_FragColor = f;\n          }\n        "})},updateImages(){this.theme=document.body.dataset.theme,this.images="light"===this.theme?this.lightImages:this.darkImages,this.sketch.images=this.images,this.sketch.textures=[],this.sketch.initiate((()=>{this.sketch.duration=.02,this.sketch.reset(),this.sketch.render(),setTimeout((()=>{this.sketch.duration=2}),500)}))},attachShadow:{mode:"open"},render(){console.log("ctr"),this.updateImages()}})}));let yt,bt,wt=t=>t;lt("uce-lib").then((({define:t,render:e,html:i,svg:n,css:o})=>{t("c-glitch-image",{styles:o(yt||(yt=wt`
        :host {
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
          background-color: var(
            --glitch-image-blend-color-1
          );
          background-image: var(--glitch-image);
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          height: calc(
            100% + var(--glitch-image-gap-vertical) * 2
          );
          left: calc(
            -1 * var(--glitch-image-gap-horizontal)
          );
          position: absolute;
          top: calc(var(--glitch-image-gap-vertical) * -1);
          transform: translate3d(0, 0, 0);
          width: calc(
            100% + var(--glitch-image-gap-horizontal) * 2
          );
        }

        .c-glitch-image__image:nth-child(2) {
          background-color: var(
            --glitch-image-blend-color-2
          );
          background-blend-mode: var(
            --glitch-image-blend-mode-2
          );
        }

        .c-glitch-image__image:nth-child(3) {
          background-color: var(
            --glitch-image-blend-color-3
          );
          background-blend-mode: var(
            --glitch-image-blend-mode-3
          );
        }

        .c-glitch-image__image:nth-child(4) {
          background-color: var(
            --glitch-image-blend-color-4
          );
          background-blend-mode: var(
            --glitch-image-blend-mode-4
          );
        }

        .c-glitch-image__image:nth-child(5) {
          background-color: var(
            --glitch-image-blend-color-5
          );
          background-blend-mode: var(
            --glitch-image-blend-mode-5
          );
        }

        .c-glitch-image__image:nth-child(n + 2) {
          opacity: 0;
        }

        .c-glitch-image__inner:hover
          .c-glitch-image__image:nth-child(n + 2),
        .c-glitch-image__image.is-glitching:nth-child(n
            + 2) {
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
            clip-path: polygon(
              0 2%,
              100% 2%,
              100% 5%,
              0 5%
            );
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
            clip-path: polygon(
              0 1%,
              100% 1%,
              100% 2%,
              0 2%
            );
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
            clip-path: polygon(
              0 3%,
              100% 3%,
              100% 3%,
              0 3%
            );
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
            clip-path: polygon(
              0 1%,
              100% 1%,
              100% 3%,
              0 3%
            );
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
            clip-path: polygon(
              0 5%,
              100% 5%,
              100% 6%,
              0 6%
            );
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
      `)),props:{glitch:{type:String,attribute:!0},src:{type:String,attribute:!0},active:{type:Boolean,attribute:!0},aspectRatio:{type:Number},wrapper:{type:Object}},init(){this.glitch="1",this.active=!1,this.aspectRatio=1,this.render();const t=this.hasAttribute("width"),e=this.hasAttribute("height"),i=t&&e;if(this._wrapper=this.shadowRoot.querySelector(".c-glitch-image__inner"),this.active&&this._wrapper.querySelectorAll(".c-glitch-image__image").forEach((t=>{t.classList.add("is-glitching")})),this.classList.add("c-glitch-image--style-"+this.glitch),i){const t=this.getAttribute("width"),e=this.getAttribute("height");this.aspectRatio=t/e}this._wrapper.style.setProperty("--glitch-aspect-ratio",this.aspectRatio),this._wrapper.style.setProperty("--glitch-image",'url("'+this.src+'")')},attachShadow:{mode:"open"},render(){this.html(bt||(bt=wt`
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
      `),this.styles)}})}));let xt,_t,St=t=>t;lt("uce-lib").then((({define:t,render:e,html:i,svg:n,css:o})=>{t("c-hero",{styles:o(xt||(xt=St`
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
          background-image: url('/images/Me-Dark.jpg');
          border-right: solid 1px var(--color-accent);
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
      `)),init(){this.render(),this._taglineSetup(),this._nameStylizedSetup();const t=this.render;this.addEventListener("themeChange",t)},props:{theme:document.body.dataset.theme},_taglineSetup(){const t=this.querySelector("[slot=tagline]").innerHTML.replaceAll("  ","").replaceAll("\n",""),e=t.split("<br>"),i=e.map(((t,i)=>{const n="<span data-scrambler>"+t+"</span>";return e.length-1===i?n:n+"<br>"})).join(""),n=[this.shadowRoot.querySelector(".c-hero__tagline-accent-1"),this.shadowRoot.querySelector(".c-hero__tagline-accent-2"),this.shadowRoot.querySelector(".c-hero__tagline-accent-3")];this.innerHTML+='<div slot="tagline-main">'+i+"</div>",n.map((e=>{e.innerHTML=t}))},_nameStylizedSetup(){const t=this.querySelector('[slot="name-stylized"').innerHTML.replaceAll(" ","").replaceAll("\n","").split("");this.shadowRoot.querySelector(".c-hero__name-stylized").innerHTML=t.map((t=>'<div class="c-hero__name-stylized-letter">'+t+"</div>")).join("")},attachShadow:{mode:"open"},render(){this.theme=document.body.dataset.theme,this.html(_t||(_t=St`
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
      `),this.styles,this.theme)}})}));let kt,Et,Tt=t=>t;lt("uce-lib").then((({define:t,render:e,html:i,svg:n,css:o})=>{t("c-loader",{styles:o(kt||(kt=Tt`
        :host {
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

        :host {
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
      `)),init(){this.render()},disable(){const t=document.querySelector("main"),e=t.classList.contains("u-transparent");document.documentElement.style.position="",e&&t.classList.remove("u-transparent"),setTimeout((()=>{this.style.opacity=0,this.style.pointerEvents="none"}),800),setTimeout((()=>{this.style.display="none"}),2e3)},attachShadow:{mode:"open"},render(){this.html(Et||(Et=Tt`
        <style>
          ${0}
        </style>
        <slot>
        </slot>
      `),this.styles)}})}));var At=window.CustomEvent;function Ct(t,e){var i="on"+e.type.toLowerCase();return"function"==typeof t[i]&&t[i](e),t.dispatchEvent(e)}function Lt(t){for(;t;){if("dialog"===t.localName)return t;t=t.parentElement?t.parentElement:t.parentNode?t.parentNode.host:null}return null}function Ot(t){for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;t&&t.blur&&t!==document.body&&t.blur()}function Mt(t,e){for(var i=0;i<t.length;++i)if(t[i]===e)return!0;return!1}function It(t){return!(!t||!t.hasAttribute("method"))&&"dialog"===t.getAttribute("method").toLowerCase()}function Pt(t){var e=["button","input","keygen","select","textarea"].map((function(t){return t+":not([disabled])"}));e.push('[tabindex]:not([disabled]):not([tabindex=""])');var i=t.querySelector(e.join(", "));if(!i&&"attachShadow"in Element.prototype)for(var n=t.querySelectorAll("*"),o=0;o<n.length&&!(n[o].tagName&&n[o].shadowRoot&&(i=Pt(n[o].shadowRoot)));o++);return i}function zt(t){return t.isConnected||document.body.contains(t)}function Dt(t){if(t.submitter)return t.submitter;var e=t.target;if(!(e instanceof HTMLFormElement))return null;var i=Rt.formSubmitter;if(!i){var n=t.target;i=("getRootNode"in n&&n.getRootNode()||document).activeElement}return i&&i.form===e?i:null}function Nt(t){if(!t.defaultPrevented){var e=t.target,i=Rt.imagemapUseValue,n=Dt(t);null===i&&n&&(i=n.value);var o=Lt(e);if(o)"dialog"===(n&&n.getAttribute("formmethod")||e.getAttribute("method"))&&(t.preventDefault(),null!=i?o.close(i):o.close())}}function jt(t){if(this.dialog_=t,this.replacedStyleTop_=!1,this.openAsModal_=!1,t.hasAttribute("role")||t.setAttribute("role","dialog"),t.show=this.show.bind(this),t.showModal=this.showModal.bind(this),t.close=this.close.bind(this),t.addEventListener("submit",Nt,!1),"returnValue"in t||(t.returnValue=""),"MutationObserver"in window){new MutationObserver(this.maybeHideModal.bind(this)).observe(t,{attributes:!0,attributeFilter:["open"]})}else{var e,i=!1,n=function(){i?this.downgradeModal():this.maybeHideModal(),i=!1}.bind(this),o=function(o){if(o.target===t){var r="DOMNodeRemoved";i|=o.type.substr(0,r.length)===r,window.clearTimeout(e),e=window.setTimeout(n,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach((function(e){t.addEventListener(e,o)}))}Object.defineProperty(t,"open",{set:this.setOpen.bind(this),get:t.hasAttribute.bind(t,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}At&&"object"!=typeof At||((At=function(t,e){e=e||{};var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,!!e.bubbles,!!e.cancelable,e.detail||null),i}).prototype=window.Event.prototype),jt.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&zt(this.dialog_)||this.downgradeModal()},downgradeModal:function(){this.openAsModal_&&(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),Rt.dm.removeDialog(this))},setOpen:function(t){t?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(t){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var e=document.createElement("div");this.dialog_.insertBefore(e,this.dialog_.firstChild),e.tabIndex=-1,e.focus(),this.dialog_.removeChild(e)}var i=document.createEvent("MouseEvents");i.initMouseEvent(t.type,t.bubbles,t.cancelable,window,t.detail,t.screenX,t.screenY,t.clientX,t.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget),this.dialog_.dispatchEvent(i),t.stopPropagation()},focus_:function(){var t=this.dialog_.querySelector("[autofocus]:not([disabled])");!t&&this.dialog_.tabIndex>=0&&(t=this.dialog_),t||(t=Pt(this.dialog_)),Ot(document.activeElement),t&&t.focus()},updateZIndex:function(t,e){if(t<e)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=t,this.backdrop_.style.zIndex=e},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!zt(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!Rt.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");(function(t){for(;t&&t!==document.body;){var e=window.getComputedStyle(t),i=function(t,i){return!(void 0===e[t]||e[t]===i)};if(e.opacity<1||i("zIndex","auto")||i("transform","none")||i("mixBlendMode","normal")||i("filter","none")||i("perspective","none")||"isolate"===e.isolation||"fixed"===e.position||"touch"===e.webkitOverflowScrolling)return!0;t=t.parentElement}return!1})(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,Rt.needsCentering(this.dialog_)?(Rt.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(t){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),void 0!==t&&(this.dialog_.returnValue=t);var e=new At("close",{bubbles:!1,cancelable:!1});Ct(this.dialog_,e)}};var Rt={reposition:function(t){var e=document.body.scrollTop||document.documentElement.scrollTop,i=e+(window.innerHeight-t.offsetHeight)/2;t.style.top=Math.max(e,i)+"px"},isInlinePositionSetByStylesheet:function(t){for(var e=0;e<document.styleSheets.length;++e){var i=document.styleSheets[e],n=null;try{n=i.cssRules}catch(t){}if(n)for(var o=0;o<n.length;++o){var r=n[o],a=null;try{a=document.querySelectorAll(r.selectorText)}catch(t){}if(a&&Mt(a,t)){var s=r.style.getPropertyValue("top"),l=r.style.getPropertyValue("bottom");if(s&&"auto"!==s||l&&"auto"!==l)return!0}}}return!1},needsCentering:function(t){return"absolute"===window.getComputedStyle(t).position&&(!("auto"!==t.style.top&&""!==t.style.top||"auto"!==t.style.bottom&&""!==t.style.bottom)&&!Rt.isInlinePositionSetByStylesheet(t))},forceRegisterDialog:function(t){if((window.HTMLDialogElement||t.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",t),"dialog"!==t.localName)throw new Error("Failed to register dialog: The element is not a dialog.");new jt(t)},registerDialog:function(t){t.showModal||Rt.forceRegisterDialog(t)},DialogManager:function(){this.pendingDialogStack=[];var t=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(e){this.forwardTab_=void 0,e.stopPropagation(),t([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=100150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver((function(e){var i=[];e.forEach((function(t){for(var e,n=0;e=t.removedNodes[n];++n)e instanceof Element&&("dialog"===e.localName&&i.push(e),i=i.concat(e.querySelectorAll("dialog")))})),i.length&&t(i)})))}};if(Rt.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})},Rt.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()},Rt.DialogManager.prototype.updateStacking=function(){for(var t,e=this.zIndexHigh_,i=0;t=this.pendingDialogStack[i];++i)t.updateZIndex(--e,--e),0===i&&(this.overlay.style.zIndex=--e);var n=this.pendingDialogStack[0];n?(n.dialog.parentNode||document.body).appendChild(this.overlay):this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)},Rt.DialogManager.prototype.containedByTopDialog_=function(t){for(;t=Lt(t);){for(var e,i=0;e=this.pendingDialogStack[i];++i)if(e.dialog===t)return 0===i;t=t.parentElement}return!1},Rt.DialogManager.prototype.handleFocus_=function(t){var e=t.composedPath?t.composedPath()[0]:t.target;if(!this.containedByTopDialog_(e)&&document.activeElement!==document.documentElement&&(t.preventDefault(),t.stopPropagation(),Ot(e),void 0!==this.forwardTab_)){var i=this.pendingDialogStack[0];return i.dialog.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?i.focus_():e!==document.documentElement&&document.documentElement.focus()),!1}},Rt.DialogManager.prototype.handleKey_=function(t){if(this.forwardTab_=void 0,27===t.keyCode){t.preventDefault(),t.stopPropagation();var e=new At("cancel",{bubbles:!1,cancelable:!0}),i=this.pendingDialogStack[0];i&&Ct(i.dialog,e)&&i.dialog.close()}else 9===t.keyCode&&(this.forwardTab_=!t.shiftKey)},Rt.DialogManager.prototype.checkDOM_=function(t){this.pendingDialogStack.slice().forEach((function(e){-1!==t.indexOf(e.dialog)?e.downgradeModal():e.maybeHideModal()}))},Rt.DialogManager.prototype.pushDialog=function(t){var e=(this.zIndexHigh_-this.zIndexLow_)/2-1;return!(this.pendingDialogStack.length>=e)&&(1===this.pendingDialogStack.unshift(t)&&this.blockDocument(),this.updateStacking(),!0)},Rt.DialogManager.prototype.removeDialog=function(t){var e=this.pendingDialogStack.indexOf(t);-1!==e&&(this.pendingDialogStack.splice(e,1),0===this.pendingDialogStack.length&&this.unblockDocument(),this.updateStacking())},Rt.dm=new Rt.DialogManager,Rt.formSubmitter=null,Rt.imagemapUseValue=null,void 0===window.HTMLDialogElement){var qt=document.createElement("form");if(qt.setAttribute("method","dialog"),"dialog"!==qt.method){var Ht=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(Ht){var Yt=Ht.get;Ht.get=function(){return It(this)?"dialog":Yt.call(this)};var Xt=Ht.set;Ht.set=function(t){return"string"==typeof t&&"dialog"===t.toLowerCase()?this.setAttribute("method",t):Xt.call(this,t)},Object.defineProperty(HTMLFormElement.prototype,"method",Ht)}}document.addEventListener("click",(function(t){if(Rt.formSubmitter=null,Rt.imagemapUseValue=null,!t.defaultPrevented){var e=t.target;if("composedPath"in t)e=t.composedPath().shift()||e;if(e&&It(e.form)){if(!("submit"===e.type&&["button","input"].indexOf(e.localName)>-1)){if("input"!==e.localName||"image"!==e.type)return;Rt.imagemapUseValue=t.offsetX+","+t.offsetY}Lt(e)&&(Rt.formSubmitter=e)}}}),!1),document.addEventListener("submit",(function(t){var e=t.target;if(!Lt(e)){var i=Dt(t);"dialog"===(i&&i.getAttribute("formmethod")||e.getAttribute("method"))&&t.preventDefault()}}));var Bt=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){if(!It(this))return Bt.call(this);var t=Lt(this);t&&t.close()}}var Ft=Rt;let Vt,$t,Wt=t=>t;lt("uce-lib").then((({define:t,render:e,html:i,svg:n,css:o})=>{t("c-modal",{styles:o(Vt||(Vt=Wt`
        :host {
          --modal-color-fg: var(--color-fg);
          --modal-color-bg: var(--color-bg);
          --modal-spacing: 1.5rem;
          --modal-button-color-fg: var(--color-fg);
          --modal-button-color-bg: var(--color-bg);
          --modal-button-color-border: var(--color-fg);
          --modal-button-color-shadow: var(--color-opaque);
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
          border: solid 1px var(--modal-button-color-border);
          outline: none;
        }

        .c-modal__back-button,
        .c-modal__close-button {
          align-items: center;
          background-color: var(--modal-button-color-bg);
          color: inherit;
          cursor: pointer;
          display: grid;
          font-family: var(--modal-button-font);
          font-weight: var(--modal-button-font-weight);
          grid-template-columns: var(--modal-button-size);
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
          left: 0.025em;
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
            grid-template-columns: var(--modal-button-size);
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
          background-color: var(--modal-button-color-fg);
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
      `)),props:{open:{type:Boolean,attribute:!0}},init(){this.open=!1,this.render(),this._setup(),Ft.registerDialog(this._dialogEl),window.addEventListener("click",(t=>{t.target.closest("[data-modal-target="+this._triggerData+"]")&&this.showModal()}),!0),this.shadowRoot.addEventListener("click",(t=>{t.target.closest(".c-modal__back-button")&&this.close(),t.target.closest(".c-modal__close-button")&&this.close()})),this._dialogEl.classList.add("is-closed"),this.open?this.showModal():this._dialogEl.classList.add("is-closed")},_setup(){const t=window.getComputedStyle(this);this._documentEl=document.documentElement,this._triggerData=this.dataset.modalTrigger,this._triggerEl=document.querySelector("[data-modal-target="+this._triggerData+"][data-modal-trigger-primary]"),this._triggerParent=this._triggerEl.parentElement,this._dialogEl=this.shadowRoot.querySelector("dialog"),this._closeButtonEl=this._dialogEl.querySelector(".c-modal__close-button"),this._triggerDuration=1e3*parseFloat(t.getPropertyValue("--modal-trigger-transition-duration")),this._modalDuration=1e3*parseFloat(t.getPropertyValue("--modal-transition-duration"))},close(){this._handleClose()},_open(){this._triggerEl.classList.add("is-expanded"),this._triggerParent.style.zIndex="9",setTimeout((()=>{this.setAttribute("open",""),this._dialogEl.classList.remove("is-closed"),this._dialogEl.classList.add("is-opening"),this._documentEl.style.overflow="hidden",this._dialogEl.classList.remove("is-opening"),this._dialogEl.classList.add("is-open")}),this._triggerDuration)},showModal(){this._open()},_handleClose(){this.removeAttribute("open"),this._dialogEl.classList.remove("is-open"),this._dialogEl.classList.add("is-closing"),setTimeout((()=>{this._documentEl.style.overflow="",this._dialogEl.classList.remove("is-closing"),this._dialogEl.classList.add("is-closed"),this._triggerEl.classList.remove("is-expanded"),setTimeout((()=>{this._triggerParent.style.zIndex=""}),this._triggerDuration)}),this._modalDuration)},attachShadow:{mode:"open"},render(){this.html($t||($t=Wt`
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
      `),this.styles)}})}));let Ut,Gt,Kt=t=>t;lt("uce-lib").then((({define:t,render:e,html:i,svg:n,css:o})=>{t("c-squiggle",{style:t=>o(Ut||(Ut=Kt`
        ${0} {
          display: block;
          height: 0.5rem;
          line-height: 0;
          margin-top: 1rem;
        }

        .c-squiggle__svg {
          display: inline-block;
          fill: var(--color-accent);
        }
      `),t),render(){this.html(Gt||(Gt=Kt`
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
      `))}})}));let Zt,Jt,Qt=t=>t;lt("uce-lib").then((({define:t,render:e,html:i,svg:n,css:o})=>{t("c-section-header",{styles:o(Zt||(Zt=Qt`
        :host {
          --section-header-title-font: var(--font-display);
          --section-header-title-font-weight: var(
            --font-display-weight
          );

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
          font-family: var(--section-header-title-font),
            sans-serif;
          font-weight: var(
            --section-header-title-font-weight
          );
          line-height: 1.25;
          padding-bottom: 3rem;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
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
          box-shadow: 0 0 0 1px
            var(--color-subtle-alternate);
          padding-bottom: 1.5rem;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          padding-top: 1.5rem;
        }
      `)),attachShadow:{mode:"open"},render(){this.html(Jt||(Jt=Qt`
        <style>
          ${0}
        </style>
        <slot name="title"> </slot>
        <slot name="description"> </slot>
      `),this.styles)}})}));let te,ee,ie=t=>t;lt("uce-lib").then((({define:t,render:e,html:i,svg:n,css:o})=>{t("c-theme-switch",{styles:o(te||(te=ie`
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
      `)),handleChange(){const t=document.body.dataset.theme;document.body.dataset.theme="dark"===t?"light":"dark",this.dispatchEvent(new CustomEvent("themeChange",{detail:{theme:document.body.dataset.theme},bubbles:!0,composed:!0}))},attachShadow:{mode:"open"},render(){this.html(ee||(ee=ie`
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
        `),this.styles,this.handleChange)}})}));let ne,oe,re=t=>t;lt("uce-lib").then((({define:t,render:e,html:i,svg:n,css:o})=>{t("c-top-bar",{styles:o(ne||(ne=re`
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
      `)),attachShadow:{mode:"open"},render(){this.html(oe||(oe=re`
        <style>
          ${0}
        </style>
        <slot name="logo"> </slot>
        <nav class="c-top-bar__nav">
          <slot name="link"> </slot>
        </nav>
      `),this.styles)}})}));var ae=i(57);var se=function(t,e){var i=t.map((function(t){return t.then((function(t){return{value:t,status:!0}}),(function(t){return{value:t,status:!1}})).then((function(t){return"function"==typeof e&&e(t),t}))}));return Promise.all(i)},le=function(t,e){this.onProgress="function"==typeof e?e:null,this.fallbackImage="string"==typeof t||t instanceof HTMLImageElement?t:null};function ce(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=[],n=!0,o=!1,r=void 0;try{for(var a,s=t[Symbol.iterator]();!(n=(a=s.next()).done)&&(i.push(a.value),!e||i.length!==e);n=!0);}catch(t){o=!0,r=t}finally{try{n||null==s.return||s.return()}finally{if(o)throw r}}return i}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function he(t){return function(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function de(t){if(!ve(t))return!1;var e=we(t,ue(t)),i=he(ue(e)?document.querySelectorAll(e.target):document.querySelectorAll(e)),n=[];if(i.forEach((function(t){var i=function(t,e){return new Promise((function(i,n){if(void 0===t&&n("Target element is undefined"),"true"!==t.getAttribute("data-scramble-active")){e.beforeEach&&e.beforeEach(t),t.setAttribute("data-scramble-active","true"),t.classList.add("scrambling");var o,r=t.innerHTML,a=[],s=e.speed?e.speed:100,l=t.textContent.split(""),c=l,h=t.textContent.split(""),d=!1;me(e.text)?o=_e(e.text):t.getAttribute("data-scramble-text")&&""!==t.getAttribute("data-scramble-text")&&(o=_e(t.getAttribute("data-scramble-text"))),o&&(d=!0,l=o.truth,h=o.newLetters,c=o.startText);var u=function(){if(c.map((function(e,i){return!(" \t\n\r\v".indexOf(e)>-1||(h[i]=ye(),!0===a[i]&&(h[i]=l[i]),t.textContent=h.join(""),0))})),xe(h,l)){if(t.innerHTML=r,d){var n=t.children[0];n&&""!==n?n.textContent=h.join(""):t.textContent=h.join("")}clearInterval(g),t.setAttribute("data-scramble-active","false"),t.classList.remove("scrambling"),e.afterEach&&e.afterEach(t),i(t)}};!function(t){if(t&&ge(t))for(var i=0;i<=t.length;i++)!function(t){setTimeout((function(){a[t]=!0}),be(ue(e),e.random,e.speed))}(i)}(c),u();var g=setInterval((function(){u()}),s)}else n("Animation already triggered")}))}(t,e);n.push(i)})),!(n.length>0))return!1;e.beforeAll&&e.beforeAll(i),Promise.all(n).then((function(t){e.afterAll&&e.afterAll(t)})).catch((function(t){e.errorHandler&&e.errorHandler(t)}))}le.simplePreload=function(t){return new Promise((function(e,i){var n;t instanceof HTMLImageElement?(n=t).complete?n.naturalHeight?e(n):i(n):(n.onload=e.bind(null,n),n.onerror=n.onabort=i.bind(null,n)):"string"==typeof t&&((n=new Image).onload=e.bind(null,n),n.onerror=n.onabort=i.bind(null,n),n.src=t)}))},le.prototype.preload=function(t){var e=this,i=Array.prototype.concat.apply([],Array.prototype.slice.call(arguments));return i=i.map((function(t){return le.simplePreload(t).catch((function(t){return e.fallbackImage?le.simplePreload(e.fallbackImage).then((function(e){return t.setAttribute("data-fail-src",t.src),t.src=e.src,t}),(function(){return Promise.reject(t)})):Promise.reject(t)}))})),se(i,e.onProgress)};var ue=function(t){return!!t&&t.constructor===Object},ge=function(t){return!!t&&t.constructor===Array},pe=function(t){return"function"==typeof t},fe=function(t){return Number.isInteger(t)},me=function(t){return!(!t||""===t||!("string"==typeof t||t instanceof String))},ve=function(t){return!ge(t)&&!function(t){return"boolean"==typeof t}(t)&&"number"!=typeof t&&"function"!=typeof t&&void 0!==t},ye=function(t,e){var i=t||1,n=e||!1,o=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,i);return" \t\n\r\v".indexOf(o)<0&&!0!==n&&o},be=function(t,e,i){var n=i||100;if((t||!1)&&ge(e)&&e.length>1){var o=ce(e,2),r=o[0],a=o[1];if((i>=a||n>=a)&&(n=a-1),r>(a-=n)&&(r=a),fe(r)&&fe(a))return Math.floor(Math.random()*(a-r))+r}return Math.floor(1999*Math.random())+1e3},we=function(t,e){var i={target:"[data-scrambler]",random:[1e3,3e3],speed:100,text:!1,beforeEach:!1,afterEach:!1,beforeAll:!1,afterAll:!1,errorHandler:!1};return t&&(e||!1)&&(i.target=void 0!==t.target?t.target:"[data-scrambler]",i.random=void 0!==t.random?t.random:[1e3,3e3],i.speed=void 0!==t.speed?t.speed:100,i.text=void 0!==t.text&&t.text,i.beforeEach=!(void 0===t.beforeEach||!pe(t.beforeEach))&&t.beforeEach,i.afterEach=!(void 0===t.afterEach||!pe(t.afterEach))&&t.afterEach,i.beforeAll=!(void 0===t.beforeAll||!pe(t.beforeAll))&&t.beforeAll,i.afterAll=!(void 0===t.afterAll||!pe(t.afterAll))&&t.afterAll,i.errorHandler=!(void 0===t.errorHandler||!pe(t.errorHandler))&&t.errorHandler),i},xe=function(t,e){return!(t.length!==e.length||!t.every((function(t,i){return t===e[i]})))},_e=function(t){if(!t||void 0===t||!("string"==typeof t||t instanceof String))return!1;var e=t,i=e.split(""),n=e.split(""),o=[];return i.forEach((function(t,e){" \t\n\r\v".indexOf(i[e])>-1?o.push(" "):o.push(ye())})),{truth:i,newLetters:n,startText:o}},Se=de;const ke=new le,Ee=document.querySelector("c-loader");!function(){const t=["background: #fff","border-bottom: solid 1px black","border-left: solid 1px black","border-top: solid 1px black","color: #666","line-height: 35px","padding: 10px 0px 10px 10px"].join(";"),e=["background: #fff","border-bottom: solid 1px black","border-top: solid 1px black","color: red","line-height: 35px","padding: 10px 5px 10px 0px","width: 300px"].join(";"),i=["background: #fff","border-bottom: solid 1px black","border-right: solid 1px black","border-top: solid 1px black","color: #666","line-height: 35px","padding: 10px 20px 10px 0px","width: 300px"].join(";");console.log("%c Coded with %c ♥️ %c https://davidbwaters.com",t,e,i)}(),Object(ae.a)({selector:"*[data-glightbox]",touchNavigation:!0,loop:!0,autoplayVideos:!0,openEffect:"fade",closeEffect:"fade",skin:"dbw"}),ke.preload("/images/Loader.svg","/images/Me-Dark.jpg","/images/Me-Light.jpg","/images/Hero-Paint-1-Dark.jpg","/images/Hero-Paint-1-Light.jpg","/images/Hero-Paint-2-Dark.jpg","/images/Hero-Paint-2-Light.jpg","/images/Noise-Clear.svg").then((function(t){Ee.disable(),setTimeout((()=>{Se({target:"[data-scrambler]",random:[1e3,1e3],speed:60})}),1500)}))}],[[113,4,3,1,0]]]);