
/**
 * Module dependencies.
 */
 
var paramify = require('paramify');
var singlePage = require('single-page');
var Emitter = require('events').EventEmitter;
var inherits = require('util').inherits;

/**
 * Simple router.
 *
 * @return {Function}
 */

module.exports = function () {
  var routes = new Emitter;
  
  var go = singlePage(function (href) {
    routes.emit('route', paramify(href), href);
  });
  
  function router (fn) {
    routes.on('route', fn);
  }
  
  router.go = go;
  router.push = go.push;
  
  return router;
};
