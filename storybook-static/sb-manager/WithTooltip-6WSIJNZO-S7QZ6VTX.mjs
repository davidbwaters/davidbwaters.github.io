import{a as ee,c as N,e as oe}from"./chunk-722JULI4.mjs";import{a as te,b as C,c as re}from"./chunk-MY4F7ORE.mjs";import{f as A,p as L}from"./chunk-T6P6F2SI.mjs";import{b as S}from"./chunk-Z7LX2X6E.mjs";import{a as Ce}from"./chunk-AIPH5HO4.mjs";import{a as Y,b as D,c as y}from"./chunk-6XCSLWLC.mjs";import{e as b,g as Z}from"./chunk-L2PAVIFR.mjs";Z();var k=b(S(),1);var T=b(S(),1),se=b(ee(),1),R=b(S(),1),h=b(S(),1),F=b(S(),1),P=b(S(),1),de=b(ee(),1),H=b(S(),1),I=b(S(),1),me=b(Ce(),1);var Oe=Y((r,a)=>{y();var o=typeof Element<"u",e=typeof Map=="function",n=typeof Set=="function",c=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function l(t,i){if(t===i)return!0;if(t&&i&&typeof t=="object"&&typeof i=="object"){if(t.constructor!==i.constructor)return!1;var u,s,p;if(Array.isArray(t)){if(u=t.length,u!=i.length)return!1;for(s=u;s--!==0;)if(!l(t[s],i[s]))return!1;return!0}var d;if(e&&t instanceof Map&&i instanceof Map){if(t.size!==i.size)return!1;for(d=t.entries();!(s=d.next()).done;)if(!i.has(s.value[0]))return!1;for(d=t.entries();!(s=d.next()).done;)if(!l(s.value[1],i.get(s.value[0])))return!1;return!0}if(n&&t instanceof Set&&i instanceof Set){if(t.size!==i.size)return!1;for(d=t.entries();!(s=d.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(c&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(i)){if(u=t.length,u!=i.length)return!1;for(s=u;s--!==0;)if(t[s]!==i[s])return!1;return!0}if(t.constructor===RegExp)return t.source===i.source&&t.flags===i.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===i.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===i.toString();if(p=Object.keys(t),u=p.length,u!==Object.keys(i).length)return!1;for(s=u;s--!==0;)if(!Object.prototype.hasOwnProperty.call(i,p[s]))return!1;if(o&&t instanceof Element)return!1;for(s=u;s--!==0;)if(!((p[s]==="_owner"||p[s]==="__v"||p[s]==="__o")&&t.$$typeof)&&!l(t[p[s]],i[p[s]]))return!1;return!0}return t!==t&&i!==i}a.exports=function(t,i){try{return l(t,i)}catch(u){if((u.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw u}}}),Te=Y((r,a)=>{"use strict";y();var o=!1,e=function(){};o&&(n=function(c,l){var t=arguments.length;l=new Array(t>1?t-1:0);for(var i=1;i<t;i++)l[i-1]=arguments[i];var u=0,s="Warning: "+c.replace(/%s/g,function(){return l[u++]});typeof console<"u"&&console.error(s);try{throw new Error(s)}catch{}},e=function(c,l,t){var i=arguments.length;t=new Array(i>2?i-2:0);for(var u=2;u<i;u++)t[u-2]=arguments[u];if(l===void 0)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");c||n.apply(null,[l].concat(t))});var n;a.exports=e});y();var Re=D(te());y();y();y();y();var le=h.createContext(),ue=h.createContext();function Se(r){var a=r.children,o=h.useState(null),e=o[0],n=o[1],c=h.useRef(!1);h.useEffect(function(){return function(){c.current=!0}},[]);var l=h.useCallback(function(t){c.current||n(t)},[]);return h.createElement(le.Provider,{value:e},h.createElement(ue.Provider,{value:l},a))}y();var ce=function(r){return Array.isArray(r)?r[0]:r},pe=function(r){if(typeof r=="function"){for(var a=arguments.length,o=new Array(a>1?a-1:0),e=1;e<a;e++)o[e-1]=arguments[e];return r.apply(void 0,o)}},q=function(r,a){if(typeof r=="function")return pe(r,a);r!=null&&(r.current=a)},ne=function(r){return r.reduce(function(a,o){var e=o[0],n=o[1];return a[e]=n,a},{})},ie=typeof window<"u"&&window.document&&window.document.createElement?F.useLayoutEffect:F.useEffect;y();var Ee=D(Oe()),Pe=[],xe=function(r,a,o){o===void 0&&(o={});var e=P.useRef(null),n={onFirstUpdate:o.onFirstUpdate,placement:o.placement||"bottom",strategy:o.strategy||"absolute",modifiers:o.modifiers||Pe},c=P.useState({styles:{popper:{position:n.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),l=c[0],t=c[1],i=P.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(p){var d=p.state,v=Object.keys(d.elements);de.flushSync(function(){t({styles:ne(v.map(function(g){return[g,d.styles[g]||{}]})),attributes:ne(v.map(function(g){return[g,d.attributes[g]]}))})})},requires:["computeStyles"]}},[]),u=P.useMemo(function(){var p={onFirstUpdate:n.onFirstUpdate,placement:n.placement,strategy:n.strategy,modifiers:[].concat(n.modifiers,[i,{name:"applyStyles",enabled:!1}])};return(0,Ee.default)(e.current,p)?e.current||p:(e.current=p,p)},[n.onFirstUpdate,n.placement,n.strategy,n.modifiers,i]),s=P.useRef();return ie(function(){s.current&&s.current.setOptions(u)},[u]),ie(function(){if(!(r==null||a==null)){var p=o.createPopper||oe,d=p(r,a,u);return s.current=d,function(){d.destroy(),s.current=null}}},[r,a,o.createPopper]),{state:s.current?s.current.state:null,styles:l.styles,attributes:l.attributes,update:s.current?s.current.update:null,forceUpdate:s.current?s.current.forceUpdate:null}},He=function(){},Me=function(){return Promise.resolve(null)},Be=[];function Ae(r){var a=r.placement,o=a===void 0?"bottom":a,e=r.strategy,n=e===void 0?"absolute":e,c=r.modifiers,l=c===void 0?Be:c,t=r.referenceElement,i=r.onFirstUpdate,u=r.innerRef,s=r.children,p=R.useContext(le),d=R.useState(null),v=d[0],g=d[1],M=R.useState(null),x=M[0],W=M[1];R.useEffect(function(){q(u,v)},[u,v]);var $=R.useMemo(function(){return{placement:o,strategy:n,onFirstUpdate:i,modifiers:[].concat(l,[{name:"arrow",enabled:x!=null,options:{element:x}}])}},[o,n,i,l,x]),f=xe(t||p,v,$),m=f.state,B=f.styles,U=f.forceUpdate,X=f.update,j=R.useMemo(function(){return{ref:g,style:B.popper,placement:m?m.placement:o,hasPopperEscaped:m&&m.modifiersData.hide?m.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:m&&m.modifiersData.hide?m.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:B.arrow,ref:W},forceUpdate:U||He,update:X||Me}},[g,W,o,m,B,X,U]);return ce(s)(j)}y();var Le=D(Te());function We(r){var a=r.children,o=r.innerRef,e=H.useContext(ue),n=H.useCallback(function(c){q(o,c),pe(e,c)},[o,e]);return H.useEffect(function(){return function(){return q(o,null)}},[]),H.useEffect(function(){(0,Le.default)(Boolean(e),"`Reference` should not be used outside of a `Manager` component.")},[e]),ce(a)({ref:n})}var fe=T.default.createContext({}),O=function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return function(){for(var e=arguments.length,n=new Array(e),c=0;c<e;c++)n[c]=arguments[c];return a.forEach(function(l){return l&&l.apply(void 0,n)})}},$e=function(){},ae=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},Ue=function(r,a){if(typeof r=="function")return r(a);r!=null&&(r.current=a)},he=function(r){N(a,r);function a(){for(var e,n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return e=r.call.apply(r,[this].concat(c))||this,e.observer=void 0,e.tooltipRef=void 0,e.handleOutsideClick=function(t){if(e.tooltipRef&&!e.tooltipRef.contains(t.target)){var i=e.context.parentOutsideClickHandler,u=e.props,s=u.hideTooltip,p=u.clearScheduled;p(),s(),i&&i(t)}},e.handleOutsideRightClick=function(t){if(e.tooltipRef&&!e.tooltipRef.contains(t.target)){var i=e.context.parentOutsideRightClickHandler,u=e.props,s=u.hideTooltip,p=u.clearScheduled;p(),s(),i&&i(t)}},e.addOutsideClickHandler=function(){document.body.addEventListener("touchend",e.handleOutsideClick),document.body.addEventListener("click",e.handleOutsideClick)},e.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",e.handleOutsideClick),document.body.removeEventListener("click",e.handleOutsideClick)},e.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",e.handleOutsideRightClick)},e.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",e.handleOutsideRightClick)},e.getTooltipRef=function(t){e.tooltipRef=t,Ue(e.props.innerRef,t)},e.getArrowProps=function(t){return t===void 0&&(t={}),C({},t,{style:C({},t.style,e.props.arrowProps.style)})},e.getTooltipProps=function(t){return t===void 0&&(t={}),C({},t,e.isTriggeredBy("hover")&&{onMouseEnter:O(e.props.clearScheduled,t.onMouseEnter),onMouseLeave:O(e.props.hideTooltip,t.onMouseLeave)},{style:C({},t.style,e.props.style)})},e.contextValue={isParentNoneTriggered:e.props.trigger==="none",addParentOutsideClickHandler:e.addOutsideClickHandler,addParentOutsideRightClickHandler:e.addOutsideRightClickHandler,parentOutsideClickHandler:e.handleOutsideClick,parentOutsideRightClickHandler:e.handleOutsideRightClick,removeParentOutsideClickHandler:e.removeOutsideClickHandler,removeParentOutsideRightClickHandler:e.removeOutsideRightClickHandler},e}var o=a.prototype;return o.componentDidMount=function(){var e=this,n=this.observer=new MutationObserver(function(){e.props.update()});if(n.observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var c=this.context,l=c.removeParentOutsideClickHandler,t=c.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),l&&l(),t&&t()}},o.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},o.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var e=this.context,n=e.isParentNoneTriggered,c=e.addParentOutsideClickHandler,l=e.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!n&&c&&c(),!n&&l&&l()}},o.render=function(){var e=this.props,n=e.arrowProps,c=e.placement,l=e.tooltip;return T.default.createElement(fe.Provider,{value:this.contextValue},l({arrowRef:n.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:c,tooltipRef:this.getTooltipRef}))},o.isTriggeredBy=function(e){var n=this.props.trigger;return n===e||Array.isArray(n)&&n.includes(e)},a}(T.Component);he.contextType=fe;var Xe={childList:!0,subtree:!0},ge=function(r){N(a,r);function a(){for(var e,n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return e=r.call.apply(r,[this].concat(c))||this,e.state={tooltipShown:e.props.defaultTooltipShown},e.hideTimeout=void 0,e.showTimeout=void 0,e.popperOffset=void 0,e.setTooltipState=function(t){var i=function(){return e.props.onVisibilityChange(t.tooltipShown)};e.isControlled()?i():e.setState(t,i)},e.clearScheduled=function(){clearTimeout(e.hideTimeout),clearTimeout(e.showTimeout)},e.showTooltip=function(t){var i=t.pageX,u=t.pageY;e.clearScheduled();var s={tooltipShown:!0};e.props.followCursor&&(s=C({},s,{pageX:i,pageY:u})),e.showTimeout=window.setTimeout(function(){return e.setTooltipState(s)},e.props.delayShow)},e.hideTooltip=function(){e.clearScheduled(),e.hideTimeout=window.setTimeout(function(){return e.setTooltipState({tooltipShown:!1})},e.props.delayHide)},e.toggleTooltip=function(t){var i=t.pageX,u=t.pageY,s=e.getState()?"hideTooltip":"showTooltip";e[s]({pageX:i,pageY:u})},e.clickToggle=function(t){t.preventDefault();var i=t.pageX,u=t.pageY,s=e.props.followCursor?"showTooltip":"toggleTooltip";e[s]({pageX:i,pageY:u})},e.contextMenuToggle=function(t){t.preventDefault();var i=t.pageX,u=t.pageY,s=e.props.followCursor?"showTooltip":"toggleTooltip";e[s]({pageX:i,pageY:u})},e.getTriggerProps=function(t){return t===void 0&&(t={}),C({},t,e.isTriggeredBy("click")&&{onClick:O(e.clickToggle,t.onClick),onTouchEnd:O(e.clickToggle,t.onTouchEnd)},e.isTriggeredBy("right-click")&&{onContextMenu:O(e.contextMenuToggle,t.onContextMenu)},e.isTriggeredBy("hover")&&C({onMouseEnter:O(e.showTooltip,t.onMouseEnter),onMouseLeave:O(e.hideTooltip,t.onMouseLeave)},e.props.followCursor&&{onMouseMove:O(e.showTooltip,t.onMouseMove)}),e.isTriggeredBy("focus")&&{onFocus:O(e.showTooltip,t.onFocus),onBlur:O(e.hideTooltip,t.onBlur)})},e}var o=a.prototype;return o.componentWillUnmount=function(){this.clearScheduled()},o.render=function(){var e=this,n=this.props,c=n.children,l=n.tooltip,t=n.placement,i=n.trigger,u=n.getTriggerRef,s=n.modifiers,p=n.closeOnReferenceHidden,d=n.usePortal,v=n.portalContainer,g=n.followCursor,M=n.getTooltipRef,x=n.mutationObserverOptions,W=re(n,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),$=T.default.createElement(Ae,C({innerRef:M,placement:t,modifiers:[{name:"followCursor",enabled:g,phase:"main",fn:function(f){e.popperOffset=f.state.rects.popper}}].concat(s)},W),function(f){var m=f.ref,B=f.style,U=f.placement,X=f.arrowProps,j=f.isReferenceHidden,we=f.update;if(g&&e.popperOffset){var G=e.state,V=G.pageX,z=G.pageY,J=e.popperOffset,K=J.width,Q=J.height,be=V+K>window.pageXOffset+document.body.offsetWidth?V-K:V,ke=z+Q>window.pageYOffset+document.body.offsetHeight?z-Q:z;B.transform="translate3d("+be+"px, "+ke+"px, 0"}return T.default.createElement(he,C({arrowProps:X,closeOnReferenceHidden:p,isReferenceHidden:j,placement:U,update:we,style:B,tooltip:l,trigger:i,mutationObserverOptions:x},{clearScheduled:e.clearScheduled,hideTooltip:e.hideTooltip,innerRef:m}))});return T.default.createElement(Se,null,T.default.createElement(We,{innerRef:u},function(f){var m=f.ref;return c({getTriggerProps:e.getTriggerProps,triggerRef:m})}),this.getState()&&(d?(0,se.createPortal)($,v):$))},o.isControlled=function(){return this.props.tooltipShown!==void 0},o.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},o.isTriggeredBy=function(e){var n=this.props.trigger;return n===e||Array.isArray(n)&&n.includes(e)},a}(T.Component);ge.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:$e,placement:"right",portalContainer:ae()?document.body:null,trigger:"hover",usePortal:ae(),mutationObserverOptions:Xe,modifiers:[]};var De=ge;y();var w=(0,me.default)(1e3)((r,a,o,e=0)=>a.split("-")[0]===r?o:e),E=8,Fe=L.div({position:"absolute",borderStyle:"solid"},({placement:r})=>{let a=0,o=0;switch(!0){case(r.startsWith("left")||r.startsWith("right")):{o=8;break}case(r.startsWith("top")||r.startsWith("bottom")):{a=8;break}default:}return{transform:`translate3d(${a}px, ${o}px, 0px)`}},({theme:r,color:a,placement:o})=>({bottom:`${w("top",o,E*-1,"auto")}px`,top:`${w("bottom",o,E*-1,"auto")}px`,right:`${w("left",o,E*-1,"auto")}px`,left:`${w("right",o,E*-1,"auto")}px`,borderBottomWidth:`${w("top",o,"0",E)}px`,borderTopWidth:`${w("bottom",o,"0",E)}px`,borderRightWidth:`${w("left",o,"0",E)}px`,borderLeftWidth:`${w("right",o,"0",E)}px`,borderTopColor:w("top",o,r.color[a]||a||r.base==="light"?A(r.background.app):r.background.app,"transparent"),borderBottomColor:w("bottom",o,r.color[a]||a||r.base==="light"?A(r.background.app):r.background.app,"transparent"),borderLeftColor:w("left",o,r.color[a]||a||r.base==="light"?A(r.background.app):r.background.app,"transparent"),borderRightColor:w("right",o,r.color[a]||a||r.base==="light"?A(r.background.app):r.background.app,"transparent")})),je=L.div(({hidden:r})=>({display:r?"none":"inline-block",zIndex:2147483647}),({theme:r,color:a,hasChrome:o})=>o?{background:r.color[a]||a||r.base==="light"?A(r.background.app):r.background.app,filter:`
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,borderRadius:r.appBorderRadius*2,fontSize:r.typography.size.s1}:{}),ve=({placement:r,hasChrome:a,children:o,arrowProps:e,tooltipRef:n,arrowRef:c,color:l,...t})=>I.default.createElement(je,{hasChrome:a,placement:r,ref:n,...t,color:l},a&&I.default.createElement(Fe,{placement:r,ref:c,...e,color:l}),o);ve.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var{document:_}=Re.default,Ve=L.div`
  display: inline-block;
  cursor: ${r=>r.mode==="hover"?"default":"pointer"};
`,ze=L.g`
  cursor: ${r=>r.mode==="hover"?"default":"pointer"};
`,ye=({svg:r,trigger:a,closeOnClick:o,placement:e,modifiers:n,hasChrome:c,tooltip:l,children:t,tooltipShown:i,onVisibilityChange:u,...s})=>{let p=r?ze:Ve;return k.default.createElement(De,{placement:e,trigger:a,modifiers:n,tooltipShown:i,onVisibilityChange:u,tooltip:({getTooltipProps:d,getArrowProps:v,tooltipRef:g,arrowRef:M,placement:x})=>k.default.createElement(ve,{hasChrome:c,placement:x,tooltipRef:g,arrowRef:M,arrowProps:v(),...d()},typeof l=="function"?l({onHide:()=>u(!1)}):l)},({getTriggerProps:d,triggerRef:v})=>k.default.createElement(p,{ref:v,...d(),...s},t))};ye.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var Je=({startOpen:r,onVisibilityChange:a,...o})=>{let[e,n]=(0,k.useState)(r||!1),c=(0,k.useCallback)(l=>{a&&a(l)===!1||n(l)},[a]);return(0,k.useEffect)(()=>{let l=()=>c(!1);_.addEventListener("keydown",l,!1);let t=Array.from(_.getElementsByTagName("iframe")),i=[];return t.forEach(u=>{let s=()=>{try{u.contentWindow.document&&(u.contentWindow.document.addEventListener("click",l),i.push(()=>{try{u.contentWindow.document.removeEventListener("click",l)}catch{}}))}catch{}};s(),u.addEventListener("load",s),i.push(()=>{u.removeEventListener("load",s)})}),()=>{_.removeEventListener("keydown",l),i.forEach(u=>{u()})}}),k.default.createElement(ye,{...o,tooltipShown:e,onVisibilityChange:c})};export{Je as WithToolTipState,Je as WithTooltip,ye as WithTooltipPure};
