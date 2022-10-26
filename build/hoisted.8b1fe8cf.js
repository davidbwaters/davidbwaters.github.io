/* empty css                              */import{A as yc,x as bc,y as Tt}from"./chunks/lit-html.59292f70.js";function wi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ml(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var He={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Rr={duration:.5,overwrite:!1,delay:0},Io,Pe,Vt,Ze=1e8,xt=1/Ze,Js=Math.PI*2,wc=Js/4,xc=0,Pl=Math.sqrt,Sc=Math.cos,Ec=Math.sin,ne=function(t){return typeof t=="string"},$t=function(t){return typeof t=="function"},Ai=function(t){return typeof t=="number"},No=function(t){return typeof t>"u"},mi=function(t){return typeof t=="object"},Oe=function(t){return t!==!1},Ol=function(){return typeof window<"u"},kn=function(t){return $t(t)||ne(t)},Dl=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},pe=Array.isArray,to=/(?:-?\.?\d|\.)+/gi,Rl=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,wr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ts=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zl=/[+-]=-?[.\d]+/,Ll=/[^,'"\[\]\s]+/gi,Tc=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pt,We,eo,Fo,Xe={},Kn={},$l,Il=function(t){return(Kn=ar(t,Xe))&&qe},Bo=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Qn=function(t,e){return!e&&console.warn(t)},Nl=function(t,e){return t&&(Xe[t]=e)&&Kn&&(Kn[t]=e)||Xe},_n=function(){return 0},Ac={suppressEvents:!0,isStart:!0,kill:!1},Bn={suppressEvents:!0,kill:!1},Cc={suppressEvents:!0},Uo={},Ni=[],io={},Fl,Fe={},As={},da=30,Un=[],Ho="",Xo=function(t){var e=t[0],i,n;if(mi(e)||$t(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=Un.length;n--&&!Un[n].targetTest(e););i=Un[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new ah(t[n],i)))||t.splice(n,1);return t},er=function(t){return t._gsap||Xo(Ke(t))[0]._gsap},Bl=function(t,e,i){return(i=t[e])&&$t(i)?t[e]():No(i)&&t.getAttribute&&t.getAttribute(e)||i},De=function(t,e){return(t=t.split(",")).forEach(e)||t},Ut=function(t){return Math.round(t*1e5)/1e5||0},he=function(t){return Math.round(t*1e7)/1e7||0},Cr=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},kc=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},Jn=function(){var t=Ni.length,e=Ni.slice(0),i,n;for(io={},Ni.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Ul=function(t,e,i,n){Ni.length&&Jn(),t.render(e,i,n||Pe&&e<0&&(t._initted||t._startAt)),Ni.length&&Jn()},Hl=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Ll).length<2?e:ne(t)?t.trim():t},Xl=function(t){return t},ti=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Mc=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},ar=function(t,e){for(var i in e)t[i]=e[i];return t},ua=function r(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=mi(e[i])?r(t[i]||(t[i]={}),e[i]):e[i]);return t},ts=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},sn=function(t){var e=t.parent||Pt,i=t.keyframes?Mc(pe(t.keyframes)):ti;if(Oe(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},Pc=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},ql=function(t,e,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t[n],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=o,e.parent=e._dp=t,e},ms=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=e._prev,o=e._next;s?s._next=o:t[i]===e&&(t[i]=o),o?o._prev=s:t[n]===e&&(t[n]=s),e._next=e._prev=e.parent=null},Ui=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},ir=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Oc=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ro=function(t,e,i,n){return t._startAt&&(Pe?t._startAt.revert(Bn):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},Dc=function r(t){return!t||t._ts&&r(t.parent)},fa=function(t){return t._repeat?zr(t._tTime,t=t.duration()+t._rDelay)*t:0},zr=function(t,e){var i=Math.floor(t/=e);return t&&i===t?i-1:i},es=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},_s=function(t){return t._end=he(t._start+(t._tDur/Math.abs(t._ts||t._rts||xt)||0))},vs=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=he(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),_s(t),i._dirty||ir(i,t)),t},Yl=function(t,e){var i;if((e._time||e._initted&&!e._dur)&&(i=es(t.rawTime(),e),(!e._dur||Cn(0,e.totalDuration(),i)-e._tTime>xt)&&e.render(i,!0)),ir(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-xt}},di=function(t,e,i,n){return e.parent&&Ui(e),e._start=he((Ai(i)?i:i||t!==Pt?je(t,i,e):t._time)+e._delay),e._end=he(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ql(t,e,"_first","_last",t._sort?"_start":0),no(e)||(t._recent=e),n||Yl(t,e),t._ts<0&&vs(t,t._tTime),t},Vl=function(t,e){return(Xe.ScrollTrigger||Bo("scrollTrigger",e))&&Xe.ScrollTrigger.create(e,t)},jl=function(t,e,i,n,s){if(Yo(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!Pe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Fl!==Be.frame)return Ni.push(t),t._lazy=[s,n],1},Rc=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},no=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},zc=function(t,e,i,n){var s=t.ratio,o=e<0||!e&&(!t._start&&Rc(t)&&!(!t._initted&&no(t))||(t._ts<0||t._dp._ts<0)&&!no(t))?0:1,a=t._rDelay,l=0,h,u,f;if(a&&t._repeat&&(l=Cn(0,t._tDur,e),u=zr(l,a),t._yoyo&&u&1&&(o=1-o),u!==zr(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Pe||n||t._zTime===xt||!e&&t._zTime){if(!t._initted&&jl(t,e,n,i,l))return;for(f=t._zTime,t._zTime=e||(i?xt:0),i||(i=e&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,h=t._pt;h;)h.r(o,h.d),h=h._next;e<0&&ro(t,e,i,!0),t._onUpdate&&!i&&Qe(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Qe(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Ui(t,1),!i&&!Pe&&(Qe(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Lc=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},Lr=function(t,e,i,n){var s=t._repeat,o=he(e)||0,a=t._tTime/t._tDur;return a&&!n&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:he(o*(s+1)+t._rDelay*s):o,a>0&&!n&&vs(t,t._tTime=t._tDur*a),t.parent&&_s(t),i||ir(t.parent,t),t},ga=function(t){return t instanceof Me?ir(t):Lr(t,t._dur)},$c={_start:0,endTime:_n,totalDuration:_n},je=function r(t,e,i){var n=t.labels,s=t._recent||$c,o=t.duration()>=Ze?s.endTime(!1):t._dur,a,l,h;return ne(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),h=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(h?(a<0?s:i).totalDuration()/100:1)):a<0?(e in n||(n[e]=o),n[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),h&&i&&(l=l/100*(pe(i)?i[0]:i).totalDuration()),a>1?r(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},on=function(t,e,i){var n=Ai(e[1]),s=(n?2:1)+(t<2?0:1),o=e[s],a,l;if(n&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Oe(l.vars.inherit)&&l.parent;o.immediateRender=Oe(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Kt(e[0],o,e[s+1])},qi=function(t,e){return t||t===0?e(t):e},Cn=function(t,e,i){return i<t?t:i>e?e:i},fe=function(t,e){return!ne(t)||!(e=Tc.exec(t))?"":e[1]},Ic=function(t,e,i){return qi(i,function(n){return Cn(t,e,n)})},so=[].slice,Wl=function(t,e){return t&&mi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&mi(t[0]))&&!t.nodeType&&t!==We},Nc=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var s;return ne(n)&&!e||Wl(n,1)?(s=i).push.apply(s,Ke(n)):i.push(n)})||i},Ke=function(t,e,i){return Vt&&!e&&Vt.selector?Vt.selector(t):ne(t)&&!i&&(eo||!$r())?so.call((e||Fo).querySelectorAll(t),0):pe(t)?Nc(t,i):Wl(t)?so.call(t,0):t?[t]:[]},oo=function(t){return t=Ke(t)[0]||Qn("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Ke(e,i.querySelectorAll?i:i===t?Qn("Invalid scope")||Fo.createElement("div"):t)}},Gl=function(t){return t.sort(function(){return .5-Math.random()})},Zl=function(t){if($t(t))return t;var e=mi(t)?t:{each:t},i=rr(e.ease),n=e.from||0,s=parseFloat(e.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,h=e.axis,u=n,f=n;return ne(n)?u=f={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(u=n[0],f=n[1]),function(g,p,v){var _=(v||e).length,b=o[_],x,C,E,T,M,O,R,$,P;if(!b){if(P=e.grid==="auto"?0:(e.grid||[1,Ze])[1],!P){for(R=-Ze;R<(R=v[P++].getBoundingClientRect().left)&&P<_;);P--}for(b=o[_]=[],x=l?Math.min(P,_)*u-.5:n%P,C=P===Ze?0:l?_*f/P-.5:n/P|0,R=0,$=Ze,O=0;O<_;O++)E=O%P-x,T=C-(O/P|0),b[O]=M=h?Math.abs(h==="y"?T:E):Pl(E*E+T*T),M>R&&(R=M),M<$&&($=M);n==="random"&&Gl(b),b.max=R-$,b.min=$,b.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(P>_?_-1:h?h==="y"?_/P:P:Math.max(P,_/P))||0)*(n==="edges"?-1:1),b.b=_<0?s-_:s,b.u=fe(e.amount||e.each)||0,i=i&&_<0?nh(i):i}return _=(b[g]-b.min)/b.max||0,he(b.b+(i?i(_):_)*b.v)+b.u}},ao=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=he(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(Ai(i)?0:fe(i))}},Kl=function(t,e){var i=pe(t),n,s;return!i&&mi(t)&&(n=i=t.radius||Ze,t.values?(t=Ke(t.values),(s=!Ai(t[0]))&&(n*=n)):t=ao(t.increment)),qi(e,i?$t(t)?function(o){return s=t(o),Math.abs(s-o)<=n?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),h=Ze,u=0,f=t.length,g,p;f--;)s?(g=t[f].x-a,p=t[f].y-l,g=g*g+p*p):g=Math.abs(t[f]-a),g<h&&(h=g,u=f);return u=!n||h<=n?t[u]:o,s||u===o||Ai(o)?u:u+fe(o)}:ao(t))},Ql=function(t,e,i,n){return qi(pe(t)?!e:i===!0?!!(i=0):!n,function(){return pe(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},Fc=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(s,o){return o(s)},n)}},Bc=function(t,e){return function(i){return t(parseFloat(i))+(e||fe(i))}},Uc=function(t,e,i){return th(t,e,0,1,i)},Jl=function(t,e,i){return qi(i,function(n){return t[~~e(n)]})},Hc=function r(t,e,i){var n=e-t;return pe(t)?Jl(t,r(0,t.length),e):qi(i,function(s){return(n+(s-t)%n)%n+t})},Xc=function r(t,e,i){var n=e-t,s=n*2;return pe(t)?Jl(t,r(0,t.length-1),e):qi(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>n?s-o:o)})},vn=function(t){for(var e=0,i="",n,s,o,a;~(n=t.indexOf("random(",e));)o=t.indexOf(")",n),a=t.charAt(n+7)==="[",s=t.substr(n+7,o-n-7).match(a?Ll:to),i+=t.substr(e,n-e)+Ql(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return i+t.substr(e,t.length-e)},th=function(t,e,i,n,s){var o=e-t,a=n-i;return qi(s,function(l){return i+((l-t)/o*a||0)})},qc=function r(t,e,i,n){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var o=ne(t),a={},l,h,u,f,g;if(i===!0&&(n=1)&&(i=null),o)t={p:t},e={p:e};else if(pe(t)&&!pe(e)){for(u=[],f=t.length,g=f-2,h=1;h<f;h++)u.push(r(t[h-1],t[h]));f--,s=function(v){v*=f;var _=Math.min(g,~~v);return u[_](v-_)},i=e}else n||(t=ar(pe(t)?[]:{},t));if(!u){for(l in e)qo.call(a,t,l,"get",e[l]);s=function(v){return Wo(v,a)||(o?t.p:t)}}}return qi(i,s)},pa=function(t,e,i){var n=t.labels,s=Ze,o,a,l;for(o in n)a=n[o]-e,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Qe=function(t,e,i){var n=t.vars,s=n[e],o=Vt,a=t._ctx,l,h,u;if(!!s)return l=n[e+"Params"],h=n.callbackScope||t,i&&Ni.length&&Jn(),a&&(Vt=a),u=l?s.apply(h,l):s.call(h),Vt=o,u},Jr=function(t){return Ui(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Pe),t.progress()<1&&Qe(t,"onInterrupt"),t},xr,Yc=function(t){t=!t.name&&t.default||t;var e=t.name,i=$t(t),n=e&&!i&&t.init?function(){this._props=[]}:t,s={init:_n,render:Wo,add:qo,kill:ad,modifier:od,rawVars:0},o={targetTest:0,get:0,getSetter:jo,aliases:{},register:0};if($r(),t!==n){if(Fe[e])return;ti(n,ti(ts(t,s),o)),ar(n.prototype,ar(s,ts(t,o))),Fe[n.prop=e]=n,t.targetTest&&(Un.push(n),Uo[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Nl(e,n),t.register&&t.register(qe,n,Re)},Et=255,tn={aqua:[0,Et,Et],lime:[0,Et,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Et],navy:[0,0,128],white:[Et,Et,Et],olive:[128,128,0],yellow:[Et,Et,0],orange:[Et,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Et,0,0],pink:[Et,192,203],cyan:[0,Et,Et],transparent:[Et,Et,Et,0]},Cs=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*Et+.5|0},eh=function(t,e,i){var n=t?Ai(t)?[t>>16,t>>8&Et,t&Et]:0:tn.black,s,o,a,l,h,u,f,g,p,v;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),tn[t])n=tn[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&Et,n&Et,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&Et,t&Et]}else if(t.substr(0,3)==="hsl"){if(n=v=t.match(to),!e)l=+n[0]%360/360,h=+n[1]/100,u=+n[2]/100,o=u<=.5?u*(h+1):u+h-u*h,s=u*2-o,n.length>3&&(n[3]*=1),n[0]=Cs(l+1/3,s,o),n[1]=Cs(l,s,o),n[2]=Cs(l-1/3,s,o);else if(~t.indexOf("="))return n=t.match(Rl),i&&n.length<4&&(n[3]=1),n}else n=t.match(to)||tn.transparent;n=n.map(Number)}return e&&!v&&(s=n[0]/Et,o=n[1]/Et,a=n[2]/Et,f=Math.max(s,o,a),g=Math.min(s,o,a),u=(f+g)/2,f===g?l=h=0:(p=f-g,h=u>.5?p/(2-f-g):p/(f+g),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),n[0]=~~(l+.5),n[1]=~~(h*100+.5),n[2]=~~(u*100+.5)),i&&n.length<4&&(n[3]=1),n},ih=function(t){var e=[],i=[],n=-1;return t.split(Fi).forEach(function(s){var o=s.match(wr)||[];e.push.apply(e,o),i.push(n+=o.length+1)}),e.c=i,e},ma=function(t,e,i){var n="",s=(t+n).match(Fi),o=e?"hsla(":"rgba(",a=0,l,h,u,f;if(!s)return t;if(s=s.map(function(g){return(g=eh(g,e,1))&&o+(e?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),i&&(u=ih(t),l=i.c,l.join(n)!==u.c.join(n)))for(h=t.replace(Fi,"1").split(wr),f=h.length-1;a<f;a++)n+=h[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!h)for(h=t.split(Fi),f=h.length-1;a<f;a++)n+=h[a]+s[a];return n+h[f]},Fi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in tn)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),Vc=/hsl[a]?\(/,rh=function(t){var e=t.join(" "),i;if(Fi.lastIndex=0,Fi.test(e))return i=Vc.test(e),t[1]=ma(t[1],i),t[0]=ma(t[0],i,ih(t[1])),!0},yn,Be=function(){var r=Date.now,t=500,e=33,i=r(),n=i,s=1e3/240,o=s,a=[],l,h,u,f,g,p,v=function _(b){var x=r()-n,C=b===!0,E,T,M,O;if(x>t&&(i+=x-e),n+=x,M=n-i,E=M-o,(E>0||C)&&(O=++f.frame,g=M-f.time*1e3,f.time=M=M/1e3,o+=E+(E>=s?4:s-E),T=1),C||(l=h(_)),T)for(p=0;p<a.length;p++)a[p](M,g,O,b)};return f={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(b){return g/(1e3/(b||60))},wake:function(){$l&&(!eo&&Ol()&&(We=eo=window,Fo=We.document||{},Xe.gsap=qe,(We.gsapVersions||(We.gsapVersions=[])).push(qe.version),Il(Kn||We.GreenSockGlobals||!We.gsap&&We||{}),u=We.requestAnimationFrame),l&&f.sleep(),h=u||function(b){return setTimeout(b,o-f.time*1e3+1|0)},yn=1,v(2))},sleep:function(){(u?We.cancelAnimationFrame:clearTimeout)(l),yn=0,h=_n},lagSmoothing:function(b,x){t=b||1/xt,e=Math.min(x,t,0)},fps:function(b){s=1e3/(b||240),o=f.time*1e3+s},add:function(b,x,C){var E=x?function(T,M,O,R){b(T,M,O,R),f.remove(E)}:b;return f.remove(b),a[C?"unshift":"push"](E),$r(),E},remove:function(b,x){~(x=a.indexOf(b))&&a.splice(x,1)&&p>=x&&p--},_listeners:a},f}(),$r=function(){return!yn&&Be.wake()},pt={},jc=/^[\d.\-M][\d.\-,\s]/,Wc=/["']/g,Gc=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],s=1,o=i.length,a,l,h;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,h=l.substr(0,a),e[n]=isNaN(h)?h.replace(Wc,"").trim():+h,n=l.substr(a+1).trim();return e},Zc=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},Kc=function(t){var e=(t+"").split("("),i=pt[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[Gc(e[1])]:Zc(t).split(",").map(Hl)):pt._CE&&jc.test(t)?pt._CE("",t):i},nh=function(t){return function(e){return 1-t(1-e)}},sh=function r(t,e){for(var i=t._first,n;i;)i instanceof Me?r(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?r(i.timeline,e):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=e)),i=i._next},rr=function(t,e){return t&&($t(t)?t:pt[t]||Kc(t))||e},ur=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:n},o;return De(t,function(a){pt[a]=Xe[a]=s,pt[o=a.toLowerCase()]=i;for(var l in s)pt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=pt[a+"."+l]=s[l]}),s},oh=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ks=function r(t,e,i){var n=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),o=s/Js*(Math.asin(1/n)||0),a=function(u){return u===1?1:n*Math.pow(2,-10*u)*Ec((u-o)*s)+1},l=t==="out"?a:t==="in"?function(h){return 1-a(1-h)}:oh(a);return s=Js/s,l.config=function(h,u){return r(t,h,u)},l},Ms=function r(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},n=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:oh(i);return n.config=function(s){return r(t,s)},n};De("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;ur(r+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});pt.Linear.easeNone=pt.none=pt.Linear.easeIn;ur("Elastic",ks("in"),ks("out"),ks());(function(r,t){var e=1/t,i=2*e,n=2.5*e,s=function(a){return a<e?r*a*a:a<i?r*Math.pow(a-1.5/t,2)+.75:a<n?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};ur("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ur("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});ur("Circ",function(r){return-(Pl(1-r*r)-1)});ur("Sine",function(r){return r===1?1:-Sc(r*wc)+1});ur("Back",Ms("in"),Ms("out"),Ms());pt.SteppedEase=pt.steps=Xe.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),s=e?1:0,o=1-xt;return function(a){return((n*Cn(0,o,a)|0)+s)*i}}};Rr.ease=pt["quad.out"];De("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ho+=r+","+r+"Params,"});var ah=function(t,e){this.id=xc++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Bl,this.set=e?e.getSetter:jo},Ir=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Lr(this,+e.duration,1,1),this.data=e.data,Vt&&(this._ctx=Vt,Vt.data.push(this)),yn||Be.wake()}var t=r.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Lr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if($r(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(vs(this,i),!s._dp||s.parent||Yl(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&di(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===xt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Ul(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+fa(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+fa(this),n):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?zr(this._tTime,s)+1:1},t.timeScale=function(i){if(!arguments.length)return this._rts===-xt?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?es(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-xt?0:this._rts,this.totalTime(Cn(-this._delay,this._tDur,n),!0),_s(this),Oc(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($r(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xt&&(this._tTime-=xt)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&di(n,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Oe(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?es(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=Cc);var n=Pe;return Pe=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Pe=n,this},t.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(n._ts||1),n=n._dp;return!this.parent&&this.vars.immediateRender?-1:s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ga(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,ga(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(je(this,i),Oe(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Oe(n))},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-xt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-xt,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-xt)},t.eventCallback=function(i,n,s){var o=this.vars;return arguments.length>1?(n?(o[i]=n,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},t.then=function(i){var n=this;return new Promise(function(s){var o=$t(i)?i:Xl,a=function(){var h=n.then;n.then=null,$t(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=h),s(o),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?a():n._prom=a})},t.kill=function(){Jr(this)},r}();ti(Ir.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xt,_prom:0,_ps:!1,_rts:1});var Me=function(r){Ml(t,r);function t(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Oe(i.sortChildren),Pt&&di(i.parent||Pt,wi(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Vl(wi(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(n,s,o){return on(0,arguments,this),this},e.from=function(n,s,o){return on(1,arguments,this),this},e.fromTo=function(n,s,o,a){return on(2,arguments,this),this},e.set=function(n,s,o){return s.duration=0,s.parent=this,sn(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Kt(n,s,je(this,o),1),this},e.call=function(n,s,o){return di(this,Kt.delayedCall(0,n,s),o)},e.staggerTo=function(n,s,o,a,l,h,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=h,o.onCompleteParams=u,o.parent=this,new Kt(n,o,je(this,l)),this},e.staggerFrom=function(n,s,o,a,l,h,u){return o.runBackwards=1,sn(o).immediateRender=Oe(o.immediateRender),this.staggerTo(n,s,o,a,l,h,u)},e.staggerFromTo=function(n,s,o,a,l,h,u,f){return a.startAt=o,sn(a).immediateRender=Oe(a.immediateRender),this.staggerTo(n,s,a,l,h,u,f)},e.render=function(n,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,h=this._dur,u=n<=0?0:he(n),f=this._zTime<0!=n<0&&(this._initted||!h),g,p,v,_,b,x,C,E,T,M,O,R;if(this!==Pt&&u>l&&n>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&h&&(u+=this._time-a,n+=this._time-a),g=u,T=this._start,E=this._ts,x=!E,f&&(h||(a=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(O=this._yoyo,b=h+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(b*100+n,s,o);if(g=he(u%b),u===l?(_=this._repeat,g=h):(_=~~(u/b),_&&_===u/b&&(g=h,_--),g>h&&(g=h)),M=zr(this._tTime,b),!a&&this._tTime&&M!==_&&(M=_),O&&_&1&&(g=h-g,R=1),_!==M&&!this._lock){var $=O&&M&1,P=$===(O&&_&1);if(_<M&&($=!$),a=$?0:h,this._lock=1,this.render(a||(R?0:he(_*b)),s,!h)._lock=0,this._tTime=u,!s&&this.parent&&Qe(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),a&&a!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,l=this._tDur,P&&(this._lock=2,a=$?h:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;sh(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(C=Lc(this,he(a),he(g)),C&&(u-=g-(g=C._start))),this._tTime=u,this._time=g,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&g&&!s&&(Qe(this,"onStart"),this._tTime!==u))return this;if(g>=a&&n>=0)for(p=this._first;p;){if(v=p._next,(p._act||g>=p._start)&&p._ts&&C!==p){if(p.parent!==this)return this.render(n,s,o);if(p.render(p._ts>0?(g-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(g-p._start)*p._ts,s,o),g!==this._time||!this._ts&&!x){C=0,v&&(u+=this._zTime=-xt);break}}p=v}else{p=this._last;for(var F=n<0?n:g;p;){if(v=p._prev,(p._act||F<=p._end)&&p._ts&&C!==p){if(p.parent!==this)return this.render(n,s,o);if(p.render(p._ts>0?(F-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(F-p._start)*p._ts,s,o||Pe&&(p._initted||p._startAt)),g!==this._time||!this._ts&&!x){C=0,v&&(u+=this._zTime=F?-xt:xt);break}}p=v}}if(C&&!s&&(this.pause(),C.render(g>=a?0:-xt)._zTime=g>=a?1:-1,this._ts))return this._start=T,_s(this),this.render(n,s,o);this._onUpdate&&!s&&Qe(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(T===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((n||!h)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ui(this,1),!s&&!(n<0&&!a)&&(u||a||!l)&&(Qe(this,u===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,s){var o=this;if(Ai(s)||(s=je(this,s,n)),!(n instanceof Ir)){if(pe(n))return n.forEach(function(a){return o.add(a,s)}),this;if(ne(n))return this.addLabel(n,s);if($t(n))n=Kt.delayedCall(0,n);else return this}return this!==n?di(this,n,s):this},e.getChildren=function(n,s,o,a){n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ze);for(var l=[],h=this._first;h;)h._start>=a&&(h instanceof Kt?s&&l.push(h):(o&&l.push(h),n&&l.push.apply(l,h.getChildren(!0,s,o)))),h=h._next;return l},e.getById=function(n){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===n)return s[o]},e.remove=function(n){return ne(n)?this.removeLabel(n):$t(n)?this.killTweensOf(n):(ms(this,n),n===this._recent&&(this._recent=this._last),ir(this))},e.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=he(Be.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},e.addLabel=function(n,s){return this.labels[n]=je(this,s),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,s,o){var a=Kt.delayedCall(0,s||_n,o);return a.data="isPause",this._hasPause=1,di(this,a,je(this,n))},e.removePause=function(n){var s=this._first;for(n=je(this,n);s;)s._start===n&&s.data==="isPause"&&Ui(s),s=s._next},e.killTweensOf=function(n,s,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)Oi!==a[l]&&a[l].kill(n,s);return this},e.getTweensOf=function(n,s){for(var o=[],a=Ke(n),l=this._first,h=Ai(s),u;l;)l instanceof Kt?kc(l._targets,a)&&(h?(!Oi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(n,s){s=s||{};var o=this,a=je(o,n),l=s,h=l.startAt,u=l.onStart,f=l.onStartParams,g=l.immediateRender,p,v=Kt.to(o,ti({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(h&&"time"in h?h.time:o._time))/o.timeScale())||xt,onStart:function(){if(o.pause(),!p){var b=s.duration||Math.abs((a-(h&&"time"in h?h.time:o._time))/o.timeScale());v._dur!==b&&Lr(v,b,0,1).render(v._time,!0,!0),p=1}u&&u.apply(v,f||[])}},s));return g?v.render(0):v},e.tweenFromTo=function(n,s,o){return this.tweenTo(s,ti({startAt:{time:je(this,n)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),pa(this,je(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),pa(this,je(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+xt)},e.shiftChildren=function(n,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,h;a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(s)for(h in l)l[h]>=o&&(l[h]+=n);return ir(this)},e.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),ir(this)},e.totalDuration=function(n){var s=0,o=this,a=o._last,l=Ze,h,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(f=o.parent;a;)h=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,di(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=h;Lr(o,o===Pt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(n){if(Pt._ts&&(Ul(Pt,es(n,Pt)),Fl=Be.frame),Be.frame>=da){da+=He.autoSleep||120;var s=Pt._first;if((!s||!s._ts)&&He.autoSleep&&Be._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Be.sleep()}}},t}(Ir);ti(Me.prototype,{_lock:0,_hasPause:0,_forcing:0});var Qc=function(t,e,i,n,s,o,a){var l=new Re(this._pt,t,e,0,1,fh,null,s),h=0,u=0,f,g,p,v,_,b,x,C;for(l.b=i,l.e=n,i+="",n+="",(x=~n.indexOf("random("))&&(n=vn(n)),o&&(C=[i,n],o(C,t,e),i=C[0],n=C[1]),g=i.match(Ts)||[];f=Ts.exec(n);)v=f[0],_=n.substring(h,f.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),v!==g[u++]&&(b=parseFloat(g[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:b,c:v.charAt(1)==="="?Cr(b,v)-b:parseFloat(v)-b,m:p&&p<4?Math.round:0},h=Ts.lastIndex);return l.c=h<n.length?n.substring(h,n.length):"",l.fp=a,(zl.test(n)||x)&&(l.e=0),this._pt=l,l},qo=function(t,e,i,n,s,o,a,l,h,u){$t(n)&&(n=n(s||0,t,o));var f=t[e],g=i!=="get"?i:$t(f)?h?t[e.indexOf("set")||!$t(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():f,p=$t(f)?h?rd:dh:Vo,v;if(ne(n)&&(~n.indexOf("random(")&&(n=vn(n)),n.charAt(1)==="="&&(v=Cr(g,n)+(fe(g)||0),(v||v===0)&&(n=v))),!u||g!==n||lo)return!isNaN(g*n)&&n!==""?(v=new Re(this._pt,t,e,+g||0,n-(g||0),typeof f=="boolean"?sd:uh,0,p),h&&(v.fp=h),a&&v.modifier(a,this,t),this._pt=v):(!f&&!(e in t)&&Bo(e,n),Qc.call(this,t,e,g,n,p,l||He.stringFilter,h))},Jc=function(t,e,i,n,s){if($t(t)&&(t=an(t,s,e,i,n)),!mi(t)||t.style&&t.nodeType||pe(t)||Dl(t))return ne(t)?an(t,s,e,i,n):t;var o={},a;for(a in t)o[a]=an(t[a],s,e,i,n);return o},lh=function(t,e,i,n,s,o){var a,l,h,u;if(Fe[t]&&(a=new Fe[t]).init(s,a.rawVars?e[t]:Jc(e[t],n,s,o,i),i,n,o)!==!1&&(i._pt=l=new Re(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==xr))for(h=i._ptLookup[i._targets.indexOf(s)],u=a._props.length;u--;)h[a._props[u]]=l;return a},Oi,lo,Yo=function r(t,e,i){var n=t.vars,s=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,h=n.onUpdate,u=n.onUpdateParams,f=n.callbackScope,g=n.runBackwards,p=n.yoyoEase,v=n.keyframes,_=n.autoRevert,b=t._dur,x=t._startAt,C=t._targets,E=t.parent,T=E&&E.data==="nested"?E.vars.targets:C,M=t._overwrite==="auto"&&!Io,O=t.timeline,R,$,P,F,B,H,J,U,G,Y,ot,X,ct;if(O&&(!v||!s)&&(s="none"),t._ease=rr(s,Rr.ease),t._yEase=p?nh(rr(p===!0?s:p,Rr.ease)):0,p&&t._yoyo&&!t._repeat&&(p=t._yEase,t._yEase=t._ease,t._ease=p),t._from=!O&&!!n.runBackwards,!O||v&&!n.stagger){if(U=C[0]?er(C[0]).harness:0,X=U&&n[U.prop],R=ts(n,Uo),x&&(x._zTime<0&&x.progress(1),e<0&&g&&a&&!_?x.render(-1,!0):x.revert(g&&b?Bn:Ac),x._lazy=0),o){if(Ui(t._startAt=Kt.set(C,ti({data:"isStart",overwrite:!1,parent:E,immediateRender:!0,lazy:Oe(l),startAt:null,delay:0,onUpdate:h,onUpdateParams:u,callbackScope:f,stagger:0},o))),t._startAt._dp=0,e<0&&(Pe||!a&&!_)&&t._startAt.revert(Bn),a&&b&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(g&&b&&!x){if(e&&(a=!1),P=ti({overwrite:!1,data:"isFromStart",lazy:a&&Oe(l),immediateRender:a,stagger:0,parent:E},R),X&&(P[U.prop]=X),Ui(t._startAt=Kt.set(C,P)),t._startAt._dp=0,e<0&&(Pe?t._startAt.revert(Bn):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,xt,xt);else if(!e)return}for(t._pt=t._ptCache=0,l=b&&Oe(l)||l&&!b,$=0;$<C.length;$++){if(B=C[$],J=B._gsap||Xo(C)[$]._gsap,t._ptLookup[$]=Y={},io[J.id]&&Ni.length&&Jn(),ot=T===C?$:T.indexOf(B),U&&(G=new U).init(B,X||R,t,ot,T)!==!1&&(t._pt=F=new Re(t._pt,B,G.name,0,1,G.render,G,0,G.priority),G._props.forEach(function(k){Y[k]=F}),G.priority&&(H=1)),!U||X)for(P in R)Fe[P]&&(G=lh(P,R,t,ot,B,T))?G.priority&&(H=1):Y[P]=F=qo.call(t,B,P,"get",R[P],ot,T,0,n.stringFilter);t._op&&t._op[$]&&t.kill(B,t._op[$]),M&&t._pt&&(Oi=t,Pt.killTweensOf(B,Y,t.globalTime(e)),ct=!t.parent,Oi=0),t._pt&&l&&(io[J.id]=1)}H&&gh(t),t._onInit&&t._onInit(t)}t._onUpdate=h,t._initted=(!t._op||t._pt)&&!ct,v&&e<=0&&O.render(Ze,!0,!0)},td=function(t,e,i,n,s,o,a){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,g;if(!l)for(l=t._ptCache[e]=[],f=t._ptLookup,g=t._targets.length;g--;){if(h=f[g][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return lo=1,t.vars[e]="+=0",Yo(t,a),lo=0,1;l.push(h)}for(g=l.length;g--;)u=l[g],h=u._pt||u,h.s=(n||n===0)&&!s?n:h.s+(n||0)+o*h.c,h.c=i-h.s,u.e&&(u.e=Ut(i)+fe(u.e)),u.b&&(u.b=h.s+fe(u.b))},ed=function(t,e){var i=t[0]?er(t[0]).harness:0,n=i&&i.aliases,s,o,a,l;if(!n)return e;s=ar({},e);for(o in n)if(o in s)for(l=n[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},id=function(t,e,i,n){var s=e.ease||n||"power1.inOut",o,a;if(pe(e))a=i[t]||(i[t]=[]),e.forEach(function(l,h){return a.push({t:h/(e.length-1)*100,v:l,e:s})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},an=function(t,e,i,n,s){return $t(t)?t.call(e,i,n,s):ne(t)&&~t.indexOf("random(")?vn(t):t},hh=Ho+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ch={};De(hh+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ch[r]=1});var Kt=function(r){Ml(t,r);function t(i,n,s,o){var a;typeof n=="number"&&(s.duration=n,n=s,s=null),a=r.call(this,o?n:sn(n))||this;var l=a.vars,h=l.duration,u=l.delay,f=l.immediateRender,g=l.stagger,p=l.overwrite,v=l.keyframes,_=l.defaults,b=l.scrollTrigger,x=l.yoyoEase,C=n.parent||Pt,E=(pe(i)||Dl(i)?Ai(i[0]):"length"in n)?[i]:Ke(i),T,M,O,R,$,P,F,B;if(a._targets=E.length?Xo(E):Qn("GSAP target "+i+" not found. https://greensock.com",!He.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,v||g||kn(h)||kn(u)){if(n=a.vars,T=a.timeline=new Me({data:"nested",defaults:_||{},targets:C&&C.data==="nested"?C.vars.targets:E}),T.kill(),T.parent=T._dp=wi(a),T._start=0,g||kn(h)||kn(u)){if(R=E.length,F=g&&Zl(g),mi(g))for($ in g)~hh.indexOf($)&&(B||(B={}),B[$]=g[$]);for(M=0;M<R;M++)O=ts(n,ch),O.stagger=0,x&&(O.yoyoEase=x),B&&ar(O,B),P=E[M],O.duration=+an(h,wi(a),M,P,E),O.delay=(+an(u,wi(a),M,P,E)||0)-a._delay,!g&&R===1&&O.delay&&(a._delay=u=O.delay,a._start+=u,O.delay=0),T.to(P,O,F?F(M,P,E):0),T._ease=pt.none;T.duration()?h=u=0:a.timeline=0}else if(v){sn(ti(T.vars.defaults,{ease:"none"})),T._ease=rr(v.ease||n.ease||"none");var H=0,J,U,G;if(pe(v))v.forEach(function(Y){return T.to(E,Y,">")}),T.duration();else{O={};for($ in v)$==="ease"||$==="easeEach"||id($,v[$],O,v.easeEach);for($ in O)for(J=O[$].sort(function(Y,ot){return Y.t-ot.t}),H=0,M=0;M<J.length;M++)U=J[M],G={ease:U.e,duration:(U.t-(M?J[M-1].t:0))/100*h},G[$]=U.v,T.to(E,G,H),H+=G.duration;T.duration()<h&&T.to({},{duration:h-T.duration()})}}h||a.duration(h=T.duration())}else a.timeline=0;return p===!0&&!Io&&(Oi=wi(a),Pt.killTweensOf(E),Oi=0),di(C,wi(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(f||!h&&!v&&a._start===he(C._time)&&Oe(f)&&Dc(wi(a))&&C.data!=="nested")&&(a._tTime=-xt,a.render(Math.max(0,-u)||0)),b&&Vl(wi(a),b),a}var e=t.prototype;return e.render=function(n,s,o){var a=this._time,l=this._tDur,h=this._dur,u=n<0,f=n>l-xt&&!u?l:n<xt?0:n,g,p,v,_,b,x,C,E,T;if(!h)zc(this,n,s,o);else if(f!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(g=f,E=this.timeline,this._repeat){if(_=h+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+n,s,o);if(g=he(f%_),f===l?(v=this._repeat,g=h):(v=~~(f/_),v&&v===f/_&&(g=h,v--),g>h&&(g=h)),x=this._yoyo&&v&1,x&&(T=this._yEase,g=h-g),b=zr(this._tTime,_),g===a&&!o&&this._initted)return this._tTime=f,this;v!==b&&(E&&this._yEase&&sh(E,x),this.vars.repeatRefresh&&!x&&!this._lock&&(this._lock=o=1,this.render(he(_*v),!0).invalidate()._lock=0))}if(!this._initted){if(jl(this,u?n:g,o,s,f))return this._tTime=0,this;if(a!==this._time)return this;if(h!==this._dur)return this.render(n,s,o)}if(this._tTime=f,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=C=(T||this._ease)(g/h),this._from&&(this.ratio=C=1-C),g&&!a&&!s&&(Qe(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(C,p.d),p=p._next;E&&E.render(n<0?n:!g&&x?-xt:E._dur*E._ease(g/this._dur),s,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(u&&ro(this,n,s,o),Qe(this,"onUpdate")),this._repeat&&v!==b&&this.vars.onRepeat&&!s&&this.parent&&Qe(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&ro(this,n,!0,!0),(n||!h)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Ui(this,1),!s&&!(u&&!a)&&(f||a||x)&&(Qe(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},e.resetTo=function(n,s,o,a){yn||Be.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Yo(this,l),h=this._ease(l/this._dur),td(this,n,s,o,a,h,l)?this.resetTo(n,s,o,a):(vs(this,0),this.parent||ql(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Jr(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,Oi&&Oi.vars.overwrite!==!0)._first||Jr(this),this.parent&&o!==this.timeline.totalDuration()&&Lr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Ke(n):a,h=this._ptLookup,u=this._pt,f,g,p,v,_,b,x;if((!s||s==="all")&&Pc(a,l))return s==="all"&&(this._pt=0),Jr(this);for(f=this._op=this._op||[],s!=="all"&&(ne(s)&&(_={},De(s,function(C){return _[C]=1}),s=_),s=ed(a,s)),x=a.length;x--;)if(~l.indexOf(a[x])){g=h[x],s==="all"?(f[x]=s,v=g,p={}):(p=f[x]=f[x]||{},v=s);for(_ in v)b=g&&g[_],b&&((!("kill"in b.d)||b.d.kill(_)===!0)&&ms(this,b,"_pt"),delete g[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&u&&Jr(this),this},t.to=function(n,s){return new t(n,s,arguments[2])},t.from=function(n,s){return on(1,arguments)},t.delayedCall=function(n,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(n,s,o){return on(2,arguments)},t.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(n,s)},t.killTweensOf=function(n,s,o){return Pt.killTweensOf(n,s,o)},t}(Ir);ti(Kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});De("staggerTo,staggerFrom,staggerFromTo",function(r){Kt[r]=function(){var t=new Me,e=so.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Vo=function(t,e,i){return t[e]=i},dh=function(t,e,i){return t[e](i)},rd=function(t,e,i,n){return t[e](n.fp,i)},nd=function(t,e,i){return t.setAttribute(e,i)},jo=function(t,e){return $t(t[e])?dh:No(t[e])&&t.setAttribute?nd:Vo},uh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},sd=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},fh=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},Wo=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},od=function(t,e,i,n){for(var s=this._pt,o;s;)o=s._next,s.p===n&&s.modifier(t,e,i),s=o},ad=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?ms(this,e,"_pt"):e.dep||(i=1),e=n;return!i},ld=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},gh=function(t){for(var e=t._pt,i,n,s,o;e;){for(i=e._next,n=s;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:o)?e._prev._next=e:s=e,(e._next=n)?n._prev=e:o=e,e=i}t._pt=s},Re=function(){function r(e,i,n,s,o,a,l,h,u){this.t=i,this.s=s,this.c=o,this.p=n,this.r=a||uh,this.d=l||this,this.set=h||Vo,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=ld,this.m=i,this.mt=s,this.tween=n},r}();De(Ho+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Uo[r]=1});Xe.TweenMax=Xe.TweenLite=Kt;Xe.TimelineLite=Xe.TimelineMax=Me;Pt=new Me({sortChildren:!1,defaults:Rr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});He.stringFilter=rh;var Nr=[],Hn={},hd=[],_a=0,Ps=function(t){return(Hn[t]||hd).map(function(e){return e()})},ho=function(){var t=Date.now(),e=[];t-_a>2&&(Ps("matchMediaInit"),Nr.forEach(function(i){var n=i.queries,s=i.conditions,o,a,l,h;for(a in n)o=We.matchMedia(n[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,h=1);h&&(i.revert(),l&&e.push(i))}),Ps("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i)}),_a=t,Ps("matchMedia"))},ph=function(){function r(e,i){this.selector=i&&oo(i),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=r.prototype;return t.add=function(i,n,s){$t(i)&&(s=n,n=i,i=$t);var o=this,a=function(){var h=Vt,u=o.selector,f;return h&&h!==o&&h.data.push(o),s&&(o.selector=oo(s)),Vt=o,f=n.apply(o,arguments),$t(f)&&o._r.push(f),Vt=h,o.selector=u,o.isReverted=!1,f};return o.last=a,i===$t?a(o):i?o[i]=a:a},t.ignore=function(i){var n=Vt;Vt=null,i(this),Vt=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof Kt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var s=this;if(i){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,h){return h.g-l.g||-1}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return!(l instanceof Ir)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),n){var a=Nr.indexOf(this);~a&&Nr.splice(a,1)}},t.revert=function(i){this.kill(i||{})},r}(),cd=function(){function r(e){this.contexts=[],this.scope=e}var t=r.prototype;return t.add=function(i,n,s){mi(i)||(i={matches:i});var o=new ph(0,s||this.scope),a=o.conditions={},l,h,u;this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(h in i)h==="all"?u=1:(l=We.matchMedia(i[h]),l&&(Nr.indexOf(o)<0&&Nr.push(o),(a[h]=l.matches)&&(u=1),l.addListener?l.addListener(ho):l.addEventListener("change",ho)));return u&&n(o),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r}(),is={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return Yc(n)})},timeline:function(t){return new Me(t)},getTweensOf:function(t,e){return Pt.getTweensOf(t,e)},getProperty:function(t,e,i,n){ne(t)&&(t=Ke(t)[0]);var s=er(t||{}).get,o=i?Xl:Hl;return i==="native"&&(i=""),t&&(e?o((Fe[e]&&Fe[e].get||s)(t,e,i,n)):function(a,l,h){return o((Fe[a]&&Fe[a].get||s)(t,a,l,h))})},quickSetter:function(t,e,i){if(t=Ke(t),t.length>1){var n=t.map(function(u){return qe.quickSetter(u,e,i)}),s=n.length;return function(u){for(var f=s;f--;)n[f](u)}}t=t[0]||{};var o=Fe[e],a=er(t),l=a.harness&&(a.harness.aliases||{})[e]||e,h=o?function(u){var f=new o;xr._pt=0,f.init(t,i?u+i:u,xr,0,[t]),f.render(1,f),xr._pt&&Wo(1,xr)}:a.set(t,l);return o?h:function(u){return h(t,l,i?u+i:u,a,1)}},quickTo:function(t,e,i){var n,s=qe.to(t,ar((n={},n[e]="+=0.1",n.paused=!0,n),i||{})),o=function(l,h,u){return s.resetTo(e,l,h,u)};return o.tween=s,o},isTweening:function(t){return Pt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=rr(t.ease,Rr.ease)),ua(Rr,t||{})},config:function(t){return ua(He,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,s=t.defaults,o=t.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!Fe[a]&&!Xe[a]&&Qn(e+" effect requires "+a+" plugin.")}),As[e]=function(a,l,h){return i(Ke(a),ti(l||{},s),h)},o&&(Me.prototype[e]=function(a,l,h){return this.add(As[e](a,mi(l)?l:(h=l)&&{},this),h)})},registerEase:function(t,e){pt[t]=rr(e)},parseEase:function(t,e){return arguments.length?rr(t,e):pt},getById:function(t){return Pt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Me(t),n,s;for(i.smoothChildTiming=Oe(t.smoothChildTiming),Pt.remove(i),i._dp=0,i._time=i._tTime=Pt._time,n=Pt._first;n;)s=n._next,(e||!(!n._dur&&n instanceof Kt&&n.vars.onComplete===n._targets[0]))&&di(i,n,n._start-n._delay),n=s;return di(Pt,i,0),i},context:function(t,e){return t?new ph(t,e):Vt},matchMedia:function(t){return new cd(t)},matchMediaRefresh:function(){return Nr.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||ho()},addEventListener:function(t,e){var i=Hn[t]||(Hn[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Hn[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:Hc,wrapYoyo:Xc,distribute:Zl,random:Ql,snap:Kl,normalize:Uc,getUnit:fe,clamp:Ic,splitColor:eh,toArray:Ke,selector:oo,mapRange:th,pipe:Fc,unitize:Bc,interpolate:qc,shuffle:Gl},install:Il,effects:As,ticker:Be,updateRoot:Me.updateRoot,plugins:Fe,globalTimeline:Pt,core:{PropTween:Re,globals:Nl,Tween:Kt,Timeline:Me,Animation:Ir,getCache:er,_removeLinkedListItem:ms,reverting:function(){return Pe},context:function(t){return t&&Vt&&(Vt.data.push(t),t._ctx=Vt),Vt},suppressOverwrites:function(t){return Io=t}}};De("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return is[r]=Kt[r]});Be.add(Me.updateRoot);xr=is.to({},{duration:0});var dd=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},ud=function(t,e){var i=t._targets,n,s,o;for(n in e)for(s=i.length;s--;)o=t._ptLookup[s][n],o&&(o=o.d)&&(o._pt&&(o=dd(o,n)),o&&o.modifier&&o.modifier(e[n],t,i[s],n))},Os=function(t,e){return{name:t,rawVars:1,init:function(n,s,o){o._onInit=function(a){var l,h;if(ne(s)&&(l={},De(s,function(u){return l[u]=1}),s=l),e){l={};for(h in s)l[h]=e(s[h]);s=l}ud(a,s)}}}},qe=is.registerPlugin({name:"attr",init:function(t,e,i,n,s){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],n,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)Pe?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Os("roundProps",ao),Os("modifiers"),Os("snap",Kl))||is;Kt.version=Me.version=qe.version="3.11.3";$l=1;Ol()&&$r();pt.Power0;pt.Power1;pt.Power2;pt.Power3;pt.Power4;pt.Linear;pt.Quad;pt.Cubic;pt.Quart;pt.Quint;pt.Strong;pt.Elastic;pt.Back;pt.SteppedEase;pt.Bounce;pt.Sine;pt.Expo;pt.Circ;/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var va,Di,kr,Go,Ji,ya,Zo,fd=function(){return typeof window<"u"},Ci={},Zi=180/Math.PI,Mr=Math.PI/180,gr=Math.atan2,ba=1e8,Ko=/([A-Z])/g,gd=/(left|right|width|margin|padding|x)/i,pd=/[\s,\(]\S/,Ei={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},co=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},md=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},_d=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},vd=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},mh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},_h=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},yd=function(t,e,i){return t.style[e]=i},bd=function(t,e,i){return t.style.setProperty(e,i)},wd=function(t,e,i){return t._gsap[e]=i},xd=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Sd=function(t,e,i,n,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},Ed=function(t,e,i,n,s){var o=t._gsap;o[e]=i,o.renderTransform(s,o)},Ot="transform",si=Ot+"Origin",Td=function(t,e){var i=this,n=this.target,s=n.style;if(t in Ci){if(this.tfm=this.tfm||{},t!=="transform"&&(t=Ei[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=xi(n,o)}):this.tfm[t]=n._gsap.x?n._gsap[t]:xi(n,t)),this.props.indexOf(Ot)>=0)return;n._gsap.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(si,e,"")),t=Ot}(s||e)&&this.props.push(t,e,s[t])},vh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Ad=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].replace(Ko,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Zo(),s&&!s.isStart&&!i[Ot]&&(vh(i),n.uncache=1)}},yh=function(t,e){var i={target:t,props:[],revert:Ad,save:Td};return e&&e.split(",").forEach(function(n){return i.save(n)}),i},bh,uo=function(t,e){var i=Di.createElementNS?Di.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Di.createElement(t);return i.style?i:Di.createElement(t)},gi=function r(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(Ko,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&r(t,Fr(e)||e,1)||""},wa="O,Moz,ms,Ms,Webkit".split(","),Fr=function(t,e,i){var n=e||Ji,s=n.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(wa[o]+t in s););return o<0?null:(o===3?"ms":o>=0?wa[o]:"")+t},fo=function(){fd()&&window.document&&(va=window,Di=va.document,kr=Di.documentElement,Ji=uo("div")||{style:{}},uo("div"),Ot=Fr(Ot),si=Ot+"Origin",Ji.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bh=!!Fr("perspective"),Zo=qe.core.reverting,Go=1)},Ds=function r(t){var e=uo("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,s=this.style.cssText,o;if(kr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),kr.removeChild(e),this.style.cssText=s,o},xa=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},wh=function(t){var e;try{e=t.getBBox()}catch{e=Ds.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Ds||(e=Ds.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+xa(t,["x","cx","x1"])||0,y:+xa(t,["y","cy","y1"])||0,width:0,height:0}:e},xh=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&wh(t))},bn=function(t,e){if(e){var i=t.style;e in Ci&&e!==si&&(e=Ot),i.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(e.replace(Ko,"-$1").toLowerCase())):i.removeAttribute(e)}},Ri=function(t,e,i,n,s,o){var a=new Re(t._pt,e,i,0,1,o?_h:mh);return t._pt=a,a.b=n,a.e=s,t._props.push(i),a},Sa={deg:1,rad:1,turn:1},Cd={grid:1,flex:1},Hi=function r(t,e,i,n){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Ji.style,l=gd.test(e),h=t.tagName.toLowerCase()==="svg",u=(h?"client":"offset")+(l?"Width":"Height"),f=100,g=n==="px",p=n==="%",v,_,b,x;return n===o||!s||Sa[n]||Sa[o]?s:(o!=="px"&&!g&&(s=r(t,e,i,"px")),x=t.getCTM&&xh(t),(p||o==="%")&&(Ci[e]||~e.indexOf("adius"))?(v=x?t.getBBox()[l?"width":"height"]:t[u],Ut(p?s/v*f:s/100*v)):(a[l?"width":"height"]=f+(g?o:n),_=~e.indexOf("adius")||n==="em"&&t.appendChild&&!h?t:t.parentNode,x&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Di||!_.appendChild)&&(_=Di.body),b=_._gsap,b&&p&&b.width&&l&&b.time===Be.time&&!b.uncache?Ut(s/b.width*f):((p||o==="%")&&!Cd[gi(_,"display")]&&(a.position=gi(t,"position")),_===t&&(a.position="static"),_.appendChild(Ji),v=Ji[u],_.removeChild(Ji),a.position="absolute",l&&p&&(b=er(_),b.time=Be.time,b.width=_[u]),Ut(g?v*s/f:v&&s?f/v*s:0))))},xi=function(t,e,i,n){var s;return Go||fo(),e in Ei&&e!=="transform"&&(e=Ei[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ci[e]&&e!=="transform"?(s=xn(t,n),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ns(gi(t,si))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=rs[e]&&rs[e](t,e,i)||gi(t,e)||Bl(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Hi(t,e,s,i)+i:s},kd=function(t,e,i,n){if(!i||i==="none"){var s=Fr(e,t,1),o=s&&gi(t,s,1);o&&o!==i?(e=s,i=o):e==="borderColor"&&(i=gi(t,"borderTopColor"))}var a=new Re(this._pt,t.style,e,0,1,fh),l=0,h=0,u,f,g,p,v,_,b,x,C,E,T,M;if(a.b=i,a.e=n,i+="",n+="",n==="auto"&&(t.style[e]=n,n=gi(t,e)||n,t.style[e]=i),u=[i,n],rh(u),i=u[0],n=u[1],g=i.match(wr)||[],M=n.match(wr)||[],M.length){for(;f=wr.exec(n);)b=f[0],C=n.substring(l,f.index),v?v=(v+1)%5:(C.substr(-5)==="rgba("||C.substr(-5)==="hsla(")&&(v=1),b!==(_=g[h++]||"")&&(p=parseFloat(_)||0,T=_.substr((p+"").length),b.charAt(1)==="="&&(b=Cr(p,b)+T),x=parseFloat(b),E=b.substr((x+"").length),l=wr.lastIndex-E.length,E||(E=E||He.units[e]||T,l===n.length&&(n+=E,a.e+=E)),T!==E&&(p=Hi(t,e,_,E)||0),a._pt={_next:a._pt,p:C||h===1?C:",",s:p,c:x-p,m:v&&v<4||e==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=e==="display"&&n==="none"?_h:mh;return zl.test(n)&&(a.e=0),this._pt=a,a},Ea={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Md=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=Ea[i]||i,e[1]=Ea[n]||n,e.join(" ")},Pd=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,s=e.u,o=i._gsap,a,l,h;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),h=s.length;--h>-1;)a=s[h],Ci[a]&&(l=1,a=a==="transformOrigin"?si:Ot),bn(i,a);l&&(bn(i,Ot),o&&(o.svg&&i.removeAttribute("transform"),xn(i,1),o.uncache=1,vh(n)))}},rs={clearProps:function(t,e,i,n,s){if(s.data!=="isFromStart"){var o=t._pt=new Re(t._pt,e,i,0,0,Pd);return o.u=n,o.pr=-10,o.tween=s,t._props.push(i),1}}},wn=[1,0,0,1,0,0],Sh={},Eh=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ta=function(t){var e=gi(t,Ot);return Eh(e)?wn:e.substr(7).match(Rl).map(Ut)},Qo=function(t,e){var i=t._gsap||er(t),n=t.style,s=Ta(t),o,a,l,h;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?wn:s):(s===wn&&!t.offsetParent&&t!==kr&&!i.svg&&(l=n.display,n.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(h=1,a=t.nextElementSibling,kr.appendChild(t)),s=Ta(t),l?n.display=l:bn(t,"display"),h&&(a?o.insertBefore(t,a):o?o.appendChild(t):kr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},go=function(t,e,i,n,s,o){var a=t._gsap,l=s||Qo(t,!0),h=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,g=a.yOffset||0,p=l[0],v=l[1],_=l[2],b=l[3],x=l[4],C=l[5],E=e.split(" "),T=parseFloat(E[0])||0,M=parseFloat(E[1])||0,O,R,$,P;i?l!==wn&&(R=p*b-v*_)&&($=T*(b/R)+M*(-_/R)+(_*C-b*x)/R,P=T*(-v/R)+M*(p/R)-(p*C-v*x)/R,T=$,M=P):(O=wh(t),T=O.x+(~E[0].indexOf("%")?T/100*O.width:T),M=O.y+(~(E[1]||E[0]).indexOf("%")?M/100*O.height:M)),n||n!==!1&&a.smooth?(x=T-h,C=M-u,a.xOffset=f+(x*p+C*_)-x,a.yOffset=g+(x*v+C*b)-C):a.xOffset=a.yOffset=0,a.xOrigin=T,a.yOrigin=M,a.smooth=!!n,a.origin=e,a.originIsAbsolute=!!i,t.style[si]="0px 0px",o&&(Ri(o,a,"xOrigin",h,T),Ri(o,a,"yOrigin",u,M),Ri(o,a,"xOffset",f,a.xOffset),Ri(o,a,"yOffset",g,a.yOffset)),t.setAttribute("data-svg-origin",T+" "+M)},xn=function(t,e){var i=t._gsap||new ah(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),h=gi(t,si)||"0",u,f,g,p,v,_,b,x,C,E,T,M,O,R,$,P,F,B,H,J,U,G,Y,ot,X,ct,k,At,Nt,ze,mt,te;return u=f=g=_=b=x=C=E=T=0,p=v=1,i.svg=!!(t.getCTM&&xh(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[Ot]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ot]!=="none"?l[Ot]:"")),n.scale=n.rotate=n.translate="none"),R=Qo(t,i.svg),i.svg&&(i.uncache?(X=t.getBBox(),h=i.xOrigin-X.x+"px "+(i.yOrigin-X.y)+"px",ot=""):ot=!e&&t.getAttribute("data-svg-origin"),go(t,ot||h,!!ot||i.originIsAbsolute,i.smooth!==!1,R)),M=i.xOrigin||0,O=i.yOrigin||0,R!==wn&&(B=R[0],H=R[1],J=R[2],U=R[3],u=G=R[4],f=Y=R[5],R.length===6?(p=Math.sqrt(B*B+H*H),v=Math.sqrt(U*U+J*J),_=B||H?gr(H,B)*Zi:0,C=J||U?gr(J,U)*Zi+_:0,C&&(v*=Math.abs(Math.cos(C*Mr))),i.svg&&(u-=M-(M*B+O*J),f-=O-(M*H+O*U))):(te=R[6],ze=R[7],k=R[8],At=R[9],Nt=R[10],mt=R[11],u=R[12],f=R[13],g=R[14],$=gr(te,Nt),b=$*Zi,$&&(P=Math.cos(-$),F=Math.sin(-$),ot=G*P+k*F,X=Y*P+At*F,ct=te*P+Nt*F,k=G*-F+k*P,At=Y*-F+At*P,Nt=te*-F+Nt*P,mt=ze*-F+mt*P,G=ot,Y=X,te=ct),$=gr(-J,Nt),x=$*Zi,$&&(P=Math.cos(-$),F=Math.sin(-$),ot=B*P-k*F,X=H*P-At*F,ct=J*P-Nt*F,mt=U*F+mt*P,B=ot,H=X,J=ct),$=gr(H,B),_=$*Zi,$&&(P=Math.cos($),F=Math.sin($),ot=B*P+H*F,X=G*P+Y*F,H=H*P-B*F,Y=Y*P-G*F,B=ot,G=X),b&&Math.abs(b)+Math.abs(_)>359.9&&(b=_=0,x=180-x),p=Ut(Math.sqrt(B*B+H*H+J*J)),v=Ut(Math.sqrt(Y*Y+te*te)),$=gr(G,Y),C=Math.abs($)>2e-4?$*Zi:0,T=mt?1/(mt<0?-mt:mt):0),i.svg&&(ot=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Eh(gi(t,Ot)),ot&&t.setAttribute("transform",ot))),Math.abs(C)>90&&Math.abs(C)<270&&(s?(p*=-1,C+=_<=0?180:-180,_+=_<=0?180:-180):(v*=-1,C+=C<=0?180:-180)),e=e||i.uncache,i.x=u-((i.xPercent=u&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=g+o,i.scaleX=Ut(p),i.scaleY=Ut(v),i.rotation=Ut(_)+a,i.rotationX=Ut(b)+a,i.rotationY=Ut(x)+a,i.skewX=C+a,i.skewY=E+a,i.transformPerspective=T+o,(i.zOrigin=parseFloat(h.split(" ")[2])||0)&&(n[si]=ns(h)),i.xOffset=i.yOffset=0,i.force3D=He.force3D,i.renderTransform=i.svg?Dd:bh?Th:Od,i.uncache=0,i},ns=function(t){return(t=t.split(" "))[0]+" "+t[1]},Rs=function(t,e,i){var n=fe(e);return Ut(parseFloat(e)+parseFloat(Hi(t,"x",i+"px",n)))+n},Od=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Th(t,e)},ji="0deg",Wr="0px",Wi=") ",Th=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,h=i.rotation,u=i.rotationY,f=i.rotationX,g=i.skewX,p=i.skewY,v=i.scaleX,_=i.scaleY,b=i.transformPerspective,x=i.force3D,C=i.target,E=i.zOrigin,T="",M=x==="auto"&&t&&t!==1||x===!0;if(E&&(f!==ji||u!==ji)){var O=parseFloat(u)*Mr,R=Math.sin(O),$=Math.cos(O),P;O=parseFloat(f)*Mr,P=Math.cos(O),o=Rs(C,o,R*P*-E),a=Rs(C,a,-Math.sin(O)*-E),l=Rs(C,l,$*P*-E+E)}b!==Wr&&(T+="perspective("+b+Wi),(n||s)&&(T+="translate("+n+"%, "+s+"%) "),(M||o!==Wr||a!==Wr||l!==Wr)&&(T+=l!==Wr||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Wi),h!==ji&&(T+="rotate("+h+Wi),u!==ji&&(T+="rotateY("+u+Wi),f!==ji&&(T+="rotateX("+f+Wi),(g!==ji||p!==ji)&&(T+="skew("+g+", "+p+Wi),(v!==1||_!==1)&&(T+="scale("+v+", "+_+Wi),C.style[Ot]=T||"translate(0, 0)"},Dd=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,h=i.skewX,u=i.skewY,f=i.scaleX,g=i.scaleY,p=i.target,v=i.xOrigin,_=i.yOrigin,b=i.xOffset,x=i.yOffset,C=i.forceCSS,E=parseFloat(o),T=parseFloat(a),M,O,R,$,P;l=parseFloat(l),h=parseFloat(h),u=parseFloat(u),u&&(u=parseFloat(u),h+=u,l+=u),l||h?(l*=Mr,h*=Mr,M=Math.cos(l)*f,O=Math.sin(l)*f,R=Math.sin(l-h)*-g,$=Math.cos(l-h)*g,h&&(u*=Mr,P=Math.tan(h-u),P=Math.sqrt(1+P*P),R*=P,$*=P,u&&(P=Math.tan(u),P=Math.sqrt(1+P*P),M*=P,O*=P)),M=Ut(M),O=Ut(O),R=Ut(R),$=Ut($)):(M=f,$=g,O=R=0),(E&&!~(o+"").indexOf("px")||T&&!~(a+"").indexOf("px"))&&(E=Hi(p,"x",o,"px"),T=Hi(p,"y",a,"px")),(v||_||b||x)&&(E=Ut(E+v-(v*M+_*R)+b),T=Ut(T+_-(v*O+_*$)+x)),(n||s)&&(P=p.getBBox(),E=Ut(E+n/100*P.width),T=Ut(T+s/100*P.height)),P="matrix("+M+","+O+","+R+","+$+","+E+","+T+")",p.setAttribute("transform",P),C&&(p.style[Ot]=P)},Rd=function(t,e,i,n,s){var o=360,a=ne(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Zi:1),h=l-n,u=n+h+"deg",f,g;return a&&(f=s.split("_")[1],f==="short"&&(h%=o,h!==h%(o/2)&&(h+=h<0?o:-o)),f==="cw"&&h<0?h=(h+o*ba)%o-~~(h/o)*o:f==="ccw"&&h>0&&(h=(h-o*ba)%o-~~(h/o)*o)),t._pt=g=new Re(t._pt,e,i,n,h,md),g.e=u,g.u="deg",t._props.push(i),g},Aa=function(t,e){for(var i in e)t[i]=e[i];return t},zd=function(t,e,i){var n=Aa({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,h,u,f,g,p,v;n.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),o[Ot]=e,a=xn(i,1),bn(i,Ot),i.setAttribute("transform",h)):(h=getComputedStyle(i)[Ot],o[Ot]=e,a=xn(i,1),o[Ot]=h);for(l in Ci)h=n[l],u=a[l],h!==u&&s.indexOf(l)<0&&(p=fe(h),v=fe(u),f=p!==v?Hi(i,l,h,v):parseFloat(h),g=parseFloat(u),t._pt=new Re(t._pt,a,l,f,g-f,co),t._pt.u=v||0,t._props.push(l));Aa(a,n)};De("padding,margin,Width,Radius",function(r,t){var e="Top",i="Right",n="Bottom",s="Left",o=(t<3?[e,i,n,s]:[e+s,e+i,n+i,n+s]).map(function(a){return t<2?r+a:"border"+a+r});rs[t>1?"border"+r:r]=function(a,l,h,u,f){var g,p;if(arguments.length<4)return g=o.map(function(v){return xi(a,v,h)}),p=g.join(" "),p.split(g[0]).length===5?g[0]:p;g=(u+"").split(" "),p={},o.forEach(function(v,_){return p[v]=g[_]=g[_]||g[(_-1)/2|0]}),a.init(l,p,f)}});var Ah={name:"css",register:fo,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,s){var o=this._props,a=t.style,l=i.vars.startAt,h,u,f,g,p,v,_,b,x,C,E,T,M,O,R,$;Go||fo(),this.styles=this.styles||yh(t),$=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(Fe[_]&&lh(_,e,i,n,t,s)))){if(p=typeof u,v=rs[_],p==="function"&&(u=u.call(i,n,t,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=vn(u)),v)v(this,t,_,u,i)&&(R=1);else if(_.substr(0,2)==="--")h=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Fi.lastIndex=0,Fi.test(h)||(b=fe(h),x=fe(u)),x?b!==x&&(h=Hi(t,_,h,x)+x):b&&(u+=b),this.add(a,"setProperty",h,u,n,s,0,0,_),o.push(_),$.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(h=typeof l[_]=="function"?l[_].call(i,n,t,s):l[_],ne(h)&&~h.indexOf("random(")&&(h=vn(h)),fe(h+"")||(h+=He.units[_]||fe(xi(t,_))||""),(h+"").charAt(1)==="="&&(h=xi(t,_))):h=xi(t,_),g=parseFloat(h),C=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),C&&(u=u.substr(2)),f=parseFloat(u),_ in Ei&&(_==="autoAlpha"&&(g===1&&xi(t,"visibility")==="hidden"&&f&&(g=0),$.push("visibility",0,a.visibility),Ri(this,a,"visibility",g?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Ei[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in Ci,E){if(this.styles.save(_),T||(M=t._gsap,M.renderTransform&&!e.parseTransform||xn(t,e.parseTransform),O=e.smoothOrigin!==!1&&M.smooth,T=this._pt=new Re(this._pt,a,Ot,0,1,M.renderTransform,M,0,-1),T.dep=1),_==="scale")this._pt=new Re(this._pt,M,"scaleY",g,(C?Cr(g,C+f):f)-g||0,co),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){$.push(si,0,a[si]),u=Md(u),M.svg?go(t,u,0,O,0,this):(x=parseFloat(u.split(" ")[2])||0,x!==M.zOrigin&&Ri(this,M,"zOrigin",M.zOrigin,x),Ri(this,a,_,ns(h),ns(u)));continue}else if(_==="svgOrigin"){go(t,u,1,O,0,this);continue}else if(_ in Sh){Rd(this,M,_,g,C?Cr(g,C+u):u);continue}else if(_==="smoothOrigin"){Ri(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){zd(this,u,t);continue}}else _ in a||(_=Fr(_)||_);if(E||(f||f===0)&&(g||g===0)&&!pd.test(u)&&_ in a)b=(h+"").substr((g+"").length),f||(f=0),x=fe(u)||(_ in He.units?He.units[_]:b),b!==x&&(g=Hi(t,_,h,x)),this._pt=new Re(this._pt,E?M:a,_,g,(C?Cr(g,C+f):f)-g,!E&&(x==="px"||_==="zIndex")&&e.autoRound!==!1?vd:co),this._pt.u=x||0,b!==x&&x!=="%"&&(this._pt.b=h,this._pt.r=_d);else if(_ in a)kd.call(this,t,_,h,C?C+u:u);else if(_ in t)this.add(t,_,h||t[_],C?C+u:u,n,s);else{Bo(_,u);continue}E||(_ in a?$.push(_,0,a[_]):$.push(_,1,h||t[_])),o.push(_)}}R&&gh(this)},render:function(t,e){if(e.tween._time||!Zo())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:xi,aliases:Ei,getSetter:function(t,e,i){var n=Ei[e];return n&&n.indexOf(",")<0&&(e=n),e in Ci&&e!==si&&(t._gsap.x||xi(t,"x"))?i&&ya===i?e==="scale"?xd:wd:(ya=i||{})&&(e==="scale"?Sd:Ed):t.style&&!No(t.style[e])?yd:~e.indexOf("-")?bd:jo(t,e)},core:{_removeProperty:bn,_getMatrix:Qo}};qe.utils.checkPrefix=Fr;qe.core.getStyleSaver=yh;(function(r,t,e,i){var n=De(r+","+t+","+e,function(s){Ci[s]=1});De(t,function(s){He.units[s]="deg",Sh[s]=1}),Ei[n[13]]=r+","+t,De(i,function(s){var o=s.split(":");Ei[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");De("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){He.units[r]="px"});qe.registerPlugin(Ah);var le=qe.registerPlugin(Ah)||qe;le.core.Tween;function Ca(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Ld(r,t,e){return t&&Ca(r.prototype,t),e&&Ca(r,e),r}/*!
 * Observer 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ge,po,Ue,zi,Li,Pr,Ch,Ki,ln,kh,Ti,ei,Mh=function(){return ge||typeof window<"u"&&(ge=window.gsap)&&ge.registerPlugin&&ge},Ph=1,Sr=[],gt=[],pi=[],hn=Date.now,mo=function(t,e){return e},$d=function(){var t=ln.core,e=t.bridge||{},i=t._scrollers,n=t._proxies;i.push.apply(i,gt),n.push.apply(n,pi),gt=i,pi=n,mo=function(o,a){return e[o](a)}},Bi=function(t,e){return~pi.indexOf(t)&&pi[pi.indexOf(t)+1][e]},cn=function(t){return!!~kh.indexOf(t)},Ce=function(t,e,i,n,s){return t.addEventListener(e,i,{passive:!n,capture:!!s})},ye=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},Mn="scrollLeft",Pn="scrollTop",_o=function(){return Ti&&Ti.isPressed||gt.cache++},ss=function(t,e){var i=function n(s){if(s||s===0){Ph&&(Ue.history.scrollRestoration="manual");var o=Ti&&Ti.isPressed;s=n.v=Math.round(s)||(Ti&&Ti.iOS?1:0),t(s),n.cacheID=gt.cache,o&&mo("ss",s)}else(e||gt.cache!==n.cacheID||mo("ref"))&&(n.cacheID=gt.cache,n.v=t());return n.v+n.offset};return i.offset=0,t&&i},xe={s:Mn,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ss(function(r){return arguments.length?Ue.scrollTo(r,Qt.sc()):Ue.pageXOffset||zi[Mn]||Li[Mn]||Pr[Mn]||0})},Qt={s:Pn,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:xe,sc:ss(function(r){return arguments.length?Ue.scrollTo(xe.sc(),r):Ue.pageYOffset||zi[Pn]||Li[Pn]||Pr[Pn]||0})},ke=function(t){return ge.utils.toArray(t)[0]||(typeof t=="string"&&ge.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Xi=function(t,e){var i=e.s,n=e.sc;cn(t)&&(t=zi.scrollingElement||Li);var s=gt.indexOf(t),o=n===Qt.sc?1:2;!~s&&(s=gt.push(t)-1),gt[s+o]||t.addEventListener("scroll",_o);var a=gt[s+o],l=a||(gt[s+o]=ss(Bi(t,i),!0)||(cn(t)?n:ss(function(h){return arguments.length?t[i]=h:t[i]})));return l.target=t,a||(l.smooth=ge.getProperty(t,"scrollBehavior")==="smooth"),l},vo=function(t,e,i){var n=t,s=t,o=hn(),a=o,l=e||50,h=Math.max(500,l*3),u=function(v,_){var b=hn();_||b-o>l?(s=n,n=v,a=o,o=b):i?n+=v:n=s+(v-s)/(b-a)*(o-a)},f=function(){s=n=i?0:n,a=o=0},g=function(v){var _=a,b=s,x=hn();return(v||v===0)&&v!==n&&u(v),o===a||x-a>h?0:(n+(i?b:-b))/((i?x:o)-_)*1e3};return{update:u,reset:f,getVelocity:g}},Gr=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},ka=function(t){var e=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(i)?e:i},Oh=function(){ln=ge.core.globals().ScrollTrigger,ln&&ln.core&&$d()},Dh=function(t){return ge=t||Mh(),ge&&typeof document<"u"&&document.body&&(Ue=window,zi=document,Li=zi.documentElement,Pr=zi.body,kh=[Ue,zi,Li,Pr],ge.utils.clamp,Ki="onpointerenter"in Pr?"pointer":"mouse",Ch=Wt.isTouch=Ue.matchMedia&&Ue.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ue||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ei=Wt.eventTypes=("ontouchstart"in Li?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Li?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ph=0},500),Oh(),po=1),po};xe.op=Qt;gt.cache=0;var Wt=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(i){po||Dh(ge)||console.warn("Please gsap.registerPlugin(Observer)"),ln||Oh();var n=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,h=i.debounce,u=i.preventDefault,f=i.onStop,g=i.onStopDelay,p=i.ignore,v=i.wheelSpeed,_=i.event,b=i.onDragStart,x=i.onDragEnd,C=i.onDrag,E=i.onPress,T=i.onRelease,M=i.onRight,O=i.onLeft,R=i.onUp,$=i.onDown,P=i.onChangeX,F=i.onChangeY,B=i.onChange,H=i.onToggleX,J=i.onToggleY,U=i.onHover,G=i.onHoverEnd,Y=i.onMove,ot=i.ignoreCheck,X=i.isNormalizer,ct=i.onGestureStart,k=i.onGestureEnd,At=i.onWheel,Nt=i.onEnable,ze=i.onDisable,mt=i.onClick,te=i.scrollSpeed,bt=i.capture,ee=i.allowClicks,se=i.lockAxis,ki=i.onLockAxis;this.target=a=ke(a)||Li,this.vars=i,p&&(p=ge.utils.toArray(p)),n=n||1e-9,s=s||0,v=v||1,te=te||1,o=o||"wheel,touch,pointer",h=h!==!1,l||(l=parseFloat(Ue.getComputedStyle(Pr).lineHeight)||22);var me,Te,ut,ie,_e,Ye,Xt,z=this,Ve=0,St=0,li=Xi(a,xe),hi=Xi(a,Qt),w=li(),c=hi(),m=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ei[0]==="pointerdown",y=cn(a),S=a.ownerDocument||zi,A=[0,0,0],D=[0,0,0],L=0,I=function(){return L=hn()},W=function(N,Z){return(z.event=N)&&p&&~p.indexOf(N.target)||Z&&m&&N.pointerType!=="touch"||ot&&ot(N,Z)},q=function(){z._vx.reset(),z._vy.reset(),Te.pause(),f&&f(z)},V=function(){var N=z.deltaX=ka(A),Z=z.deltaY=ka(D),K=Math.abs(N)>=n,et=Math.abs(Z)>=n;B&&(K||et)&&B(z,N,Z,A,D),K&&(M&&z.deltaX>0&&M(z),O&&z.deltaX<0&&O(z),P&&P(z),H&&z.deltaX<0!=Ve<0&&H(z),Ve=z.deltaX,A[0]=A[1]=A[2]=0),et&&($&&z.deltaY>0&&$(z),R&&z.deltaY<0&&R(z),F&&F(z),J&&z.deltaY<0!=St<0&&J(z),St=z.deltaY,D[0]=D[1]=D[2]=0),(ie||ut)&&(Y&&Y(z),ut&&(C(z),ut=!1),ie=!1),Ye&&!(Ye=!1)&&ki&&ki(z),_e&&(At(z),_e=!1),me=0},st=function(N,Z,K){A[K]+=N,D[K]+=Z,z._vx.update(N),z._vy.update(Z),h?me||(me=requestAnimationFrame(V)):V()},it=function(N,Z){se&&!Xt&&(z.axis=Xt=Math.abs(N)>Math.abs(Z)?"x":"y",Ye=!0),Xt!=="y"&&(A[2]+=N,z._vx.update(N,!0)),Xt!=="x"&&(D[2]+=Z,z._vy.update(Z,!0)),h?me||(me=requestAnimationFrame(V)):V()},Q=function(N){if(!W(N,1)){N=Gr(N,u);var Z=N.clientX,K=N.clientY,et=Z-z.x,Ft=K-z.y,j=z.isDragging;z.x=Z,z.y=K,(j||Math.abs(z.startX-Z)>=s||Math.abs(z.startY-K)>=s)&&(C&&(ut=!0),j||(z.isDragging=!0),it(et,Ft),j||b&&b(z))}},_t=z.onPress=function(at){W(at,1)||(z.axis=Xt=null,Te.pause(),z.isPressed=!0,at=Gr(at),Ve=St=0,z.startX=z.x=at.clientX,z.startY=z.y=at.clientY,z._vx.reset(),z._vy.reset(),Ce(X?a:S,ei[1],Q,u,!0),z.deltaX=z.deltaY=0,E&&E(z))},nt=function(N){if(!W(N,1)){ye(X?a:S,ei[1],Q,!0);var Z=z.isDragging&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),K=Gr(N);Z||(z._vx.reset(),z._vy.reset(),u&&ee&&ge.delayedCall(.08,function(){if(hn()-L>300&&!N.defaultPrevented){if(N.target.click)N.target.click();else if(S.createEvent){var et=S.createEvent("MouseEvents");et.initMouseEvent("click",!0,!0,Ue,1,K.screenX,K.screenY,K.clientX,K.clientY,!1,!1,!1,!1,0,null),N.target.dispatchEvent(et)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,f&&!X&&Te.restart(!0),x&&Z&&x(z),T&&T(z,Z)}},kt=function(N){return N.touches&&N.touches.length>1&&(z.isGesturing=!0)&&ct(N,z.isDragging)},Ct=function(){return(z.isGesturing=!1)||k(z)},Gt=function(N){if(!W(N)){var Z=li(),K=hi();st((Z-w)*te,(K-c)*te,1),w=Z,c=K,f&&Te.restart(!0)}},ce=function(N){if(!W(N)){N=Gr(N,u),At&&(_e=!0);var Z=(N.deltaMode===1?l:N.deltaMode===2?Ue.innerHeight:1)*v;st(N.deltaX*Z,N.deltaY*Z,0),f&&!X&&Te.restart(!0)}},Ae=function(N){if(!W(N)){var Z=N.clientX,K=N.clientY,et=Z-z.x,Ft=K-z.y;z.x=Z,z.y=K,ie=!0,(et||Ft)&&it(et,Ft)}},de=function(N){z.event=N,U(z)},yi=function(N){z.event=N,G(z)},Le=function(N){return W(N)||Gr(N,u)&&mt(z)};Te=z._dc=ge.delayedCall(g||.25,q).pause(),z.deltaX=z.deltaY=0,z._vx=vo(0,50,!0),z._vy=vo(0,50,!0),z.scrollX=li,z.scrollY=hi,z.isDragging=z.isGesturing=z.isPressed=!1,z.enable=function(at){return z.isEnabled||(Ce(y?S:a,"scroll",_o),o.indexOf("scroll")>=0&&Ce(y?S:a,"scroll",Gt,u,bt),o.indexOf("wheel")>=0&&Ce(a,"wheel",ce,u,bt),(o.indexOf("touch")>=0&&Ch||o.indexOf("pointer")>=0)&&(Ce(a,ei[0],_t,u,bt),Ce(S,ei[2],nt),Ce(S,ei[3],nt),ee&&Ce(a,"click",I,!1,!0),mt&&Ce(a,"click",Le),ct&&Ce(S,"gesturestart",kt),k&&Ce(S,"gestureend",Ct),U&&Ce(a,Ki+"enter",de),G&&Ce(a,Ki+"leave",yi),Y&&Ce(a,Ki+"move",Ae)),z.isEnabled=!0,at&&at.type&&_t(at),Nt&&Nt(z)),z},z.disable=function(){z.isEnabled&&(Sr.filter(function(at){return at!==z&&cn(at.target)}).length||ye(y?S:a,"scroll",_o),z.isPressed&&(z._vx.reset(),z._vy.reset(),ye(X?a:S,ei[1],Q,!0)),ye(y?S:a,"scroll",Gt,bt),ye(a,"wheel",ce,bt),ye(a,ei[0],_t,bt),ye(S,ei[2],nt),ye(S,ei[3],nt),ye(a,"click",I,!0),ye(a,"click",Le),ye(S,"gesturestart",kt),ye(S,"gestureend",Ct),ye(a,Ki+"enter",de),ye(a,Ki+"leave",yi),ye(a,Ki+"move",Ae),z.isEnabled=z.isPressed=z.isDragging=!1,ze&&ze(z))},z.kill=function(){z.disable();var at=Sr.indexOf(z);at>=0&&Sr.splice(at,1),Ti===z&&(Ti=0)},Sr.push(z),X&&cn(a)&&(Ti=z),z.enable(_)},Ld(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Wt.version="3.11.3";Wt.create=function(r){return new Wt(r)};Wt.register=Dh;Wt.getAll=function(){return Sr.slice()};Wt.getById=function(r){return Sr.filter(function(t){return t.vars.id===r})[0]};Mh()&&ge.registerPlugin(Wt);/*!
 * ScrollTrigger 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var tt,vr,ft,Mt,ui,Lt,Rh,os,as,Er,Xn,On,ue,ys,yo,be,Ma,Pa,yr,zh,zs,Lh,Ie,$h,Ih,Nh,Mi,bo,Jo,Ls,Dn=1,we=Date.now,$s=we(),Je=0,Rn=0,Oa=function(){return ys=1},Da=function(){return ys=0},ci=function(t){return t},en=function(t){return Math.round(t*1e5)/1e5||0},Fh=function(){return typeof window<"u"},Bh=function(){return tt||Fh()&&(tt=window.gsap)&&tt.registerPlugin&&tt},lr=function(t){return!!~Rh.indexOf(t)},Uh=function(t){return Bi(t,"getBoundingClientRect")||(lr(t)?function(){return Gn.width=ft.innerWidth,Gn.height=ft.innerHeight,Gn}:function(){return Si(t)})},Id=function(t,e,i){var n=i.d,s=i.d2,o=i.a;return(o=Bi(t,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(e?ft["inner"+s]:t["client"+s])||0}},Nd=function(t,e){return!e||~pi.indexOf(t)?Uh(t):function(){return Gn}},$i=function(t,e){var i=e.s,n=e.d2,s=e.d,o=e.a;return(i="scroll"+n)&&(o=Bi(t,i))?o()-Uh(t)()[s]:lr(t)?(ui[i]||Lt[i])-(ft["inner"+n]||ui["client"+n]||Lt["client"+n]):t[i]-t["offset"+n]},zn=function(t,e){for(var i=0;i<yr.length;i+=3)(!e||~e.indexOf(yr[i+1]))&&t(yr[i],yr[i+1],yr[i+2])},ii=function(t){return typeof t=="string"},Se=function(t){return typeof t=="function"},rn=function(t){return typeof t=="number"},qn=function(t){return typeof t=="object"},Zr=function(t,e,i){return t&&t.progress(e?0:1)&&i&&t.pause()},Is=function(t,e){if(t.enabled){var i=e(t);i&&i.totalTime&&(t.callbackAnimation=i)}},pr=Math.abs,Hh="left",Xh="top",ta="right",ea="bottom",nr="width",sr="height",dn="Right",un="Left",fn="Top",gn="Bottom",Bt="padding",Ge="margin",Br="Width",ia="Height",oe="px",fi=function(t){return ft.getComputedStyle(t)},Fd=function(t){var e=fi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Ra=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Si=function(t,e){var i=e&&fi(t)[yo]!=="matrix(1, 0, 0, 1, 0, 0)"&&tt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=t.getBoundingClientRect();return i&&i.progress(0).kill(),n},wo=function(t,e){var i=e.d2;return t["offset"+i]||t["client"+i]||0},qh=function(t){var e=[],i=t.labels,n=t.duration(),s;for(s in i)e.push(i[s]/n);return e},Bd=function(t){return function(e){return tt.utils.snap(qh(t),e)}},ra=function(t){var e=tt.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(n,s){return n-s});return i?function(n,s,o){o===void 0&&(o=.001);var a;if(!s)return e(n);if(s>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,s,o){o===void 0&&(o=.001);var a=e(n);return!s||Math.abs(a-n)<o||a-n<0==s<0?a:e(s<0?n-t:n+t)}},Ud=function(t){return function(e,i){return ra(qh(t))(e,i.direction)}},Ln=function(t,e,i,n){return i.split(",").forEach(function(s){return t(e,s,n)})},ae=function(t,e,i,n,s){return t.addEventListener(e,i,{passive:!n,capture:!!s})},re=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},$n=function(t,e,i){return i&&i.wheelHandler&&t(e,"wheel",i)},za={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},In={toggleActions:"play",anticipatePin:0},ls={top:0,left:0,center:.5,bottom:1,right:1},Yn=function(t,e){if(ii(t)){var i=t.indexOf("="),n=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(n*=e/100),t=t.substr(0,i-1)),t=n+(t in ls?ls[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},Nn=function(t,e,i,n,s,o,a,l){var h=s.startColor,u=s.endColor,f=s.fontSize,g=s.indent,p=s.fontWeight,v=Mt.createElement("div"),_=lr(i)||Bi(i,"pinType")==="fixed",b=t.indexOf("scroller")!==-1,x=_?Lt:i,C=t.indexOf("start")!==-1,E=C?h:u,T="border-color:"+E+";font-size:"+f+";color:"+E+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return T+="position:"+((b||l)&&_?"fixed;":"absolute;"),(b||l||!_)&&(T+=(n===Qt?ta:ea)+":"+(o+parseFloat(g))+"px;"),a&&(T+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),v._isStart=C,v.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),v.style.cssText=T,v.innerText=e||e===0?t+"-"+e:t,x.children[0]?x.insertBefore(v,x.children[0]):x.appendChild(v),v._offset=v["offset"+n.op.d2],Vn(v,0,n,C),v},Vn=function(t,e,i,n){var s={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];t._isFlipped=n,s[i.a+"Percent"]=n?-100:0,s[i.a]=n?"1px":0,s["border"+o+Br]=1,s["border"+a+Br]=0,s[i.p]=e+"px",tt.set(t,s)},lt=[],xo={},Sn,La=function(){return we()-Je>34&&(Sn||(Sn=requestAnimationFrame(dr)))},mr=function(){(!Ie||!Ie.isPressed||Ie.startX>Lt.clientWidth)&&(gt.cache++,Ie?Sn||(Sn=requestAnimationFrame(dr)):dr(),Je||cr("scrollStart"),Je=we())},Ns=function(){Nh=ft.innerWidth,Ih=ft.innerHeight},nn=function(){gt.cache++,!ue&&!Lh&&!Mt.fullscreenElement&&!Mt.webkitFullscreenElement&&(!$h||Nh!==ft.innerWidth||Math.abs(ft.innerHeight-Ih)>ft.innerHeight*.25)&&os.restart(!0)},hr={},Hd=[],Yh=function r(){return re(ht,"scrollEnd",r)||tr(!0)},cr=function(t){return hr[t]&&hr[t].map(function(e){return e()})||Hd},Ne=[],Vh=function(t){for(var e=0;e<Ne.length;e+=5)(!t||Ne[e+4]&&Ne[e+4].query===t)&&(Ne[e].style.cssText=Ne[e+1],Ne[e].getBBox&&Ne[e].setAttribute("transform",Ne[e+2]||""),Ne[e+3].uncache=1)},na=function(t,e){var i;for(be=0;be<lt.length;be++)i=lt[be],i&&(!e||i._ctx===e)&&(t?i.kill(1):i.revert(!0,!0));e&&Vh(e),e||cr("revert")},jh=function(t,e){gt.cache++,(e||!ri)&&gt.forEach(function(i){return Se(i)&&i.cacheID++&&(i.rec=0)}),ii(t)&&(ft.history.scrollRestoration=Jo=t)},ri,or=0,$a,Xd=function(){if($a!==or){var t=$a=or;requestAnimationFrame(function(){return t===or&&tr(!0)})}},tr=function(t,e){if(Je&&!t){ae(ht,"scrollEnd",Yh);return}ri=ht.isRefreshing=!0,gt.forEach(function(n){return Se(n)&&n.cacheID++&&(n.rec=n())});var i=cr("refreshInit");zh&&ht.sort(),e||na(),gt.forEach(function(n){Se(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),lt.slice(0).forEach(function(n){return n.refresh()}),lt.forEach(function(n,s){if(n._subPinOffset&&n.pin){var o=n.vars.horizontal?"offsetWidth":"offsetHeight",a=n.pin[o];n.revert(!0,1),n.adjustPinSpacing(n.pin[o]-a),n.revert(!1,1)}}),lt.forEach(function(n){return n.vars.end==="max"&&n.setPositions(n.start,Math.max(n.start+1,$i(n.scroller,n._dir)))}),i.forEach(function(n){return n&&n.render&&n.render(-1)}),gt.forEach(function(n){Se(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),jh(Jo,1),os.pause(),or++,dr(2),lt.forEach(function(n){return Se(n.vars.onRefresh)&&n.vars.onRefresh(n)}),ri=ht.isRefreshing=!1,cr("refresh")},Ia=0,jn=1,Qi,dr=function(t){if(!ri||t===2){ht.isUpdating=!0,Qi&&Qi.update(0);var e=lt.length,i=we(),n=i-$s>=50,s=e&&lt[0].scroll();if(jn=Ia>s?-1:1,Ia=s,n&&(Je&&!ys&&i-Je>200&&(Je=0,cr("scrollEnd")),Xn=$s,$s=i),jn<0){for(be=e;be-- >0;)lt[be]&&lt[be].update(0,n);jn=1}else for(be=0;be<e;be++)lt[be]&&lt[be].update(0,n);ht.isUpdating=!1}Sn=0},So=[Hh,Xh,ea,ta,Ge+gn,Ge+dn,Ge+fn,Ge+un,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Wn=So.concat([nr,sr,"boxSizing","max"+Br,"max"+ia,"position",Ge,Bt,Bt+fn,Bt+dn,Bt+gn,Bt+un]),qd=function(t,e,i){Or(i);var n=t._gsap;if(n.spacerIsNative)Or(n.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Fs=function(t,e,i,n){if(!t._gsap.swappedIn){for(var s=So.length,o=e.style,a=t.style,l;s--;)l=So[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[ea]=a[ta]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[nr]=wo(t,xe)+oe,o[sr]=wo(t,Qt)+oe,o[Bt]=a[Ge]=a[Xh]=a[Hh]="0",Or(n),a[nr]=a["max"+Br]=i[nr],a[sr]=a["max"+ia]=i[sr],a[Bt]=i[Bt],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Yd=/([A-Z])/g,Or=function(t){if(t){var e=t.t.style,i=t.length,n=0,s,o;for((t.t._gsap||tt.core.getCache(t.t)).uncache=1;n<i;n+=2)o=t[n+1],s=t[n],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Yd,"-$1").toLowerCase())}},Fn=function(t){for(var e=Wn.length,i=t.style,n=[],s=0;s<e;s++)n.push(Wn[s],i[Wn[s]]);return n.t=t,n},Vd=function(t,e,i){for(var n=[],s=t.length,o=i?8:0,a;o<s;o+=2)a=t[o],n.push(a,a in e?e[a]:t[o+1]);return n.t=t.t,n},Gn={left:0,top:0},Na=function(t,e,i,n,s,o,a,l,h,u,f,g,p){Se(t)&&(t=t(l)),ii(t)&&t.substr(0,3)==="max"&&(t=g+(t.charAt(4)==="="?Yn("0"+t.substr(3),i):0));var v=p?p.time():0,_,b,x;if(p&&p.seek(0),rn(t))a&&Vn(a,i,n,!0);else{Se(e)&&(e=e(l));var C=(t||"0").split(" "),E,T,M,O;x=ke(e)||Lt,E=Si(x)||{},(!E||!E.left&&!E.top)&&fi(x).display==="none"&&(O=x.style.display,x.style.display="block",E=Si(x),O?x.style.display=O:x.style.removeProperty("display")),T=Yn(C[0],E[n.d]),M=Yn(C[1]||"0",i),t=E[n.p]-h[n.p]-u+T+s-M,a&&Vn(a,M,n,i-M<20||a._isStart&&M>20),i-=i-M}if(o){var R=t+i,$=o._isStart;_="scroll"+n.d2,Vn(o,R,n,$&&R>20||!$&&(f?Math.max(Lt[_],ui[_]):o.parentNode[_])<=R+1),f&&(h=Si(a),f&&(o.style[n.op.p]=h[n.op.p]-n.op.m-o._offset+oe))}return p&&x&&(_=Si(x),p.seek(g),b=Si(x),p._caScrollDist=_[n.p]-b[n.p],t=t/p._caScrollDist*g),p&&p.seek(v),p?t:Math.round(t)},jd=/(webkit|moz|length|cssText|inset)/i,Fa=function(t,e,i,n){if(t.parentNode!==e){var s=t.style,o,a;if(e===Lt){t._stOrig=s.cssText,a=fi(t);for(o in a)!+o&&!jd.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=n}else s.cssText=t._stOrig;tt.core.getCache(t).uncache=1,e.appendChild(t)}},Ba=function(t,e){var i=Xi(t,e),n="_scroll"+e.p2,s,o,a=function l(h,u,f,g,p){var v=l.tween,_=u.onComplete,b={};return f=f||i(),p=g&&p||0,g=g||h-f,v&&v.kill(),s=Math.round(f),u[n]=h,u.modifiers=b,b[n]=function(x){return x=Math.round(i()),x!==s&&x!==o&&Math.abs(x-s)>3&&Math.abs(x-o)>3?(v.kill(),l.tween=0):x=f+g*v.ratio+p*v.ratio*v.ratio,o=s,s=Math.round(x)},u.onComplete=function(){l.tween=0,_&&_.call(v)},v=l.tween=tt.to(t,u),v};return t[n]=i,i.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},ae(t,"wheel",i.wheelHandler),a},ht=function(){function r(e,i){vr||r.register(tt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,i)}var t=r.prototype;return t.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Rn){this.update=this.refresh=this.kill=ci;return}i=Ra(ii(i)||rn(i)||i.nodeType?{trigger:i}:i,In);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,h=s.onToggle,u=s.onRefresh,f=s.scrub,g=s.trigger,p=s.pin,v=s.pinSpacing,_=s.invalidateOnRefresh,b=s.anticipatePin,x=s.onScrubComplete,C=s.onSnapComplete,E=s.once,T=s.snap,M=s.pinReparent,O=s.pinSpacer,R=s.containerAnimation,$=s.fastScrollEnd,P=s.preventOverlaps,F=i.horizontal||i.containerAnimation&&i.horizontal!==!1?xe:Qt,B=!f&&f!==0,H=ke(i.scroller||ft),J=tt.core.getCache(H),U=lr(H),G=("pinType"in i?i.pinType:Bi(H,"pinType")||U&&"fixed")==="fixed",Y=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],ot=B&&i.toggleActions.split(" "),X="markers"in i?i.markers:In.markers,ct=U?0:parseFloat(fi(H)["border"+F.p2+Br])||0,k=this,At=i.onRefreshInit&&function(){return i.onRefreshInit(k)},Nt=Id(H,U,F),ze=Nd(H,U),mt=0,te=0,bt=Xi(H,F),ee,se,ki,me,Te,ut,ie,_e,Ye,Xt,z,Ve,St,li,hi,w,c,m,y,S,A,D,L,I,W,q,V,st,it,Q,_t,nt,kt,Ct,Gt,ce,Ae,de;if(bo(k),k._dir=F,b*=45,k.scroller=H,k.scroll=R?R.time.bind(R):bt,me=bt(),k.vars=i,n=n||i.animation,"refreshPriority"in i&&(zh=1,i.refreshPriority===-9999&&(Qi=k)),J.tweenScroll=J.tweenScroll||{top:Ba(H,Qt),left:Ba(H,xe)},k.tweenTo=ee=J.tweenScroll[F.p],k.scrubDuration=function(N){_t=rn(N)&&N,_t?Q?Q.duration(N):Q=tt.to(n,{ease:"expo",totalProgress:"+=0.001",duration:_t,paused:!0,onComplete:function(){return x&&x(k)}}):(Q&&Q.progress(1).kill(),Q=0)},n&&(n.vars.lazy=!1,n._initted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),k.animation=n.pause(),n.scrollTrigger=k,k.scrubDuration(f),st=0,l||(l=n.vars.id)),lt.push(k),T&&((!qn(T)||T.push)&&(T={snapTo:T}),"scrollBehavior"in Lt.style&&tt.set(U?[Lt,ui]:H,{scrollBehavior:"auto"}),gt.forEach(function(N){return Se(N)&&N.target===(U?Mt.scrollingElement||ui:H)&&(N.smooth=!1)}),ki=Se(T.snapTo)?T.snapTo:T.snapTo==="labels"?Bd(n):T.snapTo==="labelsDirectional"?Ud(n):T.directional!==!1?function(N,Z){return ra(T.snapTo)(N,we()-te<500?0:Z.direction)}:tt.utils.snap(T.snapTo),nt=T.duration||{min:.1,max:2},nt=qn(nt)?Er(nt.min,nt.max):Er(nt,nt),kt=tt.delayedCall(T.delay||_t/2||.1,function(){var N=bt(),Z=we()-te<500,K=ee.tween;if((Z||Math.abs(k.getVelocity())<10)&&!K&&!ys&&mt!==N){var et=(N-ut)/St,Ft=n&&!B?n.totalProgress():et,j=Z?0:(Ft-it)/(we()-Xn)*1e3||0,dt=tt.utils.clamp(-et,1-et,pr(j/2)*j/.185),yt=et+(T.inertia===!1?0:dt),ve=Er(0,1,ki(yt,k)),wt=Math.round(ut+ve*St),qt=T,$e=qt.onStart,Dt=qt.onInterrupt,Rt=qt.onComplete;if(N<=ie&&N>=ut&&wt!==N){if(K&&!K._initted&&K.data<=pr(wt-N))return;T.inertia===!1&&(dt=ve-et),ee(wt,{duration:nt(pr(Math.max(pr(yt-Ft),pr(ve-Ft))*.185/j/.05||0)),ease:T.ease||"power3",data:pr(wt-N),onInterrupt:function(){return kt.restart(!0)&&Dt&&Dt(k)},onComplete:function(){k.update(),mt=bt(),st=it=n&&!B?n.totalProgress():k.progress,C&&C(k),Rt&&Rt(k)}},N,dt*St,wt-N-dt*St),$e&&$e(k,ee.tween)}}else k.isActive&&mt!==N&&kt.restart(!0)}).pause()),l&&(xo[l]=k),g=k.trigger=ke(g||p),de=g&&g._gsap&&g._gsap.stRevert,de&&(de=de(k)),p=p===!0?g:ke(p),ii(a)&&(a={targets:g,className:a}),p&&(v===!1||v===Ge||(v=!v&&p.parentNode&&p.parentNode.style&&fi(p.parentNode).display==="flex"?!1:Bt),k.pin=p,se=tt.core.getCache(p),se.spacer?li=se.pinState:(O&&(O=ke(O),O&&!O.nodeType&&(O=O.current||O.nativeElement),se.spacerIsNative=!!O,O&&(se.spacerState=Fn(O))),se.spacer=c=O||Mt.createElement("div"),c.classList.add("pin-spacer"),l&&c.classList.add("pin-spacer-"+l),se.pinState=li=Fn(p)),i.force3D!==!1&&tt.set(p,{force3D:!0}),k.spacer=c=se.spacer,V=fi(p),L=V[v+F.os2],y=tt.getProperty(p),S=tt.quickSetter(p,F.a,oe),Fs(p,c,V),w=Fn(p)),X){Ve=qn(X)?Ra(X,za):za,Xt=Nn("scroller-start",l,H,F,Ve,0),z=Nn("scroller-end",l,H,F,Ve,0,Xt),m=Xt["offset"+F.op.d2];var yi=ke(Bi(H,"content")||H);_e=this.markerStart=Nn("start",l,yi,F,Ve,m,0,R),Ye=this.markerEnd=Nn("end",l,yi,F,Ve,m,0,R),R&&(Ae=tt.quickSetter([_e,Ye],F.a,oe)),!G&&!(pi.length&&Bi(H,"fixedMarkers")===!0)&&(Fd(U?Lt:H),tt.set([Xt,z],{force3D:!0}),W=tt.quickSetter(Xt,F.a,oe),q=tt.quickSetter(z,F.a,oe))}if(R){var Le=R.vars.onUpdate,at=R.vars.onUpdateParams;R.eventCallback("onUpdate",function(){k.update(0,0,1),Le&&Le.apply(at||[])})}k.previous=function(){return lt[lt.indexOf(k)-1]},k.next=function(){return lt[lt.indexOf(k)+1]},k.revert=function(N,Z){if(!Z)return k.kill(!0);var K=N!==!1||!k.enabled,et=ue;K!==k.isReverted&&(K&&(Gt=Math.max(bt(),k.scroll.rec||0),Ct=k.progress,ce=n&&n.progress()),_e&&[_e,Ye,Xt,z].forEach(function(Ft){return Ft.style.display=K?"none":"block"}),K&&(ue=1,k.update(K)),p&&(K?qd(p,c,li):(!M||!k.isActive)&&Fs(p,c,fi(p),I)),K||k.update(K),ue=et,k.isReverted=K)},k.refresh=function(N,Z){if(!((ue||!k.enabled)&&!Z)){if(p&&N&&Je){ae(r,"scrollEnd",Yh);return}!ri&&At&&At(k),ue=1,te=we(),ee.tween&&(ee.tween.kill(),ee.tween=0),Q&&Q.pause(),_&&n&&n.revert({kill:!1}).invalidate(),k.isReverted||k.revert(!0,!0),k._subPinOffset=!1;for(var K=Nt(),et=ze(),Ft=R?R.duration():$i(H,F),j=0,dt=0,yt=i.end,ve=i.endTrigger||g,wt=i.start||(i.start===0||!g?0:p?"0 0":"0 100%"),qt=k.pinnedContainer=i.pinnedContainer&&ke(i.pinnedContainer),$e=g&&Math.max(0,lt.indexOf(k))||0,Dt=$e,Rt,Yt,fr,Vi,Zt,zt,bi,Es,ca,Vr;Dt--;)zt=lt[Dt],zt.end||zt.refresh(0,1)||(ue=1),bi=zt.pin,bi&&(bi===g||bi===p)&&!zt.isReverted&&(Vr||(Vr=[]),Vr.unshift(zt),zt.revert(!0,!0)),zt!==lt[Dt]&&($e--,Dt--);for(Se(wt)&&(wt=wt(k)),ut=Na(wt,g,K,F,bt(),_e,Xt,k,et,ct,G,Ft,R)||(p?-.001:0),Se(yt)&&(yt=yt(k)),ii(yt)&&!yt.indexOf("+=")&&(~yt.indexOf(" ")?yt=(ii(wt)?wt.split(" ")[0]:"")+yt:(j=Yn(yt.substr(2),K),yt=ii(wt)?wt:ut+j,ve=g)),ie=Math.max(ut,Na(yt||(ve?"100% 0":Ft),ve,K,F,bt()+j,Ye,z,k,et,ct,G,Ft,R))||-.001,St=ie-ut||(ut-=.01)&&.001,j=0,Dt=$e;Dt--;)zt=lt[Dt],bi=zt.pin,bi&&zt.start-zt._pinPush<=ut&&!R&&zt.end>0&&(Rt=zt.end-zt.start,(bi===g&&zt.start-zt._pinPush<ut||bi===qt)&&!rn(wt)&&(j+=Rt*(1-zt.progress)),bi===p&&(dt+=Rt));if(ut+=j,ie+=j,k._pinPush=dt,_e&&j&&(Rt={},Rt[F.a]="+="+j,qt&&(Rt[F.p]="-="+bt()),tt.set([_e,Ye],Rt)),p)Rt=fi(p),Vi=F===Qt,fr=bt(),A=parseFloat(y(F.a))+dt,!Ft&&ie>1&&((U?Lt:H).style["overflow-"+F.a]="scroll"),Fs(p,c,Rt),w=Fn(p),Yt=Si(p,!0),Es=G&&Xi(H,Vi?xe:Qt)(),v&&(I=[v+F.os2,St+dt+oe],I.t=c,Dt=v===Bt?wo(p,F)+St+dt:0,Dt&&I.push(F.d,Dt+oe),Or(I),qt&&lt.forEach(function(jr){jr.pin===qt&&jr.vars.pinSpacing!==!1&&(jr._subPinOffset=!0)}),G&&bt(Gt)),G&&(Zt={top:Yt.top+(Vi?fr-ut:Es)+oe,left:Yt.left+(Vi?Es:fr-ut)+oe,boxSizing:"border-box",position:"fixed"},Zt[nr]=Zt["max"+Br]=Math.ceil(Yt.width)+oe,Zt[sr]=Zt["max"+ia]=Math.ceil(Yt.height)+oe,Zt[Ge]=Zt[Ge+fn]=Zt[Ge+dn]=Zt[Ge+gn]=Zt[Ge+un]="0",Zt[Bt]=Rt[Bt],Zt[Bt+fn]=Rt[Bt+fn],Zt[Bt+dn]=Rt[Bt+dn],Zt[Bt+gn]=Rt[Bt+gn],Zt[Bt+un]=Rt[Bt+un],hi=Vd(li,Zt,M),ri&&bt(0)),n?(ca=n._initted,zs(1),n.render(n.duration(),!0,!0),D=y(F.a)-A+St+dt,St!==D&&G&&hi.splice(hi.length-2,2),n.render(0,!0,!0),ca||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),zs(0)):D=St;else if(g&&bt()&&!R)for(Yt=g.parentNode;Yt&&Yt!==Lt;)Yt._pinOffset&&(ut-=Yt._pinOffset,ie-=Yt._pinOffset),Yt=Yt.parentNode;Vr&&Vr.forEach(function(jr){return jr.revert(!1,!0)}),k.start=ut,k.end=ie,me=Te=ri?Gt:bt(),!R&&!ri&&(me<Gt&&bt(Gt),k.scroll.rec=0),k.revert(!1,!0),kt&&(mt=-1,k.isActive&&bt(ut+St*Ct),kt.restart(!0)),ue=0,n&&B&&(n._initted||ce)&&n.progress()!==ce&&n.progress(ce,!0).render(n.time(),!0,!0),(Ct!==k.progress||R)&&(n&&!B&&n.totalProgress(Ct,!0),k.progress=(me-ut)/St===Ct?0:Ct),p&&v&&(c._pinOffset=Math.round(k.progress*D)),u&&!ri&&u(k)}},k.getVelocity=function(){return(bt()-Te)/(we()-Xn)*1e3||0},k.endAnimation=function(){Zr(k.callbackAnimation),n&&(Q?Q.progress(1):n.paused()?B||Zr(n,k.direction<0,1):Zr(n,n.reversed()))},k.labelToScroll=function(N){return n&&n.labels&&(ut||k.refresh()||ut)+n.labels[N]/n.duration()*St||0},k.getTrailing=function(N){var Z=lt.indexOf(k),K=k.direction>0?lt.slice(0,Z).reverse():lt.slice(Z+1);return(ii(N)?K.filter(function(et){return et.vars.preventOverlaps===N}):K).filter(function(et){return k.direction>0?et.end<=ut:et.start>=ie})},k.update=function(N,Z,K){if(!(R&&!K&&!N)){var et=ri?Gt:k.scroll(),Ft=N?0:(et-ut)/St,j=Ft<0?0:Ft>1?1:Ft||0,dt=k.progress,yt,ve,wt,qt,$e,Dt,Rt,Yt;if(Z&&(Te=me,me=R?bt():et,T&&(it=st,st=n&&!B?n.totalProgress():j)),b&&!j&&p&&!ue&&!Dn&&Je&&ut<et+(et-Te)/(we()-Xn)*b&&(j=1e-4),j!==dt&&k.enabled){if(yt=k.isActive=!!j&&j<1,ve=!!dt&&dt<1,Dt=yt!==ve,$e=Dt||!!j!=!!dt,k.direction=j>dt?1:-1,k.progress=j,$e&&!ue&&(wt=j&&!dt?0:j===1?1:dt===1?2:3,B&&(qt=!Dt&&ot[wt+1]!=="none"&&ot[wt+1]||ot[wt],Yt=n&&(qt==="complete"||qt==="reset"||qt in n))),P&&(Dt||Yt)&&(Yt||f||!n)&&(Se(P)?P(k):k.getTrailing(P).forEach(function(zt){return zt.endAnimation()})),B||(Q&&!ue&&!Dn?((R||Qi&&Qi!==k)&&Q.render(Q._dp._time-Q._start),Q.resetTo?Q.resetTo("totalProgress",j,n._tTime/n._tDur):(Q.vars.totalProgress=j,Q.invalidate().restart())):n&&n.totalProgress(j,!!ue)),p){if(N&&v&&(c.style[v+F.os2]=L),!G)S(en(A+D*j));else if($e){if(Rt=!N&&j>dt&&ie+1>et&&et+1>=$i(H,F),M)if(!N&&(yt||Rt)){var fr=Si(p,!0),Vi=et-ut;Fa(p,Lt,fr.top+(F===Qt?Vi:0)+oe,fr.left+(F===Qt?0:Vi)+oe)}else Fa(p,c);Or(yt||Rt?hi:w),D!==St&&j<1&&yt||S(A+(j===1&&!Rt?D:0))}}T&&!ee.tween&&!ue&&!Dn&&kt.restart(!0),a&&(Dt||E&&j&&(j<1||!Ls))&&as(a.targets).forEach(function(zt){return zt.classList[yt||E?"add":"remove"](a.className)}),o&&!B&&!N&&o(k),$e&&!ue?(B&&(Yt&&(qt==="complete"?n.pause().totalProgress(1):qt==="reset"?n.restart(!0).pause():qt==="restart"?n.restart(!0):n[qt]()),o&&o(k)),(Dt||!Ls)&&(h&&Dt&&Is(k,h),Y[wt]&&Is(k,Y[wt]),E&&(j===1?k.kill(!1,1):Y[wt]=0),Dt||(wt=j===1?1:3,Y[wt]&&Is(k,Y[wt]))),$&&!yt&&Math.abs(k.getVelocity())>(rn($)?$:2500)&&(Zr(k.callbackAnimation),Q?Q.progress(1):Zr(n,qt==="reverse"?1:!j,1))):B&&o&&!ue&&o(k)}if(q){var Zt=R?et/R.duration()*(R._caScrollDist||0):et;W(Zt+(Xt._isFlipped?1:0)),q(Zt)}Ae&&Ae(-et/R.duration()*(R._caScrollDist||0))}},k.enable=function(N,Z){k.enabled||(k.enabled=!0,ae(H,"resize",nn),ae(U?Mt:H,"scroll",mr),At&&ae(r,"refreshInit",At),N!==!1&&(k.progress=Ct=0,me=Te=mt=bt()),Z!==!1&&k.refresh())},k.getTween=function(N){return N&&ee?ee.tween:Q},k.setPositions=function(N,Z){p&&(A+=N-ut,D+=Z-N-St,v===Bt&&k.adjustPinSpacing(Z-N-St)),k.start=ut=N,k.end=ie=Z,St=Z-N,k.update()},k.adjustPinSpacing=function(N){if(I){var Z=I.indexOf(F.d)+1;I[Z]=parseFloat(I[Z])+N+oe,I[1]=parseFloat(I[1])+N+oe,Or(I)}},k.disable=function(N,Z){if(k.enabled&&(N!==!1&&k.revert(!0,!0),k.enabled=k.isActive=!1,Z||Q&&Q.pause(),Gt=0,se&&(se.uncache=1),At&&re(r,"refreshInit",At),kt&&(kt.pause(),ee.tween&&ee.tween.kill()&&(ee.tween=0)),!U)){for(var K=lt.length;K--;)if(lt[K].scroller===H&&lt[K]!==k)return;re(H,"resize",nn),re(H,"scroll",mr)}},k.kill=function(N,Z){k.disable(N,Z),Q&&!Z&&Q.kill(),l&&delete xo[l];var K=lt.indexOf(k);K>=0&&lt.splice(K,1),K===be&&jn>0&&be--,K=0,lt.forEach(function(et){return et.scroller===k.scroller&&(K=1)}),K||ri||(k.scroll.rec=0),n&&(n.scrollTrigger=null,N&&n.revert({kill:!1}),Z||n.kill()),_e&&[_e,Ye,Xt,z].forEach(function(et){return et.parentNode&&et.parentNode.removeChild(et)}),Qi===k&&(Qi=0),p&&(se&&(se.uncache=1),K=0,lt.forEach(function(et){return et.pin===p&&K++}),K||(se.spacer=0)),i.onKill&&i.onKill(k)},k.enable(!1,!1),de&&de(k),!n||!n.add||St?k.refresh():tt.delayedCall(.01,function(){return ut||ie||k.refresh()})&&(St=.01)&&(ut=ie=0),p&&Xd()},r.register=function(i){return vr||(tt=i||Bh(),Fh()&&window.document&&r.enable(),vr=Rn),vr},r.defaults=function(i){if(i)for(var n in i)In[n]=i[n];return In},r.disable=function(i,n){Rn=0,lt.forEach(function(o){return o[n?"kill":"disable"](i)}),re(ft,"wheel",mr),re(Mt,"scroll",mr),clearInterval(On),re(Mt,"touchcancel",ci),re(Lt,"touchstart",ci),Ln(re,Mt,"pointerdown,touchstart,mousedown",Oa),Ln(re,Mt,"pointerup,touchend,mouseup",Da),os.kill(),zn(re);for(var s=0;s<gt.length;s+=3)$n(re,gt[s],gt[s+1]),$n(re,gt[s],gt[s+2])},r.enable=function(){if(ft=window,Mt=document,ui=Mt.documentElement,Lt=Mt.body,tt&&(as=tt.utils.toArray,Er=tt.utils.clamp,bo=tt.core.context||ci,zs=tt.core.suppressOverwrites||ci,Jo=ft.history.scrollRestoration||"auto",tt.core.globals("ScrollTrigger",r),Lt)){Rn=1,Wt.register(tt),r.isTouch=Wt.isTouch,Mi=Wt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ae(ft,"wheel",mr),Rh=[ft,Mt,ui,Lt],tt.matchMedia?(r.matchMedia=function(l){var h=tt.matchMedia(),u;for(u in l)h.add(u,l[u]);return h},tt.addEventListener("matchMediaInit",function(){return na()}),tt.addEventListener("matchMediaRevert",function(){return Vh()}),tt.addEventListener("matchMedia",function(){tr(0,1),cr("matchMedia")}),tt.matchMedia("(orientation: portrait)",function(){return Ns(),Ns})):console.warn("Requires GSAP 3.11.0 or later"),Ns(),ae(Mt,"scroll",mr);var i=Lt.style,n=i.borderTopStyle,s=tt.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Si(Lt),Qt.m=Math.round(o.top+Qt.sc())||0,xe.m=Math.round(o.left+xe.sc())||0,n?i.borderTopStyle=n:i.removeProperty("border-top-style"),On=setInterval(La,250),tt.delayedCall(.5,function(){return Dn=0}),ae(Mt,"touchcancel",ci),ae(Lt,"touchstart",ci),Ln(ae,Mt,"pointerdown,touchstart,mousedown",Oa),Ln(ae,Mt,"pointerup,touchend,mouseup",Da),yo=tt.utils.checkPrefix("transform"),Wn.push(yo),vr=we(),os=tt.delayedCall(.2,tr).pause(),yr=[Mt,"visibilitychange",function(){var l=ft.innerWidth,h=ft.innerHeight;Mt.hidden?(Ma=l,Pa=h):(Ma!==l||Pa!==h)&&nn()},Mt,"DOMContentLoaded",tr,ft,"load",tr,ft,"resize",nn],zn(ae),lt.forEach(function(l){return l.enable(0,1)}),a=0;a<gt.length;a+=3)$n(re,gt[a],gt[a+1]),$n(re,gt[a],gt[a+2])}},r.config=function(i){"limitCallbacks"in i&&(Ls=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(On)||(On=n)&&setInterval(La,n),"ignoreMobileResize"in i&&($h=r.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(zn(re)||zn(ae,i.autoRefreshEvents||"none"),Lh=(i.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(i,n){var s=ke(i),o=gt.indexOf(s),a=lr(s);~o&&gt.splice(o,a?6:2),n&&(a?pi.unshift(ft,n,Lt,n,ui,n):pi.unshift(s,n))},r.clearMatchMedia=function(i){lt.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},r.isInViewport=function(i,n,s){var o=(ii(i)?ke(i):i).getBoundingClientRect(),a=o[s?nr:sr]*n||0;return s?o.right-a>0&&o.left+a<ft.innerWidth:o.bottom-a>0&&o.top+a<ft.innerHeight},r.positionInViewport=function(i,n,s){ii(i)&&(i=ke(i));var o=i.getBoundingClientRect(),a=o[s?nr:sr],l=n==null?a/2:n in ls?ls[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return s?(o.left+l)/ft.innerWidth:(o.top+l)/ft.innerHeight},r.killAll=function(i){if(lt.forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var n=hr.killAll||[];hr={},n.forEach(function(s){return s()})}},r}();ht.version="3.11.3";ht.saveStyles=function(r){return r?as(r).forEach(function(t){if(t&&t.style){var e=Ne.indexOf(t);e>=0&&Ne.splice(e,5),Ne.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),tt.core.getCache(t),bo())}}):Ne};ht.revert=function(r,t){return na(!r,t)};ht.create=function(r,t){return new ht(r,t)};ht.refresh=function(r){return r?nn():(vr||ht.register())&&tr(!0)};ht.update=dr;ht.clearScrollMemory=jh;ht.maxScroll=function(r,t){return $i(r,t?xe:Qt)};ht.getScrollFunc=function(r,t){return Xi(ke(r),t?xe:Qt)};ht.getById=function(r){return xo[r]};ht.getAll=function(){return lt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ht.isScrolling=function(){return!!Je};ht.snapDirectional=ra;ht.addEventListener=function(r,t){var e=hr[r]||(hr[r]=[]);~e.indexOf(t)||e.push(t)};ht.removeEventListener=function(r,t){var e=hr[r],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};ht.batch=function(r,t){var e=[],i={},n=t.interval||.016,s=t.batchMax||1e9,o=function(h,u){var f=[],g=[],p=tt.delayedCall(n,function(){u(f,g),f=[],g=[]}).pause();return function(v){f.length||p.restart(!0),f.push(v.trigger),g.push(v),s<=f.length&&p.progress(1)}},a;for(a in t)i[a]=a.substr(0,2)==="on"&&Se(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Se(s)&&(s=s(),ae(ht,"refresh",function(){return s=t.batchMax()})),as(r).forEach(function(l){var h={};for(a in i)h[a]=i[a];h.trigger=l,e.push(ht.create(h))}),e};var Ua=function(t,e,i,n){return e>n?t(n):e<0&&t(0),i>n?(n-e)/(i-e):i<0?e/(e-i):1},Bs=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Wt.isTouch?" pinch-zoom":""):"none",t===ui&&r(Lt,e)},Ha={auto:1,scroll:1},Wd=function(t){var e=t.event,i=t.target,n=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||tt.core.getCache(s),a=we(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s.scrollHeight<=s.clientHeight;)s=s.parentNode;o._isScroll=s&&!lr(s)&&s!==i&&(Ha[(l=fi(s)).overflowY]||Ha[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Wh=function(t,e,i,n){return Wt.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:n=n&&Wd,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&ae(Mt,Wt.eventTypes[0],qa,!1,!0)},onDisable:function(){return re(Mt,Wt.eventTypes[0],qa,!0)}})},Gd=/(input|label|select|textarea)/i,Xa,qa=function(t){var e=Gd.test(t.target.tagName);(e||Xa)&&(t._gsapAllow=!0,Xa=e)},Zd=function(t){qn(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,i=e.normalizeScrollX,n=e.momentum,s=e.allowNestedScroll,o,a,l=ke(t.target)||ui,h=tt.core.globals().ScrollSmoother,u=h&&h.get(),f=Mi&&(t.content&&ke(t.content)||u&&t.content!==!1&&!u.smooth()&&u.content()),g=Xi(l,Qt),p=Xi(l,xe),v=1,_=(Wt.isTouch&&ft.visualViewport?ft.visualViewport.scale*ft.visualViewport.width:ft.outerWidth)/ft.innerWidth,b=0,x=Se(n)?function(){return n(o)}:function(){return n||2.8},C,E,T=Wh(l,t.type,!0,s),M=function(){return E=!1},O=ci,R=ci,$=function(){a=$i(l,Qt),R=Er(Mi?1:0,a),i&&(O=Er(0,$i(l,xe))),C=or},P=function(){f._gsap.y=en(parseFloat(f._gsap.y)+g.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",g.offset=g.cacheID=0},F=function(){if(E){requestAnimationFrame(M);var ot=en(o.deltaY/2),X=R(g.v-ot);if(f&&X!==g.v+g.offset){g.offset=X-g.v;var ct=en((parseFloat(f&&f._gsap.y)||0)-g.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+ct+", 0, 1)",f._gsap.y=ct+"px",g.cacheID=gt.cache,dr()}return!0}g.offset&&P(),E=!0},B,H,J,U,G=function(){$(),B.isActive()&&B.vars.scrollY>a&&(g()>a?B.progress(1)&&g(a):B.resetTo("scrollY",a))};return f&&tt.set(f,{y:"+=0"}),t.ignoreCheck=function(Y){return Mi&&Y.type==="touchmove"&&F()||v>1.05&&Y.type!=="touchstart"||o.isGesturing||Y.touches&&Y.touches.length>1},t.onPress=function(){var Y=v;v=en((ft.visualViewport&&ft.visualViewport.scale||1)/_),B.pause(),Y!==v&&Bs(l,v>1.01?!0:i?!1:"x"),H=p(),J=g(),$(),C=or},t.onRelease=t.onGestureStart=function(Y,ot){if(g.offset&&P(),!ot)U.restart(!0);else{gt.cache++;var X=x(),ct,k;i&&(ct=p(),k=ct+X*.05*-Y.velocityX/.227,X*=Ua(p,ct,k,$i(l,xe)),B.vars.scrollX=O(k)),ct=g(),k=ct+X*.05*-Y.velocityY/.227,X*=Ua(g,ct,k,$i(l,Qt)),B.vars.scrollY=R(k),B.invalidate().duration(X).play(.01),(Mi&&B.vars.scrollY>=a||ct>=a-1)&&tt.to({},{onUpdate:G,duration:X})}},t.onWheel=function(){B._ts&&B.pause(),we()-b>1e3&&(C=0,b=we())},t.onChange=function(Y,ot,X,ct,k){if(or!==C&&$(),ot&&i&&p(O(ct[2]===ot?H+(Y.startX-Y.x):p()+ot-ct[1])),X){g.offset&&P();var At=k[2]===X,Nt=At?J+Y.startY-Y.y:g()+X-k[1],ze=R(Nt);At&&Nt!==ze&&(J+=ze-Nt),g(ze)}(X||ot)&&dr()},t.onEnable=function(){Bs(l,i?!1:"x"),ht.addEventListener("refresh",G),ae(ft,"resize",G),g.smooth&&(g.target.style.scrollBehavior="auto",g.smooth=p.smooth=!1),T.enable()},t.onDisable=function(){Bs(l,!0),re(ft,"resize",G),ht.removeEventListener("refresh",G),T.kill()},t.lockAxis=t.lockAxis!==!1,o=new Wt(t),o.iOS=Mi,Mi&&!g()&&g(1),Mi&&tt.ticker.add(ci),U=o._dc,B=tt.to(o,{ease:"power4",paused:!0,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:U.vars.onComplete}),o};ht.sort=function(r){return lt.sort(r||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};ht.observe=function(r){return new Wt(r)};ht.normalizeScroll=function(r){if(typeof r>"u")return Ie;if(r===!0&&Ie)return Ie.enable();if(r===!1)return Ie&&Ie.kill();var t=r instanceof Wt?r:Zd(r);return Ie&&Ie.target===t.target&&Ie.kill(),lr(t.target)&&(Ie=t),t};ht.core={_getVelocityProp:vo,_inputObserver:Wh,_scrollers:gt,_proxies:pi,bridge:{ss:function(){Je||cr("scrollStart"),Je=we()},ref:function(){return ue}}};Bh()&&tt.registerPlugin(ht);var Kd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Qd(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Gh={exports:{}};(function(r,t){(function(e,i){r.exports=i()})(Kd,function(){function e(w){return(e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c})(w)}function i(w,c){if(!(w instanceof c))throw new TypeError("Cannot call a class as a function")}function n(w,c){for(var m=0;m<c.length;m++){var y=c[m];y.enumerable=y.enumerable||!1,y.configurable=!0,"value"in y&&(y.writable=!0),Object.defineProperty(w,y.key,y)}}function s(w,c,m){return c&&n(w.prototype,c),m&&n(w,m),w}var o=Date.now();function a(){var w={},c=!0,m=0,y=arguments.length;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(c=arguments[0],m++);for(var S=function(D){for(var L in D)Object.prototype.hasOwnProperty.call(D,L)&&(c&&Object.prototype.toString.call(D[L])==="[object Object]"?w[L]=a(!0,w[L],D[L]):w[L]=D[L])};m<y;m++){var A=arguments[m];S(A)}return w}function l(w,c){if((B(w)||w===window||w===document)&&(w=[w]),J(w)||U(w)||(w=[w]),ot(w)!=0){if(J(w)&&!U(w))for(var m=w.length,y=0;y<m&&c.call(w[y],w[y],y,w)!==!1;y++);else if(U(w)){for(var S in w)if(Y(w,S)&&c.call(w[S],w[S],S,w)===!1)break}}}function h(w){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,y=w[o]=w[o]||[],S={all:y,evt:null,found:null};return c&&m&&ot(y)>0&&l(y,function(A,D){if(A.eventName==c&&A.fn.toString()==m.toString())return S.found=!0,S.evt=D,!1}),S}function u(w){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},m=c.onElement,y=c.withCallback,S=c.avoidDuplicate,A=S===void 0||S,D=c.once,L=D!==void 0&&D,I=c.useCapture,W=I!==void 0&&I,q=arguments.length>2?arguments[2]:void 0,V=m||[];function st(it){P(y)&&y.call(q,it,this),L&&st.destroy()}return F(V)&&(V=document.querySelectorAll(V)),st.destroy=function(){l(V,function(it){var Q=h(it,w,st);Q.found&&Q.all.splice(Q.evt,1),it.removeEventListener&&it.removeEventListener(w,st,W)})},l(V,function(it){var Q=h(it,w,st);(it.addEventListener&&A&&!Q.found||!A)&&(it.addEventListener(w,st,W),Q.all.push({eventName:w,fn:st}))}),st}function f(w,c){l(c.split(" "),function(m){return w.classList.add(m)})}function g(w,c){l(c.split(" "),function(m){return w.classList.remove(m)})}function p(w,c){return w.classList.contains(c)}function v(w,c){for(;w!==document.body;){if(!(w=w.parentElement))return!1;if(typeof w.matches=="function"?w.matches(c):w.msMatchesSelector(c))return w}}function _(w){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",m=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(!w||c==="")return!1;if(c==="none")return P(m)&&m(),!1;var y=M(),S=c.split(" ");l(S,function(A){f(w,"g"+A)}),u(y,{onElement:w,avoidDuplicate:!1,once:!0,withCallback:function(A,D){l(S,function(L){g(D,"g"+L)}),P(m)&&m()}})}function b(w){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";if(c==="")return w.style.webkitTransform="",w.style.MozTransform="",w.style.msTransform="",w.style.OTransform="",w.style.transform="",!1;w.style.webkitTransform=c,w.style.MozTransform=c,w.style.msTransform=c,w.style.OTransform=c,w.style.transform=c}function x(w){w.style.display="block"}function C(w){w.style.display="none"}function E(w){var c=document.createDocumentFragment(),m=document.createElement("div");for(m.innerHTML=w;m.firstChild;)c.appendChild(m.firstChild);return c}function T(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}}function M(){var w,c=document.createElement("fakeelement"),m={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(w in m)if(c.style[w]!==void 0)return m[w]}function O(w,c,m,y){if(w())c();else{var S;m||(m=100);var A=setInterval(function(){w()&&(clearInterval(A),S&&clearTimeout(S),c())},m);y&&(S=setTimeout(function(){clearInterval(A)},y))}}function R(w,c,m){if(G(w))console.error("Inject assets error");else if(P(c)&&(m=c,c=!1),F(c)&&c in window)P(m)&&m();else{var y;if(w.indexOf(".css")!==-1){if((y=document.querySelectorAll('link[href="'+w+'"]'))&&y.length>0)return void(P(m)&&m());var S=document.getElementsByTagName("head")[0],A=S.querySelectorAll('link[rel="stylesheet"]'),D=document.createElement("link");return D.rel="stylesheet",D.type="text/css",D.href=w,D.media="all",A?S.insertBefore(D,A[0]):S.appendChild(D),void(P(m)&&m())}if((y=document.querySelectorAll('script[src="'+w+'"]'))&&y.length>0){if(P(m)){if(F(c))return O(function(){return window[c]!==void 0},function(){m()}),!1;m()}}else{var L=document.createElement("script");L.type="text/javascript",L.src=w,L.onload=function(){if(P(m)){if(F(c))return O(function(){return window[c]!==void 0},function(){m()}),!1;m()}},document.body.appendChild(L)}}}function $(){return"navigator"in window&&window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)}function P(w){return typeof w=="function"}function F(w){return typeof w=="string"}function B(w){return!(!w||!w.nodeType||w.nodeType!=1)}function H(w){return Array.isArray(w)}function J(w){return w&&w.length&&isFinite(w.length)}function U(w){return e(w)==="object"&&w!=null&&!P(w)&&!H(w)}function G(w){return w==null}function Y(w,c){return w!==null&&hasOwnProperty.call(w,c)}function ot(w){if(U(w)){if(w.keys)return w.keys().length;var c=0;for(var m in w)Y(w,m)&&c++;return c}return w.length}function X(w){return!isNaN(parseFloat(w))&&isFinite(w)}function ct(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,c=document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");if(!c.length)return!1;if(c.length==1)return c[0];typeof w=="string"&&(w=parseInt(w));var m=[];l(c,function(L){m.push(L.getAttribute("data-taborder"))});var y=Math.max.apply(Math,m.map(function(L){return parseInt(L)})),S=w<0?1:w+1;S>y&&(S="1");var A=m.filter(function(L){return L>=parseInt(S)}),D=A.sort()[0];return document.querySelector('.gbtn[data-taborder="'.concat(D,'"]'))}function k(w){if(w.events.hasOwnProperty("keyboard"))return!1;w.events.keyboard=u("keydown",{onElement:window,withCallback:function(c,m){var y=(c=c||window.event).keyCode;if(y==9){var S=document.querySelector(".gbtn.focused");if(!S){var A=!(!document.activeElement||!document.activeElement.nodeName)&&document.activeElement.nodeName.toLocaleLowerCase();if(A=="input"||A=="textarea"||A=="button")return}c.preventDefault();var D=document.querySelectorAll(".gbtn[data-taborder]");if(!D||D.length<=0)return;if(!S){var L=ct();return void(L&&(L.focus(),f(L,"focused")))}var I=ct(S.getAttribute("data-taborder"));g(S,"focused"),I&&(I.focus(),f(I,"focused"))}y==39&&w.nextSlide(),y==37&&w.prevSlide(),y==27&&w.close()}})}function At(w){return Math.sqrt(w.x*w.x+w.y*w.y)}function Nt(w,c){var m=function(y,S){var A=At(y)*At(S);if(A===0)return 0;var D=function(L,I){return L.x*I.x+L.y*I.y}(y,S)/A;return D>1&&(D=1),Math.acos(D)}(w,c);return function(y,S){return y.x*S.y-S.x*y.y}(w,c)>0&&(m*=-1),180*m/Math.PI}var ze=function(){function w(c){i(this,w),this.handlers=[],this.el=c}return s(w,[{key:"add",value:function(c){this.handlers.push(c)}},{key:"del",value:function(c){c||(this.handlers=[]);for(var m=this.handlers.length;m>=0;m--)this.handlers[m]===c&&this.handlers.splice(m,1)}},{key:"dispatch",value:function(){for(var c=0,m=this.handlers.length;c<m;c++){var y=this.handlers[c];typeof y=="function"&&y.apply(this.el,arguments)}}}]),w}();function mt(w,c){var m=new ze(w);return m.add(c),m}var te=function(){function w(c,m){i(this,w),this.element=typeof c=="string"?document.querySelector(c):c,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var y=function(){};this.rotate=mt(this.element,m.rotate||y),this.touchStart=mt(this.element,m.touchStart||y),this.multipointStart=mt(this.element,m.multipointStart||y),this.multipointEnd=mt(this.element,m.multipointEnd||y),this.pinch=mt(this.element,m.pinch||y),this.swipe=mt(this.element,m.swipe||y),this.tap=mt(this.element,m.tap||y),this.doubleTap=mt(this.element,m.doubleTap||y),this.longTap=mt(this.element,m.longTap||y),this.singleTap=mt(this.element,m.singleTap||y),this.pressMove=mt(this.element,m.pressMove||y),this.twoFingerPressMove=mt(this.element,m.twoFingerPressMove||y),this.touchMove=mt(this.element,m.touchMove||y),this.touchEnd=mt(this.element,m.touchEnd||y),this.touchCancel=mt(this.element,m.touchCancel||y),this.translateContainer=this.element,this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}}return s(w,[{key:"start",value:function(c){if(c.touches)if(c.target&&c.target.nodeName&&["a","button","input"].indexOf(c.target.nodeName.toLowerCase())>=0)console.log("ignore drag for this touched element",c.target.nodeName.toLowerCase());else{this.now=Date.now(),this.x1=c.touches[0].pageX,this.y1=c.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(c,this.element),this.preTapPosition.x!==null&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var m=this.preV;if(c.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var y={x:c.touches[1].pageX-this.x1,y:c.touches[1].pageY-this.y1};m.x=y.x,m.y=y.y,this.pinchStartLen=At(m),this.multipointStart.dispatch(c,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(c,this.element),this._preventTap=!0}.bind(this),750)}}},{key:"move",value:function(c){if(c.touches){var m=this.preV,y=c.touches.length,S=c.touches[0].pageX,A=c.touches[0].pageY;if(this.isDoubleTap=!1,y>1){var D=c.touches[1].pageX,L=c.touches[1].pageY,I={x:c.touches[1].pageX-S,y:c.touches[1].pageY-A};m.x!==null&&(this.pinchStartLen>0&&(c.zoom=At(I)/this.pinchStartLen,this.pinch.dispatch(c,this.element)),c.angle=Nt(I,m),this.rotate.dispatch(c,this.element)),m.x=I.x,m.y=I.y,this.x2!==null&&this.sx2!==null?(c.deltaX=(S-this.x2+D-this.sx2)/2,c.deltaY=(A-this.y2+L-this.sy2)/2):(c.deltaX=0,c.deltaY=0),this.twoFingerPressMove.dispatch(c,this.element),this.sx2=D,this.sy2=L}else{if(this.x2!==null){c.deltaX=S-this.x2,c.deltaY=A-this.y2;var W=Math.abs(this.x1-this.x2),q=Math.abs(this.y1-this.y2);(W>10||q>10)&&(this._preventTap=!0)}else c.deltaX=0,c.deltaY=0;this.pressMove.dispatch(c,this.element)}this.touchMove.dispatch(c,this.element),this._cancelLongTap(),this.x2=S,this.y2=A,y>1&&c.preventDefault()}}},{key:"end",value:function(c){if(c.changedTouches){this._cancelLongTap();var m=this;c.touches.length<2&&(this.multipointEnd.dispatch(c,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(c.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout(function(){m.swipe.dispatch(c,m.element)},0)):(this.tapTimeout=setTimeout(function(){m._preventTap||m.tap.dispatch(c,m.element),m.isDoubleTap&&(m.doubleTap.dispatch(c,m.element),m.isDoubleTap=!1)},0),m.isDoubleTap||(m.singleTapTimeout=setTimeout(function(){m.singleTap.dispatch(c,m.element)},250))),this.touchEnd.dispatch(c,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}}},{key:"cancelAll",value:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)}},{key:"cancel",value:function(c){this.cancelAll(),this.touchCancel.dispatch(c,this.element)}},{key:"_cancelLongTap",value:function(){clearTimeout(this.longTapTimeout)}},{key:"_cancelSingleTap",value:function(){clearTimeout(this.singleTapTimeout)}},{key:"_swipeDirection",value:function(c,m,y,S){return Math.abs(c-m)>=Math.abs(y-S)?c-m>0?"Left":"Right":y-S>0?"Up":"Down"}},{key:"on",value:function(c,m){this[c]&&this[c].add(m)}},{key:"off",value:function(c,m){this[c]&&this[c].del(m)}},{key:"destroy",value:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}}]),w}();function bt(w){var c=function(){var D,L=document.createElement("fakeelement"),I={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(D in I)if(L.style[D]!==void 0)return I[D]}(),m=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,y=p(w,"gslide-media")?w:w.querySelector(".gslide-media"),S=v(y,".ginner-container"),A=w.querySelector(".gslide-description");m>769&&(y=S),f(y,"greset"),b(y,"translate3d(0, 0, 0)"),u(c,{onElement:y,once:!0,withCallback:function(D,L){g(y,"greset")}}),y.style.opacity="",A&&(A.style.opacity="")}function ee(w){if(w.events.hasOwnProperty("touch"))return!1;var c,m,y,S=T(),A=S.width,D=S.height,L=!1,I=null,W=null,q=null,V=!1,st=1,it=1,Q=!1,_t=!1,nt=null,kt=null,Ct=null,Gt=null,ce=0,Ae=0,de=!1,yi=!1,Le={},at={},N=0,Z=0,K=document.getElementById("glightbox-slider"),et=document.querySelector(".goverlay"),Ft=new te(K,{touchStart:function(j){if(L=!0,(p(j.targetTouches[0].target,"ginner-container")||v(j.targetTouches[0].target,".gslide-desc")||j.targetTouches[0].target.nodeName.toLowerCase()=="a")&&(L=!1),v(j.targetTouches[0].target,".gslide-inline")&&!p(j.targetTouches[0].target.parentNode,"gslide-inline")&&(L=!1),L){if(at=j.targetTouches[0],Le.pageX=j.targetTouches[0].pageX,Le.pageY=j.targetTouches[0].pageY,N=j.targetTouches[0].clientX,Z=j.targetTouches[0].clientY,I=w.activeSlide,W=I.querySelector(".gslide-media"),y=I.querySelector(".gslide-inline"),q=null,p(W,"gslide-image")&&(q=W.querySelector("img")),(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>769&&(W=I.querySelector(".ginner-container")),g(et,"greset"),j.pageX>20&&j.pageX<window.innerWidth-20)return;j.preventDefault()}},touchMove:function(j){if(L&&(at=j.targetTouches[0],!Q&&!_t)){if(y&&y.offsetHeight>D){var dt=Le.pageX-at.pageX;if(Math.abs(dt)<=13)return!1}V=!0;var yt,ve=j.targetTouches[0].clientX,wt=j.targetTouches[0].clientY,qt=N-ve,$e=Z-wt;if(Math.abs(qt)>Math.abs($e)?(de=!1,yi=!0):(yi=!1,de=!0),c=at.pageX-Le.pageX,ce=100*c/A,m=at.pageY-Le.pageY,Ae=100*m/D,de&&q&&(yt=1-Math.abs(m)/D,et.style.opacity=yt,w.settings.touchFollowAxis&&(ce=0)),yi&&(yt=1-Math.abs(c)/A,W.style.opacity=yt,w.settings.touchFollowAxis&&(Ae=0)),!q)return b(W,"translate3d(".concat(ce,"%, 0, 0)"));b(W,"translate3d(".concat(ce,"%, ").concat(Ae,"%, 0)"))}},touchEnd:function(){if(L){if(V=!1,_t||Q)return Ct=nt,void(Gt=kt);var j=Math.abs(parseInt(Ae)),dt=Math.abs(parseInt(ce));if(!(j>29&&q))return j<29&&dt<25?(f(et,"greset"),et.style.opacity=1,bt(W)):void 0;w.close()}},multipointEnd:function(){setTimeout(function(){Q=!1},50)},multipointStart:function(){Q=!0,st=it||1},pinch:function(j){if(!q||V)return!1;Q=!0,q.scaleX=q.scaleY=st*j.zoom;var dt=st*j.zoom;if(_t=!0,dt<=1)return _t=!1,dt=1,Gt=null,Ct=null,nt=null,kt=null,void q.setAttribute("style","");dt>4.5&&(dt=4.5),q.style.transform="scale3d(".concat(dt,", ").concat(dt,", 1)"),it=dt},pressMove:function(j){if(_t&&!Q){var dt=at.pageX-Le.pageX,yt=at.pageY-Le.pageY;Ct&&(dt+=Ct),Gt&&(yt+=Gt),nt=dt,kt=yt;var ve="translate3d(".concat(dt,"px, ").concat(yt,"px, 0)");it&&(ve+=" scale3d(".concat(it,", ").concat(it,", 1)")),b(q,ve)}},swipe:function(j){if(!_t)if(Q)Q=!1;else{if(j.direction=="Left"){if(w.index==w.elements.length-1)return bt(W);w.nextSlide()}if(j.direction=="Right"){if(w.index==0)return bt(W);w.prevSlide()}}}});w.events.touch=Ft}var se=function(){function w(c,m){var y=this,S=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(i(this,w),this.img=c,this.slide=m,this.onclose=S,this.img.setZoomEvents)return!1;this.active=!1,this.zoomedIn=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.img.addEventListener("mousedown",function(A){return y.dragStart(A)},!1),this.img.addEventListener("mouseup",function(A){return y.dragEnd(A)},!1),this.img.addEventListener("mousemove",function(A){return y.drag(A)},!1),this.img.addEventListener("click",function(A){return y.slide.classList.contains("dragging-nav")?(y.zoomOut(),!1):y.zoomedIn?void(y.zoomedIn&&!y.dragging&&y.zoomOut()):y.zoomIn()},!1),this.img.setZoomEvents=!0}return s(w,[{key:"zoomIn",value:function(){var c=this.widowWidth();if(!(this.zoomedIn||c<=768)){var m=this.img;if(m.setAttribute("data-style",m.getAttribute("style")),m.style.maxWidth=m.naturalWidth+"px",m.style.maxHeight=m.naturalHeight+"px",m.naturalWidth>c){var y=c/2-m.naturalWidth/2;this.setTranslate(this.img.parentNode,y,0)}this.slide.classList.add("zoomed"),this.zoomedIn=!0}}},{key:"zoomOut",value:function(){this.img.parentNode.setAttribute("style",""),this.img.setAttribute("style",this.img.getAttribute("data-style")),this.slide.classList.remove("zoomed"),this.zoomedIn=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.onclose&&typeof this.onclose=="function"&&this.onclose()}},{key:"dragStart",value:function(c){c.preventDefault(),this.zoomedIn?(c.type==="touchstart"?(this.initialX=c.touches[0].clientX-this.xOffset,this.initialY=c.touches[0].clientY-this.yOffset):(this.initialX=c.clientX-this.xOffset,this.initialY=c.clientY-this.yOffset),c.target===this.img&&(this.active=!0,this.img.classList.add("dragging"))):this.active=!1}},{key:"dragEnd",value:function(c){var m=this;c.preventDefault(),this.initialX=this.currentX,this.initialY=this.currentY,this.active=!1,setTimeout(function(){m.dragging=!1,m.img.isDragging=!1,m.img.classList.remove("dragging")},100)}},{key:"drag",value:function(c){this.active&&(c.preventDefault(),c.type==="touchmove"?(this.currentX=c.touches[0].clientX-this.initialX,this.currentY=c.touches[0].clientY-this.initialY):(this.currentX=c.clientX-this.initialX,this.currentY=c.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.img.isDragging=!0,this.dragging=!0,this.setTranslate(this.img,this.currentX,this.currentY))}},{key:"onMove",value:function(c){if(this.zoomedIn){var m=c.clientX-this.img.naturalWidth/2,y=c.clientY-this.img.naturalHeight/2;this.setTranslate(this.img,m,y)}}},{key:"setTranslate",value:function(c,m,y){c.style.transform="translate3d("+m+"px, "+y+"px, 0)"}},{key:"widowWidth",value:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}}]),w}(),ki=function(){function w(){var c=this,m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};i(this,w);var y=m.dragEl,S=m.toleranceX,A=S===void 0?40:S,D=m.toleranceY,L=D===void 0?65:D,I=m.slide,W=I===void 0?null:I,q=m.instance,V=q===void 0?null:q;this.el=y,this.active=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.direction=null,this.lastDirection=null,this.toleranceX=A,this.toleranceY=L,this.toleranceReached=!1,this.dragContainer=this.el,this.slide=W,this.instance=V,this.el.addEventListener("mousedown",function(st){return c.dragStart(st)},!1),this.el.addEventListener("mouseup",function(st){return c.dragEnd(st)},!1),this.el.addEventListener("mousemove",function(st){return c.drag(st)},!1)}return s(w,[{key:"dragStart",value:function(c){if(this.slide.classList.contains("zoomed"))this.active=!1;else{c.type==="touchstart"?(this.initialX=c.touches[0].clientX-this.xOffset,this.initialY=c.touches[0].clientY-this.yOffset):(this.initialX=c.clientX-this.xOffset,this.initialY=c.clientY-this.yOffset);var m=c.target.nodeName.toLowerCase();c.target.classList.contains("nodrag")||v(c.target,".nodrag")||["input","select","textarea","button","a"].indexOf(m)!==-1?this.active=!1:(c.preventDefault(),(c.target===this.el||m!=="img"&&v(c.target,".gslide-inline"))&&(this.active=!0,this.el.classList.add("dragging"),this.dragContainer=v(c.target,".ginner-container")))}}},{key:"dragEnd",value:function(c){var m=this;c&&c.preventDefault(),this.initialX=0,this.initialY=0,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.active=!1,this.doSlideChange&&(this.instance.preventOutsideClick=!0,this.doSlideChange=="right"&&this.instance.prevSlide(),this.doSlideChange=="left"&&this.instance.nextSlide()),this.doSlideClose&&this.instance.close(),this.toleranceReached||this.setTranslate(this.dragContainer,0,0,!0),setTimeout(function(){m.instance.preventOutsideClick=!1,m.toleranceReached=!1,m.lastDirection=null,m.dragging=!1,m.el.isDragging=!1,m.el.classList.remove("dragging"),m.slide.classList.remove("dragging-nav"),m.dragContainer.style.transform="",m.dragContainer.style.transition=""},100)}},{key:"drag",value:function(c){if(this.active){c.preventDefault(),this.slide.classList.add("dragging-nav"),c.type==="touchmove"?(this.currentX=c.touches[0].clientX-this.initialX,this.currentY=c.touches[0].clientY-this.initialY):(this.currentX=c.clientX-this.initialX,this.currentY=c.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.el.isDragging=!0,this.dragging=!0,this.doSlideChange=!1,this.doSlideClose=!1;var m=Math.abs(this.currentX),y=Math.abs(this.currentY);if(m>0&&m>=Math.abs(this.currentY)&&(!this.lastDirection||this.lastDirection=="x")){this.yOffset=0,this.lastDirection="x",this.setTranslate(this.dragContainer,this.currentX,0);var S=this.shouldChange();if(!this.instance.settings.dragAutoSnap&&S&&(this.doSlideChange=S),this.instance.settings.dragAutoSnap&&S)return this.instance.preventOutsideClick=!0,this.toleranceReached=!0,this.active=!1,this.instance.preventOutsideClick=!0,this.dragEnd(null),S=="right"&&this.instance.prevSlide(),void(S=="left"&&this.instance.nextSlide())}if(this.toleranceY>0&&y>0&&y>=m&&(!this.lastDirection||this.lastDirection=="y")){this.xOffset=0,this.lastDirection="y",this.setTranslate(this.dragContainer,0,this.currentY);var A=this.shouldClose();return!this.instance.settings.dragAutoSnap&&A&&(this.doSlideClose=!0),void(this.instance.settings.dragAutoSnap&&A&&this.instance.close())}}}},{key:"shouldChange",value:function(){var c=!1;if(Math.abs(this.currentX)>=this.toleranceX){var m=this.currentX>0?"right":"left";(m=="left"&&this.slide!==this.slide.parentNode.lastChild||m=="right"&&this.slide!==this.slide.parentNode.firstChild)&&(c=m)}return c}},{key:"shouldClose",value:function(){var c=!1;return Math.abs(this.currentY)>=this.toleranceY&&(c=!0),c}},{key:"setTranslate",value:function(c,m,y){var S=arguments.length>3&&arguments[3]!==void 0&&arguments[3];c.style.transition=S?"all .2s ease":"",c.style.transform="translate3d(".concat(m,"px, ").concat(y,"px, 0)")}}]),w}();function me(w,c,m,y){var S=w.querySelector(".gslide-media"),A=new Image,D="gSlideTitle_"+m,L="gSlideDesc_"+m;A.addEventListener("load",function(){P(y)&&y()},!1),A.src=c.href,c.sizes!=""&&c.srcset!=""&&(A.sizes=c.sizes,A.srcset=c.srcset),A.alt="",G(c.alt)||c.alt===""||(A.alt=c.alt),c.title!==""&&A.setAttribute("aria-labelledby",D),c.description!==""&&A.setAttribute("aria-describedby",L),c.hasOwnProperty("_hasCustomWidth")&&c._hasCustomWidth&&(A.style.width=c.width),c.hasOwnProperty("_hasCustomHeight")&&c._hasCustomHeight&&(A.style.height=c.height),S.insertBefore(A,S.firstChild)}function Te(w,c,m,y){var S=this,A=w.querySelector(".ginner-container"),D="gvideo"+m,L=w.querySelector(".gslide-media"),I=this.getAllPlayers();f(A,"gvideo-container"),L.insertBefore(E('<div class="gvideo-wrapper"></div>'),L.firstChild);var W=w.querySelector(".gvideo-wrapper");R(this.settings.plyr.css,"Plyr");var q=c.href,V=c?.videoProvider,st=!1;L.style.maxWidth=c.width,R(this.settings.plyr.js,"Plyr",function(){if(!V&&q.match(/vimeo\.com\/([0-9]*)/)&&(V="vimeo"),!V&&(q.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||q.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||q.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/))&&(V="youtube"),V==="local"||!V){V="local";var it='<video id="'+D+'" ';it+='style="background:#000; max-width: '.concat(c.width,';" '),it+='preload="metadata" ',it+='x-webkit-airplay="allow" ',it+="playsinline ",it+="controls ",it+='class="gvideo-local">',it+='<source src="'.concat(q,'">'),st=E(it+="</video>")}var Q=st||E('<div id="'.concat(D,'" data-plyr-provider="').concat(V,'" data-plyr-embed-id="').concat(q,'"></div>'));f(W,"".concat(V,"-video gvideo")),W.appendChild(Q),W.setAttribute("data-id",D),W.setAttribute("data-index",m);var _t=Y(S.settings.plyr,"config")?S.settings.plyr.config:{},nt=new Plyr("#"+D,_t);nt.on("ready",function(kt){I[D]=kt.detail.plyr,P(y)&&y()}),O(function(){return w.querySelector("iframe")&&w.querySelector("iframe").dataset.ready=="true"},function(){S.resize(w)}),nt.on("enterfullscreen",ut),nt.on("exitfullscreen",ut)})}function ut(w){var c=v(w.target,".gslide-media");w.type==="enterfullscreen"&&f(c,"fullscreen"),w.type==="exitfullscreen"&&g(c,"fullscreen")}function ie(w,c,m,y){var S,A=this,D=w.querySelector(".gslide-media"),L=!(!Y(c,"href")||!c.href)&&c.href.split("#").pop().trim(),I=!(!Y(c,"content")||!c.content)&&c.content;if(I&&(F(I)&&(S=E('<div class="ginlined-content">'.concat(I,"</div>"))),B(I))){I.style.display=="none"&&(I.style.display="block");var W=document.createElement("div");W.className="ginlined-content",W.appendChild(I),S=W}if(L){var q=document.getElementById(L);if(!q)return!1;var V=q.cloneNode(!0);V.style.height=c.height,V.style.maxWidth=c.width,f(V,"ginlined-content"),S=V}if(!S)return console.error("Unable to append inline slide content",c),!1;D.style.height=c.height,D.style.width=c.width,D.appendChild(S),this.events["inlineclose"+L]=u("click",{onElement:D.querySelectorAll(".gtrigger-close"),withCallback:function(st){st.preventDefault(),A.close()}}),P(y)&&y()}function _e(w,c,m,y){var S=w.querySelector(".gslide-media"),A=function(D){var L=D.url,I=D.allow,W=D.callback,q=D.appendTo,V=document.createElement("iframe");return V.className="vimeo-video gvideo",V.src=L,V.style.width="100%",V.style.height="100%",I&&V.setAttribute("allow",I),V.onload=function(){V.onload=null,f(V,"node-ready"),P(W)&&W()},q&&q.appendChild(V),V}({url:c.href,callback:y});S.parentNode.style.maxWidth=c.width,S.parentNode.style.height=c.height,S.appendChild(A)}var Ye=function(){function w(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};i(this,w),this.defaults={href:"",sizes:"",srcset:"",title:"",type:"",videoProvider:"",description:"",alt:"",descPosition:"bottom",effect:"",width:"",height:"",content:!1,zoomable:!0,draggable:!0},U(c)&&(this.defaults=a(this.defaults,c))}return s(w,[{key:"sourceType",value:function(c){var m=c;return(c=c.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/)!==null?"image":c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)||c.match(/vimeo\.com\/([0-9]*)/)||c.match(/\.(mp4|ogg|webm|mov)/)!==null?"video":c.match(/\.(mp3|wav|wma|aac|ogg)/)!==null?"audio":c.indexOf("#")>-1&&m.split("#").pop().trim()!==""?"inline":c.indexOf("goajax=true")>-1?"ajax":"external"}},{key:"parseConfig",value:function(c,m){var y=this,S=a({descPosition:m.descPosition},this.defaults);if(U(c)&&!B(c)){Y(c,"type")||(Y(c,"content")&&c.content?c.type="inline":Y(c,"href")&&(c.type=this.sourceType(c.href)));var A=a(S,c);return this.setSize(A,m),A}var D="",L=c.getAttribute("data-glightbox"),I=c.nodeName.toLowerCase();if(I==="a"&&(D=c.href),I==="img"&&(D=c.src,S.alt=c.alt),S.href=D,l(S,function(Q,_t){Y(m,_t)&&_t!=="width"&&(S[_t]=m[_t]);var nt=c.dataset[_t];G(nt)||(S[_t]=y.sanitizeValue(nt))}),S.content&&(S.type="inline"),!S.type&&D&&(S.type=this.sourceType(D)),G(L)){if(!S.title&&I=="a"){var W=c.title;G(W)||W===""||(S.title=W)}if(!S.title&&I=="img"){var q=c.alt;G(q)||q===""||(S.title=q)}}else{var V=[];l(S,function(Q,_t){V.push(";\\s?"+_t)}),V=V.join("\\s?:|"),L.trim()!==""&&l(S,function(Q,_t){var nt=L,kt=new RegExp("s?"+_t+"s?:s?(.*?)("+V+"s?:|$)"),Ct=nt.match(kt);if(Ct&&Ct.length&&Ct[1]){var Gt=Ct[1].trim().replace(/;\s*$/,"");S[_t]=y.sanitizeValue(Gt)}})}if(S.description&&S.description.substring(0,1)==="."){var st;try{st=document.querySelector(S.description).innerHTML}catch(Q){if(!(Q instanceof DOMException))throw Q}st&&(S.description=st)}if(!S.description){var it=c.querySelector(".glightbox-desc");it&&(S.description=it.innerHTML)}return this.setSize(S,m,c),this.slideConfig=S,S}},{key:"setSize",value:function(c,m){var y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,S=c.type=="video"?this.checkSize(m.videosWidth):this.checkSize(m.width),A=this.checkSize(m.height);return c.width=Y(c,"width")&&c.width!==""?this.checkSize(c.width):S,c.height=Y(c,"height")&&c.height!==""?this.checkSize(c.height):A,y&&c.type=="image"&&(c._hasCustomWidth=!!y.dataset.width,c._hasCustomHeight=!!y.dataset.height),c}},{key:"checkSize",value:function(c){return X(c)?"".concat(c,"px"):c}},{key:"sanitizeValue",value:function(c){return c!=="true"&&c!=="false"?c:c==="true"}}]),w}(),Xt=function(){function w(c,m,y){i(this,w),this.element=c,this.instance=m,this.index=y}return s(w,[{key:"setContent",value:function(){var c=this,m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,y=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(p(m,"loaded"))return!1;var S=this.instance.settings,A=this.slideConfig,D=$();P(S.beforeSlideLoad)&&S.beforeSlideLoad({index:this.index,slide:m,player:!1});var L=A.type,I=A.descPosition,W=m.querySelector(".gslide-media"),q=m.querySelector(".gslide-title"),V=m.querySelector(".gslide-desc"),st=m.querySelector(".gdesc-inner"),it=y,Q="gSlideTitle_"+this.index,_t="gSlideDesc_"+this.index;if(P(S.afterSlideLoad)&&(it=function(){P(y)&&y(),S.afterSlideLoad({index:c.index,slide:m,player:c.instance.getSlidePlayerInstance(c.index)})}),A.title==""&&A.description==""?st&&st.parentNode.parentNode.removeChild(st.parentNode):(q&&A.title!==""?(q.id=Q,q.innerHTML=A.title):q.parentNode.removeChild(q),V&&A.description!==""?(V.id=_t,D&&S.moreLength>0?(A.smallDescription=this.slideShortDesc(A.description,S.moreLength,S.moreText),V.innerHTML=A.smallDescription,this.descriptionEvents(V,A)):V.innerHTML=A.description):V.parentNode.removeChild(V),f(W.parentNode,"desc-".concat(I)),f(st.parentNode,"description-".concat(I))),f(W,"gslide-".concat(L)),f(m,"loaded"),L!=="video"){if(L!=="external")return L==="inline"?(ie.apply(this.instance,[m,A,this.index,it]),void(A.draggable&&new ki({dragEl:m.querySelector(".gslide-inline"),toleranceX:S.dragToleranceX,toleranceY:S.dragToleranceY,slide:m,instance:this.instance}))):void(L!=="image"?P(it)&&it():me(m,A,this.index,function(){var nt=m.querySelector("img");A.draggable&&new ki({dragEl:nt,toleranceX:S.dragToleranceX,toleranceY:S.dragToleranceY,slide:m,instance:c.instance}),A.zoomable&&nt.naturalWidth>nt.offsetWidth&&(f(nt,"zoomable"),new se(nt,m,function(){c.instance.resize()})),P(it)&&it()}));_e.apply(this,[m,A,this.index,it])}else Te.apply(this.instance,[m,A,this.index,it])}},{key:"slideShortDesc",value:function(c){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:50,y=arguments.length>2&&arguments[2]!==void 0&&arguments[2],S=document.createElement("div");S.innerHTML=c;var A=S.innerText,D=y;if((c=A.trim()).length<=m)return c;var L=c.substr(0,m-1);return D?(S=null,L+'... <a href="#" class="desc-more">'+y+"</a>"):L}},{key:"descriptionEvents",value:function(c,m){var y=this,S=c.querySelector(".desc-more");if(!S)return!1;u("click",{onElement:S,withCallback:function(A,D){A.preventDefault();var L=document.body,I=v(D,".gslide-desc");if(!I)return!1;I.innerHTML=m.description,f(L,"gdesc-open");var W=u("click",{onElement:[L,v(I,".gslide-description")],withCallback:function(q,V){q.target.nodeName.toLowerCase()!=="a"&&(g(L,"gdesc-open"),f(L,"gdesc-closed"),I.innerHTML=m.smallDescription,y.descriptionEvents(I,m),setTimeout(function(){g(L,"gdesc-closed")},400),W.destroy())}})}})}},{key:"create",value:function(){return E(this.instance.settings.slideHTML)}},{key:"getConfig",value:function(){B(this.element)||this.element.hasOwnProperty("draggable")||(this.element.draggable=this.instance.settings.draggable);var c=new Ye(this.instance.settings.slideExtraAttributes);return this.slideConfig=c.parseConfig(this.element,this.instance.settings),this.slideConfig}}]),w}(),z=$(),Ve=$()!==null||document.createTouch!==void 0||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints,St=document.getElementsByTagName("html")[0],li={selector:".glightbox",elements:null,skin:"clean",theme:"clean",closeButton:!0,startAt:null,autoplayVideos:!0,autofocusVideos:!0,descPosition:"bottom",width:"900px",height:"506px",videosWidth:"960px",beforeSlideChange:null,afterSlideChange:null,beforeSlideLoad:null,afterSlideLoad:null,slideInserted:null,slideRemoved:null,slideExtraAttributes:null,onOpen:null,onClose:null,loop:!1,zoomable:!0,draggable:!0,dragAutoSnap:!1,dragToleranceX:40,dragToleranceY:65,preload:!0,oneSlidePerOpen:!1,touchNavigation:!0,touchFollowAxis:!0,keyboardNavigation:!0,closeOnOutsideClick:!0,plugins:!1,plyr:{css:"https://cdn.plyr.io/3.6.12/plyr.css",js:"https://cdn.plyr.io/3.6.12/plyr.js",config:{ratio:"16:9",fullscreen:{enabled:!0,iosNative:!0},youtube:{noCookie:!0,rel:0,showinfo:0,iv_load_policy:3},vimeo:{byline:!1,portrait:!1,title:!1,transparent:!1}}},openEffect:"zoom",closeEffect:"zoom",slideEffect:"slide",moreText:"See more",moreLength:60,cssEfects:{fade:{in:"fadeIn",out:"fadeOut"},zoom:{in:"zoomIn",out:"zoomOut"},slide:{in:"slideInRight",out:"slideOutLeft"},slideBack:{in:"slideInLeft",out:"slideOutRight"},none:{in:"none",out:"none"}},svg:{close:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',next:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',prev:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'},slideHTML:`<div class="gslide">
    <div class="gslide-inner-content">
        <div class="ginner-container">
            <div class="gslide-media">
            </div>
            <div class="gslide-description">
                <div class="gdesc-inner">
                    <h4 class="gslide-title"></h4>
                    <div class="gslide-desc"></div>
                </div>
            </div>
        </div>
    </div>
</div>`,lightboxHTML:`<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">
    <div class="gloader visible"></div>
    <div class="goverlay"></div>
    <div class="gcontainer">
    <div id="glightbox-slider" class="gslider"></div>
    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>
    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>
    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>
</div>
</div>`},hi=function(){function w(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};i(this,w),this.customOptions=c,this.settings=a(li,c),this.effectsClasses=this.getAnimationClasses(),this.videoPlayers={},this.apiEvents=[],this.fullElementsList=!1}return s(w,[{key:"init",value:function(){var c=this,m=this.getSelector();m&&(this.baseEvents=u("click",{onElement:m,withCallback:function(y,S){y.preventDefault(),c.open(S)}})),this.elements=this.getElements()}},{key:"open",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(this.elements.length===0)return!1;this.activeSlide=null,this.prevActiveSlideIndex=null,this.prevActiveSlide=null;var y=X(m)?m:this.settings.startAt;if(B(c)){var S=c.getAttribute("data-gallery");S&&(this.fullElementsList=this.elements,this.elements=this.getGalleryElements(this.elements,S)),G(y)&&(y=this.getElementIndex(c))<0&&(y=0)}X(y)||(y=0),this.build(),_(this.overlay,this.settings.openEffect==="none"?"none":this.settings.cssEfects.fade.in);var A=document.body,D=window.innerWidth-document.documentElement.clientWidth;if(D>0){var L=document.createElement("style");L.type="text/css",L.className="gcss-styles",L.innerText=".gscrollbar-fixer {margin-right: ".concat(D,"px}"),document.head.appendChild(L),f(A,"gscrollbar-fixer")}f(A,"glightbox-open"),f(St,"glightbox-open"),z&&(f(document.body,"glightbox-mobile"),this.settings.slideEffect="slide"),this.showSlide(y,!0),this.elements.length===1?(f(this.prevButton,"glightbox-button-hidden"),f(this.nextButton,"glightbox-button-hidden")):(g(this.prevButton,"glightbox-button-hidden"),g(this.nextButton,"glightbox-button-hidden")),this.lightboxOpen=!0,this.trigger("open"),P(this.settings.onOpen)&&this.settings.onOpen(),Ve&&this.settings.touchNavigation&&ee(this),this.settings.keyboardNavigation&&k(this)}},{key:"openAt",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;this.open(null,c)}},{key:"showSlide",value:function(){var c=this,m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,y=arguments.length>1&&arguments[1]!==void 0&&arguments[1];x(this.loader),this.index=parseInt(m);var S=this.slidesContainer.querySelector(".current");S&&g(S,"current"),this.slideAnimateOut();var A=this.slidesContainer.querySelectorAll(".gslide")[m];if(p(A,"loaded"))this.slideAnimateIn(A,y),C(this.loader);else{x(this.loader);var D=this.elements[m],L={index:this.index,slide:A,slideNode:A,slideConfig:D.slideConfig,slideIndex:this.index,trigger:D.node,player:null};this.trigger("slide_before_load",L),D.instance.setContent(A,function(){C(c.loader),c.resize(),c.slideAnimateIn(A,y),c.trigger("slide_after_load",L)})}this.slideDescription=A.querySelector(".gslide-description"),this.slideDescriptionContained=this.slideDescription&&p(this.slideDescription.parentNode,"gslide-media"),this.settings.preload&&(this.preloadSlide(m+1),this.preloadSlide(m-1)),this.updateNavigationClasses(),this.activeSlide=A}},{key:"preloadSlide",value:function(c){var m=this;if(c<0||c>this.elements.length-1||G(this.elements[c]))return!1;var y=this.slidesContainer.querySelectorAll(".gslide")[c];if(p(y,"loaded"))return!1;var S=this.elements[c],A=S.type,D={index:c,slide:y,slideNode:y,slideConfig:S.slideConfig,slideIndex:c,trigger:S.node,player:null};this.trigger("slide_before_load",D),A==="video"||A==="external"?setTimeout(function(){S.instance.setContent(y,function(){m.trigger("slide_after_load",D)})},200):S.instance.setContent(y,function(){m.trigger("slide_after_load",D)})}},{key:"prevSlide",value:function(){this.goToSlide(this.index-1)}},{key:"nextSlide",value:function(){this.goToSlide(this.index+1)}},{key:"goToSlide",value:function(){var c=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(this.prevActiveSlide=this.activeSlide,this.prevActiveSlideIndex=this.index,!this.loop()&&(c<0||c>this.elements.length-1))return!1;c<0?c=this.elements.length-1:c>=this.elements.length&&(c=0),this.showSlide(c)}},{key:"insertSlide",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1;m<0&&(m=this.elements.length);var y=new Xt(c,this,m),S=y.getConfig(),A=a({},S),D=y.create(),L=this.elements.length-1;A.index=m,A.node=!1,A.instance=y,A.slideConfig=S,this.elements.splice(m,0,A);var I=null,W=null;if(this.slidesContainer){if(m>L)this.slidesContainer.appendChild(D);else{var q=this.slidesContainer.querySelectorAll(".gslide")[m];this.slidesContainer.insertBefore(D,q)}(this.settings.preload&&this.index==0&&m==0||this.index-1==m||this.index+1==m)&&this.preloadSlide(m),this.index===0&&m===0&&(this.index=1),this.updateNavigationClasses(),I=this.slidesContainer.querySelectorAll(".gslide")[m],W=this.getSlidePlayerInstance(m),A.slideNode=I}this.trigger("slide_inserted",{index:m,slide:I,slideNode:I,slideConfig:S,slideIndex:m,trigger:null,player:W}),P(this.settings.slideInserted)&&this.settings.slideInserted({index:m,slide:I,player:W})}},{key:"removeSlide",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;if(c<0||c>this.elements.length-1)return!1;var m=this.slidesContainer&&this.slidesContainer.querySelectorAll(".gslide")[c];m&&(this.getActiveSlideIndex()==c&&(c==this.elements.length-1?this.prevSlide():this.nextSlide()),m.parentNode.removeChild(m)),this.elements.splice(c,1),this.trigger("slide_removed",c),P(this.settings.slideRemoved)&&this.settings.slideRemoved(c)}},{key:"slideAnimateIn",value:function(c,m){var y=this,S=c.querySelector(".gslide-media"),A=c.querySelector(".gslide-description"),D={index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlide,slideConfig:G(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:G(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},L={index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideConfig:this.elements[this.index].slideConfig,slideIndex:this.index,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)};if(S.offsetWidth>0&&A&&(C(A),A.style.display=""),g(c,this.effectsClasses),m)_(c,this.settings.cssEfects[this.settings.openEffect].in,function(){y.settings.autoplayVideos&&y.slidePlayerPlay(c),y.trigger("slide_changed",{prev:D,current:L}),P(y.settings.afterSlideChange)&&y.settings.afterSlideChange.apply(y,[D,L])});else{var I=this.settings.slideEffect,W=I!=="none"?this.settings.cssEfects[I].in:I;this.prevActiveSlideIndex>this.index&&this.settings.slideEffect=="slide"&&(W=this.settings.cssEfects.slideBack.in),_(c,W,function(){y.settings.autoplayVideos&&y.slidePlayerPlay(c),y.trigger("slide_changed",{prev:D,current:L}),P(y.settings.afterSlideChange)&&y.settings.afterSlideChange.apply(y,[D,L])})}setTimeout(function(){y.resize(c)},100),f(c,"current")}},{key:"slideAnimateOut",value:function(){if(!this.prevActiveSlide)return!1;var c=this.prevActiveSlide;g(c,this.effectsClasses),f(c,"prev");var m=this.settings.slideEffect,y=m!=="none"?this.settings.cssEfects[m].out:m;this.slidePlayerPause(c),this.trigger("slide_before_change",{prev:{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlideIndex,slideConfig:G(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:G(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},current:{index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideIndex:this.index,slideConfig:this.elements[this.index].slideConfig,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)}}),P(this.settings.beforeSlideChange)&&this.settings.beforeSlideChange.apply(this,[{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},{index:this.index,slide:this.activeSlide,player:this.getSlidePlayerInstance(this.index)}]),this.prevActiveSlideIndex>this.index&&this.settings.slideEffect=="slide"&&(y=this.settings.cssEfects.slideBack.out),_(c,y,function(){var S=c.querySelector(".ginner-container"),A=c.querySelector(".gslide-media"),D=c.querySelector(".gslide-description");S.style.transform="",A.style.transform="",g(A,"greset"),A.style.opacity="",D&&(D.style.opacity=""),g(c,"prev")})}},{key:"getAllPlayers",value:function(){return this.videoPlayers}},{key:"getSlidePlayerInstance",value:function(c){var m="gvideo"+c,y=this.getAllPlayers();return!(!Y(y,m)||!y[m])&&y[m]}},{key:"stopSlideVideo",value:function(c){if(B(c)){var m=c.querySelector(".gvideo-wrapper");m&&(c=m.getAttribute("data-index"))}console.log("stopSlideVideo is deprecated, use slidePlayerPause");var y=this.getSlidePlayerInstance(c);y&&y.playing&&y.pause()}},{key:"slidePlayerPause",value:function(c){if(B(c)){var m=c.querySelector(".gvideo-wrapper");m&&(c=m.getAttribute("data-index"))}var y=this.getSlidePlayerInstance(c);y&&y.playing&&y.pause()}},{key:"playSlideVideo",value:function(c){if(B(c)){var m=c.querySelector(".gvideo-wrapper");m&&(c=m.getAttribute("data-index"))}console.log("playSlideVideo is deprecated, use slidePlayerPlay");var y=this.getSlidePlayerInstance(c);y&&!y.playing&&y.play()}},{key:"slidePlayerPlay",value:function(c){var m;if(!z||(m=this.settings.plyr.config)!==null&&m!==void 0&&m.muted){if(B(c)){var y=c.querySelector(".gvideo-wrapper");y&&(c=y.getAttribute("data-index"))}var S=this.getSlidePlayerInstance(c);S&&!S.playing&&(S.play(),this.settings.autofocusVideos&&S.elements.container.focus())}}},{key:"setElements",value:function(c){var m=this;this.settings.elements=!1;var y=[];c&&c.length&&l(c,function(S,A){var D=new Xt(S,m,A),L=D.getConfig(),I=a({},L);I.slideConfig=L,I.instance=D,I.index=A,y.push(I)}),this.elements=y,this.lightboxOpen&&(this.slidesContainer.innerHTML="",this.elements.length&&(l(this.elements,function(){var S=E(m.settings.slideHTML);m.slidesContainer.appendChild(S)}),this.showSlide(0,!0)))}},{key:"getElementIndex",value:function(c){var m=!1;return l(this.elements,function(y,S){if(Y(y,"node")&&y.node==c)return m=S,!0}),m}},{key:"getElements",value:function(){var c=this,m=[];this.elements=this.elements?this.elements:[],!G(this.settings.elements)&&H(this.settings.elements)&&this.settings.elements.length&&l(this.settings.elements,function(S,A){var D=new Xt(S,c,A),L=D.getConfig(),I=a({},L);I.node=!1,I.index=A,I.instance=D,I.slideConfig=L,m.push(I)});var y=!1;return this.getSelector()&&(y=document.querySelectorAll(this.getSelector())),y&&l(y,function(S,A){var D=new Xt(S,c,A),L=D.getConfig(),I=a({},L);I.node=S,I.index=A,I.instance=D,I.slideConfig=L,I.gallery=S.getAttribute("data-gallery"),m.push(I)}),m}},{key:"getGalleryElements",value:function(c,m){return c.filter(function(y){return y.gallery==m})}},{key:"getSelector",value:function(){return!this.settings.elements&&(this.settings.selector&&this.settings.selector.substring(0,5)=="data-"?"*[".concat(this.settings.selector,"]"):this.settings.selector)}},{key:"getActiveSlide",value:function(){return this.slidesContainer.querySelectorAll(".gslide")[this.index]}},{key:"getActiveSlideIndex",value:function(){return this.index}},{key:"getAnimationClasses",value:function(){var c=[];for(var m in this.settings.cssEfects)if(this.settings.cssEfects.hasOwnProperty(m)){var y=this.settings.cssEfects[m];c.push("g".concat(y.in)),c.push("g".concat(y.out))}return c.join(" ")}},{key:"build",value:function(){var c=this;if(this.built)return!1;var m=document.body.childNodes,y=[];l(m,function(q){q.parentNode==document.body&&q.nodeName.charAt(0)!=="#"&&q.hasAttribute&&!q.hasAttribute("aria-hidden")&&(y.push(q),q.setAttribute("aria-hidden","true"))});var S=Y(this.settings.svg,"next")?this.settings.svg.next:"",A=Y(this.settings.svg,"prev")?this.settings.svg.prev:"",D=Y(this.settings.svg,"close")?this.settings.svg.close:"",L=this.settings.lightboxHTML;L=E(L=(L=(L=L.replace(/{nextSVG}/g,S)).replace(/{prevSVG}/g,A)).replace(/{closeSVG}/g,D)),document.body.appendChild(L);var I=document.getElementById("glightbox-body");this.modal=I;var W=I.querySelector(".gclose");this.prevButton=I.querySelector(".gprev"),this.nextButton=I.querySelector(".gnext"),this.overlay=I.querySelector(".goverlay"),this.loader=I.querySelector(".gloader"),this.slidesContainer=document.getElementById("glightbox-slider"),this.bodyHiddenChildElms=y,this.events={},f(this.modal,"glightbox-"+this.settings.skin),this.settings.closeButton&&W&&(this.events.close=u("click",{onElement:W,withCallback:function(q,V){q.preventDefault(),c.close()}})),W&&!this.settings.closeButton&&W.parentNode.removeChild(W),this.nextButton&&(this.events.next=u("click",{onElement:this.nextButton,withCallback:function(q,V){q.preventDefault(),c.nextSlide()}})),this.prevButton&&(this.events.prev=u("click",{onElement:this.prevButton,withCallback:function(q,V){q.preventDefault(),c.prevSlide()}})),this.settings.closeOnOutsideClick&&(this.events.outClose=u("click",{onElement:I,withCallback:function(q,V){c.preventOutsideClick||p(document.body,"glightbox-mobile")||v(q.target,".ginner-container")||v(q.target,".gbtn")||p(q.target,"gnext")||p(q.target,"gprev")||c.close()}})),l(this.elements,function(q,V){c.slidesContainer.appendChild(q.instance.create()),q.slideNode=c.slidesContainer.querySelectorAll(".gslide")[V]}),Ve&&f(document.body,"glightbox-touch"),this.events.resize=u("resize",{onElement:window,withCallback:function(){c.resize()}}),this.built=!0}},{key:"resize",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if((c=c||this.activeSlide)&&!p(c,"zoomed")){var m=T(),y=c.querySelector(".gvideo-wrapper"),S=c.querySelector(".gslide-image"),A=this.slideDescription,D=m.width,L=m.height;if(D<=768?f(document.body,"glightbox-mobile"):g(document.body,"glightbox-mobile"),y||S){var I=!1;if(A&&(p(A,"description-bottom")||p(A,"description-top"))&&!p(A,"gabsolute")&&(I=!0),S){if(D<=768)S.querySelector("img");else if(I){var W=A.offsetHeight,q=S.querySelector("img");q.setAttribute("style","max-height: calc(100vh - ".concat(W,"px)")),A.setAttribute("style","max-width: ".concat(q.offsetWidth,"px;"))}}if(y){var V=Y(this.settings.plyr.config,"ratio")?this.settings.plyr.config.ratio:"";if(!V){var st=y.clientWidth,it=y.clientHeight,Q=st/it;V="".concat(st/Q,":").concat(it/Q)}var _t=V.split(":"),nt=this.settings.videosWidth,kt=this.settings.videosWidth,Ct=(kt=X(nt)||nt.indexOf("px")!==-1?parseInt(nt):nt.indexOf("vw")!==-1?D*parseInt(nt)/100:nt.indexOf("vh")!==-1?L*parseInt(nt)/100:nt.indexOf("%")!==-1?D*parseInt(nt)/100:parseInt(y.clientWidth))/(parseInt(_t[0])/parseInt(_t[1]));if(Ct=Math.floor(Ct),I&&(L-=A.offsetHeight),kt>D||Ct>L||L<Ct&&D>kt){var Gt=y.offsetWidth,ce=y.offsetHeight,Ae=L/ce,de={width:Gt*Ae,height:ce*Ae};y.parentNode.setAttribute("style","max-width: ".concat(de.width,"px")),I&&A.setAttribute("style","max-width: ".concat(de.width,"px;"))}else y.parentNode.style.maxWidth="".concat(nt),I&&A.setAttribute("style","max-width: ".concat(nt,";"))}}}}},{key:"reload",value:function(){this.init()}},{key:"updateNavigationClasses",value:function(){var c=this.loop();g(this.nextButton,"disabled"),g(this.prevButton,"disabled"),this.index==0&&this.elements.length-1==0?(f(this.prevButton,"disabled"),f(this.nextButton,"disabled")):this.index!==0||c?this.index!==this.elements.length-1||c||f(this.nextButton,"disabled"):f(this.prevButton,"disabled")}},{key:"loop",value:function(){var c=Y(this.settings,"loopAtEnd")?this.settings.loopAtEnd:null;return c=Y(this.settings,"loop")?this.settings.loop:c,c}},{key:"close",value:function(){var c=this;if(!this.lightboxOpen){if(this.events){for(var m in this.events)this.events.hasOwnProperty(m)&&this.events[m].destroy();this.events=null}return!1}if(this.closing)return!1;this.closing=!0,this.slidePlayerPause(this.activeSlide),this.fullElementsList&&(this.elements=this.fullElementsList),this.bodyHiddenChildElms.length&&l(this.bodyHiddenChildElms,function(y){y.removeAttribute("aria-hidden")}),f(this.modal,"glightbox-closing"),_(this.overlay,this.settings.openEffect=="none"?"none":this.settings.cssEfects.fade.out),_(this.activeSlide,this.settings.cssEfects[this.settings.closeEffect].out,function(){if(c.activeSlide=null,c.prevActiveSlideIndex=null,c.prevActiveSlide=null,c.built=!1,c.events){for(var y in c.events)c.events.hasOwnProperty(y)&&c.events[y].destroy();c.events=null}var S=document.body;g(St,"glightbox-open"),g(S,"glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"),c.modal.parentNode.removeChild(c.modal),c.trigger("close"),P(c.settings.onClose)&&c.settings.onClose();var A=document.querySelector(".gcss-styles");A&&A.parentNode.removeChild(A),c.lightboxOpen=!1,c.closing=null})}},{key:"destroy",value:function(){this.close(),this.clearAllEvents(),this.baseEvents&&this.baseEvents.destroy()}},{key:"on",value:function(c,m){var y=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(!c||!P(m))throw new TypeError("Event name and callback must be defined");this.apiEvents.push({evt:c,once:y,callback:m})}},{key:"once",value:function(c,m){this.on(c,m,!0)}},{key:"trigger",value:function(c){var m=this,y=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,S=[];l(this.apiEvents,function(A,D){var L=A.evt,I=A.once,W=A.callback;L==c&&(W(y),I&&S.push(D))}),S.length&&l(S,function(A){return m.apiEvents.splice(A,1)})}},{key:"clearAllEvents",value:function(){this.apiEvents.splice(0,this.apiEvents.length)}},{key:"version",value:function(){return"3.1.0"}}]),w}();return function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=new hi(w);return c.init(),c}})})(Gh);const Jd=Gh.exports;var Zh={exports:{}};function tu(r,t){var e=r.map(function(i){return i.then(function(n){return{value:n,status:!0}},function(n){return{value:n,status:!1}}).then(function(n){return typeof t=="function"&&t(n),n})});return Promise.all(e)}var eu=tu,iu=eu,pn=function(r,t){this.onProgress=typeof t=="function"?t:null,this.fallbackImage=typeof r=="string"||r instanceof HTMLImageElement?r:null};pn.simplePreload=function(r){return new Promise(function(t,e){var i;r instanceof HTMLImageElement?(i=r,i.complete?i.naturalHeight?t(i):e(i):(i.onload=t.bind(null,i),i.onerror=i.onabort=e.bind(null,i))):typeof r=="string"&&(i=new Image,i.onload=t.bind(null,i),i.onerror=i.onabort=e.bind(null,i),i.src=r)})};pn.prototype.preload=function(r){var t=this,e=Array.prototype.concat.apply([],Array.prototype.slice.call(arguments));return e=e.map(function(i){return pn.simplePreload(i).catch(function(n){return t.fallbackImage?pn.simplePreload(t.fallbackImage).then(function(s){return n.setAttribute("data-fail-src",n.src),n.src=s.src,n},function(){return Promise.reject(n)}):Promise.reject(n)})}),iu(e,t.onProgress)};var ru=pn;(function(r){r.exports=ru})(Zh);const nu=Qd(Zh.exports);function su(r,t){return lu(r)||cu(r,t)||uu()}function ou(r){return au(r)||hu(r)||du()}function au(r){if(Array.isArray(r)){for(var t=0,e=new Array(r.length);t<r.length;t++)e[t]=r[t];return e}}function lu(r){if(Array.isArray(r))return r}function hu(r){if(Symbol.iterator in Object(r)||Object.prototype.toString.call(r)==="[object Arguments]")return Array.from(r)}function cu(r,t){var e=[],i=!0,n=!1,s=void 0;try{for(var o,a=r[Symbol.iterator]();!(i=(o=a.next()).done)&&(e.push(o.value),!t||e.length!==t);i=!0);}catch(l){n=!0,s=l}finally{try{i||a.return==null||a.return()}finally{if(n)throw s}}return e}function du(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function uu(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function fu(r,t){return new Promise(function(e,i){if(r===void 0&&i("Target element is undefined"),r.getAttribute("data-scramble-active")!=="true"){t.beforeEach&&t.beforeEach(r),r.setAttribute("data-scramble-active","true"),r.classList.add("scrambling");var n,s=r.innerHTML,o=[],a=t.speed?t.speed:100,l=r.textContent.split(""),h=l,u=r.textContent.split(""),f=!1;mu(t.text)?n=Va(t.text):r.getAttribute("data-scramble-text")&&r.getAttribute("data-scramble-text")!==""&&(n=Va(r.getAttribute("data-scramble-text"))),n&&(f=!0,l=n.truth,u=n.newLetters,h=n.startText);var g=function(){if(h.map(function(_,b){return!(` 	
\r\v`.indexOf(_)>-1)&&(u[b]=Kh(),o[b]===!0&&(u[b]=l[b]),r.textContent=u.join(""),!0)}),bu(u,l)){if(r.innerHTML=s,f){var v=r.children[0];v&&v!==""?v.textContent=u.join(""):r.textContent=u.join("")}clearInterval(p),r.setAttribute("data-scramble-active","false"),r.classList.remove("scrambling"),t.afterEach&&t.afterEach(r),e(r)}};(function(v){if(v&&sa(v))for(var _=0;_<=v.length;_++)(function(b){setTimeout(function(){o[b]=!0},vu(Eo(t),t.random,t.speed))})(_)})(h),g();var p=setInterval(function(){g()},a)}else i("Animation already triggered")})}function gu(r){if(!_u(r))return!1;var t=yu(r,Eo(r)),e=ou(Eo(t)?document.querySelectorAll(t.target):document.querySelectorAll(t)),i=[];if(e.forEach(function(n){var s=fu(n,t);i.push(s)}),!(i.length>0))return!1;t.beforeAll&&t.beforeAll(e),Promise.all(i).then(function(n){t.afterAll&&t.afterAll(n)}).catch(function(n){t.errorHandler&&t.errorHandler(n)})}var Eo=function(r){return!!r&&r.constructor===Object},sa=function(r){return!!r&&r.constructor===Array},pu=function(r){return typeof r=="boolean"},Kr=function(r){return typeof r=="function"},Ya=function(r){return Number.isInteger(r)},mu=function(r){return!(!r||r===""||!(typeof r=="string"||r instanceof String))},_u=function(r){return!sa(r)&&!pu(r)&&typeof r!="number"&&typeof r!="function"&&r!==void 0},Kh=function(r,t){var e=r||1,i=t||!1,n=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,e);return` 	
\r\v`.indexOf(n)<0&&i!==!0&&n},vu=function(r,t,e){var i=r||!1,n=e||100;if(i&&sa(t)&&t.length>1){var s=su(t,2),o=s[0],a=s[1];if((e>=a||n>=a)&&(n=a-1),a-=n,o>a&&(o=a),Ya(o)&&Ya(a))return Math.floor(Math.random()*(a-o))+o}return Math.floor(1999*Math.random())+1e3},yu=function(r,t){var e=t||!1,i={target:"[data-scrambler]",random:[1e3,3e3],speed:100,text:!1,beforeEach:!1,afterEach:!1,beforeAll:!1,afterAll:!1,errorHandler:!1};return r&&e&&(i.target=r.target!==void 0?r.target:"[data-scrambler]",i.random=r.random!==void 0?r.random:[1e3,3e3],i.speed=r.speed!==void 0?r.speed:100,i.text=r.text!==void 0&&r.text,i.beforeEach=!(r.beforeEach===void 0||!Kr(r.beforeEach))&&r.beforeEach,i.afterEach=!(r.afterEach===void 0||!Kr(r.afterEach))&&r.afterEach,i.beforeAll=!(r.beforeAll===void 0||!Kr(r.beforeAll))&&r.beforeAll,i.afterAll=!(r.afterAll===void 0||!Kr(r.afterAll))&&r.afterAll,i.errorHandler=!(r.errorHandler===void 0||!Kr(r.errorHandler))&&r.errorHandler),i},bu=function(r,t){return!(r.length!==t.length||!r.every(function(e,i){return e===t[i]}))},Va=function(r){if(!r||r===void 0||!(typeof r=="string"||r instanceof String))return!1;var t,e=r,i=e.split(""),n=e.split(""),s=[];return i.forEach(function(o,a){` 	
\r\v`.indexOf(i[a])>-1?s.push(" "):s.push(Kh())}),t=s,{truth:i,newLetters:n,startText:t}},wu=function(){return gu}();const xu=["/images/Loader.svg","/images/Me-Dark.jpg","/images/Me-Light.jpg","/images/Hero-Paint-1-Dark.jpg","/images/Hero-Paint-1-Light.jpg","/images/Hero-Paint-2-Dark.jpg","/images/Hero-Paint-2-Light.jpg","/images/Noise-Clear.svg"],Su=new nu;function Eu(){setTimeout(()=>{wu({target:"[data-scrambler]",random:[1500,1500],speed:60})},1500)}function Tu(){const r=["background: #fff","border-bottom: solid 1px black","border-left: solid 1px black","border-top: solid 1px black","color: #666","line-height: 35px","padding: 10px 0px 10px 10px"].join(";"),t=["background: #fff","border-bottom: solid 1px black","border-top: solid 1px black","color: red","line-height: 35px","padding: 10px 5px 10px 0px","width: 300px"].join(";"),e=["background: #fff","border-bottom: solid 1px black","border-right: solid 1px black","border-top: solid 1px black","color: #666","line-height: 35px","padding: 10px 20px 10px 0px","width: 300px"].join(";");console.log("%c Coded with %c \u2665\uFE0F %c https://davidbwaters.com",r,t,e)}function Au(){Jd({selector:"*[data-glightbox]",touchNavigation:!0,loop:!0,autoplayVideos:!0,openEffect:"fade",closeEffect:"fade",skin:"dbw"})}function Qh(){document.documentElement.style.setProperty("--doc-height",`${window.innerHeight}px`)}function Cu(){const r=window.matchMedia("(prefers-color-scheme: dark)").matches||document.body.classList.contains("theme-dark");document.body.dataset.theme=r?"dark":"light",window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",function(t){document.body.dataset.theme=document.body.dataset.theme==="light"?"dark":"light",window.dispatchEvent(new CustomEvent("themeChange",{detail:{theme:document.body.dataset.theme},bubbles:!0,composed:!0})),console.log("change")})}function ku(){document.querySelectorAll(".js-reveal").forEach(e=>{let i=Array.from(e.querySelectorAll(".js-reveal-inner"));i.length||(i=[e]),le.timeline({scrollTrigger:{scroller:document.body,trigger:e,toggleActions:"restart none none reset",start:"top bottom",end:"+=10"}}).from(i,{y:120,opacity:0,duration:.5,delay:0,stagger:.1,scaleY:1.4,ease:"Power2.out",onComplete:()=>{}})}),document.querySelectorAll(".js-reveal-fade").forEach(e=>{le.set(e,{transformOrigin:"top center"}),le.timeline({scrollTrigger:{scroller:document.body,trigger:e,toggleActions:"restart none none reset",start:"top bottom",end:"+=10"}}).from(e,{opacity:0,scaleY:1.4,duration:.5,delay:.1,stagger:.1,ease:"Power2.out",onComplete:()=>{}})})}window.addEventListener("resize",Qh);le.registerPlugin(ht);ht.normalizeScroll(!0);window.addEventListener("DOMContentLoaded",()=>{Qh(),ht.refresh(),ku(),setTimeout(Cu,200),window.dispatchEvent(new CustomEvent("appLoaded",{detail:{theme:document.body.dataset.theme},bubbles:!0,composed:!0})),Su.preload(...xu).then(function(r){Mu().then(()=>{let t=document.querySelector("c-loader");t&&(t.disable(),Eu()),Tu(),Au()})})});async function Mu(){}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zn=window,oa=Zn.ShadowRoot&&(Zn.ShadyCSS===void 0||Zn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,aa=Symbol(),ja=new WeakMap;class Jh{constructor(t,e,i){if(this._$cssResult$=!0,i!==aa)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(oa&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ja.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ja.set(e,t))}return t}toString(){return this.cssText}}const Pu=r=>new Jh(typeof r=="string"?r:r+"",void 0,aa),ai=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,n,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[s+1],r[0]);return new Jh(e,r,aa)},Ou=(r,t)=>{oa?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Zn.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,r.appendChild(i)})},Wa=oa?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Pu(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Us;const hs=window,Ga=hs.trustedTypes,Du=Ga?Ga.emptyScript:"",Za=hs.reactiveElementPolyfillSupport,To={toAttribute(r,t){switch(t){case Boolean:r=r?Du:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},tc=(r,t)=>t!==r&&(t==t||r==r),Hs={attribute:!0,type:String,converter:To,reflect:!1,hasChanged:tc};class br extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Hs){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Hs}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Wa(n))}else t!==void 0&&e.push(Wa(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Ou(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Hs){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:To).toAttribute(e,i.type);this._$El=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const o=n.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:To;this._$El=s,this[s]=a.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||tc)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}br.finalized=!0,br.elementProperties=new Map,br.elementStyles=[],br.shadowRootOptions={mode:"open"},Za?.({ReactiveElement:br}),((Us=hs.reactiveElementVersions)!==null&&Us!==void 0?Us:hs.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xs;const cs=window,Ur=cs.trustedTypes,Ka=Ur?Ur.createPolicy("lit-html",{createHTML:r=>r}):void 0,Pi=`lit$${(Math.random()+"").slice(9)}$`,ec="?"+Pi,Ru=`<${ec}>`,Hr=document,ds=(r="")=>Hr.createComment(r),En=r=>r===null||typeof r!="object"&&typeof r!="function",ic=Array.isArray,zu=r=>ic(r)||typeof r?.[Symbol.iterator]=="function",Qr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qa=/-->/g,Ja=/>/g,Gi=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),tl=/'/g,el=/"/g,rc=/^(?:script|style|textarea|title)$/i,Xr=Symbol.for("lit-noChange"),jt=Symbol.for("lit-nothing"),il=new WeakMap,Dr=Hr.createTreeWalker(Hr,129,null,!1),Lu=(r,t)=>{const e=r.length-1,i=[];let n,s=t===2?"<svg>":"",o=Qr;for(let l=0;l<e;l++){const h=r[l];let u,f,g=-1,p=0;for(;p<h.length&&(o.lastIndex=p,f=o.exec(h),f!==null);)p=o.lastIndex,o===Qr?f[1]==="!--"?o=Qa:f[1]!==void 0?o=Ja:f[2]!==void 0?(rc.test(f[2])&&(n=RegExp("</"+f[2],"g")),o=Gi):f[3]!==void 0&&(o=Gi):o===Gi?f[0]===">"?(o=n??Qr,g=-1):f[1]===void 0?g=-2:(g=o.lastIndex-f[2].length,u=f[1],o=f[3]===void 0?Gi:f[3]==='"'?el:tl):o===el||o===tl?o=Gi:o===Qa||o===Ja?o=Qr:(o=Gi,n=void 0);const v=o===Gi&&r[l+1].startsWith("/>")?" ":"";s+=o===Qr?h+Ru:g>=0?(i.push(u),h.slice(0,g)+"$lit$"+h.slice(g)+Pi+v):h+Pi+(g===-2?(i.push(void 0),l):v)}const a=s+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Ka!==void 0?Ka.createHTML(a):a,i]};class Tn{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[h,u]=Lu(t,e);if(this.el=Tn.createElement(h,i),Dr.currentNode=this.el.content,e===2){const f=this.el.content,g=f.firstChild;g.remove(),f.append(...g.childNodes)}for(;(n=Dr.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const f=[];for(const g of n.getAttributeNames())if(g.endsWith("$lit$")||g.startsWith(Pi)){const p=u[o++];if(f.push(g),p!==void 0){const v=n.getAttribute(p.toLowerCase()+"$lit$").split(Pi),_=/([.?@])?(.*)/.exec(p);l.push({type:1,index:s,name:_[2],strings:v,ctor:_[1]==="."?Iu:_[1]==="?"?Fu:_[1]==="@"?Bu:ws})}else l.push({type:6,index:s})}for(const g of f)n.removeAttribute(g)}if(rc.test(n.tagName)){const f=n.textContent.split(Pi),g=f.length-1;if(g>0){n.textContent=Ur?Ur.emptyScript:"";for(let p=0;p<g;p++)n.append(f[p],ds()),Dr.nextNode(),l.push({type:2,index:++s});n.append(f[g],ds())}}}else if(n.nodeType===8)if(n.data===ec)l.push({type:2,index:s});else{let f=-1;for(;(f=n.data.indexOf(Pi,f+1))!==-1;)l.push({type:7,index:s}),f+=Pi.length-1}s++}}static createElement(t,e){const i=Hr.createElement("template");return i.innerHTML=t,i}}function qr(r,t,e=r,i){var n,s,o,a;if(t===Xr)return t;let l=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const h=En(t)?void 0:t._$litDirective$;return l?.constructor!==h&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),h===void 0?l=void 0:(l=new h(r),l._$AT(r,e,i)),i!==void 0?((o=(a=e)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=qr(r,l._$AS(r,t.values),l,i)),t}class $u{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Hr).importNode(i,!0);Dr.currentNode=s;let o=Dr.nextNode(),a=0,l=0,h=n[0];for(;h!==void 0;){if(a===h.index){let u;h.type===2?u=new bs(o,o.nextSibling,this,t):h.type===1?u=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(u=new Uu(o,this,t)),this.u.push(u),h=n[++l]}a!==h?.index&&(o=Dr.nextNode(),a++)}return s}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class bs{constructor(t,e,i,n){var s;this.type=2,this._$AH=jt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cm=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=qr(this,t,e),En(t)?t===jt||t==null||t===""?(this._$AH!==jt&&this._$AR(),this._$AH=jt):t!==this._$AH&&t!==Xr&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):zu(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==jt&&En(this._$AH)?this._$AA.nextSibling.data=t:this.T(Hr.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Tn.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.p(i);else{const o=new $u(s,this),a=o.v(this.options);o.p(i),this.T(a),this._$AH=o}}_$AC(t){let e=il.get(t.strings);return e===void 0&&il.set(t.strings,e=new Tn(t)),e}k(t){ic(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new bs(this.O(ds()),this.O(ds()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class ws{constructor(t,e,i,n,s){this.type=1,this._$AH=jt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=jt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(s===void 0)t=qr(this,t,e,0),o=!En(t)||t!==this._$AH&&t!==Xr,o&&(this._$AH=t);else{const a=t;let l,h;for(t=s[0],l=0;l<s.length-1;l++)h=qr(this,a[i+l],e,l),h===Xr&&(h=this._$AH[l]),o||(o=!En(h)||h!==this._$AH[l]),h===jt?t=jt:t!==jt&&(t+=(h??"")+s[l+1]),this._$AH[l]=h}o&&!n&&this.j(t)}j(t){t===jt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Iu extends ws{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===jt?void 0:t}}const Nu=Ur?Ur.emptyScript:"";class Fu extends ws{constructor(){super(...arguments),this.type=4}j(t){t&&t!==jt?this.element.setAttribute(this.name,Nu):this.element.removeAttribute(this.name)}}class Bu extends ws{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=qr(this,t,e,0))!==null&&i!==void 0?i:jt)===Xr)return;const n=this._$AH,s=t===jt&&n!==jt||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==jt&&(n===jt||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Uu{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){qr(this,t)}}const rl=cs.litHtmlPolyfillSupport;rl?.(Tn,bs),((Xs=cs.litHtmlVersions)!==null&&Xs!==void 0?Xs:cs.litHtmlVersions=[]).push("2.4.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qs,Ys;class Jt extends br{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=yc(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return bc}}Jt.finalized=!0,Jt._$litElement$=!0,(qs=globalThis.litElementHydrateSupport)===null||qs===void 0||qs.call(globalThis,{LitElement:Jt});const nl=globalThis.litElementPolyfillSupport;nl?.({LitElement:Jt});((Ys=globalThis.litElementVersions)!==null&&Ys!==void 0?Ys:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ee=r=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(r,t):((e,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(o){customElements.define(e,o)}}})(r,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Hu=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function rt(r){return(t,e)=>e!==void 0?((i,n,s)=>{n.constructor.createProperty(s,i)})(r,t,e):Hu(r,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vs;((Vs=window.HTMLSlotElement)===null||Vs===void 0?void 0:Vs.prototype.assignedElements)!=null;var Xu=Object.defineProperty,qu=Object.getOwnPropertyDescriptor,nc=(r,t,e,i)=>{for(var n=i>1?void 0:i?qu(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Xu(t,e,n),n};let Ao=class extends Jt{constructor(){super(...arguments),this.icon="expand"}render(){return Tt`
      <i class='c-icon c-icon--${this.icon}'></i>
    `}createRenderRoot(){return this}};nc([rt()],Ao.prototype,"icon",2);Ao=nc([Ee("c-icon")],Ao);var Yu=Object.defineProperty,Vu=Object.getOwnPropertyDescriptor,vi=(r,t,e,i)=>{for(var n=i>1?void 0:i?Vu(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Yu(t,e,n),n};let oi=class extends Jt{constructor(){super(...arguments),this.variant="c-button--primary",this.size="medium",this.label="Label",this.width="",this.onClick=null,this.icon="",this.href=null,this.title="",this.isExpanded=""}willUpdate(r){this.size!=="c-button--large"&&this.size!=="c-button--small"&&(this.size="c-button--medium"),this.width&&(this.width==="full"||this.width==="fill")&&(this.width="100%"),this.width?this.style.setProperty("--button-width",this.width):this.style.setProperty("--button-width","auto")}render(){return this.href?Tt`
      <a
        class=${["c-button",this.size,this.variant,this.isExpanded].join(" ")}
        @click=${this.onclick}
        .href=${this.href}
        title=${this.title}
      >
      ${this.icon&&this.icon!=="none"?Tt`<c-icon icon=${this.icon}></c-icon>`:""}
        <span>${this.label}</span>
      </a>
    `:Tt`
      <button
        class=${["c-button",this.size,this.variant,this.isExpanded].join(" ")}
        @click=${this.onclick}
      >
      ${this.icon&&this.icon!=="none"?Tt`<c-icon icon=${this.icon}></c-icon>`:""}
        <span>${this.label}</span>
      </button>
    `}createRenderRoot(){return this}};vi([rt({converter:r=>"c-button--"+r})],oi.prototype,"variant",2);vi([rt({converter:r=>"c-button--"+r})],oi.prototype,"size",2);vi([rt()],oi.prototype,"label",2);vi([rt()],oi.prototype,"width",2);vi([rt()],oi.prototype,"onClick",2);vi([rt()],oi.prototype,"icon",2);vi([rt()],oi.prototype,"href",2);vi([rt()],oi.prototype,"title",2);vi([rt({converter:r=>r?"is-expanded":""})],oi.prototype,"isExpanded",2);oi=vi([Ee("c-button")],oi);function sl(r){let t=r[0],e=r[1],i=r[2];return Math.sqrt(t*t+e*e+i*i)}function Co(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r}function ju(r,t,e,i){return r[0]=t,r[1]=e,r[2]=i,r}function ol(r,t,e){return r[0]=t[0]+e[0],r[1]=t[1]+e[1],r[2]=t[2]+e[2],r}function al(r,t,e){return r[0]=t[0]-e[0],r[1]=t[1]-e[1],r[2]=t[2]-e[2],r}function Wu(r,t,e){return r[0]=t[0]*e[0],r[1]=t[1]*e[1],r[2]=t[2]*e[2],r}function Gu(r,t,e){return r[0]=t[0]/e[0],r[1]=t[1]/e[1],r[2]=t[2]/e[2],r}function js(r,t,e){return r[0]=t[0]*e,r[1]=t[1]*e,r[2]=t[2]*e,r}function Zu(r,t){let e=t[0]-r[0],i=t[1]-r[1],n=t[2]-r[2];return Math.sqrt(e*e+i*i+n*n)}function Ku(r,t){let e=t[0]-r[0],i=t[1]-r[1],n=t[2]-r[2];return e*e+i*i+n*n}function ll(r){let t=r[0],e=r[1],i=r[2];return t*t+e*e+i*i}function Qu(r,t){return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r}function Ju(r,t){return r[0]=1/t[0],r[1]=1/t[1],r[2]=1/t[2],r}function ko(r,t){let e=t[0],i=t[1],n=t[2],s=e*e+i*i+n*n;return s>0&&(s=1/Math.sqrt(s)),r[0]=t[0]*s,r[1]=t[1]*s,r[2]=t[2]*s,r}function sc(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]}function hl(r,t,e){let i=t[0],n=t[1],s=t[2],o=e[0],a=e[1],l=e[2];return r[0]=n*l-s*a,r[1]=s*o-i*l,r[2]=i*a-n*o,r}function tf(r,t,e,i){let n=t[0],s=t[1],o=t[2];return r[0]=n+i*(e[0]-n),r[1]=s+i*(e[1]-s),r[2]=o+i*(e[2]-o),r}function ef(r,t,e){let i=t[0],n=t[1],s=t[2],o=e[3]*i+e[7]*n+e[11]*s+e[15];return o=o||1,r[0]=(e[0]*i+e[4]*n+e[8]*s+e[12])/o,r[1]=(e[1]*i+e[5]*n+e[9]*s+e[13])/o,r[2]=(e[2]*i+e[6]*n+e[10]*s+e[14])/o,r}function rf(r,t,e){let i=t[0],n=t[1],s=t[2],o=e[3]*i+e[7]*n+e[11]*s+e[15];return o=o||1,r[0]=(e[0]*i+e[4]*n+e[8]*s)/o,r[1]=(e[1]*i+e[5]*n+e[9]*s)/o,r[2]=(e[2]*i+e[6]*n+e[10]*s)/o,r}function nf(r,t,e){let i=t[0],n=t[1],s=t[2],o=e[0],a=e[1],l=e[2],h=e[3],u=a*s-l*n,f=l*i-o*s,g=o*n-a*i,p=a*g-l*f,v=l*u-o*g,_=o*f-a*u,b=h*2;return u*=b,f*=b,g*=b,p*=2,v*=2,_*=2,r[0]=i+u+p,r[1]=n+f+v,r[2]=s+g+_,r}const sf=function(){const r=[0,0,0],t=[0,0,0];return function(e,i){Co(r,e),Co(t,i),ko(r,r),ko(t,t);let n=sc(r,t);return n>1?0:n<-1?Math.PI:Math.acos(n)}}();function of(r,t){return r[0]===t[0]&&r[1]===t[1]&&r[2]===t[2]}class ni extends Array{constructor(t=0,e=t,i=t){return super(t,e,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this[0]=t}set y(t){this[1]=t}set z(t){this[2]=t}set(t,e=t,i=t){return t.length?this.copy(t):(ju(this,t,e,i),this)}copy(t){return Co(this,t),this}add(t,e){return e?ol(this,t,e):ol(this,this,t),this}sub(t,e){return e?al(this,t,e):al(this,this,t),this}multiply(t){return t.length?Wu(this,this,t):js(this,this,t),this}divide(t){return t.length?Gu(this,this,t):js(this,this,1/t),this}inverse(t=this){return Ju(this,t),this}len(){return sl(this)}distance(t){return t?Zu(this,t):sl(this)}squaredLen(){return ll(this)}squaredDistance(t){return t?Ku(this,t):ll(this)}negate(t=this){return Qu(this,t),this}cross(t,e){return e?hl(this,t,e):hl(this,this,t),this}scale(t){return js(this,this,t),this}normalize(){return ko(this,this),this}dot(t){return sc(this,t)}equals(t){return of(this,t)}applyMatrix4(t){return ef(this,this,t),this}scaleRotateMatrix4(t){return rf(this,this,t),this}applyQuaternion(t){return nf(this,this,t),this}angle(t){return sf(this,t)}lerp(t,e){return tf(this,this,t,e),this}clone(){return new ni(this[0],this[1],this[2])}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t}transformDirection(t){const e=this[0],i=this[1],n=this[2];return this[0]=t[0]*e+t[4]*i+t[8]*n,this[1]=t[1]*e+t[5]*i+t[9]*n,this[2]=t[2]*e+t[6]*i+t[10]*n,this.normalize()}}const cl=new ni;let af=1,lf=1,dl=!1;class oc{constructor(t,e={}){t.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=t,this.attributes=e,this.id=af++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in e)this.addAttribute(i,e[i])}addAttribute(t,e){if(this.attributes[t]=e,e.id=lf++,e.size=e.size||1,e.type=e.type||(e.data.constructor===Float32Array?this.gl.FLOAT:e.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),e.target=t==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,e.normalized=e.normalized||!1,e.stride=e.stride||0,e.offset=e.offset||0,e.count=e.count||(e.stride?e.data.byteLength/e.stride:e.data.length/e.size),e.divisor=e.instanced||0,e.needsUpdate=!1,e.buffer||(e.buffer=this.gl.createBuffer(),this.updateAttribute(e)),e.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==e.count*e.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,e.count*e.divisor);this.instancedCount=e.count*e.divisor}else t==="index"?this.drawRange.count=e.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,e.count))}updateAttribute(t){this.glState.boundBuffer!==t.buffer&&(this.gl.bindBuffer(t.target,t.buffer),this.glState.boundBuffer=t.buffer),this.gl.bufferData(t.target,t.data,this.gl.STATIC_DRAW),t.needsUpdate=!1}setIndex(t){this.addAttribute("index",t)}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}setInstancedCount(t){this.instancedCount=t}createVAO(t){this.VAOs[t.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.bindAttributes(t)}bindAttributes(t){t.attributeLocations.forEach((e,{name:i,type:n})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}const s=this.attributes[i];this.gl.bindBuffer(s.target,s.buffer),this.glState.boundBuffer=s.buffer;let o=1;n===35674&&(o=2),n===35675&&(o=3),n===35676&&(o=4);const a=s.size/o,l=o===1?0:o*o*o,h=o===1?0:o*o;for(let u=0;u<o;u++)this.gl.vertexAttribPointer(e+u,a,s.type,s.normalized,s.stride+l,s.offset+u*h),this.gl.enableVertexAttribArray(e+u),this.gl.renderer.vertexAttribDivisor(e+u,s.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:t,mode:e=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${t.attributeOrder}`&&(this.VAOs[t.attributeOrder]||this.createVAO(t),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${t.attributeOrder}`),t.attributeLocations.forEach((i,{name:n})=>{const s=this.attributes[n];s.needsUpdate&&this.updateAttribute(s)}),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(e,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*2,this.instancedCount):this.gl.renderer.drawArraysInstanced(e,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(e,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*2):this.gl.drawArrays(e,this.drawRange.start,this.drawRange.count)}getPosition(){const t=this.attributes.position;if(t.data)return t;if(!dl)return console.warn("No position buffer data found to compute bounds"),dl=!0}computeBoundingBox(t){t||(t=this.getPosition());const e=t.data,i=t.offset||0,n=t.stride||t.size;this.bounds||(this.bounds={min:new ni,max:new ni,center:new ni,scale:new ni,radius:1/0});const s=this.bounds.min,o=this.bounds.max,a=this.bounds.center,l=this.bounds.scale;s.set(1/0),o.set(-1/0);for(let h=i,u=e.length;h<u;h+=n){const f=e[h],g=e[h+1],p=e[h+2];s.x=Math.min(f,s.x),s.y=Math.min(g,s.y),s.z=Math.min(p,s.z),o.x=Math.max(f,o.x),o.y=Math.max(g,o.y),o.z=Math.max(p,o.z)}l.sub(o,s),a.add(s,o).divide(2)}computeBoundingSphere(t){t||(t=this.getPosition());const e=t.data,i=t.offset||0,n=t.stride||t.size;this.bounds||this.computeBoundingBox(t);let s=0;for(let o=i,a=e.length;o<a;o+=n)cl.fromArray(e,o),s=Math.max(s,this.bounds.center.squaredDistance(cl));this.bounds.radius=Math.sqrt(s)}remove(){for(let t in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[t]),delete this.VAOs[t];for(let t in this.attributes)this.gl.deleteBuffer(this.attributes[t].buffer),delete this.attributes[t]}}let hf=1;const ul={};class la{constructor(t,{vertex:e,fragment:i,uniforms:n={},transparent:s=!1,cullFace:o=t.BACK,frontFace:a=t.CCW,depthTest:l=!0,depthWrite:h=!0,depthFunc:u=t.LESS}={}){t.canvas||console.error("gl not passed as fist argument to Program"),this.gl=t,this.uniforms=n,this.id=hf++,e||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=s,this.cullFace=o,this.frontFace=a,this.depthTest=l,this.depthWrite=h,this.depthFunc=u,this.blendFunc={},this.blendEquation={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA));const f=t.createShader(t.VERTEX_SHADER);t.shaderSource(f,e),t.compileShader(f),t.getShaderInfoLog(f)!==""&&console.warn(`${t.getShaderInfoLog(f)}
Vertex Shader
${fl(e)}`);const g=t.createShader(t.FRAGMENT_SHADER);if(t.shaderSource(g,i),t.compileShader(g),t.getShaderInfoLog(g)!==""&&console.warn(`${t.getShaderInfoLog(g)}
Fragment Shader
${fl(i)}`),this.program=t.createProgram(),t.attachShader(this.program,f),t.attachShader(this.program,g),t.linkProgram(this.program),!t.getProgramParameter(this.program,t.LINK_STATUS))return console.warn(t.getProgramInfoLog(this.program));t.deleteShader(f),t.deleteShader(g),this.uniformLocations=new Map;let p=t.getProgramParameter(this.program,t.ACTIVE_UNIFORMS);for(let b=0;b<p;b++){let x=t.getActiveUniform(this.program,b);this.uniformLocations.set(x,t.getUniformLocation(this.program,x.name));const C=x.name.match(/(\w+)/g);x.uniformName=C[0],C.length===3?(x.isStructArray=!0,x.structIndex=Number(C[1]),x.structProperty=C[2]):C.length===2&&isNaN(Number(C[1]))&&(x.isStruct=!0,x.structProperty=C[1])}this.attributeLocations=new Map;const v=[],_=t.getProgramParameter(this.program,t.ACTIVE_ATTRIBUTES);for(let b=0;b<_;b++){const x=t.getActiveAttrib(this.program,b),C=t.getAttribLocation(this.program,x.name);v[C]=x.name,this.attributeLocations.set(x,C)}this.attributeOrder=v.join("")}setBlendFunc(t,e,i,n){this.blendFunc.src=t,this.blendFunc.dst=e,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=n,t&&(this.transparent=!0)}setBlendEquation(t,e){this.blendEquation.modeRGB=t,this.blendEquation.modeAlpha=e}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha)}use({flipFaces:t=!1}={}){let e=-1;this.gl.renderer.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.currentProgram=this.id),this.uniformLocations.forEach((n,s)=>{let o=s.uniformName,a=this.uniforms[o];if(s.isStruct&&(a=a[s.structProperty],o+=`.${s.structProperty}`),s.isStructArray&&(a=a[s.structIndex][s.structProperty],o+=`[${s.structIndex}].${s.structProperty}`),!a)return gl(`Active uniform ${o} has not been supplied`);if(a&&a.value===void 0)return gl(`${o} uniform is missing a value parameter`);if(a.value.texture)return e=e+1,a.value.update(e),Ws(this.gl,s.type,n,e);if(a.value.length&&a.value[0].texture){const l=[];return a.value.forEach(h=>{e=e+1,h.update(e),l.push(e)}),Ws(this.gl,s.type,n,l)}Ws(this.gl,s.type,n,a.value)}),this.applyState(),t&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function Ws(r,t,e,i){i=i.length?cf(i):i;const n=r.renderer.state.uniformLocations.get(e);if(i.length)if(n===void 0||n.length!==i.length)r.renderer.state.uniformLocations.set(e,i.slice(0));else{if(df(n,i))return;n.set?n.set(i):uf(n,i),r.renderer.state.uniformLocations.set(e,n)}else{if(n===i)return;r.renderer.state.uniformLocations.set(e,i)}switch(t){case 5126:return i.length?r.uniform1fv(e,i):r.uniform1f(e,i);case 35664:return r.uniform2fv(e,i);case 35665:return r.uniform3fv(e,i);case 35666:return r.uniform4fv(e,i);case 35670:case 5124:case 35678:case 35680:return i.length?r.uniform1iv(e,i):r.uniform1i(e,i);case 35671:case 35667:return r.uniform2iv(e,i);case 35672:case 35668:return r.uniform3iv(e,i);case 35673:case 35669:return r.uniform4iv(e,i);case 35674:return r.uniformMatrix2fv(e,!1,i);case 35675:return r.uniformMatrix3fv(e,!1,i);case 35676:return r.uniformMatrix4fv(e,!1,i)}}function fl(r){let t=r.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+": "+t[e];return t.join(`
`)}function cf(r){const t=r.length,e=r[0].length;if(e===void 0)return r;const i=t*e;let n=ul[i];n||(ul[i]=n=new Float32Array(i));for(let s=0;s<t;s++)n.set(r[s],s*e);return n}function df(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function uf(r,t){for(let e=0,i=r.length;e<i;e++)r[e]=t[e]}let Gs=0;function gl(r){Gs>100||(console.warn(r),Gs++,Gs>100&&console.warn("More than 100 program warnings - stopping logs."))}const Zs=new ni;let ff=1;class gf{constructor({canvas:t=document.createElement("canvas"),width:e=300,height:i=150,dpr:n=1,alpha:s=!1,depth:o=!0,stencil:a=!1,antialias:l=!1,premultipliedAlpha:h=!1,preserveDrawingBuffer:u=!1,powerPreference:f="default",autoClear:g=!0,webgl:p=2}={}){const v={alpha:s,depth:o,stencil:a,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:u,powerPreference:f};this.dpr=n,this.alpha=s,this.color=!0,this.depth=o,this.stencil=a,this.premultipliedAlpha=h,this.autoClear=g,this.id=ff++,p===2&&(this.gl=t.getContext("webgl2",v)),this.isWebgl2=!!this.gl,this.gl||(this.gl=t.getContext("webgl",v)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(e,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=null,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LESS,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(t,e){this.width=t,this.height=e,this.gl.canvas.width=t*this.dpr,this.gl.canvas.height=e*this.dpr,Object.assign(this.gl.canvas.style,{width:t+"px",height:e+"px"})}setViewport(t,e){this.state.viewport.width===t&&this.state.viewport.height===e||(this.state.viewport.width=t,this.state.viewport.height=e,this.gl.viewport(0,0,t,e))}enable(t){this.state[t]!==!0&&(this.gl.enable(t),this.state[t]=!0)}disable(t){this.state[t]!==!1&&(this.gl.disable(t),this.state[t]=!1)}setBlendFunc(t,e,i,n){this.state.blendFunc.src===t&&this.state.blendFunc.dst===e&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===n||(this.state.blendFunc.src=t,this.state.blendFunc.dst=e,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=n,i!==void 0?this.gl.blendFuncSeparate(t,e,i,n):this.gl.blendFunc(t,e))}setBlendEquation(t,e){t=t||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===t&&this.state.blendEquation.modeAlpha===e)&&(this.state.blendEquation.modeRGB=t,this.state.blendEquation.modeAlpha=e,e!==void 0?this.gl.blendEquationSeparate(t,e):this.gl.blendEquation(t))}setCullFace(t){this.state.cullFace!==t&&(this.state.cullFace=t,this.gl.cullFace(t))}setFrontFace(t){this.state.frontFace!==t&&(this.state.frontFace=t,this.gl.frontFace(t))}setDepthMask(t){this.state.depthMask!==t&&(this.state.depthMask=t,this.gl.depthMask(t))}setDepthFunc(t){this.state.depthFunc!==t&&(this.state.depthFunc=t,this.gl.depthFunc(t))}activeTexture(t){this.state.activeTextureUnit!==t&&(this.state.activeTextureUnit=t,this.gl.activeTexture(this.gl.TEXTURE0+t))}bindFramebuffer({target:t=this.gl.FRAMEBUFFER,buffer:e=null}={}){this.state.framebuffer!==e&&(this.state.framebuffer=e,this.gl.bindFramebuffer(t,e))}getExtension(t,e,i){return e&&this.gl[e]?this.gl[e].bind(this.gl):(this.extensions[t]||(this.extensions[t]=this.gl.getExtension(t)),e?this.extensions[t]?this.extensions[t][i].bind(this.extensions[t]):null:this.extensions[t])}sortOpaque(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program.id!==e.program.id?t.program.id-e.program.id:t.zDepth!==e.zDepth?t.zDepth-e.zDepth:e.id-t.id}sortTransparent(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.zDepth!==e.zDepth?e.zDepth-t.zDepth:e.id-t.id}sortUI(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program.id!==e.program.id?t.program.id-e.program.id:e.id-t.id}getRenderList({scene:t,camera:e,frustumCull:i,sort:n}){let s=[];if(e&&i&&e.updateFrustum(),t.traverse(o=>{if(!o.visible)return!0;!o.draw||i&&o.frustumCulled&&e&&!e.frustumIntersectsMesh(o)||s.push(o)}),n){const o=[],a=[],l=[];s.forEach(h=>{h.program.transparent?h.program.depthTest?a.push(h):l.push(h):o.push(h),h.zDepth=0,!(h.renderOrder!==0||!h.program.depthTest||!e)&&(h.worldMatrix.getTranslation(Zs),Zs.applyMatrix4(e.projectionViewMatrix),h.zDepth=Zs.z)}),o.sort(this.sortOpaque),a.sort(this.sortTransparent),l.sort(this.sortUI),s=o.concat(a,l)}return s}render({scene:t,camera:e,target:i=null,update:n=!0,sort:s=!0,frustumCull:o=!0,clear:a}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(a||this.autoClear&&a!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),n&&t.updateMatrixWorld(),e&&e.updateMatrixWorld(),this.getRenderList({scene:t,camera:e,frustumCull:o,sort:s}).forEach(h=>{h.draw({camera:e})})}}function ac(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r}function lc(r,t,e,i,n){return r[0]=t,r[1]=e,r[2]=i,r[3]=n,r}function hc(r,t){let e=t[0],i=t[1],n=t[2],s=t[3],o=e*e+i*i+n*n+s*s;return o>0&&(o=1/Math.sqrt(o)),r[0]=e*o,r[1]=i*o,r[2]=n*o,r[3]=s*o,r}function pf(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]+r[3]*t[3]}function mf(r){return r[0]=0,r[1]=0,r[2]=0,r[3]=1,r}function _f(r,t,e){e=e*.5;let i=Math.sin(e);return r[0]=i*t[0],r[1]=i*t[1],r[2]=i*t[2],r[3]=Math.cos(e),r}function pl(r,t,e){let i=t[0],n=t[1],s=t[2],o=t[3],a=e[0],l=e[1],h=e[2],u=e[3];return r[0]=i*u+o*a+n*h-s*l,r[1]=n*u+o*l+s*a-i*h,r[2]=s*u+o*h+i*l-n*a,r[3]=o*u-i*a-n*l-s*h,r}function vf(r,t,e){e*=.5;let i=t[0],n=t[1],s=t[2],o=t[3],a=Math.sin(e),l=Math.cos(e);return r[0]=i*l+o*a,r[1]=n*l+s*a,r[2]=s*l-n*a,r[3]=o*l-i*a,r}function yf(r,t,e){e*=.5;let i=t[0],n=t[1],s=t[2],o=t[3],a=Math.sin(e),l=Math.cos(e);return r[0]=i*l-s*a,r[1]=n*l+o*a,r[2]=s*l+i*a,r[3]=o*l-n*a,r}function bf(r,t,e){e*=.5;let i=t[0],n=t[1],s=t[2],o=t[3],a=Math.sin(e),l=Math.cos(e);return r[0]=i*l+n*a,r[1]=n*l-i*a,r[2]=s*l+o*a,r[3]=o*l-s*a,r}function wf(r,t,e,i){let n=t[0],s=t[1],o=t[2],a=t[3],l=e[0],h=e[1],u=e[2],f=e[3],g,p,v,_,b;return p=n*l+s*h+o*u+a*f,p<0&&(p=-p,l=-l,h=-h,u=-u,f=-f),1-p>1e-6?(g=Math.acos(p),v=Math.sin(g),_=Math.sin((1-i)*g)/v,b=Math.sin(i*g)/v):(_=1-i,b=i),r[0]=_*n+b*l,r[1]=_*s+b*h,r[2]=_*o+b*u,r[3]=_*a+b*f,r}function xf(r,t){let e=t[0],i=t[1],n=t[2],s=t[3],o=e*e+i*i+n*n+s*s,a=o?1/o:0;return r[0]=-e*a,r[1]=-i*a,r[2]=-n*a,r[3]=s*a,r}function Sf(r,t){return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=t[3],r}function Ef(r,t){let e=t[0]+t[4]+t[8],i;if(e>0)i=Math.sqrt(e+1),r[3]=.5*i,i=.5/i,r[0]=(t[5]-t[7])*i,r[1]=(t[6]-t[2])*i,r[2]=(t[1]-t[3])*i;else{let n=0;t[4]>t[0]&&(n=1),t[8]>t[n*3+n]&&(n=2);let s=(n+1)%3,o=(n+2)%3;i=Math.sqrt(t[n*3+n]-t[s*3+s]-t[o*3+o]+1),r[n]=.5*i,i=.5/i,r[3]=(t[s*3+o]-t[o*3+s])*i,r[s]=(t[s*3+n]+t[n*3+s])*i,r[o]=(t[o*3+n]+t[n*3+o])*i}return r}function Tf(r,t,e="YXZ"){let i=Math.sin(t[0]*.5),n=Math.cos(t[0]*.5),s=Math.sin(t[1]*.5),o=Math.cos(t[1]*.5),a=Math.sin(t[2]*.5),l=Math.cos(t[2]*.5);return e==="XYZ"?(r[0]=i*o*l+n*s*a,r[1]=n*s*l-i*o*a,r[2]=n*o*a+i*s*l,r[3]=n*o*l-i*s*a):e==="YXZ"?(r[0]=i*o*l+n*s*a,r[1]=n*s*l-i*o*a,r[2]=n*o*a-i*s*l,r[3]=n*o*l+i*s*a):e==="ZXY"?(r[0]=i*o*l-n*s*a,r[1]=n*s*l+i*o*a,r[2]=n*o*a+i*s*l,r[3]=n*o*l-i*s*a):e==="ZYX"?(r[0]=i*o*l-n*s*a,r[1]=n*s*l+i*o*a,r[2]=n*o*a-i*s*l,r[3]=n*o*l+i*s*a):e==="YZX"?(r[0]=i*o*l+n*s*a,r[1]=n*s*l+i*o*a,r[2]=n*o*a-i*s*l,r[3]=n*o*l-i*s*a):e==="XZY"&&(r[0]=i*o*l-n*s*a,r[1]=n*s*l-i*o*a,r[2]=n*o*a+i*s*l,r[3]=n*o*l+i*s*a),r}const Af=ac,Cf=lc,kf=pf,Mf=hc;class Pf extends Array{constructor(t=0,e=0,i=0,n=1){return super(t,e,i,n),this.onChange=()=>{},this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(t){this[0]=t,this.onChange()}set y(t){this[1]=t,this.onChange()}set z(t){this[2]=t,this.onChange()}set w(t){this[3]=t,this.onChange()}identity(){return mf(this),this.onChange(),this}set(t,e,i,n){return t.length?this.copy(t):(Cf(this,t,e,i,n),this.onChange(),this)}rotateX(t){return vf(this,this,t),this.onChange(),this}rotateY(t){return yf(this,this,t),this.onChange(),this}rotateZ(t){return bf(this,this,t),this.onChange(),this}inverse(t=this){return xf(this,t),this.onChange(),this}conjugate(t=this){return Sf(this,t),this.onChange(),this}copy(t){return Af(this,t),this.onChange(),this}normalize(t=this){return Mf(this,t),this.onChange(),this}multiply(t,e){return e?pl(this,t,e):pl(this,this,t),this.onChange(),this}dot(t){return kf(this,t)}fromMatrix3(t){return Ef(this,t),this.onChange(),this}fromEuler(t){return Tf(this,t,t.order),this}fromAxisAngle(t,e){return _f(this,t,e),this}slerp(t,e){return wf(this,this,t,e),this}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this[3]=t[e+3],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t[e+3]=this[3],t}}const Of=1e-6;function Df(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}function Rf(r,t,e,i,n,s,o,a,l,h,u,f,g,p,v,_,b){return r[0]=t,r[1]=e,r[2]=i,r[3]=n,r[4]=s,r[5]=o,r[6]=a,r[7]=l,r[8]=h,r[9]=u,r[10]=f,r[11]=g,r[12]=p,r[13]=v,r[14]=_,r[15]=b,r}function zf(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function Lf(r,t){let e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],f=t[9],g=t[10],p=t[11],v=t[12],_=t[13],b=t[14],x=t[15],C=e*a-i*o,E=e*l-n*o,T=e*h-s*o,M=i*l-n*a,O=i*h-s*a,R=n*h-s*l,$=u*_-f*v,P=u*b-g*v,F=u*x-p*v,B=f*b-g*_,H=f*x-p*_,J=g*x-p*b,U=C*J-E*H+T*B+M*F-O*P+R*$;return U?(U=1/U,r[0]=(a*J-l*H+h*B)*U,r[1]=(n*H-i*J-s*B)*U,r[2]=(_*R-b*O+x*M)*U,r[3]=(g*O-f*R-p*M)*U,r[4]=(l*F-o*J-h*P)*U,r[5]=(e*J-n*F+s*P)*U,r[6]=(b*T-v*R-x*E)*U,r[7]=(u*R-g*T+p*E)*U,r[8]=(o*H-a*F+h*$)*U,r[9]=(i*F-e*H-s*$)*U,r[10]=(v*O-_*T+x*C)*U,r[11]=(f*T-u*O-p*C)*U,r[12]=(a*P-o*B-l*$)*U,r[13]=(e*B-i*P+n*$)*U,r[14]=(_*E-v*M-b*C)*U,r[15]=(u*M-f*E+g*C)*U,r):null}function $f(r){let t=r[0],e=r[1],i=r[2],n=r[3],s=r[4],o=r[5],a=r[6],l=r[7],h=r[8],u=r[9],f=r[10],g=r[11],p=r[12],v=r[13],_=r[14],b=r[15],x=t*o-e*s,C=t*a-i*s,E=t*l-n*s,T=e*a-i*o,M=e*l-n*o,O=i*l-n*a,R=h*v-u*p,$=h*_-f*p,P=h*b-g*p,F=u*_-f*v,B=u*b-g*v,H=f*b-g*_;return x*H-C*B+E*F+T*P-M*$+O*R}function ml(r,t,e){let i=t[0],n=t[1],s=t[2],o=t[3],a=t[4],l=t[5],h=t[6],u=t[7],f=t[8],g=t[9],p=t[10],v=t[11],_=t[12],b=t[13],x=t[14],C=t[15],E=e[0],T=e[1],M=e[2],O=e[3];return r[0]=E*i+T*a+M*f+O*_,r[1]=E*n+T*l+M*g+O*b,r[2]=E*s+T*h+M*p+O*x,r[3]=E*o+T*u+M*v+O*C,E=e[4],T=e[5],M=e[6],O=e[7],r[4]=E*i+T*a+M*f+O*_,r[5]=E*n+T*l+M*g+O*b,r[6]=E*s+T*h+M*p+O*x,r[7]=E*o+T*u+M*v+O*C,E=e[8],T=e[9],M=e[10],O=e[11],r[8]=E*i+T*a+M*f+O*_,r[9]=E*n+T*l+M*g+O*b,r[10]=E*s+T*h+M*p+O*x,r[11]=E*o+T*u+M*v+O*C,E=e[12],T=e[13],M=e[14],O=e[15],r[12]=E*i+T*a+M*f+O*_,r[13]=E*n+T*l+M*g+O*b,r[14]=E*s+T*h+M*p+O*x,r[15]=E*o+T*u+M*v+O*C,r}function If(r,t,e){let i=e[0],n=e[1],s=e[2],o,a,l,h,u,f,g,p,v,_,b,x;return t===r?(r[12]=t[0]*i+t[4]*n+t[8]*s+t[12],r[13]=t[1]*i+t[5]*n+t[9]*s+t[13],r[14]=t[2]*i+t[6]*n+t[10]*s+t[14],r[15]=t[3]*i+t[7]*n+t[11]*s+t[15]):(o=t[0],a=t[1],l=t[2],h=t[3],u=t[4],f=t[5],g=t[6],p=t[7],v=t[8],_=t[9],b=t[10],x=t[11],r[0]=o,r[1]=a,r[2]=l,r[3]=h,r[4]=u,r[5]=f,r[6]=g,r[7]=p,r[8]=v,r[9]=_,r[10]=b,r[11]=x,r[12]=o*i+u*n+v*s+t[12],r[13]=a*i+f*n+_*s+t[13],r[14]=l*i+g*n+b*s+t[14],r[15]=h*i+p*n+x*s+t[15]),r}function Nf(r,t,e){let i=e[0],n=e[1],s=e[2];return r[0]=t[0]*i,r[1]=t[1]*i,r[2]=t[2]*i,r[3]=t[3]*i,r[4]=t[4]*n,r[5]=t[5]*n,r[6]=t[6]*n,r[7]=t[7]*n,r[8]=t[8]*s,r[9]=t[9]*s,r[10]=t[10]*s,r[11]=t[11]*s,r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}function Ff(r,t,e,i){let n=i[0],s=i[1],o=i[2],a=Math.hypot(n,s,o),l,h,u,f,g,p,v,_,b,x,C,E,T,M,O,R,$,P,F,B,H,J,U,G;return Math.abs(a)<Of?null:(a=1/a,n*=a,s*=a,o*=a,l=Math.sin(e),h=Math.cos(e),u=1-h,f=t[0],g=t[1],p=t[2],v=t[3],_=t[4],b=t[5],x=t[6],C=t[7],E=t[8],T=t[9],M=t[10],O=t[11],R=n*n*u+h,$=s*n*u+o*l,P=o*n*u-s*l,F=n*s*u-o*l,B=s*s*u+h,H=o*s*u+n*l,J=n*o*u+s*l,U=s*o*u-n*l,G=o*o*u+h,r[0]=f*R+_*$+E*P,r[1]=g*R+b*$+T*P,r[2]=p*R+x*$+M*P,r[3]=v*R+C*$+O*P,r[4]=f*F+_*B+E*H,r[5]=g*F+b*B+T*H,r[6]=p*F+x*B+M*H,r[7]=v*F+C*B+O*H,r[8]=f*J+_*U+E*G,r[9]=g*J+b*U+T*G,r[10]=p*J+x*U+M*G,r[11]=v*J+C*U+O*G,t!==r&&(r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r)}function Bf(r,t){return r[0]=t[12],r[1]=t[13],r[2]=t[14],r}function cc(r,t){let e=t[0],i=t[1],n=t[2],s=t[4],o=t[5],a=t[6],l=t[8],h=t[9],u=t[10];return r[0]=Math.hypot(e,i,n),r[1]=Math.hypot(s,o,a),r[2]=Math.hypot(l,h,u),r}function Uf(r){let t=r[0],e=r[1],i=r[2],n=r[4],s=r[5],o=r[6],a=r[8],l=r[9],h=r[10];const u=t*t+e*e+i*i,f=n*n+s*s+o*o,g=a*a+l*l+h*h;return Math.sqrt(Math.max(u,f,g))}const Hf=function(){const r=[0,0,0];return function(t,e){let i=r;cc(i,e);let n=1/i[0],s=1/i[1],o=1/i[2],a=e[0]*n,l=e[1]*s,h=e[2]*o,u=e[4]*n,f=e[5]*s,g=e[6]*o,p=e[8]*n,v=e[9]*s,_=e[10]*o,b=a+f+_,x=0;return b>0?(x=Math.sqrt(b+1)*2,t[3]=.25*x,t[0]=(g-v)/x,t[1]=(p-h)/x,t[2]=(l-u)/x):a>f&&a>_?(x=Math.sqrt(1+a-f-_)*2,t[3]=(g-v)/x,t[0]=.25*x,t[1]=(l+u)/x,t[2]=(p+h)/x):f>_?(x=Math.sqrt(1+f-a-_)*2,t[3]=(p-h)/x,t[0]=(l+u)/x,t[1]=.25*x,t[2]=(g+v)/x):(x=Math.sqrt(1+_-a-f)*2,t[3]=(l-u)/x,t[0]=(p+h)/x,t[1]=(g+v)/x,t[2]=.25*x),t}}();function Xf(r,t,e,i){let n=t[0],s=t[1],o=t[2],a=t[3],l=n+n,h=s+s,u=o+o,f=n*l,g=n*h,p=n*u,v=s*h,_=s*u,b=o*u,x=a*l,C=a*h,E=a*u,T=i[0],M=i[1],O=i[2];return r[0]=(1-(v+b))*T,r[1]=(g+E)*T,r[2]=(p-C)*T,r[3]=0,r[4]=(g-E)*M,r[5]=(1-(f+b))*M,r[6]=(_+x)*M,r[7]=0,r[8]=(p+C)*O,r[9]=(_-x)*O,r[10]=(1-(f+v))*O,r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function qf(r,t){let e=t[0],i=t[1],n=t[2],s=t[3],o=e+e,a=i+i,l=n+n,h=e*o,u=i*o,f=i*a,g=n*o,p=n*a,v=n*l,_=s*o,b=s*a,x=s*l;return r[0]=1-f-v,r[1]=u+x,r[2]=g-b,r[3]=0,r[4]=u-x,r[5]=1-h-v,r[6]=p+_,r[7]=0,r[8]=g+b,r[9]=p-_,r[10]=1-h-f,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function Yf(r,t,e,i,n){let s=1/Math.tan(t/2),o=1/(i-n);return r[0]=s/e,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=s,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=(n+i)*o,r[11]=-1,r[12]=0,r[13]=0,r[14]=2*n*i*o,r[15]=0,r}function Vf(r,t,e,i,n,s,o){let a=1/(t-e),l=1/(i-n),h=1/(s-o);return r[0]=-2*a,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=-2*l,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=2*h,r[11]=0,r[12]=(t+e)*a,r[13]=(n+i)*l,r[14]=(o+s)*h,r[15]=1,r}function jf(r,t,e,i){let n=t[0],s=t[1],o=t[2],a=i[0],l=i[1],h=i[2],u=n-e[0],f=s-e[1],g=o-e[2],p=u*u+f*f+g*g;p===0?g=1:(p=1/Math.sqrt(p),u*=p,f*=p,g*=p);let v=l*g-h*f,_=h*u-a*g,b=a*f-l*u;return p=v*v+_*_+b*b,p===0&&(h?a+=1e-6:l?h+=1e-6:l+=1e-6,v=l*g-h*f,_=h*u-a*g,b=a*f-l*u,p=v*v+_*_+b*b),p=1/Math.sqrt(p),v*=p,_*=p,b*=p,r[0]=v,r[1]=_,r[2]=b,r[3]=0,r[4]=f*b-g*_,r[5]=g*v-u*b,r[6]=u*_-f*v,r[7]=0,r[8]=u,r[9]=f,r[10]=g,r[11]=0,r[12]=n,r[13]=s,r[14]=o,r[15]=1,r}class us extends Array{constructor(t=1,e=0,i=0,n=0,s=0,o=1,a=0,l=0,h=0,u=0,f=1,g=0,p=0,v=0,_=0,b=1){return super(t,e,i,n,s,o,a,l,h,u,f,g,p,v,_,b),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(t){this[12]=t}set y(t){this[13]=t}set z(t){this[14]=t}set w(t){this[15]=t}set(t,e,i,n,s,o,a,l,h,u,f,g,p,v,_,b){return t.length?this.copy(t):(Rf(this,t,e,i,n,s,o,a,l,h,u,f,g,p,v,_,b),this)}translate(t,e=this){return If(this,e,t),this}rotate(t,e,i=this){return Ff(this,i,t,e),this}scale(t,e=this){return Nf(this,e,typeof t=="number"?[t,t,t]:t),this}multiply(t,e){return e?ml(this,t,e):ml(this,this,t),this}identity(){return zf(this),this}copy(t){return Df(this,t),this}fromPerspective({fov:t,aspect:e,near:i,far:n}={}){return Yf(this,t,e,i,n),this}fromOrthogonal({left:t,right:e,bottom:i,top:n,near:s,far:o}){return Vf(this,t,e,i,n,s,o),this}fromQuaternion(t){return qf(this,t),this}setPosition(t){return this.x=t[0],this.y=t[1],this.z=t[2],this}inverse(t=this){return Lf(this,t),this}compose(t,e,i){return Xf(this,t,e,i),this}getRotation(t){return Hf(t,this),this}getTranslation(t){return Bf(t,this),this}getScaling(t){return cc(t,this),this}getMaxScaleOnAxis(){return Uf(this)}lookAt(t,e,i){return jf(this,t,e,i),this}determinant(){return $f(this)}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this[3]=t[e+3],this[4]=t[e+4],this[5]=t[e+5],this[6]=t[e+6],this[7]=t[e+7],this[8]=t[e+8],this[9]=t[e+9],this[10]=t[e+10],this[11]=t[e+11],this[12]=t[e+12],this[13]=t[e+13],this[14]=t[e+14],this[15]=t[e+15],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t[e+3]=this[3],t[e+4]=this[4],t[e+5]=this[5],t[e+6]=this[6],t[e+7]=this[7],t[e+8]=this[8],t[e+9]=this[9],t[e+10]=this[10],t[e+11]=this[11],t[e+12]=this[12],t[e+13]=this[13],t[e+14]=this[14],t[e+15]=this[15],t}}function Wf(r,t,e="YXZ"){return e==="XYZ"?(r[1]=Math.asin(Math.min(Math.max(t[8],-1),1)),Math.abs(t[8])<.99999?(r[0]=Math.atan2(-t[9],t[10]),r[2]=Math.atan2(-t[4],t[0])):(r[0]=Math.atan2(t[6],t[5]),r[2]=0)):e==="YXZ"?(r[0]=Math.asin(-Math.min(Math.max(t[9],-1),1)),Math.abs(t[9])<.99999?(r[1]=Math.atan2(t[8],t[10]),r[2]=Math.atan2(t[1],t[5])):(r[1]=Math.atan2(-t[2],t[0]),r[2]=0)):e==="ZXY"?(r[0]=Math.asin(Math.min(Math.max(t[6],-1),1)),Math.abs(t[6])<.99999?(r[1]=Math.atan2(-t[2],t[10]),r[2]=Math.atan2(-t[4],t[5])):(r[1]=0,r[2]=Math.atan2(t[1],t[0]))):e==="ZYX"?(r[1]=Math.asin(-Math.min(Math.max(t[2],-1),1)),Math.abs(t[2])<.99999?(r[0]=Math.atan2(t[6],t[10]),r[2]=Math.atan2(t[1],t[0])):(r[0]=0,r[2]=Math.atan2(-t[4],t[5]))):e==="YZX"?(r[2]=Math.asin(Math.min(Math.max(t[1],-1),1)),Math.abs(t[1])<.99999?(r[0]=Math.atan2(-t[9],t[5]),r[1]=Math.atan2(-t[2],t[0])):(r[0]=0,r[1]=Math.atan2(t[8],t[10]))):e==="XZY"&&(r[2]=Math.asin(-Math.min(Math.max(t[4],-1),1)),Math.abs(t[4])<.99999?(r[0]=Math.atan2(t[6],t[5]),r[1]=Math.atan2(t[8],t[0])):(r[0]=Math.atan2(-t[9],t[10]),r[1]=0)),r}const _l=new us;class Gf extends Array{constructor(t=0,e=t,i=t,n="YXZ"){return super(t,e,i),this.order=n,this.onChange=()=>{},this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this[0]=t,this.onChange()}set y(t){this[1]=t,this.onChange()}set z(t){this[2]=t,this.onChange()}set(t,e=t,i=t){return t.length?this.copy(t):(this[0]=t,this[1]=e,this[2]=i,this.onChange(),this)}copy(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this.onChange(),this}reorder(t){return this.order=t,this.onChange(),this}fromRotationMatrix(t,e=this.order){return Wf(this,t,e),this}fromQuaternion(t,e=this.order){return _l.fromQuaternion(t),this.fromRotationMatrix(_l,e)}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t}}class Zf{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new us,this.worldMatrix=new us,this.matrixAutoUpdate=!0,this.position=new ni,this.quaternion=new Pf,this.scale=new ni(1),this.rotation=new Gf,this.up=new ni(0,1,0),this.rotation.onChange=()=>this.quaternion.fromEuler(this.rotation),this.quaternion.onChange=()=>this.rotation.fromQuaternion(this.quaternion)}setParent(t,e=!0){this.parent&&t!==this.parent&&this.parent.removeChild(this,!1),this.parent=t,e&&t&&t.addChild(this,!1)}addChild(t,e=!0){~this.children.indexOf(t)||this.children.push(t),e&&t.setParent(this,!1)}removeChild(t,e=!0){~this.children.indexOf(t)&&this.children.splice(this.children.indexOf(t),1),e&&t.setParent(null,!1)}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||t)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,t=!0);for(let e=0,i=this.children.length;e<i;e++)this.children[e].updateMatrixWorld(t)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(t){if(!t(this))for(let e=0,i=this.children.length;e<i;e++)this.children[e].traverse(t)}decompose(){this.matrix.getTranslation(this.position),this.matrix.getRotation(this.quaternion),this.matrix.getScaling(this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(t,e=!1){e?this.matrix.lookAt(this.position,t,this.up):this.matrix.lookAt(t,this.position,this.up),this.matrix.getRotation(this.quaternion),this.rotation.fromQuaternion(this.quaternion)}}function Kf(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[4],r[4]=t[5],r[5]=t[6],r[6]=t[8],r[7]=t[9],r[8]=t[10],r}function Qf(r,t){let e=t[0],i=t[1],n=t[2],s=t[3],o=e+e,a=i+i,l=n+n,h=e*o,u=i*o,f=i*a,g=n*o,p=n*a,v=n*l,_=s*o,b=s*a,x=s*l;return r[0]=1-f-v,r[3]=u-x,r[6]=g+b,r[1]=u+x,r[4]=1-h-v,r[7]=p-_,r[2]=g-b,r[5]=p+_,r[8]=1-h-f,r}function Jf(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r}function tg(r,t,e,i,n,s,o,a,l,h){return r[0]=t,r[1]=e,r[2]=i,r[3]=n,r[4]=s,r[5]=o,r[6]=a,r[7]=l,r[8]=h,r}function eg(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=1,r[5]=0,r[6]=0,r[7]=0,r[8]=1,r}function ig(r,t){let e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],f=u*o-a*h,g=-u*s+a*l,p=h*s-o*l,v=e*f+i*g+n*p;return v?(v=1/v,r[0]=f*v,r[1]=(-u*i+n*h)*v,r[2]=(a*i-n*o)*v,r[3]=g*v,r[4]=(u*e-n*l)*v,r[5]=(-a*e+n*s)*v,r[6]=p*v,r[7]=(-h*e+i*l)*v,r[8]=(o*e-i*s)*v,r):null}function vl(r,t,e){let i=t[0],n=t[1],s=t[2],o=t[3],a=t[4],l=t[5],h=t[6],u=t[7],f=t[8],g=e[0],p=e[1],v=e[2],_=e[3],b=e[4],x=e[5],C=e[6],E=e[7],T=e[8];return r[0]=g*i+p*o+v*h,r[1]=g*n+p*a+v*u,r[2]=g*s+p*l+v*f,r[3]=_*i+b*o+x*h,r[4]=_*n+b*a+x*u,r[5]=_*s+b*l+x*f,r[6]=C*i+E*o+T*h,r[7]=C*n+E*a+T*u,r[8]=C*s+E*l+T*f,r}function rg(r,t,e){let i=t[0],n=t[1],s=t[2],o=t[3],a=t[4],l=t[5],h=t[6],u=t[7],f=t[8],g=e[0],p=e[1];return r[0]=i,r[1]=n,r[2]=s,r[3]=o,r[4]=a,r[5]=l,r[6]=g*i+p*o+h,r[7]=g*n+p*a+u,r[8]=g*s+p*l+f,r}function ng(r,t,e){let i=t[0],n=t[1],s=t[2],o=t[3],a=t[4],l=t[5],h=t[6],u=t[7],f=t[8],g=Math.sin(e),p=Math.cos(e);return r[0]=p*i+g*o,r[1]=p*n+g*a,r[2]=p*s+g*l,r[3]=p*o-g*i,r[4]=p*a-g*n,r[5]=p*l-g*s,r[6]=h,r[7]=u,r[8]=f,r}function sg(r,t,e){let i=e[0],n=e[1];return r[0]=i*t[0],r[1]=i*t[1],r[2]=i*t[2],r[3]=n*t[3],r[4]=n*t[4],r[5]=n*t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r}function og(r,t){let e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],f=t[9],g=t[10],p=t[11],v=t[12],_=t[13],b=t[14],x=t[15],C=e*a-i*o,E=e*l-n*o,T=e*h-s*o,M=i*l-n*a,O=i*h-s*a,R=n*h-s*l,$=u*_-f*v,P=u*b-g*v,F=u*x-p*v,B=f*b-g*_,H=f*x-p*_,J=g*x-p*b,U=C*J-E*H+T*B+M*F-O*P+R*$;return U?(U=1/U,r[0]=(a*J-l*H+h*B)*U,r[1]=(l*F-o*J-h*P)*U,r[2]=(o*H-a*F+h*$)*U,r[3]=(n*H-i*J-s*B)*U,r[4]=(e*J-n*F+s*P)*U,r[5]=(i*F-e*H-s*$)*U,r[6]=(_*R-b*O+x*M)*U,r[7]=(b*T-v*R-x*E)*U,r[8]=(v*O-_*T+x*C)*U,r):null}class ag extends Array{constructor(t=1,e=0,i=0,n=0,s=1,o=0,a=0,l=0,h=1){return super(t,e,i,n,s,o,a,l,h),this}set(t,e,i,n,s,o,a,l,h){return t.length?this.copy(t):(tg(this,t,e,i,n,s,o,a,l,h),this)}translate(t,e=this){return rg(this,e,t),this}rotate(t,e=this){return ng(this,e,t),this}scale(t,e=this){return sg(this,e,t),this}multiply(t,e){return e?vl(this,t,e):vl(this,this,t),this}identity(){return eg(this),this}copy(t){return Jf(this,t),this}fromMatrix4(t){return Kf(this,t),this}fromQuaternion(t){return Qf(this,t),this}fromBasis(t,e,i){return this.set(t[0],t[1],t[2],e[0],e[1],e[2],i[0],i[1],i[2]),this}inverse(t=this){return ig(this,t),this}getNormalMatrix(t){return og(this,t),this}}let lg=0;class ha extends Zf{constructor(t,{geometry:e,program:i,mode:n=t.TRIANGLES,frustumCulled:s=!0,renderOrder:o=0}={}){super(),t.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=t,this.id=lg++,this.geometry=e,this.program=i,this.mode=n,this.frustumCulled=s,this.renderOrder=o,this.modelViewMatrix=new us,this.normalMatrix=new ag,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(t){return this.beforeRenderCallbacks.push(t),this}onAfterRender(t){return this.afterRenderCallbacks.push(t),this}draw({camera:t}={}){this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:t})),t&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=t.projectionMatrix,this.program.uniforms.cameraPosition.value=t.worldPosition,this.program.uniforms.viewMatrix.value=t.viewMatrix,this.modelViewMatrix.multiply(t.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix);let e=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:e}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:t}))}}const yl=new Uint8Array(4);function bl(r){return(r&r-1)===0}let hg=1;class Tr{constructor(t,{image:e,target:i=t.TEXTURE_2D,type:n=t.UNSIGNED_BYTE,format:s=t.RGBA,internalFormat:o=s,wrapS:a=t.CLAMP_TO_EDGE,wrapT:l=t.CLAMP_TO_EDGE,generateMipmaps:h=!0,minFilter:u=h?t.NEAREST_MIPMAP_LINEAR:t.LINEAR,magFilter:f=t.LINEAR,premultiplyAlpha:g=!1,unpackAlignment:p=4,flipY:v=i==t.TEXTURE_2D,anisotropy:_=0,level:b=0,width:x,height:C=x}={}){this.gl=t,this.id=hg++,this.image=e,this.target=i,this.type=n,this.format=s,this.internalFormat=o,this.minFilter=u,this.magFilter=f,this.wrapS=a,this.wrapT=l,this.generateMipmaps=h,this.premultiplyAlpha=g,this.unpackAlignment=p,this.flipY=v,this.anisotropy=Math.min(_,this.gl.renderer.parameters.maxAnisotropy),this.level=b,this.width=x,this.height=C,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(t=0){const e=!(this.image===this.store.image&&!this.needsUpdate);if((e||this.glState.textureUnits[t]!==this.id)&&(this.gl.renderer.activeTexture(t),this.bind()),!!e){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,this.level,this.internalFormat,this.format,this.type,this.image[i]);else if(ArrayBuffer.isView(this.image))this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let i=0;i<this.image.length;i++)this.gl.compressedTexImage2D(this.target,i,this.internalFormat,this.image[i].width,this.image[i].height,0,this.image[i].data);else this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!bl(this.image.width)||!bl(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,yl);else this.width?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,yl);this.store.image=this.image}}}class fs{constructor(t,{width:e=t.canvas.width,height:i=t.canvas.height,target:n=t.FRAMEBUFFER,color:s=1,depth:o=!0,stencil:a=!1,depthTexture:l=!1,wrapS:h=t.CLAMP_TO_EDGE,wrapT:u=t.CLAMP_TO_EDGE,minFilter:f=t.LINEAR,magFilter:g=f,type:p=t.UNSIGNED_BYTE,format:v=t.RGBA,internalFormat:_=v,unpackAlignment:b,premultiplyAlpha:x}={}){this.gl=t,this.width=e,this.height=i,this.depth=o,this.buffer=this.gl.createFramebuffer(),this.target=n,this.gl.bindFramebuffer(this.target,this.buffer),this.textures=[];const C=[];for(let E=0;E<s;E++)this.textures.push(new Tr(t,{width:e,height:i,wrapS:h,wrapT:u,minFilter:f,magFilter:g,type:p,format:v,internalFormat:_,unpackAlignment:b,premultiplyAlpha:x,flipY:!1,generateMipmaps:!1})),this.textures[E].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+E,this.gl.TEXTURE_2D,this.textures[E].texture,0),C.push(this.gl.COLOR_ATTACHMENT0+E);C.length>1&&this.gl.renderer.drawBuffers(C),this.texture=this.textures[0],l&&(this.gl.renderer.isWebgl2||this.gl.renderer.getExtension("WEBGL_depth_texture"))?(this.depthTexture=new Tr(t,{width:e,height:i,minFilter:this.gl.NEAREST,magFilter:this.gl.NEAREST,format:this.gl.DEPTH_COMPONENT,internalFormat:t.renderer.isWebgl2?this.gl.DEPTH_COMPONENT16:this.gl.DEPTH_COMPONENT,type:this.gl.UNSIGNED_INT}),this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(o&&!a&&(this.depthBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,e,i),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,this.depthBuffer)),a&&!o&&(this.stencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,e,i),this.gl.framebufferRenderbuffer(this.target,this.gl.STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.stencilBuffer)),o&&a&&(this.depthStencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,e,i),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.depthStencilBuffer))),this.gl.bindFramebuffer(this.target,null)}setSize(t,e){if(!(this.width===t&&this.height===e)){this.width=t,this.height=e,this.gl.bindFramebuffer(this.target,this.buffer);for(let i=0;i<this.textures.length;i++)this.textures[i].width=t,this.textures[i].height=e,this.textures[i].needsUpdate=!0,this.textures[i].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+i,this.gl.TEXTURE_2D,this.textures[i].texture,0);this.depthTexture?(this.depthTexture.width=t,this.depthTexture.height=e,this.depthTexture.needsUpdate=!0,this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(this.depthBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,t,e)),this.stencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,t,e)),this.depthStencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,t,e))),this.gl.bindFramebuffer(this.target,null)}}}function cg(r,t){return r[0]=t[0],r[1]=t[1],r}function dg(r,t,e){return r[0]=t,r[1]=e,r}function wl(r,t,e){return r[0]=t[0]+e[0],r[1]=t[1]+e[1],r}function xl(r,t,e){return r[0]=t[0]-e[0],r[1]=t[1]-e[1],r}function ug(r,t,e){return r[0]=t[0]*e[0],r[1]=t[1]*e[1],r}function fg(r,t,e){return r[0]=t[0]/e[0],r[1]=t[1]/e[1],r}function Ks(r,t,e){return r[0]=t[0]*e,r[1]=t[1]*e,r}function gg(r,t){var e=t[0]-r[0],i=t[1]-r[1];return Math.sqrt(e*e+i*i)}function pg(r,t){var e=t[0]-r[0],i=t[1]-r[1];return e*e+i*i}function Sl(r){var t=r[0],e=r[1];return Math.sqrt(t*t+e*e)}function mg(r){var t=r[0],e=r[1];return t*t+e*e}function _g(r,t){return r[0]=-t[0],r[1]=-t[1],r}function vg(r,t){return r[0]=1/t[0],r[1]=1/t[1],r}function yg(r,t){var e=t[0],i=t[1],n=e*e+i*i;return n>0&&(n=1/Math.sqrt(n)),r[0]=t[0]*n,r[1]=t[1]*n,r}function bg(r,t){return r[0]*t[0]+r[1]*t[1]}function El(r,t){return r[0]*t[1]-r[1]*t[0]}function wg(r,t,e,i){var n=t[0],s=t[1];return r[0]=n+i*(e[0]-n),r[1]=s+i*(e[1]-s),r}function xg(r,t,e){var i=t[0],n=t[1];return r[0]=e[0]*i+e[3]*n+e[6],r[1]=e[1]*i+e[4]*n+e[7],r}function Sg(r,t,e){let i=t[0],n=t[1];return r[0]=e[0]*i+e[4]*n+e[12],r[1]=e[1]*i+e[5]*n+e[13],r}function Eg(r,t){return r[0]===t[0]&&r[1]===t[1]}class Ii extends Array{constructor(t=0,e=t){return super(t,e),this}get x(){return this[0]}get y(){return this[1]}set x(t){this[0]=t}set y(t){this[1]=t}set(t,e=t){return t.length?this.copy(t):(dg(this,t,e),this)}copy(t){return cg(this,t),this}add(t,e){return e?wl(this,t,e):wl(this,this,t),this}sub(t,e){return e?xl(this,t,e):xl(this,this,t),this}multiply(t){return t.length?ug(this,this,t):Ks(this,this,t),this}divide(t){return t.length?fg(this,this,t):Ks(this,this,1/t),this}inverse(t=this){return vg(this,t),this}len(){return Sl(this)}distance(t){return t?gg(this,t):Sl(this)}squaredLen(){return this.squaredDistance()}squaredDistance(t){return t?pg(this,t):mg(this)}negate(t=this){return _g(this,t),this}cross(t,e){return e?El(t,e):El(this,t)}scale(t){return Ks(this,this,t),this}normalize(){return yg(this,this),this}dot(t){return bg(this,t)}equals(t){return Eg(this,t)}applyMatrix3(t){return xg(this,this,t),this}applyMatrix4(t){return Sg(this,this,t),this}lerp(t,e){return wg(this,this,t,e),this}clone(){return new Ii(this[0],this[1])}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t}}class Tl extends Array{constructor(t=0,e=t,i=t,n=t){return super(t,e,i,n),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(t){this[0]=t}set y(t){this[1]=t}set z(t){this[2]=t}set w(t){this[3]=t}set(t,e,i,n){return t.length?this.copy(t):(lc(this,t,e,i,n),this)}copy(t){return ac(this,t),this}normalize(){return hc(this,this),this}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this[3]=t[e+3],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t[e+3]=this[3],t}}class dc extends oc{constructor(t,{attributes:e={}}={}){Object.assign(e,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(t,e)}}class Tg{constructor(t,{width:e,height:i,dpr:n,wrapS:s=t.CLAMP_TO_EDGE,wrapT:o=t.CLAMP_TO_EDGE,minFilter:a=t.LINEAR,magFilter:l=t.LINEAR,geometry:h=new dc(t),targetOnly:u=null}={}){this.gl=t,this.options={wrapS:s,wrapT:o,minFilter:a,magFilter:l},this.passes=[],this.geometry=h,this.uniform={value:null},this.targetOnly=u;const f=this.fbo={read:null,write:null,swap:()=>{let g=f.read;f.read=f.write,f.write=g}};this.resize({width:e,height:i,dpr:n})}addPass({vertex:t=Ag,fragment:e=Cg,uniforms:i={},textureUniform:n="tMap",enabled:s=!0}={}){i[n]={value:this.fbo.read.texture};const o=new la(this.gl,{vertex:t,fragment:e,uniforms:i}),l={mesh:new ha(this.gl,{geometry:this.geometry,program:o}),program:o,uniforms:i,enabled:s,textureUniform:n};return this.passes.push(l),l}resize({width:t,height:e,dpr:i}={}){i&&(this.dpr=i),t&&(this.width=t,this.height=e||t),i=this.dpr||this.gl.renderer.dpr,t=Math.floor((this.width||this.gl.renderer.width)*i),e=Math.floor((this.height||this.gl.renderer.height)*i),this.options.width=t,this.options.height=e,this.fbo.read=new fs(this.gl,this.options),this.fbo.write=new fs(this.gl,this.options)}render({scene:t,camera:e,texture:i,target:n=null,update:s=!0,sort:o=!0,frustumCull:a=!0}){const l=this.passes.filter(h=>h.enabled);i||(this.gl.renderer.render({scene:t,camera:e,target:l.length||!n&&this.targetOnly?this.fbo.write:n,update:s,sort:o,frustumCull:a}),this.fbo.swap()),l.forEach((h,u)=>{h.mesh.program.uniforms[h.textureUniform].value=!u&&i?i:this.fbo.read.texture,this.gl.renderer.render({scene:h.mesh,target:u===l.length-1&&(n||!this.targetOnly)?n:this.fbo.write,clear:!0}),this.fbo.swap()}),this.uniform.value=this.fbo.read.texture}}const Ag=`
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`,Cg=`
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`;class kg{constructor(t,{size:e=128,falloff:i=.3,alpha:n=1,dissipation:s=.98,type:o}={}){const a=this;this.gl=t,this.uniform={value:null},this.mask={read:null,write:null,swap:()=>{let u=a.mask.read;a.mask.read=a.mask.write,a.mask.write=u,a.uniform.value=a.mask.read.texture}},l(),this.aspect=1,this.mouse=new Ii,this.velocity=new Ii,this.mesh=h();function l(){o||(o=t.HALF_FLOAT||t.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES);let u=(()=>t.renderer.isWebgl2||t.renderer.extensions[`OES_texture_${o===t.FLOAT?"":"half_"}float_linear`]?t.LINEAR:t.NEAREST)();const f={width:e,height:e,type:o,format:t.RGBA,internalFormat:t.renderer.isWebgl2?o===t.FLOAT?t.RGBA32F:t.RGBA16F:t.RGBA,minFilter:u,depth:!1};a.mask.read=new fs(t,f),a.mask.write=new fs(t,f),a.mask.swap()}function h(){return new ha(t,{geometry:new dc(t),program:new la(t,{vertex:Mg,fragment:Pg,uniforms:{tMap:a.uniform,uFalloff:{value:i*.5},uAlpha:{value:n},uDissipation:{value:s},uAspect:{value:1},uMouse:{value:a.mouse},uVelocity:{value:a.velocity}},depthTest:!1})})}}update(){this.mesh.program.uniforms.uAspect.value=this.aspect,this.gl.renderer.render({scene:this.mesh,target:this.mask.write,clear:!1}),this.mask.swap()}}const Mg=`
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`,Pg=`
    precision highp float;

    uniform sampler2D tMap;

    uniform float uFalloff;
    uniform float uAlpha;
    uniform float uDissipation;
    
    uniform float uAspect;
    uniform vec2 uMouse;
    uniform vec2 uVelocity;

    varying vec2 vUv;

    void main() {
        vec4 color = texture2D(tMap, vUv) * uDissipation;

        vec2 cursor = vUv - uMouse;
        cursor.x *= uAspect;

        vec3 stamp = vec3(uVelocity * vec2(1, -1), 1.0 - pow(1.0 - min(1.0, length(uVelocity)), 3.0));
        float falloff = smoothstep(uFalloff, 0.0, length(cursor)) * uAlpha;

        color.rgb = mix(color.rgb, stamp, vec3(falloff));

        gl_FragColor = color;
    }
`;var Og=Object.defineProperty,Dg=Object.getOwnPropertyDescriptor,xs=(r,t,e,i)=>{for(var n=i>1?void 0:i?Dg(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Og(t,e,n),n};let Yr=class extends Jt{constructor(){super(),this.theme="",this.darkImages=["/images/Hero-Paint-1-Dark.jpg","/images/Hero-Paint-2-Dark.jpg"],this.lightImages=["/images/Hero-Paint-1-Light.jpg","/images/Hero-Paint-2-Light.jpg"],window.addEventListener("appLoaded",()=>{const r=`
        attribute vec2 uv;
        attribute vec2 position;
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = vec4(position, 0, 1);
        }
      `,t=`
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
      `,e=`
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
      `,i={start1:"/images/Hero-Paint-1-Dark.jpg",end1:"/images/Hero-Paint-2-Dark.jpg",start2:"/images/Hero-Paint-1-Light.jpg",end2:"/images/Hero-Paint-2-Light.jpg",width:1600,height:1080},n=this,s=new gf({dpr:2}),o=s.gl,a=new Tg(o);n.innerHTML="",n.appendChild(o.canvas);let l=1;const h=new Ii(-1),u=new Ii;let f;function g(){let X,ct;const k=i.height/i.width;window.innerHeight/window.innerWidth<k?(X=1,ct=window.innerHeight/window.innerWidth/k):(X=window.innerWidth/window.innerHeight*k,ct=1),B.program.uniforms.res.value=new Tl(window.innerWidth,window.innerHeight,X,ct),s.setSize(window.innerWidth,window.innerHeight),l=window.innerWidth/window.innerHeight}const p=new kg(o,{size:8,falloff:.25,dissipation:.95,alpha:.68}),v=new oc(o,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),_=new Tr(o,{minFilter:o.LINEAR,magFilter:o.LINEAR}),b=new Tr(o,{minFilter:o.LINEAR,magFilter:o.LINEAR}),x=new Tr(o,{minFilter:o.LINEAR,magFilter:o.LINEAR}),C=new Tr(o,{minFilter:o.LINEAR,magFilter:o.LINEAR}),E=new Image,T=new Image,M=new Image,O=new Image;E.onload=()=>_.image=E,E.crossOrigin="Anonymous",E.src=i.start1,T.onload=()=>b.image=T,T.crossOrigin="Anonymous",T.src=i.end1,M.onload=()=>x.image=M,M.crossOrigin="Anonymous",M.src=i.start2,O.onload=()=>C.image=O,O.crossOrigin="Anonymous",O.src=i.end2;let R,$;const P=i.height/i.width;window.innerHeight/window.innerWidth<P?(R=1,$=window.innerHeight/window.innerWidth/P):(R=window.innerWidth/window.innerHeight*P,$=1);const F=new la(o,{vertex:r,fragment:t,uniforms:{uTime:{value:0},tPaintStart:{value:_},tPaintEnd:{value:b},res:{value:new Tl(window.innerWidth,window.innerHeight,R,$)},img:{value:new Ii(i.height,i.width)},tFlow:p.uniform}});a.addPass({textureUniform:e,uniforms:{}});const B=new ha(o,{geometry:v,program:F});window.addEventListener("resize",g,!1),g(),"ontouchstart"in window?(window.addEventListener("touchstart",G,!1),window.addEventListener("touchmove",G,{passive:!1})):window.addEventListener("mousemove",G,!1);let J;const U=new Ii;function G(X){if(X.target.tagName.toLowerCase()==="canvas"||X.target.hasAttribute("data-scrambler")){X.preventDefault(),X.changedTouches&&X.changedTouches.length&&(X.x=X.changedTouches[0].pageX,X.y=X.changedTouches[0].pageY),X.x===void 0&&(X.x=X.pageX,X.y=X.pageY),h.set(X.x/o.renderer.width,1-X.y/o.renderer.height),J||(J=performance.now(),U.set(X.x,X.y));const ct=X.x-U.x,k=X.y-U.y;U.set(X.x,X.y);let At=performance.now(),Nt=Math.max(10.4,At-J);J=At,u.x=ct/Nt,u.y=k/Nt,f=!0}}requestAnimationFrame(ot);const Y=()=>{document.body.dataset.theme==="light"?(B.program.uniforms.tPaintStart.value=x,B.program.uniforms.tPaintEnd.value=C):(B.program.uniforms.tPaintStart.value=_,B.program.uniforms.tPaintEnd.value=b)};setTimeout(Y,200),window.addEventListener("themeChange",Y);function ot(X){requestAnimationFrame(ot),f||(h.set(-1),u.set(0)),f=!1,p.aspect=l,p.mouse.copy(h),p.velocity.lerp(u,u.len()?.15:.1),p.update(),F.uniforms.uTime.value=X*.01,s.render({scene:B})}})}render(){return Tt`
      <slot></slot>
    `}};Yr.styles=ai`
    :host {
      display: block;
      position: absolute;
    }
  `;xs([rt({type:String})],Yr.prototype,"theme",2);xs([rt({type:Array})],Yr.prototype,"darkImages",2);xs([rt({type:Array})],Yr.prototype,"lightImages",2);Yr=xs([Ee("c-canvas-main")],Yr);var Rg=Object.defineProperty,zg=Object.getOwnPropertyDescriptor,Ss=(r,t,e,i)=>{for(var n=i>1?void 0:i?zg(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Rg(t,e,n),n};let An=class extends Jt{constructor(){super(...arguments),this.styles=`
    .c-gallery-image__image {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  `,this.gallery="",this.src="",this.alt=""}createRenderRoot(){return this}render(){return Tt`
      <style>
        ${this.styles}
      </style>
      <a
        class="c-gallery-image__image"
        data-glightbox=""
        data-gallery=${this.gallery}
        href=${this.src}
      >
        <img
          class="c-gallery-image__image"
          src=${this.src}
          alt=${this.alt}
        >
      </a>
    `}};Ss([rt({type:String})],An.prototype,"gallery",2);Ss([rt({type:String})],An.prototype,"src",2);Ss([rt({type:String})],An.prototype,"alt",2);An=Ss([Ee("c-gallery-image")],An);var Lg=Object.defineProperty,$g=Object.getOwnPropertyDescriptor,Yi=(r,t,e,i)=>{for(var n=i>1?void 0:i?$g(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Lg(t,e,n),n};let _i=class extends Jt{constructor(){super(...arguments),this.glitch="1",this.src="",this.width="",this.height="",this.active=!1,this.aspectRatio=1,this.wrapper={}}connectedCallback(){super.connectedCallback();const r=this.hasAttribute("width"),t=this.hasAttribute("height"),e=r&&t;if(this.classList.add("c-glitch-image--style-"+this.glitch),e){const i=parseInt(this.width),n=parseInt(this.height);this.aspectRatio=i/n}this.style.setProperty("--glitch-aspect-ratio",this.aspectRatio.toString()),this.style.setProperty("--glitch-image",'url("'+this.src+'")')}render(){return Tt`

      <div
        class="c-glitch-image__inner ${this.active?"is-glitching":""}"
      >
        <div
          class="c-glitch-image__image ${this.active?"is-glitching":""}"
        >
        </div>
        <div
          class="c-glitch-image__image ${this.active?"is-glitching":""}"
        >
        </div>
        <div
          class="c-glitch-image__image ${this.active?"is-glitching":""}"
        >
        </div>
        <div
          class="c-glitch-image__image ${this.active?"is-glitching":""}"
        >
        </div>
        <div
          class="c-glitch-image__image ${this.active?"is-glitching":""}"
        >
        </div>
      </div>
    `}};_i.styles=ai`
      :host  {
        --glitch-image-height: 100%;
        --glitch-image-width: 100%;

        align-items: center;
        display: grid;
        max-width: 100vw;
        min-height: 1px;
        width: 100%;
      }

      :host(:hover) {
        filter: url('#animate');
      }


      :host(.c-glitch-image--style-1) {
        --glitch-image-gap-horizontal: 0px;
        --glitch-image-gap-vertical: 0px;
        --glitch-image-time-anim: 2.25s;
        --glitch-image-blend-mode-1: none;
        --glitch-image-blend-mode-2: luminosity;
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
        --glitch-image-gap-horizontal: 0px;
        --glitch-image-gap-vertical: 0px;
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
        --glitch-image-gap-horizontal: 0px;
        --glitch-image-gap-vertical: 0px;
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
        --glitch-image-gap-horizontal: 0px;
        --glitch-image-gap-vertical: 0px;
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
        --glitch-image-gap-horizontal: 0px;
        --glitch-image-gap-vertical: 0px;
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
  `;Yi([rt({type:String})],_i.prototype,"glitch",2);Yi([rt({type:String})],_i.prototype,"src",2);Yi([rt({type:String})],_i.prototype,"width",2);Yi([rt({type:String})],_i.prototype,"height",2);Yi([rt({type:Boolean})],_i.prototype,"active",2);Yi([rt({type:Number})],_i.prototype,"aspectRatio",2);Yi([rt({type:Object})],_i.prototype,"wrapper",2);_i=Yi([Ee("c-glitch-image")],_i);var Ig=Object.defineProperty,Ng=Object.getOwnPropertyDescriptor,uc=(r,t,e,i)=>{for(var n=i>1?void 0:i?Ng(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Ig(t,e,n),n};let gs=class extends Jt{constructor(){super(...arguments),this.theme=document.body.dataset.theme}firstUpdated(){this._taglineSetup(),this._nameStylizedSetup(),this._transitionIn(),this._scrollSetup(),this.addEventListener("themeChange",this.render)}_scrollSetup(){const r=this.shadowRoot&&this.shadowRoot.querySelector(".c-hero__upper");le.timeline({scrollTrigger:{scroller:document.body,trigger:r,start:"0%",end:"+=150%",scrub:!0},onComplete:()=>{}}).fromTo(this.shadowRoot&&this.shadowRoot.querySelectorAll(".js-hero-me"),{backgroundSize:"100% auto"},{backgroundSize:"160% auto"},0)}_transitionIn(){let r=le.timeline();const t=this.shadowRoot&&this.shadowRoot.querySelector(".c-hero__lower"),e=this.shadowRoot&&this.shadowRoot.querySelector(".c-hero__tagline");r.from(t,{height:0,minHeight:0,opacity:0,duration:1,delay:1.85,onComplete:()=>{t&&(t.style.height=""),t&&(t.style.minHeight="")}}),r.from(e,{opacity:0,duration:2,delay:1.75},0),r.play()}_taglineSetup(){const r=this.querySelector("[slot=tagline]");let t;if(r){t=r.innerHTML.replaceAll("  ","").replaceAll(`
`,"");const e=t.split("<br>"),i=e.map((s,o)=>{const a="<span data-scrambler>"+s+"</span>";return e.length-1===o?a:a+"<br>"}).join("");let n;this.shadowRoot&&(n=[this.shadowRoot.querySelector(".c-hero__tagline-accent-1"),this.shadowRoot.querySelector(".c-hero__tagline-accent-2"),this.shadowRoot.querySelector(".c-hero__tagline-accent-3")]),r.innerHTML=i,n&&n.map(s=>{s&&(s.innerHTML=t)})}}_nameStylizedSetup(){let r=this.querySelector('[slot="name-stylized"]');const t=r&&r.innerHTML.toString().replaceAll(" ","").replaceAll(`
`,"").split(""),e=this.shadowRoot&&this.shadowRoot.querySelector(".c-hero__name-stylized-inner");t&&e&&(e.innerHTML=t.map(i=>'<div class="c-hero__name-stylized-letter">'+i+"</div>").join(""))}render(){return Tt`
      <div class="c-hero__upper">
        <slot name="paint">
        </slot>
        <div class="c-hero__tagline">
          <div class="c-hero__tagline-main">
            <slot name="tagline"></slot>
          </div>
          <div class="c-hero__tagline-accent-1"></div>
          <div class="c-hero__tagline-accent-2"></div>
          <div class="c-hero__tagline-accent-3"></div>
        </div>
        <div class="c-hero__name">David B. Waters</div>
        <div class="c-hero__location">Oakland, CA</div>
      </div>
      <div class="c-hero__lower">
        <div class="
          c-hero__me js-hero-me
        ">
          <div class="c-hero__me-dark js-hero-me">
          </div>
          <div class="c-hero__me-light js-hero-me">
          </div>
        </div>
        <div class="
          c-hero__name-stylized
        ">
          <div class="
            c-hero__name-stylized-inner
          "></div>
        </div>
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

      <svg
        class='u-morphing-animation'
        style="display: none;"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve"
        x="0px" y="0px"
        viewBox="0 0 200 120"
        overflow="scroll"
      >
        <!-- SVG Filter -->
        <filter id="animate" width="150%" height="150%">
          <!-- Generate Noise - fractalNoise/turbulent -->
          <feTurbulence type="fractalNoise" seed="77"
                        numOctaves="1" baseFrequency="0.01" />
          <!-- Cycle through Hue - Hue wheel allows for seamless loop  -->
          <feColorMatrix type="hueRotate" values="0">
            <animate attributeName="values"
                    values="0;360" dur="3s" repeatCount="indefinite" />
          </feColorMatrix>
          <!-- Extract alpha / filter colors -->
          <feColorMatrix type="matrix"
                        values="1 0 0 0 0
                                0 1 0 0 0
                                0 0 1 0 0
                                0 0 0 0 1" />
          <!-- Optional Filters -->
          <!-- <feMorphology operator="dilate" radius="1" /> -->
          <!-- <feMorphology operator="erode" radius="1" /> -->
          <feGaussianBlur stdDeviation="0.5" />
          <!-- Apply Displacement Map -->
          <feDisplacementMap in="SourceGraphic" scale="6"
                            xChannelSelector="R", yChannelSelector="B" />
          <!-- Blending with Original -->
          <!-- <feBlend mode="soft-light" in2="SourceGraphic"/> -->
          <!-- <feComposite operator="in" in2="SourceGraphic"/> -->
        </filter>
        <!-- Object to be filtered -->
        <circle filter="url(#animate)" fill="#202020"
                cx="100" cy="60" r="50" />
        <!-- <rect filter="url(#animate)" fill="#202020"
                  x="50" y="10" width="100" height="100" /> -->
      </svg>
    `}};gs.styles=ai`
    * {
      box-sizing: border-box;
    }

    :host {
      --hero-image-me-dark: url('/images/Me-Dark.jpg');
      --hero-image-me-light: url('/images/Me-Light.jpg');
      --vw: 1vw;

      background-color: var(--color-bg);
      display: grid;
      grid-template-rows: 4fr auto 4.5rem;
      height: 100%;
      height: var(--doc-height);
      max-height: 100vh;
      min-height: 25rem;
      overflow: hidden;
      z-index: 2;
    }

    @media (min-width: 35em) {
      :host {
        grid-template-rows: 4fr auto 4.5rem;
        min-height: 25rem;
      }
    }

    @media (min-width: 55em) {
      :host {
        grid-template-rows: 2.6fr auto 4.5rem;
      }
    }

    @media (min-width: 75em) {
      :host {
        grid-template-rows: 2.25fr auto 4.5rem;
        min-height: 35rem;
      }
    }

    .c-hero__upper {
      align-content: center;
      border-bottom: solid 1px var(--color-accent);
      display: grid;
      grid-template-columns: 1fr;
      justify-content: center;
      min-height:40vh;
      overflow: hidden;
      padding: 1.25rem;
      position: relative;
    }


    @media (min-width: 35em) {

      .c-hero__upper {
        grid-template-columns: auto;
        min-height:0vh;
      }

    }

    .c-hero__upper::after {
      backface-visibility: hidden;
      background-image: linear-gradient(
          0deg,
          var(--color-semi-transparent-overlay) 000%,
          var(--color-semi-transparent-overlay) 050%,
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

    ::slotted([slot='paint']) {
      backface-visibility: hidden;
      background-position: top left;
      background-size: cover;
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      transition: all 0.25s;
      width: 100%;
    }

    .c-hero__tagline,
    .c-hero__name,
    .c-hero__location {
      position: relative;
      z-index: 1;
    }

    .c-hero__tagline {
      filter: url('#animate');
      font-family: var(--font-display), sans-serif;
      font-weight: var(--font-display-weight);
      font-size: clamp(0.6rem, 4.05 * var(--vw), 3.5rem);
      line-height: 1.2;
      min-height: 0vw;
      max-width: calc(100vw - 3rem);
      pointer-events: none;
      text-transform: uppercase;
      width: 100%
    }

    @media (min-width: 35em) {
      .c-hero__tagline {
        width: auto;
      }
    }

    @media (min-height: 35em) {

      .c-hero__tagline {
        line-height: 1.25;
        margin-top: 1.5rem;
        max-width: 100vw;
        white-space: nowrap;
      }

    }

    ::slotted([slot='tagline']) {
      font-family: var(--font-display), sans-serif !important;
      font-weight: var(--font-display-weight) !important;
      font-size: clamp(0.6rem, 4.05 * var(--vw), 3.5rem) !important;
      line-height: 1.2 !important;
      margin: 0 !important;
    }

    @media (min-height: 35em) {

      ::slotted([slot='tagline']) {
        line-height: 1.25 !important;
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
      pointer-events: none;
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
      font-size: 0.5rem;
      font-weight: var(--font-main-regular-weight);
      height: 0.6rem;
      letter-spacing: 0.1em;
      line-height: 1;
      padding-bottom: 1.25rem;
      position: absolute;
      text-transform: uppercase;
    }

    @media (min-width: 25em) {
      .c-hero__name,
      .c-hero__location {
        font-size: 0.6rem;
      }
    }

    @media (min-width: 45em) and (min-height: 30em) {
      .c-hero__name,
      .c-hero__location {
        font-size: 0.7rem;
        height: 0.7rem;
        padding-bottom: 0;
        padding-left: 1rem;
        padding-right: 1rem;
        width: 40vh;
      }
    }

    .c-hero__name {
      text-align: right;
      transform-origin: top left;
      padding-left: 1.5rem;
    }

    @media (min-width: 45em) and (min-height: 30em) {
      .c-hero__name {
        left: 1.5rem;
        text-align: right;
        transform: rotate(90deg) translateY(-0.7rem)
          translateX(-100%);
        transform-origin: top left;
      }
    }

    .c-hero__location {
      right: 0;
      text-align: left;
      transform-origin: top right;
      padding-right: 1.5rem;
    }

    @media (min-width: 45em) and (min-height: 30em) {
      .c-hero__location {
        right: 1.5rem;
        text-align: left;
        transform: rotate(-90deg) translateY(-0.7rem)
          translateX(100%);
        transform-origin: top right;
      }
    }

    .c-hero__lower {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 5fr 4fr;
      min-height: calc(40vh - 2.25rem);
      overflow: hidden;
    }


    @media (min-width: 35em) {
      .c-hero__lower {
        min-height: calc(50vh - 2.25rem);
      }
    }

    @media (min-width: 55em) {
      .c-hero__lower {
        grid-template-columns: 1fr 1fr 2fr;
        grid-template-rows: auto;
        min-height: 28vh;
      }
    }

    @media (min-width: 75em) {
      .c-hero__lower {
        grid-template-columns: 3fr 2fr 5fr;
        min-height: 30vh;
      }
    }

    .c-hero__me,
    .c-hero__me-dark,
    .c-hero__me-light {
      background-color: rgba(0,0,0,0.10);
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
    }

    .c-hero__me {
      display: grid;
      grid-template-rows: 1fr;
      overflow: hidden;
      position: relative;
    }


    .c-hero__me-dark {
      background-image: url('/images/Me-Dark.jpg');
      background-size: cover;
      filter: hue-rotate(-2deg) url('#animate');;
      grid-column: 1;
      grid-row: 1;
      height: 100%;
      opacity: var(--theme-dark-opacity);
      transform: scale(1.025);
      width: 100%;
    }

    .c-hero__me-light {
      background-blend-mode: luminosity;
      background-color: var(--color-bg-primary);
      background-image: url('/images/Me-Light.jpg');
      filter: url('#animate');
      grid-column: 1;
      grid-row: 1;
      height: 100%;
      opacity: var(--theme-light-opacity);
      transform: scale(1.025);
      width: 100%;
    }

    .c-hero__name-stylized {
      border-left: solid 1px var(--color-accent);
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      height: 100%;
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

    .c-hero__name-stylized-inner {

      background-image: linear-gradient(
        -45deg,
        var(--color-semi-transparent) 0%,
        var(--color-semi-transparent) 12.5%,
        transparent 12.51%,
        transparent 37.49%,
        var(--color-semi-transparent) 37.5%,
        var(--color-semi-transparent) 62.5%,
        transparent 62.51%,
        transparent 87.49%,
        var(--color-semi-transparent) 87.5%,
        var(--color-semi-transparent) 100%
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
    }

    .c-hero__name-stylized-letter {
      font-family: var(--font-accent), sans-serif;
      font-size: 0.6rem;
      font-weight: var(--font-accent-weight);
      margin-bottom: auto;
      margin-left: auto;
      margin-right: auto;
      margin-top: auto;
    }

    @media (min-width: 25em) {
      .c-hero__name-stylized-letter {
        font-size: 0.8rem;
      }
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
      filter: url('#animate');
      grid-column-end: 3;
      grid-column-start: 1;
      grid-template-columns: 1fr;
      justify-content: center;
      line-height: 1;
      padding: 1.25rem 2.5rem 1.25rem 1.5rem;
    }

    @media (min-width: 35em) {
      .c-hero__heading {
        padding: 0px calc(9.5vw + 0.5rem);
        justify-content: stretch;
      }
    }

    @media (min-width: 55em) {
      .c-hero__heading {
        border-top: none;
        grid-column-end: 4;
        grid-column-start: 3;
        padding: 0 4rem 0 3rem;
      }

    }

    ::slotted([slot='heading']) {
      font-family: var(--font-heading), sans-serif !important;
      font-weight: var(--font-heading-weight) !important;
      font-size: 1.5rem !important;
      font-size: clamp(0.8rem, 2vw + 0.35rem, 2.2rem) !important;
      margin: 0 !important;;
    }

    .c-hero__footer {
      border-top: solid 1px var(--color-accent);
      display: grid;
      grid-template-columns:
        3rem
        auto
        auto
        3rem;
      grid-template-rows: 1fr 0.5rem;
      overflow: hidden;
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
      column-gap: 0.75rem;
      display: grid;
      font-family: var(--font-main-regular), sans-serif;
      font-size: 0.7em;
      justify-content: center;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    @media (min-width: 35em) {
      ::slotted([slot='footer-content-left']),
      ::slotted([slot='footer-content-right']) {
        column-gap: 0.75rem;
        font-family: var(--font-main-light), sans-serif;
        font-size: 0.8em;
        padding-left: 1rem;
        padding-right: 1rem;
      }

    }

    @media (min-width: 45em) {
      ::slotted([slot='footer-content-left']),
      ::slotted([slot='footer-content-right']) {
        column-gap: 1rem;
        font-size: 1em;
        padding-left: 1.25rem;
        padding-right: 1.25rem;
      }
    }

    ::slotted([slot='footer-content-left']) {
      grid-template-columns: auto 1fr;
      display: none;
    }

    @media (min-width: 25em) {

      ::slotted([slot='footer-content-left']) {
        display: grid;
      }

    }

    ::slotted([slot='footer-content-right']) {

      grid-column: span 2;
      grid-template-columns: 1fr 1fr;
      place-content: center;
    }

    @media (min-width: 25em) {
      ::slotted([slot='footer-content-right']) {
        grid-template-columns: auto 1fr;
        grid-column: span 1;
      }
    }

    ::slotted([slot='footer-box-right']) {
      align-items: center;
      display: grid;
      font-size: 1.2em;
      justify-content: center;
    }

    @media (min-width: 35em) {
      ::slotted([slot='footer-box-right']) {
        font-size: 1.33em;
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
  `;uc([rt({type:String})],gs.prototype,"theme",2);gs=uc([Ee("c-hero")],gs);var Fg=Object.defineProperty,Bg=Object.getOwnPropertyDescriptor,Ug=(r,t,e,i)=>{for(var n=i>1?void 0:i?Bg(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Fg(t,e,n),n};let Mo=class extends Jt{disable(){const r=document.querySelector("main"),t=r.classList.contains("u-transparent");document.documentElement.style.position="",t&&r.classList.remove("u-transparent"),setTimeout(()=>{this.style.opacity="0",this.style.pointerEvents="none"},2e3),setTimeout(()=>{this.style.display="none"},4e3)}render(){return Tt`
      <slot>
      </slot>
    `}};Mo.styles=ai`

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
      grid-template-columns: clamp(2rem, 4vw, 8rem);
      grid-template-rows: min-content;
      justify-content: center;
      position: absolute;
    }

  `;Mo=Ug([Ee("c-loader")],Mo);var Ar=window.CustomEvent;(!Ar||typeof Ar=="object")&&(Ar=function(t,e){e=e||{};var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,!!e.bubbles,!!e.cancelable,e.detail||null),i},Ar.prototype=window.Event.prototype);function fc(r,t){var e="on"+t.type.toLowerCase();return typeof r[e]=="function"&&r[e](t),r.dispatchEvent(t)}function Hg(r){for(;r&&r!==document.body;){var t=window.getComputedStyle(r),e=function(i,n){return!(t[i]===void 0||t[i]===n)};if(t.opacity<1||e("zIndex","auto")||e("transform","none")||e("mixBlendMode","normal")||e("filter","none")||e("perspective","none")||t.isolation==="isolate"||t.position==="fixed"||t.webkitOverflowScrolling==="touch")return!0;r=r.parentElement}return!1}function mn(r){for(;r;){if(r.localName==="dialog")return r;r.parentElement?r=r.parentElement:r.parentNode?r=r.parentNode.host:r=null}return null}function gc(r){for(;r&&r.shadowRoot&&r.shadowRoot.activeElement;)r=r.shadowRoot.activeElement;r&&r.blur&&r!==document.body&&r.blur()}function Xg(r,t){for(var e=0;e<r.length;++e)if(r[e]===t)return!0;return!1}function Qs(r){return!r||!r.hasAttribute("method")?!1:r.getAttribute("method").toLowerCase()==="dialog"}function pc(r){var t=["button","input","keygen","select","textarea"],e=t.map(function(o){return o+":not([disabled])"});e.push('[tabindex]:not([disabled]):not([tabindex=""])');var i=r.querySelector(e.join(", "));if(!i&&"attachShadow"in Element.prototype)for(var n=r.querySelectorAll("*"),s=0;s<n.length&&!(n[s].tagName&&n[s].shadowRoot&&(i=pc(n[s].shadowRoot),i));s++);return i}function Al(r){return r.isConnected||document.body.contains(r)}function mc(r){if(r.submitter)return r.submitter;var t=r.target;if(!(t instanceof HTMLFormElement))return null;var e=vt.formSubmitter;if(!e){var i=r.target,n="getRootNode"in i&&i.getRootNode()||document;e=n.activeElement}return!e||e.form!==t?null:e}function qg(r){if(!r.defaultPrevented){var t=r.target,e=vt.imagemapUseValue,i=mc(r);e===null&&i&&(e=i.value);var n=mn(t);if(!!n){var s=i&&i.getAttribute("formmethod")||t.getAttribute("method");s==="dialog"&&(r.preventDefault(),e!=null?n.close(e):n.close())}}}function _c(r){if(this.dialog_=r,this.replacedStyleTop_=!1,this.openAsModal_=!1,r.hasAttribute("role")||r.setAttribute("role","dialog"),r.show=this.show.bind(this),r.showModal=this.showModal.bind(this),r.close=this.close.bind(this),r.addEventListener("submit",qg,!1),"returnValue"in r||(r.returnValue=""),"MutationObserver"in window){var t=new MutationObserver(this.maybeHideModal.bind(this));t.observe(r,{attributes:!0,attributeFilter:["open"]})}else{var e=!1,i=function(){e?this.downgradeModal():this.maybeHideModal(),e=!1}.bind(this),n,s=function(o){if(o.target===r){var a="DOMNodeRemoved";e|=o.type.substr(0,a.length)===a,window.clearTimeout(n),n=window.setTimeout(i,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(o){r.addEventListener(o,s)})}Object.defineProperty(r,"open",{set:this.setOpen.bind(this),get:r.hasAttribute.bind(r,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}_c.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&Al(this.dialog_)||this.downgradeModal()},downgradeModal:function(){!this.openAsModal_||(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),vt.dm.removeDialog(this))},setOpen:function(r){r?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(r){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var e=document.createEvent("MouseEvents");e.initMouseEvent(r.type,r.bubbles,r.cancelable,window,r.detail,r.screenX,r.screenY,r.clientX,r.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.button,r.relatedTarget),this.dialog_.dispatchEvent(e),r.stopPropagation()},focus_:function(){var r=this.dialog_.querySelector("[autofocus]:not([disabled])");!r&&this.dialog_.tabIndex>=0&&(r=this.dialog_),r||(r=pc(this.dialog_)),gc(document.activeElement),r&&r.focus()},updateZIndex:function(r,t){if(r<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=r,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!Al(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!vt.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");Hg(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,vt.needsCentering(this.dialog_)?(vt.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(r){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),r!==void 0&&(this.dialog_.returnValue=r);var t=new Ar("close",{bubbles:!1,cancelable:!1});fc(this.dialog_,t)}};var vt={};vt.reposition=function(r){var t=document.body.scrollTop||document.documentElement.scrollTop,e=t+(window.innerHeight-r.offsetHeight)/2;r.style.top=Math.max(t,e)+"px"};vt.isInlinePositionSetByStylesheet=function(r){for(var t=0;t<document.styleSheets.length;++t){var e=document.styleSheets[t],i=null;try{i=e.cssRules}catch{}if(!!i)for(var n=0;n<i.length;++n){var s=i[n],o=null;try{o=document.querySelectorAll(s.selectorText)}catch{}if(!(!o||!Xg(o,r))){var a=s.style.getPropertyValue("top"),l=s.style.getPropertyValue("bottom");if(a&&a!=="auto"||l&&l!=="auto")return!0}}}return!1};vt.needsCentering=function(r){var t=window.getComputedStyle(r);return t.position!=="absolute"||r.style.top!=="auto"&&r.style.top!==""||r.style.bottom!=="auto"&&r.style.bottom!==""?!1:!vt.isInlinePositionSetByStylesheet(r)};vt.forceRegisterDialog=function(r){if((window.HTMLDialogElement||r.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",r),r.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new _c(r)};vt.registerDialog=function(r){r.showModal||vt.forceRegisterDialog(r)};vt.DialogManager=function(){this.pendingDialogStack=[];var r=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),r([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=1e5+150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var e=[];t.forEach(function(i){for(var n=0,s;s=i.removedNodes[n];++n){if(s instanceof Element)s.localName==="dialog"&&e.push(s);else continue;e=e.concat(s.querySelectorAll("dialog"))}}),e.length&&r(e)}))};vt.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};vt.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};vt.DialogManager.prototype.updateStacking=function(){for(var r=this.zIndexHigh_,t=0,e;e=this.pendingDialogStack[t];++t)e.updateZIndex(--r,--r),t===0&&(this.overlay.style.zIndex=--r);var i=this.pendingDialogStack[0];if(i){var n=i.dialog.parentNode||document.body;n.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};vt.DialogManager.prototype.containedByTopDialog_=function(r){for(;r=mn(r);){for(var t=0,e;e=this.pendingDialogStack[t];++t)if(e.dialog===r)return t===0;r=r.parentElement}return!1};vt.DialogManager.prototype.handleFocus_=function(r){var t=r.composedPath?r.composedPath()[0]:r.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(r.preventDefault(),r.stopPropagation(),gc(t),this.forwardTab_!==void 0)){var e=this.pendingDialogStack[0],i=e.dialog,n=i.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?e.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}};vt.DialogManager.prototype.handleKey_=function(r){if(this.forwardTab_=void 0,r.keyCode===27){r.preventDefault(),r.stopPropagation();var t=new Ar("cancel",{bubbles:!1,cancelable:!0}),e=this.pendingDialogStack[0];e&&fc(e.dialog,t)&&e.dialog.close()}else r.keyCode===9&&(this.forwardTab_=!r.shiftKey)};vt.DialogManager.prototype.checkDOM_=function(r){var t=this.pendingDialogStack.slice();t.forEach(function(e){r.indexOf(e.dialog)!==-1?e.downgradeModal():e.maybeHideModal()})};vt.DialogManager.prototype.pushDialog=function(r){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=t?!1:(this.pendingDialogStack.unshift(r)===1&&this.blockDocument(),this.updateStacking(),!0)};vt.DialogManager.prototype.removeDialog=function(r){var t=this.pendingDialogStack.indexOf(r);t!==-1&&(this.pendingDialogStack.splice(t,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};vt.dm=new vt.DialogManager;vt.formSubmitter=null;vt.imagemapUseValue=null;if(window.HTMLDialogElement===void 0){var Cl=document.createElement("form");if(Cl.setAttribute("method","dialog"),Cl.method!=="dialog"){var _r=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(_r){var Yg=_r.get;_r.get=function(){return Qs(this)?"dialog":Yg.call(this)};var Vg=_r.set;_r.set=function(r){return typeof r=="string"&&r.toLowerCase()==="dialog"?this.setAttribute("method",r):Vg.call(this,r)},Object.defineProperty(HTMLFormElement.prototype,"method",_r)}}document.addEventListener("click",function(r){if(vt.formSubmitter=null,vt.imagemapUseValue=null,!r.defaultPrevented){var t=r.target;if("composedPath"in r){var e=r.composedPath();t=e.shift()||t}if(!(!t||!Qs(t.form))){var i=t.type==="submit"&&["button","input"].indexOf(t.localName)>-1;if(!i){if(!(t.localName==="input"&&t.type==="image"))return;vt.imagemapUseValue=r.offsetX+","+r.offsetY}var n=mn(t);!n||(vt.formSubmitter=t)}}},!1),document.addEventListener("submit",function(r){var t=r.target,e=mn(t);if(!e){var i=mc(r),n=i&&i.getAttribute("formmethod")||t.getAttribute("method");n==="dialog"&&r.preventDefault()}});var jg=HTMLFormElement.prototype.submit,Wg=function(){if(!Qs(this))return jg.call(this);var r=mn(this);r&&r.close()};HTMLFormElement.prototype.submit=Wg}var Gg=Object.defineProperty,Zg=Object.getOwnPropertyDescriptor,vc=(r,t,e,i)=>{for(var n=i>1?void 0:i?Zg(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Gg(t,e,n),n};let ps=class extends Jt{constructor(){super(...arguments),this.open=!1}firstUpdated(){this._setup(),this._normalizer=ht.normalizeScroll(),vt.registerDialog(this._dialogEl),window.addEventListener("click",r=>{let t;r.target instanceof Element&&(t=r.target.closest("[data-modal-target="+this._triggerData+"]")),t&&this.showModal()},!0),this.shadowRoot.addEventListener("click",r=>{r.target instanceof Element&&r.target.closest('[slot="back"]')&&this.close(),r.target instanceof Element&&r.target.closest('[slot="close"]')&&this.close()}),this._dialogEl.classList.add("is-closed"),this.open?this.showModal():this._dialogEl.classList.add("is-closed")}_setup(){const r=window.getComputedStyle(this);this._documentEl=document.documentElement,this._triggerData=this.dataset.modalTrigger,this._triggerEl=document.querySelector("[data-modal-target="+this._triggerData+"][data-modal-trigger-primary]"),this._triggerParent=this._triggerEl.parentElement,this._dialogEl=this.shadowRoot.querySelector("dialog"),this._triggerDuration=parseFloat(r.getPropertyValue("--modal-trigger-transition-duration"))*1e3,this._modalDuration=parseFloat(r.getPropertyValue("--modal-transition-duration"))*1e3,this._dialogEl.addEventListener("close",i=>{this._handleClose()});const t=this.shadowRoot.querySelector(".js-close");t.setAttribute("slot","close"),this.appendChild(t);const e=this.shadowRoot.querySelector(".js-back");e.setAttribute("slot","back"),this.appendChild(e)}close(){this._handleClose(),this._normalizer.enable()}_open(){this._triggerEl.setAttribute("isExpanded",!0),this._triggerParent.style.zIndex="9",setTimeout(()=>{this.setAttribute("open",""),this._dialogEl.classList.remove("is-closed"),this._dialogEl.classList.add("is-opening"),this._documentEl.style.overflow="hidden",this._dialogEl.classList.remove("is-opening"),this._dialogEl.classList.add("is-open")},this._triggerDuration),this._normalizer.kill()}showModal(){this._open()}_handleClose(){this.removeAttribute("open"),this._dialogEl.classList.remove("is-open"),this._dialogEl.classList.add("is-closing"),setTimeout(()=>{this._documentEl.style.overflow="",this._dialogEl.classList.remove("is-closing"),this._dialogEl.classList.add("is-closed"),this._triggerEl.setAttribute("isExpanded",""),setTimeout(()=>{this._triggerParent.style.zIndex=""},this._triggerDuration)},this._modalDuration)}render(){return Tt`
      <dialog class="c-modal__body">
        <button class="c-icon-button c-icon-button--back js-back">
          <i></i>
        </button>
        <button class="c-icon-button c-icon-button--close js-close">
          <i></i>
        </button>
        <slot name="back"></slot>
        <slot name="close"></slot>
        <section class="c-modal__content">
          <slot> </slot>
        </section>
      </dialog>
    `}};ps.styles=ai`
    :host  {
      --modal-color-fg: var(--color-fg);
      --modal-color-bg: var(--color-bg);
      --modal-spacing: 1.5rem;
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
      max-height: 100vh;
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

    .c-modal__content {
      position: absolute;
      width: 100%;
    }

    [name='close'],
    [name='back'] {
      display: block;
      position: fixed;
      top: calc(var(--modal-spacing) * .75);
      z-index: 9;
    }

    [name='back'] {
      left: calc(var(--modal-spacing) * .5);
    }

    [name='close'] {
      right: calc(var(--modal-spacing) * .5);
    }

    @media (min-width:45em) {

      [name='close'],
      [name='back'] {

        [name='back'] {
          left: calc(var(--modal-spacing) * .75);
          top: calc(var(--modal-spacing) * .75);
        }

        [name='close'] {
          right: calc(var(--modal-spacing) * .75);
          top: calc(var(--modal-spacing) * .75);
        }

      }

    }
  `;vc([rt({type:Boolean})],ps.prototype,"open",2);ps=vc([Ee("c-modal")],ps);var Kg=Object.defineProperty,Qg=Object.getOwnPropertyDescriptor,Jg=(r,t,e,i)=>{for(var n=i>1?void 0:i?Qg(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Kg(t,e,n),n};let Po=class extends Jt{render(){return Tt`
      <slot name="title"> </slot>
      <slot name="description"> </slot>
    `}};Po.styles=ai`
    :host  {
      --section-header-title-font: var(--font-display);
      --section-header-title-font-weight: var(--font-display-weight);

      box-shadow: var(--shadow-md);
      display: block;
      text-align: center;
      will-change: transform, opacity;
    }

    ::slotted([slot='title']),
    ::slotted([slot='description']) {
      box-sizing: border-box;
      display: block;
    }

    ::slotted([slot='title']) {
      display: grid;
      filter: url('#animate');
      font-family: var(--section-header-title-font), sans-serif !important;
      font-size: 1.5rem;
      font-size: clamp(1.2rem, 1rem + 2vw, 2.8rem);
      font-weight: var(--section-header-title-font-weight) !important;
      line-height: 1.25;
      margin: 0;
      overflow: hidden;
      padding-bottom: 2rem;
      padding-left: .5rem;
      padding-right: .5rem;
      padding-top: 2.5rem;
      place-content: center;
      text-transform: uppercase;
    }

    @media (min-width: 16em) {

      ::slotted([slot='title']) {
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: var(--color-fg);
      }

    }


    @media (min-width: 25em) {

      ::slotted([slot='title']) {
        padding-bottom: calc(4vw + 2rem);
        padding-left: 2rem;
        padding-right: 2rem;
        padding-top: calc(4vw + 3rem);
      }
    }

    ::slotted([slot='description']) {
      box-shadow: 0 0 0 1px var(--color-subtle-alternate);
      font-size: .9em;
      padding-bottom: 1.5rem;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-top: 1.5rem;
    }


    @media (min-width: 45em) {
      ::slotted([slot='description']) {
        font-size: 1em;
      }
    }
  `;Po=Jg([Ee("c-section-header")],Po);var tp=Object.defineProperty,ep=Object.getOwnPropertyDescriptor,ip=(r,t,e,i)=>{for(var n=i>1?void 0:i?ep(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&tp(t,e,n),n};let Oo=class extends Jt{render(){return Tt`
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
    `}};Oo.styles=ai`
    :host {
      display: block;
      height: 0.5rem;
      line-height: 0;
      margin-top: 1rem;
    }

    .c-squiggle__svg {
      display: inline-block;
      fill: var(--color-accent);
    }
  `;Oo=ip([Ee("c-squiggle")],Oo);var rp=Object.defineProperty,np=Object.getOwnPropertyDescriptor,sp=(r,t,e,i)=>{for(var n=i>1?void 0:i?np(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&rp(t,e,n),n};let Do=class extends Jt{handleChange(){const r=document.body.dataset.theme,t=r==="dark"?"light":"dark";document.body.dataset.theme=t,document.body.classList.remove("theme-"+r),document.body.classList.add("theme-"+t),this.dispatchEvent(new CustomEvent("themeChange",{detail:{theme:document.body.dataset.theme},bubbles:!0,composed:!0}))}render(){return Tt`
      <label class="c-theme-switch__wrapper">
        <input
          type="checkbox"
          class="c-theme-switch__input"
          @change=${this.handleChange}
        />
        <span class="c-theme-switch__switch"></span>
        <slot></slot>
      </label>
    `}};Do.styles=ai`
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

    .c-theme-switch__wrapper {
      align-items: center;
      column-gap: 0.4em;
      cursor: pointer;
      display: grid;
      grid-auto-flow: column;
      justify-content: center;
      position: relative;
    }

    @media (min-width: 35em) {

      .c-theme-switch__wrapper {
        column-gap: 0.5em;
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
      font-size: 0.9em;
    }

    @media (min-width: 35em) {

      ::slotted(i) {
        font-size: 1em;
      }

    }
  `;Do=sp([Ee("c-theme-switch")],Do);var op=Object.defineProperty,ap=Object.getOwnPropertyDescriptor,lp=(r,t,e,i)=>{for(var n=i>1?void 0:i?ap(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&op(t,e,n),n};let Ro=class extends Jt{render(){return Tt`
      <slot name="logo"> </slot>
      <nav class="c-top-bar__nav">
        <slot name="link"> </slot>
      </nav>
    `}};Ro.styles=ai`

    :host {
      display: grid;
      grid-template-columns: min-content min-content;
      padding-bottom: .5rem;
      padding-left: .75rem;
      padding-right: .75rem;
      padding-top: .5rem;
      place-content: center space-between;
      position: fixed;
      width: 100%;
      z-index: 9;
    }

    @media (min-width: 25em) {
      :host {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        padding-bottom: 1.5rem;
        padding-top: 1.5rem;
      }
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
      grid-gap: .4em;
      transform: translatex(0);
    }

    @media (min-width: 25em) {

      .c-top-bar__nav {
        grid-gap: 0.5em;
      }

    }

    @media (min-width: 45em) and (min-height: 30em) {

      :host {
        align-items: start;
        place-content: start space-between;
      }
      .c-top-bar__nav {
        grid-auto-flow: row;
        grid-gap: .6em;
      }

    }

    ::slotted([slot='link']) {
      display: grid;
      height: 1em;
      padding: .1em 0 0 0;
      text-align: center;
      text-decoration: none;
    }

    ::slotted([slot='logo']) {
      display: grid;
      width: 1.4rem;
    }

    @media (min-width: 25em) {
      ::slotted([slot='logo']) {
        width: 1.75rem;
      }
    }
  `;Ro=lp([Ee("c-top-bar")],Ro);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const hp={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},cp=r=>(...t)=>({_$litDirective$:r,values:t});class dp{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class zo extends dp{constructor(t){if(super(t),this.it=jt,t.type!==hp.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===jt||t==null)return this._t=void 0,this.it=t;if(t===Xr)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}zo.directiveName="unsafeHTML",zo.resultType=1;const kl=cp(zo);var up=Object.defineProperty,fp=Object.getOwnPropertyDescriptor,Ht=(r,t,e,i)=>{for(var n=i>1?void 0:i?fp(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&up(t,e,n),n};d;let It=class extends Jt{constructor(){super(),this.styles=`
    c-work-list-item  {
      box-shadow: 0 0 0 1px var(--color-subtle-alternate);
      display: grid;
      grid-template-rows: auto 1fr;
      grid-template-columns: 100%;
      max-height: calc(130vh - 3rem);
      margin-left: auto;
      margin-right: auto;
      padding-bottom: 1em;
    }

    @media (max-width:45em) {
      c-work-list-item:first-child {
        margin-top: 0rem;
      }
    }

    @media (min-height:35em) and (min-width:45em) {

      c-work-list-item {
        max-height: 130vh;
        max-width: calc(100% - 9rem);
        padding-bottom: 1.25em;
      }

    }

    @media (min-height:35em) and (min-width:80em) {

      c-work-list-item {
        max-width: 66rem;
      }

    }

    c-work-list-item:last-child {
      padding-bottom: 0rem;
    }

    .c-work-list__item-backdrop {
      background-color: var(--color-bg);
      display: block;
      height: 3rem;
      position: sticky;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    @media (min-height:35em) and (min-width:45em) {

      .c-work-list__item-backdrop::before {
        display: none;
      }

    }

    .c-work-list__item-info {
      margin-top: -3rem;
      position: sticky;
      top: 3rem;
      z-index: 5;
    }

    @media (min-height:35em) and (min-width:45em) {

      .c-work-list__item-info {
        top: 0;
        z-index: 1;
      }

    }

    .c-work-list__item-info-inner {
      -webkit-backdrop-filter: blur(0.75rem);
      background-color: var(--color-bg-semi-transparent);
      backdrop-filter: blur(0.75rem);
      box-shadow: 0 0 0 1px var(--color-subtle-alternate);
      display: grid;
      gap: 0.3rem;
      overflow: hidden;
      padding-bottom: 1rem;
      padding-top: 1.1rem;
      transform: translate3d(0,0,0);
    }

    @media (min-width:35em) {

      .c-work-list__item-info-inner {
        gap: 0.4rem;
        padding-bottom: 1.5rem;
        padding-top: 1.5rem;
      }

    }

    .c-work-list__item-info-title,
    .c-work-list__item-info-taglist,
    .c-work-list__item-info-description {
      padding-left:  0.75rem;
      padding-right: 0.75rem;
    }


    @media (min-width:35em) {

      .c-work-list__item-info-title,
      .c-work-list__item-info-taglist,
      .c-work-list__item-info-description {
        padding-left:  1.5rem;
        padding-right: 1.5rem;
      }

    }

    .c-work-list__item-info-title {
      margin: 0 !important;
    }



    .c-work-list__item-info-taglist {
      display: none;
    }


    @media (min-width:15em) {

      .c-work-list__item-info-taglist {
        display: block;
      }

    }

    .c-work-list__item-info-description  p {
      margin: 0;
    }


    .c-work-list__item-info-description {
      font-size: .9em;
      line-height: 1.25;
    }




    @media (min-width:55em) {

      .c-work-list__item-info-description {
        font-size: 1em;
      }

    }

    .c-work-list__item-preview {
      background-color: var(--color-subtle-alternate);
      display: grid;
      grid-gap: 1px;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      overflow: hidden;
    }

    .c-work-list__item-lower,
    .c-work-list__item-lower-three {
      background-color: var(--color-bg);
      border-top:    solid 1px var(--color-subtle-alternate);
      border-bottom: solid 1px var(--color-subtle-alternate);
      display: grid;
      grid-auto-flow: row;
      grid-gap: .66rem;
      padding-bottom: calc(1.25rem + 2px);
      padding-left: 1.25rem;
      padding-right: 1.25rem;
      padding-top: 1.25rem;
      position: relative;
      text-align: center;
      z-index: 0;
    }

    @media (min-width:25em) {

      .c-work-list__item-lower,
      .c-work-list__item-lower-three {
        grid-auto-flow: column;
      }

    }

    @media (min-width:35em) {

      .c-work-list__item-lower,
      .c-work-list__item-lower-three {
        grid-auto-columns: 1fr;
        grid-gap: 1rem;
      }

    }

    c-work-list-item:last-child .c-work-list__item-lower,
    c-work-list-item:last-child .c-work-list__item-lower-three {
      border-bottom: none;
    }

    @media (min-width:55em) {

      .c-work-list__item-lower-three {
        grid-template-columns: 3fr 4fr 3fr;
        grid-auto-flow: column;
      }

    }

    .c-work-list__item:last-child .c-work-list__item-lower {
      border-bottom: none;
    }



    .c-media-grid {
      display: grid;
      grid-gap: .5rem;
      grid-template-columns: 1fr;
      padding-bottom: .5rem;
      padding-left: .5rem;
      padding-right: .5rem;
      padding-top: .5rem;
    }

    @media (min-width:45em) {

      .c-media-grid {
        grid-template-columns: 1fr 1fr;
        padding-bottom: 1rem;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: .5rem;
      }

    }

    @media (min-width:75em) {

      .c-media-grid {
        padding-left: calc((100% - 70em) / 2);
        padding-right: calc((100% - 70em) / 2);
        padding-top: .5rem;
      }

    }

    .c-media-grid__text-item,
    .c-media-grid__text-item-wide,
    .c-media-grid article {
      display: grid;
      font-family: var(--font-main-regular);
      text-align: left;
      overflow-y: auto;
    }

    .c-media-grid__text-item {
      align-content: start;
      background: var(--color-bg-semi-transparent-contrast);
      box-shadow: inset 0 0 0 1px var(--color-subtle-alternate);
      gap: 0rem;
      padding-bottom: 1rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-top: 1rem;
    }

    .c-media-grid__text-item:has(div) {
      gap: 1rem;
    }


    @media (min-width:45em) {

      .c-media-grid__text-item {
        gap: 1rem;
        padding-bottom: calc(3rem + 1vw);
        padding-left: calc(2rem + 1vw);
        padding-right: calc(2rem + 1vw);
        padding-top: calc(3rem + 1vw);
      }

    }

    .c-media-grid__text-item-wide,
    .c-media-grid article {
      align-content: center;
      gap: 0.25rem;
      padding-bottom: .75rem;
      padding-left: .5rem;
      padding-right: .5rem;
      padding-top: .75rem;
    }


    @media (min-width:45em) {

      .c-media-grid__text-item-wide,
      .c-media-grid article {
        font-size: 1.3rem;
        grid-column: 1 / span 2;
        padding-bottom: calc(4rem + 1vw);
        padding-left: calc(2rem + 1vw);
        padding-right: calc(2rem + 1vw);
        padding-top: calc(3rem + 1vw);
      }

    }

    @media (min-width:55em) {

      .c-media-grid__text-item-wide,
      .c-media-grid article {
        padding-left: calc(((100% - 50rem) / 2) + 2rem);
        padding-right: calc(((100% - 50rem) / 2) + 2rem);
      }

    }
    @media (min-width:75em) {

      .c-media-grid__text-item-wide,
      .c-media-grid article {
        font-size: 1.3rem;
        padding-bottom: 4rem;
        padding-top: 3rem;
      }

    }

    .c-media-grid__image-item {
      background-color: var(--color-muted);
      border: solid 1px var(--color-subtle-alternate);
      box-shadow: 0 0 0 1px rgba(120,120,120,.8);
      display: grid;
      position: relative;
    }

    .c-media-grid__image {
      width: 100%;
    }

    .c-media-grid__image-caption,
    .c-media-grid__image-caption-alternate {
      background-color: rgba(100,100,100,.6);
      border-radius: 4px;
      bottom: 1rem;
      color: white;
      font-family: var(--font-main-regular);
      line-height: 1.1;
      padding-bottom: .3rem;
      padding-left: .3rem;
      padding-right: .3rem;
      padding-top: .3rem;
      position: absolute;
    }

    .c-media-grid__image-caption {
      background-color: rgba(200,200,200,.15);
      box-shadow: 0 0 0 1px rgba(200,200,200,.225);
      color: white;
    }

    .c-media-grid__image-caption-alternate {
      background-color: rgba(100,100,100,.05);
      box-shadow: 0 0 0 1px rgba(100,100,100,.15);
      color: black;
    }

  `,this.previewImages="[]",this.images="[]",this.glitch='["6", "6"]',this.tags="[]",this.previewWidth="800",this.previewHeight="600",this.title="",this.slug="",this.gallery="0",this.description="",this.shortDescription="",this.github=null,this.vsc=null,this.npm=null,this.site=null,this.threeButton="false",this.hideModal="false",this.wide="false",this.taglist="",this.caseStudy=null,this.querySelector('[slot="case-study"]')&&(this.caseStudy=this.querySelector('[slot="case-study"]').innerHTML,this.querySelector('[slot="case-study"]').innerHTML=""),document.querySelector(".work-list-styles")||(document.head.innerHTML+=`
        <style class='work-list-styles'>
          ${this.styles}
        </style>
      `)}connectedCallback(){super.connectedCallback(),this.taglist=JSON.parse(this.tags).join(", ")}firstUpdated(){JSON.parse(this.hideModal)||document.body.appendChild(this.querySelector("c-modal"))}render(){return Tt`
      <div class="c-work-list__item-backdrop"></div>
      <div data-sticky class="c-work-list__item-info">
        <div class="c-work-list__item-info-inner">
          <h4 class="c-work-list__item-info-title u-h3">
            ${this.title}
          </h4>
          <div
            class="
              c-work-list__item-info-taglist
              u-text-title
            "
          >
            Techologies<span class="u-hidden@small"> Used</span>: ${this.taglist}
          </div>
          <div
            class="
              c-work-list__item-info-description
            "
          >
            <p>
              ${this.shortDescription}
            </p>
          </div>
        </div>
      </div>

      <div
        class="
          c-work-list__item-preview
          ${JSON.parse(this.hideModal)?"":"u-cursor-zoom-in"}"
        data-modal-target="${this.slug}"
      >
        ${JSON.parse(this.previewImages).map((r,t)=>Tt`

            <c-glitch-image data-cursor-target
              src="${r}"
              alt=${this.title+" Screenshot"}
              glitch=${this.glitch&&JSON.parse(this.glitch)[t]||"2"}
              width=${this.previewWidth}
              height=${this.previewHeight}
            >
            </c-glitch-image>
          `)}
      </div>
      <div class="${JSON.parse(this.threeButton)?"c-work-list__item-lower-three":"c-work-list__item-lower"}">
        ${this.github?Tt`
          <c-button
            href=${this.github}
            label=" Star on Github"
            icon="github"
            title=${this.title+" Github Repo Link"}
          >
          </c-button>
        `:""}

        ${JSON.parse(this.hideModal)?"":Tt`
          <c-button
            data-modal-target="${this.slug}"
            data-modal-trigger-primary
            label= ${this.caseStudy?"Show Case Study":"Show More"}
            icon="expand"
          >
          </c-button>`}

        ${this.vsc?Tt`
          <c-button
            href=${this.vsc}
            label=" View on VSC"
            icon="windows"
            title=${this.title+"VSC Link"}
          >
          </c-button>
        `:""}

        ${this.npm?Tt`
          <c-button
            href=${this.npm}
            label="Add on NPM"
            icon="npm"
            title=${this.title+"NPM Module Link"}
          >
          </c-button>
        `:""}

        ${this.site?Tt`
          <c-button
            href=${this.site}
            label="Visit Website"
            icon="plus"
            title=${this.title+"Site Link"}
          >
          </c-button>
        `:""}

        ${JSON.parse(this.hideModal)?"":Tt`
          <c-modal
            data-modal-trigger="${this.slug}"
          >
            <c-section-header
              class="u-z-index-3"
            >
              <div slot="title">
                ${this.title}
                <c-squiggle></c-squiggle>
              </div>
              <div slot="description" class="u-text-title">
                  Techologies Used: ${this.taglist}
              </div>
            </c-section-header>

            <div
              class="
              c-media-grid
              u-bg-pattern-diagonal-alternate
            "
            >
              ${this.description?Tt`
                    <article
                      class=${JSON.parse(this.wide)?"c-media-grid__text-item-wide":"c-media-grid__text-item"}
                    >
                      <div>
                      ${JSON.parse(this.description).map(r=>kl(`
                          <p> ${r} </p>
                        `))}
                      </div>
                    </article>
                  `:""}
              ${this.querySelector('[slot="case-study"]')?kl(this.caseStudy):""}
              ${JSON.parse(this.images).map(r=>Tt`
                <div class="c-media-grid__image-item">
                  <c-gallery-image
                    href="${r}"
                    src="${r}"
                    alt=${this.title+" Screenshot"}
                    gallery=${this.gallery}
                  ></c-gallery-image>
                </div>
              `)}

            </div>
          </c-modal>
        `}

      </div>
    `}createRenderRoot(){return this}};Ht([rt({type:String})],It.prototype,"previewImages",2);Ht([rt({type:String})],It.prototype,"images",2);Ht([rt({type:String})],It.prototype,"glitch",2);Ht([rt({type:String})],It.prototype,"tags",2);Ht([rt({type:String})],It.prototype,"previewWidth",2);Ht([rt({type:String})],It.prototype,"previewHeight",2);Ht([rt({type:String})],It.prototype,"title",2);Ht([rt({type:String})],It.prototype,"slug",2);Ht([rt({type:String})],It.prototype,"gallery",2);Ht([rt({type:String})],It.prototype,"description",2);Ht([rt({type:String})],It.prototype,"shortDescription",2);Ht([rt({type:String})],It.prototype,"github",2);Ht([rt({type:String})],It.prototype,"vsc",2);Ht([rt({type:String})],It.prototype,"npm",2);Ht([rt({type:String})],It.prototype,"site",2);Ht([rt({type:String})],It.prototype,"threeButton",2);Ht([rt({type:String})],It.prototype,"hideModal",2);Ht([rt({type:String})],It.prototype,"wide",2);Ht([rt({type:String})],It.prototype,"taglist",2);Ht([rt({type:String})],It.prototype,"caseStudy",2);It=Ht([Ee("c-work-list-item")],It);function gp(r,t=8,e=50){class i{constructor(s){this.frame=0,this.patternSize=400,this.patternScaleX=8,this.patternScaleY=8,this.patternRefreshInterval=t,this.patternAlpha=e,this.patternCanvas=document.createElement("canvas"),this.canvas=s,this.ctx=this.canvas.getContext("2d"),this.ctx.scale(this.patternScaleX,this.patternScaleY),this.patternCanvas=document.createElement("canvas"),this.patternCanvas.width=this.patternSize,this.patternCanvas.height=this.patternSize,this.patternCtx=this.patternCanvas.getContext("2d"),this.patternData=this.patternCtx.createImageData(this.patternSize,this.patternSize),this.patternPixelDataLength=this.patternSize*this.patternSize*4,this.resize=this.resize.bind(this),this.loop=this.loop.bind(this),this.frame=0,window.addEventListener("resize",this.resize),this.resize(),window.requestAnimationFrame(this.loop)}resize(){this.canvas.width=window.innerWidth*devicePixelRatio,this.canvas.height=window.innerHeight*devicePixelRatio}update(){const{patternPixelDataLength:s,patternData:o,patternAlpha:a,patternCtx:l}=this;for(let h=0;h<s;h+=4){const u=Math.random()*200;o.data[h]=u,o.data[h+1]=u,o.data[h+2]=u,o.data[h+3]=a}l.putImageData(o,0,0)}draw(){const{ctx:s,patternCanvas:o,canvas:a}=this,{width:l,height:h}=a;s.clearRect(0,0,l,h),s.fillStyle=s.createPattern(o,"repeat"),s.fillRect(0,0,l,h)}loop(){++this.frame%this.patternRefreshInterval===0&&(this.update(),this.draw()),window.requestAnimationFrame(this.loop)}}new i(r)}var pp=Object.defineProperty,mp=Object.getOwnPropertyDescriptor,_p=(r,t,e,i)=>{for(var n=i>1?void 0:i?mp(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&pp(t,e,n),n};let Lo=class extends Jt{constructor(){super()}firstUpdated(){if(this.style.setProperty("--opacity-noise","0.8"),this.renderRoot){const r=this.renderRoot.querySelector(".c-canvas-noise__canvas");gp(r,12)}}render(){return Tt`
      <canvas class="c-canvas-noise__canvas">
      </canvas>
    `}};Lo.styles=ai`
    :host {
      display: block;
      height: 100%;
      mix-blend-mode: hard-light;
      opacity: var(--opacity-noise);
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
  `;Lo=_p([Ee("c-canvas-noise")],Lo);var vp=Object.defineProperty,yp=Object.getOwnPropertyDescriptor,bp=(r,t,e,i)=>{for(var n=i>1?void 0:i?yp(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&vp(t,e,n),n};let $o=class extends Jt{constructor(){super(),this.position={currentX:0,currentY:0,cursorX:0,cursorY:0},this._targets=[],this._speed=.2,this._set=le.quickSetter(this,"css"),this._enterStyles={borderWidth:"1px",duration:.5,scale:2},this._leaveStyles={borderWidth:"2px",duration:.5,scale:1},this._delta=1-Math.pow(1-this._speed,le.ticker.deltaRatio()),this.setViewport(),this.position.cursorX=this.position.currentX,this.position.cursorY=this.position.currentY,window.addEventListener("resize",()=>{setTimeout(()=>{this.setViewport(),this.refresh()},4e3)}),this.render(),this._set=le.quickSetter(this,"css"),"ontouchstart"in document.documentElement===!0?this.style.setProperty("--cursor-display","none"):this.style.setProperty("--cursor-display","block"),document.addEventListener("mousemove",t=>{t.x!==0&&(this.position.cursorX=t.x),t.y!==0&&(this.position.cursorY=t.y)}),le.ticker.add(()=>{if(this._delta=1-Math.pow(1-this._speed,le.ticker.deltaRatio()),this.position.currentX+=(this.position.cursorX-this.position.currentX)*this._delta,this.position.currentY+=(this.position.cursorY-this.position.currentY)*this._delta,this._set({x:this.position.currentX,y:this.position.currentY}),this._activeTarget&&(this._activeTarget.dataset.cursorMagnetic==="true"||this._activeTarget.parentElement.dataset.cursorMagnetic==="true")){const t=this._activeTarget.getBoundingClientRect(),e=5;let i=(t.x+t.width/2-this.position.cursorX)/-2;i>0?i=Math.min(i,e):i=Math.max(i,-1*e);let n=(t.y+t.height/2-this.position.cursorY)/-2;n>0?n=Math.min(n,e):n=Math.max(n,-1*e),le.to(this._activeTarget,{x:i,y:n,duration:.3})}}),le.to(this,this._leaveStyles),setTimeout(()=>{this.refresh()},2e3)}setViewport(){this.position.currentX=window.innerWidth/2,this.position.currentY=window.innerHeight/2}handleEnter(r){le.to(this,this._enterStyles),this._activeTarget=r.target}handleLeave(r){le.to(this,this._leaveStyles),le.to(r.target,{x:0,y:0}),this._activeTarget=null}refresh(){this._targets&&this._targets.forEach(i=>{i.element.removeEventListener("mouseenter",this.handleEnter),i.element.removeEventListener("mouseleave",this.handleLeave)}),this._targets=[];const r=Array.from(document.querySelectorAll('.c-button, .c-toggle__label, [data-cursor-magnetic="true"]')),t=Array.from(document.querySelectorAll("a, button, [data-cursor-target]"));r.forEach(i=>{i.dataset.cursorMagnetic="true"}),[...r,...t].forEach(i=>{this._targets=this._targets.concat([{element:i}])}),this._targets&&this._targets.forEach(i=>{i.element.addEventListener("mouseenter",this.handleEnter.bind(this)),i.element.addEventListener("mouseleave",this.handleLeave.bind(this))})}render(){return Tt``}};$o.styles=ai`
    :host {
      --cursor-size: 2.5rem;

      -webkit-backdrop-filter: saturate(0) invert() contrast(3) brightness(.75);
      backdrop-filter: saturate(0) invert() contrast(3) brightness(.75);
      border: solid 1px rgba(255,255,255,.5);
      border-radius: var(--cursor-size);
      display: var(--cursor-display);
      height: var(--cursor-size);
      left: calc(var(--cursor-size) / 2 * -1);
      pointer-events: none;
      position: fixed;
      top: calc(var(--cursor-size) / 2 * -1);
      width: var(--cursor-size);
      will-change: transform, opacity;
      z-index: 999;
    }

    .c-cursor__inner {
      border-radius: var(--cursor-size);
      border-style: solid;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      will-change: transform, background-color, border-color;
    }

    @media (max-width: 768px) {

      :host {
        display: none;
      }

    }
  `;$o=bp([Ee("c-cursor")],$o);
