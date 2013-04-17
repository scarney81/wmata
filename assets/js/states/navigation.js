/*globals WMATA*/
WMATA.statechart.addState('navigable', {

  globalConcurrentState: 'navigation',

  home: function() {
    WMATA.statechart.goToState('home', 'default');
  }

});

WMATA.statechart.addState('unnavigable', {

  globalConcurrentState: 'navigation'

});