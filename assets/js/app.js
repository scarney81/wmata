/*globals WMATA*/
window.WMATA = window.WMATA || {};

// #= require 'lib/jquery.js'
// #= require 'lib/underscore.js'
// #= require 'lib/bootstrap.js'
// #= require 'lib/backbone.js'
// #= require 'lib/stativus.js'

// #= require_tree 'templates'
// #= require_tree 'views'
// #= require_tree 'states'
// #= require 'router'

$(document).ready(function() {
  WMATA.statechart.initStates({ 'default': 'application', 'navigation': 'navigable' });
});