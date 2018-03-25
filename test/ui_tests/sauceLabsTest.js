require('../../nightwatch.conf.js');

module.exports = {
  "Validate Sauce Labs' Page Has Loaded": function(browser) {
    const sauceLabs = browser.page.sauceLabs();

    sauceLabs.navigate()
      .waitForElementVisible('body', 1000)
      .assert.title('I am a page title - Sauce Labs')

    browser.end();
  },

  "Validate Sauce Labs' Link Navigation": function(browser) {
    const sauceLabs = browser.page.sauceLabs();

    sauceLabs.navigate()
      .waitForElementVisible('@link', 1000)
      .clickLink();

    const sauceLabs2 = browser.page.sauceLabsTwo();

    sauceLabs2
      .waitForElementVisible('@div', 1000)
      .assert.visible('@div');

    browser.end();
  }
};