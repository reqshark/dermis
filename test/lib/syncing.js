// Generated by CoffeeScript 1.6.3
var should,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

should = chai.should();

describe("syncing", function() {
  describe("create", function() {
    return it("should POST with data", function(done) {
      var fakeModel;
      fakeModel = new dermis.Channel;
      fakeModel.url = "http://localhost:8888/tests";
      fakeModel.toJSON = function() {
        var o;
        o = {
          test: "hello"
        };
        return o;
      };
      return dermis.sync('create', fakeModel, function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.status.should.equal(200);
        should.exist(res.body);
        res.body.test.should.equal('hello');
        return done();
      });
    });
  });
  describe("read", function() {
    return it("should GET correctly", function(done) {
      var fakeModel;
      fakeModel = new dermis.Channel;
      fakeModel.url = "http://localhost:8888/tests/1";
      fakeModel.toJSON = function() {
        return {};
      };
      return dermis.sync('read', fakeModel, function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.status.should.equal(200);
        should.exist(res.body);
        res.body.test.should.equal('hello');
        return done();
      });
    });
  });
  describe("update", function() {
    return it("should PUT correctly", function(done) {
      var fakeModel;
      fakeModel = new dermis.Channel;
      fakeModel.url = "http://localhost:8888/tests/1";
      fakeModel.toJSON = function() {
        var o;
        o = {
          jarude: "jarude"
        };
        return o;
      };
      return dermis.sync('update', fakeModel, function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.status.should.equal(200);
        should.exist(res.body);
        should.not.exist(res.body.test);
        should.exist(res.body.jarude);
        res.body.jarude.should.equal('jarude');
        return done();
      });
    });
  });
  describe("patch", function() {
    return it("should PATCH correctly", function(done) {
      var fakeModel;
      if (window._phantom) {
        return done();
      }
      fakeModel = new dermis.Channel;
      fakeModel.url = "http://localhost:8888/tests/1";
      fakeModel.toJSON = function() {
        var o;
        o = {
          test: "jarude"
        };
        return o;
      };
      return dermis.sync('patch', fakeModel, function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.status.should.equal(200);
        should.exist(res.body);
        res.body.test.should.equal('jarude');
        return done();
      });
    });
  });
  return describe("destroy", function() {
    return it("should DEL correctly", function(done) {
      var fakeModel;
      fakeModel = new dermis.Channel;
      fakeModel.url = "http://localhost:8888/tests/1";
      fakeModel.toJSON = function() {
        return {};
      };
      return dermis.sync('destroy', fakeModel, function(err, res) {
        should.not.exist(err);
        should.exist(res);
        res.status.should.equal(200);
        should.exist(res.body);
        res.body.test.should.equal('hello');
        return done();
      });
    });
  });
});

