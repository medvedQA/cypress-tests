const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'md5u62',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotOnRunFailure : true,
  },
});
