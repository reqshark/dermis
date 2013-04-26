// Generated by CoffeeScript 1.6.1
var Emitter, Model, adapter, mpath, rivets, syncAdapter, toJSON,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

rivets = require('rivets');

syncAdapter = require('./syncAdapter');

Emitter = require('emitter');

mpath = require('mpath');

adapter = require('./modelAdapter');

toJSON = require('./toJSON');

Model = (function(_super) {

  __extends(Model, _super);

  Model._isModel = true;

  Model.prototype._isModel = true;

  Model.prototype.sync = syncAdapter;

  Model.prototype.casts = null;

  Model.prototype.accessors = null;

  Model.prototype.defaults = null;

  Model.prototype.format = null;

  Model.prototype._fetched = false;

  function Model(o) {
    var _ref, _ref1;
    this._props = {};
    if ((_ref = this.casts) == null) {
      this.casts = {};
    }
    if ((_ref1 = this.accessors) == null) {
      this.accessors = {};
    }
    if (this.defaults != null) {
      this.set(this.defaults);
    }
    if (this.format != null) {
      o = this.format(o);
    }
    if (!Array.isArray(o)) {
      this.set(o);
    }
  }

  Model.prototype.get = function(k) {
    var _ref;
    if ((_ref = this.accessors[k]) != null ? _ref.get : void 0) {
      return this.accessors[k].get();
    }
    return mpath.get(k, this._props, adapter.get);
  };

  Model.prototype.set = function(k, v, silent) {
    var castModel, ky, vy, _ref;
    if (k == null) {
      return;
    }
    if (typeof k === 'object') {
      silent = v;
      for (ky in k) {
        vy = k[ky];
        this.set(ky, vy, silent);
      }
      return this;
    } else {
      castModel = this.casts[k];
      if (castModel != null) {
        if (castModel._isModel) {
          v = new castModel(v);
        } else {
          v = castModel(v);
        }
      }
      if ((_ref = this.accessors[k]) != null ? _ref.set : void 0) {
        this.accessors[k].set(v);
      } else {
        mpath.set(k, v, this._props, adapter.set(silent));
      }
      if (!silent) {
        this.emit("change", k, v);
        this.emit("change:" + k, v);
      }
      return this;
    }
  };

  Model.prototype.clear = function(silent) {
    var k, v, _ref;
    _ref = this._props;
    for (k in _ref) {
      if (!__hasProp.call(_ref, k)) continue;
      v = _ref[k];
      this.remove(k, silent);
    }
    return this;
  };

  Model.prototype.has = function(k) {
    return this.get(k) != null;
  };

  Model.prototype.remove = function(k, silent) {
    this.set(k, null, true);
    if (!silent) {
      this.emit("change", k);
      this.emit("change:" + k);
      this.emit("remove", k);
      this.emit("remove:" + k);
    }
    return this;
  };

  Model.prototype.toJSON = function() {
    return toJSON(this._props);
  };

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
      if (_this.format != null) {
        res.body = _this.format(res.body);
      }
      if (typeof res.body === 'object') {
        _this.set(res.body);
      }
      _this._fetched = true;
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

  Model.prototype.fetched = function(cb) {
    if (this._fetched) {
      cb();
    } else {
      this.once("fetched", cb);
    }
    return this;
  };

  Model.prototype.bind = function(el) {
    rivets.bind(el, this);
    return this;
  };

  return Model;

})(Emitter);

module.exports = Model;
