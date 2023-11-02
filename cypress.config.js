const { defineConfig } = require("cypress");
const { configurePlugin } = require("cypress-mongodb");

module.exports = defineConfig({
  retries: 1,
  //projectId: "d15px9", for cypressCloud
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true,
  },
  env: {
    mongodb: {
      uri: "mongodb://localhost:27017",
      database: "database_name",
      collection: "collection_name",
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      configurePlugin(on);
    },
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4200/",
    viewportWidth: 1200,
  },
});
