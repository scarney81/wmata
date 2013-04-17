/*globals WMATA*/
WMATA.ApplicationView = WMATA.View.extend({

  el: 'body',

  template: window.JadeTemplates['templates/application'],

  render: function() {
    this.$el.prepend(this.template());
    return this;
  }

});