describe("model syncing", function() {
  describe("fetch", function() {
    it("should work with read url", function(done) {
      var TestModel, fetched, mod, synced, syncing, _ref;
      TestModel = (function(_super) {
        __extends(TestModel, _super);

        function TestModel() {
          _ref = TestModel.__super__.constructor.apply(this, arguments);
          return _ref;
        }

        TestModel.prototype.urls = {
          create: "http://localhost:8888/tests",
          update: "http://localhost:8888/tests/1",
          read: "http://localhost:8888/tests/1",
          patch: "http://localhost:8888/tests/1",
          destroy: "http://localhost:8888/tests/1"
        };

        return TestModel;

      })(dermis.Model);
      syncing = false;
      synced = false;
      fetched = false;
      mod = new TestModel;
      mod.on("fetching", function(opt) {
        should.exist(opt);
        return syncing = true;
      });
      mod.on("fetched", function(res) {
        should.exist(res);
        return synced = true;
      });
      mod.fetched(function() {
        return fetched = true;
      });
      return mod.fetch(function(err, res) {
        return process.nextTick(function() {
          should.not.exist(err);
          should.exist(res);
          res.status.should.equal(200);
          mod.get("test").should.equal("hello");
          syncing.should.equal(true);
          synced.should.equal(true);
          fetched.should.equal(true);
          return done();
        });
      });
    });
    return it("should work with single url", function(done) {
      var TestModel, fetched, mod, synced, syncing, _ref;
      TestModel = (function(_super) {
        __extends(TestModel, _super);

        function TestModel() {
          _ref = TestModel.__super__.constructor.apply(this, arguments);
          return _ref;
        }

        TestModel.prototype.url = "http://localhost:8888/tests/1";

        return TestModel;

      })(dermis.Model);
      syncing = false;
      synced = false;
      fetched = false;
      mod = new TestModel;
      mod.on("fetching", function(opt) {
        should.exist(opt);
        return syncing = true;
      });
      mod.on("fetched", function(res) {
        should.exist(res);
        return synced = true;
      });
      mod.fetched(function() {
        return fetched = true;
      });
      return mod.fetch(function(err, res) {
        return process.nextTick(function() {
          should.not.exist(err);
          should.exist(res);
          res.status.should.equal(200);
          mod.get("test").should.equal("hello");
          syncing.should.equal(true);
          synced.should.equal(true);
          fetched.should.equal(true);
          return done();
        });
      });
    });
  });
  describe("save", function() {
    it("should work with save url", function(done) {
      var TestModel, mod, synced, syncing, _ref;
      TestModel = (function(_super) {
        __extends(TestModel, _super);

        function TestModel() {
          _ref = TestModel.__super__.constructor.apply(this, arguments);
          return _ref;
        }

        TestModel.prototype.urls = {
          create: "http://localhost:8888/tests",
          update: "http://localhost:8888/tests/1",
          read: "http://localhost:8888/tests/1",
          patch: "http://localhost:8888/tests/1",
          destroy: "http://localhost:8888/tests/1"
        };

        return TestModel;

      })(dermis.Model);
      syncing = false;
      synced = false;
      mod = new TestModel;
      mod.set("test", "hello");
      mod.on("saving", function(opt) {
        should.exist(opt);
        return syncing = true;
      });
      mod.on("saved", function(res) {
        should.exist(res);
        return synced = true;
      });
      return mod.save(function(err, res) {
        return process.nextTick(function() {
          should.not.exist(err);
          should.exist(res);
          res.status.should.equal(200);
          mod.get("test").should.equal("hello");
          syncing.should.equal(true);
          synced.should.equal(true);
          return done();
        });
      });
    });
    return it("should work with single url", function(done) {
      var TestModel, mod, synced, syncing, _ref;
      TestModel = (function(_super) {
        __extends(TestModel, _super);

        function TestModel() {
          _ref = TestModel.__super__.constructor.apply(this, arguments);
          return _ref;
        }

        TestModel.prototype.url = "http://localhost:8888/tests/1";

        return TestModel;

      })(dermis.Model);
      syncing = false;
      synced = false;
      mod = new TestModel;
      mod.set("test", "hello");
      mod.on("saving", function(opt) {
        should.exist(opt);
        return syncing = true;
      });
      mod.on("saved", function(res) {
        should.exist(res);
        return synced = true;
      });
      return mod.save(function(err, res) {
        return process.nextTick(function() {
          should.not.exist(err);
          should.exist(res);
          res.status.should.equal(200);
          mod.get("test").should.equal("hello");
          syncing.should.equal(true);
          synced.should.equal(true);
          return done();
        });
      });
    });
  });
  describe("create", function() {
    it("should work with create url", function(done) {
      var TestModel, mod, synced, syncing, _ref;
      TestModel = (function(_super) {
        __extends(TestModel, _super);

        function TestModel() {
          _ref = TestModel.__super__.constructor.apply(this, arguments);
          return _ref;
        }

        TestModel.prototype.urls = function() {
          return {
            read: "http://localhost:8888/tests/1",
            save: "http://localhost:8888/tests/1",
            destroy: "http://localhost:8888/tests/1",
            create: "http://localhost:8888/tests"
          };
        };

        return TestModel;

      })(dermis.Model);
      syncing = false;
      synced = false;
      mod = new TestModel;
      mod.set("test", "hello");
      mod.on("creating", function(opt) {
        should.exist(opt);
        return syncing = true;
      });
      mod.on("created", function(res) {
        should.exist(res);
        return synced = true;
      });
      return mod.create(function(err, res) {
        return process.nextTick(function() {
          should.not.exist(err);
          should.exist(res);
          res.status.should.equal(200);
          mod.get("test").should.equal("hello");
          syncing.should.equal(true);
          synced.should.equal(true);
          return done();
        });
      });
    });
    return it("should work with single url", function(done) {
      var TestModel, mod, synced, syncing, _ref;
      TestModel = (function(_super) {
        __extends(TestModel, _super);

        function TestModel() {
          _ref = TestModel.__super__.constructor.apply(this, arguments);
          return _ref;
        }

        TestModel.prototype.url = "http://localhost:8888/tests";

        return TestModel;

      })(dermis.Model);
      syncing = false;
      synced = false;
      mod = new TestModel;
      mod.set("test", "hello");
      mod.on("creating", function(opt) {
        should.exist(opt);
        return syncing = true;
      });
      mod.on("created", function(res) {
        should.exist(res);
        return synced = true;
      });
      return mod.create(function(err, res) {
        return process.nextTick(function() {
          should.not.exist(err);
          should.exist(res);
          res.status.should.equal(200);
          mod.get("test").should.equal("hello");
          syncing.should.equal(true);
          synced.should.equal(true);
          return done();
        });
      });
    });
  });
  return describe("destroy", function() {
    it("should work with destroy url", function(done) {
      var TestModel, mod, synced, syncing, _ref;
      TestModel = (function(_super) {
        __extends(TestModel, _super);

        function TestModel() {
          _ref = TestModel.__super__.constructor.apply(this, arguments);
          return _ref;
        }

        TestModel.prototype.urls = function() {
          return {
            read: function() {
              return "http://localhost:8888/tests/1";
            },
            save: function() {
              return "http://localhost:8888/tests/1";
            },
            destroy: function() {
              return "http://localhost:8888/tests/1";
            },
            create: function() {
              return "http://localhost:8888/tests";
            }
          };
        };

        return TestModel;

      })(dermis.Model);
      syncing = false;
      synced = false;
      mod = new TestModel;
      mod.set("test", "hello");
      mod.on("destroying", function(opt) {
        should.exist(opt);
        return syncing = true;
      });
      mod.on("destroyed", function(res) {
        should.exist(res);
        return synced = true;
      });
      return mod.destroy(function(err, res) {
        return process.nextTick(function() {
          should.not.exist(err);
          should.exist(res);
          res.status.should.equal(200);
          mod.get("test").should.equal("hello");
          syncing.should.equal(true);
          synced.should.equal(true);
          return done();
        });
      });
    });
    return it("should work with single url", function(done) {
      var TestModel, mod, synced, syncing, _ref;
      TestModel = (function(_super) {
        __extends(TestModel, _super);

        function TestModel() {
          _ref = TestModel.__super__.constructor.apply(this, arguments);
          return _ref;
        }

        TestModel.prototype.url = function() {
          return "http://localhost:8888/tests/1";
        };

        return TestModel;

      })(dermis.Model);
      syncing = false;
      synced = false;
      mod = new TestModel;
      mod.set("test", "hello");
      mod.on("destroying", function(opt) {
        should.exist(opt);
        return syncing = true;
      });
      mod.on("destroyed", function() {
        return synced = true;
      });
      return mod.destroy(function(err, res) {
        return process.nextTick(function() {
          should.not.exist(err);
          should.exist(res);
          res.status.should.equal(200);
          mod.get("test").should.equal("hello");
          syncing.should.equal(true);
          synced.should.equal(true);
          return done();
        });
      });
    });
  });
});

