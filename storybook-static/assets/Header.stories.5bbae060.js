import{y as o}from"./lit-html.9f764a13.js";import{B as l}from"./Button.ed9131a0.js";const n=({user:e,onLogin:i,onLogout:r,onCreateAccount:d})=>o`
  <header>
    <div class="wrapper">
      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <path
              d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
              fill="#FFF"
            />
            <path
              d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
              fill="#555AB9"
            />
            <path
              d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
              fill="#91BAF8"
            />
          </g>
        </svg>
        <h1>Acme</h1>
      </div>
      <div>
        ${e?l({size:"small",onClick:r,label:"Log out"}):o`${l({size:"small",onClick:i,label:"Log in"})}
            ${l({primary:!0,size:"small",onClick:d,label:"Sign up"})}`}
      </div>
    </div>
  </header>
`,g={title:"Example/Header"},t=e=>n(e),a=t.bind({});a.args={user:{}};const s=t.bind({});s.args={};const v=["LoggedIn","LoggedOut"],m=Object.freeze(Object.defineProperty({__proto__:null,default:g,LoggedIn:a,LoggedOut:s,__namedExportsOrder:v},Symbol.toStringTag,{value:"Module"}));export{n as H,a as L,s as a,m as b};
//# sourceMappingURL=Header.stories.5bbae060.js.map
