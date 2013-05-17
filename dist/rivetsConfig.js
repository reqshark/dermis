// Generated by CoffeeScript 1.6.1
var cfg, k, prevent, publishers, v, _ref,
  __slice = [].slice;

prevent = require('prevent');

cfg = {
  preloadData: true,
  formatters: {
    exists: function(v) {
      return v != null;
    },
    empty: function(v) {
      return !((v != null) && (v != null ? v.length : void 0) !== 0);
    },
    date: function(v) {
      return moment(v).format('MMM DD, YYYY');
    },
    money: function(v) {
      return accounting.formatMoney(v);
    },
    toNumber: function(v) {
      return +v;
    },
    toString: function(v) {
      return String(v);
    },
    negate: function(v) {
      return !v;
    },
    is: function(v, a) {
      return v === a;
    },
    isnt: function(v, a) {
      return v !== a;
    },
    gt: function(v, a) {
      return v > a;
    },
    lt: function(v, a) {
      return v < a;
    },
    at: function(v, a) {
      if (v == null) {
        return v;
      }
      return v[parseInt(a)];
    },
    join: function(v, a) {
      if (v == null) {
        return v;
      }
      return v.join(a);
    },
    split: function(v, a) {
      if (v == null) {
        return v;
      }
      return v.split(a);
    },
    prepend: function() {
      var a, v;
      v = arguments[0], a = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return a.join(' ') + v;
    },
    append: function() {
      var a, v;
      v = arguments[0], a = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
      return v + a.join(' ');
    },
    length: function(v) {
      if (v == null) {
        return v;
      }
      return v.length;
    },
    cancelEvent: function(v) {
      if (v == null) {
        return v;
      }
      return function(e) {
        prevent(e);
        v.call(this, e);
        return false;
      };
    },
    sort: function(arr, direction) {
      if (direction == null) {
        direction = 'asc';
      }
      if (direction === 'desc') {
        return arr.sort().reverse();
      }
      return arr.sort();
    },
    sortBy: function(arr, field, direction) {
      if (direction == null) {
        direction = 'asc';
      }
      if (direction === 'desc') {
        return arr.sort(function(a, b) {
          return b[field] > a[field];
        });
      } else {
        return arr.sort(function(a, b) {
          return a[field] > b[field];
        });
      }
    }
  },
  adapter: {
    subscribe: function(obj, kp, cb) {
      obj.on("change:" + kp, cb);
    },
    unsubscribe: function(obj, kp, cb) {
      obj.removeListener("change:" + kp, cb);
    },
    read: function(obj, kp) {
      return obj.get(kp);
    },
    publish: function(obj, kp, val) {
      obj.set(kp, val);
    }
  }
};

publishers = ["toNumber", "toString"];

_ref = cfg.formatters;
for (k in _ref) {
  v = _ref[k];
  if (publishers.indexOf(k) !== -1) {
    v.publish = v.read = v;
  }
}

module.exports = cfg;
