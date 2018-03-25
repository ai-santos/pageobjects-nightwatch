const sauceLabCommands = {
  clickLink: function(){
    this.waitForElementVisible('@link', 1000)
      .waitForElementVisible('@link', 1000)
      .click('@link')
      .api.pause(1000)
    return this;
  }
};

module.exports = {
  commands: [sauceLabCommands],
  url: function() {
    return this.api.launchUrl + '/test/guinea-pig';
  },
  elements: {
    link: {
      selector: 'a[href="/test-guinea-pig2.html"]'
    }
  }
};