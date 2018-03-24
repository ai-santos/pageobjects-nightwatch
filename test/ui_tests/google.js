require('../../nightwatch.conf.js');

module.exports = {
  'Verify Google Page Title': function(browser) {
    browser
      .url('https://www.google.com/')
      .waitForElementVisible('body')
      .assert.title('Google')
      .saveScreenshot('google.png')
      .end();
  }
};