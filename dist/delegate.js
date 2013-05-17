// Generated by CoffeeScript 1.6.1
var Delegate, splitEvents;

splitEvents = require('event-splitter');

Delegate = (function() {

  Delegate.prototype._binds = [];

  function Delegate(root, events, context) {
    this.root = root;
    this.events = events != null ? events : {};
    this.context = context != null ? context : {};
  }

  Delegate.prototype.bindEvent = function(event, selector, handler) {
    if (typeof handler === "string") {
      handler = this.context[handler];
    }
    $(this.root).on(event, selector, handler);
    this._binds.push([event, selector, handler]);
    return this;
  };

  Delegate.prototype.unbindEvent = function(event, selector, handler) {
    if (typeof handler === "string") {
      handler = this.context[handler];
    }
    $(this.root).off(event, selector, handler);
    return this;
  };

  Delegate.prototype.bind = function() {
    var evhandler, handler, name, selector, str, _ref, _ref1;
    _ref = this.events;
    for (str in _ref) {
      handler = _ref[str];
      if (typeof handler === 'object') {
        for (name in handler) {
          evhandler = handler[name];
          this.bindEvent(name, str, evhandler);
        }
      } else {
        _ref1 = splitEvents(str), name = _ref1.name, selector = _ref1.selector;
        this.bindEvent(name, selector, handler);
      }
    }
    return this;
  };

  Delegate.prototype.unbind = function() {
    var z, _i, _len, _ref;
    _ref = this._binds;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      z = _ref[_i];
      this.unbindEvent.apply(this, z);
    }
    this._binds = [];
    return this;
  };

  return Delegate;

})();

module.exports = Delegate;
