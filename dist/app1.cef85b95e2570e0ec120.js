(function () {
  var _$1 = this;

  function _4(e, n, a) {
    e.exports = a("opMI");
  }

  function _5(e, n, a) {
    "use strict";

    var t = a("U7vG"),
        r = a.n(t),
        l = a("F8kA"),
        i = [{
      id: 0,
      name: "Michelle",
      friends: [1, 2, 3]
    }, {
      id: 1,
      name: "Sean",
      friends: [0, 3]
    }, {
      id: 2,
      name: "Kim",
      friends: [0, 1, 3]
    }, {
      id: 3,
      name: "David",
      friends: [1, 2]
    }],
        c = function (e) {
      return i.find(function (n) {
        return n.id == e;
      });
    },
        u = function () {
      return r.a.createElement(l.a, null, r.a.createElement(d, {
        match: {
          params: {
            id: 0
          },
          url: ""
        }
      }));
    },
        d = function e(n) {
      var a = n.match,
          t = c(a.params.id);
      return r.a.createElement("div", null, r.a.createElement("h3", null, t.name, "’s Friends"), r.a.createElement("ul", null, t.friends.map(function (e) {
        return r.a.createElement("li", {
          key: e
        }, r.a.createElement(l.b, {
          to: a.url + "/" + e
        }, c(e).name));
      })), r.a.createElement(l.c, {
        path: a.url + "/:id",
        component: e
      }));
    };

    n.a = u;
  }

  function _6(e, n, a) {
    "use strict";

    _$1.Object.defineProperty(n, "__esModule", {
      value: !0
    }), function (e) {
      var n = a("U7vG"),
          t = a.n(n),
          r = a("O27J"),
          l = (a.n(r), a("iM52")),
          i = a("TRsz"),
          c = a("xaDz");
      r.render(t.a.createElement("h1", null, t.a.createElement("p", null, "App1 loaded, using React version ", t.a.version, " and children loaded with another version of react"), t.a.createElement(l.a, null), t.a.createElement(i.a, null), t.a.createElement(c.a, null), "----------------------------------------"), e.document.getElementById("App1"));
    }.call(n, a("DuR2"));
  }

  var _0 = this;

  var _1 = _0.webpackJsonp;

  if (_0.webpackJsonp !== _1) {
    throw new Error("Prepack model invariant violation: " + _0.webpackJsonp);
  }

  var _$0 = _1([6], {
    0: _4,
    iM52: _5,
    opMI: _6
  }, [0]);
}).call(this);