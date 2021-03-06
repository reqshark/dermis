// Generated by CoffeeScript 1.6.3
var should,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

should = chai.should();

describe("binding formatters", function() {
  var formatters;
  formatters = dermis.internal.bindingConfig.formatters;
  describe("exists", function() {
    return it('should work', function(done) {
      formatters.exists(null).should.equal(false);
      formatters.exists().should.equal(false);
      formatters.exists(1).should.equal(true);
      formatters.exists("jarude").should.equal(true);
      return done();
    });
  });
  describe("empty", function() {
    it('should work with arrays', function(done) {
      formatters.empty([]).should.equal(true);
      formatters.empty([1]).should.equal(false);
      return done();
    });
    it('should work with strings', function(done) {
      formatters.empty("").should.equal(true);
      formatters.empty("jarude").should.equal(false);
      return done();
    });
    return it('should work with other', function(done) {
      formatters.empty(null).should.equal(true);
      formatters.empty().should.equal(true);
      formatters.empty(1).should.equal(false);
      formatters.empty({
        jarude: true
      }).should.equal(false);
      return done();
    });
  });
  describe("toNumber", function() {
    return it('should work', function(done) {
      formatters.toNumber("1").should.equal(1);
      formatters.toNumber("2.35").should.equal(2.35);
      return done();
    });
  });
  describe("toString", function() {
    return it('should work', function(done) {
      formatters.toString(1).should.equal("1");
      formatters.toString(2.35).should.equal("2.35");
      return done();
    });
  });
  describe("negate", function() {
    return it('should work', function(done) {
      formatters.negate(true).should.equal(false);
      formatters.negate(false).should.equal(true);
      return done();
    });
  });
  describe("is", function() {
    return it('should work', function(done) {
      formatters.is("1", "2").should.equal(false);
      formatters.is("1", "1").should.equal(true);
      return done();
    });
  });
  describe("isnt", function() {
    return it('should work', function(done) {
      formatters.isnt("1", "2").should.equal(true);
      formatters.isnt("1", "1").should.equal(false);
      return done();
    });
  });
  describe("gt", function() {
    return it('should work', function(done) {
      formatters.gt(2, 1).should.equal(true);
      formatters.gt(1, 1).should.equal(false);
      formatters.gt(0, 1).should.equal(false);
      return done();
    });
  });
  describe("lt", function() {
    return it('should work', function(done) {
      formatters.lt(1, 2).should.equal(true);
      formatters.lt(1, 1).should.equal(false);
      formatters.lt(1, 0).should.equal(false);
      return done();
    });
  });
  describe("at", function() {
    return it('should work', function(done) {
      formatters.at([1, 2], 1).should.equal(2);
      formatters.at("jah", 0).should.equal("j");
      return done();
    });
  });
  describe("length", function() {
    return it('should work', function(done) {
      formatters.length("test").should.equal(4);
      formatters.length([1, 2, 3]).should.equal(3);
      return done();
    });
  });
  describe("join", function() {
    return it('should work', function(done) {
      formatters.join([1, 2, 3, 4], ",").should.equal("1,2,3,4");
      return done();
    });
  });
  describe("split", function() {
    return it('should work', function(done) {
      formatters.split("1,2,3,4", ",").should.eql(["1", "2", "3", "4"]);
      return done();
    });
  });
  describe("prepend", function() {
    return it('should work', function(done) {
      formatters.prepend("world", "hello").should.equal("helloworld");
      formatters.prepend("world", "hello", "cruel").should.equal("hello cruelworld");
      return done();
    });
  });
  describe("append", function() {
    return it('should work', function(done) {
      formatters.append("hello", "world").should.equal("helloworld");
      formatters.append("hello", "cruel", "world").should.equal("hellocruel world");
      return done();
    });
  });
  describe("cancelEvent", function() {
    return it('should work', function(done) {
      var called, fakeEvent, fakeScope, newFunction;
      called = false;
      fakeScope = {};
      fakeEvent = {
        preventDefault: function() {
          return called = true;
        }
      };
      newFunction = formatters.cancelEvent(function(e) {
        should.exist(e);
        should.exist(e.preventDefault);
        this.should.equal(fakeScope);
        called.should.equal(true);
        return done();
      });
      return newFunction.call(fakeScope, fakeEvent);
    });
  });
  describe("sort", function() {
    it('should sort asc by default', function(done) {
      formatters.sort([5, 3, 1, 2, 4]).should.eql([1, 2, 3, 4, 5]);
      return done();
    });
    it('should work with strings', function(done) {
      formatters.sort(["Banana", "Orange", "Apple", "Mango"]).should.eql(["Apple", "Banana", "Mango", "Orange"]);
      return done();
    });
    it('should sort asc if specified', function(done) {
      formatters.sort([5, 3, 1, 2, 4], 'asc').should.eql([1, 2, 3, 4, 5]);
      return done();
    });
    return it('should sort desc if specified', function(done) {
      formatters.sort([5, 3, 1, 2, 4], 'desc').should.eql([5, 4, 3, 2, 1]);
      return done();
    });
  });
  return describe("sortBy", function() {
    it('should sort asc by default on specified field', function(done) {
      var expected, inp, out;
      inp = [
        {
          name: 'Dune',
          date: '12/14/84'
        }, {
          name: 'Batman',
          date: '6/23/89'
        }
      ];
      expected = [
        {
          name: 'Batman',
          date: '6/23/89'
        }, {
          name: 'Dune',
          date: '12/14/84'
        }
      ];
      out = formatters.sortBy(inp, 'name');
      out[0].name.should.equal(expected[0].name);
      out[1].name.should.equal(expected[1].name);
      return done();
    });
    return it('should sort desc when specified', function(done) {
      var expected, inp, out;
      inp = [
        {
          name: 'Batman',
          date: '6/23/89'
        }, {
          name: 'Dune',
          date: '12/14/84'
        }
      ];
      expected = [
        {
          name: 'Dune',
          date: '12/14/84'
        }, {
          name: 'Batman',
          date: '6/23/89'
        }
      ];
      out = formatters.sortBy(inp, 'name', 'desc');
      out[0].name.should.equal(expected[0].name);
      out[1].name.should.equal(expected[1].name);
      return done();
    });
  });
});

