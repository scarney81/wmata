/*globals WMATA*/
WMATA.HomeView = WMATA.View.extend({

  el: '.content-container',

  template: window.JadeTemplates['templates/home'],

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});