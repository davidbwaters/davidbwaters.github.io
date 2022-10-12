/* empty css                              */import{A as dc,x as uc,y as Ut}from"./chunks/lit-html.595eb6ed.js";function vi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function xl(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Be={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Pr={duration:.5,overwrite:!1,delay:0},Po,ke,Xt,We=1e8,wt=1/We,Ws=Math.PI*2,fc=Ws/4,gc=0,Sl=Math.sqrt,pc=Math.cos,mc=Math.sin,re=function(t){return typeof t=="string"},zt=function(t){return typeof t=="function"},Si=function(t){return typeof t=="number"},Oo=function(t){return typeof t>"u"},gi=function(t){return typeof t=="object"},Me=function(t){return t!==!1},El=function(){return typeof window<"u"},En=function(t){return zt(t)||re(t)},Tl=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},fe=Array.isArray,Gs=/(?:-?\.?\d|\.)+/gi,Al=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,vr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,bs=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cl=/[+-]=-?[.\d]+/,kl=/[^,'"\[\]\s]+/gi,_c=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,kt,Ve,Zs,Do,He={},jn={},Ml,Pl=function(t){return(jn=nr(t,He))&&Ue},Ro=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Wn=function(t,e){return!e&&console.warn(t)},Ol=function(t,e){return t&&(He[t]=e)&&jn&&(jn[t]=e)||He},fn=function(){return 0},vc={suppressEvents:!0,isStart:!0,kill:!1},$n={suppressEvents:!0,kill:!1},yc={suppressEvents:!0},zo={},Li=[],Ks={},Dl,Ie={},ws={},na=30,In=[],Lo="",$o=function(t){var e=t[0],i,n;if(gi(e)||zt(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(n=In.length;n--&&!In[n].targetTest(e););i=In[n]}for(n=t.length;n--;)t[n]&&(t[n]._gsap||(t[n]._gsap=new th(t[n],i)))||t.splice(n,1);return t},Qi=function(t){return t._gsap||$o(Ge(t))[0]._gsap},Rl=function(t,e,i){return(i=t[e])&&zt(i)?t[e]():Oo(i)&&t.getAttribute&&t.getAttribute(e)||i},Pe=function(t,e){return(t=t.split(",")).forEach(e)||t},Nt=function(t){return Math.round(t*1e5)/1e5||0},ae=function(t){return Math.round(t*1e7)/1e7||0},Er=function(t,e){var i=e.charAt(0),n=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+n:i==="-"?t-n:i==="*"?t*n:t/n},bc=function(t,e){for(var i=e.length,n=0;t.indexOf(e[n])<0&&++n<i;);return n<i},Gn=function(){var t=Li.length,e=Li.slice(0),i,n;for(Ks={},Li.length=0,i=0;i<t;i++)n=e[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},zl=function(t,e,i,n){Li.length&&Gn(),t.render(e,i,n||ke&&e<0&&(t._initted||t._startAt)),Li.length&&Gn()},Ll=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(kl).length<2?e:re(t)?t.trim():t},$l=function(t){return t},Qe=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},wc=function(t){return function(e,i){for(var n in i)n in e||n==="duration"&&t||n==="ease"||(e[n]=i[n])}},nr=function(t,e){for(var i in e)t[i]=e[i];return t},sa=function r(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=gi(e[i])?r(t[i]||(t[i]={}),e[i]):e[i]);return t},Zn=function(t,e){var i={},n;for(n in t)n in e||(i[n]=t[n]);return i},tn=function(t){var e=t.parent||kt,i=t.keyframes?wc(fe(t.keyframes)):Qe;if(Me(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},xc=function(t,e){for(var i=t.length,n=i===e.length;n&&i--&&t[i]===e[i];);return i<0},Il=function(t,e,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t[n],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[n]=e,e._prev=o,e.parent=e._dp=t,e},us=function(t,e,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=e._prev,o=e._next;s?s._next=o:t[i]===e&&(t[i]=o),o?o._prev=s:t[n]===e&&(t[n]=s),e._next=e._prev=e.parent=null},Ni=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},Ji=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},Sc=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Qs=function(t,e,i,n){return t._startAt&&(ke?t._startAt.revert($n):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,n))},Ec=function r(t){return!t||t._ts&&r(t.parent)},oa=function(t){return t._repeat?Or(t._tTime,t=t.duration()+t._rDelay)*t:0},Or=function(t,e){var i=Math.floor(t/=e);return t&&i===t?i-1:i},Kn=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},fs=function(t){return t._end=ae(t._start+(t._tDur/Math.abs(t._ts||t._rts||wt)||0))},gs=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=ae(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),fs(t),i._dirty||Ji(i,t)),t},Nl=function(t,e){var i;if((e._time||e._initted&&!e._dur)&&(i=Kn(t.rawTime(),e),(!e._dur||Sn(0,e.totalDuration(),i)-e._tTime>wt)&&e.render(i,!0)),Ji(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-wt}},hi=function(t,e,i,n){return e.parent&&Ni(e),e._start=ae((Si(i)?i:i||t!==kt?Ye(t,i,e):t._time)+e._delay),e._end=ae(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Il(t,e,"_first","_last",t._sort?"_start":0),Js(e)||(t._recent=e),n||Nl(t,e),t._ts<0&&gs(t,t._tTime),t},Fl=function(t,e){return(He.ScrollTrigger||Ro("scrollTrigger",e))&&He.ScrollTrigger.create(e,t)},Bl=function(t,e,i,n,s){if(No(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!ke&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Dl!==Ne.frame)return Li.push(t),t._lazy=[s,n],1},Tc=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Js=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Ac=function(t,e,i,n){var s=t.ratio,o=e<0||!e&&(!t._start&&Tc(t)&&!(!t._initted&&Js(t))||(t._ts<0||t._dp._ts<0)&&!Js(t))?0:1,a=t._rDelay,l=0,h,d,u;if(a&&t._repeat&&(l=Sn(0,t._tDur,e),d=Or(l,a),t._yoyo&&d&1&&(o=1-o),d!==Or(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||ke||n||t._zTime===wt||!e&&t._zTime){if(!t._initted&&Bl(t,e,n,i,l))return;for(u=t._zTime,t._zTime=e||(i?wt:0),i||(i=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,h=t._pt;h;)h.r(o,h.d),h=h._next;e<0&&Qs(t,e,i,!0),t._onUpdate&&!i&&Ze(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&Ze(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Ni(t,1),!i&&!ke&&(Ze(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Cc=function(t,e,i){var n;if(i>e)for(n=t._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<e)return n;n=n._prev}},Dr=function(t,e,i,n){var s=t._repeat,o=ae(e)||0,a=t._tTime/t._tDur;return a&&!n&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:ae(o*(s+1)+t._rDelay*s):o,a>0&&!n&&gs(t,t._tTime=t._tDur*a),t.parent&&fs(t),i||Ji(t.parent,t),t},aa=function(t){return t instanceof Ce?Ji(t):Dr(t,t._dur)},kc={_start:0,endTime:fn,totalDuration:fn},Ye=function r(t,e,i){var n=t.labels,s=t._recent||kc,o=t.duration()>=We?s.endTime(!1):t._dur,a,l,h;return re(e)&&(isNaN(e)||e in n)?(l=e.charAt(0),h=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(h?(a<0?s:i).totalDuration()/100:1)):a<0?(e in n||(n[e]=o),n[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),h&&i&&(l=l/100*(fe(i)?i[0]:i).totalDuration()),a>1?r(t,e.substr(0,a-1),i)+l:o+l)):e==null?o:+e},en=function(t,e,i){var n=Si(e[1]),s=(n?2:1)+(t<2?0:1),o=e[s],a,l;if(n&&(o.duration=e[1]),o.parent=i,t){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Me(l.vars.inherit)&&l.parent;o.immediateRender=Me(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Gt(e[0],o,e[s+1])},Hi=function(t,e){return t||t===0?e(t):e},Sn=function(t,e,i){return i<t?t:i>e?e:i},de=function(t,e){return!re(t)||!(e=_c.exec(t))?"":e[1]},Mc=function(t,e,i){return Hi(i,function(n){return Sn(t,e,n)})},to=[].slice,Hl=function(t,e){return t&&gi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&gi(t[0]))&&!t.nodeType&&t!==Ve},Pc=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(n){var s;return re(n)&&!e||Hl(n,1)?(s=i).push.apply(s,Ge(n)):i.push(n)})||i},Ge=function(t,e,i){return Xt&&!e&&Xt.selector?Xt.selector(t):re(t)&&!i&&(Zs||!Rr())?to.call((e||Do).querySelectorAll(t),0):fe(t)?Pc(t,i):Hl(t)?to.call(t,0):t?[t]:[]},eo=function(t){return t=Ge(t)[0]||Wn("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return Ge(e,i.querySelectorAll?i:i===t?Wn("Invalid scope")||Do.createElement("div"):t)}},Ul=function(t){return t.sort(function(){return .5-Math.random()})},Xl=function(t){if(zt(t))return t;var e=gi(t)?t:{each:t},i=tr(e.ease),n=e.from||0,s=parseFloat(e.base)||0,o={},a=n>0&&n<1,l=isNaN(n)||a,h=e.axis,d=n,u=n;return re(n)?d=u={center:.5,edges:.5,end:1}[n]||0:!a&&l&&(d=n[0],u=n[1]),function(f,g,_){var m=(_||e).length,y=o[m],w,A,S,E,k,P,D,L,M;if(!y){if(M=e.grid==="auto"?0:(e.grid||[1,We])[1],!M){for(D=-We;D<(D=_[M++].getBoundingClientRect().left)&&M<m;);M--}for(y=o[m]=[],w=l?Math.min(M,m)*d-.5:n%M,A=M===We?0:l?m*u/M-.5:n/M|0,D=0,L=We,P=0;P<m;P++)S=P%M-w,E=A-(P/M|0),y[P]=k=h?Math.abs(h==="y"?E:S):Sl(S*S+E*E),k>D&&(D=k),k<L&&(L=k);n==="random"&&Ul(y),y.max=D-L,y.min=L,y.v=m=(parseFloat(e.amount)||parseFloat(e.each)*(M>m?m-1:h?h==="y"?m/M:M:Math.max(M,m/M))||0)*(n==="edges"?-1:1),y.b=m<0?s-m:s,y.u=de(e.amount||e.each)||0,i=i&&m<0?Kl(i):i}return m=(y[f]-y.min)/y.max||0,ae(y.b+(i?i(m):m)*y.v)+y.u}},io=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var n=ae(Math.round(parseFloat(i)/t)*t*e);return(n-n%1)/e+(Si(i)?0:de(i))}},ql=function(t,e){var i=fe(t),n,s;return!i&&gi(t)&&(n=i=t.radius||We,t.values?(t=Ge(t.values),(s=!Si(t[0]))&&(n*=n)):t=io(t.increment)),Hi(e,i?zt(t)?function(o){return s=t(o),Math.abs(s-o)<=n?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),h=We,d=0,u=t.length,f,g;u--;)s?(f=t[u].x-a,g=t[u].y-l,f=f*f+g*g):f=Math.abs(t[u]-a),f<h&&(h=f,d=u);return d=!n||h<=n?t[d]:o,s||d===o||Si(o)?d:d+de(o)}:io(t))},Yl=function(t,e,i,n){return Hi(fe(t)?!e:i===!0?!!(i=0):!n,function(){return fe(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*n)/n})},Oc=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(n){return e.reduce(function(s,o){return o(s)},n)}},Dc=function(t,e){return function(i){return t(parseFloat(i))+(e||de(i))}},Rc=function(t,e,i){return jl(t,e,0,1,i)},Vl=function(t,e,i){return Hi(i,function(n){return t[~~e(n)]})},zc=function r(t,e,i){var n=e-t;return fe(t)?Vl(t,r(0,t.length),e):Hi(i,function(s){return(n+(s-t)%n)%n+t})},Lc=function r(t,e,i){var n=e-t,s=n*2;return fe(t)?Vl(t,r(0,t.length-1),e):Hi(i,function(o){return o=(s+(o-t)%s)%s||0,t+(o>n?s-o:o)})},gn=function(t){for(var e=0,i="",n,s,o,a;~(n=t.indexOf("random(",e));)o=t.indexOf(")",n),a=t.charAt(n+7)==="[",s=t.substr(n+7,o-n-7).match(a?kl:Gs),i+=t.substr(e,n-e)+Yl(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return i+t.substr(e,t.length-e)},jl=function(t,e,i,n,s){var o=e-t,a=n-i;return Hi(s,function(l){return i+((l-t)/o*a||0)})},$c=function r(t,e,i,n){var s=isNaN(t+e)?0:function(g){return(1-g)*t+g*e};if(!s){var o=re(t),a={},l,h,d,u,f;if(i===!0&&(n=1)&&(i=null),o)t={p:t},e={p:e};else if(fe(t)&&!fe(e)){for(d=[],u=t.length,f=u-2,h=1;h<u;h++)d.push(r(t[h-1],t[h]));u--,s=function(_){_*=u;var m=Math.min(f,~~_);return d[m](_-m)},i=e}else n||(t=nr(fe(t)?[]:{},t));if(!d){for(l in e)Io.call(a,t,l,"get",e[l]);s=function(_){return Ho(_,a)||(o?t.p:t)}}}return Hi(i,s)},la=function(t,e,i){var n=t.labels,s=We,o,a,l;for(o in n)a=n[o]-e,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ze=function(t,e,i){var n=t.vars,s=n[e],o=Xt,a=t._ctx,l,h,d;if(!!s)return l=n[e+"Params"],h=n.callbackScope||t,i&&Li.length&&Gn(),a&&(Xt=a),d=l?s.apply(h,l):s.call(h),Xt=o,d},Gr=function(t){return Ni(t),t.scrollTrigger&&t.scrollTrigger.kill(!!ke),t.progress()<1&&Ze(t,"onInterrupt"),t},yr,Ic=function(t){t=!t.name&&t.default||t;var e=t.name,i=zt(t),n=e&&!i&&t.init?function(){this._props=[]}:t,s={init:fn,render:Ho,add:Io,kill:Jc,modifier:Qc,rawVars:0},o={targetTest:0,get:0,getSetter:Bo,aliases:{},register:0};if(Rr(),t!==n){if(Ie[e])return;Qe(n,Qe(Zn(t,s),o)),nr(n.prototype,nr(s,Zn(t,o))),Ie[n.prop=e]=n,t.targetTest&&(In.push(n),zo[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ol(e,n),t.register&&t.register(Ue,n,Oe)},St=255,Zr={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},xs=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*St+.5|0},Wl=function(t,e,i){var n=t?Si(t)?[t>>16,t>>8&St,t&St]:0:Zr.black,s,o,a,l,h,d,u,f,g,_;if(!n){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Zr[t])n=Zr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return n=parseInt(t.substr(1,6),16),[n>>16,n>>8&St,n&St,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),n=[t>>16,t>>8&St,t&St]}else if(t.substr(0,3)==="hsl"){if(n=_=t.match(Gs),!e)l=+n[0]%360/360,h=+n[1]/100,d=+n[2]/100,o=d<=.5?d*(h+1):d+h-d*h,s=d*2-o,n.length>3&&(n[3]*=1),n[0]=xs(l+1/3,s,o),n[1]=xs(l,s,o),n[2]=xs(l-1/3,s,o);else if(~t.indexOf("="))return n=t.match(Al),i&&n.length<4&&(n[3]=1),n}else n=t.match(Gs)||Zr.transparent;n=n.map(Number)}return e&&!_&&(s=n[0]/St,o=n[1]/St,a=n[2]/St,u=Math.max(s,o,a),f=Math.min(s,o,a),d=(u+f)/2,u===f?l=h=0:(g=u-f,h=d>.5?g/(2-u-f):g/(u+f),l=u===s?(o-a)/g+(o<a?6:0):u===o?(a-s)/g+2:(s-o)/g+4,l*=60),n[0]=~~(l+.5),n[1]=~~(h*100+.5),n[2]=~~(d*100+.5)),i&&n.length<4&&(n[3]=1),n},Gl=function(t){var e=[],i=[],n=-1;return t.split($i).forEach(function(s){var o=s.match(vr)||[];e.push.apply(e,o),i.push(n+=o.length+1)}),e.c=i,e},ha=function(t,e,i){var n="",s=(t+n).match($i),o=e?"hsla(":"rgba(",a=0,l,h,d,u;if(!s)return t;if(s=s.map(function(f){return(f=Wl(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(d=Gl(t),l=i.c,l.join(n)!==d.c.join(n)))for(h=t.replace($i,"1").split(vr),u=h.length-1;a<u;a++)n+=h[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(d.length?d:s.length?s:i).shift());if(!h)for(h=t.split($i),u=h.length-1;a<u;a++)n+=h[a]+s[a];return n+h[u]},$i=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Zr)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),Nc=/hsl[a]?\(/,Zl=function(t){var e=t.join(" "),i;if($i.lastIndex=0,$i.test(e))return i=Nc.test(e),t[1]=ha(t[1],i),t[0]=ha(t[0],i,Gl(t[1])),!0},pn,Ne=function(){var r=Date.now,t=500,e=33,i=r(),n=i,s=1e3/240,o=s,a=[],l,h,d,u,f,g,_=function m(y){var w=r()-n,A=y===!0,S,E,k,P;if(w>t&&(i+=w-e),n+=w,k=n-i,S=k-o,(S>0||A)&&(P=++u.frame,f=k-u.time*1e3,u.time=k=k/1e3,o+=S+(S>=s?4:s-S),E=1),A||(l=h(m)),E)for(g=0;g<a.length;g++)a[g](k,f,P,y)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(y){return f/(1e3/(y||60))},wake:function(){Ml&&(!Zs&&El()&&(Ve=Zs=window,Do=Ve.document||{},He.gsap=Ue,(Ve.gsapVersions||(Ve.gsapVersions=[])).push(Ue.version),Pl(jn||Ve.GreenSockGlobals||!Ve.gsap&&Ve||{}),d=Ve.requestAnimationFrame),l&&u.sleep(),h=d||function(y){return setTimeout(y,o-u.time*1e3+1|0)},pn=1,_(2))},sleep:function(){(d?Ve.cancelAnimationFrame:clearTimeout)(l),pn=0,h=fn},lagSmoothing:function(y,w){t=y||1/wt,e=Math.min(w,t,0)},fps:function(y){s=1e3/(y||240),o=u.time*1e3+s},add:function(y,w,A){var S=w?function(E,k,P,D){y(E,k,P,D),u.remove(S)}:y;return u.remove(y),a[A?"unshift":"push"](S),Rr(),S},remove:function(y,w){~(w=a.indexOf(y))&&a.splice(w,1)&&g>=w&&g--},_listeners:a},u}(),Rr=function(){return!pn&&Ne.wake()},ft={},Fc=/^[\d.\-M][\d.\-,\s]/,Bc=/["']/g,Hc=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),n=i[0],s=1,o=i.length,a,l,h;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,h=l.substr(0,a),e[n]=isNaN(h)?h.replace(Bc,"").trim():+h,n=l.substr(a+1).trim();return e},Uc=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),n=t.indexOf("(",e);return t.substring(e,~n&&n<i?t.indexOf(")",i+1):i)},Xc=function(t){var e=(t+"").split("("),i=ft[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[Hc(e[1])]:Uc(t).split(",").map(Ll)):ft._CE&&Fc.test(t)?ft._CE("",t):i},Kl=function(t){return function(e){return 1-t(1-e)}},Ql=function r(t,e){for(var i=t._first,n;i;)i instanceof Ce?r(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?r(i.timeline,e):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=e)),i=i._next},tr=function(t,e){return t&&(zt(t)?t:ft[t]||Xc(t))||e},hr=function(t,e,i,n){i===void 0&&(i=function(l){return 1-e(1-l)}),n===void 0&&(n=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:n},o;return Pe(t,function(a){ft[a]=He[a]=s,ft[o=a.toLowerCase()]=i;for(var l in s)ft[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ft[a+"."+l]=s[l]}),s},Jl=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Ss=function r(t,e,i){var n=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),o=s/Ws*(Math.asin(1/n)||0),a=function(d){return d===1?1:n*Math.pow(2,-10*d)*mc((d-o)*s)+1},l=t==="out"?a:t==="in"?function(h){return 1-a(1-h)}:Jl(a);return s=Ws/s,l.config=function(h,d){return r(t,h,d)},l},Es=function r(t,e){e===void 0&&(e=1.70158);var i=function(o){return o?--o*o*((e+1)*o+e)+1:0},n=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:Jl(i);return n.config=function(s){return r(t,s)},n};Pe("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;hr(r+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});ft.Linear.easeNone=ft.none=ft.Linear.easeIn;hr("Elastic",Ss("in"),Ss("out"),Ss());(function(r,t){var e=1/t,i=2*e,n=2.5*e,s=function(a){return a<e?r*a*a:a<i?r*Math.pow(a-1.5/t,2)+.75:a<n?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};hr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);hr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});hr("Circ",function(r){return-(Sl(1-r*r)-1)});hr("Sine",function(r){return r===1?1:-pc(r*fc)+1});hr("Back",Es("in"),Es("out"),Es());ft.SteppedEase=ft.steps=He.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,n=t+(e?0:1),s=e?1:0,o=1-wt;return function(a){return((n*Sn(0,o,a)|0)+s)*i}}};Pr.ease=ft["quad.out"];Pe("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Lo+=r+","+r+"Params,"});var th=function(t,e){this.id=gc++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Rl,this.set=e?e.getSetter:Bo},zr=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Dr(this,+e.duration,1,1),this.data=e.data,Xt&&(this._ctx=Xt,Xt.data.push(this)),pn||Ne.wake()}var t=r.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Dr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,n){if(Rr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(gs(this,i),!s._dp||s.parent||Nl(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&hi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===wt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),zl(this,i,n)),this},t.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+oa(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},t.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+oa(this),n):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?Or(this._tTime,s)+1:1},t.timeScale=function(i){if(!arguments.length)return this._rts===-wt?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?Kn(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-wt?0:this._rts,this.totalTime(Sn(-this._delay,this._tDur,n),!0),fs(this),Sc(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Rr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==wt&&(this._tTime-=wt)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&hi(n,this,i-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Me(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Kn(n.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=yc);var n=ke;return ke=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),ke=n,this},t.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(n._ts||1),n=n._dp;return!this.parent&&this.vars.immediateRender?-1:s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,aa(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,aa(this),n?this.time(n):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,n){return this.totalTime(Ye(this,i),Me(n))},t.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Me(n))},t.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},t.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},t.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-wt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-wt,this},t.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-wt)},t.eventCallback=function(i,n,s){var o=this.vars;return arguments.length>1?(n?(o[i]=n,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},t.then=function(i){var n=this;return new Promise(function(s){var o=zt(i)?i:$l,a=function(){var h=n.then;n.then=null,zt(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=h),s(o),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?a():n._prom=a})},t.kill=function(){Gr(this)},r}();Qe(zr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-wt,_prom:0,_ps:!1,_rts:1});var Ce=function(r){xl(t,r);function t(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Me(i.sortChildren),kt&&hi(i.parent||kt,vi(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Fl(vi(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(n,s,o){return en(0,arguments,this),this},e.from=function(n,s,o){return en(1,arguments,this),this},e.fromTo=function(n,s,o,a){return en(2,arguments,this),this},e.set=function(n,s,o){return s.duration=0,s.parent=this,tn(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Gt(n,s,Ye(this,o),1),this},e.call=function(n,s,o){return hi(this,Gt.delayedCall(0,n,s),o)},e.staggerTo=function(n,s,o,a,l,h,d){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=h,o.onCompleteParams=d,o.parent=this,new Gt(n,o,Ye(this,l)),this},e.staggerFrom=function(n,s,o,a,l,h,d){return o.runBackwards=1,tn(o).immediateRender=Me(o.immediateRender),this.staggerTo(n,s,o,a,l,h,d)},e.staggerFromTo=function(n,s,o,a,l,h,d,u){return a.startAt=o,tn(a).immediateRender=Me(a.immediateRender),this.staggerTo(n,s,a,l,h,d,u)},e.render=function(n,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,h=this._dur,d=n<=0?0:ae(n),u=this._zTime<0!=n<0&&(this._initted||!h),f,g,_,m,y,w,A,S,E,k,P,D;if(this!==kt&&d>l&&n>=0&&(d=l),d!==this._tTime||o||u){if(a!==this._time&&h&&(d+=this._time-a,n+=this._time-a),f=d,E=this._start,S=this._ts,w=!S,u&&(h||(a=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(P=this._yoyo,y=h+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(y*100+n,s,o);if(f=ae(d%y),d===l?(m=this._repeat,f=h):(m=~~(d/y),m&&m===d/y&&(f=h,m--),f>h&&(f=h)),k=Or(this._tTime,y),!a&&this._tTime&&k!==m&&(k=m),P&&m&1&&(f=h-f,D=1),m!==k&&!this._lock){var L=P&&k&1,M=L===(P&&m&1);if(m<k&&(L=!L),a=L?0:h,this._lock=1,this.render(a||(D?0:ae(m*y)),s,!h)._lock=0,this._tTime=d,!s&&this.parent&&Ze(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1),a&&a!==this._time||w!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,l=this._tDur,M&&(this._lock=2,a=L?h:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!w)return this;Ql(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=Cc(this,ae(a),ae(f)),A&&(d-=f-(f=A._start))),this._tTime=d,this._time=f,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&f&&!s&&(Ze(this,"onStart"),this._tTime!==d))return this;if(f>=a&&n>=0)for(g=this._first;g;){if(_=g._next,(g._act||f>=g._start)&&g._ts&&A!==g){if(g.parent!==this)return this.render(n,s,o);if(g.render(g._ts>0?(f-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(f-g._start)*g._ts,s,o),f!==this._time||!this._ts&&!w){A=0,_&&(d+=this._zTime=-wt);break}}g=_}else{g=this._last;for(var N=n<0?n:f;g;){if(_=g._prev,(g._act||N<=g._end)&&g._ts&&A!==g){if(g.parent!==this)return this.render(n,s,o);if(g.render(g._ts>0?(N-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(N-g._start)*g._ts,s,o||ke&&(g._initted||g._startAt)),f!==this._time||!this._ts&&!w){A=0,_&&(d+=this._zTime=N?-wt:wt);break}}g=_}}if(A&&!s&&(this.pause(),A.render(f>=a?0:-wt)._zTime=f>=a?1:-1,this._ts))return this._start=E,fs(this),this.render(n,s,o);this._onUpdate&&!s&&Ze(this,"onUpdate",!0),(d===l&&this._tTime>=this.totalDuration()||!d&&a)&&(E===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((n||!h)&&(d===l&&this._ts>0||!d&&this._ts<0)&&Ni(this,1),!s&&!(n<0&&!a)&&(d||a||!l)&&(Ze(this,d===l&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(n,s){var o=this;if(Si(s)||(s=Ye(this,s,n)),!(n instanceof zr)){if(fe(n))return n.forEach(function(a){return o.add(a,s)}),this;if(re(n))return this.addLabel(n,s);if(zt(n))n=Gt.delayedCall(0,n);else return this}return this!==n?hi(this,n,s):this},e.getChildren=function(n,s,o,a){n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-We);for(var l=[],h=this._first;h;)h._start>=a&&(h instanceof Gt?s&&l.push(h):(o&&l.push(h),n&&l.push.apply(l,h.getChildren(!0,s,o)))),h=h._next;return l},e.getById=function(n){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===n)return s[o]},e.remove=function(n){return re(n)?this.removeLabel(n):zt(n)?this.killTweensOf(n):(us(this,n),n===this._recent&&(this._recent=this._last),Ji(this))},e.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ae(Ne.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},e.addLabel=function(n,s){return this.labels[n]=Ye(this,s),this},e.removeLabel=function(n){return delete this.labels[n],this},e.addPause=function(n,s,o){var a=Gt.delayedCall(0,s||fn,o);return a.data="isPause",this._hasPause=1,hi(this,a,Ye(this,n))},e.removePause=function(n){var s=this._first;for(n=Ye(this,n);s;)s._start===n&&s.data==="isPause"&&Ni(s),s=s._next},e.killTweensOf=function(n,s,o){for(var a=this.getTweensOf(n,o),l=a.length;l--;)ki!==a[l]&&a[l].kill(n,s);return this},e.getTweensOf=function(n,s){for(var o=[],a=Ge(n),l=this._first,h=Si(s),d;l;)l instanceof Gt?bc(l._targets,a)&&(h?(!ki||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(d=l.getTweensOf(a,s)).length&&o.push.apply(o,d),l=l._next;return o},e.tweenTo=function(n,s){s=s||{};var o=this,a=Ye(o,n),l=s,h=l.startAt,d=l.onStart,u=l.onStartParams,f=l.immediateRender,g,_=Gt.to(o,Qe({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(h&&"time"in h?h.time:o._time))/o.timeScale())||wt,onStart:function(){if(o.pause(),!g){var y=s.duration||Math.abs((a-(h&&"time"in h?h.time:o._time))/o.timeScale());_._dur!==y&&Dr(_,y,0,1).render(_._time,!0,!0),g=1}d&&d.apply(_,u||[])}},s));return f?_.render(0):_},e.tweenFromTo=function(n,s,o){return this.tweenTo(s,Qe({startAt:{time:Ye(this,n)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(n){return n===void 0&&(n=this._time),la(this,Ye(this,n))},e.previousLabel=function(n){return n===void 0&&(n=this._time),la(this,Ye(this,n),1)},e.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+wt)},e.shiftChildren=function(n,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,h;a;)a._start>=o&&(a._start+=n,a._end+=n),a=a._next;if(s)for(h in l)l[h]>=o&&(l[h]+=n);return Ji(this)},e.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},e.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Ji(this)},e.totalDuration=function(n){var s=0,o=this,a=o._last,l=We,h,d,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(u=o.parent;a;)h=a._prev,a._dirty&&a.totalDuration(),d=a._start,d>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,hi(o,a,d-a._delay,1)._lock=0):l=d,d<0&&a._ts&&(s-=d,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=d/o._ts,o._time-=d,o._tTime-=d),o.shiftChildren(-d,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=h;Dr(o,o===kt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(n){if(kt._ts&&(zl(kt,Kn(n,kt)),Dl=Ne.frame),Ne.frame>=na){na+=Be.autoSleep||120;var s=kt._first;if((!s||!s._ts)&&Be.autoSleep&&Ne._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ne.sleep()}}},t}(zr);Qe(Ce.prototype,{_lock:0,_hasPause:0,_forcing:0});var qc=function(t,e,i,n,s,o,a){var l=new Oe(this._pt,t,e,0,1,oh,null,s),h=0,d=0,u,f,g,_,m,y,w,A;for(l.b=i,l.e=n,i+="",n+="",(w=~n.indexOf("random("))&&(n=gn(n)),o&&(A=[i,n],o(A,t,e),i=A[0],n=A[1]),f=i.match(bs)||[];u=bs.exec(n);)_=u[0],m=n.substring(h,u.index),g?g=(g+1)%5:m.substr(-5)==="rgba("&&(g=1),_!==f[d++]&&(y=parseFloat(f[d-1])||0,l._pt={_next:l._pt,p:m||d===1?m:",",s:y,c:_.charAt(1)==="="?Er(y,_)-y:parseFloat(_)-y,m:g&&g<4?Math.round:0},h=bs.lastIndex);return l.c=h<n.length?n.substring(h,n.length):"",l.fp=a,(Cl.test(n)||w)&&(l.e=0),this._pt=l,l},Io=function(t,e,i,n,s,o,a,l,h,d){zt(n)&&(n=n(s||0,t,o));var u=t[e],f=i!=="get"?i:zt(u)?h?t[e.indexOf("set")||!zt(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():u,g=zt(u)?h?Gc:nh:Fo,_;if(re(n)&&(~n.indexOf("random(")&&(n=gn(n)),n.charAt(1)==="="&&(_=Er(f,n)+(de(f)||0),(_||_===0)&&(n=_))),!d||f!==n||ro)return!isNaN(f*n)&&n!==""?(_=new Oe(this._pt,t,e,+f||0,n-(f||0),typeof u=="boolean"?Kc:sh,0,g),h&&(_.fp=h),a&&_.modifier(a,this,t),this._pt=_):(!u&&!(e in t)&&Ro(e,n),qc.call(this,t,e,f,n,g,l||Be.stringFilter,h))},Yc=function(t,e,i,n,s){if(zt(t)&&(t=rn(t,s,e,i,n)),!gi(t)||t.style&&t.nodeType||fe(t)||Tl(t))return re(t)?rn(t,s,e,i,n):t;var o={},a;for(a in t)o[a]=rn(t[a],s,e,i,n);return o},eh=function(t,e,i,n,s,o){var a,l,h,d;if(Ie[t]&&(a=new Ie[t]).init(s,a.rawVars?e[t]:Yc(e[t],n,s,o,i),i,n,o)!==!1&&(i._pt=l=new Oe(i._pt,s,t,0,1,a.render,a,0,a.priority),i!==yr))for(h=i._ptLookup[i._targets.indexOf(s)],d=a._props.length;d--;)h[a._props[d]]=l;return a},ki,ro,No=function r(t,e,i){var n=t.vars,s=n.ease,o=n.startAt,a=n.immediateRender,l=n.lazy,h=n.onUpdate,d=n.onUpdateParams,u=n.callbackScope,f=n.runBackwards,g=n.yoyoEase,_=n.keyframes,m=n.autoRevert,y=t._dur,w=t._startAt,A=t._targets,S=t.parent,E=S&&S.data==="nested"?S.vars.targets:A,k=t._overwrite==="auto"&&!Po,P=t.timeline,D,L,M,N,F,H,Q,B,W,q,nt,U,lt;if(P&&(!_||!s)&&(s="none"),t._ease=tr(s,Pr.ease),t._yEase=g?Kl(tr(g===!0?s:g,Pr.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!P&&!!n.runBackwards,!P||_&&!n.stagger){if(B=A[0]?Qi(A[0]).harness:0,U=B&&n[B.prop],D=Zn(n,zo),w&&(w._zTime<0&&w.progress(1),e<0&&f&&a&&!m?w.render(-1,!0):w.revert(f&&y?$n:vc),w._lazy=0),o){if(Ni(t._startAt=Gt.set(A,Qe({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:Me(l),startAt:null,delay:0,onUpdate:h,onUpdateParams:d,callbackScope:u,stagger:0},o))),t._startAt._dp=0,e<0&&(ke||!a&&!m)&&t._startAt.revert($n),a&&y&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(f&&y&&!w){if(e&&(a=!1),M=Qe({overwrite:!1,data:"isFromStart",lazy:a&&Me(l),immediateRender:a,stagger:0,parent:S},D),U&&(M[B.prop]=U),Ni(t._startAt=Gt.set(A,M)),t._startAt._dp=0,e<0&&(ke?t._startAt.revert($n):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,wt,wt);else if(!e)return}for(t._pt=t._ptCache=0,l=y&&Me(l)||l&&!y,L=0;L<A.length;L++){if(F=A[L],Q=F._gsap||$o(A)[L]._gsap,t._ptLookup[L]=q={},Ks[Q.id]&&Li.length&&Gn(),nt=E===A?L:E.indexOf(F),B&&(W=new B).init(F,U||D,t,nt,E)!==!1&&(t._pt=N=new Oe(t._pt,F,W.name,0,1,W.render,W,0,W.priority),W._props.forEach(function(C){q[C]=N}),W.priority&&(H=1)),!B||U)for(M in D)Ie[M]&&(W=eh(M,D,t,nt,F,E))?W.priority&&(H=1):q[M]=N=Io.call(t,F,M,"get",D[M],nt,E,0,n.stringFilter);t._op&&t._op[L]&&t.kill(F,t._op[L]),k&&t._pt&&(ki=t,kt.killTweensOf(F,q,t.globalTime(e)),lt=!t.parent,ki=0),t._pt&&l&&(Ks[Q.id]=1)}H&&ah(t),t._onInit&&t._onInit(t)}t._onUpdate=h,t._initted=(!t._op||t._pt)&&!lt,_&&e<=0&&P.render(We,!0,!0)},Vc=function(t,e,i,n,s,o,a){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!l)for(l=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return ro=1,t.vars[e]="+=0",No(t,a),ro=0,1;l.push(h)}for(f=l.length;f--;)d=l[f],h=d._pt||d,h.s=(n||n===0)&&!s?n:h.s+(n||0)+o*h.c,h.c=i-h.s,d.e&&(d.e=Nt(i)+de(d.e)),d.b&&(d.b=h.s+de(d.b))},jc=function(t,e){var i=t[0]?Qi(t[0]).harness:0,n=i&&i.aliases,s,o,a,l;if(!n)return e;s=nr({},e);for(o in n)if(o in s)for(l=n[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Wc=function(t,e,i,n){var s=e.ease||n||"power1.inOut",o,a;if(fe(e))a=i[t]||(i[t]=[]),e.forEach(function(l,h){return a.push({t:h/(e.length-1)*100,v:l,e:s})});else for(o in e)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},rn=function(t,e,i,n,s){return zt(t)?t.call(e,i,n,s):re(t)&&~t.indexOf("random(")?gn(t):t},ih=Lo+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",rh={};Pe(ih+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return rh[r]=1});var Gt=function(r){xl(t,r);function t(i,n,s,o){var a;typeof n=="number"&&(s.duration=n,n=s,s=null),a=r.call(this,o?n:tn(n))||this;var l=a.vars,h=l.duration,d=l.delay,u=l.immediateRender,f=l.stagger,g=l.overwrite,_=l.keyframes,m=l.defaults,y=l.scrollTrigger,w=l.yoyoEase,A=n.parent||kt,S=(fe(i)||Tl(i)?Si(i[0]):"length"in n)?[i]:Ge(i),E,k,P,D,L,M,N,F;if(a._targets=S.length?$o(S):Wn("GSAP target "+i+" not found. https://greensock.com",!Be.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=g,_||f||En(h)||En(d)){if(n=a.vars,E=a.timeline=new Ce({data:"nested",defaults:m||{},targets:A&&A.data==="nested"?A.vars.targets:S}),E.kill(),E.parent=E._dp=vi(a),E._start=0,f||En(h)||En(d)){if(D=S.length,N=f&&Xl(f),gi(f))for(L in f)~ih.indexOf(L)&&(F||(F={}),F[L]=f[L]);for(k=0;k<D;k++)P=Zn(n,rh),P.stagger=0,w&&(P.yoyoEase=w),F&&nr(P,F),M=S[k],P.duration=+rn(h,vi(a),k,M,S),P.delay=(+rn(d,vi(a),k,M,S)||0)-a._delay,!f&&D===1&&P.delay&&(a._delay=d=P.delay,a._start+=d,P.delay=0),E.to(M,P,N?N(k,M,S):0),E._ease=ft.none;E.duration()?h=d=0:a.timeline=0}else if(_){tn(Qe(E.vars.defaults,{ease:"none"})),E._ease=tr(_.ease||n.ease||"none");var H=0,Q,B,W;if(fe(_))_.forEach(function(q){return E.to(S,q,">")}),E.duration();else{P={};for(L in _)L==="ease"||L==="easeEach"||Wc(L,_[L],P,_.easeEach);for(L in P)for(Q=P[L].sort(function(q,nt){return q.t-nt.t}),H=0,k=0;k<Q.length;k++)B=Q[k],W={ease:B.e,duration:(B.t-(k?Q[k-1].t:0))/100*h},W[L]=B.v,E.to(S,W,H),H+=W.duration;E.duration()<h&&E.to({},{duration:h-E.duration()})}}h||a.duration(h=E.duration())}else a.timeline=0;return g===!0&&!Po&&(ki=vi(a),kt.killTweensOf(S),ki=0),hi(A,vi(a),s),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(u||!h&&!_&&a._start===ae(A._time)&&Me(u)&&Ec(vi(a))&&A.data!=="nested")&&(a._tTime=-wt,a.render(Math.max(0,-d)||0)),y&&Fl(vi(a),y),a}var e=t.prototype;return e.render=function(n,s,o){var a=this._time,l=this._tDur,h=this._dur,d=n<0,u=n>l-wt&&!d?l:n<wt?0:n,f,g,_,m,y,w,A,S,E;if(!h)Ac(this,n,s,o);else if(u!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d){if(f=u,S=this.timeline,this._repeat){if(m=h+this._rDelay,this._repeat<-1&&d)return this.totalTime(m*100+n,s,o);if(f=ae(u%m),u===l?(_=this._repeat,f=h):(_=~~(u/m),_&&_===u/m&&(f=h,_--),f>h&&(f=h)),w=this._yoyo&&_&1,w&&(E=this._yEase,f=h-f),y=Or(this._tTime,m),f===a&&!o&&this._initted)return this._tTime=u,this;_!==y&&(S&&this._yEase&&Ql(S,w),this.vars.repeatRefresh&&!w&&!this._lock&&(this._lock=o=1,this.render(ae(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(Bl(this,d?n:f,o,s,u))return this._tTime=0,this;if(a!==this._time)return this;if(h!==this._dur)return this.render(n,s,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=A=(E||this._ease)(f/h),this._from&&(this.ratio=A=1-A),f&&!a&&!s&&(Ze(this,"onStart"),this._tTime!==u))return this;for(g=this._pt;g;)g.r(A,g.d),g=g._next;S&&S.render(n<0?n:!f&&w?-wt:S._dur*S._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(d&&Qs(this,n,s,o),Ze(this,"onUpdate")),this._repeat&&_!==y&&this.vars.onRepeat&&!s&&this.parent&&Ze(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(d&&!this._onUpdate&&Qs(this,n,!0,!0),(n||!h)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ni(this,1),!s&&!(d&&!a)&&(u||a||w)&&(Ze(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},e.resetTo=function(n,s,o,a){pn||Ne.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||No(this,l),h=this._ease(l/this._dur),Vc(this,n,s,o,a,h,l)?this.resetTo(n,s,o,a):(gs(this,0),this.parent||Il(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Gr(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,ki&&ki.vars.overwrite!==!0)._first||Gr(this),this.parent&&o!==this.timeline.totalDuration()&&Dr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=n?Ge(n):a,h=this._ptLookup,d=this._pt,u,f,g,_,m,y,w;if((!s||s==="all")&&xc(a,l))return s==="all"&&(this._pt=0),Gr(this);for(u=this._op=this._op||[],s!=="all"&&(re(s)&&(m={},Pe(s,function(A){return m[A]=1}),s=m),s=jc(a,s)),w=a.length;w--;)if(~l.indexOf(a[w])){f=h[w],s==="all"?(u[w]=s,_=f,g={}):(g=u[w]=u[w]||{},_=s);for(m in _)y=f&&f[m],y&&((!("kill"in y.d)||y.d.kill(m)===!0)&&us(this,y,"_pt"),delete f[m]),g!=="all"&&(g[m]=1)}return this._initted&&!this._pt&&d&&Gr(this),this},t.to=function(n,s){return new t(n,s,arguments[2])},t.from=function(n,s){return en(1,arguments)},t.delayedCall=function(n,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(n,s,o){return en(2,arguments)},t.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(n,s)},t.killTweensOf=function(n,s,o){return kt.killTweensOf(n,s,o)},t}(zr);Qe(Gt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pe("staggerTo,staggerFrom,staggerFromTo",function(r){Gt[r]=function(){var t=new Ce,e=to.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Fo=function(t,e,i){return t[e]=i},nh=function(t,e,i){return t[e](i)},Gc=function(t,e,i,n){return t[e](n.fp,i)},Zc=function(t,e,i){return t.setAttribute(e,i)},Bo=function(t,e){return zt(t[e])?nh:Oo(t[e])&&t.setAttribute?Zc:Fo},sh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Kc=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},oh=function(t,e){var i=e._pt,n="";if(!t&&e.b)n=e.b;else if(t===1&&e.e)n=e.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+n,i=i._next;n+=e.c}e.set(e.t,e.p,n,e)},Ho=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},Qc=function(t,e,i,n){for(var s=this._pt,o;s;)o=s._next,s.p===n&&s.modifier(t,e,i),s=o},Jc=function(t){for(var e=this._pt,i,n;e;)n=e._next,e.p===t&&!e.op||e.op===t?us(this,e,"_pt"):e.dep||(i=1),e=n;return!i},td=function(t,e,i,n){n.mSet(t,e,n.m.call(n.tween,i,n.mt),n)},ah=function(t){for(var e=t._pt,i,n,s,o;e;){for(i=e._next,n=s;n&&n.pr>e.pr;)n=n._next;(e._prev=n?n._prev:o)?e._prev._next=e:s=e,(e._next=n)?n._prev=e:o=e,e=i}t._pt=s},Oe=function(){function r(e,i,n,s,o,a,l,h,d){this.t=i,this.s=s,this.c=o,this.p=n,this.r=a||sh,this.d=l||this,this.set=h||Fo,this.pr=d||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=td,this.m=i,this.mt=s,this.tween=n},r}();Pe(Lo+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return zo[r]=1});He.TweenMax=He.TweenLite=Gt;He.TimelineLite=He.TimelineMax=Ce;kt=new Ce({sortChildren:!1,defaults:Pr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Be.stringFilter=Zl;var Lr=[],Nn={},ed=[],ca=0,Ts=function(t){return(Nn[t]||ed).map(function(e){return e()})},no=function(){var t=Date.now(),e=[];t-ca>2&&(Ts("matchMediaInit"),Lr.forEach(function(i){var n=i.queries,s=i.conditions,o,a,l,h;for(a in n)o=Ve.matchMedia(n[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,h=1);h&&(i.revert(),l&&e.push(i))}),Ts("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i)}),ca=t,Ts("matchMedia"))},lh=function(){function r(e,i){this.selector=i&&eo(i),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=r.prototype;return t.add=function(i,n,s){zt(i)&&(s=n,n=i,i=zt);var o=this,a=function(){var h=Xt,d=o.selector,u;return h&&h!==o&&h.data.push(o),s&&(o.selector=eo(s)),Xt=o,u=n.apply(o,arguments),zt(u)&&o._r.push(u),Xt=h,o.selector=d,o.isReverted=!1,u};return o.last=a,i===zt?a(o):i?o[i]=a:a},t.ignore=function(i){var n=Xt;Xt=null,i(this),Xt=n},t.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof Gt&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,n){var s=this;if(i){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,h){return h.g-l.g||-1}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return!(l instanceof zr)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),n){var a=Lr.indexOf(this);~a&&Lr.splice(a,1)}},t.revert=function(i){this.kill(i||{})},r}(),id=function(){function r(e){this.contexts=[],this.scope=e}var t=r.prototype;return t.add=function(i,n,s){gi(i)||(i={matches:i});var o=new lh(0,s||this.scope),a=o.conditions={},l,h,d;this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(h in i)h==="all"?d=1:(l=Ve.matchMedia(i[h]),l&&(Lr.indexOf(o)<0&&Lr.push(o),(a[h]=l.matches)&&(d=1),l.addListener?l.addListener(no):l.addEventListener("change",no)));return d&&n(o),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r}(),Qn={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(n){return Ic(n)})},timeline:function(t){return new Ce(t)},getTweensOf:function(t,e){return kt.getTweensOf(t,e)},getProperty:function(t,e,i,n){re(t)&&(t=Ge(t)[0]);var s=Qi(t||{}).get,o=i?$l:Ll;return i==="native"&&(i=""),t&&(e?o((Ie[e]&&Ie[e].get||s)(t,e,i,n)):function(a,l,h){return o((Ie[a]&&Ie[a].get||s)(t,a,l,h))})},quickSetter:function(t,e,i){if(t=Ge(t),t.length>1){var n=t.map(function(d){return Ue.quickSetter(d,e,i)}),s=n.length;return function(d){for(var u=s;u--;)n[u](d)}}t=t[0]||{};var o=Ie[e],a=Qi(t),l=a.harness&&(a.harness.aliases||{})[e]||e,h=o?function(d){var u=new o;yr._pt=0,u.init(t,i?d+i:d,yr,0,[t]),u.render(1,u),yr._pt&&Ho(1,yr)}:a.set(t,l);return o?h:function(d){return h(t,l,i?d+i:d,a,1)}},quickTo:function(t,e,i){var n,s=Ue.to(t,nr((n={},n[e]="+=0.1",n.paused=!0,n),i||{})),o=function(l,h,d){return s.resetTo(e,l,h,d)};return o.tween=s,o},isTweening:function(t){return kt.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=tr(t.ease,Pr.ease)),sa(Pr,t||{})},config:function(t){return sa(Be,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,n=t.plugins,s=t.defaults,o=t.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!Ie[a]&&!He[a]&&Wn(e+" effect requires "+a+" plugin.")}),ws[e]=function(a,l,h){return i(Ge(a),Qe(l||{},s),h)},o&&(Ce.prototype[e]=function(a,l,h){return this.add(ws[e](a,gi(l)?l:(h=l)&&{},this),h)})},registerEase:function(t,e){ft[t]=tr(e)},parseEase:function(t,e){return arguments.length?tr(t,e):ft},getById:function(t){return kt.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Ce(t),n,s;for(i.smoothChildTiming=Me(t.smoothChildTiming),kt.remove(i),i._dp=0,i._time=i._tTime=kt._time,n=kt._first;n;)s=n._next,(e||!(!n._dur&&n instanceof Gt&&n.vars.onComplete===n._targets[0]))&&hi(i,n,n._start-n._delay),n=s;return hi(kt,i,0),i},context:function(t,e){return t?new lh(t,e):Xt},matchMedia:function(t){return new id(t)},matchMediaRefresh:function(){return Lr.forEach(function(t){var e=t.conditions,i,n;for(n in e)e[n]&&(e[n]=!1,i=1);i&&t.revert()})||no()},addEventListener:function(t,e){var i=Nn[t]||(Nn[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=Nn[t],n=i&&i.indexOf(e);n>=0&&i.splice(n,1)},utils:{wrap:zc,wrapYoyo:Lc,distribute:Xl,random:Yl,snap:ql,normalize:Rc,getUnit:de,clamp:Mc,splitColor:Wl,toArray:Ge,selector:eo,mapRange:jl,pipe:Oc,unitize:Dc,interpolate:$c,shuffle:Ul},install:Pl,effects:ws,ticker:Ne,updateRoot:Ce.updateRoot,plugins:Ie,globalTimeline:kt,core:{PropTween:Oe,globals:Ol,Tween:Gt,Timeline:Ce,Animation:zr,getCache:Qi,_removeLinkedListItem:us,reverting:function(){return ke},context:function(t){return t&&Xt&&(Xt.data.push(t),t._ctx=Xt),Xt},suppressOverwrites:function(t){return Po=t}}};Pe("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Qn[r]=Gt[r]});Ne.add(Ce.updateRoot);yr=Qn.to({},{duration:0});var rd=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},nd=function(t,e){var i=t._targets,n,s,o;for(n in e)for(s=i.length;s--;)o=t._ptLookup[s][n],o&&(o=o.d)&&(o._pt&&(o=rd(o,n)),o&&o.modifier&&o.modifier(e[n],t,i[s],n))},As=function(t,e){return{name:t,rawVars:1,init:function(n,s,o){o._onInit=function(a){var l,h;if(re(s)&&(l={},Pe(s,function(d){return l[d]=1}),s=l),e){l={};for(h in s)l[h]=e(s[h]);s=l}nd(a,s)}}}},Ue=Qn.registerPlugin({name:"attr",init:function(t,e,i,n,s){var o,a,l;this.tween=i;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],n,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var i=e._pt;i;)ke?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},As("roundProps",io),As("modifiers"),As("snap",ql))||Qn;Gt.version=Ce.version=Ue.version="3.11.3";Ml=1;El()&&Rr();ft.Power0;ft.Power1;ft.Power2;ft.Power3;ft.Power4;ft.Linear;ft.Quad;ft.Cubic;ft.Quart;ft.Quint;ft.Strong;ft.Elastic;ft.Back;ft.SteppedEase;ft.Bounce;ft.Sine;ft.Expo;ft.Circ;/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var da,Mi,Tr,Uo,Zi,ua,Xo,sd=function(){return typeof window<"u"},Ei={},ji=180/Math.PI,Ar=Math.PI/180,dr=Math.atan2,fa=1e8,qo=/([A-Z])/g,od=/(left|right|width|margin|padding|x)/i,ad=/[\s,\(]\S/,wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},so=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ld=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},hd=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},cd=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},hh=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},ch=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},dd=function(t,e,i){return t.style[e]=i},ud=function(t,e,i){return t.style.setProperty(e,i)},fd=function(t,e,i){return t._gsap[e]=i},gd=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},pd=function(t,e,i,n,s){var o=t._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},md=function(t,e,i,n,s){var o=t._gsap;o[e]=i,o.renderTransform(s,o)},Mt="transform",ni=Mt+"Origin",_d=function(t,e){var i=this,n=this.target,s=n.style;if(t in Ei){if(this.tfm=this.tfm||{},t!=="transform"&&(t=wi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=yi(n,o)}):this.tfm[t]=n._gsap.x?n._gsap[t]:yi(n,t)),this.props.indexOf(Mt)>=0)return;n._gsap.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(ni,e,"")),t=Mt}(s||e)&&this.props.push(t,e,s[t])},dh=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},vd=function(){var t=this.props,e=this.target,i=e.style,n=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].replace(qo,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Xo(),s&&!s.isStart&&!i[Mt]&&(dh(i),n.uncache=1)}},uh=function(t,e){var i={target:t,props:[],revert:vd,save:_d};return e&&e.split(",").forEach(function(n){return i.save(n)}),i},fh,oo=function(t,e){var i=Mi.createElementNS?Mi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Mi.createElement(t);return i.style?i:Mi.createElement(t)},ui=function r(t,e,i){var n=getComputedStyle(t);return n[e]||n.getPropertyValue(e.replace(qo,"-$1").toLowerCase())||n.getPropertyValue(e)||!i&&r(t,$r(e)||e,1)||""},ga="O,Moz,ms,Ms,Webkit".split(","),$r=function(t,e,i){var n=e||Zi,s=n.style,o=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(ga[o]+t in s););return o<0?null:(o===3?"ms":o>=0?ga[o]:"")+t},ao=function(){sd()&&window.document&&(da=window,Mi=da.document,Tr=Mi.documentElement,Zi=oo("div")||{style:{}},oo("div"),Mt=$r(Mt),ni=Mt+"Origin",Zi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fh=!!$r("perspective"),Xo=Ue.core.reverting,Uo=1)},Cs=function r(t){var e=oo("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,s=this.style.cssText,o;if(Tr.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),Tr.removeChild(e),this.style.cssText=s,o},pa=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},gh=function(t){var e;try{e=t.getBBox()}catch{e=Cs.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Cs||(e=Cs.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+pa(t,["x","cx","x1"])||0,y:+pa(t,["y","cy","y1"])||0,width:0,height:0}:e},ph=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&gh(t))},mn=function(t,e){if(e){var i=t.style;e in Ei&&e!==ni&&(e=Mt),i.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(e.replace(qo,"-$1").toLowerCase())):i.removeAttribute(e)}},Pi=function(t,e,i,n,s,o){var a=new Oe(t._pt,e,i,0,1,o?ch:hh);return t._pt=a,a.b=n,a.e=s,t._props.push(i),a},ma={deg:1,rad:1,turn:1},yd={grid:1,flex:1},Fi=function r(t,e,i,n){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=Zi.style,l=od.test(e),h=t.tagName.toLowerCase()==="svg",d=(h?"client":"offset")+(l?"Width":"Height"),u=100,f=n==="px",g=n==="%",_,m,y,w;return n===o||!s||ma[n]||ma[o]?s:(o!=="px"&&!f&&(s=r(t,e,i,"px")),w=t.getCTM&&ph(t),(g||o==="%")&&(Ei[e]||~e.indexOf("adius"))?(_=w?t.getBBox()[l?"width":"height"]:t[d],Nt(g?s/_*u:s/100*_)):(a[l?"width":"height"]=u+(f?o:n),m=~e.indexOf("adius")||n==="em"&&t.appendChild&&!h?t:t.parentNode,w&&(m=(t.ownerSVGElement||{}).parentNode),(!m||m===Mi||!m.appendChild)&&(m=Mi.body),y=m._gsap,y&&g&&y.width&&l&&y.time===Ne.time&&!y.uncache?Nt(s/y.width*u):((g||o==="%")&&!yd[ui(m,"display")]&&(a.position=ui(t,"position")),m===t&&(a.position="static"),m.appendChild(Zi),_=Zi[d],m.removeChild(Zi),a.position="absolute",l&&g&&(y=Qi(m),y.time=Ne.time,y.width=m[d]),Nt(f?_*s/u:_&&s?u/_*s:0))))},yi=function(t,e,i,n){var s;return Uo||ao(),e in wi&&e!=="transform"&&(e=wi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ei[e]&&e!=="transform"?(s=vn(t,n),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ts(ui(t,ni))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=Jn[e]&&Jn[e](t,e,i)||ui(t,e)||Rl(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Fi(t,e,s,i)+i:s},bd=function(t,e,i,n){if(!i||i==="none"){var s=$r(e,t,1),o=s&&ui(t,s,1);o&&o!==i?(e=s,i=o):e==="borderColor"&&(i=ui(t,"borderTopColor"))}var a=new Oe(this._pt,t.style,e,0,1,oh),l=0,h=0,d,u,f,g,_,m,y,w,A,S,E,k;if(a.b=i,a.e=n,i+="",n+="",n==="auto"&&(t.style[e]=n,n=ui(t,e)||n,t.style[e]=i),d=[i,n],Zl(d),i=d[0],n=d[1],f=i.match(vr)||[],k=n.match(vr)||[],k.length){for(;u=vr.exec(n);)y=u[0],A=n.substring(l,u.index),_?_=(_+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(_=1),y!==(m=f[h++]||"")&&(g=parseFloat(m)||0,E=m.substr((g+"").length),y.charAt(1)==="="&&(y=Er(g,y)+E),w=parseFloat(y),S=y.substr((w+"").length),l=vr.lastIndex-S.length,S||(S=S||Be.units[e]||E,l===n.length&&(n+=S,a.e+=S)),E!==S&&(g=Fi(t,e,m,S)||0),a._pt={_next:a._pt,p:A||h===1?A:",",s:g,c:w-g,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<n.length?n.substring(l,n.length):""}else a.r=e==="display"&&n==="none"?ch:hh;return Cl.test(n)&&(a.e=0),this._pt=a,a},_a={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},wd=function(t){var e=t.split(" "),i=e[0],n=e[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(t=i,i=n,n=t),e[0]=_a[i]||i,e[1]=_a[n]||n,e.join(" ")},xd=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,n=i.style,s=e.u,o=i._gsap,a,l,h;if(s==="all"||s===!0)n.cssText="",l=1;else for(s=s.split(","),h=s.length;--h>-1;)a=s[h],Ei[a]&&(l=1,a=a==="transformOrigin"?ni:Mt),mn(i,a);l&&(mn(i,Mt),o&&(o.svg&&i.removeAttribute("transform"),vn(i,1),o.uncache=1,dh(n)))}},Jn={clearProps:function(t,e,i,n,s){if(s.data!=="isFromStart"){var o=t._pt=new Oe(t._pt,e,i,0,0,xd);return o.u=n,o.pr=-10,o.tween=s,t._props.push(i),1}}},_n=[1,0,0,1,0,0],mh={},_h=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},va=function(t){var e=ui(t,Mt);return _h(e)?_n:e.substr(7).match(Al).map(Nt)},Yo=function(t,e){var i=t._gsap||Qi(t),n=t.style,s=va(t),o,a,l,h;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?_n:s):(s===_n&&!t.offsetParent&&t!==Tr&&!i.svg&&(l=n.display,n.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(h=1,a=t.nextElementSibling,Tr.appendChild(t)),s=va(t),l?n.display=l:mn(t,"display"),h&&(a?o.insertBefore(t,a):o?o.appendChild(t):Tr.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},lo=function(t,e,i,n,s,o){var a=t._gsap,l=s||Yo(t,!0),h=a.xOrigin||0,d=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,g=l[0],_=l[1],m=l[2],y=l[3],w=l[4],A=l[5],S=e.split(" "),E=parseFloat(S[0])||0,k=parseFloat(S[1])||0,P,D,L,M;i?l!==_n&&(D=g*y-_*m)&&(L=E*(y/D)+k*(-m/D)+(m*A-y*w)/D,M=E*(-_/D)+k*(g/D)-(g*A-_*w)/D,E=L,k=M):(P=gh(t),E=P.x+(~S[0].indexOf("%")?E/100*P.width:E),k=P.y+(~(S[1]||S[0]).indexOf("%")?k/100*P.height:k)),n||n!==!1&&a.smooth?(w=E-h,A=k-d,a.xOffset=u+(w*g+A*m)-w,a.yOffset=f+(w*_+A*y)-A):a.xOffset=a.yOffset=0,a.xOrigin=E,a.yOrigin=k,a.smooth=!!n,a.origin=e,a.originIsAbsolute=!!i,t.style[ni]="0px 0px",o&&(Pi(o,a,"xOrigin",h,E),Pi(o,a,"yOrigin",d,k),Pi(o,a,"xOffset",u,a.xOffset),Pi(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",E+" "+k)},vn=function(t,e){var i=t._gsap||new th(t);if("x"in i&&!e&&!i.uncache)return i;var n=t.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(t),h=ui(t,ni)||"0",d,u,f,g,_,m,y,w,A,S,E,k,P,D,L,M,N,F,H,Q,B,W,q,nt,U,lt,C,Et,Lt,De,gt,Qt;return d=u=f=m=y=w=A=S=E=0,g=_=1,i.svg=!!(t.getCTM&&ph(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(n[Mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Mt]!=="none"?l[Mt]:"")),n.scale=n.rotate=n.translate="none"),D=Yo(t,i.svg),i.svg&&(i.uncache?(U=t.getBBox(),h=i.xOrigin-U.x+"px "+(i.yOrigin-U.y)+"px",nt=""):nt=!e&&t.getAttribute("data-svg-origin"),lo(t,nt||h,!!nt||i.originIsAbsolute,i.smooth!==!1,D)),k=i.xOrigin||0,P=i.yOrigin||0,D!==_n&&(F=D[0],H=D[1],Q=D[2],B=D[3],d=W=D[4],u=q=D[5],D.length===6?(g=Math.sqrt(F*F+H*H),_=Math.sqrt(B*B+Q*Q),m=F||H?dr(H,F)*ji:0,A=Q||B?dr(Q,B)*ji+m:0,A&&(_*=Math.abs(Math.cos(A*Ar))),i.svg&&(d-=k-(k*F+P*Q),u-=P-(k*H+P*B))):(Qt=D[6],De=D[7],C=D[8],Et=D[9],Lt=D[10],gt=D[11],d=D[12],u=D[13],f=D[14],L=dr(Qt,Lt),y=L*ji,L&&(M=Math.cos(-L),N=Math.sin(-L),nt=W*M+C*N,U=q*M+Et*N,lt=Qt*M+Lt*N,C=W*-N+C*M,Et=q*-N+Et*M,Lt=Qt*-N+Lt*M,gt=De*-N+gt*M,W=nt,q=U,Qt=lt),L=dr(-Q,Lt),w=L*ji,L&&(M=Math.cos(-L),N=Math.sin(-L),nt=F*M-C*N,U=H*M-Et*N,lt=Q*M-Lt*N,gt=B*N+gt*M,F=nt,H=U,Q=lt),L=dr(H,F),m=L*ji,L&&(M=Math.cos(L),N=Math.sin(L),nt=F*M+H*N,U=W*M+q*N,H=H*M-F*N,q=q*M-W*N,F=nt,W=U),y&&Math.abs(y)+Math.abs(m)>359.9&&(y=m=0,w=180-w),g=Nt(Math.sqrt(F*F+H*H+Q*Q)),_=Nt(Math.sqrt(q*q+Qt*Qt)),L=dr(W,q),A=Math.abs(L)>2e-4?L*ji:0,E=gt?1/(gt<0?-gt:gt):0),i.svg&&(nt=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!_h(ui(t,Mt)),nt&&t.setAttribute("transform",nt))),Math.abs(A)>90&&Math.abs(A)<270&&(s?(g*=-1,A+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,A+=A<=0?180:-180)),e=e||i.uncache,i.x=d-((i.xPercent=d&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-d)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+o,i.y=u-((i.yPercent=u&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+o,i.z=f+o,i.scaleX=Nt(g),i.scaleY=Nt(_),i.rotation=Nt(m)+a,i.rotationX=Nt(y)+a,i.rotationY=Nt(w)+a,i.skewX=A+a,i.skewY=S+a,i.transformPerspective=E+o,(i.zOrigin=parseFloat(h.split(" ")[2])||0)&&(n[ni]=ts(h)),i.xOffset=i.yOffset=0,i.force3D=Be.force3D,i.renderTransform=i.svg?Ed:fh?vh:Sd,i.uncache=0,i},ts=function(t){return(t=t.split(" "))[0]+" "+t[1]},ks=function(t,e,i){var n=de(e);return Nt(parseFloat(e)+parseFloat(Fi(t,"x",i+"px",n)))+n},Sd=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,vh(t,e)},qi="0deg",qr="0px",Yi=") ",vh=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,h=i.rotation,d=i.rotationY,u=i.rotationX,f=i.skewX,g=i.skewY,_=i.scaleX,m=i.scaleY,y=i.transformPerspective,w=i.force3D,A=i.target,S=i.zOrigin,E="",k=w==="auto"&&t&&t!==1||w===!0;if(S&&(u!==qi||d!==qi)){var P=parseFloat(d)*Ar,D=Math.sin(P),L=Math.cos(P),M;P=parseFloat(u)*Ar,M=Math.cos(P),o=ks(A,o,D*M*-S),a=ks(A,a,-Math.sin(P)*-S),l=ks(A,l,L*M*-S+S)}y!==qr&&(E+="perspective("+y+Yi),(n||s)&&(E+="translate("+n+"%, "+s+"%) "),(k||o!==qr||a!==qr||l!==qr)&&(E+=l!==qr||k?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Yi),h!==qi&&(E+="rotate("+h+Yi),d!==qi&&(E+="rotateY("+d+Yi),u!==qi&&(E+="rotateX("+u+Yi),(f!==qi||g!==qi)&&(E+="skew("+f+", "+g+Yi),(_!==1||m!==1)&&(E+="scale("+_+", "+m+Yi),A.style[Mt]=E||"translate(0, 0)"},Ed=function(t,e){var i=e||this,n=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,h=i.skewX,d=i.skewY,u=i.scaleX,f=i.scaleY,g=i.target,_=i.xOrigin,m=i.yOrigin,y=i.xOffset,w=i.yOffset,A=i.forceCSS,S=parseFloat(o),E=parseFloat(a),k,P,D,L,M;l=parseFloat(l),h=parseFloat(h),d=parseFloat(d),d&&(d=parseFloat(d),h+=d,l+=d),l||h?(l*=Ar,h*=Ar,k=Math.cos(l)*u,P=Math.sin(l)*u,D=Math.sin(l-h)*-f,L=Math.cos(l-h)*f,h&&(d*=Ar,M=Math.tan(h-d),M=Math.sqrt(1+M*M),D*=M,L*=M,d&&(M=Math.tan(d),M=Math.sqrt(1+M*M),k*=M,P*=M)),k=Nt(k),P=Nt(P),D=Nt(D),L=Nt(L)):(k=u,L=f,P=D=0),(S&&!~(o+"").indexOf("px")||E&&!~(a+"").indexOf("px"))&&(S=Fi(g,"x",o,"px"),E=Fi(g,"y",a,"px")),(_||m||y||w)&&(S=Nt(S+_-(_*k+m*D)+y),E=Nt(E+m-(_*P+m*L)+w)),(n||s)&&(M=g.getBBox(),S=Nt(S+n/100*M.width),E=Nt(E+s/100*M.height)),M="matrix("+k+","+P+","+D+","+L+","+S+","+E+")",g.setAttribute("transform",M),A&&(g.style[Mt]=M)},Td=function(t,e,i,n,s){var o=360,a=re(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ji:1),h=l-n,d=n+h+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(h%=o,h!==h%(o/2)&&(h+=h<0?o:-o)),u==="cw"&&h<0?h=(h+o*fa)%o-~~(h/o)*o:u==="ccw"&&h>0&&(h=(h-o*fa)%o-~~(h/o)*o)),t._pt=f=new Oe(t._pt,e,i,n,h,ld),f.e=d,f.u="deg",t._props.push(i),f},ya=function(t,e){for(var i in e)t[i]=e[i];return t},Ad=function(t,e,i){var n=ya({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,h,d,u,f,g,_;n.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),o[Mt]=e,a=vn(i,1),mn(i,Mt),i.setAttribute("transform",h)):(h=getComputedStyle(i)[Mt],o[Mt]=e,a=vn(i,1),o[Mt]=h);for(l in Ei)h=n[l],d=a[l],h!==d&&s.indexOf(l)<0&&(g=de(h),_=de(d),u=g!==_?Fi(i,l,h,_):parseFloat(h),f=parseFloat(d),t._pt=new Oe(t._pt,a,l,u,f-u,so),t._pt.u=_||0,t._props.push(l));ya(a,n)};Pe("padding,margin,Width,Radius",function(r,t){var e="Top",i="Right",n="Bottom",s="Left",o=(t<3?[e,i,n,s]:[e+s,e+i,n+i,n+s]).map(function(a){return t<2?r+a:"border"+a+r});Jn[t>1?"border"+r:r]=function(a,l,h,d,u){var f,g;if(arguments.length<4)return f=o.map(function(_){return yi(a,_,h)}),g=f.join(" "),g.split(f[0]).length===5?f[0]:g;f=(d+"").split(" "),g={},o.forEach(function(_,m){return g[_]=f[m]=f[m]||f[(m-1)/2|0]}),a.init(l,g,u)}});var yh={name:"css",register:ao,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,n,s){var o=this._props,a=t.style,l=i.vars.startAt,h,d,u,f,g,_,m,y,w,A,S,E,k,P,D,L;Uo||ao(),this.styles=this.styles||uh(t),L=this.styles.props,this.tween=i;for(m in e)if(m!=="autoRound"&&(d=e[m],!(Ie[m]&&eh(m,e,i,n,t,s)))){if(g=typeof d,_=Jn[m],g==="function"&&(d=d.call(i,n,t,s),g=typeof d),g==="string"&&~d.indexOf("random(")&&(d=gn(d)),_)_(this,t,m,d,i)&&(D=1);else if(m.substr(0,2)==="--")h=(getComputedStyle(t).getPropertyValue(m)+"").trim(),d+="",$i.lastIndex=0,$i.test(h)||(y=de(h),w=de(d)),w?y!==w&&(h=Fi(t,m,h,w)+w):y&&(d+=y),this.add(a,"setProperty",h,d,n,s,0,0,m),o.push(m),L.push(m,0,a[m]);else if(g!=="undefined"){if(l&&m in l?(h=typeof l[m]=="function"?l[m].call(i,n,t,s):l[m],re(h)&&~h.indexOf("random(")&&(h=gn(h)),de(h+"")||(h+=Be.units[m]||de(yi(t,m))||""),(h+"").charAt(1)==="="&&(h=yi(t,m))):h=yi(t,m),f=parseFloat(h),A=g==="string"&&d.charAt(1)==="="&&d.substr(0,2),A&&(d=d.substr(2)),u=parseFloat(d),m in wi&&(m==="autoAlpha"&&(f===1&&yi(t,"visibility")==="hidden"&&u&&(f=0),L.push("visibility",0,a.visibility),Pi(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),m!=="scale"&&m!=="transform"&&(m=wi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),S=m in Ei,S){if(this.styles.save(m),E||(k=t._gsap,k.renderTransform&&!e.parseTransform||vn(t,e.parseTransform),P=e.smoothOrigin!==!1&&k.smooth,E=this._pt=new Oe(this._pt,a,Mt,0,1,k.renderTransform,k,0,-1),E.dep=1),m==="scale")this._pt=new Oe(this._pt,k,"scaleY",f,(A?Er(f,A+u):u)-f||0,so),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){L.push(ni,0,a[ni]),d=wd(d),k.svg?lo(t,d,0,P,0,this):(w=parseFloat(d.split(" ")[2])||0,w!==k.zOrigin&&Pi(this,k,"zOrigin",k.zOrigin,w),Pi(this,a,m,ts(h),ts(d)));continue}else if(m==="svgOrigin"){lo(t,d,1,P,0,this);continue}else if(m in mh){Td(this,k,m,f,A?Er(f,A+d):d);continue}else if(m==="smoothOrigin"){Pi(this,k,"smooth",k.smooth,d);continue}else if(m==="force3D"){k[m]=d;continue}else if(m==="transform"){Ad(this,d,t);continue}}else m in a||(m=$r(m)||m);if(S||(u||u===0)&&(f||f===0)&&!ad.test(d)&&m in a)y=(h+"").substr((f+"").length),u||(u=0),w=de(d)||(m in Be.units?Be.units[m]:y),y!==w&&(f=Fi(t,m,h,w)),this._pt=new Oe(this._pt,S?k:a,m,f,(A?Er(f,A+u):u)-f,!S&&(w==="px"||m==="zIndex")&&e.autoRound!==!1?cd:so),this._pt.u=w||0,y!==w&&w!=="%"&&(this._pt.b=h,this._pt.r=hd);else if(m in a)bd.call(this,t,m,h,A?A+d:d);else if(m in t)this.add(t,m,h||t[m],A?A+d:d,n,s);else{Ro(m,d);continue}S||(m in a?L.push(m,0,a[m]):L.push(m,1,h||t[m])),o.push(m)}}D&&ah(this)},render:function(t,e){if(e.tween._time||!Xo())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:yi,aliases:wi,getSetter:function(t,e,i){var n=wi[e];return n&&n.indexOf(",")<0&&(e=n),e in Ei&&e!==ni&&(t._gsap.x||yi(t,"x"))?i&&ua===i?e==="scale"?gd:fd:(ua=i||{})&&(e==="scale"?pd:md):t.style&&!Oo(t.style[e])?dd:~e.indexOf("-")?ud:Bo(t,e)},core:{_removeProperty:mn,_getMatrix:Yo}};Ue.utils.checkPrefix=$r;Ue.core.getStyleSaver=uh;(function(r,t,e,i){var n=Pe(r+","+t+","+e,function(s){Ei[s]=1});Pe(t,function(s){Be.units[s]="deg",mh[s]=1}),wi[n[13]]=r+","+t,Pe(i,function(s){var o=s.split(":");wi[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pe("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Be.units[r]="px"});Ue.registerPlugin(yh);var Wt=Ue.registerPlugin(yh)||Ue;Wt.core.Tween;function ba(r,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,i.key,i)}}function Cd(r,t,e){return t&&ba(r.prototype,t),e&&ba(r,e),r}/*!
 * Observer 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ue,ho,Fe,Oi,Di,Cr,bh,Wi,nn,wh,xi,ti,xh=function(){return ue||typeof window<"u"&&(ue=window.gsap)&&ue.registerPlugin&&ue},Sh=1,br=[],ut=[],fi=[],sn=Date.now,co=function(t,e){return e},kd=function(){var t=nn.core,e=t.bridge||{},i=t._scrollers,n=t._proxies;i.push.apply(i,ut),n.push.apply(n,fi),ut=i,fi=n,co=function(o,a){return e[o](a)}},Ii=function(t,e){return~fi.indexOf(t)&&fi[fi.indexOf(t)+1][e]},on=function(t){return!!~wh.indexOf(t)},Te=function(t,e,i,n,s){return t.addEventListener(e,i,{passive:!n,capture:!!s})},ve=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},Tn="scrollLeft",An="scrollTop",uo=function(){return xi&&xi.isPressed||ut.cache++},es=function(t,e){var i=function n(s){if(s||s===0){Sh&&(Fe.history.scrollRestoration="manual");var o=xi&&xi.isPressed;s=n.v=Math.round(s)||(xi&&xi.iOS?1:0),t(s),n.cacheID=ut.cache,o&&co("ss",s)}else(e||ut.cache!==n.cacheID||co("ref"))&&(n.cacheID=ut.cache,n.v=t());return n.v+n.offset};return i.offset=0,t&&i},we={s:Tn,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:es(function(r){return arguments.length?Fe.scrollTo(r,Zt.sc()):Fe.pageXOffset||Oi[Tn]||Di[Tn]||Cr[Tn]||0})},Zt={s:An,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:we,sc:es(function(r){return arguments.length?Fe.scrollTo(we.sc(),r):Fe.pageYOffset||Oi[An]||Di[An]||Cr[An]||0})},Ae=function(t){return ue.utils.toArray(t)[0]||(typeof t=="string"&&ue.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Bi=function(t,e){var i=e.s,n=e.sc;on(t)&&(t=Oi.scrollingElement||Di);var s=ut.indexOf(t),o=n===Zt.sc?1:2;!~s&&(s=ut.push(t)-1),ut[s+o]||t.addEventListener("scroll",uo);var a=ut[s+o],l=a||(ut[s+o]=es(Ii(t,i),!0)||(on(t)?n:es(function(h){return arguments.length?t[i]=h:t[i]})));return l.target=t,a||(l.smooth=ue.getProperty(t,"scrollBehavior")==="smooth"),l},fo=function(t,e,i){var n=t,s=t,o=sn(),a=o,l=e||50,h=Math.max(500,l*3),d=function(_,m){var y=sn();m||y-o>l?(s=n,n=_,a=o,o=y):i?n+=_:n=s+(_-s)/(y-a)*(o-a)},u=function(){s=n=i?0:n,a=o=0},f=function(_){var m=a,y=s,w=sn();return(_||_===0)&&_!==n&&d(_),o===a||w-a>h?0:(n+(i?y:-y))/((i?w:o)-m)*1e3};return{update:d,reset:u,getVelocity:f}},Yr=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},wa=function(t){var e=Math.max.apply(Math,t),i=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(i)?e:i},Eh=function(){nn=ue.core.globals().ScrollTrigger,nn&&nn.core&&kd()},Th=function(t){return ue=t||xh(),ue&&typeof document<"u"&&document.body&&(Fe=window,Oi=document,Di=Oi.documentElement,Cr=Oi.body,wh=[Fe,Oi,Di,Cr],ue.utils.clamp,Wi="onpointerenter"in Cr?"pointer":"mouse",bh=qt.isTouch=Fe.matchMedia&&Fe.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Fe||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ti=qt.eventTypes=("ontouchstart"in Di?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Di?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Sh=0},500),Eh(),ho=1),ho};we.op=Zt;ut.cache=0;var qt=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(i){ho||Th(ue)||console.warn("Please gsap.registerPlugin(Observer)"),nn||Eh();var n=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,h=i.debounce,d=i.preventDefault,u=i.onStop,f=i.onStopDelay,g=i.ignore,_=i.wheelSpeed,m=i.event,y=i.onDragStart,w=i.onDragEnd,A=i.onDrag,S=i.onPress,E=i.onRelease,k=i.onRight,P=i.onLeft,D=i.onUp,L=i.onDown,M=i.onChangeX,N=i.onChangeY,F=i.onChange,H=i.onToggleX,Q=i.onToggleY,B=i.onHover,W=i.onHoverEnd,q=i.onMove,nt=i.ignoreCheck,U=i.isNormalizer,lt=i.onGestureStart,C=i.onGestureEnd,Et=i.onWheel,Lt=i.onEnable,De=i.onDisable,gt=i.onClick,Qt=i.scrollSpeed,yt=i.capture,Jt=i.allowClicks,ne=i.lockAxis,Ti=i.onLockAxis;this.target=a=Ae(a)||Di,this.vars=i,g&&(g=ue.utils.toArray(g)),n=n||1e-9,s=s||0,_=_||1,Qt=Qt||1,o=o||"wheel,touch,pointer",h=h!==!1,l||(l=parseFloat(Fe.getComputedStyle(Cr).lineHeight)||22);var pe,Se,ct,te,me,Xe,Ft,R=this,qe=0,xt=0,oi=Bi(a,we),ai=Bi(a,Zt),b=oi(),c=ai(),p=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ti[0]==="pointerdown",v=on(a),x=a.ownerDocument||Oi,T=[0,0,0],O=[0,0,0],z=0,$=function(){return z=sn()},j=function(I,G){return(R.event=I)&&g&&~g.indexOf(I.target)||G&&p&&I.pointerType!=="touch"||nt&&nt(I,G)},X=function(){R._vx.reset(),R._vy.reset(),Se.pause(),u&&u(R)},Y=function(){var I=R.deltaX=wa(T),G=R.deltaY=wa(O),Z=Math.abs(I)>=n,tt=Math.abs(G)>=n;F&&(Z||tt)&&F(R,I,G,T,O),Z&&(k&&R.deltaX>0&&k(R),P&&R.deltaX<0&&P(R),M&&M(R),H&&R.deltaX<0!=qe<0&&H(R),qe=R.deltaX,T[0]=T[1]=T[2]=0),tt&&(L&&R.deltaY>0&&L(R),D&&R.deltaY<0&&D(R),N&&N(R),Q&&R.deltaY<0!=xt<0&&Q(R),xt=R.deltaY,O[0]=O[1]=O[2]=0),(te||ct)&&(q&&q(R),ct&&(A(R),ct=!1),te=!1),Xe&&!(Xe=!1)&&Ti&&Ti(R),me&&(Et(R),me=!1),pe=0},rt=function(I,G,Z){T[Z]+=I,O[Z]+=G,R._vx.update(I),R._vy.update(G),h?pe||(pe=requestAnimationFrame(Y)):Y()},et=function(I,G){ne&&!Ft&&(R.axis=Ft=Math.abs(I)>Math.abs(G)?"x":"y",Xe=!0),Ft!=="y"&&(T[2]+=I,R._vx.update(I,!0)),Ft!=="x"&&(O[2]+=G,R._vy.update(G,!0)),h?pe||(pe=requestAnimationFrame(Y)):Y()},K=function(I){if(!j(I,1)){I=Yr(I,d);var G=I.clientX,Z=I.clientY,tt=G-R.x,$t=Z-R.y,V=R.isDragging;R.x=G,R.y=Z,(V||Math.abs(R.startX-G)>=s||Math.abs(R.startY-Z)>=s)&&(A&&(ct=!0),V||(R.isDragging=!0),et(tt,$t),V||y&&y(R))}},pt=R.onPress=function(st){j(st,1)||(R.axis=Ft=null,Se.pause(),R.isPressed=!0,st=Yr(st),qe=xt=0,R.startX=R.x=st.clientX,R.startY=R.y=st.clientY,R._vx.reset(),R._vy.reset(),Te(U?a:x,ti[1],K,d,!0),R.deltaX=R.deltaY=0,S&&S(R))},it=function(I){if(!j(I,1)){ve(U?a:x,ti[1],K,!0);var G=R.isDragging&&(Math.abs(R.x-R.startX)>3||Math.abs(R.y-R.startY)>3),Z=Yr(I);G||(R._vx.reset(),R._vy.reset(),d&&Jt&&ue.delayedCall(.08,function(){if(sn()-z>300&&!I.defaultPrevented){if(I.target.click)I.target.click();else if(x.createEvent){var tt=x.createEvent("MouseEvents");tt.initMouseEvent("click",!0,!0,Fe,1,Z.screenX,Z.screenY,Z.clientX,Z.clientY,!1,!1,!1,!1,0,null),I.target.dispatchEvent(tt)}}})),R.isDragging=R.isGesturing=R.isPressed=!1,u&&!U&&Se.restart(!0),w&&G&&w(R),E&&E(R,G)}},At=function(I){return I.touches&&I.touches.length>1&&(R.isGesturing=!0)&&lt(I,R.isDragging)},Tt=function(){return(R.isGesturing=!1)||C(R)},Vt=function(I){if(!j(I)){var G=oi(),Z=ai();rt((G-b)*Qt,(Z-c)*Qt,1),b=G,c=Z,u&&Se.restart(!0)}},le=function(I){if(!j(I)){I=Yr(I,d),Et&&(me=!0);var G=(I.deltaMode===1?l:I.deltaMode===2?Fe.innerHeight:1)*_;rt(I.deltaX*G,I.deltaY*G,0),u&&!U&&Se.restart(!0)}},Ee=function(I){if(!j(I)){var G=I.clientX,Z=I.clientY,tt=G-R.x,$t=Z-R.y;R.x=G,R.y=Z,te=!0,(tt||$t)&&et(tt,$t)}},he=function(I){R.event=I,B(R)},mi=function(I){R.event=I,W(R)},Re=function(I){return j(I)||Yr(I,d)&&gt(R)};Se=R._dc=ue.delayedCall(f||.25,X).pause(),R.deltaX=R.deltaY=0,R._vx=fo(0,50,!0),R._vy=fo(0,50,!0),R.scrollX=oi,R.scrollY=ai,R.isDragging=R.isGesturing=R.isPressed=!1,R.enable=function(st){return R.isEnabled||(Te(v?x:a,"scroll",uo),o.indexOf("scroll")>=0&&Te(v?x:a,"scroll",Vt,d,yt),o.indexOf("wheel")>=0&&Te(a,"wheel",le,d,yt),(o.indexOf("touch")>=0&&bh||o.indexOf("pointer")>=0)&&(Te(a,ti[0],pt,d,yt),Te(x,ti[2],it),Te(x,ti[3],it),Jt&&Te(a,"click",$,!1,!0),gt&&Te(a,"click",Re),lt&&Te(x,"gesturestart",At),C&&Te(x,"gestureend",Tt),B&&Te(a,Wi+"enter",he),W&&Te(a,Wi+"leave",mi),q&&Te(a,Wi+"move",Ee)),R.isEnabled=!0,st&&st.type&&pt(st),Lt&&Lt(R)),R},R.disable=function(){R.isEnabled&&(br.filter(function(st){return st!==R&&on(st.target)}).length||ve(v?x:a,"scroll",uo),R.isPressed&&(R._vx.reset(),R._vy.reset(),ve(U?a:x,ti[1],K,!0)),ve(v?x:a,"scroll",Vt,yt),ve(a,"wheel",le,yt),ve(a,ti[0],pt,yt),ve(x,ti[2],it),ve(x,ti[3],it),ve(a,"click",$,!0),ve(a,"click",Re),ve(x,"gesturestart",At),ve(x,"gestureend",Tt),ve(a,Wi+"enter",he),ve(a,Wi+"leave",mi),ve(a,Wi+"move",Ee),R.isEnabled=R.isPressed=R.isDragging=!1,De&&De(R))},R.kill=function(){R.disable();var st=br.indexOf(R);st>=0&&br.splice(st,1),xi===R&&(xi=0)},br.push(R),U&&on(a)&&(xi=R),R.enable(m)},Cd(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();qt.version="3.11.3";qt.create=function(r){return new qt(r)};qt.register=Th;qt.getAll=function(){return br.slice()};qt.getById=function(r){return br.filter(function(t){return t.vars.id===r})[0]};xh()&&ue.registerPlugin(qt);/*!
 * ScrollTrigger 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var J,pr,dt,Ct,ci,Rt,Ah,is,rs,wr,Fn,Cn,ce,ps,go,ye,xa,Sa,mr,Ch,Ms,kh,Le,Mh,Ph,Oh,Ai,po,Vo,Ps,kn=1,be=Date.now,Os=be(),Ke=0,Mn=0,Ea=function(){return ps=1},Ta=function(){return ps=0},li=function(t){return t},Kr=function(t){return Math.round(t*1e5)/1e5||0},Dh=function(){return typeof window<"u"},Rh=function(){return J||Dh()&&(J=window.gsap)&&J.registerPlugin&&J},sr=function(t){return!!~Ah.indexOf(t)},zh=function(t){return Ii(t,"getBoundingClientRect")||(sr(t)?function(){return Yn.width=dt.innerWidth,Yn.height=dt.innerHeight,Yn}:function(){return bi(t)})},Md=function(t,e,i){var n=i.d,s=i.d2,o=i.a;return(o=Ii(t,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(e?dt["inner"+s]:t["client"+s])||0}},Pd=function(t,e){return!e||~fi.indexOf(t)?zh(t):function(){return Yn}},Ri=function(t,e){var i=e.s,n=e.d2,s=e.d,o=e.a;return(i="scroll"+n)&&(o=Ii(t,i))?o()-zh(t)()[s]:sr(t)?(ci[i]||Rt[i])-(dt["inner"+n]||ci["client"+n]||Rt["client"+n]):t[i]-t["offset"+n]},Pn=function(t,e){for(var i=0;i<mr.length;i+=3)(!e||~e.indexOf(mr[i+1]))&&t(mr[i],mr[i+1],mr[i+2])},ei=function(t){return typeof t=="string"},xe=function(t){return typeof t=="function"},Qr=function(t){return typeof t=="number"},Bn=function(t){return typeof t=="object"},Vr=function(t,e,i){return t&&t.progress(e?0:1)&&i&&t.pause()},Ds=function(t,e){if(t.enabled){var i=e(t);i&&i.totalTime&&(t.callbackAnimation=i)}},ur=Math.abs,Lh="left",$h="top",jo="right",Wo="bottom",er="width",ir="height",an="Right",ln="Left",hn="Top",cn="Bottom",It="padding",je="margin",Ir="Width",Go="Height",se="px",di=function(t){return dt.getComputedStyle(t)},Od=function(t){var e=di(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Aa=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},bi=function(t,e){var i=e&&di(t)[go]!=="matrix(1, 0, 0, 1, 0, 0)"&&J.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=t.getBoundingClientRect();return i&&i.progress(0).kill(),n},mo=function(t,e){var i=e.d2;return t["offset"+i]||t["client"+i]||0},Ih=function(t){var e=[],i=t.labels,n=t.duration(),s;for(s in i)e.push(i[s]/n);return e},Dd=function(t){return function(e){return J.utils.snap(Ih(t),e)}},Zo=function(t){var e=J.utils.snap(t),i=Array.isArray(t)&&t.slice(0).sort(function(n,s){return n-s});return i?function(n,s,o){o===void 0&&(o=.001);var a;if(!s)return e(n);if(s>0){for(n-=o,a=0;a<i.length;a++)if(i[a]>=n)return i[a];return i[a-1]}else for(a=i.length,n+=o;a--;)if(i[a]<=n)return i[a];return i[0]}:function(n,s,o){o===void 0&&(o=.001);var a=e(n);return!s||Math.abs(a-n)<o||a-n<0==s<0?a:e(s<0?n-t:n+t)}},Rd=function(t){return function(e,i){return Zo(Ih(t))(e,i.direction)}},On=function(t,e,i,n){return i.split(",").forEach(function(s){return t(e,s,n)})},oe=function(t,e,i,n,s){return t.addEventListener(e,i,{passive:!n,capture:!!s})},ee=function(t,e,i,n){return t.removeEventListener(e,i,!!n)},Dn=function(t,e,i){return i&&i.wheelHandler&&t(e,"wheel",i)},Ca={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Rn={toggleActions:"play",anticipatePin:0},ns={top:0,left:0,center:.5,bottom:1,right:1},Hn=function(t,e){if(ei(t)){var i=t.indexOf("="),n=~i?+(t.charAt(i-1)+1)*parseFloat(t.substr(i+1)):0;~i&&(t.indexOf("%")>i&&(n*=e/100),t=t.substr(0,i-1)),t=n+(t in ns?ns[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},zn=function(t,e,i,n,s,o,a,l){var h=s.startColor,d=s.endColor,u=s.fontSize,f=s.indent,g=s.fontWeight,_=Ct.createElement("div"),m=sr(i)||Ii(i,"pinType")==="fixed",y=t.indexOf("scroller")!==-1,w=m?Rt:i,A=t.indexOf("start")!==-1,S=A?h:d,E="border-color:"+S+";font-size:"+u+";color:"+S+";font-weight:"+g+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return E+="position:"+((y||l)&&m?"fixed;":"absolute;"),(y||l||!m)&&(E+=(n===Zt?jo:Wo)+":"+(o+parseFloat(f))+"px;"),a&&(E+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=A,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=E,_.innerText=e||e===0?t+"-"+e:t,w.children[0]?w.insertBefore(_,w.children[0]):w.appendChild(_),_._offset=_["offset"+n.op.d2],Un(_,0,n,A),_},Un=function(t,e,i,n){var s={display:"block"},o=i[n?"os2":"p2"],a=i[n?"p2":"os2"];t._isFlipped=n,s[i.a+"Percent"]=n?-100:0,s[i.a]=n?"1px":0,s["border"+o+Ir]=1,s["border"+a+Ir]=0,s[i.p]=e+"px",J.set(t,s)},at=[],_o={},yn,ka=function(){return be()-Ke>34&&(yn||(yn=requestAnimationFrame(lr)))},fr=function(){(!Le||!Le.isPressed||Le.startX>Rt.clientWidth)&&(ut.cache++,Le?yn||(yn=requestAnimationFrame(lr)):lr(),Ke||ar("scrollStart"),Ke=be())},Rs=function(){Oh=dt.innerWidth,Ph=dt.innerHeight},Jr=function(){ut.cache++,!ce&&!kh&&!Ct.fullscreenElement&&!Ct.webkitFullscreenElement&&(!Mh||Oh!==dt.innerWidth||Math.abs(dt.innerHeight-Ph)>dt.innerHeight*.25)&&is.restart(!0)},or={},zd=[],Nh=function r(){return ee(ot,"scrollEnd",r)||Ki(!0)},ar=function(t){return or[t]&&or[t].map(function(e){return e()})||zd},$e=[],Fh=function(t){for(var e=0;e<$e.length;e+=5)(!t||$e[e+4]&&$e[e+4].query===t)&&($e[e].style.cssText=$e[e+1],$e[e].getBBox&&$e[e].setAttribute("transform",$e[e+2]||""),$e[e+3].uncache=1)},Ko=function(t,e){var i;for(ye=0;ye<at.length;ye++)i=at[ye],i&&(!e||i._ctx===e)&&(t?i.kill(1):i.revert(!0,!0));e&&Fh(e),e||ar("revert")},Bh=function(t,e){ut.cache++,(e||!ii)&&ut.forEach(function(i){return xe(i)&&i.cacheID++&&(i.rec=0)}),ei(t)&&(dt.history.scrollRestoration=Vo=t)},ii,rr=0,Ma,Ld=function(){if(Ma!==rr){var t=Ma=rr;requestAnimationFrame(function(){return t===rr&&Ki(!0)})}},Ki=function(t,e){if(Ke&&!t){oe(ot,"scrollEnd",Nh);return}ii=ot.isRefreshing=!0,ut.forEach(function(n){return xe(n)&&n.cacheID++&&(n.rec=n())});var i=ar("refreshInit");Ch&&ot.sort(),e||Ko(),ut.forEach(function(n){xe(n)&&(n.smooth&&(n.target.style.scrollBehavior="auto"),n(0))}),at.slice(0).forEach(function(n){return n.refresh()}),at.forEach(function(n,s){if(n._subPinOffset&&n.pin){var o=n.vars.horizontal?"offsetWidth":"offsetHeight",a=n.pin[o];n.revert(!0,1),n.adjustPinSpacing(n.pin[o]-a),n.revert(!1,1)}}),at.forEach(function(n){return n.vars.end==="max"&&n.setPositions(n.start,Math.max(n.start+1,Ri(n.scroller,n._dir)))}),i.forEach(function(n){return n&&n.render&&n.render(-1)}),ut.forEach(function(n){xe(n)&&(n.smooth&&requestAnimationFrame(function(){return n.target.style.scrollBehavior="smooth"}),n.rec&&n(n.rec))}),Bh(Vo,1),is.pause(),rr++,lr(2),at.forEach(function(n){return xe(n.vars.onRefresh)&&n.vars.onRefresh(n)}),ii=ot.isRefreshing=!1,ar("refresh")},Pa=0,Xn=1,Gi,lr=function(t){if(!ii||t===2){ot.isUpdating=!0,Gi&&Gi.update(0);var e=at.length,i=be(),n=i-Os>=50,s=e&&at[0].scroll();if(Xn=Pa>s?-1:1,Pa=s,n&&(Ke&&!ps&&i-Ke>200&&(Ke=0,ar("scrollEnd")),Fn=Os,Os=i),Xn<0){for(ye=e;ye-- >0;)at[ye]&&at[ye].update(0,n);Xn=1}else for(ye=0;ye<e;ye++)at[ye]&&at[ye].update(0,n);ot.isUpdating=!1}yn=0},vo=[Lh,$h,Wo,jo,je+cn,je+an,je+hn,je+ln,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],qn=vo.concat([er,ir,"boxSizing","max"+Ir,"max"+Go,"position",je,It,It+hn,It+an,It+cn,It+ln]),$d=function(t,e,i){kr(i);var n=t._gsap;if(n.spacerIsNative)kr(n.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},zs=function(t,e,i,n){if(!t._gsap.swappedIn){for(var s=vo.length,o=e.style,a=t.style,l;s--;)l=vo[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[Wo]=a[jo]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[er]=mo(t,we)+se,o[ir]=mo(t,Zt)+se,o[It]=a[je]=a[$h]=a[Lh]="0",kr(n),a[er]=a["max"+Ir]=i[er],a[ir]=a["max"+Go]=i[ir],a[It]=i[It],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Id=/([A-Z])/g,kr=function(t){if(t){var e=t.t.style,i=t.length,n=0,s,o;for((t.t._gsap||J.core.getCache(t.t)).uncache=1;n<i;n+=2)o=t[n+1],s=t[n],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Id,"-$1").toLowerCase())}},Ln=function(t){for(var e=qn.length,i=t.style,n=[],s=0;s<e;s++)n.push(qn[s],i[qn[s]]);return n.t=t,n},Nd=function(t,e,i){for(var n=[],s=t.length,o=i?8:0,a;o<s;o+=2)a=t[o],n.push(a,a in e?e[a]:t[o+1]);return n.t=t.t,n},Yn={left:0,top:0},Oa=function(t,e,i,n,s,o,a,l,h,d,u,f,g){xe(t)&&(t=t(l)),ei(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?Hn("0"+t.substr(3),i):0));var _=g?g.time():0,m,y,w;if(g&&g.seek(0),Qr(t))a&&Un(a,i,n,!0);else{xe(e)&&(e=e(l));var A=(t||"0").split(" "),S,E,k,P;w=Ae(e)||Rt,S=bi(w)||{},(!S||!S.left&&!S.top)&&di(w).display==="none"&&(P=w.style.display,w.style.display="block",S=bi(w),P?w.style.display=P:w.style.removeProperty("display")),E=Hn(A[0],S[n.d]),k=Hn(A[1]||"0",i),t=S[n.p]-h[n.p]-d+E+s-k,a&&Un(a,k,n,i-k<20||a._isStart&&k>20),i-=i-k}if(o){var D=t+i,L=o._isStart;m="scroll"+n.d2,Un(o,D,n,L&&D>20||!L&&(u?Math.max(Rt[m],ci[m]):o.parentNode[m])<=D+1),u&&(h=bi(a),u&&(o.style[n.op.p]=h[n.op.p]-n.op.m-o._offset+se))}return g&&w&&(m=bi(w),g.seek(f),y=bi(w),g._caScrollDist=m[n.p]-y[n.p],t=t/g._caScrollDist*f),g&&g.seek(_),g?t:Math.round(t)},Fd=/(webkit|moz|length|cssText|inset)/i,Da=function(t,e,i,n){if(t.parentNode!==e){var s=t.style,o,a;if(e===Rt){t._stOrig=s.cssText,a=di(t);for(o in a)!+o&&!Fd.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=n}else s.cssText=t._stOrig;J.core.getCache(t).uncache=1,e.appendChild(t)}},Ra=function(t,e){var i=Bi(t,e),n="_scroll"+e.p2,s,o,a=function l(h,d,u,f,g){var _=l.tween,m=d.onComplete,y={};return u=u||i(),g=f&&g||0,f=f||h-u,_&&_.kill(),s=Math.round(u),d[n]=h,d.modifiers=y,y[n]=function(w){return w=Math.round(i()),w!==s&&w!==o&&Math.abs(w-s)>3&&Math.abs(w-o)>3?(_.kill(),l.tween=0):w=u+f*_.ratio+g*_.ratio*_.ratio,o=s,s=Math.round(w)},d.onComplete=function(){l.tween=0,m&&m.call(_)},_=l.tween=J.to(t,d),_};return t[n]=i,i.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},oe(t,"wheel",i.wheelHandler),a},ot=function(){function r(e,i){pr||r.register(J)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,i)}var t=r.prototype;return t.init=function(i,n){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Mn){this.update=this.refresh=this.kill=li;return}i=Aa(ei(i)||Qr(i)||i.nodeType?{trigger:i}:i,Rn);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,h=s.onToggle,d=s.onRefresh,u=s.scrub,f=s.trigger,g=s.pin,_=s.pinSpacing,m=s.invalidateOnRefresh,y=s.anticipatePin,w=s.onScrubComplete,A=s.onSnapComplete,S=s.once,E=s.snap,k=s.pinReparent,P=s.pinSpacer,D=s.containerAnimation,L=s.fastScrollEnd,M=s.preventOverlaps,N=i.horizontal||i.containerAnimation&&i.horizontal!==!1?we:Zt,F=!u&&u!==0,H=Ae(i.scroller||dt),Q=J.core.getCache(H),B=sr(H),W=("pinType"in i?i.pinType:Ii(H,"pinType")||B&&"fixed")==="fixed",q=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],nt=F&&i.toggleActions.split(" "),U="markers"in i?i.markers:Rn.markers,lt=B?0:parseFloat(di(H)["border"+N.p2+Ir])||0,C=this,Et=i.onRefreshInit&&function(){return i.onRefreshInit(C)},Lt=Md(H,B,N),De=Pd(H,B),gt=0,Qt=0,yt=Bi(H,N),Jt,ne,Ti,pe,Se,ct,te,me,Xe,Ft,R,qe,xt,oi,ai,b,c,p,v,x,T,O,z,$,j,X,Y,rt,et,K,pt,it,At,Tt,Vt,le,Ee,he;if(po(C),C._dir=N,y*=45,C.scroller=H,C.scroll=D?D.time.bind(D):yt,pe=yt(),C.vars=i,n=n||i.animation,"refreshPriority"in i&&(Ch=1,i.refreshPriority===-9999&&(Gi=C)),Q.tweenScroll=Q.tweenScroll||{top:Ra(H,Zt),left:Ra(H,we)},C.tweenTo=Jt=Q.tweenScroll[N.p],C.scrubDuration=function(I){pt=Qr(I)&&I,pt?K?K.duration(I):K=J.to(n,{ease:"expo",totalProgress:"+=0.001",duration:pt,paused:!0,onComplete:function(){return w&&w(C)}}):(K&&K.progress(1).kill(),K=0)},n&&(n.vars.lazy=!1,n._initted||n.vars.immediateRender!==!1&&i.immediateRender!==!1&&n.duration()&&n.render(0,!0,!0),C.animation=n.pause(),n.scrollTrigger=C,C.scrubDuration(u),rt=0,l||(l=n.vars.id)),at.push(C),E&&((!Bn(E)||E.push)&&(E={snapTo:E}),"scrollBehavior"in Rt.style&&J.set(B?[Rt,ci]:H,{scrollBehavior:"auto"}),ut.forEach(function(I){return xe(I)&&I.target===(B?Ct.scrollingElement||ci:H)&&(I.smooth=!1)}),Ti=xe(E.snapTo)?E.snapTo:E.snapTo==="labels"?Dd(n):E.snapTo==="labelsDirectional"?Rd(n):E.directional!==!1?function(I,G){return Zo(E.snapTo)(I,be()-Qt<500?0:G.direction)}:J.utils.snap(E.snapTo),it=E.duration||{min:.1,max:2},it=Bn(it)?wr(it.min,it.max):wr(it,it),At=J.delayedCall(E.delay||pt/2||.1,function(){var I=yt(),G=be()-Qt<500,Z=Jt.tween;if((G||Math.abs(C.getVelocity())<10)&&!Z&&!ps&&gt!==I){var tt=(I-ct)/xt,$t=n&&!F?n.totalProgress():tt,V=G?0:($t-et)/(be()-Fn)*1e3||0,ht=J.utils.clamp(-tt,1-tt,ur(V/2)*V/.185),_t=tt+(E.inertia===!1?0:ht),_e=wr(0,1,Ti(_t,C)),bt=Math.round(ct+_e*xt),Bt=E,ze=Bt.onStart,Pt=Bt.onInterrupt,Ot=Bt.onComplete;if(I<=te&&I>=ct&&bt!==I){if(Z&&!Z._initted&&Z.data<=ur(bt-I))return;E.inertia===!1&&(ht=_e-tt),Jt(bt,{duration:it(ur(Math.max(ur(_t-$t),ur(_e-$t))*.185/V/.05||0)),ease:E.ease||"power3",data:ur(bt-I),onInterrupt:function(){return At.restart(!0)&&Pt&&Pt(C)},onComplete:function(){C.update(),gt=yt(),rt=et=n&&!F?n.totalProgress():C.progress,A&&A(C),Ot&&Ot(C)}},I,ht*xt,bt-I-ht*xt),ze&&ze(C,Jt.tween)}}else C.isActive&&gt!==I&&At.restart(!0)}).pause()),l&&(_o[l]=C),f=C.trigger=Ae(f||g),he=f&&f._gsap&&f._gsap.stRevert,he&&(he=he(C)),g=g===!0?f:Ae(g),ei(a)&&(a={targets:f,className:a}),g&&(_===!1||_===je||(_=!_&&g.parentNode&&g.parentNode.style&&di(g.parentNode).display==="flex"?!1:It),C.pin=g,ne=J.core.getCache(g),ne.spacer?oi=ne.pinState:(P&&(P=Ae(P),P&&!P.nodeType&&(P=P.current||P.nativeElement),ne.spacerIsNative=!!P,P&&(ne.spacerState=Ln(P))),ne.spacer=c=P||Ct.createElement("div"),c.classList.add("pin-spacer"),l&&c.classList.add("pin-spacer-"+l),ne.pinState=oi=Ln(g)),i.force3D!==!1&&J.set(g,{force3D:!0}),C.spacer=c=ne.spacer,Y=di(g),z=Y[_+N.os2],v=J.getProperty(g),x=J.quickSetter(g,N.a,se),zs(g,c,Y),b=Ln(g)),U){qe=Bn(U)?Aa(U,Ca):Ca,Ft=zn("scroller-start",l,H,N,qe,0),R=zn("scroller-end",l,H,N,qe,0,Ft),p=Ft["offset"+N.op.d2];var mi=Ae(Ii(H,"content")||H);me=this.markerStart=zn("start",l,mi,N,qe,p,0,D),Xe=this.markerEnd=zn("end",l,mi,N,qe,p,0,D),D&&(Ee=J.quickSetter([me,Xe],N.a,se)),!W&&!(fi.length&&Ii(H,"fixedMarkers")===!0)&&(Od(B?Rt:H),J.set([Ft,R],{force3D:!0}),j=J.quickSetter(Ft,N.a,se),X=J.quickSetter(R,N.a,se))}if(D){var Re=D.vars.onUpdate,st=D.vars.onUpdateParams;D.eventCallback("onUpdate",function(){C.update(0,0,1),Re&&Re.apply(st||[])})}C.previous=function(){return at[at.indexOf(C)-1]},C.next=function(){return at[at.indexOf(C)+1]},C.revert=function(I,G){if(!G)return C.kill(!0);var Z=I!==!1||!C.enabled,tt=ce;Z!==C.isReverted&&(Z&&(Vt=Math.max(yt(),C.scroll.rec||0),Tt=C.progress,le=n&&n.progress()),me&&[me,Xe,Ft,R].forEach(function($t){return $t.style.display=Z?"none":"block"}),Z&&(ce=1,C.update(Z)),g&&(Z?$d(g,c,oi):(!k||!C.isActive)&&zs(g,c,di(g),$)),Z||C.update(Z),ce=tt,C.isReverted=Z)},C.refresh=function(I,G){if(!((ce||!C.enabled)&&!G)){if(g&&I&&Ke){oe(r,"scrollEnd",Nh);return}!ii&&Et&&Et(C),ce=1,Qt=be(),Jt.tween&&(Jt.tween.kill(),Jt.tween=0),K&&K.pause(),m&&n&&n.revert({kill:!1}).invalidate(),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;for(var Z=Lt(),tt=De(),$t=D?D.duration():Ri(H,N),V=0,ht=0,_t=i.end,_e=i.endTrigger||f,bt=i.start||(i.start===0||!f?0:g?"0 0":"0 100%"),Bt=C.pinnedContainer=i.pinnedContainer&&Ae(i.pinnedContainer),ze=f&&Math.max(0,at.indexOf(C))||0,Pt=ze,Ot,Ht,cr,Xi,jt,Dt,_i,ys,ra,Ur;Pt--;)Dt=at[Pt],Dt.end||Dt.refresh(0,1)||(ce=1),_i=Dt.pin,_i&&(_i===f||_i===g)&&!Dt.isReverted&&(Ur||(Ur=[]),Ur.unshift(Dt),Dt.revert(!0,!0)),Dt!==at[Pt]&&(ze--,Pt--);for(xe(bt)&&(bt=bt(C)),ct=Oa(bt,f,Z,N,yt(),me,Ft,C,tt,lt,W,$t,D)||(g?-.001:0),xe(_t)&&(_t=_t(C)),ei(_t)&&!_t.indexOf("+=")&&(~_t.indexOf(" ")?_t=(ei(bt)?bt.split(" ")[0]:"")+_t:(V=Hn(_t.substr(2),Z),_t=ei(bt)?bt:ct+V,_e=f)),te=Math.max(ct,Oa(_t||(_e?"100% 0":$t),_e,Z,N,yt()+V,Xe,R,C,tt,lt,W,$t,D))||-.001,xt=te-ct||(ct-=.01)&&.001,V=0,Pt=ze;Pt--;)Dt=at[Pt],_i=Dt.pin,_i&&Dt.start-Dt._pinPush<=ct&&!D&&Dt.end>0&&(Ot=Dt.end-Dt.start,(_i===f&&Dt.start-Dt._pinPush<ct||_i===Bt)&&!Qr(bt)&&(V+=Ot*(1-Dt.progress)),_i===g&&(ht+=Ot));if(ct+=V,te+=V,C._pinPush=ht,me&&V&&(Ot={},Ot[N.a]="+="+V,Bt&&(Ot[N.p]="-="+yt()),J.set([me,Xe],Ot)),g)Ot=di(g),Xi=N===Zt,cr=yt(),T=parseFloat(v(N.a))+ht,!$t&&te>1&&((B?Rt:H).style["overflow-"+N.a]="scroll"),zs(g,c,Ot),b=Ln(g),Ht=bi(g,!0),ys=W&&Bi(H,Xi?we:Zt)(),_&&($=[_+N.os2,xt+ht+se],$.t=c,Pt=_===It?mo(g,N)+xt+ht:0,Pt&&$.push(N.d,Pt+se),kr($),Bt&&at.forEach(function(Xr){Xr.pin===Bt&&Xr.vars.pinSpacing!==!1&&(Xr._subPinOffset=!0)}),W&&yt(Vt)),W&&(jt={top:Ht.top+(Xi?cr-ct:ys)+se,left:Ht.left+(Xi?ys:cr-ct)+se,boxSizing:"border-box",position:"fixed"},jt[er]=jt["max"+Ir]=Math.ceil(Ht.width)+se,jt[ir]=jt["max"+Go]=Math.ceil(Ht.height)+se,jt[je]=jt[je+hn]=jt[je+an]=jt[je+cn]=jt[je+ln]="0",jt[It]=Ot[It],jt[It+hn]=Ot[It+hn],jt[It+an]=Ot[It+an],jt[It+cn]=Ot[It+cn],jt[It+ln]=Ot[It+ln],ai=Nd(oi,jt,k),ii&&yt(0)),n?(ra=n._initted,Ms(1),n.render(n.duration(),!0,!0),O=v(N.a)-T+xt+ht,xt!==O&&W&&ai.splice(ai.length-2,2),n.render(0,!0,!0),ra||n.invalidate(!0),n.parent||n.totalTime(n.totalTime()),Ms(0)):O=xt;else if(f&&yt()&&!D)for(Ht=f.parentNode;Ht&&Ht!==Rt;)Ht._pinOffset&&(ct-=Ht._pinOffset,te-=Ht._pinOffset),Ht=Ht.parentNode;Ur&&Ur.forEach(function(Xr){return Xr.revert(!1,!0)}),C.start=ct,C.end=te,pe=Se=ii?Vt:yt(),!D&&!ii&&(pe<Vt&&yt(Vt),C.scroll.rec=0),C.revert(!1,!0),At&&(gt=-1,C.isActive&&yt(ct+xt*Tt),At.restart(!0)),ce=0,n&&F&&(n._initted||le)&&n.progress()!==le&&n.progress(le,!0).render(n.time(),!0,!0),(Tt!==C.progress||D)&&(n&&!F&&n.totalProgress(Tt,!0),C.progress=(pe-ct)/xt===Tt?0:Tt),g&&_&&(c._pinOffset=Math.round(C.progress*O)),d&&!ii&&d(C)}},C.getVelocity=function(){return(yt()-Se)/(be()-Fn)*1e3||0},C.endAnimation=function(){Vr(C.callbackAnimation),n&&(K?K.progress(1):n.paused()?F||Vr(n,C.direction<0,1):Vr(n,n.reversed()))},C.labelToScroll=function(I){return n&&n.labels&&(ct||C.refresh()||ct)+n.labels[I]/n.duration()*xt||0},C.getTrailing=function(I){var G=at.indexOf(C),Z=C.direction>0?at.slice(0,G).reverse():at.slice(G+1);return(ei(I)?Z.filter(function(tt){return tt.vars.preventOverlaps===I}):Z).filter(function(tt){return C.direction>0?tt.end<=ct:tt.start>=te})},C.update=function(I,G,Z){if(!(D&&!Z&&!I)){var tt=ii?Vt:C.scroll(),$t=I?0:(tt-ct)/xt,V=$t<0?0:$t>1?1:$t||0,ht=C.progress,_t,_e,bt,Bt,ze,Pt,Ot,Ht;if(G&&(Se=pe,pe=D?yt():tt,E&&(et=rt,rt=n&&!F?n.totalProgress():V)),y&&!V&&g&&!ce&&!kn&&Ke&&ct<tt+(tt-Se)/(be()-Fn)*y&&(V=1e-4),V!==ht&&C.enabled){if(_t=C.isActive=!!V&&V<1,_e=!!ht&&ht<1,Pt=_t!==_e,ze=Pt||!!V!=!!ht,C.direction=V>ht?1:-1,C.progress=V,ze&&!ce&&(bt=V&&!ht?0:V===1?1:ht===1?2:3,F&&(Bt=!Pt&&nt[bt+1]!=="none"&&nt[bt+1]||nt[bt],Ht=n&&(Bt==="complete"||Bt==="reset"||Bt in n))),M&&(Pt||Ht)&&(Ht||u||!n)&&(xe(M)?M(C):C.getTrailing(M).forEach(function(Dt){return Dt.endAnimation()})),F||(K&&!ce&&!kn?((D||Gi&&Gi!==C)&&K.render(K._dp._time-K._start),K.resetTo?K.resetTo("totalProgress",V,n._tTime/n._tDur):(K.vars.totalProgress=V,K.invalidate().restart())):n&&n.totalProgress(V,!!ce)),g){if(I&&_&&(c.style[_+N.os2]=z),!W)x(Kr(T+O*V));else if(ze){if(Ot=!I&&V>ht&&te+1>tt&&tt+1>=Ri(H,N),k)if(!I&&(_t||Ot)){var cr=bi(g,!0),Xi=tt-ct;Da(g,Rt,cr.top+(N===Zt?Xi:0)+se,cr.left+(N===Zt?0:Xi)+se)}else Da(g,c);kr(_t||Ot?ai:b),O!==xt&&V<1&&_t||x(T+(V===1&&!Ot?O:0))}}E&&!Jt.tween&&!ce&&!kn&&At.restart(!0),a&&(Pt||S&&V&&(V<1||!Ps))&&rs(a.targets).forEach(function(Dt){return Dt.classList[_t||S?"add":"remove"](a.className)}),o&&!F&&!I&&o(C),ze&&!ce?(F&&(Ht&&(Bt==="complete"?n.pause().totalProgress(1):Bt==="reset"?n.restart(!0).pause():Bt==="restart"?n.restart(!0):n[Bt]()),o&&o(C)),(Pt||!Ps)&&(h&&Pt&&Ds(C,h),q[bt]&&Ds(C,q[bt]),S&&(V===1?C.kill(!1,1):q[bt]=0),Pt||(bt=V===1?1:3,q[bt]&&Ds(C,q[bt]))),L&&!_t&&Math.abs(C.getVelocity())>(Qr(L)?L:2500)&&(Vr(C.callbackAnimation),K?K.progress(1):Vr(n,Bt==="reverse"?1:!V,1))):F&&o&&!ce&&o(C)}if(X){var jt=D?tt/D.duration()*(D._caScrollDist||0):tt;j(jt+(Ft._isFlipped?1:0)),X(jt)}Ee&&Ee(-tt/D.duration()*(D._caScrollDist||0))}},C.enable=function(I,G){C.enabled||(C.enabled=!0,oe(H,"resize",Jr),oe(B?Ct:H,"scroll",fr),Et&&oe(r,"refreshInit",Et),I!==!1&&(C.progress=Tt=0,pe=Se=gt=yt()),G!==!1&&C.refresh())},C.getTween=function(I){return I&&Jt?Jt.tween:K},C.setPositions=function(I,G){g&&(T+=I-ct,O+=G-I-xt,_===It&&C.adjustPinSpacing(G-I-xt)),C.start=ct=I,C.end=te=G,xt=G-I,C.update()},C.adjustPinSpacing=function(I){if($){var G=$.indexOf(N.d)+1;$[G]=parseFloat($[G])+I+se,$[1]=parseFloat($[1])+I+se,kr($)}},C.disable=function(I,G){if(C.enabled&&(I!==!1&&C.revert(!0,!0),C.enabled=C.isActive=!1,G||K&&K.pause(),Vt=0,ne&&(ne.uncache=1),Et&&ee(r,"refreshInit",Et),At&&(At.pause(),Jt.tween&&Jt.tween.kill()&&(Jt.tween=0)),!B)){for(var Z=at.length;Z--;)if(at[Z].scroller===H&&at[Z]!==C)return;ee(H,"resize",Jr),ee(H,"scroll",fr)}},C.kill=function(I,G){C.disable(I,G),K&&!G&&K.kill(),l&&delete _o[l];var Z=at.indexOf(C);Z>=0&&at.splice(Z,1),Z===ye&&Xn>0&&ye--,Z=0,at.forEach(function(tt){return tt.scroller===C.scroller&&(Z=1)}),Z||ii||(C.scroll.rec=0),n&&(n.scrollTrigger=null,I&&n.revert({kill:!1}),G||n.kill()),me&&[me,Xe,Ft,R].forEach(function(tt){return tt.parentNode&&tt.parentNode.removeChild(tt)}),Gi===C&&(Gi=0),g&&(ne&&(ne.uncache=1),Z=0,at.forEach(function(tt){return tt.pin===g&&Z++}),Z||(ne.spacer=0)),i.onKill&&i.onKill(C)},C.enable(!1,!1),he&&he(C),!n||!n.add||xt?C.refresh():J.delayedCall(.01,function(){return ct||te||C.refresh()})&&(xt=.01)&&(ct=te=0),g&&Ld()},r.register=function(i){return pr||(J=i||Rh(),Dh()&&window.document&&r.enable(),pr=Mn),pr},r.defaults=function(i){if(i)for(var n in i)Rn[n]=i[n];return Rn},r.disable=function(i,n){Mn=0,at.forEach(function(o){return o[n?"kill":"disable"](i)}),ee(dt,"wheel",fr),ee(Ct,"scroll",fr),clearInterval(Cn),ee(Ct,"touchcancel",li),ee(Rt,"touchstart",li),On(ee,Ct,"pointerdown,touchstart,mousedown",Ea),On(ee,Ct,"pointerup,touchend,mouseup",Ta),is.kill(),Pn(ee);for(var s=0;s<ut.length;s+=3)Dn(ee,ut[s],ut[s+1]),Dn(ee,ut[s],ut[s+2])},r.enable=function(){if(dt=window,Ct=document,ci=Ct.documentElement,Rt=Ct.body,J&&(rs=J.utils.toArray,wr=J.utils.clamp,po=J.core.context||li,Ms=J.core.suppressOverwrites||li,Vo=dt.history.scrollRestoration||"auto",J.core.globals("ScrollTrigger",r),Rt)){Mn=1,qt.register(J),r.isTouch=qt.isTouch,Ai=qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),oe(dt,"wheel",fr),Ah=[dt,Ct,ci,Rt],J.matchMedia?(r.matchMedia=function(l){var h=J.matchMedia(),d;for(d in l)h.add(d,l[d]);return h},J.addEventListener("matchMediaInit",function(){return Ko()}),J.addEventListener("matchMediaRevert",function(){return Fh()}),J.addEventListener("matchMedia",function(){Ki(0,1),ar("matchMedia")}),J.matchMedia("(orientation: portrait)",function(){return Rs(),Rs})):console.warn("Requires GSAP 3.11.0 or later"),Rs(),oe(Ct,"scroll",fr);var i=Rt.style,n=i.borderTopStyle,s=J.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=bi(Rt),Zt.m=Math.round(o.top+Zt.sc())||0,we.m=Math.round(o.left+we.sc())||0,n?i.borderTopStyle=n:i.removeProperty("border-top-style"),Cn=setInterval(ka,250),J.delayedCall(.5,function(){return kn=0}),oe(Ct,"touchcancel",li),oe(Rt,"touchstart",li),On(oe,Ct,"pointerdown,touchstart,mousedown",Ea),On(oe,Ct,"pointerup,touchend,mouseup",Ta),go=J.utils.checkPrefix("transform"),qn.push(go),pr=be(),is=J.delayedCall(.2,Ki).pause(),mr=[Ct,"visibilitychange",function(){var l=dt.innerWidth,h=dt.innerHeight;Ct.hidden?(xa=l,Sa=h):(xa!==l||Sa!==h)&&Jr()},Ct,"DOMContentLoaded",Ki,dt,"load",Ki,dt,"resize",Jr],Pn(oe),at.forEach(function(l){return l.enable(0,1)}),a=0;a<ut.length;a+=3)Dn(ee,ut[a],ut[a+1]),Dn(ee,ut[a],ut[a+2])}},r.config=function(i){"limitCallbacks"in i&&(Ps=!!i.limitCallbacks);var n=i.syncInterval;n&&clearInterval(Cn)||(Cn=n)&&setInterval(ka,n),"ignoreMobileResize"in i&&(Mh=r.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Pn(ee)||Pn(oe,i.autoRefreshEvents||"none"),kh=(i.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(i,n){var s=Ae(i),o=ut.indexOf(s),a=sr(s);~o&&ut.splice(o,a?6:2),n&&(a?fi.unshift(dt,n,Rt,n,ci,n):fi.unshift(s,n))},r.clearMatchMedia=function(i){at.forEach(function(n){return n._ctx&&n._ctx.query===i&&n._ctx.kill(!0,!0)})},r.isInViewport=function(i,n,s){var o=(ei(i)?Ae(i):i).getBoundingClientRect(),a=o[s?er:ir]*n||0;return s?o.right-a>0&&o.left+a<dt.innerWidth:o.bottom-a>0&&o.top+a<dt.innerHeight},r.positionInViewport=function(i,n,s){ei(i)&&(i=Ae(i));var o=i.getBoundingClientRect(),a=o[s?er:ir],l=n==null?a/2:n in ns?ns[n]*a:~n.indexOf("%")?parseFloat(n)*a/100:parseFloat(n)||0;return s?(o.left+l)/dt.innerWidth:(o.top+l)/dt.innerHeight},r.killAll=function(i){if(at.forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var n=or.killAll||[];or={},n.forEach(function(s){return s()})}},r}();ot.version="3.11.3";ot.saveStyles=function(r){return r?rs(r).forEach(function(t){if(t&&t.style){var e=$e.indexOf(t);e>=0&&$e.splice(e,5),$e.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),J.core.getCache(t),po())}}):$e};ot.revert=function(r,t){return Ko(!r,t)};ot.create=function(r,t){return new ot(r,t)};ot.refresh=function(r){return r?Jr():(pr||ot.register())&&Ki(!0)};ot.update=lr;ot.clearScrollMemory=Bh;ot.maxScroll=function(r,t){return Ri(r,t?we:Zt)};ot.getScrollFunc=function(r,t){return Bi(Ae(r),t?we:Zt)};ot.getById=function(r){return _o[r]};ot.getAll=function(){return at.filter(function(r){return r.vars.id!=="ScrollSmoother"})};ot.isScrolling=function(){return!!Ke};ot.snapDirectional=Zo;ot.addEventListener=function(r,t){var e=or[r]||(or[r]=[]);~e.indexOf(t)||e.push(t)};ot.removeEventListener=function(r,t){var e=or[r],i=e&&e.indexOf(t);i>=0&&e.splice(i,1)};ot.batch=function(r,t){var e=[],i={},n=t.interval||.016,s=t.batchMax||1e9,o=function(h,d){var u=[],f=[],g=J.delayedCall(n,function(){d(u,f),u=[],f=[]}).pause();return function(_){u.length||g.restart(!0),u.push(_.trigger),f.push(_),s<=u.length&&g.progress(1)}},a;for(a in t)i[a]=a.substr(0,2)==="on"&&xe(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return xe(s)&&(s=s(),oe(ot,"refresh",function(){return s=t.batchMax()})),rs(r).forEach(function(l){var h={};for(a in i)h[a]=i[a];h.trigger=l,e.push(ot.create(h))}),e};var za=function(t,e,i,n){return e>n?t(n):e<0&&t(0),i>n?(n-e)/(i-e):i<0?e/(e-i):1},Ls=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(qt.isTouch?" pinch-zoom":""):"none",t===ci&&r(Rt,e)},La={auto:1,scroll:1},Bd=function(t){var e=t.event,i=t.target,n=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||J.core.getCache(s),a=be(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s.scrollHeight<=s.clientHeight;)s=s.parentNode;o._isScroll=s&&!sr(s)&&s!==i&&(La[(l=di(s)).overflowY]||La[l.overflowX]),o._isScrollT=a}(o._isScroll||n==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Hh=function(t,e,i,n){return qt.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:n=n&&Bd,onPress:n,onDrag:n,onScroll:n,onEnable:function(){return i&&oe(Ct,qt.eventTypes[0],Ia,!1,!0)},onDisable:function(){return ee(Ct,qt.eventTypes[0],Ia,!0)}})},Hd=/(input|label|select|textarea)/i,$a,Ia=function(t){var e=Hd.test(t.target.tagName);(e||$a)&&(t._gsapAllow=!0,$a=e)},Ud=function(t){Bn(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,i=e.normalizeScrollX,n=e.momentum,s=e.allowNestedScroll,o,a,l=Ae(t.target)||ci,h=J.core.globals().ScrollSmoother,d=h&&h.get(),u=Ai&&(t.content&&Ae(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=Bi(l,Zt),g=Bi(l,we),_=1,m=(qt.isTouch&&dt.visualViewport?dt.visualViewport.scale*dt.visualViewport.width:dt.outerWidth)/dt.innerWidth,y=0,w=xe(n)?function(){return n(o)}:function(){return n||2.8},A,S,E=Hh(l,t.type,!0,s),k=function(){return S=!1},P=li,D=li,L=function(){a=Ri(l,Zt),D=wr(Ai?1:0,a),i&&(P=wr(0,Ri(l,we))),A=rr},M=function(){u._gsap.y=Kr(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},N=function(){if(S){requestAnimationFrame(k);var nt=Kr(o.deltaY/2),U=D(f.v-nt);if(u&&U!==f.v+f.offset){f.offset=U-f.v;var lt=Kr((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+lt+", 0, 1)",u._gsap.y=lt+"px",f.cacheID=ut.cache,lr()}return!0}f.offset&&M(),S=!0},F,H,Q,B,W=function(){L(),F.isActive()&&F.vars.scrollY>a&&(f()>a?F.progress(1)&&f(a):F.resetTo("scrollY",a))};return u&&J.set(u,{y:"+=0"}),t.ignoreCheck=function(q){return Ai&&q.type==="touchmove"&&N()||_>1.05&&q.type!=="touchstart"||o.isGesturing||q.touches&&q.touches.length>1},t.onPress=function(){var q=_;_=Kr((dt.visualViewport&&dt.visualViewport.scale||1)/m),F.pause(),q!==_&&Ls(l,_>1.01?!0:i?!1:"x"),H=g(),Q=f(),L(),A=rr},t.onRelease=t.onGestureStart=function(q,nt){if(f.offset&&M(),!nt)B.restart(!0);else{ut.cache++;var U=w(),lt,C;i&&(lt=g(),C=lt+U*.05*-q.velocityX/.227,U*=za(g,lt,C,Ri(l,we)),F.vars.scrollX=P(C)),lt=f(),C=lt+U*.05*-q.velocityY/.227,U*=za(f,lt,C,Ri(l,Zt)),F.vars.scrollY=D(C),F.invalidate().duration(U).play(.01),(Ai&&F.vars.scrollY>=a||lt>=a-1)&&J.to({},{onUpdate:W,duration:U})}},t.onWheel=function(){F._ts&&F.pause(),be()-y>1e3&&(A=0,y=be())},t.onChange=function(q,nt,U,lt,C){if(rr!==A&&L(),nt&&i&&g(P(lt[2]===nt?H+(q.startX-q.x):g()+nt-lt[1])),U){f.offset&&M();var Et=C[2]===U,Lt=Et?Q+q.startY-q.y:f()+U-C[1],De=D(Lt);Et&&Lt!==De&&(Q+=De-Lt),f(De)}(U||nt)&&lr()},t.onEnable=function(){Ls(l,i?!1:"x"),ot.addEventListener("refresh",W),oe(dt,"resize",W),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=g.smooth=!1),E.enable()},t.onDisable=function(){Ls(l,!0),ee(dt,"resize",W),ot.removeEventListener("refresh",W),E.kill()},t.lockAxis=t.lockAxis!==!1,o=new qt(t),o.iOS=Ai,Ai&&!f()&&f(1),Ai&&J.ticker.add(li),B=o._dc,F=J.to(o,{ease:"power4",paused:!0,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:B.vars.onComplete}),o};ot.sort=function(r){return at.sort(r||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};ot.observe=function(r){return new qt(r)};ot.normalizeScroll=function(r){if(typeof r>"u")return Le;if(r===!0&&Le)return Le.enable();if(r===!1)return Le&&Le.kill();var t=r instanceof qt?r:Ud(r);return Le&&Le.target===t.target&&Le.kill(),sr(t.target)&&(Le=t),t};ot.core={_getVelocityProp:fo,_inputObserver:Hh,_scrollers:ut,_proxies:fi,bridge:{ss:function(){Ke||ar("scrollStart"),Ke=be()},ref:function(){return ce}}};Rh()&&J.registerPlugin(ot);var Xd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function qd(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Uh={exports:{}};(function(r,t){(function(e,i){r.exports=i()})(Xd,function(){function e(b){return(e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(c){return typeof c}:function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c})(b)}function i(b,c){if(!(b instanceof c))throw new TypeError("Cannot call a class as a function")}function n(b,c){for(var p=0;p<c.length;p++){var v=c[p];v.enumerable=v.enumerable||!1,v.configurable=!0,"value"in v&&(v.writable=!0),Object.defineProperty(b,v.key,v)}}function s(b,c,p){return c&&n(b.prototype,c),p&&n(b,p),b}var o=Date.now();function a(){var b={},c=!0,p=0,v=arguments.length;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(c=arguments[0],p++);for(var x=function(O){for(var z in O)Object.prototype.hasOwnProperty.call(O,z)&&(c&&Object.prototype.toString.call(O[z])==="[object Object]"?b[z]=a(!0,b[z],O[z]):b[z]=O[z])};p<v;p++){var T=arguments[p];x(T)}return b}function l(b,c){if((F(b)||b===window||b===document)&&(b=[b]),Q(b)||B(b)||(b=[b]),nt(b)!=0){if(Q(b)&&!B(b))for(var p=b.length,v=0;v<p&&c.call(b[v],b[v],v,b)!==!1;v++);else if(B(b)){for(var x in b)if(q(b,x)&&c.call(b[x],b[x],x,b)===!1)break}}}function h(b){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,v=b[o]=b[o]||[],x={all:v,evt:null,found:null};return c&&p&&nt(v)>0&&l(v,function(T,O){if(T.eventName==c&&T.fn.toString()==p.toString())return x.found=!0,x.evt=O,!1}),x}function d(b){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},p=c.onElement,v=c.withCallback,x=c.avoidDuplicate,T=x===void 0||x,O=c.once,z=O!==void 0&&O,$=c.useCapture,j=$!==void 0&&$,X=arguments.length>2?arguments[2]:void 0,Y=p||[];function rt(et){M(v)&&v.call(X,et,this),z&&rt.destroy()}return N(Y)&&(Y=document.querySelectorAll(Y)),rt.destroy=function(){l(Y,function(et){var K=h(et,b,rt);K.found&&K.all.splice(K.evt,1),et.removeEventListener&&et.removeEventListener(b,rt,j)})},l(Y,function(et){var K=h(et,b,rt);(et.addEventListener&&T&&!K.found||!T)&&(et.addEventListener(b,rt,j),K.all.push({eventName:b,fn:rt}))}),rt}function u(b,c){l(c.split(" "),function(p){return b.classList.add(p)})}function f(b,c){l(c.split(" "),function(p){return b.classList.remove(p)})}function g(b,c){return b.classList.contains(c)}function _(b,c){for(;b!==document.body;){if(!(b=b.parentElement))return!1;if(typeof b.matches=="function"?b.matches(c):b.msMatchesSelector(c))return b}}function m(b){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",p=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(!b||c==="")return!1;if(c==="none")return M(p)&&p(),!1;var v=k(),x=c.split(" ");l(x,function(T){u(b,"g"+T)}),d(v,{onElement:b,avoidDuplicate:!1,once:!0,withCallback:function(T,O){l(x,function(z){f(O,"g"+z)}),M(p)&&p()}})}function y(b){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";if(c==="")return b.style.webkitTransform="",b.style.MozTransform="",b.style.msTransform="",b.style.OTransform="",b.style.transform="",!1;b.style.webkitTransform=c,b.style.MozTransform=c,b.style.msTransform=c,b.style.OTransform=c,b.style.transform=c}function w(b){b.style.display="block"}function A(b){b.style.display="none"}function S(b){var c=document.createDocumentFragment(),p=document.createElement("div");for(p.innerHTML=b;p.firstChild;)c.appendChild(p.firstChild);return c}function E(){return{width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}}function k(){var b,c=document.createElement("fakeelement"),p={animation:"animationend",OAnimation:"oAnimationEnd",MozAnimation:"animationend",WebkitAnimation:"webkitAnimationEnd"};for(b in p)if(c.style[b]!==void 0)return p[b]}function P(b,c,p,v){if(b())c();else{var x;p||(p=100);var T=setInterval(function(){b()&&(clearInterval(T),x&&clearTimeout(x),c())},p);v&&(x=setTimeout(function(){clearInterval(T)},v))}}function D(b,c,p){if(W(b))console.error("Inject assets error");else if(M(c)&&(p=c,c=!1),N(c)&&c in window)M(p)&&p();else{var v;if(b.indexOf(".css")!==-1){if((v=document.querySelectorAll('link[href="'+b+'"]'))&&v.length>0)return void(M(p)&&p());var x=document.getElementsByTagName("head")[0],T=x.querySelectorAll('link[rel="stylesheet"]'),O=document.createElement("link");return O.rel="stylesheet",O.type="text/css",O.href=b,O.media="all",T?x.insertBefore(O,T[0]):x.appendChild(O),void(M(p)&&p())}if((v=document.querySelectorAll('script[src="'+b+'"]'))&&v.length>0){if(M(p)){if(N(c))return P(function(){return window[c]!==void 0},function(){p()}),!1;p()}}else{var z=document.createElement("script");z.type="text/javascript",z.src=b,z.onload=function(){if(M(p)){if(N(c))return P(function(){return window[c]!==void 0},function(){p()}),!1;p()}},document.body.appendChild(z)}}}function L(){return"navigator"in window&&window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)}function M(b){return typeof b=="function"}function N(b){return typeof b=="string"}function F(b){return!(!b||!b.nodeType||b.nodeType!=1)}function H(b){return Array.isArray(b)}function Q(b){return b&&b.length&&isFinite(b.length)}function B(b){return e(b)==="object"&&b!=null&&!M(b)&&!H(b)}function W(b){return b==null}function q(b,c){return b!==null&&hasOwnProperty.call(b,c)}function nt(b){if(B(b)){if(b.keys)return b.keys().length;var c=0;for(var p in b)q(b,p)&&c++;return c}return b.length}function U(b){return!isNaN(parseFloat(b))&&isFinite(b)}function lt(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,c=document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");if(!c.length)return!1;if(c.length==1)return c[0];typeof b=="string"&&(b=parseInt(b));var p=[];l(c,function(z){p.push(z.getAttribute("data-taborder"))});var v=Math.max.apply(Math,p.map(function(z){return parseInt(z)})),x=b<0?1:b+1;x>v&&(x="1");var T=p.filter(function(z){return z>=parseInt(x)}),O=T.sort()[0];return document.querySelector('.gbtn[data-taborder="'.concat(O,'"]'))}function C(b){if(b.events.hasOwnProperty("keyboard"))return!1;b.events.keyboard=d("keydown",{onElement:window,withCallback:function(c,p){var v=(c=c||window.event).keyCode;if(v==9){var x=document.querySelector(".gbtn.focused");if(!x){var T=!(!document.activeElement||!document.activeElement.nodeName)&&document.activeElement.nodeName.toLocaleLowerCase();if(T=="input"||T=="textarea"||T=="button")return}c.preventDefault();var O=document.querySelectorAll(".gbtn[data-taborder]");if(!O||O.length<=0)return;if(!x){var z=lt();return void(z&&(z.focus(),u(z,"focused")))}var $=lt(x.getAttribute("data-taborder"));f(x,"focused"),$&&($.focus(),u($,"focused"))}v==39&&b.nextSlide(),v==37&&b.prevSlide(),v==27&&b.close()}})}function Et(b){return Math.sqrt(b.x*b.x+b.y*b.y)}function Lt(b,c){var p=function(v,x){var T=Et(v)*Et(x);if(T===0)return 0;var O=function(z,$){return z.x*$.x+z.y*$.y}(v,x)/T;return O>1&&(O=1),Math.acos(O)}(b,c);return function(v,x){return v.x*x.y-x.x*v.y}(b,c)>0&&(p*=-1),180*p/Math.PI}var De=function(){function b(c){i(this,b),this.handlers=[],this.el=c}return s(b,[{key:"add",value:function(c){this.handlers.push(c)}},{key:"del",value:function(c){c||(this.handlers=[]);for(var p=this.handlers.length;p>=0;p--)this.handlers[p]===c&&this.handlers.splice(p,1)}},{key:"dispatch",value:function(){for(var c=0,p=this.handlers.length;c<p;c++){var v=this.handlers[c];typeof v=="function"&&v.apply(this.el,arguments)}}}]),b}();function gt(b,c){var p=new De(b);return p.add(c),p}var Qt=function(){function b(c,p){i(this,b),this.element=typeof c=="string"?document.querySelector(c):c,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var v=function(){};this.rotate=gt(this.element,p.rotate||v),this.touchStart=gt(this.element,p.touchStart||v),this.multipointStart=gt(this.element,p.multipointStart||v),this.multipointEnd=gt(this.element,p.multipointEnd||v),this.pinch=gt(this.element,p.pinch||v),this.swipe=gt(this.element,p.swipe||v),this.tap=gt(this.element,p.tap||v),this.doubleTap=gt(this.element,p.doubleTap||v),this.longTap=gt(this.element,p.longTap||v),this.singleTap=gt(this.element,p.singleTap||v),this.pressMove=gt(this.element,p.pressMove||v),this.twoFingerPressMove=gt(this.element,p.twoFingerPressMove||v),this.touchMove=gt(this.element,p.touchMove||v),this.touchEnd=gt(this.element,p.touchEnd||v),this.touchCancel=gt(this.element,p.touchCancel||v),this.translateContainer=this.element,this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}}return s(b,[{key:"start",value:function(c){if(c.touches)if(c.target&&c.target.nodeName&&["a","button","input"].indexOf(c.target.nodeName.toLowerCase())>=0)console.log("ignore drag for this touched element",c.target.nodeName.toLowerCase());else{this.now=Date.now(),this.x1=c.touches[0].pageX,this.y1=c.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(c,this.element),this.preTapPosition.x!==null&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var p=this.preV;if(c.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var v={x:c.touches[1].pageX-this.x1,y:c.touches[1].pageY-this.y1};p.x=v.x,p.y=v.y,this.pinchStartLen=Et(p),this.multipointStart.dispatch(c,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(c,this.element),this._preventTap=!0}.bind(this),750)}}},{key:"move",value:function(c){if(c.touches){var p=this.preV,v=c.touches.length,x=c.touches[0].pageX,T=c.touches[0].pageY;if(this.isDoubleTap=!1,v>1){var O=c.touches[1].pageX,z=c.touches[1].pageY,$={x:c.touches[1].pageX-x,y:c.touches[1].pageY-T};p.x!==null&&(this.pinchStartLen>0&&(c.zoom=Et($)/this.pinchStartLen,this.pinch.dispatch(c,this.element)),c.angle=Lt($,p),this.rotate.dispatch(c,this.element)),p.x=$.x,p.y=$.y,this.x2!==null&&this.sx2!==null?(c.deltaX=(x-this.x2+O-this.sx2)/2,c.deltaY=(T-this.y2+z-this.sy2)/2):(c.deltaX=0,c.deltaY=0),this.twoFingerPressMove.dispatch(c,this.element),this.sx2=O,this.sy2=z}else{if(this.x2!==null){c.deltaX=x-this.x2,c.deltaY=T-this.y2;var j=Math.abs(this.x1-this.x2),X=Math.abs(this.y1-this.y2);(j>10||X>10)&&(this._preventTap=!0)}else c.deltaX=0,c.deltaY=0;this.pressMove.dispatch(c,this.element)}this.touchMove.dispatch(c,this.element),this._cancelLongTap(),this.x2=x,this.y2=T,v>1&&c.preventDefault()}}},{key:"end",value:function(c){if(c.changedTouches){this._cancelLongTap();var p=this;c.touches.length<2&&(this.multipointEnd.dispatch(c,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(c.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout(function(){p.swipe.dispatch(c,p.element)},0)):(this.tapTimeout=setTimeout(function(){p._preventTap||p.tap.dispatch(c,p.element),p.isDoubleTap&&(p.doubleTap.dispatch(c,p.element),p.isDoubleTap=!1)},0),p.isDoubleTap||(p.singleTapTimeout=setTimeout(function(){p.singleTap.dispatch(c,p.element)},250))),this.touchEnd.dispatch(c,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}}},{key:"cancelAll",value:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)}},{key:"cancel",value:function(c){this.cancelAll(),this.touchCancel.dispatch(c,this.element)}},{key:"_cancelLongTap",value:function(){clearTimeout(this.longTapTimeout)}},{key:"_cancelSingleTap",value:function(){clearTimeout(this.singleTapTimeout)}},{key:"_swipeDirection",value:function(c,p,v,x){return Math.abs(c-p)>=Math.abs(v-x)?c-p>0?"Left":"Right":v-x>0?"Up":"Down"}},{key:"on",value:function(c,p){this[c]&&this[c].add(p)}},{key:"off",value:function(c,p){this[c]&&this[c].del(p)}},{key:"destroy",value:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}}]),b}();function yt(b){var c=function(){var O,z=document.createElement("fakeelement"),$={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(O in $)if(z.style[O]!==void 0)return $[O]}(),p=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,v=g(b,"gslide-media")?b:b.querySelector(".gslide-media"),x=_(v,".ginner-container"),T=b.querySelector(".gslide-description");p>769&&(v=x),u(v,"greset"),y(v,"translate3d(0, 0, 0)"),d(c,{onElement:v,once:!0,withCallback:function(O,z){f(v,"greset")}}),v.style.opacity="",T&&(T.style.opacity="")}function Jt(b){if(b.events.hasOwnProperty("touch"))return!1;var c,p,v,x=E(),T=x.width,O=x.height,z=!1,$=null,j=null,X=null,Y=!1,rt=1,et=1,K=!1,pt=!1,it=null,At=null,Tt=null,Vt=null,le=0,Ee=0,he=!1,mi=!1,Re={},st={},I=0,G=0,Z=document.getElementById("glightbox-slider"),tt=document.querySelector(".goverlay"),$t=new Qt(Z,{touchStart:function(V){if(z=!0,(g(V.targetTouches[0].target,"ginner-container")||_(V.targetTouches[0].target,".gslide-desc")||V.targetTouches[0].target.nodeName.toLowerCase()=="a")&&(z=!1),_(V.targetTouches[0].target,".gslide-inline")&&!g(V.targetTouches[0].target.parentNode,"gslide-inline")&&(z=!1),z){if(st=V.targetTouches[0],Re.pageX=V.targetTouches[0].pageX,Re.pageY=V.targetTouches[0].pageY,I=V.targetTouches[0].clientX,G=V.targetTouches[0].clientY,$=b.activeSlide,j=$.querySelector(".gslide-media"),v=$.querySelector(".gslide-inline"),X=null,g(j,"gslide-image")&&(X=j.querySelector("img")),(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>769&&(j=$.querySelector(".ginner-container")),f(tt,"greset"),V.pageX>20&&V.pageX<window.innerWidth-20)return;V.preventDefault()}},touchMove:function(V){if(z&&(st=V.targetTouches[0],!K&&!pt)){if(v&&v.offsetHeight>O){var ht=Re.pageX-st.pageX;if(Math.abs(ht)<=13)return!1}Y=!0;var _t,_e=V.targetTouches[0].clientX,bt=V.targetTouches[0].clientY,Bt=I-_e,ze=G-bt;if(Math.abs(Bt)>Math.abs(ze)?(he=!1,mi=!0):(mi=!1,he=!0),c=st.pageX-Re.pageX,le=100*c/T,p=st.pageY-Re.pageY,Ee=100*p/O,he&&X&&(_t=1-Math.abs(p)/O,tt.style.opacity=_t,b.settings.touchFollowAxis&&(le=0)),mi&&(_t=1-Math.abs(c)/T,j.style.opacity=_t,b.settings.touchFollowAxis&&(Ee=0)),!X)return y(j,"translate3d(".concat(le,"%, 0, 0)"));y(j,"translate3d(".concat(le,"%, ").concat(Ee,"%, 0)"))}},touchEnd:function(){if(z){if(Y=!1,pt||K)return Tt=it,void(Vt=At);var V=Math.abs(parseInt(Ee)),ht=Math.abs(parseInt(le));if(!(V>29&&X))return V<29&&ht<25?(u(tt,"greset"),tt.style.opacity=1,yt(j)):void 0;b.close()}},multipointEnd:function(){setTimeout(function(){K=!1},50)},multipointStart:function(){K=!0,rt=et||1},pinch:function(V){if(!X||Y)return!1;K=!0,X.scaleX=X.scaleY=rt*V.zoom;var ht=rt*V.zoom;if(pt=!0,ht<=1)return pt=!1,ht=1,Vt=null,Tt=null,it=null,At=null,void X.setAttribute("style","");ht>4.5&&(ht=4.5),X.style.transform="scale3d(".concat(ht,", ").concat(ht,", 1)"),et=ht},pressMove:function(V){if(pt&&!K){var ht=st.pageX-Re.pageX,_t=st.pageY-Re.pageY;Tt&&(ht+=Tt),Vt&&(_t+=Vt),it=ht,At=_t;var _e="translate3d(".concat(ht,"px, ").concat(_t,"px, 0)");et&&(_e+=" scale3d(".concat(et,", ").concat(et,", 1)")),y(X,_e)}},swipe:function(V){if(!pt)if(K)K=!1;else{if(V.direction=="Left"){if(b.index==b.elements.length-1)return yt(j);b.nextSlide()}if(V.direction=="Right"){if(b.index==0)return yt(j);b.prevSlide()}}}});b.events.touch=$t}var ne=function(){function b(c,p){var v=this,x=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null;if(i(this,b),this.img=c,this.slide=p,this.onclose=x,this.img.setZoomEvents)return!1;this.active=!1,this.zoomedIn=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.img.addEventListener("mousedown",function(T){return v.dragStart(T)},!1),this.img.addEventListener("mouseup",function(T){return v.dragEnd(T)},!1),this.img.addEventListener("mousemove",function(T){return v.drag(T)},!1),this.img.addEventListener("click",function(T){return v.slide.classList.contains("dragging-nav")?(v.zoomOut(),!1):v.zoomedIn?void(v.zoomedIn&&!v.dragging&&v.zoomOut()):v.zoomIn()},!1),this.img.setZoomEvents=!0}return s(b,[{key:"zoomIn",value:function(){var c=this.widowWidth();if(!(this.zoomedIn||c<=768)){var p=this.img;if(p.setAttribute("data-style",p.getAttribute("style")),p.style.maxWidth=p.naturalWidth+"px",p.style.maxHeight=p.naturalHeight+"px",p.naturalWidth>c){var v=c/2-p.naturalWidth/2;this.setTranslate(this.img.parentNode,v,0)}this.slide.classList.add("zoomed"),this.zoomedIn=!0}}},{key:"zoomOut",value:function(){this.img.parentNode.setAttribute("style",""),this.img.setAttribute("style",this.img.getAttribute("data-style")),this.slide.classList.remove("zoomed"),this.zoomedIn=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.onclose&&typeof this.onclose=="function"&&this.onclose()}},{key:"dragStart",value:function(c){c.preventDefault(),this.zoomedIn?(c.type==="touchstart"?(this.initialX=c.touches[0].clientX-this.xOffset,this.initialY=c.touches[0].clientY-this.yOffset):(this.initialX=c.clientX-this.xOffset,this.initialY=c.clientY-this.yOffset),c.target===this.img&&(this.active=!0,this.img.classList.add("dragging"))):this.active=!1}},{key:"dragEnd",value:function(c){var p=this;c.preventDefault(),this.initialX=this.currentX,this.initialY=this.currentY,this.active=!1,setTimeout(function(){p.dragging=!1,p.img.isDragging=!1,p.img.classList.remove("dragging")},100)}},{key:"drag",value:function(c){this.active&&(c.preventDefault(),c.type==="touchmove"?(this.currentX=c.touches[0].clientX-this.initialX,this.currentY=c.touches[0].clientY-this.initialY):(this.currentX=c.clientX-this.initialX,this.currentY=c.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.img.isDragging=!0,this.dragging=!0,this.setTranslate(this.img,this.currentX,this.currentY))}},{key:"onMove",value:function(c){if(this.zoomedIn){var p=c.clientX-this.img.naturalWidth/2,v=c.clientY-this.img.naturalHeight/2;this.setTranslate(this.img,p,v)}}},{key:"setTranslate",value:function(c,p,v){c.style.transform="translate3d("+p+"px, "+v+"px, 0)"}},{key:"widowWidth",value:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}}]),b}(),Ti=function(){function b(){var c=this,p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};i(this,b);var v=p.dragEl,x=p.toleranceX,T=x===void 0?40:x,O=p.toleranceY,z=O===void 0?65:O,$=p.slide,j=$===void 0?null:$,X=p.instance,Y=X===void 0?null:X;this.el=v,this.active=!1,this.dragging=!1,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.direction=null,this.lastDirection=null,this.toleranceX=T,this.toleranceY=z,this.toleranceReached=!1,this.dragContainer=this.el,this.slide=j,this.instance=Y,this.el.addEventListener("mousedown",function(rt){return c.dragStart(rt)},!1),this.el.addEventListener("mouseup",function(rt){return c.dragEnd(rt)},!1),this.el.addEventListener("mousemove",function(rt){return c.drag(rt)},!1)}return s(b,[{key:"dragStart",value:function(c){if(this.slide.classList.contains("zoomed"))this.active=!1;else{c.type==="touchstart"?(this.initialX=c.touches[0].clientX-this.xOffset,this.initialY=c.touches[0].clientY-this.yOffset):(this.initialX=c.clientX-this.xOffset,this.initialY=c.clientY-this.yOffset);var p=c.target.nodeName.toLowerCase();c.target.classList.contains("nodrag")||_(c.target,".nodrag")||["input","select","textarea","button","a"].indexOf(p)!==-1?this.active=!1:(c.preventDefault(),(c.target===this.el||p!=="img"&&_(c.target,".gslide-inline"))&&(this.active=!0,this.el.classList.add("dragging"),this.dragContainer=_(c.target,".ginner-container")))}}},{key:"dragEnd",value:function(c){var p=this;c&&c.preventDefault(),this.initialX=0,this.initialY=0,this.currentX=null,this.currentY=null,this.initialX=null,this.initialY=null,this.xOffset=0,this.yOffset=0,this.active=!1,this.doSlideChange&&(this.instance.preventOutsideClick=!0,this.doSlideChange=="right"&&this.instance.prevSlide(),this.doSlideChange=="left"&&this.instance.nextSlide()),this.doSlideClose&&this.instance.close(),this.toleranceReached||this.setTranslate(this.dragContainer,0,0,!0),setTimeout(function(){p.instance.preventOutsideClick=!1,p.toleranceReached=!1,p.lastDirection=null,p.dragging=!1,p.el.isDragging=!1,p.el.classList.remove("dragging"),p.slide.classList.remove("dragging-nav"),p.dragContainer.style.transform="",p.dragContainer.style.transition=""},100)}},{key:"drag",value:function(c){if(this.active){c.preventDefault(),this.slide.classList.add("dragging-nav"),c.type==="touchmove"?(this.currentX=c.touches[0].clientX-this.initialX,this.currentY=c.touches[0].clientY-this.initialY):(this.currentX=c.clientX-this.initialX,this.currentY=c.clientY-this.initialY),this.xOffset=this.currentX,this.yOffset=this.currentY,this.el.isDragging=!0,this.dragging=!0,this.doSlideChange=!1,this.doSlideClose=!1;var p=Math.abs(this.currentX),v=Math.abs(this.currentY);if(p>0&&p>=Math.abs(this.currentY)&&(!this.lastDirection||this.lastDirection=="x")){this.yOffset=0,this.lastDirection="x",this.setTranslate(this.dragContainer,this.currentX,0);var x=this.shouldChange();if(!this.instance.settings.dragAutoSnap&&x&&(this.doSlideChange=x),this.instance.settings.dragAutoSnap&&x)return this.instance.preventOutsideClick=!0,this.toleranceReached=!0,this.active=!1,this.instance.preventOutsideClick=!0,this.dragEnd(null),x=="right"&&this.instance.prevSlide(),void(x=="left"&&this.instance.nextSlide())}if(this.toleranceY>0&&v>0&&v>=p&&(!this.lastDirection||this.lastDirection=="y")){this.xOffset=0,this.lastDirection="y",this.setTranslate(this.dragContainer,0,this.currentY);var T=this.shouldClose();return!this.instance.settings.dragAutoSnap&&T&&(this.doSlideClose=!0),void(this.instance.settings.dragAutoSnap&&T&&this.instance.close())}}}},{key:"shouldChange",value:function(){var c=!1;if(Math.abs(this.currentX)>=this.toleranceX){var p=this.currentX>0?"right":"left";(p=="left"&&this.slide!==this.slide.parentNode.lastChild||p=="right"&&this.slide!==this.slide.parentNode.firstChild)&&(c=p)}return c}},{key:"shouldClose",value:function(){var c=!1;return Math.abs(this.currentY)>=this.toleranceY&&(c=!0),c}},{key:"setTranslate",value:function(c,p,v){var x=arguments.length>3&&arguments[3]!==void 0&&arguments[3];c.style.transition=x?"all .2s ease":"",c.style.transform="translate3d(".concat(p,"px, ").concat(v,"px, 0)")}}]),b}();function pe(b,c,p,v){var x=b.querySelector(".gslide-media"),T=new Image,O="gSlideTitle_"+p,z="gSlideDesc_"+p;T.addEventListener("load",function(){M(v)&&v()},!1),T.src=c.href,c.sizes!=""&&c.srcset!=""&&(T.sizes=c.sizes,T.srcset=c.srcset),T.alt="",W(c.alt)||c.alt===""||(T.alt=c.alt),c.title!==""&&T.setAttribute("aria-labelledby",O),c.description!==""&&T.setAttribute("aria-describedby",z),c.hasOwnProperty("_hasCustomWidth")&&c._hasCustomWidth&&(T.style.width=c.width),c.hasOwnProperty("_hasCustomHeight")&&c._hasCustomHeight&&(T.style.height=c.height),x.insertBefore(T,x.firstChild)}function Se(b,c,p,v){var x=this,T=b.querySelector(".ginner-container"),O="gvideo"+p,z=b.querySelector(".gslide-media"),$=this.getAllPlayers();u(T,"gvideo-container"),z.insertBefore(S('<div class="gvideo-wrapper"></div>'),z.firstChild);var j=b.querySelector(".gvideo-wrapper");D(this.settings.plyr.css,"Plyr");var X=c.href,Y=c?.videoProvider,rt=!1;z.style.maxWidth=c.width,D(this.settings.plyr.js,"Plyr",function(){if(!Y&&X.match(/vimeo\.com\/([0-9]*)/)&&(Y="vimeo"),!Y&&(X.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||X.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||X.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/))&&(Y="youtube"),Y==="local"||!Y){Y="local";var et='<video id="'+O+'" ';et+='style="background:#000; max-width: '.concat(c.width,';" '),et+='preload="metadata" ',et+='x-webkit-airplay="allow" ',et+="playsinline ",et+="controls ",et+='class="gvideo-local">',et+='<source src="'.concat(X,'">'),rt=S(et+="</video>")}var K=rt||S('<div id="'.concat(O,'" data-plyr-provider="').concat(Y,'" data-plyr-embed-id="').concat(X,'"></div>'));u(j,"".concat(Y,"-video gvideo")),j.appendChild(K),j.setAttribute("data-id",O),j.setAttribute("data-index",p);var pt=q(x.settings.plyr,"config")?x.settings.plyr.config:{},it=new Plyr("#"+O,pt);it.on("ready",function(At){$[O]=At.detail.plyr,M(v)&&v()}),P(function(){return b.querySelector("iframe")&&b.querySelector("iframe").dataset.ready=="true"},function(){x.resize(b)}),it.on("enterfullscreen",ct),it.on("exitfullscreen",ct)})}function ct(b){var c=_(b.target,".gslide-media");b.type==="enterfullscreen"&&u(c,"fullscreen"),b.type==="exitfullscreen"&&f(c,"fullscreen")}function te(b,c,p,v){var x,T=this,O=b.querySelector(".gslide-media"),z=!(!q(c,"href")||!c.href)&&c.href.split("#").pop().trim(),$=!(!q(c,"content")||!c.content)&&c.content;if($&&(N($)&&(x=S('<div class="ginlined-content">'.concat($,"</div>"))),F($))){$.style.display=="none"&&($.style.display="block");var j=document.createElement("div");j.className="ginlined-content",j.appendChild($),x=j}if(z){var X=document.getElementById(z);if(!X)return!1;var Y=X.cloneNode(!0);Y.style.height=c.height,Y.style.maxWidth=c.width,u(Y,"ginlined-content"),x=Y}if(!x)return console.error("Unable to append inline slide content",c),!1;O.style.height=c.height,O.style.width=c.width,O.appendChild(x),this.events["inlineclose"+z]=d("click",{onElement:O.querySelectorAll(".gtrigger-close"),withCallback:function(rt){rt.preventDefault(),T.close()}}),M(v)&&v()}function me(b,c,p,v){var x=b.querySelector(".gslide-media"),T=function(O){var z=O.url,$=O.allow,j=O.callback,X=O.appendTo,Y=document.createElement("iframe");return Y.className="vimeo-video gvideo",Y.src=z,Y.style.width="100%",Y.style.height="100%",$&&Y.setAttribute("allow",$),Y.onload=function(){Y.onload=null,u(Y,"node-ready"),M(j)&&j()},X&&X.appendChild(Y),Y}({url:c.href,callback:v});x.parentNode.style.maxWidth=c.width,x.parentNode.style.height=c.height,x.appendChild(T)}var Xe=function(){function b(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};i(this,b),this.defaults={href:"",sizes:"",srcset:"",title:"",type:"",videoProvider:"",description:"",alt:"",descPosition:"bottom",effect:"",width:"",height:"",content:!1,zoomable:!0,draggable:!0},B(c)&&(this.defaults=a(this.defaults,c))}return s(b,[{key:"sourceType",value:function(c){var p=c;return(c=c.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/)!==null?"image":c.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||c.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)||c.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)||c.match(/vimeo\.com\/([0-9]*)/)||c.match(/\.(mp4|ogg|webm|mov)/)!==null?"video":c.match(/\.(mp3|wav|wma|aac|ogg)/)!==null?"audio":c.indexOf("#")>-1&&p.split("#").pop().trim()!==""?"inline":c.indexOf("goajax=true")>-1?"ajax":"external"}},{key:"parseConfig",value:function(c,p){var v=this,x=a({descPosition:p.descPosition},this.defaults);if(B(c)&&!F(c)){q(c,"type")||(q(c,"content")&&c.content?c.type="inline":q(c,"href")&&(c.type=this.sourceType(c.href)));var T=a(x,c);return this.setSize(T,p),T}var O="",z=c.getAttribute("data-glightbox"),$=c.nodeName.toLowerCase();if($==="a"&&(O=c.href),$==="img"&&(O=c.src,x.alt=c.alt),x.href=O,l(x,function(K,pt){q(p,pt)&&pt!=="width"&&(x[pt]=p[pt]);var it=c.dataset[pt];W(it)||(x[pt]=v.sanitizeValue(it))}),x.content&&(x.type="inline"),!x.type&&O&&(x.type=this.sourceType(O)),W(z)){if(!x.title&&$=="a"){var j=c.title;W(j)||j===""||(x.title=j)}if(!x.title&&$=="img"){var X=c.alt;W(X)||X===""||(x.title=X)}}else{var Y=[];l(x,function(K,pt){Y.push(";\\s?"+pt)}),Y=Y.join("\\s?:|"),z.trim()!==""&&l(x,function(K,pt){var it=z,At=new RegExp("s?"+pt+"s?:s?(.*?)("+Y+"s?:|$)"),Tt=it.match(At);if(Tt&&Tt.length&&Tt[1]){var Vt=Tt[1].trim().replace(/;\s*$/,"");x[pt]=v.sanitizeValue(Vt)}})}if(x.description&&x.description.substring(0,1)==="."){var rt;try{rt=document.querySelector(x.description).innerHTML}catch(K){if(!(K instanceof DOMException))throw K}rt&&(x.description=rt)}if(!x.description){var et=c.querySelector(".glightbox-desc");et&&(x.description=et.innerHTML)}return this.setSize(x,p,c),this.slideConfig=x,x}},{key:"setSize",value:function(c,p){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,x=c.type=="video"?this.checkSize(p.videosWidth):this.checkSize(p.width),T=this.checkSize(p.height);return c.width=q(c,"width")&&c.width!==""?this.checkSize(c.width):x,c.height=q(c,"height")&&c.height!==""?this.checkSize(c.height):T,v&&c.type=="image"&&(c._hasCustomWidth=!!v.dataset.width,c._hasCustomHeight=!!v.dataset.height),c}},{key:"checkSize",value:function(c){return U(c)?"".concat(c,"px"):c}},{key:"sanitizeValue",value:function(c){return c!=="true"&&c!=="false"?c:c==="true"}}]),b}(),Ft=function(){function b(c,p,v){i(this,b),this.element=c,this.instance=p,this.index=v}return s(b,[{key:"setContent",value:function(){var c=this,p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,v=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(g(p,"loaded"))return!1;var x=this.instance.settings,T=this.slideConfig,O=L();M(x.beforeSlideLoad)&&x.beforeSlideLoad({index:this.index,slide:p,player:!1});var z=T.type,$=T.descPosition,j=p.querySelector(".gslide-media"),X=p.querySelector(".gslide-title"),Y=p.querySelector(".gslide-desc"),rt=p.querySelector(".gdesc-inner"),et=v,K="gSlideTitle_"+this.index,pt="gSlideDesc_"+this.index;if(M(x.afterSlideLoad)&&(et=function(){M(v)&&v(),x.afterSlideLoad({index:c.index,slide:p,player:c.instance.getSlidePlayerInstance(c.index)})}),T.title==""&&T.description==""?rt&&rt.parentNode.parentNode.removeChild(rt.parentNode):(X&&T.title!==""?(X.id=K,X.innerHTML=T.title):X.parentNode.removeChild(X),Y&&T.description!==""?(Y.id=pt,O&&x.moreLength>0?(T.smallDescription=this.slideShortDesc(T.description,x.moreLength,x.moreText),Y.innerHTML=T.smallDescription,this.descriptionEvents(Y,T)):Y.innerHTML=T.description):Y.parentNode.removeChild(Y),u(j.parentNode,"desc-".concat($)),u(rt.parentNode,"description-".concat($))),u(j,"gslide-".concat(z)),u(p,"loaded"),z!=="video"){if(z!=="external")return z==="inline"?(te.apply(this.instance,[p,T,this.index,et]),void(T.draggable&&new Ti({dragEl:p.querySelector(".gslide-inline"),toleranceX:x.dragToleranceX,toleranceY:x.dragToleranceY,slide:p,instance:this.instance}))):void(z!=="image"?M(et)&&et():pe(p,T,this.index,function(){var it=p.querySelector("img");T.draggable&&new Ti({dragEl:it,toleranceX:x.dragToleranceX,toleranceY:x.dragToleranceY,slide:p,instance:c.instance}),T.zoomable&&it.naturalWidth>it.offsetWidth&&(u(it,"zoomable"),new ne(it,p,function(){c.instance.resize()})),M(et)&&et()}));me.apply(this,[p,T,this.index,et])}else Se.apply(this.instance,[p,T,this.index,et])}},{key:"slideShortDesc",value:function(c){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:50,v=arguments.length>2&&arguments[2]!==void 0&&arguments[2],x=document.createElement("div");x.innerHTML=c;var T=x.innerText,O=v;if((c=T.trim()).length<=p)return c;var z=c.substr(0,p-1);return O?(x=null,z+'... <a href="#" class="desc-more">'+v+"</a>"):z}},{key:"descriptionEvents",value:function(c,p){var v=this,x=c.querySelector(".desc-more");if(!x)return!1;d("click",{onElement:x,withCallback:function(T,O){T.preventDefault();var z=document.body,$=_(O,".gslide-desc");if(!$)return!1;$.innerHTML=p.description,u(z,"gdesc-open");var j=d("click",{onElement:[z,_($,".gslide-description")],withCallback:function(X,Y){X.target.nodeName.toLowerCase()!=="a"&&(f(z,"gdesc-open"),u(z,"gdesc-closed"),$.innerHTML=p.smallDescription,v.descriptionEvents($,p),setTimeout(function(){f(z,"gdesc-closed")},400),j.destroy())}})}})}},{key:"create",value:function(){return S(this.instance.settings.slideHTML)}},{key:"getConfig",value:function(){F(this.element)||this.element.hasOwnProperty("draggable")||(this.element.draggable=this.instance.settings.draggable);var c=new Xe(this.instance.settings.slideExtraAttributes);return this.slideConfig=c.parseConfig(this.element,this.instance.settings),this.slideConfig}}]),b}(),R=L(),qe=L()!==null||document.createTouch!==void 0||"ontouchstart"in window||"onmsgesturechange"in window||navigator.msMaxTouchPoints,xt=document.getElementsByTagName("html")[0],oi={selector:".glightbox",elements:null,skin:"clean",theme:"clean",closeButton:!0,startAt:null,autoplayVideos:!0,autofocusVideos:!0,descPosition:"bottom",width:"900px",height:"506px",videosWidth:"960px",beforeSlideChange:null,afterSlideChange:null,beforeSlideLoad:null,afterSlideLoad:null,slideInserted:null,slideRemoved:null,slideExtraAttributes:null,onOpen:null,onClose:null,loop:!1,zoomable:!0,draggable:!0,dragAutoSnap:!1,dragToleranceX:40,dragToleranceY:65,preload:!0,oneSlidePerOpen:!1,touchNavigation:!0,touchFollowAxis:!0,keyboardNavigation:!0,closeOnOutsideClick:!0,plugins:!1,plyr:{css:"https://cdn.plyr.io/3.6.12/plyr.css",js:"https://cdn.plyr.io/3.6.12/plyr.js",config:{ratio:"16:9",fullscreen:{enabled:!0,iosNative:!0},youtube:{noCookie:!0,rel:0,showinfo:0,iv_load_policy:3},vimeo:{byline:!1,portrait:!1,title:!1,transparent:!1}}},openEffect:"zoom",closeEffect:"zoom",slideEffect:"slide",moreText:"See more",moreLength:60,cssEfects:{fade:{in:"fadeIn",out:"fadeOut"},zoom:{in:"zoomIn",out:"zoomOut"},slide:{in:"slideInRight",out:"slideOutLeft"},slideBack:{in:"slideInLeft",out:"slideOutRight"},none:{in:"none",out:"none"}},svg:{close:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',next:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',prev:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'},slideHTML:`<div class="gslide">
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
</div>`},ai=function(){function b(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};i(this,b),this.customOptions=c,this.settings=a(oi,c),this.effectsClasses=this.getAnimationClasses(),this.videoPlayers={},this.apiEvents=[],this.fullElementsList=!1}return s(b,[{key:"init",value:function(){var c=this,p=this.getSelector();p&&(this.baseEvents=d("click",{onElement:p,withCallback:function(v,x){v.preventDefault(),c.open(x)}})),this.elements=this.getElements()}},{key:"open",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(this.elements.length===0)return!1;this.activeSlide=null,this.prevActiveSlideIndex=null,this.prevActiveSlide=null;var v=U(p)?p:this.settings.startAt;if(F(c)){var x=c.getAttribute("data-gallery");x&&(this.fullElementsList=this.elements,this.elements=this.getGalleryElements(this.elements,x)),W(v)&&(v=this.getElementIndex(c))<0&&(v=0)}U(v)||(v=0),this.build(),m(this.overlay,this.settings.openEffect==="none"?"none":this.settings.cssEfects.fade.in);var T=document.body,O=window.innerWidth-document.documentElement.clientWidth;if(O>0){var z=document.createElement("style");z.type="text/css",z.className="gcss-styles",z.innerText=".gscrollbar-fixer {margin-right: ".concat(O,"px}"),document.head.appendChild(z),u(T,"gscrollbar-fixer")}u(T,"glightbox-open"),u(xt,"glightbox-open"),R&&(u(document.body,"glightbox-mobile"),this.settings.slideEffect="slide"),this.showSlide(v,!0),this.elements.length===1?(u(this.prevButton,"glightbox-button-hidden"),u(this.nextButton,"glightbox-button-hidden")):(f(this.prevButton,"glightbox-button-hidden"),f(this.nextButton,"glightbox-button-hidden")),this.lightboxOpen=!0,this.trigger("open"),M(this.settings.onOpen)&&this.settings.onOpen(),qe&&this.settings.touchNavigation&&Jt(this),this.settings.keyboardNavigation&&C(this)}},{key:"openAt",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;this.open(null,c)}},{key:"showSlide",value:function(){var c=this,p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,v=arguments.length>1&&arguments[1]!==void 0&&arguments[1];w(this.loader),this.index=parseInt(p);var x=this.slidesContainer.querySelector(".current");x&&f(x,"current"),this.slideAnimateOut();var T=this.slidesContainer.querySelectorAll(".gslide")[p];if(g(T,"loaded"))this.slideAnimateIn(T,v),A(this.loader);else{w(this.loader);var O=this.elements[p],z={index:this.index,slide:T,slideNode:T,slideConfig:O.slideConfig,slideIndex:this.index,trigger:O.node,player:null};this.trigger("slide_before_load",z),O.instance.setContent(T,function(){A(c.loader),c.resize(),c.slideAnimateIn(T,v),c.trigger("slide_after_load",z)})}this.slideDescription=T.querySelector(".gslide-description"),this.slideDescriptionContained=this.slideDescription&&g(this.slideDescription.parentNode,"gslide-media"),this.settings.preload&&(this.preloadSlide(p+1),this.preloadSlide(p-1)),this.updateNavigationClasses(),this.activeSlide=T}},{key:"preloadSlide",value:function(c){var p=this;if(c<0||c>this.elements.length-1||W(this.elements[c]))return!1;var v=this.slidesContainer.querySelectorAll(".gslide")[c];if(g(v,"loaded"))return!1;var x=this.elements[c],T=x.type,O={index:c,slide:v,slideNode:v,slideConfig:x.slideConfig,slideIndex:c,trigger:x.node,player:null};this.trigger("slide_before_load",O),T==="video"||T==="external"?setTimeout(function(){x.instance.setContent(v,function(){p.trigger("slide_after_load",O)})},200):x.instance.setContent(v,function(){p.trigger("slide_after_load",O)})}},{key:"prevSlide",value:function(){this.goToSlide(this.index-1)}},{key:"nextSlide",value:function(){this.goToSlide(this.index+1)}},{key:"goToSlide",value:function(){var c=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(this.prevActiveSlide=this.activeSlide,this.prevActiveSlideIndex=this.index,!this.loop()&&(c<0||c>this.elements.length-1))return!1;c<0?c=this.elements.length-1:c>=this.elements.length&&(c=0),this.showSlide(c)}},{key:"insertSlide",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1;p<0&&(p=this.elements.length);var v=new Ft(c,this,p),x=v.getConfig(),T=a({},x),O=v.create(),z=this.elements.length-1;T.index=p,T.node=!1,T.instance=v,T.slideConfig=x,this.elements.splice(p,0,T);var $=null,j=null;if(this.slidesContainer){if(p>z)this.slidesContainer.appendChild(O);else{var X=this.slidesContainer.querySelectorAll(".gslide")[p];this.slidesContainer.insertBefore(O,X)}(this.settings.preload&&this.index==0&&p==0||this.index-1==p||this.index+1==p)&&this.preloadSlide(p),this.index===0&&p===0&&(this.index=1),this.updateNavigationClasses(),$=this.slidesContainer.querySelectorAll(".gslide")[p],j=this.getSlidePlayerInstance(p),T.slideNode=$}this.trigger("slide_inserted",{index:p,slide:$,slideNode:$,slideConfig:x,slideIndex:p,trigger:null,player:j}),M(this.settings.slideInserted)&&this.settings.slideInserted({index:p,slide:$,player:j})}},{key:"removeSlide",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;if(c<0||c>this.elements.length-1)return!1;var p=this.slidesContainer&&this.slidesContainer.querySelectorAll(".gslide")[c];p&&(this.getActiveSlideIndex()==c&&(c==this.elements.length-1?this.prevSlide():this.nextSlide()),p.parentNode.removeChild(p)),this.elements.splice(c,1),this.trigger("slide_removed",c),M(this.settings.slideRemoved)&&this.settings.slideRemoved(c)}},{key:"slideAnimateIn",value:function(c,p){var v=this,x=c.querySelector(".gslide-media"),T=c.querySelector(".gslide-description"),O={index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlide,slideConfig:W(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:W(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},z={index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideConfig:this.elements[this.index].slideConfig,slideIndex:this.index,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)};if(x.offsetWidth>0&&T&&(A(T),T.style.display=""),f(c,this.effectsClasses),p)m(c,this.settings.cssEfects[this.settings.openEffect].in,function(){v.settings.autoplayVideos&&v.slidePlayerPlay(c),v.trigger("slide_changed",{prev:O,current:z}),M(v.settings.afterSlideChange)&&v.settings.afterSlideChange.apply(v,[O,z])});else{var $=this.settings.slideEffect,j=$!=="none"?this.settings.cssEfects[$].in:$;this.prevActiveSlideIndex>this.index&&this.settings.slideEffect=="slide"&&(j=this.settings.cssEfects.slideBack.in),m(c,j,function(){v.settings.autoplayVideos&&v.slidePlayerPlay(c),v.trigger("slide_changed",{prev:O,current:z}),M(v.settings.afterSlideChange)&&v.settings.afterSlideChange.apply(v,[O,z])})}setTimeout(function(){v.resize(c)},100),u(c,"current")}},{key:"slideAnimateOut",value:function(){if(!this.prevActiveSlide)return!1;var c=this.prevActiveSlide;f(c,this.effectsClasses),u(c,"prev");var p=this.settings.slideEffect,v=p!=="none"?this.settings.cssEfects[p].out:p;this.slidePlayerPause(c),this.trigger("slide_before_change",{prev:{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,slideNode:this.prevActiveSlide,slideIndex:this.prevActiveSlideIndex,slideConfig:W(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].slideConfig,trigger:W(this.prevActiveSlideIndex)?null:this.elements[this.prevActiveSlideIndex].node,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},current:{index:this.index,slide:this.activeSlide,slideNode:this.activeSlide,slideIndex:this.index,slideConfig:this.elements[this.index].slideConfig,trigger:this.elements[this.index].node,player:this.getSlidePlayerInstance(this.index)}}),M(this.settings.beforeSlideChange)&&this.settings.beforeSlideChange.apply(this,[{index:this.prevActiveSlideIndex,slide:this.prevActiveSlide,player:this.getSlidePlayerInstance(this.prevActiveSlideIndex)},{index:this.index,slide:this.activeSlide,player:this.getSlidePlayerInstance(this.index)}]),this.prevActiveSlideIndex>this.index&&this.settings.slideEffect=="slide"&&(v=this.settings.cssEfects.slideBack.out),m(c,v,function(){var x=c.querySelector(".ginner-container"),T=c.querySelector(".gslide-media"),O=c.querySelector(".gslide-description");x.style.transform="",T.style.transform="",f(T,"greset"),T.style.opacity="",O&&(O.style.opacity=""),f(c,"prev")})}},{key:"getAllPlayers",value:function(){return this.videoPlayers}},{key:"getSlidePlayerInstance",value:function(c){var p="gvideo"+c,v=this.getAllPlayers();return!(!q(v,p)||!v[p])&&v[p]}},{key:"stopSlideVideo",value:function(c){if(F(c)){var p=c.querySelector(".gvideo-wrapper");p&&(c=p.getAttribute("data-index"))}console.log("stopSlideVideo is deprecated, use slidePlayerPause");var v=this.getSlidePlayerInstance(c);v&&v.playing&&v.pause()}},{key:"slidePlayerPause",value:function(c){if(F(c)){var p=c.querySelector(".gvideo-wrapper");p&&(c=p.getAttribute("data-index"))}var v=this.getSlidePlayerInstance(c);v&&v.playing&&v.pause()}},{key:"playSlideVideo",value:function(c){if(F(c)){var p=c.querySelector(".gvideo-wrapper");p&&(c=p.getAttribute("data-index"))}console.log("playSlideVideo is deprecated, use slidePlayerPlay");var v=this.getSlidePlayerInstance(c);v&&!v.playing&&v.play()}},{key:"slidePlayerPlay",value:function(c){var p;if(!R||(p=this.settings.plyr.config)!==null&&p!==void 0&&p.muted){if(F(c)){var v=c.querySelector(".gvideo-wrapper");v&&(c=v.getAttribute("data-index"))}var x=this.getSlidePlayerInstance(c);x&&!x.playing&&(x.play(),this.settings.autofocusVideos&&x.elements.container.focus())}}},{key:"setElements",value:function(c){var p=this;this.settings.elements=!1;var v=[];c&&c.length&&l(c,function(x,T){var O=new Ft(x,p,T),z=O.getConfig(),$=a({},z);$.slideConfig=z,$.instance=O,$.index=T,v.push($)}),this.elements=v,this.lightboxOpen&&(this.slidesContainer.innerHTML="",this.elements.length&&(l(this.elements,function(){var x=S(p.settings.slideHTML);p.slidesContainer.appendChild(x)}),this.showSlide(0,!0)))}},{key:"getElementIndex",value:function(c){var p=!1;return l(this.elements,function(v,x){if(q(v,"node")&&v.node==c)return p=x,!0}),p}},{key:"getElements",value:function(){var c=this,p=[];this.elements=this.elements?this.elements:[],!W(this.settings.elements)&&H(this.settings.elements)&&this.settings.elements.length&&l(this.settings.elements,function(x,T){var O=new Ft(x,c,T),z=O.getConfig(),$=a({},z);$.node=!1,$.index=T,$.instance=O,$.slideConfig=z,p.push($)});var v=!1;return this.getSelector()&&(v=document.querySelectorAll(this.getSelector())),v&&l(v,function(x,T){var O=new Ft(x,c,T),z=O.getConfig(),$=a({},z);$.node=x,$.index=T,$.instance=O,$.slideConfig=z,$.gallery=x.getAttribute("data-gallery"),p.push($)}),p}},{key:"getGalleryElements",value:function(c,p){return c.filter(function(v){return v.gallery==p})}},{key:"getSelector",value:function(){return!this.settings.elements&&(this.settings.selector&&this.settings.selector.substring(0,5)=="data-"?"*[".concat(this.settings.selector,"]"):this.settings.selector)}},{key:"getActiveSlide",value:function(){return this.slidesContainer.querySelectorAll(".gslide")[this.index]}},{key:"getActiveSlideIndex",value:function(){return this.index}},{key:"getAnimationClasses",value:function(){var c=[];for(var p in this.settings.cssEfects)if(this.settings.cssEfects.hasOwnProperty(p)){var v=this.settings.cssEfects[p];c.push("g".concat(v.in)),c.push("g".concat(v.out))}return c.join(" ")}},{key:"build",value:function(){var c=this;if(this.built)return!1;var p=document.body.childNodes,v=[];l(p,function(X){X.parentNode==document.body&&X.nodeName.charAt(0)!=="#"&&X.hasAttribute&&!X.hasAttribute("aria-hidden")&&(v.push(X),X.setAttribute("aria-hidden","true"))});var x=q(this.settings.svg,"next")?this.settings.svg.next:"",T=q(this.settings.svg,"prev")?this.settings.svg.prev:"",O=q(this.settings.svg,"close")?this.settings.svg.close:"",z=this.settings.lightboxHTML;z=S(z=(z=(z=z.replace(/{nextSVG}/g,x)).replace(/{prevSVG}/g,T)).replace(/{closeSVG}/g,O)),document.body.appendChild(z);var $=document.getElementById("glightbox-body");this.modal=$;var j=$.querySelector(".gclose");this.prevButton=$.querySelector(".gprev"),this.nextButton=$.querySelector(".gnext"),this.overlay=$.querySelector(".goverlay"),this.loader=$.querySelector(".gloader"),this.slidesContainer=document.getElementById("glightbox-slider"),this.bodyHiddenChildElms=v,this.events={},u(this.modal,"glightbox-"+this.settings.skin),this.settings.closeButton&&j&&(this.events.close=d("click",{onElement:j,withCallback:function(X,Y){X.preventDefault(),c.close()}})),j&&!this.settings.closeButton&&j.parentNode.removeChild(j),this.nextButton&&(this.events.next=d("click",{onElement:this.nextButton,withCallback:function(X,Y){X.preventDefault(),c.nextSlide()}})),this.prevButton&&(this.events.prev=d("click",{onElement:this.prevButton,withCallback:function(X,Y){X.preventDefault(),c.prevSlide()}})),this.settings.closeOnOutsideClick&&(this.events.outClose=d("click",{onElement:$,withCallback:function(X,Y){c.preventOutsideClick||g(document.body,"glightbox-mobile")||_(X.target,".ginner-container")||_(X.target,".gbtn")||g(X.target,"gnext")||g(X.target,"gprev")||c.close()}})),l(this.elements,function(X,Y){c.slidesContainer.appendChild(X.instance.create()),X.slideNode=c.slidesContainer.querySelectorAll(".gslide")[Y]}),qe&&u(document.body,"glightbox-touch"),this.events.resize=d("resize",{onElement:window,withCallback:function(){c.resize()}}),this.built=!0}},{key:"resize",value:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null;if((c=c||this.activeSlide)&&!g(c,"zoomed")){var p=E(),v=c.querySelector(".gvideo-wrapper"),x=c.querySelector(".gslide-image"),T=this.slideDescription,O=p.width,z=p.height;if(O<=768?u(document.body,"glightbox-mobile"):f(document.body,"glightbox-mobile"),v||x){var $=!1;if(T&&(g(T,"description-bottom")||g(T,"description-top"))&&!g(T,"gabsolute")&&($=!0),x){if(O<=768)x.querySelector("img");else if($){var j=T.offsetHeight,X=x.querySelector("img");X.setAttribute("style","max-height: calc(100vh - ".concat(j,"px)")),T.setAttribute("style","max-width: ".concat(X.offsetWidth,"px;"))}}if(v){var Y=q(this.settings.plyr.config,"ratio")?this.settings.plyr.config.ratio:"";if(!Y){var rt=v.clientWidth,et=v.clientHeight,K=rt/et;Y="".concat(rt/K,":").concat(et/K)}var pt=Y.split(":"),it=this.settings.videosWidth,At=this.settings.videosWidth,Tt=(At=U(it)||it.indexOf("px")!==-1?parseInt(it):it.indexOf("vw")!==-1?O*parseInt(it)/100:it.indexOf("vh")!==-1?z*parseInt(it)/100:it.indexOf("%")!==-1?O*parseInt(it)/100:parseInt(v.clientWidth))/(parseInt(pt[0])/parseInt(pt[1]));if(Tt=Math.floor(Tt),$&&(z-=T.offsetHeight),At>O||Tt>z||z<Tt&&O>At){var Vt=v.offsetWidth,le=v.offsetHeight,Ee=z/le,he={width:Vt*Ee,height:le*Ee};v.parentNode.setAttribute("style","max-width: ".concat(he.width,"px")),$&&T.setAttribute("style","max-width: ".concat(he.width,"px;"))}else v.parentNode.style.maxWidth="".concat(it),$&&T.setAttribute("style","max-width: ".concat(it,";"))}}}}},{key:"reload",value:function(){this.init()}},{key:"updateNavigationClasses",value:function(){var c=this.loop();f(this.nextButton,"disabled"),f(this.prevButton,"disabled"),this.index==0&&this.elements.length-1==0?(u(this.prevButton,"disabled"),u(this.nextButton,"disabled")):this.index!==0||c?this.index!==this.elements.length-1||c||u(this.nextButton,"disabled"):u(this.prevButton,"disabled")}},{key:"loop",value:function(){var c=q(this.settings,"loopAtEnd")?this.settings.loopAtEnd:null;return c=q(this.settings,"loop")?this.settings.loop:c,c}},{key:"close",value:function(){var c=this;if(!this.lightboxOpen){if(this.events){for(var p in this.events)this.events.hasOwnProperty(p)&&this.events[p].destroy();this.events=null}return!1}if(this.closing)return!1;this.closing=!0,this.slidePlayerPause(this.activeSlide),this.fullElementsList&&(this.elements=this.fullElementsList),this.bodyHiddenChildElms.length&&l(this.bodyHiddenChildElms,function(v){v.removeAttribute("aria-hidden")}),u(this.modal,"glightbox-closing"),m(this.overlay,this.settings.openEffect=="none"?"none":this.settings.cssEfects.fade.out),m(this.activeSlide,this.settings.cssEfects[this.settings.closeEffect].out,function(){if(c.activeSlide=null,c.prevActiveSlideIndex=null,c.prevActiveSlide=null,c.built=!1,c.events){for(var v in c.events)c.events.hasOwnProperty(v)&&c.events[v].destroy();c.events=null}var x=document.body;f(xt,"glightbox-open"),f(x,"glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"),c.modal.parentNode.removeChild(c.modal),c.trigger("close"),M(c.settings.onClose)&&c.settings.onClose();var T=document.querySelector(".gcss-styles");T&&T.parentNode.removeChild(T),c.lightboxOpen=!1,c.closing=null})}},{key:"destroy",value:function(){this.close(),this.clearAllEvents(),this.baseEvents&&this.baseEvents.destroy()}},{key:"on",value:function(c,p){var v=arguments.length>2&&arguments[2]!==void 0&&arguments[2];if(!c||!M(p))throw new TypeError("Event name and callback must be defined");this.apiEvents.push({evt:c,once:v,callback:p})}},{key:"once",value:function(c,p){this.on(c,p,!0)}},{key:"trigger",value:function(c){var p=this,v=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,x=[];l(this.apiEvents,function(T,O){var z=T.evt,$=T.once,j=T.callback;z==c&&(j(v),$&&x.push(O))}),x.length&&l(x,function(T){return p.apiEvents.splice(T,1)})}},{key:"clearAllEvents",value:function(){this.apiEvents.splice(0,this.apiEvents.length)}},{key:"version",value:function(){return"3.1.0"}}]),b}();return function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},c=new ai(b);return c.init(),c}})})(Uh);const Yd=Uh.exports;var Xh={exports:{}};function Vd(r,t){var e=r.map(function(i){return i.then(function(n){return{value:n,status:!0}},function(n){return{value:n,status:!1}}).then(function(n){return typeof t=="function"&&t(n),n})});return Promise.all(e)}var jd=Vd,Wd=jd,dn=function(r,t){this.onProgress=typeof t=="function"?t:null,this.fallbackImage=typeof r=="string"||r instanceof HTMLImageElement?r:null};dn.simplePreload=function(r){return new Promise(function(t,e){var i;r instanceof HTMLImageElement?(i=r,i.complete?i.naturalHeight?t(i):e(i):(i.onload=t.bind(null,i),i.onerror=i.onabort=e.bind(null,i))):typeof r=="string"&&(i=new Image,i.onload=t.bind(null,i),i.onerror=i.onabort=e.bind(null,i),i.src=r)})};dn.prototype.preload=function(r){var t=this,e=Array.prototype.concat.apply([],Array.prototype.slice.call(arguments));return e=e.map(function(i){return dn.simplePreload(i).catch(function(n){return t.fallbackImage?dn.simplePreload(t.fallbackImage).then(function(s){return n.setAttribute("data-fail-src",n.src),n.src=s.src,n},function(){return Promise.reject(n)}):Promise.reject(n)})}),Wd(e,t.onProgress)};var Gd=dn;(function(r){r.exports=Gd})(Xh);const Zd=qd(Xh.exports);function Kd(r,t){return tu(r)||iu(r,t)||nu()}function Qd(r){return Jd(r)||eu(r)||ru()}function Jd(r){if(Array.isArray(r)){for(var t=0,e=new Array(r.length);t<r.length;t++)e[t]=r[t];return e}}function tu(r){if(Array.isArray(r))return r}function eu(r){if(Symbol.iterator in Object(r)||Object.prototype.toString.call(r)==="[object Arguments]")return Array.from(r)}function iu(r,t){var e=[],i=!0,n=!1,s=void 0;try{for(var o,a=r[Symbol.iterator]();!(i=(o=a.next()).done)&&(e.push(o.value),!t||e.length!==t);i=!0);}catch(l){n=!0,s=l}finally{try{i||a.return==null||a.return()}finally{if(n)throw s}}return e}function ru(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function nu(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function su(r,t){return new Promise(function(e,i){if(r===void 0&&i("Target element is undefined"),r.getAttribute("data-scramble-active")!=="true"){t.beforeEach&&t.beforeEach(r),r.setAttribute("data-scramble-active","true"),r.classList.add("scrambling");var n,s=r.innerHTML,o=[],a=t.speed?t.speed:100,l=r.textContent.split(""),h=l,d=r.textContent.split(""),u=!1;lu(t.text)?n=Fa(t.text):r.getAttribute("data-scramble-text")&&r.getAttribute("data-scramble-text")!==""&&(n=Fa(r.getAttribute("data-scramble-text"))),n&&(u=!0,l=n.truth,d=n.newLetters,h=n.startText);var f=function(){if(h.map(function(m,y){return!(` 	
\r\v`.indexOf(m)>-1)&&(d[y]=qh(),o[y]===!0&&(d[y]=l[y]),r.textContent=d.join(""),!0)}),uu(d,l)){if(r.innerHTML=s,u){var _=r.children[0];_&&_!==""?_.textContent=d.join(""):r.textContent=d.join("")}clearInterval(g),r.setAttribute("data-scramble-active","false"),r.classList.remove("scrambling"),t.afterEach&&t.afterEach(r),e(r)}};(function(_){if(_&&Qo(_))for(var m=0;m<=_.length;m++)(function(y){setTimeout(function(){o[y]=!0},cu(yo(t),t.random,t.speed))})(m)})(h),f();var g=setInterval(function(){f()},a)}else i("Animation already triggered")})}function ou(r){if(!hu(r))return!1;var t=du(r,yo(r)),e=Qd(yo(t)?document.querySelectorAll(t.target):document.querySelectorAll(t)),i=[];if(e.forEach(function(n){var s=su(n,t);i.push(s)}),!(i.length>0))return!1;t.beforeAll&&t.beforeAll(e),Promise.all(i).then(function(n){t.afterAll&&t.afterAll(n)}).catch(function(n){t.errorHandler&&t.errorHandler(n)})}var yo=function(r){return!!r&&r.constructor===Object},Qo=function(r){return!!r&&r.constructor===Array},au=function(r){return typeof r=="boolean"},jr=function(r){return typeof r=="function"},Na=function(r){return Number.isInteger(r)},lu=function(r){return!(!r||r===""||!(typeof r=="string"||r instanceof String))},hu=function(r){return!Qo(r)&&!au(r)&&typeof r!="number"&&typeof r!="function"&&r!==void 0},qh=function(r,t){var e=r||1,i=t||!1,n=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,e);return` 	
\r\v`.indexOf(n)<0&&i!==!0&&n},cu=function(r,t,e){var i=r||!1,n=e||100;if(i&&Qo(t)&&t.length>1){var s=Kd(t,2),o=s[0],a=s[1];if((e>=a||n>=a)&&(n=a-1),a-=n,o>a&&(o=a),Na(o)&&Na(a))return Math.floor(Math.random()*(a-o))+o}return Math.floor(1999*Math.random())+1e3},du=function(r,t){var e=t||!1,i={target:"[data-scrambler]",random:[1e3,3e3],speed:100,text:!1,beforeEach:!1,afterEach:!1,beforeAll:!1,afterAll:!1,errorHandler:!1};return r&&e&&(i.target=r.target!==void 0?r.target:"[data-scrambler]",i.random=r.random!==void 0?r.random:[1e3,3e3],i.speed=r.speed!==void 0?r.speed:100,i.text=r.text!==void 0&&r.text,i.beforeEach=!(r.beforeEach===void 0||!jr(r.beforeEach))&&r.beforeEach,i.afterEach=!(r.afterEach===void 0||!jr(r.afterEach))&&r.afterEach,i.beforeAll=!(r.beforeAll===void 0||!jr(r.beforeAll))&&r.beforeAll,i.afterAll=!(r.afterAll===void 0||!jr(r.afterAll))&&r.afterAll,i.errorHandler=!(r.errorHandler===void 0||!jr(r.errorHandler))&&r.errorHandler),i},uu=function(r,t){return!(r.length!==t.length||!r.every(function(e,i){return e===t[i]}))},Fa=function(r){if(!r||r===void 0||!(typeof r=="string"||r instanceof String))return!1;var t,e=r,i=e.split(""),n=e.split(""),s=[];return i.forEach(function(o,a){` 	
\r\v`.indexOf(i[a])>-1?s.push(" "):s.push(qh())}),t=s,{truth:i,newLetters:n,startText:t}},fu=function(){return ou}();function gu(){setTimeout(()=>{fu({target:"[data-scrambler]",random:[1500,1500],speed:60})},1500)}function pu(){const r=["background: #fff","border-bottom: solid 1px black","border-left: solid 1px black","border-top: solid 1px black","color: #666","line-height: 35px","padding: 10px 0px 10px 10px"].join(";"),t=["background: #fff","border-bottom: solid 1px black","border-top: solid 1px black","color: red","line-height: 35px","padding: 10px 5px 10px 0px","width: 300px"].join(";"),e=["background: #fff","border-bottom: solid 1px black","border-right: solid 1px black","border-top: solid 1px black","color: #666","line-height: 35px","padding: 10px 20px 10px 0px","width: 300px"].join(";");console.log("%c Coded with %c \u2665\uFE0F %c https://davidbwaters.com",r,t,e)}function mu(){Yd({selector:"*[data-glightbox]",touchNavigation:!0,loop:!0,autoplayVideos:!0,openEffect:"fade",closeEffect:"fade",skin:"dbw"})}const _u=["/images/Loader.svg","/images/Me-Dark.jpg","/images/Me-Light.jpg","/images/Hero-Paint-1-Dark.jpg","/images/Hero-Paint-1-Light.jpg","/images/Hero-Paint-2-Dark.jpg","/images/Hero-Paint-2-Light.jpg","/images/Noise-Clear.svg"],vu=new Zd,Yh=()=>{document.documentElement.style.setProperty("--doc-height",`${window.innerHeight}px`)};window.addEventListener("resize",Yh);Yh();Wt.registerPlugin(ot);window.addEventListener("DOMContentLoaded",()=>{ot.refresh();const r=document.querySelector("c-hero").shadowRoot.querySelector(".c-hero__upper");let t=Wt.timeline({scrollTrigger:{scroller:document.body,trigger:r,start:"0%",end:"+=250%",scrub:!0,onComplete:()=>{ot.refresh()}}});t.fromTo(document.querySelector("c-hero").shadowRoot.querySelectorAll(".js-hero-me"),{backgroundSize:"100% auto"},{backgroundSize:"160% auto"}),t.to(document.querySelector("c-canvas-noise"),{"--opacity-noise":.6}),document.querySelectorAll(".js-reveal").forEach(n=>{let s=n.querySelectorAll(".js-reveal-inner");s.length||(s=[n]),Wt.timeline({scrollTrigger:{scroller:document.body,trigger:n,toggleActions:"restart none none reset",start:"top bottom",end:"+=10"}}).from(s,{y:120,opacity:0,duration:.5,delay:0,stagger:.1,scaleY:1.4,ease:"Power2.out",onComplete:()=>{s.forEach(a=>{a.style.transform=""}),ot.refresh()}})}),document.querySelectorAll(".js-reveal-fade").forEach(n=>{Wt.set(n,{transformOrigin:"top center"}),Wt.timeline({scrollTrigger:{scroller:document.body,trigger:n,toggleActions:"restart none none reset",start:"top bottom",end:"+=10"}}).from(n,{opacity:0,scaleY:1.4,duration:.5,delay:.1,stagger:.1,ease:"Power2.out",onComplete:()=>{n.style.transform="",ot.refresh()}})}),window.dispatchEvent(new CustomEvent("appLoaded",{detail:{theme:document.body.dataset.theme},bubbles:!0,composed:!0}))});let yu=document.querySelector(".c-app");const Ba=()=>{let r=document.body.dataset.theme;document.querySelector(".c-logo").setAttribute("data",r==="dark"?"images/Logo-Dark.svg":"images/Logo-Light.svg")};async function bu(){Ba(),yu.addEventListener("themeChange",Ba)}vu.preload(..._u).then(function(r){bu().then(()=>{document.querySelector("c-loader").disable(),gu(),pu(),mu()})});function Ha(r){let t=r[0],e=r[1],i=r[2];return Math.sqrt(t*t+e*e+i*i)}function bo(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r}function wu(r,t,e,i){return r[0]=t,r[1]=e,r[2]=i,r}function Ua(r,t,e){return r[0]=t[0]+e[0],r[1]=t[1]+e[1],r[2]=t[2]+e[2],r}function Xa(r,t,e){return r[0]=t[0]-e[0],r[1]=t[1]-e[1],r[2]=t[2]-e[2],r}function xu(r,t,e){return r[0]=t[0]*e[0],r[1]=t[1]*e[1],r[2]=t[2]*e[2],r}function Su(r,t,e){return r[0]=t[0]/e[0],r[1]=t[1]/e[1],r[2]=t[2]/e[2],r}function $s(r,t,e){return r[0]=t[0]*e,r[1]=t[1]*e,r[2]=t[2]*e,r}function Eu(r,t){let e=t[0]-r[0],i=t[1]-r[1],n=t[2]-r[2];return Math.sqrt(e*e+i*i+n*n)}function Tu(r,t){let e=t[0]-r[0],i=t[1]-r[1],n=t[2]-r[2];return e*e+i*i+n*n}function qa(r){let t=r[0],e=r[1],i=r[2];return t*t+e*e+i*i}function Au(r,t){return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r}function Cu(r,t){return r[0]=1/t[0],r[1]=1/t[1],r[2]=1/t[2],r}function wo(r,t){let e=t[0],i=t[1],n=t[2],s=e*e+i*i+n*n;return s>0&&(s=1/Math.sqrt(s)),r[0]=t[0]*s,r[1]=t[1]*s,r[2]=t[2]*s,r}function Vh(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]}function Ya(r,t,e){let i=t[0],n=t[1],s=t[2],o=e[0],a=e[1],l=e[2];return r[0]=n*l-s*a,r[1]=s*o-i*l,r[2]=i*a-n*o,r}function ku(r,t,e,i){let n=t[0],s=t[1],o=t[2];return r[0]=n+i*(e[0]-n),r[1]=s+i*(e[1]-s),r[2]=o+i*(e[2]-o),r}function Mu(r,t,e){let i=t[0],n=t[1],s=t[2],o=e[3]*i+e[7]*n+e[11]*s+e[15];return o=o||1,r[0]=(e[0]*i+e[4]*n+e[8]*s+e[12])/o,r[1]=(e[1]*i+e[5]*n+e[9]*s+e[13])/o,r[2]=(e[2]*i+e[6]*n+e[10]*s+e[14])/o,r}function Pu(r,t,e){let i=t[0],n=t[1],s=t[2],o=e[3]*i+e[7]*n+e[11]*s+e[15];return o=o||1,r[0]=(e[0]*i+e[4]*n+e[8]*s)/o,r[1]=(e[1]*i+e[5]*n+e[9]*s)/o,r[2]=(e[2]*i+e[6]*n+e[10]*s)/o,r}function Ou(r,t,e){let i=t[0],n=t[1],s=t[2],o=e[0],a=e[1],l=e[2],h=e[3],d=a*s-l*n,u=l*i-o*s,f=o*n-a*i,g=a*f-l*u,_=l*d-o*f,m=o*u-a*d,y=h*2;return d*=y,u*=y,f*=y,g*=2,_*=2,m*=2,r[0]=i+d+g,r[1]=n+u+_,r[2]=s+f+m,r}const Du=function(){const r=[0,0,0],t=[0,0,0];return function(e,i){bo(r,e),bo(t,i),wo(r,r),wo(t,t);let n=Vh(r,t);return n>1?0:n<-1?Math.PI:Math.acos(n)}}();function Ru(r,t){return r[0]===t[0]&&r[1]===t[1]&&r[2]===t[2]}class ri extends Array{constructor(t=0,e=t,i=t){return super(t,e,i),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this[0]=t}set y(t){this[1]=t}set z(t){this[2]=t}set(t,e=t,i=t){return t.length?this.copy(t):(wu(this,t,e,i),this)}copy(t){return bo(this,t),this}add(t,e){return e?Ua(this,t,e):Ua(this,this,t),this}sub(t,e){return e?Xa(this,t,e):Xa(this,this,t),this}multiply(t){return t.length?xu(this,this,t):$s(this,this,t),this}divide(t){return t.length?Su(this,this,t):$s(this,this,1/t),this}inverse(t=this){return Cu(this,t),this}len(){return Ha(this)}distance(t){return t?Eu(this,t):Ha(this)}squaredLen(){return qa(this)}squaredDistance(t){return t?Tu(this,t):qa(this)}negate(t=this){return Au(this,t),this}cross(t,e){return e?Ya(this,t,e):Ya(this,this,t),this}scale(t){return $s(this,this,t),this}normalize(){return wo(this,this),this}dot(t){return Vh(this,t)}equals(t){return Ru(this,t)}applyMatrix4(t){return Mu(this,this,t),this}scaleRotateMatrix4(t){return Pu(this,this,t),this}applyQuaternion(t){return Ou(this,this,t),this}angle(t){return Du(this,t)}lerp(t,e){return ku(this,this,t,e),this}clone(){return new ri(this[0],this[1],this[2])}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t}transformDirection(t){const e=this[0],i=this[1],n=this[2];return this[0]=t[0]*e+t[4]*i+t[8]*n,this[1]=t[1]*e+t[5]*i+t[9]*n,this[2]=t[2]*e+t[6]*i+t[10]*n,this.normalize()}}const Va=new ri;let zu=1,Lu=1,ja=!1;class jh{constructor(t,e={}){t.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=t,this.attributes=e,this.id=zu++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let i in e)this.addAttribute(i,e[i])}addAttribute(t,e){if(this.attributes[t]=e,e.id=Lu++,e.size=e.size||1,e.type=e.type||(e.data.constructor===Float32Array?this.gl.FLOAT:e.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),e.target=t==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,e.normalized=e.normalized||!1,e.stride=e.stride||0,e.offset=e.offset||0,e.count=e.count||(e.stride?e.data.byteLength/e.stride:e.data.length/e.size),e.divisor=e.instanced||0,e.needsUpdate=!1,e.buffer||(e.buffer=this.gl.createBuffer(),this.updateAttribute(e)),e.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==e.count*e.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,e.count*e.divisor);this.instancedCount=e.count*e.divisor}else t==="index"?this.drawRange.count=e.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,e.count))}updateAttribute(t){this.glState.boundBuffer!==t.buffer&&(this.gl.bindBuffer(t.target,t.buffer),this.glState.boundBuffer=t.buffer),this.gl.bufferData(t.target,t.data,this.gl.STATIC_DRAW),t.needsUpdate=!1}setIndex(t){this.addAttribute("index",t)}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}setInstancedCount(t){this.instancedCount=t}createVAO(t){this.VAOs[t.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.bindAttributes(t)}bindAttributes(t){t.attributeLocations.forEach((e,{name:i,type:n})=>{if(!this.attributes[i]){console.warn(`active attribute ${i} not being supplied`);return}const s=this.attributes[i];this.gl.bindBuffer(s.target,s.buffer),this.glState.boundBuffer=s.buffer;let o=1;n===35674&&(o=2),n===35675&&(o=3),n===35676&&(o=4);const a=s.size/o,l=o===1?0:o*o*o,h=o===1?0:o*o;for(let d=0;d<o;d++)this.gl.vertexAttribPointer(e+d,a,s.type,s.normalized,s.stride+l,s.offset+d*h),this.gl.enableVertexAttribArray(e+d),this.gl.renderer.vertexAttribDivisor(e+d,s.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:t,mode:e=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${t.attributeOrder}`&&(this.VAOs[t.attributeOrder]||this.createVAO(t),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${t.attributeOrder}`),t.attributeLocations.forEach((i,{name:n})=>{const s=this.attributes[n];s.needsUpdate&&this.updateAttribute(s)}),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(e,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*2,this.instancedCount):this.gl.renderer.drawArraysInstanced(e,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(e,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*2):this.gl.drawArrays(e,this.drawRange.start,this.drawRange.count)}getPosition(){const t=this.attributes.position;if(t.data)return t;if(!ja)return console.warn("No position buffer data found to compute bounds"),ja=!0}computeBoundingBox(t){t||(t=this.getPosition());const e=t.data,i=t.offset||0,n=t.stride||t.size;this.bounds||(this.bounds={min:new ri,max:new ri,center:new ri,scale:new ri,radius:1/0});const s=this.bounds.min,o=this.bounds.max,a=this.bounds.center,l=this.bounds.scale;s.set(1/0),o.set(-1/0);for(let h=i,d=e.length;h<d;h+=n){const u=e[h],f=e[h+1],g=e[h+2];s.x=Math.min(u,s.x),s.y=Math.min(f,s.y),s.z=Math.min(g,s.z),o.x=Math.max(u,o.x),o.y=Math.max(f,o.y),o.z=Math.max(g,o.z)}l.sub(o,s),a.add(s,o).divide(2)}computeBoundingSphere(t){t||(t=this.getPosition());const e=t.data,i=t.offset||0,n=t.stride||t.size;this.bounds||this.computeBoundingBox(t);let s=0;for(let o=i,a=e.length;o<a;o+=n)Va.fromArray(e,o),s=Math.max(s,this.bounds.center.squaredDistance(Va));this.bounds.radius=Math.sqrt(s)}remove(){for(let t in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[t]),delete this.VAOs[t];for(let t in this.attributes)this.gl.deleteBuffer(this.attributes[t].buffer),delete this.attributes[t]}}let $u=1;const Wa={};class Jo{constructor(t,{vertex:e,fragment:i,uniforms:n={},transparent:s=!1,cullFace:o=t.BACK,frontFace:a=t.CCW,depthTest:l=!0,depthWrite:h=!0,depthFunc:d=t.LESS}={}){t.canvas||console.error("gl not passed as fist argument to Program"),this.gl=t,this.uniforms=n,this.id=$u++,e||console.warn("vertex shader not supplied"),i||console.warn("fragment shader not supplied"),this.transparent=s,this.cullFace=o,this.frontFace=a,this.depthTest=l,this.depthWrite=h,this.depthFunc=d,this.blendFunc={},this.blendEquation={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA));const u=t.createShader(t.VERTEX_SHADER);t.shaderSource(u,e),t.compileShader(u),t.getShaderInfoLog(u)!==""&&console.warn(`${t.getShaderInfoLog(u)}
Vertex Shader
${Ga(e)}`);const f=t.createShader(t.FRAGMENT_SHADER);if(t.shaderSource(f,i),t.compileShader(f),t.getShaderInfoLog(f)!==""&&console.warn(`${t.getShaderInfoLog(f)}
Fragment Shader
${Ga(i)}`),this.program=t.createProgram(),t.attachShader(this.program,u),t.attachShader(this.program,f),t.linkProgram(this.program),!t.getProgramParameter(this.program,t.LINK_STATUS))return console.warn(t.getProgramInfoLog(this.program));t.deleteShader(u),t.deleteShader(f),this.uniformLocations=new Map;let g=t.getProgramParameter(this.program,t.ACTIVE_UNIFORMS);for(let y=0;y<g;y++){let w=t.getActiveUniform(this.program,y);this.uniformLocations.set(w,t.getUniformLocation(this.program,w.name));const A=w.name.match(/(\w+)/g);w.uniformName=A[0],A.length===3?(w.isStructArray=!0,w.structIndex=Number(A[1]),w.structProperty=A[2]):A.length===2&&isNaN(Number(A[1]))&&(w.isStruct=!0,w.structProperty=A[1])}this.attributeLocations=new Map;const _=[],m=t.getProgramParameter(this.program,t.ACTIVE_ATTRIBUTES);for(let y=0;y<m;y++){const w=t.getActiveAttrib(this.program,y),A=t.getAttribLocation(this.program,w.name);_[A]=w.name,this.attributeLocations.set(w,A)}this.attributeOrder=_.join("")}setBlendFunc(t,e,i,n){this.blendFunc.src=t,this.blendFunc.dst=e,this.blendFunc.srcAlpha=i,this.blendFunc.dstAlpha=n,t&&(this.transparent=!0)}setBlendEquation(t,e){this.blendEquation.modeRGB=t,this.blendEquation.modeAlpha=e}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha)}use({flipFaces:t=!1}={}){let e=-1;this.gl.renderer.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.currentProgram=this.id),this.uniformLocations.forEach((n,s)=>{let o=s.uniformName,a=this.uniforms[o];if(s.isStruct&&(a=a[s.structProperty],o+=`.${s.structProperty}`),s.isStructArray&&(a=a[s.structIndex][s.structProperty],o+=`[${s.structIndex}].${s.structProperty}`),!a)return Za(`Active uniform ${o} has not been supplied`);if(a&&a.value===void 0)return Za(`${o} uniform is missing a value parameter`);if(a.value.texture)return e=e+1,a.value.update(e),Is(this.gl,s.type,n,e);if(a.value.length&&a.value[0].texture){const l=[];return a.value.forEach(h=>{e=e+1,h.update(e),l.push(e)}),Is(this.gl,s.type,n,l)}Is(this.gl,s.type,n,a.value)}),this.applyState(),t&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}}function Is(r,t,e,i){i=i.length?Iu(i):i;const n=r.renderer.state.uniformLocations.get(e);if(i.length)if(n===void 0||n.length!==i.length)r.renderer.state.uniformLocations.set(e,i.slice(0));else{if(Nu(n,i))return;n.set?n.set(i):Fu(n,i),r.renderer.state.uniformLocations.set(e,n)}else{if(n===i)return;r.renderer.state.uniformLocations.set(e,i)}switch(t){case 5126:return i.length?r.uniform1fv(e,i):r.uniform1f(e,i);case 35664:return r.uniform2fv(e,i);case 35665:return r.uniform3fv(e,i);case 35666:return r.uniform4fv(e,i);case 35670:case 5124:case 35678:case 35680:return i.length?r.uniform1iv(e,i):r.uniform1i(e,i);case 35671:case 35667:return r.uniform2iv(e,i);case 35672:case 35668:return r.uniform3iv(e,i);case 35673:case 35669:return r.uniform4iv(e,i);case 35674:return r.uniformMatrix2fv(e,!1,i);case 35675:return r.uniformMatrix3fv(e,!1,i);case 35676:return r.uniformMatrix4fv(e,!1,i)}}function Ga(r){let t=r.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+": "+t[e];return t.join(`
`)}function Iu(r){const t=r.length,e=r[0].length;if(e===void 0)return r;const i=t*e;let n=Wa[i];n||(Wa[i]=n=new Float32Array(i));for(let s=0;s<t;s++)n.set(r[s],s*e);return n}function Nu(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function Fu(r,t){for(let e=0,i=r.length;e<i;e++)r[e]=t[e]}let Ns=0;function Za(r){Ns>100||(console.warn(r),Ns++,Ns>100&&console.warn("More than 100 program warnings - stopping logs."))}const Fs=new ri;let Bu=1;class Hu{constructor({canvas:t=document.createElement("canvas"),width:e=300,height:i=150,dpr:n=1,alpha:s=!1,depth:o=!0,stencil:a=!1,antialias:l=!1,premultipliedAlpha:h=!1,preserveDrawingBuffer:d=!1,powerPreference:u="default",autoClear:f=!0,webgl:g=2}={}){const _={alpha:s,depth:o,stencil:a,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:u};this.dpr=n,this.alpha=s,this.color=!0,this.depth=o,this.stencil=a,this.premultipliedAlpha=h,this.autoClear=f,this.id=Bu++,g===2&&(this.gl=t.getContext("webgl2",_)),this.isWebgl2=!!this.gl,this.gl||(this.gl=t.getContext("webgl",_)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(e,i),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=null,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LESS,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(t,e){this.width=t,this.height=e,this.gl.canvas.width=t*this.dpr,this.gl.canvas.height=e*this.dpr,Object.assign(this.gl.canvas.style,{width:t+"px",height:e+"px"})}setViewport(t,e){this.state.viewport.width===t&&this.state.viewport.height===e||(this.state.viewport.width=t,this.state.viewport.height=e,this.gl.viewport(0,0,t,e))}enable(t){this.state[t]!==!0&&(this.gl.enable(t),this.state[t]=!0)}disable(t){this.state[t]!==!1&&(this.gl.disable(t),this.state[t]=!1)}setBlendFunc(t,e,i,n){this.state.blendFunc.src===t&&this.state.blendFunc.dst===e&&this.state.blendFunc.srcAlpha===i&&this.state.blendFunc.dstAlpha===n||(this.state.blendFunc.src=t,this.state.blendFunc.dst=e,this.state.blendFunc.srcAlpha=i,this.state.blendFunc.dstAlpha=n,i!==void 0?this.gl.blendFuncSeparate(t,e,i,n):this.gl.blendFunc(t,e))}setBlendEquation(t,e){t=t||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===t&&this.state.blendEquation.modeAlpha===e)&&(this.state.blendEquation.modeRGB=t,this.state.blendEquation.modeAlpha=e,e!==void 0?this.gl.blendEquationSeparate(t,e):this.gl.blendEquation(t))}setCullFace(t){this.state.cullFace!==t&&(this.state.cullFace=t,this.gl.cullFace(t))}setFrontFace(t){this.state.frontFace!==t&&(this.state.frontFace=t,this.gl.frontFace(t))}setDepthMask(t){this.state.depthMask!==t&&(this.state.depthMask=t,this.gl.depthMask(t))}setDepthFunc(t){this.state.depthFunc!==t&&(this.state.depthFunc=t,this.gl.depthFunc(t))}activeTexture(t){this.state.activeTextureUnit!==t&&(this.state.activeTextureUnit=t,this.gl.activeTexture(this.gl.TEXTURE0+t))}bindFramebuffer({target:t=this.gl.FRAMEBUFFER,buffer:e=null}={}){this.state.framebuffer!==e&&(this.state.framebuffer=e,this.gl.bindFramebuffer(t,e))}getExtension(t,e,i){return e&&this.gl[e]?this.gl[e].bind(this.gl):(this.extensions[t]||(this.extensions[t]=this.gl.getExtension(t)),e?this.extensions[t]?this.extensions[t][i].bind(this.extensions[t]):null:this.extensions[t])}sortOpaque(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program.id!==e.program.id?t.program.id-e.program.id:t.zDepth!==e.zDepth?t.zDepth-e.zDepth:e.id-t.id}sortTransparent(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.zDepth!==e.zDepth?e.zDepth-t.zDepth:e.id-t.id}sortUI(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program.id!==e.program.id?t.program.id-e.program.id:e.id-t.id}getRenderList({scene:t,camera:e,frustumCull:i,sort:n}){let s=[];if(e&&i&&e.updateFrustum(),t.traverse(o=>{if(!o.visible)return!0;!o.draw||i&&o.frustumCulled&&e&&!e.frustumIntersectsMesh(o)||s.push(o)}),n){const o=[],a=[],l=[];s.forEach(h=>{h.program.transparent?h.program.depthTest?a.push(h):l.push(h):o.push(h),h.zDepth=0,!(h.renderOrder!==0||!h.program.depthTest||!e)&&(h.worldMatrix.getTranslation(Fs),Fs.applyMatrix4(e.projectionViewMatrix),h.zDepth=Fs.z)}),o.sort(this.sortOpaque),a.sort(this.sortTransparent),l.sort(this.sortUI),s=o.concat(a,l)}return s}render({scene:t,camera:e,target:i=null,update:n=!0,sort:s=!0,frustumCull:o=!0,clear:a}){i===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(i),this.setViewport(i.width,i.height)),(a||this.autoClear&&a!==!1)&&(this.depth&&(!i||i.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),n&&t.updateMatrixWorld(),e&&e.updateMatrixWorld(),this.getRenderList({scene:t,camera:e,frustumCull:o,sort:s}).forEach(h=>{h.draw({camera:e})})}}function Wh(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r}function Gh(r,t,e,i,n){return r[0]=t,r[1]=e,r[2]=i,r[3]=n,r}function Zh(r,t){let e=t[0],i=t[1],n=t[2],s=t[3],o=e*e+i*i+n*n+s*s;return o>0&&(o=1/Math.sqrt(o)),r[0]=e*o,r[1]=i*o,r[2]=n*o,r[3]=s*o,r}function Uu(r,t){return r[0]*t[0]+r[1]*t[1]+r[2]*t[2]+r[3]*t[3]}function Xu(r){return r[0]=0,r[1]=0,r[2]=0,r[3]=1,r}function qu(r,t,e){e=e*.5;let i=Math.sin(e);return r[0]=i*t[0],r[1]=i*t[1],r[2]=i*t[2],r[3]=Math.cos(e),r}function Ka(r,t,e){let i=t[0],n=t[1],s=t[2],o=t[3],a=e[0],l=e[1],h=e[2],d=e[3];return r[0]=i*d+o*a+n*h-s*l,r[1]=n*d+o*l+s*a-i*h,r[2]=s*d+o*h+i*l-n*a,r[3]=o*d-i*a-n*l-s*h,r}function Yu(r,t,e){e*=.5;let i=t[0],n=t[1],s=t[2],o=t[3],a=Math.sin(e),l=Math.cos(e);return r[0]=i*l+o*a,r[1]=n*l+s*a,r[2]=s*l-n*a,r[3]=o*l-i*a,r}function Vu(r,t,e){e*=.5;let i=t[0],n=t[1],s=t[2],o=t[3],a=Math.sin(e),l=Math.cos(e);return r[0]=i*l-s*a,r[1]=n*l+o*a,r[2]=s*l+i*a,r[3]=o*l-n*a,r}function ju(r,t,e){e*=.5;let i=t[0],n=t[1],s=t[2],o=t[3],a=Math.sin(e),l=Math.cos(e);return r[0]=i*l+n*a,r[1]=n*l-i*a,r[2]=s*l+o*a,r[3]=o*l-s*a,r}function Wu(r,t,e,i){let n=t[0],s=t[1],o=t[2],a=t[3],l=e[0],h=e[1],d=e[2],u=e[3],f,g,_,m,y;return g=n*l+s*h+o*d+a*u,g<0&&(g=-g,l=-l,h=-h,d=-d,u=-u),1-g>1e-6?(f=Math.acos(g),_=Math.sin(f),m=Math.sin((1-i)*f)/_,y=Math.sin(i*f)/_):(m=1-i,y=i),r[0]=m*n+y*l,r[1]=m*s+y*h,r[2]=m*o+y*d,r[3]=m*a+y*u,r}function Gu(r,t){let e=t[0],i=t[1],n=t[2],s=t[3],o=e*e+i*i+n*n+s*s,a=o?1/o:0;return r[0]=-e*a,r[1]=-i*a,r[2]=-n*a,r[3]=s*a,r}function Zu(r,t){return r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=t[3],r}function Ku(r,t){let e=t[0]+t[4]+t[8],i;if(e>0)i=Math.sqrt(e+1),r[3]=.5*i,i=.5/i,r[0]=(t[5]-t[7])*i,r[1]=(t[6]-t[2])*i,r[2]=(t[1]-t[3])*i;else{let n=0;t[4]>t[0]&&(n=1),t[8]>t[n*3+n]&&(n=2);let s=(n+1)%3,o=(n+2)%3;i=Math.sqrt(t[n*3+n]-t[s*3+s]-t[o*3+o]+1),r[n]=.5*i,i=.5/i,r[3]=(t[s*3+o]-t[o*3+s])*i,r[s]=(t[s*3+n]+t[n*3+s])*i,r[o]=(t[o*3+n]+t[n*3+o])*i}return r}function Qu(r,t,e="YXZ"){let i=Math.sin(t[0]*.5),n=Math.cos(t[0]*.5),s=Math.sin(t[1]*.5),o=Math.cos(t[1]*.5),a=Math.sin(t[2]*.5),l=Math.cos(t[2]*.5);return e==="XYZ"?(r[0]=i*o*l+n*s*a,r[1]=n*s*l-i*o*a,r[2]=n*o*a+i*s*l,r[3]=n*o*l-i*s*a):e==="YXZ"?(r[0]=i*o*l+n*s*a,r[1]=n*s*l-i*o*a,r[2]=n*o*a-i*s*l,r[3]=n*o*l+i*s*a):e==="ZXY"?(r[0]=i*o*l-n*s*a,r[1]=n*s*l+i*o*a,r[2]=n*o*a+i*s*l,r[3]=n*o*l-i*s*a):e==="ZYX"?(r[0]=i*o*l-n*s*a,r[1]=n*s*l+i*o*a,r[2]=n*o*a-i*s*l,r[3]=n*o*l+i*s*a):e==="YZX"?(r[0]=i*o*l+n*s*a,r[1]=n*s*l+i*o*a,r[2]=n*o*a-i*s*l,r[3]=n*o*l-i*s*a):e==="XZY"&&(r[0]=i*o*l-n*s*a,r[1]=n*s*l-i*o*a,r[2]=n*o*a+i*s*l,r[3]=n*o*l+i*s*a),r}const Ju=Wh,tf=Gh,ef=Uu,rf=Zh;class nf extends Array{constructor(t=0,e=0,i=0,n=1){return super(t,e,i,n),this.onChange=()=>{},this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(t){this[0]=t,this.onChange()}set y(t){this[1]=t,this.onChange()}set z(t){this[2]=t,this.onChange()}set w(t){this[3]=t,this.onChange()}identity(){return Xu(this),this.onChange(),this}set(t,e,i,n){return t.length?this.copy(t):(tf(this,t,e,i,n),this.onChange(),this)}rotateX(t){return Yu(this,this,t),this.onChange(),this}rotateY(t){return Vu(this,this,t),this.onChange(),this}rotateZ(t){return ju(this,this,t),this.onChange(),this}inverse(t=this){return Gu(this,t),this.onChange(),this}conjugate(t=this){return Zu(this,t),this.onChange(),this}copy(t){return Ju(this,t),this.onChange(),this}normalize(t=this){return rf(this,t),this.onChange(),this}multiply(t,e){return e?Ka(this,t,e):Ka(this,this,t),this.onChange(),this}dot(t){return ef(this,t)}fromMatrix3(t){return Ku(this,t),this.onChange(),this}fromEuler(t){return Qu(this,t,t.order),this}fromAxisAngle(t,e){return qu(this,t,e),this}slerp(t,e){return Wu(this,this,t,e),this}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this[3]=t[e+3],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t[e+3]=this[3],t}}const sf=1e-6;function of(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}function af(r,t,e,i,n,s,o,a,l,h,d,u,f,g,_,m,y){return r[0]=t,r[1]=e,r[2]=i,r[3]=n,r[4]=s,r[5]=o,r[6]=a,r[7]=l,r[8]=h,r[9]=d,r[10]=u,r[11]=f,r[12]=g,r[13]=_,r[14]=m,r[15]=y,r}function lf(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=1,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=1,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function hf(r,t){let e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],d=t[8],u=t[9],f=t[10],g=t[11],_=t[12],m=t[13],y=t[14],w=t[15],A=e*a-i*o,S=e*l-n*o,E=e*h-s*o,k=i*l-n*a,P=i*h-s*a,D=n*h-s*l,L=d*m-u*_,M=d*y-f*_,N=d*w-g*_,F=u*y-f*m,H=u*w-g*m,Q=f*w-g*y,B=A*Q-S*H+E*F+k*N-P*M+D*L;return B?(B=1/B,r[0]=(a*Q-l*H+h*F)*B,r[1]=(n*H-i*Q-s*F)*B,r[2]=(m*D-y*P+w*k)*B,r[3]=(f*P-u*D-g*k)*B,r[4]=(l*N-o*Q-h*M)*B,r[5]=(e*Q-n*N+s*M)*B,r[6]=(y*E-_*D-w*S)*B,r[7]=(d*D-f*E+g*S)*B,r[8]=(o*H-a*N+h*L)*B,r[9]=(i*N-e*H-s*L)*B,r[10]=(_*P-m*E+w*A)*B,r[11]=(u*E-d*P-g*A)*B,r[12]=(a*M-o*F-l*L)*B,r[13]=(e*F-i*M+n*L)*B,r[14]=(m*S-_*k-y*A)*B,r[15]=(d*k-u*S+f*A)*B,r):null}function cf(r){let t=r[0],e=r[1],i=r[2],n=r[3],s=r[4],o=r[5],a=r[6],l=r[7],h=r[8],d=r[9],u=r[10],f=r[11],g=r[12],_=r[13],m=r[14],y=r[15],w=t*o-e*s,A=t*a-i*s,S=t*l-n*s,E=e*a-i*o,k=e*l-n*o,P=i*l-n*a,D=h*_-d*g,L=h*m-u*g,M=h*y-f*g,N=d*m-u*_,F=d*y-f*_,H=u*y-f*m;return w*H-A*F+S*N+E*M-k*L+P*D}function Qa(r,t,e){let i=t[0],n=t[1],s=t[2],o=t[3],a=t[4],l=t[5],h=t[6],d=t[7],u=t[8],f=t[9],g=t[10],_=t[11],m=t[12],y=t[13],w=t[14],A=t[15],S=e[0],E=e[1],k=e[2],P=e[3];return r[0]=S*i+E*a+k*u+P*m,r[1]=S*n+E*l+k*f+P*y,r[2]=S*s+E*h+k*g+P*w,r[3]=S*o+E*d+k*_+P*A,S=e[4],E=e[5],k=e[6],P=e[7],r[4]=S*i+E*a+k*u+P*m,r[5]=S*n+E*l+k*f+P*y,r[6]=S*s+E*h+k*g+P*w,r[7]=S*o+E*d+k*_+P*A,S=e[8],E=e[9],k=e[10],P=e[11],r[8]=S*i+E*a+k*u+P*m,r[9]=S*n+E*l+k*f+P*y,r[10]=S*s+E*h+k*g+P*w,r[11]=S*o+E*d+k*_+P*A,S=e[12],E=e[13],k=e[14],P=e[15],r[12]=S*i+E*a+k*u+P*m,r[13]=S*n+E*l+k*f+P*y,r[14]=S*s+E*h+k*g+P*w,r[15]=S*o+E*d+k*_+P*A,r}function df(r,t,e){let i=e[0],n=e[1],s=e[2],o,a,l,h,d,u,f,g,_,m,y,w;return t===r?(r[12]=t[0]*i+t[4]*n+t[8]*s+t[12],r[13]=t[1]*i+t[5]*n+t[9]*s+t[13],r[14]=t[2]*i+t[6]*n+t[10]*s+t[14],r[15]=t[3]*i+t[7]*n+t[11]*s+t[15]):(o=t[0],a=t[1],l=t[2],h=t[3],d=t[4],u=t[5],f=t[6],g=t[7],_=t[8],m=t[9],y=t[10],w=t[11],r[0]=o,r[1]=a,r[2]=l,r[3]=h,r[4]=d,r[5]=u,r[6]=f,r[7]=g,r[8]=_,r[9]=m,r[10]=y,r[11]=w,r[12]=o*i+d*n+_*s+t[12],r[13]=a*i+u*n+m*s+t[13],r[14]=l*i+f*n+y*s+t[14],r[15]=h*i+g*n+w*s+t[15]),r}function uf(r,t,e){let i=e[0],n=e[1],s=e[2];return r[0]=t[0]*i,r[1]=t[1]*i,r[2]=t[2]*i,r[3]=t[3]*i,r[4]=t[4]*n,r[5]=t[5]*n,r[6]=t[6]*n,r[7]=t[7]*n,r[8]=t[8]*s,r[9]=t[9]*s,r[10]=t[10]*s,r[11]=t[11]*s,r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r}function ff(r,t,e,i){let n=i[0],s=i[1],o=i[2],a=Math.hypot(n,s,o),l,h,d,u,f,g,_,m,y,w,A,S,E,k,P,D,L,M,N,F,H,Q,B,W;return Math.abs(a)<sf?null:(a=1/a,n*=a,s*=a,o*=a,l=Math.sin(e),h=Math.cos(e),d=1-h,u=t[0],f=t[1],g=t[2],_=t[3],m=t[4],y=t[5],w=t[6],A=t[7],S=t[8],E=t[9],k=t[10],P=t[11],D=n*n*d+h,L=s*n*d+o*l,M=o*n*d-s*l,N=n*s*d-o*l,F=s*s*d+h,H=o*s*d+n*l,Q=n*o*d+s*l,B=s*o*d-n*l,W=o*o*d+h,r[0]=u*D+m*L+S*M,r[1]=f*D+y*L+E*M,r[2]=g*D+w*L+k*M,r[3]=_*D+A*L+P*M,r[4]=u*N+m*F+S*H,r[5]=f*N+y*F+E*H,r[6]=g*N+w*F+k*H,r[7]=_*N+A*F+P*H,r[8]=u*Q+m*B+S*W,r[9]=f*Q+y*B+E*W,r[10]=g*Q+w*B+k*W,r[11]=_*Q+A*B+P*W,t!==r&&(r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r)}function gf(r,t){return r[0]=t[12],r[1]=t[13],r[2]=t[14],r}function Kh(r,t){let e=t[0],i=t[1],n=t[2],s=t[4],o=t[5],a=t[6],l=t[8],h=t[9],d=t[10];return r[0]=Math.hypot(e,i,n),r[1]=Math.hypot(s,o,a),r[2]=Math.hypot(l,h,d),r}function pf(r){let t=r[0],e=r[1],i=r[2],n=r[4],s=r[5],o=r[6],a=r[8],l=r[9],h=r[10];const d=t*t+e*e+i*i,u=n*n+s*s+o*o,f=a*a+l*l+h*h;return Math.sqrt(Math.max(d,u,f))}const mf=function(){const r=[0,0,0];return function(t,e){let i=r;Kh(i,e);let n=1/i[0],s=1/i[1],o=1/i[2],a=e[0]*n,l=e[1]*s,h=e[2]*o,d=e[4]*n,u=e[5]*s,f=e[6]*o,g=e[8]*n,_=e[9]*s,m=e[10]*o,y=a+u+m,w=0;return y>0?(w=Math.sqrt(y+1)*2,t[3]=.25*w,t[0]=(f-_)/w,t[1]=(g-h)/w,t[2]=(l-d)/w):a>u&&a>m?(w=Math.sqrt(1+a-u-m)*2,t[3]=(f-_)/w,t[0]=.25*w,t[1]=(l+d)/w,t[2]=(g+h)/w):u>m?(w=Math.sqrt(1+u-a-m)*2,t[3]=(g-h)/w,t[0]=(l+d)/w,t[1]=.25*w,t[2]=(f+_)/w):(w=Math.sqrt(1+m-a-u)*2,t[3]=(l-d)/w,t[0]=(g+h)/w,t[1]=(f+_)/w,t[2]=.25*w),t}}();function _f(r,t,e,i){let n=t[0],s=t[1],o=t[2],a=t[3],l=n+n,h=s+s,d=o+o,u=n*l,f=n*h,g=n*d,_=s*h,m=s*d,y=o*d,w=a*l,A=a*h,S=a*d,E=i[0],k=i[1],P=i[2];return r[0]=(1-(_+y))*E,r[1]=(f+S)*E,r[2]=(g-A)*E,r[3]=0,r[4]=(f-S)*k,r[5]=(1-(u+y))*k,r[6]=(m+w)*k,r[7]=0,r[8]=(g+A)*P,r[9]=(m-w)*P,r[10]=(1-(u+_))*P,r[11]=0,r[12]=e[0],r[13]=e[1],r[14]=e[2],r[15]=1,r}function vf(r,t){let e=t[0],i=t[1],n=t[2],s=t[3],o=e+e,a=i+i,l=n+n,h=e*o,d=i*o,u=i*a,f=n*o,g=n*a,_=n*l,m=s*o,y=s*a,w=s*l;return r[0]=1-u-_,r[1]=d+w,r[2]=f-y,r[3]=0,r[4]=d-w,r[5]=1-h-_,r[6]=g+m,r[7]=0,r[8]=f+y,r[9]=g-m,r[10]=1-h-u,r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r}function yf(r,t,e,i,n){let s=1/Math.tan(t/2),o=1/(i-n);return r[0]=s/e,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=s,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=(n+i)*o,r[11]=-1,r[12]=0,r[13]=0,r[14]=2*n*i*o,r[15]=0,r}function bf(r,t,e,i,n,s,o){let a=1/(t-e),l=1/(i-n),h=1/(s-o);return r[0]=-2*a,r[1]=0,r[2]=0,r[3]=0,r[4]=0,r[5]=-2*l,r[6]=0,r[7]=0,r[8]=0,r[9]=0,r[10]=2*h,r[11]=0,r[12]=(t+e)*a,r[13]=(n+i)*l,r[14]=(o+s)*h,r[15]=1,r}function wf(r,t,e,i){let n=t[0],s=t[1],o=t[2],a=i[0],l=i[1],h=i[2],d=n-e[0],u=s-e[1],f=o-e[2],g=d*d+u*u+f*f;g===0?f=1:(g=1/Math.sqrt(g),d*=g,u*=g,f*=g);let _=l*f-h*u,m=h*d-a*f,y=a*u-l*d;return g=_*_+m*m+y*y,g===0&&(h?a+=1e-6:l?h+=1e-6:l+=1e-6,_=l*f-h*u,m=h*d-a*f,y=a*u-l*d,g=_*_+m*m+y*y),g=1/Math.sqrt(g),_*=g,m*=g,y*=g,r[0]=_,r[1]=m,r[2]=y,r[3]=0,r[4]=u*y-f*m,r[5]=f*_-d*y,r[6]=d*m-u*_,r[7]=0,r[8]=d,r[9]=u,r[10]=f,r[11]=0,r[12]=n,r[13]=s,r[14]=o,r[15]=1,r}class ss extends Array{constructor(t=1,e=0,i=0,n=0,s=0,o=1,a=0,l=0,h=0,d=0,u=1,f=0,g=0,_=0,m=0,y=1){return super(t,e,i,n,s,o,a,l,h,d,u,f,g,_,m,y),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(t){this[12]=t}set y(t){this[13]=t}set z(t){this[14]=t}set w(t){this[15]=t}set(t,e,i,n,s,o,a,l,h,d,u,f,g,_,m,y){return t.length?this.copy(t):(af(this,t,e,i,n,s,o,a,l,h,d,u,f,g,_,m,y),this)}translate(t,e=this){return df(this,e,t),this}rotate(t,e,i=this){return ff(this,i,t,e),this}scale(t,e=this){return uf(this,e,typeof t=="number"?[t,t,t]:t),this}multiply(t,e){return e?Qa(this,t,e):Qa(this,this,t),this}identity(){return lf(this),this}copy(t){return of(this,t),this}fromPerspective({fov:t,aspect:e,near:i,far:n}={}){return yf(this,t,e,i,n),this}fromOrthogonal({left:t,right:e,bottom:i,top:n,near:s,far:o}){return bf(this,t,e,i,n,s,o),this}fromQuaternion(t){return vf(this,t),this}setPosition(t){return this.x=t[0],this.y=t[1],this.z=t[2],this}inverse(t=this){return hf(this,t),this}compose(t,e,i){return _f(this,t,e,i),this}getRotation(t){return mf(t,this),this}getTranslation(t){return gf(t,this),this}getScaling(t){return Kh(t,this),this}getMaxScaleOnAxis(){return pf(this)}lookAt(t,e,i){return wf(this,t,e,i),this}determinant(){return cf(this)}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this[3]=t[e+3],this[4]=t[e+4],this[5]=t[e+5],this[6]=t[e+6],this[7]=t[e+7],this[8]=t[e+8],this[9]=t[e+9],this[10]=t[e+10],this[11]=t[e+11],this[12]=t[e+12],this[13]=t[e+13],this[14]=t[e+14],this[15]=t[e+15],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t[e+3]=this[3],t[e+4]=this[4],t[e+5]=this[5],t[e+6]=this[6],t[e+7]=this[7],t[e+8]=this[8],t[e+9]=this[9],t[e+10]=this[10],t[e+11]=this[11],t[e+12]=this[12],t[e+13]=this[13],t[e+14]=this[14],t[e+15]=this[15],t}}function xf(r,t,e="YXZ"){return e==="XYZ"?(r[1]=Math.asin(Math.min(Math.max(t[8],-1),1)),Math.abs(t[8])<.99999?(r[0]=Math.atan2(-t[9],t[10]),r[2]=Math.atan2(-t[4],t[0])):(r[0]=Math.atan2(t[6],t[5]),r[2]=0)):e==="YXZ"?(r[0]=Math.asin(-Math.min(Math.max(t[9],-1),1)),Math.abs(t[9])<.99999?(r[1]=Math.atan2(t[8],t[10]),r[2]=Math.atan2(t[1],t[5])):(r[1]=Math.atan2(-t[2],t[0]),r[2]=0)):e==="ZXY"?(r[0]=Math.asin(Math.min(Math.max(t[6],-1),1)),Math.abs(t[6])<.99999?(r[1]=Math.atan2(-t[2],t[10]),r[2]=Math.atan2(-t[4],t[5])):(r[1]=0,r[2]=Math.atan2(t[1],t[0]))):e==="ZYX"?(r[1]=Math.asin(-Math.min(Math.max(t[2],-1),1)),Math.abs(t[2])<.99999?(r[0]=Math.atan2(t[6],t[10]),r[2]=Math.atan2(t[1],t[0])):(r[0]=0,r[2]=Math.atan2(-t[4],t[5]))):e==="YZX"?(r[2]=Math.asin(Math.min(Math.max(t[1],-1),1)),Math.abs(t[1])<.99999?(r[0]=Math.atan2(-t[9],t[5]),r[1]=Math.atan2(-t[2],t[0])):(r[0]=0,r[1]=Math.atan2(t[8],t[10]))):e==="XZY"&&(r[2]=Math.asin(-Math.min(Math.max(t[4],-1),1)),Math.abs(t[4])<.99999?(r[0]=Math.atan2(t[6],t[5]),r[1]=Math.atan2(t[8],t[0])):(r[0]=Math.atan2(-t[9],t[10]),r[1]=0)),r}const Ja=new ss;class Sf extends Array{constructor(t=0,e=t,i=t,n="YXZ"){return super(t,e,i),this.order=n,this.onChange=()=>{},this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this[0]=t,this.onChange()}set y(t){this[1]=t,this.onChange()}set z(t){this[2]=t,this.onChange()}set(t,e=t,i=t){return t.length?this.copy(t):(this[0]=t,this[1]=e,this[2]=i,this.onChange(),this)}copy(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this.onChange(),this}reorder(t){return this.order=t,this.onChange(),this}fromRotationMatrix(t,e=this.order){return xf(this,t,e),this}fromQuaternion(t,e=this.order){return Ja.fromQuaternion(t),this.fromRotationMatrix(Ja,e)}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t}}class Ef{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new ss,this.worldMatrix=new ss,this.matrixAutoUpdate=!0,this.position=new ri,this.quaternion=new nf,this.scale=new ri(1),this.rotation=new Sf,this.up=new ri(0,1,0),this.rotation.onChange=()=>this.quaternion.fromEuler(this.rotation),this.quaternion.onChange=()=>this.rotation.fromQuaternion(this.quaternion)}setParent(t,e=!0){this.parent&&t!==this.parent&&this.parent.removeChild(this,!1),this.parent=t,e&&t&&t.addChild(this,!1)}addChild(t,e=!0){~this.children.indexOf(t)||this.children.push(t),e&&t.setParent(this,!1)}removeChild(t,e=!0){~this.children.indexOf(t)&&this.children.splice(this.children.indexOf(t),1),e&&t.setParent(null,!1)}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||t)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,t=!0);for(let e=0,i=this.children.length;e<i;e++)this.children[e].updateMatrixWorld(t)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(t){if(!t(this))for(let e=0,i=this.children.length;e<i;e++)this.children[e].traverse(t)}decompose(){this.matrix.getTranslation(this.position),this.matrix.getRotation(this.quaternion),this.matrix.getScaling(this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(t,e=!1){e?this.matrix.lookAt(this.position,t,this.up):this.matrix.lookAt(t,this.position,this.up),this.matrix.getRotation(this.quaternion),this.rotation.fromQuaternion(this.quaternion)}}function Tf(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[4],r[4]=t[5],r[5]=t[6],r[6]=t[8],r[7]=t[9],r[8]=t[10],r}function Af(r,t){let e=t[0],i=t[1],n=t[2],s=t[3],o=e+e,a=i+i,l=n+n,h=e*o,d=i*o,u=i*a,f=n*o,g=n*a,_=n*l,m=s*o,y=s*a,w=s*l;return r[0]=1-u-_,r[3]=d-w,r[6]=f+y,r[1]=d+w,r[4]=1-h-_,r[7]=g-m,r[2]=f-y,r[5]=g+m,r[8]=1-h-u,r}function Cf(r,t){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r}function kf(r,t,e,i,n,s,o,a,l,h){return r[0]=t,r[1]=e,r[2]=i,r[3]=n,r[4]=s,r[5]=o,r[6]=a,r[7]=l,r[8]=h,r}function Mf(r){return r[0]=1,r[1]=0,r[2]=0,r[3]=0,r[4]=1,r[5]=0,r[6]=0,r[7]=0,r[8]=1,r}function Pf(r,t){let e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],d=t[8],u=d*o-a*h,f=-d*s+a*l,g=h*s-o*l,_=e*u+i*f+n*g;return _?(_=1/_,r[0]=u*_,r[1]=(-d*i+n*h)*_,r[2]=(a*i-n*o)*_,r[3]=f*_,r[4]=(d*e-n*l)*_,r[5]=(-a*e+n*s)*_,r[6]=g*_,r[7]=(-h*e+i*l)*_,r[8]=(o*e-i*s)*_,r):null}function tl(r,t,e){let i=t[0],n=t[1],s=t[2],o=t[3],a=t[4],l=t[5],h=t[6],d=t[7],u=t[8],f=e[0],g=e[1],_=e[2],m=e[3],y=e[4],w=e[5],A=e[6],S=e[7],E=e[8];return r[0]=f*i+g*o+_*h,r[1]=f*n+g*a+_*d,r[2]=f*s+g*l+_*u,r[3]=m*i+y*o+w*h,r[4]=m*n+y*a+w*d,r[5]=m*s+y*l+w*u,r[6]=A*i+S*o+E*h,r[7]=A*n+S*a+E*d,r[8]=A*s+S*l+E*u,r}function Of(r,t,e){let i=t[0],n=t[1],s=t[2],o=t[3],a=t[4],l=t[5],h=t[6],d=t[7],u=t[8],f=e[0],g=e[1];return r[0]=i,r[1]=n,r[2]=s,r[3]=o,r[4]=a,r[5]=l,r[6]=f*i+g*o+h,r[7]=f*n+g*a+d,r[8]=f*s+g*l+u,r}function Df(r,t,e){let i=t[0],n=t[1],s=t[2],o=t[3],a=t[4],l=t[5],h=t[6],d=t[7],u=t[8],f=Math.sin(e),g=Math.cos(e);return r[0]=g*i+f*o,r[1]=g*n+f*a,r[2]=g*s+f*l,r[3]=g*o-f*i,r[4]=g*a-f*n,r[5]=g*l-f*s,r[6]=h,r[7]=d,r[8]=u,r}function Rf(r,t,e){let i=e[0],n=e[1];return r[0]=i*t[0],r[1]=i*t[1],r[2]=i*t[2],r[3]=n*t[3],r[4]=n*t[4],r[5]=n*t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r}function zf(r,t){let e=t[0],i=t[1],n=t[2],s=t[3],o=t[4],a=t[5],l=t[6],h=t[7],d=t[8],u=t[9],f=t[10],g=t[11],_=t[12],m=t[13],y=t[14],w=t[15],A=e*a-i*o,S=e*l-n*o,E=e*h-s*o,k=i*l-n*a,P=i*h-s*a,D=n*h-s*l,L=d*m-u*_,M=d*y-f*_,N=d*w-g*_,F=u*y-f*m,H=u*w-g*m,Q=f*w-g*y,B=A*Q-S*H+E*F+k*N-P*M+D*L;return B?(B=1/B,r[0]=(a*Q-l*H+h*F)*B,r[1]=(l*N-o*Q-h*M)*B,r[2]=(o*H-a*N+h*L)*B,r[3]=(n*H-i*Q-s*F)*B,r[4]=(e*Q-n*N+s*M)*B,r[5]=(i*N-e*H-s*L)*B,r[6]=(m*D-y*P+w*k)*B,r[7]=(y*E-_*D-w*S)*B,r[8]=(_*P-m*E+w*A)*B,r):null}class Lf extends Array{constructor(t=1,e=0,i=0,n=0,s=1,o=0,a=0,l=0,h=1){return super(t,e,i,n,s,o,a,l,h),this}set(t,e,i,n,s,o,a,l,h){return t.length?this.copy(t):(kf(this,t,e,i,n,s,o,a,l,h),this)}translate(t,e=this){return Of(this,e,t),this}rotate(t,e=this){return Df(this,e,t),this}scale(t,e=this){return Rf(this,e,t),this}multiply(t,e){return e?tl(this,t,e):tl(this,this,t),this}identity(){return Mf(this),this}copy(t){return Cf(this,t),this}fromMatrix4(t){return Tf(this,t),this}fromQuaternion(t){return Af(this,t),this}fromBasis(t,e,i){return this.set(t[0],t[1],t[2],e[0],e[1],e[2],i[0],i[1],i[2]),this}inverse(t=this){return Pf(this,t),this}getNormalMatrix(t){return zf(this,t),this}}let $f=0;class ta extends Ef{constructor(t,{geometry:e,program:i,mode:n=t.TRIANGLES,frustumCulled:s=!0,renderOrder:o=0}={}){super(),t.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=t,this.id=$f++,this.geometry=e,this.program=i,this.mode=n,this.frustumCulled=s,this.renderOrder=o,this.modelViewMatrix=new ss,this.normalMatrix=new Lf,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(t){return this.beforeRenderCallbacks.push(t),this}onAfterRender(t){return this.afterRenderCallbacks.push(t),this}draw({camera:t}={}){this.beforeRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:t})),t&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=t.projectionMatrix,this.program.uniforms.cameraPosition.value=t.worldPosition,this.program.uniforms.viewMatrix.value=t.viewMatrix,this.modelViewMatrix.multiply(t.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix);let e=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:e}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(i=>i&&i({mesh:this,camera:t}))}}const el=new Uint8Array(4);function il(r){return(r&r-1)===0}let If=1;class xr{constructor(t,{image:e,target:i=t.TEXTURE_2D,type:n=t.UNSIGNED_BYTE,format:s=t.RGBA,internalFormat:o=s,wrapS:a=t.CLAMP_TO_EDGE,wrapT:l=t.CLAMP_TO_EDGE,generateMipmaps:h=!0,minFilter:d=h?t.NEAREST_MIPMAP_LINEAR:t.LINEAR,magFilter:u=t.LINEAR,premultiplyAlpha:f=!1,unpackAlignment:g=4,flipY:_=i==t.TEXTURE_2D,anisotropy:m=0,level:y=0,width:w,height:A=w}={}){this.gl=t,this.id=If++,this.image=e,this.target=i,this.type=n,this.format=s,this.internalFormat=o,this.minFilter=d,this.magFilter=u,this.wrapS=a,this.wrapT=l,this.generateMipmaps=h,this.premultiplyAlpha=f,this.unpackAlignment=g,this.flipY=_,this.anisotropy=Math.min(m,this.gl.renderer.parameters.maxAnisotropy),this.level=y,this.width=w,this.height=A,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(t=0){const e=!(this.image===this.store.image&&!this.needsUpdate);if((e||this.glState.textureUnits[t]!==this.id)&&(this.gl.renderer.activeTexture(t),this.bind()),!!e){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,this.level,this.internalFormat,this.format,this.type,this.image[i]);else if(ArrayBuffer.isView(this.image))this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let i=0;i<this.image.length;i++)this.gl.compressedTexImage2D(this.target,i,this.internalFormat,this.image[i].width,this.image[i].height,0,this.image[i].data);else this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!il(this.image.width)||!il(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let i=0;i<6;i++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,el);else this.width?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,el);this.store.image=this.image}}}class os{constructor(t,{width:e=t.canvas.width,height:i=t.canvas.height,target:n=t.FRAMEBUFFER,color:s=1,depth:o=!0,stencil:a=!1,depthTexture:l=!1,wrapS:h=t.CLAMP_TO_EDGE,wrapT:d=t.CLAMP_TO_EDGE,minFilter:u=t.LINEAR,magFilter:f=u,type:g=t.UNSIGNED_BYTE,format:_=t.RGBA,internalFormat:m=_,unpackAlignment:y,premultiplyAlpha:w}={}){this.gl=t,this.width=e,this.height=i,this.depth=o,this.buffer=this.gl.createFramebuffer(),this.target=n,this.gl.bindFramebuffer(this.target,this.buffer),this.textures=[];const A=[];for(let S=0;S<s;S++)this.textures.push(new xr(t,{width:e,height:i,wrapS:h,wrapT:d,minFilter:u,magFilter:f,type:g,format:_,internalFormat:m,unpackAlignment:y,premultiplyAlpha:w,flipY:!1,generateMipmaps:!1})),this.textures[S].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+S,this.gl.TEXTURE_2D,this.textures[S].texture,0),A.push(this.gl.COLOR_ATTACHMENT0+S);A.length>1&&this.gl.renderer.drawBuffers(A),this.texture=this.textures[0],l&&(this.gl.renderer.isWebgl2||this.gl.renderer.getExtension("WEBGL_depth_texture"))?(this.depthTexture=new xr(t,{width:e,height:i,minFilter:this.gl.NEAREST,magFilter:this.gl.NEAREST,format:this.gl.DEPTH_COMPONENT,internalFormat:t.renderer.isWebgl2?this.gl.DEPTH_COMPONENT16:this.gl.DEPTH_COMPONENT,type:this.gl.UNSIGNED_INT}),this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(o&&!a&&(this.depthBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,e,i),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,this.depthBuffer)),a&&!o&&(this.stencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,e,i),this.gl.framebufferRenderbuffer(this.target,this.gl.STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.stencilBuffer)),o&&a&&(this.depthStencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,e,i),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.depthStencilBuffer))),this.gl.bindFramebuffer(this.target,null)}setSize(t,e){if(!(this.width===t&&this.height===e)){this.width=t,this.height=e,this.gl.bindFramebuffer(this.target,this.buffer);for(let i=0;i<this.textures.length;i++)this.textures[i].width=t,this.textures[i].height=e,this.textures[i].needsUpdate=!0,this.textures[i].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+i,this.gl.TEXTURE_2D,this.textures[i].texture,0);this.depthTexture?(this.depthTexture.width=t,this.depthTexture.height=e,this.depthTexture.needsUpdate=!0,this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(this.depthBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,t,e)),this.stencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,t,e)),this.depthStencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,t,e))),this.gl.bindFramebuffer(this.target,null)}}}function Nf(r,t){return r[0]=t[0],r[1]=t[1],r}function Ff(r,t,e){return r[0]=t,r[1]=e,r}function rl(r,t,e){return r[0]=t[0]+e[0],r[1]=t[1]+e[1],r}function nl(r,t,e){return r[0]=t[0]-e[0],r[1]=t[1]-e[1],r}function Bf(r,t,e){return r[0]=t[0]*e[0],r[1]=t[1]*e[1],r}function Hf(r,t,e){return r[0]=t[0]/e[0],r[1]=t[1]/e[1],r}function Bs(r,t,e){return r[0]=t[0]*e,r[1]=t[1]*e,r}function Uf(r,t){var e=t[0]-r[0],i=t[1]-r[1];return Math.sqrt(e*e+i*i)}function Xf(r,t){var e=t[0]-r[0],i=t[1]-r[1];return e*e+i*i}function sl(r){var t=r[0],e=r[1];return Math.sqrt(t*t+e*e)}function qf(r){var t=r[0],e=r[1];return t*t+e*e}function Yf(r,t){return r[0]=-t[0],r[1]=-t[1],r}function Vf(r,t){return r[0]=1/t[0],r[1]=1/t[1],r}function jf(r,t){var e=t[0],i=t[1],n=e*e+i*i;return n>0&&(n=1/Math.sqrt(n)),r[0]=t[0]*n,r[1]=t[1]*n,r}function Wf(r,t){return r[0]*t[0]+r[1]*t[1]}function ol(r,t){return r[0]*t[1]-r[1]*t[0]}function Gf(r,t,e,i){var n=t[0],s=t[1];return r[0]=n+i*(e[0]-n),r[1]=s+i*(e[1]-s),r}function Zf(r,t,e){var i=t[0],n=t[1];return r[0]=e[0]*i+e[3]*n+e[6],r[1]=e[1]*i+e[4]*n+e[7],r}function Kf(r,t,e){let i=t[0],n=t[1];return r[0]=e[0]*i+e[4]*n+e[12],r[1]=e[1]*i+e[5]*n+e[13],r}function Qf(r,t){return r[0]===t[0]&&r[1]===t[1]}class zi extends Array{constructor(t=0,e=t){return super(t,e),this}get x(){return this[0]}get y(){return this[1]}set x(t){this[0]=t}set y(t){this[1]=t}set(t,e=t){return t.length?this.copy(t):(Ff(this,t,e),this)}copy(t){return Nf(this,t),this}add(t,e){return e?rl(this,t,e):rl(this,this,t),this}sub(t,e){return e?nl(this,t,e):nl(this,this,t),this}multiply(t){return t.length?Bf(this,this,t):Bs(this,this,t),this}divide(t){return t.length?Hf(this,this,t):Bs(this,this,1/t),this}inverse(t=this){return Vf(this,t),this}len(){return sl(this)}distance(t){return t?Uf(this,t):sl(this)}squaredLen(){return this.squaredDistance()}squaredDistance(t){return t?Xf(this,t):qf(this)}negate(t=this){return Yf(this,t),this}cross(t,e){return e?ol(t,e):ol(this,t)}scale(t){return Bs(this,this,t),this}normalize(){return jf(this,this),this}dot(t){return Wf(this,t)}equals(t){return Qf(this,t)}applyMatrix3(t){return Zf(this,this,t),this}applyMatrix4(t){return Kf(this,this,t),this}lerp(t,e){return Gf(this,this,t,e),this}clone(){return new zi(this[0],this[1])}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t}}class al extends Array{constructor(t=0,e=t,i=t,n=t){return super(t,e,i,n),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(t){this[0]=t}set y(t){this[1]=t}set z(t){this[2]=t}set w(t){this[3]=t}set(t,e,i,n){return t.length?this.copy(t):(Gh(this,t,e,i,n),this)}copy(t){return Wh(this,t),this}normalize(){return Zh(this,this),this}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this[3]=t[e+3],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t[e+3]=this[3],t}}class Qh extends jh{constructor(t,{attributes:e={}}={}){Object.assign(e,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(t,e)}}class Jf{constructor(t,{width:e,height:i,dpr:n,wrapS:s=t.CLAMP_TO_EDGE,wrapT:o=t.CLAMP_TO_EDGE,minFilter:a=t.LINEAR,magFilter:l=t.LINEAR,geometry:h=new Qh(t),targetOnly:d=null}={}){this.gl=t,this.options={wrapS:s,wrapT:o,minFilter:a,magFilter:l},this.passes=[],this.geometry=h,this.uniform={value:null},this.targetOnly=d;const u=this.fbo={read:null,write:null,swap:()=>{let f=u.read;u.read=u.write,u.write=f}};this.resize({width:e,height:i,dpr:n})}addPass({vertex:t=tg,fragment:e=eg,uniforms:i={},textureUniform:n="tMap",enabled:s=!0}={}){i[n]={value:this.fbo.read.texture};const o=new Jo(this.gl,{vertex:t,fragment:e,uniforms:i}),l={mesh:new ta(this.gl,{geometry:this.geometry,program:o}),program:o,uniforms:i,enabled:s,textureUniform:n};return this.passes.push(l),l}resize({width:t,height:e,dpr:i}={}){i&&(this.dpr=i),t&&(this.width=t,this.height=e||t),i=this.dpr||this.gl.renderer.dpr,t=Math.floor((this.width||this.gl.renderer.width)*i),e=Math.floor((this.height||this.gl.renderer.height)*i),this.options.width=t,this.options.height=e,this.fbo.read=new os(this.gl,this.options),this.fbo.write=new os(this.gl,this.options)}render({scene:t,camera:e,texture:i,target:n=null,update:s=!0,sort:o=!0,frustumCull:a=!0}){const l=this.passes.filter(h=>h.enabled);i||(this.gl.renderer.render({scene:t,camera:e,target:l.length||!n&&this.targetOnly?this.fbo.write:n,update:s,sort:o,frustumCull:a}),this.fbo.swap()),l.forEach((h,d)=>{h.mesh.program.uniforms[h.textureUniform].value=!d&&i?i:this.fbo.read.texture,this.gl.renderer.render({scene:h.mesh,target:d===l.length-1&&(n||!this.targetOnly)?n:this.fbo.write,clear:!0}),this.fbo.swap()}),this.uniform.value=this.fbo.read.texture}}const tg=`
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`,eg=`
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`;class ig{constructor(t,{size:e=128,falloff:i=.3,alpha:n=1,dissipation:s=.98,type:o}={}){const a=this;this.gl=t,this.uniform={value:null},this.mask={read:null,write:null,swap:()=>{let d=a.mask.read;a.mask.read=a.mask.write,a.mask.write=d,a.uniform.value=a.mask.read.texture}},l(),this.aspect=1,this.mouse=new zi,this.velocity=new zi,this.mesh=h();function l(){o||(o=t.HALF_FLOAT||t.renderer.extensions.OES_texture_half_float.HALF_FLOAT_OES);let d=(()=>t.renderer.isWebgl2||t.renderer.extensions[`OES_texture_${o===t.FLOAT?"":"half_"}float_linear`]?t.LINEAR:t.NEAREST)();const u={width:e,height:e,type:o,format:t.RGBA,internalFormat:t.renderer.isWebgl2?o===t.FLOAT?t.RGBA32F:t.RGBA16F:t.RGBA,minFilter:d,depth:!1};a.mask.read=new os(t,u),a.mask.write=new os(t,u),a.mask.swap()}function h(){return new ta(t,{geometry:new Qh(t),program:new Jo(t,{vertex:rg,fragment:ng,uniforms:{tMap:a.uniform,uFalloff:{value:i*.5},uAlpha:{value:n},uDissipation:{value:s},uAspect:{value:1},uMouse:{value:a.mouse},uVelocity:{value:a.velocity}},depthTest:!1})})}}update(){this.mesh.program.uniforms.uAspect.value=this.aspect,this.gl.renderer.render({scene:this.mesh,target:this.mask.write,clear:!1}),this.mask.swap()}}const rg=`
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`,ng=`
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
`;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vn=window,ea=Vn.ShadowRoot&&(Vn.ShadyCSS===void 0||Vn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ia=Symbol(),ll=new WeakMap;class Jh{constructor(t,e,i){if(this._$cssResult$=!0,i!==ia)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ea&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ll.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ll.set(e,t))}return t}toString(){return this.cssText}}const sg=r=>new Jh(typeof r=="string"?r:r+"",void 0,ia),si=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,n,s)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+r[s+1],r[0]);return new Jh(e,r,ia)},og=(r,t)=>{ea?r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=Vn.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,r.appendChild(i)})},hl=ea?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return sg(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Hs;const as=window,cl=as.trustedTypes,ag=cl?cl.emptyScript:"",dl=as.reactiveElementPolyfillSupport,xo={toAttribute(r,t){switch(t){case Boolean:r=r?ag:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},tc=(r,t)=>t!==r&&(t==t||r==r),Us={attribute:!0,type:String,converter:xo,reflect:!1,hasChanged:tc};class _r extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;(e=this.h)!==null&&e!==void 0||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=Us){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||Us}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(hl(n))}else t!==void 0&&e.push(hl(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return og(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=Us){var n;const s=this.constructor._$Ep(t,i);if(s!==void 0&&i.reflect===!0){const o=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:xo).toAttribute(e,i.type);this._$El=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(s!==void 0&&this._$El!==s){const o=n.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:xo;this._$El=s,this[s]=a.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||tc)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,s)=>this[s]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdate)===null||s===void 0?void 0:s.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}_r.finalized=!0,_r.elementProperties=new Map,_r.elementStyles=[],_r.shadowRootOptions={mode:"open"},dl?.({ReactiveElement:_r}),((Hs=as.reactiveElementVersions)!==null&&Hs!==void 0?Hs:as.reactiveElementVersions=[]).push("1.4.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xs;const ls=window,Nr=ls.trustedTypes,ul=Nr?Nr.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ci=`lit$${(Math.random()+"").slice(9)}$`,ec="?"+Ci,lg=`<${ec}>`,Fr=document,hs=(r="")=>Fr.createComment(r),bn=r=>r===null||typeof r!="object"&&typeof r!="function",ic=Array.isArray,hg=r=>ic(r)||typeof r?.[Symbol.iterator]=="function",Wr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fl=/-->/g,gl=/>/g,Vi=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pl=/'/g,ml=/"/g,rc=/^(?:script|style|textarea|title)$/i,wn=Symbol.for("lit-noChange"),ie=Symbol.for("lit-nothing"),_l=new WeakMap,Mr=Fr.createTreeWalker(Fr,129,null,!1),cg=(r,t)=>{const e=r.length-1,i=[];let n,s=t===2?"<svg>":"",o=Wr;for(let l=0;l<e;l++){const h=r[l];let d,u,f=-1,g=0;for(;g<h.length&&(o.lastIndex=g,u=o.exec(h),u!==null);)g=o.lastIndex,o===Wr?u[1]==="!--"?o=fl:u[1]!==void 0?o=gl:u[2]!==void 0?(rc.test(u[2])&&(n=RegExp("</"+u[2],"g")),o=Vi):u[3]!==void 0&&(o=Vi):o===Vi?u[0]===">"?(o=n??Wr,f=-1):u[1]===void 0?f=-2:(f=o.lastIndex-u[2].length,d=u[1],o=u[3]===void 0?Vi:u[3]==='"'?ml:pl):o===ml||o===pl?o=Vi:o===fl||o===gl?o=Wr:(o=Vi,n=void 0);const _=o===Vi&&r[l+1].startsWith("/>")?" ":"";s+=o===Wr?h+lg:f>=0?(i.push(d),h.slice(0,f)+"$lit$"+h.slice(f)+Ci+_):h+Ci+(f===-2?(i.push(void 0),l):_)}const a=s+(r[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return[ul!==void 0?ul.createHTML(a):a,i]};class xn{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const a=t.length-1,l=this.parts,[h,d]=cg(t,e);if(this.el=xn.createElement(h,i),Mr.currentNode=this.el.content,e===2){const u=this.el.content,f=u.firstChild;f.remove(),u.append(...f.childNodes)}for(;(n=Mr.nextNode())!==null&&l.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const u=[];for(const f of n.getAttributeNames())if(f.endsWith("$lit$")||f.startsWith(Ci)){const g=d[o++];if(u.push(f),g!==void 0){const _=n.getAttribute(g.toLowerCase()+"$lit$").split(Ci),m=/([.?@])?(.*)/.exec(g);l.push({type:1,index:s,name:m[2],strings:_,ctor:m[1]==="."?ug:m[1]==="?"?gg:m[1]==="@"?pg:_s})}else l.push({type:6,index:s})}for(const f of u)n.removeAttribute(f)}if(rc.test(n.tagName)){const u=n.textContent.split(Ci),f=u.length-1;if(f>0){n.textContent=Nr?Nr.emptyScript:"";for(let g=0;g<f;g++)n.append(u[g],hs()),Mr.nextNode(),l.push({type:2,index:++s});n.append(u[f],hs())}}}else if(n.nodeType===8)if(n.data===ec)l.push({type:2,index:s});else{let u=-1;for(;(u=n.data.indexOf(Ci,u+1))!==-1;)l.push({type:7,index:s}),u+=Ci.length-1}s++}}static createElement(t,e){const i=Fr.createElement("template");return i.innerHTML=t,i}}function Br(r,t,e=r,i){var n,s,o,a;if(t===wn)return t;let l=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const h=bn(t)?void 0:t._$litDirective$;return l?.constructor!==h&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),h===void 0?l=void 0:(l=new h(r),l._$AT(r,e,i)),i!==void 0?((o=(a=e)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=l:e._$Cl=l),l!==void 0&&(t=Br(r,l._$AS(r,t.values),l,i)),t}class dg{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:n}=this._$AD,s=((e=t?.creationScope)!==null&&e!==void 0?e:Fr).importNode(i,!0);Mr.currentNode=s;let o=Mr.nextNode(),a=0,l=0,h=n[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new ms(o,o.nextSibling,this,t):h.type===1?d=new h.ctor(o,h.name,h.strings,this,t):h.type===6&&(d=new mg(o,this,t)),this.u.push(d),h=n[++l]}a!==h?.index&&(o=Mr.nextNode(),a++)}return s}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class ms{constructor(t,e,i,n){var s;this.type=2,this._$AH=ie,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cm=(s=n?.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Br(this,t,e),bn(t)?t===ie||t==null||t===""?(this._$AH!==ie&&this._$AR(),this._$AH=ie):t!==this._$AH&&t!==wn&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):hg(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==ie&&bn(this._$AH)?this._$AA.nextSibling.data=t:this.T(Fr.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:n}=t,s=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=xn.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.p(i);else{const o=new dg(s,this),a=o.v(this.options);o.p(i),this.T(a),this._$AH=o}}_$AC(t){let e=_l.get(t.strings);return e===void 0&&_l.set(t.strings,e=new xn(t)),e}k(t){ic(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new ms(this.O(hs()),this.O(hs()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class _s{constructor(t,e,i,n,s){this.type=1,this._$AH=ie,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=ie}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(s===void 0)t=Br(this,t,e,0),o=!bn(t)||t!==this._$AH&&t!==wn,o&&(this._$AH=t);else{const a=t;let l,h;for(t=s[0],l=0;l<s.length-1;l++)h=Br(this,a[i+l],e,l),h===wn&&(h=this._$AH[l]),o||(o=!bn(h)||h!==this._$AH[l]),h===ie?t=ie:t!==ie&&(t+=(h??"")+s[l+1]),this._$AH[l]=h}o&&!n&&this.j(t)}j(t){t===ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ug extends _s{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===ie?void 0:t}}const fg=Nr?Nr.emptyScript:"";class gg extends _s{constructor(){super(...arguments),this.type=4}j(t){t&&t!==ie?this.element.setAttribute(this.name,fg):this.element.removeAttribute(this.name)}}class pg extends _s{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=(i=Br(this,t,e,0))!==null&&i!==void 0?i:ie)===wn)return;const n=this._$AH,s=t===ie&&n!==ie||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==ie&&(n===ie||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class mg{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Br(this,t)}}const vl=ls.litHtmlPolyfillSupport;vl?.(xn,ms),((Xs=ls.litHtmlVersions)!==null&&Xs!==void 0?Xs:ls.litHtmlVersions=[]).push("2.4.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var qs,Ys;class ge extends _r{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=dc(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return uc}}ge.finalized=!0,ge._$litElement$=!0,(qs=globalThis.litElementHydrateSupport)===null||qs===void 0||qs.call(globalThis,{LitElement:ge});const yl=globalThis.litElementPolyfillSupport;yl?.({LitElement:ge});((Ys=globalThis.litElementVersions)!==null&&Ys!==void 0?Ys:globalThis.litElementVersions=[]).push("3.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je=r=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(r,t):((e,i)=>{const{kind:n,elements:s}=i;return{kind:n,elements:s,finisher(o){customElements.define(e,o)}}})(r,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _g=(r,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,r)}};function vt(r){return(t,e)=>e!==void 0?((i,n,s)=>{n.constructor.createProperty(s,i)})(r,t,e):_g(r,t)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Vs;((Vs=window.HTMLSlotElement)===null||Vs===void 0?void 0:Vs.prototype.assignedElements)!=null;var vg=Object.defineProperty,yg=Object.getOwnPropertyDescriptor,vs=(r,t,e,i)=>{for(var n=i>1?void 0:i?yg(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&vg(t,e,n),n};let Hr=class extends ge{constructor(){super(),this.theme="",this.darkImages=["/images/Hero-Paint-1-Dark.jpg","/images/Hero-Paint-2-Dark.jpg"],this.lightImages=["/images/Hero-Paint-1-Light.jpg","/images/Hero-Paint-2-Light.jpg"],window.addEventListener("appLoaded",()=>{const r=`
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
      `,i={start1:"/images/Hero-Paint-1-Dark.jpg",end1:"/images/Hero-Paint-2-Dark.jpg",start2:"/images/Hero-Paint-1-Light.jpg",end2:"/images/Hero-Paint-2-Light.jpg",width:1600,height:1080},n=this,s=new Hu({dpr:2}),o=s.gl,a=new Jf(o);n.innerHTML="",n.appendChild(o.canvas);let l=1;const h=new zi(-1),d=new zi;let u;function f(){let U,lt;const C=i.height/i.width;window.innerHeight/window.innerWidth<C?(U=1,lt=window.innerHeight/window.innerWidth/C):(U=window.innerWidth/window.innerHeight*C,lt=1),F.program.uniforms.res.value=new al(window.innerWidth,window.innerHeight,U,lt),s.setSize(window.innerWidth,window.innerHeight),l=window.innerWidth/window.innerHeight}const g=new ig(o,{size:8,falloff:.25,dissipation:.95,alpha:.68}),_=new jh(o,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),m=new xr(o,{minFilter:o.LINEAR,magFilter:o.LINEAR}),y=new xr(o,{minFilter:o.LINEAR,magFilter:o.LINEAR}),w=new xr(o,{minFilter:o.LINEAR,magFilter:o.LINEAR}),A=new xr(o,{minFilter:o.LINEAR,magFilter:o.LINEAR}),S=new Image,E=new Image,k=new Image,P=new Image;S.onload=()=>m.image=S,S.crossOrigin="Anonymous",S.src=i.start1,E.onload=()=>y.image=E,E.crossOrigin="Anonymous",E.src=i.end1,k.onload=()=>w.image=k,k.crossOrigin="Anonymous",k.src=i.start2,P.onload=()=>A.image=P,P.crossOrigin="Anonymous",P.src=i.end2;let D,L;const M=i.height/i.width;window.innerHeight/window.innerWidth<M?(D=1,L=window.innerHeight/window.innerWidth/M):(D=window.innerWidth/window.innerHeight*M,L=1);const N=new Jo(o,{vertex:r,fragment:t,uniforms:{uTime:{value:0},tPaintStart:{value:m},tPaintEnd:{value:y},res:{value:new al(window.innerWidth,window.innerHeight,D,L)},img:{value:new zi(i.height,i.width)},tFlow:g.uniform}});a.addPass({textureUniform:e,uniforms:{}});const F=new ta(o,{geometry:_,program:N});window.addEventListener("resize",f,!1),f(),"ontouchstart"in window?(window.addEventListener("touchstart",W,!1),window.addEventListener("touchmove",W,{passive:!1})):window.addEventListener("mousemove",W,!1);let Q;const B=new zi;function W(U){if(U.target.tagName.toLowerCase()==="canvas"||U.target.hasAttribute("data-scrambler")){U.preventDefault(),U.changedTouches&&U.changedTouches.length&&(U.x=U.changedTouches[0].pageX,U.y=U.changedTouches[0].pageY),U.x===void 0&&(U.x=U.pageX,U.y=U.pageY),h.set(U.x/o.renderer.width,1-U.y/o.renderer.height),Q||(Q=performance.now(),B.set(U.x,U.y));const lt=U.x-B.x,C=U.y-B.y;B.set(U.x,U.y);let Et=performance.now(),Lt=Math.max(10.4,Et-Q);Q=Et,d.x=lt/Lt,d.y=C/Lt,u=!0}}requestAnimationFrame(nt);const q=()=>{document.body.dataset.theme==="light"?(F.program.uniforms.tPaintStart.value=w,F.program.uniforms.tPaintEnd.value=A):(F.program.uniforms.tPaintStart.value=m,F.program.uniforms.tPaintEnd.value=y)};window.addEventListener("themeChange",q);function nt(U){requestAnimationFrame(nt),u||(h.set(-1),d.set(0)),u=!1,g.aspect=l,g.mouse.copy(h),g.velocity.lerp(d,d.len?.15:.1),g.update(),N.uniforms.uTime.value=U*.01,s.render({scene:F})}})}render(){return Ut`
      <slot></slot>
    `}};Hr.styles=si`
    :host {
      display: block;
      position: absolute;
    }
  `;vs([vt({type:String})],Hr.prototype,"theme",2);vs([vt({type:Array})],Hr.prototype,"darkImages",2);vs([vt({type:Array})],Hr.prototype,"lightImages",2);Hr=vs([Je("c-canvas-main")],Hr);var bg=Object.defineProperty,wg=Object.getOwnPropertyDescriptor,Ui=(r,t,e,i)=>{for(var n=i>1?void 0:i?wg(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&bg(t,e,n),n};let pi=class extends ge{constructor(){super(...arguments),this.glitch="1",this.src="",this.width="",this.height="",this.active=!1,this.aspectRatio=1,this.wrapper={}}connectedCallback(){super.connectedCallback();const r=this.hasAttribute("width"),t=this.hasAttribute("height"),e=r&&t;if(this.classList.add("c-glitch-image--style-"+this.glitch),e){const i=parseInt(this.width),n=parseInt(this.height);this.aspectRatio=i/n}this.style.setProperty("--glitch-aspect-ratio",this.aspectRatio.toString()),this.style.setProperty("--glitch-image",'url("'+this.src+'")')}render(){return Ut`

      <div
        class="c-glitch-image__inner"
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
    `}};pi.styles=si`
      :host  {
        --glitch-image-height: 100%;
        --glitch-image-width: 100%;

        align-items: center;
        display: grid;
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
  `;Ui([vt({type:String})],pi.prototype,"glitch",2);Ui([vt({type:String})],pi.prototype,"src",2);Ui([vt({type:String})],pi.prototype,"width",2);Ui([vt({type:String})],pi.prototype,"height",2);Ui([vt({type:Boolean})],pi.prototype,"active",2);Ui([vt({type:Number})],pi.prototype,"aspectRatio",2);Ui([vt({type:Object})],pi.prototype,"wrapper",2);pi=Ui([Je("c-glitch-image")],pi);var xg=Object.defineProperty,Sg=Object.getOwnPropertyDescriptor,nc=(r,t,e,i)=>{for(var n=i>1?void 0:i?Sg(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&xg(t,e,n),n};let cs=class extends ge{constructor(){super(...arguments),this.theme=document.body.dataset.theme}firstUpdated(){this._taglineSetup(),this._nameStylizedSetup(),this._transitionIn(),this.addEventListener("themeChange",this.render)}_transitionIn(){let r=Wt.timeline();const t=this.shadowRoot.querySelector(".c-hero__lower"),e=this.shadowRoot.querySelector(".c-hero__tagline");r.from(t,{height:0,minHeight:0,opacity:0,duration:1,delay:1.85,onComplete:()=>{t.style.height="",t.style.minHeight=""}}),r.from(e,{opacity:0,duration:2,delay:1.75},0),r.play()}_taglineSetup(){const r=this.querySelector("[slot=tagline]"),t=r.innerHTML.replaceAll("  ","").replaceAll(`
`,""),e=t.split("<br>"),i=e.map((s,o)=>{const a="<span data-scrambler>"+s+"</span>";return e.length-1===o?a:a+"<br>"}).join(""),n=[this.shadowRoot.querySelector(".c-hero__tagline-accent-1"),this.shadowRoot.querySelector(".c-hero__tagline-accent-2"),this.shadowRoot.querySelector(".c-hero__tagline-accent-3")];r.innerHTML=i,n.map(s=>{s.innerHTML=t})}_nameStylizedSetup(){const r=this.querySelector('[slot="name-stylized"]').innerHTML.replaceAll(" ","").replaceAll(`
`,"").split(""),t=this.shadowRoot.querySelector(".c-hero__name-stylized-inner");t.innerHTML=r.map(e=>'<div class="c-hero__name-stylized-letter">'+e+"</div>").join("")}render(){return this.theme=document.body.dataset.theme,Ut`
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
    `}};cs.styles=si`
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

      background-color: var(--color-bg);
      display: grid;
      grid-template-rows: 4fr auto 4.5rem;
      height: 100%;
      height: var(--doc-height);
      max-height: 100vh;
      min-height: 28rem;
      z-index: 2;
    }

    @media (min-width: 55em) {
      :host {
        grid-template-rows: 2.6fr auto 4.5rem;
        min-height: 30rem;
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
      font-size: clamp(1.0rem, 4.05vw, 3.5rem);
      line-height: 1.2;
      min-height: 0vw;
      max-width: 90vw;
      pointer-events: none;
      text-transform: uppercase;
      width: auto;
    }

    @media (min-height: 35em) {
      .c-hero__tagline {
        line-height: 1.25;
        margin-top: 1.5rem;
        max-width: 100vw;
        white-space: nowrap;
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
        transform: rotate(90deg) translateY(-0.7rem)
          translateX(-100%);
        transform-origin: top left;
      }

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
      min-height: calc(50vh - 2.25rem);
      overflow: hidden;
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
      filter: url('#animate');
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
      filter: url('#animate');
      font-family: var(--font-heading), sans-serif;
      font-weight: var(--font-heading-weight);
      font-size: clamp(1.3rem, 2.4vw, 2.4rem);
      grid-column-end: 3;
      grid-column-start: 1;
      justify-content: center;
      line-height: 1;
      padding: 0 3.2rem;
    }

    @media (min-width: 35em) {
      .c-hero__heading {
        padding: 0 4rem 0 4rem;
      }
    }

    @media (min-width: 55em) {
      .c-hero__heading {
        border-top: none;
        grid-column-end: 4;
        grid-column-start: 3;
        padding: 0 4rem 0 3rem;
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
        3.2rem;
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

    @media (min-width: 35em) {
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
  `;nc([vt({type:String})],cs.prototype,"theme",2);cs=nc([Je("c-hero")],cs);var Eg=Object.defineProperty,Tg=Object.getOwnPropertyDescriptor,Ag=(r,t,e,i)=>{for(var n=i>1?void 0:i?Tg(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Eg(t,e,n),n};let So=class extends ge{disable(){const r=document.querySelector("main"),t=r.classList.contains("u-transparent");document.documentElement.style.position="",t&&r.classList.remove("u-transparent"),setTimeout(()=>{this.style.opacity="0",this.style.pointerEvents="none"},2e3),setTimeout(()=>{this.style.display="none"},4e3)}render(){return Ut`
      <slot>
      </slot>
    `}};So.styles=si`

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

  `;So=Ag([Je("c-loader")],So);var Sr=window.CustomEvent;(!Sr||typeof Sr=="object")&&(Sr=function(t,e){e=e||{};var i=document.createEvent("CustomEvent");return i.initCustomEvent(t,!!e.bubbles,!!e.cancelable,e.detail||null),i},Sr.prototype=window.Event.prototype);function sc(r,t){var e="on"+t.type.toLowerCase();return typeof r[e]=="function"&&r[e](t),r.dispatchEvent(t)}function Cg(r){for(;r&&r!==document.body;){var t=window.getComputedStyle(r),e=function(i,n){return!(t[i]===void 0||t[i]===n)};if(t.opacity<1||e("zIndex","auto")||e("transform","none")||e("mixBlendMode","normal")||e("filter","none")||e("perspective","none")||t.isolation==="isolate"||t.position==="fixed"||t.webkitOverflowScrolling==="touch")return!0;r=r.parentElement}return!1}function un(r){for(;r;){if(r.localName==="dialog")return r;r.parentElement?r=r.parentElement:r.parentNode?r=r.parentNode.host:r=null}return null}function oc(r){for(;r&&r.shadowRoot&&r.shadowRoot.activeElement;)r=r.shadowRoot.activeElement;r&&r.blur&&r!==document.body&&r.blur()}function kg(r,t){for(var e=0;e<r.length;++e)if(r[e]===t)return!0;return!1}function js(r){return!r||!r.hasAttribute("method")?!1:r.getAttribute("method").toLowerCase()==="dialog"}function ac(r){var t=["button","input","keygen","select","textarea"],e=t.map(function(o){return o+":not([disabled])"});e.push('[tabindex]:not([disabled]):not([tabindex=""])');var i=r.querySelector(e.join(", "));if(!i&&"attachShadow"in Element.prototype)for(var n=r.querySelectorAll("*"),s=0;s<n.length&&!(n[s].tagName&&n[s].shadowRoot&&(i=ac(n[s].shadowRoot),i));s++);return i}function bl(r){return r.isConnected||document.body.contains(r)}function lc(r){if(r.submitter)return r.submitter;var t=r.target;if(!(t instanceof HTMLFormElement))return null;var e=mt.formSubmitter;if(!e){var i=r.target,n="getRootNode"in i&&i.getRootNode()||document;e=n.activeElement}return!e||e.form!==t?null:e}function Mg(r){if(!r.defaultPrevented){var t=r.target,e=mt.imagemapUseValue,i=lc(r);e===null&&i&&(e=i.value);var n=un(t);if(!!n){var s=i&&i.getAttribute("formmethod")||t.getAttribute("method");s==="dialog"&&(r.preventDefault(),e!=null?n.close(e):n.close())}}}function hc(r){if(this.dialog_=r,this.replacedStyleTop_=!1,this.openAsModal_=!1,r.hasAttribute("role")||r.setAttribute("role","dialog"),r.show=this.show.bind(this),r.showModal=this.showModal.bind(this),r.close=this.close.bind(this),r.addEventListener("submit",Mg,!1),"returnValue"in r||(r.returnValue=""),"MutationObserver"in window){var t=new MutationObserver(this.maybeHideModal.bind(this));t.observe(r,{attributes:!0,attributeFilter:["open"]})}else{var e=!1,i=function(){e?this.downgradeModal():this.maybeHideModal(),e=!1}.bind(this),n,s=function(o){if(o.target===r){var a="DOMNodeRemoved";e|=o.type.substr(0,a.length)===a,window.clearTimeout(n),n=window.setTimeout(i,0)}};["DOMAttrModified","DOMNodeRemoved","DOMNodeRemovedFromDocument"].forEach(function(o){r.addEventListener(o,s)})}Object.defineProperty(r,"open",{set:this.setOpen.bind(this),get:r.hasAttribute.bind(r,"open")}),this.backdrop_=document.createElement("div"),this.backdrop_.className="backdrop",this.backdrop_.addEventListener("mouseup",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("mousedown",this.backdropMouseEvent_.bind(this)),this.backdrop_.addEventListener("click",this.backdropMouseEvent_.bind(this))}hc.prototype={get dialog(){return this.dialog_},maybeHideModal:function(){this.dialog_.hasAttribute("open")&&bl(this.dialog_)||this.downgradeModal()},downgradeModal:function(){!this.openAsModal_||(this.openAsModal_=!1,this.dialog_.style.zIndex="",this.replacedStyleTop_&&(this.dialog_.style.top="",this.replacedStyleTop_=!1),this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_),mt.dm.removeDialog(this))},setOpen:function(r){r?this.dialog_.hasAttribute("open")||this.dialog_.setAttribute("open",""):(this.dialog_.removeAttribute("open"),this.maybeHideModal())},backdropMouseEvent_:function(r){if(this.dialog_.hasAttribute("tabindex"))this.dialog_.focus();else{var t=document.createElement("div");this.dialog_.insertBefore(t,this.dialog_.firstChild),t.tabIndex=-1,t.focus(),this.dialog_.removeChild(t)}var e=document.createEvent("MouseEvents");e.initMouseEvent(r.type,r.bubbles,r.cancelable,window,r.detail,r.screenX,r.screenY,r.clientX,r.clientY,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.button,r.relatedTarget),this.dialog_.dispatchEvent(e),r.stopPropagation()},focus_:function(){var r=this.dialog_.querySelector("[autofocus]:not([disabled])");!r&&this.dialog_.tabIndex>=0&&(r=this.dialog_),r||(r=ac(this.dialog_)),oc(document.activeElement),r&&r.focus()},updateZIndex:function(r,t){if(r<t)throw new Error("dialogZ should never be < backdropZ");this.dialog_.style.zIndex=r,this.backdrop_.style.zIndex=t},show:function(){this.dialog_.open||(this.setOpen(!0),this.focus_())},showModal:function(){if(this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'showModal' on dialog: The element is already open, and therefore cannot be opened modally.");if(!bl(this.dialog_))throw new Error("Failed to execute 'showModal' on dialog: The element is not in a Document.");if(!mt.dm.pushDialog(this))throw new Error("Failed to execute 'showModal' on dialog: There are too many open modal dialogs.");Cg(this.dialog_.parentElement)&&console.warn("A dialog is being shown inside a stacking context. This may cause it to be unusable. For more information, see this link: https://github.com/GoogleChrome/dialog-polyfill/#stacking-context"),this.setOpen(!0),this.openAsModal_=!0,mt.needsCentering(this.dialog_)?(mt.reposition(this.dialog_),this.replacedStyleTop_=!0):this.replacedStyleTop_=!1,this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling),this.focus_()},close:function(r){if(!this.dialog_.hasAttribute("open"))throw new Error("Failed to execute 'close' on dialog: The element does not have an 'open' attribute, and therefore cannot be closed.");this.setOpen(!1),r!==void 0&&(this.dialog_.returnValue=r);var t=new Sr("close",{bubbles:!1,cancelable:!1});sc(this.dialog_,t)}};var mt={};mt.reposition=function(r){var t=document.body.scrollTop||document.documentElement.scrollTop,e=t+(window.innerHeight-r.offsetHeight)/2;r.style.top=Math.max(t,e)+"px"};mt.isInlinePositionSetByStylesheet=function(r){for(var t=0;t<document.styleSheets.length;++t){var e=document.styleSheets[t],i=null;try{i=e.cssRules}catch{}if(!!i)for(var n=0;n<i.length;++n){var s=i[n],o=null;try{o=document.querySelectorAll(s.selectorText)}catch{}if(!(!o||!kg(o,r))){var a=s.style.getPropertyValue("top"),l=s.style.getPropertyValue("bottom");if(a&&a!=="auto"||l&&l!=="auto")return!0}}}return!1};mt.needsCentering=function(r){var t=window.getComputedStyle(r);return t.position!=="absolute"||r.style.top!=="auto"&&r.style.top!==""||r.style.bottom!=="auto"&&r.style.bottom!==""?!1:!mt.isInlinePositionSetByStylesheet(r)};mt.forceRegisterDialog=function(r){if((window.HTMLDialogElement||r.showModal)&&console.warn("This browser already supports <dialog>, the polyfill may not work correctly",r),r.localName!=="dialog")throw new Error("Failed to register dialog: The element is not a dialog.");new hc(r)};mt.registerDialog=function(r){r.showModal||mt.forceRegisterDialog(r)};mt.DialogManager=function(){this.pendingDialogStack=[];var r=this.checkDOM_.bind(this);this.overlay=document.createElement("div"),this.overlay.className="_dialog_overlay",this.overlay.addEventListener("click",function(t){this.forwardTab_=void 0,t.stopPropagation(),r([])}.bind(this)),this.handleKey_=this.handleKey_.bind(this),this.handleFocus_=this.handleFocus_.bind(this),this.zIndexLow_=1e5,this.zIndexHigh_=1e5+150,this.forwardTab_=void 0,"MutationObserver"in window&&(this.mo_=new MutationObserver(function(t){var e=[];t.forEach(function(i){for(var n=0,s;s=i.removedNodes[n];++n){if(s instanceof Element)s.localName==="dialog"&&e.push(s);else continue;e=e.concat(s.querySelectorAll("dialog"))}}),e.length&&r(e)}))};mt.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener("focus",this.handleFocus_,!0),document.addEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.observe(document,{childList:!0,subtree:!0})};mt.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener("focus",this.handleFocus_,!0),document.removeEventListener("keydown",this.handleKey_),this.mo_&&this.mo_.disconnect()};mt.DialogManager.prototype.updateStacking=function(){for(var r=this.zIndexHigh_,t=0,e;e=this.pendingDialogStack[t];++t)e.updateZIndex(--r,--r),t===0&&(this.overlay.style.zIndex=--r);var i=this.pendingDialogStack[0];if(i){var n=i.dialog.parentNode||document.body;n.appendChild(this.overlay)}else this.overlay.parentNode&&this.overlay.parentNode.removeChild(this.overlay)};mt.DialogManager.prototype.containedByTopDialog_=function(r){for(;r=un(r);){for(var t=0,e;e=this.pendingDialogStack[t];++t)if(e.dialog===r)return t===0;r=r.parentElement}return!1};mt.DialogManager.prototype.handleFocus_=function(r){var t=r.composedPath?r.composedPath()[0]:r.target;if(!this.containedByTopDialog_(t)&&document.activeElement!==document.documentElement&&(r.preventDefault(),r.stopPropagation(),oc(t),this.forwardTab_!==void 0)){var e=this.pendingDialogStack[0],i=e.dialog,n=i.compareDocumentPosition(t);return n&Node.DOCUMENT_POSITION_PRECEDING&&(this.forwardTab_?e.focus_():t!==document.documentElement&&document.documentElement.focus()),!1}};mt.DialogManager.prototype.handleKey_=function(r){if(this.forwardTab_=void 0,r.keyCode===27){r.preventDefault(),r.stopPropagation();var t=new Sr("cancel",{bubbles:!1,cancelable:!0}),e=this.pendingDialogStack[0];e&&sc(e.dialog,t)&&e.dialog.close()}else r.keyCode===9&&(this.forwardTab_=!r.shiftKey)};mt.DialogManager.prototype.checkDOM_=function(r){var t=this.pendingDialogStack.slice();t.forEach(function(e){r.indexOf(e.dialog)!==-1?e.downgradeModal():e.maybeHideModal()})};mt.DialogManager.prototype.pushDialog=function(r){var t=(this.zIndexHigh_-this.zIndexLow_)/2-1;return this.pendingDialogStack.length>=t?!1:(this.pendingDialogStack.unshift(r)===1&&this.blockDocument(),this.updateStacking(),!0)};mt.DialogManager.prototype.removeDialog=function(r){var t=this.pendingDialogStack.indexOf(r);t!==-1&&(this.pendingDialogStack.splice(t,1),this.pendingDialogStack.length===0&&this.unblockDocument(),this.updateStacking())};mt.dm=new mt.DialogManager;mt.formSubmitter=null;mt.imagemapUseValue=null;if(window.HTMLDialogElement===void 0){var wl=document.createElement("form");if(wl.setAttribute("method","dialog"),wl.method!=="dialog"){var gr=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,"method");if(gr){var Pg=gr.get;gr.get=function(){return js(this)?"dialog":Pg.call(this)};var Og=gr.set;gr.set=function(r){return typeof r=="string"&&r.toLowerCase()==="dialog"?this.setAttribute("method",r):Og.call(this,r)},Object.defineProperty(HTMLFormElement.prototype,"method",gr)}}document.addEventListener("click",function(r){if(mt.formSubmitter=null,mt.imagemapUseValue=null,!r.defaultPrevented){var t=r.target;if("composedPath"in r){var e=r.composedPath();t=e.shift()||t}if(!(!t||!js(t.form))){var i=t.type==="submit"&&["button","input"].indexOf(t.localName)>-1;if(!i){if(!(t.localName==="input"&&t.type==="image"))return;mt.imagemapUseValue=r.offsetX+","+r.offsetY}var n=un(t);!n||(mt.formSubmitter=t)}}},!1),document.addEventListener("submit",function(r){var t=r.target,e=un(t);if(!e){var i=lc(r),n=i&&i.getAttribute("formmethod")||t.getAttribute("method");n==="dialog"&&r.preventDefault()}});var Dg=HTMLFormElement.prototype.submit,Rg=function(){if(!js(this))return Dg.call(this);var r=un(this);r&&r.close()};HTMLFormElement.prototype.submit=Rg}var zg=Object.defineProperty,Lg=Object.getOwnPropertyDescriptor,cc=(r,t,e,i)=>{for(var n=i>1?void 0:i?Lg(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&zg(t,e,n),n};let ds=class extends ge{constructor(){super(...arguments),this.open=!1}firstUpdated(){this._setup(),mt.registerDialog(this._dialogEl),window.addEventListener("click",r=>{let t;r.target instanceof Element&&(t=r.target.closest("[data-modal-target="+this._triggerData+"]")),t&&this.showModal()},!0),this.shadowRoot.addEventListener("click",r=>{r.target instanceof Element&&r.target.closest('[slot="back"]')&&this.close(),r.target instanceof Element&&r.target.closest('[slot="close"]')&&this.close()}),this._dialogEl.classList.add("is-closed"),this.open?this.showModal():this._dialogEl.classList.add("is-closed")}_setup(){const r=window.getComputedStyle(this);this._documentEl=document.documentElement,this._triggerData=this.dataset.modalTrigger,this._triggerEl=document.querySelector("[data-modal-target="+this._triggerData+"][data-modal-trigger-primary]"),this._triggerParent=this._triggerEl.parentElement,this._dialogEl=this.shadowRoot.querySelector("dialog"),this._triggerDuration=parseFloat(r.getPropertyValue("--modal-trigger-transition-duration"))*1e3,this._modalDuration=parseFloat(r.getPropertyValue("--modal-transition-duration"))*1e3,this._dialogEl.addEventListener("close",i=>{this._handleClose()});const t=this.shadowRoot.querySelector(".js-close");t.setAttribute("slot","close"),this.appendChild(t);const e=this.shadowRoot.querySelector(".js-back");e.setAttribute("slot","back"),this.appendChild(e)}close(){this._handleClose()}_open(){this._triggerEl.classList.add("is-expanded"),this._triggerParent.style.zIndex="9",setTimeout(()=>{this.setAttribute("open",""),this._dialogEl.classList.remove("is-closed"),this._dialogEl.classList.add("is-opening"),this._documentEl.style.overflow="hidden",this._dialogEl.classList.remove("is-opening"),this._dialogEl.classList.add("is-open")},this._triggerDuration)}showModal(){this._open()}_handleClose(){this.removeAttribute("open"),this._dialogEl.classList.remove("is-open"),this._dialogEl.classList.add("is-closing"),setTimeout(()=>{this._documentEl.style.overflow="",this._dialogEl.classList.remove("is-closing"),this._dialogEl.classList.add("is-closed"),this._triggerEl.classList.remove("is-expanded"),setTimeout(()=>{this._triggerParent.style.zIndex=""},this._triggerDuration)},this._modalDuration)}render(){return Ut`
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
    `}};ds.styles=si`
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
        left: calc(var(--modal-spacing) * .75);
      }

      [name='close'] {
        right: calc(var(--modal-spacing) * .75);
      }
  `;cc([vt({type:Boolean})],ds.prototype,"open",2);ds=cc([Je("c-modal")],ds);var $g=Object.defineProperty,Ig=Object.getOwnPropertyDescriptor,Ng=(r,t,e,i)=>{for(var n=i>1?void 0:i?Ig(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&$g(t,e,n),n};let Eo=class extends ge{render(){return Ut`
      <slot name="title"> </slot>
      <slot name="description"> </slot>
    `}};Eo.styles=si`
    :host  {
      --section-header-title-font: var(--font-display);
      --section-header-title-font-weight: var(--font-display-weight);

      box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05);
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
      filter: url('#animate');
      font-size: 1.4rem;
      font-family: var(--section-header-title-font), sans-serif;
      font-weight: var(--section-header-title-font-weight);
      line-height: 1.25;
      padding-bottom: 4rem;
      padding-left: .5rem;
      padding-right: .5rem;
      padding-top: 5rem;
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
          9vw,
          2.4rem
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
      border-bottom: solid 1px
        var(--color-subtle-alternate);
      box-shadow: 0 0 0 1px var(--color-subtle-alternate);
      font-size: .8em;
      padding-bottom: 1.5rem;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 1.5rem;
    }


    @media (min-width: 45em) {
      ::slotted([slot='description']) {
        font-size: 1em;
      }
    }
  `;Eo=Ng([Je("c-section-header")],Eo);var Fg=Object.defineProperty,Bg=Object.getOwnPropertyDescriptor,Hg=(r,t,e,i)=>{for(var n=i>1?void 0:i?Bg(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Fg(t,e,n),n};let To=class extends ge{render(){return Ut`
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
    `}};To.styles=si`
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
  `;To=Hg([Je("c-squiggle")],To);var Ug=Object.defineProperty,Xg=Object.getOwnPropertyDescriptor,qg=(r,t,e,i)=>{for(var n=i>1?void 0:i?Xg(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Ug(t,e,n),n};let Ao=class extends ge{handleChange(){const r=document.body.dataset.theme;document.body.dataset.theme=r==="dark"?"light":"dark",this.dispatchEvent(new CustomEvent("themeChange",{detail:{theme:document.body.dataset.theme},bubbles:!0,composed:!0}))}render(){return Ut`
      <div class="c-theme-switch__wrapper">
        <input
          type="checkbox"
          class="c-theme-switch__input"
          onChange=${this.handleChange}
        />
        <span class="c-theme-switch__switch"></span>
        <slot></slot>
      </div>
    `}};Ao.styles=si`
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
      column-gap: 0.4rem;
      cursor: pointer;
      display: grid;
      grid-auto-flow: column;
      justify-content: center;
      position: relative;
    }

    @media (min-width: 35em) {

      .c-theme-switch__wrapper {
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
  `;Ao=qg([Je("c-theme-switch")],Ao);var Yg=Object.defineProperty,Vg=Object.getOwnPropertyDescriptor,jg=(r,t,e,i)=>{for(var n=i>1?void 0:i?Vg(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Yg(t,e,n),n};let Co=class extends ge{render(){return Ut`
      <slot name="logo"> </slot>
      <nav class="c-top-bar__nav">
        <slot name="link"> </slot>
      </nav>
    `}};Co.styles=si`

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
      }
    }

    ::slotted([slot='link']) {
      padding: 0 0rem;
      text-align: center;
      text-decoration: none;
      width: 1.5rem;
    }

    ::slotted([slot='logo']) {
      width: 1.75rem;
    }
  `;Co=jg([Je("c-top-bar")],Co);var Wg=Object.defineProperty,Gg=Object.getOwnPropertyDescriptor,Kt=(r,t,e,i)=>{for(var n=i>1?void 0:i?Gg(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Wg(t,e,n),n};let Yt=class extends ge{constructor(){super(...arguments),this.styles=`
    c-work-list-item  {
      box-shadow: 0 0 0 1px var(--color-subtle-alternate);
      display: grid;
      grid-template-rows: auto 1fr;
      grid-template-columns: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-bottom: 1rem;
    }

    @media (min-height:35em) and (min-width:45em) {

      c-work-list-item {
        max-width: calc(100% - 9rem);
        padding-bottom: 1.25rem;

      }

    }


    @media (min-height:35em) and (min-width:80em) {

      c-work-list-item {
        max-width: 72rem;
        padding-bottom: 1.25rem;

      }

    }

    @media (max-width:45em) {
      c-work-list-item:first-child {
        margin-top: 0rem;
      }
    }

    c-work-list-item:last-child {
      padding-bottom: 0rem;
    }


    .c-work-list__item-backdrop {
      background-color: var(--color-bg);
      display: block;
      height: 4.5rem;
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
      margin-top: -4.5rem;
      position: sticky;
      top: 4.5rem;
      z-index: 5;
    }

    @media (min-height:35em) and (min-width:45em) {

      .c-work-list__item-info {
        margin-top: -4.5;
        top: 0;
        z-index: 1;
      }

    }

    .c-work-list__item-info-inner {
      background-color: var(--color-bg-opaque);
      backdrop-filter: blur(0.75rem);
      box-shadow: 0 0 0 1px var(--color-subtle-alternate);
      display: grid;
      gap: 0.3rem;
      padding-bottom: 1.25rem;
      padding-top: 1.25rem;
    }

    @media (min-width:45em) {

      .c-work-list__item-info-inner {
        gap: 0.4rem;
        padding-bottom: 1.5rem;
        padding-top: 1.5rem;
      }

    }

    .c-work-list__item-info-title {
      font-size: clamp(1.33rem, 3vw, 2rem);
      line-height: 1.1;
      margin: 0;
      padding-left:  1.5rem;
      padding-right: 1.5rem;
    }

    .c-work-list__item-info-description {
      font-size: .8rem;
      padding-left:  1.5rem;
      padding-right: 1.5rem;
    }


    @media (min-width:35em) {

      .c-work-list__item-info-description {
        font-size: 1em;
      }

    }

    @media (min-width:55em) {

      .c-work-list__item-info-description {
        font-size: 1.1em;
        max-width: 55rem;
      }

    }

    .c-work-list__item-info-description  p {
      margin: 0;
    }

    .c-work-list__item-info-taglist {
      padding-left:  1.5rem;
      padding-right: 1.5rem;
    }


    .c-work-list__item-preview {
      background-color: var(--color-subtle-alternate);
      display: grid;
      grid-gap: 1px;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      justify-items: center;
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
      padding-top: 1rem;
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
        grid-template-columns: 1fr 1fr;
        padding-left: calc((100% - 70em) / 2);
        padding-right: calc((100% - 70em) / 2);
        padding-top: .5rem;
      }

    }

    .c-media-grid__text-item,
    .c-media-grid__text-item-wide {
      align-content: center;
      display: grid;
      font-family: var(--font-main-regular);
      font-size: 1.1rem;
      padding-bottom: 1.5rem;
      padding-left: 2rem;
      padding-top: 1.5rem;
      text-align: left;
      overflow-y: auto;
    }

    .c-media-grid__text-item {
      padding-right: 2.5rem;
    }


    .c-media-grid__text-item-wide {
      padding-right: 2rem;
    }

    @media (min-width:45em) {

      .c-media-grid__text-item-wide {
        font-size: 1.3rem;
        grid-column: 1 / span 2;
        padding-bottom: 3rem;
        padding-top: 3rem;
      }

    }

    @media (min-width:55em) {

      .c-media-grid__text-item-wide {
        padding-left: calc(((100% - 50rem) / 2) + 2rem);
        padding-right: calc(((100% - 50rem) / 2) + 2rem);
      }

    }

    .c-media-grid__image-item {
      align-content: center;
      background-color: var(--color-muted);
      border: solid 1px var(--color-subtle-alternate);
      box-shadow: 0 0 0 1px rgba(120,120,120,.8);
      display: grid;
      justify-items: center;
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
      font-size: .66rem;
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

  `,this.previewImages="[]",this.images="[]",this.glitch='["6", "6"]',this.tags="[]",this.previewWidth="800",this.previewHeight="600",this.title="",this.slug="",this.gallery="0",this.description="",this.shortDescription="",this.github=null,this.vsc=null,this.npm=null,this.site=null,this.threeButton="false",this.hideModal="false",this.wide="false"}firstUpdated(){this.taglist=JSON.parse(this.tags).join(", "),JSON.parse(this.hideModal)||document.body.appendChild(this.querySelector("c-modal")),document.querySelector(".work-list-styles")||(document.head.innerHTML+=`
        <style class='work-list-styles'>
          ${this.styles}
        </style>
      `)}render(){return Ut`
      <div class="c-work-list__item-backdrop"></div>
      <div data-sticky class="c-work-list__item-info">
        <div class="c-work-list__item-info-inner">
          <h4 class="c-work-list__item-info-title">
            ${this.title}
          </h4>
          <div
            class="
              c-work-list__item-info-taglist
              u-text-title
            "
          >
            Techologies Used: ${this.taglist}
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
        ${JSON.parse(this.previewImages).map((r,t)=>Ut`

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
        ${this.github?Ut`
          <a
            class="c-button"
            href=${this.github}
            title=${this.title+" Github Repo Link"}
          >
            <i
              class="
                c-icon
                c-icon--github
              "
            ></i>
            Star on Github
          </a>
        `:""}

        ${JSON.parse(this.hideModal)?"":Ut`
          <button
            class="c-button"
            data-modal-target="${this.slug}"
            data-modal-trigger-primary
          >
            <i
              class="
                c-icon
                c-icon--expand
              "
            ></i>
            Show More
          </button>`}

        ${this.vsc?Ut`
          <a
            class="c-button"
            href="${this.vsc}"
            title=${this.title+"VSC Link"}
          >
            <i
              class="
                c-icon
                c-icon--microsoft
              "
            ></i>
            View on VSC
          </a>
        `:""}

        ${this.npm?Ut`
          <a
            class="c-button"
            href="${this.npm}"
            title=${this.title+"NPM Module Link"}
          >
            <i
              class="
                c-icon
                c-icon--npm
              "
            ></i>
            Add on NPM
          </a>
        `:""}

        ${this.site?Ut`
          <a
            class="c-button"
            href="${this.site}"
            title=${this.title+"Site Link"}
          >
            <i
              class="
                c-icon
                c-icon--plus
              "
            ></i>
            Visit Website
          </a>
        `:""}

        ${JSON.parse(this.hideModal)?"":Ut`
          <c-modal
            data-modal-trigger="${this.slug}"
          >
            <c-section-header
              class="u-bg-noise u-z-index-3"
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
              <article
                class=${JSON.parse(this.wide)?"c-media-grid__text-item-wide":"c-media-grid__text-item"}
              >
                ${JSON.parse(this.description).map(r=>{})}
              </article>
              ${JSON.parse(this.images).map(r=>Ut`
                <div class="c-media-grid__image-item">
                  <a
                    data-glightbox
                    data-gallery=${this.gallery}
                    href="${r}"
                  >
                    <img
                      class="c-media-grid__image"
                      src="${r}"
                      alt=${this.title+" Screenshot"}
                    />
                  </a>
                </div>
              `)}

            </div>
          </c-modal>
        `}

      </div>
    `}createRenderRoot(){return this}};Kt([vt({type:String})],Yt.prototype,"previewImages",2);Kt([vt({type:String})],Yt.prototype,"images",2);Kt([vt({type:String})],Yt.prototype,"glitch",2);Kt([vt({type:String})],Yt.prototype,"tags",2);Kt([vt({type:String})],Yt.prototype,"previewWidth",2);Kt([vt({type:String})],Yt.prototype,"previewHeight",2);Kt([vt({type:String})],Yt.prototype,"title",2);Kt([vt({type:String})],Yt.prototype,"slug",2);Kt([vt({type:String})],Yt.prototype,"gallery",2);Kt([vt({type:String})],Yt.prototype,"description",2);Kt([vt({type:String})],Yt.prototype,"shortDescription",2);Kt([vt({type:String})],Yt.prototype,"github",2);Kt([vt({type:String})],Yt.prototype,"vsc",2);Kt([vt({type:String})],Yt.prototype,"npm",2);Kt([vt({type:String})],Yt.prototype,"site",2);Kt([vt({type:String})],Yt.prototype,"threeButton",2);Kt([vt({type:String})],Yt.prototype,"hideModal",2);Kt([vt({type:String})],Yt.prototype,"wide",2);Yt=Kt([Je("c-work-list-item")],Yt);function Zg(r,t=8,e=50){class i{constructor(s){this.frame=0,this.patternSize=400,this.patternScaleX=8,this.patternScaleY=8,this.patternRefreshInterval=t,this.patternAlpha=e,this.patternCanvas=document.createElement("canvas"),this.canvas=s,this.ctx=this.canvas.getContext("2d"),this.ctx.scale(this.patternScaleX,this.patternScaleY),this.patternCanvas=document.createElement("canvas"),this.patternCanvas.width=this.patternSize,this.patternCanvas.height=this.patternSize,this.patternCtx=this.patternCanvas.getContext("2d"),this.patternData=this.patternCtx.createImageData(this.patternSize,this.patternSize),this.patternPixelDataLength=this.patternSize*this.patternSize*4,this.resize=this.resize.bind(this),this.loop=this.loop.bind(this),this.frame=0,window.addEventListener("resize",this.resize),this.resize(),window.requestAnimationFrame(this.loop)}resize(){this.canvas.width=window.innerWidth*devicePixelRatio,this.canvas.height=window.innerHeight*devicePixelRatio}update(){const{patternPixelDataLength:s,patternData:o,patternAlpha:a,patternCtx:l}=this;for(let h=0;h<s;h+=4){const d=Math.random()*200;o.data[h]=d,o.data[h+1]=d,o.data[h+2]=d,o.data[h+3]=a}l.putImageData(o,0,0)}draw(){const{ctx:s,patternCanvas:o,canvas:a}=this,{width:l,height:h}=a;s.clearRect(0,0,l,h),s.fillStyle=s.createPattern(o,"repeat"),s.fillRect(0,0,l,h)}loop(){++this.frame%this.patternRefreshInterval===0&&(this.update(),this.draw()),window.requestAnimationFrame(this.loop)}}new i(r)}var Kg=Object.defineProperty,Qg=Object.getOwnPropertyDescriptor,Jg=(r,t,e,i)=>{for(var n=i>1?void 0:i?Qg(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Kg(t,e,n),n};let ko=class extends ge{constructor(){super()}firstUpdated(){if(this.style.setProperty("--opacity-noise","0.8"),this.renderRoot){const r=this.renderRoot.querySelector(".c-canvas-noise__canvas");Zg(r,12)}}render(){return Ut`
      <canvas class="c-canvas-noise__canvas">
      </canvas>
    `}};ko.styles=si`
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
  `;ko=Jg([Je("c-canvas-noise")],ko);var tp=Object.defineProperty,ep=Object.getOwnPropertyDescriptor,ip=(r,t,e,i)=>{for(var n=i>1?void 0:i?ep(t,e):t,s=r.length-1,o;s>=0;s--)(o=r[s])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&tp(t,e,n),n};let Mo=class extends ge{constructor(){super(),this.position={currentX:0,currentY:0,cursorX:0,cursorY:0},this._targets=[],this._speed=.2,this._set=Wt.quickSetter(this,"css"),this._enterStyles={borderWidth:"1px",duration:.4,scale:2},this._leaveStyles={borderWidth:"2px",duration:.4,scale:1},this._delta=1-Math.pow(1-this._speed,Wt.ticker.deltaRatio()),this.setViewport(),this.position.cursorX=this.position.currentX,this.position.cursorY=this.position.currentY,window.addEventListener("resize",()=>{setTimeout(()=>{this.setViewport(),this.refresh()},4e3)}),this.render(),this._set=Wt.quickSetter(this,"css"),"ontouchstart"in document.documentElement===!0?this.style.setProperty("--cursor-display","none"):this.style.setProperty("--cursor-display","block"),document.addEventListener("mousemove",t=>{this.position.cursorX=t.x,this.position.cursorY=t.y}),Wt.ticker.add(()=>{if(this._delta=1-Math.pow(1-this._speed,Wt.ticker.deltaRatio()),this.position.currentX+=(this.position.cursorX-this.position.currentX)*this._delta,this.position.currentY+=(this.position.cursorY-this.position.currentY)*this._delta,this._set({x:this.position.currentX,y:this.position.currentY}),this._activeTarget&&(this._activeTarget.dataset.cursorMagnetic==="true"||this._activeTarget.parentElement.dataset.cursorMagnetic==="true")){const t=this._activeTarget.getBoundingClientRect();let e=(t.x+t.width/2-this.position.cursorX)/-2;e>0?e=Math.min(e,15):e=Math.max(e,-15);let i=(t.y+t.height/2-this.position.cursorY)/-2;i>0?i=Math.min(i,15):i=Math.max(i,-15),Wt.to(this._activeTarget,{x:e,y:i,duration:.15})}}),Wt.to(this,this._leaveStyles),setTimeout(()=>{this.refresh()},2e3)}setViewport(){this.position.currentX=window.innerWidth/2,this.position.currentY=window.innerHeight/2}handleEnter(r){Wt.to(this,this._enterStyles),this._activeTarget=r.target}handleLeave(r){Wt.to(this,this._leaveStyles),Wt.to(r.target,{x:0,y:0}),this._activeTarget=null}refresh(){this._targets&&this._targets.forEach(i=>{i.element.removeEventListener("mouseenter",this.handleEnter),i.element.removeEventListener("mouseleave",this.handleLeave)}),this._targets=[];const r=Array.from(document.querySelectorAll('.c-button, .c-toggle__label, [data-cursor-magnetic="true"]')),t=Array.from(document.querySelectorAll("a, button, [data-cursor-target]"));r.forEach(i=>{i.dataset.cursorMagnetic="true"}),[...r,...t].forEach(i=>{this._targets=this._targets.concat([{element:i}])}),this._targets&&this._targets.forEach(i=>{i.element.addEventListener("mouseenter",this.handleEnter.bind(this)),i.element.addEventListener("mouseleave",this.handleLeave.bind(this))})}_transitionIn(){const r=this.shadowRoot.querySelector(".c-hero__upper");Wt.timeline({scrollTrigger:{trigger:r,end:"+=220%",scrub:!0}}).to(this.shadowRoot.querySelectorAll(".js-hero-me"),{backgroundSize:"150% auto"});let e=Wt.timeline();const i=this.shadowRoot.querySelector(".c-hero__lower");e.from(i,{height:0,opacity:0,duration:1,delay:1.75,onComplete:()=>{i.style.height=""}}),e.from(this.shadowRoot.querySelector(".c-hero__tagline"),{opacity:0,duration:2,delay:1.75},0),e.play()}_taglineSetup(){const r=this.querySelector("[slot=tagline]").innerHTML.replaceAll("  ","").replaceAll(`
`,""),t=r.split("<br>"),e=t.map((n,s)=>{const o="<span data-scrambler>"+n+"</span>";return t.length-1===s?o:o+"<br>"}).join(""),i=[this.shadowRoot.querySelector(".c-hero__tagline-accent-1"),this.shadowRoot.querySelector(".c-hero__tagline-accent-2"),this.shadowRoot.querySelector(".c-hero__tagline-accent-3")];this.innerHTML+='<div slot="tagline-main">'+e+"</div>",i.map(n=>{n.innerHTML=r})}_nameStylizedSetup(){const r=this.querySelector('[slot="name-stylized"').innerHTML.replaceAll(" ","").replaceAll(`
`,"").split(""),t=this.shadowRoot.querySelector(".c-hero__name-stylized");t.innerHTML=r.map(e=>'<div class="c-hero__name-stylized-letter">'+e+"</div>").join("")}render(){return Ut``}};Mo.styles=si`
    :host {
      --cursor-size: 2.5rem;


      backdrop-filter: brightness(0.9) saturate(0);
      background-color: white;
      border: solid 1px white;
      border-radius: var(--cursor-size);
      display: var(--cursor-display);
      height: var(--cursor-size);
      left: calc(var(--cursor-size) / 2 * -1);
      mix-blend-mode: difference;
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
  `;Mo=ip([Je("c-cursor")],Mo);
