// Generated by CoffeeScript 1.6.2
var Delegate, Emitter, View, extend, guid, makeElement, rivets, util,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Emitter = require('emitter');

guid = require('guid');

Delegate = require('./delegate');

extend = require('extend');

makeElement = require('./makeElement');

util = require('./util');

rivets = require('rivets');

View = (function(_super) {
  __extends(View, _super);

  function View(opt) {
    if (opt == null) {
      opt = {};
    }
    this._id = guid();
    this._configure(opt);
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.eventBindings = new Delegate(this.$el, this.events, this);
    this.delegateEvents();
  }

  View.prototype.tagName = 'div';

  View.prototype.id = null;

  View.prototype.className = null;

  View.prototype.attributes = null;

  View.prototype.$ = function(sel) {
    return this.$el.find(sel);
  };

  View.prototype.bind = function(data) {
    rivets.bind(this.$el, data);
    return this;
  };

  View.prototype.initialize = function() {
    return this;
  };

  View.prototype.render = function() {
    return this;
  };

  View.prototype.dispose = function() {
    this.undelegateEvents();
    return this;
  };

  View.prototype.remove = function() {
    this.dispose();
    this.$el.remove();
    return this;
  };

  View.prototype.setElement = function(el, delegate) {
    if (delegate == null) {
      delegate = true;
    }
    if (this.$el) {
      this.undelegateEvents();
    }
    this.$el = $(el);
    this.el = this.$el[0];
    if (delegate) {
      this.delegateEvents();
    }
    return this;
  };

  View.prototype.delegateEvents = function() {
    this.undelegateEvents();
    this.eventBindings.bind();
    return this;
  };

  View.prototype.undelegateEvents = function() {
    this.eventBindings.unbind();
    return this;
  };

  View.prototype._configure = function(opt) {
    this.options = extend({}, this.options, opt);
    return this;
  };

  View.prototype._ensureElement = function() {
    var attr, virt;

    if (this.el) {
      this.setElement(util.result(this.el), false);
    } else {
      attr = extend({}, util.result(this.attributes));
      if (this.id) {
        attr.id = util.result(this.id);
      }
      if (this.className) {
        attr["class"] = util.result(this.className);
      }
      virt = makeElement(util.result(this.tagName), attr, util.result(this.content));
      this.setElement(virt, false);
    }
    return this;
  };

  return View;

})(Emitter);

module.exports = View;
