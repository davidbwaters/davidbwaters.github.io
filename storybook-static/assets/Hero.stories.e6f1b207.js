import{i as yi,e as De,s as xi,y as ze,a as vi}from"./query-assigned-elements.44c72d86.js";import"./lit-html.9f764a13.js";import"./Icon.16fc8648.js";function xt(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Tr(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Qt={duration:.5,overwrite:!1,delay:0},wi,W,X,ot=1e8,z=1/ot,Je=Math.PI*2,Ps=Je/4,Cs=0,Er=Math.sqrt,Os=Math.cos,Fs=Math.sin,G=function(t){return typeof t=="string"},U=function(t){return typeof t=="function"},bt=function(t){return typeof t=="number"},bi=function(t){return typeof t>"u"},mt=function(t){return typeof t=="object"},Z=function(t){return t!==!1},Sr=function(){return typeof window<"u"},ye=function(t){return U(t)||G(t)},Mr=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},H=Array.isArray,ti=/(?:-?\.?\d|\.)+/gi,Ar=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$t=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Be=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Rr=/[+-]=-?[.\d]+/,Pr=/[^,'"\[\]\s]+/gi,Ds=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,N,ht,ei,Ti,st={},be={},Cr,Or=function(t){return(be=Xt(t,st))&&nt},Ei=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Te=function(t,e){return!e&&console.warn(t)},Fr=function(t,e){return t&&(st[t]=e)&&be&&(be[t]=e)||st},ue=function(){return 0},zs={suppressEvents:!0,isStart:!0,kill:!1},xe={suppressEvents:!0,kill:!1},ks={suppressEvents:!0},Si={},Pt=[],ii={},Dr,et={},Ue={},Ui=30,ve=[],Mi="",Ai=function(t){var e=t[0],i,s;if(mt(e)||U(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(s=ve.length;s--&&!ve[s].targetTest(e););i=ve[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new es(t[s],i)))||t.splice(s,1);return t},Bt=function(t){return t._gsap||Ai(lt(t))[0]._gsap},zr=function(t,e,i){return(i=t[e])&&U(i)?t[e]():bi(i)&&t.getAttribute&&t.getAttribute(e)||i},Q=function(t,e){return(t=t.split(",")).forEach(e)||t},V=function(t){return Math.round(t*1e5)/1e5||0},$=function(t){return Math.round(t*1e7)/1e7||0},jt=function(t,e){var i=e.charAt(0),s=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+s:i==="-"?t-s:i==="*"?t*s:t/s},Ls=function(t,e){for(var i=e.length,s=0;t.indexOf(e[s])<0&&++s<i;);return s<i},Ee=function(){var t=Pt.length,e=Pt.slice(0),i,s;for(ii={},Pt.length=0,i=0;i<t;i++)s=e[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},kr=function(t,e,i,s){Pt.length&&Ee(),t.render(e,i,s||W&&e<0&&(t._initted||t._startAt)),Pt.length&&Ee()},Lr=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Pr).length<2?e:G(t)?t.trim():t},Nr=function(t){return t},ut=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},Ns=function(t){return function(e,i){for(var s in i)s in e||s==="duration"&&t||s==="ease"||(e[s]=i[s])}},Xt=function(t,e){for(var i in e)t[i]=e[i];return t},Vi=function r(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=mt(e[i])?r(t[i]||(t[i]={}),e[i]):e[i]);return t},Se=function(t,e){var i={},s;for(s in t)s in e||(i[s]=t[s]);return i},oe=function(t){var e=t.parent||N,i=t.keyframes?Ns(H(t.keyframes)):ut;if(Z(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},Is=function(t,e){for(var i=t.length,s=i===e.length;s&&i--&&t[i]===e[i];);return i<0},Ir=function(t,e,i,s,n){i===void 0&&(i="_first"),s===void 0&&(s="_last");var a=t[s],h;if(n)for(h=e[n];a&&a[n]>h;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[s]=e,e._prev=a,e.parent=e._dp=t,e},ke=function(t,e,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var n=e._prev,a=e._next;n?n._next=a:t[i]===e&&(t[i]=a),a?a._prev=n:t[s]===e&&(t[s]=n),e._next=e._prev=e.parent=null},Ot=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},Ut=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Bs=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ri=function(t,e,i,s){return t._startAt&&(W?t._startAt.revert(xe):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,s))},Us=function r(t){return!t||t._ts&&r(t.parent)},Xi=function(t){return t._repeat?Kt(t._tTime,t=t.duration()+t._rDelay)*t:0},Kt=function(t,e){var i=Math.floor(t/=e);return t&&i===t?i-1:i},Me=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Le=function(t){return t._end=$(t._start+(t._tDur/Math.abs(t._ts||t._rts||z)||0))},Ne=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=$(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Le(t),i._dirty||Ut(i,t)),t},Br=function(t,e){var i;if((e._time||e._initted&&!e._dur)&&(i=Me(t.rawTime(),e),(!e._dur||me(0,e.totalDuration(),i)-e._tTime>z)&&e.render(i,!0)),Ut(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-z}},gt=function(t,e,i,s){return e.parent&&Ot(e),e._start=$((bt(i)?i:i||t!==N?at(t,i,e):t._time)+e._delay),e._end=$(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Ir(t,e,"_first","_last",t._sort?"_start":0),si(e)||(t._recent=e),s||Br(t,e),t._ts<0&&Ne(t,t._tTime),t},Ur=function(t,e){return(st.ScrollTrigger||Ei("scrollTrigger",e))&&st.ScrollTrigger.create(e,t)},Vr=function(t,e,i,s,n){if(Pi(t,e,n),!t._initted)return 1;if(!i&&t._pt&&!W&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Dr!==it.frame)return Pt.push(t),t._lazy=[n,s],1},Vs=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},si=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Xs=function(t,e,i,s){var n=t.ratio,a=e<0||!e&&(!t._start&&Vs(t)&&!(!t._initted&&si(t))||(t._ts<0||t._dp._ts<0)&&!si(t))?0:1,h=t._rDelay,o=0,l,f,u;if(h&&t._repeat&&(o=me(0,t._tDur,e),f=Kt(o,h),t._yoyo&&f&1&&(a=1-a),f!==Kt(t._tTime,h)&&(n=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==n||W||s||t._zTime===z||!e&&t._zTime){if(!t._initted&&Vr(t,e,s,i,o))return;for(u=t._zTime,t._zTime=e||(i?z:0),i||(i=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=o,l=t._pt;l;)l.r(a,l.d),l=l._next;e<0&&ri(t,e,i,!0),t._onUpdate&&!i&&ft(t,"onUpdate"),o&&t._repeat&&!i&&t.parent&&ft(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&Ot(t,1),!i&&!W&&(ft(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},qs=function(t,e,i){var s;if(i>e)for(s=t._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>e)return s;s=s._next}else for(s=t._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<e)return s;s=s._prev}},Jt=function(t,e,i,s){var n=t._repeat,a=$(e)||0,h=t._tTime/t._tDur;return h&&!s&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:$(a*(n+1)+t._rDelay*n):a,h>0&&!s&&Ne(t,t._tTime=t._tDur*h),t.parent&&Le(t),i||Ut(t.parent,t),t},qi=function(t){return t instanceof j?Ut(t):Jt(t,t._dur)},Gs={_start:0,endTime:ue,totalDuration:ue},at=function r(t,e,i){var s=t.labels,n=t._recent||Gs,a=t.duration()>=ot?n.endTime(!1):t._dur,h,o,l;return G(e)&&(isNaN(e)||e in s)?(o=e.charAt(0),l=e.substr(-1)==="%",h=e.indexOf("="),o==="<"||o===">"?(h>=0&&(e=e.replace(/=/,"")),(o==="<"?n._start:n.endTime(n._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(h<0?n:i).totalDuration()/100:1)):h<0?(e in s||(s[e]=a),s[e]):(o=parseFloat(e.charAt(h-1)+e.substr(h+1)),l&&i&&(o=o/100*(H(i)?i[0]:i).totalDuration()),h>1?r(t,e.substr(0,h-1),i)+o:a+o)):e==null?a:+e},le=function(t,e,i){var s=bt(e[1]),n=(s?2:1)+(t<2?0:1),a=e[n],h,o;if(s&&(a.duration=e[1]),a.parent=i,t){for(h=a,o=i;o&&!("immediateRender"in h);)h=o.vars.defaults||{},o=Z(o.vars.inherit)&&o.parent;a.immediateRender=Z(h.immediateRender),t<2?a.runBackwards=1:a.startAt=e[n-1]}return new q(e[0],a,e[n+1])},Dt=function(t,e){return t||t===0?e(t):e},me=function(t,e,i){return i<t?t:i>e?e:i},Y=function(t,e){return!G(t)||!(e=Ds.exec(t))?"":e[1]},$s=function(t,e,i){return Dt(i,function(s){return me(t,e,s)})},ni=[].slice,Xr=function(t,e){return t&&mt(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&mt(t[0]))&&!t.nodeType&&t!==ht},Ys=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(s){var n;return G(s)&&!e||Xr(s,1)?(n=i).push.apply(n,lt(s)):i.push(s)})||i},lt=function(t,e,i){return X&&!e&&X.selector?X.selector(t):G(t)&&!i&&(ei||!te())?ni.call((e||Ti).querySelectorAll(t),0):H(t)?Ys(t,i):Xr(t)?ni.call(t,0):t?[t]:[]},ai=function(t){return t=lt(t)[0]||Te("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return lt(e,i.querySelectorAll?i:i===t?Te("Invalid scope")||Ti.createElement("div"):t)}},qr=function(t){return t.sort(function(){return .5-Math.random()})},Gr=function(t){if(U(t))return t;var e=mt(t)?t:{each:t},i=Vt(e.ease),s=e.from||0,n=parseFloat(e.base)||0,a={},h=s>0&&s<1,o=isNaN(s)||h,l=e.axis,f=s,u=s;return G(s)?f=u={center:.5,edges:.5,end:1}[s]||0:!h&&o&&(f=s[0],u=s[1]),function(c,_,g){var d=(g||e).length,p=a[d],m,x,y,v,w,b,S,E,T;if(!p){if(T=e.grid==="auto"?0:(e.grid||[1,ot])[1],!T){for(S=-ot;S<(S=g[T++].getBoundingClientRect().left)&&T<d;);T--}for(p=a[d]=[],m=o?Math.min(T,d)*f-.5:s%T,x=T===ot?0:o?d*u/T-.5:s/T|0,S=0,E=ot,b=0;b<d;b++)y=b%T-m,v=x-(b/T|0),p[b]=w=l?Math.abs(l==="y"?v:y):Er(y*y+v*v),w>S&&(S=w),w<E&&(E=w);s==="random"&&qr(p),p.max=S-E,p.min=E,p.v=d=(parseFloat(e.amount)||parseFloat(e.each)*(T>d?d-1:l?l==="y"?d/T:T:Math.max(T,d/T))||0)*(s==="edges"?-1:1),p.b=d<0?n-d:n,p.u=Y(e.amount||e.each)||0,i=i&&d<0?Kr(i):i}return d=(p[c]-p.min)/p.max||0,$(p.b+(i?i(d):d)*p.v)+p.u}},hi=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var s=$(Math.round(parseFloat(i)/t)*t*e);return(s-s%1)/e+(bt(i)?0:Y(i))}},$r=function(t,e){var i=H(t),s,n;return!i&&mt(t)&&(s=i=t.radius||ot,t.values?(t=lt(t.values),(n=!bt(t[0]))&&(s*=s)):t=hi(t.increment)),Dt(e,i?U(t)?function(a){return n=t(a),Math.abs(n-a)<=s?n:a}:function(a){for(var h=parseFloat(n?a.x:a),o=parseFloat(n?a.y:0),l=ot,f=0,u=t.length,c,_;u--;)n?(c=t[u].x-h,_=t[u].y-o,c=c*c+_*_):c=Math.abs(t[u]-h),c<l&&(l=c,f=u);return f=!s||l<=s?t[f]:a,n||f===a||bt(a)?f:f+Y(a)}:hi(t))},Yr=function(t,e,i,s){return Dt(H(t)?!e:i===!0?!!(i=0):!s,function(){return H(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*s)/s})},Hs=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(s){return e.reduce(function(n,a){return a(n)},s)}},js=function(t,e){return function(i){return t(parseFloat(i))+(e||Y(i))}},Ws=function(t,e,i){return jr(t,e,0,1,i)},Hr=function(t,e,i){return Dt(i,function(s){return t[~~e(s)]})},Zs=function r(t,e,i){var s=e-t;return H(t)?Hr(t,r(0,t.length),e):Dt(i,function(n){return(s+(n-t)%s)%s+t})},Qs=function r(t,e,i){var s=e-t,n=s*2;return H(t)?Hr(t,r(0,t.length-1),e):Dt(i,function(a){return a=(n+(a-t)%n)%n||0,t+(a>s?n-a:a)})},ce=function(t){for(var e=0,i="",s,n,a,h;~(s=t.indexOf("random(",e));)a=t.indexOf(")",s),h=t.charAt(s+7)==="[",n=t.substr(s+7,a-s-7).match(h?Pr:ti),i+=t.substr(e,s-e)+Yr(h?n:+n[0],h?0:+n[1],+n[2]||1e-5),e=a+1;return i+t.substr(e,t.length-e)},jr=function(t,e,i,s,n){var a=e-t,h=s-i;return Dt(n,function(o){return i+((o-t)/a*h||0)})},Ks=function r(t,e,i,s){var n=isNaN(t+e)?0:function(_){return(1-_)*t+_*e};if(!n){var a=G(t),h={},o,l,f,u,c;if(i===!0&&(s=1)&&(i=null),a)t={p:t},e={p:e};else if(H(t)&&!H(e)){for(f=[],u=t.length,c=u-2,l=1;l<u;l++)f.push(r(t[l-1],t[l]));u--,n=function(g){g*=u;var d=Math.min(c,~~g);return f[d](g-d)},i=e}else s||(t=Xt(H(t)?[]:{},t));if(!f){for(o in e)Ri.call(h,t,o,"get",e[o]);n=function(g){return Fi(g,h)||(a?t.p:t)}}}return Dt(i,n)},Gi=function(t,e,i){var s=t.labels,n=ot,a,h,o;for(a in s)h=s[a]-e,h<0==!!i&&h&&n>(h=Math.abs(h))&&(o=a,n=h);return o},ft=function(t,e,i){var s=t.vars,n=s[e],a=X,h=t._ctx,o,l,f;if(!!n)return o=s[e+"Params"],l=s.callbackScope||t,i&&Pt.length&&Ee(),h&&(X=h),f=o?n.apply(l,o):n.call(l),X=a,f},ae=function(t){return Ot(t),t.scrollTrigger&&t.scrollTrigger.kill(!!W),t.progress()<1&&ft(t,"onInterrupt"),t},Yt,Js=function(t){t=!t.name&&t.default||t;var e=t.name,i=U(t),s=e&&!i&&t.init?function(){this._props=[]}:t,n={init:ue,render:Fi,add:Ri,kill:pn,modifier:gn,rawVars:0},a={targetTest:0,get:0,getSetter:Oi,aliases:{},register:0};if(te(),t!==s){if(et[e])return;ut(s,ut(Se(t,n),a)),Xt(s.prototype,Xt(n,Se(t,a))),et[s.prop=e]=s,t.targetTest&&(ve.push(s),Si[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Fr(e,s),t.register&&t.register(nt,s,K)},k=255,he={aqua:[0,k,k],lime:[0,k,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,k],navy:[0,0,128],white:[k,k,k],olive:[128,128,0],yellow:[k,k,0],orange:[k,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[k,0,0],pink:[k,192,203],cyan:[0,k,k],transparent:[k,k,k,0]},Ve=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*k+.5|0},Wr=function(t,e,i){var s=t?bt(t)?[t>>16,t>>8&k,t&k]:0:he.black,n,a,h,o,l,f,u,c,_,g;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),he[t])s=he[t];else if(t.charAt(0)==="#"){if(t.length<6&&(n=t.charAt(1),a=t.charAt(2),h=t.charAt(3),t="#"+n+n+a+a+h+h+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&k,s&k,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&k,t&k]}else if(t.substr(0,3)==="hsl"){if(s=g=t.match(ti),!e)o=+s[0]%360/360,l=+s[1]/100,f=+s[2]/100,a=f<=.5?f*(l+1):f+l-f*l,n=f*2-a,s.length>3&&(s[3]*=1),s[0]=Ve(o+1/3,n,a),s[1]=Ve(o,n,a),s[2]=Ve(o-1/3,n,a);else if(~t.indexOf("="))return s=t.match(Ar),i&&s.length<4&&(s[3]=1),s}else s=t.match(ti)||he.transparent;s=s.map(Number)}return e&&!g&&(n=s[0]/k,a=s[1]/k,h=s[2]/k,u=Math.max(n,a,h),c=Math.min(n,a,h),f=(u+c)/2,u===c?o=l=0:(_=u-c,l=f>.5?_/(2-u-c):_/(u+c),o=u===n?(a-h)/_+(a<h?6:0):u===a?(h-n)/_+2:(n-a)/_+4,o*=60),s[0]=~~(o+.5),s[1]=~~(l*100+.5),s[2]=~~(f*100+.5)),i&&s.length<4&&(s[3]=1),s},Zr=function(t){var e=[],i=[],s=-1;return t.split(Ct).forEach(function(n){var a=n.match($t)||[];e.push.apply(e,a),i.push(s+=a.length+1)}),e.c=i,e},$i=function(t,e,i){var s="",n=(t+s).match(Ct),a=e?"hsla(":"rgba(",h=0,o,l,f,u;if(!n)return t;if(n=n.map(function(c){return(c=Wr(c,e,1))&&a+(e?c[0]+","+c[1]+"%,"+c[2]+"%,"+c[3]:c.join(","))+")"}),i&&(f=Zr(t),o=i.c,o.join(s)!==f.c.join(s)))for(l=t.replace(Ct,"1").split($t),u=l.length-1;h<u;h++)s+=l[h]+(~o.indexOf(h)?n.shift()||a+"0,0,0,0)":(f.length?f:n.length?n:i).shift());if(!l)for(l=t.split(Ct),u=l.length-1;h<u;h++)s+=l[h]+n[h];return s+l[u]},Ct=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in he)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),tn=/hsl[a]?\(/,Qr=function(t){var e=t.join(" "),i;if(Ct.lastIndex=0,Ct.test(e))return i=tn.test(e),t[1]=$i(t[1],i),t[0]=$i(t[0],i,Zr(t[1])),!0},de,it=function(){var r=Date.now,t=500,e=33,i=r(),s=i,n=1e3/240,a=n,h=[],o,l,f,u,c,_,g=function d(p){var m=r()-s,x=p===!0,y,v,w,b;if(m>t&&(i+=m-e),s+=m,w=s-i,y=w-a,(y>0||x)&&(b=++u.frame,c=w-u.time*1e3,u.time=w=w/1e3,a+=y+(y>=n?4:n-y),v=1),x||(o=l(d)),v)for(_=0;_<h.length;_++)h[_](w,c,b,p)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return c/(1e3/(p||60))},wake:function(){Cr&&(!ei&&Sr()&&(ht=ei=window,Ti=ht.document||{},st.gsap=nt,(ht.gsapVersions||(ht.gsapVersions=[])).push(nt.version),Or(be||ht.GreenSockGlobals||!ht.gsap&&ht||{}),f=ht.requestAnimationFrame),o&&u.sleep(),l=f||function(p){return setTimeout(p,a-u.time*1e3+1|0)},de=1,g(2))},sleep:function(){(f?ht.cancelAnimationFrame:clearTimeout)(o),de=0,l=ue},lagSmoothing:function(p,m){t=p||1/z,e=Math.min(m,t,0)},fps:function(p){n=1e3/(p||240),a=u.time*1e3+n},add:function(p,m,x){var y=m?function(v,w,b,S){p(v,w,b,S),u.remove(y)}:p;return u.remove(p),h[x?"unshift":"push"](y),te(),y},remove:function(p,m){~(m=h.indexOf(p))&&h.splice(m,1)&&_>=m&&_--},_listeners:h},u}(),te=function(){return!de&&it.wake()},F={},en=/^[\d.\-M][\d.\-,\s]/,rn=/["']/g,sn=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),s=i[0],n=1,a=i.length,h,o,l;n<a;n++)o=i[n],h=n!==a-1?o.lastIndexOf(","):o.length,l=o.substr(0,h),e[s]=isNaN(l)?l.replace(rn,"").trim():+l,s=o.substr(h+1).trim();return e},nn=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),s=t.indexOf("(",e);return t.substring(e,~s&&s<i?t.indexOf(")",i+1):i)},an=function(t){var e=(t+"").split("("),i=F[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[sn(e[1])]:nn(t).split(",").map(Lr)):F._CE&&en.test(t)?F._CE("",t):i},Kr=function(t){return function(e){return 1-t(1-e)}},Jr=function r(t,e){for(var i=t._first,s;i;)i instanceof j?r(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?r(i.timeline,e):(s=i._ease,i._ease=i._yEase,i._yEase=s,i._yoyo=e)),i=i._next},Vt=function(t,e){return t&&(U(t)?t:F[t]||an(t))||e},qt=function(t,e,i,s){i===void 0&&(i=function(o){return 1-e(1-o)}),s===void 0&&(s=function(o){return o<.5?e(o*2)/2:1-e((1-o)*2)/2});var n={easeIn:e,easeOut:i,easeInOut:s},a;return Q(t,function(h){F[h]=st[h]=n,F[a=h.toLowerCase()]=i;for(var o in n)F[a+(o==="easeIn"?".in":o==="easeOut"?".out":".inOut")]=F[h+"."+o]=n[o]}),n},ts=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Xe=function r(t,e,i){var s=e>=1?e:1,n=(i||(t?.3:.45))/(e<1?e:1),a=n/Je*(Math.asin(1/s)||0),h=function(f){return f===1?1:s*Math.pow(2,-10*f)*Fs((f-a)*n)+1},o=t==="out"?h:t==="in"?function(l){return 1-h(1-l)}:ts(h);return n=Je/n,o.config=function(l,f){return r(t,l,f)},o},qe=function r(t,e){e===void 0&&(e=1.70158);var i=function(a){return a?--a*a*((e+1)*a+e)+1:0},s=t==="out"?i:t==="in"?function(n){return 1-i(1-n)}:ts(i);return s.config=function(n){return r(t,n)},s};Q("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;qt(r+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});F.Linear.easeNone=F.none=F.Linear.easeIn;qt("Elastic",Xe("in"),Xe("out"),Xe());(function(r,t){var e=1/t,i=2*e,s=2.5*e,n=function(h){return h<e?r*h*h:h<i?r*Math.pow(h-1.5/t,2)+.75:h<s?r*(h-=2.25/t)*h+.9375:r*Math.pow(h-2.625/t,2)+.984375};qt("Bounce",function(a){return 1-n(1-a)},n)})(7.5625,2.75);qt("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});qt("Circ",function(r){return-(Er(1-r*r)-1)});qt("Sine",function(r){return r===1?1:-Os(r*Ps)+1});qt("Back",qe("in"),qe("out"),qe());F.SteppedEase=F.steps=st.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,s=t+(e?0:1),n=e?1:0,a=1-z;return function(h){return((s*me(0,a,h)|0)+n)*i}}};Qt.ease=F["quad.out"];Q("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Mi+=r+","+r+"Params,"});var es=function(t,e){this.id=Cs++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:zr,this.set=e?e.getSetter:Oi},ee=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Jt(this,+e.duration,1,1),this.data=e.data,X&&(this._ctx=X,X.data.push(this)),de||it.wake()}var t=r.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Jt(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,s){if(te(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Ne(this,i),!n._dp||n.parent||Br(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&gt(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===z||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),kr(this,i,s)),this},t.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Xi(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},t.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Xi(this),s):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(i,s){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*n,s):this._repeat?Kt(this._tTime,n)+1:1},t.timeScale=function(i){if(!arguments.length)return this._rts===-z?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Me(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-z?0:this._rts,this.totalTime(me(-this._delay,this._tDur,s),!0),Le(this),Bs(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(te(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==z&&(this._tTime-=z)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&gt(s,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Z(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Me(s.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=ks);var s=W;return W=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),W=s,this},t.globalTime=function(i){for(var s=this,n=arguments.length?i:s.rawTime();s;)n=s._start+n/(s._ts||1),s=s._dp;return!this.parent&&this.vars.immediateRender?-1:n},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,qi(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,qi(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,s){return this.totalTime(at(this,i),Z(s))},t.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,Z(s))},t.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},t.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-z:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-z,this},t.isActive=function(){var i=this.parent||this._dp,s=this._start,n;return!!(!i||this._ts&&this._initted&&i.isActive()&&(n=i.rawTime(!0))>=s&&n<this.endTime(!0)-z)},t.eventCallback=function(i,s,n){var a=this.vars;return arguments.length>1?(s?(a[i]=s,n&&(a[i+"Params"]=n),i==="onUpdate"&&(this._onUpdate=s)):delete a[i],this):a[i]},t.then=function(i){var s=this;return new Promise(function(n){var a=U(i)?i:Nr,h=function(){var l=s.then;s.then=null,U(a)&&(a=a(s))&&(a.then||a===s)&&(s.then=l),n(a),s.then=l};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?h():s._prom=h})},t.kill=function(){ae(this)},r}();ut(ee.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-z,_prom:0,_ps:!1,_rts:1});var j=function(r){Tr(t,r);function t(i,s){var n;return i===void 0&&(i={}),n=r.call(this,i)||this,n.labels={},n.smoothChildTiming=!!i.smoothChildTiming,n.autoRemoveChildren=!!i.autoRemoveChildren,n._sort=Z(i.sortChildren),N&&gt(i.parent||N,xt(n),s),i.reversed&&n.reverse(),i.paused&&n.paused(!0),i.scrollTrigger&&Ur(xt(n),i.scrollTrigger),n}var e=t.prototype;return e.to=function(s,n,a){return le(0,arguments,this),this},e.from=function(s,n,a){return le(1,arguments,this),this},e.fromTo=function(s,n,a,h){return le(2,arguments,this),this},e.set=function(s,n,a){return n.duration=0,n.parent=this,oe(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new q(s,n,at(this,a),1),this},e.call=function(s,n,a){return gt(this,q.delayedCall(0,s,n),a)},e.staggerTo=function(s,n,a,h,o,l,f){return a.duration=n,a.stagger=a.stagger||h,a.onComplete=l,a.onCompleteParams=f,a.parent=this,new q(s,a,at(this,o)),this},e.staggerFrom=function(s,n,a,h,o,l,f){return a.runBackwards=1,oe(a).immediateRender=Z(a.immediateRender),this.staggerTo(s,n,a,h,o,l,f)},e.staggerFromTo=function(s,n,a,h,o,l,f,u){return h.startAt=a,oe(h).immediateRender=Z(h.immediateRender),this.staggerTo(s,n,h,o,l,f,u)},e.render=function(s,n,a){var h=this._time,o=this._dirty?this.totalDuration():this._tDur,l=this._dur,f=s<=0?0:$(s),u=this._zTime<0!=s<0&&(this._initted||!l),c,_,g,d,p,m,x,y,v,w,b,S;if(this!==N&&f>o&&s>=0&&(f=o),f!==this._tTime||a||u){if(h!==this._time&&l&&(f+=this._time-h,s+=this._time-h),c=f,v=this._start,y=this._ts,m=!y,u&&(l||(h=this._zTime),(s||!n)&&(this._zTime=s)),this._repeat){if(b=this._yoyo,p=l+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(p*100+s,n,a);if(c=$(f%p),f===o?(d=this._repeat,c=l):(d=~~(f/p),d&&d===f/p&&(c=l,d--),c>l&&(c=l)),w=Kt(this._tTime,p),!h&&this._tTime&&w!==d&&(w=d),b&&d&1&&(c=l-c,S=1),d!==w&&!this._lock){var E=b&&w&1,T=E===(b&&d&1);if(d<w&&(E=!E),h=E?0:l,this._lock=1,this.render(h||(S?0:$(d*p)),n,!l)._lock=0,this._tTime=f,!n&&this.parent&&ft(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1),h&&h!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,o=this._tDur,T&&(this._lock=2,h=E?l:-1e-4,this.render(h,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Jr(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=qs(this,$(h),$(c)),x&&(f-=c-(c=x._start))),this._tTime=f,this._time=c,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,h=0),!h&&c&&!n&&(ft(this,"onStart"),this._tTime!==f))return this;if(c>=h&&s>=0)for(_=this._first;_;){if(g=_._next,(_._act||c>=_._start)&&_._ts&&x!==_){if(_.parent!==this)return this.render(s,n,a);if(_.render(_._ts>0?(c-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(c-_._start)*_._ts,n,a),c!==this._time||!this._ts&&!m){x=0,g&&(f+=this._zTime=-z);break}}_=g}else{_=this._last;for(var R=s<0?s:c;_;){if(g=_._prev,(_._act||R<=_._end)&&_._ts&&x!==_){if(_.parent!==this)return this.render(s,n,a);if(_.render(_._ts>0?(R-_._start)*_._ts:(_._dirty?_.totalDuration():_._tDur)+(R-_._start)*_._ts,n,a||W&&(_._initted||_._startAt)),c!==this._time||!this._ts&&!m){x=0,g&&(f+=this._zTime=R?-z:z);break}}_=g}}if(x&&!n&&(this.pause(),x.render(c>=h?0:-z)._zTime=c>=h?1:-1,this._ts))return this._start=v,Le(this),this.render(s,n,a);this._onUpdate&&!n&&ft(this,"onUpdate",!0),(f===o&&this._tTime>=this.totalDuration()||!f&&h)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((s||!l)&&(f===o&&this._ts>0||!f&&this._ts<0)&&Ot(this,1),!n&&!(s<0&&!h)&&(f||h||!o)&&(ft(this,f===o&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<o&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(s,n){var a=this;if(bt(n)||(n=at(this,n,s)),!(s instanceof ee)){if(H(s))return s.forEach(function(h){return a.add(h,n)}),this;if(G(s))return this.addLabel(s,n);if(U(s))s=q.delayedCall(0,s);else return this}return this!==s?gt(this,s,n):this},e.getChildren=function(s,n,a,h){s===void 0&&(s=!0),n===void 0&&(n=!0),a===void 0&&(a=!0),h===void 0&&(h=-ot);for(var o=[],l=this._first;l;)l._start>=h&&(l instanceof q?n&&o.push(l):(a&&o.push(l),s&&o.push.apply(o,l.getChildren(!0,n,a)))),l=l._next;return o},e.getById=function(s){for(var n=this.getChildren(1,1,1),a=n.length;a--;)if(n[a].vars.id===s)return n[a]},e.remove=function(s){return G(s)?this.removeLabel(s):U(s)?this.killTweensOf(s):(ke(this,s),s===this._recent&&(this._recent=this._last),Ut(this))},e.totalTime=function(s,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$(it.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),r.prototype.totalTime.call(this,s,n),this._forcing=0,this):this._tTime},e.addLabel=function(s,n){return this.labels[s]=at(this,n),this},e.removeLabel=function(s){return delete this.labels[s],this},e.addPause=function(s,n,a){var h=q.delayedCall(0,n||ue,a);return h.data="isPause",this._hasPause=1,gt(this,h,at(this,s))},e.removePause=function(s){var n=this._first;for(s=at(this,s);n;)n._start===s&&n.data==="isPause"&&Ot(n),n=n._next},e.killTweensOf=function(s,n,a){for(var h=this.getTweensOf(s,a),o=h.length;o--;)St!==h[o]&&h[o].kill(s,n);return this},e.getTweensOf=function(s,n){for(var a=[],h=lt(s),o=this._first,l=bt(n),f;o;)o instanceof q?Ls(o._targets,h)&&(l?(!St||o._initted&&o._ts)&&o.globalTime(0)<=n&&o.globalTime(o.totalDuration())>n:!n||o.isActive())&&a.push(o):(f=o.getTweensOf(h,n)).length&&a.push.apply(a,f),o=o._next;return a},e.tweenTo=function(s,n){n=n||{};var a=this,h=at(a,s),o=n,l=o.startAt,f=o.onStart,u=o.onStartParams,c=o.immediateRender,_,g=q.to(a,ut({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:h,overwrite:"auto",duration:n.duration||Math.abs((h-(l&&"time"in l?l.time:a._time))/a.timeScale())||z,onStart:function(){if(a.pause(),!_){var p=n.duration||Math.abs((h-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==p&&Jt(g,p,0,1).render(g._time,!0,!0),_=1}f&&f.apply(g,u||[])}},n));return c?g.render(0):g},e.tweenFromTo=function(s,n,a){return this.tweenTo(n,ut({startAt:{time:at(this,s)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(s){return s===void 0&&(s=this._time),Gi(this,at(this,s))},e.previousLabel=function(s){return s===void 0&&(s=this._time),Gi(this,at(this,s),1)},e.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+z)},e.shiftChildren=function(s,n,a){a===void 0&&(a=0);for(var h=this._first,o=this.labels,l;h;)h._start>=a&&(h._start+=s,h._end+=s),h=h._next;if(n)for(l in o)o[l]>=a&&(o[l]+=s);return Ut(this)},e.invalidate=function(s){var n=this._first;for(this._lock=0;n;)n.invalidate(s),n=n._next;return r.prototype.invalidate.call(this,s)},e.clear=function(s){s===void 0&&(s=!0);for(var n=this._first,a;n;)a=n._next,this.remove(n),n=a;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Ut(this)},e.totalDuration=function(s){var n=0,a=this,h=a._last,o=ot,l,f,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-s:s));if(a._dirty){for(u=a.parent;h;)l=h._prev,h._dirty&&h.totalDuration(),f=h._start,f>o&&a._sort&&h._ts&&!a._lock?(a._lock=1,gt(a,h,f-h._delay,1)._lock=0):o=f,f<0&&h._ts&&(n-=f,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=f/a._ts,a._time-=f,a._tTime-=f),a.shiftChildren(-f,!1,-1/0),o=0),h._end>n&&h._ts&&(n=h._end),h=l;Jt(a,a===N&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(s){if(N._ts&&(kr(N,Me(s,N)),Dr=it.frame),it.frame>=Ui){Ui+=rt.autoSleep||120;var n=N._first;if((!n||!n._ts)&&rt.autoSleep&&it._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||it.sleep()}}},t}(ee);ut(j.prototype,{_lock:0,_hasPause:0,_forcing:0});var hn=function(t,e,i,s,n,a,h){var o=new K(this._pt,t,e,0,1,hs,null,n),l=0,f=0,u,c,_,g,d,p,m,x;for(o.b=i,o.e=s,i+="",s+="",(m=~s.indexOf("random("))&&(s=ce(s)),a&&(x=[i,s],a(x,t,e),i=x[0],s=x[1]),c=i.match(Be)||[];u=Be.exec(s);)g=u[0],d=s.substring(l,u.index),_?_=(_+1)%5:d.substr(-5)==="rgba("&&(_=1),g!==c[f++]&&(p=parseFloat(c[f-1])||0,o._pt={_next:o._pt,p:d||f===1?d:",",s:p,c:g.charAt(1)==="="?jt(p,g)-p:parseFloat(g)-p,m:_&&_<4?Math.round:0},l=Be.lastIndex);return o.c=l<s.length?s.substring(l,s.length):"",o.fp=h,(Rr.test(s)||m)&&(o.e=0),this._pt=o,o},Ri=function(t,e,i,s,n,a,h,o,l,f){U(s)&&(s=s(n||0,t,a));var u=t[e],c=i!=="get"?i:U(u)?l?t[e.indexOf("set")||!U(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,_=U(u)?l?cn:ns:Ci,g;if(G(s)&&(~s.indexOf("random(")&&(s=ce(s)),s.charAt(1)==="="&&(g=jt(c,s)+(Y(c)||0),(g||g===0)&&(s=g))),!f||c!==s||oi)return!isNaN(c*s)&&s!==""?(g=new K(this._pt,t,e,+c||0,s-(c||0),typeof u=="boolean"?_n:as,0,_),l&&(g.fp=l),h&&g.modifier(h,this,t),this._pt=g):(!u&&!(e in t)&&Ei(e,s),hn.call(this,t,e,c,s,_,o||rt.stringFilter,l))},on=function(t,e,i,s,n){if(U(t)&&(t=fe(t,n,e,i,s)),!mt(t)||t.style&&t.nodeType||H(t)||Mr(t))return G(t)?fe(t,n,e,i,s):t;var a={},h;for(h in t)a[h]=fe(t[h],n,e,i,s);return a},is=function(t,e,i,s,n,a){var h,o,l,f;if(et[t]&&(h=new et[t]).init(n,h.rawVars?e[t]:on(e[t],s,n,a,i),i,s,a)!==!1&&(i._pt=o=new K(i._pt,n,t,0,1,h.render,h,0,h.priority),i!==Yt))for(l=i._ptLookup[i._targets.indexOf(n)],f=h._props.length;f--;)l[h._props[f]]=o;return h},St,oi,Pi=function r(t,e,i){var s=t.vars,n=s.ease,a=s.startAt,h=s.immediateRender,o=s.lazy,l=s.onUpdate,f=s.onUpdateParams,u=s.callbackScope,c=s.runBackwards,_=s.yoyoEase,g=s.keyframes,d=s.autoRevert,p=t._dur,m=t._startAt,x=t._targets,y=t.parent,v=y&&y.data==="nested"?y.vars.targets:x,w=t._overwrite==="auto"&&!wi,b=t.timeline,S,E,T,R,A,C,O,M,D,B,L,P,J;if(b&&(!g||!n)&&(n="none"),t._ease=Vt(n,Qt.ease),t._yEase=_?Kr(Vt(_===!0?n:_,Qt.ease)):0,_&&t._yoyo&&!t._repeat&&(_=t._yEase,t._yEase=t._ease,t._ease=_),t._from=!b&&!!s.runBackwards,!b||g&&!s.stagger){if(M=x[0]?Bt(x[0]).harness:0,P=M&&s[M.prop],S=Se(s,Si),m&&(m._zTime<0&&m.progress(1),e<0&&c&&h&&!d?m.render(-1,!0):m.revert(c&&p?xe:zs),m._lazy=0),a){if(Ot(t._startAt=q.set(x,ut({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:Z(o),startAt:null,delay:0,onUpdate:l,onUpdateParams:f,callbackScope:u,stagger:0},a))),t._startAt._dp=0,e<0&&(W||!h&&!d)&&t._startAt.revert(xe),h&&p&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(c&&p&&!m){if(e&&(h=!1),T=ut({overwrite:!1,data:"isFromStart",lazy:h&&Z(o),immediateRender:h,stagger:0,parent:y},S),P&&(T[M.prop]=P),Ot(t._startAt=q.set(x,T)),t._startAt._dp=0,e<0&&(W?t._startAt.revert(xe):t._startAt.render(-1,!0)),t._zTime=e,!h)r(t._startAt,z,z);else if(!e)return}for(t._pt=t._ptCache=0,o=p&&Z(o)||o&&!p,E=0;E<x.length;E++){if(A=x[E],O=A._gsap||Ai(x)[E]._gsap,t._ptLookup[E]=B={},ii[O.id]&&Pt.length&&Ee(),L=v===x?E:v.indexOf(A),M&&(D=new M).init(A,P||S,t,L,v)!==!1&&(t._pt=R=new K(t._pt,A,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(tt){B[tt]=R}),D.priority&&(C=1)),!M||P)for(T in S)et[T]&&(D=is(T,S,t,L,A,v))?D.priority&&(C=1):B[T]=R=Ri.call(t,A,T,"get",S[T],L,v,0,s.stringFilter);t._op&&t._op[E]&&t.kill(A,t._op[E]),w&&t._pt&&(St=t,N.killTweensOf(A,B,t.globalTime(e)),J=!t.parent,St=0),t._pt&&o&&(ii[O.id]=1)}C&&os(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!J,g&&e<=0&&b.render(ot,!0,!0)},ln=function(t,e,i,s,n,a,h){var o=(t._pt&&t._ptCache||(t._ptCache={}))[e],l,f,u,c;if(!o)for(o=t._ptCache[e]=[],u=t._ptLookup,c=t._targets.length;c--;){if(l=u[c][e],l&&l.d&&l.d._pt)for(l=l.d._pt;l&&l.p!==e&&l.fp!==e;)l=l._next;if(!l)return oi=1,t.vars[e]="+=0",Pi(t,h),oi=0,1;o.push(l)}for(c=o.length;c--;)f=o[c],l=f._pt||f,l.s=(s||s===0)&&!n?s:l.s+(s||0)+a*l.c,l.c=i-l.s,f.e&&(f.e=V(i)+Y(f.e)),f.b&&(f.b=l.s+Y(f.b))},fn=function(t,e){var i=t[0]?Bt(t[0]).harness:0,s=i&&i.aliases,n,a,h,o;if(!s)return e;n=Xt({},e);for(a in s)if(a in n)for(o=s[a].split(","),h=o.length;h--;)n[o[h]]=n[a];return n},un=function(t,e,i,s){var n=e.ease||s||"power1.inOut",a,h;if(H(e))h=i[t]||(i[t]=[]),e.forEach(function(o,l){return h.push({t:l/(e.length-1)*100,v:o,e:n})});else for(a in e)h=i[a]||(i[a]=[]),a==="ease"||h.push({t:parseFloat(t),v:e[a],e:n})},fe=function(t,e,i,s,n){return U(t)?t.call(e,i,s,n):G(t)&&~t.indexOf("random(")?ce(t):t},rs=Mi+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ss={};Q(rs+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ss[r]=1});var q=function(r){Tr(t,r);function t(i,s,n,a){var h;typeof s=="number"&&(n.duration=s,s=n,n=null),h=r.call(this,a?s:oe(s))||this;var o=h.vars,l=o.duration,f=o.delay,u=o.immediateRender,c=o.stagger,_=o.overwrite,g=o.keyframes,d=o.defaults,p=o.scrollTrigger,m=o.yoyoEase,x=s.parent||N,y=(H(i)||Mr(i)?bt(i[0]):"length"in s)?[i]:lt(i),v,w,b,S,E,T,R,A;if(h._targets=y.length?Ai(y):Te("GSAP target "+i+" not found. https://greensock.com",!rt.nullTargetWarn)||[],h._ptLookup=[],h._overwrite=_,g||c||ye(l)||ye(f)){if(s=h.vars,v=h.timeline=new j({data:"nested",defaults:d||{},targets:x&&x.data==="nested"?x.vars.targets:y}),v.kill(),v.parent=v._dp=xt(h),v._start=0,c||ye(l)||ye(f)){if(S=y.length,R=c&&Gr(c),mt(c))for(E in c)~rs.indexOf(E)&&(A||(A={}),A[E]=c[E]);for(w=0;w<S;w++)b=Se(s,ss),b.stagger=0,m&&(b.yoyoEase=m),A&&Xt(b,A),T=y[w],b.duration=+fe(l,xt(h),w,T,y),b.delay=(+fe(f,xt(h),w,T,y)||0)-h._delay,!c&&S===1&&b.delay&&(h._delay=f=b.delay,h._start+=f,b.delay=0),v.to(T,b,R?R(w,T,y):0),v._ease=F.none;v.duration()?l=f=0:h.timeline=0}else if(g){oe(ut(v.vars.defaults,{ease:"none"})),v._ease=Vt(g.ease||s.ease||"none");var C=0,O,M,D;if(H(g))g.forEach(function(B){return v.to(y,B,">")}),v.duration();else{b={};for(E in g)E==="ease"||E==="easeEach"||un(E,g[E],b,g.easeEach);for(E in b)for(O=b[E].sort(function(B,L){return B.t-L.t}),C=0,w=0;w<O.length;w++)M=O[w],D={ease:M.e,duration:(M.t-(w?O[w-1].t:0))/100*l},D[E]=M.v,v.to(y,D,C),C+=D.duration;v.duration()<l&&v.to({},{duration:l-v.duration()})}}l||h.duration(l=v.duration())}else h.timeline=0;return _===!0&&!wi&&(St=xt(h),N.killTweensOf(y),St=0),gt(x,xt(h),n),s.reversed&&h.reverse(),s.paused&&h.paused(!0),(u||!l&&!g&&h._start===$(x._time)&&Z(u)&&Us(xt(h))&&x.data!=="nested")&&(h._tTime=-z,h.render(Math.max(0,-f)||0)),p&&Ur(xt(h),p),h}var e=t.prototype;return e.render=function(s,n,a){var h=this._time,o=this._tDur,l=this._dur,f=s<0,u=s>o-z&&!f?o:s<z?0:s,c,_,g,d,p,m,x,y,v;if(!l)Xs(this,s,n,a);else if(u!==this._tTime||!s||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f){if(c=u,y=this.timeline,this._repeat){if(d=l+this._rDelay,this._repeat<-1&&f)return this.totalTime(d*100+s,n,a);if(c=$(u%d),u===o?(g=this._repeat,c=l):(g=~~(u/d),g&&g===u/d&&(c=l,g--),c>l&&(c=l)),m=this._yoyo&&g&1,m&&(v=this._yEase,c=l-c),p=Kt(this._tTime,d),c===h&&!a&&this._initted)return this._tTime=u,this;g!==p&&(y&&this._yEase&&Jr(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&(this._lock=a=1,this.render($(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(Vr(this,f?s:c,a,n,u))return this._tTime=0,this;if(h!==this._time)return this;if(l!==this._dur)return this.render(s,n,a)}if(this._tTime=u,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(c/l),this._from&&(this.ratio=x=1-x),c&&!h&&!n&&(ft(this,"onStart"),this._tTime!==u))return this;for(_=this._pt;_;)_.r(x,_.d),_=_._next;y&&y.render(s<0?s:!c&&m?-z:y._dur*y._ease(c/this._dur),n,a)||this._startAt&&(this._zTime=s),this._onUpdate&&!n&&(f&&ri(this,s,n,a),ft(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!n&&this.parent&&ft(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(f&&!this._onUpdate&&ri(this,s,!0,!0),(s||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ot(this,1),!n&&!(f&&!h)&&(u||h||m)&&(ft(this,u===o?"onComplete":"onReverseComplete",!0),this._prom&&!(u<o&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),r.prototype.invalidate.call(this,s)},e.resetTo=function(s,n,a,h){de||it.wake(),this._ts||this.play();var o=Math.min(this._dur,(this._dp._time-this._start)*this._ts),l;return this._initted||Pi(this,o),l=this._ease(o/this._dur),ln(this,s,n,a,h,l,o)?this.resetTo(s,n,a,h):(Ne(this,0),this.parent||Ir(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(s,n){if(n===void 0&&(n="all"),!s&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?ae(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(s,n,St&&St.vars.overwrite!==!0)._first||ae(this),this.parent&&a!==this.timeline.totalDuration()&&Jt(this,this._dur*this.timeline._tDur/a,0,1),this}var h=this._targets,o=s?lt(s):h,l=this._ptLookup,f=this._pt,u,c,_,g,d,p,m;if((!n||n==="all")&&Is(h,o))return n==="all"&&(this._pt=0),ae(this);for(u=this._op=this._op||[],n!=="all"&&(G(n)&&(d={},Q(n,function(x){return d[x]=1}),n=d),n=fn(h,n)),m=h.length;m--;)if(~o.indexOf(h[m])){c=l[m],n==="all"?(u[m]=n,g=c,_={}):(_=u[m]=u[m]||{},g=n);for(d in g)p=c&&c[d],p&&((!("kill"in p.d)||p.d.kill(d)===!0)&&ke(this,p,"_pt"),delete c[d]),_!=="all"&&(_[d]=1)}return this._initted&&!this._pt&&f&&ae(this),this},t.to=function(s,n){return new t(s,n,arguments[2])},t.from=function(s,n){return le(1,arguments)},t.delayedCall=function(s,n,a,h){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:n,onReverseComplete:n,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:h})},t.fromTo=function(s,n,a){return le(2,arguments)},t.set=function(s,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(s,n)},t.killTweensOf=function(s,n,a){return N.killTweensOf(s,n,a)},t}(ee);ut(q.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Q("staggerTo,staggerFrom,staggerFromTo",function(r){q[r]=function(){var t=new j,e=ni.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Ci=function(t,e,i){return t[e]=i},ns=function(t,e,i){return t[e](i)},cn=function(t,e,i,s){return t[e](s.fp,i)},dn=function(t,e,i){return t.setAttribute(e,i)},Oi=function(t,e){return U(t[e])?ns:bi(t[e])&&t.setAttribute?dn:Ci},as=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},_n=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},hs=function(t,e){var i=e._pt,s="";if(!t&&e.b)s=e.b;else if(t===1&&e.e)s=e.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+s,i=i._next;s+=e.c}e.set(e.t,e.p,s,e)},Fi=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},gn=function(t,e,i,s){for(var n=this._pt,a;n;)a=n._next,n.p===s&&n.modifier(t,e,i),n=a},pn=function(t){for(var e=this._pt,i,s;e;)s=e._next,e.p===t&&!e.op||e.op===t?ke(this,e,"_pt"):e.dep||(i=1),e=s;return!i},mn=function(t,e,i,s){s.mSet(t,e,s.m.call(s.tween,i,s.mt),s)},os=function(t){for(var e=t._pt,i,s,n,a;e;){for(i=e._next,s=n;s&&s.pr>e.pr;)s=s._next;(e._prev=s?s._prev:a)?e._prev._next=e:n=e,(e._next=s)?s._prev=e:a=e,e=i}t._pt=n},K=function(){function r(e,i,s,n,a,h,o,l,f){this.t=i,this.s=n,this.c=a,this.p=s,this.r=h||as,this.d=o||this,this.set=l||Ci,this.pr=f||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(i,s,n){this.mSet=this.mSet||this.set,this.set=mn,this.m=i,this.mt=n,this.tween=s},r}();Q(Mi+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Si[r]=1});st.TweenMax=st.TweenLite=q;st.TimelineLite=st.TimelineMax=j;N=new j({sortChildren:!1,defaults:Qt,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});rt.stringFilter=Qr;var ie=[],we={},yn=[],Yi=0,Ge=function(t){return(we[t]||yn).map(function(e){return e()})},li=function(){var t=Date.now(),e=[];t-Yi>2&&(Ge("matchMediaInit"),ie.forEach(function(i){var s=i.queries,n=i.conditions,a,h,o,l;for(h in s)a=ht.matchMedia(s[h]).matches,a&&(o=1),a!==n[h]&&(n[h]=a,l=1);l&&(i.revert(),o&&e.push(i))}),Ge("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i)}),Yi=t,Ge("matchMedia"))},ls=function(){function r(e,i){this.selector=i&&ai(i),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=r.prototype;return t.add=function(i,s,n){U(i)&&(n=s,s=i,i=U);var a=this,h=function(){var l=X,f=a.selector,u;return l&&l!==a&&l.data.push(a),n&&(a.selector=ai(n)),X=a,u=s.apply(a,arguments),U(u)&&a._r.push(u),X=l,a.selector=f,a.isReverted=!1,u};return a.last=h,i===U?h(a):i?a[i]=h:h},t.ignore=function(i){var s=X;X=null,i(this),X=s},t.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof r?i.push.apply(i,s.getTweens()):s instanceof q&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,s){var n=this;if(i){var a=this.getTweens();this.data.forEach(function(o){o.data==="isFlip"&&(o.revert(),o.getChildren(!0,!0,!1).forEach(function(l){return a.splice(a.indexOf(l),1)}))}),a.map(function(o){return{g:o.globalTime(0),t:o}}).sort(function(o,l){return l.g-o.g||-1}).forEach(function(o){return o.t.revert(i)}),this.data.forEach(function(o){return!(o instanceof ee)&&o.revert&&o.revert(i)}),this._r.forEach(function(o){return o(i,n)}),this.isReverted=!0}else this.data.forEach(function(o){return o.kill&&o.kill()});if(this.clear(),s){var h=ie.indexOf(this);~h&&ie.splice(h,1)}},t.revert=function(i){this.kill(i||{})},r}(),xn=function(){function r(e){this.contexts=[],this.scope=e}var t=r.prototype;return t.add=function(i,s,n){mt(i)||(i={matches:i});var a=new ls(0,n||this.scope),h=a.conditions={},o,l,f;this.contexts.push(a),s=a.add("onMatch",s),a.queries=i;for(l in i)l==="all"?f=1:(o=ht.matchMedia(i[l]),o&&(ie.indexOf(a)<0&&ie.push(a),(h[l]=o.matches)&&(f=1),o.addListener?o.addListener(li):o.addEventListener("change",li)));return f&&s(a),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},r}(),Ae={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(s){return Js(s)})},timeline:function(t){return new j(t)},getTweensOf:function(t,e){return N.getTweensOf(t,e)},getProperty:function(t,e,i,s){G(t)&&(t=lt(t)[0]);var n=Bt(t||{}).get,a=i?Nr:Lr;return i==="native"&&(i=""),t&&(e?a((et[e]&&et[e].get||n)(t,e,i,s)):function(h,o,l){return a((et[h]&&et[h].get||n)(t,h,o,l))})},quickSetter:function(t,e,i){if(t=lt(t),t.length>1){var s=t.map(function(f){return nt.quickSetter(f,e,i)}),n=s.length;return function(f){for(var u=n;u--;)s[u](f)}}t=t[0]||{};var a=et[e],h=Bt(t),o=h.harness&&(h.harness.aliases||{})[e]||e,l=a?function(f){var u=new a;Yt._pt=0,u.init(t,i?f+i:f,Yt,0,[t]),u.render(1,u),Yt._pt&&Fi(1,Yt)}:h.set(t,o);return a?l:function(f){return l(t,o,i?f+i:f,h,1)}},quickTo:function(t,e,i){var s,n=nt.to(t,Xt((s={},s[e]="+=0.1",s.paused=!0,s),i||{})),a=function(o,l,f){return n.resetTo(e,o,l,f)};return a.tween=n,a},isTweening:function(t){return N.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Vt(t.ease,Qt.ease)),Vi(Qt,t||{})},config:function(t){return Vi(rt,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,s=t.plugins,n=t.defaults,a=t.extendTimeline;(s||"").split(",").forEach(function(h){return h&&!et[h]&&!st[h]&&Te(e+" effect requires "+h+" plugin.")}),Ue[e]=function(h,o,l){return i(lt(h),ut(o||{},n),l)},a&&(j.prototype[e]=function(h,o,l){return this.add(Ue[e](h,mt(o)?o:(l=o)&&{},this),l)})},registerEase:function(t,e){F[t]=Vt(e)},parseEase:function(t,e){return arguments.length?Vt(t,e):F},getById:function(t){return N.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new j(t),s,n;for(i.smoothChildTiming=Z(t.smoothChildTiming),N.remove(i),i._dp=0,i._time=i._tTime=N._time,s=N._first;s;)n=s._next,(e||!(!s._dur&&s instanceof q&&s.vars.onComplete===s._targets[0]))&&gt(i,s,s._start-s._delay),s=n;return gt(N,i,0),i},context:function(t,e){return t?new ls(t,e):X},matchMedia:function(t){return new xn(t)},matchMediaRefresh:function(){return ie.forEach(function(t){var e=t.conditions,i,s;for(s in e)e[s]&&(e[s]=!1,i=1);i&&t.revert()})||li()},addEventListener:function(t,e){var i=we[t]||(we[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=we[t],s=i&&i.indexOf(e);s>=0&&i.splice(s,1)},utils:{wrap:Zs,wrapYoyo:Qs,distribute:Gr,random:Yr,snap:$r,normalize:Ws,getUnit:Y,clamp:$s,splitColor:Wr,toArray:lt,selector:ai,mapRange:jr,pipe:Hs,unitize:js,interpolate:Ks,shuffle:qr},install:Or,effects:Ue,ticker:it,updateRoot:j.updateRoot,plugins:et,globalTimeline:N,core:{PropTween:K,globals:Fr,Tween:q,Timeline:j,Animation:ee,getCache:Bt,_removeLinkedListItem:ke,reverting:function(){return W},context:function(t){return t&&X&&(X.data.push(t),t._ctx=X),X},suppressOverwrites:function(t){return wi=t}}};Q("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ae[r]=q[r]});it.add(j.updateRoot);Yt=Ae.to({},{duration:0});var vn=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},wn=function(t,e){var i=t._targets,s,n,a;for(s in e)for(n=i.length;n--;)a=t._ptLookup[n][s],a&&(a=a.d)&&(a._pt&&(a=vn(a,s)),a&&a.modifier&&a.modifier(e[s],t,i[n],s))},$e=function(t,e){return{name:t,rawVars:1,init:function(s,n,a){a._onInit=function(h){var o,l;if(G(n)&&(o={},Q(n,function(f){return o[f]=1}),n=o),e){o={};for(l in n)o[l]=e(n[l]);n=o}wn(h,n)}}}},nt=Ae.registerPlugin({name:"attr",init:function(t,e,i,s,n){var a,h,o;this.tween=i;for(a in e)o=t.getAttribute(a)||"",h=this.add(t,"setAttribute",(o||0)+"",e[a],s,n,0,0,a),h.op=a,h.b=o,this._props.push(a)},render:function(t,e){for(var i=e._pt;i;)W?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},$e("roundProps",hi),$e("modifiers"),$e("snap",$r))||Ae;q.version=j.version=nt.version="3.11.3";Cr=1;Sr()&&te();F.Power0;F.Power1;F.Power2;F.Power3;F.Power4;F.Linear;F.Quad;F.Cubic;F.Quart;F.Quint;F.Strong;F.Elastic;F.Back;F.SteppedEase;F.Bounce;F.Sine;F.Expo;F.Circ;/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hi,Mt,Wt,Di,It,ji,zi,bn=function(){return typeof window<"u"},Tt={},Nt=180/Math.PI,Zt=Math.PI/180,Gt=Math.atan2,Wi=1e8,ki=/([A-Z])/g,Tn=/(left|right|width|margin|padding|x)/i,En=/[\s,\(]\S/,wt={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fi=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Sn=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Mn=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},An=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},fs=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},us=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Rn=function(t,e,i){return t.style[e]=i},Pn=function(t,e,i){return t.style.setProperty(e,i)},Cn=function(t,e,i){return t._gsap[e]=i},On=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Fn=function(t,e,i,s,n){var a=t._gsap;a.scaleX=a.scaleY=i,a.renderTransform(n,a)},Dn=function(t,e,i,s,n){var a=t._gsap;a[e]=i,a.renderTransform(n,a)},I="transform",dt=I+"Origin",zn=function(t,e){var i=this,s=this.target,n=s.style;if(t in Tt){if(this.tfm=this.tfm||{},t!=="transform"&&(t=wt[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return i.tfm[a]=vt(s,a)}):this.tfm[t]=s._gsap.x?s._gsap[t]:vt(s,t)),this.props.indexOf(I)>=0)return;s._gsap.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(dt,e,"")),t=I}(n||e)&&this.props.push(t,e,n[t])},cs=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},kn=function(){var t=this.props,e=this.target,i=e.style,s=e._gsap,n,a;for(n=0;n<t.length;n+=3)t[n+1]?e[t[n]]=t[n+2]:t[n+2]?i[t[n]]=t[n+2]:i.removeProperty(t[n].replace(ki,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)s[a]=this.tfm[a];s.svg&&(s.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),n=zi(),n&&!n.isStart&&!i[I]&&(cs(i),s.uncache=1)}},ds=function(t,e){var i={target:t,props:[],revert:kn,save:zn};return e&&e.split(",").forEach(function(s){return i.save(s)}),i},_s,ui=function(t,e){var i=Mt.createElementNS?Mt.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Mt.createElement(t);return i.style?i:Mt.createElement(t)},pt=function r(t,e,i){var s=getComputedStyle(t);return s[e]||s.getPropertyValue(e.replace(ki,"-$1").toLowerCase())||s.getPropertyValue(e)||!i&&r(t,re(e)||e,1)||""},Zi="O,Moz,ms,Ms,Webkit".split(","),re=function(t,e,i){var s=e||It,n=s.style,a=5;if(t in n&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Zi[a]+t in n););return a<0?null:(a===3?"ms":a>=0?Zi[a]:"")+t},ci=function(){bn()&&window.document&&(Hi=window,Mt=Hi.document,Wt=Mt.documentElement,It=ui("div")||{style:{}},ui("div"),I=re(I),dt=I+"Origin",It.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",_s=!!re("perspective"),zi=nt.core.reverting,Di=1)},Ye=function r(t){var e=ui("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,s=this.nextSibling,n=this.style.cssText,a;if(Wt.appendChild(e),e.appendChild(this),this.style.display="block",t)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return i&&(s?i.insertBefore(this,s):i.appendChild(this)),Wt.removeChild(e),this.style.cssText=n,a},Qi=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},gs=function(t){var e;try{e=t.getBBox()}catch{e=Ye.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Ye||(e=Ye.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+Qi(t,["x","cx","x1"])||0,y:+Qi(t,["y","cy","y1"])||0,width:0,height:0}:e},ps=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&gs(t))},_e=function(t,e){if(e){var i=t.style;e in Tt&&e!==dt&&(e=I),i.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(e.replace(ki,"-$1").toLowerCase())):i.removeAttribute(e)}},At=function(t,e,i,s,n,a){var h=new K(t._pt,e,i,0,1,a?us:fs);return t._pt=h,h.b=s,h.e=n,t._props.push(i),h},Ki={deg:1,rad:1,turn:1},Ln={grid:1,flex:1},Ft=function r(t,e,i,s){var n=parseFloat(i)||0,a=(i+"").trim().substr((n+"").length)||"px",h=It.style,o=Tn.test(e),l=t.tagName.toLowerCase()==="svg",f=(l?"client":"offset")+(o?"Width":"Height"),u=100,c=s==="px",_=s==="%",g,d,p,m;return s===a||!n||Ki[s]||Ki[a]?n:(a!=="px"&&!c&&(n=r(t,e,i,"px")),m=t.getCTM&&ps(t),(_||a==="%")&&(Tt[e]||~e.indexOf("adius"))?(g=m?t.getBBox()[o?"width":"height"]:t[f],V(_?n/g*u:n/100*g)):(h[o?"width":"height"]=u+(c?a:s),d=~e.indexOf("adius")||s==="em"&&t.appendChild&&!l?t:t.parentNode,m&&(d=(t.ownerSVGElement||{}).parentNode),(!d||d===Mt||!d.appendChild)&&(d=Mt.body),p=d._gsap,p&&_&&p.width&&o&&p.time===it.time&&!p.uncache?V(n/p.width*u):((_||a==="%")&&!Ln[pt(d,"display")]&&(h.position=pt(t,"position")),d===t&&(h.position="static"),d.appendChild(It),g=It[f],d.removeChild(It),h.position="absolute",o&&_&&(p=Bt(d),p.time=it.time,p.width=d[f]),V(c?g*n/u:g&&n?u/g*n:0))))},vt=function(t,e,i,s){var n;return Di||ci(),e in wt&&e!=="transform"&&(e=wt[e],~e.indexOf(",")&&(e=e.split(",")[0])),Tt[e]&&e!=="transform"?(n=pe(t,s),n=e!=="transformOrigin"?n[e]:n.svg?n.origin:Pe(pt(t,dt))+" "+n.zOrigin+"px"):(n=t.style[e],(!n||n==="auto"||s||~(n+"").indexOf("calc("))&&(n=Re[e]&&Re[e](t,e,i)||pt(t,e)||zr(t,e)||(e==="opacity"?1:0))),i&&!~(n+"").trim().indexOf(" ")?Ft(t,e,n,i)+i:n},Nn=function(t,e,i,s){if(!i||i==="none"){var n=re(e,t,1),a=n&&pt(t,n,1);a&&a!==i?(e=n,i=a):e==="borderColor"&&(i=pt(t,"borderTopColor"))}var h=new K(this._pt,t.style,e,0,1,hs),o=0,l=0,f,u,c,_,g,d,p,m,x,y,v,w;if(h.b=i,h.e=s,i+="",s+="",s==="auto"&&(t.style[e]=s,s=pt(t,e)||s,t.style[e]=i),f=[i,s],Qr(f),i=f[0],s=f[1],c=i.match($t)||[],w=s.match($t)||[],w.length){for(;u=$t.exec(s);)p=u[0],x=s.substring(o,u.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),p!==(d=c[l++]||"")&&(_=parseFloat(d)||0,v=d.substr((_+"").length),p.charAt(1)==="="&&(p=jt(_,p)+v),m=parseFloat(p),y=p.substr((m+"").length),o=$t.lastIndex-y.length,y||(y=y||rt.units[e]||v,o===s.length&&(s+=y,h.e+=y)),v!==y&&(_=Ft(t,e,d,y)||0),h._pt={_next:h._pt,p:x||l===1?x:",",s:_,c:m-_,m:g&&g<4||e==="zIndex"?Math.round:0});h.c=o<s.length?s.substring(o,s.length):""}else h.r=e==="display"&&s==="none"?us:fs;return Rr.test(s)&&(h.e=0),this._pt=h,h},Ji={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},In=function(t){var e=t.split(" "),i=e[0],s=e[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(t=i,i=s,s=t),e[0]=Ji[i]||i,e[1]=Ji[s]||s,e.join(" ")},Bn=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,s=i.style,n=e.u,a=i._gsap,h,o,l;if(n==="all"||n===!0)s.cssText="",o=1;else for(n=n.split(","),l=n.length;--l>-1;)h=n[l],Tt[h]&&(o=1,h=h==="transformOrigin"?dt:I),_e(i,h);o&&(_e(i,I),a&&(a.svg&&i.removeAttribute("transform"),pe(i,1),a.uncache=1,cs(s)))}},Re={clearProps:function(t,e,i,s,n){if(n.data!=="isFromStart"){var a=t._pt=new K(t._pt,e,i,0,0,Bn);return a.u=s,a.pr=-10,a.tween=n,t._props.push(i),1}}},ge=[1,0,0,1,0,0],ms={},ys=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},tr=function(t){var e=pt(t,I);return ys(e)?ge:e.substr(7).match(Ar).map(V)},Li=function(t,e){var i=t._gsap||Bt(t),s=t.style,n=tr(t),a,h,o,l;return i.svg&&t.getAttribute("transform")?(o=t.transform.baseVal.consolidate().matrix,n=[o.a,o.b,o.c,o.d,o.e,o.f],n.join(",")==="1,0,0,1,0,0"?ge:n):(n===ge&&!t.offsetParent&&t!==Wt&&!i.svg&&(o=s.display,s.display="block",a=t.parentNode,(!a||!t.offsetParent)&&(l=1,h=t.nextElementSibling,Wt.appendChild(t)),n=tr(t),o?s.display=o:_e(t,"display"),l&&(h?a.insertBefore(t,h):a?a.appendChild(t):Wt.removeChild(t))),e&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},di=function(t,e,i,s,n,a){var h=t._gsap,o=n||Li(t,!0),l=h.xOrigin||0,f=h.yOrigin||0,u=h.xOffset||0,c=h.yOffset||0,_=o[0],g=o[1],d=o[2],p=o[3],m=o[4],x=o[5],y=e.split(" "),v=parseFloat(y[0])||0,w=parseFloat(y[1])||0,b,S,E,T;i?o!==ge&&(S=_*p-g*d)&&(E=v*(p/S)+w*(-d/S)+(d*x-p*m)/S,T=v*(-g/S)+w*(_/S)-(_*x-g*m)/S,v=E,w=T):(b=gs(t),v=b.x+(~y[0].indexOf("%")?v/100*b.width:v),w=b.y+(~(y[1]||y[0]).indexOf("%")?w/100*b.height:w)),s||s!==!1&&h.smooth?(m=v-l,x=w-f,h.xOffset=u+(m*_+x*d)-m,h.yOffset=c+(m*g+x*p)-x):h.xOffset=h.yOffset=0,h.xOrigin=v,h.yOrigin=w,h.smooth=!!s,h.origin=e,h.originIsAbsolute=!!i,t.style[dt]="0px 0px",a&&(At(a,h,"xOrigin",l,v),At(a,h,"yOrigin",f,w),At(a,h,"xOffset",u,h.xOffset),At(a,h,"yOffset",c,h.yOffset)),t.setAttribute("data-svg-origin",v+" "+w)},pe=function(t,e){var i=t._gsap||new es(t);if("x"in i&&!e&&!i.uncache)return i;var s=t.style,n=i.scaleX<0,a="px",h="deg",o=getComputedStyle(t),l=pt(t,dt)||"0",f,u,c,_,g,d,p,m,x,y,v,w,b,S,E,T,R,A,C,O,M,D,B,L,P,J,tt,Et,_t,Bi,yt,zt;return f=u=c=d=p=m=x=y=v=0,_=g=1,i.svg=!!(t.getCTM&&ps(t)),o.translate&&((o.translate!=="none"||o.scale!=="none"||o.rotate!=="none")&&(s[I]=(o.translate!=="none"?"translate3d("+(o.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(o.rotate!=="none"?"rotate("+o.rotate+") ":"")+(o.scale!=="none"?"scale("+o.scale.split(" ").join(",")+") ":"")+(o[I]!=="none"?o[I]:"")),s.scale=s.rotate=s.translate="none"),S=Li(t,i.svg),i.svg&&(i.uncache?(P=t.getBBox(),l=i.xOrigin-P.x+"px "+(i.yOrigin-P.y)+"px",L=""):L=!e&&t.getAttribute("data-svg-origin"),di(t,L||l,!!L||i.originIsAbsolute,i.smooth!==!1,S)),w=i.xOrigin||0,b=i.yOrigin||0,S!==ge&&(A=S[0],C=S[1],O=S[2],M=S[3],f=D=S[4],u=B=S[5],S.length===6?(_=Math.sqrt(A*A+C*C),g=Math.sqrt(M*M+O*O),d=A||C?Gt(C,A)*Nt:0,x=O||M?Gt(O,M)*Nt+d:0,x&&(g*=Math.abs(Math.cos(x*Zt))),i.svg&&(f-=w-(w*A+b*O),u-=b-(w*C+b*M))):(zt=S[6],Bi=S[7],tt=S[8],Et=S[9],_t=S[10],yt=S[11],f=S[12],u=S[13],c=S[14],E=Gt(zt,_t),p=E*Nt,E&&(T=Math.cos(-E),R=Math.sin(-E),L=D*T+tt*R,P=B*T+Et*R,J=zt*T+_t*R,tt=D*-R+tt*T,Et=B*-R+Et*T,_t=zt*-R+_t*T,yt=Bi*-R+yt*T,D=L,B=P,zt=J),E=Gt(-O,_t),m=E*Nt,E&&(T=Math.cos(-E),R=Math.sin(-E),L=A*T-tt*R,P=C*T-Et*R,J=O*T-_t*R,yt=M*R+yt*T,A=L,C=P,O=J),E=Gt(C,A),d=E*Nt,E&&(T=Math.cos(E),R=Math.sin(E),L=A*T+C*R,P=D*T+B*R,C=C*T-A*R,B=B*T-D*R,A=L,D=P),p&&Math.abs(p)+Math.abs(d)>359.9&&(p=d=0,m=180-m),_=V(Math.sqrt(A*A+C*C+O*O)),g=V(Math.sqrt(B*B+zt*zt)),E=Gt(D,B),x=Math.abs(E)>2e-4?E*Nt:0,v=yt?1/(yt<0?-yt:yt):0),i.svg&&(L=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!ys(pt(t,I)),L&&t.setAttribute("transform",L))),Math.abs(x)>90&&Math.abs(x)<270&&(n?(_*=-1,x+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),e=e||i.uncache,i.x=f-((i.xPercent=f&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-f)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+a,i.y=u-((i.yPercent=u&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+a,i.z=c+a,i.scaleX=V(_),i.scaleY=V(g),i.rotation=V(d)+h,i.rotationX=V(p)+h,i.rotationY=V(m)+h,i.skewX=x+h,i.skewY=y+h,i.transformPerspective=v+a,(i.zOrigin=parseFloat(l.split(" ")[2])||0)&&(s[dt]=Pe(l)),i.xOffset=i.yOffset=0,i.force3D=rt.force3D,i.renderTransform=i.svg?Vn:_s?xs:Un,i.uncache=0,i},Pe=function(t){return(t=t.split(" "))[0]+" "+t[1]},He=function(t,e,i){var s=Y(e);return V(parseFloat(e)+parseFloat(Ft(t,"x",i+"px",s)))+s},Un=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,xs(t,e)},kt="0deg",ne="0px",Lt=") ",xs=function(t,e){var i=e||this,s=i.xPercent,n=i.yPercent,a=i.x,h=i.y,o=i.z,l=i.rotation,f=i.rotationY,u=i.rotationX,c=i.skewX,_=i.skewY,g=i.scaleX,d=i.scaleY,p=i.transformPerspective,m=i.force3D,x=i.target,y=i.zOrigin,v="",w=m==="auto"&&t&&t!==1||m===!0;if(y&&(u!==kt||f!==kt)){var b=parseFloat(f)*Zt,S=Math.sin(b),E=Math.cos(b),T;b=parseFloat(u)*Zt,T=Math.cos(b),a=He(x,a,S*T*-y),h=He(x,h,-Math.sin(b)*-y),o=He(x,o,E*T*-y+y)}p!==ne&&(v+="perspective("+p+Lt),(s||n)&&(v+="translate("+s+"%, "+n+"%) "),(w||a!==ne||h!==ne||o!==ne)&&(v+=o!==ne||w?"translate3d("+a+", "+h+", "+o+") ":"translate("+a+", "+h+Lt),l!==kt&&(v+="rotate("+l+Lt),f!==kt&&(v+="rotateY("+f+Lt),u!==kt&&(v+="rotateX("+u+Lt),(c!==kt||_!==kt)&&(v+="skew("+c+", "+_+Lt),(g!==1||d!==1)&&(v+="scale("+g+", "+d+Lt),x.style[I]=v||"translate(0, 0)"},Vn=function(t,e){var i=e||this,s=i.xPercent,n=i.yPercent,a=i.x,h=i.y,o=i.rotation,l=i.skewX,f=i.skewY,u=i.scaleX,c=i.scaleY,_=i.target,g=i.xOrigin,d=i.yOrigin,p=i.xOffset,m=i.yOffset,x=i.forceCSS,y=parseFloat(a),v=parseFloat(h),w,b,S,E,T;o=parseFloat(o),l=parseFloat(l),f=parseFloat(f),f&&(f=parseFloat(f),l+=f,o+=f),o||l?(o*=Zt,l*=Zt,w=Math.cos(o)*u,b=Math.sin(o)*u,S=Math.sin(o-l)*-c,E=Math.cos(o-l)*c,l&&(f*=Zt,T=Math.tan(l-f),T=Math.sqrt(1+T*T),S*=T,E*=T,f&&(T=Math.tan(f),T=Math.sqrt(1+T*T),w*=T,b*=T)),w=V(w),b=V(b),S=V(S),E=V(E)):(w=u,E=c,b=S=0),(y&&!~(a+"").indexOf("px")||v&&!~(h+"").indexOf("px"))&&(y=Ft(_,"x",a,"px"),v=Ft(_,"y",h,"px")),(g||d||p||m)&&(y=V(y+g-(g*w+d*S)+p),v=V(v+d-(g*b+d*E)+m)),(s||n)&&(T=_.getBBox(),y=V(y+s/100*T.width),v=V(v+n/100*T.height)),T="matrix("+w+","+b+","+S+","+E+","+y+","+v+")",_.setAttribute("transform",T),x&&(_.style[I]=T)},Xn=function(t,e,i,s,n){var a=360,h=G(n),o=parseFloat(n)*(h&&~n.indexOf("rad")?Nt:1),l=o-s,f=s+l+"deg",u,c;return h&&(u=n.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*Wi)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*Wi)%a-~~(l/a)*a)),t._pt=c=new K(t._pt,e,i,s,l,Sn),c.e=f,c.u="deg",t._props.push(i),c},er=function(t,e){for(var i in e)t[i]=e[i];return t},qn=function(t,e,i){var s=er({},i._gsap),n="perspective,force3D,transformOrigin,svgOrigin",a=i.style,h,o,l,f,u,c,_,g;s.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),a[I]=e,h=pe(i,1),_e(i,I),i.setAttribute("transform",l)):(l=getComputedStyle(i)[I],a[I]=e,h=pe(i,1),a[I]=l);for(o in Tt)l=s[o],f=h[o],l!==f&&n.indexOf(o)<0&&(_=Y(l),g=Y(f),u=_!==g?Ft(i,o,l,g):parseFloat(l),c=parseFloat(f),t._pt=new K(t._pt,h,o,u,c-u,fi),t._pt.u=g||0,t._props.push(o));er(h,s)};Q("padding,margin,Width,Radius",function(r,t){var e="Top",i="Right",s="Bottom",n="Left",a=(t<3?[e,i,s,n]:[e+n,e+i,s+i,s+n]).map(function(h){return t<2?r+h:"border"+h+r});Re[t>1?"border"+r:r]=function(h,o,l,f,u){var c,_;if(arguments.length<4)return c=a.map(function(g){return vt(h,g,l)}),_=c.join(" "),_.split(c[0]).length===5?c[0]:_;c=(f+"").split(" "),_={},a.forEach(function(g,d){return _[g]=c[d]=c[d]||c[(d-1)/2|0]}),h.init(o,_,u)}});var vs={name:"css",register:ci,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,s,n){var a=this._props,h=t.style,o=i.vars.startAt,l,f,u,c,_,g,d,p,m,x,y,v,w,b,S,E;Di||ci(),this.styles=this.styles||ds(t),E=this.styles.props,this.tween=i;for(d in e)if(d!=="autoRound"&&(f=e[d],!(et[d]&&is(d,e,i,s,t,n)))){if(_=typeof f,g=Re[d],_==="function"&&(f=f.call(i,s,t,n),_=typeof f),_==="string"&&~f.indexOf("random(")&&(f=ce(f)),g)g(this,t,d,f,i)&&(S=1);else if(d.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(d)+"").trim(),f+="",Ct.lastIndex=0,Ct.test(l)||(p=Y(l),m=Y(f)),m?p!==m&&(l=Ft(t,d,l,m)+m):p&&(f+=p),this.add(h,"setProperty",l,f,s,n,0,0,d),a.push(d),E.push(d,0,h[d]);else if(_!=="undefined"){if(o&&d in o?(l=typeof o[d]=="function"?o[d].call(i,s,t,n):o[d],G(l)&&~l.indexOf("random(")&&(l=ce(l)),Y(l+"")||(l+=rt.units[d]||Y(vt(t,d))||""),(l+"").charAt(1)==="="&&(l=vt(t,d))):l=vt(t,d),c=parseFloat(l),x=_==="string"&&f.charAt(1)==="="&&f.substr(0,2),x&&(f=f.substr(2)),u=parseFloat(f),d in wt&&(d==="autoAlpha"&&(c===1&&vt(t,"visibility")==="hidden"&&u&&(c=0),E.push("visibility",0,h.visibility),At(this,h,"visibility",c?"inherit":"hidden",u?"inherit":"hidden",!u)),d!=="scale"&&d!=="transform"&&(d=wt[d],~d.indexOf(",")&&(d=d.split(",")[0]))),y=d in Tt,y){if(this.styles.save(d),v||(w=t._gsap,w.renderTransform&&!e.parseTransform||pe(t,e.parseTransform),b=e.smoothOrigin!==!1&&w.smooth,v=this._pt=new K(this._pt,h,I,0,1,w.renderTransform,w,0,-1),v.dep=1),d==="scale")this._pt=new K(this._pt,w,"scaleY",c,(x?jt(c,x+u):u)-c||0,fi),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){E.push(dt,0,h[dt]),f=In(f),w.svg?di(t,f,0,b,0,this):(m=parseFloat(f.split(" ")[2])||0,m!==w.zOrigin&&At(this,w,"zOrigin",w.zOrigin,m),At(this,h,d,Pe(l),Pe(f)));continue}else if(d==="svgOrigin"){di(t,f,1,b,0,this);continue}else if(d in ms){Xn(this,w,d,c,x?jt(c,x+f):f);continue}else if(d==="smoothOrigin"){At(this,w,"smooth",w.smooth,f);continue}else if(d==="force3D"){w[d]=f;continue}else if(d==="transform"){qn(this,f,t);continue}}else d in h||(d=re(d)||d);if(y||(u||u===0)&&(c||c===0)&&!En.test(f)&&d in h)p=(l+"").substr((c+"").length),u||(u=0),m=Y(f)||(d in rt.units?rt.units[d]:p),p!==m&&(c=Ft(t,d,l,m)),this._pt=new K(this._pt,y?w:h,d,c,(x?jt(c,x+u):u)-c,!y&&(m==="px"||d==="zIndex")&&e.autoRound!==!1?An:fi),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=Mn);else if(d in h)Nn.call(this,t,d,l,x?x+f:f);else if(d in t)this.add(t,d,l||t[d],x?x+f:f,s,n);else{Ei(d,f);continue}y||(d in h?E.push(d,0,h[d]):E.push(d,1,l||t[d])),a.push(d)}}S&&os(this)},render:function(t,e){if(e.tween._time||!zi())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:vt,aliases:wt,getSetter:function(t,e,i){var s=wt[e];return s&&s.indexOf(",")<0&&(e=s),e in Tt&&e!==dt&&(t._gsap.x||vt(t,"x"))?i&&ji===i?e==="scale"?On:Cn:(ji=i||{})&&(e==="scale"?Fn:Dn):t.style&&!bi(t.style[e])?Rn:~e.indexOf("-")?Pn:Oi(t,e)},core:{_removeProperty:_e,_getMatrix:Li}};nt.utils.checkPrefix=re;nt.core.getStyleSaver=ds;(function(r,t,e,i){var s=Q(r+","+t+","+e,function(n){Tt[n]=1});Q(t,function(n){rt.units[n]="deg",ms[n]=1}),wt[s[13]]=r+","+t,Q(i,function(n){var a=n.split(":");wt[a[1]]=s[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Q("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){rt.units[r]="px"});nt.registerPlugin(vs);var _i=nt.registerPlugin(vs)||nt;_i.core.Tween;var Gn=Object.defineProperty,$n=Object.getOwnPropertyDescriptor,ws=(r,t,e,i)=>{for(var s=i>1?void 0:i?$n(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Gn(t,e,s),s};let Ce=class extends xi{constructor(){super(...arguments),this.theme=document.body.dataset.theme}firstUpdated(){this._taglineSetup(),this._nameStylizedSetup(),this._transitionIn(),this._scrollSetup(),this.addEventListener("themeChange",this.render)}_scrollSetup(){const r=this.shadowRoot&&this.shadowRoot.querySelector(".c-hero__upper");_i.timeline({scrollTrigger:{scroller:document.body,trigger:r,start:"0%",end:"+=150%",scrub:!0},onComplete:()=>{}}).fromTo(this.shadowRoot&&this.shadowRoot.querySelectorAll(".js-hero-me"),{backgroundSize:"100% auto"},{backgroundSize:"160% auto"},0)}_transitionIn(){let r=_i.timeline();const t=this.shadowRoot&&this.shadowRoot.querySelector(".c-hero__lower"),e=this.shadowRoot&&this.shadowRoot.querySelector(".c-hero__tagline");r.from(t,{height:0,minHeight:0,opacity:0,duration:1,delay:1.85,onComplete:()=>{t&&(t.style.height=""),t&&(t.style.minHeight="")}}),r.from(e,{opacity:0,duration:2,delay:1.75},0),r.play()}_taglineSetup(){const r=this.querySelector("[slot=tagline]");let t;if(r){t=r.innerHTML.replaceAll("  ","").replaceAll(`
`,"");const e=t.split("<br>"),i=e.map((n,a)=>{const h="<span data-scrambler>"+n+"</span>";return e.length-1===a?h:h+"<br>"}).join("");let s;this.shadowRoot&&(s=[this.shadowRoot.querySelector(".c-hero__tagline-accent-1"),this.shadowRoot.querySelector(".c-hero__tagline-accent-2"),this.shadowRoot.querySelector(".c-hero__tagline-accent-3")]),r.innerHTML=i,s&&s.map(n=>{n&&(n.innerHTML=t)})}}_nameStylizedSetup(){let r=this.querySelector('[slot="name-stylized"]');const t=r&&r.innerHTML.toString().replaceAll(" ","").replaceAll(`
`,"").split(""),e=this.shadowRoot&&this.shadowRoot.querySelector(".c-hero__name-stylized-inner");t&&e&&(e.innerHTML=t.map(i=>'<div class="c-hero__name-stylized-letter">'+i+"</div>").join(""))}render(){return ze`
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
    `}};Ce.styles=yi`
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
  `;ws([De({type:String})],Ce.prototype,"theme",2);Ce=ws([vi("c-hero")],Ce);function ir(r){let t=r[0],e=r[1],i=r[2];return Math.sqrt(t*t+e*e+i*i)}function gi(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r}function Yn(r,t,e,i){return r[0]=t,r[1]=e,r[2]=i,r}function rr(r,t,e){return r[0]=t[0]+e[0],r[1]=t[1]+e[1],r[2]=t[2]+e[2],r}function sr(r,t,e){return r[0]=t[0]-e[0],r[1]=t[1]-e[1],r[2]=t[2]-e[2],r}function Hn(r,t,e){return r[0]=t[0]*e[0],r[1]=t[1]*e[1],r[2]=t[2]*e[2],r}function jn(r,t,e){return r[0]=t[0]/e[0],r[1]=t[1]/e[1],r[2]=t[2]/e[2],r}function je(r,t,e){return r[0]=t[0]*e,r[1]=t[1]*e,r[2]=t[2]*e,r}function Wn(r,t){let e=t[0]-r[0],i=t[1]-r[1],s=t[2]-r[2];return Math.sqrt(e*e+i*i+s*s)}function Zn(r,t){let e=t[0]-r[0],i=t[1]-r[1],s=t[2]-r[2];return e*e+i*i+s*s}function nr(r){let t=r[0],e=r[1],i=r[2];return t*t+e*e+i*i}function Qn(r,t){return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r}function Kn(r,t){return r[0]=1/t[0],r[1]=1/t[1],r[2]=1/t[2],r}function pi(r,t){let e=t[0],i=t[1],s=t[2],n=e*e+i*i+s*s;return n>0&&(n=1/Math.sqrt(n)),r[0]=t[0]*n,r[1]=t[1]*n,r[2]=t[2]*n,r}function bs(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]}function ar(r,t,e){let i=t[0],s=t[1],n=t[2],a=e[0],h=e[1],o=e[2];return r[0]=s*o-n*h,r[1]=n*a-i*o,r[2]=i*h-s*a,r}function Jn(r,t,e,i){let s=t[0],n=t[1],a=t[2];return r[0]=s+i*(e[0]-s),r[1]=n+i*(e[1]-n),r[2]=a+i*(e[2]-a),r}function ta(r,t,e){let i=t[0],s=t[1],n=t[2],a=e[3]*i+e[7]*s+e[11]*n+e[15];return a=a||1,r[0]=(e[0]*i+e[4]*s+e[8]*n+e[12])/a,r[1]=(e[1]*i+e[5]*s+e[9]*n+e[13])/a,r[2]=(e[2]*i+e[6]*s+e[10]*n+e[14])/a,r}function ea(r,t,e){let i=t[0],s=t[1],n=t[2],a=e[3]*i+e[7]*s+e[11]*n+e[15];return a=a||1,r[0]=(e[0]*i+e[4]*s+e[8]*n)/a,r[1]=(e[1]*i+e[5]*s+e[9]*n)/a,r[2]=(e[2]*i+e[6]*s+e[10]*n)/a,r}function ia(r,t,e){let i=t[0],s=t[1],n=t[2],a=e[0],h=e[1],o=e[2],l=e[3],f=h*n-o*s,u=o*i-a*n,c=a*s-h*i,_=h*c-o*u,g=o*f-a*c,d=a*u-h*f,p=l*2;return f*=p,u*=p,c*=p,_*=2,g*=2,d*=2,r[0]=i+f+_,r[1]=s+u+g,r[2]=n+c+d,r}const ra=function(){const r=[0,0,0],t=[0,0,0];return function(e,i){gi(r,e),gi(t,i),pi(r,r),pi(t,t);let s=bs(r,t);return s>1?0:s<-1?Math.PI:Math.acos(s)}}();function sa(r,t){return r[0]===t[0]&&r[1]===t[1]&&r[2]===t[2]}class ct extends Array{constructor(t=0,e=t,i=t){return super(t,e,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this[0]=t}set y(t){this[1]=t}set z(t){this[2]=t}set(t,e=t,i=t){return t.length?this.copy(t):(Yn(this,t,e,i),this)}copy(t){return gi(this,t),this}add(t,e){return e?rr(this,t,e):rr(this,this,t),this}sub(t,e){return e?sr(this,t,e):sr(this,this,t),this}multiply(t){return t.length?Hn(this,this,t):je(this,this,t),this}divide(t){return t.length?jn(this,this,t):je(this,this,1/t),this}inverse(t=this){return Kn(this,t),this}len(){return ir(this)}distance(t){return t?Wn(this,t):ir(this)}squaredLen(){return nr(this)}squaredDistance(t){return t?Zn(this,t):nr(this)}negate(t=this){return Qn(this,t),this}cross(t,e){return e?ar(this,t,e):ar(this,this,t),this}scale(t){return je(this,this,t),this}normalize(){return pi(this,this),this}dot(t){return bs(this,t)}equals(t){return sa(this,t)}applyMatrix4(t){return ta(this,this,t),this}scaleRotateMatrix4(t){return ea(this,this,t),this}applyQuaternion(t){return ia(this,this,t),this}angle(t){return ra(this,t)}lerp(t,e){return Jn(this,this,t,e),this}clone(){return new ct(this[0],this[1],this[2])}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t}transformDirection(t){const e=this[0],i=this[1],s=this[2];return this[0]=t[0]*e+t[4]*i+t[8]*s,this[1]=t[1]*e+t[5]*i+t[9]*s,this[2]=t[2]*e+t[6]*i+t[10]*s,this.normalize()}}const hr=new ct;let na=1,aa=1,or=!1;class Ts{constructor(t,e={}){t.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=t,this.attributes=e,this.id=na++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in e)this.addAttribute(i,e[i])}addAttribute(t,e){if(this.attributes[t]=e,e.id=aa++,e.size=e.size||1,e.type=e.type||(e.data.constructor===Float32Array?this.gl.FLOAT:e.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),e.target=t==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,e.normalized=e.normalized||!1,e.stride=e.stride||0,e.offset=e.offset||0,e.count=e.count||(e.stride?e.data.byteLength/e.stride:e.data.length/e.size),e.divisor=e.instanced||0,e.needsUpdate=!1,e.buffer||(e.buffer=this.gl.createBuffer(),this.updateAttribute(e)),e.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==e.count*e.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,e.count*e.divisor);this.instancedCount=e.count*e.divisor}else t==="index"?this.drawRange.count=e.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,e.count))}updateAttribute(t){this.glState.boundBuffer!==t.buffer&&(this.gl.bindBuffer(t.target,t.buffer),this.glState.boundBuffer=t.buffer),this.gl.bufferData(t.target,t.data,this.gl.STATIC_DRAW),t.needsUpdate=!1}setIndex(t){this.addAttribute("index",t)}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}setInstancedCount(t){this.instancedCount=t}createVAO(t){this.VAOs[t.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.bindAttributes(t)}bindAttributes(t){t.attributeLocations.forEach((e,{name:i,type:s})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}const n=this.attributes[i];this.gl.bindBuffer(n.target,n.buffer),this.glState.boundBuffer=n.buffer;let a=1;s===35674&&(a=2),s===35675&&(a=3),s===35676&&(a=4);const h=n.size/a,o=a===1?0:a*a*a,l=a===1?0:a*a;for(let f=0;f<a;f++)this.gl.vertexAttribPointer(e+f,h,n.type,n.normalized,n.stride+o,n.offset+f*l),this.gl.enableVertexAttribArray(e+f),this.gl.renderer.vertexAttribDivisor(e+f,n.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:t,mode:e=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${t.attributeOrder}`&&(this.VAOs[t.attributeOrder]||this.createVAO(t),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${t.attributeOrder}`),t.attributeLocations.forEach((i,{name:s})=>{const n=this.attributes[s];n.needsUpdate&&this.updateAttribute(n)}),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(e,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*2,this.instancedCount):this.gl.renderer.drawArraysInstanced(e,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(e,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*2):this.gl.drawArrays(e,this.drawRange.start,this.drawRange.count)}getPosition(){const t=this.attributes.position;if(t.data)return t;if(!or)return console.warn("No position buffer data found to compute bounds"),or=!0}computeBoundingBox(t){t||(t=this.getPosition());const e=t.data,i=t.offset||0,s=t.stride||t.size;this.bounds||(this.bounds={min:new ct,max:new ct,center:new ct,scale:new ct,radius:1/0});const n=this.bounds.min,a=this.bounds.max,h=this.bounds.center,o=this.bounds.scale;n.set(1/0),a.set(-1/0);for(let l=i,f=e.length;l<f;l+=s){const u=e[l],c=e[l+1],_=e[l+2];n.x=Math.min(u,n.x),n.y=Math.min(c,n.y),n.z=Math.min(_,n.z),a.x=Math.max(u,a.x),a.y=Math.max(c,a.y),a.z=Math.max(_,a.z)}o.sub(a,n),h.add(n,a).divide(2)}computeBoundingSphere(t){t||(t=this.getPosition());const e=t.data,i=t.offset||0,s=t.stride||t.size;this.bounds||this.computeBoundingBox(t);let n=0;for(let a=i,h=e.length;a<h;a+=s)hr.fromArray(e,a),n=Math.max(n,this.bounds.center.squaredDistance(hr));this.bounds.radius=Math.sqrt(n)}remove(){for(let t in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[t]),delete this.VAOs[t];for(let t in this.attributes)this.gl.deleteBuffer(this.attributes[t].buffer),delete this.attributes[t]}}let ha=1;const lr={};class Ni{constructor(t,{vertex:e,fragment:i,uniforms:s={},transparent:n=!1,cullFace:a=t.BACK,frontFace:h=t.CCW,depthTest:o=!0,depthWrite:l=!0,depthFunc:f=t.LESS}={}){t.canvas||console.error("gl not passed as fist argument to Program"),this.gl=t,this.uniforms=s,this.id=ha++,e||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=n,this.cullFace=a,this.frontFace=h,this.depthTest=o,this.depthWrite=l,this.depthFunc=f,this.blendFunc={},this.blendEquation={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA));const u=t.createShader(t.VERTEX_SHADER);t.shaderSource(u,e),t.compileShader(u),t.getShaderInfoLog(u)!==""&&console.warn(`${t.getShaderInfoLog(u)}
Vertex Shader
${fr(e)}`);const c=t.createShader(t.FRAGMENT_SHADER);if(t.shaderSource(c,i),t.compileShader(c),t.getShaderInfoLog(c)!==""&&console.warn(`${t.getShaderInfoLog(c)}
Fragment Shader
${fr(i)}`),this.program=t.createProgram(),t.attachShader(this.program,u),t.attachShader(this.program,c),t.linkProgram(this.program),!t.getProgramParameter(this.program,t.LINK_STATUS))return console.warn(t.getProgramInfoLog(this.program));t.deleteShader(u),t.deleteShader(c),this.uniformLocations=new Map;let _=t.getProgramParameter(this.program,t.ACTIVE_UNIFORMS);for(let p=0;p<_;p++){let m=t.getActiveUniform(this.program,p);this.uniformLocations.set(m,t.getUniformLocation(this.program,m.name));const x=m.name.match(/(\w+)/g);m.uniformName=x[0],x.length===3?(m.isStructArray=!0,m.structIndex=Number(x[1]),m.structProperty=x[2]):x.length===2&&isNaN(Number(x[1]))&&(m.isStruct=!0,m.structProperty=x[1])}this.attributeLocations=new Map;const g=[],d=t.getProgramParameter(this.program,t.ACTIVE_ATTRIBUTES);for(let p=0;p<d;p++){const m=t.getActiveAttrib(this.program,p),x=t.getAttribLocation(this.program,m.name);g[x]=m.name,this.attributeLocations.set(m,x)}this.attributeOrder=g.join("")}setBlendFunc(t,e,i,s){this.blendFunc.src=t,this.blendFunc.dst=e,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=s,t&&(this.transparent=!0)}setBlendEquation(t,e){this.blendEquation.modeRGB=t,this.blendEquation.modeAlpha=e}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha)}use({flipFaces:t=!1}={}){let e=-1;this.gl.renderer.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.currentProgram=this.id),this.uniformLocations.forEach((s,n)=>{let a=n.uniformName,h=this.uniforms[a];if(n.isStruct&&(h=h[n.structProperty],a+=`.${n.structProperty}`),n.isStructArray&&(h=h[n.structIndex][n.structProperty],a+=`[${n.structIndex}].${n.structProperty}`),!h)return ur(`Active uniform ${a} has not been supplied`);if(h&&h.value===void 0)return ur(`${a} uniform is missing a value parameter`);if(h.value.texture)return e=e+1,h.value.update(e),We(this.gl,n.type,s,e);if(h.value.length&&h.value[0].texture){const o=[];return h.value.forEach(l=>{e=e+1,l.update(e),o.push(e)}),We(this.gl,n.type,s,o)}We(this.gl,n.type,s,h.value)}),this.applyState(),t&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function We(r,t,e,i){i=i.length?oa(i):i;const s=r.renderer.state.uniformLocations.get(e);if(i.length)if(s===void 0||s.length!==i.length)r.renderer.state.uniformLocations.set(e,i.slice(0));else{if(la(s,i))return;s.set?s.set(i):fa(s,i),r.renderer.state.uniformLocations.set(e,s)}else{if(s===i)return;r.renderer.state.uniformLocations.set(e,i)}switch(t){case 5126:return i.length?r.uniform1fv(e,i):r.uniform1f(e,i);case 35664:return r.uniform2fv(e,i);case 35665:return r.uniform3fv(e,i);case 35666:return r.uniform4fv(e,i);case 35670:case 5124:case 35678:case 35680:return i.length?r.uniform1iv(e,i):r.uniform1i(e,i);case 35671:case 35667:return r.uniform2iv(e,i);case 35672:case 35668:return r.uniform3iv(e,i);case 35673:case 35669:return r.uniform4iv(e,i);case 35674:return r.uniformMatrix2fv(e,!1,i);case 35675:return r.uniformMatrix3fv(e,!1,i);case 35676:return r.uniformMatrix4fv(e,!1,i)}}function fr(r){let t=r.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+": "+t[e];return t.join(`
`)}function oa(r){const t=r.length,e=r[0].length;if(e===void 0)return r;const i=t*e;let s=lr[i];s||(lr[i]=s=new Float32Array(i));for(let n=0;n<t;n++)s.set(r[n],n*e);return s}function la(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function fa(r,t){for(let e=0,i=r.length;e<i;e++)r[e]=t[e]}let Ze=0;function ur(r){Ze>100||(console.warn(r),Ze++,Ze>100&&console.warn("More than 100 program warnings - stopping logs."))}const Qe=new ct;let ua=1;class ca{constructor({canvas:t=document.createElement("canvas"),width:e=300,height:i=150,dpr:s=1,alpha:n=!1,depth:a=!0,stencil:h=!1,antialias:o=!1,premultipliedAlpha:l=!1,preserveDrawingBuffer:f=!1,powerPreference:u="default",autoClear:c=!0,webgl:_=2}={}){const g={alpha:n,depth:a,stencil:h,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:f,powerPreference:u};this.dpr=s,this.alpha=n,this.color=!0,this.depth=a,this.stencil=h,this.premultipliedAlpha=l,this.autoClear=c,this.id=ua++,_===2&&(this.gl=t.getContext("webgl2",g)),this.isWebgl2=!!this.gl,this.gl||(this.gl=t.getContext("webgl",g)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(e,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=null,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LESS,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(t,e){this.width=t,this.height=e,this.gl.canvas.width=t*this.dpr,this.gl.canvas.height=e*this.dpr,Object.assign(this.gl.canvas.style,{width:t+"px",height:e+"px"})}setViewport(t,e){this.state.viewport.width===t&&this.state.viewport.height===e||(this.state.viewport.width=t,this.state.viewport.height=e,this.gl.viewport(0,0,t,e))}enable(t){this.state[t]!==!0&&(this.gl.enable(t),this.state[t]=!0)}disable(t){this.state[t]!==!1&&(this.gl.disable(t),this.state[t]=!1)}setBlendFunc(t,e,i,s){this.state.blendFunc.src===t&&this.state.blendFunc.dst===e&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===s||(this.state.blendFunc.src=t,this.state.blendFunc.dst=e,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=s,i!==void 0?this.gl.blendFuncSeparate(t,e,i,s):this.gl.blendFunc(t,e))}setBlendEquation(t,e){t=t||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===t&&this.state.blendEquation.modeAlpha===e)&&(this.state.blendEquation.modeRGB=t,this.state.blendEquation.modeAlpha=e,e!==void 0?this.gl.blendEquationSeparate(t,e):this.gl.blendEquation(t))}setCullFace(t){this.state.cullFace!==t&&(this.state.cullFace=t,this.gl.cullFace(t))}setFrontFace(t){this.state.frontFace!==t&&(this.state.frontFace=t,this.gl.frontFace(t))}setDepthMask(t){this.state.depthMask!==t&&(this.state.depthMask=t,this.gl.depthMask(t))}setDepthFunc(t){this.state.depthFunc!==t&&(this.state.depthFunc=t,this.gl.depthFunc(t))}activeTexture(t){this.state.activeTextureUnit!==t&&(this.state.activeTextureUnit=t,this.gl.activeTexture(this.gl.TEXTURE0+t))}bindFramebuffer({target:t=this.gl.FRAMEBUFFER,buffer:e=null}={}){this.state.framebuffer!==e&&(this.state.framebuffer=e,this.gl.bindFramebuffer(t,e))}getExtension(t,e,i){return e&&this.gl[e]?this.gl[e].bind(this.gl):(this.extensions[t]||(this.extensions[t]=this.gl.getExtension(t)),e?this.extensions[t]?this.extensions[t][i].bind(this.extensions[t]):null:this.extensions[t])}sortOpaque(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program.id!==e.program.id?t.program.id-e.program.id:t.zDepth!==e.zDepth?t.zDepth-e.zDepth:e.id-t.id}sortTransparent(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.zDepth!==e.zDepth?e.zDepth-t.zDepth:e.id-t.id}sortUI(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program.id!==e.program.id?t.program.id-e.program.id:e.id-t.id}getRenderList({scene:t,camera:e,frustumCull:i,sort:s}){let n=[];if(e&&i&&e.updateFrustum(),t.traverse(a=>{if(!a.visible)return!0;!a.draw||i&&a.frustumCulled&&e&&!e.frustumIntersectsMesh(a)||n.push(a)}),s){const a=[],h=[],o=[];n.forEach(l=>{l.program.transparent?l.program.depthTest?h.push(l):o.push(l):a.push(l),l.zDepth=0,!(l.renderOrder!==0||!l.program.depthTest||!e)&&(l.worldMatrix.getTranslation(Qe),Qe.applyMatrix4(e.projectionViewMatrix),l.zDepth=Qe.z)}),a.sort(this.sortOpaque),h.sort(this.sortTransparent),o.sort(this.sortUI),n=a.concat(h,o)}return n}render({scene:t,camera:e,target:i=null,update:s=!0,sort:n=!0,frustumCull:a=!0,clear:h}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(h||this.autoClear&&h!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),s&&t.updateMatrixWorld(),e&&e.updateMatrixWorld(),this.getRenderList({scene:t,camera:e,frustumCull:a,sort:n}).forEach(l=>{l.draw({camera:e})})}}function Es(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r}function Ss(r,t,e,i,s){return r[0]=t,r[1]=e,r[2]=i,r[3]=s,r}function Ms(r,t){let e=t[0],i=t[1],s=t[2],n=t[3],a=e*e+i*i+s*s+n*n;return a>0&&(a=1/Math.sqrt(a)),r[0]=e*a,r[1]=i*a,r[2]=s*a,r[3]=n*a,r}function da(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]+r[3]*t[3]}function _a(r){return r[0]=0,r[1]=0,r[2]=0,r[3]=1,r}function ga(r,t,e){e=e*.5;let i=Math.sin(e);return r[0]=i*t[0],r[1]=i*t[1],r[2]=i*t[2],r[3]=Math.cos(e),r}function cr(r,t,e){let i=t[0],s=t[1],n=t[2],a=t[3],h=e[0],o=e[1],l=e[2],f=e[3];return r[0]=i*f+a*h+s*l-n*o,r[1]=s*f+a*o+n*h-i*l,r[2]=n*f+a*l+i*o-s*h,r[3]=a*f-i*h-s*o-n*l,r}function pa(r,t,e){e*=.5;let i=t[0],s=t[1],n=t[2],a=t[3],h=Math.sin(e),o=Math.cos(e);return r[0]=i*o+a*h,r[1]=s*o+n*h,r[2]=n*o-s*h,r[3]=a*o-i*h,r}function ma(r,t,e){e*=.5;let i=t[0],s=t[1],n=t[2],a=t[3],h=Math.sin(e),o=Math.cos(e);return r[0]=i*o-n*h,r[1]=s*o+a*h,r[2]=n*o+i*h,r[3]=a*o-s*h,r}function ya(r,t,e){e*=.5;let i=t[0],s=t[1],n=t[2],a=t[3],h=Math.sin(e),o=Math.cos(e);return r[0]=i*o+s*h,r[1]=s*o-i*h,r[2]=n*o+a*h,r[3]=a*o-n*h,r}function xa(r,t,e,i){let s=t[0],n=t[1],a=t[2],h=t[3],o=e[0],l=e[1],f=e[2],u=e[3],c,_,g,d,p;return _=s*o+n*l+a*f+h*u,_<0&&(_=-_,o=-o,l=-l,f=-f,u=-u),1-_>1e-6?(c=Math.acos(_),g=Math.sin(c),d=Math.sin((1-i)*c)/g,p=Math.sin(i*c)/g):(d=1-i,p=i),r[0]=d*s+p*o,r[1]=d*n+p*l,r[2]=d*a+p*f,r[3]=d*h+p*u,r}function va(r,t){let e=t[0],i=t[1],s=t[2],n=t[3],a=e*e+i*i+s*s+n*n,h=a?1/a:0;return r[0]=-e*h,r[1]=-i*h,r[2]=-s*h,r[3]=n*h,r}function wa(r,t){return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=t[3],r}function ba(r,t){let e=t[0]+t[4]+t[8],i;if(e>0)i=Math.sqrt(e+1),r[3]=.5*i,i=.5/i,r[0]=(t[5]-t[7])*i,r[1]=(t[6]-t[2])*i,r[2]=(t[1]-t[3])*i;else{let s=0;t[4]>t[0]&&(s=1),t[8]>t[s*3+s]&&(s=2);let n=(s+1)%3,a=(s+2)%3;i=Math.sqrt(t[s*3+s]-t[n*3+n]-t[a*3+a]+1),r[s]=.5*i,i=.5/i,r[3]=(t[n*3+a]-t[a*3+n])*i,r[n]=(t[n*3+s]+t[s*3+n])*i,r[a]=(t[a*3+s]+t[s*3+a])*i}return r}function Ta(r,t,e="YXZ"){let i=Math.sin(t[0]*.5),s=Math.cos(t[0]*.5),n=Math.sin(t[1]*.5),a=Math.cos(t[1]*.5),h=Math.sin(t[2]*.5),o=Math.cos(t[2]*.5);return e==="XYZ"?(r[0]=i*a*o+s*n*h,r[1]=s*n*o-i*a*h,r[2]=s*a*h+i*n*o,r[3]=s*a*o-i*n*h):e==="YXZ"?(r[0]=i*a*o+s*n*h,r[1]=s*n*o-i*a*h,r[2]=s*a*h-i*n*o,r[3]=s*a*o+i*n*h):e==="ZXY"?(r[0]=i*a*o-s*n*h,r[1]=s*n*o+i*a*h,r[2]=s*a*h+i*n*o,r[3]=s*a*o-i*n*h):e==="ZYX"?(r[0]=i*a*o-s*n*h,r[1]=s*n*o+i*a*h,r[2]=s*a*h-i*n*o,r[3]=s*a*o+i*n*h):e==="YZX"?(r[0]=i*a*o+s*n*h,r[1]=s*n*o+i*a*h,r[2]=s*a*h-i*n*o,r[3]=s*a*o-i*n*h):e==="XZY"&&(r[0]=i*a*o-s*n*h,r[1]=s*n*o-i*a*h,r[2]=s*a*h+i*n*o,r[3]=s*a*o+i*n*h),r}const Ea=Es,Sa=Ss,Ma=da,Aa=Ms;class Ra extends Array{constructor(t=0,e=0,i=0,s=1){return super(t,e,i,s),this.onChange=()=>{},this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(t){this[0]=t,this.onChange()}set y(t){this[1]=t,this.onChange()}set z(t){this[2]=t,this.onChange()}set w(t){this[3]=t,this.onChange()}identity(){return _a(this),this.onChange(),this}set(t,e,i,s){return t.length?this.copy(t):(Sa(this,t,e,i,s),this.onChange(),this)}rotateX(t){return pa(this,this,t),this.onChange(),this}rotateY(t){return ma(this,this,t),this.onChange(),this}rotateZ(t){return ya(this,this,t),this.onChange(),this}inverse(t=this){return va(this,t),this.onChange(),this}conjugate(t=this){return wa(this,t),this.onChange(),this}copy(t){return Ea(this,t),this.onChange(),this}normalize(t=this){return Aa(this,t),this.onChange(),this}multiply(t,e){return e?cr(this,t,e):cr(this,this,t),this.onChange(),this}dot(t){return Ma(this,t)}fromMatrix3(t){return ba(this,t),this.onChange(),this}fromEuler(t){return Ta(this,t,t.order),this}fromAxisAngle(t,e){return ga(this,t,e),this}slerp(t,e){return xa(this,this,t,e),this}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this[3]=t[e+3],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t[e+3]=this[3],t}}const Pa=1e-6;function Ca(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}function Oa(r,t,e,i,s,n,a,h,o,l,f,u,c,_,g,d,p){return r[0]=t,r[1]=e,r[2]=i,r[3]=s,r[4]=n,r[5]=a,r[6]=h,r[7]=o,r[8]=l,r[9]=f,r[10]=u,r[11]=c,r[12]=_,r[13]=g,r[14]=d,r[15]=p,r}function Fa(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function Da(r,t){let e=t[0],i=t[1],s=t[2],n=t[3],a=t[4],h=t[5],o=t[6],l=t[7],f=t[8],u=t[9],c=t[10],_=t[11],g=t[12],d=t[13],p=t[14],m=t[15],x=e*h-i*a,y=e*o-s*a,v=e*l-n*a,w=i*o-s*h,b=i*l-n*h,S=s*l-n*o,E=f*d-u*g,T=f*p-c*g,R=f*m-_*g,A=u*p-c*d,C=u*m-_*d,O=c*m-_*p,M=x*O-y*C+v*A+w*R-b*T+S*E;return M?(M=1/M,r[0]=(h*O-o*C+l*A)*M,r[1]=(s*C-i*O-n*A)*M,r[2]=(d*S-p*b+m*w)*M,r[3]=(c*b-u*S-_*w)*M,r[4]=(o*R-a*O-l*T)*M,r[5]=(e*O-s*R+n*T)*M,r[6]=(p*v-g*S-m*y)*M,r[7]=(f*S-c*v+_*y)*M,r[8]=(a*C-h*R+l*E)*M,r[9]=(i*R-e*C-n*E)*M,r[10]=(g*b-d*v+m*x)*M,r[11]=(u*v-f*b-_*x)*M,r[12]=(h*T-a*A-o*E)*M,r[13]=(e*A-i*T+s*E)*M,r[14]=(d*y-g*w-p*x)*M,r[15]=(f*w-u*y+c*x)*M,r):null}function za(r){let t=r[0],e=r[1],i=r[2],s=r[3],n=r[4],a=r[5],h=r[6],o=r[7],l=r[8],f=r[9],u=r[10],c=r[11],_=r[12],g=r[13],d=r[14],p=r[15],m=t*a-e*n,x=t*h-i*n,y=t*o-s*n,v=e*h-i*a,w=e*o-s*a,b=i*o-s*h,S=l*g-f*_,E=l*d-u*_,T=l*p-c*_,R=f*d-u*g,A=f*p-c*g,C=u*p-c*d;return m*C-x*A+y*R+v*T-w*E+b*S}function dr(r,t,e){let i=t[0],s=t[1],n=t[2],a=t[3],h=t[4],o=t[5],l=t[6],f=t[7],u=t[8],c=t[9],_=t[10],g=t[11],d=t[12],p=t[13],m=t[14],x=t[15],y=e[0],v=e[1],w=e[2],b=e[3];return r[0]=y*i+v*h+w*u+b*d,r[1]=y*s+v*o+w*c+b*p,r[2]=y*n+v*l+w*_+b*m,r[3]=y*a+v*f+w*g+b*x,y=e[4],v=e[5],w=e[6],b=e[7],r[4]=y*i+v*h+w*u+b*d,r[5]=y*s+v*o+w*c+b*p,r[6]=y*n+v*l+w*_+b*m,r[7]=y*a+v*f+w*g+b*x,y=e[8],v=e[9],w=e[10],b=e[11],r[8]=y*i+v*h+w*u+b*d,r[9]=y*s+v*o+w*c+b*p,r[10]=y*n+v*l+w*_+b*m,r[11]=y*a+v*f+w*g+b*x,y=e[12],v=e[13],w=e[14],b=e[15],r[12]=y*i+v*h+w*u+b*d,r[13]=y*s+v*o+w*c+b*p,r[14]=y*n+v*l+w*_+b*m,r[15]=y*a+v*f+w*g+b*x,r}function ka(r,t,e){let i=e[0],s=e[1],n=e[2],a,h,o,l,f,u,c,_,g,d,p,m;return t===r?(r[12]=t[0]*i+t[4]*s+t[8]*n+t[12],r[13]=t[1]*i+t[5]*s+t[9]*n+t[13],r[14]=t[2]*i+t[6]*s+t[10]*n+t[14],r[15]=t[3]*i+t[7]*s+t[11]*n+t[15]):(a=t[0],h=t[1],o=t[2],l=t[3],f=t[4],u=t[5],c=t[6],_=t[7],g=t[8],d=t[9],p=t[10],m=t[11],r[0]=a,r[1]=h,r[2]=o,r[3]=l,r[4]=f,r[5]=u,r[6]=c,r[7]=_,r[8]=g,r[9]=d,r[10]=p,r[11]=m,r[12]=a*i+f*s+g*n+t[12],r[13]=h*i+u*s+d*n+t[13],r[14]=o*i+c*s+p*n+t[14],r[15]=l*i+_*s+m*n+t[15]),r}function La(r,t,e){let i=e[0],s=e[1],n=e[2];return r[0]=t[0]*i,r[1]=t[1]*i,r[2]=t[2]*i,r[3]=t[3]*i,r[4]=t[4]*s,r[5]=t[5]*s,r[6]=t[6]*s,r[7]=t[7]*s,r[8]=t[8]*n,r[9]=t[9]*n,r[10]=t[10]*n,r[11]=t[11]*n,r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}function Na(r,t,e,i){let s=i[0],n=i[1],a=i[2],h=Math.hypot(s,n,a),o,l,f,u,c,_,g,d,p,m,x,y,v,w,b,S,E,T,R,A,C,O,M,D;return Math.abs(h)<Pa?null:(h=1/h,s*=h,n*=h,a*=h,o=Math.sin(e),l=Math.cos(e),f=1-l,u=t[0],c=t[1],_=t[2],g=t[3],d=t[4],p=t[5],m=t[6],x=t[7],y=t[8],v=t[9],w=t[10],b=t[11],S=s*s*f+l,E=n*s*f+a*o,T=a*s*f-n*o,R=s*n*f-a*o,A=n*n*f+l,C=a*n*f+s*o,O=s*a*f+n*o,M=n*a*f-s*o,D=a*a*f+l,r[0]=u*S+d*E+y*T,r[1]=c*S+p*E+v*T,r[2]=_*S+m*E+w*T,r[3]=g*S+x*E+b*T,r[4]=u*R+d*A+y*C,r[5]=c*R+p*A+v*C,r[6]=_*R+m*A+w*C,r[7]=g*R+x*A+b*C,r[8]=u*O+d*M+y*D,r[9]=c*O+p*M+v*D,r[10]=_*O+m*M+w*D,r[11]=g*O+x*M+b*D,t!==r&&(r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r)}function Ia(r,t){return r[0]=t[12],r[1]=t[13],r[2]=t[14],r}function As(r,t){let e=t[0],i=t[1],s=t[2],n=t[4],a=t[5],h=t[6],o=t[8],l=t[9],f=t[10];return r[0]=Math.hypot(e,i,s),r[1]=Math.hypot(n,a,h),r[2]=Math.hypot(o,l,f),r}function Ba(r){let t=r[0],e=r[1],i=r[2],s=r[4],n=r[5],a=r[6],h=r[8],o=r[9],l=r[10];const f=t*t+e*e+i*i,u=s*s+n*n+a*a,c=h*h+o*o+l*l;return Math.sqrt(Math.max(f,u,c))}const Ua=function(){const r=[0,0,0];return function(t,e){let i=r;As(i,e);let s=1/i[0],n=1/i[1],a=1/i[2],h=e[0]*s,o=e[1]*n,l=e[2]*a,f=e[4]*s,u=e[5]*n,c=e[6]*a,_=e[8]*s,g=e[9]*n,d=e[10]*a,p=h+u+d,m=0;return p>0?(m=Math.sqrt(p+1)*2,t[3]=.25*m,t[0]=(c-g)/m,t[1]=(_-l)/m,t[2]=(o-f)/m):h>u&&h>d?(m=Math.sqrt(1+h-u-d)*2,t[3]=(c-g)/m,t[0]=.25*m,t[1]=(o+f)/m,t[2]=(_+l)/m):u>d?(m=Math.sqrt(1+u-h-d)*2,t[3]=(_-l)/m,t[0]=(o+f)/m,t[1]=.25*m,t[2]=(c+g)/m):(m=Math.sqrt(1+d-h-u)*2,t[3]=(o-f)/m,t[0]=(_+l)/m,t[1]=(c+g)/m,t[2]=.25*m),t}}();function Va(r,t,e,i){let s=t[0],n=t[1],a=t[2],h=t[3],o=s+s,l=n+n,f=a+a,u=s*o,c=s*l,_=s*f,g=n*l,d=n*f,p=a*f,m=h*o,x=h*l,y=h*f,v=i[0],w=i[1],b=i[2];return r[0]=(1-(g+p))*v,r[1]=(c+y)*v,r[2]=(_-x)*v,r[3]=0,r[4]=(c-y)*w,r[5]=(1-(u+p))*w,r[6]=(d+m)*w,r[7]=0,r[8]=(_+x)*b,r[9]=(d-m)*b,r[10]=(1-(u+g))*b,r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function Xa(r,t){let e=t[0],i=t[1],s=t[2],n=t[3],a=e+e,h=i+i,o=s+s,l=e*a,f=i*a,u=i*h,c=s*a,_=s*h,g=s*o,d=n*a,p=n*h,m=n*o;return r[0]=1-u-g,r[1]=f+m,r[2]=c-p,r[3]=0,r[4]=f-m,r[5]=1-l-g,r[6]=_+d,r[7]=0,r[8]=c+p,r[9]=_-d,r[10]=1-l-u,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function qa(r,t,e,i,s){let n=1/Math.tan(t/2),a=1/(i-s);return r[0]=n/e,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=n,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=(s+i)*a,r[11]=-1,r[12]=0,r[13]=0,r[14]=2*s*i*a,r[15]=0,r}function Ga(r,t,e,i,s,n,a){let h=1/(t-e),o=1/(i-s),l=1/(n-a);return r[0]=-2*h,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=-2*o,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=2*l,r[11]=0,r[12]=(t+e)*h,r[13]=(s+i)*o,r[14]=(a+n)*l,r[15]=1,r}function $a(r,t,e,i){let s=t[0],n=t[1],a=t[2],h=i[0],o=i[1],l=i[2],f=s-e[0],u=n-e[1],c=a-e[2],_=f*f+u*u+c*c;_===0?c=1:(_=1/Math.sqrt(_),f*=_,u*=_,c*=_);let g=o*c-l*u,d=l*f-h*c,p=h*u-o*f;return _=g*g+d*d+p*p,_===0&&(l?h+=1e-6:o?l+=1e-6:o+=1e-6,g=o*c-l*u,d=l*f-h*c,p=h*u-o*f,_=g*g+d*d+p*p),_=1/Math.sqrt(_),g*=_,d*=_,p*=_,r[0]=g,r[1]=d,r[2]=p,r[3]=0,r[4]=u*p-c*d,r[5]=c*g-f*p,r[6]=f*d-u*g,r[7]=0,r[8]=f,r[9]=u,r[10]=c,r[11]=0,r[12]=s,r[13]=n,r[14]=a,r[15]=1,r}class Oe extends Array{constructor(t=1,e=0,i=0,s=0,n=0,a=1,h=0,o=0,l=0,f=0,u=1,c=0,_=0,g=0,d=0,p=1){return super(t,e,i,s,n,a,h,o,l,f,u,c,_,g,d,p),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(t){this[12]=t}set y(t){this[13]=t}set z(t){this[14]=t}set w(t){this[15]=t}set(t,e,i,s,n,a,h,o,l,f,u,c,_,g,d,p){return t.length?this.copy(t):(Oa(this,t,e,i,s,n,a,h,o,l,f,u,c,_,g,d,p),this)}translate(t,e=this){return ka(this,e,t),this}rotate(t,e,i=this){return Na(this,i,t,e),this}scale(t,e=this){return La(this,e,typeof t=="number"?[t,t,t]:t),this}multiply(t,e){return e?dr(this,t,e):dr(this,this,t),this}identity(){return Fa(this),this}copy(t){return Ca(this,t),this}fromPerspective({fov:t,aspect:e,near:i,far:s}={}){return qa(this,t,e,i,s),this}fromOrthogonal({left:t,right:e,bottom:i,top:s,near:n,far:a}){return Ga(this,t,e,i,s,n,a),this}fromQuaternion(t){return Xa(this,t),this}setPosition(t){return this.x=t[0],this.y=t[1],this.z=t[2],this}inverse(t=this){return Da(this,t),this}compose(t,e,i){return Va(this,t,e,i),this}getRotation(t){return Ua(t,this),this}getTranslation(t){return Ia(t,this),this}getScaling(t){return As(t,this),this}getMaxScaleOnAxis(){return Ba(this)}lookAt(t,e,i){return $a(this,t,e,i),this}determinant(){return za(this)}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this[3]=t[e+3],this[4]=t[e+4],this[5]=t[e+5],this[6]=t[e+6],this[7]=t[e+7],this[8]=t[e+8],this[9]=t[e+9],this[10]=t[e+10],this[11]=t[e+11],this[12]=t[e+12],this[13]=t[e+13],this[14]=t[e+14],this[15]=t[e+15],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t[e+3]=this[3],t[e+4]=this[4],t[e+5]=this[5],t[e+6]=this[6],t[e+7]=this[7],t[e+8]=this[8],t[e+9]=this[9],t[e+10]=this[10],t[e+11]=this[11],t[e+12]=this[12],t[e+13]=this[13],t[e+14]=this[14],t[e+15]=this[15],t}}function Ya(r,t,e="YXZ"){return e==="XYZ"?(r[1]=Math.asin(Math.min(Math.max(t[8],-1),1)),Math.abs(t[8])<.99999?(r[0]=Math.atan2(-t[9],t[10]),r[2]=Math.atan2(-t[4],t[0])):(r[0]=Math.atan2(t[6],t[5]),r[2]=0)):e==="YXZ"?(r[0]=Math.asin(-Math.min(Math.max(t[9],-1),1)),Math.abs(t[9])<.99999?(r[1]=Math.atan2(t[8],t[10]),r[2]=Math.atan2(t[1],t[5])):(r[1]=Math.atan2(-t[2],t[0]),r[2]=0)):e==="ZXY"?(r[0]=Math.asin(Math.min(Math.max(t[6],-1),1)),Math.abs(t[6])<.99999?(r[1]=Math.atan2(-t[2],t[10]),r[2]=Math.atan2(-t[4],t[5])):(r[1]=0,r[2]=Math.atan2(t[1],t[0]))):e==="ZYX"?(r[1]=Math.asin(-Math.min(Math.max(t[2],-1),1)),Math.abs(t[2])<.99999?(r[0]=Math.atan2(t[6],t[10]),r[2]=Math.atan2(t[1],t[0])):(r[0]=0,r[2]=Math.atan2(-t[4],t[5]))):e==="YZX"?(r[2]=Math.asin(Math.min(Math.max(t[1],-1),1)),Math.abs(t[1])<.99999?(r[0]=Math.atan2(-t[9],t[5]),r[1]=Math.atan2(-t[2],t[0])):(r[0]=0,r[1]=Math.atan2(t[8],t[10]))):e==="XZY"&&(r[2]=Math.asin(-Math.min(Math.max(t[4],-1),1)),Math.abs(t[4])<.99999?(r[0]=Math.atan2(t[6],t[5]),r[1]=Math.atan2(t[8],t[0])):(r[0]=Math.atan2(-t[9],t[10]),r[1]=0)),r}const _r=new Oe;class Ha extends Array{constructor(t=0,e=t,i=t,s="YXZ"){return super(t,e,i),this.order=s,this.onChange=()=>{},this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this[0]=t,this.onChange()}set y(t){this[1]=t,this.onChange()}set z(t){this[2]=t,this.onChange()}set(t,e=t,i=t){return t.length?this.copy(t):(this[0]=t,this[1]=e,this[2]=i,this.onChange(),this)}copy(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this.onChange(),this}reorder(t){return this.order=t,this.onChange(),this}fromRotationMatrix(t,e=this.order){return Ya(this,t,e),this}fromQuaternion(t,e=this.order){return _r.fromQuaternion(t),this.fromRotationMatrix(_r,e)}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t}}class ja{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new Oe,this.worldMatrix=new Oe,this.matrixAutoUpdate=!0,this.position=new ct,this.quaternion=new Ra,this.scale=new ct(1),this.rotation=new Ha,this.up=new ct(0,1,0),this.rotation.onChange=()=>this.quaternion.fromEuler(this.rotation),this.quaternion.onChange=()=>this.rotation.fromQuaternion(this.quaternion)}setParent(t,e=!0){this.parent&&t!==this.parent&&this.parent.removeChild(this,!1),this.parent=t,e&&t&&t.addChild(this,!1)}addChild(t,e=!0){~this.children.indexOf(t)||this.children.push(t),e&&t.setParent(this,!1)}removeChild(t,e=!0){~this.children.indexOf(t)&&this.children.splice(this.children.indexOf(t),1),e&&t.setParent(null,!1)}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||t)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,t=!0);for(let e=0,i=this.children.length;e<i;e++)this.children[e].updateMatrixWorld(t)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(t){if(!t(this))for(let e=0,i=this.children.length;e<i;e++)this.children[e].traverse(t)}decompose(){this.matrix.getTranslation(this.position),this.matrix.getRotation(this.quaternion),this.matrix.getScaling(this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(t,e=!1){e?this.matrix.lookAt(this.position,t,this.up):this.matrix.lookAt(t,this.position,this.up),this.matrix.getRotation(this.quaternion),this.rotation.fromQuaternion(this.quaternion)}}function Wa(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[4],r[4]=t[5],r[5]=t[6],r[6]=t[8],r[7]=t[9],r[8]=t[10],r}function Za(r,t){let e=t[0],i=t[1],s=t[2],n=t[3],a=e+e,h=i+i,o=s+s,l=e*a,f=i*a,u=i*h,c=s*a,_=s*h,g=s*o,d=n*a,p=n*h,m=n*o;return r[0]=1-u-g,r[3]=f-m,r[6]=c+p,r[1]=f+m,r[4]=1-l-g,r[7]=_-d,r[2]=c-p,r[5]=_+d,r[8]=1-l-u,r}function Qa(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r}function Ka(r,t,e,i,s,n,a,h,o,l){return r[0]=t,r[1]=e,r[2]=i,r[3]=s,r[4]=n,r[5]=a,r[6]=h,r[7]=o,r[8]=l,r}function Ja(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=1,r[5]=0,r[6]=0,r[7]=0,r[8]=1,r}function th(r,t){let e=t[0],i=t[1],s=t[2],n=t[3],a=t[4],h=t[5],o=t[6],l=t[7],f=t[8],u=f*a-h*l,c=-f*n+h*o,_=l*n-a*o,g=e*u+i*c+s*_;return g?(g=1/g,r[0]=u*g,r[1]=(-f*i+s*l)*g,r[2]=(h*i-s*a)*g,r[3]=c*g,r[4]=(f*e-s*o)*g,r[5]=(-h*e+s*n)*g,r[6]=_*g,r[7]=(-l*e+i*o)*g,r[8]=(a*e-i*n)*g,r):null}function gr(r,t,e){let i=t[0],s=t[1],n=t[2],a=t[3],h=t[4],o=t[5],l=t[6],f=t[7],u=t[8],c=e[0],_=e[1],g=e[2],d=e[3],p=e[4],m=e[5],x=e[6],y=e[7],v=e[8];return r[0]=c*i+_*a+g*l,r[1]=c*s+_*h+g*f,r[2]=c*n+_*o+g*u,r[3]=d*i+p*a+m*l,r[4]=d*s+p*h+m*f,r[5]=d*n+p*o+m*u,r[6]=x*i+y*a+v*l,r[7]=x*s+y*h+v*f,r[8]=x*n+y*o+v*u,r}function eh(r,t,e){let i=t[0],s=t[1],n=t[2],a=t[3],h=t[4],o=t[5],l=t[6],f=t[7],u=t[8],c=e[0],_=e[1];return r[0]=i,r[1]=s,r[2]=n,r[3]=a,r[4]=h,r[5]=o,r[6]=c*i+_*a+l,r[7]=c*s+_*h+f,r[8]=c*n+_*o+u,r}function ih(r,t,e){let i=t[0],s=t[1],n=t[2],a=t[3],h=t[4],o=t[5],l=t[6],f=t[7],u=t[8],c=Math.sin(e),_=Math.cos(e);return r[0]=_*i+c*a,r[1]=_*s+c*h,r[2]=_*n+c*o,r[3]=_*a-c*i,r[4]=_*h-c*s,r[5]=_*o-c*n,r[6]=l,r[7]=f,r[8]=u,r}function rh(r,t,e){let i=e[0],s=e[1];return r[0]=i*t[0],r[1]=i*t[1],r[2]=i*t[2],r[3]=s*t[3],r[4]=s*t[4],r[5]=s*t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r}function sh(r,t){let e=t[0],i=t[1],s=t[2],n=t[3],a=t[4],h=t[5],o=t[6],l=t[7],f=t[8],u=t[9],c=t[10],_=t[11],g=t[12],d=t[13],p=t[14],m=t[15],x=e*h-i*a,y=e*o-s*a,v=e*l-n*a,w=i*o-s*h,b=i*l-n*h,S=s*l-n*o,E=f*d-u*g,T=f*p-c*g,R=f*m-_*g,A=u*p-c*d,C=u*m-_*d,O=c*m-_*p,M=x*O-y*C+v*A+w*R-b*T+S*E;return M?(M=1/M,r[0]=(h*O-o*C+l*A)*M,r[1]=(o*R-a*O-l*T)*M,r[2]=(a*C-h*R+l*E)*M,r[3]=(s*C-i*O-n*A)*M,r[4]=(e*O-s*R+n*T)*M,r[5]=(i*R-e*C-n*E)*M,r[6]=(d*S-p*b+m*w)*M,r[7]=(p*v-g*S-m*y)*M,r[8]=(g*b-d*v+m*x)*M,r):null}class nh extends Array{constructor(t=1,e=0,i=0,s=0,n=1,a=0,h=0,o=0,l=1){return super(t,e,i,s,n,a,h,o,l),this}set(t,e,i,s,n,a,h,o,l){return t.length?this.copy(t):(Ka(this,t,e,i,s,n,a,h,o,l),this)}translate(t,e=this){return eh(this,e,t),this}rotate(t,e=this){return ih(this,e,t),this}scale(t,e=this){return rh(this,e,t),this}multiply(t,e){return e?gr(this,t,e):gr(this,this,t),this}identity(){return Ja(this),this}copy(t){return Qa(this,t),this}fromMatrix4(t){return Wa(this,t),this}fromQuaternion(t){return Za(this,t),this}fromBasis(t,e,i){return this.set(t[0],t[1],t[2],e[0],e[1],e[2],i[0],i[1],i[2]),this}inverse(t=this){return th(this,t),this}getNormalMatrix(t){return sh(this,t),this}}let ah=0;class Ii extends ja{constructor(t,{geometry:e,program:i,mode:s=t.TRIANGLES,frustumCulled:n=!0,renderOrder:a=0}={}){super(),t.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=t,this.id=ah++,this.geometry=e,this.program=i,this.mode=s,this.frustumCulled=n,this.renderOrder=a,this.modelViewMatrix=new Oe,this.normalMatrix=new nh,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(t){return this.beforeRenderCallbacks.push(t),this}onAfterRender(t){return this.afterRenderCallbacks.push(t),this}draw({camera:t}={}){this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:t})),t&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=t.projectionMatrix,this.program.uniforms.cameraPosition.value=t.worldPosition,this.program.uniforms.viewMatrix.value=t.viewMatrix,this.modelViewMatrix.multiply(t.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix);let e=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:e}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:t}))}}const pr=new Uint8Array(4);function mr(r){return(r&r-1)===0}let hh=1;class Ht{constructor(t,{image:e,target:i=t.TEXTURE_2D,type:s=t.UNSIGNED_BYTE,format:n=t.RGBA,internalFormat:a=n,wrapS:h=t.CLAMP_TO_EDGE,wrapT:o=t.CLAMP_TO_EDGE,generateMipmaps:l=!0,minFilter:f=l?t.NEAREST_MIPMAP_LINEAR:t.LINEAR,magFilter:u=t.LINEAR,premultiplyAlpha:c=!1,unpackAlignment:_=4,flipY:g=i==t.TEXTURE_2D,anisotropy:d=0,level:p=0,width:m,height:x=m}={}){this.gl=t,this.id=hh++,this.image=e,this.target=i,this.type=s,this.format=n,this.internalFormat=a,this.minFilter=f,this.magFilter=u,this.wrapS=h,this.wrapT=o,this.generateMipmaps=l,this.premultiplyAlpha=c,this.unpackAlignment=_,this.flipY=g,this.anisotropy=Math.min(d,this.gl.renderer.parameters.maxAnisotropy),this.level=p,this.width=m,this.height=x,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(t=0){const e=!(this.image===this.store.image&&!this.needsUpdate);if((e||this.glState.textureUnits[t]!==this.id)&&(this.gl.renderer.activeTexture(t),this.bind()),!!e){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,this.level,this.internalFormat,this.format,this.type,this.image[i]);else if(ArrayBuffer.isView(this.image))this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let i=0;i<this.image.length;i++)this.gl.compressedTexImage2D(this.target,i,this.internalFormat,this.image[i].width,this.image[i].height,0,this.image[i].data);else this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!mr(this.image.width)||!mr(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,pr);else this.width?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,pr);this.store.image=this.image}}}class Fe{constructor(t,{width:e=t.canvas.width,height:i=t.canvas.height,target:s=t.FRAMEBUFFER,color:n=1,depth:a=!0,stencil:h=!1,depthTexture:o=!1,wrapS:l=t.CLAMP_TO_EDGE,wrapT:f=t.CLAMP_TO_EDGE,minFilter:u=t.LINEAR,magFilter:c=u,type:_=t.UNSIGNED_BYTE,format:g=t.RGBA,internalFormat:d=g,unpackAlignment:p,premultiplyAlpha:m}={}){this.gl=t,this.width=e,this.height=i,this.depth=a,this.buffer=this.gl.createFramebuffer(),this.target=s,this.gl.bindFramebuffer(this.target,this.buffer),this.textures=[];const x=[];for(let y=0;y<n;y++)this.textures.push(new Ht(t,{width:e,height:i,wrapS:l,wrapT:f,minFilter:u,magFilter:c,type:_,format:g,internalFormat:d,unpackAlignment:p,premultiplyAlpha:m,flipY:!1,generateMipmaps:!1})),this.textures[y].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+y,this.gl.TEXTURE_2D,this.textures[y].texture,0),x.push(this.gl.COLOR_ATTACHMENT0+y);x.length>1&&this.gl.renderer.drawBuffers(x),this.texture=this.textures[0],o&&(this.gl.renderer.isWebgl2||this.gl.renderer.getExtension("WEBGL_depth_texture"))?(this.depthTexture=new Ht(t,{width:e,height:i,minFilter:this.gl.NEAREST,magFilter:this.gl.NEAREST,format:this.gl.DEPTH_COMPONENT,internalFormat:t.renderer.isWebgl2?this.gl.DEPTH_COMPONENT16:this.gl.DEPTH_COMPONENT,type:this.gl.UNSIGNED_INT}),this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(a&&!h&&(this.depthBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,e,i),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,this.depthBuffer)),h&&!a&&(this.stencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,e,i),this.gl.framebufferRenderbuffer(this.target,this.gl.STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.stencilBuffer)),a&&h&&(this.depthStencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,e,i),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.depthStencilBuffer))),this.gl.bindFramebuffer(this.target,null)}setSize(t,e){if(!(this.width===t&&this.height===e)){this.width=t,this.height=e,this.gl.bindFramebuffer(this.target,this.buffer);for(let i=0;i<this.textures.length;i++)this.textures[i].width=t,this.textures[i].height=e,this.textures[i].needsUpdate=!0,this.textures[i].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+i,this.gl.TEXTURE_2D,this.textures[i].texture,0);this.depthTexture?(this.depthTexture.width=t,this.depthTexture.height=e,this.depthTexture.needsUpdate=!0,this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(this.depthBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,t,e)),this.stencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,t,e)),this.depthStencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,t,e))),this.gl.bindFramebuffer(this.target,null)}}}function oh(r,t){return r[0]=t[0],r[1]=t[1],r}function lh(r,t,e){return r[0]=t,r[1]=e,r}function yr(r,t,e){return r[0]=t[0]+e[0],r[1]=t[1]+e[1],r}function xr(r,t,e){return r[0]=t[0]-e[0],r[1]=t[1]-e[1],r}function fh(r,t,e){return r[0]=t[0]*e[0],r[1]=t[1]*e[1],r}function uh(r,t,e){return r[0]=t[0]/e[0],r[1]=t[1]/e[1],r}function Ke(r,t,e){return r[0]=t[0]*e,r[1]=t[1]*e,r}function ch(r,t){var e=t[0]-r[0],i=t[1]-r[1];return Math.sqrt(e*e+i*i)}function dh(r,t){var e=t[0]-r[0],i=t[1]-r[1];return e*e+i*i}function vr(r){var t=r[0],e=r[1];return Math.sqrt(t*t+e*e)}function _h(r){var t=r[0],e=r[1];return t*t+e*e}function gh(r,t){return r[0]=-t[0],r[1]=-t[1],r}function ph(r,t){return r[0]=1/t[0],r[1]=1/t[1],r}function mh(r,t){var e=t[0],i=t[1],s=e*e+i*i;return s>0&&(s=1/Math.sqrt(s)),r[0]=t[0]*s,r[1]=t[1]*s,r}function yh(r,t){return r[0]*t[0]+r[1]*t[1]}function wr(r,t){return r[0]*t[1]-r[1]*t[0]}function xh(r,t,e,i){var s=t[0],n=t[1];return r[0]=s+i*(e[0]-s),r[1]=n+i*(e[1]-n),r}function vh(r,t,e){var i=t[0],s=t[1];return r[0]=e[0]*i+e[3]*s+e[6],r[1]=e[1]*i+e[4]*s+e[7],r}function wh(r,t,e){let i=t[0],s=t[1];return r[0]=e[0]*i+e[4]*s+e[12],r[1]=e[1]*i+e[5]*s+e[13],r}function bh(r,t){return r[0]===t[0]&&r[1]===t[1]}class Rt extends Array{constructor(t=0,e=t){return super(t,e),this}get x(){return this[0]}get y(){return this[1]}set x(t){this[0]=t}set y(t){this[1]=t}set(t,e=t){return t.length?this.copy(t):(lh(this,t,e),this)}copy(t){return oh(this,t),this}add(t,e){return e?yr(this,t,e):yr(this,this,t),this}sub(t,e){return e?xr(this,t,e):xr(this,this,t),this}multiply(t){return t.length?fh(this,this,t):Ke(this,this,t),this}divide(t){return t.length?uh(this,this,t):Ke(this,this,1/t),this}inverse(t=this){return ph(this,t),this}len(){return vr(this)}distance(t){return t?ch(this,t):vr(this)}squaredLen(){return this.squaredDistance()}squaredDistance(t){return t?dh(this,t):_h(this)}negate(t=this){return gh(this,t),this}cross(t,e){return e?wr(t,e):wr(this,t)}scale(t){return Ke(this,this,t),this}normalize(){return mh(this,this),this}dot(t){return yh(this,t)}equals(t){return bh(this,t)}applyMatrix3(t){return vh(this,this,t),this}applyMatrix4(t){return wh(this,this,t),this}lerp(t,e){return xh(this,this,t,e),this}clone(){return new Rt(this[0],this[1])}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t}}class br extends Array{constructor(t=0,e=t,i=t,s=t){return super(t,e,i,s),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(t){this[0]=t}set y(t){this[1]=t}set z(t){this[2]=t}set w(t){this[3]=t}set(t,e,i,s){return t.length?this.copy(t):(Ss(this,t,e,i,s),this)}copy(t){return Es(this,t),this}normalize(){return Ms(this,this),this}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this[3]=t[e+3],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t[e+3]=this[3],t}}class Rs extends Ts{constructor(t,{attributes:e={}}={}){Object.assign(e,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(t,e)}}class Th{constructor(t,{width:e,height:i,dpr:s,wrapS:n=t.CLAMP_TO_EDGE,wrapT:a=t.CLAMP_TO_EDGE,minFilter:h=t.LINEAR,magFilter:o=t.LINEAR,geometry:l=new Rs(t),targetOnly:f=null}={}){this.gl=t,this.options={wrapS:n,wrapT:a,minFilter:h,magFilter:o},this.passes=[],this.geometry=l,this.uniform={value:null},this.targetOnly=f;const u=this.fbo={read:null,write:null,swap:()=>{let c=u.read;u.read=u.write,u.write=c}};this.resize({width:e,height:i,dpr:s})}addPass({vertex:t=Eh,fragment:e=Sh,uniforms:i={},textureUniform:s="tMap",enabled:n=!0}={}){i[s]={value:this.fbo.read.texture};const a=new Ni(this.gl,{vertex:t,fragment:e,uniforms:i}),o={mesh:new Ii(this.gl,{geometry:this.geometry,program:a}),program:a,uniforms:i,enabled:n,textureUniform:s};return this.passes.push(o),o}resize({width:t,height:e,dpr:i}={}){i&&(this.dpr=i),t&&(this.width=t,this.height=e||t),i=this.dpr||this.gl.renderer.dpr,t=Math.floor((this.width||this.gl.renderer.width)*i),e=Math.floor((this.height||this.gl.renderer.height)*i),this.options.width=t,this.options.height=e,this.fbo.read=new Fe(this.gl,this.options),this.fbo.write=new Fe(this.gl,this.options)}render({scene:t,camera:e,texture:i,target:s=null,update:n=!0,sort:a=!0,frustumCull:h=!0}){const o=this.passes.filter(l=>l.enabled);i||(this.gl.renderer.render({scene:t,camera:e,target:o.length||!s&&this.targetOnly?this.fbo.write:s,update:n,sort:a,frustumCull:h}),this.fbo.swap()),o.forEach((l,f)=>{l.mesh.program.uniforms[l.textureUniform].value=!f&&i?i:this.fbo.read.texture,this.gl.renderer.render({scene:l.mesh,target:f===o.length-1&&(s||!this.targetOnly)?s:this.fbo.write,clear:!0}),this.fbo.swap()}),this.uniform.value=this.fbo.read.texture}}const Eh=`
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`,Sh=`
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`;class Mh{constructor(t,{size:e=128,falloff:i=.3,alpha:s=1,dissipation:n=.98,type:a}={}){const h=this;this.gl=t,this.uniform={value:null},this.mask={read:null,write:null,swap:()=>{let f=h.mask.read;h.mask.read=h.mask.write,h.mask.write=f,h.uniform.value=h.mask.read.texture}},o(),this.aspect=1,this.mouse=new Rt,this.velocity=new Rt,this.mesh=l();function o(){a||(a=t.HALF_FLOAT||t.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES);let f=(()=>t.renderer.isWebgl2||t.renderer.extensions[`OES_texture_${a===t.FLOAT?"":"half_"}float_linear`]?t.LINEAR:t.NEAREST)();const u={width:e,height:e,type:a,format:t.RGBA,internalFormat:t.renderer.isWebgl2?a===t.FLOAT?t.RGBA32F:t.RGBA16F:t.RGBA,minFilter:f,depth:!1};h.mask.read=new Fe(t,u),h.mask.write=new Fe(t,u),h.mask.swap()}function l(){return new Ii(t,{geometry:new Rs(t),program:new Ni(t,{vertex:Ah,fragment:Rh,uniforms:{tMap:h.uniform,uFalloff:{value:i*.5},uAlpha:{value:s},uDissipation:{value:n},uAspect:{value:1},uMouse:{value:h.mouse},uVelocity:{value:h.velocity}},depthTest:!1})})}}update(){this.mesh.program.uniforms.uAspect.value=this.aspect,this.gl.renderer.render({scene:this.mesh,target:this.mask.write,clear:!1}),this.mask.swap()}}const Ah=`
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`,Rh=`
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
`;var Ph=Object.defineProperty,Ch=Object.getOwnPropertyDescriptor,Ie=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ch(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Ph(t,e,s),s};let se=class extends xi{constructor(){super(),this.theme="",this.darkImages=["/images/Hero-Paint-1-Dark.jpg","/images/Hero-Paint-2-Dark.jpg"],this.lightImages=["/images/Hero-Paint-1-Light.jpg","/images/Hero-Paint-2-Light.jpg"],window.addEventListener("appLoaded",()=>{const r=`
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
      `,i={start1:"/images/Hero-Paint-1-Dark.jpg",end1:"/images/Hero-Paint-2-Dark.jpg",start2:"/images/Hero-Paint-1-Light.jpg",end2:"/images/Hero-Paint-2-Light.jpg",width:1600,height:1080},s=this,n=new ca({dpr:2}),a=n.gl,h=new Th(a);s.innerHTML="",s.appendChild(a.canvas);let o=1;const l=new Rt(-1),f=new Rt;let u;function c(){let P,J;const tt=i.height/i.width;window.innerHeight/window.innerWidth<tt?(P=1,J=window.innerHeight/window.innerWidth/tt):(P=window.innerWidth/window.innerHeight*tt,J=1),A.program.uniforms.res.value=new br(window.innerWidth,window.innerHeight,P,J),n.setSize(window.innerWidth,window.innerHeight),o=window.innerWidth/window.innerHeight}const _=new Mh(a,{size:8,falloff:.25,dissipation:.95,alpha:.68}),g=new Ts(a,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),d=new Ht(a,{minFilter:a.LINEAR,magFilter:a.LINEAR}),p=new Ht(a,{minFilter:a.LINEAR,magFilter:a.LINEAR}),m=new Ht(a,{minFilter:a.LINEAR,magFilter:a.LINEAR}),x=new Ht(a,{minFilter:a.LINEAR,magFilter:a.LINEAR}),y=new Image,v=new Image,w=new Image,b=new Image;y.onload=()=>d.image=y,y.crossOrigin="Anonymous",y.src=i.start1,v.onload=()=>p.image=v,v.crossOrigin="Anonymous",v.src=i.end1,w.onload=()=>m.image=w,w.crossOrigin="Anonymous",w.src=i.start2,b.onload=()=>x.image=b,b.crossOrigin="Anonymous",b.src=i.end2;let S,E;const T=i.height/i.width;window.innerHeight/window.innerWidth<T?(S=1,E=window.innerHeight/window.innerWidth/T):(S=window.innerWidth/window.innerHeight*T,E=1);const R=new Ni(a,{vertex:r,fragment:t,uniforms:{uTime:{value:0},tPaintStart:{value:d},tPaintEnd:{value:p},res:{value:new br(window.innerWidth,window.innerHeight,S,E)},img:{value:new Rt(i.height,i.width)},tFlow:_.uniform}});h.addPass({textureUniform:e,uniforms:{}});const A=new Ii(a,{geometry:g,program:R});window.addEventListener("resize",c,!1),c(),"ontouchstart"in window?(window.addEventListener("touchstart",D,!1),window.addEventListener("touchmove",D,{passive:!1})):window.addEventListener("mousemove",D,!1);let O;const M=new Rt;function D(P){if(P.target.tagName.toLowerCase()==="canvas"||P.target.hasAttribute("data-scrambler")){P.preventDefault(),P.changedTouches&&P.changedTouches.length&&(P.x=P.changedTouches[0].pageX,P.y=P.changedTouches[0].pageY),P.x===void 0&&(P.x=P.pageX,P.y=P.pageY),l.set(P.x/a.renderer.width,1-P.y/a.renderer.height),O||(O=performance.now(),M.set(P.x,P.y));const J=P.x-M.x,tt=P.y-M.y;M.set(P.x,P.y);let Et=performance.now(),_t=Math.max(10.4,Et-O);O=Et,f.x=J/_t,f.y=tt/_t,u=!0}}requestAnimationFrame(L);const B=()=>{document.body.dataset.theme==="light"?(A.program.uniforms.tPaintStart.value=m,A.program.uniforms.tPaintEnd.value=x):(A.program.uniforms.tPaintStart.value=d,A.program.uniforms.tPaintEnd.value=p)};setTimeout(B,200),window.addEventListener("themeChange",B);function L(P){requestAnimationFrame(L),u||(l.set(-1),f.set(0)),u=!1,_.aspect=o,_.mouse.copy(l),_.velocity.lerp(f,f.len()?.15:.1),_.update(),R.uniforms.uTime.value=P*.01,n.render({scene:A})}})}render(){return ze`
      <slot></slot>
    `}};se.styles=yi`
    :host {
      display: block;
      position: absolute;
    }
  `;Ie([De({type:String})],se.prototype,"theme",2);Ie([De({type:Array})],se.prototype,"darkImages",2);Ie([De({type:Array})],se.prototype,"lightImages",2);se=Ie([vi("c-canvas-main")],se);var Oh=Object.defineProperty,Fh=Object.getOwnPropertyDescriptor,Dh=(r,t,e,i)=>{for(var s=i>1?void 0:i?Fh(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Oh(t,e,s),s};let mi=class extends xi{handleChange(){const r=document.body.dataset.theme,t=r==="dark"?"light":"dark";document.body.dataset.theme=t,document.body.classList.remove("theme-"+r),document.body.classList.add("theme-"+t),this.dispatchEvent(new CustomEvent("themeChange",{detail:{theme:document.body.dataset.theme},bubbles:!0,composed:!0}))}render(){return ze`
      <label class="c-theme-switch__wrapper">
        <input
          type="checkbox"
          class="c-theme-switch__input"
          @change=${this.handleChange}
        />
        <span class="c-theme-switch__switch"></span>
        <slot></slot>
      </label>
    `}};mi.styles=yi`
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
  `;mi=Dh([vi("c-theme-switch")],mi);const Bh={title:"Hero"},zh=({...r})=>ze`
    <c-hero style="--vw: .85vw">
      <c-canvas-main slot="paint"></c-canvas-main>

			<h1 slot="tagline" class="js-text-plane">
				Multidisciplinary <br />
				Designer & Frontend <br />
				Developer
			</h1>
			<div slot="name-stylized">DAVIDBWATERS</div>
			<h2 slot="heading" class="js-text-plane">
				Building digital solutions to promote growth.
				<c-squiggle></c-squiggle>
			</h2>
			<c-theme-switch slot="footer-box-left" data-cursor-target>
				<c-icon icon="theme"></c-icon>
			</c-theme-switch>
			<div slot="footer-content-left">
				<a
					class="u-animation-wave u-text-large-3 u-margin-bottom-0"
					href="mailto:mrdavidbwaters@gmail.com"
					title="Get in Touch!"
				>
          <c-icon icon="wave"></c-icon>
        </a>
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
  `,kh=zh.bind({});kh.args={};const Uh=["Hero"];export{kh as Hero,Uh as __namedExportsOrder,Bh as default};
//# sourceMappingURL=Hero.stories.e6f1b207.js.map
