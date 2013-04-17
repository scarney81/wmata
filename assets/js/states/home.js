/*globals WMATA*/
WMATA.statechart.addState('home', {

  parentState: 'application',

  enterState: function() {
    this.view = new WMATA.HomeView();
    this.view.render();
  },

  exitState: function() {
    this.view.close();
    delete this.view;
  }

});