const { defineConfig } = require('cypress');
const path = require('path');

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      setupNodeEvents(on, config) {
        return import(path.resolve(__dirname, './starter-code-19/vite.config.ts')).then((viteConfig) => {
          return {
            ...config,
            viteConfig: viteConfig.default,
          };
        });
      },
    },
    supportFile: 'cypress/support/component.js',
    specPattern: 'cypress/component/**/*.cy.{js,jsx,ts,tsx}',
  },
});