describe("collection syncing", function() {
  return describe("fetch", function() {
    it("should work with read url", function(done) {
      var TestSet, mod, synced, syncing, _ref;
      TestSet = (function(_super) {
        __extends(TestSet, _super);

        function TestSet() {
          _ref = TestSet.__super__.constructor.apply(this, arguments);
          return _ref;
        }

        TestSet.prototype.urls = {
          read: "http://localhost:8888/tests"
        };

        return TestSet;

      })(dermis.Collection);
      syncing = false;
      synced = false;
      mod = new TestSet;
      mod.on("fetching", function(opt) {
        should.exist(opt);
        return syncing = true;
      });
      mod.on("fetched", function(res) {
        should.exist(res);
        return synced = true;
      });
      return mod.fetch(function(err, res) {
        return process.nextTick(function() {
          should.not.exist(err);
          should.exist(res);
          res.status.should.equal(200);
          mod.at(0).test.should.equal("hello");
          mod.at(1).test.should.equal("world");
          syncing.should.equal(true);
          synced.should.equal(true);
          return done();
        });
      });
    });
    return it("should work with single url", function(done) {
      var TestSet, mod, synced, syncing, _ref;
      TestSet = (function(_super) {
        __extends(TestSet, _super);

        function TestSet() {
          _ref = TestSet.__super__.constructor.apply(this, arguments);
          return _ref;
        }

        TestSet.prototype.url = "http://localhost:8888/tests";

        return TestSet;

      })(dermis.Collection);
      syncing = false;
      synced = false;
      mod = new TestSet;
      mod.on("fetching", function(opt) {
        should.exist(opt);
        return syncing = true;
      });
      mod.on("fetched", function(res) {
        should.exist(res);
        return synced = true;
      });
      return mod.fetch(function(err, res) {
        return process.nextTick(function() {
          should.not.exist(err);
          should.exist(res);
          res.status.should.equal(200);
          mod.at(0).test.should.equal("hello");
          mod.at(1).test.should.equal("world");
          syncing.should.equal(true);
          synced.should.equal(true);
          return done();
        });
      });
    });
  });
});
