const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',

  helpers: {
    Playwright: {
      browser: 'chromium',
      url: "http://automationpratice.com.br/",
      show: false,
      waitForTimeout: 5000,
      use:{
        screenshot:"only-on-failure"
      }
    }
  },

  include: {
    I: './steps_file.js'
  },

  plugins: {
    htmlReporter: {
      enabled: true
    },

    allure: {
      enabled: true,
      require: "@codeceptjs/allure-legacy",
      outputDir: "output/allure-results"
    }
  },

  name: 'CodeceptJS'
}