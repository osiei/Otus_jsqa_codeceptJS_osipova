const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://demo-opencart.ru/admin/index.php?route=common',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file.js',
    authPage: './pages/auth.js',
    menuPage: './pages/menu.js',
    langPage: './pages/lang.js',
    categoryPage: './pages/category.js',
    orderPage: './pages/order.js',
    presetStep: './steps/preset.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptJS',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}