import{i as M,d as E,w as A,e as m,$ as h}from"./iframe.81a637db.js";var b="backgrounds",{document:l,window:B}=A,H=()=>B.matchMedia("(prefers-reduced-motion: reduce)").matches,L=(r,e=[],t)=>{if(r==="transparent")return"transparent";if(e.find(a=>a.value===r))return r;let n=e.find(a=>a.name===t);if(n)return n.value;if(t){let a=e.map(o=>o.name).join(", ");M.warn(E`
        Backgrounds Addon: could not find the default color "${t}".
        These are the available colors for your story based on your configuration:
        ${a}.
      `)}return"transparent"},k=r=>{(Array.isArray(r)?r:[r]).forEach(T)},T=r=>{let e=l.getElementById(r);e&&e.parentElement.removeChild(e)},F=(r,e)=>{let t=l.getElementById(r);if(t)t.innerHTML!==e&&(t.innerHTML=e);else{let n=l.createElement("style");n.setAttribute("id",r),n.innerHTML=e,l.head.appendChild(n)}},I=(r,e,t)=>{let n=l.getElementById(r);if(n)n.innerHTML!==e&&(n.innerHTML=e);else{let a=l.createElement("style");a.setAttribute("id",r),a.innerHTML=e;let o=`addon-backgrounds-grid${t?`-docs-${t}`:""}`,d=l.getElementById(o);d?d.parentElement.insertBefore(a,d):l.head.appendChild(a)}},z=(r,e)=>{var u;let{globals:t,parameters:n}=e,a=(u=t[b])==null?void 0:u.value,o=n[b],d=m(()=>o.disable?"transparent":L(a,o.values,o.default),[o,a]),i=m(()=>d&&d!=="transparent",[d]),p=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",c=m(()=>{let s="transition: background-color 0.3s;";return`
      ${p} {
        background: ${d} !important;
        ${H()?"":s}
      }
    `},[d,p]);return h(()=>{let s=e.viewMode==="docs"?`addon-backgrounds-docs-${e.id}`:"addon-backgrounds-color";if(!i){k(s);return}I(s,c,e.viewMode==="docs"?e.id:null)},[i,c,e]),r()},C=(r,e)=>{var x,v,y;let{globals:t,parameters:n}=e,a=n[b].grid,o=((x=t[b])==null?void 0:x.grid)===!0&&a.disable!==!0,{cellAmount:d,cellSize:i,opacity:p}=a,c=e.viewMode==="docs",u=n.layout===void 0||n.layout==="padded"?16:0,s=(v=a.offsetX)!=null?v:c?20:u,g=(y=a.offsetY)!=null?y:c?20:u,f=m(()=>{let $=e.viewMode==="docs"?`#anchor--${e.id} .docs-story`:".sb-show-main",w=[`${i*d}px ${i*d}px`,`${i*d}px ${i*d}px`,`${i}px ${i}px`,`${i}px ${i}px`].join(", ");return`
      ${$} {
        background-size: ${w} !important;
        background-position: ${s}px ${g}px, ${s}px ${g}px, ${s}px ${g}px, ${s}px ${g}px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, ${p}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${p}) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, ${p/2}) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, ${p/2}) 1px, transparent 1px) !important;
      }
    `},[i]);return h(()=>{let $=e.viewMode==="docs"?`addon-backgrounds-grid-docs-${e.id}`:"addon-backgrounds-grid";if(!o){k($);return}F($,f)},[o,f,e]),r()},S=[C,z],N={backgrounds:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}};export{S as decorators,N as parameters};
//# sourceMappingURL=preview.17f7b551.js.map
