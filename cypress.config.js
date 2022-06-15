const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
  },
  e2e: {
    baseUrl: 'http://localhost:3000',
    excludeSpecPattern: ["**/1-getting-started/*.js",
        "**/2-advanced-examples/*.js"],
      setupNodeEvents(on, config) {
    },

  },
});
