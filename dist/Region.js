// Generated by CoffeeScript 1.6.3
var Emitter, Region, _ref,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  __slice = [].slice;

Emitter = require('emitter');

Region = (function(_super) {
  __extends(Region, _super);

  function Region() {
    this.clear = __bind(this.clear, this);
    this.set = __bind(this.set, this);
    this.show = __bind(this.show, this);
    _ref = Region.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  Region.prototype.view = null;

  Region.prototype.$el = null;

  Region.prototype.show = function() {
    var a, _ref1;
    a = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
    if (this.view) {
      this.clear();
      this.view.setElement(this.view.el);
      this.$el.html((_ref1 = this.view).render.apply(_ref1, a).el);
      this.emit("show");
    }
    return this;
  };

  Region.prototype.set = function(nu) {
    this.view = nu;
    this.emit("change", nu);
    return this;
  };

  Region.prototype.clear = function() {
    if (this.view) {
      this.view.remove();
      this.emit("clear");
    }
    return this;
  };

  return Region;

})(Emitter);

module.exports = Region;
