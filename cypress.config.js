const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3nvtiw',
  e2e: {
    watchForFileChanges: false,
    chromeWebSecurity: false,
    responseTimeout:60000,
    defaultCommandTimeout: 70000,
    pageLoadTimeout: 70000,
    reporter: "mochawesome",
    reporterOptions:{
      "charts":true,
      "overwrite":true,
      "html":true,
      "json":true,
      "reportDir":"cypress/report"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
