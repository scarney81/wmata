/*globals WMATA*/
window.WMATA = window.WMATA || {};

WMATA.View = Backbone.View.extend({

  close: function() {
    this.stopListening();
    this.unbind();
  }

});