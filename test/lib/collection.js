// Generated by CoffeeScript 1.6.3
var should,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

should = chai.should();

describe("collection general", function() {
  it("should be able to add", function(done) {
    var TestSet, mod, _ref;
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref = TestSet.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.on("add", function(v) {
      v.should.equal(2);
      return done();
    });
    return mod.add(2);
  });
  it("should be able to add multiple", function(done) {
    var TestSet, mod, _ref;
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref = TestSet.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([2, 3]);
    mod.toJSON().models.should.eql([2, 3]);
    return done();
  });
  it("should be able to add with casting", function(done) {
    var TestModel, TestSet, mod, _ref, _ref1;
    TestModel = (function(_super) {
      __extends(TestModel, _super);

      function TestModel() {
        _ref = TestModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestModel;

    })(dermis.Model);
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref1 = TestSet.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      TestSet.prototype.model = TestModel;

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.on("add", function(v) {
      (v instanceof TestModel).should.equal(true);
      v.get('name').should.equal("Test");
      return done();
    });
    return mod.add({
      name: "Test"
    });
  });
  it("should be able to add multiple with casting", function(done) {
    var TestModel, TestSet, mod, v, _i, _len, _ref, _ref1, _ref2;
    TestModel = (function(_super) {
      __extends(TestModel, _super);

      function TestModel() {
        _ref = TestModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestModel;

    })(dermis.Model);
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref1 = TestSet.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      TestSet.prototype.model = TestModel;

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([
      {
        name: "Test"
      }, {
        name: "Test"
      }
    ]);
    _ref2 = mod.getAll();
    for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
      v = _ref2[_i];
      (v instanceof TestModel).should.equal(true);
      v.get('name').should.equal("Test");
    }
    return done();
  });
  it("should be able to remove by value", function(done) {
    var TestSet, mod, _ref;
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref = TestSet.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([2, 3]);
    mod.remove(2);
    mod.toJSON().models.should.eql([3]);
    return done();
  });
  it("should be able to remove multiple by value", function(done) {
    var TestSet, mod, _ref;
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref = TestSet.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([2, 3, 4]);
    mod.remove([2, 4]);
    mod.toJSON().models.should.eql([3]);
    return done();
  });
  it("should be able to remove by index", function(done) {
    var TestSet, mod, _ref;
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref = TestSet.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([2, 3]);
    mod.removeAt(1);
    mod.toJSON().models.should.eql([2]);
    return done();
  });
  it("should be able to find index by value", function(done) {
    var TestSet, mod, _ref;
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref = TestSet.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([2, 3]);
    mod.indexOf(2).should.equal(0);
    return done();
  });
  it("should be able to find value by index", function(done) {
    var TestSet, mod, _ref;
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref = TestSet.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([2, 3]);
    mod.at(0).should.equal(2);
    return done();
  });
  it("should be able to get first value", function(done) {
    var TestSet, mod, _ref;
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref = TestSet.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([2, 3]);
    mod.first().should.equal(2);
    return done();
  });
  it("should be able to get all values", function(done) {
    var TestModel, TestSet, mod, _ref, _ref1;
    TestModel = (function(_super) {
      __extends(TestModel, _super);

      function TestModel() {
        _ref = TestModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestModel;

    })(dermis.Model);
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref1 = TestSet.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      TestSet.prototype.model = TestModel;

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([
      {
        name: "Test"
      }, {
        name: "Test"
      }
    ]);
    mod.getAll()[0].get('name').should.equal("Test");
    mod.getAll()[1].get('name').should.equal("Test");
    return done();
  });
  it("should be able to get all values as JSON", function(done) {
    var TestModel, TestSet, mod, _ref, _ref1;
    TestModel = (function(_super) {
      __extends(TestModel, _super);

      function TestModel() {
        _ref = TestModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestModel;

    })(dermis.Model);
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref1 = TestSet.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      TestSet.prototype.model = TestModel;

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([
      {
        name: "Test"
      }, {
        name: "Test"
      }
    ]);
    mod.toJSON().models[0].name.should.equal("Test");
    mod.toJSON().models[1].name.should.equal("Test");
    return done();
  });
  it("should be able to get last value", function(done) {
    var TestSet, mod, _ref;
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref = TestSet.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([2, 3]);
    mod.last().should.equal(3);
    return done();
  });
  it("should be able to get size", function(done) {
    var TestSet, mod, _ref;
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref = TestSet.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([2, 3]);
    mod.size().should.equal(2);
    return done();
  });
  it("should be able to reset", function(done) {
    var TestSet, mod, _ref;
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref = TestSet.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([2, 3, 4]);
    mod.on("reset", function() {
      mod.toJSON().models.should.eql([]);
      return done();
    });
    return mod.reset();
  });
  it("should be able to reset with casting", function(done) {
    var TestModel, TestSet, mod, _ref, _ref1;
    TestModel = (function(_super) {
      __extends(TestModel, _super);

      function TestModel() {
        _ref = TestModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestModel;

    })(dermis.Model);
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref1 = TestSet.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      TestSet.prototype.model = TestModel;

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([
      {
        name: "bob"
      }
    ]);
    mod.reset([
      {
        name: "test"
      }, {
        name: "john"
      }
    ]);
    mod.at(0).get('name').should.equal("test");
    mod.at(1).get('name').should.equal("john");
    return done();
  });
  it("should be able to reset silently", function(done) {
    var TestSet, mod, _ref;
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref = TestSet.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([2, 3, 4]);
    mod.on("reset", function() {
      throw new Error("emitted");
    });
    mod.reset(true);
    mod.toJSON().models.should.eql([]);
    return done();
  });
  it("should be able to reset to values", function(done) {
    var TestSet, mod, _ref;
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref = TestSet.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([2, 3, 4]);
    mod.on("reset", function() {
      mod.toJSON().models.should.eql([2, 3, 5]);
      return done();
    });
    return mod.reset([2, 3, 5]);
  });
  it("should be able to reset to values silently", function(done) {
    var TestSet, mod, _ref;
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref = TestSet.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([2, 3, 4]);
    mod.on("reset", function() {
      throw new Error("emitted");
    });
    mod.reset([2, 3, 5], true);
    mod.toJSON().models.should.eql([2, 3, 5]);
    return done();
  });
  it("should be able to iterate with each", function(done) {
    var TestModel, TestSet, count, mod, _ref, _ref1;
    TestModel = (function(_super) {
      __extends(TestModel, _super);

      function TestModel() {
        _ref = TestModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestModel;

    })(dermis.Model);
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref1 = TestSet.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      TestSet.prototype.model = TestModel;

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([
      {
        name: "Test"
      }, {
        name: "Test"
      }
    ]);
    count = 0;
    mod.each(function(mod) {
      mod.get("name").should.equal("Test");
      return count++;
    });
    count.should.equal(2);
    return done();
  });
  it("should be able to pluck properties from vanilla", function(done) {
    var TestSet, mod, names, _ref;
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref = TestSet.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([
      {
        name: "John"
      }, {
        name: "Adam"
      }
    ]);
    names = mod.pluck('name');
    names.should.eql(["John", "Adam"]);
    return done();
  });
  it("should be able to pluck properties with casting", function(done) {
    var TestModel, TestSet, mod, names, _ref, _ref1;
    TestModel = (function(_super) {
      __extends(TestModel, _super);

      function TestModel() {
        _ref = TestModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestModel;

    })(dermis.Model);
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref1 = TestSet.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      TestSet.prototype.model = TestModel;

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([
      {
        name: "John"
      }, {
        name: "Adam"
      }
    ]);
    names = mod.pluck('name');
    names.should.eql(["John", "Adam"]);
    return done();
  });
  it("should be able to pluck properties with casting and raw setting", function(done) {
    var TestModel, TestSet, adam, john, mod, names, _ref, _ref1;
    TestModel = (function(_super) {
      __extends(TestModel, _super);

      function TestModel() {
        _ref = TestModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestModel;

    })(dermis.Model);
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref1 = TestSet.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      TestSet.prototype.model = TestModel;

      return TestSet;

    })(dermis.Collection);
    john = new TestModel;
    adam = new TestModel;
    john.name = "John";
    adam.name = "Adam";
    mod = new TestSet;
    mod.add([john, adam]);
    names = mod.pluck('name', true);
    names.should.eql(["John", "Adam"]);
    return done();
  });
  it("should be able to where properties from vanilla", function(done) {
    var TestSet, mod, people, _ref;
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref = TestSet.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([
      {
        name: "John"
      }, {
        name: "Adam"
      }
    ]);
    people = mod.where({
      name: "John"
    });
    people.should.eql([mod.at(0)]);
    return done();
  });
  it("should be able to where properties with casting", function(done) {
    var TestModel, TestSet, mod, people, _ref, _ref1;
    TestModel = (function(_super) {
      __extends(TestModel, _super);

      function TestModel() {
        _ref = TestModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestModel;

    })(dermis.Model);
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref1 = TestSet.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      TestSet.prototype.model = TestModel;

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([
      {
        name: "John"
      }, {
        name: "Adam"
      }
    ]);
    people = mod.where({
      name: "John"
    });
    people.should.eql([mod.at(0)]);
    return done();
  });
  it("should be able to where properties with casting and raw setting", function(done) {
    var TestModel, TestSet, adam, john, mod, people, _ref, _ref1;
    TestModel = (function(_super) {
      __extends(TestModel, _super);

      function TestModel() {
        _ref = TestModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestModel;

    })(dermis.Model);
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref1 = TestSet.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      TestSet.prototype.model = TestModel;

      return TestSet;

    })(dermis.Collection);
    john = new TestModel;
    adam = new TestModel;
    john.name = "John";
    adam.name = "Adam";
    mod = new TestSet;
    mod.add([john, adam]);
    people = mod.where({
      name: "John"
    }, true);
    people.should.eql([john]);
    return done();
  });
  return it("should be able to filter items", function(done) {
    var TestSet, mod, people, _ref;
    TestSet = (function(_super) {
      __extends(TestSet, _super);

      function TestSet() {
        _ref = TestSet.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      return TestSet;

    })(dermis.Collection);
    mod = new TestSet;
    mod.add([
      {
        name: "John"
      }, {
        name: "Adam"
      }
    ]);
    people = mod.filter(function(v) {
      return v.name === "John";
    });
    people.should.eql([mod.at(0)]);
    return done();
  });
});
