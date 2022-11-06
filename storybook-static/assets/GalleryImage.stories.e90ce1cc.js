import{e as c,a as y,s as g,y as p}from"./query-assigned-elements.44c72d86.js";import"./lit-html.9f764a13.js";var m=Object.defineProperty,h=Object.getOwnPropertyDescriptor,i=(e,l,o,r)=>{for(var t=r>1?void 0:r?h(l,o):l,s=e.length-1,n;s>=0;s--)(n=e[s])&&(t=(r?n(l,o,t):n(t))||t);return r&&t&&m(l,o,t),t};let a=class extends g{constructor(){super(...arguments),this.styles=`
    .c-gallery-image__image {
      height: 100%;
      object-fit: cover;
      width: 100%;
    }
  `,this.gallery="",this.src="",this.alt=""}createRenderRoot(){return this}render(){return p`
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
    `}};i([c({type:String})],a.prototype,"gallery",2);i([c({type:String})],a.prototype,"src",2);i([c({type:String})],a.prototype,"alt",2);a=i([y("c-gallery-image")],a);const u={title:"GalleryImage",argTypes:{size:{control:{type:"select"},options:["normal","large"]},width:{control:{type:"select"},options:["auto","full"]},label:{control:{type:"text"}},onClick:{action:"onClick"},icon:{control:{type:"select"},options:["none","arrow-down","expand","github","plus","wave","arrow-left","mail","theme","windows","dribbble","twitter","expand","npm"]}},args:{icon:"plus",label:"GalleryImage",size:"normal",width:"auto",onClick:()=>{}}},d=({...e},{argTypes:l})=>p`
    <c-GalleryImage
      variant=${e.variant}
      label=${e.label?e.label:"GalleryImage"}
      size=${e.size}
      onclick=${e.onClick?e.onClick:()=>{}}
      width=${e.width}
      icon=${e.icon?e.icon:""}
    >
    </c-GalleryImage>
  `,w=d.bind({}),$=["GalleryImage"];export{w as GalleryImage,$ as __namedExportsOrder,u as default};
//# sourceMappingURL=GalleryImage.stories.e90ce1cc.js.map
