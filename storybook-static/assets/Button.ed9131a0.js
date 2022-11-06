import{x as i,y as u}from"./lit-html.9f764a13.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const c={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},l=o=>(...t)=>({_$litDirective$:o,values:t});class d{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,e){this._$Ct=t,this._$AM=s,this._$Ci=e}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a=l(class extends d{constructor(o){var t;if(super(o),o.type!==c.ATTRIBUTE||o.name!=="style"||((t=o.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(o){return Object.keys(o).reduce((t,s)=>{const e=o[s];return e==null?t:t+`${s=s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`},"")}update(o,[t]){const{style:s}=o.element;if(this.vt===void 0){this.vt=new Set;for(const e in t)this.vt.add(e);return this.render(t)}this.vt.forEach(e=>{t[e]==null&&(this.vt.delete(e),e.includes("-")?s.removeProperty(e):s[e]="")});for(const e in t){const n=t[e];n!=null&&(this.vt.add(e),e.includes("-")?s.setProperty(e,n):s[e]=n)}return i}});const b=({primary:o,backgroundColor:t=null,size:s,label:e,onClick:n})=>{const r=o?"storybook-button--primary":"storybook-button--secondary";return u`
    <button
      type="button"
      class=${["storybook-button",`storybook-button--${s||"medium"}`,r].join(" ")}
      style=${a({backgroundColor:t})}
      @click=${n}
    >
      ${e}
    </button>
  `};export{b as B};
//# sourceMappingURL=Button.ed9131a0.js.map
