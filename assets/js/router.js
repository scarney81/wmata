/*globals WMATA*/
WMATA.Router = Backbone.Router.extend({

  routes: {
    '*route': 'home'
  },

  home: function() {
    WMATA.statechart.sendEvent('home');
  }

});