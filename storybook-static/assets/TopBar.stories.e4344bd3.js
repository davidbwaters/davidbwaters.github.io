import{i as d,s as m,y as s,a as c}from"./query-assigned-elements.44c72d86.js";import"./lit-html.9f764a13.js";import"./Icon.16fc8648.js";var p=Object.defineProperty,g=Object.getOwnPropertyDescriptor,b=(o,e,a,i)=>{for(var t=i>1?void 0:i?g(e,a):e,n=o.length-1,r;n>=0;n--)(r=o[n])&&(t=(i?r(e,a,t):r(t))||t);return i&&t&&p(e,a,t),t};let l=class extends m{render(){return s`
      <slot name="logo"> </slot>
      <nav class="c-top-bar__nav">
        <slot name="link"> </slot>
      </nav>
    `}};l.styles=d`

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
  `;l=b([c("c-top-bar")],l);const u={title:"Top Bar"},h=({...o})=>s`
    <c-top-bar class="u-position-relative">
      <a
        slot="logo"
        title="Home"
      >
        <svg class="u-wrapper-full"  viewBox="0 0 48 48">
          <use href="images/logo.svg#img"></use>
        </svg>
      </a>
      <a
        slot="link"
        title="Email"
      >
        <c-icon icon="mail"></c-icon>
      </a>
      <a
        slot="link"
        title="Twitter"
      >
        <c-icon icon="twitter"></c-icon>
      </a>
      <a
        slot="link"
        title="Dribbble"
      >
        <c-icon icon="dribbble"></c-icon>
      </a>
      <a
        slot="link"
        title="Github"
      >
        <c-icon icon="github"></c-icon>
      </a>
      <a
        slot="link"
        title="NPM"
      >
        <c-icon icon="npm"></c-icon>
      </a>
    </c-top-bar>
  `,w=h.bind({});w.args={};const x=["TopBar"];export{w as TopBar,x as __namedExportsOrder,u as default};
//# sourceMappingURL=TopBar.stories.e4344bd3.js.map
