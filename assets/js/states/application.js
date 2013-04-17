/*globals WMATA*/
WMATA.statechart = Stativus.createStatechart();

WMATA.statechart.addState('application', {

  enterState: function() {
    this.view = new WMATA.ApplicationView();
    this.view.render();

    WMATA.router = new WMATA.Router();
    Backbone.history.start({ pushState: true });
  }

});