import{e,a as p,s as u,y as l}from"./query-assigned-elements.44c72d86.js";import"./lit-html.9f764a13.js";import"./Icon.16fc8648.js";var b=Object.defineProperty,d=Object.getOwnPropertyDescriptor,o=(t,s,c,r)=>{for(var n=r>1?void 0:r?d(s,c):s,h=t.length-1,a;h>=0;h--)(a=t[h])&&(n=(r?a(s,c,n):a(n))||n);return r&&n&&b(s,c,n),n};let i=class extends u{constructor(){super(...arguments),this.variant="primary",this.size="medium",this.label="Label",this.width="",this.onClick=null,this.icon="expand",this.href=null,this.alt=""}willUpdate(t){this.size!=="c-button--large"&&this.size!=="c-button--small"&&(this.size="c-button--medium"),this.width&&(this.width==="full"||this.width==="fill")&&(this.width="100%"),this.width?this.style.setProperty("--button-width",this.width):this.style.setProperty("--button-width","auto")}render(){return this.href?l`
      <a
        class=${["c-button",this.size,this.variant].join(" ")}
        @click=${this.onclick}
        .href=${this.href}
        alt=${this.alt}
      >
      ${this.icon&&this.icon!=="none"?l`<c-icon icon=${this.icon}></c-icon>`:""}
        <span>${this.label}</span>
      </a>
    `:l`
      <button
        class=${["c-button",this.size,this.variant].join(" ")}
        @click=${this.onclick}
      >
      ${this.icon&&this.icon!=="none"?l`<c-icon icon=${this.icon}></c-icon>`:""}
        <span>${this.label}</span>
      </button>
    `}createRenderRoot(){return this}};o([e({converter:t=>"c-button--"+t})],i.prototype,"variant",2);o([e({converter:t=>"c-button--"+t})],i.prototype,"size",2);o([e()],i.prototype,"label",2);o([e()],i.prototype,"width",2);o([e()],i.prototype,"onClick",2);o([e()],i.prototype,"icon",2);o([e()],i.prototype,"href",2);o([e()],i.prototype,"alt",2);i=o([p("c-button")],i);const m={title:"Button",argTypes:{size:{control:{type:"select"},options:["normal","large"]},width:{control:{type:"select"},options:["auto","full"]},label:{control:{type:"text"}},onClick:{action:"onClick"},icon:{control:{type:"select"},options:["none","arrow-down","expand","github","plus","wave","arrow-left","mail","theme","windows","dribbble","twitter","expand","npm"]}},args:{icon:"plus",label:"Button",size:"normal",width:"auto",onClick:()=>{}}},w=({...t},{argTypes:s})=>l`
    <c-button
      variant=${t.variant}
      label=${t.label?t.label:"Button"}
      size=${t.size}
      onclick=${t.onClick?t.onClick:()=>{}}
      width=${t.width}
      icon=${t.icon?t.icon:""}
    >
    </c-button>
  `,v=w.bind({}),z=["Button"];export{v as Button,z as __namedExportsOrder,m as default};
//# sourceMappingURL=Button.stories.ff79262b.js.map
