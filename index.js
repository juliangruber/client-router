
var paramify = require('paramify')
var singlePage = require('single-page')
var Emitter = require('events').EventEmitter
var inherits = require('util').inherits

function Router () {
  var self = this
  Emitter.call(self)
  self.go = singlePage(function (href) {
    self.emit('route', paramify(href), href)
  })
}

inherits(Router, Emitter)
module.exports = new Router()