describe("binding adapter", function() {
  var adapter;
  adapter = dermis.internal.bindingConfig.adapter;
  describe("subscribe", function() {
    return it('should work with named keypath', function(done) {
      var changed, fakeModel;
      changed = function(newVal) {
        should.exist(newVal);
        newVal.should.equal("hello");
        return done();
      };
      fakeModel = new dermis.Channel;
      adapter.subscribe(fakeModel, "test", changed);
      return fakeModel.emit("change:test", "hello");
    });
  });
  describe("unsubscribe", function() {
    return it('should work with named keypath', function(done) {
      var changed, fakeModel;
      changed = function(newVal) {
        throw new Error("Called!");
      };
      fakeModel = new dermis.Channel;
      adapter.subscribe(fakeModel, "test", changed);
      adapter.unsubscribe(fakeModel, "test", changed);
      fakeModel.emit("change:test", "hello");
      return done();
    });
  });
  describe("read", function() {
    return it('should work with named keypath', function(done) {
      var fakeModel;
      fakeModel = new dermis.Model;
      fakeModel.set('test', 'hello');
      adapter.read(fakeModel, "test").should.equal('hello');
      return done();
    });
  });
  return describe("publish", function() {
    return it('should work with named keypath', function(done) {
      var fakeModel;
      fakeModel = new dermis.Model;
      adapter.publish(fakeModel, "test", "hello");
      fakeModel.get('test').should.equal('hello');
      return done();
    });
  });
});

