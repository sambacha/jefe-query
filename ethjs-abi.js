var abi = (function (t) {
  var r = {};
  function e(i) {
    if (r[i]) return r[i].exports;
    var n = (r[i] = { i: i, l: !1, exports: {} });
    return t[i].call(n.exports, n, n.exports, e), (n.l = !0), n.exports;
  }
  return (
    (e.m = t),
    (e.c = r),
    (e.d = function (t, r, i) {
      e.o(t, r) ||
        Object.defineProperty(t, r, {
          configurable: !1,
          enumerable: !0,
          get: i,
        });
    }),
    (e.r = function (t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (e.n = function (t) {
      var r =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return e.d(r, "a", r), r;
    }),
    (e.o = function (t, r) {
      return Object.prototype.hasOwnProperty.call(t, r);
    }),
    (e.p = ""),
    e((e.s = 13))
  );
})([
  function (t, r, e) {
    "use strict";
    (function (t) {
      var i = e(12),
        n = e(11),
        o = e(10);
      function h() {
        return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function s(t, r) {
        if (h() < r) throw new RangeError("Invalid typed array length");
        return (
          u.TYPED_ARRAY_SUPPORT
            ? ((t = new Uint8Array(r)).__proto__ = u.prototype)
            : (null === t && (t = new u(r)), (t.length = r)),
          t
        );
      }
      function u(t, r, e) {
        if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u))
          return new u(t, r, e);
        if ("number" == typeof t) {
          if ("string" == typeof r)
            throw new Error(
              "If encoding is specified then the first argument must be a string"
            );
          return l(this, t);
        }
        return a(this, t, r, e);
      }
      function a(t, r, e, i) {
        if ("number" == typeof r)
          throw new TypeError('"value" argument must not be a number');
        return "undefined" != typeof ArrayBuffer && r instanceof ArrayBuffer
          ? (function (t, r, e, i) {
              if ((r.byteLength, e < 0 || r.byteLength < e))
                throw new RangeError("'offset' is out of bounds");
              if (r.byteLength < e + (i || 0))
                throw new RangeError("'length' is out of bounds");
              r =
                void 0 === e && void 0 === i
                  ? new Uint8Array(r)
                  : void 0 === i
                  ? new Uint8Array(r, e)
                  : new Uint8Array(r, e, i);
              u.TYPED_ARRAY_SUPPORT
                ? ((t = r).__proto__ = u.prototype)
                : (t = c(t, r));
              return t;
            })(t, r, e, i)
          : "string" == typeof r
          ? (function (t, r, e) {
              ("string" == typeof e && "" !== e) || (e = "utf8");
              if (!u.isEncoding(e))
                throw new TypeError(
                  '"encoding" must be a valid string encoding'
                );
              var i = 0 | p(r, e),
                n = (t = s(t, i)).write(r, e);
              n !== i && (t = t.slice(0, n));
              return t;
            })(t, r, e)
          : (function (t, r) {
              if (u.isBuffer(r)) {
                var e = 0 | d(r.length);
                return 0 === (t = s(t, e)).length ? t : (r.copy(t, 0, 0, e), t);
              }
              if (r) {
                if (
                  ("undefined" != typeof ArrayBuffer &&
                    r.buffer instanceof ArrayBuffer) ||
                  "length" in r
                )
                  return "number" != typeof r.length || (i = r.length) != i
                    ? s(t, 0)
                    : c(t, r);
                if ("Buffer" === r.type && o(r.data)) return c(t, r.data);
              }
              var i;
              throw new TypeError(
                "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
              );
            })(t, r);
      }
      function f(t) {
        if ("number" != typeof t)
          throw new TypeError('"size" argument must be a number');
        if (t < 0) throw new RangeError('"size" argument must not be negative');
      }
      function l(t, r) {
        if ((f(r), (t = s(t, r < 0 ? 0 : 0 | d(r))), !u.TYPED_ARRAY_SUPPORT))
          for (var e = 0; e < r; ++e) t[e] = 0;
        return t;
      }
      function c(t, r) {
        var e = r.length < 0 ? 0 : 0 | d(r.length);
        t = s(t, e);
        for (var i = 0; i < e; i += 1) t[i] = 255 & r[i];
        return t;
      }
      function d(t) {
        if (t >= h())
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              h().toString(16) +
              " bytes"
          );
        return 0 | t;
      }
      function p(t, r) {
        if (u.isBuffer(t)) return t.length;
        if (
          "undefined" != typeof ArrayBuffer &&
          "function" == typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
        )
          return t.byteLength;
        "string" != typeof t && (t = "" + t);
        var e = t.length;
        if (0 === e) return 0;
        for (var i = !1; ; )
          switch (r) {
            case "ascii":
            case "latin1":
            case "binary":
              return e;
            case "utf8":
            case "utf-8":
            case void 0:
              return $(t).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * e;
            case "hex":
              return e >>> 1;
            case "base64":
              return D(t).length;
            default:
              if (i) return $(t).length;
              (r = ("" + r).toLowerCase()), (i = !0);
          }
      }
      function m(t, r, e) {
        var i = t[r];
        (t[r] = t[e]), (t[e] = i);
      }
      function g(t, r, e, i, n) {
        if (0 === t.length) return -1;
        if (
          ("string" == typeof e
            ? ((i = e), (e = 0))
            : e > 2147483647
            ? (e = 2147483647)
            : e < -2147483648 && (e = -2147483648),
          (e = +e),
          isNaN(e) && (e = n ? 0 : t.length - 1),
          e < 0 && (e = t.length + e),
          e >= t.length)
        ) {
          if (n) return -1;
          e = t.length - 1;
        } else if (e < 0) {
          if (!n) return -1;
          e = 0;
        }
        if (("string" == typeof r && (r = u.from(r, i)), u.isBuffer(r)))
          return 0 === r.length ? -1 : v(t, r, e, i, n);
        if ("number" == typeof r)
          return (
            (r &= 255),
            u.TYPED_ARRAY_SUPPORT &&
            "function" == typeof Uint8Array.prototype.indexOf
              ? n
                ? Uint8Array.prototype.indexOf.call(t, r, e)
                : Uint8Array.prototype.lastIndexOf.call(t, r, e)
              : v(t, [r], e, i, n)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function v(t, r, e, i, n) {
        var o,
          h = 1,
          s = t.length,
          u = r.length;
        if (
          void 0 !== i &&
          ("ucs2" === (i = String(i).toLowerCase()) ||
            "ucs-2" === i ||
            "utf16le" === i ||
            "utf-16le" === i)
        ) {
          if (t.length < 2 || r.length < 2) return -1;
          (h = 2), (s /= 2), (u /= 2), (e /= 2);
        }
        function a(t, r) {
          return 1 === h ? t[r] : t.readUInt16BE(r * h);
        }
        if (n) {
          var f = -1;
          for (o = e; o < s; o++)
            if (a(t, o) === a(r, -1 === f ? 0 : o - f)) {
              if ((-1 === f && (f = o), o - f + 1 === u)) return f * h;
            } else -1 !== f && (o -= o - f), (f = -1);
        } else
          for (e + u > s && (e = s - u), o = e; o >= 0; o--) {
            for (var l = !0, c = 0; c < u; c++)
              if (a(t, o + c) !== a(r, c)) {
                l = !1;
                break;
              }
            if (l) return o;
          }
        return -1;
      }
      function y(t, r, e, i) {
        e = Number(e) || 0;
        var n = t.length - e;
        i ? (i = Number(i)) > n && (i = n) : (i = n);
        var o = r.length;
        if (o % 2 != 0) throw new TypeError("Invalid hex string");
        i > o / 2 && (i = o / 2);
        for (var h = 0; h < i; ++h) {
          var s = parseInt(r.substr(2 * h, 2), 16);
          if (isNaN(s)) return h;
          t[e + h] = s;
        }
        return h;
      }
      function w(t, r, e, i) {
        return Z($(r, t.length - e), t, e, i);
      }
      function M(t, r, e, i) {
        return Z(
          (function (t) {
            for (var r = [], e = 0; e < t.length; ++e)
              r.push(255 & t.charCodeAt(e));
            return r;
          })(r),
          t,
          e,
          i
        );
      }
      function b(t, r, e, i) {
        return M(t, r, e, i);
      }
      function _(t, r, e, i) {
        return Z(D(r), t, e, i);
      }
      function A(t, r, e, i) {
        return Z(
          (function (t, r) {
            for (
              var e, i, n, o = [], h = 0;
              h < t.length && !((r -= 2) < 0);
              ++h
            )
              (e = t.charCodeAt(h)),
                (i = e >> 8),
                (n = e % 256),
                o.push(n),
                o.push(i);
            return o;
          })(r, t.length - e),
          t,
          e,
          i
        );
      }
      function E(t, r, e) {
        return 0 === r && e === t.length
          ? i.fromByteArray(t)
          : i.fromByteArray(t.slice(r, e));
      }
      function x(t, r, e) {
        e = Math.min(t.length, e);
        for (var i = [], n = r; n < e; ) {
          var o,
            h,
            s,
            u,
            a = t[n],
            f = null,
            l = a > 239 ? 4 : a > 223 ? 3 : a > 191 ? 2 : 1;
          if (n + l <= e)
            switch (l) {
              case 1:
                a < 128 && (f = a);
                break;
              case 2:
                128 == (192 & (o = t[n + 1])) &&
                  (u = ((31 & a) << 6) | (63 & o)) > 127 &&
                  (f = u);
                break;
              case 3:
                (o = t[n + 1]),
                  (h = t[n + 2]),
                  128 == (192 & o) &&
                    128 == (192 & h) &&
                    (u = ((15 & a) << 12) | ((63 & o) << 6) | (63 & h)) >
                      2047 &&
                    (u < 55296 || u > 57343) &&
                    (f = u);
                break;
              case 4:
                (o = t[n + 1]),
                  (h = t[n + 2]),
                  (s = t[n + 3]),
                  128 == (192 & o) &&
                    128 == (192 & h) &&
                    128 == (192 & s) &&
                    (u =
                      ((15 & a) << 18) |
                      ((63 & o) << 12) |
                      ((63 & h) << 6) |
                      (63 & s)) > 65535 &&
                    u < 1114112 &&
                    (f = u);
            }
          null === f
            ? ((f = 65533), (l = 1))
            : f > 65535 &&
              ((f -= 65536),
              i.push(((f >>> 10) & 1023) | 55296),
              (f = 56320 | (1023 & f))),
            i.push(f),
            (n += l);
        }
        return (function (t) {
          var r = t.length;
          if (r <= B) return String.fromCharCode.apply(String, t);
          var e = "",
            i = 0;
          for (; i < r; )
            e += String.fromCharCode.apply(String, t.slice(i, (i += B)));
          return e;
        })(i);
      }
      (r.Buffer = u),
        (r.SlowBuffer = function (t) {
          +t != t && (t = 0);
          return u.alloc(+t);
        }),
        (r.INSPECT_MAX_BYTES = 50),
        (u.TYPED_ARRAY_SUPPORT =
          void 0 !== t.TYPED_ARRAY_SUPPORT
            ? t.TYPED_ARRAY_SUPPORT
            : (function () {
                try {
                  var t = new Uint8Array(1);
                  return (
                    (t.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function () {
                        return 42;
                      },
                    }),
                    42 === t.foo() &&
                      "function" == typeof t.subarray &&
                      0 === t.subarray(1, 1).byteLength
                  );
                } catch (t) {
                  return !1;
                }
              })()),
        (r.kMaxLength = h()),
        (u.poolSize = 8192),
        (u._augment = function (t) {
          return (t.__proto__ = u.prototype), t;
        }),
        (u.from = function (t, r, e) {
          return a(null, t, r, e);
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
        (u.alloc = function (t, r, e) {
          return (function (t, r, e, i) {
            return (
              f(r),
              r <= 0
                ? s(t, r)
                : void 0 !== e
                ? "string" == typeof i
                  ? s(t, r).fill(e, i)
                  : s(t, r).fill(e)
                : s(t, r)
            );
          })(null, t, r, e);
        }),
        (u.allocUnsafe = function (t) {
          return l(null, t);
        }),
        (u.allocUnsafeSlow = function (t) {
          return l(null, t);
        }),
        (u.isBuffer = function (t) {
          return !(null == t || !t._isBuffer);
        }),
        (u.compare = function (t, r) {
          if (!u.isBuffer(t) || !u.isBuffer(r))
            throw new TypeError("Arguments must be Buffers");
          if (t === r) return 0;
          for (
            var e = t.length, i = r.length, n = 0, o = Math.min(e, i);
            n < o;
            ++n
          )
            if (t[n] !== r[n]) {
              (e = t[n]), (i = r[n]);
              break;
            }
          return e < i ? -1 : i < e ? 1 : 0;
        }),
        (u.isEncoding = function (t) {
          switch (String(t).toLowerCase()) {
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
        (u.concat = function (t, r) {
          if (!o(t))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === t.length) return u.alloc(0);
          var e;
          if (void 0 === r)
            for (r = 0, e = 0; e < t.length; ++e) r += t[e].length;
          var i = u.allocUnsafe(r),
            n = 0;
          for (e = 0; e < t.length; ++e) {
            var h = t[e];
            if (!u.isBuffer(h))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            h.copy(i, n), (n += h.length);
          }
          return i;
        }),
        (u.byteLength = p),
        (u.prototype._isBuffer = !0),
        (u.prototype.swap16 = function () {
          var t = this.length;
          if (t % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var r = 0; r < t; r += 2) m(this, r, r + 1);
          return this;
        }),
        (u.prototype.swap32 = function () {
          var t = this.length;
          if (t % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var r = 0; r < t; r += 4)
            m(this, r, r + 3), m(this, r + 1, r + 2);
          return this;
        }),
        (u.prototype.swap64 = function () {
          var t = this.length;
          if (t % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var r = 0; r < t; r += 8)
            m(this, r, r + 7),
              m(this, r + 1, r + 6),
              m(this, r + 2, r + 5),
              m(this, r + 3, r + 4);
          return this;
        }),
        (u.prototype.toString = function () {
          var t = 0 | this.length;
          return 0 === t
            ? ""
            : 0 === arguments.length
            ? x(this, 0, t)
            : function (t, r, e) {
                var i = !1;
                if (((void 0 === r || r < 0) && (r = 0), r > this.length))
                  return "";
                if (
                  ((void 0 === e || e > this.length) && (e = this.length),
                  e <= 0)
                )
                  return "";
                if ((e >>>= 0) <= (r >>>= 0)) return "";
                for (t || (t = "utf8"); ; )
                  switch (t) {
                    case "hex":
                      return T(this, r, e);
                    case "utf8":
                    case "utf-8":
                      return x(this, r, e);
                    case "ascii":
                      return S(this, r, e);
                    case "latin1":
                    case "binary":
                      return R(this, r, e);
                    case "base64":
                      return E(this, r, e);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return k(this, r, e);
                    default:
                      if (i) throw new TypeError("Unknown encoding: " + t);
                      (t = (t + "").toLowerCase()), (i = !0);
                  }
              }.apply(this, arguments);
        }),
        (u.prototype.equals = function (t) {
          if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          return this === t || 0 === u.compare(this, t);
        }),
        (u.prototype.inspect = function () {
          var t = "",
            e = r.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((t = this.toString("hex", 0, e).match(/.{2}/g).join(" ")),
              this.length > e && (t += " ... ")),
            "<Buffer " + t + ">"
          );
        }),
        (u.prototype.compare = function (t, r, e, i, n) {
          if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
          if (
            (void 0 === r && (r = 0),
            void 0 === e && (e = t ? t.length : 0),
            void 0 === i && (i = 0),
            void 0 === n && (n = this.length),
            r < 0 || e > t.length || i < 0 || n > this.length)
          )
            throw new RangeError("out of range index");
          if (i >= n && r >= e) return 0;
          if (i >= n) return -1;
          if (r >= e) return 1;
          if (((r >>>= 0), (e >>>= 0), (i >>>= 0), (n >>>= 0), this === t))
            return 0;
          for (
            var o = n - i,
              h = e - r,
              s = Math.min(o, h),
              a = this.slice(i, n),
              f = t.slice(r, e),
              l = 0;
            l < s;
            ++l
          )
            if (a[l] !== f[l]) {
              (o = a[l]), (h = f[l]);
              break;
            }
          return o < h ? -1 : h < o ? 1 : 0;
        }),
        (u.prototype.includes = function (t, r, e) {
          return -1 !== this.indexOf(t, r, e);
        }),
        (u.prototype.indexOf = function (t, r, e) {
          return g(this, t, r, e, !0);
        }),
        (u.prototype.lastIndexOf = function (t, r, e) {
          return g(this, t, r, e, !1);
        }),
        (u.prototype.write = function (t, r, e, i) {
          if (void 0 === r) (i = "utf8"), (e = this.length), (r = 0);
          else if (void 0 === e && "string" == typeof r)
            (i = r), (e = this.length), (r = 0);
          else {
            if (!isFinite(r))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (r |= 0),
              isFinite(e)
                ? ((e |= 0), void 0 === i && (i = "utf8"))
                : ((i = e), (e = void 0));
          }
          var n = this.length - r;
          if (
            ((void 0 === e || e > n) && (e = n),
            (t.length > 0 && (e < 0 || r < 0)) || r > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          i || (i = "utf8");
          for (var o = !1; ; )
            switch (i) {
              case "hex":
                return y(this, t, r, e);
              case "utf8":
              case "utf-8":
                return w(this, t, r, e);
              case "ascii":
                return M(this, t, r, e);
              case "latin1":
              case "binary":
                return b(this, t, r, e);
              case "base64":
                return _(this, t, r, e);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return A(this, t, r, e);
              default:
                if (o) throw new TypeError("Unknown encoding: " + i);
                (i = ("" + i).toLowerCase()), (o = !0);
            }
        }),
        (u.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      var B = 4096;
      function S(t, r, e) {
        var i = "";
        e = Math.min(t.length, e);
        for (var n = r; n < e; ++n) i += String.fromCharCode(127 & t[n]);
        return i;
      }
      function R(t, r, e) {
        var i = "";
        e = Math.min(t.length, e);
        for (var n = r; n < e; ++n) i += String.fromCharCode(t[n]);
        return i;
      }
      function T(t, r, e) {
        var i = t.length;
        (!r || r < 0) && (r = 0), (!e || e < 0 || e > i) && (e = i);
        for (var n = "", o = r; o < e; ++o) n += j(t[o]);
        return n;
      }
      function k(t, r, e) {
        for (var i = t.slice(r, e), n = "", o = 0; o < i.length; o += 2)
          n += String.fromCharCode(i[o] + 256 * i[o + 1]);
        return n;
      }
      function P(t, r, e) {
        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
        if (t + r > e)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function I(t, r, e, i, n, o) {
        if (!u.isBuffer(t))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (r > n || r < o)
          throw new RangeError('"value" argument is out of bounds');
        if (e + i > t.length) throw new RangeError("Index out of range");
      }
      function U(t, r, e, i) {
        r < 0 && (r = 65535 + r + 1);
        for (var n = 0, o = Math.min(t.length - e, 2); n < o; ++n)
          t[e + n] =
            (r & (255 << (8 * (i ? n : 1 - n)))) >>> (8 * (i ? n : 1 - n));
      }
      function L(t, r, e, i) {
        r < 0 && (r = 4294967295 + r + 1);
        for (var n = 0, o = Math.min(t.length - e, 4); n < o; ++n)
          t[e + n] = (r >>> (8 * (i ? n : 3 - n))) & 255;
      }
      function O(t, r, e, i, n, o) {
        if (e + i > t.length) throw new RangeError("Index out of range");
        if (e < 0) throw new RangeError("Index out of range");
      }
      function C(t, r, e, i, o) {
        return o || O(t, 0, e, 4), n.write(t, r, e, i, 23, 4), e + 4;
      }
      function N(t, r, e, i, o) {
        return o || O(t, 0, e, 8), n.write(t, r, e, i, 52, 8), e + 8;
      }
      (u.prototype.slice = function (t, r) {
        var e,
          i = this.length;
        if (
          ((t = ~~t),
          (r = void 0 === r ? i : ~~r),
          t < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i),
          r < 0 ? (r += i) < 0 && (r = 0) : r > i && (r = i),
          r < t && (r = t),
          u.TYPED_ARRAY_SUPPORT)
        )
          (e = this.subarray(t, r)).__proto__ = u.prototype;
        else {
          var n = r - t;
          e = new u(n, void 0);
          for (var o = 0; o < n; ++o) e[o] = this[o + t];
        }
        return e;
      }),
        (u.prototype.readUIntLE = function (t, r, e) {
          (t |= 0), (r |= 0), e || P(t, r, this.length);
          for (var i = this[t], n = 1, o = 0; ++o < r && (n *= 256); )
            i += this[t + o] * n;
          return i;
        }),
        (u.prototype.readUIntBE = function (t, r, e) {
          (t |= 0), (r |= 0), e || P(t, r, this.length);
          for (var i = this[t + --r], n = 1; r > 0 && (n *= 256); )
            i += this[t + --r] * n;
          return i;
        }),
        (u.prototype.readUInt8 = function (t, r) {
          return r || P(t, 1, this.length), this[t];
        }),
        (u.prototype.readUInt16LE = function (t, r) {
          return r || P(t, 2, this.length), this[t] | (this[t + 1] << 8);
        }),
        (u.prototype.readUInt16BE = function (t, r) {
          return r || P(t, 2, this.length), (this[t] << 8) | this[t + 1];
        }),
        (u.prototype.readUInt32LE = function (t, r) {
          return (
            r || P(t, 4, this.length),
            (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
              16777216 * this[t + 3]
          );
        }),
        (u.prototype.readUInt32BE = function (t, r) {
          return (
            r || P(t, 4, this.length),
            16777216 * this[t] +
              ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
          );
        }),
        (u.prototype.readIntLE = function (t, r, e) {
          (t |= 0), (r |= 0), e || P(t, r, this.length);
          for (var i = this[t], n = 1, o = 0; ++o < r && (n *= 256); )
            i += this[t + o] * n;
          return i >= (n *= 128) && (i -= Math.pow(2, 8 * r)), i;
        }),
        (u.prototype.readIntBE = function (t, r, e) {
          (t |= 0), (r |= 0), e || P(t, r, this.length);
          for (var i = r, n = 1, o = this[t + --i]; i > 0 && (n *= 256); )
            o += this[t + --i] * n;
          return o >= (n *= 128) && (o -= Math.pow(2, 8 * r)), o;
        }),
        (u.prototype.readInt8 = function (t, r) {
          return (
            r || P(t, 1, this.length),
            128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
          );
        }),
        (u.prototype.readInt16LE = function (t, r) {
          r || P(t, 2, this.length);
          var e = this[t] | (this[t + 1] << 8);
          return 32768 & e ? 4294901760 | e : e;
        }),
        (u.prototype.readInt16BE = function (t, r) {
          r || P(t, 2, this.length);
          var e = this[t + 1] | (this[t] << 8);
          return 32768 & e ? 4294901760 | e : e;
        }),
        (u.prototype.readInt32LE = function (t, r) {
          return (
            r || P(t, 4, this.length),
            this[t] |
              (this[t + 1] << 8) |
              (this[t + 2] << 16) |
              (this[t + 3] << 24)
          );
        }),
        (u.prototype.readInt32BE = function (t, r) {
          return (
            r || P(t, 4, this.length),
            (this[t] << 24) |
              (this[t + 1] << 16) |
              (this[t + 2] << 8) |
              this[t + 3]
          );
        }),
        (u.prototype.readFloatLE = function (t, r) {
          return r || P(t, 4, this.length), n.read(this, t, !0, 23, 4);
        }),
        (u.prototype.readFloatBE = function (t, r) {
          return r || P(t, 4, this.length), n.read(this, t, !1, 23, 4);
        }),
        (u.prototype.readDoubleLE = function (t, r) {
          return r || P(t, 8, this.length), n.read(this, t, !0, 52, 8);
        }),
        (u.prototype.readDoubleBE = function (t, r) {
          return r || P(t, 8, this.length), n.read(this, t, !1, 52, 8);
        }),
        (u.prototype.writeUIntLE = function (t, r, e, i) {
          ((t = +t), (r |= 0), (e |= 0), i) ||
            I(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
          var n = 1,
            o = 0;
          for (this[r] = 255 & t; ++o < e && (n *= 256); )
            this[r + o] = (t / n) & 255;
          return r + e;
        }),
        (u.prototype.writeUIntBE = function (t, r, e, i) {
          ((t = +t), (r |= 0), (e |= 0), i) ||
            I(this, t, r, e, Math.pow(2, 8 * e) - 1, 0);
          var n = e - 1,
            o = 1;
          for (this[r + n] = 255 & t; --n >= 0 && (o *= 256); )
            this[r + n] = (t / o) & 255;
          return r + e;
        }),
        (u.prototype.writeUInt8 = function (t, r, e) {
          return (
            (t = +t),
            (r |= 0),
            e || I(this, t, r, 1, 255, 0),
            u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            (this[r] = 255 & t),
            r + 1
          );
        }),
        (u.prototype.writeUInt16LE = function (t, r, e) {
          return (
            (t = +t),
            (r |= 0),
            e || I(this, t, r, 2, 65535, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[r] = 255 & t), (this[r + 1] = t >>> 8))
              : U(this, t, r, !0),
            r + 2
          );
        }),
        (u.prototype.writeUInt16BE = function (t, r, e) {
          return (
            (t = +t),
            (r |= 0),
            e || I(this, t, r, 2, 65535, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[r] = t >>> 8), (this[r + 1] = 255 & t))
              : U(this, t, r, !1),
            r + 2
          );
        }),
        (u.prototype.writeUInt32LE = function (t, r, e) {
          return (
            (t = +t),
            (r |= 0),
            e || I(this, t, r, 4, 4294967295, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[r + 3] = t >>> 24),
                (this[r + 2] = t >>> 16),
                (this[r + 1] = t >>> 8),
                (this[r] = 255 & t))
              : L(this, t, r, !0),
            r + 4
          );
        }),
        (u.prototype.writeUInt32BE = function (t, r, e) {
          return (
            (t = +t),
            (r |= 0),
            e || I(this, t, r, 4, 4294967295, 0),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[r] = t >>> 24),
                (this[r + 1] = t >>> 16),
                (this[r + 2] = t >>> 8),
                (this[r + 3] = 255 & t))
              : L(this, t, r, !1),
            r + 4
          );
        }),
        (u.prototype.writeIntLE = function (t, r, e, i) {
          if (((t = +t), (r |= 0), !i)) {
            var n = Math.pow(2, 8 * e - 1);
            I(this, t, r, e, n - 1, -n);
          }
          var o = 0,
            h = 1,
            s = 0;
          for (this[r] = 255 & t; ++o < e && (h *= 256); )
            t < 0 && 0 === s && 0 !== this[r + o - 1] && (s = 1),
              (this[r + o] = (((t / h) >> 0) - s) & 255);
          return r + e;
        }),
        (u.prototype.writeIntBE = function (t, r, e, i) {
          if (((t = +t), (r |= 0), !i)) {
            var n = Math.pow(2, 8 * e - 1);
            I(this, t, r, e, n - 1, -n);
          }
          var o = e - 1,
            h = 1,
            s = 0;
          for (this[r + o] = 255 & t; --o >= 0 && (h *= 256); )
            t < 0 && 0 === s && 0 !== this[r + o + 1] && (s = 1),
              (this[r + o] = (((t / h) >> 0) - s) & 255);
          return r + e;
        }),
        (u.prototype.writeInt8 = function (t, r, e) {
          return (
            (t = +t),
            (r |= 0),
            e || I(this, t, r, 1, 127, -128),
            u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
            t < 0 && (t = 255 + t + 1),
            (this[r] = 255 & t),
            r + 1
          );
        }),
        (u.prototype.writeInt16LE = function (t, r, e) {
          return (
            (t = +t),
            (r |= 0),
            e || I(this, t, r, 2, 32767, -32768),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[r] = 255 & t), (this[r + 1] = t >>> 8))
              : U(this, t, r, !0),
            r + 2
          );
        }),
        (u.prototype.writeInt16BE = function (t, r, e) {
          return (
            (t = +t),
            (r |= 0),
            e || I(this, t, r, 2, 32767, -32768),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[r] = t >>> 8), (this[r + 1] = 255 & t))
              : U(this, t, r, !1),
            r + 2
          );
        }),
        (u.prototype.writeInt32LE = function (t, r, e) {
          return (
            (t = +t),
            (r |= 0),
            e || I(this, t, r, 4, 2147483647, -2147483648),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[r] = 255 & t),
                (this[r + 1] = t >>> 8),
                (this[r + 2] = t >>> 16),
                (this[r + 3] = t >>> 24))
              : L(this, t, r, !0),
            r + 4
          );
        }),
        (u.prototype.writeInt32BE = function (t, r, e) {
          return (
            (t = +t),
            (r |= 0),
            e || I(this, t, r, 4, 2147483647, -2147483648),
            t < 0 && (t = 4294967295 + t + 1),
            u.TYPED_ARRAY_SUPPORT
              ? ((this[r] = t >>> 24),
                (this[r + 1] = t >>> 16),
                (this[r + 2] = t >>> 8),
                (this[r + 3] = 255 & t))
              : L(this, t, r, !1),
            r + 4
          );
        }),
        (u.prototype.writeFloatLE = function (t, r, e) {
          return C(this, t, r, !0, e);
        }),
        (u.prototype.writeFloatBE = function (t, r, e) {
          return C(this, t, r, !1, e);
        }),
        (u.prototype.writeDoubleLE = function (t, r, e) {
          return N(this, t, r, !0, e);
        }),
        (u.prototype.writeDoubleBE = function (t, r, e) {
          return N(this, t, r, !1, e);
        }),
        (u.prototype.copy = function (t, r, e, i) {
          if (
            (e || (e = 0),
            i || 0 === i || (i = this.length),
            r >= t.length && (r = t.length),
            r || (r = 0),
            i > 0 && i < e && (i = e),
            i === e)
          )
            return 0;
          if (0 === t.length || 0 === this.length) return 0;
          if (r < 0) throw new RangeError("targetStart out of bounds");
          if (e < 0 || e >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (i < 0) throw new RangeError("sourceEnd out of bounds");
          i > this.length && (i = this.length),
            t.length - r < i - e && (i = t.length - r + e);
          var n,
            o = i - e;
          if (this === t && e < r && r < i)
            for (n = o - 1; n >= 0; --n) t[n + r] = this[n + e];
          else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
            for (n = 0; n < o; ++n) t[n + r] = this[n + e];
          else Uint8Array.prototype.set.call(t, this.subarray(e, e + o), r);
          return o;
        }),
        (u.prototype.fill = function (t, r, e, i) {
          if ("string" == typeof t) {
            if (
              ("string" == typeof r
                ? ((i = r), (r = 0), (e = this.length))
                : "string" == typeof e && ((i = e), (e = this.length)),
              1 === t.length)
            ) {
              var n = t.charCodeAt(0);
              n < 256 && (t = n);
            }
            if (void 0 !== i && "string" != typeof i)
              throw new TypeError("encoding must be a string");
            if ("string" == typeof i && !u.isEncoding(i))
              throw new TypeError("Unknown encoding: " + i);
          } else "number" == typeof t && (t &= 255);
          if (r < 0 || this.length < r || this.length < e)
            throw new RangeError("Out of range index");
          if (e <= r) return this;
          var o;
          if (
            ((r >>>= 0),
            (e = void 0 === e ? this.length : e >>> 0),
            t || (t = 0),
            "number" == typeof t)
          )
            for (o = r; o < e; ++o) this[o] = t;
          else {
            var h = u.isBuffer(t) ? t : $(new u(t, i).toString()),
              s = h.length;
            for (o = 0; o < e - r; ++o) this[o + r] = h[o % s];
          }
          return this;
        });
      var Y = /[^+\/0-9A-Za-z-_]/g;
      function j(t) {
        return t < 16 ? "0" + t.toString(16) : t.toString(16);
      }
      function $(t, r) {
        var e;
        r = r || 1 / 0;
        for (var i = t.length, n = null, o = [], h = 0; h < i; ++h) {
          if ((e = t.charCodeAt(h)) > 55295 && e < 57344) {
            if (!n) {
              if (e > 56319) {
                (r -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              if (h + 1 === i) {
                (r -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              n = e;
              continue;
            }
            if (e < 56320) {
              (r -= 3) > -1 && o.push(239, 191, 189), (n = e);
              continue;
            }
            e = 65536 + (((n - 55296) << 10) | (e - 56320));
          } else n && (r -= 3) > -1 && o.push(239, 191, 189);
          if (((n = null), e < 128)) {
            if ((r -= 1) < 0) break;
            o.push(e);
          } else if (e < 2048) {
            if ((r -= 2) < 0) break;
            o.push((e >> 6) | 192, (63 & e) | 128);
          } else if (e < 65536) {
            if ((r -= 3) < 0) break;
            o.push((e >> 12) | 224, ((e >> 6) & 63) | 128, (63 & e) | 128);
          } else {
            if (!(e < 1114112)) throw new Error("Invalid code point");
            if ((r -= 4) < 0) break;
            o.push(
              (e >> 18) | 240,
              ((e >> 12) & 63) | 128,
              ((e >> 6) & 63) | 128,
              (63 & e) | 128
            );
          }
        }
        return o;
      }
      function D(t) {
        return i.toByteArray(
          (function (t) {
            if (
              (t = (function (t) {
                return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
              })(t).replace(Y, "")).length < 2
            )
              return "";
            for (; t.length % 4 != 0; ) t += "=";
            return t;
          })(t)
        );
      }
      function Z(t, r, e, i) {
        for (var n = 0; n < i && !(n + e >= r.length || n >= t.length); ++n)
          r[n + e] = t[n];
        return n;
      }
    }.call(this, e(2)));
  },
  function (t, r, e) {
    (function (t) {
      !(function (t, r) {
        "use strict";
        function i(t, r) {
          if (!t) throw new Error(r || "Assertion failed");
        }
        function n(t, r) {
          t.super_ = r;
          var e = function () {};
          (e.prototype = r.prototype),
            (t.prototype = new e()),
            (t.prototype.constructor = t);
        }
        function o(t, r, e) {
          if (o.isBN(t)) return t;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== t &&
              (("le" !== r && "be" !== r) || ((e = r), (r = 10)),
              this._init(t || 0, r || 10, e || "be"));
        }
        var h;
        "object" == typeof t ? (t.exports = o) : (r.BN = o),
          (o.BN = o),
          (o.wordSize = 26);
        try {
          h = e(0).Buffer;
        } catch (t) {}
        function s(t, r, e) {
          for (var i = 0, n = Math.min(t.length, e), o = r; o < n; o++) {
            var h = t.charCodeAt(o) - 48;
            (i <<= 4),
              (i |=
                h >= 49 && h <= 54
                  ? h - 49 + 10
                  : h >= 17 && h <= 22
                  ? h - 17 + 10
                  : 15 & h);
          }
          return i;
        }
        function u(t, r, e, i) {
          for (var n = 0, o = Math.min(t.length, e), h = r; h < o; h++) {
            var s = t.charCodeAt(h) - 48;
            (n *= i), (n += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s);
          }
          return n;
        }
        (o.isBN = function (t) {
          return (
            t instanceof o ||
            (null !== t &&
              "object" == typeof t &&
              t.constructor.wordSize === o.wordSize &&
              Array.isArray(t.words))
          );
        }),
          (o.max = function (t, r) {
            return t.cmp(r) > 0 ? t : r;
          }),
          (o.min = function (t, r) {
            return t.cmp(r) < 0 ? t : r;
          }),
          (o.prototype._init = function (t, r, e) {
            if ("number" == typeof t) return this._initNumber(t, r, e);
            if ("object" == typeof t) return this._initArray(t, r, e);
            "hex" === r && (r = 16), i(r === (0 | r) && r >= 2 && r <= 36);
            var n = 0;
            "-" === (t = t.toString().replace(/\s+/g, ""))[0] && n++,
              16 === r ? this._parseHex(t, n) : this._parseBase(t, r, n),
              "-" === t[0] && (this.negative = 1),
              this.strip(),
              "le" === e && this._initArray(this.toArray(), r, e);
          }),
          (o.prototype._initNumber = function (t, r, e) {
            t < 0 && ((this.negative = 1), (t = -t)),
              t < 67108864
                ? ((this.words = [67108863 & t]), (this.length = 1))
                : t < 4503599627370496
                ? ((this.words = [67108863 & t, (t / 67108864) & 67108863]),
                  (this.length = 2))
                : (i(t < 9007199254740992),
                  (this.words = [67108863 & t, (t / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === e && this._initArray(this.toArray(), r, e);
          }),
          (o.prototype._initArray = function (t, r, e) {
            if ((i("number" == typeof t.length), t.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(t.length / 3)),
              (this.words = new Array(this.length));
            for (var n = 0; n < this.length; n++) this.words[n] = 0;
            var o,
              h,
              s = 0;
            if ("be" === e)
              for (n = t.length - 1, o = 0; n >= 0; n -= 3)
                (h = t[n] | (t[n - 1] << 8) | (t[n - 2] << 16)),
                  (this.words[o] |= (h << s) & 67108863),
                  (this.words[o + 1] = (h >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            else if ("le" === e)
              for (n = 0, o = 0; n < t.length; n += 3)
                (h = t[n] | (t[n + 1] << 8) | (t[n + 2] << 16)),
                  (this.words[o] |= (h << s) & 67108863),
                  (this.words[o + 1] = (h >>> (26 - s)) & 67108863),
                  (s += 24) >= 26 && ((s -= 26), o++);
            return this.strip();
          }),
          (o.prototype._parseHex = function (t, r) {
            (this.length = Math.ceil((t.length - r) / 6)),
              (this.words = new Array(this.length));
            for (var e = 0; e < this.length; e++) this.words[e] = 0;
            var i,
              n,
              o = 0;
            for (e = t.length - 6, i = 0; e >= r; e -= 6)
              (n = s(t, e, e + 6)),
                (this.words[i] |= (n << o) & 67108863),
                (this.words[i + 1] |= (n >>> (26 - o)) & 4194303),
                (o += 24) >= 26 && ((o -= 26), i++);
            e + 6 !== r &&
              ((n = s(t, r, e + 6)),
              (this.words[i] |= (n << o) & 67108863),
              (this.words[i + 1] |= (n >>> (26 - o)) & 4194303)),
              this.strip();
          }),
          (o.prototype._parseBase = function (t, r, e) {
            (this.words = [0]), (this.length = 1);
            for (var i = 0, n = 1; n <= 67108863; n *= r) i++;
            i--, (n = (n / r) | 0);
            for (
              var o = t.length - e,
                h = o % i,
                s = Math.min(o, o - h) + e,
                a = 0,
                f = e;
              f < s;
              f += i
            )
              (a = u(t, f, f + i, r)),
                this.imuln(n),
                this.words[0] + a < 67108864
                  ? (this.words[0] += a)
                  : this._iaddn(a);
            if (0 !== h) {
              var l = 1;
              for (a = u(t, f, t.length, r), f = 0; f < h; f++) l *= r;
              this.imuln(l),
                this.words[0] + a < 67108864
                  ? (this.words[0] += a)
                  : this._iaddn(a);
            }
          }),
          (o.prototype.copy = function (t) {
            t.words = new Array(this.length);
            for (var r = 0; r < this.length; r++) t.words[r] = this.words[r];
            (t.length = this.length),
              (t.negative = this.negative),
              (t.red = this.red);
          }),
          (o.prototype.clone = function () {
            var t = new o(null);
            return this.copy(t), t;
          }),
          (o.prototype._expand = function (t) {
            for (; this.length < t; ) this.words[this.length++] = 0;
            return this;
          }),
          (o.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (o.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          (o.prototype.inspect = function () {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          });
        var a = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          f = [
            0,
            0,
            25,
            16,
            12,
            11,
            10,
            9,
            8,
            8,
            7,
            7,
            7,
            7,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
          ],
          l = [
            0,
            0,
            33554432,
            43046721,
            16777216,
            48828125,
            60466176,
            40353607,
            16777216,
            43046721,
            1e7,
            19487171,
            35831808,
            62748517,
            7529536,
            11390625,
            16777216,
            24137569,
            34012224,
            47045881,
            64e6,
            4084101,
            5153632,
            6436343,
            7962624,
            9765625,
            11881376,
            14348907,
            17210368,
            20511149,
            243e5,
            28629151,
            33554432,
            39135393,
            45435424,
            52521875,
            60466176,
          ];
        function c(t, r, e) {
          e.negative = r.negative ^ t.negative;
          var i = (t.length + r.length) | 0;
          (e.length = i), (i = (i - 1) | 0);
          var n = 0 | t.words[0],
            o = 0 | r.words[0],
            h = n * o,
            s = 67108863 & h,
            u = (h / 67108864) | 0;
          e.words[0] = s;
          for (var a = 1; a < i; a++) {
            for (
              var f = u >>> 26,
                l = 67108863 & u,
                c = Math.min(a, r.length - 1),
                d = Math.max(0, a - t.length + 1);
              d <= c;
              d++
            ) {
              var p = (a - d) | 0;
              (f +=
                ((h = (n = 0 | t.words[p]) * (o = 0 | r.words[d]) + l) /
                  67108864) |
                0),
                (l = 67108863 & h);
            }
            (e.words[a] = 0 | l), (u = 0 | f);
          }
          return 0 !== u ? (e.words[a] = 0 | u) : e.length--, e.strip();
        }
        (o.prototype.toString = function (t, r) {
          var e;
          if (((t = t || 10), (r = 0 | r || 1), 16 === t || "hex" === t)) {
            e = "";
            for (var n = 0, o = 0, h = 0; h < this.length; h++) {
              var s = this.words[h],
                u = (16777215 & ((s << n) | o)).toString(16);
              (e =
                0 !== (o = (s >>> (24 - n)) & 16777215) || h !== this.length - 1
                  ? a[6 - u.length] + u + e
                  : u + e),
                (n += 2) >= 26 && ((n -= 26), h--);
            }
            for (0 !== o && (e = o.toString(16) + e); e.length % r != 0; )
              e = "0" + e;
            return 0 !== this.negative && (e = "-" + e), e;
          }
          if (t === (0 | t) && t >= 2 && t <= 36) {
            var c = f[t],
              d = l[t];
            e = "";
            var p = this.clone();
            for (p.negative = 0; !p.isZero(); ) {
              var m = p.modn(d).toString(t);
              e = (p = p.idivn(d)).isZero() ? m + e : a[c - m.length] + m + e;
            }
            for (this.isZero() && (e = "0" + e); e.length % r != 0; )
              e = "0" + e;
            return 0 !== this.negative && (e = "-" + e), e;
          }
          i(!1, "Base should be between 2 and 36");
        }),
          (o.prototype.toNumber = function () {
            var t = this.words[0];
            return (
              2 === this.length
                ? (t += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (t += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  i(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -t : t
            );
          }),
          (o.prototype.toJSON = function () {
            return this.toString(16);
          }),
          (o.prototype.toBuffer = function (t, r) {
            return i(void 0 !== h), this.toArrayLike(h, t, r);
          }),
          (o.prototype.toArray = function (t, r) {
            return this.toArrayLike(Array, t, r);
          }),
          (o.prototype.toArrayLike = function (t, r, e) {
            var n = this.byteLength(),
              o = e || Math.max(1, n);
            i(n <= o, "byte array longer than desired length"),
              i(o > 0, "Requested array length <= 0"),
              this.strip();
            var h,
              s,
              u = "le" === r,
              a = new t(o),
              f = this.clone();
            if (u) {
              for (s = 0; !f.isZero(); s++)
                (h = f.andln(255)), f.iushrn(8), (a[s] = h);
              for (; s < o; s++) a[s] = 0;
            } else {
              for (s = 0; s < o - n; s++) a[s] = 0;
              for (s = 0; !f.isZero(); s++)
                (h = f.andln(255)), f.iushrn(8), (a[o - s - 1] = h);
            }
            return a;
          }),
          Math.clz32
            ? (o.prototype._countBits = function (t) {
                return 32 - Math.clz32(t);
              })
            : (o.prototype._countBits = function (t) {
                var r = t,
                  e = 0;
                return (
                  r >= 4096 && ((e += 13), (r >>>= 13)),
                  r >= 64 && ((e += 7), (r >>>= 7)),
                  r >= 8 && ((e += 4), (r >>>= 4)),
                  r >= 2 && ((e += 2), (r >>>= 2)),
                  e + r
                );
              }),
          (o.prototype._zeroBits = function (t) {
            if (0 === t) return 26;
            var r = t,
              e = 0;
            return (
              0 == (8191 & r) && ((e += 13), (r >>>= 13)),
              0 == (127 & r) && ((e += 7), (r >>>= 7)),
              0 == (15 & r) && ((e += 4), (r >>>= 4)),
              0 == (3 & r) && ((e += 2), (r >>>= 2)),
              0 == (1 & r) && e++,
              e
            );
          }),
          (o.prototype.bitLength = function () {
            var t = this.words[this.length - 1],
              r = this._countBits(t);
            return 26 * (this.length - 1) + r;
          }),
          (o.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var t = 0, r = 0; r < this.length; r++) {
              var e = this._zeroBits(this.words[r]);
              if (((t += e), 26 !== e)) break;
            }
            return t;
          }),
          (o.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (o.prototype.toTwos = function (t) {
            return 0 !== this.negative
              ? this.abs().inotn(t).iaddn(1)
              : this.clone();
          }),
          (o.prototype.fromTwos = function (t) {
            return this.testn(t - 1)
              ? this.notn(t).iaddn(1).ineg()
              : this.clone();
          }),
          (o.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (o.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (o.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (o.prototype.iuor = function (t) {
            for (; this.length < t.length; ) this.words[this.length++] = 0;
            for (var r = 0; r < t.length; r++)
              this.words[r] = this.words[r] | t.words[r];
            return this.strip();
          }),
          (o.prototype.ior = function (t) {
            return i(0 == (this.negative | t.negative)), this.iuor(t);
          }),
          (o.prototype.or = function (t) {
            return this.length > t.length
              ? this.clone().ior(t)
              : t.clone().ior(this);
          }),
          (o.prototype.uor = function (t) {
            return this.length > t.length
              ? this.clone().iuor(t)
              : t.clone().iuor(this);
          }),
          (o.prototype.iuand = function (t) {
            var r;
            r = this.length > t.length ? t : this;
            for (var e = 0; e < r.length; e++)
              this.words[e] = this.words[e] & t.words[e];
            return (this.length = r.length), this.strip();
          }),
          (o.prototype.iand = function (t) {
            return i(0 == (this.negative | t.negative)), this.iuand(t);
          }),
          (o.prototype.and = function (t) {
            return this.length > t.length
              ? this.clone().iand(t)
              : t.clone().iand(this);
          }),
          (o.prototype.uand = function (t) {
            return this.length > t.length
              ? this.clone().iuand(t)
              : t.clone().iuand(this);
          }),
          (o.prototype.iuxor = function (t) {
            var r, e;
            this.length > t.length
              ? ((r = this), (e = t))
              : ((r = t), (e = this));
            for (var i = 0; i < e.length; i++)
              this.words[i] = r.words[i] ^ e.words[i];
            if (this !== r)
              for (; i < r.length; i++) this.words[i] = r.words[i];
            return (this.length = r.length), this.strip();
          }),
          (o.prototype.ixor = function (t) {
            return i(0 == (this.negative | t.negative)), this.iuxor(t);
          }),
          (o.prototype.xor = function (t) {
            return this.length > t.length
              ? this.clone().ixor(t)
              : t.clone().ixor(this);
          }),
          (o.prototype.uxor = function (t) {
            return this.length > t.length
              ? this.clone().iuxor(t)
              : t.clone().iuxor(this);
          }),
          (o.prototype.inotn = function (t) {
            i("number" == typeof t && t >= 0);
            var r = 0 | Math.ceil(t / 26),
              e = t % 26;
            this._expand(r), e > 0 && r--;
            for (var n = 0; n < r; n++)
              this.words[n] = 67108863 & ~this.words[n];
            return (
              e > 0 &&
                (this.words[n] = ~this.words[n] & (67108863 >> (26 - e))),
              this.strip()
            );
          }),
          (o.prototype.notn = function (t) {
            return this.clone().inotn(t);
          }),
          (o.prototype.setn = function (t, r) {
            i("number" == typeof t && t >= 0);
            var e = (t / 26) | 0,
              n = t % 26;
            return (
              this._expand(e + 1),
              (this.words[e] = r
                ? this.words[e] | (1 << n)
                : this.words[e] & ~(1 << n)),
              this.strip()
            );
          }),
          (o.prototype.iadd = function (t) {
            var r, e, i;
            if (0 !== this.negative && 0 === t.negative)
              return (
                (this.negative = 0),
                (r = this.isub(t)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== t.negative)
              return (
                (t.negative = 0),
                (r = this.isub(t)),
                (t.negative = 1),
                r._normSign()
              );
            this.length > t.length
              ? ((e = this), (i = t))
              : ((e = t), (i = this));
            for (var n = 0, o = 0; o < i.length; o++)
              (r = (0 | e.words[o]) + (0 | i.words[o]) + n),
                (this.words[o] = 67108863 & r),
                (n = r >>> 26);
            for (; 0 !== n && o < e.length; o++)
              (r = (0 | e.words[o]) + n),
                (this.words[o] = 67108863 & r),
                (n = r >>> 26);
            if (((this.length = e.length), 0 !== n))
              (this.words[this.length] = n), this.length++;
            else if (e !== this)
              for (; o < e.length; o++) this.words[o] = e.words[o];
            return this;
          }),
          (o.prototype.add = function (t) {
            var r;
            return 0 !== t.negative && 0 === this.negative
              ? ((t.negative = 0), (r = this.sub(t)), (t.negative ^= 1), r)
              : 0 === t.negative && 0 !== this.negative
              ? ((this.negative = 0), (r = t.sub(this)), (this.negative = 1), r)
              : this.length > t.length
              ? this.clone().iadd(t)
              : t.clone().iadd(this);
          }),
          (o.prototype.isub = function (t) {
            if (0 !== t.negative) {
              t.negative = 0;
              var r = this.iadd(t);
              return (t.negative = 1), r._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(t),
                (this.negative = 1),
                this._normSign()
              );
            var e,
              i,
              n = this.cmp(t);
            if (0 === n)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            n > 0 ? ((e = this), (i = t)) : ((e = t), (i = this));
            for (var o = 0, h = 0; h < i.length; h++)
              (o = (r = (0 | e.words[h]) - (0 | i.words[h]) + o) >> 26),
                (this.words[h] = 67108863 & r);
            for (; 0 !== o && h < e.length; h++)
              (o = (r = (0 | e.words[h]) + o) >> 26),
                (this.words[h] = 67108863 & r);
            if (0 === o && h < e.length && e !== this)
              for (; h < e.length; h++) this.words[h] = e.words[h];
            return (
              (this.length = Math.max(this.length, h)),
              e !== this && (this.negative = 1),
              this.strip()
            );
          }),
          (o.prototype.sub = function (t) {
            return this.clone().isub(t);
          });
        var d = function (t, r, e) {
          var i,
            n,
            o,
            h = t.words,
            s = r.words,
            u = e.words,
            a = 0,
            f = 0 | h[0],
            l = 8191 & f,
            c = f >>> 13,
            d = 0 | h[1],
            p = 8191 & d,
            m = d >>> 13,
            g = 0 | h[2],
            v = 8191 & g,
            y = g >>> 13,
            w = 0 | h[3],
            M = 8191 & w,
            b = w >>> 13,
            _ = 0 | h[4],
            A = 8191 & _,
            E = _ >>> 13,
            x = 0 | h[5],
            B = 8191 & x,
            S = x >>> 13,
            R = 0 | h[6],
            T = 8191 & R,
            k = R >>> 13,
            P = 0 | h[7],
            I = 8191 & P,
            U = P >>> 13,
            L = 0 | h[8],
            O = 8191 & L,
            C = L >>> 13,
            N = 0 | h[9],
            Y = 8191 & N,
            j = N >>> 13,
            $ = 0 | s[0],
            D = 8191 & $,
            Z = $ >>> 13,
            q = 0 | s[1],
            z = 8191 & q,
            F = q >>> 13,
            K = 0 | s[2],
            J = 8191 & K,
            H = K >>> 13,
            V = 0 | s[3],
            X = 8191 & V,
            G = V >>> 13,
            Q = 0 | s[4],
            W = 8191 & Q,
            tt = Q >>> 13,
            rt = 0 | s[5],
            et = 8191 & rt,
            it = rt >>> 13,
            nt = 0 | s[6],
            ot = 8191 & nt,
            ht = nt >>> 13,
            st = 0 | s[7],
            ut = 8191 & st,
            at = st >>> 13,
            ft = 0 | s[8],
            lt = 8191 & ft,
            ct = ft >>> 13,
            dt = 0 | s[9],
            pt = 8191 & dt,
            mt = dt >>> 13;
          (e.negative = t.negative ^ r.negative), (e.length = 19);
          var gt =
            (((a + (i = Math.imul(l, D))) | 0) +
              ((8191 & (n = ((n = Math.imul(l, Z)) + Math.imul(c, D)) | 0)) <<
                13)) |
            0;
          (a = ((((o = Math.imul(c, Z)) + (n >>> 13)) | 0) + (gt >>> 26)) | 0),
            (gt &= 67108863),
            (i = Math.imul(p, D)),
            (n = ((n = Math.imul(p, Z)) + Math.imul(m, D)) | 0),
            (o = Math.imul(m, Z));
          var vt =
            (((a + (i = (i + Math.imul(l, z)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, F)) | 0) + Math.imul(c, z)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(c, F)) | 0) + (n >>> 13)) | 0) +
              (vt >>> 26)) |
            0),
            (vt &= 67108863),
            (i = Math.imul(v, D)),
            (n = ((n = Math.imul(v, Z)) + Math.imul(y, D)) | 0),
            (o = Math.imul(y, Z)),
            (i = (i + Math.imul(p, z)) | 0),
            (n = ((n = (n + Math.imul(p, F)) | 0) + Math.imul(m, z)) | 0),
            (o = (o + Math.imul(m, F)) | 0);
          var yt =
            (((a + (i = (i + Math.imul(l, J)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, H)) | 0) + Math.imul(c, J)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(c, H)) | 0) + (n >>> 13)) | 0) +
              (yt >>> 26)) |
            0),
            (yt &= 67108863),
            (i = Math.imul(M, D)),
            (n = ((n = Math.imul(M, Z)) + Math.imul(b, D)) | 0),
            (o = Math.imul(b, Z)),
            (i = (i + Math.imul(v, z)) | 0),
            (n = ((n = (n + Math.imul(v, F)) | 0) + Math.imul(y, z)) | 0),
            (o = (o + Math.imul(y, F)) | 0),
            (i = (i + Math.imul(p, J)) | 0),
            (n = ((n = (n + Math.imul(p, H)) | 0) + Math.imul(m, J)) | 0),
            (o = (o + Math.imul(m, H)) | 0);
          var wt =
            (((a + (i = (i + Math.imul(l, X)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, G)) | 0) + Math.imul(c, X)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(c, G)) | 0) + (n >>> 13)) | 0) +
              (wt >>> 26)) |
            0),
            (wt &= 67108863),
            (i = Math.imul(A, D)),
            (n = ((n = Math.imul(A, Z)) + Math.imul(E, D)) | 0),
            (o = Math.imul(E, Z)),
            (i = (i + Math.imul(M, z)) | 0),
            (n = ((n = (n + Math.imul(M, F)) | 0) + Math.imul(b, z)) | 0),
            (o = (o + Math.imul(b, F)) | 0),
            (i = (i + Math.imul(v, J)) | 0),
            (n = ((n = (n + Math.imul(v, H)) | 0) + Math.imul(y, J)) | 0),
            (o = (o + Math.imul(y, H)) | 0),
            (i = (i + Math.imul(p, X)) | 0),
            (n = ((n = (n + Math.imul(p, G)) | 0) + Math.imul(m, X)) | 0),
            (o = (o + Math.imul(m, G)) | 0);
          var Mt =
            (((a + (i = (i + Math.imul(l, W)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, tt)) | 0) + Math.imul(c, W)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(c, tt)) | 0) + (n >>> 13)) | 0) +
              (Mt >>> 26)) |
            0),
            (Mt &= 67108863),
            (i = Math.imul(B, D)),
            (n = ((n = Math.imul(B, Z)) + Math.imul(S, D)) | 0),
            (o = Math.imul(S, Z)),
            (i = (i + Math.imul(A, z)) | 0),
            (n = ((n = (n + Math.imul(A, F)) | 0) + Math.imul(E, z)) | 0),
            (o = (o + Math.imul(E, F)) | 0),
            (i = (i + Math.imul(M, J)) | 0),
            (n = ((n = (n + Math.imul(M, H)) | 0) + Math.imul(b, J)) | 0),
            (o = (o + Math.imul(b, H)) | 0),
            (i = (i + Math.imul(v, X)) | 0),
            (n = ((n = (n + Math.imul(v, G)) | 0) + Math.imul(y, X)) | 0),
            (o = (o + Math.imul(y, G)) | 0),
            (i = (i + Math.imul(p, W)) | 0),
            (n = ((n = (n + Math.imul(p, tt)) | 0) + Math.imul(m, W)) | 0),
            (o = (o + Math.imul(m, tt)) | 0);
          var bt =
            (((a + (i = (i + Math.imul(l, et)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, it)) | 0) + Math.imul(c, et)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(c, it)) | 0) + (n >>> 13)) | 0) +
              (bt >>> 26)) |
            0),
            (bt &= 67108863),
            (i = Math.imul(T, D)),
            (n = ((n = Math.imul(T, Z)) + Math.imul(k, D)) | 0),
            (o = Math.imul(k, Z)),
            (i = (i + Math.imul(B, z)) | 0),
            (n = ((n = (n + Math.imul(B, F)) | 0) + Math.imul(S, z)) | 0),
            (o = (o + Math.imul(S, F)) | 0),
            (i = (i + Math.imul(A, J)) | 0),
            (n = ((n = (n + Math.imul(A, H)) | 0) + Math.imul(E, J)) | 0),
            (o = (o + Math.imul(E, H)) | 0),
            (i = (i + Math.imul(M, X)) | 0),
            (n = ((n = (n + Math.imul(M, G)) | 0) + Math.imul(b, X)) | 0),
            (o = (o + Math.imul(b, G)) | 0),
            (i = (i + Math.imul(v, W)) | 0),
            (n = ((n = (n + Math.imul(v, tt)) | 0) + Math.imul(y, W)) | 0),
            (o = (o + Math.imul(y, tt)) | 0),
            (i = (i + Math.imul(p, et)) | 0),
            (n = ((n = (n + Math.imul(p, it)) | 0) + Math.imul(m, et)) | 0),
            (o = (o + Math.imul(m, it)) | 0);
          var _t =
            (((a + (i = (i + Math.imul(l, ot)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, ht)) | 0) + Math.imul(c, ot)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(c, ht)) | 0) + (n >>> 13)) | 0) +
              (_t >>> 26)) |
            0),
            (_t &= 67108863),
            (i = Math.imul(I, D)),
            (n = ((n = Math.imul(I, Z)) + Math.imul(U, D)) | 0),
            (o = Math.imul(U, Z)),
            (i = (i + Math.imul(T, z)) | 0),
            (n = ((n = (n + Math.imul(T, F)) | 0) + Math.imul(k, z)) | 0),
            (o = (o + Math.imul(k, F)) | 0),
            (i = (i + Math.imul(B, J)) | 0),
            (n = ((n = (n + Math.imul(B, H)) | 0) + Math.imul(S, J)) | 0),
            (o = (o + Math.imul(S, H)) | 0),
            (i = (i + Math.imul(A, X)) | 0),
            (n = ((n = (n + Math.imul(A, G)) | 0) + Math.imul(E, X)) | 0),
            (o = (o + Math.imul(E, G)) | 0),
            (i = (i + Math.imul(M, W)) | 0),
            (n = ((n = (n + Math.imul(M, tt)) | 0) + Math.imul(b, W)) | 0),
            (o = (o + Math.imul(b, tt)) | 0),
            (i = (i + Math.imul(v, et)) | 0),
            (n = ((n = (n + Math.imul(v, it)) | 0) + Math.imul(y, et)) | 0),
            (o = (o + Math.imul(y, it)) | 0),
            (i = (i + Math.imul(p, ot)) | 0),
            (n = ((n = (n + Math.imul(p, ht)) | 0) + Math.imul(m, ot)) | 0),
            (o = (o + Math.imul(m, ht)) | 0);
          var At =
            (((a + (i = (i + Math.imul(l, ut)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, at)) | 0) + Math.imul(c, ut)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(c, at)) | 0) + (n >>> 13)) | 0) +
              (At >>> 26)) |
            0),
            (At &= 67108863),
            (i = Math.imul(O, D)),
            (n = ((n = Math.imul(O, Z)) + Math.imul(C, D)) | 0),
            (o = Math.imul(C, Z)),
            (i = (i + Math.imul(I, z)) | 0),
            (n = ((n = (n + Math.imul(I, F)) | 0) + Math.imul(U, z)) | 0),
            (o = (o + Math.imul(U, F)) | 0),
            (i = (i + Math.imul(T, J)) | 0),
            (n = ((n = (n + Math.imul(T, H)) | 0) + Math.imul(k, J)) | 0),
            (o = (o + Math.imul(k, H)) | 0),
            (i = (i + Math.imul(B, X)) | 0),
            (n = ((n = (n + Math.imul(B, G)) | 0) + Math.imul(S, X)) | 0),
            (o = (o + Math.imul(S, G)) | 0),
            (i = (i + Math.imul(A, W)) | 0),
            (n = ((n = (n + Math.imul(A, tt)) | 0) + Math.imul(E, W)) | 0),
            (o = (o + Math.imul(E, tt)) | 0),
            (i = (i + Math.imul(M, et)) | 0),
            (n = ((n = (n + Math.imul(M, it)) | 0) + Math.imul(b, et)) | 0),
            (o = (o + Math.imul(b, it)) | 0),
            (i = (i + Math.imul(v, ot)) | 0),
            (n = ((n = (n + Math.imul(v, ht)) | 0) + Math.imul(y, ot)) | 0),
            (o = (o + Math.imul(y, ht)) | 0),
            (i = (i + Math.imul(p, ut)) | 0),
            (n = ((n = (n + Math.imul(p, at)) | 0) + Math.imul(m, ut)) | 0),
            (o = (o + Math.imul(m, at)) | 0);
          var Et =
            (((a + (i = (i + Math.imul(l, lt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, ct)) | 0) + Math.imul(c, lt)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(c, ct)) | 0) + (n >>> 13)) | 0) +
              (Et >>> 26)) |
            0),
            (Et &= 67108863),
            (i = Math.imul(Y, D)),
            (n = ((n = Math.imul(Y, Z)) + Math.imul(j, D)) | 0),
            (o = Math.imul(j, Z)),
            (i = (i + Math.imul(O, z)) | 0),
            (n = ((n = (n + Math.imul(O, F)) | 0) + Math.imul(C, z)) | 0),
            (o = (o + Math.imul(C, F)) | 0),
            (i = (i + Math.imul(I, J)) | 0),
            (n = ((n = (n + Math.imul(I, H)) | 0) + Math.imul(U, J)) | 0),
            (o = (o + Math.imul(U, H)) | 0),
            (i = (i + Math.imul(T, X)) | 0),
            (n = ((n = (n + Math.imul(T, G)) | 0) + Math.imul(k, X)) | 0),
            (o = (o + Math.imul(k, G)) | 0),
            (i = (i + Math.imul(B, W)) | 0),
            (n = ((n = (n + Math.imul(B, tt)) | 0) + Math.imul(S, W)) | 0),
            (o = (o + Math.imul(S, tt)) | 0),
            (i = (i + Math.imul(A, et)) | 0),
            (n = ((n = (n + Math.imul(A, it)) | 0) + Math.imul(E, et)) | 0),
            (o = (o + Math.imul(E, it)) | 0),
            (i = (i + Math.imul(M, ot)) | 0),
            (n = ((n = (n + Math.imul(M, ht)) | 0) + Math.imul(b, ot)) | 0),
            (o = (o + Math.imul(b, ht)) | 0),
            (i = (i + Math.imul(v, ut)) | 0),
            (n = ((n = (n + Math.imul(v, at)) | 0) + Math.imul(y, ut)) | 0),
            (o = (o + Math.imul(y, at)) | 0),
            (i = (i + Math.imul(p, lt)) | 0),
            (n = ((n = (n + Math.imul(p, ct)) | 0) + Math.imul(m, lt)) | 0),
            (o = (o + Math.imul(m, ct)) | 0);
          var xt =
            (((a + (i = (i + Math.imul(l, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(l, mt)) | 0) + Math.imul(c, pt)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(c, mt)) | 0) + (n >>> 13)) | 0) +
              (xt >>> 26)) |
            0),
            (xt &= 67108863),
            (i = Math.imul(Y, z)),
            (n = ((n = Math.imul(Y, F)) + Math.imul(j, z)) | 0),
            (o = Math.imul(j, F)),
            (i = (i + Math.imul(O, J)) | 0),
            (n = ((n = (n + Math.imul(O, H)) | 0) + Math.imul(C, J)) | 0),
            (o = (o + Math.imul(C, H)) | 0),
            (i = (i + Math.imul(I, X)) | 0),
            (n = ((n = (n + Math.imul(I, G)) | 0) + Math.imul(U, X)) | 0),
            (o = (o + Math.imul(U, G)) | 0),
            (i = (i + Math.imul(T, W)) | 0),
            (n = ((n = (n + Math.imul(T, tt)) | 0) + Math.imul(k, W)) | 0),
            (o = (o + Math.imul(k, tt)) | 0),
            (i = (i + Math.imul(B, et)) | 0),
            (n = ((n = (n + Math.imul(B, it)) | 0) + Math.imul(S, et)) | 0),
            (o = (o + Math.imul(S, it)) | 0),
            (i = (i + Math.imul(A, ot)) | 0),
            (n = ((n = (n + Math.imul(A, ht)) | 0) + Math.imul(E, ot)) | 0),
            (o = (o + Math.imul(E, ht)) | 0),
            (i = (i + Math.imul(M, ut)) | 0),
            (n = ((n = (n + Math.imul(M, at)) | 0) + Math.imul(b, ut)) | 0),
            (o = (o + Math.imul(b, at)) | 0),
            (i = (i + Math.imul(v, lt)) | 0),
            (n = ((n = (n + Math.imul(v, ct)) | 0) + Math.imul(y, lt)) | 0),
            (o = (o + Math.imul(y, ct)) | 0);
          var Bt =
            (((a + (i = (i + Math.imul(p, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(p, mt)) | 0) + Math.imul(m, pt)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(m, mt)) | 0) + (n >>> 13)) | 0) +
              (Bt >>> 26)) |
            0),
            (Bt &= 67108863),
            (i = Math.imul(Y, J)),
            (n = ((n = Math.imul(Y, H)) + Math.imul(j, J)) | 0),
            (o = Math.imul(j, H)),
            (i = (i + Math.imul(O, X)) | 0),
            (n = ((n = (n + Math.imul(O, G)) | 0) + Math.imul(C, X)) | 0),
            (o = (o + Math.imul(C, G)) | 0),
            (i = (i + Math.imul(I, W)) | 0),
            (n = ((n = (n + Math.imul(I, tt)) | 0) + Math.imul(U, W)) | 0),
            (o = (o + Math.imul(U, tt)) | 0),
            (i = (i + Math.imul(T, et)) | 0),
            (n = ((n = (n + Math.imul(T, it)) | 0) + Math.imul(k, et)) | 0),
            (o = (o + Math.imul(k, it)) | 0),
            (i = (i + Math.imul(B, ot)) | 0),
            (n = ((n = (n + Math.imul(B, ht)) | 0) + Math.imul(S, ot)) | 0),
            (o = (o + Math.imul(S, ht)) | 0),
            (i = (i + Math.imul(A, ut)) | 0),
            (n = ((n = (n + Math.imul(A, at)) | 0) + Math.imul(E, ut)) | 0),
            (o = (o + Math.imul(E, at)) | 0),
            (i = (i + Math.imul(M, lt)) | 0),
            (n = ((n = (n + Math.imul(M, ct)) | 0) + Math.imul(b, lt)) | 0),
            (o = (o + Math.imul(b, ct)) | 0);
          var St =
            (((a + (i = (i + Math.imul(v, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(v, mt)) | 0) + Math.imul(y, pt)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(y, mt)) | 0) + (n >>> 13)) | 0) +
              (St >>> 26)) |
            0),
            (St &= 67108863),
            (i = Math.imul(Y, X)),
            (n = ((n = Math.imul(Y, G)) + Math.imul(j, X)) | 0),
            (o = Math.imul(j, G)),
            (i = (i + Math.imul(O, W)) | 0),
            (n = ((n = (n + Math.imul(O, tt)) | 0) + Math.imul(C, W)) | 0),
            (o = (o + Math.imul(C, tt)) | 0),
            (i = (i + Math.imul(I, et)) | 0),
            (n = ((n = (n + Math.imul(I, it)) | 0) + Math.imul(U, et)) | 0),
            (o = (o + Math.imul(U, it)) | 0),
            (i = (i + Math.imul(T, ot)) | 0),
            (n = ((n = (n + Math.imul(T, ht)) | 0) + Math.imul(k, ot)) | 0),
            (o = (o + Math.imul(k, ht)) | 0),
            (i = (i + Math.imul(B, ut)) | 0),
            (n = ((n = (n + Math.imul(B, at)) | 0) + Math.imul(S, ut)) | 0),
            (o = (o + Math.imul(S, at)) | 0),
            (i = (i + Math.imul(A, lt)) | 0),
            (n = ((n = (n + Math.imul(A, ct)) | 0) + Math.imul(E, lt)) | 0),
            (o = (o + Math.imul(E, ct)) | 0);
          var Rt =
            (((a + (i = (i + Math.imul(M, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(M, mt)) | 0) + Math.imul(b, pt)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(b, mt)) | 0) + (n >>> 13)) | 0) +
              (Rt >>> 26)) |
            0),
            (Rt &= 67108863),
            (i = Math.imul(Y, W)),
            (n = ((n = Math.imul(Y, tt)) + Math.imul(j, W)) | 0),
            (o = Math.imul(j, tt)),
            (i = (i + Math.imul(O, et)) | 0),
            (n = ((n = (n + Math.imul(O, it)) | 0) + Math.imul(C, et)) | 0),
            (o = (o + Math.imul(C, it)) | 0),
            (i = (i + Math.imul(I, ot)) | 0),
            (n = ((n = (n + Math.imul(I, ht)) | 0) + Math.imul(U, ot)) | 0),
            (o = (o + Math.imul(U, ht)) | 0),
            (i = (i + Math.imul(T, ut)) | 0),
            (n = ((n = (n + Math.imul(T, at)) | 0) + Math.imul(k, ut)) | 0),
            (o = (o + Math.imul(k, at)) | 0),
            (i = (i + Math.imul(B, lt)) | 0),
            (n = ((n = (n + Math.imul(B, ct)) | 0) + Math.imul(S, lt)) | 0),
            (o = (o + Math.imul(S, ct)) | 0);
          var Tt =
            (((a + (i = (i + Math.imul(A, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(A, mt)) | 0) + Math.imul(E, pt)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(E, mt)) | 0) + (n >>> 13)) | 0) +
              (Tt >>> 26)) |
            0),
            (Tt &= 67108863),
            (i = Math.imul(Y, et)),
            (n = ((n = Math.imul(Y, it)) + Math.imul(j, et)) | 0),
            (o = Math.imul(j, it)),
            (i = (i + Math.imul(O, ot)) | 0),
            (n = ((n = (n + Math.imul(O, ht)) | 0) + Math.imul(C, ot)) | 0),
            (o = (o + Math.imul(C, ht)) | 0),
            (i = (i + Math.imul(I, ut)) | 0),
            (n = ((n = (n + Math.imul(I, at)) | 0) + Math.imul(U, ut)) | 0),
            (o = (o + Math.imul(U, at)) | 0),
            (i = (i + Math.imul(T, lt)) | 0),
            (n = ((n = (n + Math.imul(T, ct)) | 0) + Math.imul(k, lt)) | 0),
            (o = (o + Math.imul(k, ct)) | 0);
          var kt =
            (((a + (i = (i + Math.imul(B, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(B, mt)) | 0) + Math.imul(S, pt)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(S, mt)) | 0) + (n >>> 13)) | 0) +
              (kt >>> 26)) |
            0),
            (kt &= 67108863),
            (i = Math.imul(Y, ot)),
            (n = ((n = Math.imul(Y, ht)) + Math.imul(j, ot)) | 0),
            (o = Math.imul(j, ht)),
            (i = (i + Math.imul(O, ut)) | 0),
            (n = ((n = (n + Math.imul(O, at)) | 0) + Math.imul(C, ut)) | 0),
            (o = (o + Math.imul(C, at)) | 0),
            (i = (i + Math.imul(I, lt)) | 0),
            (n = ((n = (n + Math.imul(I, ct)) | 0) + Math.imul(U, lt)) | 0),
            (o = (o + Math.imul(U, ct)) | 0);
          var Pt =
            (((a + (i = (i + Math.imul(T, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(T, mt)) | 0) + Math.imul(k, pt)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(k, mt)) | 0) + (n >>> 13)) | 0) +
              (Pt >>> 26)) |
            0),
            (Pt &= 67108863),
            (i = Math.imul(Y, ut)),
            (n = ((n = Math.imul(Y, at)) + Math.imul(j, ut)) | 0),
            (o = Math.imul(j, at)),
            (i = (i + Math.imul(O, lt)) | 0),
            (n = ((n = (n + Math.imul(O, ct)) | 0) + Math.imul(C, lt)) | 0),
            (o = (o + Math.imul(C, ct)) | 0);
          var It =
            (((a + (i = (i + Math.imul(I, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(I, mt)) | 0) + Math.imul(U, pt)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(U, mt)) | 0) + (n >>> 13)) | 0) +
              (It >>> 26)) |
            0),
            (It &= 67108863),
            (i = Math.imul(Y, lt)),
            (n = ((n = Math.imul(Y, ct)) + Math.imul(j, lt)) | 0),
            (o = Math.imul(j, ct));
          var Ut =
            (((a + (i = (i + Math.imul(O, pt)) | 0)) | 0) +
              ((8191 &
                (n =
                  ((n = (n + Math.imul(O, mt)) | 0) + Math.imul(C, pt)) | 0)) <<
                13)) |
            0;
          (a =
            ((((o = (o + Math.imul(C, mt)) | 0) + (n >>> 13)) | 0) +
              (Ut >>> 26)) |
            0),
            (Ut &= 67108863);
          var Lt =
            (((a + (i = Math.imul(Y, pt))) | 0) +
              ((8191 & (n = ((n = Math.imul(Y, mt)) + Math.imul(j, pt)) | 0)) <<
                13)) |
            0;
          return (
            (a =
              ((((o = Math.imul(j, mt)) + (n >>> 13)) | 0) + (Lt >>> 26)) | 0),
            (Lt &= 67108863),
            (u[0] = gt),
            (u[1] = vt),
            (u[2] = yt),
            (u[3] = wt),
            (u[4] = Mt),
            (u[5] = bt),
            (u[6] = _t),
            (u[7] = At),
            (u[8] = Et),
            (u[9] = xt),
            (u[10] = Bt),
            (u[11] = St),
            (u[12] = Rt),
            (u[13] = Tt),
            (u[14] = kt),
            (u[15] = Pt),
            (u[16] = It),
            (u[17] = Ut),
            (u[18] = Lt),
            0 !== a && ((u[19] = a), e.length++),
            e
          );
        };
        function p(t, r, e) {
          return new m().mulp(t, r, e);
        }
        function m(t, r) {
          (this.x = t), (this.y = r);
        }
        Math.imul || (d = c),
          (o.prototype.mulTo = function (t, r) {
            var e = this.length + t.length;
            return 10 === this.length && 10 === t.length
              ? d(this, t, r)
              : e < 63
              ? c(this, t, r)
              : e < 1024
              ? (function (t, r, e) {
                  (e.negative = r.negative ^ t.negative),
                    (e.length = t.length + r.length);
                  for (var i = 0, n = 0, o = 0; o < e.length - 1; o++) {
                    var h = n;
                    n = 0;
                    for (
                      var s = 67108863 & i,
                        u = Math.min(o, r.length - 1),
                        a = Math.max(0, o - t.length + 1);
                      a <= u;
                      a++
                    ) {
                      var f = o - a,
                        l = (0 | t.words[f]) * (0 | r.words[a]),
                        c = 67108863 & l;
                      (s = 67108863 & (c = (c + s) | 0)),
                        (n +=
                          (h =
                            ((h = (h + ((l / 67108864) | 0)) | 0) +
                              (c >>> 26)) |
                            0) >>> 26),
                        (h &= 67108863);
                    }
                    (e.words[o] = s), (i = h), (h = n);
                  }
                  return 0 !== i ? (e.words[o] = i) : e.length--, e.strip();
                })(this, t, r)
              : p(this, t, r);
          }),
          (m.prototype.makeRBT = function (t) {
            for (
              var r = new Array(t), e = o.prototype._countBits(t) - 1, i = 0;
              i < t;
              i++
            )
              r[i] = this.revBin(i, e, t);
            return r;
          }),
          (m.prototype.revBin = function (t, r, e) {
            if (0 === t || t === e - 1) return t;
            for (var i = 0, n = 0; n < r; n++)
              (i |= (1 & t) << (r - n - 1)), (t >>= 1);
            return i;
          }),
          (m.prototype.permute = function (t, r, e, i, n, o) {
            for (var h = 0; h < o; h++) (i[h] = r[t[h]]), (n[h] = e[t[h]]);
          }),
          (m.prototype.transform = function (t, r, e, i, n, o) {
            this.permute(o, t, r, e, i, n);
            for (var h = 1; h < n; h <<= 1)
              for (
                var s = h << 1,
                  u = Math.cos((2 * Math.PI) / s),
                  a = Math.sin((2 * Math.PI) / s),
                  f = 0;
                f < n;
                f += s
              )
                for (var l = u, c = a, d = 0; d < h; d++) {
                  var p = e[f + d],
                    m = i[f + d],
                    g = e[f + d + h],
                    v = i[f + d + h],
                    y = l * g - c * v;
                  (v = l * v + c * g),
                    (g = y),
                    (e[f + d] = p + g),
                    (i[f + d] = m + v),
                    (e[f + d + h] = p - g),
                    (i[f + d + h] = m - v),
                    d !== s &&
                      ((y = u * l - a * c), (c = u * c + a * l), (l = y));
                }
          }),
          (m.prototype.guessLen13b = function (t, r) {
            var e = 1 | Math.max(r, t),
              i = 1 & e,
              n = 0;
            for (e = (e / 2) | 0; e; e >>>= 1) n++;
            return 1 << (n + 1 + i);
          }),
          (m.prototype.conjugate = function (t, r, e) {
            if (!(e <= 1))
              for (var i = 0; i < e / 2; i++) {
                var n = t[i];
                (t[i] = t[e - i - 1]),
                  (t[e - i - 1] = n),
                  (n = r[i]),
                  (r[i] = -r[e - i - 1]),
                  (r[e - i - 1] = -n);
              }
          }),
          (m.prototype.normalize13b = function (t, r) {
            for (var e = 0, i = 0; i < r / 2; i++) {
              var n =
                8192 * Math.round(t[2 * i + 1] / r) +
                Math.round(t[2 * i] / r) +
                e;
              (t[i] = 67108863 & n),
                (e = n < 67108864 ? 0 : (n / 67108864) | 0);
            }
            return t;
          }),
          (m.prototype.convert13b = function (t, r, e, n) {
            for (var o = 0, h = 0; h < r; h++)
              (o += 0 | t[h]),
                (e[2 * h] = 8191 & o),
                (o >>>= 13),
                (e[2 * h + 1] = 8191 & o),
                (o >>>= 13);
            for (h = 2 * r; h < n; ++h) e[h] = 0;
            i(0 === o), i(0 == (-8192 & o));
          }),
          (m.prototype.stub = function (t) {
            for (var r = new Array(t), e = 0; e < t; e++) r[e] = 0;
            return r;
          }),
          (m.prototype.mulp = function (t, r, e) {
            var i = 2 * this.guessLen13b(t.length, r.length),
              n = this.makeRBT(i),
              o = this.stub(i),
              h = new Array(i),
              s = new Array(i),
              u = new Array(i),
              a = new Array(i),
              f = new Array(i),
              l = new Array(i),
              c = e.words;
            (c.length = i),
              this.convert13b(t.words, t.length, h, i),
              this.convert13b(r.words, r.length, a, i),
              this.transform(h, o, s, u, i, n),
              this.transform(a, o, f, l, i, n);
            for (var d = 0; d < i; d++) {
              var p = s[d] * f[d] - u[d] * l[d];
              (u[d] = s[d] * l[d] + u[d] * f[d]), (s[d] = p);
            }
            return (
              this.conjugate(s, u, i),
              this.transform(s, u, c, o, i, n),
              this.conjugate(c, o, i),
              this.normalize13b(c, i),
              (e.negative = t.negative ^ r.negative),
              (e.length = t.length + r.length),
              e.strip()
            );
          }),
          (o.prototype.mul = function (t) {
            var r = new o(null);
            return (
              (r.words = new Array(this.length + t.length)), this.mulTo(t, r)
            );
          }),
          (o.prototype.mulf = function (t) {
            var r = new o(null);
            return (r.words = new Array(this.length + t.length)), p(this, t, r);
          }),
          (o.prototype.imul = function (t) {
            return this.clone().mulTo(t, this);
          }),
          (o.prototype.imuln = function (t) {
            i("number" == typeof t), i(t < 67108864);
            for (var r = 0, e = 0; e < this.length; e++) {
              var n = (0 | this.words[e]) * t,
                o = (67108863 & n) + (67108863 & r);
              (r >>= 26),
                (r += (n / 67108864) | 0),
                (r += o >>> 26),
                (this.words[e] = 67108863 & o);
            }
            return 0 !== r && ((this.words[e] = r), this.length++), this;
          }),
          (o.prototype.muln = function (t) {
            return this.clone().imuln(t);
          }),
          (o.prototype.sqr = function () {
            return this.mul(this);
          }),
          (o.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (o.prototype.pow = function (t) {
            var r = (function (t) {
              for (var r = new Array(t.bitLength()), e = 0; e < r.length; e++) {
                var i = (e / 26) | 0,
                  n = e % 26;
                r[e] = (t.words[i] & (1 << n)) >>> n;
              }
              return r;
            })(t);
            if (0 === r.length) return new o(1);
            for (
              var e = this, i = 0;
              i < r.length && 0 === r[i];
              i++, e = e.sqr()
            );
            if (++i < r.length)
              for (var n = e.sqr(); i < r.length; i++, n = n.sqr())
                0 !== r[i] && (e = e.mul(n));
            return e;
          }),
          (o.prototype.iushln = function (t) {
            i("number" == typeof t && t >= 0);
            var r,
              e = t % 26,
              n = (t - e) / 26,
              o = (67108863 >>> (26 - e)) << (26 - e);
            if (0 !== e) {
              var h = 0;
              for (r = 0; r < this.length; r++) {
                var s = this.words[r] & o,
                  u = ((0 | this.words[r]) - s) << e;
                (this.words[r] = u | h), (h = s >>> (26 - e));
              }
              h && ((this.words[r] = h), this.length++);
            }
            if (0 !== n) {
              for (r = this.length - 1; r >= 0; r--)
                this.words[r + n] = this.words[r];
              for (r = 0; r < n; r++) this.words[r] = 0;
              this.length += n;
            }
            return this.strip();
          }),
          (o.prototype.ishln = function (t) {
            return i(0 === this.negative), this.iushln(t);
          }),
          (o.prototype.iushrn = function (t, r, e) {
            var n;
            i("number" == typeof t && t >= 0),
              (n = r ? (r - (r % 26)) / 26 : 0);
            var o = t % 26,
              h = Math.min((t - o) / 26, this.length),
              s = 67108863 ^ ((67108863 >>> o) << o),
              u = e;
            if (((n -= h), (n = Math.max(0, n)), u)) {
              for (var a = 0; a < h; a++) u.words[a] = this.words[a];
              u.length = h;
            }
            if (0 === h);
            else if (this.length > h)
              for (this.length -= h, a = 0; a < this.length; a++)
                this.words[a] = this.words[a + h];
            else (this.words[0] = 0), (this.length = 1);
            var f = 0;
            for (a = this.length - 1; a >= 0 && (0 !== f || a >= n); a--) {
              var l = 0 | this.words[a];
              (this.words[a] = (f << (26 - o)) | (l >>> o)), (f = l & s);
            }
            return (
              u && 0 !== f && (u.words[u.length++] = f),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.strip()
            );
          }),
          (o.prototype.ishrn = function (t, r, e) {
            return i(0 === this.negative), this.iushrn(t, r, e);
          }),
          (o.prototype.shln = function (t) {
            return this.clone().ishln(t);
          }),
          (o.prototype.ushln = function (t) {
            return this.clone().iushln(t);
          }),
          (o.prototype.shrn = function (t) {
            return this.clone().ishrn(t);
          }),
          (o.prototype.ushrn = function (t) {
            return this.clone().iushrn(t);
          }),
          (o.prototype.testn = function (t) {
            i("number" == typeof t && t >= 0);
            var r = t % 26,
              e = (t - r) / 26,
              n = 1 << r;
            return !(this.length <= e) && !!(this.words[e] & n);
          }),
          (o.prototype.imaskn = function (t) {
            i("number" == typeof t && t >= 0);
            var r = t % 26,
              e = (t - r) / 26;
            if (
              (i(
                0 === this.negative,
                "imaskn works only with positive numbers"
              ),
              this.length <= e)
            )
              return this;
            if (
              (0 !== r && e++,
              (this.length = Math.min(e, this.length)),
              0 !== r)
            ) {
              var n = 67108863 ^ ((67108863 >>> r) << r);
              this.words[this.length - 1] &= n;
            }
            return this.strip();
          }),
          (o.prototype.maskn = function (t) {
            return this.clone().imaskn(t);
          }),
          (o.prototype.iaddn = function (t) {
            return (
              i("number" == typeof t),
              i(t < 67108864),
              t < 0
                ? this.isubn(-t)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) < t
                  ? ((this.words[0] = t - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(t),
                    (this.negative = 1),
                    this)
                : this._iaddn(t)
            );
          }),
          (o.prototype._iaddn = function (t) {
            this.words[0] += t;
            for (var r = 0; r < this.length && this.words[r] >= 67108864; r++)
              (this.words[r] -= 67108864),
                r === this.length - 1
                  ? (this.words[r + 1] = 1)
                  : this.words[r + 1]++;
            return (this.length = Math.max(this.length, r + 1)), this;
          }),
          (o.prototype.isubn = function (t) {
            if ((i("number" == typeof t), i(t < 67108864), t < 0))
              return this.iaddn(-t);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(t), (this.negative = 1), this
              );
            if (((this.words[0] -= t), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var r = 0; r < this.length && this.words[r] < 0; r++)
                (this.words[r] += 67108864), (this.words[r + 1] -= 1);
            return this.strip();
          }),
          (o.prototype.addn = function (t) {
            return this.clone().iaddn(t);
          }),
          (o.prototype.subn = function (t) {
            return this.clone().isubn(t);
          }),
          (o.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (o.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (o.prototype._ishlnsubmul = function (t, r, e) {
            var n,
              o,
              h = t.length + e;
            this._expand(h);
            var s = 0;
            for (n = 0; n < t.length; n++) {
              o = (0 | this.words[n + e]) + s;
              var u = (0 | t.words[n]) * r;
              (s = ((o -= 67108863 & u) >> 26) - ((u / 67108864) | 0)),
                (this.words[n + e] = 67108863 & o);
            }
            for (; n < this.length - e; n++)
              (s = (o = (0 | this.words[n + e]) + s) >> 26),
                (this.words[n + e] = 67108863 & o);
            if (0 === s) return this.strip();
            for (i(-1 === s), s = 0, n = 0; n < this.length; n++)
              (s = (o = -(0 | this.words[n]) + s) >> 26),
                (this.words[n] = 67108863 & o);
            return (this.negative = 1), this.strip();
          }),
          (o.prototype._wordDiv = function (t, r) {
            var e = (this.length, t.length),
              i = this.clone(),
              n = t,
              h = 0 | n.words[n.length - 1];
            0 !== (e = 26 - this._countBits(h)) &&
              ((n = n.ushln(e)), i.iushln(e), (h = 0 | n.words[n.length - 1]));
            var s,
              u = i.length - n.length;
            if ("mod" !== r) {
              ((s = new o(null)).length = u + 1),
                (s.words = new Array(s.length));
              for (var a = 0; a < s.length; a++) s.words[a] = 0;
            }
            var f = i.clone()._ishlnsubmul(n, 1, u);
            0 === f.negative && ((i = f), s && (s.words[u] = 1));
            for (var l = u - 1; l >= 0; l--) {
              var c =
                67108864 * (0 | i.words[n.length + l]) +
                (0 | i.words[n.length + l - 1]);
              for (
                c = Math.min((c / h) | 0, 67108863), i._ishlnsubmul(n, c, l);
                0 !== i.negative;

              )
                c--,
                  (i.negative = 0),
                  i._ishlnsubmul(n, 1, l),
                  i.isZero() || (i.negative ^= 1);
              s && (s.words[l] = c);
            }
            return (
              s && s.strip(),
              i.strip(),
              "div" !== r && 0 !== e && i.iushrn(e),
              { div: s || null, mod: i }
            );
          }),
          (o.prototype.divmod = function (t, r, e) {
            return (
              i(!t.isZero()),
              this.isZero()
                ? { div: new o(0), mod: new o(0) }
                : 0 !== this.negative && 0 === t.negative
                ? ((s = this.neg().divmod(t, r)),
                  "mod" !== r && (n = s.div.neg()),
                  "div" !== r &&
                    ((h = s.mod.neg()), e && 0 !== h.negative && h.iadd(t)),
                  { div: n, mod: h })
                : 0 === this.negative && 0 !== t.negative
                ? ((s = this.divmod(t.neg(), r)),
                  "mod" !== r && (n = s.div.neg()),
                  { div: n, mod: s.mod })
                : 0 != (this.negative & t.negative)
                ? ((s = this.neg().divmod(t.neg(), r)),
                  "div" !== r &&
                    ((h = s.mod.neg()), e && 0 !== h.negative && h.isub(t)),
                  { div: s.div, mod: h })
                : t.length > this.length || this.cmp(t) < 0
                ? { div: new o(0), mod: this }
                : 1 === t.length
                ? "div" === r
                  ? { div: this.divn(t.words[0]), mod: null }
                  : "mod" === r
                  ? { div: null, mod: new o(this.modn(t.words[0])) }
                  : {
                      div: this.divn(t.words[0]),
                      mod: new o(this.modn(t.words[0])),
                    }
                : this._wordDiv(t, r)
            );
            var n, h, s;
          }),
          (o.prototype.div = function (t) {
            return this.divmod(t, "div", !1).div;
          }),
          (o.prototype.mod = function (t) {
            return this.divmod(t, "mod", !1).mod;
          }),
          (o.prototype.umod = function (t) {
            return this.divmod(t, "mod", !0).mod;
          }),
          (o.prototype.divRound = function (t) {
            var r = this.divmod(t);
            if (r.mod.isZero()) return r.div;
            var e = 0 !== r.div.negative ? r.mod.isub(t) : r.mod,
              i = t.ushrn(1),
              n = t.andln(1),
              o = e.cmp(i);
            return o < 0 || (1 === n && 0 === o)
              ? r.div
              : 0 !== r.div.negative
              ? r.div.isubn(1)
              : r.div.iaddn(1);
          }),
          (o.prototype.modn = function (t) {
            i(t <= 67108863);
            for (var r = (1 << 26) % t, e = 0, n = this.length - 1; n >= 0; n--)
              e = (r * e + (0 | this.words[n])) % t;
            return e;
          }),
          (o.prototype.idivn = function (t) {
            i(t <= 67108863);
            for (var r = 0, e = this.length - 1; e >= 0; e--) {
              var n = (0 | this.words[e]) + 67108864 * r;
              (this.words[e] = (n / t) | 0), (r = n % t);
            }
            return this.strip();
          }),
          (o.prototype.divn = function (t) {
            return this.clone().idivn(t);
          }),
          (o.prototype.egcd = function (t) {
            i(0 === t.negative), i(!t.isZero());
            var r = this,
              e = t.clone();
            r = 0 !== r.negative ? r.umod(t) : r.clone();
            for (
              var n = new o(1), h = new o(0), s = new o(0), u = new o(1), a = 0;
              r.isEven() && e.isEven();

            )
              r.iushrn(1), e.iushrn(1), ++a;
            for (var f = e.clone(), l = r.clone(); !r.isZero(); ) {
              for (
                var c = 0, d = 1;
                0 == (r.words[0] & d) && c < 26;
                ++c, d <<= 1
              );
              if (c > 0)
                for (r.iushrn(c); c-- > 0; )
                  (n.isOdd() || h.isOdd()) && (n.iadd(f), h.isub(l)),
                    n.iushrn(1),
                    h.iushrn(1);
              for (
                var p = 0, m = 1;
                0 == (e.words[0] & m) && p < 26;
                ++p, m <<= 1
              );
              if (p > 0)
                for (e.iushrn(p); p-- > 0; )
                  (s.isOdd() || u.isOdd()) && (s.iadd(f), u.isub(l)),
                    s.iushrn(1),
                    u.iushrn(1);
              r.cmp(e) >= 0
                ? (r.isub(e), n.isub(s), h.isub(u))
                : (e.isub(r), s.isub(n), u.isub(h));
            }
            return { a: s, b: u, gcd: e.iushln(a) };
          }),
          (o.prototype._invmp = function (t) {
            i(0 === t.negative), i(!t.isZero());
            var r = this,
              e = t.clone();
            r = 0 !== r.negative ? r.umod(t) : r.clone();
            for (
              var n, h = new o(1), s = new o(0), u = e.clone();
              r.cmpn(1) > 0 && e.cmpn(1) > 0;

            ) {
              for (
                var a = 0, f = 1;
                0 == (r.words[0] & f) && a < 26;
                ++a, f <<= 1
              );
              if (a > 0)
                for (r.iushrn(a); a-- > 0; )
                  h.isOdd() && h.iadd(u), h.iushrn(1);
              for (
                var l = 0, c = 1;
                0 == (e.words[0] & c) && l < 26;
                ++l, c <<= 1
              );
              if (l > 0)
                for (e.iushrn(l); l-- > 0; )
                  s.isOdd() && s.iadd(u), s.iushrn(1);
              r.cmp(e) >= 0 ? (r.isub(e), h.isub(s)) : (e.isub(r), s.isub(h));
            }
            return (n = 0 === r.cmpn(1) ? h : s).cmpn(0) < 0 && n.iadd(t), n;
          }),
          (o.prototype.gcd = function (t) {
            if (this.isZero()) return t.abs();
            if (t.isZero()) return this.abs();
            var r = this.clone(),
              e = t.clone();
            (r.negative = 0), (e.negative = 0);
            for (var i = 0; r.isEven() && e.isEven(); i++)
              r.iushrn(1), e.iushrn(1);
            for (;;) {
              for (; r.isEven(); ) r.iushrn(1);
              for (; e.isEven(); ) e.iushrn(1);
              var n = r.cmp(e);
              if (n < 0) {
                var o = r;
                (r = e), (e = o);
              } else if (0 === n || 0 === e.cmpn(1)) break;
              r.isub(e);
            }
            return e.iushln(i);
          }),
          (o.prototype.invm = function (t) {
            return this.egcd(t).a.umod(t);
          }),
          (o.prototype.isEven = function () {
            return 0 == (1 & this.words[0]);
          }),
          (o.prototype.isOdd = function () {
            return 1 == (1 & this.words[0]);
          }),
          (o.prototype.andln = function (t) {
            return this.words[0] & t;
          }),
          (o.prototype.bincn = function (t) {
            i("number" == typeof t);
            var r = t % 26,
              e = (t - r) / 26,
              n = 1 << r;
            if (this.length <= e)
              return this._expand(e + 1), (this.words[e] |= n), this;
            for (var o = n, h = e; 0 !== o && h < this.length; h++) {
              var s = 0 | this.words[h];
              (o = (s += o) >>> 26), (s &= 67108863), (this.words[h] = s);
            }
            return 0 !== o && ((this.words[h] = o), this.length++), this;
          }),
          (o.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (o.prototype.cmpn = function (t) {
            var r,
              e = t < 0;
            if (0 !== this.negative && !e) return -1;
            if (0 === this.negative && e) return 1;
            if ((this.strip(), this.length > 1)) r = 1;
            else {
              e && (t = -t), i(t <= 67108863, "Number is too big");
              var n = 0 | this.words[0];
              r = n === t ? 0 : n < t ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -r : r;
          }),
          (o.prototype.cmp = function (t) {
            if (0 !== this.negative && 0 === t.negative) return -1;
            if (0 === this.negative && 0 !== t.negative) return 1;
            var r = this.ucmp(t);
            return 0 !== this.negative ? 0 | -r : r;
          }),
          (o.prototype.ucmp = function (t) {
            if (this.length > t.length) return 1;
            if (this.length < t.length) return -1;
            for (var r = 0, e = this.length - 1; e >= 0; e--) {
              var i = 0 | this.words[e],
                n = 0 | t.words[e];
              if (i !== n) {
                i < n ? (r = -1) : i > n && (r = 1);
                break;
              }
            }
            return r;
          }),
          (o.prototype.gtn = function (t) {
            return 1 === this.cmpn(t);
          }),
          (o.prototype.gt = function (t) {
            return 1 === this.cmp(t);
          }),
          (o.prototype.gten = function (t) {
            return this.cmpn(t) >= 0;
          }),
          (o.prototype.gte = function (t) {
            return this.cmp(t) >= 0;
          }),
          (o.prototype.ltn = function (t) {
            return -1 === this.cmpn(t);
          }),
          (o.prototype.lt = function (t) {
            return -1 === this.cmp(t);
          }),
          (o.prototype.lten = function (t) {
            return this.cmpn(t) <= 0;
          }),
          (o.prototype.lte = function (t) {
            return this.cmp(t) <= 0;
          }),
          (o.prototype.eqn = function (t) {
            return 0 === this.cmpn(t);
          }),
          (o.prototype.eq = function (t) {
            return 0 === this.cmp(t);
          }),
          (o.red = function (t) {
            return new _(t);
          }),
          (o.prototype.toRed = function (t) {
            return (
              i(!this.red, "Already a number in reduction context"),
              i(0 === this.negative, "red works only with positives"),
              t.convertTo(this)._forceRed(t)
            );
          }),
          (o.prototype.fromRed = function () {
            return (
              i(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (o.prototype._forceRed = function (t) {
            return (this.red = t), this;
          }),
          (o.prototype.forceRed = function (t) {
            return (
              i(!this.red, "Already a number in reduction context"),
              this._forceRed(t)
            );
          }),
          (o.prototype.redAdd = function (t) {
            return (
              i(this.red, "redAdd works only with red numbers"),
              this.red.add(this, t)
            );
          }),
          (o.prototype.redIAdd = function (t) {
            return (
              i(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, t)
            );
          }),
          (o.prototype.redSub = function (t) {
            return (
              i(this.red, "redSub works only with red numbers"),
              this.red.sub(this, t)
            );
          }),
          (o.prototype.redISub = function (t) {
            return (
              i(this.red, "redISub works only with red numbers"),
              this.red.isub(this, t)
            );
          }),
          (o.prototype.redShl = function (t) {
            return (
              i(this.red, "redShl works only with red numbers"),
              this.red.shl(this, t)
            );
          }),
          (o.prototype.redMul = function (t) {
            return (
              i(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.mul(this, t)
            );
          }),
          (o.prototype.redIMul = function (t) {
            return (
              i(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, t),
              this.red.imul(this, t)
            );
          }),
          (o.prototype.redSqr = function () {
            return (
              i(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (o.prototype.redISqr = function () {
            return (
              i(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (o.prototype.redSqrt = function () {
            return (
              i(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (o.prototype.redInvm = function () {
            return (
              i(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (o.prototype.redNeg = function () {
            return (
              i(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (o.prototype.redPow = function (t) {
            return (
              i(this.red && !t.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, t)
            );
          });
        var g = { k256: null, p224: null, p192: null, p25519: null };
        function v(t, r) {
          (this.name = t),
            (this.p = new o(r, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new o(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function y() {
          v.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function w() {
          v.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function M() {
          v.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function b() {
          v.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function _(t) {
          if ("string" == typeof t) {
            var r = o._prime(t);
            (this.m = r.p), (this.prime = r);
          } else
            i(t.gtn(1), "modulus must be greater than 1"),
              (this.m = t),
              (this.prime = null);
        }
        function A(t) {
          _.call(this, t),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new o(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (v.prototype._tmp = function () {
          var t = new o(null);
          return (t.words = new Array(Math.ceil(this.n / 13))), t;
        }),
          (v.prototype.ireduce = function (t) {
            var r,
              e = t;
            do {
              this.split(e, this.tmp),
                (r = (e = (e = this.imulK(e)).iadd(this.tmp)).bitLength());
            } while (r > this.n);
            var i = r < this.n ? -1 : e.ucmp(this.p);
            return (
              0 === i
                ? ((e.words[0] = 0), (e.length = 1))
                : i > 0
                ? e.isub(this.p)
                : e.strip(),
              e
            );
          }),
          (v.prototype.split = function (t, r) {
            t.iushrn(this.n, 0, r);
          }),
          (v.prototype.imulK = function (t) {
            return t.imul(this.k);
          }),
          n(y, v),
          (y.prototype.split = function (t, r) {
            for (var e = Math.min(t.length, 9), i = 0; i < e; i++)
              r.words[i] = t.words[i];
            if (((r.length = e), t.length <= 9))
              return (t.words[0] = 0), void (t.length = 1);
            var n = t.words[9];
            for (r.words[r.length++] = 4194303 & n, i = 10; i < t.length; i++) {
              var o = 0 | t.words[i];
              (t.words[i - 10] = ((4194303 & o) << 4) | (n >>> 22)), (n = o);
            }
            (n >>>= 22),
              (t.words[i - 10] = n),
              0 === n && t.length > 10 ? (t.length -= 10) : (t.length -= 9);
          }),
          (y.prototype.imulK = function (t) {
            (t.words[t.length] = 0),
              (t.words[t.length + 1] = 0),
              (t.length += 2);
            for (var r = 0, e = 0; e < t.length; e++) {
              var i = 0 | t.words[e];
              (r += 977 * i),
                (t.words[e] = 67108863 & r),
                (r = 64 * i + ((r / 67108864) | 0));
            }
            return (
              0 === t.words[t.length - 1] &&
                (t.length--, 0 === t.words[t.length - 1] && t.length--),
              t
            );
          }),
          n(w, v),
          n(M, v),
          n(b, v),
          (b.prototype.imulK = function (t) {
            for (var r = 0, e = 0; e < t.length; e++) {
              var i = 19 * (0 | t.words[e]) + r,
                n = 67108863 & i;
              (i >>>= 26), (t.words[e] = n), (r = i);
            }
            return 0 !== r && (t.words[t.length++] = r), t;
          }),
          (o._prime = function (t) {
            if (g[t]) return g[t];
            var r;
            if ("k256" === t) r = new y();
            else if ("p224" === t) r = new w();
            else if ("p192" === t) r = new M();
            else {
              if ("p25519" !== t) throw new Error("Unknown prime " + t);
              r = new b();
            }
            return (g[t] = r), r;
          }),
          (_.prototype._verify1 = function (t) {
            i(0 === t.negative, "red works only with positives"),
              i(t.red, "red works only with red numbers");
          }),
          (_.prototype._verify2 = function (t, r) {
            i(0 == (t.negative | r.negative), "red works only with positives"),
              i(t.red && t.red === r.red, "red works only with red numbers");
          }),
          (_.prototype.imod = function (t) {
            return this.prime
              ? this.prime.ireduce(t)._forceRed(this)
              : t.umod(this.m)._forceRed(this);
          }),
          (_.prototype.neg = function (t) {
            return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this);
          }),
          (_.prototype.add = function (t, r) {
            this._verify2(t, r);
            var e = t.add(r);
            return e.cmp(this.m) >= 0 && e.isub(this.m), e._forceRed(this);
          }),
          (_.prototype.iadd = function (t, r) {
            this._verify2(t, r);
            var e = t.iadd(r);
            return e.cmp(this.m) >= 0 && e.isub(this.m), e;
          }),
          (_.prototype.sub = function (t, r) {
            this._verify2(t, r);
            var e = t.sub(r);
            return e.cmpn(0) < 0 && e.iadd(this.m), e._forceRed(this);
          }),
          (_.prototype.isub = function (t, r) {
            this._verify2(t, r);
            var e = t.isub(r);
            return e.cmpn(0) < 0 && e.iadd(this.m), e;
          }),
          (_.prototype.shl = function (t, r) {
            return this._verify1(t), this.imod(t.ushln(r));
          }),
          (_.prototype.imul = function (t, r) {
            return this._verify2(t, r), this.imod(t.imul(r));
          }),
          (_.prototype.mul = function (t, r) {
            return this._verify2(t, r), this.imod(t.mul(r));
          }),
          (_.prototype.isqr = function (t) {
            return this.imul(t, t.clone());
          }),
          (_.prototype.sqr = function (t) {
            return this.mul(t, t);
          }),
          (_.prototype.sqrt = function (t) {
            if (t.isZero()) return t.clone();
            var r = this.m.andln(3);
            if ((i(r % 2 == 1), 3 === r)) {
              var e = this.m.add(new o(1)).iushrn(2);
              return this.pow(t, e);
            }
            for (
              var n = this.m.subn(1), h = 0;
              !n.isZero() && 0 === n.andln(1);

            )
              h++, n.iushrn(1);
            i(!n.isZero());
            var s = new o(1).toRed(this),
              u = s.redNeg(),
              a = this.m.subn(1).iushrn(1),
              f = this.m.bitLength();
            for (
              f = new o(2 * f * f).toRed(this);
              0 !== this.pow(f, a).cmp(u);

            )
              f.redIAdd(u);
            for (
              var l = this.pow(f, n),
                c = this.pow(t, n.addn(1).iushrn(1)),
                d = this.pow(t, n),
                p = h;
              0 !== d.cmp(s);

            ) {
              for (var m = d, g = 0; 0 !== m.cmp(s); g++) m = m.redSqr();
              i(g < p);
              var v = this.pow(l, new o(1).iushln(p - g - 1));
              (c = c.redMul(v)), (l = v.redSqr()), (d = d.redMul(l)), (p = g);
            }
            return c;
          }),
          (_.prototype.invm = function (t) {
            var r = t._invmp(this.m);
            return 0 !== r.negative
              ? ((r.negative = 0), this.imod(r).redNeg())
              : this.imod(r);
          }),
          (_.prototype.pow = function (t, r) {
            if (r.isZero()) return new o(1);
            if (0 === r.cmpn(1)) return t.clone();
            var e = new Array(16);
            (e[0] = new o(1).toRed(this)), (e[1] = t);
            for (var i = 2; i < e.length; i++) e[i] = this.mul(e[i - 1], t);
            var n = e[0],
              h = 0,
              s = 0,
              u = r.bitLength() % 26;
            for (0 === u && (u = 26), i = r.length - 1; i >= 0; i--) {
              for (var a = r.words[i], f = u - 1; f >= 0; f--) {
                var l = (a >> f) & 1;
                n !== e[0] && (n = this.sqr(n)),
                  0 !== l || 0 !== h
                    ? ((h <<= 1),
                      (h |= l),
                      (4 === ++s || (0 === i && 0 === f)) &&
                        ((n = this.mul(n, e[h])), (s = 0), (h = 0)))
                    : (s = 0);
              }
              u = 26;
            }
            return n;
          }),
          (_.prototype.convertTo = function (t) {
            var r = t.umod(this.m);
            return r === t ? r.clone() : r;
          }),
          (_.prototype.convertFrom = function (t) {
            var r = t.clone();
            return (r.red = null), r;
          }),
          (o.mont = function (t) {
            return new A(t);
          }),
          n(A, _),
          (A.prototype.convertTo = function (t) {
            return this.imod(t.ushln(this.shift));
          }),
          (A.prototype.convertFrom = function (t) {
            var r = this.imod(t.mul(this.rinv));
            return (r.red = null), r;
          }),
          (A.prototype.imul = function (t, r) {
            if (t.isZero() || r.isZero())
              return (t.words[0] = 0), (t.length = 1), t;
            var e = t.imul(r),
              i = e
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = e.isub(i).iushrn(this.shift),
              o = n;
            return (
              n.cmp(this.m) >= 0
                ? (o = n.isub(this.m))
                : n.cmpn(0) < 0 && (o = n.iadd(this.m)),
              o._forceRed(this)
            );
          }),
          (A.prototype.mul = function (t, r) {
            if (t.isZero() || r.isZero()) return new o(0)._forceRed(this);
            var e = t.mul(r),
              i = e
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              n = e.isub(i).iushrn(this.shift),
              h = n;
            return (
              n.cmp(this.m) >= 0
                ? (h = n.isub(this.m))
                : n.cmpn(0) < 0 && (h = n.iadd(this.m)),
              h._forceRed(this)
            );
          }),
          (A.prototype.invm = function (t) {
            return this.imod(t._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })(void 0 === t || t, this);
    }.call(this, e(8)(t)));
  },
  function (t, r) {
    var e;
    e = (function () {
      return this;
    })();
    try {
      e = e || Function("return this")() || (0, eval)("this");
    } catch (t) {
      "object" == typeof window && (e = window);
    }
    t.exports = e;
  },
  function (t, r) {
    var e,
      i,
      n = (t.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function h() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(t) {
      if (e === setTimeout) return setTimeout(t, 0);
      if ((e === o || !e) && setTimeout)
        return (e = setTimeout), setTimeout(t, 0);
      try {
        return e(t, 0);
      } catch (r) {
        try {
          return e.call(null, t, 0);
        } catch (r) {
          return e.call(this, t, 0);
        }
      }
    }
    !(function () {
      try {
        e = "function" == typeof setTimeout ? setTimeout : o;
      } catch (t) {
        e = o;
      }
      try {
        i = "function" == typeof clearTimeout ? clearTimeout : h;
      } catch (t) {
        i = h;
      }
    })();
    var u,
      a = [],
      f = !1,
      l = -1;
    function c() {
      f &&
        u &&
        ((f = !1), u.length ? (a = u.concat(a)) : (l = -1), a.length && d());
    }
    function d() {
      if (!f) {
        var t = s(c);
        f = !0;
        for (var r = a.length; r; ) {
          for (u = a, a = []; ++l < r; ) u && u[l].run();
          (l = -1), (r = a.length);
        }
        (u = null),
          (f = !1),
          (function (t) {
            if (i === clearTimeout) return clearTimeout(t);
            if ((i === h || !i) && clearTimeout)
              return (i = clearTimeout), clearTimeout(t);
            try {
              i(t);
            } catch (r) {
              try {
                return i.call(null, t);
              } catch (r) {
                return i.call(this, t);
              }
            }
          })(t);
      }
    }
    function p(t, r) {
      (this.fun = t), (this.array = r);
    }
    function m() {}
    (n.nextTick = function (t) {
      var r = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
      a.push(new p(t, r)), 1 !== a.length || f || s(d);
    }),
      (p.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (n.title = "browser"),
      (n.browser = !0),
      (n.env = {}),
      (n.argv = []),
      (n.version = ""),
      (n.versions = {}),
      (n.on = m),
      (n.addListener = m),
      (n.once = m),
      (n.off = m),
      (n.removeListener = m),
      (n.removeAllListeners = m),
      (n.emit = m),
      (n.prependListener = m),
      (n.prependOnceListener = m),
      (n.listeners = function (t) {
        return [];
      }),
      (n.binding = function (t) {
        throw new Error("process.binding is not supported");
      }),
      (n.cwd = function () {
        return "/";
      }),
      (n.chdir = function (t) {
        throw new Error("process.chdir is not supported");
      }),
      (n.umask = function () {
        return 0;
      });
  },
  function (t, r, e) {
    (function (r, e) {
      !(function (i) {
        "use strict";
        "object" == typeof r && r.versions && r.versions.node && (i = e);
        for (
          var n = !i.JS_SHA3_TEST && "object" == typeof t && t.exports,
            o = "0123456789abcdef".split(""),
            h = [0, 8, 16, 24],
            s = [
              1,
              0,
              32898,
              0,
              32906,
              2147483648,
              2147516416,
              2147483648,
              32907,
              0,
              2147483649,
              0,
              2147516545,
              2147483648,
              32777,
              2147483648,
              138,
              0,
              136,
              0,
              2147516425,
              0,
              2147483658,
              0,
              2147516555,
              0,
              139,
              2147483648,
              32905,
              2147483648,
              32771,
              2147483648,
              32770,
              2147483648,
              128,
              2147483648,
              32778,
              0,
              2147483658,
              2147483648,
              2147516545,
              2147483648,
              32896,
              2147483648,
              2147483649,
              0,
              2147516424,
              2147483648,
            ],
            u = [224, 256, 384, 512],
            a = ["hex", "buffer", "arrayBuffer", "array"],
            f = function (t, r, e) {
              return function (i) {
                return new w(t, r, t).update(i)[e]();
              };
            },
            l = function (t, r, e) {
              return function (i, n) {
                return new w(t, r, n).update(i)[e]();
              };
            },
            c = function (t, r) {
              var e = f(t, r, "hex");
              (e.create = function () {
                return new w(t, r, t);
              }),
                (e.update = function (t) {
                  return e.create().update(t);
                });
              for (var i = 0; i < a.length; ++i) {
                var n = a[i];
                e[n] = f(t, r, n);
              }
              return e;
            },
            d = [
              {
                name: "keccak",
                padding: [1, 256, 65536, 16777216],
                bits: u,
                createMethod: c,
              },
              {
                name: "sha3",
                padding: [6, 1536, 393216, 100663296],
                bits: u,
                createMethod: c,
              },
              {
                name: "shake",
                padding: [31, 7936, 2031616, 520093696],
                bits: [128, 256],
                createMethod: function (t, r) {
                  var e = l(t, r, "hex");
                  (e.create = function (e) {
                    return new w(t, r, e);
                  }),
                    (e.update = function (t, r) {
                      return e.create(r).update(t);
                    });
                  for (var i = 0; i < a.length; ++i) {
                    var n = a[i];
                    e[n] = l(t, r, n);
                  }
                  return e;
                },
              },
            ],
            p = {},
            m = 0;
          m < d.length;
          ++m
        )
          for (var g = d[m], v = g.bits, y = 0; y < v.length; ++y)
            p[g.name + "_" + v[y]] = g.createMethod(v[y], g.padding);
        function w(t, r, e) {
          (this.blocks = []),
            (this.s = []),
            (this.padding = r),
            (this.outputBits = e),
            (this.reset = !0),
            (this.block = 0),
            (this.start = 0),
            (this.blockCount = (1600 - (t << 1)) >> 5),
            (this.byteCount = this.blockCount << 2),
            (this.outputBlocks = e >> 5),
            (this.extraBytes = (31 & e) >> 3);
          for (var i = 0; i < 50; ++i) this.s[i] = 0;
        }
        (w.prototype.update = function (t) {
          var r = "string" != typeof t;
          r && t.constructor == i.ArrayBuffer && (t = new Uint8Array(t));
          for (
            var e,
              n,
              o = t.length,
              s = this.blocks,
              u = this.byteCount,
              a = this.blockCount,
              f = 0,
              l = this.s;
            f < o;

          ) {
            if (this.reset)
              for (this.reset = !1, s[0] = this.block, e = 1; e < a + 1; ++e)
                s[e] = 0;
            if (r)
              for (e = this.start; f < o && e < u; ++f)
                s[e >> 2] |= t[f] << h[3 & e++];
            else
              for (e = this.start; f < o && e < u; ++f)
                (n = t.charCodeAt(f)) < 128
                  ? (s[e >> 2] |= n << h[3 & e++])
                  : n < 2048
                  ? ((s[e >> 2] |= (192 | (n >> 6)) << h[3 & e++]),
                    (s[e >> 2] |= (128 | (63 & n)) << h[3 & e++]))
                  : n < 55296 || n >= 57344
                  ? ((s[e >> 2] |= (224 | (n >> 12)) << h[3 & e++]),
                    (s[e >> 2] |= (128 | ((n >> 6) & 63)) << h[3 & e++]),
                    (s[e >> 2] |= (128 | (63 & n)) << h[3 & e++]))
                  : ((n =
                      65536 +
                      (((1023 & n) << 10) | (1023 & t.charCodeAt(++f)))),
                    (s[e >> 2] |= (240 | (n >> 18)) << h[3 & e++]),
                    (s[e >> 2] |= (128 | ((n >> 12) & 63)) << h[3 & e++]),
                    (s[e >> 2] |= (128 | ((n >> 6) & 63)) << h[3 & e++]),
                    (s[e >> 2] |= (128 | (63 & n)) << h[3 & e++]));
            if (((this.lastByteIndex = e), e >= u)) {
              for (this.start = e - u, this.block = s[a], e = 0; e < a; ++e)
                l[e] ^= s[e];
              M(l), (this.reset = !0);
            } else this.start = e;
          }
          return this;
        }),
          (w.prototype.finalize = function () {
            var t = this.blocks,
              r = this.lastByteIndex,
              e = this.blockCount,
              i = this.s;
            if (
              ((t[r >> 2] |= this.padding[3 & r]),
              this.lastByteIndex == this.byteCount)
            )
              for (t[0] = t[e], r = 1; r < e + 1; ++r) t[r] = 0;
            for (t[e - 1] |= 2147483648, r = 0; r < e; ++r) i[r] ^= t[r];
            M(i);
          }),
          (w.prototype.toString = w.prototype.hex = function () {
            this.finalize();
            for (
              var t,
                r = this.blockCount,
                e = this.s,
                i = this.outputBlocks,
                n = this.extraBytes,
                h = 0,
                s = 0,
                u = "";
              s < i;

            ) {
              for (h = 0; h < r && s < i; ++h, ++s)
                (t = e[h]),
                  (u +=
                    o[(t >> 4) & 15] +
                    o[15 & t] +
                    o[(t >> 12) & 15] +
                    o[(t >> 8) & 15] +
                    o[(t >> 20) & 15] +
                    o[(t >> 16) & 15] +
                    o[(t >> 28) & 15] +
                    o[(t >> 24) & 15]);
              s % r == 0 && (M(e), (h = 0));
            }
            return (
              n &&
                ((t = e[h]),
                n > 0 && (u += o[(t >> 4) & 15] + o[15 & t]),
                n > 1 && (u += o[(t >> 12) & 15] + o[(t >> 8) & 15]),
                n > 2 && (u += o[(t >> 20) & 15] + o[(t >> 16) & 15])),
              u
            );
          }),
          (w.prototype.arrayBuffer = function () {
            this.finalize();
            var t,
              r = this.blockCount,
              e = this.s,
              i = this.outputBlocks,
              n = this.extraBytes,
              o = 0,
              h = 0,
              s = this.outputBits >> 3;
            t = n ? new ArrayBuffer((i + 1) << 2) : new ArrayBuffer(s);
            for (var u = new Uint32Array(t); h < i; ) {
              for (o = 0; o < r && h < i; ++o, ++h) u[h] = e[o];
              h % r == 0 && M(e);
            }
            return n && ((u[o] = e[o]), (t = t.slice(0, s))), t;
          }),
          (w.prototype.buffer = w.prototype.arrayBuffer),
          (w.prototype.digest = w.prototype.array = function () {
            this.finalize();
            for (
              var t,
                r,
                e = this.blockCount,
                i = this.s,
                n = this.outputBlocks,
                o = this.extraBytes,
                h = 0,
                s = 0,
                u = [];
              s < n;

            ) {
              for (h = 0; h < e && s < n; ++h, ++s)
                (t = s << 2),
                  (r = i[h]),
                  (u[t] = 255 & r),
                  (u[t + 1] = (r >> 8) & 255),
                  (u[t + 2] = (r >> 16) & 255),
                  (u[t + 3] = (r >> 24) & 255);
              s % e == 0 && M(i);
            }
            return (
              o &&
                ((t = s << 2),
                (r = i[h]),
                o > 0 && (u[t] = 255 & r),
                o > 1 && (u[t + 1] = (r >> 8) & 255),
                o > 2 && (u[t + 2] = (r >> 16) & 255)),
              u
            );
          });
        var M = function (t) {
          var r,
            e,
            i,
            n,
            o,
            h,
            u,
            a,
            f,
            l,
            c,
            d,
            p,
            m,
            g,
            v,
            y,
            w,
            M,
            b,
            _,
            A,
            E,
            x,
            B,
            S,
            R,
            T,
            k,
            P,
            I,
            U,
            L,
            O,
            C,
            N,
            Y,
            j,
            $,
            D,
            Z,
            q,
            z,
            F,
            K,
            J,
            H,
            V,
            X,
            G,
            Q,
            W,
            tt,
            rt,
            et,
            it,
            nt,
            ot,
            ht,
            st,
            ut,
            at,
            ft;
          for (i = 0; i < 48; i += 2)
            (n = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40]),
              (o = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41]),
              (h = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42]),
              (u = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43]),
              (a = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44]),
              (f = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45]),
              (l = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46]),
              (c = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47]),
              (r =
                (d = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48]) ^
                ((h << 1) | (u >>> 31))),
              (e =
                (p = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49]) ^
                ((u << 1) | (h >>> 31))),
              (t[0] ^= r),
              (t[1] ^= e),
              (t[10] ^= r),
              (t[11] ^= e),
              (t[20] ^= r),
              (t[21] ^= e),
              (t[30] ^= r),
              (t[31] ^= e),
              (t[40] ^= r),
              (t[41] ^= e),
              (r = n ^ ((a << 1) | (f >>> 31))),
              (e = o ^ ((f << 1) | (a >>> 31))),
              (t[2] ^= r),
              (t[3] ^= e),
              (t[12] ^= r),
              (t[13] ^= e),
              (t[22] ^= r),
              (t[23] ^= e),
              (t[32] ^= r),
              (t[33] ^= e),
              (t[42] ^= r),
              (t[43] ^= e),
              (r = h ^ ((l << 1) | (c >>> 31))),
              (e = u ^ ((c << 1) | (l >>> 31))),
              (t[4] ^= r),
              (t[5] ^= e),
              (t[14] ^= r),
              (t[15] ^= e),
              (t[24] ^= r),
              (t[25] ^= e),
              (t[34] ^= r),
              (t[35] ^= e),
              (t[44] ^= r),
              (t[45] ^= e),
              (r = a ^ ((d << 1) | (p >>> 31))),
              (e = f ^ ((p << 1) | (d >>> 31))),
              (t[6] ^= r),
              (t[7] ^= e),
              (t[16] ^= r),
              (t[17] ^= e),
              (t[26] ^= r),
              (t[27] ^= e),
              (t[36] ^= r),
              (t[37] ^= e),
              (t[46] ^= r),
              (t[47] ^= e),
              (r = l ^ ((n << 1) | (o >>> 31))),
              (e = c ^ ((o << 1) | (n >>> 31))),
              (t[8] ^= r),
              (t[9] ^= e),
              (t[18] ^= r),
              (t[19] ^= e),
              (t[28] ^= r),
              (t[29] ^= e),
              (t[38] ^= r),
              (t[39] ^= e),
              (t[48] ^= r),
              (t[49] ^= e),
              (m = t[0]),
              (g = t[1]),
              (J = (t[11] << 4) | (t[10] >>> 28)),
              (H = (t[10] << 4) | (t[11] >>> 28)),
              (T = (t[20] << 3) | (t[21] >>> 29)),
              (k = (t[21] << 3) | (t[20] >>> 29)),
              (st = (t[31] << 9) | (t[30] >>> 23)),
              (ut = (t[30] << 9) | (t[31] >>> 23)),
              (q = (t[40] << 18) | (t[41] >>> 14)),
              (z = (t[41] << 18) | (t[40] >>> 14)),
              (O = (t[2] << 1) | (t[3] >>> 31)),
              (C = (t[3] << 1) | (t[2] >>> 31)),
              (v = (t[13] << 12) | (t[12] >>> 20)),
              (y = (t[12] << 12) | (t[13] >>> 20)),
              (V = (t[22] << 10) | (t[23] >>> 22)),
              (X = (t[23] << 10) | (t[22] >>> 22)),
              (P = (t[33] << 13) | (t[32] >>> 19)),
              (I = (t[32] << 13) | (t[33] >>> 19)),
              (at = (t[42] << 2) | (t[43] >>> 30)),
              (ft = (t[43] << 2) | (t[42] >>> 30)),
              (rt = (t[5] << 30) | (t[4] >>> 2)),
              (et = (t[4] << 30) | (t[5] >>> 2)),
              (N = (t[14] << 6) | (t[15] >>> 26)),
              (Y = (t[15] << 6) | (t[14] >>> 26)),
              (w = (t[25] << 11) | (t[24] >>> 21)),
              (M = (t[24] << 11) | (t[25] >>> 21)),
              (G = (t[34] << 15) | (t[35] >>> 17)),
              (Q = (t[35] << 15) | (t[34] >>> 17)),
              (U = (t[45] << 29) | (t[44] >>> 3)),
              (L = (t[44] << 29) | (t[45] >>> 3)),
              (x = (t[6] << 28) | (t[7] >>> 4)),
              (B = (t[7] << 28) | (t[6] >>> 4)),
              (it = (t[17] << 23) | (t[16] >>> 9)),
              (nt = (t[16] << 23) | (t[17] >>> 9)),
              (j = (t[26] << 25) | (t[27] >>> 7)),
              ($ = (t[27] << 25) | (t[26] >>> 7)),
              (b = (t[36] << 21) | (t[37] >>> 11)),
              (_ = (t[37] << 21) | (t[36] >>> 11)),
              (W = (t[47] << 24) | (t[46] >>> 8)),
              (tt = (t[46] << 24) | (t[47] >>> 8)),
              (F = (t[8] << 27) | (t[9] >>> 5)),
              (K = (t[9] << 27) | (t[8] >>> 5)),
              (S = (t[18] << 20) | (t[19] >>> 12)),
              (R = (t[19] << 20) | (t[18] >>> 12)),
              (ot = (t[29] << 7) | (t[28] >>> 25)),
              (ht = (t[28] << 7) | (t[29] >>> 25)),
              (D = (t[38] << 8) | (t[39] >>> 24)),
              (Z = (t[39] << 8) | (t[38] >>> 24)),
              (A = (t[48] << 14) | (t[49] >>> 18)),
              (E = (t[49] << 14) | (t[48] >>> 18)),
              (t[0] = m ^ (~v & w)),
              (t[1] = g ^ (~y & M)),
              (t[10] = x ^ (~S & T)),
              (t[11] = B ^ (~R & k)),
              (t[20] = O ^ (~N & j)),
              (t[21] = C ^ (~Y & $)),
              (t[30] = F ^ (~J & V)),
              (t[31] = K ^ (~H & X)),
              (t[40] = rt ^ (~it & ot)),
              (t[41] = et ^ (~nt & ht)),
              (t[2] = v ^ (~w & b)),
              (t[3] = y ^ (~M & _)),
              (t[12] = S ^ (~T & P)),
              (t[13] = R ^ (~k & I)),
              (t[22] = N ^ (~j & D)),
              (t[23] = Y ^ (~$ & Z)),
              (t[32] = J ^ (~V & G)),
              (t[33] = H ^ (~X & Q)),
              (t[42] = it ^ (~ot & st)),
              (t[43] = nt ^ (~ht & ut)),
              (t[4] = w ^ (~b & A)),
              (t[5] = M ^ (~_ & E)),
              (t[14] = T ^ (~P & U)),
              (t[15] = k ^ (~I & L)),
              (t[24] = j ^ (~D & q)),
              (t[25] = $ ^ (~Z & z)),
              (t[34] = V ^ (~G & W)),
              (t[35] = X ^ (~Q & tt)),
              (t[44] = ot ^ (~st & at)),
              (t[45] = ht ^ (~ut & ft)),
              (t[6] = b ^ (~A & m)),
              (t[7] = _ ^ (~E & g)),
              (t[16] = P ^ (~U & x)),
              (t[17] = I ^ (~L & B)),
              (t[26] = D ^ (~q & O)),
              (t[27] = Z ^ (~z & C)),
              (t[36] = G ^ (~W & F)),
              (t[37] = Q ^ (~tt & K)),
              (t[46] = st ^ (~at & rt)),
              (t[47] = ut ^ (~ft & et)),
              (t[8] = A ^ (~m & v)),
              (t[9] = E ^ (~g & y)),
              (t[18] = U ^ (~x & S)),
              (t[19] = L ^ (~B & R)),
              (t[28] = q ^ (~O & N)),
              (t[29] = z ^ (~C & Y)),
              (t[38] = W ^ (~F & J)),
              (t[39] = tt ^ (~K & H)),
              (t[48] = at ^ (~rt & it)),
              (t[49] = ft ^ (~et & nt)),
              (t[0] ^= s[i]),
              (t[1] ^= s[i + 1]);
        };
        if (n) t.exports = p;
        else if (i) for (var b in p) i[b] = p[b];
      })(this);
    }.call(this, e(3), e(2)));
  },
  function (t, r) {
    t.exports = function (t) {
      if ("string" != typeof t)
        throw new Error(
          "[is-hex-prefixed] value must be type 'string', is currently type " +
            typeof t +
            ", while checking isHexPrefixed."
        );
      return "0x" === t.slice(0, 2);
    };
  },
  function (t, r, e) {
    var i = e(5);
    t.exports = function (t) {
      return "string" != typeof t ? t : i(t) ? t.slice(2) : t;
    };
  },
  function (t, r, e) {
    var i = e(1),
      n = e(6);
    t.exports = function (t) {
      if ("string" == typeof t || "number" == typeof t) {
        var r = new i(1),
          e = String(t).toLowerCase().trim(),
          o = "0x" === e.substr(0, 2) || "-0x" === e.substr(0, 3),
          h = n(e);
        if (
          ("-" === h.substr(0, 1) && ((h = n(h.slice(1))), (r = new i(-1, 10))),
          (!(h = "" === h ? "0" : h).match(/^-?[0-9]+$/) &&
            h.match(/^[0-9A-Fa-f]+$/)) ||
            h.match(/^[a-fA-F]+$/) ||
            (!0 === o && h.match(/^[0-9A-Fa-f]+$/)))
        )
          return new i(h, 16).mul(r);
        if ((h.match(/^-?[0-9]+$/) || "" === h) && !1 === o)
          return new i(h, 10).mul(r);
      } else if (
        "object" == typeof t &&
        t.toString &&
        !t.pop &&
        !t.push &&
        t.toString(10).match(/^-?[0-9]+$/) &&
        (t.mul || t.dividedToIntegerBy)
      )
        return new i(t.toString(10), 10);
      throw new Error(
        "[number-to-bn] while converting number " +
          JSON.stringify(t) +
          " to BN.js instance, error: invalid number value. Value must be an integer, hex string, BN or BigNumber instance. Note, decimals are not supported."
      );
    };
  },
  function (t, r) {
    t.exports = function (t) {
      return (
        t.webpackPolyfill ||
          ((t.deprecate = function () {}),
          (t.paths = []),
          t.children || (t.children = []),
          Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
              return t.l;
            },
          }),
          Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function () {
              return t.i;
            },
          }),
          (t.webpackPolyfill = 1)),
        t
      );
    };
  },
  function (t, r, e) {
    (function (r) {
      const i = e(1),
        n = e(7),
        o = e(4).keccak_256;
      function h(t) {
        for (var r = t, e = r[0]; r.length > 0 && "0" === e.toString(); )
          e = (r = r.slice(1))[0];
        return r;
      }
      function s(t) {
        var e = t.toString(16);
        return e.length % 2 && (e = `0${e}`), h(new r(e, "hex"));
      }
      function u(t, r) {
        return (
          !("string" != typeof t || !t.match(/^0x[0-9A-Fa-f]*$/)) &&
          (!r || t.length === 2 + 2 * r)
        );
      }
      function a(t, e) {
        var i = t;
        if (!r.isBuffer(i)) {
          if (!u(i)) {
            const t = new Error(
              e
                ? `[ethjs-abi] invalid ${e}`
                : "[ethjs-abi] invalid hex or buffer, must be a prefixed alphanumeric even length hex string"
            );
            throw (
              ((t.reason =
                "[ethjs-abi] invalid hex string, hex must be prefixed and alphanumeric (e.g. 0x023..)"),
              (t.value = i),
              t)
            );
          }
          (i = i.substring(2)).length % 2 && (i = `0${i}`),
            (i = new r(i, "hex"));
        }
        return i;
      }
      function f(t, e) {
        return {
          encode: function (i) {
            var o = i;
            return (
              "object" == typeof o &&
                o.toString &&
                (o.toTwos || o.dividedToIntegerBy) &&
                (o = o.toString(10).split(".")[0]),
              ("string" != typeof o && "number" != typeof o) ||
                (o = String(o).split(".")[0]),
              (o = (o = n(o)).toTwos(8 * t).maskn(8 * t)),
              e && (o = o.fromTwos(8 * t).toTwos(256)),
              o.toArrayLike(r, "be", 32)
            );
          },
          decode: function (r, n) {
            var o = 32 - t,
              h = new i(r.slice(n + o, n + 32));
            return (
              (h = e ? h.fromTwos(8 * t) : h.maskn(8 * t)),
              { consumed: 32, value: new i(h.toString(10)) }
            );
          },
        };
      }
      const l = f(32, !1),
        c = {
          encode: function (t) {
            return l.encode(t ? 1 : 0);
          },
          decode: function (t, r) {
            var e = l.decode(t, r);
            return { consumed: e.consumed, value: !e.value.isZero() };
          },
        };
      function d(t) {
        return {
          encode: function (t) {
            var e = t;
            if (32 === (e = a(e)).length) return e;
            var i = new r(32);
            return i.fill(0), e.copy(i), i;
          },
          decode: function (r, e) {
            if (0 !== r.length && r.length < e + 32)
              throw new Error(
                `[ethjs-abi] while decoding fixed bytes, invalid bytes data length: ${t}`
              );
            return {
              consumed: 32,
              value: `0x${r.slice(e, e + t).toString("hex")}`,
            };
          },
        };
      }
      const p = {
        encode: function (t) {
          var e = t,
            i = new r(32);
          if (!u(e, 20))
            throw new Error(
              "[ethjs-abi] while encoding address, invalid address value, not alphanumeric 20 byte hex string"
            );
          return (e = a(e)), i.fill(0), e.copy(i, 12), i;
        },
        decode: function (t, r) {
          if (0 === t.length) return { consumed: 32, value: "0x" };
          if (0 !== t.length && t.length < r + 32)
            throw new Error(
              `[ethjs-abi] while decoding address data, invalid address data, invalid byte length ${t.length}`
            );
          return {
            consumed: 32,
            value: `0x${t.slice(r + 12, r + 32).toString("hex")}`,
          };
        },
      };
      function m(t) {
        var e = parseInt(32 * Math.ceil(t.length / 32)),
          i = new r(e - t.length);
        return i.fill(0), r.concat([l.encode(t.length), t, i]);
      }
      function g(t, r) {
        if (0 !== t.length && t.length < r + 32)
          throw new Error(
            `[ethjs-abi] while decoding dynamic bytes data, invalid bytes length: ${
              t.length
            } should be less than ${r + 32}`
          );
        var e = l.decode(t, r).value;
        if (((e = e.toNumber()), 0 !== t.length && t.length < r + 32 + e))
          throw new Error(
            `[ethjs-abi] while decoding dynamic bytes data, invalid bytes length: ${
              t.length
            } should be less than ${r + 32 + e}`
          );
        return {
          consumed: parseInt(32 + 32 * Math.ceil(e / 32), 10),
          value: t.slice(r + 32, r + 32 + e),
        };
      }
      const v = {
          encode: function (t) {
            return m(a(t));
          },
          decode: function (t, r) {
            var e = g(t, r);
            return (e.value = `0x${e.value.toString("hex")}`), e;
          },
          dynamic: !0,
        },
        y = {
          encode: function (t) {
            return m(new r(t, "utf8"));
          },
          decode: function (t, r) {
            var e = g(t, r);
            return (e.value = e.value.toString("utf8")), e;
          },
          dynamic: !0,
        };
      function w(t, e) {
        return {
          encode: function (i) {
            var n = new r(0),
              o = e;
            if (!Array.isArray(i))
              throw new Error(
                "[ethjs-abi] while encoding array, invalid array data, not type Object (Array)"
              );
            if (
              (-1 === o && ((o = i.length), (n = l.encode(o))), o !== i.length)
            )
              throw new Error(
                `[ethjs-abi] while encoding array, size mismatch array length ${o} does not equal ${i.length}`
              );
            return (
              i.forEach((e) => {
                n = r.concat([n, t.encode(e)]);
              }),
              n
            );
          },
          decode: function (r, i) {
            var n,
              o = e,
              h = i,
              s = 0;
            -1 === o &&
              ((o = (n = l.decode(r, h)).value.toNumber()),
              (s += n.consumed),
              (h += n.consumed));
            for (var u = [], a = 0; a < o; a++) {
              const e = t.decode(r, h);
              (s += e.consumed), (h += e.consumed), u.push(e.value);
            }
            return { consumed: s, value: u };
          },
          dynamic: -1 === e,
        };
      }
      const M = new RegExp(
        /^((u?int|bytes)([0-9]*)|(address|bool|string)|(\[([0-9]*)\]))/
      );
      t.exports = {
        BN: i,
        bnToBuffer: s,
        isHexString: u,
        hexOrBuffer: a,
        hexlify: function (t) {
          return "number" == typeof t
            ? `0x${s(new i(t)).toString("hex")}`
            : t.mod || t.modulo
            ? `0x${s(t).toString("hex")}`
            : `0x${a(t).toString("hex")}`;
        },
        stripZeros: h,
        keccak256: o,
        getKeys: function (t, r, e) {
          var i = [];
          if (!Array.isArray(t))
            throw new Error(
              `[ethjs-abi] while getting keys, invalid params value ${JSON.stringify(
                t
              )}`
            );
          for (var n = 0; n < t.length; n++) {
            var o = t[n][r];
            if (e && !o) o = "";
            else if ("string" != typeof o)
              throw new Error(
                "[ethjs-abi] while getKeys found invalid ABI data structure, type value not string"
              );
            i.push(o);
          }
          return i;
        },
        numberToBN: n,
        coderNumber: f,
        uint256Coder: l,
        coderBoolean: c,
        coderFixedBytes: d,
        coderAddress: p,
        coderDynamicBytes: v,
        coderString: y,
        coderArray: w,
        paramTypePart: M,
        getParamCoder: function (t) {
          var r = t,
            e = null;
          const i = `[ethjs-abi] while getting param coder (getParamCoder) type value ${JSON.stringify(
            r
          )} is either invalid or unsupported by ethjs-abi.`;
          for (; r; ) {
            var n = r.match(M);
            if (!n) throw new Error(i);
            r = r.substring(n[0].length);
            var o = n[2] || n[4] || n[5];
            switch (o) {
              case "int":
              case "uint":
                if (e) throw new Error(i);
                var h = parseInt(n[3] || 256);
                if (0 === h || h > 256 || h % 8 != 0)
                  throw new Error(
                    `[ethjs-abi] while getting param coder for type ${r}, invalid ${o}<N> width: ${r}`
                  );
                e = f(h / 8, "int" === o);
                break;
              case "bool":
                if (e) throw new Error(i);
                e = c;
                break;
              case "string":
                if (e) throw new Error(i);
                e = y;
                break;
              case "bytes":
                if (e) throw new Error(i);
                if (n[3]) {
                  var s = parseInt(n[3]);
                  if (0 === s || s > 32)
                    throw new Error(
                      `[ethjs-abi] while getting param coder for prefix bytes, invalid type ${r}, size ${s} should be 0 or greater than 32`
                    );
                  e = d(s);
                } else e = v;
                break;
              case "address":
                if (e) throw new Error(i);
                e = p;
                break;
              case "[]":
                if (!e || e.dynamic) throw new Error(i);
                e = w(e, -1);
                break;
              default:
                if (!e || e.dynamic) throw new Error(i);
                e = w(e, parseInt(n[6]));
            }
          }
          if (!e) throw new Error(i);
          return e;
        },
      };
    }.call(this, e(0).Buffer));
  },
  function (t, r) {
    var e = {}.toString;
    t.exports =
      Array.isArray ||
      function (t) {
        return "[object Array]" == e.call(t);
      };
  },
  function (t, r) {
    (r.read = function (t, r, e, i, n) {
      var o,
        h,
        s = 8 * n - i - 1,
        u = (1 << s) - 1,
        a = u >> 1,
        f = -7,
        l = e ? n - 1 : 0,
        c = e ? -1 : 1,
        d = t[r + l];
      for (
        l += c, o = d & ((1 << -f) - 1), d >>= -f, f += s;
        f > 0;
        o = 256 * o + t[r + l], l += c, f -= 8
      );
      for (
        h = o & ((1 << -f) - 1), o >>= -f, f += i;
        f > 0;
        h = 256 * h + t[r + l], l += c, f -= 8
      );
      if (0 === o) o = 1 - a;
      else {
        if (o === u) return h ? NaN : (1 / 0) * (d ? -1 : 1);
        (h += Math.pow(2, i)), (o -= a);
      }
      return (d ? -1 : 1) * h * Math.pow(2, o - i);
    }),
      (r.write = function (t, r, e, i, n, o) {
        var h,
          s,
          u,
          a = 8 * o - n - 1,
          f = (1 << a) - 1,
          l = f >> 1,
          c = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          d = i ? 0 : o - 1,
          p = i ? 1 : -1,
          m = r < 0 || (0 === r && 1 / r < 0) ? 1 : 0;
        for (
          r = Math.abs(r),
            isNaN(r) || r === 1 / 0
              ? ((s = isNaN(r) ? 1 : 0), (h = f))
              : ((h = Math.floor(Math.log(r) / Math.LN2)),
                r * (u = Math.pow(2, -h)) < 1 && (h--, (u *= 2)),
                (r += h + l >= 1 ? c / u : c * Math.pow(2, 1 - l)) * u >= 2 &&
                  (h++, (u /= 2)),
                h + l >= f
                  ? ((s = 0), (h = f))
                  : h + l >= 1
                  ? ((s = (r * u - 1) * Math.pow(2, n)), (h += l))
                  : ((s = r * Math.pow(2, l - 1) * Math.pow(2, n)), (h = 0)));
          n >= 8;
          t[e + d] = 255 & s, d += p, s /= 256, n -= 8
        );
        for (
          h = (h << n) | s, a += n;
          a > 0;
          t[e + d] = 255 & h, d += p, h /= 256, a -= 8
        );
        t[e + d - p] |= 128 * m;
      });
  },
  function (t, r, e) {
    "use strict";
    (r.byteLength = function (t) {
      return (3 * t.length) / 4 - a(t);
    }),
      (r.toByteArray = function (t) {
        var r,
          e,
          i,
          h,
          s,
          u = t.length;
        (h = a(t)), (s = new o((3 * u) / 4 - h)), (e = h > 0 ? u - 4 : u);
        var f = 0;
        for (r = 0; r < e; r += 4)
          (i =
            (n[t.charCodeAt(r)] << 18) |
            (n[t.charCodeAt(r + 1)] << 12) |
            (n[t.charCodeAt(r + 2)] << 6) |
            n[t.charCodeAt(r + 3)]),
            (s[f++] = (i >> 16) & 255),
            (s[f++] = (i >> 8) & 255),
            (s[f++] = 255 & i);
        2 === h
          ? ((i = (n[t.charCodeAt(r)] << 2) | (n[t.charCodeAt(r + 1)] >> 4)),
            (s[f++] = 255 & i))
          : 1 === h &&
            ((i =
              (n[t.charCodeAt(r)] << 10) |
              (n[t.charCodeAt(r + 1)] << 4) |
              (n[t.charCodeAt(r + 2)] >> 2)),
            (s[f++] = (i >> 8) & 255),
            (s[f++] = 255 & i));
        return s;
      }),
      (r.fromByteArray = function (t) {
        for (
          var r, e = t.length, n = e % 3, o = "", h = [], s = 0, u = e - n;
          s < u;
          s += 16383
        )
          h.push(f(t, s, s + 16383 > u ? u : s + 16383));
        1 === n
          ? ((r = t[e - 1]),
            (o += i[r >> 2]),
            (o += i[(r << 4) & 63]),
            (o += "=="))
          : 2 === n &&
            ((r = (t[e - 2] << 8) + t[e - 1]),
            (o += i[r >> 10]),
            (o += i[(r >> 4) & 63]),
            (o += i[(r << 2) & 63]),
            (o += "="));
        return h.push(o), h.join("");
      });
    for (
      var i = [],
        n = [],
        o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
        h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        s = 0,
        u = h.length;
      s < u;
      ++s
    )
      (i[s] = h[s]), (n[h.charCodeAt(s)] = s);
    function a(t) {
      var r = t.length;
      if (r % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
      return "=" === t[r - 2] ? 2 : "=" === t[r - 1] ? 1 : 0;
    }
    function f(t, r, e) {
      for (var n, o, h = [], s = r; s < e; s += 3)
        (n =
          ((t[s] << 16) & 16711680) +
          ((t[s + 1] << 8) & 65280) +
          (255 & t[s + 2])),
          h.push(
            i[((o = n) >> 18) & 63] +
              i[(o >> 12) & 63] +
              i[(o >> 6) & 63] +
              i[63 & o]
          );
      return h.join("");
    }
    (n["-".charCodeAt(0)] = 62), (n["_".charCodeAt(0)] = 63);
  },
  function (t, r, e) {
    (function (r) {
      const i = e(9),
        n = i.uint256Coder,
        o =
          (i.coderBoolean,
          i.coderFixedBytes,
          i.coderAddress,
          i.coderDynamicBytes,
          i.coderString,
          i.coderArray,
          i.paramTypePart,
          i.getParamCoder);
      function h(t, e) {
        if (t.length !== e.length)
          throw new Error(
            `[ethjs-abi] while encoding params, types/values mismatch, Your contract requires ${t.length} types (arguments), and you passed in ${e.length}`
          );
        var i = [];
        function h(t) {
          return parseInt(32 * Math.ceil(t / 32));
        }
        t.forEach(function (t, r) {
          var n = o(t);
          i.push({ dynamic: n.dynamic, value: n.encode(e[r]) });
        });
        var s = 0,
          u = 0;
        i.forEach(function (t) {
          t.dynamic
            ? ((s += 32), (u += h(t.value.length)))
            : (s += h(t.value.length));
        });
        var a = 0,
          f = s,
          l = new r(s + u);
        return (
          i.forEach(function (t, r) {
            t.dynamic
              ? (n.encode(f).copy(l, a),
                (a += 32),
                t.value.copy(l, f),
                (f += h(t.value.length)))
              : (t.value.copy(l, a), (a += h(t.value.length)));
          }),
          "0x" + l.toString("hex")
        );
      }
      function s(t, r, e, h = !0) {
        arguments.length < 3 && ((e = r), (r = t), (t = [])),
          (e = i.hexOrBuffer(e));
        var s = new (function () {})(),
          u = 0;
        return (
          r.forEach(function (r, i) {
            var a = o(r);
            if (a.dynamic) {
              var f = n.decode(e, u),
                l = a.decode(e, f.value.toNumber());
              u += f.consumed;
            } else {
              l = a.decode(e, u);
              u += l.consumed;
            }
            h && (s[i] = l.value), t[i] && (s[t[i]] = l.value);
          }),
          s
        );
      }
      function u(t) {
        const e = `${t.name}(${i.getKeys(t.inputs, "type").join(",")})`;
        return `0x${new r(i.keccak256(e), "hex").slice(0, 4).toString("hex")}`;
      }
      function a(t, r) {
        const e = h(i.getKeys(t.inputs, "type"), r).substring(2);
        return `${u(t)}${e}`;
      }
      function f(t) {
        const r = `${t.name}(${i.getKeys(t.inputs, "type").join(",")})`;
        return `0x${i.keccak256(r)}`;
      }
      function l(t, e, n, h = !0) {
        const u = t.inputs.filter((t) => !t.indexed),
          a = s(
            i.getKeys(u, "name", !0),
            i.getKeys(u, "type"),
            i.hexOrBuffer(e),
            h
          ),
          f = t.anonymous ? 0 : 1;
        return (
          t.inputs
            .filter((t) => t.indexed)
            .map((t, e) => {
              const i = new r(n[e + f].slice(2), "hex"),
                h = o(t.type);
              a[t.name] = h.decode(i, 0).value;
            }),
          (a._eventName = t.name),
          a
        );
      }
      function c(t, r, e = !0) {
        if (t && r.topics[0] === f(t)) return l(t, r.data, r.topics, e);
      }
      t.exports = {
        encodeParams: h,
        decodeParams: s,
        encodeMethod: a,
        decodeMethod: function (t, r) {
          return s(
            i.getKeys(t.outputs, "name", !0),
            i.getKeys(t.outputs, "type"),
            i.hexOrBuffer(r)
          );
        },
        encodeEvent: function (t, r) {
          return a(t, r);
        },
        decodeEvent: l,
        decodeLogItem: c,
        logDecoder: function (t, r = !0) {
          const e = {};
          return (
            t
              .filter((t) => "event" === t.type)
              .map((t) => {
                e[f(t)] = t;
              }),
            function (t) {
              return t.map((t) => c(e[t.topics[0]], t, r)).filter((t) => t);
            }
          );
        },
        eventSignature: f,
        encodeSignature: u,
      };
    }.call(this, e(0).Buffer));
  },
]);
