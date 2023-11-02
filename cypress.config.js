const { defineConfig } = require("cypress");
module.exports = defineConfig({
  retries: 1,
  projectId: "d15px9",
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4200/",
    viewportWidth: 1200,
  },
});
