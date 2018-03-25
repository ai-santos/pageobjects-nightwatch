module.exports = {
  url: function() {
    return this.api.launchUrl + '/test-guinea-pig2.html';
  },
  elements: {
    div: {
      selector:
        '#i_am_an_id'
    }
  }
};