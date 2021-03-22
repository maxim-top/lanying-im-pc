/*! License information can be found in floo-1.0.0.js.LICENSE */
!(function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = "/"),
    r((r.s = 125));
})([
  function (e, t, r) {
    "use strict";
    e.exports = r(111);
  },
  function (e, t, r) {
    "use strict";
    var n,
      o,
      i = (e.exports = r(4)),
      s = r(50);
    (i.codegen = r(122)),
      (i.fetch = r(123)),
      (i.path = r(124)),
      (i.fs = i.inquire("fs")),
      (i.toArray = function (e) {
        if (e) {
          for (
            var t = Object.keys(e), r = new Array(t.length), n = 0;
            n < t.length;

          )
            r[n] = e[t[n++]];
          return r;
        }
        return [];
      }),
      (i.toObject = function (e) {
        for (var t = {}, r = 0; r < e.length; ) {
          var n = e[r++],
            o = e[r++];
          void 0 !== o && (t[n] = o);
        }
        return t;
      });
    var a = /\\/g,
      u = /"/g;
    (i.isReserved = function (e) {
      return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(
        e
      );
    }),
      (i.safeProp = function (e) {
        return !/^[$\w_]+$/.test(e) || i.isReserved(e)
          ? '["' + e.replace(a, "\\\\").replace(u, '\\"') + '"]'
          : "." + e;
      }),
      (i.ucFirst = function (e) {
        return e.charAt(0).toUpperCase() + e.substring(1);
      });
    var c = /_([a-z])/g;
    (i.camelCase = function (e) {
      return (
        e.substring(0, 1) +
        e.substring(1).replace(c, function (e, t) {
          return t.toUpperCase();
        })
      );
    }),
      (i.compareFieldsById = function (e, t) {
        return e.id - t.id;
      }),
      (i.decorateType = function (e, t) {
        if (e.$type)
          return (
            t &&
              e.$type.name !== t &&
              (i.decorateRoot.remove(e.$type),
              (e.$type.name = t),
              i.decorateRoot.add(e.$type)),
            e.$type
          );
        n || (n = r(52));
        var o = new n(t || e.name);
        return (
          i.decorateRoot.add(o),
          (o.ctor = e),
          Object.defineProperty(e, "$type", { value: o, enumerable: !1 }),
          Object.defineProperty(e.prototype, "$type", {
            value: o,
            enumerable: !1,
          }),
          o
        );
      });
    var p = 0;
    (i.decorateEnum = function (e) {
      if (e.$type) return e.$type;
      o || (o = r(5));
      var t = new o("Enum" + p++, e);
      return (
        i.decorateRoot.add(t),
        Object.defineProperty(e, "$type", { value: t, enumerable: !1 }),
        t
      );
    }),
      Object.defineProperty(i, "decorateRoot", {
        get: function () {
          return s.decorated || (s.decorated = new (r(60))());
        },
      });
  },
  function (e, t, r) {
    "use strict";
    var n = r(39),
      o = Object.prototype.toString;
    function i(e) {
      return "[object Array]" === o.call(e);
    }
    function s(e) {
      return void 0 === e;
    }
    function a(e) {
      return null !== e && "object" == typeof e;
    }
    function u(e) {
      return "[object Function]" === o.call(e);
    }
    function c(e, t) {
      if (null != e)
        if (("object" != typeof e && (e = [e]), i(e)))
          for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
        else
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.call(null, e[o], o, e);
    }
    e.exports = {
      isArray: i,
      isArrayBuffer: function (e) {
        return "[object ArrayBuffer]" === o.call(e);
      },
      isBuffer: function (e) {
        return (
          null !== e &&
          !s(e) &&
          null !== e.constructor &&
          !s(e.constructor) &&
          "function" == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        );
      },
      isFormData: function (e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      },
      isArrayBufferView: function (e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && e.buffer instanceof ArrayBuffer;
      },
      isString: function (e) {
        return "string" == typeof e;
      },
      isNumber: function (e) {
        return "number" == typeof e;
      },
      isObject: a,
      isUndefined: s,
      isDate: function (e) {
        return "[object Date]" === o.call(e);
      },
      isFile: function (e) {
        return "[object File]" === o.call(e);
      },
      isBlob: function (e) {
        return "[object Blob]" === o.call(e);
      },
      isFunction: u,
      isStream: function (e) {
        return a(e) && u(e.pipe);
      },
      isURLSearchParams: function (e) {
        return (
          "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
        );
      },
      isStandardBrowserEnv: function () {
        return (
          ("undefined" == typeof navigator ||
            ("ReactNative" !== navigator.product &&
              "NativeScript" !== navigator.product &&
              "NS" !== navigator.product)) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      },
      forEach: c,
      merge: function e() {
        var t = {};
        function r(r, n) {
          "object" == typeof t[n] && "object" == typeof r
            ? (t[n] = e(t[n], r))
            : (t[n] = r);
        }
        for (var n = 0, o = arguments.length; n < o; n++) c(arguments[n], r);
        return t;
      },
      deepMerge: function e() {
        var t = {};
        function r(r, n) {
          "object" == typeof t[n] && "object" == typeof r
            ? (t[n] = e(t[n], r))
            : (t[n] = "object" == typeof r ? e({}, r) : r);
        }
        for (var n = 0, o = arguments.length; n < o; n++) c(arguments[n], r);
        return t;
      },
      extend: function (e, t, r) {
        return (
          c(t, function (t, o) {
            e[o] = r && "function" == typeof t ? n(t, r) : t;
          }),
          e
        );
      },
      trim: function (e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
      },
    };
  },
  function (e, t) {
    e.exports = n;
    var r = null;
    try {
      r = new WebAssembly.Instance(
        new WebAssembly.Module(
          new Uint8Array([
            0,
            97,
            115,
            109,
            1,
            0,
            0,
            0,
            1,
            13,
            2,
            96,
            0,
            1,
            127,
            96,
            4,
            127,
            127,
            127,
            127,
            1,
            127,
            3,
            7,
            6,
            0,
            1,
            1,
            1,
            1,
            1,
            6,
            6,
            1,
            127,
            1,
            65,
            0,
            11,
            7,
            50,
            6,
            3,
            109,
            117,
            108,
            0,
            1,
            5,
            100,
            105,
            118,
            95,
            115,
            0,
            2,
            5,
            100,
            105,
            118,
            95,
            117,
            0,
            3,
            5,
            114,
            101,
            109,
            95,
            115,
            0,
            4,
            5,
            114,
            101,
            109,
            95,
            117,
            0,
            5,
            8,
            103,
            101,
            116,
            95,
            104,
            105,
            103,
            104,
            0,
            0,
            10,
            191,
            1,
            6,
            4,
            0,
            35,
            0,
            11,
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            126,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11,
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            127,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11,
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            128,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11,
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            129,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11,
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            130,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11,
          ])
        ),
        {}
      ).exports;
    } catch (e) {}
    function n(e, t, r) {
      (this.low = 0 | e), (this.high = 0 | t), (this.unsigned = !!r);
    }
    function o(e) {
      return !0 === (e && e.__isLong__);
    }
    n.prototype.__isLong__,
      Object.defineProperty(n.prototype, "__isLong__", { value: !0 }),
      (n.isLong = o);
    var i = {},
      s = {};
    function a(e, t) {
      var r, n, o;
      return t
        ? (o = 0 <= (e >>>= 0) && e < 256) && (n = s[e])
          ? n
          : ((r = c(e, (0 | e) < 0 ? -1 : 0, !0)), o && (s[e] = r), r)
        : (o = -128 <= (e |= 0) && e < 128) && (n = i[e])
        ? n
        : ((r = c(e, e < 0 ? -1 : 0, !1)), o && (i[e] = r), r);
    }
    function u(e, t) {
      if (isNaN(e)) return t ? v : m;
      if (t) {
        if (e < 0) return v;
        if (e >= h) return A;
      } else {
        if (e <= -y) return C;
        if (e + 1 >= y) return E;
      }
      return e < 0 ? u(-e, t).neg() : c(e % l | 0, (e / l) | 0, t);
    }
    function c(e, t, r) {
      return new n(e, t, r);
    }
    (n.fromInt = a), (n.fromNumber = u), (n.fromBits = c);
    var p = Math.pow;
    function f(e, t, r) {
      if (0 === e.length) throw Error("empty string");
      if (
        "NaN" === e ||
        "Infinity" === e ||
        "+Infinity" === e ||
        "-Infinity" === e
      )
        return m;
      if (
        ("number" == typeof t ? ((r = t), (t = !1)) : (t = !!t),
        (r = r || 10) < 2 || 36 < r)
      )
        throw RangeError("radix");
      var n;
      if ((n = e.indexOf("-")) > 0) throw Error("interior hyphen");
      if (0 === n) return f(e.substring(1), t, r).neg();
      for (var o = u(p(r, 8)), i = m, s = 0; s < e.length; s += 8) {
        var a = Math.min(8, e.length - s),
          c = parseInt(e.substring(s, s + a), r);
        if (a < 8) {
          var d = u(p(r, a));
          i = i.mul(d).add(u(c));
        } else i = (i = i.mul(o)).add(u(c));
      }
      return (i.unsigned = t), i;
    }
    function d(e, t) {
      return "number" == typeof e
        ? u(e, t)
        : "string" == typeof e
        ? f(e, t)
        : c(e.low, e.high, "boolean" == typeof t ? t : e.unsigned);
    }
    (n.fromString = f), (n.fromValue = d);
    var l = 4294967296,
      h = l * l,
      y = h / 2,
      g = a(1 << 24),
      m = a(0);
    n.ZERO = m;
    var v = a(0, !0);
    n.UZERO = v;
    var b = a(1);
    n.ONE = b;
    var _ = a(1, !0);
    n.UONE = _;
    var w = a(-1);
    n.NEG_ONE = w;
    var E = c(-1, 2147483647, !1);
    n.MAX_VALUE = E;
    var A = c(-1, -1, !0);
    n.MAX_UNSIGNED_VALUE = A;
    var C = c(0, -2147483648, !1);
    n.MIN_VALUE = C;
    var k = n.prototype;
    (k.toInt = function () {
      return this.unsigned ? this.low >>> 0 : this.low;
    }),
      (k.toNumber = function () {
        return this.unsigned
          ? (this.high >>> 0) * l + (this.low >>> 0)
          : this.high * l + (this.low >>> 0);
      }),
      (k.toString = function (e) {
        if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
        if (this.isZero()) return "0";
        if (this.isNegative()) {
          if (this.eq(C)) {
            var t = u(e),
              r = this.div(t),
              n = r.mul(t).sub(this);
            return r.toString(e) + n.toInt().toString(e);
          }
          return "-" + this.neg().toString(e);
        }
        for (var o = u(p(e, 6), this.unsigned), i = this, s = ""; ; ) {
          var a = i.div(o),
            c = (i.sub(a.mul(o)).toInt() >>> 0).toString(e);
          if ((i = a).isZero()) return c + s;
          for (; c.length < 6; ) c = "0" + c;
          s = "" + c + s;
        }
      }),
      (k.getHighBits = function () {
        return this.high;
      }),
      (k.getHighBitsUnsigned = function () {
        return this.high >>> 0;
      }),
      (k.getLowBits = function () {
        return this.low;
      }),
      (k.getLowBitsUnsigned = function () {
        return this.low >>> 0;
      }),
      (k.getNumBitsAbs = function () {
        if (this.isNegative())
          return this.eq(C) ? 64 : this.neg().getNumBitsAbs();
        for (
          var e = 0 != this.high ? this.high : this.low, t = 31;
          t > 0 && 0 == (e & (1 << t));
          t--
        );
        return 0 != this.high ? t + 33 : t + 1;
      }),
      (k.isZero = function () {
        return 0 === this.high && 0 === this.low;
      }),
      (k.eqz = k.isZero),
      (k.isNegative = function () {
        return !this.unsigned && this.high < 0;
      }),
      (k.isPositive = function () {
        return this.unsigned || this.high >= 0;
      }),
      (k.isOdd = function () {
        return 1 == (1 & this.low);
      }),
      (k.isEven = function () {
        return 0 == (1 & this.low);
      }),
      (k.equals = function (e) {
        return (
          o(e) || (e = d(e)),
          (this.unsigned === e.unsigned ||
            this.high >>> 31 != 1 ||
            e.high >>> 31 != 1) &&
            this.high === e.high &&
            this.low === e.low
        );
      }),
      (k.eq = k.equals),
      (k.notEquals = function (e) {
        return !this.eq(e);
      }),
      (k.neq = k.notEquals),
      (k.ne = k.notEquals),
      (k.lessThan = function (e) {
        return this.comp(e) < 0;
      }),
      (k.lt = k.lessThan),
      (k.lessThanOrEqual = function (e) {
        return this.comp(e) <= 0;
      }),
      (k.lte = k.lessThanOrEqual),
      (k.le = k.lessThanOrEqual),
      (k.greaterThan = function (e) {
        return this.comp(e) > 0;
      }),
      (k.gt = k.greaterThan),
      (k.greaterThanOrEqual = function (e) {
        return this.comp(e) >= 0;
      }),
      (k.gte = k.greaterThanOrEqual),
      (k.ge = k.greaterThanOrEqual),
      (k.compare = function (e) {
        if ((o(e) || (e = d(e)), this.eq(e))) return 0;
        var t = this.isNegative(),
          r = e.isNegative();
        return t && !r
          ? -1
          : !t && r
          ? 1
          : this.unsigned
          ? e.high >>> 0 > this.high >>> 0 ||
            (e.high === this.high && e.low >>> 0 > this.low >>> 0)
            ? -1
            : 1
          : this.sub(e).isNegative()
          ? -1
          : 1;
      }),
      (k.comp = k.compare),
      (k.negate = function () {
        return !this.unsigned && this.eq(C) ? C : this.not().add(b);
      }),
      (k.neg = k.negate),
      (k.add = function (e) {
        o(e) || (e = d(e));
        var t = this.high >>> 16,
          r = 65535 & this.high,
          n = this.low >>> 16,
          i = 65535 & this.low,
          s = e.high >>> 16,
          a = 65535 & e.high,
          u = e.low >>> 16,
          p = 0,
          f = 0,
          l = 0,
          h = 0;
        return (
          (l += (h += i + (65535 & e.low)) >>> 16),
          (f += (l += n + u) >>> 16),
          (p += (f += r + a) >>> 16),
          (p += t + s),
          c(
            ((l &= 65535) << 16) | (h &= 65535),
            ((p &= 65535) << 16) | (f &= 65535),
            this.unsigned
          )
        );
      }),
      (k.subtract = function (e) {
        return o(e) || (e = d(e)), this.add(e.neg());
      }),
      (k.sub = k.subtract),
      (k.multiply = function (e) {
        if (this.isZero()) return m;
        if ((o(e) || (e = d(e)), r))
          return c(
            r.mul(this.low, this.high, e.low, e.high),
            r.get_high(),
            this.unsigned
          );
        if (e.isZero()) return m;
        if (this.eq(C)) return e.isOdd() ? C : m;
        if (e.eq(C)) return this.isOdd() ? C : m;
        if (this.isNegative())
          return e.isNegative()
            ? this.neg().mul(e.neg())
            : this.neg().mul(e).neg();
        if (e.isNegative()) return this.mul(e.neg()).neg();
        if (this.lt(g) && e.lt(g))
          return u(this.toNumber() * e.toNumber(), this.unsigned);
        var t = this.high >>> 16,
          n = 65535 & this.high,
          i = this.low >>> 16,
          s = 65535 & this.low,
          a = e.high >>> 16,
          p = 65535 & e.high,
          f = e.low >>> 16,
          l = 65535 & e.low,
          h = 0,
          y = 0,
          v = 0,
          b = 0;
        return (
          (v += (b += s * l) >>> 16),
          (y += (v += i * l) >>> 16),
          (v &= 65535),
          (y += (v += s * f) >>> 16),
          (h += (y += n * l) >>> 16),
          (y &= 65535),
          (h += (y += i * f) >>> 16),
          (y &= 65535),
          (h += (y += s * p) >>> 16),
          (h += t * l + n * f + i * p + s * a),
          c(
            ((v &= 65535) << 16) | (b &= 65535),
            ((h &= 65535) << 16) | (y &= 65535),
            this.unsigned
          )
        );
      }),
      (k.mul = k.multiply),
      (k.divide = function (e) {
        if ((o(e) || (e = d(e)), e.isZero())) throw Error("division by zero");
        var t, n, i;
        if (r)
          return this.unsigned ||
            -2147483648 !== this.high ||
            -1 !== e.low ||
            -1 !== e.high
            ? c(
                (this.unsigned ? r.div_u : r.div_s)(
                  this.low,
                  this.high,
                  e.low,
                  e.high
                ),
                r.get_high(),
                this.unsigned
              )
            : this;
        if (this.isZero()) return this.unsigned ? v : m;
        if (this.unsigned) {
          if ((e.unsigned || (e = e.toUnsigned()), e.gt(this))) return v;
          if (e.gt(this.shru(1))) return _;
          i = v;
        } else {
          if (this.eq(C))
            return e.eq(b) || e.eq(w)
              ? C
              : e.eq(C)
              ? b
              : (t = this.shr(1).div(e).shl(1)).eq(m)
              ? e.isNegative()
                ? b
                : w
              : ((n = this.sub(e.mul(t))), (i = t.add(n.div(e))));
          if (e.eq(C)) return this.unsigned ? v : m;
          if (this.isNegative())
            return e.isNegative()
              ? this.neg().div(e.neg())
              : this.neg().div(e).neg();
          if (e.isNegative()) return this.div(e.neg()).neg();
          i = m;
        }
        for (n = this; n.gte(e); ) {
          t = Math.max(1, Math.floor(n.toNumber() / e.toNumber()));
          for (
            var s = Math.ceil(Math.log(t) / Math.LN2),
              a = s <= 48 ? 1 : p(2, s - 48),
              f = u(t),
              l = f.mul(e);
            l.isNegative() || l.gt(n);

          )
            l = (f = u((t -= a), this.unsigned)).mul(e);
          f.isZero() && (f = b), (i = i.add(f)), (n = n.sub(l));
        }
        return i;
      }),
      (k.div = k.divide),
      (k.modulo = function (e) {
        return (
          o(e) || (e = d(e)),
          r
            ? c(
                (this.unsigned ? r.rem_u : r.rem_s)(
                  this.low,
                  this.high,
                  e.low,
                  e.high
                ),
                r.get_high(),
                this.unsigned
              )
            : this.sub(this.div(e).mul(e))
        );
      }),
      (k.mod = k.modulo),
      (k.rem = k.modulo),
      (k.not = function () {
        return c(~this.low, ~this.high, this.unsigned);
      }),
      (k.and = function (e) {
        return (
          o(e) || (e = d(e)),
          c(this.low & e.low, this.high & e.high, this.unsigned)
        );
      }),
      (k.or = function (e) {
        return (
          o(e) || (e = d(e)),
          c(this.low | e.low, this.high | e.high, this.unsigned)
        );
      }),
      (k.xor = function (e) {
        return (
          o(e) || (e = d(e)),
          c(this.low ^ e.low, this.high ^ e.high, this.unsigned)
        );
      }),
      (k.shiftLeft = function (e) {
        return (
          o(e) && (e = e.toInt()),
          0 == (e &= 63)
            ? this
            : e < 32
            ? c(
                this.low << e,
                (this.high << e) | (this.low >>> (32 - e)),
                this.unsigned
              )
            : c(0, this.low << (e - 32), this.unsigned)
        );
      }),
      (k.shl = k.shiftLeft),
      (k.shiftRight = function (e) {
        return (
          o(e) && (e = e.toInt()),
          0 == (e &= 63)
            ? this
            : e < 32
            ? c(
                (this.low >>> e) | (this.high << (32 - e)),
                this.high >> e,
                this.unsigned
              )
            : c(this.high >> (e - 32), this.high >= 0 ? 0 : -1, this.unsigned)
        );
      }),
      (k.shr = k.shiftRight),
      (k.shiftRightUnsigned = function (e) {
        if ((o(e) && (e = e.toInt()), 0 === (e &= 63))) return this;
        var t = this.high;
        return e < 32
          ? c((this.low >>> e) | (t << (32 - e)), t >>> e, this.unsigned)
          : c(32 === e ? t : t >>> (e - 32), 0, this.unsigned);
      }),
      (k.shru = k.shiftRightUnsigned),
      (k.shr_u = k.shiftRightUnsigned),
      (k.toSigned = function () {
        return this.unsigned ? c(this.low, this.high, !1) : this;
      }),
      (k.toUnsigned = function () {
        return this.unsigned ? this : c(this.low, this.high, !0);
      }),
      (k.toBytes = function (e) {
        return e ? this.toBytesLE() : this.toBytesBE();
      }),
      (k.toBytesLE = function () {
        var e = this.high,
          t = this.low;
        return [
          255 & t,
          (t >>> 8) & 255,
          (t >>> 16) & 255,
          t >>> 24,
          255 & e,
          (e >>> 8) & 255,
          (e >>> 16) & 255,
          e >>> 24,
        ];
      }),
      (k.toBytesBE = function () {
        var e = this.high,
          t = this.low;
        return [
          e >>> 24,
          (e >>> 16) & 255,
          (e >>> 8) & 255,
          255 & e,
          t >>> 24,
          (t >>> 16) & 255,
          (t >>> 8) & 255,
          255 & t,
        ];
      }),
      (n.fromBytes = function (e, t, r) {
        return r ? n.fromBytesLE(e, t) : n.fromBytesBE(e, t);
      }),
      (n.fromBytesLE = function (e, t) {
        return new n(
          e[0] | (e[1] << 8) | (e[2] << 16) | (e[3] << 24),
          e[4] | (e[5] << 8) | (e[6] << 16) | (e[7] << 24),
          t
        );
      }),
      (n.fromBytesBE = function (e, t) {
        return new n(
          (e[4] << 24) | (e[5] << 16) | (e[6] << 8) | e[7],
          (e[0] << 24) | (e[1] << 16) | (e[2] << 8) | e[3],
          t
        );
      });
  },
  function (e, t, r) {
    "use strict";
    (function (e) {
      var n = t;
      function o(e, t, r) {
        for (var n = Object.keys(t), o = 0; o < n.length; ++o)
          (void 0 !== e[n[o]] && r) || (e[n[o]] = t[n[o]]);
        return e;
      }
      function i(e) {
        function t(e, r) {
          if (!(this instanceof t)) return new t(e, r);
          Object.defineProperty(this, "message", {
            get: function () {
              return e;
            },
          }),
            Error.captureStackTrace
              ? Error.captureStackTrace(this, t)
              : Object.defineProperty(this, "stack", {
                  value: new Error().stack || "",
                }),
            r && o(this, r);
        }
        return (
          ((t.prototype = Object.create(Error.prototype)).constructor = t),
          Object.defineProperty(t.prototype, "name", {
            get: function () {
              return e;
            },
          }),
          (t.prototype.toString = function () {
            return this.name + ": " + this.message;
          }),
          t
        );
      }
      (n.asPromise = r(47)),
        (n.base64 = r(113)),
        (n.EventEmitter = r(114)),
        (n.float = r(115)),
        (n.inquire = r(48)),
        (n.utf8 = r(116)),
        (n.pool = r(117)),
        (n.LongBits = r(118)),
        (n.global =
          ("undefined" != typeof window && window) ||
          (void 0 !== e && e) ||
          ("undefined" != typeof self && self) ||
          this),
        (n.emptyArray = Object.freeze ? Object.freeze([]) : []),
        (n.emptyObject = Object.freeze ? Object.freeze({}) : {}),
        (n.isNode = Boolean(
          n.global.process &&
            n.global.process.versions &&
            n.global.process.versions.node
        )),
        (n.isInteger =
          Number.isInteger ||
          function (e) {
            return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
          }),
        (n.isString = function (e) {
          return "string" == typeof e || e instanceof String;
        }),
        (n.isObject = function (e) {
          return e && "object" == typeof e;
        }),
        (n.isset = n.isSet = function (e, t) {
          var r = e[t];
          return (
            !(null == r || !e.hasOwnProperty(t)) &&
            ("object" != typeof r ||
              (Array.isArray(r) ? r.length : Object.keys(r).length) > 0)
          );
        }),
        (n.Buffer = (function () {
          try {
            var e = n.inquire("buffer").Buffer;
            return e.prototype.utf8Write ? e : null;
          } catch (e) {
            return null;
          }
        })()),
        (n._Buffer_from = null),
        (n._Buffer_allocUnsafe = null),
        (n.newBuffer = function (e) {
          return "number" == typeof e
            ? n.Buffer
              ? n._Buffer_allocUnsafe(e)
              : new n.Array(e)
            : n.Buffer
            ? n._Buffer_from(e)
            : "undefined" == typeof Uint8Array
            ? e
            : new Uint8Array(e);
        }),
        (n.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array),
        (n.Long =
          (n.global.dcodeIO && n.global.dcodeIO.Long) ||
          n.global.Long ||
          n.inquire("long")),
        (n.key2Re = /^true|false|0|1$/),
        (n.key32Re = /^-?(?:0|[1-9][0-9]*)$/),
        (n.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/),
        (n.longToHash = function (e) {
          return e ? n.LongBits.from(e).toHash() : n.LongBits.zeroHash;
        }),
        (n.longFromHash = function (e, t) {
          var r = n.LongBits.fromHash(e);
          return n.Long
            ? n.Long.fromBits(r.lo, r.hi, t)
            : r.toNumber(Boolean(t));
        }),
        (n.merge = o),
        (n.lcFirst = function (e) {
          return e.charAt(0).toLowerCase() + e.substring(1);
        }),
        (n.newError = i),
        (n.ProtocolError = i("ProtocolError")),
        (n.oneOfGetter = function (e) {
          for (var t = {}, r = 0; r < e.length; ++r) t[e[r]] = 1;
          return function () {
            for (var e = Object.keys(this), r = e.length - 1; r > -1; --r)
              if (1 === t[e[r]] && void 0 !== this[e[r]] && null !== this[e[r]])
                return e[r];
          };
        }),
        (n.oneOfSetter = function (e) {
          return function (t) {
            for (var r = 0; r < e.length; ++r) e[r] !== t && delete this[e[r]];
          };
        }),
        (n.toJSONOptions = {
          longs: String,
          enums: String,
          bytes: String,
          json: !0,
        }),
        (n._configure = function () {
          var e = n.Buffer;
          e
            ? ((n._Buffer_from =
                (e.from !== Uint8Array.from && e.from) ||
                function (t, r) {
                  return new e(t, r);
                }),
              (n._Buffer_allocUnsafe =
                e.allocUnsafe ||
                function (t) {
                  return new e(t);
                }))
            : (n._Buffer_from = n._Buffer_allocUnsafe = null);
        });
    }.call(this, r(20)));
  },
  function (e, t, r) {
    "use strict";
    e.exports = s;
    var n = r(9);
    ((s.prototype = Object.create(n.prototype)).constructor = s).className =
      "Enum";
    var o = r(11),
      i = r(1);
    function s(e, t, r, o, i) {
      if ((n.call(this, e, r), t && "object" != typeof t))
        throw TypeError("values must be an object");
      if (
        ((this.valuesById = {}),
        (this.values = Object.create(this.valuesById)),
        (this.comment = o),
        (this.comments = i || {}),
        (this.reserved = void 0),
        t)
      )
        for (var s = Object.keys(t), a = 0; a < s.length; ++a)
          "number" == typeof t[s[a]] &&
            (this.valuesById[(this.values[s[a]] = t[s[a]])] = s[a]);
    }
    (s.fromJSON = function (e, t) {
      var r = new s(e, t.values, t.options, t.comment, t.comments);
      return (r.reserved = t.reserved), r;
    }),
      (s.prototype.toJSON = function (e) {
        var t = !!e && Boolean(e.keepComments);
        return i.toObject([
          "options",
          this.options,
          "values",
          this.values,
          "reserved",
          this.reserved && this.reserved.length ? this.reserved : void 0,
          "comment",
          t ? this.comment : void 0,
          "comments",
          t ? this.comments : void 0,
        ]);
      }),
      (s.prototype.add = function (e, t, r) {
        if (!i.isString(e)) throw TypeError("name must be a string");
        if (!i.isInteger(t)) throw TypeError("id must be an integer");
        if (void 0 !== this.values[e])
          throw Error("duplicate name '" + e + "' in " + this);
        if (this.isReservedId(t))
          throw Error("id " + t + " is reserved in " + this);
        if (this.isReservedName(e))
          throw Error("name '" + e + "' is reserved in " + this);
        if (void 0 !== this.valuesById[t]) {
          if (!this.options || !this.options.allow_alias)
            throw Error("duplicate id " + t + " in " + this);
          this.values[e] = t;
        } else this.valuesById[(this.values[e] = t)] = e;
        return (this.comments[e] = r || null), this;
      }),
      (s.prototype.remove = function (e) {
        if (!i.isString(e)) throw TypeError("name must be a string");
        var t = this.values[e];
        if (null == t)
          throw Error("name '" + e + "' does not exist in " + this);
        return (
          delete this.valuesById[t],
          delete this.values[e],
          delete this.comments[e],
          this
        );
      }),
      (s.prototype.isReservedId = function (e) {
        return o.isReservedId(this.reserved, e);
      }),
      (s.prototype.isReservedName = function (e) {
        return o.isReservedName(this.reserved, e);
      });
  },
  function (e, t, r) {
    e.exports = r(91);
  },
  function (e, t, r) {
    function n(e) {
      if (e)
        return (function (e) {
          for (var t in n.prototype) e[t] = n.prototype[t];
          return e;
        })(e);
    }
    (e.exports = n),
      (n.prototype.on = n.prototype.addEventListener = function (e, t) {
        return (
          (this._callbacks = this._callbacks || {}),
          (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
          this
        );
      }),
      (n.prototype.once = function (e, t) {
        function r() {
          this.off(e, r), t.apply(this, arguments);
        }
        return (r.fn = t), this.on(e, r), this;
      }),
      (n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (
        e,
        t
      ) {
        if (((this._callbacks = this._callbacks || {}), 0 == arguments.length))
          return (this._callbacks = {}), this;
        var r,
          n = this._callbacks["$" + e];
        if (!n) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + e], this;
        for (var o = 0; o < n.length; o++)
          if ((r = n[o]) === t || r.fn === t) {
            n.splice(o, 1);
            break;
          }
        return this;
      }),
      (n.prototype.emit = function (e) {
        this._callbacks = this._callbacks || {};
        var t = [].slice.call(arguments, 1),
          r = this._callbacks["$" + e];
        if (r)
          for (var n = 0, o = (r = r.slice(0)).length; n < o; ++n)
            r[n].apply(this, t);
        return this;
      }),
      (n.prototype.listeners = function (e) {
        return (
          (this._callbacks = this._callbacks || {}),
          this._callbacks["$" + e] || []
        );
      }),
      (n.prototype.hasListeners = function (e) {
        return !!this.listeners(e).length;
      });
  },
  function (e, t, r) {
    var n,
      o = r(77),
      i = r(33),
      s = r(79),
      a = r(80),
      u = r(81);
    "undefined" != typeof ArrayBuffer && (n = r(82));
    var c =
        "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
      p =
        "undefined" != typeof navigator &&
        /PhantomJS/i.test(navigator.userAgent),
      f = c || p;
    t.protocol = 3;
    var d = (t.packets = {
        open: 0,
        close: 1,
        ping: 2,
        pong: 3,
        message: 4,
        upgrade: 5,
        noop: 6,
      }),
      l = o(d),
      h = { type: "error", data: "parser error" },
      y = r(83);
    function g(e, t, r) {
      for (
        var n = new Array(e.length),
          o = a(e.length, r),
          i = function (e, r, o) {
            t(r, function (t, r) {
              (n[e] = r), o(t, n);
            });
          },
          s = 0;
        s < e.length;
        s++
      )
        i(s, e[s], o);
    }
    (t.encodePacket = function (e, r, n, o) {
      "function" == typeof r && ((o = r), (r = !1)),
        "function" == typeof n && ((o = n), (n = null));
      var i = void 0 === e.data ? void 0 : e.data.buffer || e.data;
      if ("undefined" != typeof ArrayBuffer && i instanceof ArrayBuffer)
        return (function (e, r, n) {
          if (!r) return t.encodeBase64Packet(e, n);
          var o = e.data,
            i = new Uint8Array(o),
            s = new Uint8Array(1 + o.byteLength);
          s[0] = d[e.type];
          for (var a = 0; a < i.length; a++) s[a + 1] = i[a];
          return n(s.buffer);
        })(e, r, o);
      if (void 0 !== y && i instanceof y)
        return (function (e, r, n) {
          if (!r) return t.encodeBase64Packet(e, n);
          if (f)
            return (function (e, r, n) {
              if (!r) return t.encodeBase64Packet(e, n);
              var o = new FileReader();
              return (
                (o.onload = function () {
                  t.encodePacket({ type: e.type, data: o.result }, r, !0, n);
                }),
                o.readAsArrayBuffer(e.data)
              );
            })(e, r, n);
          var o = new Uint8Array(1);
          o[0] = d[e.type];
          var i = new y([o.buffer, e.data]);
          return n(i);
        })(e, r, o);
      if (i && i.base64)
        return (function (e, r) {
          var n = "b" + t.packets[e.type] + e.data.data;
          return r(n);
        })(e, o);
      var s = d[e.type];
      return (
        void 0 !== e.data &&
          (s += n ? u.encode(String(e.data), { strict: !1 }) : String(e.data)),
        o("" + s)
      );
    }),
      (t.encodeBase64Packet = function (e, r) {
        var n,
          o = "b" + t.packets[e.type];
        if (void 0 !== y && e.data instanceof y) {
          var i = new FileReader();
          return (
            (i.onload = function () {
              var e = i.result.split(",")[1];
              r(o + e);
            }),
            i.readAsDataURL(e.data)
          );
        }
        try {
          n = String.fromCharCode.apply(null, new Uint8Array(e.data));
        } catch (t) {
          for (
            var s = new Uint8Array(e.data), a = new Array(s.length), u = 0;
            u < s.length;
            u++
          )
            a[u] = s[u];
          n = String.fromCharCode.apply(null, a);
        }
        return (o += btoa(n)), r(o);
      }),
      (t.decodePacket = function (e, r, n) {
        if (void 0 === e) return h;
        if ("string" == typeof e) {
          if ("b" === e.charAt(0)) return t.decodeBase64Packet(e.substr(1), r);
          if (
            n &&
            !1 ===
              (e = (function (e) {
                try {
                  e = u.decode(e, { strict: !1 });
                } catch (e) {
                  return !1;
                }
                return e;
              })(e))
          )
            return h;
          var o = e.charAt(0);
          return Number(o) == o && l[o]
            ? e.length > 1
              ? { type: l[o], data: e.substring(1) }
              : { type: l[o] }
            : h;
        }
        o = new Uint8Array(e)[0];
        var i = s(e, 1);
        return y && "blob" === r && (i = new y([i])), { type: l[o], data: i };
      }),
      (t.decodeBase64Packet = function (e, t) {
        var r = l[e.charAt(0)];
        if (!n) return { type: r, data: { base64: !0, data: e.substr(1) } };
        var o = n.decode(e.substr(1));
        return "blob" === t && y && (o = new y([o])), { type: r, data: o };
      }),
      (t.encodePayload = function (e, r, n) {
        "function" == typeof r && ((n = r), (r = null));
        var o = i(e);
        if (r && o)
          return y && !f
            ? t.encodePayloadAsBlob(e, n)
            : t.encodePayloadAsArrayBuffer(e, n);
        if (!e.length) return n("0:");
        g(
          e,
          function (e, n) {
            t.encodePacket(e, !!o && r, !1, function (e) {
              n(
                null,
                (function (e) {
                  return e.length + ":" + e;
                })(e)
              );
            });
          },
          function (e, t) {
            return n(t.join(""));
          }
        );
      }),
      (t.decodePayload = function (e, r, n) {
        if ("string" != typeof e) return t.decodePayloadAsBinary(e, r, n);
        var o;
        if (("function" == typeof r && ((n = r), (r = null)), "" === e))
          return n(h, 0, 1);
        for (var i, s, a = "", u = 0, c = e.length; u < c; u++) {
          var p = e.charAt(u);
          if (":" === p) {
            if ("" === a || a != (i = Number(a))) return n(h, 0, 1);
            if (a != (s = e.substr(u + 1, i)).length) return n(h, 0, 1);
            if (s.length) {
              if (
                ((o = t.decodePacket(s, r, !1)),
                h.type === o.type && h.data === o.data)
              )
                return n(h, 0, 1);
              if (!1 === n(o, u + i, c)) return;
            }
            (u += i), (a = "");
          } else a += p;
        }
        return "" !== a ? n(h, 0, 1) : void 0;
      }),
      (t.encodePayloadAsArrayBuffer = function (e, r) {
        if (!e.length) return r(new ArrayBuffer(0));
        g(
          e,
          function (e, r) {
            t.encodePacket(e, !0, !0, function (e) {
              return r(null, e);
            });
          },
          function (e, t) {
            var n = t.reduce(function (e, t) {
                var r;
                return (
                  e +
                  (r =
                    "string" == typeof t ? t.length : t.byteLength).toString()
                    .length +
                  r +
                  2
                );
              }, 0),
              o = new Uint8Array(n),
              i = 0;
            return (
              t.forEach(function (e) {
                var t = "string" == typeof e,
                  r = e;
                if (t) {
                  for (
                    var n = new Uint8Array(e.length), s = 0;
                    s < e.length;
                    s++
                  )
                    n[s] = e.charCodeAt(s);
                  r = n.buffer;
                }
                o[i++] = t ? 0 : 1;
                var a = r.byteLength.toString();
                for (s = 0; s < a.length; s++) o[i++] = parseInt(a[s]);
                o[i++] = 255;
                for (n = new Uint8Array(r), s = 0; s < n.length; s++)
                  o[i++] = n[s];
              }),
              r(o.buffer)
            );
          }
        );
      }),
      (t.encodePayloadAsBlob = function (e, r) {
        g(
          e,
          function (e, r) {
            t.encodePacket(e, !0, !0, function (e) {
              var t = new Uint8Array(1);
              if (((t[0] = 1), "string" == typeof e)) {
                for (var n = new Uint8Array(e.length), o = 0; o < e.length; o++)
                  n[o] = e.charCodeAt(o);
                (e = n.buffer), (t[0] = 0);
              }
              var i = (e instanceof ArrayBuffer
                  ? e.byteLength
                  : e.size
                ).toString(),
                s = new Uint8Array(i.length + 1);
              for (o = 0; o < i.length; o++) s[o] = parseInt(i[o]);
              if (((s[i.length] = 255), y)) {
                var a = new y([t.buffer, s.buffer, e]);
                r(null, a);
              }
            });
          },
          function (e, t) {
            return r(new y(t));
          }
        );
      }),
      (t.decodePayloadAsBinary = function (e, r, n) {
        "function" == typeof r && ((n = r), (r = null));
        for (var o = e, i = []; o.byteLength > 0; ) {
          for (
            var a = new Uint8Array(o), u = 0 === a[0], c = "", p = 1;
            255 !== a[p];
            p++
          ) {
            if (c.length > 310) return n(h, 0, 1);
            c += a[p];
          }
          (o = s(o, 2 + c.length)), (c = parseInt(c));
          var f = s(o, 0, c);
          if (u)
            try {
              f = String.fromCharCode.apply(null, new Uint8Array(f));
            } catch (e) {
              var d = new Uint8Array(f);
              f = "";
              for (p = 0; p < d.length; p++) f += String.fromCharCode(d[p]);
            }
          i.push(f), (o = s(o, c));
        }
        var l = i.length;
        i.forEach(function (e, o) {
          n(t.decodePacket(e, r, !0), o, l);
        });
      });
  },
  function (e, t, r) {
    "use strict";
    (e.exports = i), (i.className = "ReflectionObject");
    var n,
      o = r(1);
    function i(e, t) {
      if (!o.isString(e)) throw TypeError("name must be a string");
      if (t && !o.isObject(t)) throw TypeError("options must be an object");
      (this.options = t),
        (this.name = e),
        (this.parent = null),
        (this.resolved = !1),
        (this.comment = null),
        (this.filename = null);
    }
    Object.defineProperties(i.prototype, {
      root: {
        get: function () {
          for (var e = this; null !== e.parent; ) e = e.parent;
          return e;
        },
      },
      fullName: {
        get: function () {
          for (var e = [this.name], t = this.parent; t; )
            e.unshift(t.name), (t = t.parent);
          return e.join(".");
        },
      },
    }),
      (i.prototype.toJSON = function () {
        throw Error();
      }),
      (i.prototype.onAdd = function (e) {
        this.parent && this.parent !== e && this.parent.remove(this),
          (this.parent = e),
          (this.resolved = !1);
        var t = e.root;
        t instanceof n && t._handleAdd(this);
      }),
      (i.prototype.onRemove = function (e) {
        var t = e.root;
        t instanceof n && t._handleRemove(this),
          (this.parent = null),
          (this.resolved = !1);
      }),
      (i.prototype.resolve = function () {
        return this.resolved
          ? this
          : (this.root instanceof n && (this.resolved = !0), this);
      }),
      (i.prototype.getOption = function (e) {
        if (this.options) return this.options[e];
      }),
      (i.prototype.setOption = function (e, t, r) {
        return (
          (r && this.options && void 0 !== this.options[e]) ||
            ((this.options || (this.options = {}))[e] = t),
          this
        );
      }),
      (i.prototype.setOptions = function (e, t) {
        if (e)
          for (var r = Object.keys(e), n = 0; n < r.length; ++n)
            this.setOption(r[n], e[r[n]], t);
        return this;
      }),
      (i.prototype.toString = function () {
        var e = this.constructor.className,
          t = this.fullName;
        return t.length ? e + " " + t : e;
      }),
      (i._configure = function (e) {
        n = e;
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = c;
    var n = r(9);
    ((c.prototype = Object.create(n.prototype)).constructor = c).className =
      "Field";
    var o,
      i = r(5),
      s = r(12),
      a = r(1),
      u = /^required|optional|repeated$/;
    function c(e, t, r, o, i, c, p) {
      if (
        (a.isObject(o)
          ? ((p = i), (c = o), (o = i = void 0))
          : a.isObject(i) && ((p = c), (c = i), (i = void 0)),
        n.call(this, e, c),
        !a.isInteger(t) || t < 0)
      )
        throw TypeError("id must be a non-negative integer");
      if (!a.isString(r)) throw TypeError("type must be a string");
      if (void 0 !== o && !u.test((o = o.toString().toLowerCase())))
        throw TypeError("rule must be a string rule");
      if (void 0 !== i && !a.isString(i))
        throw TypeError("extend must be a string");
      (this.rule = o && "optional" !== o ? o : void 0),
        (this.type = r),
        (this.id = t),
        (this.extend = i || void 0),
        (this.required = "required" === o),
        (this.optional = !this.required),
        (this.repeated = "repeated" === o),
        (this.map = !1),
        (this.message = null),
        (this.partOf = null),
        (this.typeDefault = null),
        (this.defaultValue = null),
        (this.long = !!a.Long && void 0 !== s.long[r]),
        (this.bytes = "bytes" === r),
        (this.resolvedType = null),
        (this.extensionField = null),
        (this.declaringField = null),
        (this._packed = null),
        (this.comment = p);
    }
    (c.fromJSON = function (e, t) {
      return new c(e, t.id, t.type, t.rule, t.extend, t.options, t.comment);
    }),
      Object.defineProperty(c.prototype, "packed", {
        get: function () {
          return (
            null === this._packed &&
              (this._packed = !1 !== this.getOption("packed")),
            this._packed
          );
        },
      }),
      (c.prototype.setOption = function (e, t, r) {
        return (
          "packed" === e && (this._packed = null),
          n.prototype.setOption.call(this, e, t, r)
        );
      }),
      (c.prototype.toJSON = function (e) {
        var t = !!e && Boolean(e.keepComments);
        return a.toObject([
          "rule",
          ("optional" !== this.rule && this.rule) || void 0,
          "type",
          this.type,
          "id",
          this.id,
          "extend",
          this.extend,
          "options",
          this.options,
          "comment",
          t ? this.comment : void 0,
        ]);
      }),
      (c.prototype.resolve = function () {
        if (this.resolved) return this;
        if (
          (void 0 === (this.typeDefault = s.defaults[this.type]) &&
            ((this.resolvedType = (this.declaringField
              ? this.declaringField.parent
              : this.parent
            ).lookupTypeOrEnum(this.type)),
            this.resolvedType instanceof o
              ? (this.typeDefault = null)
              : (this.typeDefault = this.resolvedType.values[
                  Object.keys(this.resolvedType.values)[0]
                ])),
          this.options &&
            null != this.options.default &&
            ((this.typeDefault = this.options.default),
            this.resolvedType instanceof i &&
              "string" == typeof this.typeDefault &&
              (this.typeDefault = this.resolvedType.values[this.typeDefault])),
          this.options &&
            ((!0 !== this.options.packed &&
              (void 0 === this.options.packed ||
                !this.resolvedType ||
                this.resolvedType instanceof i)) ||
              delete this.options.packed,
            Object.keys(this.options).length || (this.options = void 0)),
          this.long)
        )
          (this.typeDefault = a.Long.fromNumber(
            this.typeDefault,
            "u" === this.type.charAt(0)
          )),
            Object.freeze && Object.freeze(this.typeDefault);
        else if (this.bytes && "string" == typeof this.typeDefault) {
          var e;
          a.base64.test(this.typeDefault)
            ? a.base64.decode(
                this.typeDefault,
                (e = a.newBuffer(a.base64.length(this.typeDefault))),
                0
              )
            : a.utf8.write(
                this.typeDefault,
                (e = a.newBuffer(a.utf8.length(this.typeDefault))),
                0
              ),
            (this.typeDefault = e);
        }
        return (
          this.map
            ? (this.defaultValue = a.emptyObject)
            : this.repeated
            ? (this.defaultValue = a.emptyArray)
            : (this.defaultValue = this.typeDefault),
          this.parent instanceof o &&
            (this.parent.ctor.prototype[this.name] = this.defaultValue),
          n.prototype.resolve.call(this)
        );
      }),
      (c.d = function (e, t, r, n) {
        return (
          "function" == typeof t
            ? (t = a.decorateType(t).name)
            : t && "object" == typeof t && (t = a.decorateEnum(t).name),
          function (o, i) {
            a.decorateType(o.constructor).add(
              new c(i, e, t, r, { default: n })
            );
          }
        );
      }),
      (c._configure = function (e) {
        o = e;
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = p;
    var n = r(9);
    ((p.prototype = Object.create(n.prototype)).constructor = p).className =
      "Namespace";
    var o,
      i,
      s,
      a = r(10),
      u = r(1);
    function c(e, t) {
      if (e && e.length) {
        for (var r = {}, n = 0; n < e.length; ++n)
          r[e[n].name] = e[n].toJSON(t);
        return r;
      }
    }
    function p(e, t) {
      n.call(this, e, t), (this.nested = void 0), (this._nestedArray = null);
    }
    function f(e) {
      return (e._nestedArray = null), e;
    }
    (p.fromJSON = function (e, t) {
      return new p(e, t.options).addJSON(t.nested);
    }),
      (p.arrayToJSON = c),
      (p.isReservedId = function (e, t) {
        if (e)
          for (var r = 0; r < e.length; ++r)
            if ("string" != typeof e[r] && e[r][0] <= t && e[r][1] >= t)
              return !0;
        return !1;
      }),
      (p.isReservedName = function (e, t) {
        if (e) for (var r = 0; r < e.length; ++r) if (e[r] === t) return !0;
        return !1;
      }),
      Object.defineProperty(p.prototype, "nestedArray", {
        get: function () {
          return (
            this._nestedArray || (this._nestedArray = u.toArray(this.nested))
          );
        },
      }),
      (p.prototype.toJSON = function (e) {
        return u.toObject([
          "options",
          this.options,
          "nested",
          c(this.nestedArray, e),
        ]);
      }),
      (p.prototype.addJSON = function (e) {
        if (e)
          for (var t, r = Object.keys(e), n = 0; n < r.length; ++n)
            (t = e[r[n]]),
              this.add(
                (void 0 !== t.fields
                  ? o.fromJSON
                  : void 0 !== t.values
                  ? s.fromJSON
                  : void 0 !== t.methods
                  ? i.fromJSON
                  : void 0 !== t.id
                  ? a.fromJSON
                  : p.fromJSON)(r[n], t)
              );
        return this;
      }),
      (p.prototype.get = function (e) {
        return (this.nested && this.nested[e]) || null;
      }),
      (p.prototype.getEnum = function (e) {
        if (this.nested && this.nested[e] instanceof s)
          return this.nested[e].values;
        throw Error("no such enum: " + e);
      }),
      (p.prototype.add = function (e) {
        if (
          !(
            (e instanceof a && void 0 !== e.extend) ||
            e instanceof o ||
            e instanceof s ||
            e instanceof i ||
            e instanceof p
          )
        )
          throw TypeError("object must be a valid nested object");
        if (this.nested) {
          var t = this.get(e.name);
          if (t) {
            if (
              !(t instanceof p && e instanceof p) ||
              t instanceof o ||
              t instanceof i
            )
              throw Error("duplicate name '" + e.name + "' in " + this);
            for (var r = t.nestedArray, n = 0; n < r.length; ++n) e.add(r[n]);
            this.remove(t),
              this.nested || (this.nested = {}),
              e.setOptions(t.options, !0);
          }
        } else this.nested = {};
        return (this.nested[e.name] = e), e.onAdd(this), f(this);
      }),
      (p.prototype.remove = function (e) {
        if (!(e instanceof n))
          throw TypeError("object must be a ReflectionObject");
        if (e.parent !== this) throw Error(e + " is not a member of " + this);
        return (
          delete this.nested[e.name],
          Object.keys(this.nested).length || (this.nested = void 0),
          e.onRemove(this),
          f(this)
        );
      }),
      (p.prototype.define = function (e, t) {
        if (u.isString(e)) e = e.split(".");
        else if (!Array.isArray(e)) throw TypeError("illegal path");
        if (e && e.length && "" === e[0]) throw Error("path must be relative");
        for (var r = this; e.length > 0; ) {
          var n = e.shift();
          if (r.nested && r.nested[n]) {
            if (!((r = r.nested[n]) instanceof p))
              throw Error("path conflicts with non-namespace objects");
          } else r.add((r = new p(n)));
        }
        return t && r.addJSON(t), r;
      }),
      (p.prototype.resolveAll = function () {
        for (var e = this.nestedArray, t = 0; t < e.length; )
          e[t] instanceof p ? e[t++].resolveAll() : e[t++].resolve();
        return this.resolve();
      }),
      (p.prototype.lookup = function (e, t, r) {
        if (
          ("boolean" == typeof t
            ? ((r = t), (t = void 0))
            : t && !Array.isArray(t) && (t = [t]),
          u.isString(e) && e.length)
        ) {
          if ("." === e) return this.root;
          e = e.split(".");
        } else if (!e.length) return this;
        if ("" === e[0]) return this.root.lookup(e.slice(1), t);
        var n = this.get(e[0]);
        if (n) {
          if (1 === e.length) {
            if (!t || t.indexOf(n.constructor) > -1) return n;
          } else if (n instanceof p && (n = n.lookup(e.slice(1), t, !0)))
            return n;
        } else
          for (var o = 0; o < this.nestedArray.length; ++o)
            if (
              this._nestedArray[o] instanceof p &&
              (n = this._nestedArray[o].lookup(e, t, !0))
            )
              return n;
        return null === this.parent || r ? null : this.parent.lookup(e, t);
      }),
      (p.prototype.lookupType = function (e) {
        var t = this.lookup(e, [o]);
        if (!t) throw Error("no such type: " + e);
        return t;
      }),
      (p.prototype.lookupEnum = function (e) {
        var t = this.lookup(e, [s]);
        if (!t) throw Error("no such Enum '" + e + "' in " + this);
        return t;
      }),
      (p.prototype.lookupTypeOrEnum = function (e) {
        var t = this.lookup(e, [o, s]);
        if (!t) throw Error("no such Type or Enum '" + e + "' in " + this);
        return t;
      }),
      (p.prototype.lookupService = function (e) {
        var t = this.lookup(e, [i]);
        if (!t) throw Error("no such Service '" + e + "' in " + this);
        return t;
      }),
      (p._configure = function (e, t, r) {
        (o = e), (i = t), (s = r);
      });
  },
  function (e, t, r) {
    "use strict";
    var n = t,
      o = r(1),
      i = [
        "double",
        "float",
        "int32",
        "uint32",
        "sint32",
        "fixed32",
        "sfixed32",
        "int64",
        "uint64",
        "sint64",
        "fixed64",
        "sfixed64",
        "bool",
        "string",
        "bytes",
      ];
    function s(e, t) {
      var r = 0,
        n = {};
      for (t |= 0; r < e.length; ) n[i[r + t]] = e[r++];
      return n;
    }
    (n.basic = s([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2])),
      (n.defaults = s([
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        !1,
        "",
        o.emptyArray,
        null,
      ])),
      (n.long = s([0, 0, 0, 1, 1], 7)),
      (n.mapKey = s([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2)),
      (n.packed = s([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]));
  },
  function (e, t, r) {
    (function (n) {
      (t.log = function (...e) {
        return "object" == typeof console && console.log && console.log(...e);
      }),
        (t.formatArgs = function (t) {
          if (
            ((t[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              t[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              e.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const r = "color: " + this.color;
          t.splice(1, 0, r, "color: inherit");
          let n = 0,
            o = 0;
          t[0].replace(/%[a-zA-Z%]/g, (e) => {
            "%%" !== e && (n++, "%c" === e && (o = n));
          }),
            t.splice(o, 0, r);
        }),
        (t.save = function (e) {
          try {
            e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
          } catch (e) {}
        }),
        (t.load = function () {
          let e;
          try {
            e = t.storage.getItem("debug");
          } catch (e) {}
          !e && void 0 !== n && "env" in n && (e = n.env.DEBUG);
          return e;
        }),
        (t.useColors = function () {
          if (
            "undefined" != typeof window &&
            window.process &&
            ("renderer" === window.process.type || window.process.__nwjs)
          )
            return !0;
          if (
            "undefined" != typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
          )
            return !1;
          return (
            ("undefined" != typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ("undefined" != typeof window &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }),
        (t.storage = (function () {
          try {
            return localStorage;
          } catch (e) {}
        })()),
        (t.colors = [
          "#0000CC",
          "#0000FF",
          "#0033CC",
          "#0033FF",
          "#0066CC",
          "#0066FF",
          "#0099CC",
          "#0099FF",
          "#00CC00",
          "#00CC33",
          "#00CC66",
          "#00CC99",
          "#00CCCC",
          "#00CCFF",
          "#3300CC",
          "#3300FF",
          "#3333CC",
          "#3333FF",
          "#3366CC",
          "#3366FF",
          "#3399CC",
          "#3399FF",
          "#33CC00",
          "#33CC33",
          "#33CC66",
          "#33CC99",
          "#33CCCC",
          "#33CCFF",
          "#6600CC",
          "#6600FF",
          "#6633CC",
          "#6633FF",
          "#66CC00",
          "#66CC33",
          "#9900CC",
          "#9900FF",
          "#9933CC",
          "#9933FF",
          "#99CC00",
          "#99CC33",
          "#CC0000",
          "#CC0033",
          "#CC0066",
          "#CC0099",
          "#CC00CC",
          "#CC00FF",
          "#CC3300",
          "#CC3333",
          "#CC3366",
          "#CC3399",
          "#CC33CC",
          "#CC33FF",
          "#CC6600",
          "#CC6633",
          "#CC9900",
          "#CC9933",
          "#CCCC00",
          "#CCCC33",
          "#FF0000",
          "#FF0033",
          "#FF0066",
          "#FF0099",
          "#FF00CC",
          "#FF00FF",
          "#FF3300",
          "#FF3333",
          "#FF3366",
          "#FF3399",
          "#FF33CC",
          "#FF33FF",
          "#FF6600",
          "#FF6633",
          "#FF9900",
          "#FF9933",
          "#FFCC00",
          "#FFCC33",
        ]),
        (e.exports = r(64)(t));
      const { formatters: o } = e.exports;
      o.j = function (e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return "[UnexpectedJSONParseError]: " + e.message;
        }
      };
    }.call(this, r(14)));
  },
  function (e, t) {
    var r,
      n,
      o = (e.exports = {});
    function i() {
      throw new Error("setTimeout has not been defined");
    }
    function s() {
      throw new Error("clearTimeout has not been defined");
    }
    function a(e) {
      if (r === setTimeout) return setTimeout(e, 0);
      if ((r === i || !r) && setTimeout)
        return (r = setTimeout), setTimeout(e, 0);
      try {
        return r(e, 0);
      } catch (t) {
        try {
          return r.call(null, e, 0);
        } catch (t) {
          return r.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        r = "function" == typeof setTimeout ? setTimeout : i;
      } catch (e) {
        r = i;
      }
      try {
        n = "function" == typeof clearTimeout ? clearTimeout : s;
      } catch (e) {
        n = s;
      }
    })();
    var u,
      c = [],
      p = !1,
      f = -1;
    function d() {
      p &&
        u &&
        ((p = !1), u.length ? (c = u.concat(c)) : (f = -1), c.length && l());
    }
    function l() {
      if (!p) {
        var e = a(d);
        p = !0;
        for (var t = c.length; t; ) {
          for (u = c, c = []; ++f < t; ) u && u[f].run();
          (f = -1), (t = c.length);
        }
        (u = null),
          (p = !1),
          (function (e) {
            if (n === clearTimeout) return clearTimeout(e);
            if ((n === s || !n) && clearTimeout)
              return (n = clearTimeout), clearTimeout(e);
            try {
              n(e);
            } catch (t) {
              try {
                return n.call(null, e);
              } catch (t) {
                return n.call(this, e);
              }
            }
          })(e);
      }
    }
    function h(e, t) {
      (this.fun = e), (this.array = t);
    }
    function y() {}
    (o.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
      c.push(new h(e, t)), 1 !== c.length || p || a(l);
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (o.title = "browser"),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ""),
      (o.versions = {}),
      (o.on = y),
      (o.addListener = y),
      (o.once = y),
      (o.off = y),
      (o.removeListener = y),
      (o.removeAllListeners = y),
      (o.emit = y),
      (o.prependListener = y),
      (o.prependOnceListener = y),
      (o.listeners = function (e) {
        return [];
      }),
      (o.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (o.cwd = function () {
        return "/";
      }),
      (o.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (o.umask = function () {
        return 0;
      });
  },
  function (e, t) {
    (t.encode = function (e) {
      var t = "";
      for (var r in e)
        e.hasOwnProperty(r) &&
          (t.length && (t += "&"),
          (t += encodeURIComponent(r) + "=" + encodeURIComponent(e[r])));
      return t;
    }),
      (t.decode = function (e) {
        for (var t = {}, r = e.split("&"), n = 0, o = r.length; n < o; n++) {
          var i = r[n].split("=");
          t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
        }
        return t;
      });
  },
  function (e, t) {
    e.exports = function (e, t) {
      var r = function () {};
      (r.prototype = t.prototype),
        (e.prototype = new r()),
        (e.prototype.constructor = e);
    };
  },
  function (e, t, r) {
    (function (n) {
      (t.log = function (...e) {
        return "object" == typeof console && console.log && console.log(...e);
      }),
        (t.formatArgs = function (t) {
          if (
            ((t[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              t[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              e.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const r = "color: " + this.color;
          t.splice(1, 0, r, "color: inherit");
          let n = 0,
            o = 0;
          t[0].replace(/%[a-zA-Z%]/g, (e) => {
            "%%" !== e && (n++, "%c" === e && (o = n));
          }),
            t.splice(o, 0, r);
        }),
        (t.save = function (e) {
          try {
            e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug");
          } catch (e) {}
        }),
        (t.load = function () {
          let e;
          try {
            e = t.storage.getItem("debug");
          } catch (e) {}
          !e && void 0 !== n && "env" in n && (e = n.env.DEBUG);
          return e;
        }),
        (t.useColors = function () {
          if (
            "undefined" != typeof window &&
            window.process &&
            ("renderer" === window.process.type || window.process.__nwjs)
          )
            return !0;
          if (
            "undefined" != typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
          )
            return !1;
          return (
            ("undefined" != typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ("undefined" != typeof window &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }),
        (t.storage = (function () {
          try {
            return localStorage;
          } catch (e) {}
        })()),
        (t.colors = [
          "#0000CC",
          "#0000FF",
          "#0033CC",
          "#0033FF",
          "#0066CC",
          "#0066FF",
          "#0099CC",
          "#0099FF",
          "#00CC00",
          "#00CC33",
          "#00CC66",
          "#00CC99",
          "#00CCCC",
          "#00CCFF",
          "#3300CC",
          "#3300FF",
          "#3333CC",
          "#3333FF",
          "#3366CC",
          "#3366FF",
          "#3399CC",
          "#3399FF",
          "#33CC00",
          "#33CC33",
          "#33CC66",
          "#33CC99",
          "#33CCCC",
          "#33CCFF",
          "#6600CC",
          "#6600FF",
          "#6633CC",
          "#6633FF",
          "#66CC00",
          "#66CC33",
          "#9900CC",
          "#9900FF",
          "#9933CC",
          "#9933FF",
          "#99CC00",
          "#99CC33",
          "#CC0000",
          "#CC0033",
          "#CC0066",
          "#CC0099",
          "#CC00CC",
          "#CC00FF",
          "#CC3300",
          "#CC3333",
          "#CC3366",
          "#CC3399",
          "#CC33CC",
          "#CC33FF",
          "#CC6600",
          "#CC6633",
          "#CC9900",
          "#CC9933",
          "#CCCC00",
          "#CCCC33",
          "#FF0000",
          "#FF0033",
          "#FF0066",
          "#FF0099",
          "#FF00CC",
          "#FF00FF",
          "#FF3300",
          "#FF3333",
          "#FF3366",
          "#FF3399",
          "#FF33CC",
          "#FF33FF",
          "#FF6600",
          "#FF6633",
          "#FF9900",
          "#FF9933",
          "#FFCC00",
          "#FFCC33",
        ]),
        (e.exports = r(84)(t));
      const { formatters: o } = e.exports;
      o.j = function (e) {
        try {
          return JSON.stringify(e);
        } catch (e) {
          return "[UnexpectedJSONParseError]: " + e.message;
        }
      };
    }.call(this, r(14)));
  },
  function (e, t, r) {
    var n = r(66)("socket.io-parser"),
      o = r(7),
      i = r(69),
      s = r(28),
      a = r(29);
    function u() {}
    (t.protocol = 4),
      (t.types = [
        "CONNECT",
        "DISCONNECT",
        "EVENT",
        "ACK",
        "ERROR",
        "BINARY_EVENT",
        "BINARY_ACK",
      ]),
      (t.CONNECT = 0),
      (t.DISCONNECT = 1),
      (t.EVENT = 2),
      (t.ACK = 3),
      (t.ERROR = 4),
      (t.BINARY_EVENT = 5),
      (t.BINARY_ACK = 6),
      (t.Encoder = u),
      (t.Decoder = f);
    var c = t.ERROR + '"encode error"';
    function p(e) {
      var r = "" + e.type;
      if (
        ((t.BINARY_EVENT !== e.type && t.BINARY_ACK !== e.type) ||
          (r += e.attachments + "-"),
        e.nsp && "/" !== e.nsp && (r += e.nsp + ","),
        null != e.id && (r += e.id),
        null != e.data)
      ) {
        var o = (function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return !1;
          }
        })(e.data);
        if (!1 === o) return c;
        r += o;
      }
      return n("encoded %j as %s", e, r), r;
    }
    function f() {
      this.reconstructor = null;
    }
    function d(e) {
      (this.reconPack = e), (this.buffers = []);
    }
    function l(e) {
      return { type: t.ERROR, data: "parser error: " + e };
    }
    (u.prototype.encode = function (e, r) {
      (n("encoding packet %j", e),
      t.BINARY_EVENT === e.type || t.BINARY_ACK === e.type)
        ? (function (e, t) {
            i.removeBlobs(e, function (e) {
              var r = i.deconstructPacket(e),
                n = p(r.packet),
                o = r.buffers;
              o.unshift(n), t(o);
            });
          })(e, r)
        : r([p(e)]);
    }),
      o(f.prototype),
      (f.prototype.add = function (e) {
        var r;
        if ("string" == typeof e)
          (r = (function (e) {
            var r = 0,
              o = { type: Number(e.charAt(0)) };
            if (null == t.types[o.type])
              return l("unknown packet type " + o.type);
            if (t.BINARY_EVENT === o.type || t.BINARY_ACK === o.type) {
              for (
                var i = "";
                "-" !== e.charAt(++r) && ((i += e.charAt(r)), r != e.length);

              );
              if (i != Number(i) || "-" !== e.charAt(r))
                throw new Error("Illegal attachments");
              o.attachments = Number(i);
            }
            if ("/" === e.charAt(r + 1))
              for (o.nsp = ""; ++r; ) {
                if ("," === (u = e.charAt(r))) break;
                if (((o.nsp += u), r === e.length)) break;
              }
            else o.nsp = "/";
            var a = e.charAt(r + 1);
            if ("" !== a && Number(a) == a) {
              for (o.id = ""; ++r; ) {
                var u;
                if (null == (u = e.charAt(r)) || Number(u) != u) {
                  --r;
                  break;
                }
                if (((o.id += e.charAt(r)), r === e.length)) break;
              }
              o.id = Number(o.id);
            }
            if (e.charAt(++r)) {
              var c = (function (e) {
                try {
                  return JSON.parse(e);
                } catch (e) {
                  return !1;
                }
              })(e.substr(r));
              if (!(!1 !== c && (o.type === t.ERROR || s(c))))
                return l("invalid payload");
              o.data = c;
            }
            return n("decoded %s as %j", e, o), o;
          })(e)),
            t.BINARY_EVENT === r.type || t.BINARY_ACK === r.type
              ? ((this.reconstructor = new d(r)),
                0 === this.reconstructor.reconPack.attachments &&
                  this.emit("decoded", r))
              : this.emit("decoded", r);
        else {
          if (!a(e) && !e.base64) throw new Error("Unknown type: " + e);
          if (!this.reconstructor)
            throw new Error("got binary data when not reconstructing a packet");
          (r = this.reconstructor.takeBinaryData(e)) &&
            ((this.reconstructor = null), this.emit("decoded", r));
        }
      }),
      (f.prototype.destroy = function () {
        this.reconstructor && this.reconstructor.finishedReconstruction();
      }),
      (d.prototype.takeBinaryData = function (e) {
        if (
          (this.buffers.push(e),
          this.buffers.length === this.reconPack.attachments)
        ) {
          var t = i.reconstructPacket(this.reconPack, this.buffers);
          return this.finishedReconstruction(), t;
        }
        return null;
      }),
      (d.prototype.finishedReconstruction = function () {
        (this.reconPack = null), (this.buffers = []);
      });
  },
  function (e, t, r) {
    "use strict";
    (function (e) {
      var n = r(70),
        o = r(71),
        i = r(72);
      function s() {
        return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function a(e, t) {
        if (s() < t) throw new RangeError("Invalid typed array length");
        return (
          u.TYPED_ARRAY_SUPPORT
            ? ((e = new Uint8Array(t)).__proto__ = u.prototype)
            : (null === e && (e = new u(t)), (e.length = t)),
          e
        );
      }
      function u(e, t, r) {
        if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
          return new u(e, t, r);
        if ("number" == typeof e) {
          if ("string" == typeof t)
            throw new Error(
              "If encoding is specified then the first argument must be a string"
            );
          return f(this, e);
        }
        return c(this, e, t, r);
      }
      function c(e, t, r, n) {
        if ("number" == typeof t)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
          ? (function (e, t, r, n) {
              if ((t.byteLength, r < 0 || t.byteLength < r))
                throw new RangeError("'offset' is out of bounds");
              if (t.byteLength < r + (n || 0))
                throw new RangeError("'length' is out of bounds");
              t =
                void 0 === r && void 0 === n
                  ? new Uint8Array(t)
                  : void 0 === n
                  ? new Uint8Array(t, r)
                  : new Uint8Array(t, r, n);
              u.TYPED_ARRAY_SUPPORT
                ? ((e = t).__proto__ = u.prototype)
                : (e = d(e, t));
              return e;
            })(e, t, r, n)
          : "string" == typeof t
          ? (function (e, t, r) {
              ("string" == typeof r && "" !== r) || (r = "utf8");
              if (!u.isEncoding(r))
                throw new TypeError(
                  '"encoding" must be a valid string encoding'
                );
              var n = 0 | h(t, r),
                o = (e = a(e, n)).write(t, r);
              o !== n && (e = e.slice(0, o));
              return e;
            })(e, t, r)
          : (function (e, t) {
              if (u.isBuffer(t)) {
                var r = 0 | l(t.length);
                return 0 === (e = a(e, r)).length ? e : (t.copy(e, 0, 0, r), e);
              }
              if (t) {
                if (
                  ("undefined" != typeof ArrayBuffer &&
                    t.buffer instanceof ArrayBuffer) ||
                  "length" in t
                )
                  return "number" != typeof t.length || (n = t.length) != n
                    ? a(e, 0)
                    : d(e, t);
                if ("Buffer" === t.type && i(t.data)) return d(e, t.data);
              }
              var n;
              throw new TypeError(
                "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
              );
            })(e, t);
      }
      function p(e) {
        if ("number" != typeof e)
          throw new TypeError('"size" argument must be a number');
        if (e < 0) throw new RangeError('"size" argument must not be negative');
      }
      function f(e, t) {
        if ((p(t), (e = a(e, t < 0 ? 0 : 0 | l(t))), !u.TYPED_ARRAY_SUPPORT))
          for (var r = 0; r < t; ++r) e[r] = 0;
        return e;
      }
      function d(e, t) {
        var r = t.length < 0 ? 0 : 0 | l(t.length);
        e = a(e, r);
        for (var n = 0; n < r; n += 1) e[n] = 255 & t[n];
        return e;
      }
      function l(e) {
        if (e >= s())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              s().toString(16) +
              " bytes"
          );
        return 0 | e;
      }
      function h(e, t) {
        if (u.isBuffer(e)) return e.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)
        )
          return e.byteLength;
        "string" != typeof e && (e = "" + e);
        var r = e.length;
        if (0 === r) return 0;
        for (var n = !1; ; )
          switch (t) {
            case "ascii":
            case "latin1":
            case "binary":
              return r;
            case "utf8":
            case "utf-8":
            case void 0:
              return L(e).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * r;
            case "hex":
              return r >>> 1;
            case "base64":
              return G(e).length;
            default:
              if (n) return L(e).length;
              (t = ("" + t).toLowerCase()), (n = !0);
          }
      }
      function y(e, t, r) {
        var n = !1;
        if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return "";
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return "";
        if ((r >>>= 0) <= (t >>>= 0)) return "";
        for (e || (e = "utf8"); ; )
          switch (e) {
            case "hex":
              return R(this, t, r);
            case "utf8":
            case "utf-8":
              return N(this, t, r);
            case "ascii":
              return O(this, t, r);
            case "latin1":
            case "binary":
              return S(this, t, r);
            case "base64":
              return k(this, t, r);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return T(this, t, r);
            default:
              if (n) throw new TypeError("Unknown encoding: " + e);
              (e = (e + "").toLowerCase()), (n = !0);
          }
      }
      function g(e, t, r) {
        var n = e[t];
        (e[t] = e[r]), (e[r] = n);
      }
      function m(e, t, r, n, o) {
        if (0 === e.length) return -1;
        if (
          ("string" == typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          (r = +r),
          isNaN(r) && (r = o ? 0 : e.length - 1),
          r < 0 && (r = e.length + r),
          r >= e.length)
        ) {
          if (o) return -1;
          r = e.length - 1;
        } else if (r < 0) {
          if (!o) return -1;
          r = 0;
        }
        if (("string" == typeof t && (t = u.from(t, n)), u.isBuffer(t)))
          return 0 === t.length ? -1 : v(e, t, r, n, o);
        if ("number" == typeof t)
          return (
            (t &= 255),
            u.TYPED_ARRAY_SUPPORT &&
            "function" == typeof Uint8Array.prototype.indexOf
              ? o
                ? Uint8Array.prototype.indexOf.call(e, t, r)
                : Uint8Array.prototype.lastIndexOf.call(e, t, r)
              : v(e, [t], r, n, o)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function v(e, t, r, n, o) {
        var i,
          s = 1,
          a = e.length,
          u = t.length;
        if (
          void 0 !== n &&
          ("ucs2" === (n = String(n).toLowerCase()) ||
            "ucs-2" === n ||
            "utf16le" === n ||
            "utf-16le" === n)
        ) {
          if (e.length < 2 || t.length < 2) return -1;
          (s = 2), (a /= 2), (u /= 2), (r /= 2);
        }
        function c(e, t) {
          return 1 === s ? e[t] : e.readUInt16BE(t * s);
        }
        if (o) {
          var p = -1;
          for (i = r; i < a; i++)
            if (c(e, i) === c(t, -1 === p ? 0 : i - p)) {
              if ((-1 === p && (p = i), i - p + 1 === u)) return p * s;
            } else -1 !== p && (i -= i - p), (p = -1);
        } else
          for (r + u > a && (r = a - u), i = r; i >= 0; i--) {
            for (var f = !0, d = 0; d < u; d++)
              if (c(e, i + d) !== c(t, d)) {
                f = !1;
                break;
              }
            if (f) return i;
          }
        return -1;
      }
      function b(e, t, r, n) {
        r = Number(r) || 0;
        var o = e.length - r;
        n ? (n = Number(n)) > o && (n = o) : (n = o);
        var i = t.length;
        if (i % 2 != 0) throw new TypeError("Invalid hex string");
        n > i / 2 && (n = i / 2);
        for (var s = 0; s < n; ++s) {
          var a = parseInt(t.substr(2 * s, 2), 16);
          if (isNaN(a)) return s;
          e[r + s] = a;
        }
        return s;
      }
      function _(e, t, r, n) {
        return q(L(t, e.length - r), e, r, n);
      }
      function w(e, t, r, n) {
        return q(
          (function (e) {
            for (var t = [], r = 0; r < e.length; ++r)
              t.push(255 & e.charCodeAt(r));
            return t;
          })(t),
          e,
          r,
          n
        );
      }
      function E(e, t, r, n) {
        return w(e, t, r, n);
      }
      function A(e, t, r, n) {
        return q(G(t), e, r, n);
      }
      function C(e, t, r, n) {
        return q(
          (function (e, t) {
            for (
              var r, n, o, i = [], s = 0;
              s < e.length && !((t -= 2) < 0);
              ++s
            )
              (r = e.charCodeAt(s)),
                (n = r >> 8),
                (o = r % 256),
                i.push(o),
                i.push(n);
            return i;
          })(t, e.length - r),
          e,
          r,
          n
        );
      }
      function k(e, t, r) {
        return 0 === t && r === e.length
          ? n.fromByteArray(e)
          : n.fromByteArray(e.slice(t, r));
      }
      function N(e, t, r) {
        r = Math.min(e.length, r);
        for (var n = [], o = t; o < r; ) {
          var i,
            s,
            a,
            u,
            c = e[o],
            p = null,
            f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
          if (o + f <= r)
            switch (f) {
              case 1:
                c < 128 && (p = c);
                break;
              case 2:
                128 == (192 & (i = e[o + 1])) &&
                  (u = ((31 & c) << 6) | (63 & i)) > 127 &&
                  (p = u);
                break;
              case 3:
                (i = e[o + 1]),
                  (s = e[o + 2]),
                  128 == (192 & i) &&
                    128 == (192 & s) &&
                    (u = ((15 & c) << 12) | ((63 & i) << 6) | (63 & s)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (p = u);
                break;
              case 4:
                (i = e[o + 1]),
                  (s = e[o + 2]),
                  (a = e[o + 3]),
                  128 == (192 & i) &&
                    128 == (192 & s) &&
                    128 == (192 & a) &&
                    (u =
                      ((15 & c) << 18) |
                      ((63 & i) << 12) |
                      ((63 & s) << 6) |
                      (63 & a)) > 65535 &&
                    u < 1114112 &&
                    (p = u);
            }
          null === p
            ? ((p = 65533), (f = 1))
            : p > 65535 &&
              ((p -= 65536),
              n.push(((p >>> 10) & 1023) | 55296),
              (p = 56320 | (1023 & p))),
            n.push(p),
            (o += f);
        }
        return (function (e) {
          var t = e.length;
          if (t <= 4096) return String.fromCharCode.apply(String, e);
          var r = "",
            n = 0;
          for (; n < t; )
            r += String.fromCharCode.apply(String, e.slice(n, (n += 4096)));
          return r;
        })(n);
      }
      (t.Buffer = u),
        (t.SlowBuffer = function (e) {
          +e != e && (e = 0);
          return u.alloc(+e);
        }),
        (t.INSPECT_MAX_BYTES = 50),
        (u.TYPED_ARRAY_SUPPORT =
          void 0 !== e.TYPED_ARRAY_SUPPORT
            ? e.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var e = new Uint8Array(1);
                  return (
                    (e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === e.foo() &&
                      "function" == typeof e.subarray &&
                      0 === e.subarray(1, 1).byteLength
                  );
                } catch (e) {
                  return !1;
                }
              })()),
        (t.kMaxLength = s()),
        (u.poolSize = 8192),
        (u._augment = function (e) {
          return (e.__proto__ = u.prototype), e;
        }),
        (u.from = function (e, t, r) {
          return c(null, e, t, r);
        }),
        u.TYPED_ARRAY_SUPPORT &&
          ((u.prototype.__proto__ = Uint8Array.prototype),
          (u.__proto__ = Uint8Array),
          "undefined" != typeof Symbol &&
            Symbol.species &&
            u[Symbol.species] === u &&
            Object.defineProperty(u, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (u.alloc = function (e, t, r) {
          return (function (e, t, r, n) {
            return (
              p(t),
              t <= 0
                ? a(e, t)
                : void 0 !== r
                ? "string" == typeof n
                  ? a(e, t).fill(r, n)
                  : a(e, t).fill(r)
                : a(e, t)
            );
          })(null, e, t, r);
        }),
        (u.allocUnsafe = function (e) {
          return f(null, e);
        }),
        (u.allocUnsafeSlow = function (e) {
          return f(null, e);
        }),
        (u.isBuffer = function (e) {
          return !(null == e || !e._isBuffer);
        }),
        (u.compare = function (e, t) {
          if (!u.isBuffer(e) || !u.isBuffer(t))
            throw new TypeError("Arguments must be Buffers");
          if (e === t) return 0;
          for (
            var r = e.length, n = t.length, o = 0, i = Math.min(r, n);
            o < i;
            ++o
          )
            if (e[o] !== t[o]) {
              (r = e[o]), (n = t[o]);
              break;
            }
          return r < n ? -1 : n < r ? 1 : 0;
        }),
        (u.isEncoding = function (e) {
          switch (String(e).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (u.concat = function (e, t) {
          if (!i(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return u.alloc(0);
          var r;
          if (void 0 === t)
            for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
          var n = u.allocUnsafe(t),
            o = 0;
          for (r = 0; r < e.length; ++r) {
            var s = e[r];
            if (!u.isBuffer(s))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            s.copy(n, o), (o += s.length);
          }
          return n;
        }),
        (u.byteLength = h),
        (u.prototype._isBuffer = !0),
        (u.prototype.swap16 = function () {
          var e = this.length;
          if (e % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t = 0; t < e; t += 2) g(this, t, t + 1);
          return this;
        }),
        (u.prototype.swap32 = function () {
          var e = this.length;
          if (e % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t = 0; t < e; t += 4)
            g(this, t, t + 3), g(this, t + 1, t + 2);
          return this;
        }),
        (u.prototype.swap64 = function () {
          var e = this.length;
          if (e % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t = 0; t < e; t += 8)
            g(this, t, t + 7),
              g(this, t + 1, t + 6),
              g(this, t + 2, t + 5),
              g(this, t + 3, t + 4);
          return this;
        }),
        (u.prototype.toString = function () {
          var e = 0 | this.length;
          return 0 === e
            ? ""
            : 0 === arguments.length
            ? N(this, 0, e)
            : y.apply(this, arguments);
        }),
        (u.prototype.equals = function (e) {
          if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          return this === e || 0 === u.compare(this, e);
        }),
        (u.prototype.inspect = function () {
          var e = "",
            r = t.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((e = this.toString("hex", 0, r).match(/.{2}/g).join(" ")),
              this.length > r && (e += " ... ")),
            "<Buffer " + e + ">"
          );
        }),
        (u.prototype.compare = function (e, t, r, n, o) {
          if (!u.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === t && (t = 0),
            void 0 === r && (r = e ? e.length : 0),
            void 0 === n && (n = 0),
            void 0 === o && (o = this.length),
            t < 0 || r > e.length || n < 0 || o > this.length)
          )
            throw new RangeError("out of range index");
          if (n >= o && t >= r) return 0;
          if (n >= o) return -1;
          if (t >= r) return 1;
          if (this === e) return 0;
          for (
            var i = (o >>>= 0) - (n >>>= 0),
              s = (r >>>= 0) - (t >>>= 0),
              a = Math.min(i, s),
              c = this.slice(n, o),
              p = e.slice(t, r),
              f = 0;
            f < a;
            ++f
          )
            if (c[f] !== p[f]) {
              (i = c[f]), (s = p[f]);
              break;
            }
          return i < s ? -1 : s < i ? 1 : 0;
        }),
        (u.prototype.includes = function (e, t, r) {
          return -1 !== this.indexOf(e, t, r);
        }),
        (u.prototype.indexOf = function (e, t, r) {
          return m(this, e, t, r, !0);
        }),
        (u.prototype.lastIndexOf = function (e, t, r) {
          return m(this, e, t, r, !1);
        }),
        (u.prototype.write = function (e, t, r, n) {
          if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
          else if (void 0 === r && "string" == typeof t)
            (n = t), (r = this.length), (t = 0);
          else {
            if (!isFinite(t))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (t |= 0),
              isFinite(r)
                ? ((r |= 0), void 0 === n && (n = "utf8"))
                : ((n = r), (r = void 0));
          }
          var o = this.length - t;
          if (
            ((void 0 === r || r > o) && (r = o),
            (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          n || (n = "utf8");
          for (var i = !1; ; )
            switch (n) {
              case "hex":
                return b(this, e, t, r);
              case "utf8":
              case "utf-8":
                return _(this, e, t, r);
              case "ascii":
                return w(this, e, t, r);
              case "latin1":
              case "binary":
                return E(this, e, t, r);
              case "base64":
                return A(this, e, t, r);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return C(this, e, t, r);
              default:
                if (i) throw new TypeError("Unknown encoding: " + n);
                (n = ("" + n).toLowerCase()), (i = !0);
            }
        }),
        (u.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      function O(e, t, r) {
        var n = "";
        r = Math.min(e.length, r);
        for (var o = t; o < r; ++o) n += String.fromCharCode(127 & e[o]);
        return n;
      }
      function S(e, t, r) {
        var n = "";
        r = Math.min(e.length, r);
        for (var o = t; o < r; ++o) n += String.fromCharCode(e[o]);
        return n;
      }
      function R(e, t, r) {
        var n = e.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
        for (var o = "", i = t; i < r; ++i) o += F(e[i]);
        return o;
      }
      function T(e, t, r) {
        for (var n = e.slice(t, r), o = "", i = 0; i < n.length; i += 2)
          o += String.fromCharCode(n[i] + 256 * n[i + 1]);
        return o;
      }
      function x(e, t, r) {
        if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > r)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function I(e, t, r, n, o, i) {
        if (!u.isBuffer(e))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > o || t < i)
          throw new RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw new RangeError("Index out of range");
      }
      function D(e, t, r, n) {
        t < 0 && (t = 65535 + t + 1);
        for (var o = 0, i = Math.min(e.length - r, 2); o < i; ++o)
          e[r + o] =
            (t & (255 << (8 * (n ? o : 1 - o)))) >>> (8 * (n ? o : 1 - o));
      }
      function U(e, t, r, n) {
        t < 0 && (t = 4294967295 + t + 1);
        for (var o = 0, i = Math.min(e.length - r, 4); o < i; ++o)
          e[r + o] = (t >>> (8 * (n ? o : 3 - o))) & 255;
      }
      function M(e, t, r, n, o, i) {
        if (r + n > e.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }
      function B(e, t, r, n, i) {
        return i || M(e, 0, r, 4), o.write(e, t, r, n, 23, 4), r + 4;
      }
      function P(e, t, r, n, i) {
        return i || M(e, 0, r, 8), o.write(e, t, r, n, 52, 8), r + 8;
      }
      (u.prototype.slice = function (e, t) {
        var r,
          n = this.length;
        if (
          ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
          (t = void 0 === t ? n : ~~t) < 0
            ? (t += n) < 0 && (t = 0)
            : t > n && (t = n),
          t < e && (t = e),
          u.TYPED_ARRAY_SUPPORT)
        )
          (r = this.subarray(e, t)).__proto__ = u.prototype;
        else {
          var o = t - e;
          r = new u(o, void 0);
          for (var i = 0; i < o; ++i) r[i] = this[i + e];
        }
        return r;
      }),
        (u.prototype.readUIntLE = function (e, t, r) {
          (e |= 0), (t |= 0), r || x(e, t, this.length);
          for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
            n += this[e + i] * o;
          return n;
        }),
        (u.prototype.readUIntBE = function (e, t, r) {
          (e |= 0), (t |= 0), r || x(e, t, this.length);
          for (var n = this[e + --t], o = 1; t > 0 && (o *= 256); )
            n += this[e + --t] * o;
          return n;
        }),
        (u.prototype.readUInt8 = function (e, t) {
          return t || x(e, 1, this.length), this[e];
        }),
        (u.prototype.readUInt16LE = function (e, t) {
          return t || x(e, 2, this.length), this[e] | (this[e + 1] << 8);
        }),
        (u.prototype.readUInt16BE = function (e, t) {
          return t || x(e, 2, this.length), (this[e] << 8) | this[e + 1];
        }),
        (u.prototype.readUInt32LE = function (e, t) {
          return (
            t || x(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              16777216 * this[e + 3]
          );
        }),
        (u.prototype.readUInt32BE = function (e, t) {
          return (
            t || x(e, 4, this.length),
            16777216 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
        (u.prototype.readIntLE = function (e, t, r) {
          (e |= 0), (t |= 0), r || x(e, t, this.length);
          for (var n = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
            n += this[e + i] * o;
          return n >= (o *= 128) && (n -= Math.pow(2, 8 * t)), n;
        }),
        (u.prototype.readIntBE = function (e, t, r) {
          (e |= 0), (t |= 0), r || x(e, t, this.length);
          for (var n = t, o = 1, i = this[e + --n]; n > 0 && (o *= 256); )
            i += this[e + --n] * o;
          return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i;
        }),
        (u.prototype.readInt8 = function (e, t) {
          return (
            t || x(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (u.prototype.readInt16LE = function (e, t) {
          t || x(e, 2, this.length);
          var r = this[e] | (this[e + 1] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (u.prototype.readInt16BE = function (e, t) {
          t || x(e, 2, this.length);
          var r = this[e + 1] | (this[e] << 8);
          return 32768 & r ? 4294901760 | r : r;
        }),
        (u.prototype.readInt32LE = function (e, t) {
          return (
            t || x(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (u.prototype.readInt32BE = function (e, t) {
          return (
            t || x(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (u.prototype.readFloatLE = function (e, t) {
          return t || x(e, 4, this.length), o.read(this, e, !0, 23, 4);
        }),
        (u.prototype.readFloatBE = function (e, t) {
          return t || x(e, 4, this.length), o.read(this, e, !1, 23, 4);
        }),
        (u.prototype.readDoubleLE = function (e, t) {
          return t || x(e, 8, this.length), o.read(this, e, !0, 52, 8);
        }),
        (u.prototype.readDoubleBE = function (e, t) {
          return t || x(e, 8, this.length), o.read(this, e, !1, 52, 8);
        }),
        (u.prototype.writeUIntLE = function (e, t, r, n) {
          ((e = +e), (t |= 0), (r |= 0), n) ||
            I(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
          var o = 1,
            i = 0;
          for (this[t] = 255 & e; ++i < r && (o *= 256); )
            this[t + i] = (e / o) & 255;
          return t + r;
        }),
        (u.prototype.writeUIntBE = function (e, t, r, n) {
          ((e = +e), (t |= 0), (r |= 0), n) ||
            I(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
          var o = r - 1,
            i = 1;
          for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
            this[t + o] = (e / i) & 255;
          return t + r;
        }),
        (u.prototype.writeUInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || I(this, e, t, 1, 255, 0),
            u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (u.prototype.writeUInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || I(this, e, t, 2, 65535, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : D(this, e, t, !0),
            t + 2
          );
        }),
        (u.prototype.writeUInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || I(this, e, t, 2, 65535, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : D(this, e, t, !1),
            t + 2
          );
        }),
        (u.prototype.writeUInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || I(this, e, t, 4, 4294967295, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t + 3] = e >>> 24),
                (this[t + 2] = e >>> 16),
                (this[t + 1] = e >>> 8),
                (this[t] = 255 & e))
              : U(this, e, t, !0),
            t + 4
          );
        }),
        (u.prototype.writeUInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || I(this, e, t, 4, 4294967295, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : U(this, e, t, !1),
            t + 4
          );
        }),
        (u.prototype.writeIntLE = function (e, t, r, n) {
          if (((e = +e), (t |= 0), !n)) {
            var o = Math.pow(2, 8 * r - 1);
            I(this, e, t, r, o - 1, -o);
          }
          var i = 0,
            s = 1,
            a = 0;
          for (this[t] = 255 & e; ++i < r && (s *= 256); )
            e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1),
              (this[t + i] = (((e / s) >> 0) - a) & 255);
          return t + r;
        }),
        (u.prototype.writeIntBE = function (e, t, r, n) {
          if (((e = +e), (t |= 0), !n)) {
            var o = Math.pow(2, 8 * r - 1);
            I(this, e, t, r, o - 1, -o);
          }
          var i = r - 1,
            s = 1,
            a = 0;
          for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
            e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1),
              (this[t + i] = (((e / s) >> 0) - a) & 255);
          return t + r;
        }),
        (u.prototype.writeInt8 = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || I(this, e, t, 1, 127, -128),
            u.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            (this[t] = 255 & e),
            t + 1
          );
        }),
        (u.prototype.writeInt16LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || I(this, e, t, 2, 32767, -32768),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e), (this[t + 1] = e >>> 8))
              : D(this, e, t, !0),
            t + 2
          );
        }),
        (u.prototype.writeInt16BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || I(this, e, t, 2, 32767, -32768),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 8), (this[t + 1] = 255 & e))
              : D(this, e, t, !1),
            t + 2
          );
        }),
        (u.prototype.writeInt32LE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || I(this, e, t, 4, 2147483647, -2147483648),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = 255 & e),
                (this[t + 1] = e >>> 8),
                (this[t + 2] = e >>> 16),
                (this[t + 3] = e >>> 24))
              : U(this, e, t, !0),
            t + 4
          );
        }),
        (u.prototype.writeInt32BE = function (e, t, r) {
          return (
            (e = +e),
            (t |= 0),
            r || I(this, e, t, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[t] = e >>> 24),
                (this[t + 1] = e >>> 16),
                (this[t + 2] = e >>> 8),
                (this[t + 3] = 255 & e))
              : U(this, e, t, !1),
            t + 4
          );
        }),
        (u.prototype.writeFloatLE = function (e, t, r) {
          return B(this, e, t, !0, r);
        }),
        (u.prototype.writeFloatBE = function (e, t, r) {
          return B(this, e, t, !1, r);
        }),
        (u.prototype.writeDoubleLE = function (e, t, r) {
          return P(this, e, t, !0, r);
        }),
        (u.prototype.writeDoubleBE = function (e, t, r) {
          return P(this, e, t, !1, r);
        }),
        (u.prototype.copy = function (e, t, r, n) {
          if (
            (r || (r = 0),
            n || 0 === n || (n = this.length),
            t >= e.length && (t = e.length),
            t || (t = 0),
            n > 0 && n < r && (n = r),
            n === r)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (t < 0) throw new RangeError("targetStart out of bounds");
          if (r < 0 || r >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (n < 0) throw new RangeError("sourceEnd out of bounds");
          n > this.length && (n = this.length),
            e.length - t < n - r && (n = e.length - t + r);
          var o,
            i = n - r;
          if (this === e && r < t && t < n)
            for (o = i - 1; o >= 0; --o) e[o + t] = this[o + r];
          else if (i < 1e3 || !u.TYPED_ARRAY_SUPPORT)
            for (o = 0; o < i; ++o) e[o + t] = this[o + r];
          else Uint8Array.prototype.set.call(e, this.subarray(r, r + i), t);
          return i;
        }),
        (u.prototype.fill = function (e, t, r, n) {
          if ("string" == typeof e) {
            if (
              ("string" == typeof t
                ? ((n = t), (t = 0), (r = this.length))
                : "string" == typeof r && ((n = r), (r = this.length)),
              1 === e.length)
            ) {
              var o = e.charCodeAt(0);
              o < 256 && (e = o);
            }
            if (void 0 !== n && "string" != typeof n)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof n && !u.isEncoding(n))
              throw new TypeError("Unknown encoding: " + n);
          } else "number" == typeof e && (e &= 255);
          if (t < 0 || this.length < t || this.length < r)
            throw new RangeError("Out of range index");
          if (r <= t) return this;
          var i;
          if (
            ((t >>>= 0),
            (r = void 0 === r ? this.length : r >>> 0),
            e || (e = 0),
            "number" == typeof e)
          )
            for (i = t; i < r; ++i) this[i] = e;
          else {
            var s = u.isBuffer(e) ? e : L(new u(e, n).toString()),
              a = s.length;
            for (i = 0; i < r - t; ++i) this[i + t] = s[i % a];
          }
          return this;
        });
      var j = /[^+\/0-9A-Za-z-_]/g;
      function F(e) {
        return e < 16 ? "0" + e.toString(16) : e.toString(16);
      }
      function L(e, t) {
        var r;
        t = t || 1 / 0;
        for (var n = e.length, o = null, i = [], s = 0; s < n; ++s) {
          if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
            if (!o) {
              if (r > 56319) {
                (t -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              if (s + 1 === n) {
                (t -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && i.push(239, 191, 189), (o = r);
              continue;
            }
            r = 65536 + (((o - 55296) << 10) | (r - 56320));
          } else o && (t -= 3) > -1 && i.push(239, 191, 189);
          if (((o = null), r < 128)) {
            if ((t -= 1) < 0) break;
            i.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            i.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw new Error("Invalid code point");
            if ((t -= 4) < 0) break;
            i.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          }
        }
        return i;
      }
      function G(e) {
        return n.toByteArray(
          (function (e) {
            if (
              (e = (function (e) {
                return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
              })(e).replace(j, "")).length < 2
            )
              return "";
            for (; e.length % 4 != 0; ) e += "=";
            return e;
          })(e)
        );
      }
      function q(e, t, r, n) {
        for (var o = 0; o < n && !(o + r >= t.length || o >= e.length); ++o)
          t[o + r] = e[o];
        return o;
      }
    }.call(this, r(20)));
  },
  function (e, t) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (r = window);
    }
    e.exports = r;
  },
  function (e, t, r) {
    var n = r(75);
    e.exports = function (e) {
      var t = e.xdomain,
        r = e.xscheme,
        o = e.enablesXDR;
      try {
        if ("undefined" != typeof XMLHttpRequest && (!t || n))
          return new XMLHttpRequest();
      } catch (e) {}
      try {
        if ("undefined" != typeof XDomainRequest && !r && o)
          return new XDomainRequest();
      } catch (e) {}
      if (!t)
        try {
          return new self[["Active"].concat("Object").join("X")](
            "Microsoft.XMLHTTP"
          );
        } catch (e) {}
    };
  },
  function (e, t, r) {
    var n = r(8),
      o = r(7);
    function i(e) {
      (this.path = e.path),
        (this.hostname = e.hostname),
        (this.port = e.port),
        (this.secure = e.secure),
        (this.query = e.query),
        (this.timestampParam = e.timestampParam),
        (this.timestampRequests = e.timestampRequests),
        (this.readyState = ""),
        (this.agent = e.agent || !1),
        (this.socket = e.socket),
        (this.enablesXDR = e.enablesXDR),
        (this.withCredentials = e.withCredentials),
        (this.pfx = e.pfx),
        (this.key = e.key),
        (this.passphrase = e.passphrase),
        (this.cert = e.cert),
        (this.ca = e.ca),
        (this.ciphers = e.ciphers),
        (this.rejectUnauthorized = e.rejectUnauthorized),
        (this.forceNode = e.forceNode),
        (this.isReactNative = e.isReactNative),
        (this.extraHeaders = e.extraHeaders),
        (this.localAddress = e.localAddress);
    }
    (e.exports = i),
      o(i.prototype),
      (i.prototype.onError = function (e, t) {
        var r = new Error(e);
        return (
          (r.type = "TransportError"),
          (r.description = t),
          this.emit("error", r),
          this
        );
      }),
      (i.prototype.open = function () {
        return (
          ("closed" !== this.readyState && "" !== this.readyState) ||
            ((this.readyState = "opening"), this.doOpen()),
          this
        );
      }),
      (i.prototype.close = function () {
        return (
          ("opening" !== this.readyState && "open" !== this.readyState) ||
            (this.doClose(), this.onClose()),
          this
        );
      }),
      (i.prototype.send = function (e) {
        if ("open" !== this.readyState) throw new Error("Transport not open");
        this.write(e);
      }),
      (i.prototype.onOpen = function () {
        (this.readyState = "open"), (this.writable = !0), this.emit("open");
      }),
      (i.prototype.onData = function (e) {
        var t = n.decodePacket(e, this.socket.binaryType);
        this.onPacket(t);
      }),
      (i.prototype.onPacket = function (e) {
        this.emit("packet", e);
      }),
      (i.prototype.onClose = function () {
        (this.readyState = "closed"), this.emit("close");
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = f;
    var n,
      o = r(4),
      i = o.LongBits,
      s = o.base64,
      a = o.utf8;
    function u(e, t, r) {
      (this.fn = e), (this.len = t), (this.next = void 0), (this.val = r);
    }
    function c() {}
    function p(e) {
      (this.head = e.head),
        (this.tail = e.tail),
        (this.len = e.len),
        (this.next = e.states);
    }
    function f() {
      (this.len = 0),
        (this.head = new u(c, 0, 0)),
        (this.tail = this.head),
        (this.states = null);
    }
    function d(e, t, r) {
      t[r] = 255 & e;
    }
    function l(e, t) {
      (this.len = e), (this.next = void 0), (this.val = t);
    }
    function h(e, t, r) {
      for (; e.hi; )
        (t[r++] = (127 & e.lo) | 128),
          (e.lo = ((e.lo >>> 7) | (e.hi << 25)) >>> 0),
          (e.hi >>>= 7);
      for (; e.lo > 127; ) (t[r++] = (127 & e.lo) | 128), (e.lo = e.lo >>> 7);
      t[r++] = e.lo;
    }
    function y(e, t, r) {
      (t[r] = 255 & e),
        (t[r + 1] = (e >>> 8) & 255),
        (t[r + 2] = (e >>> 16) & 255),
        (t[r + 3] = e >>> 24);
    }
    (f.create = o.Buffer
      ? function () {
          return (f.create = function () {
            return new n();
          })();
        }
      : function () {
          return new f();
        }),
      (f.alloc = function (e) {
        return new o.Array(e);
      }),
      o.Array !== Array &&
        (f.alloc = o.pool(f.alloc, o.Array.prototype.subarray)),
      (f.prototype._push = function (e, t, r) {
        return (
          (this.tail = this.tail.next = new u(e, t, r)), (this.len += t), this
        );
      }),
      (l.prototype = Object.create(u.prototype)),
      (l.prototype.fn = function (e, t, r) {
        for (; e > 127; ) (t[r++] = (127 & e) | 128), (e >>>= 7);
        t[r] = e;
      }),
      (f.prototype.uint32 = function (e) {
        return (
          (this.len += (this.tail = this.tail.next = new l(
            (e >>>= 0) < 128
              ? 1
              : e < 16384
              ? 2
              : e < 2097152
              ? 3
              : e < 268435456
              ? 4
              : 5,
            e
          )).len),
          this
        );
      }),
      (f.prototype.int32 = function (e) {
        return e < 0 ? this._push(h, 10, i.fromNumber(e)) : this.uint32(e);
      }),
      (f.prototype.sint32 = function (e) {
        return this.uint32(((e << 1) ^ (e >> 31)) >>> 0);
      }),
      (f.prototype.uint64 = function (e) {
        var t = i.from(e);
        return this._push(h, t.length(), t);
      }),
      (f.prototype.int64 = f.prototype.uint64),
      (f.prototype.sint64 = function (e) {
        var t = i.from(e).zzEncode();
        return this._push(h, t.length(), t);
      }),
      (f.prototype.bool = function (e) {
        return this._push(d, 1, e ? 1 : 0);
      }),
      (f.prototype.fixed32 = function (e) {
        return this._push(y, 4, e >>> 0);
      }),
      (f.prototype.sfixed32 = f.prototype.fixed32),
      (f.prototype.fixed64 = function (e) {
        var t = i.from(e);
        return this._push(y, 4, t.lo)._push(y, 4, t.hi);
      }),
      (f.prototype.sfixed64 = f.prototype.fixed64),
      (f.prototype.float = function (e) {
        return this._push(o.float.writeFloatLE, 4, e);
      }),
      (f.prototype.double = function (e) {
        return this._push(o.float.writeDoubleLE, 8, e);
      });
    var g = o.Array.prototype.set
      ? function (e, t, r) {
          t.set(e, r);
        }
      : function (e, t, r) {
          for (var n = 0; n < e.length; ++n) t[r + n] = e[n];
        };
    (f.prototype.bytes = function (e) {
      var t = e.length >>> 0;
      if (!t) return this._push(d, 1, 0);
      if (o.isString(e)) {
        var r = f.alloc((t = s.length(e)));
        s.decode(e, r, 0), (e = r);
      }
      return this.uint32(t)._push(g, t, e);
    }),
      (f.prototype.string = function (e) {
        var t = a.length(e);
        return t ? this.uint32(t)._push(a.write, t, e) : this._push(d, 1, 0);
      }),
      (f.prototype.fork = function () {
        return (
          (this.states = new p(this)),
          (this.head = this.tail = new u(c, 0, 0)),
          (this.len = 0),
          this
        );
      }),
      (f.prototype.reset = function () {
        return (
          this.states
            ? ((this.head = this.states.head),
              (this.tail = this.states.tail),
              (this.len = this.states.len),
              (this.states = this.states.next))
            : ((this.head = this.tail = new u(c, 0, 0)), (this.len = 0)),
          this
        );
      }),
      (f.prototype.ldelim = function () {
        var e = this.head,
          t = this.tail,
          r = this.len;
        return (
          this.reset().uint32(r),
          r && ((this.tail.next = e.next), (this.tail = t), (this.len += r)),
          this
        );
      }),
      (f.prototype.finish = function () {
        for (
          var e = this.head.next, t = this.constructor.alloc(this.len), r = 0;
          e;

        )
          e.fn(e.val, t, r), (r += e.len), (e = e.next);
        return t;
      }),
      (f._configure = function (e) {
        n = e;
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = u;
    var n,
      o = r(4),
      i = o.LongBits,
      s = o.utf8;
    function a(e, t) {
      return RangeError(
        "index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len
      );
    }
    function u(e) {
      (this.buf = e), (this.pos = 0), (this.len = e.length);
    }
    var c,
      p =
        "undefined" != typeof Uint8Array
          ? function (e) {
              if (e instanceof Uint8Array || Array.isArray(e)) return new u(e);
              throw Error("illegal buffer");
            }
          : function (e) {
              if (Array.isArray(e)) return new u(e);
              throw Error("illegal buffer");
            };
    function f() {
      var e = new i(0, 0),
        t = 0;
      if (!(this.len - this.pos > 4)) {
        for (; t < 3; ++t) {
          if (this.pos >= this.len) throw a(this);
          if (
            ((e.lo = (e.lo | ((127 & this.buf[this.pos]) << (7 * t))) >>> 0),
            this.buf[this.pos++] < 128)
          )
            return e;
        }
        return (
          (e.lo = (e.lo | ((127 & this.buf[this.pos++]) << (7 * t))) >>> 0), e
        );
      }
      for (; t < 4; ++t)
        if (
          ((e.lo = (e.lo | ((127 & this.buf[this.pos]) << (7 * t))) >>> 0),
          this.buf[this.pos++] < 128)
        )
          return e;
      if (
        ((e.lo = (e.lo | ((127 & this.buf[this.pos]) << 28)) >>> 0),
        (e.hi = (e.hi | ((127 & this.buf[this.pos]) >> 4)) >>> 0),
        this.buf[this.pos++] < 128)
      )
        return e;
      if (((t = 0), this.len - this.pos > 4)) {
        for (; t < 5; ++t)
          if (
            ((e.hi =
              (e.hi | ((127 & this.buf[this.pos]) << (7 * t + 3))) >>> 0),
            this.buf[this.pos++] < 128)
          )
            return e;
      } else
        for (; t < 5; ++t) {
          if (this.pos >= this.len) throw a(this);
          if (
            ((e.hi =
              (e.hi | ((127 & this.buf[this.pos]) << (7 * t + 3))) >>> 0),
            this.buf[this.pos++] < 128)
          )
            return e;
        }
      throw Error("invalid varint encoding");
    }
    function d(e, t) {
      return (
        (e[t - 4] | (e[t - 3] << 8) | (e[t - 2] << 16) | (e[t - 1] << 24)) >>> 0
      );
    }
    function l() {
      if (this.pos + 8 > this.len) throw a(this, 8);
      return new i(d(this.buf, (this.pos += 4)), d(this.buf, (this.pos += 4)));
    }
    (u.create = o.Buffer
      ? function (e) {
          return (u.create = function (e) {
            return o.Buffer.isBuffer(e) ? new n(e) : p(e);
          })(e);
        }
      : p),
      (u.prototype._slice =
        o.Array.prototype.subarray || o.Array.prototype.slice),
      (u.prototype.uint32 =
        ((c = 4294967295),
        function () {
          if (
            ((c = (127 & this.buf[this.pos]) >>> 0), this.buf[this.pos++] < 128)
          )
            return c;
          if (
            ((c = (c | ((127 & this.buf[this.pos]) << 7)) >>> 0),
            this.buf[this.pos++] < 128)
          )
            return c;
          if (
            ((c = (c | ((127 & this.buf[this.pos]) << 14)) >>> 0),
            this.buf[this.pos++] < 128)
          )
            return c;
          if (
            ((c = (c | ((127 & this.buf[this.pos]) << 21)) >>> 0),
            this.buf[this.pos++] < 128)
          )
            return c;
          if (
            ((c = (c | ((15 & this.buf[this.pos]) << 28)) >>> 0),
            this.buf[this.pos++] < 128)
          )
            return c;
          if ((this.pos += 5) > this.len)
            throw ((this.pos = this.len), a(this, 10));
          return c;
        })),
      (u.prototype.int32 = function () {
        return 0 | this.uint32();
      }),
      (u.prototype.sint32 = function () {
        var e = this.uint32();
        return ((e >>> 1) ^ -(1 & e)) | 0;
      }),
      (u.prototype.bool = function () {
        return 0 !== this.uint32();
      }),
      (u.prototype.fixed32 = function () {
        if (this.pos + 4 > this.len) throw a(this, 4);
        return d(this.buf, (this.pos += 4));
      }),
      (u.prototype.sfixed32 = function () {
        if (this.pos + 4 > this.len) throw a(this, 4);
        return 0 | d(this.buf, (this.pos += 4));
      }),
      (u.prototype.float = function () {
        if (this.pos + 4 > this.len) throw a(this, 4);
        var e = o.float.readFloatLE(this.buf, this.pos);
        return (this.pos += 4), e;
      }),
      (u.prototype.double = function () {
        if (this.pos + 8 > this.len) throw a(this, 4);
        var e = o.float.readDoubleLE(this.buf, this.pos);
        return (this.pos += 8), e;
      }),
      (u.prototype.bytes = function () {
        var e = this.uint32(),
          t = this.pos,
          r = this.pos + e;
        if (r > this.len) throw a(this, e);
        return (
          (this.pos += e),
          Array.isArray(this.buf)
            ? this.buf.slice(t, r)
            : t === r
            ? new this.buf.constructor(0)
            : this._slice.call(this.buf, t, r)
        );
      }),
      (u.prototype.string = function () {
        var e = this.bytes();
        return s.read(e, 0, e.length);
      }),
      (u.prototype.skip = function (e) {
        if ("number" == typeof e) {
          if (this.pos + e > this.len) throw a(this, e);
          this.pos += e;
        } else
          do {
            if (this.pos >= this.len) throw a(this);
          } while (128 & this.buf[this.pos++]);
        return this;
      }),
      (u.prototype.skipType = function (e) {
        switch (e) {
          case 0:
            this.skip();
            break;
          case 1:
            this.skip(8);
            break;
          case 2:
            this.skip(this.uint32());
            break;
          case 3:
            for (; 4 != (e = 7 & this.uint32()); ) this.skipType(e);
            break;
          case 5:
            this.skip(4);
            break;
          default:
            throw Error("invalid wire type " + e + " at offset " + this.pos);
        }
        return this;
      }),
      (u._configure = function (e) {
        n = e;
        var t = o.Long ? "toLong" : "toNumber";
        o.merge(u.prototype, {
          int64: function () {
            return f.call(this)[t](!1);
          },
          uint64: function () {
            return f.call(this)[t](!0);
          },
          sint64: function () {
            return f.call(this).zzDecode()[t](!1);
          },
          fixed64: function () {
            return l.call(this)[t](!0);
          },
          sfixed64: function () {
            return l.call(this)[t](!1);
          },
        });
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = s;
    var n = r(9);
    ((s.prototype = Object.create(n.prototype)).constructor = s).className =
      "OneOf";
    var o = r(10),
      i = r(1);
    function s(e, t, r, o) {
      if (
        (Array.isArray(t) || ((r = t), (t = void 0)),
        n.call(this, e, r),
        void 0 !== t && !Array.isArray(t))
      )
        throw TypeError("fieldNames must be an Array");
      (this.oneof = t || []), (this.fieldsArray = []), (this.comment = o);
    }
    function a(e) {
      if (e.parent)
        for (var t = 0; t < e.fieldsArray.length; ++t)
          e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t]);
    }
    (s.fromJSON = function (e, t) {
      return new s(e, t.oneof, t.options, t.comment);
    }),
      (s.prototype.toJSON = function (e) {
        var t = !!e && Boolean(e.keepComments);
        return i.toObject([
          "options",
          this.options,
          "oneof",
          this.oneof,
          "comment",
          t ? this.comment : void 0,
        ]);
      }),
      (s.prototype.add = function (e) {
        if (!(e instanceof o)) throw TypeError("field must be a Field");
        return (
          e.parent && e.parent !== this.parent && e.parent.remove(e),
          this.oneof.push(e.name),
          this.fieldsArray.push(e),
          (e.partOf = this),
          a(this),
          this
        );
      }),
      (s.prototype.remove = function (e) {
        if (!(e instanceof o)) throw TypeError("field must be a Field");
        var t = this.fieldsArray.indexOf(e);
        if (t < 0) throw Error(e + " is not a member of " + this);
        return (
          this.fieldsArray.splice(t, 1),
          (t = this.oneof.indexOf(e.name)) > -1 && this.oneof.splice(t, 1),
          (e.partOf = null),
          this
        );
      }),
      (s.prototype.onAdd = function (e) {
        n.prototype.onAdd.call(this, e);
        for (var t = 0; t < this.oneof.length; ++t) {
          var r = e.get(this.oneof[t]);
          r && !r.partOf && ((r.partOf = this), this.fieldsArray.push(r));
        }
        a(this);
      }),
      (s.prototype.onRemove = function (e) {
        for (var t, r = 0; r < this.fieldsArray.length; ++r)
          (t = this.fieldsArray[r]).parent && t.parent.remove(t);
        n.prototype.onRemove.call(this, e);
      }),
      (s.d = function () {
        for (var e = new Array(arguments.length), t = 0; t < arguments.length; )
          e[t] = arguments[t++];
        return function (t, r) {
          i.decorateType(t.constructor).add(new s(r, e)),
            Object.defineProperty(t, r, {
              get: i.oneOfGetter(e),
              set: i.oneOfSetter(e),
            });
        };
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = o;
    var n = r(4);
    function o(e) {
      if (e)
        for (var t = Object.keys(e), r = 0; r < t.length; ++r)
          this[t[r]] = e[t[r]];
    }
    (o.create = function (e) {
      return this.$type.create(e);
    }),
      (o.encode = function (e, t) {
        return this.$type.encode(e, t);
      }),
      (o.encodeDelimited = function (e, t) {
        return this.$type.encodeDelimited(e, t);
      }),
      (o.decode = function (e) {
        return this.$type.decode(e);
      }),
      (o.decodeDelimited = function (e) {
        return this.$type.decodeDelimited(e);
      }),
      (o.verify = function (e) {
        return this.$type.verify(e);
      }),
      (o.fromObject = function (e) {
        return this.$type.fromObject(e);
      }),
      (o.toObject = function (e, t) {
        return this.$type.toObject(e, t);
      }),
      (o.prototype.toJSON = function () {
        return this.$type.toObject(this, n.toJSONOptions);
      });
  },
  function (e, t) {
    var r = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
      n = [
        "source",
        "protocol",
        "authority",
        "userInfo",
        "user",
        "password",
        "host",
        "port",
        "relative",
        "path",
        "directory",
        "file",
        "query",
        "anchor",
      ];
    e.exports = function (e) {
      var t = e,
        o = e.indexOf("["),
        i = e.indexOf("]");
      -1 != o &&
        -1 != i &&
        (e =
          e.substring(0, o) +
          e.substring(o, i).replace(/:/g, ";") +
          e.substring(i, e.length));
      for (var s = r.exec(e || ""), a = {}, u = 14; u--; ) a[n[u]] = s[u] || "";
      return (
        -1 != o &&
          -1 != i &&
          ((a.source = t),
          (a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":")),
          (a.authority = a.authority
            .replace("[", "")
            .replace("]", "")
            .replace(/;/g, ":")),
          (a.ipv6uri = !0)),
        a
      );
    };
  },
  function (e, t) {
    var r = {}.toString;
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == r.call(e);
      };
  },
  function (e, t, r) {
    (function (t) {
      e.exports = function (e) {
        return (
          (r && t.isBuffer(e)) ||
          (n &&
            (e instanceof ArrayBuffer ||
              (function (e) {
                return "function" == typeof ArrayBuffer.isView
                  ? ArrayBuffer.isView(e)
                  : e.buffer instanceof ArrayBuffer;
              })(e)))
        );
      };
      var r = "function" == typeof t && "function" == typeof t.isBuffer,
        n = "function" == typeof ArrayBuffer;
    }.call(this, r(19).Buffer));
  },
  function (e, t, r) {
    var n = r(73),
      o = r(36),
      i = r(7),
      s = r(18),
      a = r(37),
      u = r(38),
      c = r(13)("socket.io-client:manager"),
      p = r(35),
      f = r(90),
      d = Object.prototype.hasOwnProperty;
    function l(e, t) {
      if (!(this instanceof l)) return new l(e, t);
      e && "object" == typeof e && ((t = e), (e = void 0)),
        ((t = t || {}).path = t.path || "/socket.io"),
        (this.nsps = {}),
        (this.subs = []),
        (this.opts = t),
        this.reconnection(!1 !== t.reconnection),
        this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0),
        this.reconnectionDelay(t.reconnectionDelay || 1e3),
        this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3),
        this.randomizationFactor(t.randomizationFactor || 0.5),
        (this.backoff = new f({
          min: this.reconnectionDelay(),
          max: this.reconnectionDelayMax(),
          jitter: this.randomizationFactor(),
        })),
        this.timeout(null == t.timeout ? 2e4 : t.timeout),
        (this.readyState = "closed"),
        (this.uri = e),
        (this.connecting = []),
        (this.lastPing = null),
        (this.encoding = !1),
        (this.packetBuffer = []);
      var r = t.parser || s;
      (this.encoder = new r.Encoder()),
        (this.decoder = new r.Decoder()),
        (this.autoConnect = !1 !== t.autoConnect),
        this.autoConnect && this.open();
    }
    (e.exports = l),
      (l.prototype.emitAll = function () {
        for (var e in (this.emit.apply(this, arguments), this.nsps))
          d.call(this.nsps, e) &&
            this.nsps[e].emit.apply(this.nsps[e], arguments);
      }),
      (l.prototype.updateSocketIds = function () {
        for (var e in this.nsps)
          d.call(this.nsps, e) && (this.nsps[e].id = this.generateId(e));
      }),
      (l.prototype.generateId = function (e) {
        return ("/" === e ? "" : e + "#") + this.engine.id;
      }),
      i(l.prototype),
      (l.prototype.reconnection = function (e) {
        return arguments.length
          ? ((this._reconnection = !!e), this)
          : this._reconnection;
      }),
      (l.prototype.reconnectionAttempts = function (e) {
        return arguments.length
          ? ((this._reconnectionAttempts = e), this)
          : this._reconnectionAttempts;
      }),
      (l.prototype.reconnectionDelay = function (e) {
        return arguments.length
          ? ((this._reconnectionDelay = e),
            this.backoff && this.backoff.setMin(e),
            this)
          : this._reconnectionDelay;
      }),
      (l.prototype.randomizationFactor = function (e) {
        return arguments.length
          ? ((this._randomizationFactor = e),
            this.backoff && this.backoff.setJitter(e),
            this)
          : this._randomizationFactor;
      }),
      (l.prototype.reconnectionDelayMax = function (e) {
        return arguments.length
          ? ((this._reconnectionDelayMax = e),
            this.backoff && this.backoff.setMax(e),
            this)
          : this._reconnectionDelayMax;
      }),
      (l.prototype.timeout = function (e) {
        return arguments.length ? ((this._timeout = e), this) : this._timeout;
      }),
      (l.prototype.maybeReconnectOnOpen = function () {
        !this.reconnecting &&
          this._reconnection &&
          0 === this.backoff.attempts &&
          this.reconnect();
      }),
      (l.prototype.open = l.prototype.connect = function (e, t) {
        if (
          (c("readyState %s", this.readyState),
          ~this.readyState.indexOf("open"))
        )
          return this;
        c("opening %s", this.uri), (this.engine = n(this.uri, this.opts));
        var r = this.engine,
          o = this;
        (this.readyState = "opening"), (this.skipReconnect = !1);
        var i = a(r, "open", function () {
            o.onopen(), e && e();
          }),
          s = a(r, "error", function (t) {
            if (
              (c("connect_error"),
              o.cleanup(),
              (o.readyState = "closed"),
              o.emitAll("connect_error", t),
              e)
            ) {
              var r = new Error("Connection error");
              (r.data = t), e(r);
            } else o.maybeReconnectOnOpen();
          });
        if (!1 !== this._timeout) {
          var u = this._timeout;
          c("connect attempt will timeout after %d", u);
          var p = setTimeout(function () {
            c("connect attempt timed out after %d", u),
              i.destroy(),
              r.close(),
              r.emit("error", "timeout"),
              o.emitAll("connect_timeout", u);
          }, u);
          this.subs.push({
            destroy: function () {
              clearTimeout(p);
            },
          });
        }
        return this.subs.push(i), this.subs.push(s), this;
      }),
      (l.prototype.onopen = function () {
        c("open"),
          this.cleanup(),
          (this.readyState = "open"),
          this.emit("open");
        var e = this.engine;
        this.subs.push(a(e, "data", u(this, "ondata"))),
          this.subs.push(a(e, "ping", u(this, "onping"))),
          this.subs.push(a(e, "pong", u(this, "onpong"))),
          this.subs.push(a(e, "error", u(this, "onerror"))),
          this.subs.push(a(e, "close", u(this, "onclose"))),
          this.subs.push(a(this.decoder, "decoded", u(this, "ondecoded")));
      }),
      (l.prototype.onping = function () {
        (this.lastPing = new Date()), this.emitAll("ping");
      }),
      (l.prototype.onpong = function () {
        this.emitAll("pong", new Date() - this.lastPing);
      }),
      (l.prototype.ondata = function (e) {
        this.decoder.add(e);
      }),
      (l.prototype.ondecoded = function (e) {
        this.emit("packet", e);
      }),
      (l.prototype.onerror = function (e) {
        c("error", e), this.emitAll("error", e);
      }),
      (l.prototype.socket = function (e, t) {
        var r = this.nsps[e];
        if (!r) {
          (r = new o(this, e, t)), (this.nsps[e] = r);
          var n = this;
          r.on("connecting", i),
            r.on("connect", function () {
              r.id = n.generateId(e);
            }),
            this.autoConnect && i();
        }
        function i() {
          ~p(n.connecting, r) || n.connecting.push(r);
        }
        return r;
      }),
      (l.prototype.destroy = function (e) {
        var t = p(this.connecting, e);
        ~t && this.connecting.splice(t, 1),
          this.connecting.length || this.close();
      }),
      (l.prototype.packet = function (e) {
        c("writing packet %j", e);
        var t = this;
        e.query && 0 === e.type && (e.nsp += "?" + e.query),
          t.encoding
            ? t.packetBuffer.push(e)
            : ((t.encoding = !0),
              this.encoder.encode(e, function (r) {
                for (var n = 0; n < r.length; n++)
                  t.engine.write(r[n], e.options);
                (t.encoding = !1), t.processPacketQueue();
              }));
      }),
      (l.prototype.processPacketQueue = function () {
        if (this.packetBuffer.length > 0 && !this.encoding) {
          var e = this.packetBuffer.shift();
          this.packet(e);
        }
      }),
      (l.prototype.cleanup = function () {
        c("cleanup");
        for (var e = this.subs.length, t = 0; t < e; t++) {
          this.subs.shift().destroy();
        }
        (this.packetBuffer = []),
          (this.encoding = !1),
          (this.lastPing = null),
          this.decoder.destroy();
      }),
      (l.prototype.close = l.prototype.disconnect = function () {
        c("disconnect"),
          (this.skipReconnect = !0),
          (this.reconnecting = !1),
          "opening" === this.readyState && this.cleanup(),
          this.backoff.reset(),
          (this.readyState = "closed"),
          this.engine && this.engine.close();
      }),
      (l.prototype.onclose = function (e) {
        c("onclose"),
          this.cleanup(),
          this.backoff.reset(),
          (this.readyState = "closed"),
          this.emit("close", e),
          this._reconnection && !this.skipReconnect && this.reconnect();
      }),
      (l.prototype.reconnect = function () {
        if (this.reconnecting || this.skipReconnect) return this;
        var e = this;
        if (this.backoff.attempts >= this._reconnectionAttempts)
          c("reconnect failed"),
            this.backoff.reset(),
            this.emitAll("reconnect_failed"),
            (this.reconnecting = !1);
        else {
          var t = this.backoff.duration();
          c("will wait %dms before reconnect attempt", t),
            (this.reconnecting = !0);
          var r = setTimeout(function () {
            e.skipReconnect ||
              (c("attempting reconnect"),
              e.emitAll("reconnect_attempt", e.backoff.attempts),
              e.emitAll("reconnecting", e.backoff.attempts),
              e.skipReconnect ||
                e.open(function (t) {
                  t
                    ? (c("reconnect attempt error"),
                      (e.reconnecting = !1),
                      e.reconnect(),
                      e.emitAll("reconnect_error", t.data))
                    : (c("reconnect success"), e.onreconnect());
                }));
          }, t);
          this.subs.push({
            destroy: function () {
              clearTimeout(r);
            },
          });
        }
      }),
      (l.prototype.onreconnect = function () {
        var e = this.backoff.attempts;
        (this.reconnecting = !1),
          this.backoff.reset(),
          this.updateSocketIds(),
          this.emitAll("reconnect", e);
      });
  },
  function (e, t, r) {
    var n = r(21),
      o = r(76),
      i = r(86),
      s = r(87);
    (t.polling = function (e) {
      var t = !1,
        r = !1,
        s = !1 !== e.jsonp;
      if ("undefined" != typeof location) {
        var a = "https:" === location.protocol,
          u = location.port;
        u || (u = a ? 443 : 80),
          (t = e.hostname !== location.hostname || u !== e.port),
          (r = e.secure !== a);
      }
      if (
        ((e.xdomain = t), (e.xscheme = r), "open" in new n(e) && !e.forceJSONP)
      )
        return new o(e);
      if (!s) throw new Error("JSONP disabled");
      return new i(e);
    }),
      (t.websocket = s);
  },
  function (e, t, r) {
    var n = r(22),
      o = r(15),
      i = r(8),
      s = r(16),
      a = r(34),
      u = r(17)("engine.io-client:polling");
    e.exports = p;
    var c = null != new (r(21))({ xdomain: !1 }).responseType;
    function p(e) {
      var t = e && e.forceBase64;
      (c && !t) || (this.supportsBinary = !1), n.call(this, e);
    }
    s(p, n),
      (p.prototype.name = "polling"),
      (p.prototype.doOpen = function () {
        this.poll();
      }),
      (p.prototype.pause = function (e) {
        var t = this;
        function r() {
          u("paused"), (t.readyState = "paused"), e();
        }
        if (((this.readyState = "pausing"), this.polling || !this.writable)) {
          var n = 0;
          this.polling &&
            (u("we are currently polling - waiting to pause"),
            n++,
            this.once("pollComplete", function () {
              u("pre-pause polling complete"), --n || r();
            })),
            this.writable ||
              (u("we are currently writing - waiting to pause"),
              n++,
              this.once("drain", function () {
                u("pre-pause writing complete"), --n || r();
              }));
        } else r();
      }),
      (p.prototype.poll = function () {
        u("polling"), (this.polling = !0), this.doPoll(), this.emit("poll");
      }),
      (p.prototype.onData = function (e) {
        var t = this;
        u("polling got data %s", e);
        i.decodePayload(e, this.socket.binaryType, function (e, r, n) {
          if (("opening" === t.readyState && t.onOpen(), "close" === e.type))
            return t.onClose(), !1;
          t.onPacket(e);
        }),
          "closed" !== this.readyState &&
            ((this.polling = !1),
            this.emit("pollComplete"),
            "open" === this.readyState
              ? this.poll()
              : u('ignoring poll - transport state "%s"', this.readyState));
      }),
      (p.prototype.doClose = function () {
        var e = this;
        function t() {
          u("writing close packet"), e.write([{ type: "close" }]);
        }
        "open" === this.readyState
          ? (u("transport open - closing"), t())
          : (u("transport not open - deferring close"), this.once("open", t));
      }),
      (p.prototype.write = function (e) {
        var t = this;
        this.writable = !1;
        var r = function () {
          (t.writable = !0), t.emit("drain");
        };
        i.encodePayload(e, this.supportsBinary, function (e) {
          t.doWrite(e, r);
        });
      }),
      (p.prototype.uri = function () {
        var e = this.query || {},
          t = this.secure ? "https" : "http",
          r = "";
        return (
          !1 !== this.timestampRequests && (e[this.timestampParam] = a()),
          this.supportsBinary || e.sid || (e.b64 = 1),
          (e = o.encode(e)),
          this.port &&
            (("https" === t && 443 !== Number(this.port)) ||
              ("http" === t && 80 !== Number(this.port))) &&
            (r = ":" + this.port),
          e.length && (e = "?" + e),
          t +
            "://" +
            (-1 !== this.hostname.indexOf(":")
              ? "[" + this.hostname + "]"
              : this.hostname) +
            r +
            this.path +
            e
        );
      });
  },
  function (e, t, r) {
    (function (t) {
      var n = r(78),
        o = Object.prototype.toString,
        i =
          "function" == typeof Blob ||
          ("undefined" != typeof Blob &&
            "[object BlobConstructor]" === o.call(Blob)),
        s =
          "function" == typeof File ||
          ("undefined" != typeof File &&
            "[object FileConstructor]" === o.call(File));
      e.exports = function e(r) {
        if (!r || "object" != typeof r) return !1;
        if (n(r)) {
          for (var o = 0, a = r.length; o < a; o++) if (e(r[o])) return !0;
          return !1;
        }
        if (
          ("function" == typeof t && t.isBuffer && t.isBuffer(r)) ||
          ("function" == typeof ArrayBuffer && r instanceof ArrayBuffer) ||
          (i && r instanceof Blob) ||
          (s && r instanceof File)
        )
          return !0;
        if (r.toJSON && "function" == typeof r.toJSON && 1 === arguments.length)
          return e(r.toJSON(), !0);
        for (var u in r)
          if (Object.prototype.hasOwnProperty.call(r, u) && e(r[u])) return !0;
        return !1;
      };
    }.call(this, r(19).Buffer));
  },
  function (e, t, r) {
    "use strict";
    var n,
      o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
        ""
      ),
      i = {},
      s = 0,
      a = 0;
    function u(e) {
      var t = "";
      do {
        (t = o[e % 64] + t), (e = Math.floor(e / 64));
      } while (e > 0);
      return t;
    }
    function c() {
      var e = u(+new Date());
      return e !== n ? ((s = 0), (n = e)) : e + "." + u(s++);
    }
    for (; a < 64; a++) i[o[a]] = a;
    (c.encode = u),
      (c.decode = function (e) {
        var t = 0;
        for (a = 0; a < e.length; a++) t = 64 * t + i[e.charAt(a)];
        return t;
      }),
      (e.exports = c);
  },
  function (e, t) {
    var r = [].indexOf;
    e.exports = function (e, t) {
      if (r) return e.indexOf(t);
      for (var n = 0; n < e.length; ++n) if (e[n] === t) return n;
      return -1;
    };
  },
  function (e, t, r) {
    var n = r(18),
      o = r(7),
      i = r(89),
      s = r(37),
      a = r(38),
      u = r(13)("socket.io-client:socket"),
      c = r(15),
      p = r(33);
    e.exports = l;
    var f = {
        connect: 1,
        connect_error: 1,
        connect_timeout: 1,
        connecting: 1,
        disconnect: 1,
        error: 1,
        reconnect: 1,
        reconnect_attempt: 1,
        reconnect_failed: 1,
        reconnect_error: 1,
        reconnecting: 1,
        ping: 1,
        pong: 1,
      },
      d = o.prototype.emit;
    function l(e, t, r) {
      (this.io = e),
        (this.nsp = t),
        (this.json = this),
        (this.ids = 0),
        (this.acks = {}),
        (this.receiveBuffer = []),
        (this.sendBuffer = []),
        (this.connected = !1),
        (this.disconnected = !0),
        (this.flags = {}),
        r && r.query && (this.query = r.query),
        this.io.autoConnect && this.open();
    }
    o(l.prototype),
      (l.prototype.subEvents = function () {
        if (!this.subs) {
          var e = this.io;
          this.subs = [
            s(e, "open", a(this, "onopen")),
            s(e, "packet", a(this, "onpacket")),
            s(e, "close", a(this, "onclose")),
          ];
        }
      }),
      (l.prototype.open = l.prototype.connect = function () {
        return this.connected
          ? this
          : (this.subEvents(),
            this.io.open(),
            "open" === this.io.readyState && this.onopen(),
            this.emit("connecting"),
            this);
      }),
      (l.prototype.send = function () {
        var e = i(arguments);
        return e.unshift("message"), this.emit.apply(this, e), this;
      }),
      (l.prototype.emit = function (e) {
        if (f.hasOwnProperty(e)) return d.apply(this, arguments), this;
        var t = i(arguments),
          r = {
            type: (void 0 !== this.flags.binary ? this.flags.binary : p(t))
              ? n.BINARY_EVENT
              : n.EVENT,
            data: t,
            options: {},
          };
        return (
          (r.options.compress = !this.flags || !1 !== this.flags.compress),
          "function" == typeof t[t.length - 1] &&
            (u("emitting packet with ack id %d", this.ids),
            (this.acks[this.ids] = t.pop()),
            (r.id = this.ids++)),
          this.connected ? this.packet(r) : this.sendBuffer.push(r),
          (this.flags = {}),
          this
        );
      }),
      (l.prototype.packet = function (e) {
        (e.nsp = this.nsp), this.io.packet(e);
      }),
      (l.prototype.onopen = function () {
        if ((u("transport is open - connecting"), "/" !== this.nsp))
          if (this.query) {
            var e =
              "object" == typeof this.query ? c.encode(this.query) : this.query;
            u("sending connect packet with query %s", e),
              this.packet({ type: n.CONNECT, query: e });
          } else this.packet({ type: n.CONNECT });
      }),
      (l.prototype.onclose = function (e) {
        u("close (%s)", e),
          (this.connected = !1),
          (this.disconnected = !0),
          delete this.id,
          this.emit("disconnect", e);
      }),
      (l.prototype.onpacket = function (e) {
        var t = e.nsp === this.nsp,
          r = e.type === n.ERROR && "/" === e.nsp;
        if (t || r)
          switch (e.type) {
            case n.CONNECT:
              this.onconnect();
              break;
            case n.EVENT:
            case n.BINARY_EVENT:
              this.onevent(e);
              break;
            case n.ACK:
            case n.BINARY_ACK:
              this.onack(e);
              break;
            case n.DISCONNECT:
              this.ondisconnect();
              break;
            case n.ERROR:
              this.emit("error", e.data);
          }
      }),
      (l.prototype.onevent = function (e) {
        var t = e.data || [];
        u("emitting event %j", t),
          null != e.id &&
            (u("attaching ack callback to event"), t.push(this.ack(e.id))),
          this.connected ? d.apply(this, t) : this.receiveBuffer.push(t);
      }),
      (l.prototype.ack = function (e) {
        var t = this,
          r = !1;
        return function () {
          if (!r) {
            r = !0;
            var o = i(arguments);
            u("sending ack %j", o),
              t.packet({ type: p(o) ? n.BINARY_ACK : n.ACK, id: e, data: o });
          }
        };
      }),
      (l.prototype.onack = function (e) {
        var t = this.acks[e.id];
        "function" == typeof t
          ? (u("calling ack %s with %j", e.id, e.data),
            t.apply(this, e.data),
            delete this.acks[e.id])
          : u("bad ack %s", e.id);
      }),
      (l.prototype.onconnect = function () {
        (this.connected = !0),
          (this.disconnected = !1),
          this.emit("connect"),
          this.emitBuffered();
      }),
      (l.prototype.emitBuffered = function () {
        var e;
        for (e = 0; e < this.receiveBuffer.length; e++)
          d.apply(this, this.receiveBuffer[e]);
        for (this.receiveBuffer = [], e = 0; e < this.sendBuffer.length; e++)
          this.packet(this.sendBuffer[e]);
        this.sendBuffer = [];
      }),
      (l.prototype.ondisconnect = function () {
        u("server disconnect (%s)", this.nsp),
          this.destroy(),
          this.onclose("io server disconnect");
      }),
      (l.prototype.destroy = function () {
        if (this.subs) {
          for (var e = 0; e < this.subs.length; e++) this.subs[e].destroy();
          this.subs = null;
        }
        this.io.destroy(this);
      }),
      (l.prototype.close = l.prototype.disconnect = function () {
        return (
          this.connected &&
            (u("performing disconnect (%s)", this.nsp),
            this.packet({ type: n.DISCONNECT })),
          this.destroy(),
          this.connected && this.onclose("io client disconnect"),
          this
        );
      }),
      (l.prototype.compress = function (e) {
        return (this.flags.compress = e), this;
      }),
      (l.prototype.binary = function (e) {
        return (this.flags.binary = e), this;
      });
  },
  function (e, t) {
    e.exports = function (e, t, r) {
      return (
        e.on(t, r),
        {
          destroy: function () {
            e.removeListener(t, r);
          },
        }
      );
    };
  },
  function (e, t) {
    var r = [].slice;
    e.exports = function (e, t) {
      if (("string" == typeof t && (t = e[t]), "function" != typeof t))
        throw new Error("bind() requires a function");
      var n = r.call(arguments, 2);
      return function () {
        return t.apply(e, n.concat(r.call(arguments)));
      };
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      return function () {
        for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
          r[n] = arguments[n];
        return e.apply(t, r);
      };
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(2);
    function o(e) {
      return encodeURIComponent(e)
        .replace(/%40/gi, "@")
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    e.exports = function (e, t, r) {
      if (!t) return e;
      var i;
      if (r) i = r(t);
      else if (n.isURLSearchParams(t)) i = t.toString();
      else {
        var s = [];
        n.forEach(t, function (e, t) {
          null != e &&
            (n.isArray(e) ? (t += "[]") : (e = [e]),
            n.forEach(e, function (e) {
              n.isDate(e)
                ? (e = e.toISOString())
                : n.isObject(e) && (e = JSON.stringify(e)),
                s.push(o(t) + "=" + o(e));
            }));
        }),
          (i = s.join("&"));
      }
      if (i) {
        var a = e.indexOf("#");
        -1 !== a && (e = e.slice(0, a)),
          (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
      }
      return e;
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  },
  function (e, t, r) {
    "use strict";
    (function (t) {
      var n = r(2),
        o = r(96),
        i = { "Content-Type": "application/x-www-form-urlencoded" };
      function s(e, t) {
        !n.isUndefined(e) &&
          n.isUndefined(e["Content-Type"]) &&
          (e["Content-Type"] = t);
      }
      var a,
        u = {
          adapter:
            ("undefined" != typeof XMLHttpRequest
              ? (a = r(43))
              : void 0 !== t &&
                "[object process]" === Object.prototype.toString.call(t) &&
                (a = r(43)),
            a),
          transformRequest: [
            function (e, t) {
              return (
                o(t, "Accept"),
                o(t, "Content-Type"),
                n.isFormData(e) ||
                n.isArrayBuffer(e) ||
                n.isBuffer(e) ||
                n.isStream(e) ||
                n.isFile(e) ||
                n.isBlob(e)
                  ? e
                  : n.isArrayBufferView(e)
                  ? e.buffer
                  : n.isURLSearchParams(e)
                  ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : n.isObject(e)
                  ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              if ("string" == typeof e)
                try {
                  e = JSON.parse(e);
                } catch (e) {}
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
        };
      (u.headers = { common: { Accept: "application/json, text/plain, */*" } }),
        n.forEach(["delete", "get", "head"], function (e) {
          u.headers[e] = {};
        }),
        n.forEach(["post", "put", "patch"], function (e) {
          u.headers[e] = n.merge(i);
        }),
        (e.exports = u);
    }.call(this, r(14)));
  },
  function (e, t, r) {
    "use strict";
    var n = r(2),
      o = r(97),
      i = r(40),
      s = r(99),
      a = r(102),
      u = r(103),
      c = r(44);
    e.exports = function (e) {
      return new Promise(function (t, p) {
        var f = e.data,
          d = e.headers;
        n.isFormData(f) && delete d["Content-Type"];
        var l = new XMLHttpRequest();
        if (e.auth) {
          var h = e.auth.username || "",
            y = e.auth.password || "";
          d.Authorization = "Basic " + btoa(h + ":" + y);
        }
        var g = s(e.baseURL, e.url);
        if (
          (l.open(
            e.method.toUpperCase(),
            i(g, e.params, e.paramsSerializer),
            !0
          ),
          (l.timeout = e.timeout),
          (l.onreadystatechange = function () {
            if (
              l &&
              4 === l.readyState &&
              (0 !== l.status ||
                (l.responseURL && 0 === l.responseURL.indexOf("file:")))
            ) {
              var r =
                  "getAllResponseHeaders" in l
                    ? a(l.getAllResponseHeaders())
                    : null,
                n = {
                  data:
                    e.responseType && "text" !== e.responseType
                      ? l.response
                      : l.responseText,
                  status: l.status,
                  statusText: l.statusText,
                  headers: r,
                  config: e,
                  request: l,
                };
              o(t, p, n), (l = null);
            }
          }),
          (l.onabort = function () {
            l && (p(c("Request aborted", e, "ECONNABORTED", l)), (l = null));
          }),
          (l.onerror = function () {
            p(c("Network Error", e, null, l)), (l = null);
          }),
          (l.ontimeout = function () {
            var t = "timeout of " + e.timeout + "ms exceeded";
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              p(c(t, e, "ECONNABORTED", l)),
              (l = null);
          }),
          n.isStandardBrowserEnv())
        ) {
          var m = r(105),
            v =
              (e.withCredentials || u(g)) && e.xsrfCookieName
                ? m.read(e.xsrfCookieName)
                : void 0;
          v && (d[e.xsrfHeaderName] = v);
        }
        if (
          ("setRequestHeader" in l &&
            n.forEach(d, function (e, t) {
              void 0 === f && "content-type" === t.toLowerCase()
                ? delete d[t]
                : l.setRequestHeader(t, e);
            }),
          n.isUndefined(e.withCredentials) ||
            (l.withCredentials = !!e.withCredentials),
          e.responseType)
        )
          try {
            l.responseType = e.responseType;
          } catch (t) {
            if ("json" !== e.responseType) throw t;
          }
        "function" == typeof e.onDownloadProgress &&
          l.addEventListener("progress", e.onDownloadProgress),
          "function" == typeof e.onUploadProgress &&
            l.upload &&
            l.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              l && (l.abort(), p(e), (l = null));
            }),
          void 0 === f && (f = null),
          l.send(f);
      });
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(98);
    e.exports = function (e, t, r, o, i) {
      var s = new Error(e);
      return n(s, t, r, o, i);
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = function (e, t) {
      t = t || {};
      var r = {},
        o = ["url", "method", "params", "data"],
        i = ["headers", "auth", "proxy"],
        s = [
          "baseURL",
          "url",
          "transformRequest",
          "transformResponse",
          "paramsSerializer",
          "timeout",
          "withCredentials",
          "adapter",
          "responseType",
          "xsrfCookieName",
          "xsrfHeaderName",
          "onUploadProgress",
          "onDownloadProgress",
          "maxContentLength",
          "validateStatus",
          "maxRedirects",
          "httpAgent",
          "httpsAgent",
          "cancelToken",
          "socketPath",
        ];
      n.forEach(o, function (e) {
        void 0 !== t[e] && (r[e] = t[e]);
      }),
        n.forEach(i, function (o) {
          n.isObject(t[o])
            ? (r[o] = n.deepMerge(e[o], t[o]))
            : void 0 !== t[o]
            ? (r[o] = t[o])
            : n.isObject(e[o])
            ? (r[o] = n.deepMerge(e[o]))
            : void 0 !== e[o] && (r[o] = e[o]);
        }),
        n.forEach(s, function (n) {
          void 0 !== t[n] ? (r[n] = t[n]) : void 0 !== e[n] && (r[n] = e[n]);
        });
      var a = o.concat(i).concat(s),
        u = Object.keys(t).filter(function (e) {
          return -1 === a.indexOf(e);
        });
      return (
        n.forEach(u, function (n) {
          void 0 !== t[n] ? (r[n] = t[n]) : void 0 !== e[n] && (r[n] = e[n]);
        }),
        r
      );
    };
  },
  function (e, t, r) {
    "use strict";
    function n(e) {
      this.message = e;
    }
    (n.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (n.prototype.__CANCEL__ = !0),
      (e.exports = n);
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      var r = new Array(arguments.length - 1),
        n = 0,
        o = 2,
        i = !0;
      for (; o < arguments.length; ) r[n++] = arguments[o++];
      return new Promise(function (o, s) {
        r[n] = function (e) {
          if (i)
            if (((i = !1), e)) s(e);
            else {
              for (
                var t = new Array(arguments.length - 1), r = 0;
                r < t.length;

              )
                t[r++] = arguments[r];
              o.apply(null, t);
            }
        };
        try {
          e.apply(t || null, r);
        } catch (e) {
          i && ((i = !1), s(e));
        }
      });
    };
  },
  function (module, exports, __webpack_require__) {
    "use strict";
    function inquire(moduleName) {
      try {
        var mod = eval("quire".replace(/^/, "re"))(moduleName);
        if (mod && (mod.length || Object.keys(mod).length)) return mod;
      } catch (e) {}
      return null;
    }
    module.exports = inquire;
  },
  function (e, t, r) {
    "use strict";
    t.Service = r(121);
  },
  function (e, t, r) {
    "use strict";
    e.exports = {};
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      for (
        var t,
          r = i.codegen(["m", "w"], e.name + "$encode")("if(!w)")(
            "w=Writer.create()"
          ),
          a = e.fieldsArray.slice().sort(i.compareFieldsById),
          u = 0;
        u < a.length;
        ++u
      ) {
        var c = a[u].resolve(),
          p = e._fieldsArray.indexOf(c),
          f = c.resolvedType instanceof n ? "int32" : c.type,
          d = o.basic[f];
        (t = "m" + i.safeProp(c.name)),
          c.map
            ? (r(
                "if(%s!=null&&m.hasOwnProperty(%j)){",
                t,
                c.name
              )("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)(
                "w.uint32(%i).fork().uint32(%i).%s(ks[i])",
                ((c.id << 3) | 2) >>> 0,
                8 | o.mapKey[c.keyType],
                c.keyType
              ),
              void 0 === d
                ? r(
                    "types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()",
                    p,
                    t
                  )
                : r(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | d, f, t),
              r("}")("}"))
            : c.repeated
            ? (r("if(%s!=null&&%s.length){", t, t),
              c.packed && void 0 !== o.packed[f]
                ? r("w.uint32(%i).fork()", ((c.id << 3) | 2) >>> 0)(
                    "for(var i=0;i<%s.length;++i)",
                    t
                  )(
                    "w.%s(%s[i])",
                    f,
                    t
                  )("w.ldelim()")
                : (r("for(var i=0;i<%s.length;++i)", t),
                  void 0 === d
                    ? s(r, c, p, t + "[i]")
                    : r(
                        "w.uint32(%i).%s(%s[i])",
                        ((c.id << 3) | d) >>> 0,
                        f,
                        t
                      )),
              r("}"))
            : (c.optional && r("if(%s!=null&&m.hasOwnProperty(%j))", t, c.name),
              void 0 === d
                ? s(r, c, p, t)
                : r("w.uint32(%i).%s(%s)", ((c.id << 3) | d) >>> 0, f, t));
      }
      return r("return w");
    };
    var n = r(5),
      o = r(12),
      i = r(1);
    function s(e, t, r, n) {
      return t.resolvedType.group
        ? e(
            "types[%i].encode(%s,w.uint32(%i)).uint32(%i)",
            r,
            n,
            ((t.id << 3) | 3) >>> 0,
            ((t.id << 3) | 4) >>> 0
          )
        : e(
            "types[%i].encode(%s,w.uint32(%i).fork()).ldelim()",
            r,
            n,
            ((t.id << 3) | 2) >>> 0
          );
    }
  },
  function (e, t, r) {
    "use strict";
    e.exports = v;
    var n = r(11);
    ((v.prototype = Object.create(n.prototype)).constructor = v).className =
      "Type";
    var o = r(5),
      i = r(25),
      s = r(10),
      a = r(53),
      u = r(54),
      c = r(26),
      p = r(24),
      f = r(23),
      d = r(1),
      l = r(51),
      h = r(56),
      y = r(57),
      g = r(58),
      m = r(59);
    function v(e, t) {
      n.call(this, e, t),
        (this.fields = {}),
        (this.oneofs = void 0),
        (this.extensions = void 0),
        (this.reserved = void 0),
        (this.group = void 0),
        (this._fieldsById = null),
        (this._fieldsArray = null),
        (this._oneofsArray = null),
        (this._ctor = null);
    }
    function b(e) {
      return (
        (e._fieldsById = e._fieldsArray = e._oneofsArray = null),
        delete e.encode,
        delete e.decode,
        delete e.verify,
        e
      );
    }
    Object.defineProperties(v.prototype, {
      fieldsById: {
        get: function () {
          if (this._fieldsById) return this._fieldsById;
          this._fieldsById = {};
          for (var e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
            var r = this.fields[e[t]],
              n = r.id;
            if (this._fieldsById[n])
              throw Error("duplicate id " + n + " in " + this);
            this._fieldsById[n] = r;
          }
          return this._fieldsById;
        },
      },
      fieldsArray: {
        get: function () {
          return (
            this._fieldsArray || (this._fieldsArray = d.toArray(this.fields))
          );
        },
      },
      oneofsArray: {
        get: function () {
          return (
            this._oneofsArray || (this._oneofsArray = d.toArray(this.oneofs))
          );
        },
      },
      ctor: {
        get: function () {
          return this._ctor || (this.ctor = v.generateConstructor(this)());
        },
        set: function (e) {
          var t = e.prototype;
          t instanceof c ||
            (((e.prototype = new c()).constructor = e),
            d.merge(e.prototype, t)),
            (e.$type = e.prototype.$type = this),
            d.merge(e, c, !0),
            (this._ctor = e);
          for (var r = 0; r < this.fieldsArray.length; ++r)
            this._fieldsArray[r].resolve();
          var n = {};
          for (r = 0; r < this.oneofsArray.length; ++r)
            n[this._oneofsArray[r].resolve().name] = {
              get: d.oneOfGetter(this._oneofsArray[r].oneof),
              set: d.oneOfSetter(this._oneofsArray[r].oneof),
            };
          r && Object.defineProperties(e.prototype, n);
        },
      },
    }),
      (v.generateConstructor = function (e) {
        for (
          var t, r = d.codegen(["p"], e.name), n = 0;
          n < e.fieldsArray.length;
          ++n
        )
          (t = e._fieldsArray[n]).map
            ? r("this%s={}", d.safeProp(t.name))
            : t.repeated && r("this%s=[]", d.safeProp(t.name));
        return r(
          "if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)"
        )("this[ks[i]]=p[ks[i]]");
      }),
      (v.fromJSON = function (e, t) {
        var r = new v(e, t.options);
        (r.extensions = t.extensions), (r.reserved = t.reserved);
        for (var c = Object.keys(t.fields), p = 0; p < c.length; ++p)
          r.add(
            (void 0 !== t.fields[c[p]].keyType ? a.fromJSON : s.fromJSON)(
              c[p],
              t.fields[c[p]]
            )
          );
        if (t.oneofs)
          for (c = Object.keys(t.oneofs), p = 0; p < c.length; ++p)
            r.add(i.fromJSON(c[p], t.oneofs[c[p]]));
        if (t.nested)
          for (c = Object.keys(t.nested), p = 0; p < c.length; ++p) {
            var f = t.nested[c[p]];
            r.add(
              (void 0 !== f.id
                ? s.fromJSON
                : void 0 !== f.fields
                ? v.fromJSON
                : void 0 !== f.values
                ? o.fromJSON
                : void 0 !== f.methods
                ? u.fromJSON
                : n.fromJSON)(c[p], f)
            );
          }
        return (
          t.extensions && t.extensions.length && (r.extensions = t.extensions),
          t.reserved && t.reserved.length && (r.reserved = t.reserved),
          t.group && (r.group = !0),
          t.comment && (r.comment = t.comment),
          r
        );
      }),
      (v.prototype.toJSON = function (e) {
        var t = n.prototype.toJSON.call(this, e),
          r = !!e && Boolean(e.keepComments);
        return d.toObject([
          "options",
          (t && t.options) || void 0,
          "oneofs",
          n.arrayToJSON(this.oneofsArray, e),
          "fields",
          n.arrayToJSON(
            this.fieldsArray.filter(function (e) {
              return !e.declaringField;
            }),
            e
          ) || {},
          "extensions",
          this.extensions && this.extensions.length ? this.extensions : void 0,
          "reserved",
          this.reserved && this.reserved.length ? this.reserved : void 0,
          "group",
          this.group || void 0,
          "nested",
          (t && t.nested) || void 0,
          "comment",
          r ? this.comment : void 0,
        ]);
      }),
      (v.prototype.resolveAll = function () {
        for (var e = this.fieldsArray, t = 0; t < e.length; ) e[t++].resolve();
        var r = this.oneofsArray;
        for (t = 0; t < r.length; ) r[t++].resolve();
        return n.prototype.resolveAll.call(this);
      }),
      (v.prototype.get = function (e) {
        return (
          this.fields[e] ||
          (this.oneofs && this.oneofs[e]) ||
          (this.nested && this.nested[e]) ||
          null
        );
      }),
      (v.prototype.add = function (e) {
        if (this.get(e.name))
          throw Error("duplicate name '" + e.name + "' in " + this);
        if (e instanceof s && void 0 === e.extend) {
          if (this._fieldsById ? this._fieldsById[e.id] : this.fieldsById[e.id])
            throw Error("duplicate id " + e.id + " in " + this);
          if (this.isReservedId(e.id))
            throw Error("id " + e.id + " is reserved in " + this);
          if (this.isReservedName(e.name))
            throw Error("name '" + e.name + "' is reserved in " + this);
          return (
            e.parent && e.parent.remove(e),
            (this.fields[e.name] = e),
            (e.message = this),
            e.onAdd(this),
            b(this)
          );
        }
        return e instanceof i
          ? (this.oneofs || (this.oneofs = {}),
            (this.oneofs[e.name] = e),
            e.onAdd(this),
            b(this))
          : n.prototype.add.call(this, e);
      }),
      (v.prototype.remove = function (e) {
        if (e instanceof s && void 0 === e.extend) {
          if (!this.fields || this.fields[e.name] !== e)
            throw Error(e + " is not a member of " + this);
          return (
            delete this.fields[e.name],
            (e.parent = null),
            e.onRemove(this),
            b(this)
          );
        }
        if (e instanceof i) {
          if (!this.oneofs || this.oneofs[e.name] !== e)
            throw Error(e + " is not a member of " + this);
          return (
            delete this.oneofs[e.name],
            (e.parent = null),
            e.onRemove(this),
            b(this)
          );
        }
        return n.prototype.remove.call(this, e);
      }),
      (v.prototype.isReservedId = function (e) {
        return n.isReservedId(this.reserved, e);
      }),
      (v.prototype.isReservedName = function (e) {
        return n.isReservedName(this.reserved, e);
      }),
      (v.prototype.create = function (e) {
        return new this.ctor(e);
      }),
      (v.prototype.setup = function () {
        for (
          var e = this.fullName, t = [], r = 0;
          r < this.fieldsArray.length;
          ++r
        )
          t.push(this._fieldsArray[r].resolve().resolvedType);
        (this.encode = l(this)({ Writer: f, types: t, util: d })),
          (this.decode = h(this)({ Reader: p, types: t, util: d })),
          (this.verify = y(this)({ types: t, util: d })),
          (this.fromObject = g.fromObject(this)({ types: t, util: d })),
          (this.toObject = g.toObject(this)({ types: t, util: d }));
        var n = m[e];
        if (n) {
          var o = Object.create(this);
          (o.fromObject = this.fromObject),
            (this.fromObject = n.fromObject.bind(o)),
            (o.toObject = this.toObject),
            (this.toObject = n.toObject.bind(o));
        }
        return this;
      }),
      (v.prototype.encode = function (e, t) {
        return this.setup().encode(e, t);
      }),
      (v.prototype.encodeDelimited = function (e, t) {
        return this.encode(e, t && t.len ? t.fork() : t).ldelim();
      }),
      (v.prototype.decode = function (e, t) {
        return this.setup().decode(e, t);
      }),
      (v.prototype.decodeDelimited = function (e) {
        return e instanceof p || (e = p.create(e)), this.decode(e, e.uint32());
      }),
      (v.prototype.verify = function (e) {
        return this.setup().verify(e);
      }),
      (v.prototype.fromObject = function (e) {
        return this.setup().fromObject(e);
      }),
      (v.prototype.toObject = function (e, t) {
        return this.setup().toObject(e, t);
      }),
      (v.d = function (e) {
        return function (t) {
          d.decorateType(t, e);
        };
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = s;
    var n = r(10);
    ((s.prototype = Object.create(n.prototype)).constructor = s).className =
      "MapField";
    var o = r(12),
      i = r(1);
    function s(e, t, r, o, s, a) {
      if ((n.call(this, e, t, o, void 0, void 0, s, a), !i.isString(r)))
        throw TypeError("keyType must be a string");
      (this.keyType = r), (this.resolvedKeyType = null), (this.map = !0);
    }
    (s.fromJSON = function (e, t) {
      return new s(e, t.id, t.keyType, t.type, t.options, t.comment);
    }),
      (s.prototype.toJSON = function (e) {
        var t = !!e && Boolean(e.keepComments);
        return i.toObject([
          "keyType",
          this.keyType,
          "type",
          this.type,
          "id",
          this.id,
          "extend",
          this.extend,
          "options",
          this.options,
          "comment",
          t ? this.comment : void 0,
        ]);
      }),
      (s.prototype.resolve = function () {
        if (this.resolved) return this;
        if (void 0 === o.mapKey[this.keyType])
          throw Error("invalid key type: " + this.keyType);
        return n.prototype.resolve.call(this);
      }),
      (s.d = function (e, t, r) {
        return (
          "function" == typeof r
            ? (r = i.decorateType(r).name)
            : r && "object" == typeof r && (r = i.decorateEnum(r).name),
          function (n, o) {
            i.decorateType(n.constructor).add(new s(o, e, t, r));
          }
        );
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = a;
    var n = r(11);
    ((a.prototype = Object.create(n.prototype)).constructor = a).className =
      "Service";
    var o = r(55),
      i = r(1),
      s = r(49);
    function a(e, t) {
      n.call(this, e, t), (this.methods = {}), (this._methodsArray = null);
    }
    function u(e) {
      return (e._methodsArray = null), e;
    }
    (a.fromJSON = function (e, t) {
      var r = new a(e, t.options);
      if (t.methods)
        for (var n = Object.keys(t.methods), i = 0; i < n.length; ++i)
          r.add(o.fromJSON(n[i], t.methods[n[i]]));
      return t.nested && r.addJSON(t.nested), (r.comment = t.comment), r;
    }),
      (a.prototype.toJSON = function (e) {
        var t = n.prototype.toJSON.call(this, e),
          r = !!e && Boolean(e.keepComments);
        return i.toObject([
          "options",
          (t && t.options) || void 0,
          "methods",
          n.arrayToJSON(this.methodsArray, e) || {},
          "nested",
          (t && t.nested) || void 0,
          "comment",
          r ? this.comment : void 0,
        ]);
      }),
      Object.defineProperty(a.prototype, "methodsArray", {
        get: function () {
          return (
            this._methodsArray || (this._methodsArray = i.toArray(this.methods))
          );
        },
      }),
      (a.prototype.get = function (e) {
        return this.methods[e] || n.prototype.get.call(this, e);
      }),
      (a.prototype.resolveAll = function () {
        for (var e = this.methodsArray, t = 0; t < e.length; ++t)
          e[t].resolve();
        return n.prototype.resolve.call(this);
      }),
      (a.prototype.add = function (e) {
        if (this.get(e.name))
          throw Error("duplicate name '" + e.name + "' in " + this);
        return e instanceof o
          ? ((this.methods[e.name] = e), (e.parent = this), u(this))
          : n.prototype.add.call(this, e);
      }),
      (a.prototype.remove = function (e) {
        if (e instanceof o) {
          if (this.methods[e.name] !== e)
            throw Error(e + " is not a member of " + this);
          return delete this.methods[e.name], (e.parent = null), u(this);
        }
        return n.prototype.remove.call(this, e);
      }),
      (a.prototype.create = function (e, t, r) {
        for (
          var n, o = new s.Service(e, t, r), a = 0;
          a < this.methodsArray.length;
          ++a
        ) {
          var u = i
            .lcFirst((n = this._methodsArray[a]).resolve().name)
            .replace(/[^$\w_]/g, "");
          o[u] = i.codegen(
            ["r", "c"],
            i.isReserved(u) ? u + "_" : u
          )("return this.rpcCall(m,q,s,r,c)")({
            m: n,
            q: n.resolvedRequestType.ctor,
            s: n.resolvedResponseType.ctor,
          });
        }
        return o;
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = i;
    var n = r(9);
    ((i.prototype = Object.create(n.prototype)).constructor = i).className =
      "Method";
    var o = r(1);
    function i(e, t, r, i, s, a, u, c) {
      if (
        (o.isObject(s)
          ? ((u = s), (s = a = void 0))
          : o.isObject(a) && ((u = a), (a = void 0)),
        void 0 !== t && !o.isString(t))
      )
        throw TypeError("type must be a string");
      if (!o.isString(r)) throw TypeError("requestType must be a string");
      if (!o.isString(i)) throw TypeError("responseType must be a string");
      n.call(this, e, u),
        (this.type = t || "rpc"),
        (this.requestType = r),
        (this.requestStream = !!s || void 0),
        (this.responseType = i),
        (this.responseStream = !!a || void 0),
        (this.resolvedRequestType = null),
        (this.resolvedResponseType = null),
        (this.comment = c);
    }
    (i.fromJSON = function (e, t) {
      return new i(
        e,
        t.type,
        t.requestType,
        t.responseType,
        t.requestStream,
        t.responseStream,
        t.options,
        t.comment
      );
    }),
      (i.prototype.toJSON = function (e) {
        var t = !!e && Boolean(e.keepComments);
        return o.toObject([
          "type",
          ("rpc" !== this.type && this.type) || void 0,
          "requestType",
          this.requestType,
          "requestStream",
          this.requestStream,
          "responseType",
          this.responseType,
          "responseStream",
          this.responseStream,
          "options",
          this.options,
          "comment",
          t ? this.comment : void 0,
        ]);
      }),
      (i.prototype.resolve = function () {
        return this.resolved
          ? this
          : ((this.resolvedRequestType = this.parent.lookupType(
              this.requestType
            )),
            (this.resolvedResponseType = this.parent.lookupType(
              this.responseType
            )),
            n.prototype.resolve.call(this));
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      var t = i.codegen(
        ["r", "l"],
        e.name + "$decode"
      )("if(!(r instanceof Reader))")("r=Reader.create(r)")(
        "var c=l===undefined?r.len:r.pos+l,m=new this.ctor" +
          (e.fieldsArray.filter(function (e) {
            return e.map;
          }).length
            ? ",k"
            : "")
      )("while(r.pos<c){")("var t=r.uint32()");
      e.group && t("if((t&7)===4)")("break");
      t("switch(t>>>3){");
      for (var r = 0; r < e.fieldsArray.length; ++r) {
        var a = e._fieldsArray[r].resolve(),
          u = a.resolvedType instanceof n ? "int32" : a.type,
          c = "m" + i.safeProp(a.name);
        t("case %i:", a.id),
          a.map
            ? (t("r.skip().pos++")("if(%s===util.emptyObject)", c)("%s={}", c)(
                "k=r.%s()",
                a.keyType
              )("r.pos++"),
              void 0 !== o.long[a.keyType]
                ? void 0 === o.basic[u]
                  ? t(
                      '%s[typeof k==="object"?util.longToHash(k):k]=types[%i].decode(r,r.uint32())',
                      c,
                      r
                    )
                  : t(
                      '%s[typeof k==="object"?util.longToHash(k):k]=r.%s()',
                      c,
                      u
                    )
                : void 0 === o.basic[u]
                ? t("%s[k]=types[%i].decode(r,r.uint32())", c, r)
                : t("%s[k]=r.%s()", c, u))
            : a.repeated
            ? (t("if(!(%s&&%s.length))", c, c)("%s=[]", c),
              void 0 !== o.packed[u] &&
                t("if((t&7)===2){")("var c2=r.uint32()+r.pos")(
                  "while(r.pos<c2)"
                )(
                  "%s.push(r.%s())",
                  c,
                  u
                )("}else"),
              void 0 === o.basic[u]
                ? t(
                    a.resolvedType.group
                      ? "%s.push(types[%i].decode(r))"
                      : "%s.push(types[%i].decode(r,r.uint32()))",
                    c,
                    r
                  )
                : t("%s.push(r.%s())", c, u))
            : void 0 === o.basic[u]
            ? t(
                a.resolvedType.group
                  ? "%s=types[%i].decode(r)"
                  : "%s=types[%i].decode(r,r.uint32())",
                c,
                r
              )
            : t("%s=r.%s()", c, u),
          t("break");
      }
      for (
        t("default:")("r.skipType(t&7)")("break")("}")("}"), r = 0;
        r < e._fieldsArray.length;
        ++r
      ) {
        var p = e._fieldsArray[r];
        p.required &&
          t("if(!m.hasOwnProperty(%j))", p.name)(
            "throw util.ProtocolError(%j,{instance:m})",
            s(p)
          );
      }
      return t("return m");
    };
    var n = r(5),
      o = r(12),
      i = r(1);
    function s(e) {
      return "missing required '" + e.name + "'";
    }
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      var t = o.codegen(
          ["m"],
          e.name + "$verify"
        )('if(typeof m!=="object"||m===null)')("return%j", "object expected"),
        r = e.oneofsArray,
        n = {};
      r.length && t("var p={}");
      for (var u = 0; u < e.fieldsArray.length; ++u) {
        var c = e._fieldsArray[u].resolve(),
          p = "m" + o.safeProp(c.name);
        if (
          (c.optional && t("if(%s!=null&&m.hasOwnProperty(%j)){", p, c.name),
          c.map)
        )
          t("if(!util.isObject(%s))", p)("return%j", i(c, "object"))(
            "var k=Object.keys(%s)",
            p
          )("for(var i=0;i<k.length;++i){"),
            a(t, c, "k[i]"),
            s(t, c, u, p + "[k[i]]")("}");
        else if (c.repeated)
          t("if(!Array.isArray(%s))", p)("return%j", i(c, "array"))(
            "for(var i=0;i<%s.length;++i){",
            p
          ),
            s(t, c, u, p + "[i]")("}");
        else {
          if (c.partOf) {
            var f = o.safeProp(c.partOf.name);
            1 === n[c.partOf.name] &&
              t("if(p%s===1)", f)(
                "return%j",
                c.partOf.name + ": multiple values"
              ),
              (n[c.partOf.name] = 1),
              t("p%s=1", f);
          }
          s(t, c, u, p);
        }
        c.optional && t("}");
      }
      return t("return null");
    };
    var n = r(5),
      o = r(1);
    function i(e, t) {
      return (
        e.name +
        ": " +
        t +
        (e.repeated && "array" !== t
          ? "[]"
          : e.map && "object" !== t
          ? "{k:" + e.keyType + "}"
          : "") +
        " expected"
      );
    }
    function s(e, t, r, o) {
      if (t.resolvedType)
        if (t.resolvedType instanceof n) {
          e("switch(%s){", o)("default:")("return%j", i(t, "enum value"));
          for (
            var s = Object.keys(t.resolvedType.values), a = 0;
            a < s.length;
            ++a
          )
            e("case %i:", t.resolvedType.values[s[a]]);
          e("break")("}");
        } else
          e("{")("var e=types[%i].verify(%s);", r, o)("if(e)")(
            "return%j+e",
            t.name + "."
          )("}");
      else
        switch (t.type) {
          case "int32":
          case "uint32":
          case "sint32":
          case "fixed32":
          case "sfixed32":
            e("if(!util.isInteger(%s))", o)("return%j", i(t, "integer"));
            break;
          case "int64":
          case "uint64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            e(
              "if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))",
              o,
              o,
              o,
              o
            )("return%j", i(t, "integer|Long"));
            break;
          case "float":
          case "double":
            e('if(typeof %s!=="number")', o)("return%j", i(t, "number"));
            break;
          case "bool":
            e('if(typeof %s!=="boolean")', o)("return%j", i(t, "boolean"));
            break;
          case "string":
            e("if(!util.isString(%s))", o)("return%j", i(t, "string"));
            break;
          case "bytes":
            e(
              'if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',
              o,
              o,
              o
            )("return%j", i(t, "buffer"));
        }
      return e;
    }
    function a(e, t, r) {
      switch (t.keyType) {
        case "int32":
        case "uint32":
        case "sint32":
        case "fixed32":
        case "sfixed32":
          e("if(!util.key32Re.test(%s))", r)("return%j", i(t, "integer key"));
          break;
        case "int64":
        case "uint64":
        case "sint64":
        case "fixed64":
        case "sfixed64":
          e("if(!util.key64Re.test(%s))", r)(
            "return%j",
            i(t, "integer|Long key")
          );
          break;
        case "bool":
          e("if(!util.key2Re.test(%s))", r)("return%j", i(t, "boolean key"));
      }
      return e;
    }
  },
  function (e, t, r) {
    "use strict";
    var n = t,
      o = r(5),
      i = r(1);
    function s(e, t, r, n) {
      if (t.resolvedType)
        if (t.resolvedType instanceof o) {
          e("switch(d%s){", n);
          for (
            var i = t.resolvedType.values, s = Object.keys(i), a = 0;
            a < s.length;
            ++a
          )
            t.repeated && i[s[a]] === t.typeDefault && e("default:"),
              e("case%j:", s[a])("case %i:", i[s[a]])("m%s=%j", n, i[s[a]])(
                "break"
              );
          e("}");
        } else
          e('if(typeof d%s!=="object")', n)(
            "throw TypeError(%j)",
            t.fullName + ": object expected"
          )("m%s=types[%i].fromObject(d%s)", n, r, n);
      else {
        var u = !1;
        switch (t.type) {
          case "double":
          case "float":
            e("m%s=Number(d%s)", n, n);
            break;
          case "uint32":
          case "fixed32":
            e("m%s=d%s>>>0", n, n);
            break;
          case "int32":
          case "sint32":
          case "sfixed32":
            e("m%s=d%s|0", n, n);
            break;
          case "uint64":
            u = !0;
          case "int64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            e("if(util.Long)")(
              "(m%s=util.Long.fromValue(d%s)).unsigned=%j",
              n,
              n,
              u
            )('else if(typeof d%s==="string")', n)(
              "m%s=parseInt(d%s,10)",
              n,
              n
            )('else if(typeof d%s==="number")', n)(
              "m%s=d%s",
              n,
              n
            )('else if(typeof d%s==="object")', n)(
              "m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)",
              n,
              n,
              n,
              u ? "true" : ""
            );
            break;
          case "bytes":
            e('if(typeof d%s==="string")', n)(
              "util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)",
              n,
              n,
              n
            )("else if(d%s.length)", n)("m%s=d%s", n, n);
            break;
          case "string":
            e("m%s=String(d%s)", n, n);
            break;
          case "bool":
            e("m%s=Boolean(d%s)", n, n);
        }
      }
      return e;
    }
    function a(e, t, r, n) {
      if (t.resolvedType)
        t.resolvedType instanceof o
          ? e("d%s=o.enums===String?types[%i].values[m%s]:m%s", n, r, n, n)
          : e("d%s=types[%i].toObject(m%s,o)", n, r, n);
      else {
        var i = !1;
        switch (t.type) {
          case "double":
          case "float":
            e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", n, n, n, n);
            break;
          case "uint64":
            i = !0;
          case "int64":
          case "sint64":
          case "fixed64":
          case "sfixed64":
            e('if(typeof m%s==="number")', n)(
              "d%s=o.longs===String?String(m%s):m%s",
              n,
              n,
              n
            )("else")(
              "d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s",
              n,
              n,
              n,
              n,
              i ? "true" : "",
              n
            );
            break;
          case "bytes":
            e(
              "d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s",
              n,
              n,
              n,
              n,
              n
            );
            break;
          default:
            e("d%s=m%s", n, n);
        }
      }
      return e;
    }
    (n.fromObject = function (e) {
      var t = e.fieldsArray,
        r = i.codegen(
          ["d"],
          e.name + "$fromObject"
        )("if(d instanceof this.ctor)")("return d");
      if (!t.length) return r("return new this.ctor");
      r("var m=new this.ctor");
      for (var n = 0; n < t.length; ++n) {
        var a = t[n].resolve(),
          u = i.safeProp(a.name);
        a.map
          ? (r("if(d%s){", u)('if(typeof d%s!=="object")', u)(
              "throw TypeError(%j)",
              a.fullName + ": object expected"
            )("m%s={}", u)(
              "for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){",
              u
            ),
            s(r, a, n, u + "[ks[i]]")("}")("}"))
          : a.repeated
          ? (r("if(d%s){", u)("if(!Array.isArray(d%s))", u)(
              "throw TypeError(%j)",
              a.fullName + ": array expected"
            )("m%s=[]", u)("for(var i=0;i<d%s.length;++i){", u),
            s(r, a, n, u + "[i]")("}")("}"))
          : (a.resolvedType instanceof o || r("if(d%s!=null){", u),
            s(r, a, n, u),
            a.resolvedType instanceof o || r("}"));
      }
      return r("return m");
    }),
      (n.toObject = function (e) {
        var t = e.fieldsArray.slice().sort(i.compareFieldsById);
        if (!t.length) return i.codegen()("return {}");
        for (
          var r = i.codegen(["m", "o"], e.name + "$toObject")("if(!o)")("o={}")(
              "var d={}"
            ),
            n = [],
            s = [],
            u = [],
            c = 0;
          c < t.length;
          ++c
        )
          t[c].partOf ||
            (t[c].resolve().repeated ? n : t[c].map ? s : u).push(t[c]);
        if (n.length) {
          for (r("if(o.arrays||o.defaults){"), c = 0; c < n.length; ++c)
            r("d%s=[]", i.safeProp(n[c].name));
          r("}");
        }
        if (s.length) {
          for (r("if(o.objects||o.defaults){"), c = 0; c < s.length; ++c)
            r("d%s={}", i.safeProp(s[c].name));
          r("}");
        }
        if (u.length) {
          for (r("if(o.defaults){"), c = 0; c < u.length; ++c) {
            var p = u[c],
              f = i.safeProp(p.name);
            if (p.resolvedType instanceof o)
              r(
                "d%s=o.enums===String?%j:%j",
                f,
                p.resolvedType.valuesById[p.typeDefault],
                p.typeDefault
              );
            else if (p.long)
              r("if(util.Long){")(
                "var n=new util.Long(%i,%i,%j)",
                p.typeDefault.low,
                p.typeDefault.high,
                p.typeDefault.unsigned
              )(
                "d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n",
                f
              )("}else")(
                "d%s=o.longs===String?%j:%i",
                f,
                p.typeDefault.toString(),
                p.typeDefault.toNumber()
              );
            else if (p.bytes) {
              var d =
                "[" + Array.prototype.slice.call(p.typeDefault).join(",") + "]";
              r(
                "if(o.bytes===String)d%s=%j",
                f,
                String.fromCharCode.apply(String, p.typeDefault)
              )("else{")("d%s=%s", f, d)(
                "if(o.bytes!==Array)d%s=util.newBuffer(d%s)",
                f,
                f
              )("}");
            } else r("d%s=%j", f, p.typeDefault);
          }
          r("}");
        }
        var l = !1;
        for (c = 0; c < t.length; ++c) {
          p = t[c];
          var h = e._fieldsArray.indexOf(p);
          f = i.safeProp(p.name);
          p.map
            ? (l || ((l = !0), r("var ks2")),
              r("if(m%s&&(ks2=Object.keys(m%s)).length){", f, f)("d%s={}", f)(
                "for(var j=0;j<ks2.length;++j){"
              ),
              a(r, p, h, f + "[ks2[j]]")("}"))
            : p.repeated
            ? (r("if(m%s&&m%s.length){", f, f)("d%s=[]", f)(
                "for(var j=0;j<m%s.length;++j){",
                f
              ),
              a(r, p, h, f + "[j]")("}"))
            : (r("if(m%s!=null&&m.hasOwnProperty(%j)){", f, p.name),
              a(r, p, h, f),
              p.partOf &&
                r("if(o.oneofs)")("d%s=%j", i.safeProp(p.partOf.name), p.name)),
            r("}");
        }
        return r("return d");
      });
  },
  function (e, t, r) {
    "use strict";
    var n = t,
      o = r(26);
    n[".google.protobuf.Any"] = {
      fromObject: function (e) {
        if (e && e["@type"]) {
          var t = this.lookup(e["@type"]);
          if (t) {
            var r =
              "." === e["@type"].charAt(0) ? e["@type"].substr(1) : e["@type"];
            return this.create({
              type_url: "/" + r,
              value: t.encode(t.fromObject(e)).finish(),
            });
          }
        }
        return this.fromObject(e);
      },
      toObject: function (e, t) {
        if (t && t.json && e.type_url && e.value) {
          var r = e.type_url.substring(e.type_url.lastIndexOf("/") + 1),
            n = this.lookup(r);
          n && (e = n.decode(e.value));
        }
        if (!(e instanceof this.ctor) && e instanceof o) {
          var i = e.$type.toObject(e, t);
          return (i["@type"] = e.$type.fullName), i;
        }
        return this.toObject(e, t);
      },
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = f;
    var n = r(11);
    ((f.prototype = Object.create(n.prototype)).constructor = f).className =
      "Root";
    var o,
      i,
      s,
      a = r(10),
      u = r(5),
      c = r(25),
      p = r(1);
    function f(e) {
      n.call(this, "", e), (this.deferred = []), (this.files = []);
    }
    function d() {}
    (f.fromJSON = function (e, t) {
      return (
        t || (t = new f()),
        e.options && t.setOptions(e.options),
        t.addJSON(e.nested)
      );
    }),
      (f.prototype.resolvePath = p.path.resolve),
      (f.prototype.load = function e(t, r, n) {
        "function" == typeof r && ((n = r), (r = void 0));
        var o = this;
        if (!n) return p.asPromise(e, o, t, r);
        var a = n === d;
        function u(e, t) {
          if (n) {
            var r = n;
            if (((n = null), a)) throw e;
            r(e, t);
          }
        }
        function c(e, t) {
          try {
            if (
              (p.isString(t) && "{" === t.charAt(0) && (t = JSON.parse(t)),
              p.isString(t))
            ) {
              i.filename = e;
              var n,
                s = i(t, o, r),
                c = 0;
              if (s.imports)
                for (; c < s.imports.length; ++c)
                  (n = o.resolvePath(e, s.imports[c])) && f(n);
              if (s.weakImports)
                for (c = 0; c < s.weakImports.length; ++c)
                  (n = o.resolvePath(e, s.weakImports[c])) && f(n, !0);
            } else o.setOptions(t.options).addJSON(t.nested);
          } catch (e) {
            u(e);
          }
          a || l || u(null, o);
        }
        function f(e, t) {
          var r = e.lastIndexOf("google/protobuf/");
          if (r > -1) {
            var i = e.substring(r);
            i in s && (e = i);
          }
          if (!(o.files.indexOf(e) > -1))
            if ((o.files.push(e), e in s))
              a
                ? c(e, s[e])
                : (++l,
                  setTimeout(function () {
                    --l, c(e, s[e]);
                  }));
            else if (a) {
              var f;
              try {
                f = p.fs.readFileSync(e).toString("utf8");
              } catch (e) {
                return void (t || u(e));
              }
              c(e, f);
            } else
              ++l,
                p.fetch(e, function (r, i) {
                  --l, n && (r ? (t ? l || u(null, o) : u(r)) : c(e, i));
                });
        }
        var l = 0;
        p.isString(t) && (t = [t]);
        for (var h, y = 0; y < t.length; ++y)
          (h = o.resolvePath("", t[y])) && f(h);
        if (a) return o;
        l || u(null, o);
      }),
      (f.prototype.loadSync = function (e, t) {
        if (!p.isNode) throw Error("not supported");
        return this.load(e, t, d);
      }),
      (f.prototype.resolveAll = function () {
        if (this.deferred.length)
          throw Error(
            "unresolvable extensions: " +
              this.deferred
                .map(function (e) {
                  return "'extend " + e.extend + "' in " + e.parent.fullName;
                })
                .join(", ")
          );
        return n.prototype.resolveAll.call(this);
      });
    var l = /^[A-Z]/;
    function h(e, t) {
      var r = t.parent.lookup(t.extend);
      if (r) {
        var n = new a(t.fullName, t.id, t.type, t.rule, void 0, t.options);
        return (n.declaringField = t), (t.extensionField = n), r.add(n), !0;
      }
      return !1;
    }
    (f.prototype._handleAdd = function (e) {
      if (e instanceof a)
        void 0 === e.extend ||
          e.extensionField ||
          h(0, e) ||
          this.deferred.push(e);
      else if (e instanceof u) l.test(e.name) && (e.parent[e.name] = e.values);
      else if (!(e instanceof c)) {
        if (e instanceof o)
          for (var t = 0; t < this.deferred.length; )
            h(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
        for (var r = 0; r < e.nestedArray.length; ++r)
          this._handleAdd(e._nestedArray[r]);
        l.test(e.name) && (e.parent[e.name] = e);
      }
    }),
      (f.prototype._handleRemove = function (e) {
        if (e instanceof a) {
          if (void 0 !== e.extend)
            if (e.extensionField)
              e.extensionField.parent.remove(e.extensionField),
                (e.extensionField = null);
            else {
              var t = this.deferred.indexOf(e);
              t > -1 && this.deferred.splice(t, 1);
            }
        } else if (e instanceof u) l.test(e.name) && delete e.parent[e.name];
        else if (e instanceof n) {
          for (var r = 0; r < e.nestedArray.length; ++r)
            this._handleRemove(e._nestedArray[r]);
          l.test(e.name) && delete e.parent[e.name];
        }
      }),
      (f._configure = function (e, t, r) {
        (o = e), (i = t), (s = r);
      });
  },
  function (e, t, r) {
    var n = r(63),
      o = r(18),
      i = r(30),
      s = r(13)("socket.io-client");
    e.exports = t = u;
    var a = (t.managers = {});
    function u(e, t) {
      "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
      var r,
        o = n(e),
        u = o.source,
        c = o.id,
        p = o.path,
        f = a[c] && p in a[c].nsps;
      return (
        t.forceNew || t["force new connection"] || !1 === t.multiplex || f
          ? (s("ignoring socket cache for %s", u), (r = i(u, t)))
          : (a[c] || (s("new io instance for %s", u), (a[c] = i(u, t))),
            (r = a[c])),
        o.query && !t.query && (t.query = o.query),
        r.socket(o.path, t)
      );
    }
    (t.protocol = o.protocol),
      (t.connect = u),
      (t.Manager = r(30)),
      (t.Socket = r(36));
  },
  function (e, t, r) {
    "use strict";
    const n = r(108),
      o = r(109),
      i = r(110);
    function s(e, t) {
      return t.encode ? (t.strict ? n(e) : encodeURIComponent(e)) : e;
    }
    function a(e, t) {
      return t.decode ? o(e) : e;
    }
    function u(e) {
      const t = e.indexOf("#");
      return -1 !== t && (e = e.slice(0, t)), e;
    }
    function c(e) {
      const t = (e = u(e)).indexOf("?");
      return -1 === t ? "" : e.slice(t + 1);
    }
    function p(e, t) {
      return (
        t.parseNumbers &&
        !Number.isNaN(Number(e)) &&
        "string" == typeof e &&
        "" !== e.trim()
          ? (e = Number(e))
          : !t.parseBooleans ||
            null === e ||
            ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) ||
            (e = "true" === e.toLowerCase()),
        e
      );
    }
    function f(e, t) {
      const r = (function (e) {
          let t;
          switch (e.arrayFormat) {
            case "index":
              return (e, r, n) => {
                (t = /\[(\d*)\]$/.exec(e)),
                  (e = e.replace(/\[\d*\]$/, "")),
                  t
                    ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r))
                    : (n[e] = r);
              };
            case "bracket":
              return (e, r, n) => {
                (t = /(\[\])$/.exec(e)),
                  (e = e.replace(/\[\]$/, "")),
                  t
                    ? void 0 !== n[e]
                      ? (n[e] = [].concat(n[e], r))
                      : (n[e] = [r])
                    : (n[e] = r);
              };
            case "comma":
              return (e, t, r) => {
                const n =
                  "string" == typeof t && t.split("").indexOf(",") > -1
                    ? t.split(",")
                    : t;
                r[e] = n;
              };
            default:
              return (e, t, r) => {
                void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t);
              };
          }
        })(
          (t = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            t
          ))
        ),
        n = Object.create(null);
      if ("string" != typeof e) return n;
      if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
      for (const o of e.split("&")) {
        let [e, s] = i(t.decode ? o.replace(/\+/g, " ") : o, "=");
        (s = void 0 === s ? null : a(s, t)), r(a(e, t), s, n);
      }
      for (const e of Object.keys(n)) {
        const r = n[e];
        if ("object" == typeof r && null !== r)
          for (const e of Object.keys(r)) r[e] = p(r[e], t);
        else n[e] = p(r, t);
      }
      return !1 === t.sort
        ? n
        : (!0 === t.sort
            ? Object.keys(n).sort()
            : Object.keys(n).sort(t.sort)
          ).reduce((e, t) => {
            const r = n[t];
            return (
              Boolean(r) && "object" == typeof r && !Array.isArray(r)
                ? (e[t] = (function e(t) {
                    return Array.isArray(t)
                      ? t.sort()
                      : "object" == typeof t
                      ? e(Object.keys(t))
                          .sort((e, t) => Number(e) - Number(t))
                          .map((e) => t[e])
                      : t;
                  })(r))
                : (e[t] = r),
              e
            );
          }, Object.create(null));
    }
    (t.extract = c),
      (t.parse = f),
      (t.stringify = (e, t) => {
        if (!e) return "";
        const r = (function (e) {
            switch (e.arrayFormat) {
              case "index":
                return (t) => (r, n) => {
                  const o = r.length;
                  return void 0 === n || (e.skipNull && null === n)
                    ? r
                    : null === n
                    ? [...r, [s(t, e), "[", o, "]"].join("")]
                    : [...r, [s(t, e), "[", s(o, e), "]=", s(n, e)].join("")];
                };
              case "bracket":
                return (t) => (r, n) =>
                  void 0 === n || (e.skipNull && null === n)
                    ? r
                    : null === n
                    ? [...r, [s(t, e), "[]"].join("")]
                    : [...r, [s(t, e), "[]=", s(n, e)].join("")];
              case "comma":
                return (t) => (r, n) =>
                  null == n || 0 === n.length
                    ? r
                    : 0 === r.length
                    ? [[s(t, e), "=", s(n, e)].join("")]
                    : [[r, s(n, e)].join(",")];
              default:
                return (t) => (r, n) =>
                  void 0 === n || (e.skipNull && null === n)
                    ? r
                    : null === n
                    ? [...r, s(t, e)]
                    : [...r, [s(t, e), "=", s(n, e)].join("")];
            }
          })(
            (t = Object.assign(
              { encode: !0, strict: !0, arrayFormat: "none" },
              t
            ))
          ),
          n = Object.assign({}, e);
        if (t.skipNull)
          for (const e of Object.keys(n))
            (void 0 !== n[e] && null !== n[e]) || delete n[e];
        const o = Object.keys(n);
        return (
          !1 !== t.sort && o.sort(t.sort),
          o
            .map((n) => {
              const o = e[n];
              return void 0 === o
                ? ""
                : null === o
                ? s(n, t)
                : Array.isArray(o)
                ? o.reduce(r(n), []).join("&")
                : s(n, t) + "=" + s(o, t);
            })
            .filter((e) => e.length > 0)
            .join("&")
        );
      }),
      (t.parseUrl = (e, t) => ({
        url: u(e).split("?")[0] || "",
        query: f(c(e), t),
      }));
  },
  function (e, t, r) {
    var n = r(27),
      o = r(13)("socket.io-client:url");
    e.exports = function (e, t) {
      var r = e;
      (t = t || ("undefined" != typeof location && location)),
        null == e && (e = t.protocol + "//" + t.host);
      "string" == typeof e &&
        ("/" === e.charAt(0) &&
          (e = "/" === e.charAt(1) ? t.protocol + e : t.host + e),
        /^(https?|wss?):\/\//.test(e) ||
          (o("protocol-less url %s", e),
          (e = void 0 !== t ? t.protocol + "//" + e : "https://" + e)),
        o("parse %s", e),
        (r = n(e)));
      r.port ||
        (/^(http|ws)$/.test(r.protocol)
          ? (r.port = "80")
          : /^(http|ws)s$/.test(r.protocol) && (r.port = "443"));
      r.path = r.path || "/";
      var i = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
      return (
        (r.id = r.protocol + "://" + i + ":" + r.port),
        (r.href =
          r.protocol +
          "://" +
          i +
          (t && t.port === r.port ? "" : ":" + r.port)),
        r
      );
    };
  },
  function (e, t, r) {
    e.exports = function (e) {
      function t(e) {
        let t = 0;
        for (let r = 0; r < e.length; r++)
          (t = (t << 5) - t + e.charCodeAt(r)), (t |= 0);
        return n.colors[Math.abs(t) % n.colors.length];
      }
      function n(e) {
        let r;
        function s(...e) {
          if (!s.enabled) return;
          const t = s,
            o = Number(new Date()),
            i = o - (r || o);
          (t.diff = i),
            (t.prev = r),
            (t.curr = o),
            (r = o),
            (e[0] = n.coerce(e[0])),
            "string" != typeof e[0] && e.unshift("%O");
          let a = 0;
          (e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, o) => {
            if ("%%" === r) return r;
            a++;
            const i = n.formatters[o];
            if ("function" == typeof i) {
              const n = e[a];
              (r = i.call(t, n)), e.splice(a, 1), a--;
            }
            return r;
          })),
            n.formatArgs.call(t, e),
            (t.log || n.log).apply(t, e);
        }
        return (
          (s.namespace = e),
          (s.enabled = n.enabled(e)),
          (s.useColors = n.useColors()),
          (s.color = t(e)),
          (s.destroy = o),
          (s.extend = i),
          "function" == typeof n.init && n.init(s),
          n.instances.push(s),
          s
        );
      }
      function o() {
        const e = n.instances.indexOf(this);
        return -1 !== e && (n.instances.splice(e, 1), !0);
      }
      function i(e, t) {
        const r = n(this.namespace + (void 0 === t ? ":" : t) + e);
        return (r.log = this.log), r;
      }
      function s(e) {
        return e
          .toString()
          .substring(2, e.toString().length - 2)
          .replace(/\.\*\?$/, "*");
      }
      return (
        (n.debug = n),
        (n.default = n),
        (n.coerce = function (e) {
          if (e instanceof Error) return e.stack || e.message;
          return e;
        }),
        (n.disable = function () {
          const e = [
            ...n.names.map(s),
            ...n.skips.map(s).map((e) => "-" + e),
          ].join(",");
          return n.enable(""), e;
        }),
        (n.enable = function (e) {
          let t;
          n.save(e), (n.names = []), (n.skips = []);
          const r = ("string" == typeof e ? e : "").split(/[\s,]+/),
            o = r.length;
          for (t = 0; t < o; t++)
            r[t] &&
              ("-" === (e = r[t].replace(/\*/g, ".*?"))[0]
                ? n.skips.push(new RegExp("^" + e.substr(1) + "$"))
                : n.names.push(new RegExp("^" + e + "$")));
          for (t = 0; t < n.instances.length; t++) {
            const e = n.instances[t];
            e.enabled = n.enabled(e.namespace);
          }
        }),
        (n.enabled = function (e) {
          if ("*" === e[e.length - 1]) return !0;
          let t, r;
          for (t = 0, r = n.skips.length; t < r; t++)
            if (n.skips[t].test(e)) return !1;
          for (t = 0, r = n.names.length; t < r; t++)
            if (n.names[t].test(e)) return !0;
          return !1;
        }),
        (n.humanize = r(65)),
        Object.keys(e).forEach((t) => {
          n[t] = e[t];
        }),
        (n.instances = []),
        (n.names = []),
        (n.skips = []),
        (n.formatters = {}),
        (n.selectColor = t),
        n.enable(n.load()),
        n
      );
    };
  },
  function (e, t) {
    var r = 1e3,
      n = 6e4,
      o = 36e5,
      i = 24 * o;
    function s(e, t, r, n) {
      var o = t >= 1.5 * r;
      return Math.round(e / r) + " " + n + (o ? "s" : "");
    }
    e.exports = function (e, t) {
      t = t || {};
      var a = typeof e;
      if ("string" === a && e.length > 0)
        return (function (e) {
          if ((e = String(e)).length > 100) return;
          var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
            e
          );
          if (!t) return;
          var s = parseFloat(t[1]);
          switch ((t[2] || "ms").toLowerCase()) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return 315576e5 * s;
            case "weeks":
            case "week":
            case "w":
              return 6048e5 * s;
            case "days":
            case "day":
            case "d":
              return s * i;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return s * o;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return s * n;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return s * r;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return s;
            default:
              return;
          }
        })(e);
      if ("number" === a && isFinite(e))
        return t.long
          ? (function (e) {
              var t = Math.abs(e);
              if (t >= i) return s(e, t, i, "day");
              if (t >= o) return s(e, t, o, "hour");
              if (t >= n) return s(e, t, n, "minute");
              if (t >= r) return s(e, t, r, "second");
              return e + " ms";
            })(e)
          : (function (e) {
              var t = Math.abs(e);
              if (t >= i) return Math.round(e / i) + "d";
              if (t >= o) return Math.round(e / o) + "h";
              if (t >= n) return Math.round(e / n) + "m";
              if (t >= r) return Math.round(e / r) + "s";
              return e + "ms";
            })(e);
      throw new Error(
        "val is not a non-empty string or a valid number. val=" +
          JSON.stringify(e)
      );
    };
  },
  function (e, t, r) {
    (function (n) {
      function o() {
        var e;
        try {
          e = t.storage.debug;
        } catch (e) {}
        return !e && void 0 !== n && "env" in n && (e = n.env.DEBUG), e;
      }
      ((t = e.exports = r(67)).log = function () {
        return (
          "object" == typeof console &&
          console.log &&
          Function.prototype.apply.call(console.log, console, arguments)
        );
      }),
        (t.formatArgs = function (e) {
          var r = this.useColors;
          if (
            ((e[0] =
              (r ? "%c" : "") +
              this.namespace +
              (r ? " %c" : " ") +
              e[0] +
              (r ? "%c " : " ") +
              "+" +
              t.humanize(this.diff)),
            !r)
          )
            return;
          var n = "color: " + this.color;
          e.splice(1, 0, n, "color: inherit");
          var o = 0,
            i = 0;
          e[0].replace(/%[a-zA-Z%]/g, function (e) {
            "%%" !== e && (o++, "%c" === e && (i = o));
          }),
            e.splice(i, 0, n);
        }),
        (t.save = function (e) {
          try {
            null == e ? t.storage.removeItem("debug") : (t.storage.debug = e);
          } catch (e) {}
        }),
        (t.load = o),
        (t.useColors = function () {
          if (
            "undefined" != typeof window &&
            window.process &&
            "renderer" === window.process.type
          )
            return !0;
          if (
            "undefined" != typeof navigator &&
            navigator.userAgent &&
            navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
          )
            return !1;
          return (
            ("undefined" != typeof document &&
              document.documentElement &&
              document.documentElement.style &&
              document.documentElement.style.WebkitAppearance) ||
            ("undefined" != typeof window &&
              window.console &&
              (window.console.firebug ||
                (window.console.exception && window.console.table))) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
              parseInt(RegExp.$1, 10) >= 31) ||
            ("undefined" != typeof navigator &&
              navigator.userAgent &&
              navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
          );
        }),
        (t.storage =
          "undefined" != typeof chrome && void 0 !== chrome.storage
            ? chrome.storage.local
            : (function () {
                try {
                  return window.localStorage;
                } catch (e) {}
              })()),
        (t.colors = [
          "#0000CC",
          "#0000FF",
          "#0033CC",
          "#0033FF",
          "#0066CC",
          "#0066FF",
          "#0099CC",
          "#0099FF",
          "#00CC00",
          "#00CC33",
          "#00CC66",
          "#00CC99",
          "#00CCCC",
          "#00CCFF",
          "#3300CC",
          "#3300FF",
          "#3333CC",
          "#3333FF",
          "#3366CC",
          "#3366FF",
          "#3399CC",
          "#3399FF",
          "#33CC00",
          "#33CC33",
          "#33CC66",
          "#33CC99",
          "#33CCCC",
          "#33CCFF",
          "#6600CC",
          "#6600FF",
          "#6633CC",
          "#6633FF",
          "#66CC00",
          "#66CC33",
          "#9900CC",
          "#9900FF",
          "#9933CC",
          "#9933FF",
          "#99CC00",
          "#99CC33",
          "#CC0000",
          "#CC0033",
          "#CC0066",
          "#CC0099",
          "#CC00CC",
          "#CC00FF",
          "#CC3300",
          "#CC3333",
          "#CC3366",
          "#CC3399",
          "#CC33CC",
          "#CC33FF",
          "#CC6600",
          "#CC6633",
          "#CC9900",
          "#CC9933",
          "#CCCC00",
          "#CCCC33",
          "#FF0000",
          "#FF0033",
          "#FF0066",
          "#FF0099",
          "#FF00CC",
          "#FF00FF",
          "#FF3300",
          "#FF3333",
          "#FF3366",
          "#FF3399",
          "#FF33CC",
          "#FF33FF",
          "#FF6600",
          "#FF6633",
          "#FF9900",
          "#FF9933",
          "#FFCC00",
          "#FFCC33",
        ]),
        (t.formatters.j = function (e) {
          try {
            return JSON.stringify(e);
          } catch (e) {
            return "[UnexpectedJSONParseError]: " + e.message;
          }
        }),
        t.enable(o());
    }.call(this, r(14)));
  },
  function (e, t, r) {
    function n(e) {
      var r;
      function n() {
        if (n.enabled) {
          var e = n,
            o = +new Date(),
            i = o - (r || o);
          (e.diff = i), (e.prev = r), (e.curr = o), (r = o);
          for (var s = new Array(arguments.length), a = 0; a < s.length; a++)
            s[a] = arguments[a];
          (s[0] = t.coerce(s[0])), "string" != typeof s[0] && s.unshift("%O");
          var u = 0;
          (s[0] = s[0].replace(/%([a-zA-Z%])/g, function (r, n) {
            if ("%%" === r) return r;
            u++;
            var o = t.formatters[n];
            if ("function" == typeof o) {
              var i = s[u];
              (r = o.call(e, i)), s.splice(u, 1), u--;
            }
            return r;
          })),
            t.formatArgs.call(e, s);
          var c = n.log || t.log || console.log.bind(console);
          c.apply(e, s);
        }
      }
      return (
        (n.namespace = e),
        (n.enabled = t.enabled(e)),
        (n.useColors = t.useColors()),
        (n.color = (function (e) {
          var r,
            n = 0;
          for (r in e) (n = (n << 5) - n + e.charCodeAt(r)), (n |= 0);
          return t.colors[Math.abs(n) % t.colors.length];
        })(e)),
        (n.destroy = o),
        "function" == typeof t.init && t.init(n),
        t.instances.push(n),
        n
      );
    }
    function o() {
      var e = t.instances.indexOf(this);
      return -1 !== e && (t.instances.splice(e, 1), !0);
    }
    ((t = e.exports = n.debug = n.default = n).coerce = function (e) {
      return e instanceof Error ? e.stack || e.message : e;
    }),
      (t.disable = function () {
        t.enable("");
      }),
      (t.enable = function (e) {
        var r;
        t.save(e), (t.names = []), (t.skips = []);
        var n = ("string" == typeof e ? e : "").split(/[\s,]+/),
          o = n.length;
        for (r = 0; r < o; r++)
          n[r] &&
            ("-" === (e = n[r].replace(/\*/g, ".*?"))[0]
              ? t.skips.push(new RegExp("^" + e.substr(1) + "$"))
              : t.names.push(new RegExp("^" + e + "$")));
        for (r = 0; r < t.instances.length; r++) {
          var i = t.instances[r];
          i.enabled = t.enabled(i.namespace);
        }
      }),
      (t.enabled = function (e) {
        if ("*" === e[e.length - 1]) return !0;
        var r, n;
        for (r = 0, n = t.skips.length; r < n; r++)
          if (t.skips[r].test(e)) return !1;
        for (r = 0, n = t.names.length; r < n; r++)
          if (t.names[r].test(e)) return !0;
        return !1;
      }),
      (t.humanize = r(68)),
      (t.instances = []),
      (t.names = []),
      (t.skips = []),
      (t.formatters = {});
  },
  function (e, t) {
    var r = 1e3,
      n = 6e4,
      o = 36e5,
      i = 24 * o;
    function s(e, t, r) {
      if (!(e < t))
        return e < 1.5 * t
          ? Math.floor(e / t) + " " + r
          : Math.ceil(e / t) + " " + r + "s";
    }
    e.exports = function (e, t) {
      t = t || {};
      var a,
        u = typeof e;
      if ("string" === u && e.length > 0)
        return (function (e) {
          if ((e = String(e)).length > 100) return;
          var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
            e
          );
          if (!t) return;
          var s = parseFloat(t[1]);
          switch ((t[2] || "ms").toLowerCase()) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return 315576e5 * s;
            case "days":
            case "day":
            case "d":
              return s * i;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return s * o;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return s * n;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return s * r;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return s;
            default:
              return;
          }
        })(e);
      if ("number" === u && !1 === isNaN(e))
        return t.long
          ? s((a = e), i, "day") ||
              s(a, o, "hour") ||
              s(a, n, "minute") ||
              s(a, r, "second") ||
              a + " ms"
          : (function (e) {
              if (e >= i) return Math.round(e / i) + "d";
              if (e >= o) return Math.round(e / o) + "h";
              if (e >= n) return Math.round(e / n) + "m";
              if (e >= r) return Math.round(e / r) + "s";
              return e + "ms";
            })(e);
      throw new Error(
        "val is not a non-empty string or a valid number. val=" +
          JSON.stringify(e)
      );
    };
  },
  function (e, t, r) {
    var n = r(28),
      o = r(29),
      i = Object.prototype.toString,
      s =
        "function" == typeof Blob ||
        ("undefined" != typeof Blob &&
          "[object BlobConstructor]" === i.call(Blob)),
      a =
        "function" == typeof File ||
        ("undefined" != typeof File &&
          "[object FileConstructor]" === i.call(File));
    (t.deconstructPacket = function (e) {
      var t = [],
        r = e.data,
        i = e;
      return (
        (i.data = (function e(t, r) {
          if (!t) return t;
          if (o(t)) {
            var i = { _placeholder: !0, num: r.length };
            return r.push(t), i;
          }
          if (n(t)) {
            for (var s = new Array(t.length), a = 0; a < t.length; a++)
              s[a] = e(t[a], r);
            return s;
          }
          if ("object" == typeof t && !(t instanceof Date)) {
            s = {};
            for (var u in t) s[u] = e(t[u], r);
            return s;
          }
          return t;
        })(r, t)),
        (i.attachments = t.length),
        { packet: i, buffers: t }
      );
    }),
      (t.reconstructPacket = function (e, t) {
        return (
          (e.data = (function e(t, r) {
            if (!t) return t;
            if (t && t._placeholder) return r[t.num];
            if (n(t)) for (var o = 0; o < t.length; o++) t[o] = e(t[o], r);
            else if ("object" == typeof t) for (var i in t) t[i] = e(t[i], r);
            return t;
          })(e.data, t)),
          (e.attachments = void 0),
          e
        );
      }),
      (t.removeBlobs = function (e, t) {
        var r = 0,
          i = e;
        !(function e(u, c, p) {
          if (!u) return u;
          if ((s && u instanceof Blob) || (a && u instanceof File)) {
            r++;
            var f = new FileReader();
            (f.onload = function () {
              p ? (p[c] = this.result) : (i = this.result), --r || t(i);
            }),
              f.readAsArrayBuffer(u);
          } else if (n(u)) for (var d = 0; d < u.length; d++) e(u[d], d, u);
          else if ("object" == typeof u && !o(u))
            for (var l in u) e(u[l], l, u);
        })(i),
          r || t(i);
      });
  },
  function (e, t, r) {
    "use strict";
    (t.byteLength = function (e) {
      var t = c(e),
        r = t[0],
        n = t[1];
      return (3 * (r + n)) / 4 - n;
    }),
      (t.toByteArray = function (e) {
        var t,
          r,
          n = c(e),
          s = n[0],
          a = n[1],
          u = new i(
            (function (e, t, r) {
              return (3 * (t + r)) / 4 - r;
            })(0, s, a)
          ),
          p = 0,
          f = a > 0 ? s - 4 : s;
        for (r = 0; r < f; r += 4)
          (t =
            (o[e.charCodeAt(r)] << 18) |
            (o[e.charCodeAt(r + 1)] << 12) |
            (o[e.charCodeAt(r + 2)] << 6) |
            o[e.charCodeAt(r + 3)]),
            (u[p++] = (t >> 16) & 255),
            (u[p++] = (t >> 8) & 255),
            (u[p++] = 255 & t);
        2 === a &&
          ((t = (o[e.charCodeAt(r)] << 2) | (o[e.charCodeAt(r + 1)] >> 4)),
          (u[p++] = 255 & t));
        1 === a &&
          ((t =
            (o[e.charCodeAt(r)] << 10) |
            (o[e.charCodeAt(r + 1)] << 4) |
            (o[e.charCodeAt(r + 2)] >> 2)),
          (u[p++] = (t >> 8) & 255),
          (u[p++] = 255 & t));
        return u;
      }),
      (t.fromByteArray = function (e) {
        for (
          var t, r = e.length, o = r % 3, i = [], s = 0, a = r - o;
          s < a;
          s += 16383
        )
          i.push(p(e, s, s + 16383 > a ? a : s + 16383));
        1 === o
          ? ((t = e[r - 1]), i.push(n[t >> 2] + n[(t << 4) & 63] + "=="))
          : 2 === o &&
            ((t = (e[r - 2] << 8) + e[r - 1]),
            i.push(n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "="));
        return i.join("");
      });
    for (
      var n = [],
        o = [],
        i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        a = 0,
        u = s.length;
      a < u;
      ++a
    )
      (n[a] = s[a]), (o[s.charCodeAt(a)] = a);
    function c(e) {
      var t = e.length;
      if (t % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      var r = e.indexOf("=");
      return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
    }
    function p(e, t, r) {
      for (var o, i, s = [], a = t; a < r; a += 3)
        (o =
          ((e[a] << 16) & 16711680) +
          ((e[a + 1] << 8) & 65280) +
          (255 & e[a + 2])),
          s.push(
            n[((i = o) >> 18) & 63] +
              n[(i >> 12) & 63] +
              n[(i >> 6) & 63] +
              n[63 & i]
          );
      return s.join("");
    }
    (o["-".charCodeAt(0)] = 62), (o["_".charCodeAt(0)] = 63);
  },
  function (e, t) {
    (t.read = function (e, t, r, n, o) {
      var i,
        s,
        a = 8 * o - n - 1,
        u = (1 << a) - 1,
        c = u >> 1,
        p = -7,
        f = r ? o - 1 : 0,
        d = r ? -1 : 1,
        l = e[t + f];
      for (
        f += d, i = l & ((1 << -p) - 1), l >>= -p, p += a;
        p > 0;
        i = 256 * i + e[t + f], f += d, p -= 8
      );
      for (
        s = i & ((1 << -p) - 1), i >>= -p, p += n;
        p > 0;
        s = 256 * s + e[t + f], f += d, p -= 8
      );
      if (0 === i) i = 1 - c;
      else {
        if (i === u) return s ? NaN : (1 / 0) * (l ? -1 : 1);
        (s += Math.pow(2, n)), (i -= c);
      }
      return (l ? -1 : 1) * s * Math.pow(2, i - n);
    }),
      (t.write = function (e, t, r, n, o, i) {
        var s,
          a,
          u,
          c = 8 * i - o - 1,
          p = (1 << c) - 1,
          f = p >> 1,
          d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          l = n ? 0 : i - 1,
          h = n ? 1 : -1,
          y = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
        for (
          t = Math.abs(t),
            isNaN(t) || t === 1 / 0
              ? ((a = isNaN(t) ? 1 : 0), (s = p))
              : ((s = Math.floor(Math.log(t) / Math.LN2)),
                t * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                (t += s + f >= 1 ? d / u : d * Math.pow(2, 1 - f)) * u >= 2 &&
                  (s++, (u /= 2)),
                s + f >= p
                  ? ((a = 0), (s = p))
                  : s + f >= 1
                  ? ((a = (t * u - 1) * Math.pow(2, o)), (s += f))
                  : ((a = t * Math.pow(2, f - 1) * Math.pow(2, o)), (s = 0)));
          o >= 8;
          e[r + l] = 255 & a, l += h, a /= 256, o -= 8
        );
        for (
          s = (s << o) | a, c += o;
          c > 0;
          e[r + l] = 255 & s, l += h, s /= 256, c -= 8
        );
        e[r + l - h] |= 128 * y;
      });
  },
  function (e, t) {
    var r = {}.toString;
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == r.call(e);
      };
  },
  function (e, t, r) {
    (e.exports = r(74)), (e.exports.parser = r(8));
  },
  function (e, t, r) {
    var n = r(31),
      o = r(7),
      i = r(17)("engine.io-client:socket"),
      s = r(35),
      a = r(8),
      u = r(27),
      c = r(15);
    function p(e, t) {
      if (!(this instanceof p)) return new p(e, t);
      (t = t || {}),
        e && "object" == typeof e && ((t = e), (e = null)),
        e
          ? ((e = u(e)),
            (t.hostname = e.host),
            (t.secure = "https" === e.protocol || "wss" === e.protocol),
            (t.port = e.port),
            e.query && (t.query = e.query))
          : t.host && (t.hostname = u(t.host).host),
        (this.secure =
          null != t.secure
            ? t.secure
            : "undefined" != typeof location && "https:" === location.protocol),
        t.hostname && !t.port && (t.port = this.secure ? "443" : "80"),
        (this.agent = t.agent || !1),
        (this.hostname =
          t.hostname ||
          ("undefined" != typeof location ? location.hostname : "localhost")),
        (this.port =
          t.port ||
          ("undefined" != typeof location && location.port
            ? location.port
            : this.secure
            ? 443
            : 80)),
        (this.query = t.query || {}),
        "string" == typeof this.query && (this.query = c.decode(this.query)),
        (this.upgrade = !1 !== t.upgrade),
        (this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/"),
        (this.forceJSONP = !!t.forceJSONP),
        (this.jsonp = !1 !== t.jsonp),
        (this.forceBase64 = !!t.forceBase64),
        (this.enablesXDR = !!t.enablesXDR),
        (this.withCredentials = !1 !== t.withCredentials),
        (this.timestampParam = t.timestampParam || "t"),
        (this.timestampRequests = t.timestampRequests),
        (this.transports = t.transports || ["polling", "websocket"]),
        (this.transportOptions = t.transportOptions || {}),
        (this.readyState = ""),
        (this.writeBuffer = []),
        (this.prevBufferLen = 0),
        (this.policyPort = t.policyPort || 843),
        (this.rememberUpgrade = t.rememberUpgrade || !1),
        (this.binaryType = null),
        (this.onlyBinaryUpgrades = t.onlyBinaryUpgrades),
        (this.perMessageDeflate =
          !1 !== t.perMessageDeflate && (t.perMessageDeflate || {})),
        !0 === this.perMessageDeflate && (this.perMessageDeflate = {}),
        this.perMessageDeflate &&
          null == this.perMessageDeflate.threshold &&
          (this.perMessageDeflate.threshold = 1024),
        (this.pfx = t.pfx || null),
        (this.key = t.key || null),
        (this.passphrase = t.passphrase || null),
        (this.cert = t.cert || null),
        (this.ca = t.ca || null),
        (this.ciphers = t.ciphers || null),
        (this.rejectUnauthorized =
          void 0 === t.rejectUnauthorized || t.rejectUnauthorized),
        (this.forceNode = !!t.forceNode),
        (this.isReactNative =
          "undefined" != typeof navigator &&
          "string" == typeof navigator.product &&
          "reactnative" === navigator.product.toLowerCase()),
        ("undefined" == typeof self || this.isReactNative) &&
          (t.extraHeaders &&
            Object.keys(t.extraHeaders).length > 0 &&
            (this.extraHeaders = t.extraHeaders),
          t.localAddress && (this.localAddress = t.localAddress)),
        (this.id = null),
        (this.upgrades = null),
        (this.pingInterval = null),
        (this.pingTimeout = null),
        (this.pingIntervalTimer = null),
        (this.pingTimeoutTimer = null),
        this.open();
    }
    (e.exports = p),
      (p.priorWebsocketSuccess = !1),
      o(p.prototype),
      (p.protocol = a.protocol),
      (p.Socket = p),
      (p.Transport = r(22)),
      (p.transports = r(31)),
      (p.parser = r(8)),
      (p.prototype.createTransport = function (e) {
        i('creating transport "%s"', e);
        var t = (function (e) {
          var t = {};
          for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
          return t;
        })(this.query);
        (t.EIO = a.protocol), (t.transport = e);
        var r = this.transportOptions[e] || {};
        return (
          this.id && (t.sid = this.id),
          new n[e]({
            query: t,
            socket: this,
            agent: r.agent || this.agent,
            hostname: r.hostname || this.hostname,
            port: r.port || this.port,
            secure: r.secure || this.secure,
            path: r.path || this.path,
            forceJSONP: r.forceJSONP || this.forceJSONP,
            jsonp: r.jsonp || this.jsonp,
            forceBase64: r.forceBase64 || this.forceBase64,
            enablesXDR: r.enablesXDR || this.enablesXDR,
            withCredentials: r.withCredentials || this.withCredentials,
            timestampRequests: r.timestampRequests || this.timestampRequests,
            timestampParam: r.timestampParam || this.timestampParam,
            policyPort: r.policyPort || this.policyPort,
            pfx: r.pfx || this.pfx,
            key: r.key || this.key,
            passphrase: r.passphrase || this.passphrase,
            cert: r.cert || this.cert,
            ca: r.ca || this.ca,
            ciphers: r.ciphers || this.ciphers,
            rejectUnauthorized: r.rejectUnauthorized || this.rejectUnauthorized,
            perMessageDeflate: r.perMessageDeflate || this.perMessageDeflate,
            extraHeaders: r.extraHeaders || this.extraHeaders,
            forceNode: r.forceNode || this.forceNode,
            localAddress: r.localAddress || this.localAddress,
            requestTimeout: r.requestTimeout || this.requestTimeout,
            protocols: r.protocols || void 0,
            isReactNative: this.isReactNative,
          })
        );
      }),
      (p.prototype.open = function () {
        var e;
        if (
          this.rememberUpgrade &&
          p.priorWebsocketSuccess &&
          -1 !== this.transports.indexOf("websocket")
        )
          e = "websocket";
        else {
          if (0 === this.transports.length) {
            var t = this;
            return void setTimeout(function () {
              t.emit("error", "No transports available");
            }, 0);
          }
          e = this.transports[0];
        }
        this.readyState = "opening";
        try {
          e = this.createTransport(e);
        } catch (e) {
          return this.transports.shift(), void this.open();
        }
        e.open(), this.setTransport(e);
      }),
      (p.prototype.setTransport = function (e) {
        i("setting transport %s", e.name);
        var t = this;
        this.transport &&
          (i("clearing existing transport %s", this.transport.name),
          this.transport.removeAllListeners()),
          (this.transport = e),
          e
            .on("drain", function () {
              t.onDrain();
            })
            .on("packet", function (e) {
              t.onPacket(e);
            })
            .on("error", function (e) {
              t.onError(e);
            })
            .on("close", function () {
              t.onClose("transport close");
            });
      }),
      (p.prototype.probe = function (e) {
        i('probing transport "%s"', e);
        var t = this.createTransport(e, { probe: 1 }),
          r = !1,
          n = this;
        function o() {
          if (n.onlyBinaryUpgrades) {
            var o = !this.supportsBinary && n.transport.supportsBinary;
            r = r || o;
          }
          r ||
            (i('probe transport "%s" opened', e),
            t.send([{ type: "ping", data: "probe" }]),
            t.once("packet", function (o) {
              if (!r)
                if ("pong" === o.type && "probe" === o.data) {
                  if (
                    (i('probe transport "%s" pong', e),
                    (n.upgrading = !0),
                    n.emit("upgrading", t),
                    !t)
                  )
                    return;
                  (p.priorWebsocketSuccess = "websocket" === t.name),
                    i('pausing current transport "%s"', n.transport.name),
                    n.transport.pause(function () {
                      r ||
                        ("closed" !== n.readyState &&
                          (i("changing transport and sending upgrade packet"),
                          d(),
                          n.setTransport(t),
                          t.send([{ type: "upgrade" }]),
                          n.emit("upgrade", t),
                          (t = null),
                          (n.upgrading = !1),
                          n.flush()));
                    });
                } else {
                  i('probe transport "%s" failed', e);
                  var s = new Error("probe error");
                  (s.transport = t.name), n.emit("upgradeError", s);
                }
            }));
        }
        function s() {
          r || ((r = !0), d(), t.close(), (t = null));
        }
        function a(r) {
          var o = new Error("probe error: " + r);
          (o.transport = t.name),
            s(),
            i('probe transport "%s" failed because of error: %s', e, r),
            n.emit("upgradeError", o);
        }
        function u() {
          a("transport closed");
        }
        function c() {
          a("socket closed");
        }
        function f(e) {
          t &&
            e.name !== t.name &&
            (i('"%s" works - aborting "%s"', e.name, t.name), s());
        }
        function d() {
          t.removeListener("open", o),
            t.removeListener("error", a),
            t.removeListener("close", u),
            n.removeListener("close", c),
            n.removeListener("upgrading", f);
        }
        (p.priorWebsocketSuccess = !1),
          t.once("open", o),
          t.once("error", a),
          t.once("close", u),
          this.once("close", c),
          this.once("upgrading", f),
          t.open();
      }),
      (p.prototype.onOpen = function () {
        if (
          (i("socket open"),
          (this.readyState = "open"),
          (p.priorWebsocketSuccess = "websocket" === this.transport.name),
          this.emit("open"),
          this.flush(),
          "open" === this.readyState && this.upgrade && this.transport.pause)
        ) {
          i("starting upgrade probes");
          for (var e = 0, t = this.upgrades.length; e < t; e++)
            this.probe(this.upgrades[e]);
        }
      }),
      (p.prototype.onPacket = function (e) {
        if (
          "opening" === this.readyState ||
          "open" === this.readyState ||
          "closing" === this.readyState
        )
          switch (
            (i('socket receive: type "%s", data "%s"', e.type, e.data),
            this.emit("packet", e),
            this.emit("heartbeat"),
            e.type)
          ) {
            case "open":
              this.onHandshake(JSON.parse(e.data));
              break;
            case "pong":
              this.setPing(), this.emit("pong");
              break;
            case "error":
              var t = new Error("server error");
              (t.code = e.data), this.onError(t);
              break;
            case "message":
              this.emit("data", e.data), this.emit("message", e.data);
          }
        else i('packet received with socket readyState "%s"', this.readyState);
      }),
      (p.prototype.onHandshake = function (e) {
        this.emit("handshake", e),
          (this.id = e.sid),
          (this.transport.query.sid = e.sid),
          (this.upgrades = this.filterUpgrades(e.upgrades)),
          (this.pingInterval = e.pingInterval),
          (this.pingTimeout = e.pingTimeout),
          this.onOpen(),
          "closed" !== this.readyState &&
            (this.setPing(),
            this.removeListener("heartbeat", this.onHeartbeat),
            this.on("heartbeat", this.onHeartbeat));
      }),
      (p.prototype.onHeartbeat = function (e) {
        clearTimeout(this.pingTimeoutTimer);
        var t = this;
        t.pingTimeoutTimer = setTimeout(function () {
          "closed" !== t.readyState && t.onClose("ping timeout");
        }, e || t.pingInterval + t.pingTimeout);
      }),
      (p.prototype.setPing = function () {
        var e = this;
        clearTimeout(e.pingIntervalTimer),
          (e.pingIntervalTimer = setTimeout(function () {
            i(
              "writing ping packet - expecting pong within %sms",
              e.pingTimeout
            ),
              e.ping(),
              e.onHeartbeat(e.pingTimeout);
          }, e.pingInterval));
      }),
      (p.prototype.ping = function () {
        var e = this;
        this.sendPacket("ping", function () {
          e.emit("ping");
        });
      }),
      (p.prototype.onDrain = function () {
        this.writeBuffer.splice(0, this.prevBufferLen),
          (this.prevBufferLen = 0),
          0 === this.writeBuffer.length ? this.emit("drain") : this.flush();
      }),
      (p.prototype.flush = function () {
        "closed" !== this.readyState &&
          this.transport.writable &&
          !this.upgrading &&
          this.writeBuffer.length &&
          (i("flushing %d packets in socket", this.writeBuffer.length),
          this.transport.send(this.writeBuffer),
          (this.prevBufferLen = this.writeBuffer.length),
          this.emit("flush"));
      }),
      (p.prototype.write = p.prototype.send = function (e, t, r) {
        return this.sendPacket("message", e, t, r), this;
      }),
      (p.prototype.sendPacket = function (e, t, r, n) {
        if (
          ("function" == typeof t && ((n = t), (t = void 0)),
          "function" == typeof r && ((n = r), (r = null)),
          "closing" !== this.readyState && "closed" !== this.readyState)
        ) {
          (r = r || {}).compress = !1 !== r.compress;
          var o = { type: e, data: t, options: r };
          this.emit("packetCreate", o),
            this.writeBuffer.push(o),
            n && this.once("flush", n),
            this.flush();
        }
      }),
      (p.prototype.close = function () {
        if ("opening" === this.readyState || "open" === this.readyState) {
          this.readyState = "closing";
          var e = this;
          this.writeBuffer.length
            ? this.once("drain", function () {
                this.upgrading ? n() : t();
              })
            : this.upgrading
            ? n()
            : t();
        }
        function t() {
          e.onClose("forced close"),
            i("socket closing - telling transport to close"),
            e.transport.close();
        }
        function r() {
          e.removeListener("upgrade", r),
            e.removeListener("upgradeError", r),
            t();
        }
        function n() {
          e.once("upgrade", r), e.once("upgradeError", r);
        }
        return this;
      }),
      (p.prototype.onError = function (e) {
        i("socket error %j", e),
          (p.priorWebsocketSuccess = !1),
          this.emit("error", e),
          this.onClose("transport error", e);
      }),
      (p.prototype.onClose = function (e, t) {
        if (
          "opening" === this.readyState ||
          "open" === this.readyState ||
          "closing" === this.readyState
        ) {
          i('socket close with reason: "%s"', e);
          clearTimeout(this.pingIntervalTimer),
            clearTimeout(this.pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            (this.readyState = "closed"),
            (this.id = null),
            this.emit("close", e, t),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0);
        }
      }),
      (p.prototype.filterUpgrades = function (e) {
        for (var t = [], r = 0, n = e.length; r < n; r++)
          ~s(this.transports, e[r]) && t.push(e[r]);
        return t;
      });
  },
  function (e, t) {
    try {
      e.exports =
        "undefined" != typeof XMLHttpRequest &&
        "withCredentials" in new XMLHttpRequest();
    } catch (t) {
      e.exports = !1;
    }
  },
  function (e, t, r) {
    var n = r(21),
      o = r(32),
      i = r(7),
      s = r(16),
      a = r(17)("engine.io-client:polling-xhr");
    function u() {}
    function c(e) {
      if (
        (o.call(this, e),
        (this.requestTimeout = e.requestTimeout),
        (this.extraHeaders = e.extraHeaders),
        "undefined" != typeof location)
      ) {
        var t = "https:" === location.protocol,
          r = location.port;
        r || (r = t ? 443 : 80),
          (this.xd =
            ("undefined" != typeof location &&
              e.hostname !== location.hostname) ||
            r !== e.port),
          (this.xs = e.secure !== t);
      }
    }
    function p(e) {
      (this.method = e.method || "GET"),
        (this.uri = e.uri),
        (this.xd = !!e.xd),
        (this.xs = !!e.xs),
        (this.async = !1 !== e.async),
        (this.data = void 0 !== e.data ? e.data : null),
        (this.agent = e.agent),
        (this.isBinary = e.isBinary),
        (this.supportsBinary = e.supportsBinary),
        (this.enablesXDR = e.enablesXDR),
        (this.withCredentials = e.withCredentials),
        (this.requestTimeout = e.requestTimeout),
        (this.pfx = e.pfx),
        (this.key = e.key),
        (this.passphrase = e.passphrase),
        (this.cert = e.cert),
        (this.ca = e.ca),
        (this.ciphers = e.ciphers),
        (this.rejectUnauthorized = e.rejectUnauthorized),
        (this.extraHeaders = e.extraHeaders),
        this.create();
    }
    if (
      ((e.exports = c),
      (e.exports.Request = p),
      s(c, o),
      (c.prototype.supportsBinary = !0),
      (c.prototype.request = function (e) {
        return (
          ((e = e || {}).uri = this.uri()),
          (e.xd = this.xd),
          (e.xs = this.xs),
          (e.agent = this.agent || !1),
          (e.supportsBinary = this.supportsBinary),
          (e.enablesXDR = this.enablesXDR),
          (e.withCredentials = this.withCredentials),
          (e.pfx = this.pfx),
          (e.key = this.key),
          (e.passphrase = this.passphrase),
          (e.cert = this.cert),
          (e.ca = this.ca),
          (e.ciphers = this.ciphers),
          (e.rejectUnauthorized = this.rejectUnauthorized),
          (e.requestTimeout = this.requestTimeout),
          (e.extraHeaders = this.extraHeaders),
          new p(e)
        );
      }),
      (c.prototype.doWrite = function (e, t) {
        var r = "string" != typeof e && void 0 !== e,
          n = this.request({ method: "POST", data: e, isBinary: r }),
          o = this;
        n.on("success", t),
          n.on("error", function (e) {
            o.onError("xhr post error", e);
          }),
          (this.sendXhr = n);
      }),
      (c.prototype.doPoll = function () {
        a("xhr poll");
        var e = this.request(),
          t = this;
        e.on("data", function (e) {
          t.onData(e);
        }),
          e.on("error", function (e) {
            t.onError("xhr poll error", e);
          }),
          (this.pollXhr = e);
      }),
      i(p.prototype),
      (p.prototype.create = function () {
        var e = {
          agent: this.agent,
          xdomain: this.xd,
          xscheme: this.xs,
          enablesXDR: this.enablesXDR,
        };
        (e.pfx = this.pfx),
          (e.key = this.key),
          (e.passphrase = this.passphrase),
          (e.cert = this.cert),
          (e.ca = this.ca),
          (e.ciphers = this.ciphers),
          (e.rejectUnauthorized = this.rejectUnauthorized);
        var t = (this.xhr = new n(e)),
          r = this;
        try {
          a("xhr open %s: %s", this.method, this.uri),
            t.open(this.method, this.uri, this.async);
          try {
            if (this.extraHeaders)
              for (var o in (t.setDisableHeaderCheck &&
                t.setDisableHeaderCheck(!0),
              this.extraHeaders))
                this.extraHeaders.hasOwnProperty(o) &&
                  t.setRequestHeader(o, this.extraHeaders[o]);
          } catch (e) {}
          if ("POST" === this.method)
            try {
              this.isBinary
                ? t.setRequestHeader("Content-type", "application/octet-stream")
                : t.setRequestHeader(
                    "Content-type",
                    "text/plain;charset=UTF-8"
                  );
            } catch (e) {}
          try {
            t.setRequestHeader("Accept", "*/*");
          } catch (e) {}
          "withCredentials" in t && (t.withCredentials = this.withCredentials),
            this.requestTimeout && (t.timeout = this.requestTimeout),
            this.hasXDR()
              ? ((t.onload = function () {
                  r.onLoad();
                }),
                (t.onerror = function () {
                  r.onError(t.responseText);
                }))
              : (t.onreadystatechange = function () {
                  if (2 === t.readyState)
                    try {
                      var e = t.getResponseHeader("Content-Type");
                      ((r.supportsBinary && "application/octet-stream" === e) ||
                        "application/octet-stream; charset=UTF-8" === e) &&
                        (t.responseType = "arraybuffer");
                    } catch (e) {}
                  4 === t.readyState &&
                    (200 === t.status || 1223 === t.status
                      ? r.onLoad()
                      : setTimeout(function () {
                          r.onError("number" == typeof t.status ? t.status : 0);
                        }, 0));
                }),
            a("xhr data %s", this.data),
            t.send(this.data);
        } catch (e) {
          return void setTimeout(function () {
            r.onError(e);
          }, 0);
        }
        "undefined" != typeof document &&
          ((this.index = p.requestsCount++), (p.requests[this.index] = this));
      }),
      (p.prototype.onSuccess = function () {
        this.emit("success"), this.cleanup();
      }),
      (p.prototype.onData = function (e) {
        this.emit("data", e), this.onSuccess();
      }),
      (p.prototype.onError = function (e) {
        this.emit("error", e), this.cleanup(!0);
      }),
      (p.prototype.cleanup = function (e) {
        if (void 0 !== this.xhr && null !== this.xhr) {
          if (
            (this.hasXDR()
              ? (this.xhr.onload = this.xhr.onerror = u)
              : (this.xhr.onreadystatechange = u),
            e)
          )
            try {
              this.xhr.abort();
            } catch (e) {}
          "undefined" != typeof document && delete p.requests[this.index],
            (this.xhr = null);
        }
      }),
      (p.prototype.onLoad = function () {
        var e;
        try {
          var t;
          try {
            t = this.xhr.getResponseHeader("Content-Type");
          } catch (e) {}
          e =
            (("application/octet-stream" === t ||
              "application/octet-stream; charset=UTF-8" === t) &&
              this.xhr.response) ||
            this.xhr.responseText;
        } catch (e) {
          this.onError(e);
        }
        null != e && this.onData(e);
      }),
      (p.prototype.hasXDR = function () {
        return (
          "undefined" != typeof XDomainRequest && !this.xs && this.enablesXDR
        );
      }),
      (p.prototype.abort = function () {
        this.cleanup();
      }),
      (p.requestsCount = 0),
      (p.requests = {}),
      "undefined" != typeof document)
    )
      if ("function" == typeof attachEvent) attachEvent("onunload", d);
      else if ("function" == typeof addEventListener) {
        var f = "onpagehide" in self ? "pagehide" : "unload";
        addEventListener(f, d, !1);
      }
    function d() {
      for (var e in p.requests)
        p.requests.hasOwnProperty(e) && p.requests[e].abort();
    }
  },
  function (e, t) {
    e.exports =
      Object.keys ||
      function (e) {
        var t = [],
          r = Object.prototype.hasOwnProperty;
        for (var n in e) r.call(e, n) && t.push(n);
        return t;
      };
  },
  function (e, t) {
    var r = {}.toString;
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == r.call(e);
      };
  },
  function (e, t) {
    e.exports = function (e, t, r) {
      var n = e.byteLength;
      if (((t = t || 0), (r = r || n), e.slice)) return e.slice(t, r);
      if (
        (t < 0 && (t += n),
        r < 0 && (r += n),
        r > n && (r = n),
        t >= n || t >= r || 0 === n)
      )
        return new ArrayBuffer(0);
      for (
        var o = new Uint8Array(e), i = new Uint8Array(r - t), s = t, a = 0;
        s < r;
        s++, a++
      )
        i[a] = o[s];
      return i.buffer;
    };
  },
  function (e, t) {
    function r() {}
    e.exports = function (e, t, n) {
      var o = !1;
      return (n = n || r), (i.count = e), 0 === e ? t() : i;
      function i(e, r) {
        if (i.count <= 0) throw new Error("after called too many times");
        --i.count,
          e ? ((o = !0), t(e), (t = n)) : 0 !== i.count || o || t(null, r);
      }
    };
  },
  function (e, t) {
    var r,
      n,
      o,
      i = String.fromCharCode;
    function s(e) {
      for (var t, r, n = [], o = 0, i = e.length; o < i; )
        (t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i
          ? 56320 == (64512 & (r = e.charCodeAt(o++)))
            ? n.push(((1023 & t) << 10) + (1023 & r) + 65536)
            : (n.push(t), o--)
          : n.push(t);
      return n;
    }
    function a(e, t) {
      if (e >= 55296 && e <= 57343) {
        if (t)
          throw Error(
            "Lone surrogate U+" +
              e.toString(16).toUpperCase() +
              " is not a scalar value"
          );
        return !1;
      }
      return !0;
    }
    function u(e, t) {
      return i(((e >> t) & 63) | 128);
    }
    function c(e, t) {
      if (0 == (4294967168 & e)) return i(e);
      var r = "";
      return (
        0 == (4294965248 & e)
          ? (r = i(((e >> 6) & 31) | 192))
          : 0 == (4294901760 & e)
          ? (a(e, t) || (e = 65533),
            (r = i(((e >> 12) & 15) | 224)),
            (r += u(e, 6)))
          : 0 == (4292870144 & e) &&
            ((r = i(((e >> 18) & 7) | 240)), (r += u(e, 12)), (r += u(e, 6))),
        (r += i((63 & e) | 128))
      );
    }
    function p() {
      if (o >= n) throw Error("Invalid byte index");
      var e = 255 & r[o];
      if ((o++, 128 == (192 & e))) return 63 & e;
      throw Error("Invalid continuation byte");
    }
    function f(e) {
      var t, i;
      if (o > n) throw Error("Invalid byte index");
      if (o == n) return !1;
      if (((t = 255 & r[o]), o++, 0 == (128 & t))) return t;
      if (192 == (224 & t)) {
        if ((i = ((31 & t) << 6) | p()) >= 128) return i;
        throw Error("Invalid continuation byte");
      }
      if (224 == (240 & t)) {
        if ((i = ((15 & t) << 12) | (p() << 6) | p()) >= 2048)
          return a(i, e) ? i : 65533;
        throw Error("Invalid continuation byte");
      }
      if (
        240 == (248 & t) &&
        (i = ((7 & t) << 18) | (p() << 12) | (p() << 6) | p()) >= 65536 &&
        i <= 1114111
      )
        return i;
      throw Error("Invalid UTF-8 detected");
    }
    e.exports = {
      version: "2.1.2",
      encode: function (e, t) {
        for (
          var r = !1 !== (t = t || {}).strict,
            n = s(e),
            o = n.length,
            i = -1,
            a = "";
          ++i < o;

        )
          a += c(n[i], r);
        return a;
      },
      decode: function (e, t) {
        var a = !1 !== (t = t || {}).strict;
        (r = s(e)), (n = r.length), (o = 0);
        for (var u, c = []; !1 !== (u = f(a)); ) c.push(u);
        return (function (e) {
          for (var t, r = e.length, n = -1, o = ""; ++n < r; )
            (t = e[n]) > 65535 &&
              ((o += i((((t -= 65536) >>> 10) & 1023) | 55296)),
              (t = 56320 | (1023 & t))),
              (o += i(t));
          return o;
        })(c);
      },
    };
  },
  function (e, t) {
    !(function () {
      "use strict";
      for (
        var e =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          r = new Uint8Array(256),
          n = 0;
        n < e.length;
        n++
      )
        r[e.charCodeAt(n)] = n;
      (t.encode = function (t) {
        var r,
          n = new Uint8Array(t),
          o = n.length,
          i = "";
        for (r = 0; r < o; r += 3)
          (i += e[n[r] >> 2]),
            (i += e[((3 & n[r]) << 4) | (n[r + 1] >> 4)]),
            (i += e[((15 & n[r + 1]) << 2) | (n[r + 2] >> 6)]),
            (i += e[63 & n[r + 2]]);
        return (
          o % 3 == 2
            ? (i = i.substring(0, i.length - 1) + "=")
            : o % 3 == 1 && (i = i.substring(0, i.length - 2) + "=="),
          i
        );
      }),
        (t.decode = function (e) {
          var t,
            n,
            o,
            i,
            s,
            a = 0.75 * e.length,
            u = e.length,
            c = 0;
          "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
          var p = new ArrayBuffer(a),
            f = new Uint8Array(p);
          for (t = 0; t < u; t += 4)
            (n = r[e.charCodeAt(t)]),
              (o = r[e.charCodeAt(t + 1)]),
              (i = r[e.charCodeAt(t + 2)]),
              (s = r[e.charCodeAt(t + 3)]),
              (f[c++] = (n << 2) | (o >> 4)),
              (f[c++] = ((15 & o) << 4) | (i >> 2)),
              (f[c++] = ((3 & i) << 6) | (63 & s));
          return p;
        });
    })();
  },
  function (e, t) {
    var r =
        void 0 !== r
          ? r
          : "undefined" != typeof WebKitBlobBuilder
          ? WebKitBlobBuilder
          : "undefined" != typeof MSBlobBuilder
          ? MSBlobBuilder
          : "undefined" != typeof MozBlobBuilder && MozBlobBuilder,
      n = (function () {
        try {
          return 2 === new Blob(["hi"]).size;
        } catch (e) {
          return !1;
        }
      })(),
      o =
        n &&
        (function () {
          try {
            return 2 === new Blob([new Uint8Array([1, 2])]).size;
          } catch (e) {
            return !1;
          }
        })(),
      i = r && r.prototype.append && r.prototype.getBlob;
    function s(e) {
      return e.map(function (e) {
        if (e.buffer instanceof ArrayBuffer) {
          var t = e.buffer;
          if (e.byteLength !== t.byteLength) {
            var r = new Uint8Array(e.byteLength);
            r.set(new Uint8Array(t, e.byteOffset, e.byteLength)),
              (t = r.buffer);
          }
          return t;
        }
        return e;
      });
    }
    function a(e, t) {
      t = t || {};
      var n = new r();
      return (
        s(e).forEach(function (e) {
          n.append(e);
        }),
        t.type ? n.getBlob(t.type) : n.getBlob()
      );
    }
    function u(e, t) {
      return new Blob(s(e), t || {});
    }
    "undefined" != typeof Blob &&
      ((a.prototype = Blob.prototype), (u.prototype = Blob.prototype)),
      (e.exports = n ? (o ? Blob : u) : i ? a : void 0);
  },
  function (e, t, r) {
    e.exports = function (e) {
      function t(e) {
        let t = 0;
        for (let r = 0; r < e.length; r++)
          (t = (t << 5) - t + e.charCodeAt(r)), (t |= 0);
        return n.colors[Math.abs(t) % n.colors.length];
      }
      function n(e) {
        let r;
        function s(...e) {
          if (!s.enabled) return;
          const t = s,
            o = Number(new Date()),
            i = o - (r || o);
          (t.diff = i),
            (t.prev = r),
            (t.curr = o),
            (r = o),
            (e[0] = n.coerce(e[0])),
            "string" != typeof e[0] && e.unshift("%O");
          let a = 0;
          (e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, o) => {
            if ("%%" === r) return r;
            a++;
            const i = n.formatters[o];
            if ("function" == typeof i) {
              const n = e[a];
              (r = i.call(t, n)), e.splice(a, 1), a--;
            }
            return r;
          })),
            n.formatArgs.call(t, e),
            (t.log || n.log).apply(t, e);
        }
        return (
          (s.namespace = e),
          (s.enabled = n.enabled(e)),
          (s.useColors = n.useColors()),
          (s.color = t(e)),
          (s.destroy = o),
          (s.extend = i),
          "function" == typeof n.init && n.init(s),
          n.instances.push(s),
          s
        );
      }
      function o() {
        const e = n.instances.indexOf(this);
        return -1 !== e && (n.instances.splice(e, 1), !0);
      }
      function i(e, t) {
        const r = n(this.namespace + (void 0 === t ? ":" : t) + e);
        return (r.log = this.log), r;
      }
      function s(e) {
        return e
          .toString()
          .substring(2, e.toString().length - 2)
          .replace(/\.\*\?$/, "*");
      }
      return (
        (n.debug = n),
        (n.default = n),
        (n.coerce = function (e) {
          if (e instanceof Error) return e.stack || e.message;
          return e;
        }),
        (n.disable = function () {
          const e = [
            ...n.names.map(s),
            ...n.skips.map(s).map((e) => "-" + e),
          ].join(",");
          return n.enable(""), e;
        }),
        (n.enable = function (e) {
          let t;
          n.save(e), (n.names = []), (n.skips = []);
          const r = ("string" == typeof e ? e : "").split(/[\s,]+/),
            o = r.length;
          for (t = 0; t < o; t++)
            r[t] &&
              ("-" === (e = r[t].replace(/\*/g, ".*?"))[0]
                ? n.skips.push(new RegExp("^" + e.substr(1) + "$"))
                : n.names.push(new RegExp("^" + e + "$")));
          for (t = 0; t < n.instances.length; t++) {
            const e = n.instances[t];
            e.enabled = n.enabled(e.namespace);
          }
        }),
        (n.enabled = function (e) {
          if ("*" === e[e.length - 1]) return !0;
          let t, r;
          for (t = 0, r = n.skips.length; t < r; t++)
            if (n.skips[t].test(e)) return !1;
          for (t = 0, r = n.names.length; t < r; t++)
            if (n.names[t].test(e)) return !0;
          return !1;
        }),
        (n.humanize = r(85)),
        Object.keys(e).forEach((t) => {
          n[t] = e[t];
        }),
        (n.instances = []),
        (n.names = []),
        (n.skips = []),
        (n.formatters = {}),
        (n.selectColor = t),
        n.enable(n.load()),
        n
      );
    };
  },
  function (e, t) {
    var r = 1e3,
      n = 6e4,
      o = 36e5,
      i = 24 * o;
    function s(e, t, r, n) {
      var o = t >= 1.5 * r;
      return Math.round(e / r) + " " + n + (o ? "s" : "");
    }
    e.exports = function (e, t) {
      t = t || {};
      var a = typeof e;
      if ("string" === a && e.length > 0)
        return (function (e) {
          if ((e = String(e)).length > 100) return;
          var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
            e
          );
          if (!t) return;
          var s = parseFloat(t[1]);
          switch ((t[2] || "ms").toLowerCase()) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return 315576e5 * s;
            case "weeks":
            case "week":
            case "w":
              return 6048e5 * s;
            case "days":
            case "day":
            case "d":
              return s * i;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return s * o;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return s * n;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return s * r;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return s;
            default:
              return;
          }
        })(e);
      if ("number" === a && isFinite(e))
        return t.long
          ? (function (e) {
              var t = Math.abs(e);
              if (t >= i) return s(e, t, i, "day");
              if (t >= o) return s(e, t, o, "hour");
              if (t >= n) return s(e, t, n, "minute");
              if (t >= r) return s(e, t, r, "second");
              return e + " ms";
            })(e)
          : (function (e) {
              var t = Math.abs(e);
              if (t >= i) return Math.round(e / i) + "d";
              if (t >= o) return Math.round(e / o) + "h";
              if (t >= n) return Math.round(e / n) + "m";
              if (t >= r) return Math.round(e / r) + "s";
              return e + "ms";
            })(e);
      throw new Error(
        "val is not a non-empty string or a valid number. val=" +
          JSON.stringify(e)
      );
    };
  },
  function (e, t, r) {
    (function (t) {
      var n = r(32),
        o = r(16);
      e.exports = p;
      var i,
        s = /\n/g,
        a = /\\n/g;
      function u() {}
      function c() {
        return "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : void 0 !== t
          ? t
          : {};
      }
      function p(e) {
        if ((n.call(this, e), (this.query = this.query || {}), !i)) {
          var t = c();
          i = t.___eio = t.___eio || [];
        }
        this.index = i.length;
        var r = this;
        i.push(function (e) {
          r.onData(e);
        }),
          (this.query.j = this.index),
          "function" == typeof addEventListener &&
            addEventListener(
              "beforeunload",
              function () {
                r.script && (r.script.onerror = u);
              },
              !1
            );
      }
      o(p, n),
        (p.prototype.supportsBinary = !1),
        (p.prototype.doClose = function () {
          this.script &&
            (this.script.parentNode.removeChild(this.script),
            (this.script = null)),
            this.form &&
              (this.form.parentNode.removeChild(this.form),
              (this.form = null),
              (this.iframe = null)),
            n.prototype.doClose.call(this);
        }),
        (p.prototype.doPoll = function () {
          var e = this,
            t = document.createElement("script");
          this.script &&
            (this.script.parentNode.removeChild(this.script),
            (this.script = null)),
            (t.async = !0),
            (t.src = this.uri()),
            (t.onerror = function (t) {
              e.onError("jsonp poll error", t);
            });
          var r = document.getElementsByTagName("script")[0];
          r
            ? r.parentNode.insertBefore(t, r)
            : (document.head || document.body).appendChild(t),
            (this.script = t),
            "undefined" != typeof navigator &&
              /gecko/i.test(navigator.userAgent) &&
              setTimeout(function () {
                var e = document.createElement("iframe");
                document.body.appendChild(e), document.body.removeChild(e);
              }, 100);
        }),
        (p.prototype.doWrite = function (e, t) {
          var r = this;
          if (!this.form) {
            var n,
              o = document.createElement("form"),
              i = document.createElement("textarea"),
              u = (this.iframeId = "eio_iframe_" + this.index);
            (o.className = "socketio"),
              (o.style.position = "absolute"),
              (o.style.top = "-1000px"),
              (o.style.left = "-1000px"),
              (o.target = u),
              (o.method = "POST"),
              o.setAttribute("accept-charset", "utf-8"),
              (i.name = "d"),
              o.appendChild(i),
              document.body.appendChild(o),
              (this.form = o),
              (this.area = i);
          }
          function c() {
            p(), t();
          }
          function p() {
            if (r.iframe)
              try {
                r.form.removeChild(r.iframe);
              } catch (e) {
                r.onError("jsonp polling iframe removal error", e);
              }
            try {
              var e = '<iframe src="javascript:0" name="' + r.iframeId + '">';
              n = document.createElement(e);
            } catch (e) {
              ((n = document.createElement("iframe")).name = r.iframeId),
                (n.src = "javascript:0");
            }
            (n.id = r.iframeId), r.form.appendChild(n), (r.iframe = n);
          }
          (this.form.action = this.uri()),
            p(),
            (e = e.replace(a, "\\\n")),
            (this.area.value = e.replace(s, "\\n"));
          try {
            this.form.submit();
          } catch (e) {}
          this.iframe.attachEvent
            ? (this.iframe.onreadystatechange = function () {
                "complete" === r.iframe.readyState && c();
              })
            : (this.iframe.onload = c);
        });
    }.call(this, r(20)));
  },
  function (e, t, r) {
    (function (t) {
      var n,
        o,
        i = r(22),
        s = r(8),
        a = r(15),
        u = r(16),
        c = r(34),
        p = r(17)("engine.io-client:websocket");
      if (
        ("undefined" != typeof WebSocket
          ? (n = WebSocket)
          : "undefined" != typeof self &&
            (n = self.WebSocket || self.MozWebSocket),
        "undefined" == typeof window)
      )
        try {
          o = r(88);
        } catch (e) {}
      var f = n || o;
      function d(e) {
        e && e.forceBase64 && (this.supportsBinary = !1),
          (this.perMessageDeflate = e.perMessageDeflate),
          (this.usingBrowserWebSocket = n && !e.forceNode),
          (this.protocols = e.protocols),
          this.usingBrowserWebSocket || (f = o),
          i.call(this, e);
      }
      (e.exports = d),
        u(d, i),
        (d.prototype.name = "websocket"),
        (d.prototype.supportsBinary = !0),
        (d.prototype.doOpen = function () {
          if (this.check()) {
            var e = this.uri(),
              t = this.protocols,
              r = {
                agent: this.agent,
                perMessageDeflate: this.perMessageDeflate,
              };
            (r.pfx = this.pfx),
              (r.key = this.key),
              (r.passphrase = this.passphrase),
              (r.cert = this.cert),
              (r.ca = this.ca),
              (r.ciphers = this.ciphers),
              (r.rejectUnauthorized = this.rejectUnauthorized),
              this.extraHeaders && (r.headers = this.extraHeaders),
              this.localAddress && (r.localAddress = this.localAddress);
            try {
              this.ws =
                this.usingBrowserWebSocket && !this.isReactNative
                  ? t
                    ? new f(e, t)
                    : new f(e)
                  : new f(e, t, r);
            } catch (e) {
              return this.emit("error", e);
            }
            void 0 === this.ws.binaryType && (this.supportsBinary = !1),
              this.ws.supports && this.ws.supports.binary
                ? ((this.supportsBinary = !0),
                  (this.ws.binaryType = "nodebuffer"))
                : (this.ws.binaryType = "arraybuffer"),
              this.addEventListeners();
          }
        }),
        (d.prototype.addEventListeners = function () {
          var e = this;
          (this.ws.onopen = function () {
            e.onOpen();
          }),
            (this.ws.onclose = function () {
              e.onClose();
            }),
            (this.ws.onmessage = function (t) {
              e.onData(t.data);
            }),
            (this.ws.onerror = function (t) {
              e.onError("websocket error", t);
            });
        }),
        (d.prototype.write = function (e) {
          var r = this;
          this.writable = !1;
          for (var n = e.length, o = 0, i = n; o < i; o++)
            !(function (e) {
              s.encodePacket(e, r.supportsBinary, function (o) {
                if (!r.usingBrowserWebSocket) {
                  var i = {};
                  if (
                    (e.options && (i.compress = e.options.compress),
                    r.perMessageDeflate)
                  )
                    ("string" == typeof o ? t.byteLength(o) : o.length) <
                      r.perMessageDeflate.threshold && (i.compress = !1);
                }
                try {
                  r.usingBrowserWebSocket ? r.ws.send(o) : r.ws.send(o, i);
                } catch (e) {
                  p("websocket closed before onclose event");
                }
                --n || a();
              });
            })(e[o]);
          function a() {
            r.emit("flush"),
              setTimeout(function () {
                (r.writable = !0), r.emit("drain");
              }, 0);
          }
        }),
        (d.prototype.onClose = function () {
          i.prototype.onClose.call(this);
        }),
        (d.prototype.doClose = function () {
          void 0 !== this.ws && this.ws.close();
        }),
        (d.prototype.uri = function () {
          var e = this.query || {},
            t = this.secure ? "wss" : "ws",
            r = "";
          return (
            this.port &&
              (("wss" === t && 443 !== Number(this.port)) ||
                ("ws" === t && 80 !== Number(this.port))) &&
              (r = ":" + this.port),
            this.timestampRequests && (e[this.timestampParam] = c()),
            this.supportsBinary || (e.b64 = 1),
            (e = a.encode(e)).length && (e = "?" + e),
            t +
              "://" +
              (-1 !== this.hostname.indexOf(":")
                ? "[" + this.hostname + "]"
                : this.hostname) +
              r +
              this.path +
              e
          );
        }),
        (d.prototype.check = function () {
          return !(
            !f ||
            ("__initialize" in f && this.name === d.prototype.name)
          );
        });
    }.call(this, r(19).Buffer));
  },
  function (e, t) {},
  function (e, t) {
    e.exports = function (e, t) {
      for (var r = [], n = (t = t || 0) || 0; n < e.length; n++)
        r[n - t] = e[n];
      return r;
    };
  },
  function (e, t) {
    function r(e) {
      (e = e || {}),
        (this.ms = e.min || 100),
        (this.max = e.max || 1e4),
        (this.factor = e.factor || 2),
        (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
        (this.attempts = 0);
    }
    (e.exports = r),
      (r.prototype.duration = function () {
        var e = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var t = Math.random(),
            r = Math.floor(t * this.jitter * e);
          e = 0 == (1 & Math.floor(10 * t)) ? e - r : e + r;
        }
        return 0 | Math.min(e, this.max);
      }),
      (r.prototype.reset = function () {
        this.attempts = 0;
      }),
      (r.prototype.setMin = function (e) {
        this.ms = e;
      }),
      (r.prototype.setMax = function (e) {
        this.max = e;
      }),
      (r.prototype.setJitter = function (e) {
        this.jitter = e;
      });
  },
  function (e, t, r) {
    "use strict";
    var n = r(2),
      o = r(39),
      i = r(92),
      s = r(45);
    function a(e) {
      var t = new i(e),
        r = o(i.prototype.request, t);
      return n.extend(r, i.prototype, t), n.extend(r, t), r;
    }
    var u = a(r(42));
    (u.Axios = i),
      (u.create = function (e) {
        return a(s(u.defaults, e));
      }),
      (u.Cancel = r(46)),
      (u.CancelToken = r(106)),
      (u.isCancel = r(41)),
      (u.all = function (e) {
        return Promise.all(e);
      }),
      (u.spread = r(107)),
      (e.exports = u),
      (e.exports.default = u);
  },
  function (e, t, r) {
    "use strict";
    var n = r(2),
      o = r(40),
      i = r(93),
      s = r(94),
      a = r(45);
    function u(e) {
      (this.defaults = e),
        (this.interceptors = { request: new i(), response: new i() });
    }
    (u.prototype.request = function (e) {
      "string" == typeof e
        ? ((e = arguments[1] || {}).url = arguments[0])
        : (e = e || {}),
        (e = a(this.defaults, e)).method
          ? (e.method = e.method.toLowerCase())
          : this.defaults.method
          ? (e.method = this.defaults.method.toLowerCase())
          : (e.method = "get");
      var t = [s, void 0],
        r = Promise.resolve(e);
      for (
        this.interceptors.request.forEach(function (e) {
          t.unshift(e.fulfilled, e.rejected);
        }),
          this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected);
          });
        t.length;

      )
        r = r.then(t.shift(), t.shift());
      return r;
    }),
      (u.prototype.getUri = function (e) {
        return (
          (e = a(this.defaults, e)),
          o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        );
      }),
      n.forEach(["delete", "get", "head", "options"], function (e) {
        u.prototype[e] = function (t, r) {
          return this.request(n.merge(r || {}, { method: e, url: t }));
        };
      }),
      n.forEach(["post", "put", "patch"], function (e) {
        u.prototype[e] = function (t, r, o) {
          return this.request(n.merge(o || {}, { method: e, url: t, data: r }));
        };
      }),
      (e.exports = u);
  },
  function (e, t, r) {
    "use strict";
    var n = r(2);
    function o() {
      this.handlers = [];
    }
    (o.prototype.use = function (e, t) {
      return (
        this.handlers.push({ fulfilled: e, rejected: t }),
        this.handlers.length - 1
      );
    }),
      (o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (o.prototype.forEach = function (e) {
        n.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }),
      (e.exports = o);
  },
  function (e, t, r) {
    "use strict";
    var n = r(2),
      o = r(95),
      i = r(41),
      s = r(42);
    function a(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }
    e.exports = function (e) {
      return (
        a(e),
        (e.headers = e.headers || {}),
        (e.data = o(e.data, e.headers, e.transformRequest)),
        (e.headers = n.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers
        )),
        n.forEach(
          ["delete", "get", "head", "post", "put", "patch", "common"],
          function (t) {
            delete e.headers[t];
          }
        ),
        (e.adapter || s.adapter)(e).then(
          function (t) {
            return (
              a(e), (t.data = o(t.data, t.headers, e.transformResponse)), t
            );
          },
          function (t) {
            return (
              i(t) ||
                (a(e),
                t &&
                  t.response &&
                  (t.response.data = o(
                    t.response.data,
                    t.response.headers,
                    e.transformResponse
                  ))),
              Promise.reject(t)
            );
          }
        )
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = function (e, t, r) {
      return (
        n.forEach(r, function (r) {
          e = r(e, t);
        }),
        e
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = function (e, t) {
      n.forEach(e, function (r, n) {
        n !== t &&
          n.toUpperCase() === t.toUpperCase() &&
          ((e[t] = r), delete e[n]);
      });
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(44);
    e.exports = function (e, t, r) {
      var o = r.config.validateStatus;
      !o || o(r.status)
        ? e(r)
        : t(
            n(
              "Request failed with status code " + r.status,
              r.config,
              null,
              r.request,
              r
            )
          );
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t, r, n, o) {
      return (
        (e.config = t),
        r && (e.code = r),
        (e.request = n),
        (e.response = o),
        (e.isAxiosError = !0),
        (e.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
          };
        }),
        e
      );
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(100),
      o = r(101);
    e.exports = function (e, t) {
      return e && !n(t) ? o(e, t) : t;
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(2),
      o = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent",
      ];
    e.exports = function (e) {
      var t,
        r,
        i,
        s = {};
      return e
        ? (n.forEach(e.split("\n"), function (e) {
            if (
              ((i = e.indexOf(":")),
              (t = n.trim(e.substr(0, i)).toLowerCase()),
              (r = n.trim(e.substr(i + 1))),
              t)
            ) {
              if (s[t] && o.indexOf(t) >= 0) return;
              s[t] =
                "set-cookie" === t
                  ? (s[t] ? s[t] : []).concat([r])
                  : s[t]
                  ? s[t] + ", " + r
                  : r;
            }
          }),
          s)
        : s;
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(2),
      o = r(104);
    e.exports = n.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement("a");
          function i(e) {
            var n = e;
            if (o(e)) throw new Error("URL contains XSS injection attempt");
            return (
              t && (r.setAttribute("href", n), (n = r.href)),
              r.setAttribute("href", n),
              {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, "") : "",
                hash: r.hash ? r.hash.replace(/^#/, "") : "",
                hostname: r.hostname,
                port: r.port,
                pathname:
                  "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname,
              }
            );
          }
          return (
            (e = i(window.location.href)),
            function (t) {
              var r = n.isString(t) ? i(t) : t;
              return r.protocol === e.protocol && r.host === e.host;
            }
          );
        })()
      : function () {
          return !0;
        };
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return /(\b)(on\w+)=|javascript|(<\s*)(\/*)script/gi.test(e);
    };
  },
  function (e, t, r) {
    "use strict";
    var n = r(2);
    e.exports = n.isStandardBrowserEnv()
      ? {
          write: function (e, t, r, o, i, s) {
            var a = [];
            a.push(e + "=" + encodeURIComponent(t)),
              n.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()),
              n.isString(o) && a.push("path=" + o),
              n.isString(i) && a.push("domain=" + i),
              !0 === s && a.push("secure"),
              (document.cookie = a.join("; "));
          },
          read: function (e) {
            var t = document.cookie.match(
              new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
            );
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          },
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {},
        };
  },
  function (e, t, r) {
    "use strict";
    var n = r(46);
    function o(e) {
      if ("function" != typeof e)
        throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var r = this;
      e(function (e) {
        r.reason || ((r.reason = new n(e)), t(r.reason));
      });
    }
    (o.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (o.source = function () {
        var e;
        return {
          token: new o(function (t) {
            e = t;
          }),
          cancel: e,
        };
      }),
      (e.exports = o);
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = (e) =>
      encodeURIComponent(e).replace(
        /[!'()*]/g,
        (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
      );
  },
  function (e, t, r) {
    "use strict";
    var n = new RegExp("%[a-f0-9]{2}", "gi"),
      o = new RegExp("(%[a-f0-9]{2})+", "gi");
    function i(e, t) {
      try {
        return decodeURIComponent(e.join(""));
      } catch (e) {}
      if (1 === e.length) return e;
      t = t || 1;
      var r = e.slice(0, t),
        n = e.slice(t);
      return Array.prototype.concat.call([], i(r), i(n));
    }
    function s(e) {
      try {
        return decodeURIComponent(e);
      } catch (o) {
        for (var t = e.match(n), r = 1; r < t.length; r++)
          t = (e = i(t, r).join("")).match(n);
        return e;
      }
    }
    e.exports = function (e) {
      if ("string" != typeof e)
        throw new TypeError(
          "Expected `encodedURI` to be of type `string`, got `" + typeof e + "`"
        );
      try {
        return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
      } catch (t) {
        return (function (e) {
          for (var t = { "%FE%FF": "��", "%FF%FE": "��" }, r = o.exec(e); r; ) {
            try {
              t[r[0]] = decodeURIComponent(r[0]);
            } catch (e) {
              var n = s(r[0]);
              n !== r[0] && (t[r[0]] = n);
            }
            r = o.exec(e);
          }
          t["%C2"] = "�";
          for (var i = Object.keys(t), a = 0; a < i.length; a++) {
            var u = i[a];
            e = e.replace(new RegExp(u, "g"), t[u]);
          }
          return e;
        })(e);
      }
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = (e, t) => {
      if ("string" != typeof e || "string" != typeof t)
        throw new TypeError("Expected the arguments to be of type `string`");
      if ("" === t) return [e];
      const r = e.indexOf(t);
      return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)];
    };
  },
  function (e, t, r) {
    "use strict";
    var n = (e.exports = r(112));
    (n.build = "light"),
      (n.load = function (e, t, r) {
        return (
          "function" == typeof t
            ? ((r = t), (t = new n.Root()))
            : t || (t = new n.Root()),
          t.load(e, r)
        );
      }),
      (n.loadSync = function (e, t) {
        return t || (t = new n.Root()), t.loadSync(e);
      }),
      (n.encoder = r(51)),
      (n.decoder = r(56)),
      (n.verifier = r(57)),
      (n.converter = r(58)),
      (n.ReflectionObject = r(9)),
      (n.Namespace = r(11)),
      (n.Root = r(60)),
      (n.Enum = r(5)),
      (n.Type = r(52)),
      (n.Field = r(10)),
      (n.OneOf = r(25)),
      (n.MapField = r(53)),
      (n.Service = r(54)),
      (n.Method = r(55)),
      (n.Message = r(26)),
      (n.wrappers = r(59)),
      (n.types = r(12)),
      (n.util = r(1)),
      n.ReflectionObject._configure(n.Root),
      n.Namespace._configure(n.Type, n.Service, n.Enum),
      n.Root._configure(n.Type),
      n.Field._configure(n.Type);
  },
  function (e, t, r) {
    "use strict";
    var n = t;
    function o() {
      n.Reader._configure(n.BufferReader), n.util._configure();
    }
    (n.build = "minimal"),
      (n.Writer = r(23)),
      (n.BufferWriter = r(119)),
      (n.Reader = r(24)),
      (n.BufferReader = r(120)),
      (n.util = r(4)),
      (n.rpc = r(49)),
      (n.roots = r(50)),
      (n.configure = o),
      n.Writer._configure(n.BufferWriter),
      o();
  },
  function (e, t, r) {
    "use strict";
    var n = t;
    n.length = function (e) {
      var t = e.length;
      if (!t) return 0;
      for (var r = 0; --t % 4 > 1 && "=" === e.charAt(t); ) ++r;
      return Math.ceil(3 * e.length) / 4 - r;
    };
    for (var o = new Array(64), i = new Array(123), s = 0; s < 64; )
      i[
        (o[s] =
          s < 26 ? s + 65 : s < 52 ? s + 71 : s < 62 ? s - 4 : (s - 59) | 43)
      ] = s++;
    n.encode = function (e, t, r) {
      for (var n, i = null, s = [], a = 0, u = 0; t < r; ) {
        var c = e[t++];
        switch (u) {
          case 0:
            (s[a++] = o[c >> 2]), (n = (3 & c) << 4), (u = 1);
            break;
          case 1:
            (s[a++] = o[n | (c >> 4)]), (n = (15 & c) << 2), (u = 2);
            break;
          case 2:
            (s[a++] = o[n | (c >> 6)]), (s[a++] = o[63 & c]), (u = 0);
        }
        a > 8191 &&
          ((i || (i = [])).push(String.fromCharCode.apply(String, s)), (a = 0));
      }
      return (
        u && ((s[a++] = o[n]), (s[a++] = 61), 1 === u && (s[a++] = 61)),
        i
          ? (a && i.push(String.fromCharCode.apply(String, s.slice(0, a))),
            i.join(""))
          : String.fromCharCode.apply(String, s.slice(0, a))
      );
    };
    (n.decode = function (e, t, r) {
      for (var n, o = r, s = 0, a = 0; a < e.length; ) {
        var u = e.charCodeAt(a++);
        if (61 === u && s > 1) break;
        if (void 0 === (u = i[u])) throw Error("invalid encoding");
        switch (s) {
          case 0:
            (n = u), (s = 1);
            break;
          case 1:
            (t[r++] = (n << 2) | ((48 & u) >> 4)), (n = u), (s = 2);
            break;
          case 2:
            (t[r++] = ((15 & n) << 4) | ((60 & u) >> 2)), (n = u), (s = 3);
            break;
          case 3:
            (t[r++] = ((3 & n) << 6) | u), (s = 0);
        }
      }
      if (1 === s) throw Error("invalid encoding");
      return r - o;
    }),
      (n.test = function (e) {
        return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(
          e
        );
      });
  },
  function (e, t, r) {
    "use strict";
    function n() {
      this._listeners = {};
    }
    (e.exports = n),
      (n.prototype.on = function (e, t, r) {
        return (
          (this._listeners[e] || (this._listeners[e] = [])).push({
            fn: t,
            ctx: r || this,
          }),
          this
        );
      }),
      (n.prototype.off = function (e, t) {
        if (void 0 === e) this._listeners = {};
        else if (void 0 === t) this._listeners[e] = [];
        else
          for (var r = this._listeners[e], n = 0; n < r.length; )
            r[n].fn === t ? r.splice(n, 1) : ++n;
        return this;
      }),
      (n.prototype.emit = function (e) {
        var t = this._listeners[e];
        if (t) {
          for (var r = [], n = 1; n < arguments.length; )
            r.push(arguments[n++]);
          for (n = 0; n < t.length; ) t[n].fn.apply(t[n++].ctx, r);
        }
        return this;
      });
  },
  function (e, t, r) {
    "use strict";
    function n(e) {
      return (
        "undefined" != typeof Float32Array
          ? (function () {
              var t = new Float32Array([-0]),
                r = new Uint8Array(t.buffer),
                n = 128 === r[3];
              function o(e, n, o) {
                (t[0] = e),
                  (n[o] = r[0]),
                  (n[o + 1] = r[1]),
                  (n[o + 2] = r[2]),
                  (n[o + 3] = r[3]);
              }
              function i(e, n, o) {
                (t[0] = e),
                  (n[o] = r[3]),
                  (n[o + 1] = r[2]),
                  (n[o + 2] = r[1]),
                  (n[o + 3] = r[0]);
              }
              function s(e, n) {
                return (
                  (r[0] = e[n]),
                  (r[1] = e[n + 1]),
                  (r[2] = e[n + 2]),
                  (r[3] = e[n + 3]),
                  t[0]
                );
              }
              function a(e, n) {
                return (
                  (r[3] = e[n]),
                  (r[2] = e[n + 1]),
                  (r[1] = e[n + 2]),
                  (r[0] = e[n + 3]),
                  t[0]
                );
              }
              (e.writeFloatLE = n ? o : i),
                (e.writeFloatBE = n ? i : o),
                (e.readFloatLE = n ? s : a),
                (e.readFloatBE = n ? a : s);
            })()
          : (function () {
              function t(e, t, r, n) {
                var o = t < 0 ? 1 : 0;
                if ((o && (t = -t), 0 === t))
                  e(1 / t > 0 ? 0 : 2147483648, r, n);
                else if (isNaN(t)) e(2143289344, r, n);
                else if (t > 34028234663852886e22)
                  e(((o << 31) | 2139095040) >>> 0, r, n);
                else if (t < 11754943508222875e-54)
                  e(
                    ((o << 31) | Math.round(t / 1401298464324817e-60)) >>> 0,
                    r,
                    n
                  );
                else {
                  var i = Math.floor(Math.log(t) / Math.LN2);
                  e(
                    ((o << 31) |
                      ((i + 127) << 23) |
                      (8388607 & Math.round(t * Math.pow(2, -i) * 8388608))) >>>
                      0,
                    r,
                    n
                  );
                }
              }
              function r(e, t, r) {
                var n = e(t, r),
                  o = 2 * (n >> 31) + 1,
                  i = (n >>> 23) & 255,
                  s = 8388607 & n;
                return 255 === i
                  ? s
                    ? NaN
                    : o * (1 / 0)
                  : 0 === i
                  ? 1401298464324817e-60 * o * s
                  : o * Math.pow(2, i - 150) * (s + 8388608);
              }
              (e.writeFloatLE = t.bind(null, o)),
                (e.writeFloatBE = t.bind(null, i)),
                (e.readFloatLE = r.bind(null, s)),
                (e.readFloatBE = r.bind(null, a));
            })(),
        "undefined" != typeof Float64Array
          ? (function () {
              var t = new Float64Array([-0]),
                r = new Uint8Array(t.buffer),
                n = 128 === r[7];
              function o(e, n, o) {
                (t[0] = e),
                  (n[o] = r[0]),
                  (n[o + 1] = r[1]),
                  (n[o + 2] = r[2]),
                  (n[o + 3] = r[3]),
                  (n[o + 4] = r[4]),
                  (n[o + 5] = r[5]),
                  (n[o + 6] = r[6]),
                  (n[o + 7] = r[7]);
              }
              function i(e, n, o) {
                (t[0] = e),
                  (n[o] = r[7]),
                  (n[o + 1] = r[6]),
                  (n[o + 2] = r[5]),
                  (n[o + 3] = r[4]),
                  (n[o + 4] = r[3]),
                  (n[o + 5] = r[2]),
                  (n[o + 6] = r[1]),
                  (n[o + 7] = r[0]);
              }
              function s(e, n) {
                return (
                  (r[0] = e[n]),
                  (r[1] = e[n + 1]),
                  (r[2] = e[n + 2]),
                  (r[3] = e[n + 3]),
                  (r[4] = e[n + 4]),
                  (r[5] = e[n + 5]),
                  (r[6] = e[n + 6]),
                  (r[7] = e[n + 7]),
                  t[0]
                );
              }
              function a(e, n) {
                return (
                  (r[7] = e[n]),
                  (r[6] = e[n + 1]),
                  (r[5] = e[n + 2]),
                  (r[4] = e[n + 3]),
                  (r[3] = e[n + 4]),
                  (r[2] = e[n + 5]),
                  (r[1] = e[n + 6]),
                  (r[0] = e[n + 7]),
                  t[0]
                );
              }
              (e.writeDoubleLE = n ? o : i),
                (e.writeDoubleBE = n ? i : o),
                (e.readDoubleLE = n ? s : a),
                (e.readDoubleBE = n ? a : s);
            })()
          : (function () {
              function t(e, t, r, n, o, i) {
                var s = n < 0 ? 1 : 0;
                if ((s && (n = -n), 0 === n))
                  e(0, o, i + t), e(1 / n > 0 ? 0 : 2147483648, o, i + r);
                else if (isNaN(n)) e(0, o, i + t), e(2146959360, o, i + r);
                else if (n > 17976931348623157e292)
                  e(0, o, i + t), e(((s << 31) | 2146435072) >>> 0, o, i + r);
                else {
                  var a;
                  if (n < 22250738585072014e-324)
                    e((a = n / 5e-324) >>> 0, o, i + t),
                      e(((s << 31) | (a / 4294967296)) >>> 0, o, i + r);
                  else {
                    var u = Math.floor(Math.log(n) / Math.LN2);
                    1024 === u && (u = 1023),
                      e(
                        (4503599627370496 * (a = n * Math.pow(2, -u))) >>> 0,
                        o,
                        i + t
                      ),
                      e(
                        ((s << 31) |
                          ((u + 1023) << 20) |
                          ((1048576 * a) & 1048575)) >>>
                          0,
                        o,
                        i + r
                      );
                  }
                }
              }
              function r(e, t, r, n, o) {
                var i = e(n, o + t),
                  s = e(n, o + r),
                  a = 2 * (s >> 31) + 1,
                  u = (s >>> 20) & 2047,
                  c = 4294967296 * (1048575 & s) + i;
                return 2047 === u
                  ? c
                    ? NaN
                    : a * (1 / 0)
                  : 0 === u
                  ? 5e-324 * a * c
                  : a * Math.pow(2, u - 1075) * (c + 4503599627370496);
              }
              (e.writeDoubleLE = t.bind(null, o, 0, 4)),
                (e.writeDoubleBE = t.bind(null, i, 4, 0)),
                (e.readDoubleLE = r.bind(null, s, 0, 4)),
                (e.readDoubleBE = r.bind(null, a, 4, 0));
            })(),
        e
      );
    }
    function o(e, t, r) {
      (t[r] = 255 & e),
        (t[r + 1] = (e >>> 8) & 255),
        (t[r + 2] = (e >>> 16) & 255),
        (t[r + 3] = e >>> 24);
    }
    function i(e, t, r) {
      (t[r] = e >>> 24),
        (t[r + 1] = (e >>> 16) & 255),
        (t[r + 2] = (e >>> 8) & 255),
        (t[r + 3] = 255 & e);
    }
    function s(e, t) {
      return (
        (e[t] | (e[t + 1] << 8) | (e[t + 2] << 16) | (e[t + 3] << 24)) >>> 0
      );
    }
    function a(e, t) {
      return (
        ((e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3]) >>> 0
      );
    }
    e.exports = n(n);
  },
  function (e, t, r) {
    "use strict";
    var n = t;
    (n.length = function (e) {
      for (var t = 0, r = 0, n = 0; n < e.length; ++n)
        (r = e.charCodeAt(n)) < 128
          ? (t += 1)
          : r < 2048
          ? (t += 2)
          : 55296 == (64512 & r) && 56320 == (64512 & e.charCodeAt(n + 1))
          ? (++n, (t += 4))
          : (t += 3);
      return t;
    }),
      (n.read = function (e, t, r) {
        if (r - t < 1) return "";
        for (var n, o = null, i = [], s = 0; t < r; )
          (n = e[t++]) < 128
            ? (i[s++] = n)
            : n > 191 && n < 224
            ? (i[s++] = ((31 & n) << 6) | (63 & e[t++]))
            : n > 239 && n < 365
            ? ((n =
                (((7 & n) << 18) |
                  ((63 & e[t++]) << 12) |
                  ((63 & e[t++]) << 6) |
                  (63 & e[t++])) -
                65536),
              (i[s++] = 55296 + (n >> 10)),
              (i[s++] = 56320 + (1023 & n)))
            : (i[s++] =
                ((15 & n) << 12) | ((63 & e[t++]) << 6) | (63 & e[t++])),
            s > 8191 &&
              ((o || (o = [])).push(String.fromCharCode.apply(String, i)),
              (s = 0));
        return o
          ? (s && o.push(String.fromCharCode.apply(String, i.slice(0, s))),
            o.join(""))
          : String.fromCharCode.apply(String, i.slice(0, s));
      }),
      (n.write = function (e, t, r) {
        for (var n, o, i = r, s = 0; s < e.length; ++s)
          (n = e.charCodeAt(s)) < 128
            ? (t[r++] = n)
            : n < 2048
            ? ((t[r++] = (n >> 6) | 192), (t[r++] = (63 & n) | 128))
            : 55296 == (64512 & n) &&
              56320 == (64512 & (o = e.charCodeAt(s + 1)))
            ? ((n = 65536 + ((1023 & n) << 10) + (1023 & o)),
              ++s,
              (t[r++] = (n >> 18) | 240),
              (t[r++] = ((n >> 12) & 63) | 128),
              (t[r++] = ((n >> 6) & 63) | 128),
              (t[r++] = (63 & n) | 128))
            : ((t[r++] = (n >> 12) | 224),
              (t[r++] = ((n >> 6) & 63) | 128),
              (t[r++] = (63 & n) | 128));
        return r - i;
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = function (e, t, r) {
      var n = r || 8192,
        o = n >>> 1,
        i = null,
        s = n;
      return function (r) {
        if (r < 1 || r > o) return e(r);
        s + r > n && ((i = e(n)), (s = 0));
        var a = t.call(i, s, (s += r));
        return 7 & s && (s = 1 + (7 | s)), a;
      };
    };
  },
  function (e, t, r) {
    "use strict";
    e.exports = o;
    var n = r(4);
    function o(e, t) {
      (this.lo = e >>> 0), (this.hi = t >>> 0);
    }
    var i = (o.zero = new o(0, 0));
    (i.toNumber = function () {
      return 0;
    }),
      (i.zzEncode = i.zzDecode = function () {
        return this;
      }),
      (i.length = function () {
        return 1;
      });
    var s = (o.zeroHash = "\0\0\0\0\0\0\0\0");
    (o.fromNumber = function (e) {
      if (0 === e) return i;
      var t = e < 0;
      t && (e = -e);
      var r = e >>> 0,
        n = ((e - r) / 4294967296) >>> 0;
      return (
        t &&
          ((n = ~n >>> 0),
          (r = ~r >>> 0),
          ++r > 4294967295 && ((r = 0), ++n > 4294967295 && (n = 0))),
        new o(r, n)
      );
    }),
      (o.from = function (e) {
        if ("number" == typeof e) return o.fromNumber(e);
        if (n.isString(e)) {
          if (!n.Long) return o.fromNumber(parseInt(e, 10));
          e = n.Long.fromString(e);
        }
        return e.low || e.high ? new o(e.low >>> 0, e.high >>> 0) : i;
      }),
      (o.prototype.toNumber = function (e) {
        if (!e && this.hi >>> 31) {
          var t = (1 + ~this.lo) >>> 0,
            r = ~this.hi >>> 0;
          return t || (r = (r + 1) >>> 0), -(t + 4294967296 * r);
        }
        return this.lo + 4294967296 * this.hi;
      }),
      (o.prototype.toLong = function (e) {
        return n.Long
          ? new n.Long(0 | this.lo, 0 | this.hi, Boolean(e))
          : { low: 0 | this.lo, high: 0 | this.hi, unsigned: Boolean(e) };
      });
    var a = String.prototype.charCodeAt;
    (o.fromHash = function (e) {
      return e === s
        ? i
        : new o(
            (a.call(e, 0) |
              (a.call(e, 1) << 8) |
              (a.call(e, 2) << 16) |
              (a.call(e, 3) << 24)) >>>
              0,
            (a.call(e, 4) |
              (a.call(e, 5) << 8) |
              (a.call(e, 6) << 16) |
              (a.call(e, 7) << 24)) >>>
              0
          );
    }),
      (o.prototype.toHash = function () {
        return String.fromCharCode(
          255 & this.lo,
          (this.lo >>> 8) & 255,
          (this.lo >>> 16) & 255,
          this.lo >>> 24,
          255 & this.hi,
          (this.hi >>> 8) & 255,
          (this.hi >>> 16) & 255,
          this.hi >>> 24
        );
      }),
      (o.prototype.zzEncode = function () {
        var e = this.hi >> 31;
        return (
          (this.hi = (((this.hi << 1) | (this.lo >>> 31)) ^ e) >>> 0),
          (this.lo = ((this.lo << 1) ^ e) >>> 0),
          this
        );
      }),
      (o.prototype.zzDecode = function () {
        var e = -(1 & this.lo);
        return (
          (this.lo = (((this.lo >>> 1) | (this.hi << 31)) ^ e) >>> 0),
          (this.hi = ((this.hi >>> 1) ^ e) >>> 0),
          this
        );
      }),
      (o.prototype.length = function () {
        var e = this.lo,
          t = ((this.lo >>> 28) | (this.hi << 4)) >>> 0,
          r = this.hi >>> 24;
        return 0 === r
          ? 0 === t
            ? e < 16384
              ? e < 128
                ? 1
                : 2
              : e < 2097152
              ? 3
              : 4
            : t < 16384
            ? t < 128
              ? 5
              : 6
            : t < 2097152
            ? 7
            : 8
          : r < 128
          ? 9
          : 10;
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = s;
    var n = r(23);
    (s.prototype = Object.create(n.prototype)).constructor = s;
    var o = r(4),
      i = o.Buffer;
    function s() {
      n.call(this);
    }
    s.alloc = function (e) {
      return (s.alloc = o._Buffer_allocUnsafe)(e);
    };
    var a =
      i && i.prototype instanceof Uint8Array && "set" === i.prototype.set.name
        ? function (e, t, r) {
            t.set(e, r);
          }
        : function (e, t, r) {
            if (e.copy) e.copy(t, r, 0, e.length);
            else for (var n = 0; n < e.length; ) t[r++] = e[n++];
          };
    function u(e, t, r) {
      e.length < 40 ? o.utf8.write(e, t, r) : t.utf8Write(e, r);
    }
    (s.prototype.bytes = function (e) {
      o.isString(e) && (e = o._Buffer_from(e, "base64"));
      var t = e.length >>> 0;
      return this.uint32(t), t && this._push(a, t, e), this;
    }),
      (s.prototype.string = function (e) {
        var t = i.byteLength(e);
        return this.uint32(t), t && this._push(u, t, e), this;
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = i;
    var n = r(24);
    (i.prototype = Object.create(n.prototype)).constructor = i;
    var o = r(4);
    function i(e) {
      n.call(this, e);
    }
    o.Buffer && (i.prototype._slice = o.Buffer.prototype.slice),
      (i.prototype.string = function () {
        var e = this.uint32();
        return this.buf.utf8Slice(
          this.pos,
          (this.pos = Math.min(this.pos + e, this.len))
        );
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = o;
    var n = r(4);
    function o(e, t, r) {
      if ("function" != typeof e) throw TypeError("rpcImpl must be a function");
      n.EventEmitter.call(this),
        (this.rpcImpl = e),
        (this.requestDelimited = Boolean(t)),
        (this.responseDelimited = Boolean(r));
    }
    ((o.prototype = Object.create(n.EventEmitter.prototype)).constructor = o),
      (o.prototype.rpcCall = function e(t, r, o, i, s) {
        if (!i) throw TypeError("request must be specified");
        var a = this;
        if (!s) return n.asPromise(e, a, t, r, o, i);
        if (a.rpcImpl)
          try {
            return a.rpcImpl(
              t,
              r[a.requestDelimited ? "encodeDelimited" : "encode"](i).finish(),
              function (e, r) {
                if (e) return a.emit("error", e, t), s(e);
                if (null !== r) {
                  if (!(r instanceof o))
                    try {
                      r = o[a.responseDelimited ? "decodeDelimited" : "decode"](
                        r
                      );
                    } catch (e) {
                      return a.emit("error", e, t), s(e);
                    }
                  return a.emit("data", r, t), s(null, r);
                }
                a.end(!0);
              }
            );
          } catch (e) {
            return (
              a.emit("error", e, t),
              void setTimeout(function () {
                s(e);
              }, 0)
            );
          }
        else
          setTimeout(function () {
            s(Error("already ended"));
          }, 0);
      }),
      (o.prototype.end = function (e) {
        return (
          this.rpcImpl &&
            (e || this.rpcImpl(null, null, null),
            (this.rpcImpl = null),
            this.emit("end").off()),
          this
        );
      });
  },
  function (e, t, r) {
    "use strict";
    function n(e, t) {
      "string" == typeof e && ((t = e), (e = void 0));
      var r = [];
      function o(e) {
        if ("string" != typeof e) {
          var t = i();
          if (
            (n.verbose && console.log("codegen: " + t), (t = "return " + t), e)
          ) {
            for (
              var s = Object.keys(e),
                a = new Array(s.length + 1),
                u = new Array(s.length),
                c = 0;
              c < s.length;

            )
              (a[c] = s[c]), (u[c] = e[s[c++]]);
            return (a[c] = t), Function.apply(null, a).apply(null, u);
          }
          return Function(t)();
        }
        for (var p = new Array(arguments.length - 1), f = 0; f < p.length; )
          p[f] = arguments[++f];
        if (
          ((f = 0),
          (e = e.replace(/%([%dfijs])/g, function (e, t) {
            var r = p[f++];
            switch (t) {
              case "d":
              case "f":
                return String(Number(r));
              case "i":
                return String(Math.floor(r));
              case "j":
                return JSON.stringify(r);
              case "s":
                return String(r);
            }
            return "%";
          })),
          f !== p.length)
        )
          throw Error("parameter count mismatch");
        return r.push(e), o;
      }
      function i(n) {
        return (
          "function " +
          (n || t || "") +
          "(" +
          ((e && e.join(",")) || "") +
          "){\n  " +
          r.join("\n  ") +
          "\n}"
        );
      }
      return (o.toString = i), o;
    }
    (e.exports = n), (n.verbose = !1);
  },
  function (e, t, r) {
    "use strict";
    e.exports = i;
    var n = r(47),
      o = r(48)("fs");
    function i(e, t, r) {
      return (
        "function" == typeof t ? ((r = t), (t = {})) : t || (t = {}),
        r
          ? !t.xhr && o && o.readFile
            ? o.readFile(e, function (n, o) {
                return n && "undefined" != typeof XMLHttpRequest
                  ? i.xhr(e, t, r)
                  : n
                  ? r(n)
                  : r(null, t.binary ? o : o.toString("utf8"));
              })
            : i.xhr(e, t, r)
          : n(i, this, e, t)
      );
    }
    i.xhr = function (e, t, r) {
      var n = new XMLHttpRequest();
      (n.onreadystatechange = function () {
        if (4 === n.readyState) {
          if (0 !== n.status && 200 !== n.status)
            return r(Error("status " + n.status));
          if (t.binary) {
            var e = n.response;
            if (!e) {
              e = [];
              for (var o = 0; o < n.responseText.length; ++o)
                e.push(255 & n.responseText.charCodeAt(o));
            }
            return r(
              null,
              "undefined" != typeof Uint8Array ? new Uint8Array(e) : e
            );
          }
          return r(null, n.responseText);
        }
      }),
        t.binary &&
          ("overrideMimeType" in n &&
            n.overrideMimeType("text/plain; charset=x-user-defined"),
          (n.responseType = "arraybuffer")),
        n.open("GET", e),
        n.send();
    };
  },
  function (e, t, r) {
    "use strict";
    var n = t,
      o = (n.isAbsolute = function (e) {
        return /^(?:\/|\w+:)/.test(e);
      }),
      i = (n.normalize = function (e) {
        var t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"),
          r = o(e),
          n = "";
        r && (n = t.shift() + "/");
        for (var i = 0; i < t.length; )
          ".." === t[i]
            ? i > 0 && ".." !== t[i - 1]
              ? t.splice(--i, 2)
              : r
              ? t.splice(i, 1)
              : ++i
            : "." === t[i]
            ? t.splice(i, 1)
            : ++i;
        return n + t.join("/");
      });
    n.resolve = function (e, t, r) {
      return (
        r || (t = i(t)),
        o(t)
          ? t
          : (r || (e = i(e)),
            (e = e.replace(/(?:\/|^)[^/]+$/, "")).length ? i(e + "/" + t) : t)
      );
    };
  },
  function (e, t, r) {
    "use strict";
    r.r(t);
    var n = {};
    r.r(n),
      r.d(n, "tokenUser", function () {
        return $;
      }),
      r.d(n, "tokenId", function () {
        return Z;
      }),
      r.d(n, "userRegister", function () {
        return Q;
      }),
      r.d(n, "userBindMobile", function () {
        return ee;
      }),
      r.d(n, "userSendSms", function () {
        return re;
      }),
      r.d(n, "userNameCheck", function () {
        return ne;
      }),
      r.d(n, "userMobileBind", function () {
        return oe;
      }),
      r.d(n, "userMobileBindSign", function () {
        return ie;
      }),
      r.d(n, "userMobileLogin", function () {
        return se;
      }),
      r.d(n, "userUpdateMobile", function () {
        return te;
      }),
      r.d(n, "captchaImagePost", function () {
        return ae;
      }),
      r.d(n, "captchaSms", function () {
        return ue;
      }),
      r.d(n, "rosterAccept", function () {
        return ce;
      }),
      r.d(n, "rosterApply", function () {
        return pe;
      }),
      r.d(n, "rosterDecline", function () {
        return fe;
      }),
      r.d(n, "rosterDelete", function () {
        return de;
      }),
      r.d(n, "rosterExt", function () {
        return le;
      }),
      r.d(n, "rosterId", function () {
        return he;
      }),
      r.d(n, "rosterList", function () {
        return ye;
      }),
      r.d(n, "rosterListPost", function () {
        return ge;
      }),
      r.d(n, "rosterName", function () {
        return me;
      }),
      r.d(n, "rosterApplylist", function () {
        return ve;
      }),
      r.d(n, "rosterBlockedlist", function () {
        return be;
      }),
      r.d(n, "rosterBlockedAdd", function () {
        return _e;
      }),
      r.d(n, "rosterBlockeRemove", function () {
        return we;
      }),
      r.d(n, "groupAdminAdd", function () {
        return Ee;
      }),
      r.d(n, "groupAdminList", function () {
        return Ae;
      }),
      r.d(n, "groupAdminRemove", function () {
        return Ce;
      }),
      r.d(n, "groupAnnouncement", function () {
        return ke;
      }),
      r.d(n, "groupAnnouncementDelete", function () {
        return Ne;
      }),
      r.d(n, "groupAnnouncementEdit", function () {
        return Oe;
      }),
      r.d(n, "groupAnnouncementList", function () {
        return Se;
      }),
      r.d(n, "groupCreate", function () {
        return Re;
      }),
      r.d(n, "groupDestroy", function () {
        return Te;
      }),
      r.d(n, "groupInfo", function () {
        return xe;
      }),
      r.d(n, "groupInfoAvatar", function () {
        return Ie;
      }),
      r.d(n, "groupInfoDdscription", function () {
        return De;
      }),
      r.d(n, "groupInfoName", function () {
        return Ue;
      }),
      r.d(n, "groupMemberlist", function () {
        return Me;
      }),
      r.d(n, "groupMsgMutemode", function () {
        return Be;
      }),
      r.d(n, "groupMsgNotdisturb", function () {
        return Pe;
      }),
      r.d(n, "groupPubliclist", function () {
        return je;
      }),
      r.d(n, "groupBannedList", function () {
        return Fe;
      }),
      r.d(n, "groupBab", function () {
        return Le;
      }),
      r.d(n, "groupUnban", function () {
        return Ge;
      }),
      r.d(n, "groupSettings", function () {
        return qe;
      }),
      r.d(n, "groupSettingsAllowmemberinvitation", function () {
        return Je;
      }),
      r.d(n, "groupSettingsAllowmembermodify", function () {
        return Ye;
      }),
      r.d(n, "groupSettingsEnablereadack", function () {
        return Ke;
      }),
      r.d(n, "groupSettingsHistoryvisible", function () {
        return He;
      }),
      r.d(n, "groupSettingsRequireadminapproval", function () {
        return Ve;
      }),
      r.d(n, "groupTransfer", function () {
        return ze;
      }),
      r.d(n, "groupUserjoined", function () {
        return Xe;
      }),
      r.d(n, "groupApply", function () {
        return We;
      }),
      r.d(n, "groupApplicationlist", function () {
        return ut;
      }),
      r.d(n, "groupInvitationlist", function () {
        return ct;
      }),
      r.d(n, "groupApplyHandle", function () {
        return $e;
      }),
      r.d(n, "groupBockedlist", function () {
        return Ze;
      }),
      r.d(n, "groupBlock", function () {
        return Qe;
      }),
      r.d(n, "groupUnblock", function () {
        return et;
      }),
      r.d(n, "groupKick", function () {
        return tt;
      }),
      r.d(n, "groupInvite", function () {
        return rt;
      }),
      r.d(n, "groupInviteHandle", function () {
        return nt;
      }),
      r.d(n, "groupInfoBatch", function () {
        return ot;
      }),
      r.d(n, "groupMembersDidpayname", function () {
        return it;
      }),
      r.d(n, "groupLeave", function () {
        return st;
      }),
      r.d(n, "groupDisplayname", function () {
        return at;
      }),
      r.d(n, "groupFilelist", function () {
        return pt;
      }),
      r.d(n, "groupFiledelete", function () {
        return ft;
      }),
      r.d(n, "groupFileupload", function () {
        return dt;
      }),
      r.d(n, "userAuthmode", function () {
        return lt;
      }),
      r.d(n, "userAvatar", function () {
        return ht;
      }),
      r.d(n, "userMobile", function () {
        return yt;
      }),
      r.d(n, "userNickname", function () {
        return gt;
      }),
      r.d(n, "userProfile", function () {
        return mt;
      }),
      r.d(n, "userProfilePost", function () {
        return vt;
      }),
      r.d(n, "userPush", function () {
        return bt;
      }),
      r.d(n, "userPushDetail", function () {
        return _t;
      }),
      r.d(n, "userPushLimit", function () {
        return wt;
      }),
      r.d(n, "userPushNickname", function () {
        return Et;
      }),
      r.d(n, "userSettings", function () {
        return At;
      }),
      r.d(n, "userSettingsPost", function () {
        return Ct;
      }),
      r.d(n, "userSounds", function () {
        return kt;
      }),
      r.d(n, "userVibratory", function () {
        return Nt;
      }),
      r.d(n, "fileForward", function () {
        return Ot;
      }),
      r.d(n, "fileUploadAvatarUrl", function () {
        return St;
      }),
      r.d(n, "fileUploadGroupAvatarUrl", function () {
        return Rt;
      }),
      r.d(n, "fileUploadChatFileUrl", function () {
        return Tt;
      }),
      r.d(n, "qrcode", function () {
        return xt;
      }),
      r.d(n, "qrlogin", function () {
        return It;
      }),
      r.d(n, "qrcodeGroupsign", function () {
        return Dt;
      }),
      r.d(n, "qrcodeGroupinvite", function () {
        return Ut;
      }),
      r.d(n, "getStaticContact", function () {
        return Mt;
      });
    var o = {};
    r.r(o),
      r.d(o, "STATIC_FRAME_VSN", function () {
        return Bt;
      }),
      r.d(o, "STATIC_FRAME_COMMAND", function () {
        return Pt;
      }),
      r.d(o, "STATIC_FRAME_COMPRESS_METHOD", function () {
        return jt;
      }),
      r.d(o, "STATIC_FRAME_ERROR_STATUC", function () {
        return Ft;
      }),
      r.d(o, "STATIC_FRAME_OSTYPE", function () {
        return Lt;
      }),
      r.d(o, "STATIC_FRAME_ENCRYPTMETHOD", function () {
        return Gt;
      }),
      r.d(o, "STATIC_META_NAMESPACE", function () {
        return qt;
      }),
      r.d(o, "STATIC_MESSAGE_OPTYPE", function () {
        return Yt;
      }),
      r.d(o, "STATIC_MESSAGE_TYPE", function () {
        return Jt;
      }),
      r.d(o, "STATIC_MESSAGE_CONTENT_TYPE", function () {
        return Kt;
      }),
      r.d(o, "STATIC_MESSAGE_QOS", function () {
        return Ht;
      }),
      r.d(o, "STATIC_GROUPNOTICE_TYPE", function () {
        return Vt;
      }),
      r.d(o, "STATIC_INFO_NETWORK", function () {
        return zt;
      }),
      r.d(o, "STATIC_USERNOTICE_TYPE", function () {
        return Wt;
      }),
      r.d(o, "STATIC_ROSTERNONTICE_TYPE", function () {
        return Xt;
      });
    var i = {};
    r.r(i),
      r.d(i, "decode", function () {
        return Mr;
      }),
      r.d(i, "encode", function () {
        return Br;
      });
    var s = {};
    r.r(s),
      r.d(s, "decode", function () {
        return cn;
      }),
      r.d(s, "encode", function () {
        return pn;
      });
    var a = {};
    r.r(a),
      r.d(a, "decode", function () {
        return yn;
      }),
      r.d(a, "encode", function () {
        return gn;
      });
    var u = r(61),
      c = r.n(u),
      p = r(6),
      f = r.n(p);
    const d = () => {};
    var l = { error: d, log: d, info: d, warn: d, dir: d, req: d },
      h = r(3),
      y = r.n(h);
    const g = (e) => {
        if (e instanceof y.a) return e;
        const t = typeof e;
        if ("bool" === t || "string" === t || "number" === t) return e;
        if (Array.isArray(e)) {
          const t = [];
          return (
            e.forEach((e) => {
              void 0 !== e && t.push(g(e));
            }),
            t
          );
        }
        const r = {};
        return (
          Object.keys(e).forEach((t) => {
            void 0 !== e[t] && (r[t] = g(e[t]));
          }),
          r
        );
      },
      m = (e) => {
        const { low: t, high: r } = e;
        if (void 0 !== t && void 0 !== r) {
          return new y.a(t, r, !0);
        }
        const n = typeof e;
        if ("bool" === n || "string" === n || "number" === n) return e;
        if (Array.isArray(e)) {
          const t = [];
          return (
            e.forEach((e) => {
              t.push(m(e));
            }),
            t
          );
        }
        const o = {};
        return (
          Object.keys(e).forEach((t) => {
            o[t] = m(e[t]);
          }),
          o
        );
      },
      v = (e = 0) => {
        if ("string" == typeof e) return e - 0;
        if ("number" == typeof e) return e;
        const { low: t, high: r, unsigned: n = !0 } = e;
        return void 0 !== t && "undefined" !== r
          ? new y.a(t, r, n).toNumber()
          : void 0;
      },
      b = (e) => {
        if ("string" == typeof e) return y.a.fromString(e);
        const { low: t, high: r, unsigned: n = !0 } = e;
        return void 0 !== t && "undefined" !== r
          ? new y.a(t, r, n)
          : "number" == typeof e
          ? y.a.fromNumber(e)
          : new y.a();
      },
      _ = (e) =>
        "string" == typeof e
          ? e
          : "number" == typeof e
          ? e + ""
          : void 0 !== e.low && void 0 !== e.high
          ? new y.a(e.low, e.high, !0).toString()
          : new y.a(e).toString(),
      w = (e) => {
        if (!e.payload) return e;
        const {
            payload: t,
            from: r = {},
            to: n = {},
            id: o = {},
            timestamp: i,
          } = e,
          {
            content: s = "",
            attachment: a = "",
            ctype: u = 0,
            ext: c,
            config: p,
            type: f,
          } = t;
        let d = null,
          l = null,
          h = null;
        try {
          d = JSON.parse(a);
        } catch (e) {}
        try {
          l = JSON.parse(c);
        } catch (e) {}
        try {
          h = JSON.parse(p);
        } catch (e) {}
        let y = {
          id: _(o),
          from: _(r.uid),
          to: _(n.uid),
          content: s,
          type: ["text", "image", "audio", "video", "file", "location"][u],
          timestamp: _(i || 0),
          toType: 2 == f ? "roster" : "group",
        };
        return d && (y.attach = d), l && (y.ext = l), h && (y.config = h), y;
      },
      E = (e) => {
        let t = [];
        return (
          e.forEach((e) => {
            t.push(w(e));
          }),
          t
        );
      },
      A = () => {
        let e = window.localStorage.getItem("key_user_id");
        if (e) return e - 0;
      },
      C = (e, t, r = !0) => {
        if (void 0 === t || void 0 === e)
          return void l.error("localstorage save error:", e, t);
        const n = A();
        if ((r && (e = n + "_" + e), "string" == typeof t))
          return void window.localStorage.setItem(e, t);
        let o;
        o = Array.isArray(t) ? { dddataaa: t } : t;
        try {
          const t = JSON.stringify(o);
          t && window.localStorage.setItem(e, t);
        } catch (r) {
          l.error("stringify error:", r, e, t);
        }
      },
      k = (e, t = !0) => {
        if (void 0 === e) return void l.error("localstorage get error:", e);
        const r = A();
        if (t) var n = r + "_" + e;
        else n = e;
        const o = window.localStorage.getItem(n);
        if (!o) return;
        let i = o;
        try {
          i = JSON.parse(o);
        } catch (e) {}
        return (i = m(i)), i.dddataaa || i;
      },
      N = (e) => {
        var t = A() + "_" + e;
        window.localStorage.removeItem(e), window.localStorage.removeItem(t);
      },
      O = {
        saveJoinedGroups: (e) => {
          if (!e) return;
          Array.isArray(e) || (e = [e]);
          const t = e.map((e) => e.group_id || e),
            r = k("key_group_lists") || [],
            n = Array.from(new Set(t.concat(r)));
          C("key_group_lists", n);
        },
        removeGroup: (e) => {
          const t = k("key_group_lists") || [],
            r = t.findIndex((t) => t === e);
          r >= 0 && (t.splice(r, 1), C("key_group_lists", t));
        },
        getJoinedGroups: () => k("key_group_lists"),
        removeJoinedGroups: () => N("key_group_lists"),
        saveGroupInfo: (e) => {
          Array.isArray(e) || (e = [e]);
          const t = k("key_group_infos") || {};
          e.forEach((e) => {
            const r = {},
              { group_id: n } = e;
            Object.keys(e).forEach((t) => {
              void 0 !== e[t] && (r[t] = e[t]);
            }),
              (t[n] = t[n] || {}),
              Object.assign(t[n], r);
          }),
            C("key_group_infos", t);
        },
        getGroupInfo: (e) => {
          const t = k("key_group_infos")[e] || {};
          return Object.assign(t, { group_id: e });
        },
        getGroupInfoList: () => {
          const e = O.getJoinedGroups() || [],
            t = O.getAllGroupInfos() || {},
            r = [];
          return (
            e.forEach((e) => {
              const n = t[e] || {};
              r.push(Object.assign({}, n, { group_id: e }));
            }),
            r
          );
        },
        getAllGroupInfos: () => k("key_group_infos") || {},
        saveGroupMembers: (e, t, r) => {
          Array.isArray(t) || (t = [t]);
          const n = k("key_group_members") || {},
            o = n[e] || [];
          if (r) return (n[e] = t), void C("key_group_members", n);
          t.forEach((e) => {
            o.findIndex((t) => t === e) < 0 && o.push(e);
          }),
            (n[e] = o);
        },
        removeGroupMembers: (e, t) => {
          const r = (k("key_group_members") || {})[e] || [];
          t.forEach((e) => {
            const t = r.findIndex((t) => t === e);
            t >= 0 && r.splice(t, 1);
          }),
            C("key_group_members", r);
        },
        getGroupMembers: (e) => (k("key_group_members") || {})[e] || [],
      };
    var S = O;
    const R = () => {
      let e = window.localStorage.getItem("key_user_id");
      if (e) return e - 0;
    };
    var T = {
      saveToken: (e) => C("key_user_token", e),
      getToken: () => k("key_user_token"),
      deleteToken: () => N("key_user_token"),
      getAesKey: () => k("key_user_aes_key"),
      saveAesKey: (e) => C("key_user_aes_key", e),
      saveDeviceSN: (e) => C("key_user_device_sn", e),
      getDeviceSN: () => {
        let e = k("key_user_device_sn");
        return (
          e || (e = 999999999 + Math.floor(214e4 * Math.random()) + ""), e - 0
        );
      },
      deleteDeviceSN: () => N("key_user_device_sn"),
      saveUid: (e) => {
        if (!e) throw (l.error("uid error:", e), new Error("uid is error ..."));
        window.localStorage.setItem("key_user_id", e + "");
      },
      getUid: R,
      removeUid: () => {
        N("key_user_id");
      },
      getDeviceGuid: () => {
        if (!R()) return "";
        let e = k("key_user_device_guid");
        return (
          e ||
            ((e = R() + "_" + Math.floor(2147483648 * Math.random())),
            C("key_user_device_guid", e)),
          e
        );
      },
      saveProfile: (e) => C("key_user_profile", e),
      getProfile: () => k("key_user_profile"),
      clear: () => {
        window.localStorage.clear();
      },
      saveAppid: (e) => {
        if (!e) throw (l.error("uid error:", e), new Error("uid is error ..."));
        window.localStorage.setItem("key_app_id", e + "");
      },
      getAppid: () => window.localStorage.getItem("key_app_id") || "",
    };
    const x = {},
      I = (e) => (void 0 === x[e] && (x[e] = []), x[e]),
      D = (e, t) => {
        const r = I(e).findIndex((e) => e.toString() === t.toString());
        r > -1 && I(e).splice(r, 1), I(e).push(t);
      },
      U = (e, t) => {
        const r = I(e).findIndex((e) => e.toString() === t.toString());
        r >= 0 && x[e].splice(r, 1);
      },
      M = (e, t) => {
        I(e).forEach((e) => {
          e(t);
        });
      };
    var B = {
      saveRecent: (e) => {
        if (
          ((e) => {
            const { ext: t } = e;
            let r = {};
            try {
              r = JSON.parse(t);
            } catch (e) {}
            if (void 0 !== r.input_status) {
              r.input_status;
              return !0;
            }
            return !1;
          })(e)
        )
          return;
        const {
          from: t,
          to: r,
          type: n,
          toType: o,
          attach: i,
          ext: s,
          timestamp: a,
        } = e;
        let u = e.content;
        if (!u && !i)
          return void (
            s &&
            s.typing &&
            M("onInputStatusMessage", { from: t, to: r, ext: s })
          );
        "text" != n && (u = n);
        let c = v(r);
        const p = T.getUid();
        c === p && (c = v(t));
        const f = k("key_recent_store") || [],
          d = f.findIndex((e) => e.type === o && e.id === c);
        d > -1 && f.splice(d, 1),
          f.unshift({ type: o, id: c, content: u, timestamp: a }),
          C("key_recent_store", f),
          M("recentlistUpdate");
      },
      saveUnreadRecent: (e, t) => {
        e.forEach((e) => {
          const r = t,
            n = k("key_recent_store") || [];
          let o = "",
            i = "";
          const s = n.findIndex((t) => t.type === r && t.id === e);
          s > -1 && ((o = n[s].content), (i = n[s].timestamp), n.splice(s, 1)),
            n.unshift({ type: r, id: e, content: o, timestamp: i }),
            C("key_recent_store", n);
        }),
          M("recentlistUpdate");
      },
      getRecents: () => {
        const e = k("key_recent_store") || [],
          t = e.filter((e) => "roster" == e.type).map((e) => e.id);
        return M("imGetRecent", t), e;
      },
      deleteRecentById(e) {
        const t = k("key_recent_store") || [],
          r = t.findIndex((t) => t.id + "" == e + "");
        r >= 0 && t.splice(r, 1), C("key_recent_store", t);
      },
    };
    const P = {
      saveSendingRosterMessage: (e) => {
        const t = k("key_roster_sending_message") || [];
        t.push(e);
        const r = t.length;
        r > 100 && t.splice(0, r - 100), C("key_roster_sending_message", t);
      },
      dealSendedRosterMessage: (e) => {
        const { client_mid: t, server_mid: r } = e,
          n = k("key_roster_sending_message") || [];
        if (!r) {
          l.log(
            "===================== there is something error:=============="
          ),
            l.log(e);
          const r = n.findIndex((e) => v(e.id) === v(t));
          if (r > -1) {
            (k("key_roster_sending_message") || []).splice(r, 1);
          }
          return;
        }
        const o = n.findIndex((e) => v(e.id) === v(t));
        if (o > -1) {
          const e = n[o];
          (e.id = r),
            P.saveRosterMessage(w(e)),
            n.splice(o, 1),
            C("key_roster_sending_message", n),
            M("onRosterMessage", w(e));
        }
      },
      saveRosterMessage: (e) => {
        const { from: t, to: r, type: n, id: o } = e;
        if ("command" == n || "forward" == n) return;
        const i = v(t),
          s = v(T.getUid()),
          a = v(r),
          u = b(o);
        let c = i === s ? a : i;
        (e.toType = "roster"), B.saveRecent(e);
        const p = k("key_roster_message_store") || {};
        if (((p[c] = p[c] || []), p[c].length > 0)) {
          const t = p[c][0],
            r = p[c][p[c].length - 1],
            n = u.comp(b(t.id) || 0),
            o = u.comp(b(r.id) || 0);
          if (-1 === n) p[c].unshift(e);
          else if (1 === o) p[c].push(e);
          else {
            let t = -1;
            for (var f = 0; f < p[c].length - 2; f += 1) {
              const e = u.comp(b(p[c][f].id)),
                r = u.comp(b(p[c][f + 1].id));
              1 === e && -1 === r && (t = f);
            }
            t > -1 && p[c].splice(t, 0, e);
          }
        } else p[c].push(e);
        const d = p[c].length;
        d > 100 && p[c].splice(0, d - 100), C("key_roster_message_store", p);
      },
      getRosterMessage: (e) => (k("key_roster_message_store") || {})[e] || [],
      saveFormatedRosterMessage: (e, t = []) => {
        const r = k("key_roster_message_store") || {};
        (r[e] = t), C("key_roster_message_store", r);
      },
      getRosterUnreadMessageIdsByRosterid: (e) => {
        const t = (k("key_roster_message_store") || {})[e] || [],
          r = [];
        return (
          t.forEach((e) => {
            const { r: t = !1, id: n } = e;
            !t && r.push(n);
          }),
          r
        );
      },
      deleteRosterMessageByRosterId: (e) => {
        const t = k("key_roster_message_store") || {},
          r = t[e];
        let n = [];
        r.forEach((e) => {
          n.push(_(e.id));
        }),
          P.deleteAcks(n),
          delete t[e],
          C("key_roster_message_store", t);
      },
      deleteSingleRosterMessage: (e) => {
        const t = k("key_roster_message_store") || {};
        (e = _(e)),
          Object.keys(t).forEach((r) => {
            const n = t[r] || [],
              o = n.findIndex((t) => _(t.id) === e);
            o > -1 &&
              (n.splice(o, 1), (t[r] = n), C("key_roster_message_store", t));
          });
      },
      saveSendingGroupMessage: (e) => {
        const t = k("key_group_sending_message") || [];
        t.push(e);
        const r = t.length;
        r > 100 && t.splice(0, r - 100), C("key_group_sending_message", t);
      },
      dealSendedGroupMessage: (e) => {
        const { client_mid: t, server_mid: r } = e,
          n = k("key_group_sending_message") || [],
          o = n.findIndex((e) => v(e.id) === v(t));
        if (o > -1) {
          const e = n[o];
          (e.id = r),
            P.saveGroupMessage(w(e)),
            n.splice(o, 1),
            C("key_group_sending_message", n),
            M("onGroupMessage", w(e));
        }
      },
      saveGroupMessage: (e) => {
        const { to: t, type: r, id: n } = e;
        if ("command" == r || "forward" == r) return;
        const o = v(t);
        (e.toType = "group"), B.saveRecent(w(e));
        const i = b(n),
          s = k("key_group_message_store") || {};
        if (((s[o] = s[o] || []), s[o].length > 0)) {
          const t = s[o][0],
            r = s[o][s[o].length - 1],
            n = i.comp(b(t.id)),
            u = i.comp(b(r.id));
          if (-1 === n) s[o].unshift(e);
          else if (1 === u) s[o].push(e);
          else {
            let t = -1;
            for (var a = 0; a < s[o].length - 2; a += 1) {
              const e = i.comp(b(s[o][a].id)),
                r = i.comp(b(s[o][a + 1].id));
              1 === e && -1 === r && (t = a);
            }
            t > -1 && s[o].splice(t, 0, e);
          }
        } else s[o].push(e);
        const u = s[o].length;
        u > 100 && s[o].splice(0, u - 100), C("key_group_message_store", s);
      },
      getGroupMessage: (e) =>
        (k("key_group_message_store") || {})[e + ""] || [],
      getGroupUnreadMessageIdsByGid: (e) => {
        const t = (k("key_group_message_store") || {})[e] || [],
          r = [];
        return (
          t.forEach((e) => {
            const { r: t = !1, id: n } = e;
            !t && r.push(n);
          }),
          r
        );
      },
      readGroupMessageByGid(e) {
        const t = k("key_group_message_store") || {},
          r = t[e] || [];
        r.forEach((e) => {
          e.r = 1;
        }),
          (t[e] = r),
          C("key_group_message_store", t),
          M("onUnreadChange");
      },
      deleteGroupMessageByGid: (e) => {
        const t = k("key_group_message_store") || {};
        delete t[e], C("key_roster_message_store", t);
      },
      deleteSingleGroupMessage: (e) => {
        const t = k("key_group_message_store") || {};
        (e = _(e)),
          Object.keys(t).forEach((r) => {
            const n = t[r] || [],
              o = n.findIndex((t) => _(t.id) === e);
            if (o > -1)
              return (
                n.splice(o, 1), (t[r] = n), void C("key_group_message_store", t)
              );
          });
      },
      saveAck: (e, t) => {
        e = _(e);
        const r = k("key_message_ack") || {},
          n = _(e);
        (2 === r[n] && 1 === t) || ((r[n] = t), C("key_message_ack", r));
      },
      getAllAck: () => k("key_message_ack"),
      deleteAcks: (e) => {
        Array.isArray(e) || (e = [e]);
        const t = P.getItem("key_message_ack");
        e.forEach((e) => {
          (e = _(e)), delete t[e];
        }),
          C("key_message_ack", t);
      },
      getUnreadByRosterId: (e) => {
        const t = P.getRosterMessage(e) || [];
        let r = 0;
        const n = P.getAllAck() || {},
          o = T.getUid();
        return (
          t.forEach((e) => {
            const { from: t, id: i } = e,
              s = v(t),
              a = _(i),
              u = n[a];
            s > 0 && s !== o && 2 != u && r++;
          }),
          r
        );
      },
      getUnreadByGroupId: (e) => {
        const t = P.getGroupMessage(e) || [];
        let r = 0;
        const n = P.getAllAck() || {},
          o = T.getUid();
        return (
          t.forEach((e) => {
            const { from: t, id: i } = e,
              s = v(t),
              a = _(i),
              u = n[a];
            s > 0 && s !== o && 2 != u && r++;
          }),
          r
        );
      },
      getMessageByMid: (e) => {
        const t = k("key_group_message_store") || {},
          r = k("key_roster_message_store") || {};
        for (var n in t) {
          const r = t[n];
          if (r && r.length) {
            const t = r.find((t) => t.id == e);
            if (t) return t;
          }
        }
        for (var o in r) {
          const t = r[o];
          if (t && t.length) {
            const r = t.find((t) => t.id == e);
            if (r) return r;
          }
        }
      },
    };
    var j = P;
    var F = {
      saveNotice: (e) => {
        const t = k("key_notice_store") || [];
        t.push(e);
        const r = t.length;
        r > 50 && t.splice(0, r - 50), C("key_notice_store", t);
      },
      getNotice: () => k("key_notice_store") || [],
      removeNotice: () => {},
    };
    const L = {
      saveRosterList: (e = []) => {
        Array.isArray(e) || (e = [e]);
        const t = e.map((e) => e.roster_user_id || e.user_id || e),
          r = L.getRosterList() || [],
          n = Array.from(new Set(r.concat(t)));
        C("key_roster_lists", n), L.saveRosterInfo(e);
      },
      getRosterList: () => k("key_roster_lists"),
      getRosterInfoList: () => {
        const e = L.getRosterList() || [],
          t = L.getAllRosterInfos() || {},
          r = [];
        return (
          e.forEach((e) => {
            const n = t[e] || {};
            r.push(Object.assign({}, n, { user_id: e }));
          }),
          r
        );
      },
      removeRoster: (e) => {
        const t = L.getRosterList(),
          r = t.indexOf(e);
        r >= 0 && t.splice(r, 1), C("key_roster_lists", t);
      },
      removeRosterList: () => N("key_roster_lists"),
      saveRosterInfo: (e = []) => {
        Array.isArray(e) || (e = [e]);
        const t = L.getAllRosterInfos() || {};
        e.forEach((e) => {
          const { user_id: r } = e,
            n = {};
          Object.keys(e).forEach((t) => {
            const r = e[t];
            void 0 !== r && (n[t] = r);
          }),
            r && ((t[r] = t[r] || {}), Object.assign(t[r], n));
        }),
          C("key_roster_infos", t);
      },
      getRosterInfo: (e) => {
        let t = (k("key_roster_infos") || {})[e];
        return t && Object.assign(t, { user_id: e });
      },
      getAllRosterInfos: () => k("key_roster_infos"),
    };
    var G = L,
      q = r(62),
      J = r.n(q);
    const Y = (e, t) => (t && e ? e + "_" + t : ""),
      K = (e) => {
        if (!e) return {};
        const t = (H("ws") || {}).ws,
          r = k(Y("key_dns_infos", e), !1) || {},
          { clusters: n, clusterIndex: o, ratelIndex: i, fireIndex: s } = r;
        if (!n || !n.length) return {};
        const a = n[o],
          u = a.ratel[i],
          c = a.ws[s];
        if (!u || !c) return {};
        const p = u.protocol + "://" + u.host;
        let f = "https";
        return (
          (f = t ? ("https" === c.protocol ? "wss" : "ws") : c.protocol),
          { ratel: p, fireplace: f + "://" + c.host }
        );
      },
      H = (e) => {
        if (!e) return "";
        k("key_dns_config" + e, !1);
      },
      V = (e, t) => {
        e && t && C("key_dns_config_" + e, t, !1);
      };
    var z = {
      remove: (e) => {
        N(Y("key_dns_infos", e));
      },
      asyncGetDns: (e, t, r) => {
        V("dns_server", e), V("app_id", t), V("ws", r);
        const n = K(t);
        if (n.ratel) return Promise.resolve(n);
        const o = e + "?app_id=" + t;
        return f.a
          .get(o)
          .then((e) => {
            const { data: r = {} } = e,
              { data: n, code: o, message: i } = r;
            return 200 === o
              ? (l.log("get dns from server success,", n),
                ((e, t) => {
                  if (!e) return {};
                  let { recommend_cluster_id: r, clusters: n } = t;
                  const o = n.findIndex((e) => e.cluster_id == r),
                    i = {
                      clusters: n,
                      clusterIndex: o,
                      ratelIndex: 0,
                      fireIndex: 0,
                    };
                  C(Y("key_dns_infos", e), i, !1);
                })(t, n),
                K(t))
              : (l.log("get dns from server failure,", o, i), K(t));
          })
          .catch((e) => (l.log("get dns from server failure,", e), K(t)));
      },
      ratelError: () => {
        const e = H("app_id"),
          t = k(Y("key_dns_infos", e), !1);
        let { clusters: r, clusterIndex: n, ratelIndex: o, fireIndex: i } = t;
        r[n].ratel.length === o + 1
          ? r.length === n + 1
            ? (N(Y("key_dns_infos", e)), window.location.reload())
            : C(
                Y("key_dns_infos", e),
                {
                  clusters: r,
                  clusterIndex: n + 1,
                  ratelIndex: 0,
                  fireIndex: 0,
                },
                !1
              )
          : (o++,
            C(
              Y("key_dns_infos", e),
              { clusters: r, clusterIndex: n, ratelIndex: o, fireIndex: i },
              !1
            ));
      },
      fireError: () => {
        const e = H("app_id"),
          t = k(Y("key_dns_infos", e), !1);
        let { clusters: r, clusterIndex: n, ratelIndex: o, fireIndex: i } = t;
        r[n].ws.length === i + 1
          ? r.length === n + 1
            ? (N(Y("key_dns_infos", e)), window.location.reload())
            : C(
                Y("key_dns_infos", e),
                {
                  clusters: r,
                  clusterIndex: n + 1,
                  ratelIndex: 0,
                  fireIndex: 0,
                },
                !1
              )
          : (i++,
            C(
              Y("key_dns_infos", e),
              { clusters: r, clusterIndex: n, ratelIndex: o, fireIndex: i },
              !1
            ));
      },
      getServers: K,
    };
    let X = { errTimer: null, errCount: 0 };
    D("refresh_ratel", (e) => {
      l.log("refresh ratel for app: ", e),
        ((e) => {
          const { ratel: t } = z.getServers(e) || {};
          t && (f.a.defaults.baseURL = t);
        })(e);
    });
    (f.a.defaults.timeout = 2e4),
      f.a.interceptors.request.use(
        (e) => {
          const t = T.getToken(),
            r = T.getAppid();
          r && (e.headers.common.app_id = r),
            t && (e.headers.common["access-token"] = t);
          const n = e.url;
          if (
            n.indexOf("token/user") > -1 ||
            n.indexOf("qr_code") > -1 ||
            n.indexOf("qr_login") > -1 ||
            n.indexOf("app_dns") > -1 ||
            n.indexOf("app/captcha/image") > -1 ||
            n.indexOf("app/captcha/sms_web") > -1 ||
            n.indexOf("mobile_bind_with_sign") > -1 ||
            n.indexOf("app/user/info_pwd") > -1 ||
            n.indexOf("user/register") > -1
          )
            return e;
          if (t) return (e.headers.common["access-token"] = t), e;
          throw new Error("you should login ...");
        },
        (e) => Promise.reject(e)
      );
    const W = (e, t = "get", r = {}, n = [], o = !1) => {
        var i;
        (i = r).group_id && (i.group_id = i.group_id - 0),
          i.user_id && (i.user_id = i.user_id - 0),
          i.new_owner && (i.new_owner = i.new_owner - 0),
          i.apply_approval && (i.apply_approval = i.apply_approval - 0),
          i.duration && (i.duration = i.duration - 0),
          i.limit && (i.limit = i.limit - 0),
          i.version && (i.version = i.version - 0),
          i.announcement_id && (i.announcement_id = i.announcement_id - 0),
          i.user_list &&
            Array.isArray(i.user_list) &&
            (i.user_list = i.user_list.map((e) => e - 0)),
          i.user_list &&
            Array.isArray(i.user_list) &&
            (i.user_list = i.user_list.map((e) => e - 0)),
          i.file_list &&
            Array.isArray(i.file_list) &&
            (i.file_list = i.file_list.map((e) => e - 0));
        const s = ((e = {}, t = []) => {
          let r = [];
          return (
            t.forEach((t) => {
              if (
                ("string" == typeof t &&
                  void 0 === e[t] &&
                  r.push(t + " can not be null.."),
                Array.isArray(t))
              ) {
                let n = !1;
                t.forEach((t) => {
                  void 0 !== e[t] && (n = !0);
                }),
                  n || r.push(t.join("、") + " can not be all null");
              }
            }),
            r
          );
        })((r = i), n);
        if (s.length) {
          const e = s.join(",");
          return Promise.reject(new Error(e));
        }
        l.log("========request=============", e, t, r);
        const a = t.toLowerCase();
        let u;
        return (
          "get" === a
            ? (u = { params: r })
            : o
            ? ((e += "?" + J.a.stringify(r)), (u = null))
            : (u = r),
          f.a[a](e, u)
            .then((t) => {
              X.errTimer && clearTimeout(X.errTimer),
                (X.errTimer = null),
                (X.errCount = 0);
              const { data: r = {} } = t,
                { data: n, code: o, message: i } = r;
              return 200 === o
                ? (l.log("======request success, ", e, n), n)
                : (l.req(e + "" == "" + i),
                  Promise.reject({ message: i, url: e }));
            })
            .catch(
              (e) => (
                X.errTimer && clearTimeout(X.errTimer),
                (X.errTimer = null),
                (X.errCount = X.errCount + 1),
                X.errCount >= 5
                  ? ((X.errCount = 0), z.ratelError())
                  : (X.errTimer = setTimeout(() => {
                      X.errCount = 0;
                    }, 18e5)),
                Promise.reject(e)
              )
            )
        );
      },
      $ = (e) => W("/token/user", "post", e, [["mobile", "name"], "password"]),
      Z = (e) => W("/token/id", "post", e, ["user_id", "password"]),
      Q = (e) => W("/user/register/v2", "post", e, ["username", "password"]),
      ee = (e) => W("/app/user/mobile_bind", "post", e, ["captcha", "mobile"]),
      te = (e) => W("/app/user/mobile_update", "post", e, ["mobile"]),
      re = (e) => W("/app/captcha/sms", "get", e, ["mobile"], !0),
      ne = (e) => W("/app/user/name_check", "get", e, ["username"], !0),
      oe = (e) => W("/app/user/mobile_bind", "post", e, ["captcha", "mobile"]),
      ie = (e) =>
        W("/app/user/mobile_bind_with_sign", "post", e, ["sign", "mobile"]),
      se = (e) => W("/app/user/info_pwd", "get", e, ["captcha", "mobile"], !0),
      ae = (e) => W("/app/captcha/image", "post", e, []),
      ue = (e) =>
        W(
          "/app/captcha/sms_web",
          "get",
          e,
          ["captcha", "image_id", "mobile"],
          !0
        ),
      ce = (e) => W("/roster/accept", "post", e, ["user_id"], !0),
      pe = (e) => W("/roster/apply", "post", e, ["user_id", "alias"]),
      fe = (e) => W("/roster/decline", "post", e, ["user_id"]),
      de = (e) => W("/roster/delete", "post", e, ["user_id"], !0),
      le = (e) => W("/roster/ext", "post", e, ["user_id", "ext"]),
      he = (e) => W("/roster/id", "get", e, ["user_id"]),
      ye = (e) => W("/roster/list", "get", e, []),
      ge = (e) => W("/roster/list", "post", e, ["list"]),
      me = (e) => W("/roster/name", "get", e, ["username"]),
      ve = (e) => W("/roster/apply/list", "get", e, ["cursor"], !0),
      be = (e) => W("/roster/blocked_list", "get", e, [""], !0),
      _e = (e) => W("/roster/block", "post", e, ["user_id"], !0),
      we = (e) => W("/roster/unblock", "post", e, ["user_id"], !0),
      Ee = (e) => W("/group/admin/add", "post", e, ["group_id", "user_list"]),
      Ae = (e) => W("/group/admin_list", "get", e, ["group_id"], !0),
      Ce = (e) =>
        W("/group/admin/remove", "post", e, ["group_id", "user_list"]),
      ke = (e) =>
        W("/group/announcement", "get", e, ["announcement_id", "group_id"]),
      Ne = (e) =>
        W(
          "/group/announcement/delete",
          "post",
          e,
          ["announcement_id", "group_id"],
          !0
        ),
      Oe = (e) =>
        W("/group/announcement/edit", "post", e, [
          "group_id",
          "content",
          "title",
        ]),
      Se = (e) => W("/group/announcement/list", "get", e, ["group_id"], !0),
      Re = (e) => W("/group/create", "post", e, ["name"]),
      Te = (e) => W("/group/destroy", "post", e, ["group_id"], !0),
      xe = (e) => W("/group/info", "get", e, ["group_id"]),
      Ie = (e) => W("/group/info/avatar", "post", e, ["group_id", "value"]),
      De = (e) =>
        W("/group/info/description", "post", e, ["group_id", "value"]),
      Ue = (e) => W("/group/info/name", "post", e, ["group_id", "value"]),
      Me = (e) => W("/group/member_list", "get", e, ["group_id"]),
      Be = (e) =>
        W("/group/msg/mute_mode", "post", e, ["group_id", "msg_mute_mode"]),
      Pe = (e) => W("/group/msg/not_disturb", "post", e, ["group_id", "value"]),
      je = () => W("/group/public_list", "get", {}, []),
      Fe = (e) => W("/group/banned_list", "get", e, ["group_id"]),
      Le = (e) =>
        W("/group/ban", "post", e, ["group_id", "duration", "user_list"]),
      Ge = (e) => W("/group/unban", "post", e, ["group_id", "user_list"]),
      qe = (e) => W("/group/settings", "get", e, ["group_id"]),
      Je = (e) =>
        W("/group/settings/allow_member_invitation", "post", e, [
          "group_id",
          "value",
        ]),
      Ye = (e) =>
        W("/group/settings/allow_member_modify", "post", e, [
          "group_id",
          "value",
        ]),
      Ke = (e) =>
        W("/group/settings/enable_read_ack", "post", e, ["group_id", "value"]),
      He = (e) =>
        W("/group/settings/history_visible", "post", e, ["group_id", "value"]),
      Ve = (e) =>
        W("/group/settings/require_admin_approval", "post", e, [
          "group_id",
          "apply_approval",
        ]),
      ze = (e) => W("/group/transfer", "post", e, ["group_id", "new_owner"]),
      Xe = (e) => W("/group/user_joined", "get", e),
      We = (e) => W("/group/apply", "post", e, ["group_id"]),
      $e = (e) =>
        W("/group/apply/handle", "post", e, [
          "approval",
          "group_id",
          "user_id",
        ]),
      Ze = (e) => W("/group/blocked_list", "get", e, ["group_id"]),
      Qe = (e) => W("/group/block", "post", e, ["user_list", "group_id"]),
      et = (e) => W("/group/unblock", "post", e, ["user_list", "group_id"]),
      tt = (e) => W("/group/kick", "post", e, ["user_list", "group_id"]),
      rt = (e) => W("/group/invite", "post", e, ["user_list", "group_id"]),
      nt = (e) =>
        W("/group/invite/handle", "post", e, [
          "approval",
          "user_id",
          "group_id",
        ]),
      ot = (e) => W("/group/info/batch", "post", e, ["group_list"]),
      it = (e) =>
        W("/group/members/display_name", "post", e, ["group_id", "user_list"]),
      st = (e) => W("/group/leave", "post", e, ["group_id"], !0),
      at = (e) => W("/group/display_name", "post", e, ["group_id", "value"]),
      ut = (e) => W("/group/application_list", "post", e, ["group_list"]),
      ct = () => W("/group/invitation_list", "get", {}, []),
      pt = (e) => W("/group/file/list", "get", e, ["group_id"], !0),
      ft = (e) => W("/group/file/delete", "post", e, ["file_list", "group_id"]),
      dt = (e) =>
        W("/group/file/upload", "post", e, ["name", "size", "url", "group_id"]),
      lt = (e) => W("/user/authmode", "post", e, ["value"], !0),
      ht = (e) => W("/user/avatar", "post", e, ["avatar"]),
      yt = (e) => W("/user/mobile", "post", e, ["mobile"], !0),
      gt = (e) => W("/user/nickname", "post", e, ["nick_name"], !0),
      mt = () => W("/user/profile", "get", {}, []),
      vt = (e) => W("/user/profile", "post", e, []),
      bt = (e) => W("/user/push", "post", e, ["value"]),
      _t = (e) => W("/user/push/detail", "post", e, ["value"]),
      wt = (e) =>
        W("/user/push/limit", "post", e, [
          "no_push_end_hour",
          "no_push_start_hour",
        ]),
      Et = (e) => W("/user/push/nickname", "post", e, ["value"]),
      At = () => W("/user/settings", "get", {}, []),
      Ct = (e) => W("/user/settings", "post", e, ["user_id"]),
      kt = (e) => W("/user/sounds", "post", e, ["value"]),
      Nt = (e) => W("/user/vibratory", "post", e, ["value"]),
      Ot = (e) =>
        W(
          "/file/upload/forward",
          "get",
          e,
          ["file_sign", "access-token", "to_id", "to_type"],
          !0
        ),
      St = (e) => W("/file/upload/avatar/user", "get", e, [], !0),
      Rt = (e) => W("/file/upload/avatar/group", "get", e, ["group_id"], !0),
      Tt = (e) =>
        W("/file/upload/chat", "get", e, ["file_type", "to_id", "to_type"], !0),
      xt = (e) => W("/app/qr_code", "get", e, []),
      It = (e) => W("/app/qr_login", "get", e, ["qr_code"]),
      Dt = (e) => W("/app/qrcode/group_sign", "get", e, ["group_id"], !0),
      Ut = (e) => W("/app/qrcode/group_invite", "get", e, ["qr_info"], !0),
      Mt = (e) => W("/app/support_staff", "get", e, [], !0),
      Bt = { XSYNC_V1: 0, XSYNC_V2: 1 },
      Pt = { UNREAD: 0, SYNC: 1, NOTICE: 2, PROVISION: 3 },
      jt = { NONE: 0, ZLIB: 1 },
      Ft = {
        UNKNOWN: 0,
        OK: 1,
        FAIL: 2,
        UNKNOWN_COMMAND: 3,
        PB_PARSER_ERROR: 4,
        DECRYPT_FAILURE: 5,
        PUBLIC_KEY_CHANGED: 6,
        INVALID_TOKEN: 7,
        INVALID_PARAMETER: 8,
        UNAUTHORIZED: 9,
        USER_FROZEN: 10,
        USER_MUTED: 11,
        WORD_CENSORED: 12,
        TOO_MANY_DEVICES: 13,
        ENCRYPT_METHOD_UNSUPPORTED: 14,
      },
      Lt = { UNKNOWN: 0, IOS: 1, ANDR: 2, WIN: 3, OSX: 4, LINUX: 5, WEB: 6 },
      Gt = { NONE: 0, AES_CBC_128: 1, AES_CBC_256: 2, CUSTOM: 3 },
      qt = {
        UNKNOWN: 0,
        MESSAGE: 1,
        GROUP_NOTICE: 2,
        ROSTER_NOTICE: 3,
        USER_NOTICE: 4,
        INFO: 5,
      },
      Jt = { NORMAL: 0, OPER: 1, CHAT: 2, GROUPCHAT: 3 },
      Yt = {
        UNKNOWN: 0,
        READ_ACK: 1,
        READ_ALL: 2,
        READ_CANCEL: 3,
        DELIVER_ACK: 4,
        RECALL: 5,
        DELETE: 6,
      },
      Kt = {
        TEXT: 0,
        IMAGE: 1,
        AUDIO: 2,
        VIDEO: 3,
        FILE: 4,
        LOCATION: 5,
        COMMAND: 6,
        FORWARD: 7,
      },
      Ht = { AT_LEAST_ONCE: 0, AT_MOST_ONCE: 1, EXACTLY_ONCE: 2 },
      Vt = {
        UNKNOWN: 0,
        PRESENCE: 1,
        ABSENCE: 2,
        CREATED: 3,
        DESTROYED: 4,
        JOINED: 5,
        LEAVED: 6,
        APPLYED: 7,
        APPLY_ACCEPTED: 8,
        APPLY_DECLINED: 9,
        INVITED: 10,
        INVITE_ACCEPTED: 11,
        INVITE_DECLINED: 12,
        KICKED: 13,
        BLOCKED: 14,
        UNBLOCKED: 15,
        OWNER_ASSIGNED: 16,
        ADMIN_GRANTED: 17,
        ADMIN_REVOKED: 18,
        MUTED: 19,
        UNMUTED: 20,
        BANNED: 21,
        UNBANNED: 22,
        INFO_UPDATED: 23,
        ANNOUNCEMENT_UPDATED: 24,
        MESSAGE_SETTING: 25,
        FILE_UPLOADED: 26,
        FILE_DELETED: 27,
        FILE_UPDATED: 28,
      },
      zt = {
        WIRE: 0,
        WIFI: 1,
        NET_2G: 2,
        NET_3G: 3,
        NET_4G: 4,
        NET_5G: 5,
        UNKNOWN: 6,
      },
      Xt = {
        UNKNOWN: 0,
        ADDED: 1,
        REMOVED: 2,
        ACCEPTED: 3,
        DECLINED: 4,
        BLOCKED: 5,
        UNBLOCKED: 6,
        APPLIED: 7,
        INFO_UPDATED: 8,
        MUTED: 9,
        UNMUTED: 10,
      },
      Wt = {
        UNKNOWN: 0,
        PASSWORD_CHANGED: 1,
        FROZEN: 2,
        REMOVED: 3,
        KICK_BY_SAME_DEVICE: 4,
        KICKED_BY_OTHER_DEVICE: 5,
        INFO_UPDATED: 6,
        DEVICE_LOGIN: 7,
        DEVICE_LOGOUT: 8,
        DEVICE_ADDED: 9,
        DEVICE_REMOVED: 10,
        CLUSTER_CHANGED: 11,
      },
      $t = function (e = {}) {
        this.uid = e.uid || 0;
        const t = void 0 === e.deviceSN ? T.getDeviceSN() : e.deviceSN;
        this.deviceSN = t;
      };
    ($t.prototype.setUid = function (e) {
      this.uid = e;
    }),
      ($t.prototype.setDeviceSN = function (e) {
        this.deviceSN = e;
      });
    var Zt = $t;
    function Qt(e) {
      const { operation: t = { type: Yt.UNKNOWN, mid: 0 } } = e;
      void 0 !==
        (e = Object.assign(
          {},
          { type: Jt.NORMAL, ctype: Kt.TEXT, content: "", operation: t },
          e
        )).type && (this.type = e.type),
        void 0 !== e.from && (this.from = e.from),
        void 0 !== e.to && (this.to = e.to),
        void 0 !== e.content && (this.content = e.content),
        void 0 !== e.ctype && (this.ctype = e.ctype),
        void 0 !== e.operation && (this.operation = e.operation),
        void 0 !== e.config && (this.config = e.config),
        void 0 !== e.attachment && (this.attachment = e.attachment),
        void 0 !== e.ext && (this.ext = e.ext),
        void 0 !== e.qos && (this.qos = e.qos);
    }
    Qt.prototype = {
      setType: function (e) {
        this.type = e;
      },
      setFrom: function (e) {
        this.from = e;
      },
      setTo: function (e) {
        this.to = e;
      },
      setContent: function (e) {
        this.content = e;
      },
      setCtype: function (e) {
        this.ctype = e;
      },
      setOperation: function (e) {
        this.operation = e;
      },
      setConfig: function (e) {
        this.config = e;
      },
      setAttachment: function (e) {
        this.attachment = e;
      },
      setExt: function (e) {
        this.ext = e;
      },
      setQos: function (e) {
        this.qos = e;
      },
    };
    var er = Qt;
    function tr(e) {
      void 0 !==
        (e = Object.assign(
          {},
          { vsn: Bt.XSYNC_V1, compress_method: jt.NONE },
          e
        )).vsn && (this.vsn = e.vsn),
        void 0 !== e.compress_method &&
          (this.compress_method = e.compress_method),
        void 0 !== e.command && (this.command = e.command),
        void 0 !== e.payload && (this.payload = e.payload),
        void 0 !== e.encrypt_method && (this.encrypt_method = e.encrypt_method),
        void 0 !== e.encrypt_key && (this.encrypt_key = e.encrypt_key);
    }
    tr.prototype = {
      setVsn: function (e) {
        this.vsn = e;
      },
      setCompressmethod: function (e) {
        this.compress_method = e;
      },
      setCommond: function (e) {
        this.command = e;
      },
      setPayload: function (e) {
        this.payload = e;
      },
      setEncryptmethod: function (e) {
        this.encrypt_method = e;
      },
      setEncryptkey: function (e) {
        this.encrypt_key = e;
      },
    };
    var rr = tr;
    function nr(e) {
      void 0 !==
        (e = Object.assign({}, { encrypt_method: Gt.NONE, os_type: Lt.WEB }, e))
          .status && (this.status = e.status),
        void 0 !== e.xid && (this.xid = e.xid),
        void 0 !== e.encrypt_method && (this.encrypt_method = e.encrypt_method),
        void 0 !== e.encrypt_key && (this.encrypt_key = e.encrypt_key),
        void 0 !== e.password && (this.password = e.password),
        void 0 !== e.token && (this.token = e.token),
        void 0 !== e.os_type && (this.os_type = e.os_type),
        void 0 !== e.sdk_vsn && (this.sdk_vsn = e.sdk_vsn),
        void 0 !== e.is_manual_login &&
          (this.is_manual_login = e.is_manual_login),
        void 0 !== e.device_guid && (this.device_guid = e.device_guid),
        void 0 !== e.device_notifier &&
          (this.device_notifier = e.device_notifier),
        void 0 !== e.device_token && (this.device_token = e.device_token),
        void 0 !== e.device_info && (this.device_info = e.device_info);
    }
    nr.prototype = {
      setStatus: function (e) {
        this.status = e;
      },
      setXid: function (e) {
        this.xid = e;
      },
      setEncryptmethod: function (e) {
        this.encrypt_method = e;
      },
      setEncryptkey: function (e) {
        this.encrypt_key = e;
      },
      setPassword: function (e) {
        this.password = e;
      },
      setToken: function (e) {
        this.token = e;
      },
      setOstype: function (e) {
        this.os_type = e;
      },
      setSdkvsn: function (e) {
        this.sdk_vsn = e;
      },
      setIsmanuallogin: function (e) {
        this.is_manual_login = e;
      },
      setDeviceguid: function (e) {
        this.device_guid = e;
      },
      setDevicenotifier: function (e) {
        this.device_notifier = e;
      },
      setDevicetoken: function (e) {
        this.device_token = e;
      },
      setDeviceinfo: function (e) {
        this.device_info = e;
      },
    };
    var or = nr;
    function ir(e) {
      void 0 !== (e = Object.assign({}, e)).status && (this.status = e.status),
        void 0 !== e.metas && (this.metas = e.metas),
        void 0 !== e.next_key && (this.next_key = e.next_key),
        void 0 !== e.xid && (this.xid = e.xid),
        void 0 !== e.client_mid && (this.client_mid = e.client_mid),
        void 0 !== e.server_mid && (this.server_mid = e.server_mid),
        void 0 !== e.server_time && (this.server_time = e.server_time),
        void 0 !== e.is_full_sync && (this.is_full_sync = e.is_full_sync);
    }
    ir.prototype = {
      setStatus: function (e) {
        this.status = e;
      },
      setMetas: function (e) {
        this.metas = e;
      },
      setNextkey: function (e) {
        this.next_key = e;
      },
      setXid: function (e) {
        this.xid = e;
      },
      setClientmid: function (e) {
        this.client_mid = e;
      },
      setServermid: function (e) {
        this.server_mid = e;
      },
      setServertime: function (e) {
        this.server_time = e;
      },
      setIsfullsync: function (e) {
        this.is_full_sync = e;
      },
    };
    function sr(e) {
      void 0 !== (e = Object.assign({}, e)).xid && (this.xid = e.xid),
        void 0 !== e.key && (this.key = e.key),
        void 0 !== e.meta && (this.meta = e.meta),
        void 0 !== e.is_full_sync && (this.is_full_sync = e.is_full_sync),
        void 0 !== e.full_sync_num && (this.full_sync_num = e.full_sync_num);
    }
    sr.prototype = {
      setXid: function (e) {
        this.xid = e;
      },
      setKey: function (e) {
        this.key = e;
      },
      setMeta: function (e) {
        this.meta = e;
      },
      setIsfullsync: function (e) {
        this.is_full_sync = e;
      },
      setFullsyncnum: function (e) {
        this.full_sync_num = e;
      },
    };
    var ar = sr;
    function ur(e) {
      void 0 !== (e = Object.assign({}, e)).id && (this.id = e.id),
        void 0 !== e.from && (this.from = e.from),
        void 0 !== e.to && (this.to = e.to),
        void 0 !== e.timestamp && (this.timestamp = e.timestamp),
        void 0 !== e.ns && (this.ns = e.ns),
        void 0 !== e.payload && (this.payload = e.payload);
    }
    ur.prototype = {
      setId: function (e) {
        this.id = e;
      },
      setFrom: function (e) {
        this.from = e;
      },
      setTo: function (e) {
        this.to = e;
      },
      setTimestamp: function (e) {
        this.timestamp = e;
      },
      setNs: function (e) {
        this.ns = e;
      },
      setPayload: function (e) {
        this.payload = e;
      },
    };
    var cr = ur;
    let pr = T.getDeviceSN(),
      fr = T.getDeviceGuid();
    D("imReceiveUserNotice", (e) => {
      "kick" === e &&
        (l.log("user is kicked ... will new devicesn and guid, old Guid", fr),
        (pr = 0),
        (fr = 999999999 + Math.floor(214e4 * Math.random()) + ""),
        l.log("new Guid", fr));
    }),
      D("temporary_deviceSN", (e) => {
        pr = e;
      });
    const dr = (e) => {
        const t = new rr();
        t.setCommond(Pt.SYNC);
        const r = new ar();
        return (
          e.xid && r.setXid(e.xid),
          e.next_key && r.setKey(e.next_key),
          t.setPayload(r),
          t
        );
      },
      lr = (e) => {
        const { gid: t, content: r, type: n, attachment: o } = e;
        let i = Kt.TEXT;
        "image" === n
          ? (i = Kt.IMAGE)
          : "file" === n
          ? (i = Kt.FILE)
          : "audio" == n && (i = Kt.AUDIO);
        const s = new Zt({ uid: T.getUid() - 0, deviceSN: pr }),
          a = new Zt({ uid: t, deviceSN: 0 }),
          u = new rr();
        u.setCommond(Pt.SYNC);
        const c = new ar(),
          p = new er({
            from: s,
            to: a,
            content: r,
            ctype: i,
            type: Jt.GROUPCHAT,
          });
        i > 0 && o && (p.attachment = JSON.stringify(o));
        const f = new cr({
          id: new Date().getTime(),
          from: s,
          to: a,
          payload: p,
          ns: qt.MESSAGE,
          timestamp: new Date().getTime(),
        });
        return c.setMeta(f), u.setPayload(c), u;
      },
      hr = (e) => {
        const { uid: t, content: r, type: n, attachment: o } = e;
        M("imSendRosterMessage", e);
        let i = Kt.TEXT;
        "image" === n
          ? (i = Kt.IMAGE)
          : "file" === n
          ? (i = Kt.FILE)
          : "audio" == n && (i = Kt.AUDIO);
        const s = new Zt({ uid: T.getUid() - 0, deviceSN: pr }),
          a = new Zt({ uid: t - 0, deviceSN: 0 }),
          u = new rr();
        u.setCommond(Pt.SYNC);
        const c = new ar(),
          p = new er({ from: s, to: a, content: r, ctype: i, type: Jt.CHAT });
        i > 0 && o && (p.attachment = JSON.stringify(o));
        const f = new cr({
          id: new Date().getTime(),
          from: s,
          to: a,
          payload: p,
          ns: qt.MESSAGE,
          timestamp: new Date().getTime(),
        });
        return c.setMeta(f), u.setPayload(c), u;
      },
      yr = (e, t) => {
        e = b(e);
        const r = new rr();
        r.setCommond(Pt.SYNC);
        const n = new Zt({ uid: T.getUid(), deviceSN: pr }),
          o = new Zt({ uid: v(t), deviceSN: 0 }),
          i = new ar(),
          s = new er({
            from: n,
            to: o,
            ctype: Kt.COMMAND,
            type: Jt.OPER,
            operation: { type: Yt.READ_ACK, mid: e },
          }),
          a = new cr({
            id: new Date().getTime() + Math.floor(256 * Math.random()),
            from: n,
            to: o,
            payload: s,
            ns: qt.MESSAGE,
          });
        return i.setMeta(a), r.setPayload(i), r;
      },
      gr = (e, t) => {
        t = b(t);
        const r = new rr();
        r.setCommond(Pt.SYNC);
        const n = new Zt({ uid: T.getUid(), deviceSN: pr }),
          o = new Zt({ uid: v(e), deviceSN: 0 }),
          i = new ar(),
          s = new er({
            from: n,
            to: o,
            ctype: Kt.COMMAND,
            type: Jt.OPER,
            operation: { type: Yt.RECALL, mid: t },
          }),
          a = new cr({
            id: parseInt(
              new Date().getTime() + "" + Math.floor(256 * Math.random())
            ),
            from: n,
            to: o,
            payload: s,
            ns: qt.MESSAGE,
          });
        return i.setMeta(a), r.setPayload(i), r;
      },
      mr = (e, t, r) => {
        const { content: n, attach: o, type: i } = r;
        return e
          ? hr({ uid: e, content: n, type: i, attachment: o })
          : lr({ gid: t, content: n, type: i, attachment: o });
      },
      vr = {};
    let br = !1;
    const _r = (e) => {
        const { status: t = {} } = e,
          { code: r, reason: n } = t;
        return (
          r === Ft.OK ||
          void 0 === t.code ||
          (r === Ft.FAIL ||
            r === Ft.PUBLIC_KEY_CHANGED ||
            r === Ft.INVALID_TOKEN ||
            r === Ft.UNAUTHORIZED ||
            r === Ft.USER_FROZEN ||
            Ft.TOO_MANY_DEVICES,
          l.error("ret error ......code:", r, "...reason:", n),
          !1)
        );
      },
      wr = (e) => {
        const { unread: t = [] } = e;
        M("imReceivedUnread", t),
          t.forEach((e) => {
            const { xid: t, n: r } = e;
            r > 0 && M("sendMessage", dr({ xid: t, next_key: 0 }));
          });
      },
      Er = (e) => {
        const { xid: t } = e,
          { uid: r = 0 } = t;
        vr[r + ""]
          ? setTimeout(() => {
              (vr[r] = !1), Er(e);
            }, 3e3)
          : ((vr[r + ""] = !0),
            M(
              "sendMessage",
              ((e) => {
                e.uid = e.uid || 0;
                const t = new rr();
                t.setCommond(Pt.SYNC);
                const r = new ar();
                return r.setXid(e), t.setPayload(r), t;
              })(t)
            ));
      },
      Ar = (e) => {
        if (!_r(e))
          return void M("loginMessage", "login socket failure ......");
        const { xid: t = {} } = e,
          { deviceSN: r } = t;
        M("temporary_deviceSN", r),
          br || (r && T.saveDeviceSN(r)),
          M("loginMessage", "login socket success....."),
          M("onConnect", {}),
          M("sendMessage", { vsn: 0, compress_method: 0, command: 0 });
      },
      Cr = (e) => {
        if (!_r(e)) return;
        const { metas: t = [], xid: r, is_full_sync: n, client_mid: o } = e;
        if ((o && M("receivedSendMessage", o), o && v(o) > 0))
          return void setTimeout(() => {
            j.dealSendedRosterMessage(e), j.dealSendedGroupMessage(e);
          }, 20);
        let { next_key: i = 0 } = e;
        if (0 === i || 0 === v(i)) {
          const { uid: e = 0 } = r;
          delete vr[e + ""];
        }
        n
          ? (t && t.length && kr(t),
            M("onReceiveHistoryMsg", { messages: E(t), next: i }))
          : (t.length && kr(t),
            setTimeout(() => {
              M("onUnreadChange");
            }, 200),
            0 === i ||
              0 === v(i) ||
              M("sendMessage", dr({ xid: r, next_key: i })));
      },
      kr = (e = []) => {
        e.forEach((e) => {
          const { ns: t } = e;
          t === qt.UNKNOWN && l.log("received unknown message ...", e),
            t === qt.MESSAGE && Nr(e),
            t === qt.GROUP_NOTICE && Or(e),
            t === qt.ROSTER_NOTICE && Sr(e),
            t === qt.USER_NOTICE && Rr(e);
        });
      },
      Nr = (e) => {
        const { payload: t = {} } = e,
          { type: r, operation: n } = t;
        r === Jt.NORMAL && M("messageNormal", e),
          r === Jt.CHAT && M("imRosterMessage", e),
          r === Jt.GROUPCHAT && M("imGroupMessage", e),
          r === Jt.OPER &&
            (n.type === Yt.UNKNOWN && l.log("received unknown operation: ", e),
            (e.isReceive = !0),
            M("onActionMessage", e));
      },
      Or = (e) => {
        const { payload: t = {} } = e,
          { type: r } = t;
        r === Vt.UNKNOWN && l.log("received unknown groupnotice: ", e),
          r === Vt.PRESENCE && M("imGroupPresence", e),
          r === Vt.ABSENCE && M("imGroupAbesence", e),
          r === Vt.CREATED && M("imGroupCreated", e),
          r === Vt.DESTROYED && M("imGroupDestoryed", e),
          r === Vt.JOINED && M("imGroupJoined", e),
          r === Vt.APPLYED && M("imGroupApplyed", e),
          r === Vt.APPLY_ACCEPTED && M("imGroupApplyAccepted", e),
          r === Vt.APPLY_DECLINED && M("imGroupApplyDeclined", e),
          r === Vt.INVITED && M("imGroupInvited", e),
          r === Vt.INVITE_ACCEPTED && M("imGroupInvitedAccepted", e),
          r === Vt.INVITE_DECLINED && M("imGroupInvitedDeclined", e),
          r === Vt.KICKED && M("imGroupKicked", e),
          r === Vt.BANNED && M("imGroupBaned", e),
          r === Vt.UNBANNED && M("imGroupUnbaned", e),
          r === Vt.OWNER_ASSIGNED && M("imGroupOwnerAssigned", e),
          r === Vt.ADMIN_GRANTED && M("imGroupAdminGranted", e),
          r === Vt.ADMIN_REVOKED && M("imGroupAdminRevoked", e),
          r === Vt.BLOCKED && M("imGroupBlocked", e),
          r === Vt.UNBLOCKED && M("imGroupUnblocked", e),
          r === Vt.MUTED && M("imGroupMuted", e),
          r === Vt.UNMUTED && M("imGroupUnmuted", e),
          r === Vt.INFO_UPDATED && M("imGroupInfoUpdated", e),
          r === Vt.ANNOUNCEMENT_UPDATED && M("imGroupAnnouncementUpdated", e);
      },
      Sr = (e) => {
        const { payload: t = {} } = e,
          { type: r } = t;
        r === Xt.UNKNOWN && l.log("received unknown rosterNotice: ", e),
          r === Xt.ADDED && M("imRosterAdded", e),
          r === Xt.REMOVED && M("imRosterRemoved", e),
          r === Xt.ACCEPTED && M("imRosterAccepted", e),
          r === Xt.DECLINED && M("imRosterDeclined", e),
          r === Xt.BANNED && M("imRosterBaned", e),
          r === Xt.UNBANNED && M("imRosterUnbaned", e),
          r === Xt.INFO_UPDATED && M("imRosterInfoUpdated", e);
      },
      Rr = (e) => {
        const { payload: t = {} } = e,
          { type: r } = t;
        if (
          r === Wt.UNKNOWN ||
          r === Wt.PASSWORD_CHANGED ||
          r === Wt.FROZEN ||
          r === Wt.REMOVED ||
          r === Wt.KICKED_BY_OTHER_DEVICE ||
          r === Wt.DEVICE_REMOVED ||
          r === Wt.CLUSTER_CHANGED ||
          r === Wt.PASSWORD_CHANGED ||
          r === Wt.PASSWORD_CHANGED
        )
          return (
            T.deleteToken(), T.deleteDeviceSN(), void M("onReloginRequired", {})
          );
        r === Wt.UNKNOWN && l.log("received unknown userNotice: ", e);
        let n = "logout";
        r === Wt.KICK_BY_SAME_DEVICE && ((n = "kick"), (br = !0)),
          M("imReceiveUserNotice", n);
      };
    var Tr = (e) => {
        const { command: t = 0, payload: r } = e;
        t === Pt.UNREAD && wr(r),
          t === Pt.SYNC && Cr(r),
          t === Pt.NOTICE && Er(r),
          t === Pt.PROVISION && Ar(r);
      },
      xr = r(0),
      Ir = r.n(xr);
    (Ir.a.util.Long = y.a), Ir.a.configure();
    const Dr = (
      xr.roots.default || (xr.roots.default = new xr.Root())
    ).addJSON({
      top: {
        nested: {
          maxim: {
            nested: {
              protobuf: {
                nested: {
                  Frame: {
                    fields: {
                      vsn: { type: "VSN", id: 1 },
                      compress_method: { type: "CompressMethod", id: 2 },
                      command: { type: "Command", id: 3 },
                      payload: { type: "bytes", id: 4 },
                      encrypt_method: { type: "EncryptMethod", id: 5 },
                      encrypt_key: { type: "bytes", id: 6 },
                    },
                    nested: {
                      VSN: { values: { XSYNC_V1: 0, XSYNC_V2: 1 } },
                      Command: {
                        values: { UNREAD: 0, SYNC: 1, NOTICE: 2, PROVISION: 3 },
                      },
                      CompressMethod: { values: { NONE: 0, ZLIB: 1 } },
                      EncryptMethod: {
                        values: {
                          NONE: 0,
                          AES_CBC_128: 1,
                          AES_CBC_256: 2,
                          CUSTOM: 3,
                        },
                      },
                    },
                  },
                  Status: {
                    fields: {
                      code: { type: "ErrorCode", id: 1 },
                      reason: { type: "string", id: 2 },
                    },
                    nested: {
                      ErrorCode: {
                        values: {
                          UNKNOWN: 0,
                          OK: 1,
                          FAIL: 2,
                          UNKNOWN_COMMAND: 3,
                          PB_PARSER_ERROR: 4,
                          DECRYPT_FAILURE: 5,
                          PUBLIC_KEY_CHANGED: 6,
                          INVALID_TOKEN: 7,
                          INVALID_PARAMETER: 8,
                          UNAUTHORIZED: 9,
                          USER_FROZEN: 10,
                          USER_MUTED: 11,
                          WORD_CENSORED: 12,
                          TOO_MANY_DEVICES: 13,
                        },
                      },
                    },
                  },
                  ConversationUnread: {
                    fields: {
                      xid: { type: "XID", id: 1 },
                      n: { type: "uint32", id: 2 },
                      type: { type: "ConvType", id: 3 },
                    },
                    nested: {
                      ConvType: {
                        values: { UNKNOWN: 0, CHAT: 1, GROUPCHAT: 2 },
                      },
                    },
                  },
                  UnreadUL: { fields: {} },
                  UnreadDL: {
                    fields: {
                      status: { type: "Status", id: 1 },
                      unread: {
                        rule: "repeated",
                        type: "ConversationUnread",
                        id: 2,
                      },
                    },
                  },
                  SyncUL: {
                    fields: {
                      xid: { type: "XID", id: 1 },
                      key: { type: "uint64", id: 2 },
                      meta: { type: "Meta", id: 3 },
                      is_full_sync: { type: "bool", id: 4 },
                      full_sync_num: { type: "uint32", id: 5 },
                    },
                  },
                  SyncDL: {
                    fields: {
                      status: { type: "Status", id: 1 },
                      metas: { rule: "repeated", type: "Meta", id: 2 },
                      next_key: { type: "uint64", id: 3 },
                      xid: { type: "XID", id: 4 },
                      client_mid: { type: "uint64", id: 5 },
                      server_mid: { type: "uint64", id: 6 },
                      server_time: { type: "uint64", id: 7 },
                      is_full_sync: { type: "bool", id: 8 },
                    },
                  },
                  Notice: { fields: { xid: { type: "XID", id: 1 } } },
                  Provision: {
                    fields: {
                      status: { type: "Status", id: 1 },
                      xid: { type: "XID", id: 2 },
                      password: { type: "string", id: 5 },
                      token: { type: "string", id: 6 },
                      os_type: { type: "OsType", id: 7 },
                      sdk_vsn: { type: "string", id: 8 },
                      is_manual_login: { type: "bool", id: 9 },
                      device_guid: { type: "string", id: 10 },
                      device_notifier: { type: "string", id: 11 },
                      device_token: { type: "string", id: 12 },
                      device_info: { type: "string", id: 13 },
                    },
                    nested: {
                      OsType: {
                        values: {
                          UNKNOWN: 0,
                          IOS: 1,
                          ANDROID: 2,
                          WIN: 3,
                          OSX: 4,
                          LINUX: 5,
                          WEB: 6,
                        },
                      },
                    },
                  },
                  Meta: {
                    fields: {
                      id: { type: "uint64", id: 1 },
                      from: { type: "XID", id: 2 },
                      to: { type: "XID", id: 3 },
                      timestamp: { type: "uint64", id: 4 },
                      ns: { type: "NameSpace", id: 5 },
                      payload: { type: "bytes", id: 6 },
                    },
                    nested: {
                      NameSpace: {
                        values: {
                          UNKNOWN: 0,
                          MESSAGE: 1,
                          GROUP_NOTICE: 2,
                          ROSTER_NOTICE: 3,
                          USER_NOTICE: 4,
                          INFO: 5,
                        },
                      },
                    },
                  },
                  XID: {
                    fields: {
                      uid: { type: "uint64", id: 1 },
                      deviceSN: { type: "uint32", id: 2 },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
    const Ur = Ir.a.Root.fromJSON(Dr).lookupType(
        "top.maxim.protobuf.Provision"
      ),
      Mr = (e) => Ur.decode(e),
      Br = (e) => Ur.encode(e).finish();
    const Pr = Ir.a.Root.fromJSON(Dr).lookupType("top.maxim.protobuf.XID"),
      jr = (e) => Pr.decode(e),
      Fr = (e) => Pr.encode(e).finish(),
      Lr = (xr.roots.default || (xr.roots.default = new xr.Root())).addJSON({
        top: {
          nested: {
            maxim: {
              nested: {
                protobuf: {
                  nested: {
                    MessageOperation: {
                      fields: {
                        type: { type: "OpType", id: 1 },
                        mid: { type: "uint64", id: 2 },
                        xid: { type: "XID", id: 3 },
                      },
                      nested: {
                        OpType: {
                          values: {
                            UNKNOWN: 0,
                            READ_ACK: 1,
                            READ_ALL: 2,
                            READ_CANCEL: 3,
                            DELIVER_ACK: 4,
                            RECALL: 5,
                            DELETE: 6,
                          },
                        },
                      },
                    },
                    MessageBody: {
                      fields: {
                        type: { type: "Type", id: 1 },
                        from: { type: "XID", id: 2 },
                        to: { type: "XID", id: 3 },
                        content: { type: "string", id: 4 },
                        ctype: { type: "ContentType", id: 5 },
                        operation: { type: "MessageOperation", id: 6 },
                        config: { type: "string", id: 7 },
                        attachment: { type: "string", id: 8 },
                        ext: { type: "string", id: 9 },
                        qos: { type: "QoS", id: 10 },
                        sender_name: { type: "string", id: 11 },
                        is_system: { type: "bool", id: 12 },
                      },
                      nested: {
                        Type: {
                          values: { NORMAL: 0, OPER: 1, CHAT: 2, GROUPCHAT: 3 },
                        },
                        ContentType: {
                          values: {
                            TEXT: 0,
                            IMAGE: 1,
                            AUDIO: 2,
                            VIDEO: 3,
                            FILE: 4,
                            LOCATION: 5,
                            COMMAND: 6,
                            FORWARD: 7,
                          },
                        },
                        QoS: {
                          values: {
                            AT_LEAST_ONCE: 0,
                            AT_MOST_ONCE: 1,
                            EXACTLY_ONCE: 2,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });
    const Gr = Ir.a.Root.fromJSON(Lr).lookupType(
        "top.maxim.protobuf.MessageBody"
      ),
      qr = (e) => Gr.decode(e),
      Jr = (e) => Gr.encode(e).finish(),
      Yr = (xr.roots.default || (xr.roots.default = new xr.Root())).addJSON({
        top: {
          nested: {
            maxim: {
              nested: {
                protobuf: {
                  nested: {
                    GroupNotice: {
                      fields: {
                        type: { type: "Type", id: 1 },
                        gid: { type: "XID", id: 2 },
                        from: { type: "XID", id: 3 },
                        to: { rule: "repeated", type: "XID", id: 4 },
                        content: { type: "string", id: 5 },
                      },
                      nested: {
                        Type: {
                          values: {
                            UNKNOWN: 0,
                            PRESENCE: 1,
                            ABSENCE: 2,
                            CREATED: 3,
                            DESTROYED: 4,
                            JOINED: 5,
                            LEAVED: 6,
                            APPLYED: 7,
                            APPLY_ACCEPTED: 8,
                            APPLY_DECLINED: 9,
                            INVITED: 10,
                            INVITE_ACCEPTED: 11,
                            INVITE_DECLINED: 12,
                            KICKED: 13,
                            BLOCKED: 14,
                            UNBLOCKED: 15,
                            OWNER_ASSIGNED: 16,
                            ADMIN_GRANTED: 17,
                            ADMIN_REVOKED: 18,
                            MUTED: 19,
                            UNMUTED: 20,
                            BANNED: 21,
                            UNBANNED: 22,
                            INFO_UPDATED: 23,
                            ANNOUNCEMENT_UPDATED: 24,
                            MESSAGE_SETTING: 25,
                            FILE_UPLOADED: 26,
                            FILE_DELETED: 27,
                            FILE_UPDATED: 28,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });
    const Kr = Ir.a.Root.fromJSON(Yr).lookupType(
        "top.maxim.protobuf.GroupNotice"
      ),
      Hr = (e) => Kr.decode(e),
      Vr = (e) => {
        e.from = Fr(e.from);
        const t = [];
        return (
          (e.to || []).forEach((e) => {
            t.push(Fr(e));
          }),
          (e.to = t),
          Kr.encode(e).finish()
        );
      },
      zr = (xr.roots.default || (xr.roots.default = new xr.Root())).addJSON({
        top: {
          nested: {
            maxim: {
              nested: {
                protobuf: {
                  nested: {
                    RosterNotice: {
                      fields: {
                        type: { type: "Type", id: 1 },
                        from: { type: "XID", id: 2 },
                        to: { rule: "repeated", type: "XID", id: 3 },
                        content: { type: "string", id: 4 },
                        roster_vsn: { type: "string", id: 5 },
                      },
                      nested: {
                        Type: {
                          values: {
                            UNKNOWN: 0,
                            ADDED: 1,
                            REMOVED: 2,
                            ACCEPTED: 3,
                            DECLINED: 4,
                            BLOCKED: 5,
                            UNBLOCKED: 6,
                            APPLIED: 7,
                            INFO_UPDATED: 8,
                            MUTED: 9,
                            UNMUTED: 10,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });
    const Xr = Ir.a.Root.fromJSON(zr).lookupType(
        "top.maxim.protobuf.RosterNotice"
      ),
      Wr = (e) => Xr.decode(e),
      $r = (e) => Xr.encode(e).finish(),
      Zr = (xr.roots.default || (xr.roots.default = new xr.Root())).addJSON({
        top: {
          nested: {
            maxim: {
              nested: {
                protobuf: {
                  nested: {
                    UserNotice: {
                      fields: {
                        type: { type: "Type", id: 1 },
                        content: { type: "string", id: 2 },
                      },
                      nested: {
                        Type: {
                          values: {
                            UNKNOWN: 0,
                            PASSWORD_CHANGED: 1,
                            FROZEN: 2,
                            REMOVED: 3,
                            KICK_BY_SAME_DEVICE: 4,
                            KICKED_BY_OTHER_DEVICE: 5,
                            INFO_UPDATED: 6,
                            DEVICE_LOGIN: 7,
                            DEVICE_LOGOUT: 8,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });
    const Qr = Ir.a.Root.fromJSON(Zr).lookupType(
        "top.maxim.protobuf.UserNotice"
      ),
      en = (e) => Qr.decode(e),
      tn = (e) => Qr.encode(e).finish(),
      rn = (xr.roots.default || (xr.roots.default = new xr.Root())).addJSON({
        top: {
          nested: {
            maxim: {
              nested: {
                protobuf: {
                  nested: {
                    Info: {
                      fields: {
                        sdk_vsn: { type: "string", id: 1 },
                        network: { type: "Network", id: 2 },
                        content: { type: "string", id: 3 },
                      },
                      nested: {
                        Network: {
                          values: {
                            WIRE: 0,
                            WIFI: 1,
                            NET_2G: 2,
                            NET_3G: 3,
                            NET_4G: 4,
                            NET_5G: 5,
                            UNKNOWN: 6,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      });
    const nn = Ir.a.Root.fromJSON(rn).lookupType("top.maxim.protobuf.Info"),
      on = (e) => nn.decode(e),
      sn = (e) => nn.encode(e).finish();
    const an = Ir.a.Root.fromJSON(Dr).lookupType("top.maxim.protobuf.Meta");
    const un = Ir.a.Root.fromJSON(Dr).lookupType("top.maxim.protobuf.SyncUL"),
      cn = (e) => un.decode(e),
      pn = (e) => (
        e.meta &&
          (e.meta = ((e) => {
            const { ns: t, payload: r } = e;
            return (
              t === qt.MESSAGE && (e.payload = Jr(r)),
              t === qt.GROUP_NOTICE && (e.payload = Vr(r)),
              t === qt.ROSTER_NOTICE && (e.payload = $r(r)),
              t === qt.USER_NOTICE && (e.payload = tn(r)),
              t === qt.INFO && (e.payload = sn(r)),
              an.create(e)
            );
          })(e.meta)),
        un.encode(e).finish()
      );
    const fn = Ir.a.Root.fromJSON(Dr).lookupType("top.maxim.protobuf.UnreadDL"),
      dn = Ir.a.Root.fromJSON(Dr).lookupType("top.maxim.protobuf.SyncDL");
    const ln = Ir.a.Root.fromJSON(Dr).lookupType("top.maxim.protobuf.Notice");
    const hn = Ir.a.Root.fromJSON(Dr).lookupType("top.maxim.protobuf.Frame"),
      yn = (e) => {
        e = new Uint8Array(e);
        const t = hn.decode(e),
          { command: r, payload: n } = t;
        return (
          r === Pt.UNREAD
            ? (t.payload = ((e) => fn.decode(e))(n))
            : r === Pt.SYNC
            ? (t.payload = ((e) => {
                const t = dn.decode(e),
                  { metas: r = [] } = t,
                  n = [];
                return (
                  r.forEach((e) => {
                    const { ns: t, payload: r } = e;
                    t === qt.MESSAGE && (e.payload = qr(r)),
                      t === qt.GROUP_NOTICE && (e.payload = Hr(r)),
                      t === qt.ROSTER_NOTICE && (e.payload = Wr(r)),
                      t === qt.USER_NOTICE && (e.payload = en(r)),
                      t === qt.INFO && (e.payload = on(r)),
                      n.push(e);
                  }),
                  (t.metas = n),
                  t
                );
              })(n))
            : r === Pt.NOTICE
            ? (t.payload = ((e) => ({ xid: jr(e) }))(n))
            : r === Pt.PROVISION && (t.payload = Mr(n)),
          g(t)
        );
      },
      gn = (e) => {
        const { payload: t, command: r } = e;
        return (
          t &&
            (r === Pt.UNREAD
              ? (e.payload = ((e) => fn.encode(e).finish())(t))
              : r === Pt.SYNC
              ? (e.payload = pn(t))
              : r === Pt.NOTICE
              ? (e.payload = ((e) => ln.encode(e).finish())(t))
              : r === Pt.PROVISION && (e.payload = Br(t))),
          hn.encode(e).finish()
        );
      },
      { encode: mn } = i,
      { encode: vn, decode: bn } = a,
      { encode: _n } = s;
    let wn = null,
      En = null,
      An = null,
      Cn = "normal",
      kn = { errTimer: null, errCount: 0 };
    D("onConnect", () => {
      kn.errCount = 0;
    });
    const Nn = (e) => {
      const { fireplace: t, appid: r } = e;
      l.log(
        "................................. will connect : " +
          t +
          " ................................................."
      ),
        M("loginMessage", "socket connecting..."),
        (wn = c()(t, { transports: ["polling", "websocket"] })),
        wn.on("connect", () => {
          l.log("socket connected .............................."),
            M("loginMessage", "socket connect success..."),
            An && clearTimeout(An),
            (An = null),
            (An = setTimeout(() => {
              ("kick" !== Cn && "normal" !== Cn) ||
                (l.log("=============== sending proversion =========="),
                M("loginMessage", "logining socket service..."),
                On(
                  ((e) => {
                    const t = new Zt({ uid: e.uid - 0, deviceSN: pr }),
                      r = new or();
                    fr || (fr = T.getDeviceGuid()),
                      r.setXid(t),
                      r.setToken(e.token),
                      r.setDeviceguid(fr),
                      r.setSdkvsn("1.0.0"),
                      r.setEncryptmethod(Gt.AES_CBC_128),
                      r.setEncryptkey(T.getAesKey()),
                      r.setDeviceinfo("Web");
                    const n = new rr();
                    return n.setCommond(Pt.PROVISION), n.setPayload(r), n;
                  })({ token: T.getToken(), uid: T.getUid() })
                ),
                (An = null));
            }, 1e3)),
            ("kick" !== Cn && "normal" !== Cn) ||
              (En && clearInterval(En),
              (En = null),
              (En = setInterval(() => {
                On({ vsn: 0, compress_method: 0, command: 0 });
              }, 12e4)));
        }),
        wn.on("frame", (e) => {
          if (e) {
            const t = ((e) => bn(e))(e);
            l.error(t), Tr(t);
          }
        }),
        wn.on("disconnect", (e) => {
          M("onDisconnect", {}),
            l.log(
              "=================  server disconnected =====================",
              e
            );
        }),
        wn.on("error", (e) => {
          l.log(
            "=================  server error disconnected =====================",
            e
          );
        }),
        wn.on("reconnect_attempt", (t) => {
          if (
            (l.log(
              "=================  server reconnect_attempt =====================",
              t
            ),
            (kn.errCount = kn.errCount + 1),
            kn.errCount >= 15)
          ) {
            (kn.errCount = 0), z.fireError();
            const { fireplace: t } = z.getServers(r);
            (e = Object.assign({ fireplace: t }, e)), Nn(e);
          }
        });
    };
    D("refresh_fire", (e) => {
      l.log("refresh fireplace for app: ", e), z.getServers(e);
    });
    const On = (e) => {
        l.warn(g(e));
        const t = vn(e),
          r = new ArrayBuffer(t.length),
          n = new Uint8Array(r);
        t.forEach((e, t) => {
          n[t] = e;
        }),
          wn.emit("frame", r);
      },
      Sn = () => {
        wn.disconnect();
      },
      Rn = Object.assign(n, {
        connect: function (e) {
          Nn(e);
        },
        sendMessage: On,
        disConnect: Sn,
      });
    D("sendMessage", (e) => {
      On(e);
    }),
      D("imReceiveUserNotice", (e) => {
        Cn = e;
      }),
      (window.onbeforeunload = function () {
        Sn();
      });
    var Tn = Rn;
    var xn = {
      asyncGetRosterIdList: (e) =>
        e
          ? Tn.rosterList({}).then(
              (e) => (G.saveRosterList(e), e.map((e) => e.user_id || e))
            )
          : Promise.resolve(G.getRosterList()),
      asyncGetRosterInfo: (e, t) => {
        const r = G.getRosterInfo(e);
        return r && r.username && !t
          ? Promise.resolve(r)
          : Tn.rosterListPost({ list: [e] }).then(
              (e) => (
                G.saveRosterInfo(e),
                M("onRosterListUpdate"),
                (e.length && e[0]) || {}
              )
            );
      },
      asyncRegester: (e) => Tn.userRegister(e),
      asnycGetRosterListDetailByIds: (e) => {
        if (!e || !e.length) return Promise.resolve({});
        const t = G.getAllRosterInfos(),
          r = [];
        e.forEach((e) => {
          const n = t[e];
          (n && n.username) || r.push(e);
        });
        const n = Array.from(new Set(r));
        return n.length
          ? Tn.rosterListPost({ list: n }).then(
              (e) => (G.saveRosterInfo(e), M("onRosterListUpdate"), e)
            )
          : Promise.resolve();
      },
      asyncGetUserProfile: (e) => {
        const t = T.getProfile();
        return t && (t.name || t.mobile) && !e
          ? Promise.resolve(t)
          : Tn.userProfile().then((e) => (T.saveProfile(e), e));
      },
      getRosterMessageByRid: (e) => j.getRosterMessage(e),
      readRosterMessage: (e, t) => {
        M("imReadRosterMessage", { roster_id: e, meta: t });
      },
      asyncDeleteRoster: (e) =>
        Tn.rosterDelete(e).then(
          (t) => (
            G.removeRoster(e.user_id),
            B.deleteRecentById(e.user_id),
            M("onRosterListUpdate"),
            t
          )
        ),
      getAllRosterDetail: () => G.getAllRosterInfos(),
      recallMessage: (e, t) => {
        const r = gr(e, t);
        M("swapSendMessage", g(r)), M("sendMessage", r);
      },
      deleteMessage: (e, t) => {
        const r = ((e, t) => {
          t = b(t);
          const r = new rr();
          r.setCommond(Pt.SYNC);
          const n = new Zt({ uid: T.getUid(), deviceSN: pr }),
            o = new ar(),
            i = new er({
              from: n,
              to: n,
              ctype: Kt.COMMAND,
              type: Jt.OPER,
              operation: { type: Yt.DELETE, mid: t },
            }),
            s = new cr({
              id: parseInt(
                new Date().getTime() + "" + Math.floor(256 * Math.random())
              ),
              from: n,
              to: n,
              payload: i,
              ns: qt.MESSAGE,
            });
          return o.setMeta(s), r.setPayload(o), r;
        })(0, t);
        M("swapSendMessage", g(r)), M("sendMessage", r);
      },
      getUnreadCount: (e) => j.getUnreadByRosterId(e),
      unreadMessage: (e, t) => {
        const r = ((e, t) => {
          t = b(t);
          const r = new rr();
          r.setCommond(Pt.SYNC);
          const n = new Zt({ uid: T.getUid(), deviceSN: pr }),
            o = new ar(),
            i = new er({
              from: n,
              to: n,
              ctype: Kt.COMMAND,
              type: Jt.OPER,
              operation: { type: Yt.READ_CANCEL, mid: t },
            }),
            s = new cr({
              id: parseInt(
                new Date().getTime() + "" + Math.floor(256 * Math.random())
              ),
              from: n,
              to: n,
              payload: i,
              ns: qt.MESSAGE,
            });
          return o.setMeta(s), r.setPayload(o), r;
        })(0, t);
        M("swapSendMessage", g(r)), M("sendMessage", r);
      },
      getRosterInfo: (e) => G.getRosterInfo(e),
      asyncGetApplyList: Tn.rosterApplylist,
      asyncGetBlockedlist: Tn.rosterBlockedlist,
      asyncBlockeAdd: Tn.rosterBlockedAdd,
      asyncBlockeRemove: Tn.rosterBlockeRemove,
      asyncApply: Tn.rosterApply,
      asyncAccept: Tn.rosterAccept,
      asyncDecline: Tn.rosterDecline,
      asyncUpdateRosterExt: Tn.rosterExt,
      asyncSearchRosterByName: Tn.rosterName,
      asyncSearchRosterById: Tn.rosterId,
    };
    let In = null;
    D("imRostersGroupslistReady", (e) => {
      const { rosters: t } = e;
      G.saveRosterList([].concat(t)), Dn(t);
    });
    const Dn = (e = []) => {
        Array.isArray(e) || (e = [e]);
        const t = G.getAllRosterInfos() || {},
          r = [];
        e.forEach((e) => {
          if ((e = e.user_id || e) > 0) {
            const n = t[e] || {},
              { avatar: o, nick_name: i, username: s } = n;
            o || i || s || (e && r.push(e));
          }
        }),
          r.length && Bn(r);
      },
      Un = (e = [], t = !1) => {
        if ((Array.isArray(e) || (e = [e]), t)) return void Pn(e);
        const r = S.getAllGroupInfos() || {},
          n = [];
        e.forEach((e) => {
          const t = e.group_id || e;
          if (e > 0) {
            const e = r[t] || {},
              { name: o } = e;
            o || n.push(t);
          }
        }),
          n.length && Pn(n);
      },
      Mn = [],
      Bn = (e = []) => {
        let t = e.filter((e) => Mn.indexOf(e) < 0);
        t.length &&
          ge({ list: t }).then((e) => {
            t.forEach((t) => {
              e.findIndex((e) => e.user_id == t) < 0 && Mn.push(t);
            }),
              G.saveRosterInfo(e),
              M("onRosterListUpdate");
          });
      },
      Pn = (e = []) => {
        e.length &&
          ot({ group_list: e }).then((e) => {
            S.saveGroupInfo(e), M("onGroupListUpdate");
          });
      },
      jn = (e, t, r, n) => {
        if (r) {
          const t = S.getGroupMembers(e);
          if (!t || !t.length) return;
        }
        void 0 !== t &&
          (Array.isArray(t) || (t = [t]),
          it({ group_id: e, user_list: t }).then((t) => {
            if (!t || !t.length) return;
            const r = [],
              o = G.getAllRosterInfos();
            t.forEach((e) => {
              o[e.user_id] && o[e.user_id].username
                ? ((e.display_name = e.display_name || o[e.user_id].username),
                  (e.avatar = o[e.user_id].avatar))
                : r.push(e.user_id);
            }),
              r.length
                ? ge({ list: r }).then((r) => {
                    G.saveRosterInfo(r);
                    const o = G.getAllRosterInfos();
                    (t = t.map(
                      (e) => (
                        e.display_name ||
                          (e.display_name =
                            e.display_name || o[e.user_id].username),
                        (e.avatar = o[e.user_id].avatar),
                        e
                      )
                    )),
                      S.saveGroupMembers(e, t, n),
                      M("onGroupMemberChanged", e);
                  })
                : (S.saveGroupMembers(e, t, n), M("onGroupMemberChanged", e));
          }));
      },
      Fn = (e, t) => {
        const r = S.getGroupMembers(e);
        if (!r || 0 === r.length) return;
        const n = r.findIndex((e) => e.user_id === t);
        n >= 0 &&
          (r.splice(n, 1),
          S.saveGroupMembers(e, r, !0),
          M("onGroupMemberChanged", e));
      };
    D("imRostersGroupslistReady", (e) => {
      const { groups: t } = e;
      S.saveJoinedGroups([].concat(t)), Un(t);
    }),
      D("imRosterMessage", (e) => {
        e = w(e);
        const { ext: t = {}, from: r, to: n } = e;
        if (void 0 !== t.input_status && r != T.getUid())
          M("onInputStatusMessage", { ext: t, from: r, to: n });
        else {
          j.saveRosterMessage(e);
          const t = T.getUid();
          Dn(t == r ? n : r);
        }
        M("onRosterMessage", e);
      }),
      D("imSendRosterMessage", (e) => {
        Dn(e.uid);
      }),
      D("imGetRecent", (e) => {
        Dn(e);
      }),
      D("imGroupMessage", (e) => {
        (e = w(e)), j.saveGroupMessage(e);
        const t = T.getUid(),
          { config: r } = e;
        r &&
          r.mentionList &&
          r.mentionList.indexOf(t) >= 0 &&
          M("onMentionMessage", e),
          M("onGroupMessage", e);
      }),
      D("imReceivedUnread", (e) => {
        const t = e.filter((e) => 1 === e.type).map((e) => v(e.xid.uid)),
          r = e.filter((e) => 2 === e.type).map((e) => v(e.xid.uid));
        Ln(t), Dn(t), Gn(r), Un(r);
      });
    const Ln = (e) => {
        const t = G.getAllRosterInfos() || {},
          r = [];
        e.forEach((e) => {
          const n = t[e] || {},
            { avatar: o, nick_name: i, username: s } = n;
          o || i || s || (e && r.push(e));
        }),
          r.length
            ? ge({ list: r }).then((t) => {
                G.saveRosterInfo(t), B.saveUnreadRecent(e, "roster");
              })
            : B.saveUnreadRecent(e, "roster");
      },
      Gn = (e) => {
        const t = S.getAllGroupInfos() || {},
          r = [];
        e.forEach((e) => {
          const n = t[e] || {},
            { name: o } = n;
          o || (e && r.push(e));
        }),
          r.length
            ? ot({ group_list: r }).then((t) => {
                S.saveGroupInfo(t),
                  M("onGroupListUpdate"),
                  B.saveUnreadRecent(e, "group");
              })
            : B.saveUnreadRecent(e, "group");
      };
    D("imRosterAdded", (e) => {
      const { payload: t } = e,
        { to: r = [], from: n } = t,
        o = T.getUid();
      1 === r.length &&
        v(r[0].uid) === o &&
        (Dn([v(n.uid)]),
        G.saveRosterList(v(n.uid)),
        M("onRosterListUpdate", e));
    }),
      D("imRosterRemoved", (e) => {
        const { payload: t } = e,
          { from: r, to: n = [] } = t,
          o = T.getUid();
        if (v(r.uid) === o && 1 === n.length) {
          const t = v(n[0].uid);
          G.removeRoster(t), F.saveNotice(e), M("onRosterRemoved", e);
        }
      }),
      D("imRosterAccepted", (e) => {
        const { payload: t } = e,
          { from: r, to: n = [] } = t,
          o = T.getUid(),
          i = v(r.uid);
        if (1 === n.length) {
          const t = v(n[0].uid);
          i === o
            ? (F.removeNotice(e), G.saveRosterList(t), Dn(t))
            : t === o && (G.saveRosterList(i), Dn(i)),
            M("onRosterAccepted", e);
        }
      }),
      D("imRosterDeclined", (e) => {
        const { payload: t } = e,
          { from: r, to: n = [] } = t,
          o = T.getUid(),
          i = v(r.uid);
        if (1 === n.length) {
          const t = v(n[0].uid);
          i === o
            ? (F.removeNotice(e), F.saveNotice(e))
            : t === o && F.saveNotice(e),
            M("onRosterDeclined", e);
        }
      }),
      D("imRrosterBaned", (e) => {
        M("onRosterNotice", e);
      }),
      D("imRosterUnbaned", (e) => {
        M("onRosterNotice", e);
      }),
      D("imRosterInfoUpdated", (e) => {
        const { payload: t } = e,
          { from: r, content: n = "{}" } = t,
          o = v(r.uid);
        let i = {};
        try {
          i = JSON.parse(n);
        } catch (e) {}
        if (Object.keys(i).length) {
          let e = Object.assign({}, G.getRosterInfo(o), i);
          G.saveRosterInfo([e]),
            M("onRosterInfoUpdated"),
            M("onRosterListUpdate");
        }
      }),
      D("imGroupCreated", (e) => {
        const { payload: t } = e,
          { gid: r, from: n } = t,
          o = T.getUid(),
          i = v(r.uid),
          s = v(n.uid);
        S.saveJoinedGroups(i),
          s !== o && Dn(s),
          Un(i),
          M("onGroupListUpdate", e),
          M("onGroupCreated", e);
      }),
      D("imGroupDestoryed", (e) => {
        const { payload: t } = e,
          { gid: r, from: n } = t,
          o = T.getUid(),
          i = v(r.uid),
          s = v(n.uid);
        s !== o && Dn(s),
          S.removeGroup(i),
          F.saveNotice(e),
          B.deleteRecentById(r),
          M("onGroupListUpdate"),
          M("onGroupDestoryed", e);
      }),
      D("imGroupJoined", (e) => {
        const { payload: t } = e,
          { gid: r, from: n, to: o = [] } = t,
          i = v(n.uid),
          s = T.getUid(),
          a = v(r.uid),
          u = [];
        o.forEach((e) => {
          u.push(v(e.uid));
        }),
          i === s
            ? (S.saveJoinedGroups(a), Un(a), M("onGroupListUpdate"))
            : (jn(a, i, !0), Dn(i), M("onGroupMemberChanged", a)),
          M("onGroupJoined", e);
      }),
      D("imGroupApplyed", (e) => {
        const { payload: t } = e,
          { from: r } = t,
          n = v(r.uid);
        n !== T.getUid() && (Dn([n]), F.saveNotice(e));
      }),
      D("imGroupApplyAccepted", (e) => {
        const { payload: t } = e,
          { gid: r, from: n, to: o = [] } = t,
          i = v(n.uid),
          s = T.getUid(),
          a = v(r.uid),
          u = [];
        o.forEach((e) => {
          u.push(v(e.uid));
        }),
          i === s
            ? (F.removeNotice(e),
              Dn(u),
              jn(a, u, !0),
              M("onGroupMemberChanged", a))
            : (S.saveJoinedGroups(a), Un(a), Dn(i), M("onGroupListUpdate")),
          M("onGroupApplyAccepted", e);
      }),
      D("imGroupApplyDeclined", (e) => {
        const { payload: t } = e,
          { from: r, to: n } = t,
          o = v(r.uid),
          i = T.getUid(),
          s = [];
        n.forEach((e) => {
          s.push(v(e.uid));
        }),
          o === i ? Dn(s) : F.saveNotice(e),
          M("onGroupApplyDeclined", e);
      }),
      D("imGroupInvited", (e) => {
        const { payload: t } = e,
          { gid: r, from: n, to: o = [] } = t,
          i = v(n.uid),
          s = T.getUid(),
          a = v(r.uid),
          u = [];
        o.forEach((e) => {
          u.push(v(e.uid));
        }),
          i === s
            ? Dn(u)
            : u.findIndex((e) => e === s) > -1
            ? (Dn(i), Un(a), F.saveNotice(e))
            : Dn(u),
          M("onGroupNotice", e);
      }),
      D("imGroupInvitedAccepted", (e) => {
        const { payload: t } = e,
          { gid: r, from: n, to: o = [] } = t,
          i = v(n.uid),
          s = T.getUid(),
          a = v(r.uid),
          u = [];
        o.forEach((e) => {
          u.push(v(e.uid));
        }),
          i === s
            ? (F.removeNotice(e),
              S.saveJoinedGroups(a),
              Un(a),
              M("onGroupListUpdate"))
            : (jn(a, i, !0), Dn(i), M("onGroupMemberChanged", a)),
          M("onGroupInvitedAccepted", e);
      }),
      D("imGroupInvitedDeclined", (e) => {
        const { payload: t } = e,
          { gid: r, from: n } = t,
          o = v(n.uid),
          i = T.getUid(),
          s = v(r.uid);
        o === i ? (F.removeNotice(e), F.saveNotice(e), Un(s)) : Dn(o),
          M("onGroupInvitedDeclined", e);
      }),
      D("imGroupKicked", (e) => {
        e = Object.assign({}, e);
        const { payload: t } = e,
          { gid: r, to: n = [] } = t,
          o = T.getUid(),
          i = v(r.uid),
          s = [];
        n.forEach((e) => {
          s.push(v(e.uid));
        }),
          s.findIndex((e) => e === o) > -1
            ? (S.removeGroup(i),
              F.saveNotice(e),
              B.deleteRecentById(r),
              M("onGroupListUpdate"))
            : Fn(i, s);
      }),
      D("imGroupBlocked", (e) => {
        const { payload: t } = e,
          { gid: r, to: n = [] } = t,
          o = T.getUid(),
          i = v(r.uid),
          s = [];
        n.forEach((e) => {
          s.push(v(e.uid));
        }),
          s.findIndex((e) => e === o) > -1
            ? (S.removeGroup(i),
              F.saveNotice(e),
              B.deleteRecentById(r),
              M("onGroupListUpdate"))
            : (Dn(s), Fn(i, s));
      }),
      D("imGroupUnblocked", (e) => {
        const { payload: t } = e,
          { to: r = [] } = t,
          n = [];
        r.forEach((e) => {
          n.push(v(e.uid));
        }),
          Dn(n);
      }),
      D("imGroupOwnerAssigned", (e) => {
        const { payload: t } = e,
          { from: r, to: n = [] } = t,
          o = v(r.uid),
          i = T.getUid(),
          s = [];
        n.forEach((e) => {
          s.push(v(e.uid));
        }),
          o !== i && s.push(o),
          Dn(s),
          M("onGroupOwnerAssigned", e);
      }),
      D("imGroupAdminGranted", (e) => {
        const { payload: t } = e,
          { from: r, to: n = [] } = t,
          o = v(r.uid),
          i = T.getUid(),
          s = [];
        n.forEach((e) => {
          s.push(v(e.uid));
        }),
          o !== i && s.push(o),
          Dn(s),
          M("onGroupAdminGranted", e);
      }),
      D("imGroupAdminRevoked", (e) => {
        const { payload: t } = e,
          { from: r, to: n = [] } = t,
          o = v(r.uid),
          i = T.getUid(),
          s = [];
        n.forEach((e) => {
          s.push(v(e.uid));
        }),
          o !== i && s.push(o),
          Dn(s),
          M("onGroupAdminRevoked", e);
      }),
      D("imGroupMuted", (e) => {
        M("onGroupMuted", e);
      }),
      D("imGroupUnblocked", (e) => {
        M("onGroupUnblocked", e);
      }),
      D("imGroupBaned", (e) => {
        M("onGroupBaned", e);
      }),
      D("imGroupUnbaned", (e) => {
        M("onGroupUnbaned", e);
      }),
      D("imGroupInfoUpdated", (e) => {
        const { payload: t } = e,
          { gid: r, content: n = "{}" } = t,
          o = v(r.uid);
        let i = {};
        try {
          i = JSON.parse(n);
        } catch (e) {}
        if (Object.keys(i).length) {
          let e = Object.assign({}, S.getGroupInfo(o), i);
          S.saveGroupInfo([e]), M("onGroupListUpdate");
        }
      }),
      D("imGroupAnnouncementUpdated", (e) => {
        const { payload: t } = e,
          { gid: r } = t,
          n = v(r.uid);
        Un(n, !0), M("onGroupAnnouncementUpdated", e);
      }),
      D("imReadRosterMessage", (e) => {
        const { roster_id: t, meta: r } = e,
          n = T.getUid(),
          o = j.getRosterMessage(t),
          i = j.getAllAck() || {};
        if (r) {
          const { id: e, from: o } = r,
            s = v(o.uid),
            a = _(e);
          if (s !== n && 2 !== i[_(a)]) {
            const e = yr(a, t);
            M("sendMessage", e), j.saveAck(a, 2);
          }
        } else
          o.forEach((e) => {
            const { id: r, from: o } = e;
            let s = !1;
            if (v(o.uid) !== n && 2 !== i[_(r)]) {
              s = !0;
              const e = yr(r, t);
              M("sendMessage", e), j.saveAck(r, 2);
            }
            s &&
              setTimeout(() => {
                M("onUnreadChange");
              }, 200);
          });
      }),
      D("imReadGroupMessage", (e) => {
        const t = e.group_id,
          r = e.id,
          n = e.isReceive,
          o = b(r),
          i = T.getUid(),
          s = _(t),
          a = j.getGroupMessage(s),
          u = j.getAllAck() || {};
        let c = !1;
        if (
          (a.forEach((e) => {
            const { id: t, from: r } = e,
              n = v(r),
              s = b(t),
              a = o.comp(s);
            n !== i && a >= 0 && 2 !== u[_(t)] && ((c = !0), j.saveAck(t, 2));
          }),
          c &&
            setTimeout(() => {
              M("onUnreadChange");
            }, 200),
          !n)
        ) {
          const e = ((e, t) => {
            const r = new rr();
            r.setCommond(Pt.SYNC);
            const n = new Zt({ uid: T.getUid(), deviceSN: pr }),
              o = new Zt({ uid: v(e), deviceSN: 0 }),
              i = new ar(),
              s = new er({
                from: n,
                to: n,
                ctype: Kt.COMMAND,
                type: Jt.OPER,
                operation: { type: Yt.READ_ALL, xid: o, mid: t },
              }),
              a = new cr({
                id: parseInt(
                  new Date().getTime() + "" + Math.floor(256 * Math.random())
                ),
                from: n,
                to: n,
                payload: s,
                ns: qt.MESSAGE,
              });
            return i.setMeta(a), r.setPayload(i), r;
          })(t, o);
          M("sendMessage", e);
        }
      }),
      D("onActionMessage", (e) => {
        const { payload: t, from: r, to: n, isReceive: o } = e,
          { type: i, operation: s = {} } = t,
          a = T.getUid() + "",
          u = (n && _(n.uid)) || 0,
          c = _(r.uid),
          p = a + "" == c + "" ? u : c,
          f = -1 != S.getJoinedGroups().indexOf(u - 0);
        if (i !== Jt.OPER) return;
        const { type: d, mid: l, xid: h } = s;
        d === Yt.READ_ACK
          ? j.saveAck(l, 2)
          : d === Yt.DELIVER_ACK
          ? j.saveAck(l, 1)
          : d === Yt.RECALL
          ? (!f && j.deleteSingleRosterMessage(l),
            f && j.deleteSingleGroupMessage(l),
            M("onMessageRecalled", { uid: p, mid: l }))
          : d === Yt.DELETE
          ? (j.deleteSingleRosterMessage(l),
            j.deleteSingleGroupMessage(l),
            M("onMessageDeleted", { uid: p, mid: l }))
          : d === Yt.READ_CANCEL
          ? (j.saveAck(l, 3),
            M("onMessageCanceled", { uid: p, mid: l }),
            setTimeout(() => {
              M("onUnreadChange");
            }, 200))
          : d === Yt.READ_ALL &&
            M("imReadGroupMessage", {
              group_id: _(h.uid),
              id: l,
              isReceive: o,
            }),
          In && clearTimeout(In),
          (In = setTimeout(() => {
            M("onMessageStatusChanged");
          }, 500));
      });
    const qn = {};
    D("swapSendMessage", (e) => {
      const { payload: t } = e,
        { meta: r } = t,
        { id: n } = r;
      qn[_(n)] = e;
    }),
      D("receivedSendMessage", (e) => {
        e = _(e);
        const t = qn[e];
        if (t) {
          const e = t.payload,
            { meta: r } = e,
            { payload: n } = r,
            { type: o } = n;
          o === Jt.OPER && M("onActionMessage", r);
        }
      }),
      D("imLoginUnnormal", () => {
        T.deleteToken(), M("loginUnnormal");
      });
    var Jn = jn;
    var Yn = {
      asyncGetGroupInfo: (e, t) => {
        e -= 0;
        const r = S.getGroupInfo(e) || {};
        return r.name && !t
          ? Promise.resolve(r)
          : Tn.groupInfo({ group_id: e }).then(
              (e) => (S.saveGroupInfo([e]), e)
            );
      },
      asyncGetJoinedGroups: (e) =>
        e
          ? Tn.groupUserjoined({}).then((e) =>
              Array.isArray(e) ? e : S.getGroupInfoList()
            )
          : Promise.resolve(S.getGroupInfoList()),
      openGroup: (e) => {
        Tn.groupMemberlist({ group_id: e }).then((t) => {
          S.saveGroupMembers(e, t);
          const r = t.map((e) => e.user_id);
          r.length && Jn(e, r, !1, !0), M("onGroupMemberChanged", e);
        });
      },
      getAllGroupDetail: () => S.getAllGroupInfos(),
      asyncGetGroupMembers: (e) =>
        Tn.groupMemberlist({ group_id: e }).then((t) => {
          S.saveGroupMembers(e, t);
          const r = t.map((e) => e.user_id);
          return r.length && Jn(e, r, !1, !0), r;
        }),
      getGroupMembers: (e) => S.getGroupMembers(e) || [],
      asyncGetGroupListDetail: (e) =>
        e && e.length
          ? Tn.groupInfoBatch({ group_list: e }).then(
              (e) => (S.saveGroupInfo(e), e)
            )
          : Promise.resolve({}),
      getGruopMessage: (e) => j.getGroupMessage(e),
      readGroupMessage: (e) => {
        const t = j.getGroupMessage(e);
        if (!t.length) return;
        const r = t[t.length - 1];
        M("imReadGroupMessage", { group_id: e, id: r.id });
      },
      recallMessage: (e, t) => {
        const r = gr(e, t);
        M("sendMessage", r), M("swapSendMessage", r);
      },
      getUnreadCount: (e) => j.getUnreadByGroupId(e),
      asyncGetAdminList: Tn.groupAdminList,
      asyncAdminAdd: Tn.groupAdminAdd,
      asyncAdminRemove: Tn.groupAdminRemove,
      asyncGetAnouncementById: Tn.groupAnnouncement,
      asyncAnouncementDelete: Tn.groupAnnouncementDelete,
      asyncAnnouncementEdit: Tn.groupAnnouncementEdit,
      asyncGetAnnouncementList: Tn.groupAnnouncementList,
      asyncCreate: Tn.groupCreate,
      asyncDestroy: Tn.groupDestroy,
      asyncGetInfo: (e) => (
        e.group_id || (e = { group_id: e }), Tn.groupInfo(e)
      ),
      asyncUpdateAvatar: Tn.groupInfoAvatar,
      asyncUpdateDescription: Tn.groupInfoDdscription,
      asyncUpdateName: Tn.groupInfoName,
      asyncGetMemberList: (e) => (
        e.group_id || (e = { group_id: e }), Tn.groupMemberlist(e)
      ),
      asyncGroupMsgMutemode: Tn.groupMsgMutemode,
      asyncGetPublicList: Tn.groupPubliclist,
      asyncUpdateMsgNotDisturb: Tn.groupMsgNotdisturb,
      asyncGroupBannedList: Tn.groupBannedList,
      asyncGroupBab: Tn.groupBab,
      asyncGroupUnban: Tn.groupUnban,
      asyncGetSettings: Tn.groupSettings,
      asyncUpdateAllowMemberInvitation: Tn.groupSettingsAllowmemberinvitation,
      asyncUpdateAllowMemberModify: Tn.groupSettingsAllowmembermodify,
      asyncUpdateEnableReadack: Tn.groupSettingsEnablereadack,
      asyncUpdateHistoryVisible: Tn.groupSettingsHistoryvisible,
      asyncUpdateRequireadminapproval: Tn.groupSettingsRequireadminapproval,
      asyncOwnerTransfer: Tn.groupTransfer,
      asyncGetUserJoined: Tn.groupUserjoined,
      asyncApply: Tn.groupApply,
      asyncApplyHandle: Tn.groupApplyHandle,
      asyncGroupBockedlist: Tn.groupBockedlist,
      asyncGroupBlock: Tn.groupBlock,
      asyncGroupUnblock: Tn.groupUnblock,
      asyncKick: Tn.groupKick,
      asyncGetInvitationList: Tn.groupInvitationlist,
      asyncInvite: Tn.groupInvite,
      asyncInviteHandle: Tn.groupInviteHandle,
      asyncGetMemberDisplayName: Tn.groupMembersDidpayname,
      asyncLeave: Tn.groupLeave,
      asyncUpdateDisplayName: Tn.groupDisplayname,
      asncGetApplicationList: Tn.groupApplicationlist,
      asyncGetFileList: Tn.groupFilelist,
      asyncFileDelete: Tn.groupFiledelete,
      asyncFileUpload: Tn.groupFileupload,
    };
    var Kn = {
      getToken: () => T.getToken(),
      getUid: () => T.getUid(),
      getAppid: () => T.getAppid(),
      getConversationList: () => B.getRecents(),
      deleteToken: T.deleteToken,
      asyncTokenUser: Tn.tokenUser,
      asyncTokenId: Tn.tokenId,
      asyncRegister: Tn.userRegister,
      asyncUserBindMobile: Tn.userBindMobile,
      asyncUserUpdateMobile: Tn.userUpdateMobile,
      asyncUserSendSms: Tn.userSendSms,
      asyncCaptchaSms: Tn.captchaSms,
      asyncUserNameCheck: Tn.userNameCheck,
      asyncUserMobileBind: Tn.userMobileBind,
      asyncUserMobileBindSign: Tn.userMobileBindSign,
      asyncUserMobileLogin: Tn.userMobileLogin,
      asyncCaptchaImagePost: Tn.captchaImagePost,
      asyncUpdateAuthmode: Tn.userAuthmode,
      asyncUpdateAvatar: Tn.userAvatar,
      asyncUpdateMobile: Tn.userMobile,
      asyncUpdateNickName: Tn.userNickname,
      asyncGetProfile: Tn.userProfile,
      asyncUpdateProfile: Tn.userProfilePost,
      asyncGetSettings: Tn.userSettings,
      asyncUpdateSettings: Tn.userSettingsPost,
    };
    var Hn = {
      getStaticVars: () => o,
      sendRosterMessage: (e) => {
        const t = hr(e),
          r = t.payload.meta;
        j.saveSendingRosterMessage(r), Tn.sendMessage(t);
      },
      sendGroupMessage: (e) => {
        const t = lr(e),
          r = t.payload.meta;
        j.saveSendingGroupMessage(r), Tn.sendMessage(t);
      },
      sendMentionMessage: (e) => {
        const t = ((e) => {
            const {
              gid: t,
              txt: r,
              mentionAll: n,
              mentionList: o,
              mentionedMessage: i,
              pushMessage: s,
              senderNickname: a,
            } = e;
            let u = Kt.TEXT;
            const c = new Zt({ uid: T.getUid() - 0, deviceSN: pr }),
              p = new Zt({ uid: t, deviceSN: 0 }),
              f = new rr();
            f.setCommond(Pt.SYNC);
            const d = new ar(),
              l = new er({
                from: c,
                to: p,
                content: r,
                ctype: u,
                type: Jt.GROUPCHAT,
              });
            l.config = JSON.stringify({
              mentionAll: n,
              mentionList: o,
              mentionedMessage: i,
              pushMessage: s,
              senderNickname: a,
            });
            const h = new cr({
              id: new Date().getTime(),
              from: c,
              to: p,
              payload: l,
              ns: qt.MESSAGE,
            });
            return d.setMeta(h), f.setPayload(d), f;
          })(e),
          r = t.payload.meta;
        j.saveSendingGroupMessage(r), Tn.sendMessage(t);
      },
      sendInputStatusMessage: (e, t) => {
        const r = ((e, t) => {
            let r = Kt.TEXT;
            const n = new Zt({ uid: T.getUid() - 0, deviceSN: pr }),
              o = new Zt({ uid: e - 0, deviceSN: 0 }),
              i = new rr();
            i.setCommond(Pt.SYNC);
            const s = new ar(),
              a = new er({
                from: n,
                to: o,
                ctype: r,
                type: Jt.CHAT,
                ext: JSON.stringify({ input_status: t }),
                qos: Ht.AT_MOST_ONCE,
              }),
              u = new cr({
                id: new Date().getTime(),
                from: n,
                to: o,
                payload: a,
                ns: qt.MESSAGE,
              });
            return s.setMeta(u), i.setPayload(s), i;
          })(e, t),
          n = r.payload.meta;
        j.saveSendingGroupMessage(n), Tn.sendMessage(r);
      },
      sendMessage: Tn.sendMessage,
      getNoticeMessage: F.getNotice(),
      forwardMessage: function (e) {
        const { uid: t, mid: r, gid: n } = e,
          o = j.getMessageByMid(r),
          i = o.attach;
        if (i && i.url) {
          let e = i.url.split("sign=")[1];
          const r = T.getToken();
          Tn.fileForward({
            file_sign: e,
            "access-token": r,
            to_id: (t || n) - 0,
            to_type: t ? 1 : 2,
          }).then((e) => {
            o.attach.url = e;
            const r = mr(t, n, o),
              i = r.payload.meta;
            t ? j.saveSendingRosterMessage(i) : j.saveSendingGroupMessage(i),
              Tn.sendMessage(r);
          });
        } else {
          const e = mr(t, n, o),
            r = e.payload.meta;
          t ? j.saveSendingRosterMessage(r) : j.saveSendingGroupMessage(r),
            Tn.sendMessage(e);
        }
      },
      requireHistoryMessage: (e, t) => {
        const r = ((e, t) => {
          t = b(t);
          const r = new rr();
          r.setCommond(Pt.SYNC);
          const n = new Zt({ uid: v(e), deviceSN: 0 }),
            o = new ar();
          return (
            o.setXid(n),
            o.setKey(v(t)),
            o.setFullsyncnum(50),
            o.setIsfullsync(!0),
            r.setPayload(o),
            r
          );
        })(e, t);
        Tn.sendMessage(r);
      },
      getAllMessageStatus: () => j.getAllAck(),
      makeSearch: (e) => {
        const t = [],
          r = [];
        return (
          (G.getRosterInfoList() || []).forEach((r) => {
            let n = !1;
            const { user_id: o, username: i, avatar: s } = r;
            (j.getRosterMessage(o) || []).forEach((r) => {
              if (n) return;
              const { payload: a = {} } = r,
                { content: u = "" } = a;
              u.indexOf(e) >= 0 &&
                ((n = !0),
                t.push({ user_id: o, username: i, avatar: s, content: u }));
            }),
              n ||
                (i.indexOf(e) >= 0 &&
                  t.push({ user_id: o, username: i, avatar: s }));
          }),
          S.getGroupInfoList().forEach((t) => {
            let n = !1;
            const { group_id: o, name: i } = t;
            (j.getGroupMessage(o) || []).forEach((t) => {
              if (n) return;
              const { payload: s = {} } = t,
                { content: a = "" } = s;
              a.indexOf(e) >= 0 &&
                ((n = !0), r.push({ group_id: o, name: i, content: a }));
            }),
              n || (i.indexOf(e) >= 0 && r.push({ group_id: o, name: i }));
          }),
          { rosterArr: t, groupArr: r }
        );
      },
      asyncGetUserAvatarUploadUrl: Tn.fileUploadAvatarUrl,
      asyncGetGroupAvatarUploadUrl: Tn.fileUploadGroupAvatarUrl,
      asyncGetFileUploadChatFileUrl: Tn.fileUploadChatFileUrl,
      asyncQrcode: Tn.qrcode,
      asyncQrlogin: Tn.qrlogin,
      asyncQrcodeGroupsign: Tn.qrcodeGroupsign,
      asyncQrcodeGroupinvite: Tn.qrcodeGroupinvite,
      asyncFileUpload: (e) =>
        new Promise((t, r) => {
          const {
            group_id: n,
            to_id: o,
            toType: i,
            file: s,
            fileType: a,
            chatType: u,
          } = e;
          let c = "";
          c =
            "rosterAvatar" === i
              ? "fileUploadAvatarUrl"
              : "chat" == i
              ? "fileUploadChatFileUrl"
              : "fileUploadGroupAvatarUrl";
          const p = T.getToken(),
            d = {};
          "groupAvatar" === i && (d["access-token"] = p),
            n && (d.group_id = n),
            a &&
              (d.file_type =
                [
                  "file",
                  "audio",
                  "image",
                  "video",
                  "shareFile",
                  "shareAudio",
                  "shareImage",
                  "shareVideo",
                ].indexOf(a) + 100),
            "group" == u && (d.to_type = 2),
            "roster" == u && (d.to_type = 1),
            o && (d.to_id = o),
            Tn[c](d)
              .then((e) => {
                let r = new FormData();
                r.append("OSSAccessKeyId", e.oss_body_param.OSSAccessKeyId),
                  r.append("policy", e.oss_body_param.policy),
                  r.append("signature", e.oss_body_param.signature),
                  r.append("callback", e.oss_body_param.callback),
                  r.append("key", e.oss_body_param.key),
                  r.append("file", s);
                f.a
                  .post(e.upload_url, r, {
                    headers: { "Content-Type": "multipart/form-data" },
                  })
                  .then(() => {
                    t({ url: e.download_url });
                  });
              })
              .catch((e) => {
                r(e);
              });
        }),
      getImage: ({ avatar: e = "", type: t = "roster", thumbnail: r = !0 }) => {
        if (/^\//.test(e)) return e;
        if (!e)
          return "roster" === t ? "/image/roster.png" : "/image/group.png";
        const n = T.getToken(),
          o = T.getAppid();
        let { ratel: i = "" } = z.getServers() || {};
        !/\/$/.test(i) && i.length > 5 && (i += "/");
        const s = r ? "&image_type=2" : "";
        return 0 === e.indexOf("http")
          ? e.indexOf("access-token") < 0
            ? `${e}&access-token=${n}${s}&app_id=${o}`
            : e
          : `${i}file/download/avatar?object_name=${e}${s}&access-token=${n}&app_id=${o}`;
      },
      getServers: z.getServers,
    };
    let Vn = {},
      zn = null,
      Xn = !1;
    const Wn = function ({
      autoLogin: e = !0,
      dnsServer: t = "https://dns.maximtop.com/app_dns",
      appid: r = "welovemaxim",
      ws: n = !1,
    }) {
      T.saveAppid(r),
        z.asyncGetDns(t, r, n).then((n) => {
          const { ratel: o, fireplace: i } = n;
          if (!o || !i)
            return (
              l.log("DNS error, check the server: ", t), void M("dnsError")
            );
          if (
            (M("refresh_ratel", r),
            M("refresh_fire", r),
            (Vn = { appid: r, baseUrl: o, autoLogin: e, fireplace: i }),
            (Wn.baseUrl = Vn.baseUrl),
            (Xn = !0),
            zn)
          ) {
            const { type: e } = zn;
            return (
              "login" == e && Wn.login(zn.opt),
              "qrlogin" == e && Wn.qrlogin(zn.opt),
              void ("tokenLogin" == e && Wn.tokenLogin(zn.user_id, zn.token))
            );
          }
          if (Vn.autoLogin) {
            const e = T.getUid(),
              t = T.getToken();
            if (
              ((Vn = Object.assign({ uid: e, token: t }, Vn)),
              Vn.token && Vn.uid)
            ) {
              const r = xn.asyncGetRosterIdList(!0),
                n = Yn.asyncGetJoinedGroups(!0);
              Promise.all([r, n])
                .then((r) => {
                  const n = r[0],
                    o = r[1];
                  M("imRostersGroupslistReady", { rosters: n, groups: o }),
                    l.log("get roster, group over .... will io connect"),
                    (Vn = Object.assign({ uid: e, token: t }, Vn)),
                    Tn.connect(Vn);
                })
                .catch((e) => {
                  M("loginMessage", "get roster list failure:" + e.message);
                });
            }
          }
        });
    };
    (Wn.login = function (e) {
      Xn
        ? (M("loginMessage", "获取登录token中..."),
          Tn.tokenUser(e)
            .then((e) => {
              const { token: t, user_id: r, public_key: n } = e;
              T.saveUid(r),
                T.saveToken(t),
                T.saveAesKey(n),
                M("login", { token: t });
              const o = xn.asyncGetRosterIdList(!0),
                i = Yn.asyncGetJoinedGroups(!0);
              M("loginMessage", "token sucecc, getting roster lists.."),
                Promise.all([o, i])
                  .then((e) => {
                    const n = e[0],
                      o = e[1];
                    M("imRostersGroupslistReady", { rosters: n, groups: o }),
                      l.log("get roster, group over .... will io connect"),
                      (Vn = Object.assign({ uid: r, token: t }, Vn)),
                      Tn.connect(Vn);
                  })
                  .catch((e) => {
                    M("loginMessage", "get roster list failure:" + e.message);
                  });
            })
            .catch((e) => {
              M("loginMessage", "token failure:" + e.message),
                M("loginerror", "token failure:" + e.message);
            }))
        : (zn = { type: "login", opt: e });
    }),
      (Wn.qrlogin = function (e) {
        Xn
          ? (M("loginMessage", "获取登录token中..."),
            Tn.tokenId(e)
              .then((e) => {
                const { token: t, user_id: r, public_key: n } = e;
                T.saveUid(r),
                  T.saveToken(t),
                  T.saveAesKey(n),
                  M("login", { token: t });
                const o = xn.asyncGetRosterIdList(!0),
                  i = Yn.asyncGetJoinedGroups(!0);
                M("loginMessage", "token sucecc, getting roster lists.."),
                  Promise.all([o, i])
                    .then((e) => {
                      const n = e[0],
                        o = e[1];
                      M("imRostersGroupslistReady", { rosters: n, groups: o }),
                        l.log("get roster, group over .... will io connect"),
                        (Vn = Object.assign({ uid: r, token: t }, Vn)),
                        Tn.connect(Vn);
                    })
                    .catch((e) => {
                      M("loginMessage", "get roster list failure:" + e.message);
                    });
              })
              .catch((e) => {
                M("loginMessage", "token failure:" + e.message),
                  M("loginerror", "token failure:" + e.message);
              }))
          : (zn = { type: "qrlogin", opt: e });
      }),
      (Wn.tokenLogin = function (e, t) {
        if (!Xn)
          return void (zn = { type: "tokenLogin", user_id: e, token: t });
        T.saveUid(e), T.saveToken(t), M("login", t);
        const r = xn.asyncGetRosterIdList(!0),
          n = Yn.asyncGetJoinedGroups(!0);
        M("loginMessage", "token sucecc, getting roster lists.."),
          Promise.all([r, n])
            .then((r) => {
              const n = r[0],
                o = r[1];
              M("imRostersGroupslistReady", { rosters: n, groups: o }),
                l.log("get roster, group over .... will io connect"),
                (Vn = Object.assign({ uid: e, token: t }, Vn)),
                Tn.connect(Vn);
            })
            .catch((e) => {
              M("loginMessage", "get roster list failure:" + e.message);
            });
      }),
      (Wn.on = Wn.listen = function (e, t) {
        if (t) D(e, t);
        else {
          Object.keys(e).forEach((t) => {
            D(t, e[t]);
          });
        }
      }),
      (Wn.off = function (e, t) {
        if (t) U(e, t);
        else {
          Object.keys(e).forEach((t) => {
            U(t, e[t]);
          });
        }
      }),
      (Wn.disConnect = Tn.disConnect);
    var $n = Wn;
    ($n.rosterManage = xn),
      ($n.groupManage = Yn),
      ($n.userManage = Kn),
      ($n.sysManage = Hn),
      (window.flooIM = (e) => (new $n(e), $n));
    t.default = $n;
  },
]);