describe("actual binding", function() {
  it('should be able to bind by model', function(done) {
    var TestView, el, fakeModel, vu, _ref;
    fakeModel = new dermis.Model;
    fakeModel.set("test", "hello");
    TestView = (function(_super) {
      __extends(TestView, _super);

      function TestView() {
        _ref = TestView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TestView.prototype.attributes = {
        "data-text": ".test"
      };

      return TestView;

    })(dermis.View);
    vu = new TestView;
    el = $(vu.render().el);
    fakeModel.bind(el);
    el.html().should.equal("hello");
    return done();
  });
  it('should be able to bind by view', function(done) {
    var TestView, el, fakeModel, vu, _ref;
    fakeModel = new dermis.Model;
    fakeModel.set("test", "hello");
    TestView = (function(_super) {
      __extends(TestView, _super);

      function TestView() {
        _ref = TestView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TestView.prototype.attributes = {
        "data-text": ".test"
      };

      return TestView;

    })(dermis.View);
    vu = new TestView;
    el = $(vu.render().el);
    vu.bind(fakeModel);
    el.html().should.equal("hello");
    return done();
  });
  it('should be able to bind with collection', function(done) {
    var TestView, el, fakeList, john, tim, tom, vu, _ref;
    fakeList = new dermis.Collection;
    john = new dermis.Model({
      name: "John",
      score: 100
    });
    tom = new dermis.Model({
      name: "Tom",
      score: 50
    });
    tim = new dermis.Model({
      name: "Tim",
      score: 10
    });
    fakeList.add(john);
    fakeList.add(tom);
    TestView = (function(_super) {
      __extends(TestView, _super);

      function TestView() {
        _ref = TestView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TestView.prototype.tagName = "ul";

      TestView.prototype.content = "<li data-each-user='.models'>\n<p class='username' data-text='user.name'></p>\n<p class='score' data-text='user.score'></p>\n</li>";

      return TestView;

    })(dermis.View);
    vu = new TestView;
    el = $(vu.render().el);
    vu.bind(fakeList);
    el.children().length.should.equal(2);
    el.children().eq(0).find(".username").html().should.equal("John");
    el.children().eq(0).find(".score").html().should.equal("100");
    el.children().eq(1).find(".username").html().should.equal("Tom");
    el.children().eq(1).find(".score").html().should.equal("50");
    fakeList.at(0).set('score', 200);
    el.children().eq(0).find(".score").html().should.equal("200");
    fakeList.add(tim);
    el.children().eq(2).find(".username").html().should.equal("Tim");
    el.children().eq(2).find(".score").html().should.equal("10");
    return done();
  });
  it('should be able to bind with collection and nesting', function(done) {
    var Person, TestView, el, fakeList, john, tim, tom, vu, _ref, _ref1;
    fakeList = new dermis.Collection;
    Person = (function(_super) {
      __extends(Person, _super);

      function Person() {
        _ref = Person.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Person.prototype.casts = {
        name: dermis.Model
      };

      return Person;

    })(dermis.Model);
    john = new Person({
      name: {
        first: "John"
      },
      score: 100
    });
    tom = new dermis.Model({
      name: {
        first: "Tom"
      },
      score: 50
    });
    tim = new dermis.Model({
      name: {
        first: "Tim"
      },
      score: 10
    });
    fakeList.add(john);
    fakeList.add(tom);
    TestView = (function(_super) {
      __extends(TestView, _super);

      function TestView() {
        _ref1 = TestView.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      TestView.prototype.tagName = "ul";

      TestView.prototype.content = "<li data-each-user='.models'>\n<p class='username' data-text='user.name.first'></p>\n<p class='score' data-text='user.score'></p>\n</li>";

      return TestView;

    })(dermis.View);
    vu = new TestView;
    el = $(vu.render().el);
    vu.bind(fakeList);
    el.children().length.should.equal(2);
    el.children().eq(0).find(".username").html().should.equal("John");
    el.children().eq(0).find(".score").html().should.equal("100");
    el.children().eq(1).find(".username").html().should.equal("Tom");
    el.children().eq(1).find(".score").html().should.equal("50");
    fakeList.at(0).set('score', 200);
    el.children().eq(0).find(".score").html().should.equal("200");
    fakeList.add(tim);
    el.children().eq(2).find(".username").html().should.equal("Tim");
    el.children().eq(2).find(".score").html().should.equal("10");
    return done();
  });
  it('should be able to bind with collection and nesting 2', function(done) {
    var Person, TestView, el, fakeList, john, tim, tom, vu, _ref, _ref1;
    fakeList = new dermis.Collection;
    Person = (function(_super) {
      __extends(Person, _super);

      function Person() {
        _ref = Person.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Person.prototype.casts = {
        name: dermis.Model
      };

      return Person;

    })(dermis.Model);
    john = new Person({
      name: {
        first: "John"
      },
      score: 100
    });
    tom = new dermis.Model({
      name: {
        first: "Tom"
      },
      score: 50
    });
    tim = new dermis.Model({
      name: {
        first: "Tim"
      },
      score: 10
    });
    fakeList.add(john);
    fakeList.add(tom);
    TestView = (function(_super) {
      __extends(TestView, _super);

      function TestView() {
        _ref1 = TestView.__super__.constructor.apply(this, arguments);
        return _ref1;
      }

      TestView.prototype.tagName = "ul";

      TestView.prototype.content = "<li data-each-user='.models'>\n<p class='username' data-text='user.name.first.0'></p>\n<p class='score' data-text='user.score'></p>\n</li>";

      return TestView;

    })(dermis.View);
    vu = new TestView;
    el = $(vu.render().el);
    vu.bind(fakeList);
    el.children().length.should.equal(2);
    el.children().eq(0).find(".username").html().should.equal("J");
    el.children().eq(0).find(".score").html().should.equal("100");
    el.children().eq(1).find(".username").html().should.equal("T");
    el.children().eq(1).find(".score").html().should.equal("50");
    fakeList.at(0).set('score', 200);
    el.children().eq(0).find(".score").html().should.equal("200");
    fakeList.add(tim);
    el.children().eq(2).find(".username").html().should.equal("T");
    el.children().eq(2).find(".score").html().should.equal("10");
    return done();
  });
  it('should be able to bind with collection and formatter', function(done) {
    var TestView, el, fakeList, john, tim, tom, vu, _ref;
    fakeList = new dermis.Collection;
    john = new dermis.Model({
      name: "John",
      score: 100
    });
    tom = new dermis.Model({
      name: "Tom",
      score: 50
    });
    tim = new dermis.Model({
      name: "Tim",
      score: 10
    });
    fakeList.add(john);
    fakeList.add(tom);
    TestView = (function(_super) {
      __extends(TestView, _super);

      function TestView() {
        _ref = TestView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TestView.prototype.tagName = "ul";

      TestView.prototype.content = "<li data-each-user='.models' data-show='user.name | is John'>\n<p class='username' data-text='user.name'></p>\n<p class='score' data-text='user.score'></p>\n</li>";

      return TestView;

    })(dermis.View);
    vu = new TestView;
    el = $(vu.render().el);
    vu.bind(fakeList);
    el.children().length.should.equal(2);
    el.children().eq(0).find(".username").html().should.equal("John");
    el.children().eq(0).find(".score").html().should.equal("100");
    el.children().eq(1).attr('style').trim().should.equal("display: none;");
    el.children().eq(1).find(".username").html().should.equal("Tom");
    el.children().eq(1).find(".score").html().should.equal("50");
    return done();
  });
  it('should be able to bind with collection and events', function(done) {
    var TestView, el, fakeList, john, tom, vu, _ref;
    fakeList = new dermis.Collection;
    john = new dermis.Model({
      name: "John",
      score: 1
    });
    tom = new dermis.Model({
      name: "Tom",
      score: 50
    });
    john.add = function() {
      return this.set('score', this.get('score') + 1);
    };
    fakeList.add(john);
    fakeList.add(tom);
    TestView = (function(_super) {
      __extends(TestView, _super);

      function TestView() {
        _ref = TestView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TestView.prototype.tagName = "ul";

      TestView.prototype.content = "<li data-each-user='.models' data-show='user.name'>\n<p class='username' data-text='user.name'></p>\n<p class='score' data-text='user.score' data-on-click='user:add'></p>\n</li>";

      return TestView;

    })(dermis.View);
    vu = new TestView;
    el = $(vu.render().el);
    vu.bind(fakeList);
    el.children().length.should.equal(2);
    el.children().eq(0).find(".score").html().should.equal("1");
    el.children().eq(0).find(".score").click();
    el.children().eq(0).find(".score").html().should.equal("2");
    return done();
  });
  it('should be able to bind with collection and events that wipe', function(done) {
    var TestView, el, fakeList, john, tom, vu, _ref;
    fakeList = new dermis.Collection;
    john = new dermis.Model({
      name: "John",
      score: 1
    });
    tom = new dermis.Model({
      name: "Tom",
      score: 50
    });
    john.wipe = function() {
      return this.remove('score');
    };
    fakeList.add(john);
    fakeList.add(tom);
    TestView = (function(_super) {
      __extends(TestView, _super);

      function TestView() {
        _ref = TestView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TestView.prototype.tagName = "ul";

      TestView.prototype.content = "<li data-each-user='.models' data-show='user.name'>\n<p class='username' data-text='user.name'></p>\n<p class='score' data-text='user.score' data-on-click='user:wipe'></p>\n</li>";

      return TestView;

    })(dermis.View);
    vu = new TestView;
    el = $(vu.render().el);
    vu.bind(fakeList);
    el.children().length.should.equal(2);
    el.children().eq(0).find(".score").html().should.equal("1");
    el.children().eq(0).find(".score").click();
    el.children().eq(0).find(".score").html().should.equal("");
    return done();
  });
  return it('should be able to two way bind with collection', function(done) {
    var TestView, el, fakeList, john, tom, vu, _ref;
    fakeList = new dermis.Collection;
    john = new dermis.Model({
      name: "John",
      score: 1
    });
    tom = new dermis.Model({
      name: "Tom",
      score: 50
    });
    fakeList.add(john);
    fakeList.add(tom);
    TestView = (function(_super) {
      __extends(TestView, _super);

      function TestView() {
        _ref = TestView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      TestView.prototype.tagName = "ul";

      TestView.prototype.content = "<li data-each-user='.models' data-show='user.name'>\n<p class='username' data-text='user.name'></p>\n<input class='score' data-value='user.score | toNumber'></input>\n</li>";

      return TestView;

    })(dermis.View);
    vu = new TestView;
    el = $(vu.render().el);
    vu.bind(fakeList);
    el.children().length.should.equal(2);
    el.children().eq(0).find(".score").val().should.equal("1");
    el.children().eq(0).find(".score").val("2");
    el.children().eq(0).find(".score").change();
    el.children().eq(0).find(".score").val().should.equal("2");
    john.get("score").should.equal(2);
    return done();
  });
});
