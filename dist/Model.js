// Generated by CoffeeScript 1.6.1
var Model, mixer, rivets, syncAdapter,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

mixer = require('mixer');

rivets = require('rivets');

syncAdapter = require('./syncAdapter');

Model = (function(_super) {

  __extends(Model, _super);

  function Model() {
    return Model.__super__.constructor.apply(this, arguments);
  }

  Model.prototype.sync = syncAdapter;

  Model.prototype.fetch = function(opt, cb) {
    var _this = this;
    if (typeof opt === 'function' && !cb) {
      cb = opt;
      opt = {};
    }
    this.emit("fetching", opt);
    this.sync('read', this, opt, function(err, res) {
      if (err != null) {
        _this.emit("fetchError", err);
        if (cb) {
          cb(err);
        }
        return;
      }
      if (typeof res.body === 'object') {
        _this.set(res.body);
      }
      _this.emit("fetched", res);
      if (cb) {
        return cb(err, res);
      }
    });
    return this;
  };

  Model.prototype.save = function(opt, cb) {
    var _this = this;
    if (typeof opt === 'function' && !cb) {
      cb = opt;
      opt = {};
    }
    this.emit("saving", opt);
    this.sync('update', this, opt, function(err, res) {
      if (err != null) {
        _this.emit("saveError", err);
        if (cb) {
          cb(err);
        }
        return;
      }
      _this.emit("saved", res);
      if (cb) {
        return cb(err, res);
      }
    });
    return this;
  };

  Model.prototype.create = function(opt, cb) {
    var _this = this;
    if (typeof opt === 'function' && !cb) {
      cb = opt;
      opt = {};
    }
    this.emit("creating", opt);
    this.sync('create', this, opt, function(err, res) {
      if (err != null) {
        _this.emit("createError", err);
        if (cb) {
          cb(err);
        }
        return;
      }
      _this.emit("created", res);
      if (cb) {
        return cb(err, res);
      }
    });
    return this;
  };

  Model.prototype.destroy = function(opt, cb) {
    var _this = this;
    if (typeof opt === 'function' && !cb) {
      cb = opt;
      opt = {};
    }
    this.emit("destroying", opt);
    this.sync('destroy', this, opt, function(err, res) {
      if (err != null) {
        _this.emit("destroyError", err);
        if (cb) {
          cb(err);
        }
        return;
      }
      _this.emit("destroyed", res);
      if (cb) {
        return cb(err, res);
      }
    });
    return this;
  };

  Model.prototype.bind = function(el) {
    return rivets.bind(el, this);
  };

  return Model;

})(mixer.Module);

module.exports = Model;