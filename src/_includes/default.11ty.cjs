const { asyncGlob } = require('../../util/async-glob.cjs');

module.exports = async function ({ content, stylesheets, title = 'Eleventy' }) {
  const componentsJs = await asyncGlob('./src/components/**/*.js');
  const componentUrlsJs = componentsJs.map((component) => {
    return `/components/${component.split(`./src/components/`)[1]}`;
  });


  const componentsTs = await asyncGlob('./src/components/**/*.ts');
  const componentUrlsTs = componentsTs.map((component) => {
    let path = `/components/${component.split(`./src/components/`)[1]}`;
    console.log(path)
    return path.split('.ts')[0] + '.js'
  });


  const scriptsTs = await asyncGlob('./src/scripts/**/*.ts');
  const scriptUrlsTs = scriptsTs.map((script) => {
    let path = `/scripts/${script.split(`./src/scripts/`)[1]}`;
    console.log(path)
    return path.split('.ts')[0] + '.js'
  });

  const componentUrls = [...componentUrlsJs, ...componentUrlsTs];

  const scripts = [...componentUrls, ...scriptUrlsTs]
  const preloads = scripts
    .map((component) => {
      return `<link rel="modulepreload" href="${component}" />`;
    })
    .join(`\n`);

  const dynamicImports = scripts
    .map((component) => {
      return `import('${component}');`;
    })
    .join(`\n`);
  const styles =
    stylesheets
      ?.map((stylesheet) => {
        return `<link rel="stylesheet" href="${stylesheet}" />`;
      })
      .join(`\n`) || ``;
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />

    <title>${title}</title>

    <!-- As an optimization, immediately begin fetching the JavaScript modules
    that we know for sure we'll eventually need. It's important we don't
    execute them yet, though. -->
    <link
    rel="modulepreload"
    href="/node_modules/lit/experimental-hydrate-support.js"
    />
    <link
    rel="modulepreload"
    href="/scripts/is-land.js"
    />
${preloads}
    ${styles}

    <!-- On browsers that don't yet support native declarative shadow DOM, a
         paint can occur after some or all pre-rendered HTML has been parsed,
         but before the declarative shadow DOM polyfill has taken effect. This
         paint is undesirable because it won't include any component shadow DOM.
         To prevent layout shifts that can result from this render, we use a
         "dsd-pending" attribute to ensure we only paint after we know
         shadow DOM is active. -->
    <style>
      body[dsd-pending] {
        display: none;
      }
    </style>
  </head>

  <body dsd-pending>
    <script>
      if (HTMLTemplateElement.prototype.hasOwnProperty('shadowRoot')) {
        // This browser has native declarative shadow DOM support, so we can
        // allow painting immediately.
        document.body.removeAttribute('dsd-pending');
      }
    </script>

    <!-- Pre-rendered Lit components will be generated here. -->
    ${content}

    <!-- At this point, browsers with native shadow DOM support will already
         be able to paint the initial fully styled state your components,
         without executing a single line of JavaScript! However, the components
         aren't interactive yet -- that's what hydration is for. -->

    <!-- Use a type=module script so that we can use dynamic module imports.
         Note this pattern will not work in IE11. -->

    <script type="module">
      import '/scripts/main.js';
    </script>
    <script type="module">

      (async () => {
        // Start fetching the Lit hydration support module (note the absence
        // of "await" -- we don't want to block yet).
        const litHydrateSupportInstalled = import(
          '/node_modules/lit/experimental-hydrate-support.js'
        );

        // Check if we require the declarative shadow DOM polyfill. As of
        // February 2022, Chrome and Edge have native support, but Firefox
        // and Safari don't yet.
        if (!HTMLTemplateElement.prototype.hasOwnProperty('shadowRoot')) {
          // Fetch the declarative shadow DOM polyfill.
          const { hydrateShadowRoots } = await import(
            '/node_modules/@webcomponents/template-shadowroot/template-shadowroot.js'
          );

          // Apply the polyfill. This is a one-shot operation, so it is important
          // it happens after all HTML has been parsed.
          hydrateShadowRoots(document.body);

          // At this point, browsers without native declarative shadow DOM
          // support can paint the initial state of your components!
          document.body.removeAttribute('dsd-pending');
        }

        // The Lit hydration support module must be installed before we can
        // load any component definitions. Wait until it's ready.
        await litHydrateSupportInstalled;

        // Load component definitions. As each component definition loads, your
        // pre-rendered components will come to life and become interactive.
        //
        // You may also prefer to bundle your components into fewer JS modules.
        // See https://lit.dev/docs/tools/production/#building-with-rollup for
        // more details.
        ${dynamicImports}
      })();
    </script>

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
				<feDisplacementMap
					in="SourceGraphic" scale="8"
					xChannelSelector="R"
					yChannelSelector="B"
				/>
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
		<link
      href="https://use.typekit.net/brg7xei.css"
      rel="preload stylesheet"
      as="style"
      crossorigin
    >

		<c-loader>
      <div style="display: grid;min-height: 100vh;grid-template-columns: clamp(3rem, 4vw, 8rem);grid-template-rows: min-content;place-content: center;">
        <svg class="c-logo u-theme-fill" width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>Artboard</title>
          <g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Logo" transform="translate(0.000000, 5.000000)" fill="currentColor" fill-rule="nonzero">
                  <path d="M9.6,0 L9.6,38.4 L0,38.4 L0,0 L9.6,0 Z M48,19.2 L48,28.8 L38.4,38.4 L38.4,19.2 L48,19.2 Z M28.8,0 L28.8,28.8 L19.2,38.4 L19.2,0 L28.8,0 Z M48,0 L48,9.6 L38.4,19.2 L38.4,0 L48,0 Z"></path>
              </g>
          </g>
        </svg>
      </div>
    </c-loader>

    <c-cursor></c-cursor>
    <c-canvas-noise></c-canvas-noise>
  </body>
</html>`;
};
