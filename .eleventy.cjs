const litPlugin = require('@lit-labs/eleventy-plugin-lit');
const { asyncGlob, syncGlob } = require('./util/async-glob.cjs');
const { build: esbuild } = require('esbuild');
const { styles } = require('eleventy-plugin-styles');
const {rmdir} = require('fs');

module.exports = function (eleventyConfig) {
  const esbuildConfig = {
    format: 'esm',
    bundle: true,
    splitting: true,
    sourcemap: false,
    minify: false,
    allowOverwrite: true,
  };


  rmdir(
    './build/stylesheets',
    { recursive: true, force: true },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );

  let componentModules

  eleventyConfig.on('afterBuild', async () => {
    componentModules = await asyncGlob('src/components/**/*.*');

    esbuild({
      entryPoints: componentModules,
      outdir: './build/components',
      ...esbuildConfig,
    });





    const scripts = await asyncGlob('src/scripts/**/*.*');
    esbuild({
      entryPoints: scripts,
      outdir: './build/scripts',
      ...esbuildConfig,
    });

    esbuild({
      entryPoints: [
        'node_modules/@webcomponents/template-shadowroot/template-shadowroot.js',
      ],
      outdir: 'build/node_modules/@webcomponents/template-shadowroot',
      ...esbuildConfig,
    });

    esbuild({
      entryPoints: ['node_modules/lit/experimental-hydrate-support.js'],
      outdir: 'build/node_modules/lit',
      ...esbuildConfig,
    });

    esbuild({
      entryPoints: ['node_modules/@11ty/is-land/is-land.js'],
      outdir: 'build/scripts',
      ...esbuildConfig,
    });
  });

  eleventyConfig.addPlugin(litPlugin, {
    mode: 'worker',
    componentModules,
  });

  eleventyConfig.addFilter('imageDimensions', (value) => {
    const [width, height] = value.split('x');
    return `width="${width}" height="${height}"`;
  });

  eleventyConfig.addWatchTarget('src/scripts/');
  eleventyConfig.addWatchTarget('src/components/');
  eleventyConfig.addWatchTarget('node_modules/lit');
  eleventyConfig.addWatchTarget(
    'node_modules/@webcomponents/template-shadowroot'
  );

  eleventyConfig.addWatchTarget(
    'node_modules/@11ty/is-land'
  );



  syncGlob('public/*').forEach(file => {
  })

  eleventyConfig.addPassthroughCopy({'public/fonts':'fonts'})
  eleventyConfig.addPassthroughCopy({'public/images':'images'})
  eleventyConfig.addPassthroughCopy({'public/favicon.svg':'favicon.svg'})
  eleventyConfig.addPassthroughCopy({'public/resume.pdf':'resume.pdf'})

	eleventyConfig.addPlugin(styles, {
    criticalOptions:'off',
		inputDirectory: 'src',
	});

  return {
    dir: {
      input: 'src',
      output: 'build',
    },
    htmlTemplateEngine: 'njk',
  };
};
