(function(sttc) {
    /* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/
    'use strict';
    var aa = {}
      , n = this || self;
    function ba(a) {
        a = a.split(".");
        for (var b = n, c = 0; c < a.length; c++)
            if (b = b[a[c]],
            null == b)
                return null;
        return b
    }
    function ca(a) {
        var b = typeof a;
        return "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"
    }
    function da(a) {
        var b = ca(a);
        return "array" == b || "object" == b && "number" == typeof a.length
    }
    function ea(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }
    function fa(a) {
        return Object.prototype.hasOwnProperty.call(a, ha) && a[ha] || (a[ha] = ++ia)
    }
    var ha = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , ia = 0;
    function ja(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function ka(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function la(a, b, c) {
        la = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ja : ka;
        return la.apply(null, arguments)
    }
    function ma(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }
    function na(a, b) {
        a = a.split(".");
        var c = n;
        a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift()); )
            a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }
    function oa(a) {
        return a
    }
    ;let pa = (new Date).getTime();
    function qa(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    function ra(a, b) {
        let c = 0;
        a = qa(String(a)).split(".");
        b = qa(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || ""
              , f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length)
                    break;
                c = sa(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || sa(0 == e[2].length, 0 == f[2].length) || sa(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }
    function sa(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;var ua, va = ba("CLOSURE_FLAGS"), wa = va && va[610401301];
    ua = null != wa ? wa : !1;
    function xa() {
        var a = n.navigator;
        return a && (a = a.userAgent) ? a : ""
    }
    var ya;
    const za = n.navigator;
    ya = za ? za.userAgentData || null : null;
    function Aa(a) {
        return ua ? ya ? ya.brands.some(({brand: b})=>b && -1 != b.indexOf(a)) : !1 : !1
    }
    function p(a) {
        return -1 != xa().indexOf(a)
    }
    ;function Ba() {
        return ua ? !!ya && 0 < ya.brands.length : !1
    }
    function Ea() {
        return Ba() ? !1 : p("Trident") || p("MSIE")
    }
    function Fa() {
        return Ba() ? Aa("Microsoft Edge") : p("Edg/")
    }
    function Ga() {
        !p("Safari") || Ha() || (Ba() ? 0 : p("Coast")) || (Ba() ? 0 : p("Opera")) || (Ba() ? 0 : p("Edge")) || Fa() || Ba() && Aa("Opera")
    }
    function Ha() {
        return Ba() ? Aa("Chromium") : (p("Chrome") || p("CriOS")) && !(Ba() ? 0 : p("Edge")) || p("Silk")
    }
    function Ia(a) {
        const b = {};
        a.forEach(c=>{
            b[c[0]] = c[1]
        }
        );
        return c=>b[c.find(d=>d in b)] || ""
    }
    function Ja() {
        var a = xa();
        if (Ea()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1])
                a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a),
                    "7.0" == c[1])
                        if (a && a[1])
                            switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                            }
                        else
                            b = "7.0";
                    else
                        b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        let d;
        for (; d = c.exec(a); )
            b.push([d[1], d[2], d[3] || void 0]);
        a = Ia(b);
        return (Ba() ? 0 : p("Opera")) ? a(["Version", "Opera"]) : (Ba() ? 0 : p("Edge")) ? a(["Edge"]) : Fa() ? a(["Edg"]) : p("Silk") ? a(["Silk"]) : Ha() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    }
    ;function La(a, b) {
        if ("string" === typeof a)
            return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
    function Ma(a, b) {
        const c = a.length
          , d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            e in d && b.call(void 0, d[e], e, a)
    }
    function Na(a, b) {
        const c = a.length
          , d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }
    function Oa(a, b) {
        const c = a.length
          , d = Array(c)
          , e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++)
            f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }
    function Pa(a, b) {
        const c = a.length
          , d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a))
                return !0;
        return !1
    }
    function Qa(a, b) {
        a: {
            const c = a.length
              , d = "string" === typeof a ? a.split("") : a;
            for (let e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    function Ra(a, b) {
        a: {
            var c = a.length;
            const d = "string" === typeof a ? a.split("") : a;
            for (--c; 0 <= c; c--)
                if (c in d && b.call(void 0, d[c], c, a)) {
                    b = c;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }
    function Sa(a, b) {
        return 0 <= La(a, b)
    }
    function Ta(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++)
                c[d] = a[d];
            return c
        }
        return []
    }
    ;function Ua(a) {
        Ua[" "](a);
        return a
    }
    Ua[" "] = function() {}
    ;
    var Va = Ea();
    !p("Android") || Ha();
    Ha();
    Ga();
    var Wa = null;
    function Xa(a) {
        var b = [];
        Za(a, function(c) {
            b.push(c)
        });
        return b
    }
    function Za(a, b) {
        function c(k) {
            for (; d < a.length; ) {
                var m = a.charAt(d++)
                  , l = Wa[m];
                if (null != l)
                    return l;
                if (!/^[\s\xa0]*$/.test(m))
                    throw Error("Unknown base64 encoding at char: " + m);
            }
            return k
        }
        $a();
        for (var d = 0; ; ) {
            var e = c(-1)
              , f = c(0)
              , g = c(64)
              , h = c(64);
            if (64 === h && -1 === e)
                break;
            b(e << 2 | f >> 4);
            64 != g && (b(f << 4 & 240 | g >> 2),
            64 != h && b(g << 6 & 192 | h))
        }
    }
    function $a() {
        if (!Wa) {
            Wa = {};
            for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.", "-_"], c = 0; 5 > c; c++)
                for (var d = a.concat(b[c].split("")), e = 0; e < d.length; e++) {
                    var f = d[e];
                    void 0 === Wa[f] && (Wa[f] = e)
                }
        }
    }
    ;const ab = /[-_.]/g
      , bb = {
        "-": "+",
        _: "/",
        ".": "="
    };
    function cb(a) {
        return bb[a] || ""
    }
    function db(a) {
        return null != a && a instanceof Uint8Array
    }
    ;function eb(a) {
        return Array.prototype.slice.call(a)
    }
    ;const r = Symbol();
    function fb(a) {
        const b = a[r] | 0;
        1 !== (b & 1) && (Object.isFrozen(a) && (a = eb(a)),
        a[r] = b | 1)
    }
    function gb(a, b) {
        Object.isFrozen(a) && (a = eb(a));
        a[r] = b;
        return a
    }
    function hb(a) {
        a[r] |= 1;
        return a
    }
    function ib(a) {
        a[r] |= 16;
        return a
    }
    function jb(a, b) {
        b[r] = (a | 0) & -51
    }
    function kb(a, b) {
        b[r] = (a | 18) & -41
    }
    function lb(a) {
        a = a >> 10 & 1023;
        return 0 === a ? 536870912 : a
    }
    ;var mb = {};
    function nb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    function ob(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    let pb;
    function qb(a, b, c) {
        if (!Array.isArray(a) || a.length)
            return !1;
        const d = a[r] | 0;
        if (d & 1)
            return !0;
        if (!b || !b.includes(c))
            return !1;
        a[r] = d | 1;
        return !0
    }
    var rb;
    const sb = [];
    sb[r] = 23;
    rb = Object.freeze(sb);
    function tb(a) {
        if (a & 2)
            throw Error();
    }
    ;function ub(a) {
        if ("boolean" !== typeof a)
            throw Error(`Expected boolean but got ${ca(a)}: ${a}`);
        return !!a
    }
    function vb(a) {
        if (null == a)
            return a;
        switch (typeof a) {
        case "string":
            return +a;
        case "number":
            return a
        }
    }
    function t(a) {
        return null == a ? a : a
    }
    function wb(a) {
        return null == a ? a : a
    }
    function xb(a) {
        if (null != a && "string" !== typeof a)
            throw Error();
        return a
    }
    function yb(a) {
        return null == a || "string" === typeof a ? a : void 0
    }
    function zb(a, b, c, d) {
        var e = !1;
        if (null != a && "object" === typeof a && !(e = Array.isArray(a)) && a.U === mb)
            return a;
        if (!e)
            return c ? d & 2 ? (a = b[Ab]) ? b = a : (a = new b,
            d = a.s,
            d[r] |= 18,
            b = b[Ab] = a) : b = new b : b = void 0,
            b;
        e = c = a[r] | 0;
        0 === e && (e |= d & 16);
        e |= d & 2;
        e !== c && (a[r] = e);
        return new b(a)
    }
    const Ab = Symbol();
    function Bb(a, b, c) {
        a = a || {};
        b = b || {};
        const d = {};
        for (let e in a)
            ob(a, e) && (d[e] = 0);
        for (let e in b)
            ob(b, e) && (d[e] = 0);
        for (let e in d)
            if (ob(d, e) && !isNaN(e) && !Cb(e, a[e], e, b[e], c, 0))
                return !1;
        return !0
    }
    function Db(a, b) {
        if ("string" === typeof b)
            try {
                var c = b;
                ab.test(c) && (c = c.replace(ab, cb));
                var d = atob(c);
                var e = new Uint8Array(d.length);
                for (c = 0; c < d.length; c++)
                    e[c] = d.charCodeAt(c);
                b = e
            } catch (f) {
                return !1
            }
        if (d = db(b))
            a: if (d = a.length,
            d !== b.length)
                d = !1;
            else {
                for (e = 0; e < d; e++)
                    if (a[e] !== b[e]) {
                        d = !1;
                        break a
                    }
                d = !0
            }
        return d
    }
    function Eb(a, b) {
        let c, d = void 0;
        a.U === mb && (c = a.constructor.u,
        a = a.s,
        d = (a[r] >> 8 & 1) - 1);
        b.U === mb && (c = c || b.constructor.u,
        b = b.s,
        d = null == d ? (b[r] >> 8 & 1) - 1 : d);
        return Cb(void 0, a, void 0, b, c, d)
    }
    function Cb(a, b, c, d, e, f=9999) {
        if (b === d || null == b && null == d)
            return !0;
        if (null == b)
            return qb(d, e, +a - f);
        if (null == d)
            return qb(b, e, +c - f);
        if (db(b))
            return Db(b, d);
        if (db(d))
            return Db(d, b);
        a = typeof b;
        c = typeof d;
        if ("object" !== a || "object" !== c)
            return Number.isNaN(b) || Number.isNaN(d) ? String(b) === String(d) : "string" === a && "number" === c || "number" === a && "string" === c ? +b === +d : "boolean" === a && "number" === c || "number" === a && "boolean" === c ? !b === !d : !1;
        if (b.U === mb || d.U === mb)
            return Eb(b, d);
        if (b.constructor != d.constructor)
            return !1;
        if (b.constructor === Array) {
            c = a = void 0;
            const g = b.length
              , h = d.length
              , k = Math.max(g, h);
            for (let m = 0; m < k; m++) {
                let l = m >= g ? void 0 : b[m]
                  , q = m >= h ? void 0 : d[m];
                l && m == g - 1 && nb(l) && (a = l,
                l = void 0);
                q && m == h - 1 && nb(q) && (c = q,
                q = void 0);
                null == q && qb(l, e, m - f) && (l = void 0);
                null == l && qb(q, e, m - f) && (q = void 0);
                if (!Cb(m, l, m, q))
                    return !1
            }
            return a || c ? Bb(a, c, e) : !0
        }
        if (b.constructor === Object)
            return Bb(b, d);
        throw Error();
    }
    ;function Fb(a, b) {
        a = a.s;
        return Gb(a, a[r], b)
    }
    function Gb(a, b, c, d) {
        if (-1 === c)
            return null;
        if (c >= lb(b)) {
            if (b & 128)
                return a[a.length - 1][c]
        } else {
            var e = a.length;
            if (d && b & 128 && (d = a[e - 1][c],
            null != d))
                return d;
            b = c + ((b >> 8 & 1) - 1);
            if (b < e)
                return a[b]
        }
    }
    function u(a, b, c) {
        const d = a.s
          , e = d[r];
        tb(e);
        y(d, e, b, c);
        return a
    }
    function y(a, b, c, d, e) {
        var f = lb(b);
        if (c >= f || e) {
            e = b;
            if (b & 128)
                f = a[a.length - 1];
            else {
                if (null == d)
                    return;
                f = a[f + ((b >> 8 & 1) - 1)] = {};
                e |= 128
            }
            f[c] = d;
            e &= -513;
            e !== b && (a[r] = e)
        } else
            a[c + ((b >> 8 & 1) - 1)] = d,
            b & 128 && (d = a[a.length - 1],
            c in d && delete d[c]),
            b & 512 && (a[r] = b & -513)
    }
    function Hb(a, b, c) {
        var d = b & 2;
        a = Gb(a, b, c);
        Array.isArray(a) || (a = rb);
        b = a[r] | 0;
        b & 1 || hb(a);
        d ? b & 2 || (a[r] |= 18) : b & 16 && !(b & 2) && (d = a,
        d[r] &= -17);
        return a
    }
    function Ib(a, b) {
        a = Fb(a, b);
        return null == a ? a : "boolean" === typeof a || "number" === typeof a ? !!a : void 0
    }
    function Jb(a, b, c) {
        a = a.s;
        const d = a[r]
          , e = d & 2;
        let f = Hb(a, d, b)
          , g = f[r] | 0;
        if (!(g & 4)) {
            Object.isFrozen(f) && (f = hb(eb(f)),
            y(a, d, b, f));
            let h = 0
              , k = 0;
            for (; h < f.length; h++) {
                const m = c(f[h]);
                null != m && (f[k++] = m)
            }
            k < h && (f.length = k);
            g |= 5;
            e && (g |= 18);
            f[r] = g;
            g & 2 && Object.freeze(f)
        }
        !e && (g & 2 || Object.isFrozen(f)) && (c = f = eb(f),
        c[r] |= 5,
        y(a, d, b, f));
        return f
    }
    function Kb(a, b, c) {
        {
            const e = a.s
              , f = e[r];
            tb(f);
            if (null == c)
                y(e, f, b);
            else {
                var d = c[r] | 0;
                if (!(d & 4)) {
                    if (d & 2 || Object.isFrozen(c))
                        c = eb(c);
                    for (let g = 0; g < c.length; g++)
                        c[g] = c[g];
                    c[r] = d | 5
                }
                y(e, f, b, c)
            }
        }
        return a
    }
    function A(a, b, c, d) {
        const e = a.s
          , f = e[r];
        tb(f);
        y(e, f, b, c !== d ? c : void 0);
        return a
    }
    function Lb(a, b) {
        var c = performance.now();
        if (null != c && "number" !== typeof c)
            throw Error(`Value of float/double field must be a number|null|undefined, found ${typeof c}: ${c}`);
        A(a, b, c, 0)
    }
    function Mb(a, b, c, d) {
        const e = a.s
          , f = e[r];
        tb(f);
        (c = Nb(e, f, c)) && c !== b && null != d && y(e, f, c);
        y(e, f, b, d);
        return a
    }
    function Ob(a, b, c) {
        a = a.s;
        return Nb(a, a[r], b) === c ? c : -1
    }
    function Pb(a, b) {
        a = a.s;
        return Nb(a, a[r], b)
    }
    function Nb(a, b, c) {
        let d = 0;
        for (let e = 0; e < c.length; e++) {
            const f = c[e];
            null != Gb(a, b, f) && (0 !== d && y(a, b, d),
            d = f)
        }
        return d
    }
    function Qb(a) {
        var b = Rb;
        a = a.s;
        const c = a[r];
        tb(c);
        const d = Gb(a, c, 3);
        b = Sb(zb(d, b, !0, c));
        d !== b && y(a, c, 3, b);
        return b
    }
    function Tb(a, b, c, d) {
        a = a.s;
        const e = a[r]
          , f = Gb(a, e, c, d);
        b = zb(f, b, !1, e);
        b !== f && null != b && y(a, e, c, b, d);
        return b
    }
    function B(a, b, c) {
        b = Tb(a, b, c, !1);
        if (null == b)
            return b;
        a = a.s;
        const d = a[r];
        if (!(d & 2)) {
            const e = Sb(b);
            e !== b && (b = e,
            y(a, d, c, b, !1))
        }
        return b
    }
    function Ub(a, b, c, d, e) {
        var f = !!(b & 2)
          , g = Hb(a, b, d);
        if (g === rb || !((g[r] | 0) & 4)) {
            var h = g;
            g = !!(b & 2);
            var k = !!((h[r] | 0) & 2);
            f = h;
            !g && k && (h = eb(h));
            var m = b | (k ? 2 : 0);
            k = k || void 0;
            let l = 0
              , q = 0;
            for (; l < h.length; l++) {
                const w = zb(h[l], c, !1, m);
                void 0 !== w && (k = k || w.s[r] & 2,
                h[q++] = w)
            }
            q < l && (h.length = q);
            c = h;
            h = c[r] | 0;
            m = h | 5;
            k = k ? m & -9 : m | 8;
            h != k && (c = gb(c, k));
            h = c;
            f !== h && y(a, b, d, h);
            (g && 2 !== e || 1 === e) && Object.freeze(h);
            return h
        }
        if (3 === e)
            return g;
        f || (f = Object.isFrozen(g),
        1 === e ? f || Object.freeze(g) : (e = g[r] | 0,
        c = e & -19,
        f && (g = eb(g),
        e = 0,
        y(a, b, d, g)),
        e !== c && (g[r] = c)));
        return g
    }
    function C(a, b, c) {
        var d = a.s;
        const e = d[r];
        a = !!(e & 2);
        b = Ub(d, e, b, c, a ? 1 : 2);
        if (!(a || (b[r] | 0) & 8)) {
            for (c = 0; c < b.length; c++)
                a = b[c],
                d = Sb(a),
                a !== d && (b[c] = d);
            b[r] |= 8
        }
        return b
    }
    function Vb(a, b, c) {
        null == c && (c = void 0);
        return u(a, b, c)
    }
    function Wb(a, b, c, d) {
        null == d && (d = void 0);
        return Mb(a, b, c, d)
    }
    function Xb(a, b, c) {
        const d = a.s
          , e = d[r];
        tb(e);
        if (null != c) {
            var f = !!c.length;
            for (var g = 0; g < c.length; g++) {
                var h = c[g];
                f = f && !((h.s[r] | 0) & 2)
            }
            g = c[r] | 0;
            h = g | 1;
            f = (f ? h | 8 : h & -9) | 4;
            f != g && (c = gb(c, f))
        }
        null == c && (c = void 0);
        y(d, e, b, c);
        return a
    }
    function D(a, b) {
        return vb(Fb(a, b))
    }
    function Yb(a, b) {
        a: if (a = Fb(a, b),
        null != a) {
            switch (typeof a) {
            case "string":
                a = +a;
                break a;
            case "number":
                break a
            }
            a = void 0
        }
        return a
    }
    function Zb(a, b, c) {
        return u(a, b, null == c ? c : ub(c))
    }
    function E(a, b) {
        return yb(Fb(a, b))
    }
    function F(a, b) {
        return wb(Fb(a, b))
    }
    function G(a, b, c=!1) {
        return Ib(a, b) ?? c
    }
    function $b(a, b) {
        a = a.s;
        const c = a[r]
          , d = Gb(a, c, b);
        var e = null == d ? d : "number" === typeof d || "NaN" === d || "Infinity" === d || "-Infinity" === d ? Number(d) : void 0;
        null != e && e !== d && y(a, c, b, e);
        return e ?? 0
    }
    function H(a, b) {
        return E(a, b) ?? ""
    }
    function I(a, b) {
        return F(a, b) ?? 0
    }
    function ac(a, b, c, d) {
        return B(a, b, Ob(a, d, c))
    }
    ;let bc;
    function cc(a, b) {
        bc = b;
        a = new a(b);
        bc = void 0;
        return a
    }
    ;function dc(a, b) {
        return ec(b)
    }
    function ec(a) {
        switch (typeof a) {
        case "number":
            return isFinite(a) ? a : String(a);
        case "boolean":
            return a ? 1 : 0;
        case "object":
            if (a && !Array.isArray(a) && db(a)) {
                let b = ""
                  , c = 0;
                const d = a.length - 10240;
                for (; c < d; )
                    b += String.fromCharCode.apply(null, a.subarray(c, c += 10240));
                b += String.fromCharCode.apply(null, c ? a.subarray(c) : a);
                return btoa(b)
            }
        }
        return a
    }
    ;function fc(a, b, c) {
        a = eb(a);
        var d = a.length;
        const e = b & 128 ? a[d - 1] : void 0;
        d += e ? -1 : 0;
        for (b = b & 256 ? 1 : 0; b < d; b++)
            a[b] = c(a[b]);
        if (e) {
            b = a[b] = {};
            for (const f in e)
                ob(e, f) && (b[f] = c(e[f]))
        }
        return a
    }
    function gc(a, b, c, d, e, f) {
        if (null != a) {
            if (Array.isArray(a))
                a = e && 0 == a.length && (a[r] | 0) & 1 ? void 0 : f && (a[r] | 0) & 2 ? a : hc(a, b, c, void 0 !== d, e, f);
            else if (nb(a)) {
                const g = {};
                for (let h in a)
                    ob(a, h) && (g[h] = gc(a[h], b, c, d, e, f));
                a = g
            } else
                a = b(a, d);
            return a
        }
    }
    function hc(a, b, c, d, e, f) {
        const g = d || c ? a[r] | 0 : 0;
        d = d ? !!(g & 16) : void 0;
        a = eb(a);
        for (let h = 0; h < a.length; h++)
            a[h] = gc(a[h], b, c, d, e, f);
        c && c(g, a);
        return a
    }
    function ic(a) {
        return a.U === mb ? jc(a, hc(a.s, ic, void 0, void 0, !1, !1), !0) : db(a) ? new Uint8Array(a) : a
    }
    function kc(a) {
        return a.U === mb ? a.toJSON() : ec(a)
    }
    var lc = "undefined" != typeof structuredClone ? structuredClone : a=>hc(a, ic, void 0, void 0, !1, !1);
    function mc(a, b, c=kb) {
        if (null != a) {
            if (a instanceof Uint8Array)
                return b ? a : new Uint8Array(a);
            if (Array.isArray(a)) {
                const d = a[r] | 0;
                if (d & 2)
                    return a;
                if (b && !(d & 32) && (d & 16 || 0 === d))
                    return a[r] = d | 18,
                    a;
                a = hc(a, mc, d & 4 ? kb : c, !0, !1, !0);
                b = a[r] | 0;
                b & 4 && b & 2 && Object.freeze(a);
                return a
            }
            a.U === mb && (b = a.s,
            c = b[r],
            a = c & 2 ? a : nc(a, b, c, !0));
            return a
        }
    }
    function nc(a, b, c, d) {
        const e = d || c & 2 ? kb : jb
          , f = !!(c & 16);
        b = fc(b, c, g=>mc(g, f, e));
        b[r] = b[r] | 16 | (d ? 2 : 0);
        return cc(a.constructor, b)
    }
    function Sb(a) {
        var b = a.s;
        const c = b[r];
        if (!(c & 2))
            return a;
        b = nc(a, b, c, !1);
        b.l = a;
        a = b.s;
        a[r] |= 512;
        return b
    }
    ;var J = class {
        constructor(a) {
            a: {
                null == a && (a = bc);
                bc = void 0;
                if (null == a) {
                    var b = 48;
                    a = []
                } else {
                    if (!Array.isArray(a))
                        throw Error();
                    b = a[r] | 0;
                    if (b & 32)
                        break a;
                    var c = a;
                    b |= 32;
                    var d = c.length;
                    if (d) {
                        var e = d - 1
                          , f = c[e];
                        if (nb(f)) {
                            b |= 128;
                            d = (b >> 8 & 1) - 1;
                            e -= d;
                            if (1024 <= e) {
                                e = 1023 + d;
                                const g = c.length;
                                for (let h = e; h < g; h++) {
                                    const k = c[h];
                                    null != k && k !== f && (f[h - d] = k)
                                }
                                c.length = e + 1;
                                c[e] = f;
                                e = 1023
                            }
                            b = b & -1047553 | (e & 1023) << 10
                        }
                    }
                }
                a[r] = b
            }
            this.s = a
        }
        toJSON() {
            if (pb)
                var a = jc(this, this.s, !1);
            else
                a = hc(this.s, kc, void 0, void 0, !1, !1),
                a = jc(this, a, !0);
            return a
        }
        build() {
            a: {
                var a = this.s;
                const c = a[r];
                if (c & 2)
                    a = this;
                else {
                    if (c & 512) {
                        var b = this.l;
                        if (b && Eb(b, this)) {
                            a = b;
                            break a
                        }
                    }
                    this.l = b = nc(this, a, c, !0);
                    a[r] = c | 512;
                    a = b
                }
            }
            return a
        }
    }
    ;
    J.prototype.U = mb;
    function jc(a, b, c) {
        var d = a.constructor.u
          , e = lb((c ? a.s : b)[r])
          , f = !1;
        if (d) {
            if (!c) {
                b = eb(b);
                var g;
                if (b.length && nb(g = b[b.length - 1]))
                    for (f = 0; f < d.length; f++)
                        if (d[f] >= e) {
                            Object.assign(b[b.length - 1] = {}, g);
                            break
                        }
                f = !0
            }
            e = b;
            c = !c;
            g = a.s[r];
            a = lb(g);
            g = (g >> 8 & 1) - 1;
            var h;
            for (let z = 0; z < d.length; z++) {
                var k = d[z];
                if (k < a) {
                    k += g;
                    var m = e[k];
                    null == m ? e[k] = c ? rb : hb([]) : c && m !== rb && fb(m)
                } else {
                    if (!h) {
                        var l = void 0;
                        e.length && nb(l = e[e.length - 1]) ? h = l : e.push(h = {})
                    }
                    m = h[k];
                    null == h[k] ? h[k] = c ? rb : hb([]) : c && m !== rb && fb(m)
                }
            }
        }
        d = b.length;
        if (!d)
            return b;
        let q, w;
        if (nb(h = b[d - 1])) {
            a: {
                var v = h;
                l = {};
                e = !1;
                for (let z in v)
                    ob(v, z) && (c = v[z],
                    Array.isArray(c) && c != c && (e = !0),
                    null != c ? l[z] = c : e = !0);
                if (e) {
                    for (let z in l) {
                        v = l;
                        break a
                    }
                    v = null
                }
            }
            v != h && (q = !0);
            d--
        }
        for (; 0 < d; d--) {
            h = b[d - 1];
            if (null != h)
                break;
            w = !0
        }
        if (!q && !w)
            return b;
        var x;
        f ? x = b : x = Array.prototype.slice.call(b, 0, d);
        b = x;
        f && (b.length = d);
        v && b.push(v);
        return b
    }
    function oc(a, b) {
        if (null == b)
            return new a;
        if (!Array.isArray(b))
            throw Error("must be an array");
        if (Object.isFrozen(b) || Object.isSealed(b) || !Object.isExtensible(b))
            throw Error("arrays passed to jspb constructors must be mutable");
        b[r] |= 64;
        return cc(a, ib(b))
    }
    ;function pc(a, b) {
        const c = rc;
        rc = void 0;
        if (!b(a))
            throw b = c ? c() + "\n" : "",
            Error(b + String(a));
    }
    const sc = a=>null !== a && void 0 !== a;
    let rc = void 0;
    function tc(a) {
        return b=>{
            if (null == b || "" == b)
                b = new a;
            else {
                b = JSON.parse(b);
                if (!Array.isArray(b))
                    throw Error(void 0);
                b = cc(a, ib(b))
            }
            return b
        }
    }
    ;var uc = class extends J {
    }
    ;
    var vc = class extends J {
    }
    ;
    vc.u = [2, 3, 4];
    function wc(a, b) {
        this.h = a === xc && b || "";
        this.g = yc
    }
    var yc = {}
      , xc = {};
    function zc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }
    function Ac(a) {
        let b = !1, c;
        return function() {
            b || (c = a(),
            b = !0);
            return c
        }
    }
    function Bc(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }
    ;function Cc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }
    function Dc(a, b, c) {
        return a.removeEventListener ? (a.removeEventListener(b, c, !1),
        !0) : !1
    }
    ;function Ec(a, b) {
        const c = {};
        for (const d in a)
            b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }
    function Fc(a, b) {
        for (const c in a)
            if (b.call(void 0, a[c], c, a))
                return !0;
        return !1
    }
    function Gc(a) {
        const b = [];
        let c = 0;
        for (const d in a)
            b[c++] = a[d];
        return b
    }
    function Hc(a) {
        const b = {};
        for (const c in a)
            b[c] = a[c];
        return b
    }
    ;var Ic;
    var Jc = class {
        constructor(a) {
            this.h = a
        }
        toString() {
            return this.h + ""
        }
    }
    ;
    function Kc(a, b) {
        a = Lc.exec(Mc(a).toString());
        var c = a[3] || "";
        return Nc(a[1] + Oc("?", a[2] || "", b) + Oc("#", c))
    }
    function Mc(a) {
        return a instanceof Jc && a.constructor === Jc ? a.h : "type_error:TrustedResourceUrl"
    }
    var Lc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/
      , Pc = {};
    function Nc(a) {
        if (void 0 === Ic) {
            var b = null;
            var c = n.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: oa,
                        createScript: oa,
                        createScriptURL: oa
                    })
                } catch (d) {
                    n.console && n.console.error(d.message)
                }
                Ic = b
            } else
                Ic = b
        }
        a = (b = Ic) ? b.createScriptURL(a) : a;
        return new Jc(a,Pc)
    }
    function Oc(a, b, c) {
        if (null == c)
            return b;
        if ("string" === typeof c)
            return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a),
                    b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    }
    ;var Qc = class {
        constructor(a) {
            this.g = a
        }
        toString() {
            return this.g.toString()
        }
    }
    ;
    function Rc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }
    ;function Sc(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!da(f) || ea(f) && 0 < f.nodeType)
                d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (ea(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                Ma(g ? Ta(f) : f, d)
            }
        }
    }
    function Tc(a) {
        this.g = a || n.document || document
    }
    Tc.prototype.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    }
    ;
    Tc.prototype.createElement = function(a) {
        var b = this.g;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    }
    ;
    Tc.prototype.createTextNode = function(a) {
        return this.g.createTextNode(String(a))
    }
    ;
    Tc.prototype.append = function(a, b) {
        Sc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
    }
    ;
    Tc.prototype.contains = function(a, b) {
        if (!a || !b)
            return !1;
        if (a.contains && 1 == b.nodeType)
            return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition)
            return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b; )
            b = b.parentNode;
        return b == a
    }
    ;
    function Uc() {
        return ua && ya ? ya.mobile : !Vc() && (p("iPod") || p("iPhone") || p("Android") || p("IEMobile"))
    }
    function Vc() {
        return ua && ya ? !ya.mobile && (p("iPad") || p("Android") || p("Silk")) : p("iPad") || p("Android") && !p("Mobile") || p("Silk")
    }
    ;var Wc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$")
      , Xc = /#|$/;
    function Yc(a, b) {
        var c = a.search(Xc);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c; ) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e),
                    !f || 61 == f || 38 == f || 35 == f)
                        break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d)
            return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c)
            e = c;
        d += b.length + 1;
        return decodeURIComponent(a.slice(d, -1 !== e ? e : 0).replace(/\+/g, " "))
    }
    ;/* 
 
 SPDX-License-Identifier: Apache-2.0 
*/
    const Zc = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");
    function $c(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href)
                a: {
                    try {
                        Ua(a.foo);
                        b = !0;
                        break a
                    } catch (c) {}
                    b = !1
                }
            return b
        } catch {
            return !1
        }
    }
    function ad(a) {
        return $c(a.top) ? a.top : null
    }
    function bd(a, b) {
        const c = cd("SCRIPT", a);
        c.src = Mc(b);
        (void 0)?.Ub || (b = (b = (c.ownerDocument && c.ownerDocument.defaultView || window).document.querySelector?.("script[nonce]")) ? b.nonce || b.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", b);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a),
        c) : null
    }
    function dd(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }
    function ed(a, b) {
        if (!fd() && !gd()) {
            let c = Math.random();
            if (c < b)
                return c = hd(),
                a[Math.floor(c * a.length)]
        }
        return null
    }
    function hd() {
        if (!globalThis.crypto)
            return Math.random();
        try {
            const a = new Uint32Array(1);
            globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch {
            return Math.random()
        }
    }
    function K(a, b) {
        if (a)
            for (const c in a)
                Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }
    function id(a) {
        const b = a.length;
        if (0 == b)
            return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++)
            c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var gd = Ac(()=>Pa(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], jd) || 1E-4 > Math.random())
      , fd = Ac(()=>-1 != xa().indexOf("MSIE"));
    const jd = a=>-1 != xa().indexOf(a);
    var kd = /^([0-9.]+)px$/
      , ld = /^(-?[0-9.]{1,30})$/;
    function md(a) {
        if (!ld.test(a))
            return null;
        a = Number(a);
        return isNaN(a) ? null : a
    }
    function L(a) {
        return (a = kd.exec(a)) ? +a[1] : null
    }
    var nd = (a,b)=>{
        for (let e = 0; 50 > e; ++e) {
            try {
                var c = !(!a.frames || !a.frames[b])
            } catch {
                c = !1
            }
            if (c)
                return a;
            a: {
                try {
                    const f = a.parent;
                    if (f && f != a) {
                        var d = f;
                        break a
                    }
                } catch {}
                d = null
            }
            if (!(a = d))
                break
        }
        return null
    }
      , od = Ac(()=>Uc() ? 2 : Vc() ? 1 : 0)
      , pd = (a,b)=>{
        K(b, (c,d)=>{
            a.style.setProperty(d, c, "important")
        }
        )
    }
    ;
    let qd = [];
    const rd = ()=>{
        const a = qd;
        qd = [];
        for (const b of a)
            try {
                b()
            } catch {}
    }
    ;
    var sd = ()=>{
        var a = Math.random;
        return Math.floor(a() * 2 ** 52)
    }
      , td = a=>{
        if ("number" !== typeof a.goog_pvsid)
            try {
                Object.defineProperty(a, "goog_pvsid", {
                    value: sd(),
                    configurable: !1
                })
            } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }
      , vd = a=>{
        var b = ud;
        "complete" === b.readyState || "interactive" === b.readyState ? (qd.push(a),
        1 == qd.length && (window.Promise ? Promise.resolve().then(rd) : window.setImmediate ? setImmediate(rd) : setTimeout(rd, 0))) : b.addEventListener("DOMContentLoaded", a)
    }
    ;
    function cd(a, b=document) {
        return b.createElement(String(a).toLowerCase())
    }
    ;function wd(a, b, c=null, d=!1, e=!1) {
        yd(a, b, c, d, e)
    }
    function yd(a, b, c, d, e=!1) {
        a.google_image_requests || (a.google_image_requests = []);
        const f = cd("IMG", a.document);
        if (c || d) {
            const g = h=>{
                c && c(h);
                if (d) {
                    h = a.google_image_requests;
                    const k = La(h, f);
                    0 <= k && Array.prototype.splice.call(h, k, 1)
                }
                Dc(f, "load", g);
                Dc(f, "error", g)
            }
            ;
            Cc(f, "load", g);
            Cc(f, "error", g)
        }
        e && (f.attributionSrc = "");
        f.src = b;
        a.google_image_requests.push(f)
    }
    var Ad = a=>{
        let b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=tcfe";
        K(a, (c,d)=>{
            if (c || 0 === c)
                b += `&${d}=${encodeURIComponent("" + c)}`
        }
        );
        zd(b)
    }
      , zd = a=>{
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : wd(b, a, void 0, !1, !1)
    }
    ;
    let Bd = null;
    var ud = document
      , M = window;
    let Cd = null;
    var Dd = (a,b=[])=>{
        let c = !1;
        n.google_logging_queue || (c = !0,
        n.google_logging_queue = []);
        n.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == Cd) {
                Cd = !1;
                try {
                    var d = ad(n);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (Cd = !0);
                    n.localStorage.getItem("google_logging") && (Cd = !0)
                } catch (e) {}
            }
            a = Cd
        }
        a && (d = n.document,
        a = new wc(xc,"https://pagead2.googlesyndication.com/pagead/js/logging_library.js"),
        a = Nc(a instanceof wc && a.constructor === wc && a.g === yc ? a.h : "type_error:Const"),
        bd(d, a))
    }
    ;
    function Ed(a=n) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b)
            try {
                b = a.parent.context || a.parent.AMP_CONTEXT_DATA
            } catch {}
        return b?.pageViewId && b?.canonicalUrl ? b : null
    }
    function Fd(a=Ed()) {
        return a ? $c(a.master) ? a.master : null : null
    }
    ;function Gd(a, ...b) {
        if (0 === b.length)
            return Nc(a[0]);
        let c = a[0];
        for (let d = 0; d < b.length; d++)
            c += encodeURIComponent(b[d]) + a[d + 1];
        return Nc(c)
    }
    ;var Hd = a=>{
        a = Fd(Ed(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + 1;
        return a.google_unique_id
    }
      , Id = a=>{
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }
      , Jd = ()=>{
        if (!M)
            return !1;
        try {
            return !(!M.navigator.standalone && !M.top.navigator.standalone)
        } catch (a) {
            return !1
        }
    }
      , Kd = a=>{
        if (!a)
            return "";
        a = a.toLowerCase();
        "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    }
    ;
    class Ld {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    }
    var Md = a=>!!(a.error && a.meta && a.id);
    const Nd = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var Od = class {
        constructor(a, b) {
            this.g = a;
            this.h = b
        }
    }
      , Pd = class {
        constructor(a, b, c) {
            this.url = a;
            this.m = b;
            this.Ka = !!c;
            this.depth = null
        }
    }
    ;
    function Qd(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }
    function Rd(a, b, c, d, e) {
        const f = [];
        K(a, function(g, h) {
            (g = Sd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }
    function Sd(a, b, c, d, e) {
        if (null == a)
            return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0,
            d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++)
                    f.push(Sd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a)
            return e = e || 0,
            2 > e ? encodeURIComponent(Rd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }
    function Td(a) {
        let b = 1;
        for (const c in a.h)
            b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    }
    function Ud(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b
          , d = Td(a) - b.length;
        if (0 > d)
            return "";
        a.g.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.g.length; f++) {
            const g = a.g[f]
              , h = a.h[g];
            for (let k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let m = Rd(h[k], a.i, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        c += m;
                        e = a.i;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class Vd {
        constructor() {
            this.i = "&";
            this.h = {};
            this.j = 0;
            this.g = []
        }
    }
    ;function Wd(a, b) {
        0 <= b && 1 >= b && (a.g = b)
    }
    function Xd(a, b, c, d=!1, e) {
        if ((d ? a.g : Math.random()) < (e || .01))
            try {
                let f;
                c instanceof Vd ? f = c : (f = new Vd,
                K(c, (h,k)=>{
                    var m = f;
                    const l = m.j++;
                    h = Qd(k, h);
                    m.g.push(l);
                    m.h[l] = h
                }
                ));
                const g = Ud(f, "/pagead/gen_204?id=" + b + "&");
                g && wd(n, g)
            } catch (f) {}
    }
    class Yd {
        constructor() {
            this.g = Math.random()
        }
    }
    ;let Zd = null;
    function $d() {
        if (null === Zd) {
            Zd = "";
            try {
                let a = "";
                try {
                    a = n.top.location.hash
                } catch (b) {
                    a = n.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Zd = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Zd
    }
    ;function ae() {
        const a = n.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }
    function be() {
        const a = n.performance;
        return a && a.now ? a.now() : null
    }
    ;class ce {
        constructor(a, b) {
            var c = be() || ae();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.taskId = this.slotId = void 0
        }
    }
    ;const de = n.performance
      , ee = !!(de && de.mark && de.measure && de.clearMarks)
      , fe = Ac(()=>{
        var a;
        if (a = ee)
            a = $d(),
            a = !!a.indexOf && 0 <= a.indexOf("1337");
        return a
    }
    );
    function ge(a) {
        a && de && fe() && (de.clearMarks(`goog_ ${a.label}_ ${a.uniqueId}_start`),
        de.clearMarks(`goog_ ${a.label}_ ${a.uniqueId}_end`))
    }
    function he(a) {
        a.g = !1;
        a.h != a.i.google_js_reporting_queue && (fe() && Ma(a.h, ge),
        a.h.length = 0)
    }
    class ie {
        constructor(a) {
            this.h = [];
            this.i = a || n;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [],
            this.h = a.google_js_reporting_queue,
            b = a.google_measure_js_timing);
            this.g = fe() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.g)
                return null;
            a = new ce(a,b);
            b = `goog_ ${a.label}_ ${a.uniqueId}_start`;
            de && fe() && de.mark(b);
            return a
        }
        end(a) {
            if (this.g && "number" === typeof a.value) {
                a.duration = (be() || ae()) - a.value;
                var b = `goog_ ${a.label}_ ${a.uniqueId}_end`;
                de && fe() && de.mark(b);
                !this.g || 2048 < this.h.length || this.h.push(a)
            }
        }
    }
    ;function je(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            var c = b;
            try {
                -1 == a.indexOf(c) && (a = c + "\n" + a);
                let d;
                for (; a != d; )
                    d = a,
                    a = a.replace(RegExp("((https?:/..*/)[^/:]*:\\d+(?:.|\n)*)\\2"), "$1");
                b = a.replace(RegExp("\n *", "g"), "\n")
            } catch (d) {
                b = c
            }
        }
        return b
    }
    class ke {
        constructor(a, b=null) {
            this.A = a;
            this.g = null;
            this.l = this.H;
            this.h = b;
            this.i = !1
        }
        Pa(a) {
            this.l = a
        }
        va(a) {
            this.g = a
        }
        j(a) {
            this.i = a
        }
        ea(a, b, c) {
            let d, e;
            try {
                this.h && this.h.g ? (e = this.h.start(a.toString(), 3),
                d = b(),
                this.h.end(e)) : d = b()
            } catch (f) {
                b = !0;
                try {
                    ge(e),
                    b = this.l(a, new Ld(f,{
                        message: je(f)
                    }), void 0, c)
                } catch (g) {
                    this.H(217, g)
                }
                if (b)
                    window.console?.error?.(f);
                else
                    throw f;
            }
            return d
        }
        na(a, b) {
            return (...c)=>this.ea(a, ()=>b.apply(void 0, c))
        }
        H(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const Ka = new Vd;
                var g = Ka;
                g.g.push(1);
                g.h[1] = Qd("context", a);
                Md(b) || (b = new Ld(b,{
                    message: je(b)
                }));
                if (b.msg) {
                    g = Ka;
                    var h = b.msg.substring(0, 512);
                    g.g.push(2);
                    g.h[2] = Qd("msg", h)
                }
                var k = b.meta || {};
                b = k;
                if (this.g)
                    try {
                        this.g(b)
                    } catch (Ya) {}
                if (d)
                    try {
                        d(b)
                    } catch (Ya) {}
                d = Ka;
                k = [k];
                d.g.push(3);
                d.h[3] = k;
                d = n;
                k = [];
                b = null;
                do {
                    var m = d;
                    if ($c(m)) {
                        var l = m.location.href;
                        b = m.document && m.document.referrer || null
                    } else
                        l = b,
                        b = null;
                    k.push(new Pd(l || "",m));
                    try {
                        d = m.parent
                    } catch (Ya) {
                        d = null
                    }
                } while (d && m != d);
                for (let Ya = 0, Nf = k.length - 1; Ya <= Nf; ++Ya)
                    k[Ya].depth = Nf - Ya;
                m = n;
                if (m.location && m.location.ancestorOrigins && m.location.ancestorOrigins.length == k.length - 1)
                    for (l = 1; l < k.length; ++l) {
                        var q = k[l];
                        q.url || (q.url = m.location.ancestorOrigins[l - 1] || "",
                        q.Ka = !0)
                    }
                var w = k;
                let qc = new Pd(n.location.href,n,!1);
                m = null;
                const xd = w.length - 1;
                for (q = xd; 0 <= q; --q) {
                    var v = w[q];
                    !m && Nd.test(v.url) && (m = v);
                    if (v.url && !v.Ka) {
                        qc = v;
                        break
                    }
                }
                v = null;
                const yj = w.length && w[xd].url;
                0 != qc.depth && yj && (v = w[xd]);
                f = new Od(qc,v);
                if (f.h) {
                    w = Ka;
                    var x = f.h.url || "";
                    w.g.push(4);
                    w.h[4] = Qd("top", x)
                }
                var z = {
                    url: f.g.url || ""
                };
                if (f.g.url) {
                    var Ca = f.g.url.match(Wc)
                      , V = Ca[1]
                      , Da = Ca[3]
                      , ta = Ca[4];
                    x = "";
                    V && (x += V + ":");
                    Da && (x += "//",
                    x += Da,
                    ta && (x += ":" + ta));
                    var Of = x
                } else
                    Of = "";
                V = Ka;
                z = [z, {
                    url: Of
                }];
                V.g.push(5);
                V.h[5] = z;
                Xd(this.A, e, Ka, this.i, c)
            } catch (Ka) {
                try {
                    Xd(this.A, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: je(Ka),
                        url: f && f.g.url
                    }, this.i, c)
                } catch (qc) {}
            }
            return !0
        }
        aa(a, b) {
            b.catch(c=>{
                c = c ? c : "unknown rejection";
                this.H(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            }
            )
        }
    }
    ;var le = a=>"string" === typeof a
      , me = a=>void 0 === a;
    var ne = class extends J {
    }
    ;
    ne.u = [2, 8];
    var oe = [3, 4, 5]
      , pe = [6, 7];
    function qe(a) {
        return null != a ? !a : a
    }
    function re(a, b) {
        let c = !1;
        for (let d = 0; d < a.length; d++) {
            const e = a[d]();
            if (e === b)
                return e;
            null == e && (c = !0)
        }
        if (!c)
            return !b
    }
    function se(a, b) {
        var c = C(a, ne, 2);
        if (!c.length)
            return te(a, b);
        a = I(a, 1);
        if (1 === a)
            return qe(se(c[0], b));
        c = Oa(c, d=>()=>se(d, b));
        switch (a) {
        case 2:
            return re(c, !1);
        case 3:
            return re(c, !0)
        }
    }
    function te(a, b) {
        const c = Pb(a, oe);
        a: {
            switch (c) {
            case 3:
                var d = I(a, Ob(a, oe, 3));
                break a;
            case 4:
                d = I(a, Ob(a, oe, 4));
                break a;
            case 5:
                d = I(a, Ob(a, oe, 5));
                break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b(...Jb(a, 8, yb))
            } catch (f) {
                return
            }
            b = I(a, 1);
            if (4 === b)
                return !!e;
            if (5 === b)
                return null != e;
            if (12 === b)
                a = H(a, Ob(a, pe, 7));
            else
                a: {
                    switch (c) {
                    case 4:
                        a = $b(a, Ob(a, pe, 6));
                        break a;
                    case 5:
                        a = H(a, Ob(a, pe, 7));
                        break a
                    }
                    a = void 0
                }
            if (null != a) {
                if (6 === b)
                    return e === a;
                if (9 === b)
                    return null != e && 0 === ra(String(e), a);
                if (null != e)
                    switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e > a;
                    case 12:
                        return le(a) && le(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === ra(String(e), a);
                    case 11:
                        return null != e && 1 === ra(String(e), a)
                    }
            }
        }
    }
    function ue(a, b) {
        return !a || !(!b || !se(a, b))
    }
    ;var ve = class extends J {
    }
    ;
    ve.u = [4];
    var we = class extends J {
        getValue() {
            return B(this, ve, 2)
        }
    }
    ;
    var xe = class extends J {
    }
      , ye = tc(xe);
    xe.u = [5];
    var ze = [1, 2, 3, 6, 7];
    var Ae = class extends J {
        constructor() {
            super()
        }
    }
    ;
    Ae.u = [2];
    function Be(a, b) {
        return u(a, 1, t(b))
    }
    var Ce = class extends J {
        constructor() {
            super()
        }
        getValue() {
            return I(this, 1)
        }
    }
    ;
    function De(a, b) {
        return A(a, 1, b, 0)
    }
    function Ee(a, b) {
        return A(a, 2, b, 0)
    }
    var Fe = class extends J {
        constructor() {
            super()
        }
        getWidth() {
            return Fb(this, 1) ?? 0
        }
        getHeight() {
            return Fb(this, 2) ?? 0
        }
    }
    ;
    function Ge(a, b) {
        return Vb(a, 1, b)
    }
    function He(a, b) {
        return Vb(a, 2, b)
    }
    function Ie(a, b) {
        Vb(a, 3, b)
    }
    function Je(a, b) {
        return A(a, 5, null == b ? b : ub(b), !1)
    }
    var Ke = class extends J {
        constructor() {
            super()
        }
        getContentUrl() {
            return H(this, 4)
        }
    }
    ;
    var Rb = class extends J {
    }
    ;
    var Le = class extends J {
    }
    ;
    var Me = class extends J {
        constructor() {
            super()
        }
        getContentUrl() {
            return H(this, 1)
        }
    }
    ;
    function Ne(a, b) {
        return Wb(a, 4, Oe, b)
    }
    var Pe = class extends J {
        constructor() {
            super()
        }
    }
      , Oe = [4, 5, 6, 8, 9, 10, 11];
    var Qe = class extends J {
        constructor() {
            super()
        }
    }
    ;
    function Re(a, b) {
        return A(a, 1, t(b), 0)
    }
    function Se(a, b) {
        return A(a, 2, t(b), 0)
    }
    var Te = class extends J {
        constructor() {
            super()
        }
    }
    ;
    var Ue = class extends J {
        constructor() {
            super()
        }
    }
      , Ve = [1, 2];
    function We(a, b) {
        return Vb(a, 1, b)
    }
    function Xe(a, b) {
        return Xb(a, 2, b)
    }
    function Ye(a, b) {
        return Kb(a, 4, b)
    }
    function Ze(a, b) {
        return Xb(a, 5, b)
    }
    function $e(a, b) {
        return A(a, 6, t(b), 0)
    }
    var af = class extends J {
        constructor() {
            super()
        }
    }
    ;
    af.u = [2, 4, 5];
    var bf = class extends J {
        constructor() {
            super()
        }
    }
    ;
    bf.u = [5];
    var cf = [1, 2, 3, 4];
    var df = class extends J {
        constructor() {
            super()
        }
    }
    ;
    df.u = [2, 3];
    function ef(a, b) {
        return Wb(a, 4, ff, b)
    }
    var gf = class extends J {
        constructor() {
            super()
        }
        getTagSessionCorrelator() {
            return Fb(this, 2) ?? 0
        }
    }
      , ff = [4, 5, 7, 8];
    function hf(a, ...b) {
        jf(a, ...b.map(c=>({
            Sa: 4,
            Na: c.toJSON()
        })))
    }
    function kf(a, ...b) {
        jf(a, ...b.map(c=>({
            Sa: 7,
            Na: c.toJSON()
        })))
    }
    ;function lf(a) {
        return JSON.stringify([a.map(b=>[{
            [b.Sa]: b.Na
        }])])
    }
    ;var mf = (a,b)=>{
        globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        }).catch(()=>{}
        )
    }
    ;
    function nf() {
        this.A = this.A;
        this.i = this.i
    }
    nf.prototype.A = !1;
    function of(a) {
        a.A || (a.A = !0,
        a.g())
    }
    function pf(a, b) {
        a.A ? b() : (a.i || (a.i = []),
        a.i.push(b))
    }
    nf.prototype.g = function() {
        if (this.i)
            for (; this.i.length; )
                this.i.shift()()
    }
    ;
    function qf(a, b, c, d) {
        Cc(b, c, d);
        pf(a, ()=>Dc(b, c, d))
    }
    function rf(a, b) {
        1 !== a.h && (a.h = 1,
        a.K && a.K(b))
    }
    function sf(a) {
        a.m.document.visibilityState ? qf(a, a.m.document, "visibilitychange", b=>{
            "hidden" === a.m.document.visibilityState && rf(a, b);
            "visible" === a.m.document.visibilityState && (a.h = 0)
        }
        ) : "onpagehide"in a.m ? (qf(a, a.m, "pagehide", b=>{
            rf(a, b)
        }
        ),
        qf(a, a.m, "pageshow", ()=>{
            a.h = 0
        }
        )) : qf(a, a.m, "beforeunload", b=>{
            rf(a, b)
        }
        )
    }
    function tf(a, b) {
        a.K || sf(a);
        a.K = b
    }
    var uf = class extends nf {
        constructor(a) {
            super();
            this.m = a;
            this.h = 0;
            this.K = null
        }
    }
    ;
    function jf(a, ...b) {
        a.A && 65536 <= lf(a.g.concat(b)).length && vf(a);
        a.g.push(...b);
        a.g.length >= a.l && vf(a);
        a.g.length && null === a.h && (a.h = setTimeout(()=>{
            vf(a)
        }
        , a.B))
    }
    function wf(a, b, c, d) {
        a.i || (a.i = new uf(b),
        tf(a.i, ()=>{
            for (const e of a.j)
                e();
            c()
        }
        ));
        d && 1 !== a.i.h && a.j.push(d)
    }
    function vf(a) {
        null !== a.h && (clearTimeout(a.h),
        a.h = null);
        if (a.g.length) {
            var b = lf(a.g);
            a.v("https://pagead2.googlesyndication.com/pagead/ping?e=1", b);
            a.g = []
        }
    }
    function xf(a, b, c) {
        wf(a, b, ()=>{
            vf(a)
        }
        , c)
    }
    var yf = class {
        constructor(a, b, c) {
            this.v = mf;
            this.B = a;
            this.l = b;
            this.A = c;
            this.j = [];
            this.g = [];
            this.h = null
        }
    }
      , zf = class extends yf {
        constructor(a=1E3, b=100, c=!1) {
            super(a, b, c && !0)
        }
    }
    ;
    function Af(a, b) {
        b = A(b, 1, Date.now(), 0);
        var c = td(window);
        b = A(b, 2, c, 0);
        return A(b, 6, a.l, 0)
    }
    function Bf(a, b, c, d, e, f) {
        if (a.i) {
            var g = Se(Re(new Te, b), c);
            b = $e(Xe(We(Ze(Ye(new af, d), e), g), a.g.slice()), f);
            b = ef(new gf, b);
            hf(a.h, Af(a, b));
            if (1 === f || 3 === f || 4 === f && !a.g.some(h=>I(h, 1) === I(g, 1) && I(h, 2) === c))
                a.g.push(g),
                100 < a.g.length && a.g.shift()
        }
    }
    function Cf(a, b, c, d) {
        if (a.i && a.j) {
            var e = new df;
            b = Xb(e, 2, b);
            c = Xb(b, 3, c);
            d && A(c, 1, d, 0);
            d = new gf;
            d = Wb(d, 7, ff, c);
            hf(a.h, Af(a, d))
        }
    }
    var Df = class {
        constructor(a, b, c, d=new zf(b)) {
            this.l = a;
            this.j = c;
            this.h = d;
            this.g = [];
            this.i = 0 < a && hd() < 1 / a
        }
    }
    ;
    var N = a=>{
        var b = "ta";
        if (a.ta && a.hasOwnProperty(b))
            return a.ta;
        b = new a;
        return a.ta = b
    }
    ;
    var Ef = class {
        constructor() {
            this.G = {
                [3]: {},
                [4]: {},
                [5]: {}
            }
        }
    }
    ;
    var Ff = /^true$/.test("false");
    function Gf(a, b) {
        switch (b) {
        case 1:
            return I(a, Ob(a, ze, 1));
        case 2:
            return I(a, Ob(a, ze, 2));
        case 3:
            return I(a, Ob(a, ze, 3));
        case 6:
            return I(a, Ob(a, ze, 6));
        default:
            return null
        }
    }
    function Hf(a, b) {
        if (!a)
            return null;
        switch (b) {
        case 1:
            return G(a, 1);
        case 7:
            return H(a, 3);
        case 2:
            return $b(a, 2);
        case 3:
            return H(a, 3);
        case 6:
            return Jb(a, 4, yb);
        default:
            return null
        }
    }
    const If = Ac(()=>{
        if (!Ff)
            return {};
        try {
            const a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a)
                return JSON.parse(a)
        } catch {}
        return {}
    }
    );
    function Jf(a, b, c, d=0) {
        N(Kf).i[d] = N(Kf).i[d]?.add(b) ?? (new Set).add(b);
        const e = If();
        if (null != e[b])
            return e[b];
        b = Lf(d)[b];
        if (!b)
            return c;
        b = ye(JSON.stringify(b));
        b = Mf(b);
        a = Hf(b, a);
        return null != a ? a : c
    }
    function Mf(a) {
        const b = N(Ef).G;
        if (b) {
            const c = Ra(C(a, we, 5), d=>ue(B(d, ne, 1), b));
            if (c)
                return c.getValue() ?? null
        }
        return B(a, ve, 4) ?? null
    }
    class Kf {
        constructor() {
            this.h = {};
            this.j = [];
            this.i = {};
            this.g = new Map
        }
    }
    function Pf(a, b=!1, c) {
        return !!Jf(1, a, b, c)
    }
    function Qf(a, b=0, c) {
        a = Number(Jf(2, a, b, c));
        return isNaN(a) ? b : a
    }
    function Rf(a, b="", c) {
        a = Jf(3, a, b, c);
        return "string" === typeof a ? a : b
    }
    function Sf(a, b=[], c) {
        a = Jf(6, a, b, c);
        return Array.isArray(a) ? a : b
    }
    function Lf(a) {
        return N(Kf).h[a] || (N(Kf).h[a] = {})
    }
    function Tf(a, b) {
        const c = Lf(b);
        K(a, (d,e)=>c[e] = d)
    }
    function Uf(a, b, c, d, e=!1) {
        const f = []
          , g = [];
        Ma(b, h=>{
            const k = Lf(h);
            Ma(a, m=>{
                var l = Pb(m, ze);
                const q = Gf(m, l);
                if (q) {
                    var w = N(Kf).g.get(h)?.get(q)?.slice(0) ?? [];
                    a: {
                        const v = new bf;
                        switch (l) {
                        case 1:
                            Mb(v, 1, cf, t(q));
                            break;
                        case 2:
                            Mb(v, 2, cf, t(q));
                            break;
                        case 3:
                            Mb(v, 3, cf, t(q));
                            break;
                        case 6:
                            Mb(v, 4, cf, t(q));
                            break;
                        default:
                            l = void 0;
                            break a
                        }
                        Kb(v, 5, w);
                        l = v
                    }
                    if (w = l)
                        w = !!N(Kf).i[h]?.has(q);
                    w && f.push(l);
                    if (w = l)
                        w = !!N(Kf).g.get(h)?.has(q);
                    w && g.push(l);
                    e || (l = N(Kf),
                    l.g.has(h) || l.g.set(h, new Map),
                    l.g.get(h).has(q) || l.g.get(h).set(q, []),
                    d && l.g.get(h).get(q).push(d));
                    k[q] = m.toJSON()
                }
            }
            )
        }
        );
        (f.length || g.length) && Cf(c, f, g, d ?? void 0)
    }
    function Vf(a, b) {
        const c = Lf(b);
        Ma(a, d=>{
            var e = ye(JSON.stringify(d));
            const f = Pb(e, ze);
            (e = Gf(e, f)) && (c[e] || (c[e] = d))
        }
        )
    }
    function Wf() {
        return Oa(Object.keys(N(Kf).h), a=>Number(a))
    }
    function Xf(a) {
        Sa(N(Kf).j, a) || Tf(Lf(4), a)
    }
    ;function O(a, b, c) {
        c.hasOwnProperty(a) || Object.defineProperty(c, String(a), {
            value: b
        })
    }
    function Yf(a, b, c) {
        return b[a] || c
    }
    function Zf(a) {
        O(5, Pf, a);
        O(6, Qf, a);
        O(7, Rf, a);
        O(8, Sf, a);
        O(13, Vf, a);
        O(15, Xf, a)
    }
    function $f(a) {
        O(4, b=>{
            N(Ef).G = b
        }
        , a);
        O(9, (b,c)=>{
            var d = N(Ef);
            null == d.G[3][b] && (d.G[3][b] = c)
        }
        , a);
        O(10, (b,c)=>{
            var d = N(Ef);
            null == d.G[4][b] && (d.G[4][b] = c)
        }
        , a);
        O(11, (b,c)=>{
            var d = N(Ef);
            null == d.G[5][b] && (d.G[5][b] = c)
        }
        , a);
        O(14, b=>{
            var c = N(Ef);
            for (const d of [3, 4, 5])
                Object.assign(c.G[d], b[d])
        }
        , a)
    }
    function ag(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    }
    ;function bg(a, b, c) {
        a.i = Yf(1, b, ()=>{}
        );
        a.j = (d,e)=>Yf(2, b, ()=>[])(d, c, e);
        a.g = ()=>Yf(3, b, ()=>[])(c);
        a.h = d=>{
            Yf(16, b, ()=>{}
            )(d, c)
        }
    }
    class cg {
        i() {}
        h() {}
        j() {
            return []
        }
        g() {
            return []
        }
    }
    ;let dg, eg;
    const fg = new ie(window);
    (a=>{
        dg = a ?? new Yd;
        "number" !== typeof window.google_srt && (window.google_srt = Math.random());
        Wd(dg, window.google_srt);
        eg = new ke(dg,fg);
        eg.va(()=>{}
        );
        eg.j(!0);
        "complete" == window.document.readyState ? window.google_measure_js_timing || he(fg) : fg.g && Cc(window, "load", ()=>{
            window.google_measure_js_timing || he(fg)
        }
        )
    }
    )();
    var gg = {
        Hb: 0,
        Gb: 1,
        Db: 2,
        yb: 3,
        Eb: 4,
        zb: 5,
        Fb: 6,
        Bb: 7,
        Cb: 8,
        xb: 9,
        Ab: 10
    };
    var hg = {
        Jb: 0,
        Kb: 1,
        Ib: 2
    };
    function ig(a) {
        if (0 != a.g)
            throw Error("Already resolved/rejected.");
    }
    var lg = class {
        constructor() {
            this.h = new jg(this);
            this.g = 0
        }
        resolve(a) {
            ig(this);
            this.g = 1;
            this.j = a;
            kg(this.h)
        }
    }
    ;
    function kg(a) {
        switch (a.g.g) {
        case 0:
            break;
        case 1:
            a.h && a.h(a.g.j);
            break;
        case 2:
            a.i && a.i(a.g.i);
            break;
        default:
            throw Error("Unhandled deferred state.");
        }
    }
    var jg = class {
        constructor(a) {
            this.g = a
        }
        then(a, b) {
            if (this.h)
                throw Error("Then functions already set.");
            this.h = a;
            this.i = b;
            kg(this)
        }
    }
    ;
    const mg = class {
        constructor(a) {
            this.g = a.slice(0)
        }
        forEach(a) {
            this.g.forEach((b,c)=>void a(b, c, this))
        }
        filter(a) {
            return new mg(Na(this.g, a))
        }
        apply(a) {
            return new mg(a(this.g.slice(0)))
        }
        get(a) {
            return this.g[a]
        }
        add(a) {
            const b = this.g.slice(0);
            b.push(a);
            return new mg(b)
        }
    }
    ;
    function ng(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++)
            c.push(a[e]);
        c.forEach(b, void 0)
    }
    ;const pg = class {
        constructor() {
            this.g = {};
            this.h = {}
        }
        set(a, b) {
            const c = og(a);
            this.g[c] = b;
            this.h[c] = a
        }
        get(a, b) {
            a = og(a);
            return void 0 !== this.g[a] ? this.g[a] : b
        }
        clear() {
            this.g = {};
            this.h = {}
        }
    }
    ;
    function og(a) {
        return a instanceof Object ? String(fa(a)) : a + ""
    }
    ;function qg(a) {
        return new rg({
            value: a
        },null)
    }
    function sg(a) {
        return new rg(null,a)
    }
    function tg(a) {
        try {
            return qg(a())
        } catch (b) {
            return sg(b)
        }
    }
    function ug(a) {
        return null != a.g ? a.getValue() : null
    }
    function vg(a, b) {
        null != a.g && b(a.getValue());
        return a
    }
    function wg(a, b) {
        null != a.g || b(a.h);
        return a
    }
    class rg {
        constructor(a, b) {
            this.g = a;
            this.h = b
        }
        getValue() {
            return this.g.value
        }
        map(a) {
            return null != this.g ? (a = a(this.getValue()),
            a instanceof rg ? a : qg(a)) : this
        }
    }
    ;const xg = class {
        constructor(a) {
            this.g = new pg;
            if (a)
                for (var b = 0; b < a.length; ++b)
                    this.add(a[b])
        }
        add(a) {
            this.g.set(a, !0)
        }
        contains(a) {
            return void 0 !== this.g.g[og(a)]
        }
    }
    ;
    class yg {
        constructor() {
            this.g = new pg
        }
        set(a, b) {
            let c = this.g.get(a);
            c || (c = new xg,
            this.g.set(a, c));
            c.add(b)
        }
    }
    ;var P = class extends J {
        getId() {
            return E(this, 3)
        }
    }
    ;
    P.u = [4];
    class zg {
        constructor({Ua: a, Lb: b, Tb: c, ob: d}) {
            this.g = b;
            this.j = new mg(a || []);
            this.i = d;
            this.h = c
        }
    }
    ;const Bg = a=>{
        const b = []
          , c = a.j;
        c && c.g.length && b.push({
            X: "a",
            da: Ag(c)
        });
        null != a.g && b.push({
            X: "as",
            da: a.g
        });
        null != a.h && b.push({
            X: "i",
            da: String(a.h)
        });
        null != a.i && b.push({
            X: "rp",
            da: String(a.i)
        });
        b.sort(function(d, e) {
            return d.X.localeCompare(e.X)
        });
        b.unshift({
            X: "t",
            da: "aa"
        });
        return b
    }
      , Ag = a=>{
        a = a.g.slice(0).map(Cg);
        a = JSON.stringify(a);
        return id(a)
    }
      , Cg = a=>{
        const b = {};
        null != E(a, 7) && (b.q = E(a, 7));
        null != D(a, 2) && (b.o = D(a, 2));
        null != D(a, 5) && (b.p = D(a, 5));
        return b
    }
    ;
    var Dg = class extends J {
        setLocation(a) {
            return u(this, 1, t(a))
        }
    }
    ;
    function Eg(a) {
        const b = [].slice.call(arguments).filter(zc(e=>null === e));
        if (!b.length)
            return null;
        let c = []
          , d = {};
        b.forEach(e=>{
            c = c.concat(e.Ja || []);
            d = Object.assign(d, e.Oa)
        }
        );
        return new Fg(c,d)
    }
    function Gg(a) {
        switch (a) {
        case 1:
            return new Fg(null,{
                google_ad_semantic_area: "mc"
            });
        case 2:
            return new Fg(null,{
                google_ad_semantic_area: "h"
            });
        case 3:
            return new Fg(null,{
                google_ad_semantic_area: "f"
            });
        case 4:
            return new Fg(null,{
                google_ad_semantic_area: "s"
            });
        default:
            return null
        }
    }
    function Hg(a) {
        if (null == a)
            var b = null;
        else {
            var c = Bg(a);
            a = [];
            for (b of c)
                c = String(b.da),
                a.push(b.X + "." + (20 >= c.length ? c : c.slice(0, 19) + "_"));
            b = new Fg(null,{
                google_placement_id: a.join("~")
            })
        }
        return b
    }
    class Fg {
        constructor(a, b) {
            this.Ja = a;
            this.Oa = b
        }
    }
    ;const Ig = new Fg(["google-auto-placed"],{
        google_reactive_ad_format: 40,
        google_tag_origin: "qs"
    });
    var Jg = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5,
        full_page: 6,
        side_rails: 7
    };
    function Kg(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set),
        null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map),
        null == a.google_reactive_ads_global_state.sideRailPlasParam && (a.google_reactive_ads_global_state.sideRailPlasParam = new Map)) : a.google_reactive_ads_global_state = new Lg;
        return a.google_reactive_ads_global_state
    }
    class Lg {
        constructor() {
            this.wasPlaTagProcessed = !1;
            this.wasReactiveAdConfigReceived = {};
            this.adCount = {};
            this.wasReactiveAdVisible = {};
            this.stateForType = {};
            this.reactiveTypeEnabledInAsfe = {};
            this.wasReactiveTagRequestSent = !1;
            this.reactiveTypeDisabledByPublisher = {};
            this.tagSpecificState = {};
            this.messageValidationEnabled = !1;
            this.floatingAdsStacking = new Mg;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map;
            this.sideRailPlasParam = new Map
        }
    }
    var Mg = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    }
    ;
    var Q = a=>{
        a = a.document;
        let b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }
    ;
    var Ng = a=>{
        a = a.getBoundingClientRect();
        return 0 < a.width && 0 < a.height
    }
      , Og = a=>{
        let b = 0;
        a.forEach(c=>b = Math.max(b, c.getBoundingClientRect().width));
        return c=>c.getBoundingClientRect().width > .5 * b
    }
      , Pg = a=>{
        const b = Q(a).clientHeight || 0;
        return c=>c.getBoundingClientRect().height >= .75 * b
    }
      , Qg = (a,b)=>a.getBoundingClientRect().top - b.getBoundingClientRect().top;
    var Rg = class extends J {
    }
    ;
    var Sg = class extends J {
        constructor() {
            super()
        }
    }
    ;
    var Tg = class extends J {
        constructor() {
            super()
        }
    }
    ;
    Tg.u = [1];
    var Ug = class extends J {
        g() {
            return G(this, 2)
        }
    }
    ;
    var Vg = class extends J {
    }
    ;
    var Wg = class extends J {
    }
    ;
    var Xg = class extends J {
        g() {
            return C(this, Wg, 1)
        }
    }
    ;
    Xg.u = [1];
    var Yg = class extends J {
    }
    ;
    var Zg = class extends J {
    }
    ;
    var $g = class extends J {
    }
    ;
    $g.u = [6, 7, 9, 10, 11];
    function ah(a) {
        var b = [];
        ng(a.getElementsByTagName("p"), function(c) {
            100 <= bh(c) && b.push(c)
        });
        return b
    }
    function bh(a) {
        if (3 == a.nodeType)
            return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName)
            return 0;
        var b = 0;
        ng(a.childNodes, function(c) {
            b += bh(c)
        });
        return b
    }
    function ch(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }
    function dh(a, b) {
        if (null == a.g)
            return b;
        switch (a.g) {
        case 1:
            return b.slice(1);
        case 2:
            return b.slice(0, b.length - 1);
        case 3:
            return b.slice(1, b.length - 1);
        case 0:
            return b;
        default:
            throw Error("Unknown ignore mode: " + a.g);
        }
    }
    const eh = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.h = b;
            this.i = c;
            this.g = d
        }
        query(a) {
            var b = [];
            try {
                b = a.querySelectorAll(this.j)
            } catch (f) {}
            if (!b.length)
                return [];
            a = Ta(b);
            a = dh(this, a);
            "number" === typeof this.h && (b = this.h,
            0 > b && (b += a.length),
            a = 0 <= b && b < a.length ? [a[b]] : []);
            if ("number" === typeof this.i) {
                b = [];
                for (var c = 0; c < a.length; c++) {
                    var d = ah(a[c])
                      , e = this.i;
                    0 > e && (e += d.length);
                    0 <= e && e < d.length && b.push(d[e])
                }
                a = b
            }
            return a
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.j,
                occurrenceIndex: this.h,
                paragraphIndex: this.i,
                ignoreMode: this.g
            })
        }
    }
    ;
    function fh(a) {
        if (1 != a.nodeType)
            var b = !1;
        else if (b = "INS" == a.tagName)
            a: {
                b = ["adsbygoogle-placeholder"];
                a = a.className ? a.className.split(/\s+/) : [];
                for (var c = {}, d = 0; d < a.length; ++d)
                    c[a[d]] = !0;
                for (d = 0; d < b.length; ++d)
                    if (!c[b[d]]) {
                        b = !1;
                        break a
                    }
                b = !0
            }
        return b
    }
    ;var R = class {
        constructor(a, b=!1) {
            this.g = a;
            this.defaultValue = b
        }
    }
      , gh = class {
        constructor(a, b=0) {
            this.g = a;
            this.defaultValue = b
        }
    }
    ;
    var hh = new R(1082,!0)
      , ih = new R(1271)
      , jh = new gh(1130,100)
      , kh = new class {
        constructor(a, b="") {
            this.g = a;
            this.defaultValue = b
        }
    }
    (14)
      , lh = new R(1247,!0)
      , mh = new R(1272)
      , nh = new R(316)
      , oh = new R(1207,!0)
      , ph = new R(313)
      , qh = new R(369)
      , rh = new R(1230)
      , sh = new R(1229)
      , th = new R(1231)
      , uh = new R(1171,!0)
      , vh = new R(217)
      , wh = new R(534095582)
      , xh = new R(1120)
      , yh = new R(522099048)
      , zh = new R(529362570)
      , Ah = new R(506914611)
      , Bh = new R(501545959,!0)
      , Ch = new R(542187945)
      , Dh = new gh(1079,5)
      , Eh = new class {
        constructor(a, b=[]) {
            this.g = a;
            this.defaultValue = b
        }
    }
    (1934,["A7CQXglZzTrThjGTBEn1rWTxHOEtkWivwzgea+NjyardrwlieSjVuyG44PkYgIPGs8Q9svD8sF3Yedn0BBBjXAkAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A3vKT9yxRPjmXN3DpIiz58f5JykcWHjUo/W7hvmtjgh9jPpQgem9VbADiNovG8NkO6mRmk70Kex8/KUqAYWVWAEAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "A4A26Ymj79UVY7C7JGUS4BG1s7MdcDokAQf/RP0paks+RoTYbXHxceT/5L4iKcsleFCngi75YfNRGW2+SpVv1ggAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==", "As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==", "AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ=="])
      , Fh = new R(203)
      , Gh = new R(84);
    var Hh = class {
        constructor() {
            const a = {};
            this.h = (b,c)=>null != a[b] ? a[b] : c;
            this.g = (b,c)=>null != a[b] ? a[b] : c;
            this.i = (b,c)=>null != a[b] ? a[b] : c;
            this.j = (b,c)=>null != a[b] ? a[b] : c;
            this.l = ()=>{}
        }
    }
    ;
    function S(a) {
        return N(Hh).h(a.g, a.defaultValue)
    }
    function Ih() {
        return N(Hh).i(kh.g, kh.defaultValue)
    }
    ;function Jh(a, b, c) {
        switch (c) {
        case 0:
            b.parentNode && b.parentNode.insertBefore(a, b);
            break;
        case 3:
            if (c = b.parentNode) {
                var d = b.nextSibling;
                if (d && d.parentNode != c)
                    for (; d && 8 == d.nodeType; )
                        d = d.nextSibling;
                c.insertBefore(a, d)
            }
            break;
        case 1:
            b.insertBefore(a, b.firstChild);
            break;
        case 2:
            b.appendChild(a)
        }
        fh(b) && (b.setAttribute("data-init-display", b.style.display),
        b.style.display = "block")
    }
    ;function Kh(a, b) {
        const c = e=>{
            e = Lh(e);
            return null == e ? !1 : 0 < e
        }
          , d = e=>{
            e = Lh(e);
            return null == e ? !1 : 0 > e
        }
        ;
        switch (b) {
        case 0:
            return {
                init: Mh(a.previousSibling, c),
                ia: e=>Mh(e.previousSibling, c),
                ma: 0
            };
        case 2:
            return {
                init: Mh(a.lastChild, c),
                ia: e=>Mh(e.previousSibling, c),
                ma: 0
            };
        case 3:
            return {
                init: Mh(a.nextSibling, d),
                ia: e=>Mh(e.nextSibling, d),
                ma: 3
            };
        case 1:
            return {
                init: Mh(a.firstChild, d),
                ia: e=>Mh(e.nextSibling, d),
                ma: 3
            }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }
    function Lh(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }
    function Mh(a, b) {
        return a && b(a) ? a : null
    }
    ;var Nh = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };
    var Oh = a=>{
        if (a == a.top)
            return 0;
        for (; a && a != a.top && $c(a); a = a.parent) {
            if (a.sf_)
                return 2;
            if (a.$sf)
                return 3;
            if (a.inGptIF)
                return 4;
            if (a.inDapIF)
                return 5
        }
        return 1
    }
    ;
    var Ph = (a,b)=>{
        do {
            const c = dd(a, b);
            if (c && "fixed" == c.position)
                return !1
        } while (a = a.parentElement);
        return !0
    }
    ;
    function Qh(a, b) {
        var c = ["width", "height"];
        for (let e = 0; e < c.length; e++) {
            const f = "google_ad_" + c[e];
            if (!b.hasOwnProperty(f)) {
                var d = L(a[c[e]]);
                d = null === d ? null : Math.round(d);
                null != d && (b[f] = d)
            }
        }
    }
    var Rh = (a,b)=>!((ld.test(b.google_ad_width) || kd.test(a.style.width)) && (ld.test(b.google_ad_height) || kd.test(a.style.height)))
      , Th = (a,b)=>(a = Sh(a, b)) ? a.y : 0
      , Sh = (a,b)=>{
        try {
            const c = b.document.documentElement.getBoundingClientRect()
              , d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (c) {
            return null
        }
    }
      , Uh = a=>{
        let b = 0;
        for (let c in Nh)
            -1 != a.indexOf(c) && (b |= Nh[c]);
        return b
    }
      , Vh = (a,b,c,d,e)=>{
        if (a !== a.top)
            return ad(a) ? 3 : 16;
        if (!(488 > Q(a).clientWidth))
            return 4;
        if (!(a.innerHeight >= a.innerWidth))
            return 5;
        const f = Q(a).clientWidth;
        if (!f || (f - c) / f > d)
            a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive)
                a: {
                    c = b.parentElement;
                    for (b = Q(a).clientWidth; c; c = c.parentElement)
                        if ((d = dd(c, a)) && (e = L(d.width)) && !(e >= b) && "visible" != d.overflow) {
                            c = !0;
                            break a
                        }
                    c = !1
                }
            a = c ? 7 : !0
        }
        return a
    }
      , Wh = (a,b,c,d)=>{
        const e = Vh(b, c, a, .3, d);
        !0 !== e ? a = e : "true" == d.google_full_width_responsive || Ph(c, b) ? (b = Q(b).clientWidth,
        a = b - a,
        a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }
      , Xh = (a,b,c)=>{
        a = a.style;
        "rtl" == b ? a.marginRight = c : a.marginLeft = c
    }
    ;
    const Yh = (a,b)=>{
        if (3 == b.nodeType)
            return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName))
                return !1;
            let c;
            try {
                c = dd(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }
      , Zh = (a,b,c)=>{
        a = Sh(b, a);
        return "rtl" == c ? -a.x : a.x
    }
    ;
    var $h = (a,b)=>{
        var c;
        c = (c = b.parentElement) ? (c = dd(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            Xh(b, c, "0px");
            b.style.width = Q(a).clientWidth + "px";
            if (0 !== Zh(a, b, c)) {
                Xh(b, c, "0px");
                var d = Zh(a, b, c);
                Xh(b, c, -1 * d + "px");
                a = Zh(a, b, c);
                0 !== a && a !== d && Xh(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    }
    ;
    var ai = class {
        constructor(a, b) {
            this.L = a;
            this.i = b
        }
        height() {
            return this.i
        }
        g(a) {
            return 300 < a && 300 < this.i ? this.L : Math.min(1200, Math.round(a))
        }
        h() {}
    }
    ;
    var bi = (a,b,c,d=e=>e)=>{
        let e;
        return a.style && a.style[c] && d(a.style[c]) || (e = dd(a, b)) && e[c] && d(e[c]) || null
    }
      , ci = a=>b=>b.L <= a
      , fi = (a,b,c,d)=>{
        const e = a && di(c, b)
          , f = ei(b, d);
        return g=>!(e && g.height() >= f)
    }
      , gi = a=>b=>b.height() <= a
      , di = (a,b)=>Th(a, b) < Q(b).clientHeight - 100
      , hi = (a,b)=>{
        var c = bi(b, a, "height", L);
        if (c)
            return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = bi(b, a, "height", L);
        b.style.height = d;
        if (c)
            return c;
        c = Infinity;
        do
            (d = b.style && L(b.style.height)) && (c = Math.min(c, d)),
            (d = bi(b, a, "maxHeight", L)) && (c = Math.min(c, d));
        while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }
    ;
    const ei = (a,b)=>{
        const c = 0 == Id(a);
        return b && c ? Math.max(250, 2 * Q(a).clientHeight / 3) : 250
    }
    ;
    var ii = {
        google_ad_channel: !0,
        google_ad_client: !0,
        google_ad_host: !0,
        google_ad_host_channel: !0,
        google_adtest: !0,
        google_tag_for_child_directed_treatment: !0,
        google_tag_for_under_age_of_consent: !0,
        google_tag_partner: !0,
        google_restrict_data_processing: !0,
        google_page_url: !0,
        google_debug_params: !0,
        google_shadow_mode: !0,
        google_adbreak_test: !0,
        google_ad_frequency_hint: !0,
        google_admob_interstitial_slot: !0,
        google_admob_rewarded_slot: !0,
        google_admob_ads_only: !0,
        google_max_ad_content_rating: !0,
        google_traffic_source: !0
    };
    const ji = RegExp("(^| )adsbygoogle($| )");
    function ki(a, b) {
        for (let c = 0; c < b.length; c++) {
            const d = b[c]
              , e = Rc(d.Vb);
            a[e] = d.value
        }
    }
    ;class li {
        constructor() {
            var a = Gd`https://pagead2.googlesyndication.com/pagead/js/err_rep.js`;
            this.g = null;
            this.i = !1;
            this.l = Math.random();
            this.h = this.H;
            this.A = a
        }
        va(a) {
            this.g = a
        }
        j(a) {
            this.i = a
        }
        Pa(a) {
            this.h = a
        }
        H(a, b, c=.01, d, e="jserror") {
            if ((this.i ? this.l : Math.random()) > c)
                return !1;
            Md(b) || (b = new Ld(b,{
                context: a,
                id: e
            }));
            if (d || this.g)
                b.meta = {},
                this.g && this.g(b.meta),
                d && d(b.meta);
            n.google_js_errors = n.google_js_errors || [];
            n.google_js_errors.push(b);
            n.error_rep_loaded || (bd(n.document, this.A),
            n.error_rep_loaded = !0);
            return !1
        }
        ea(a, b, c) {
            try {
                return b()
            } catch (d) {
                if (!this.h(a, d, .01, c, "jserror"))
                    throw d;
            }
        }
        na(a, b) {
            return (...c)=>this.ea(a, ()=>b.apply(void 0, c))
        }
        aa(a, b) {
            b.catch(c=>{
                c = c ? c : "unknown rejection";
                this.H(a, c instanceof Error ? c : Error(c), void 0, this.g || void 0)
            }
            )
        }
    }
    ;const mi = (a,b)=>{
        b = b.google_js_reporting_queue = b.google_js_reporting_queue || [];
        2048 > b.length && b.push(a)
    }
    ;
    var ni = (a,b,c,d,e=!1)=>{
        const f = d || window
          , g = "undefined" !== typeof queueMicrotask;
        return function() {
            e && g && queueMicrotask(()=>{
                f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1;
                f.google_rum_task_id_counter += 1
            }
            );
            const h = be();
            let k, m = 3;
            try {
                k = b.apply(this, arguments)
            } catch (l) {
                m = 13;
                if (!c)
                    throw l;
                c(a, l)
            } finally {
                f.google_measure_js_timing && h && mi({
                    label: a.toString(),
                    value: h,
                    duration: (be() || 0) - h,
                    type: m,
                    ...(e && g && {
                        taskId: f.google_rum_task_id_counter = f.google_rum_task_id_counter || 1
                    })
                }, f)
            }
            return k
        }
    }
      , oi = (a,b)=>ni(a, b, (c,d)=>{
        (new li).H(c, d)
    }
    , void 0, !1);
    function pi(a, b, c) {
        return ni(a, b, void 0, c, !0).apply()
    }
    function qi(a) {
        if (!a)
            return null;
        var b = E(a, 7);
        if (E(a, 1) || a.getId() || 0 < Jb(a, 4, yb).length) {
            b = Jb(a, 4, yb);
            var c = E(a, 3)
              , d = E(a, 1)
              , e = "";
            d && (e += d);
            c && (e += "#" + ch(c));
            if (b)
                for (c = 0; c < b.length; c++)
                    e += "." + ch(b[c]);
            a = (b = e) ? new eh(b,D(a, 2),D(a, 5),ri(F(a, 6))) : null
        } else
            a = b ? new eh(b,D(a, 2),D(a, 5),ri(F(a, 6))) : null;
        return a
    }
    var si = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };
    function ri(a) {
        return null == a ? a : si[a]
    }
    var ti = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };
    function ui(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }
    function vi(a) {
        a = ui(a);
        return a.optimization = a.optimization || {}
    }
    ;var wi = tc(class extends J {
    }
    );
    var xi = a=>{
        switch (F(a, 8)) {
        case 1:
        case 2:
            if (null == a)
                var b = null;
            else
                b = B(a, P, 1),
                null == b ? b = null : (a = F(a, 2),
                b = null == a ? null : new zg({
                    Ua: [b],
                    ob: a
                }));
            return null != b ? qg(b) : sg(Error("Missing dimension when creating placement id"));
        case 3:
            return sg(Error("Missing dimension when creating placement id"));
        default:
            return sg(Error("Invalid type: " + F(a, 8)))
        }
    }
    ;
    var yi = class extends J {
    }
    ;
    var zi = class extends J {
    }
    ;
    var Ai = class extends J {
        g() {
            return Ib(this, 23)
        }
    }
    ;
    var Bi = class extends J {
    }
    ;
    var Ci = class extends J {
    }
    ;
    var Di = class extends J {
    }
    ;
    var Ei = class extends J {
    }
    ;
    var Fi = class extends J {
    }
    ;
    var Gi = class extends J {
        getName() {
            return E(this, 4)
        }
    }
      , Hi = [1, 2, 3];
    var Ii = class extends J {
    }
    ;
    Ii.u = [2, 5, 6, 11];
    var Ji = class extends J {
    }
    ;
    var Li = class extends J {
        g() {
            return ac(this, Ji, 2, Ki)
        }
    }
      , Ki = [1, 2];
    var Mi = class extends J {
        g() {
            return B(this, Li, 3)
        }
    }
    ;
    Mi.u = [1, 4];
    var Ni = class extends J {
    }
      , Oi = tc(Ni);
    Ni.u = [1, 2, 5, 7];
    var Pi = (a,b)=>{
        const c = [];
        let d = a;
        for (a = ()=>{
            c.push({
                anchor: d.anchor,
                position: d.position
            });
            return d.anchor == b.anchor && d.position == b.position
        }
        ; d; ) {
            switch (d.position) {
            case 1:
                if (a())
                    return c;
                d.position = 2;
            case 2:
                if (a())
                    return c;
                if (d.anchor.firstChild) {
                    d = {
                        anchor: d.anchor.firstChild,
                        position: 1
                    };
                    continue
                } else
                    d.position = 3;
            case 3:
                if (a())
                    return c;
                d.position = 4;
            case 4:
                if (a())
                    return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body; ) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a())
                    return c;
                d.position = 4;
                if (a())
                    return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    }
    ;
    function Qi(a, b) {
        const c = new yg
          , d = new xg;
        b.forEach(e=>{
            if (ac(e, Ei, 1, Hi)) {
                e = ac(e, Ei, 1, Hi);
                if (B(e, Yg, 1) && B(B(e, Yg, 1), P, 1) && B(e, Yg, 2) && B(B(e, Yg, 2), P, 1)) {
                    const g = Ri(a, B(B(e, Yg, 1), P, 1))
                      , h = Ri(a, B(B(e, Yg, 2), P, 1));
                    if (g && h)
                        for (var f of Pi({
                            anchor: g,
                            position: F(B(e, Yg, 1), 2)
                        }, {
                            anchor: h,
                            position: F(B(e, Yg, 2), 2)
                        }))
                            c.set(fa(f.anchor), f.position)
                }
                B(e, Yg, 3) && B(B(e, Yg, 3), P, 1) && (f = Ri(a, B(B(e, Yg, 3), P, 1))) && c.set(fa(f), F(B(e, Yg, 3), 2))
            } else
                ac(e, Fi, 2, Hi) ? Si(a, ac(e, Fi, 2, Hi), c) : ac(e, Di, 3, Hi) && Ti(a, ac(e, Di, 3, Hi), d)
        }
        );
        return new Ui(c,d)
    }
    class Ui {
        constructor(a, b) {
            this.h = a;
            this.g = b
        }
    }
    const Si = (a,b,c)=>{
        B(b, Yg, 2) ? (b = B(b, Yg, 2),
        (a = Ri(a, B(b, P, 1))) && c.set(fa(a), F(b, 2))) : B(b, P, 1) && (a = Vi(a, B(b, P, 1))) && a.forEach(d=>{
            d = fa(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        }
        )
    }
      , Ti = (a,b,c)=>{
        B(b, P, 1) && (a = Vi(a, B(b, P, 1))) && a.forEach(d=>{
            c.add(fa(d))
        }
        )
    }
      , Ri = (a,b)=>(a = Vi(a, b)) && 0 < a.length ? a[0] : null
      , Vi = (a,b)=>(b = qi(b)) ? b.query(a) : null;
    class T extends Error {
        constructor(a="") {
            super();
            this.name = "TagError";
            this.message = a ? "adsbygoogle.push() error: " + a : "";
            Error.captureStackTrace ? Error.captureStackTrace(this, T) : this.stack = Error().stack || ""
        }
    }
    ;let Wi, U;
    const Xi = new ie(n);
    var Yi = a=>{
        null != a && (n.google_measure_js_timing = a);
        n.google_measure_js_timing || he(Xi)
    }
    ;
    (a=>{
        Wi = a || new Yd;
        "number" !== typeof n.google_srt && (n.google_srt = Math.random());
        Wd(Wi, n.google_srt);
        U = new ke(Wi,Xi);
        U.j(!0);
        "complete" == n.document.readyState ? Yi() : Xi.g && Cc(n, "load", ()=>{
            Yi()
        }
        )
    }
    )();
    var Zi = (a,b,c)=>U.ea(a, b, c)
      , $i = (a,b,c)=>{
        const d = N(cg).g();
        !b.eid && d.length && (b.eid = d.toString());
        Xd(Wi, a, b, !0, c)
    }
      , aj = (a,b)=>{
        U.aa(a, b)
    }
      , bj = (a,b,c,d)=>{
        let e;
        Md(b) ? e = b.msg || je(b.error) : e = je(b);
        return 0 == e.indexOf("TagError") ? (c = b instanceof Ld ? b.error : b,
        c.pbr || (c.pbr = !0,
        U.H(a, b, .1, d, "puberror")),
        !1) : U.H(a, b, c, d)
    }
    ;
    var cj = class {
        constructor() {
            this.g = sd();
            this.h = 0
        }
    }
    ;
    function dj(a, b, c) {
        switch (c) {
        case 2:
        case 3:
            break;
        case 1:
        case 4:
            b = b.parentElement;
            break;
        default:
            throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b; ) {
            if (ej(b))
                return !0;
            if (a.g.has(b))
                break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d=>a.g.add(d));
        return !1
    }
    function fj(a) {
        a = gj(a);
        return a.has("all") || a.has("after")
    }
    function hj(a) {
        a = gj(a);
        return a.has("all") || a.has("before")
    }
    function gj(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }
    function ej(a) {
        const b = gj(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var ij = class {
        constructor() {
            this.g = new Set;
            this.h = new cj
        }
    }
    ;
    function jj(a, b) {
        if (!a)
            return !1;
        a = dd(a, b);
        if (!a)
            return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }
    function kj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType; )
            a = a.previousSibling;
        return a ? a : null
    }
    function lj(a) {
        return !!a.nextSibling || !!a.parentNode && lj(a.parentNode)
    }
    ;function mj(a, b) {
        if (!a)
            return !1;
        a = a.hash;
        if (!a || !a.indexOf)
            return !1;
        if (-1 != a.indexOf(b))
            return !0;
        b = nj(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }
    function nj(a) {
        let b = "";
        K(a.split("_"), c=>{
            b += c.substr(0, 2)
        }
        );
        return b
    }
    ;function oj(a=null) {
        ({googletag: a} = a ?? window);
        return a?.apiReady ? a : void 0
    }
    ;const pj = a=>{
        const b = oj(a);
        return b ? Na(Oa(b.pubads().getSlots(), c=>a.document.getElementById(c.getSlotElementId())), c=>null != c) : null
    }
    ;
    var qj = a=>{
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    }
    ;
    function rj(a, b) {
        if (a.j)
            return !0;
        a.j = !0;
        const c = C(a.h, $g, 1);
        a.i = 0;
        const d = sj(a.B);
        if (mj(a.g.location, "google_audio_sense")) {
            var e = new Vg;
            e = u(e, 1, t(1));
            var f = new Ug;
            f = Zb(f, 2, !0);
            e = Vb(e, 2, f);
            f = new Tg;
            var g = new Rg
              , h = u(g, 1, t(1));
            g = f.s;
            var k = g[r];
            tb(k);
            var m = Ub(g, k, Rg, 1, 2);
            h = null != h ? h : new Rg;
            m.push(h);
            (h.s[r] | 0) & 2 && (m[r] &= -9);
            k & 512 && (g[r] = k & -513);
            g = new Sg;
            g = Zb(g, 1, !0);
            f = Vb(f, 2, g);
            e = Vb(e, 3, f)
        } else
            e = B(a.h, Vg, 27);
        if (f = e)
            if (g = B(a.h, Xg, 6)?.g() || [],
            e = a.g,
            1 == I(f, 1) && B(f, Ug, 2)?.g() && 0 != g.length) {
                var l;
                f = [];
                for (l of g)
                    if (g = qi(B(l, P, 1) || null))
                        g = g.query(e.document),
                        0 < g.length && f.push(g[0]);
                f = f.filter(Ng).filter(Og(f)).filter(Pg(e));
                f.sort(Qg);
                if (l = f[0] || null)
                    f = e.document.createElement("div"),
                    f.id = "google-auto-placed-read-aloud-player-reserved",
                    pd(f, {
                        width: "100%",
                        height: "65px"
                    }),
                    l.insertBefore(f, l.firstChild),
                    ui(e).audioSenseSpaceReserved = !0
            }
        l = a.g;
        var q;
        try {
            var w = (q = l.localStorage.getItem("google_ama_settings")) ? wi(q) : null
        } catch (x) {
            w = null
        }
        q = null !== w && G(w, 2, !1);
        w = ui(l);
        q && (w.eatf = !0,
        Dd(7, [!0, 0, !1]));
        b: {
            f = {
                eb: !1,
                fb: !1
            };
            k = Ta(l.document.querySelectorAll(".google-auto-placed"));
            m = Ta(l.document.querySelectorAll("ins.adsbygoogle[data-anchor-shown],ins.adsbygoogle[data-anchor-status]"));
            h = Ta(l.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]"));
            g = (pj(l) || Ta(l.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(Ta(l.document.querySelectorAll("iframe[id^=google_ads_iframe]")));
            const x = Ta(l.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"))
              , z = Ta(l.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
              , Ca = Ta(l.document.querySelectorAll("div.googlepublisherpluginad"))
              , V = Ta(l.document.querySelectorAll("html > ins.adsbygoogle"));
            e = [].concat(Ta(l.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), Ta(l.document.querySelectorAll("body ins.adsbygoogle")));
            q = [];
            for (const [Da,ta] of [[f.Ob, k], [f.eb, m], [f.Rb, h], [f.Pb, g], [f.Sb, x], [f.Nb, z], [f.Qb, Ca], [f.fb, V]])
                f = ta,
                !1 === Da ? q = q.concat(f) : e = e.concat(f);
            e = qj(e);
            q = qj(q);
            e = e.slice(0);
            for (v of q)
                for (q = 0; q < e.length; q++)
                    (v.contains(e[q]) || e[q].contains(v)) && e.splice(q, 1);
            var v = e;
            q = Q(l).clientHeight;
            for (l = 0; l < v.length; l++)
                if (!(v[l].getBoundingClientRect().top > q)) {
                    v = !0;
                    break b
                }
            v = !1
        }
        v = v ? w.eatfAbg = !0 : !1;
        if (v)
            return !0;
        v = new xg([2]);
        for (w = 0; w < c.length; w++) {
            q = a;
            e = c[w];
            l = w;
            f = b;
            g = d;
            k = v;
            if (B(e, Dg, 4) && k.contains(F(B(e, Dg, 4), 1)) && 1 === F(e, 8) && tj(e, g)) {
                q.i++;
                if (f = uj(q, e, f, g))
                    g = ui(q.g),
                    g.numAutoAdsPlaced || (g.numAutoAdsPlaced = 0),
                    B(e, P, 1) && null != D(B(e, P, 1), 5) && (g.numPostPlacementsPlaced ? g.numPostPlacementsPlaced++ : g.numPostPlacementsPlaced = 1),
                    null == g.placed && (g.placed = []),
                    g.numAutoAdsPlaced++,
                    g.placed.push({
                        index: l,
                        element: f.ha
                    }),
                    Dd(7, [!1, q.i, !0]);
                q = f
            } else
                q = null;
            if (q)
                return !0
        }
        Dd(7, [!1, a.i, !1]);
        return !1
    }
    function uj(a, b, c, d) {
        if (!tj(b, d) || 1 != F(b, 8))
            return null;
        d = B(b, P, 1);
        if (!d)
            return null;
        d = qi(d);
        if (!d)
            return null;
        d = d.query(a.g.document);
        if (0 == d.length)
            return null;
        d = d[0];
        var e = ti[F(b, 2)];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.g;
                switch (e) {
                case 0:
                    f = jj(kj(d), f);
                    break a;
                case 3:
                    f = jj(d, f);
                    break a;
                case 2:
                    var g = d.lastChild;
                    f = jj(g ? 1 == g.nodeType ? g : kj(g) : null, f);
                    break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !lj(d)))
                c = 1 == e || 2 == e ? d : d.parentNode,
                c = !(c && !fh(c) && 0 >= c.offsetWidth);
            f = !c
        }
        if (!(c = f)) {
            c = a.A;
            f = F(b, 2);
            g = fa(d);
            g = c.h.g.get(g);
            if (!(g = g ? g.contains(f) : !1))
                a: {
                    if (c.g.contains(fa(d)))
                        switch (f) {
                        case 2:
                        case 3:
                            g = !0;
                            break a;
                        default:
                            g = !1;
                            break a
                        }
                    for (f = d.parentElement; f; ) {
                        if (c.g.contains(fa(f))) {
                            g = !0;
                            break a
                        }
                        f = f.parentElement
                    }
                    g = !1
                }
            c = g
        }
        if (!c) {
            c = a.v;
            g = F(b, 2);
            a: switch (g) {
            case 1:
                f = fj(d.previousElementSibling) || hj(d);
                break a;
            case 4:
                f = fj(d) || hj(d.nextElementSibling);
                break a;
            case 2:
                f = hj(d.firstElementChild);
                break a;
            case 3:
                f = fj(d.lastElementChild);
                break a;
            default:
                throw Error("Unknown RelativePosition: " + g);
            }
            g = dj(c, d, g);
            c = c.h;
            $i("ama_exclusion_zone", {
                typ: f ? g ? "siuex" : "siex" : g ? "suex" : "noex",
                cor: c.g,
                num: c.h++,
                dvc: od()
            }, .1);
            c = f || g
        }
        if (c)
            return null;
        f = B(b, Zg, 3);
        c = {};
        f && (c.Ra = E(f, 1),
        c.Ia = E(f, 2),
        c.Xa = !!Ib(f, 3));
        f = B(b, Dg, 4) && F(B(b, Dg, 4), 2) ? F(B(b, Dg, 4), 2) : null;
        f = Gg(f);
        g = null != D(b, 12) ? D(b, 12) : null;
        g = null == g ? null : new Fg(null,{
            google_ml_rank: g
        });
        b = vj(a, b);
        b = Eg(a.l, f, g, b);
        f = a.g;
        a = a.F;
        var h = f.document
          , k = c.Xa || !1;
        g = (new Tc(h)).createElement("DIV");
        const m = g.style;
        m.width = "100%";
        m.height = "auto";
        m.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        c.mb && ki(k, c.mb);
        h = (new Tc(h)).createElement("INS");
        k = h.style;
        k.display = "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        c.Ra && (k.marginTop = c.Ra);
        c.Ia && (k.marginBottom = c.Ia);
        c.Ta && ki(k, c.Ta);
        g.appendChild(h);
        c = {
            ra: g,
            ha: h
        };
        c.ha.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Ja)
            c.ra.className = h.join(" ");
        h = c.ha;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var l = c.ra;
                if (S(ph)) {
                    {
                        const z = Kh(d, e);
                        if (z.init) {
                            var q = z.init;
                            for (d = q; d = z.ia(d); )
                                q = d;
                            var w = {
                                anchor: q,
                                position: z.ma
                            }
                        } else
                            w = {
                                anchor: d,
                                position: e
                            }
                    }
                    l["google-ama-order-assurance"] = 0;
                    Jh(l, w.anchor, w.position)
                } else
                    Jh(l, d, e);
                b: {
                    var v = c.ha;
                    v.dataset.adsbygoogleStatus = "reserved";
                    v.className += " adsbygoogle-noablate";
                    l = {
                        element: v
                    };
                    var x = b && b.Oa;
                    if (v.hasAttribute("data-pub-vars")) {
                        try {
                            x = JSON.parse(v.getAttribute("data-pub-vars"))
                        } catch (z) {
                            break b
                        }
                        v.removeAttribute("data-pub-vars")
                    }
                    x && (l.params = x);
                    (f.adsbygoogle = f.adsbygoogle || []).push(l)
                }
            } catch (z) {
                (v = c.ra) && v.parentNode && (x = v.parentNode,
                x.removeChild(v),
                fh(x) && (x.style.display = x.getAttribute("data-init-display") || "none"));
                v = !1;
                break a
            }
            v = !0
        }
        return v ? c : null
    }
    function vj(a, b) {
        return ug(wg(xi(b).map(Hg), c=>{
            ui(a.g).exception = c
        }
        ))
    }
    const wj = class {
        constructor(a, b, c, d, e) {
            this.g = a;
            this.F = b;
            this.h = c;
            this.l = e || null;
            this.A = (this.B = d) ? Qi(a.document, C(d, Gi, 5)) : Qi(a.document, []);
            this.v = new ij;
            this.i = 0;
            this.j = !1
        }
    }
    ;
    function sj(a) {
        const b = {};
        a && Jb(a, 6, wb).forEach(c=>{
            b[c] = !0
        }
        );
        return b
    }
    function tj(a, b) {
        return a && void 0 !== Tb(a, Dg, 4, !1) && b[F(B(a, Dg, 4), 2)] ? !1 : !0
    }
    ;var xj = tc(class extends J {
    }
    );
    function zj(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? tg(()=>xj(c)) : qg(null)
    }
    ;function Aj() {
        if (Bj)
            return Bj;
        const a = Fd() || window
          , b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Bj = b : a.google_persistent_state_async = Bj = new Cj
    }
    function Dj(a) {
        return Ej[a] || "google_ps_" + a
    }
    function Fj(a, b, c) {
        b = Dj(b);
        a = a.S;
        const d = a[b];
        return void 0 === d ? (a[b] = c(),
        a[b]) : d
    }
    function Gj(a, b, c) {
        return Fj(a, b, ()=>c)
    }
    class Cj {
        constructor() {
            this.S = {}
        }
    }
    var Bj = null;
    const Ej = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };
    function Hj(a) {
        this.g = a || {
            cookie: ""
        }
    }
    Hj.prototype.set = function(a, b, c) {
        let d, e, f, g = !1, h;
        "object" === typeof c && (h = c.Wb,
        g = c.Xb || !1,
        f = c.domain || void 0,
        e = c.path || void 0,
        d = c.kb);
        if (/[;=\s]/.test(a))
            throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b))
            throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.g.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970,1,1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    }
    ;
    Hj.prototype.get = function(a, b) {
        const c = a + "="
          , d = (this.g.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = qa(d[e]);
            if (0 == f.lastIndexOf(c, 0))
                return f.slice(c.length);
            if (f == a)
                return ""
        }
        return b
    }
    ;
    Hj.prototype.isEmpty = function() {
        return !this.g.cookie
    }
    ;
    Hj.prototype.clear = function() {
        var a = (this.g.cookie || "").split(";");
        const b = [];
        var c = [];
        let d, e;
        for (let f = 0; f < a.length; f++)
            e = qa(a[f]),
            d = e.indexOf("="),
            -1 == d ? (b.push(""),
            c.push(e)) : (b.push(e.substring(0, d)),
            c.push(e.substring(d + 1)));
        for (c = b.length - 1; 0 <= c; c--)
            a = b[c],
            this.get(a),
            this.set(a, "", {
                kb: 0,
                path: void 0,
                domain: void 0
            })
    }
    ;
    function Ij(a, b=window) {
        if (G(a, 5))
            try {
                return b.localStorage
            } catch {}
        return null
    }
    ;function Jj(a) {
        var b = new Kj;
        return Zb(b, 5, a)
    }
    var Kj = class extends J {
        constructor() {
            super()
        }
    }
    ;
    Kj.u = [10];
    const Lj = a=>{
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }
    ;
    function Mj(a) {
        if (!1 === a.gdprApplies)
            return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Lj(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState ? a.internalBlockOnErrors ? (Ad({
            e: String(a.internalErrorState)
        }),
        !1) : !0 : "loaded" !== a.cmpStatus || "tcloaded" !== a.eventStatus && "useractioncomplete" !== a.eventStatus ? !1 : !0
    }
    function Nj(a) {
        if (a.h)
            return a.h;
        a.h = nd(a.j, "__tcfapiLocator");
        return a.h
    }
    function Oj(a) {
        return "function" === typeof a.j.__tcfapi || null != Nj(a)
    }
    function Pj(a, b, c, d) {
        c || (c = ()=>{}
        );
        if ("function" === typeof a.j.__tcfapi)
            a = a.j.__tcfapi,
            a(b, 2, c, d);
        else if (Nj(a)) {
            Qj(a);
            const e = ++a.J;
            a.v[e] = c;
            a.h && a.h.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else
            c({}, !1)
    }
    function Qj(a) {
        a.l || (a.l = b=>{
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.v[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }
        ,
        Cc(a.j, "message", a.l))
    }
    class Rj extends nf {
        constructor(a) {
            var b = {};
            super();
            this.j = a;
            this.h = null;
            this.v = {};
            this.J = 0;
            this.F = b.Qa ?? 500;
            this.B = b.Mb ?? !1;
            this.l = null
        }
        g() {
            this.v = {};
            this.l && (Dc(this.j, "message", this.l),
            delete this.l);
            delete this.v;
            delete this.j;
            delete this.h;
            super.g()
        }
        addEventListener(a) {
            let b = {
                internalBlockOnErrors: this.B
            };
            const c = Bc(()=>a(b));
            let d = 0;
            -1 !== this.F && (d = setTimeout(()=>{
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }
            , this.F));
            const e = (f,g)=>{
                clearTimeout(d);
                f ? (b = f,
                b.internalErrorState = Lj(b),
                b.internalBlockOnErrors = this.B,
                g && 0 === b.internalErrorState || (b.tcString = "tcunavailable",
                g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable",
                b.internalErrorState = 3);
                a(b)
            }
            ;
            try {
                Pj(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable",
                b.internalErrorState = 3,
                d && (clearTimeout(d),
                d = 0),
                c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && Pj(this, "removeEventListener", null, a.listenerId)
        }
    }
    ;var Wj = ({m: a, V: b, Qa: c, K: d, ja: e=!1, ka: f=!1})=>{
        b = Sj({
            m: a,
            V: b,
            ja: e,
            ka: f
        });
        null != b.g || "tcunav" != b.h.message ? d(b) : Tj(a, c).then(g=>g.map(Uj)).then(g=>g.map(h=>Vj(a, h))).then(d)
    }
      , Sj = ({m: a, V: b, ja: c=!1, ka: d=!1})=>{
        if (!Xj({
            m: a,
            V: b,
            ja: c,
            ka: d
        }))
            return Vj(a, Jj(!0));
        b = Aj();
        return (b = Gj(b, 24)) ? Vj(a, Uj(b)) : sg(Error("tcunav"))
    }
    ;
    function Xj({m: a, V: b, ja: c, ka: d}) {
        if (!(d = !d && Oj(new Rj(a)))) {
            if (c = !c) {
                if (b) {
                    a = zj(a);
                    if (null != a.g)
                        if ((a = a.getValue()) && null != F(a, 1))
                            b: switch (a = F(a, 1),
                            a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                            }
                        else
                            a = !1;
                    else
                        U.H(806, a.h, void 0, void 0),
                        a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }
    function Tj(a, b) {
        return Promise.race([Yj(), Zj(a, b)])
    }
    function Yj() {
        return (new Promise(a=>{
            var b = Aj();
            a = {
                resolve: a
            };
            const c = Gj(b, 25, []);
            c.push(a);
            b.S[Dj(25)] = c
        }
        )).then(ak)
    }
    function Zj(a, b) {
        return new Promise(c=>{
            a.setTimeout(c, b, sg(Error("tcto")))
        }
        )
    }
    function ak(a) {
        return a ? qg(a) : sg(Error("tcnull"))
    }
    function Uj(a) {
        if (Mj(a))
            if (!1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length) {
                b: {
                    if (a.publisher && a.publisher.restrictions) {
                        var b = a.publisher.restrictions["1"];
                        if (void 0 !== b) {
                            b = b["755"];
                            break b
                        }
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents,
                (b = !(!b || !b["755"])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (b && (a = a.purpose.consents,
                b = !(!a || !a["1"])),
                a = b)) : a = !0
            } else
                a = !0;
        else
            a = !1;
        return Jj(a)
    }
    function Vj(a, b) {
        return (a = Ij(b, a)) ? qg(a) : sg(Error("unav"))
    }
    ;var bk = class extends J {
    }
    ;
    bk.u = [1, 2, 3];
    var ck = class extends J {
    }
    ;
    ck.u = [1, 2, 3];
    var dk = class extends J {
        g() {
            return B(this, bk, 2)
        }
        h() {
            return B(this, ck, 3)
        }
    }
    ;
    const ek = class {
        constructor(a) {
            this.exception = a
        }
    }
    ;
    function fk(a, b) {
        try {
            var c = a.h
              , d = c.resolve
              , e = a.g;
            ui(e.g);
            C(e.h, $g, 1);
            d.call(c, new ek(b))
        } catch (f) {
            a = a.h,
            b = f,
            ig(a),
            a.g = 2,
            a.i = b,
            kg(a.h)
        }
    }
    var gk = class {
        constructor(a, b, c) {
            this.i = a;
            this.g = b;
            this.h = c
        }
        start() {
            this.j()
        }
        j() {
            try {
                switch (this.i.document.readyState) {
                case "complete":
                case "interactive":
                    rj(this.g, !0);
                    fk(this);
                    break;
                default:
                    rj(this.g, !1) ? fk(this) : this.i.setTimeout(la(this.j, this), 100)
                }
            } catch (a) {
                fk(this, a)
            }
        }
    }
    ;
    var hk = "a".charCodeAt()
      , ik = Gc(gg)
      , jk = Gc(hg);
    function W(a, b) {
        if (a.g + b > a.h.length)
            throw Error("Requested length " + b + " is past end of string.");
        const c = a.h.substring(a.g, a.g + b);
        a.g += b;
        return parseInt(c, 2)
    }
    function kk(a) {
        return String.fromCharCode(hk + W(a, 6)) + String.fromCharCode(hk + W(a, 6))
    }
    function lk(a) {
        let b = W(a, 12);
        const c = [];
        for (; b--; ) {
            var d = !0 === !!W(a, 1)
              , e = W(a, 16);
            if (d)
                for (d = W(a, 16); e <= d; e++)
                    c.push(e);
            else
                c.push(e)
        }
        c.sort((f,g)=>f - g);
        return c
    }
    function mk(a, b, c) {
        const d = [];
        for (let e = 0; e < b; e++)
            if (W(a, 1)) {
                const f = e + 1;
                if (c && -1 === c.indexOf(f))
                    throw Error(`ID: ${f} is outside of allowed values!`);
                d.push(f)
            }
        return d
    }
    function nk(a) {
        const b = W(a, 16);
        return !0 === !!W(a, 1) ? (a = lk(a),
        a.forEach(c=>{
            if (c > b)
                throw Error(`ID ${c} is past MaxVendorId ${b}!`);
        }
        ),
        a) : mk(a, b)
    }
    class ok {
        constructor(a) {
            if (/[^01]/.test(a))
                throw Error(`Input bitstring ${a} is malformed!`);
            this.h = a;
            this.g = 0
        }
    }
    ;var qk = (a,b)=>{
        try {
            var c = Xa(a.split(".")[0]).map(e=>e.toString(2).padStart(8, "0")).join("");
            const d = new ok(c);
            c = {};
            c.tcString = a;
            c.gdprApplies = !0;
            d.g += 78;
            c.cmpId = W(d, 12);
            c.cmpVersion = W(d, 12);
            d.g += 30;
            c.tcfPolicyVersion = W(d, 6);
            c.isServiceSpecific = !!W(d, 1);
            c.useNonStandardStacks = !!W(d, 1);
            c.specialFeatureOptins = pk(mk(d, 12, jk), jk);
            c.purpose = {
                consents: pk(mk(d, 24, ik), ik),
                legitimateInterests: pk(mk(d, 24, ik), ik)
            };
            c.purposeOneTreatment = !!W(d, 1);
            c.publisherCC = kk(d);
            c.vendor = {
                consents: pk(nk(d), b),
                legitimateInterests: pk(nk(d), b)
            };
            return c
        } catch (d) {
            return null
        }
    }
    ;
    const pk = (a,b)=>{
        const c = {};
        if (Array.isArray(b) && 0 !== b.length)
            for (const d of b)
                c[d] = -1 !== a.indexOf(d);
        else
            for (const d of a)
                c[d] = !0;
        delete c[0];
        return c
    }
    ;
    var rk = class extends J {
    }
    ;
    var sk = class extends J {
    }
    ;
    var tk = class extends J {
    }
      , uk = tc(tk);
    tk.u = [7];
    function vk(a) {
        return (a = wk(a)) ? B(a, sk, 4) : null
    }
    function wk(a) {
        if (a = (new Hj(a)).get("FCCDCF", ""))
            if (a.startsWith("%"))
                try {
                    var b = decodeURIComponent(a)
                } catch (c) {
                    b = null
                }
            else
                b = a;
        else
            b = null;
        try {
            return b ? uk(b) : null
        } catch (c) {
            return null
        }
    }
    ;Gc(gg).map(a=>Number(a));
    Gc(hg).map(a=>Number(a));
    function xk(a) {
        a.__tcfapiPostMessageReady || yk(new zk(a))
    }
    function yk(a) {
        a.h = b=>{
            const c = "string" == typeof b.data;
            let d;
            try {
                d = c ? JSON.parse(b.data) : b.data
            } catch (f) {
                return
            }
            const e = d.__tcfapiCall;
            !e || "ping" !== e.command && "getTCData" !== e.command && "addEventListener" !== e.command && "removeEventListener" !== e.command || a.g.__tcfapi(e.command, e.version, (f,g)=>{
                const h = {};
                h.__tcfapiReturn = "removeEventListener" === e.command ? {
                    success: f,
                    callId: e.callId
                } : {
                    returnValue: f,
                    success: g,
                    callId: e.callId
                };
                f = c ? JSON.stringify(h) : h;
                b.source && "function" === typeof b.source.postMessage && b.source.postMessage(f, b.origin);
                return f
            }
            , e.parameter)
        }
        ;
        a.g.addEventListener("message", a.h);
        a.g.__tcfapiPostMessageReady = !0
    }
    var zk = class {
        constructor(a) {
            this.g = a;
            this.h = null
        }
    }
    ;
    var Ak = (a,b)=>{
        const c = a.document
          , d = ()=>{
            if (!a.frames[b])
                if (c.body) {
                    const e = cd("IFRAME", c);
                    e.style.display = "none";
                    e.style.width = "0px";
                    e.style.height = "0px";
                    e.style.border = "none";
                    e.style.zIndex = "-1000";
                    e.style.left = "-1000px";
                    e.style.top = "-1000px";
                    e.name = b;
                    c.body.appendChild(e)
                } else
                    a.setTimeout(d, 5)
        }
        ;
        d()
    }
    ;
    function Bk() {
        var a = window
          , b = S(uh);
        a.__uspapi || a.frames.__uspapiLocator || (a = new Ck(a),
        Dk(a),
        b && Ek(a))
    }
    function Dk(a) {
        !a.j || a.g.__uspapi || a.g.frames.__uspapiLocator || (a.g.__uspapiManager = "fc",
        Ak(a.g, "__uspapiLocator"),
        na("__uspapi", (...b)=>Fk(a, ...b)))
    }
    function Ek(a) {
        !a.h || a.g.__tcfapi || a.g.frames.__tcfapiLocator || (a.g.__tcfapiManager = "fc",
        Ak(a.g, "__tcfapiLocator"),
        a.g.__tcfapiEventListeners = a.g.__tcfapiEventListeners || [],
        na("__tcfapi", (...b)=>Gk(a, ...b)),
        xk(a.g))
    }
    function Fk(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.j
        }, !0)
    }
    function Gk(a, b, c, d, e=null) {
        if ("function" === typeof d)
            if (c && (2.1 < c || 1 >= c))
                d(null, !1);
            else
                switch (c = a.g.__tcfapiEventListeners,
                b) {
                case "getTCData":
                    !e || Array.isArray(e) && e.every(f=>"number" === typeof f) ? d(Hk(a, e, null), !0) : d(null, !1);
                    break;
                case "ping":
                    d({
                        gdprApplies: !0,
                        cmpLoaded: !0,
                        cmpStatus: "loaded",
                        displayStatus: "disabled",
                        apiVersion: "2.1",
                        cmpVersion: 2,
                        cmpId: 300
                    });
                    break;
                case "addEventListener":
                    b = c.push(d);
                    d(Hk(a, null, b - 1), !0);
                    break;
                case "removeEventListener":
                    c[e] ? (c[e] = null,
                    d(!0)) : d(!1);
                    break;
                case "getInAppTCData":
                case "getVendorList":
                    d(null, !1)
                }
    }
    function Hk(a, b, c) {
        if (!a.h)
            return null;
        b = qk(a.h, b);
        b.addtlConsent = null != a.i ? a.i : void 0;
        b.cmpStatus = "loaded";
        b.eventStatus = "tcloaded";
        null != c && (b.listenerId = c);
        return b
    }
    class Ck {
        constructor(a) {
            this.g = a;
            var b;
            this.j = (b = (b = wk(a.document)) ? B(b, rk, 5) || null : null) ? E(b, 2) : null;
            this.h = (b = vk(a.document)) && null != E(b, 1) ? E(b, 1) : null;
            this.i = (a = vk(a.document)) && null != E(a, 2) ? E(a, 2) : null
        }
    }
    ;const Ik = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    var Jk = (a,b)=>{
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        $i("ama", b, .01)
    }
      , Kk = a=>{
        const b = {};
        K(Ik, (c,d)=>{
            d in a && (b[d] = a[d])
        }
        );
        return b
    }
    ;
    const Lk = a=>{
        const b = /[a-zA-Z0-9._~-]/
          , c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
            if (!d.match(c)) {
                const e = decodeURIComponent(d);
                if (e.match(b))
                    return e
            }
            return d.toUpperCase()
        })
    }
      , Mk = a=>{
        let b = "";
        const c = /[/%?&=]/;
        for (let d = 0; d < a.length; ++d) {
            const e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    }
    ;
    var Nk = a=>{
        a = Jb(a, 2, wb);
        if (!a)
            return !1;
        for (let b = 0; b < a.length; b++)
            if (1 == a[b])
                return !0;
        return !1
    }
      , Pk = (a,b)=>{
        a = Mk(Lk(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        const c = id(a)
          , d = Ok(a);
        return b.find(e=>{
            const f = void 0 !== Tb(e, Ci, 7, !1) ? Yb(B(e, Ci, 7), 1) : Yb(e, 1);
            e = void 0 !== Tb(e, Ci, 7, !1) ? F(B(e, Ci, 7), 2) : 2;
            if ("number" !== typeof f)
                return !1;
            switch (e) {
            case 1:
                return f == c;
            case 2:
                return d[f] || !1
            }
            return !1
        }
        ) || null
    }
    ;
    const Ok = a=>{
        const b = {};
        for (; ; ) {
            b[id(a)] = !0;
            if (!a)
                return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    }
    ;
    var Qk = a=>{
        a = B(a, Bi, 3);
        return !a || Fb(a, 1) <= Date.now() ? !1 : !0
    }
    ;
    function Rk(a) {
        if (S(nh))
            var b = null;
        else
            try {
                b = a.getItem("google_ama_config")
            } catch (d) {
                b = null
            }
        try {
            var c = b ? Oi(b) : null
        } catch (d) {
            c = null
        }
        return c
    }
    ;var Sk = class extends J {
        g() {
            return B(this, dk, 2)
        }
        h() {
            return G(this, 3)
        }
    }
    ;
    var Tk = class extends J {
        g() {
            return Jb(this, 1, yb)
        }
        h() {
            return B(this, Sk, 2)
        }
    }
    ;
    Tk.u = [1];
    var Uk = class extends J {
        getId() {
            return D(this, 1) ?? 0
        }
    }
    ;
    Uk.u = [2];
    var Vk = class extends J {
    }
    ;
    Vk.u = [2];
    var Wk = class extends J {
    }
    ;
    Wk.u = [2];
    var Xk = class extends J {
        g() {
            return Fb(this, 2) ?? 0
        }
        h() {
            return Fb(this, 4) ?? 0
        }
        i() {
            return G(this, 3)
        }
    }
    ;
    var Yk = class extends J {
    }
    ;
    Yk.u = [1, 4, 2, 3];
    var $k = class extends J {
        h() {
            return ac(this, Sk, 13, Zk)
        }
        j() {
            return void 0 !== Tb(this, Sk, Ob(this, Zk, 13))
        }
        g() {
            return ac(this, Tk, 14, Zk)
        }
        i() {
            return void 0 !== Tb(this, Tk, Ob(this, Zk, 14))
        }
    }
    ;
    $k.u = [19];
    var Zk = [13, 14];
    let al = void 0;
    function X(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }
    function bl(a) {
        a = X(a);
        const b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Ha: !0,
            tb: b,
            pa: a.ablation_viewport_offset
        } : null
    }
    function cl(a, b) {
        a = X(a);
        a.had_ads_ablation = !0;
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }
    function dl(a) {
        X(M).allow_second_reactive_tag = a
    }
    function el() {
        const a = X(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    }
    ;function fl(a) {
        return X(a)?.head_tag_slot_vars?.google_ad_host ?? gl(a)
    }
    function gl(a) {
        return a.document?.querySelector('meta[name="google-adsense-platform-account"]')?.getAttribute("content") ?? null
    }
    ;const hl = [2, 7, 1];
    var kl = (a,b,c="",d=null)=>1 === b && il(c, d) ? !0 : jl(a, c, e=>Pa(C(e, uc, 2), f=>F(f, 1) === b))
      , il = (a,b)=>b ? b.j() ? G(b.h(), 1) : b.i() && "" !== a && 1 === b.g().g().length && b.g().g()[0] === a ? G(b.g().h(), 1) : !1 : !1
      , ll = (a,b)=>{
        b = D(b, 18) ?? 0;
        -1 !== b && (a.tmod = b)
    }
      , nl = a=>{
        const b = ad(M) || M;
        return ml(b, a) ? !0 : jl(M, "", c=>Pa(Jb(c, 3, wb), d=>d === a))
    }
    ;
    function ml(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Sa(a.split(","), b.toString())
    }
    function jl(a, b, c) {
        a = ad(a) || a;
        const d = ol(a);
        b && (b = Kd(String(b)));
        return Fc(d, (e,f)=>Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e))
    }
    function ol(a) {
        a = pl(a);
        const b = {};
        K(a, (c,d)=>{
            try {
                const e = new vc(c);
                b[d] = e
            } catch (e) {}
        }
        );
        return b
    }
    var pl = a=>S(hh) ? (pc(al, sc),
    a = Sj({
        m: a,
        V: al
    }),
    null != a.g ? ql(a.getValue()) : {}) : ql(a.localStorage);
    function ql(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b)
                return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : Ec(c, (d,e)=>Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }
    function rl(a) {
        $i("atf_ad_settings_from_ppabg", {
            p_s: a
        }, .01)
    }
    const sl = a=>!!a && (0 < C(a, $g, 1).length || S(oh) && 0 < C(a, Wg, 3).length)
      , tl = a=>{
        $i("overlay_settings_from_ppabg", {
            p_s: a
        }, .01)
    }
      , ul = a=>{
        const b = C(a, Ii, 2);
        return Pk(n, b) ? [] : Jb(a, 3, wb)
    }
      , vl = (a,b)=>{
        if (fl(n))
            return hl;
        if (b?.j()) {
            a = b?.h()?.g()?.h();
            if (!a)
                return hl;
            tl(!1);
            return ul(a)
        }
        if (b?.i()) {
            const c = b?.g()?.g();
            if (!c || 1 !== c.length || !a || c[0] !== a || H(b, 17) != n.location.host)
                return hl;
            a = b?.g()?.h()?.g()?.h();
            if (!a)
                return hl;
            tl(!0);
            return ul(a)
        }
        return hl
    }
    ;
    var wl = (a,b)=>{
        const c = [];
        let d = hl;
        if (S(sh) || S(rh) || S(th))
            d = vl(a, b);
        S(sh) && !d.includes(1) && c.push(1);
        S(rh) && !d.includes(2) && c.push(2);
        S(th) && !d.includes(7) && c.push(7);
        return c
    }
    ;
    function xl(a, b, c, d) {
        yl(new zl(a,b,c,d))
    }
    function yl(a) {
        wg(vg(Sj({
            m: a.m,
            V: G(a.h, 6)
        }), b=>{
            Al(a, b, !0)
        }
        ), ()=>{
            Bl(a)
        }
        )
    }
    function Al(a, b, c) {
        wg(vg(Cl(b), d=>{
            Dl("ok");
            a.g(d, {
                fromLocalStorage: !0
            })
        }
        ), ()=>{
            var d = a.m;
            try {
                b.removeItem("google_ama_config")
            } catch (e) {
                Jk(d, {
                    lserr: 1
                })
            }
            c ? Bl(a) : a.g(null, null)
        }
        )
    }
    function Bl(a) {
        wg(vg(El(a), b=>{
            a.g(b, {
                fromPABGSettings: !0
            })
        }
        ), ()=>{
            Fl(a)
        }
        )
    }
    function Cl(a) {
        return (a = (a = Rk(a)) ? Qk(a) ? a : null : null) ? qg(a) : sg(Error("invlocst"))
    }
    function El(a) {
        if (fl(a.m) && !G(a.h, 22))
            return sg(Error("invtag"));
        a: {
            var b = a.m;
            var c = a.i;
            a = a.h;
            if (a?.j())
                b = a?.h()?.g()?.g(),
                sl(b) ? rl(!1) : b = null;
            else {
                if (a?.i()) {
                    const d = a?.g()?.g()
                      , e = a?.g()?.h()?.g()?.g();
                    if (d && 1 === d.length && d[0] === c && sl(e) && H(a, 17) === b.location.host) {
                        rl(!0);
                        b = e;
                        break a
                    }
                }
                b = null
            }
        }
        b ? (c = new Ni,
        a = C(b, $g, 1),
        c = Xb(c, 1, a),
        a = C(b, Ii, 2),
        c = Xb(c, 7, a),
        S(oh) && 0 < C(b, Wg, 3).length && (a = new Xg,
        b = C(b, Wg, 3),
        b = Xb(a, 1, b),
        Vb(c, 6, b)),
        b = qg(c)) : b = sg(Error("invtag"));
        return b
    }
    function Fl(a) {
        Wj({
            m: a.m,
            V: G(a.h, 6),
            Qa: 50,
            K: b=>{
                Gl(a, b)
            }
        })
    }
    function Gl(a, b) {
        wg(vg(b, c=>{
            Al(a, c, !1)
        }
        ), c=>{
            Dl(c.message);
            a.g(null, null)
        }
        )
    }
    function Dl(a) {
        $i("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    }
    class zl {
        constructor(a, b, c, d) {
            this.m = a;
            this.h = b;
            this.i = c;
            this.g = d
        }
    }
    ;var Jl = (a,b,c,d)=>{
        try {
            const e = Pk(a, C(c, Ii, 7));
            if (e && Nk(e)) {
                E(e, 4) && (d = Eg(d, new Fg(null,{
                    google_package: E(e, 4)
                })));
                const f = new wj(a,b,c,e,d);
                pi(1E3, ()=>{
                    var g = new lg;
                    (new gk(a,f,g)).start();
                    return g.h
                }
                , a).then(ma(Hl, a), ma(Il, a))
            }
        } catch (e) {
            Jk(a, {
                atf: -1
            })
        }
    }
    ;
    const Hl = a=>{
        Jk(a, {
            atf: 1
        })
    }
      , Il = (a,b)=>{
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        Jk(a, {
            atf: 0
        })
    }
    ;
    function Kl(a) {
        S(xh) && (a.easpi = !0,
        a.asntpc = 1E3,
        a.asla = .4,
        a.asaa = -1,
        a.asro = S(Ah),
        S(Bh) || (a.asrc = !1),
        S(yh) && (a.easppi = !0),
        S(zh) && (a.asiscm = !0),
        S(wh) && (a.scsals = !0),
        S(Ch) && (a.srtr = !0))
    }
    ;Va || Ga();
    class Ll {
        constructor() {
            this.promise = new Promise(a=>{
                this.resolve = a
            }
            )
        }
    }
    ;function Ml() {
        const {promise: a, resolve: b} = new Ll;
        return {
            promise: a,
            resolve: b
        }
    }
    ;function Nl(a=()=>{}
    ) {
        n.google_llp || (n.google_llp = {});
        const b = n.google_llp;
        let c = b[7];
        if (c)
            return c;
        c = Ml();
        b[7] = c;
        a();
        return c
    }
    function Ol(a) {
        return Nl(()=>{
            bd(n.document, a)
        }
        ).promise
    }
    ;var Pl = a=>{
        if (n.google_apltlad || n !== n.top || !a.google_ad_client)
            return null;
        n.google_apltlad = !0;
        const b = {
            enable_page_level_ads: {
                pltais: !0
            },
            google_ad_client: a.google_ad_client
        }
          , c = b.enable_page_level_ads;
        K(a, (d,e)=>{
            ii[e] && "google_ad_client" !== e && (c[e] = d)
        }
        );
        c.google_pgb_reactive = 7;
        Kl(c);
        if ("google_ad_section"in a || "google_ad_region"in a)
            c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    }
    ;
    var Sl = (a,b)=>{
        X(M).ama_ran_on_page || pi(1001, ()=>Ql(new Rl(a,b)), n)
    }
    ;
    function Ql(a) {
        xl(a.g, a.i, a.h.google_ad_client || "", (b,c)=>{
            var d = a.g
              , e = a.h;
            X(M).ama_ran_on_page || b && Tl(d, e, b, c)
        }
        )
    }
    class Rl {
        constructor(a, b) {
            this.g = n;
            this.h = a;
            this.i = b
        }
    }
    function Tl(a, b, c, d) {
        d && (ui(a).configSourceInAbg = d);
        void 0 !== Tb(c, Mi, 24, !1) && (d = vi(a),
        d.availableAbg = !0,
        d.ablationFromStorage = !!B(c, Mi, 24)?.g()?.g());
        if (ea(b.enable_page_level_ads) && 7 === b.enable_page_level_ads.google_pgb_reactive) {
            d = Pk(a, C(c, Ii, 7));
            if (!d || !Ib(d, 8)) {
                $i("amaait", {
                    value: "true"
                });
                return
            }
            $i("amaait", {
                value: "false"
            })
        }
        X(M).ama_ran_on_page = !0;
        B(c, Ai, 15)?.g() && (X(a).enable_overlap_observer = !0);
        var e = B(c, zi, 13);
        e && 1 === F(e, 1) ? (d = 0,
        (e = B(e, yi, 6)) && D(e, 3) && (d = D(e, 3) || 0),
        cl(a, d)) : B(c, Mi, 24)?.g()?.g() && (vi(a).ablatingThisPageview = !0,
        cl(a, 1));
        Dd(3, [c.toJSON()]);
        const f = b.google_ad_client || "";
        b = Kk(ea(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
        const g = Eg(Ig, new Fg(null,b));
        Zi(782, ()=>{
            Jl(a, f, c, g)
        }
        )
    }
    ;var Ul = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };
    function Vl(a, b) {
        if (15 == b) {
            if (728 <= a)
                return 728;
            if (468 <= a)
                return 468
        } else if (90 == b) {
            if (200 <= a)
                return 200;
            if (180 <= a)
                return 180;
            if (160 <= a)
                return 160;
            if (120 <= a)
                return 120
        }
        return null
    }
    ;function Wl(a) {
        return b=>!!(b.fa & a)
    }
    class Y extends ai {
        constructor(a, b, c, d=!1) {
            super(a, b);
            this.fa = c;
            this.hb = d
        }
        oa() {
            return this.fa
        }
        h(a, b, c) {
            b.google_ad_resize || (c.style.height = this.height() + "px",
            b.rpe = !0)
        }
    }
    ;const Xl = {
        image_stacked: 1 / 1.91,
        image_sidebyside: 1 / 3.82,
        mobile_banner_image_sidebyside: 1 / 3.82,
        pub_control_image_stacked: 1 / 1.91,
        pub_control_image_sidebyside: 1 / 3.82,
        pub_control_image_card_stacked: 1 / 1.91,
        pub_control_image_card_sidebyside: 1 / 3.74,
        pub_control_text: 0,
        pub_control_text_card: 0
    }
      , Yl = {
        image_stacked: 80,
        image_sidebyside: 0,
        mobile_banner_image_sidebyside: 0,
        pub_control_image_stacked: 80,
        pub_control_image_sidebyside: 0,
        pub_control_image_card_stacked: 85,
        pub_control_image_card_sidebyside: 0,
        pub_control_text: 80,
        pub_control_text_card: 80
    }
      , Zl = {
        pub_control_image_stacked: 100,
        pub_control_image_sidebyside: 200,
        pub_control_image_card_stacked: 150,
        pub_control_image_card_sidebyside: 250,
        pub_control_text: 100,
        pub_control_text_card: 150
    };
    function $l(a) {
        var b = 0;
        a.T && b++;
        a.M && b++;
        a.N && b++;
        if (3 > b)
            return {
                O: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
            };
        b = a.T.split(",");
        const c = a.N.split(",");
        a = a.M.split(",");
        if (b.length !== c.length || b.length !== a.length)
            return {
                O: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
            };
        if (2 < b.length)
            return {
                O: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while " + `you are providing ${b.length} parameters. Example: ${'\n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'}.`
            };
        const d = []
          , e = [];
        for (let g = 0; g < b.length; g++) {
            var f = Number(c[g]);
            if (Number.isNaN(f) || 0 === f)
                return {
                    O: `Wrong value '${c[g]}' for ${"data-matched-content-rows-num"}.`
                };
            d.push(f);
            f = Number(a[g]);
            if (Number.isNaN(f) || 0 === f)
                return {
                    O: `Wrong value '${a[g]}' for ${"data-matched-content-columns-num"}.`
                };
            e.push(f)
        }
        return {
            N: d,
            M: e,
            Ma: b
        }
    }
    function am(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    }
    ;const bm = Ua("script");
    function cm(a, b, c) {
        null != a.fa && (c.google_responsive_formats = a.fa);
        null != a.R && (c.google_safe_for_responsive_override = a.R);
        null != a.h && (!0 === a.h ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1,
        c.gfwrnwer = a.h));
        null != a.i && !0 !== a.i && (c.gfwrnher = a.i);
        var d = a.l || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.j || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().g(b);
        const e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height = e;
            var f = a.size();
            b = f.g(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.A;
            null != a.g && (c.armr = a.g);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.h && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.F && (c.gfwroml = a.F);
        null != a.J && (c.gfwromr = a.J);
        null != a.j && (c.gfwroh = a.j);
        null != a.l && (c.gfwrow = a.l);
        null != a.P && (c.gfwroz = a.P);
        null != a.v && (c.gml = a.v);
        null != a.B && (c.gmr = a.B);
        null != a.Z && (c.gzi = a.Z);
        b = ad(window) || window;
        mj(b.location, "google_responsive_dummy_ad") && (Sa([1, 2, 3, 4, 5, 6, 7, 8], a.A) || 1 === a.g) && 2 !== a.g && (a = JSON.stringify({
            googMsgType: "adpnt",
            key_value: [{
                key: "qid",
                value: "DUMMY_AD"
            }]
        }),
        c.dash = `<${bm}>window.top.postMessage('${a}', '*'); 
          </${bm}> 
          <div id="dummyAd" style="width:${d}px;height:${e}px; 
            background:#ddd;border:3px solid #f00;box-sizing:border-box; 
            color:#000;"> 
            <p>Requested size:${d}x ${e}</p> 
            <p>Rendered size:${d}x ${e}</p> 
          </div>`)
    }
    class dm {
        constructor(a, b, c=null, d=null, e=null, f=null, g=null, h=null, k=null, m=null, l=null, q=null) {
            this.A = a;
            this.ga = b;
            this.fa = c;
            this.g = d;
            this.R = e;
            this.h = f;
            this.i = g;
            this.F = h;
            this.J = k;
            this.j = m;
            this.l = l;
            this.P = q;
            this.Z = this.B = this.v = null
        }
        size() {
            return this.ga
        }
    }
    ;const em = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];
    var fm = class extends ai {
        g(a) {
            return Math.min(1200, Math.max(this.L, Math.round(a)))
        }
    }
      , im = (a,b)=>{
        gm(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type)
            return new dm(9,new fm(a,Math.floor(a * b.google_phwr)));
        var c = Uc();
        468 > a ? c ? (c = a - 8 - 8,
        c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * Xl.mobile_banner_image_sidebyside + Yl.mobile_banner_image_sidebyside) + 96),
        a = {
            ca: a,
            ba: c,
            M: 1,
            N: 12,
            T: "mobile_banner_image_sidebyside"
        }) : (a = am(a),
        a = {
            ca: a.width,
            ba: a.height,
            M: 1,
            N: 13,
            T: "image_sidebyside"
        }) : (a = am(a),
        a = {
            ca: a.width,
            ba: a.height,
            M: 4,
            N: 2,
            T: "image_stacked"
        });
        hm(b, a);
        return new dm(9,new fm(a.ca,a.ba))
    }
      , jm = (a,b)=>{
        gm(a, b);
        var c = $l({
            N: b.google_content_recommendation_rows_num,
            M: b.google_content_recommendation_columns_num,
            T: b.google_content_recommendation_ui_type
        });
        if (c.O)
            a = {
                ca: 0,
                ba: 0,
                M: 0,
                N: 0,
                T: "image_stacked",
                O: c.O
            };
        else {
            var d = 2 === c.Ma.length && 468 <= a ? 1 : 0;
            var e = c.Ma[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = Zl[e];
            let g = c.M[d];
            for (; a / g < f && 1 < g; )
                g--;
            f = g;
            d = c.N[d];
            c = Math.floor(((a - 8 * f - 8) / f * Xl[e] + Yl[e]) * d + 8 * d + 8);
            a = 1500 < a ? {
                width: 0,
                height: 0,
                rb: "Calculated slot width is too large: " + a
            } : 1500 < c ? {
                width: 0,
                height: 0,
                rb: "Calculated slot height is too large: " + c
            } : {
                width: a,
                height: c
            };
            a = {
                ca: a.width,
                ba: a.height,
                M: f,
                N: d,
                T: e
            }
        }
        if (a.O)
            throw new T(a.O);
        hm(b, a);
        return new dm(9,new fm(a.ca,a.ba))
    }
    ;
    function gm(a, b) {
        if (0 >= a)
            throw new T("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }
    function hm(a, b) {
        a.google_content_recommendation_ui_type = b.T;
        a.google_content_recommendation_columns_num = b.M;
        a.google_content_recommendation_rows_num = b.N
    }
    ;class km extends ai {
        g() {
            return this.L
        }
        h(a, b, c) {
            $h(a, c);
            b.google_ad_resize || (c.style.height = this.height() + "px",
            b.rpe = !0)
        }
    }
    ;const lm = {
        "image-top": a=>600 >= a ? 284 + .414 * (a - 250) : 429,
        "image-middle": a=>500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500),
        "image-side": a=>500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500),
        "text-only": a=>500 >= a ? 187 - .228 * (a - 250) : 130,
        "in-article": a=>420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
    };
    var mm = class extends ai {
        g() {
            return Math.min(1200, this.L)
        }
    }
      , nm = (a,b,c,d,e)=>{
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f) {
            var g = a;
            if ("false" == e.google_full_width_responsive)
                a = g;
            else if (a = Vh(b, c, g, .2, e),
            !0 !== a)
                e.gfwrnwer = a,
                a = g;
            else if (a = Q(b).clientWidth)
                if (e.google_full_width_responsive_allowed = !0,
                c.parentElement) {
                    b: {
                        g = c;
                        for (let h = 0; 100 > h && g.parentElement; ++h) {
                            const k = g.parentElement.childNodes;
                            for (let m = 0; m < k.length; ++m) {
                                const l = k[m];
                                if (l != g && Yh(b, l))
                                    break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    $h(b, c)
                } else
                    a = g;
            else
                a = g
        }
        if (250 > a)
            throw new T("Fluid responsive ads must be at least 250px wide: availableWidth=" + a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f)
                throw new T("Fluid responsive ads must be at least 50px tall: height=" + f);
            return new dm(11,new ai(a,f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            c = Math.pow(10, 3);
            if (e = (d = f.match(/([+-][0-9a-z]+)/g)) && d.length)
                for (b = [],
                g = 0; g < e; g++)
                    b.push(parseInt(d[g], 36) / c);
            else
                b = null;
            if (!b)
                throw new T("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++)
                c += b[g] * d,
                d *= f;
            f = Math.ceil(1E3 * c - -725 + 10);
            if (isNaN(f))
                throw new T("Invalid height: height=" + f);
            if (50 > f)
                throw new T("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f)
                throw new T("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new dm(11,new ai(a,f))
        }
        d = lm[f];
        if (!d)
            throw new T("Invalid data-ad-layout value: " + f);
        c = di(c, b);
        b = Q(b).clientWidth;
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new dm(11,"in-article" == f ? new mm(a,b) : new ai(a,b))
    }
    ;
    var om = a=>b=>{
        for (let c = a.length - 1; 0 <= c; --c)
            if (!a[c](b))
                return !1;
        return !0
    }
      , qm = (a,b)=>{
        var c = pm.slice(0);
        const d = c.length;
        let e = null;
        for (let f = 0; f < d; ++f) {
            const g = c[f];
            if (a(g)) {
                if (!b || b(g))
                    return g;
                null === e && (e = g)
            }
        }
        return e
    }
    ;
    var Z = [new Y(970,90,2), new Y(728,90,2), new Y(468,60,2), new Y(336,280,1), new Y(320,100,2), new Y(320,50,2), new Y(300,600,4), new Y(300,250,1), new Y(250,250,1), new Y(234,60,2), new Y(200,200,1), new Y(180,150,1), new Y(160,600,4), new Y(125,125,1), new Y(120,600,4), new Y(120,240,4), new Y(120,120,1,!0)]
      , pm = [Z[6], Z[12], Z[3], Z[0], Z[7], Z[14], Z[1], Z[8], Z[10], Z[4], Z[15], Z[2], Z[11], Z[5], Z[13], Z[9], Z[16]];
    var sm = (a,b,c,d,e)=>{
        "false" == e.google_full_width_responsive ? c = {
            C: a,
            D: 1
        } : "autorelaxed" == b && e.google_full_width_responsive || rm(b) || e.google_ad_resize ? (b = Wh(a, c, d, e),
        c = !0 !== b ? {
            C: a,
            D: b
        } : {
            C: Q(c).clientWidth || a,
            D: !0
        }) : c = {
            C: a,
            D: 2
        };
        const {C: f, D: g} = c;
        return !0 !== g ? {
            C: a,
            D: g
        } : d.parentElement ? {
            C: f,
            D: g
        } : {
            C: a,
            D: g
        }
    }
      , vm = (a,b,c,d,e)=>{
        const {C: f, D: g} = Zi(247, ()=>sm(a, b, c, d, e));
        var h = !0 === g;
        const k = L(d.style.width)
          , m = L(d.style.height)
          , {Y: l, W: q, oa: w, La: v} = tm(f, b, c, d, e, h);
        h = um(b, w);
        var x;
        const z = (x = bi(d, c, "marginLeft", L)) ? x + "px" : ""
          , Ca = (x = bi(d, c, "marginRight", L)) ? x + "px" : "";
        x = bi(d, c, "zIndex") || "";
        return new dm(h,l,w,null,v,g,q,z,Ca,m,k,x)
    }
      , rm = a=>"auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
      , tm = (a,b,c,d,e,f)=>{
        b = "auto" == b ? .25 >= a / Math.min(1200, Q(c).clientWidth) ? 4 : 3 : Uh(b);
        let g;
        var h = !1;
        let k = !1;
        var m = 488 > Q(c).clientWidth;
        if (m) {
            g = Ph(d, c);
            var l = di(d, c);
            h = !l && g;
            k = l && g
        }
        l = [ci(a), Wl(b)];
        l.push(fi(m, c, d, k));
        null != e.google_max_responsive_height && l.push(gi(e.google_max_responsive_height));
        m = [x=>!x.hb];
        if (h || k)
            h = hi(c, d),
            m.push(gi(h));
        let q = qm(om(l), om(m));
        if (!q)
            throw new T("No slot size for availableWidth=" + a);
        const {Y: w, W: v} = Zi(248, ()=>{
            var x;
            a: if (f) {
                if (e.gfwrnh && (x = L(e.gfwrnh))) {
                    x = {
                        Y: new km(a,x),
                        W: !0
                    };
                    break a
                }
                x = a / 1.2;
                var z = Math;
                var Ca = z.min;
                if (e.google_resizing_allowed || "true" == e.google_full_width_responsive)
                    var V = Infinity;
                else {
                    V = d;
                    let ta = Infinity;
                    do {
                        var Da = bi(V, c, "height", L);
                        Da && (ta = Math.min(ta, Da));
                        (Da = bi(V, c, "maxHeight", L)) && (ta = Math.min(ta, Da))
                    } while ((V = V.parentElement) && "HTML" != V.tagName);
                    V = ta
                }
                z = Ca.call(z, x, V);
                if (z < .5 * x || 100 > z)
                    z = x;
                x = {
                    Y: new km(a,Math.floor(z)),
                    W: z < x ? 102 : !0
                }
            } else
                x = {
                    Y: q,
                    W: 100
                };
            return x
        }
        );
        return "in-article" === e.google_ad_layout && c.location && "#hffwroe2etoq" == c.location.hash ? {
            Y: wm(a, c, d, w, e),
            W: !1,
            oa: b,
            La: g
        } : {
            Y: w,
            W: v,
            oa: b,
            La: g
        }
    }
    ;
    const um = (a,b)=>{
        if ("auto" == a)
            return 1;
        switch (b) {
        case 2:
            return 2;
        case 1:
            return 3;
        case 4:
            return 4;
        case 3:
            return 5;
        case 6:
            return 6;
        case 5:
            return 7;
        case 7:
            return 8
        }
        throw Error("bad mask");
    }
      , wm = (a,b,c,d,e)=>{
        const f = e.google_ad_height || bi(c, b, "height", L);
        b = nm(a, b, c, f, e).size();
        return b.L * b.height() > a * d.height() ? new Y(b.L,b.height(),1) : d
    }
    ;
    var xm = (a,b,c,d,e)=>{
        var f;
        (f = Q(b).clientWidth) ? 488 > Q(b).clientWidth ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0,
        $h(b, c),
        f = {
            C: f,
            D: !0
        }) : f = {
            C: a,
            D: 5
        } : f = {
            C: a,
            D: 4
        } : f = {
            C: a,
            D: 10
        };
        const {C: g, D: h} = f;
        if (!0 !== h || a == g)
            return new dm(12,new ai(a,d),null,null,!0,h,100);
        const {Y: k, W: m, oa: l} = tm(g, "auto", b, c, e, !0);
        return new dm(1,k,l,2,!0,h,m)
    }
    ;
    var zm = (a,b)=>{
        const c = b.google_ad_format;
        if ("autorelaxed" == c) {
            a: {
                if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (const d of em)
                        if (null != b[d]) {
                            a = !0;
                            break a
                        }
                a = !1
            }
            return a ? 9 : 5
        }
        if (rm(c))
            return 1;
        if ("link" === c)
            return 4;
        if ("fluid" == c)
            return "in-article" !== b.google_ad_layout || !a.location || "#hffwroe2etop" != a.location.hash && "#hffwroe2etoq" != a.location.hash ? 8 : (ym(b),
            1);
        if (27 === b.google_reactive_ad_format)
            return ym(b),
            1
    }
      , Bm = (a,b,c,d,e=!1)=>{
        e = b.offsetWidth || (c.google_ad_resize || e) && bi(b, d, "width", L) || c.google_ad_width || 0;
        4 === a && (c.google_ad_format = "auto",
        a = 1);
        var f = (f = Am(a, e, b, c, d)) ? f : vm(e, c.google_ad_format, d, b, c);
        f.size().h(d, c, b);
        cm(f, e, c);
        1 != a && (a = f.size().height(),
        b.style.height = a + "px")
    }
    ;
    const Am = (a,b,c,d,e)=>{
        const f = d.google_ad_height || bi(c, e, "height", L);
        switch (a) {
        case 5:
            const {C: g, D: h} = Zi(247, ()=>sm(b, d.google_ad_format, e, c, d));
            !0 === h && b != g && $h(e, c);
            !0 === h ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1,
            d.gfwrnwer = h);
            return im(g, d);
        case 9:
            return jm(b, d);
        case 8:
            return nm(b, e, c, f, d);
        case 10:
            return xm(b, e, c, f, d)
        }
    }
      , ym = a=>{
        a.google_ad_format = "auto";
        a.armr = 3
    }
    ;
    function Cm(a, b) {
        var c = ad(b);
        if (c) {
            c = Q(c).clientWidth;
            const d = dd(a, b) || {}
              , e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat)
                return -1;
            if ("ltr" === e && c)
                return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c)
                return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right,
                Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    }
    ;var Dm = {
        google_ad_modifications: !0,
        google_analytics_domain_name: !0,
        google_analytics_uacct: !0,
        google_pause_ad_requests: !0,
        google_user_agent_client_hint: !0
    }
      , Em = a=>(a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
      , Fm = a=>{
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"),
            (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1]))
                return a[1];
        return null
    }
      , Gm = a=>{
        switch (a) {
        case "true":
            return !0;
        case "false":
            return !1;
        case "null":
            return null;
        case "undefined":
            break;
        default:
            try {
                const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                if (b)
                    return b[1] || b[2] || "";
                if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                    const c = parseFloat(a);
                    return c === c ? c : void 0
                }
            } catch (b) {}
        }
    }
    ;
    function Hm(a) {
        if (a.google_ad_client)
            var b = String(a.google_ad_client);
        else {
            if (null == (b = X(a).head_tag_slot_vars?.google_ad_client ?? a.document.querySelector(".adsbygoogle[data-ad-client]")?.getAttribute("data-ad-client"))) {
                b: {
                    b = a.document.getElementsByTagName("script");
                    a = a.navigator && a.navigator.userAgent || "";
                    a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !Jd() ? Em : Fm;
                    for (var c = b.length - 1; 0 <= c; c--) {
                        var d = b[c];
                        if (!d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0,
                        d = a(d))) {
                            b = d;
                            break b
                        }
                    }
                    b = null
                }
                if (b) {
                    a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                    for (c = {}; d = a.exec(b); )
                        c[d[1]] = Gm(d[2]);
                    b = c;
                    b = b.google_ad_client ? b.google_ad_client : ""
                } else
                    b = ""
            }
            b = b ?? ""
        }
        return b
    }
    ;async function Im(a, b) {
        var c = 10;
        return 0 >= c ? Promise.reject() : b() ? Promise.resolve() : new Promise((d,e)=>{
            const f = a.setInterval(()=>{
                --c ? b() && (a.clearInterval(f),
                d()) : (a.clearInterval(f),
                e())
            }
            , 200)
        }
        )
    }
    ;function Jm(a) {
        const b = a.g.pc;
        return null !== b && 0 !== b ? b : a.g.pc = td(a.m)
    }
    function Km(a) {
        const b = a.g.wpc;
        return null !== b && "" !== b ? b : a.g.wpc = Hm(a.m)
    }
    function Lm(a, b) {
        var c = new Pe;
        var d = Jm(a);
        c = A(c, 1, d, 0);
        d = Km(a);
        c = A(c, 2, xb(d), "");
        c = A(c, 3, a.g.sd, 0);
        return A(c, 7, Math.round(b || a.m.performance.now()), 0)
    }
    async function Mm(a) {
        await Im(a.m, ()=>!(!Jm(a) || !Km(a)))
    }
    function Nm(a) {
        var b = N(Om);
        b.j && Zi(1178, ()=>{
            const c = b.l;
            a(c);
            b.g.psi = c.toJSON()
        }
        )
    }
    async function Pm(a, b) {
        if (a.j && !a.g.le.includes(1)) {
            a.g.le.push(1);
            var c = a.m.performance.now();
            await Mm(a);
            b = Ge(He(Je(new Ke, b), Ee(De(new Fe, Q(a.m).scrollWidth), Q(a.m).scrollHeight)), Ee(De(new Fe, Q(a.m).clientWidth), Q(a.m).clientHeight));
            var d = new Me;
            S(lh) ? (A(b, 4, xb(a.i), ""),
            A(d, 1, xb(a.i), "")) : (A(b, 4, xb(a.m?.document?.URL), ""),
            A(d, 1, xb(a.m?.document?.URL), ""));
            var e = Oh(a.m);
            0 !== e && Ie(b, Be(new Ce, e));
            kf(a.h, Ne(Lm(a, c), b));
            xf(a.h, a.m, ()=>{
                try {
                    if (null != a.g?.psi) {
                        var f = oc(Le, lc(a.g.psi));
                        Vb(d, 2, f)
                    }
                } catch {}
                f = a.h;
                var g = Lm(a);
                g = Wb(g, 8, Oe, d);
                kf(f, g)
            }
            )
        }
    }
    async function Qm(a, b, c) {
        if (a.j && c.length && !a.g.lgdp.includes(Number(b))) {
            a.g.lgdp.push(Number(b));
            var d = a.m.performance.now();
            await Mm(a);
            var e = a.h;
            a = Lm(a, d);
            d = new Ae;
            b = A(d, 1, t(b), 0);
            c = Kb(b, 2, c);
            c = Wb(a, 9, Oe, c);
            kf(e, c)
        }
    }
    var Om = class {
        constructor(a) {
            this.m = Fd() || window;
            this.h = a ?? new zf(100,100,!0);
            this.g = Fj(Aj(), 33, ()=>{
                const b = N(Hh).g(jh.g, jh.defaultValue);
                return {
                    sd: b,
                    ssp: 0 < b && hd() < 1 / b,
                    pc: null,
                    wpc: null,
                    cu: null,
                    le: [],
                    lgdp: [],
                    psi: null
                }
            }
            )
        }
        get j() {
            return this.g.ssp
        }
        get i() {
            return this.g.cu
        }
        set i(a) {
            this.g.cu = a
        }
        get l() {
            return null === this.g.psi ? new Le : oc(Le, lc(this.g.psi))
        }
    }
    ;
    function Rm() {
        var a = window;
        return "on" === n.google_adtest || "on" === n.google_adbreak_test || a.location.host.endsWith("h5games.usercontent.goog") ? a.document.querySelector('meta[name="h5-games-eids"]')?.getAttribute("content")?.split(",").map(b=>Math.floor(Number(b))).filter(b=>!isNaN(b) && 0 < b) || [] : []
    }
    ;function Sm(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }
    function Tm(a) {
        var b = M.document;
        if (b.currentScript)
            return Sm(b.currentScript, a);
        for (const c of b.scripts)
            if (0 === Sm(c, a))
                return 0;
        return 1
    }
    ;function Um(a, b) {
        return {
            [3]: {
                [55]: ()=>0 === a,
                [23]: c=>kl(M, Number(c)),
                [24]: c=>nl(Number(c)),
                [61]: ()=>G(b, 6),
                [63]: ()=>G(b, 6) || ".google.ch" === H(b, 8)
            },
            [4]: {},
            [5]: {
                [6]: ()=>H(b, 15)
            }
        }
    }
    ;function Vm(a=n) {
        return a.ggeac || (a.ggeac = {})
    }
    ;function Wm() {
        var a = N(Hh).j(Eh.g, Eh.defaultValue)
          , b = M.document;
        if (a.length && b.head)
            for (const d of a)
                if ((a = d) && b.head) {
                    var c = cd("META");
                    b.head.appendChild(c);
                    c.httpEquiv = "origin-trial";
                    c.content = a
                }
    }
    function Xm(a, b=document) {
        return !!b.featurePolicy?.features().includes(a)
    }
    function Ym(a, b=document) {
        return !!b.featurePolicy?.allowedFeatures().includes(a)
    }
    ;function Zm(a, b) {
        try {
            const d = a.split(".");
            a = n;
            let e = 0, f;
            for (; null != a && e < d.length; e++)
                f = a,
                a = a[d[e]],
                "function" === typeof a && (a = f[d[e]]());
            var c = a;
            if (typeof c === b)
                return c
        } catch {}
    }
    var $m = {
        [3]: {
            [8]: a=>{
                try {
                    return null != ba(a)
                } catch {}
            }
            ,
            [9]: a=>{
                try {
                    var b = ba(a)
                } catch {
                    return
                }
                if (a = "function" === typeof b)
                    b = b && b.toString && b.toString(),
                    a = "string" === typeof b && -1 != b.indexOf("[native code]");
                return a
            }
            ,
            [10]: ()=>window === window.top,
            [6]: a=>Sa(N(cg).g(), Number(a)),
            [27]: a=>{
                a = Zm(a, "boolean");
                return void 0 !== a ? a : void 0
            }
            ,
            [60]: a=>{
                try {
                    return !!n.document.querySelector(a)
                } catch {}
            }
            ,
            [69]: a=>Xm(a, n.document),
            [70]: a=>Ym(a, n.document)
        },
        [4]: {
            [3]: ()=>od(),
            [6]: a=>{
                a = Zm(a, "number");
                return void 0 !== a ? a : void 0
            }
        },
        [5]: {
            [2]: ()=>window.location.href,
            [3]: ()=>{
                try {
                    return window.top.location.hash
                } catch {
                    return ""
                }
            }
            ,
            [4]: a=>{
                a = Zm(a, "string");
                return void 0 !== a ? a : void 0
            }
        }
    };
    const an = [12, 13, 20];
    function bn(a, b, c, d) {
        const e = N(Ef).G;
        if (!ue(B(b, ne, 3), e))
            return null;
        var f = C(b, Uk, 2)
          , g = I(b, 6);
        if (g) {
            Mb(d, 1, Ve, t(g));
            f = e[4];
            switch (c) {
            case 2:
                var h = f[8];
                break;
            case 1:
                h = f[7]
            }
            c = void 0;
            if (h)
                try {
                    c = h(g),
                    A(d, 3, c, 0)
                } catch (k) {}
            return (b = cn(b, c)) ? dn(a, [b], 1) : null
        }
        if (g = I(b, 10)) {
            Mb(d, 2, Ve, t(g));
            h = null;
            switch (c) {
            case 1:
                h = e[4][9];
                break;
            case 2:
                h = e[4][10];
                break;
            default:
                return null
            }
            c = h ? h(String(g)) : void 0;
            if (void 0 === c && 1 === I(b, 11))
                return null;
            void 0 !== c && A(d, 3, c, 0);
            return (b = cn(b, c)) ? dn(a, [b], 1) : null
        }
        d = e ? Na(f, k=>ue(B(k, ne, 3), e)) : f;
        if (!d.length)
            return null;
        c = d.length * (Yb(b, 1) ?? 0);
        return (b = I(b, 4)) ? en(a, b, c, d) : dn(a, d, c / 1E3)
    }
    function fn(a, b, c) {
        a.g[c] || (a.g[c] = []);
        a = a.g[c];
        Sa(a, b) || a.push(b)
    }
    function gn(a, b, c) {
        const d = []
          , e = hn(a.j, b);
        var f;
        if (f = 9 !== b)
            a.l[b] ? f = !0 : (a.l[b] = !0,
            f = !1);
        if (f)
            return Bf(a.I, b, c, d, [], 4),
            d;
        if (!e.length)
            return Bf(a.I, b, c, d, [], 3),
            d;
        const g = Sa(an, b)
          , h = [];
        Ma(e, k=>{
            var m = new Ue
              , l = bn(a, k, c, m);
            if (l) {
                0 !== Pb(m, Ve) && h.push(m);
                m = l.getId();
                d.push(m);
                fn(a, m, g ? 4 : c);
                if (0 !== I(k, 13)) {
                    var q = a.i[String(I(k, 13))] || void 0;
                    if (void 0 !== q && q !== m) {
                        q = a.I;
                        var w = a.i[String(I(k, 13))];
                        k = I(k, 13);
                        if (q.i) {
                            var v = new Qe;
                            w = u(v, 1, w);
                            w = u(w, 2, m);
                            k = u(w, 3, t(k));
                            w = new gf;
                            k = Wb(w, 8, ff, k);
                            hf(q.h, Af(q, k))
                        }
                    } else
                        a.i[String(I(k, 13))] = m
                }
                (l = C(l, xe, 2)) && (g ? Uf(l, Wf(), a.I, m) : Uf(l, [c], a.I, m))
            }
        }
        );
        Bf(a.I, b, c, d, h, 1);
        return d
    }
    function jn(a, b) {
        a.j.push(...Na(Oa(b, c=>new Wk(c)), c=>!Sa(an, I(c, 1))))
    }
    function dn(a, b, c) {
        const d = a.h
          , e = Qa(b, f=>!!d[f.getId()]);
        return e ? e : a.sa ? null : ed(b, c)
    }
    function en(a, b, c, d) {
        const e = null != a.la[b] ? a.la[b] : 1E3;
        if (0 >= e)
            return null;
        d = dn(a, d, c / e);
        a.la[b] = d ? 0 : e - c;
        return d
    }
    function kn(a, b) {
        O(1, c=>{
            a.h[c] = !0
        }
        , b);
        O(2, (c,d)=>gn(a, c, d), b);
        O(3, c=>(a.g[c] || []).concat(a.g[4]), b);
        O(12, c=>void jn(a, c), b);
        O(16, (c,d)=>void fn(a, c, d), b)
    }
    var ln = class {
        constructor(a, b, c, {sa: d=!1, Yb: e=[], la: f={}}={}) {
            this.I = c;
            this.j = a.slice();
            this.l = {};
            this.sa = d;
            this.la = f;
            this.g = {
                [b]: [],
                [4]: []
            };
            this.h = {};
            this.i = {};
            (a = $d()) && Ma(a.split(",") || [], g=>{
                (g = Number(g)) && (this.h[g] = !0)
            }
            );
            Ma(e, g=>{
                this.h[g] = !0
            }
            )
        }
    }
    ;
    function hn(a, b) {
        return (a = Qa(a, c=>I(c, 1) === b)) && C(a, Vk, 2) || []
    }
    function cn(a, b) {
        var c = C(a, Uk, 2)
          , d = c.length
          , e = Yb(a, 1) ?? 0;
        a = Yb(a, 8) ?? 0;
        switch (c[0].getId()) {
        case 44793253:
            e = 14;
            break;
        case 44793254:
            e = 14;
            break;
        case 44793255:
            e = 139;
            break;
        case 44793256:
            e = 14;
            break;
        case 44793257:
            e = 139;
            break;
        case 44792405:
            e = 139;
            break;
        default:
            e *= d
        }
        b = void 0 !== b ? b : Math.floor(1E3 * hd());
        if (b < a || b - a >= e)
            return null;
        c = c[(b - a) % d];
        d = N(Ef).G;
        return !c || d && !ue(B(c, ne, 3), d) ? null : c
    }
    ;function mn(a, b) {
        a.g = Yf(14, b, ()=>{}
        )
    }
    class nn {
        constructor() {
            this.g = ()=>{}
        }
    }
    function on(a) {
        N(nn).g(a)
    }
    ;function pn({ab: a, G: b, Ya: c, Va: d=Vm(), Wa: e=0, I: f=new Df(B(a, Xk, 5)?.g() ?? 0,B(a, Xk, 5)?.h() ?? 0,B(a, Xk, 5)?.i() ?? !1)}) {
        d.hasOwnProperty("init-done") ? (Yf(12, d, ()=>{}
        )(Oa(C(a, Wk, 2), g=>g.toJSON())),
        Yf(13, d, ()=>{}
        )(Oa(C(a, xe, 1), g=>g.toJSON()), e),
        b && Yf(14, d, ()=>{}
        )(b),
        qn(e, d)) : (kn(new ln(C(a, Wk, 2),e,f,c), d),
        Zf(d),
        $f(d),
        ag(d),
        qn(e, d),
        Uf(C(a, xe, 1), [e], f, void 0, !0),
        Ff = Ff || !(!c || !c.gb),
        on($m),
        b && on(b))
    }
    function qn(a, b=Vm()) {
        bg(N(cg), b, a);
        rn(b, a);
        mn(N(nn), b);
        N(Hh).l()
    }
    function rn(a, b) {
        const c = N(Hh);
        c.h = (d,e)=>Yf(5, a, ()=>!1)(d, e, b);
        c.g = (d,e)=>Yf(6, a, ()=>0)(d, e, b);
        c.i = (d,e)=>Yf(7, a, ()=>"")(d, e, b);
        c.j = (d,e)=>Yf(8, a, ()=>[])(d, e, b);
        c.l = ()=>{
            Yf(15, a, ()=>{}
            )(b)
        }
    }
    ;function sn(a=hd()) {
        return b=>id(`${a}.${b}`) % 1E3
    }
    ;function tn(a, b) {
        b = {
            [0]: sn(td(b).toString())
        };
        b = N(cg).j(a, b);
        eg.aa(1085, Qm(N(Om), a, b))
    }
    var un = (a,b,c)=>{
        var d = X(a);
        if (d.plle)
            qn(1, Vm(a));
        else {
            d.plle = !0;
            d = B(b, Yk, 12);
            var e = G(b, 9);
            pn({
                ab: d,
                G: Um(c, b),
                Ya: {
                    sa: e && !!a.google_disable_experiments,
                    gb: e
                },
                Va: Vm(a),
                Wa: 1
            });
            if (c = H(b, 15))
                c = Number(c),
                N(cg).i(c);
            for (const f of Jb(b, 19, vb))
                b = f,
                N(cg).h(b);
            tn(12, a);
            tn(10, a);
            a = ad(a) || a;
            mj(a.location, "google_mc_lab") && N(cg).h(44738307);
            mj(a.location, "google_auto_storify_swipeable") && N(cg).h(44773747);
            mj(a.location, "google_auto_storify_scrollable") && N(cg).h(44773746)
        }
    }
    ;
    function vn({qa: a, ua: b}) {
        return a || ("dev" === b ? "dev" : "")
    }
    ;function wn(a) {
        U.va(b=>{
            b.shv = String(a);
            b.mjsv = vn({
                qa: "m202306220101",
                ua: a
            });
            const c = N(cg).g();
            var d = X(n);
            d.eids || (d.eids = []);
            d = d.eids;
            const e = Rm();
            b.eid = c.concat(d).concat(e).join(",")
        }
        )
    }
    function xn(a) {
        wn(H(a, 2));
        a = G(a, 6);
        pc(al, me);
        al = a
    }
    ;var yn = "undefined" === typeof sttc ? void 0 : sttc;
    function zn(a) {
        var b = U;
        try {
            return pc(a, le),
            new $k(JSON.parse(a))
        } catch (c) {
            b.H(838, c instanceof Error ? c : Error(String(c)), void 0, d=>{
                d.jspb = String(a)
            }
            )
        }
        return new $k
    }
    ;function An(a, b) {
        return null == b ? `&${a}=null` : `&${a}=${Math.floor(b)}`
    }
    function Bn(a, b) {
        return `&${a}=${b.toFixed(3)}`
    }
    function Cn() {
        const a = new Set
          , b = oj();
        try {
            if (!b)
                return a;
            const c = b.pubads();
            for (const d of c.getSlots())
                a.add(d.getSlotId().getDomId())
        } catch {}
        return a
    }
    function Dn(a) {
        a = a.id;
        return null != a && (Cn().has(a) || a.startsWith("google_ads_iframe_") || a.startsWith("aswift"))
    }
    function En(a, b, c) {
        if (!a.sources)
            return !1;
        switch (Fn(a)) {
        case 2:
            const d = Gn(a);
            if (d)
                return c.some(f=>Hn(d, f));
            break;
        case 1:
            const e = In(a);
            if (e)
                return b.some(f=>Hn(e, f))
        }
        return !1
    }
    function Fn(a) {
        if (!a.sources)
            return 0;
        a = a.sources.filter(b=>b.previousRect && b.currentRect);
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top)
                return 2;
            if (a.previousRect.top > a.currentRect.top)
                return 1
        }
        return 0
    }
    function In(a) {
        return Jn(a, b=>b.currentRect)
    }
    function Gn(a) {
        return Jn(a, b=>b.previousRect)
    }
    function Jn(a, b) {
        return a.sources.reduce((c,d)=>{
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }
        , null)
    }
    function Hn(a, b) {
        const c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }
    function Kn() {
        const a = Array.from(document.getElementsByTagName("iframe")).filter(Dn)
          , b = [...Cn()].map(c=>document.getElementById(c)).filter(c=>null !== c);
        Ln = window.scrollX;
        Mn = window.scrollY;
        return Nn = [...a, ...b].map(c=>c.getBoundingClientRect())
    }
    function On() {
        var a = new Pn;
        if (S(Fh)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = ["layout-shift", "largest-contentful-paint", "first-input", "longtask"];
                for (const c of b)
                    Qn(a).observe({
                        type: c,
                        buffered: !0
                    });
                Rn(a)
            }
        }
    }
    function Qn(a) {
        a.I || (a.I = new PerformanceObserver(oi(640, b=>{
            const c = Ln !== window.scrollX || Mn !== window.scrollY ? [] : Nn
              , d = Kn();
            for (const h of b.getEntries())
                switch (h.entryType) {
                case "layout-shift":
                    b = a;
                    var e = h
                      , f = c
                      , g = d;
                    if (!e.hadRecentInput) {
                        b.B += Number(e.value);
                        Number(e.value) > b.J && (b.J = Number(e.value));
                        b.P += 1;
                        if (f = En(e, f, g))
                            b.l += e.value,
                            b.Ba++;
                        if (5E3 < e.startTime - b.Aa || 1E3 < e.startTime - b.Da)
                            b.Aa = e.startTime,
                            b.h = 0,
                            b.j = 0;
                        b.Da = e.startTime;
                        b.h += e.value;
                        f && (b.j += e.value);
                        b.h > b.Z && (b.Z = b.h,
                        b.Ga = b.j,
                        b.Fa = e.startTime + e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    b = h;
                    a.za = Math.floor(b.renderTime || b.loadTime);
                    a.ya = b.size;
                    break;
                case "first-input":
                    b = h;
                    a.wa = Number((b.processingStart - b.startTime).toFixed(3));
                    a.xa = !0;
                    break;
                case "longtask":
                    b = Math.max(0, h.duration - 50),
                    a.v += b,
                    a.F = Math.max(a.F, b),
                    a.R += 1
                }
        }
        )));
        return a.I
    }
    function Rn(a) {
        const b = oi(641, ()=>{
            var d = document;
            2 === (d.prerendering ? 3 : {
                visible: 1,
                hidden: 2,
                prerender: 3,
                preview: 4,
                unloaded: 5
            }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && Sn(a)
        }
        )
          , c = oi(641, ()=>void Sn(a));
        document.addEventListener("visibilitychange", b);
        document.addEventListener("pagehide", c);
        a.ga = ()=>{
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("pagehide", c);
            Qn(a).disconnect()
        }
    }
    function Sn(a) {
        if (!a.Ca) {
            a.Ca = !0;
            Qn(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += Bn("cls", a.B),
            b += Bn("mls", a.J),
            b += An("nls", a.P),
            window.LayoutShiftAttribution && (b += Bn("cas", a.l),
            b += An("nas", a.Ba),
            b += Bn("was", a.Ga)),
            b += Bn("wls", a.Z),
            b += Bn("tls", a.Fa));
            window.LargestContentfulPaint && (b += An("lcp", a.za),
            b += An("lcps", a.ya));
            window.PerformanceEventTiming && a.xa && (b += An("fid", a.wa));
            window.PerformanceLongTaskTiming && (b += An("cbt", a.v),
            b += An("mbt", a.F),
            b += An("nlt", a.R));
            let d = 0;
            for (var c of document.getElementsByTagName("iframe"))
                Dn(c) && d++;
            b += An("nif", d);
            b += An("ifi", Id(window));
            c = N(cg).g();
            b += `&${"eid"}=${encodeURIComponent(c.join())}`;
            b += `&${"top"}=${n === n.top ? 1 : 0}`;
            b += a.Ea ? `&${"qqid"}=${encodeURIComponent(a.Ea)}` : An("pvsid", td(n));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            of(a)
        }
    }
    var Pn = class extends nf {
        constructor() {
            super();
            this.j = this.h = this.P = this.J = this.B = 0;
            this.Da = this.Aa = Number.NEGATIVE_INFINITY;
            this.wa = this.ya = this.za = this.Ba = this.Ga = this.l = this.Fa = this.Z = 0;
            this.xa = !1;
            this.R = this.F = this.v = 0;
            this.I = null;
            this.Ca = !1;
            this.ga = ()=>{}
            ;
            const a = document.querySelector("[data-google-query-id]");
            this.Ea = a ? a.getAttribute("data-google-query-id") : null
        }
        g() {
            super.g();
            this.ga()
        }
    }
    , Ln, Mn, Nn = [];
    var Tn = class extends J {
        constructor() {
            super()
        }
        getVersion() {
            return H(this, 2)
        }
    }
    ;
    function Un(a, b) {
        return u(a, 2, xb(b))
    }
    function Vn(a, b) {
        return u(a, 3, xb(b))
    }
    function Wn(a, b) {
        return u(a, 4, xb(b))
    }
    function Xn(a, b) {
        return u(a, 5, xb(b))
    }
    function Yn(a, b) {
        return u(a, 9, xb(b))
    }
    function Zn(a, b) {
        return Xb(a, 10, b)
    }
    function $n(a, b) {
        return Zb(a, 11, b)
    }
    function ao(a, b) {
        return u(a, 1, xb(b))
    }
    function bo(a, b) {
        return Zb(a, 7, b)
    }
    var co = class extends J {
        constructor() {
            super()
        }
    }
    ;
    co.u = [10, 6];
    const eo = "platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");
    function fo() {
        if ("function" !== typeof M.navigator?.userAgentData?.getHighEntropyValues)
            return null;
        const a = M.google_tag_data ?? (M.google_tag_data = {});
        if (a.uach_promise)
            return a.uach_promise;
        const b = M.navigator.userAgentData.getHighEntropyValues(eo).then(c=>{
            a.uach ?? (a.uach = c);
            return c
        }
        );
        return a.uach_promise = b
    }
    function go(a) {
        return $n(Zn(Xn(Un(ao(Wn(bo(Yn(Vn(new co, a.architecture || ""), a.bitness || ""), a.mobile || !1), a.model || ""), a.platform || ""), a.platformVersion || ""), a.uaFullVersion || ""), a.fullVersionList?.map(b=>{
            var c = new Tn;
            c = u(c, 1, xb(b.brand));
            return u(c, 2, xb(b.version))
        }
        ) || []), a.wow64 || !1)
    }
    function ho() {
        return fo()?.then(a=>go(a)) ?? null
    }
    ;function io(a, b) {
        b.google_ad_host || (a = gl(a)) && (b.google_ad_host = a)
    }
    function jo(a, b, c="") {
        M.google_sa_impl && !M.document.getElementById("google_shimpl") && (delete M.google_sa_queue,
        delete M.google_sa_impl);
        M.google_sa_queue || (M.google_sa_queue = [],
        M.google_process_slots = U.na(215, ()=>ko(M.google_sa_queue)),
        a = lo(c, a, b),
        bd(M.document, a).id = "google_shimpl")
    }
    function ko(a) {
        const b = a.shift();
        "function" === typeof b && U.ea(216, b);
        a.length && n.setTimeout(U.na(215, ()=>ko(a)), 0)
    }
    function mo(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }
    function lo(a, b, c) {
        b = G(c, 4) ? b.pb : b.qb;
        const d = {};
        a: {
            if (G(c, 4)) {
                if (a = a || Hm(M)) {
                    a = {
                        client: a,
                        plah: M.location.host
                    };
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            a = {}
        }
        no(a, d);
        no(Ih() ? {
            bust: Ih()
        } : {}, d);
        return Kc(b, d)
    }
    function no(a, b) {
        K(a, (c,d)=>{
            void 0 === b[d] && (b[d] = c)
        }
        )
    }
    function oo(a) {
        a: {
            var b = [n.top];
            var c = [];
            let e = 0, f;
            for (; f = b[e++]; ) {
                c.push(f);
                try {
                    if (f.frames)
                        for (let g = 0; g < f.frames.length && 1024 > b.length; ++g)
                            b.push(f.frames[g])
                } catch {}
            }
            b = c;
            for (c = 0; c < b.length; c++)
                try {
                    var d = b[c].frames.google_esf;
                    if (d) {
                        Bd = d;
                        break a
                    }
                } catch (g) {}
            Bd = null
        }
        if (Bd)
            return null;
        d = cd("IFRAME");
        d.id = "google_esf";
        d.name = "google_esf";
        d.src = Mc(a.wb).toString();
        d.style.display = "none";
        return d
    }
    function po(a, b, c, d, e) {
        const f = e.bb;
        qo(a, c, b);
        c = pa;
        const g = (new Date).getTime();
        b.google_lrv = vn({
            qa: "m202306220101",
            ua: H(d, 2)
        });
        b.google_async_iframe_id = f;
        b.google_start_time = c;
        b.google_bpp = g > c ? g - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[f] = b;
        d = a.document.getElementById(f + "_host") ? h=>h() : h=>window.setTimeout(h, 0);
        mo(a, ()=>{
            var {vb: h} = e;
            if (!h || !h.isConnected)
                if (h = a.document.getElementById(String(b.google_async_iframe_id) + "_host"),
                null == h)
                    throw Error("no_div");
            (h = a.google_sa_impl({
                pubWin: a,
                vars: b,
                innerInsElement: h
            })) && U.aa(911, h)
        }
        , d)
    }
    function qo(a, b, c) {
        var d = c.google_ad_output
          , e = c.google_ad_format
          , f = c.google_ad_width || 0
          , g = c.google_ad_height || 0;
        e || "html" !== d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !Ul[c.google_ad_width + "x" + c.google_ad_height] && "aa" === c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width, c.google_orig_ad_height || c.google_ad_height];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode,
            ++f)
                9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = id(e.join(":")).toString();
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "";
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        const h = b.parentElement.childNodes;
                        let k = 0;
                        for (let m = 0; m < h.length; ++m) {
                            const l = h[m];
                            if (l.nodeName && l.nodeName.toString().toLowerCase() === g) {
                                if (b === l) {
                                    g = "." + k;
                                    break a
                                }
                                ++k
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            b = e.join() + ":";
            e = [];
            if (a)
                try {
                    let h = a.parent;
                    for (d = 0; h && h !== a && 25 > d; ++d) {
                        const k = h.frames;
                        for (f = 0; f < k.length; ++f)
                            if (a === k[f]) {
                                e.push(f);
                                break
                            }
                        a = h;
                        h = a.parent
                    }
                } catch (h) {}
            c.google_ad_dom_fingerprint = id(b + e.join()).toString()
        }
    }
    function ro() {
        var a = ad(n);
        a && (a = Kg(a),
        a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }
    function so() {
        const a = ho();
        null != a && a.then(b=>{
            a: {
                pb = !0;
                try {
                    var c = JSON.stringify(b.toJSON(), dc);
                    break a
                } finally {
                    pb = !1
                }
                c = void 0
            }
            M.google_user_agent_client_hint = c
        }
        );
        Wm()
    }
    ;function to(a, b) {
        switch (a) {
        case "google_reactive_ad_format":
            return a = parseInt(b, 10),
            isNaN(a) ? 0 : a;
        case "google_allow_expandable_ads":
            return /^true$/.test(b);
        default:
            return b
        }
    }
    function uo(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || ""
              , d = Yc(c, "client");
            d && (b.google_ad_client = to("google_ad_client", d));
            (c = Yc(c, "host")) && (b.google_ad_host = to("google_ad_host", c))
        }
        a = a.attributes;
        c = a.length;
        for (d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                const f = qa(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = to(f, e.value),
                null !== e && (b[f] = e))
            }
        }
    }
    function vo(a) {
        if (a = Ed(a))
            switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
            }
        else
            return 12
    }
    function wo(a, b, c, d) {
        uo(a, b);
        if (c.document && c.document.body && !zm(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10)
              , f = Cm(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!Ul[e + "x" + g];
                var h = f;
                if (e) {
                    const k = Vl(f, g);
                    if (k)
                        h = k,
                        b.google_ad_format = k + "x" + g + "_0ads_al";
                    else
                        throw new T("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null,
                b.google_override_format = !0);
                f = h;
                a.style.width = `${f}px`;
                g = vm(f, "auto", c, a, b);
                h = f;
                g.size().h(c, b, a);
                cm(g, h, b);
                g = g.size();
                b.google_responsive_formats = null;
                g.L > f && !e && (b.google_ad_width = g.L,
                a.style.width = `${g.L}px`)
            }
        }
        (e = a.offsetWidth) || (e = bi(a, c, "width", L));
        e = e || b.google_ad_width || 0;
        if (488 > Q(c).clientWidth) {
            f = ad(c) || c;
            g = b.google_ad_client;
            if (d = mj(f.location, "google_responsive_slot_preview") || S(vh) || kl(f, 1, g, d))
                b: if (b.google_reactive_ad_format || b.google_ad_resize || zm(c, b) || Rh(a, b))
                    d = !1;
                else {
                    for (d = a; d; d = d.parentElement) {
                        f = dd(d, c);
                        if (!f) {
                            b.gfwrnwer = 18;
                            d = !1;
                            break b
                        }
                        if (!Sa(["static", "relative"], f.position)) {
                            b.gfwrnwer = 17;
                            d = !1;
                            break b
                        }
                    }
                    d = Vh(c, a, e, .3, b);
                    !0 !== d ? (b.gfwrnwer = d,
                    d = !1) : d = c === c.top ? !0 : !1
                }
            d ? (b.google_resizing_allowed = !0,
            b.ovlp = !0,
            b.google_ad_format = "auto",
            b.iaaso = !0,
            b.armr = 1,
            d = !0) : d = !1
        } else
            d = !1;
        if (e = zm(c, b))
            Bm(e, a, b, c, d);
        else {
            if (Rh(a, b)) {
                if (d = dd(a, c))
                    a.style.width = d.width,
                    a.style.height = d.height,
                    Qh(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = vo(c)
            } else
                Qh(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? Bm(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format && (a = Wh(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b),
            !0 !== a ? (b.efwr = !1,
            b.gfwrnwer = a) : b.efwr = !0)
        }
    }
    ;function xo(a) {
        if (a.h)
            return a.h;
        a.F && a.F(a.j) ? a.h = a.j : a.h = nd(a.j, a.J);
        return a.h ?? null
    }
    var yo = class extends nf {
        constructor(a, b, c) {
            super();
            this.J = a;
            this.F = b;
            this.P = c;
            this.B = new Map;
            this.v = new Map;
            this.R = new Map;
            this.l = void 0;
            this.j = M
        }
        g() {
            delete this.h;
            this.B.clear();
            this.v.clear();
            this.R.clear();
            this.l && (Dc(this.j, "message", this.l),
            delete this.l);
            delete this.j;
            delete this.P;
            super.g()
        }
    }
    ;
    const zo = (a,b)=>{
        (0,
        a.__uspapi)("getUSPData", 1, (c,d)=>{
            b.K({
                consentData: c ?? void 0,
                Za: d ? void 0 : 2
            })
        }
        )
    }
      , Ao = {
        ib: a=>a.K,
        jb: (a,b)=>({
            __uspapiCall: {
                callId: b,
                command: "getUSPData",
                version: 1
            }
        }),
        lb: (a,b)=>{
            b = b.__uspapiReturn;
            a({
                consentData: b.returnValue ?? void 0,
                Za: b.success ? void 0 : 2
            })
        }
    };
    function Bo(a) {
        let b = {};
        "string" === typeof a.data ? b = JSON.parse(a.data) : b = a.data;
        return {
            payload: b,
            nb: b.__uspapiReturn.callId
        }
    }
    var Co = class extends nf {
        constructor() {
            super();
            this.caller = new yo("__uspapiLocator",a=>"function" === typeof a.__uspapi,Bo);
            this.caller.B.set("getDataWithCallback", zo);
            this.caller.v.set("getDataWithCallback", Ao)
        }
        g() {
            of(this.caller);
            super.g()
        }
    }
    ;
    var Do = tc(class extends J {
    }
    );
    const Eo = (a,b)=>{
        const c = {
            cb: d=>{
                d = Do(d);
                b.K({
                    consentData: d
                })
            }
        };
        b.spsp && (c.spsp = b.spsp);
        a = a.googlefc || (a.googlefc = {});
        a.__fci = a.__fci || [];
        a.__fci.push(b.command, c)
    }
      , Fo = {
        ib: a=>a.K,
        jb: (a,b)=>({
            __fciCall: {
                callId: b,
                command: a.command,
                spsp: a.spsp || void 0
            }
        }),
        lb: (a,b)=>{
            a({
                consentData: b
            })
        }
    };
    function Go(a) {
        a = Do(a.data.__fciReturn);
        return {
            payload: a,
            nb: Fb(a, 1) ?? 0
        }
    }
    var Ho = class extends nf {
        constructor() {
            super();
            this.h = this.j = !1;
            this.caller = new yo("googlefcPresent",void 0,Go);
            this.caller.B.set("getDataWithCallback", Eo);
            this.caller.v.set("getDataWithCallback", Fo)
        }
        g() {
            of(this.caller);
            super.g()
        }
    }
    ;
    var Io = a=>{
        Cc(window, "message", b=>{
            let c;
            try {
                c = JSON.parse(b.data)
            } catch (d) {
                return
            }
            !c || "sc-cnf" !== c.googMsgType || a(c, b)
        }
        )
    }
    ;
    let Jo = null;
    const Ko = []
      , Lo = new Map;
    let Mo = -1;
    function No(a) {
        return ji.test(a.className) && "done" !== a.dataset.adsbygoogleStatus
    }
    function Oo(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        Po(a, b, c)
    }
    function Po(a, b, c) {
        var d = window;
        d.google_spfd || (d.google_spfd = wo);
        var e = b.google_reactive_ads_config;
        e || wo(a, b, d, c);
        io(d, b);
        if (!Qo(a, b, d)) {
            e || (d.google_lpabyc = Th(a, d) + (bi(a, d, "height", L) || 0));
            if (e) {
                e = e.page_level_pubvars || {};
                if (X(M).page_contains_reactive_tag && !X(M).allow_second_reactive_tag) {
                    if (e.pltais) {
                        dl(!1);
                        return
                    }
                    throw new T("Only one 'enable_page_level_ads' allowed per page.");
                }
                X(M).page_contains_reactive_tag = !0;
                dl(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = Hd(d);
            K(Dm, (f,g)=>{
                b[g] = b[g] || d[g]
            }
            );
            "sd" !== b.google_loader_used && (b.google_loader_used = "aa");
            b.google_reactive_tag_first = 1 === (X(M).first_tag_on_page || 0);
            Zi(164, ()=>{
                var f = d.document;
                for (var g = void 0, h = 0; !g || f.getElementById(g + "_host"); )
                    g = "aswift_" + h++;
                f = g;
                g = Number(b.google_ad_width || 0);
                h = Number(b.google_ad_height || 0);
                const k = cd("DIV");
                k.id = f + "_host";
                const m = k.style;
                m.border = "none";
                m.height = `${h}px`;
                m.width = `${g}px`;
                m.margin = "0px";
                m.padding = "0px";
                m.position = "relative";
                m.visibility = "visible";
                m.backgroundColor = "transparent";
                k.style.display = "inline-block";
                a.appendChild(k);
                po(d, b, a, c, {
                    bb: f,
                    vb: k
                })
            }
            )
        }
    }
    function Qo(a, b, c) {
        var d = b.google_reactive_ads_config
          , e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className)
          , f = bl(c);
        if (f && f.Ha && "on" !== b.google_adtest && !e) {
            e = Th(a, c);
            const g = Q(c).clientHeight;
            e = 0 == g ? null : e / g;
            if (!f.pa || f.pa && (e || 0) >= f.pa)
                return a.className += " adsbygoogle-ablated-ad-slot",
                c = c.google_sv_map = c.google_sv_map || {},
                d = fa(a),
                b.google_element_uid = d,
                c[b.google_element_uid] = b,
                a.setAttribute("google_element_uid", String(d)),
                "slot" === f.tb && (null !== md(a.getAttribute("width")) && a.setAttribute("width", 0),
                null !== md(a.getAttribute("height")) && a.setAttribute("height", 0),
                a.style.width = "0px",
                a.style.height = "0px"),
                !0
        }
        if ((f = dd(a, c)) && "none" === f.display && !("on" === b.google_adtest || 0 < b.google_reactive_ad_format || d))
            return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")),
            !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format || !a ? !1 : (n.console && n.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + String(b.google_reactive_ad_format) + " is deprecated. Check out page-level ads at https://www.google.com/adsense"),
        !0)
    }
    function Ro(a) {
        var b = document.getElementsByTagName("INS");
        for (let d = 0, e = b[d]; d < b.length; e = b[++d]) {
            var c = e;
            if (No(c) && "reserved" !== c.dataset.adsbygoogleStatus && (!a || e.id === a))
                return e
        }
        return null
    }
    function So(a, b, c) {
        if (a && "shift"in a) {
            Nm(e=>{
                $b(Qb(e), 2) || (e = Qb(e),
                Lb(e, 2))
            }
            );
            for (var d = 20; 0 < a.length && 0 < d; ) {
                try {
                    To(a.shift(), b, c)
                } catch (e) {
                    setTimeout(()=>{
                        throw e;
                    }
                    )
                }
                --d
            }
        }
    }
    function Uo() {
        const a = cd("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        pd(a, {
            display: "none"
        });
        return a
    }
    function Vo(a, b) {
        const c = {}
          , d = wl(a.google_ad_client, b);
        K(Jg, (g,h)=>{
            !1 === a.enable_page_level_ads ? c[h] = !1 : a.hasOwnProperty(h) ? c[h] = a[h] : d.includes(g) && (c[h] = !1)
        }
        );
        ea(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        const e = Uo();
        ud.body.appendChild(e);
        const f = {
            google_reactive_ads_config: c,
            google_ad_client: a.google_ad_client
        };
        f.google_pause_ad_requests = !!X(M).pause_ad_requests;
        Oo(e, f, b);
        Nm(g=>{
            $b(Qb(g), 6) || (g = Qb(g),
            Lb(g, 6))
        }
        )
    }
    function Wo(a, b) {
        Kg(n).wasPlaTagProcessed = !0;
        const c = ()=>{
            Vo(a, b)
        }
          , d = n.document;
        if (d.body || "complete" === d.readyState || "interactive" === d.readyState)
            Vo(a, b);
        else {
            const e = Bc(U.na(191, c));
            Cc(d, "DOMContentLoaded", e);
            (new n.MutationObserver((f,g)=>{
                d.body && (e(),
                g.disconnect())
            }
            )).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }
    function To(a, b, c) {
        const d = {};
        Zi(165, ()=>Xo(a, d, b, c), e=>{
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        }
        )
    }
    function Yo(a) {
        delete a.google_checked_head;
        K(a, (b,c)=>{
            ii[c] || (delete a[c],
            b = c.replace("google", "data").replace(/_/g, "-"),
            n.console.warn(`AdSense head tag doesn't support ${b} attribute.`))
        }
        )
    }
    function Zo(a, b) {
        var c = M.document.querySelector('script[src*="/scripts/main.js"]:not([data-checked-head])') || M.document.querySelector('script[src*="/scripts/main.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = X(window);
            if (d.head_tag_slot_vars)
                $o(c);
            else {
                Nm(g=>{
                    g = Qb(g);
                    A(g, 7, ub(!0), !1)
                }
                );
                var e = {};
                uo(c, e);
                Yo(e);
                var f = Hc(e);
                d.head_tag_slot_vars = f;
                c = {
                    google_ad_client: e.google_ad_client,
                    enable_page_level_ads: e
                };
                M.adsbygoogle || (M.adsbygoogle = []);
                d = M.adsbygoogle;
                d.loaded ? d.push(c) : d.splice && d.splice(0, 0, c);
                e.google_adbreak_test || b.h()?.h() ? ap(f, a) : Io(()=>{
                    ap(f, a)
                }
                )
            }
        }
    }
    function $o(a) {
        const b = X(window).head_tag_slot_vars
          , c = a.getAttribute("src") || "";
        if ((a = Yc(c, "client") || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client)
            throw new T("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }
    function bp(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type)
                return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks)
                return 3
        }
        return 0
    }
    function Xo(a, b, c, d) {
        if (null == a)
            throw new T("push() called with no parameters.");
        Nm(f=>{
            $b(Qb(f), 3) || (f = Qb(f),
            Lb(f, 3))
        }
        );
        d.i() && cp(a, d.g().g(), H(d, 2));
        var e = bp(a);
        if (0 !== e)
            if (d = el(),
            d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(),
            d.adsbygoogle_execution_start_time = pa),
            null == Jo)
                dp(a),
                Ko.push(a);
            else if (3 === e) {
                const f = Jo;
                Zi(787, ()=>{
                    f.handleAdConfig(a)
                }
                )
            } else
                aj(730, Jo.handleAdBreak(a));
        else {
            pa = (new Date).getTime();
            jo(c, d, ep(a));
            fp();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" === typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new T("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e)
                Nm(f=>{
                    $b(Qb(f), 4) || (f = Qb(f),
                    Lb(f, 4))
                }
                ),
                gp(a, d);
            else if ((e = a.params) && K(e, (f,g)=>{
                b[g] = f
            }
            ),
            "js" === b.google_ad_output)
                console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = hp(a.element);
                uo(e, b);
                c = X(n).head_tag_slot_vars || {};
                K(c, (f,g)=>{
                    b.hasOwnProperty(g) || (b[g] = f)
                }
                );
                if (e.hasAttribute("data-require-head") && !X(n).head_tag_slot_vars)
                    throw new T("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client)
                    throw new T("Ad client is missing from the slot.");
                if (c = 0 === (X(M).first_tag_on_page || 0) && Pl(b))
                    Nm(f=>{
                        $b(Qb(f), 5) || (f = Qb(f),
                        Lb(f, 5))
                    }
                    ),
                    ip(c);
                0 === (X(M).first_tag_on_page || 0) && (X(M).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!X(M).pause_ad_requests;
                Oo(e, b, d)
            }
        }
    }
    let jp = !1;
    function cp(a, b, c) {
        jp || (jp = !0,
        a = ep(a) || Hm(M),
        $i("predictive_abg", {
            a_c: a,
            p_c: b.join(),
            b_v: c
        }, .01))
    }
    function ep(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }
    function fp() {
        if (S(qh)) {
            var a = bl(M);
            if (!(a = a && a.Ha)) {
                try {
                    var b = M.localStorage
                } catch (c) {
                    b = null
                }
                b = b ? Rk(b) : null;
                a = !(b && Qk(b) && b)
            }
            a || cl(M, 1)
        }
    }
    function ip(a) {
        vd(()=>{
            Kg(n).wasPlaTagProcessed || n.adsbygoogle && n.adsbygoogle.push(a)
        }
        )
    }
    function gp(a, b) {
        0 === (X(M).first_tag_on_page || 0) && (X(M).first_tag_on_page = 1);
        if (a.tag_partner) {
            var c = a.tag_partner;
            const d = X(n);
            d.tag_partners = d.tag_partners || [];
            d.tag_partners.push(c)
        }
        Sl(a, b);
        Wo(a, b)
    }
    function hp(a) {
        if (a) {
            if (!No(a) && (a.id ? a = Ro(a.id) : a = null,
            !a))
                throw new T("'element' has already been filled.");
            if (!("innerHTML"in a))
                throw new T("'element' is not a good DOM element.");
        } else if (a = Ro(),
        !a)
            throw new T("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }
    function kp() {
        var a = new Rj(M)
          , b = new Co;
        const c = new Ho;
        var d = M.__cmp ? 1 : 0;
        a = Oj(a) ? 1 : 0;
        b = xo(b.caller) ? 1 : 0;
        c.j || (c.h = !!xo(c.caller),
        c.j = !0);
        $i("cmpMet", {
            tcfv1: d,
            tcfv2: a,
            usp: b,
            fc: c.h ? 1 : 0,
            ptt: 9
        }, .001)
    }
    function lp(a) {
        Aj().S[Dj(26)] = !!Number(a)
    }
    function mp(a) {
        Number(a) ? X(M).pause_ad_requests = !0 : (X(M).pause_ad_requests = !1,
        a = ()=>{
            if (!X(M).pause_ad_requests) {
                var b = {};
                let c;
                "function" === typeof window.CustomEvent ? c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event",b) : (c = document.createEvent("CustomEvent"),
                c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail));
                M.dispatchEvent(c)
            }
        }
        ,
        n.setTimeout(a, 0),
        n.setTimeout(a, 1E3))
    }
    function np(a) {
        try {
            Object.defineProperty(a, "requestNonPersonalizedAds", {
                set: lp
            }),
            Object.defineProperty(a, "pauseAdRequests", {
                set: mp
            }),
            Object.defineProperty(a, "onload", {
                set: op
            })
        } catch {}
    }
    function op(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }
    function ap(a, b) {
        b = Ol(Kc(b.sb, Ih() ? {
            bust: Ih()
        } : {})).then(c=>{
            null == Jo && (c.init(a),
            Jo = c,
            pp(c))
        }
        );
        U.aa(723, b);
        b.finally(()=>{
            Ko.length = 0;
            $i("slotcar", {
                event: "api_ld",
                time: Date.now() - pa,
                time_pr: Date.now() - Mo
            })
        }
        )
    }
    function pp(a) {
        for (const [c,d] of Lo) {
            var b = c;
            const e = d;
            -1 !== e && (n.clearTimeout(e),
            Lo.delete(b))
        }
        for (b = 0; b < Ko.length; b++) {
            if (Lo.has(b))
                continue;
            const c = Ko[b]
              , d = bp(c);
            Zi(723, ()=>{
                if (3 === d)
                    a.handleAdConfig(c);
                else if (2 === d) {
                    var e = a.handleAdBreakBeforeReady(c);
                    U.aa(730, e)
                }
            }
            )
        }
    }
    function dp(a) {
        var b = Ko.length;
        if (2 === bp(a) && "preroll" === a.type && null != a.adBreakDone) {
            var c = a.adBreakDone;
            -1 === Mo && (Mo = Date.now());
            var d = n.setTimeout(()=>{
                try {
                    c({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }),
                    Lo.set(b, -1),
                    $i("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    })
                } catch (e) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", e instanceof Error ? e : Error(String(e)))
                }
            }
            , 1E3 * N(Hh).g(Dh.g, Dh.defaultValue));
            Lo.set(b, d)
        }
    }
    function qp() {
        var a = M.document
          , b = Gd`https://googleads.g.doubleclick.net`;
        const c = a.createElement("LINK");
        c.crossOrigin = "";
        a: {
            if (b instanceof Jc)
                c.href = Mc(b).toString();
            else {
                if (-1 === Zc.indexOf("preconnect"))
                    throw Error('TrustedResourceUrl href attribute required with rel="preconnect"');
                if (b instanceof Qc)
                    b = b instanceof Qc && b.constructor === Qc ? b.g : "type_error:SafeUrl";
                else {
                    c: {
                        try {
                            var d = new URL(b)
                        } catch (e) {
                            d = "https:";
                            break c
                        }
                        d = d.protocol
                    }
                    b = "javascript:" !== d ? b : void 0
                }
                if (void 0 === b)
                    break a;
                c.href = b
            }
            c.rel = "preconnect"
        }
        a.head.appendChild(c)
    }
    ;(function(a, b, c, d=()=>{}
    ) {
        U.Pa(bj);
        Zi(166, ()=>{
            const e = zn(b);
            xn(e);
            d();
            Dd(16, [1, e.toJSON()]);
            var f = Fd(Ed(M)) || M;
            const g = c(vn({
                qa: a,
                ua: H(e, 2)
            }), e);
            var h = null === M.document.currentScript ? 1 : Tm(g.ub);
            S(ih) && qp();
            ll(f, e);
            un(f, e, h);
            Nm(l=>{
                A(l, 1, (D(l, 1) ?? 0) + 1, 0);
                M.top === M && A(l, 2, (D(l, 2) ?? 0) + 1, 0);
                $b(Qb(l), 1) || (l = Qb(l),
                Lb(l, 1))
            }
            );
            aj(1086, Pm(N(Om), 0 === h));
            if (!Ea() || 0 <= ra(Ja(), 11)) {
                Yi(S(Gh));
                so();
                Bk();
                try {
                    On()
                } catch {}
                ro();
                Zo(g, e);
                f = window;
                h = f.adsbygoogle;
                if (!h || !h.loaded) {
                    $i("new_abg_tag", {
                        value: `${G(e, 16)}`,
                        host_v: `${G(e, 22)}`,
                        frequency: .01
                    }, .01);
                    kp();
                    var k = {
                        push: l=>{
                            To(l, g, e)
                        }
                        ,
                        loaded: !0
                    };
                    np(k);
                    if (h)
                        for (var m of ["requestNonPersonalizedAds", "pauseAdRequests"])
                            void 0 !== h[m] && (k[m] = h[m]);
                    So(h, g, e);
                    f.adsbygoogle = k;
                    h && (k.onload = h.onload);
                    S(mh) || (m = oo(g)) && document.documentElement.appendChild(m)
                }
            }
        }
        )
    }
    )("m202306220101", yn, function(a, b) {
        const c = 2012 < (D(b, 1) ?? 0) ? `_fy ${D(b, 1) ?? 0}` : "";
        var d = H(b, 3);
        const e = H(b, 2);
        b = Gd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library ${c}.js`;
        d = Gd`https://googleads.g.doubleclick.net/pagead/html/${e}/${d}/zrt_lookup.html`;
        return {
            sb: b,
            qb: Gd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl ${c}.js`,
            pb: Gd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_with_ama ${c}.js`,
            Zb: Gd`https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/show_ads_impl_instrumented ${c}.js`,
            wb: d,
            ub: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}
).call(this, "[2021,\"r20230627\",\"r20190131\",null,null,null,null,\".google.com.ph\",null,null,null,[[[1082,null,null,[1]],[null,1130,null,[null,100]],[1270,null,null,[]],[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[1247,null,null,[1]],[1252,null,null,[1]],[1240,null,null,[1]],[null,1224,null,[null,0.01]],[null,1159,null,[null,500]],[1122,null,null,[1]],[1207,null,null,[1]],[null,1263,null,[null,-1]],[null,1265,null,[null,-1]],[null,1264,null,[null,-1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1205,null,null,[1]],[1223,null,null,[1]],[null,null,null,[null,null,null,[\"44786015\",\"44786016\"]],null,1261],[1167,null,null,[1]],[1129,null,null,[1]],[null,1169,null,[null,61440]],[1171,null,null,[1]],[1276,null,null,[]],[1199,null,null,[1]],[1161,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[null,1168,null,[null,61440]],[1198,null,null,[1]],[1206,null,null,[1]],[1190,null,null,[1]],[null,1245,null,[null,3600]],[null,542281105,null,[null,-1]],[null,506864295,null,[null,300]],[null,508040914,null,[null,100]],[538121421,null,null,[1]],[522099048,null,null,[1]],[null,524139171,null,[null,0.1]],[501545959,null,null,[1]],[538425635,null,null,[1]],[537288587,null,null,[1]],[null,469675170,null,[null,30000]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[null,null,null,[null,null,null,[\"1\",\"2\"]],null,10003],[1086,null,null,[1]],[63682,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[10007,null,null,[1]],[10005,null,null,[1]],[1033,null,null,[1]],[10006,null,null,[1]],[null,null,null,[null,null,null,[\"A7CQXglZzTrThjGTBEn1rWTxHOEtkWivwzgea+NjyardrwlieSjVuyG44PkYgIPGs8Q9svD8sF3Yedn0BBBjXAkAAACFeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A3vKT9yxRPjmXN3DpIiz58f5JykcWHjUo\/W7hvmtjgh9jPpQgem9VbADiNovG8NkO6mRmk70Kex8\/KUqAYWVWAEAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"A4A26Ymj79UVY7C7JGUS4BG1s7MdcDokAQf\/RP0paks+RoTYbXHxceT\/5L4iKcsleFCngi75YfNRGW2+SpVv1ggAAACLeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjk1MTY3OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\",\"As0hBNJ8h++fNYlkq8cTye2qDLyom8NddByiVytXGGD0YVE+2CEuTCpqXMDxdhOMILKoaiaYifwEvCRlJ\/9GcQ8AAAB8eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\",\"AgRYsXo24ypxC89CJanC+JgEmraCCBebKl8ZmG7Tj5oJNx0cmH0NtNRZs3NB5ubhpbX\/bIt7l2zJOSyO64NGmwMAAACCeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiV2ViVmlld1hSZXF1ZXN0ZWRXaXRoRGVwcmVjYXRpb24iLCJleHBpcnkiOjE3MTk1MzI3OTksImlzU3ViZG9tYWluIjp0cnVlfQ==\"]],null,1934],[1957,null,null,[1]],[null,1972,null,[]],[485990406,null,null,[]]],[[12,[[40,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]],71],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]],null,61],[10,[[44769661],[44769662,[[1973,null,null,[1]]]]]]]],[13,[[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[200,[[44783616,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44791426,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]],null,77],[200,[[44790623,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]],[44791427,null,[4,null,70,null,null,null,null,[\"attribution-reporting\"]]]],null,77]]],[10,[[50,[[31067422],[31067423,[[null,1032,null,[]]]],[44776369],[44792510]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[31071258],[31071259]]],[1,[[31074771],[31074772,[[531007060,null,null,[1]],[531582260,null,null,[1]]]]]],[1000,[[31075623,[[null,null,14,[null,null,\"31075623\"]]],[6,null,null,null,6,null,\"31075623\"]],[31075624,[[null,null,14,[null,null,\"31075624\"]]],[6,null,null,null,6,null,\"31075624\"]]],[4,null,55],63],[100,[[31075625],[31075626,[[1269,null,null,[1]]]]]],[50,[[31075641],[31075642,[[1229,null,null,[1]]]],[31075643,[[1230,null,null,[1]]]],[31075644,[[1231,null,null,[1]]]],[31075645,[[1230,null,null,[1]],[1229,null,null,[1]],[1231,null,null,[1]]]]],null,72],[1000,[[31075664,[[null,null,14,[null,null,\"31075664\"]]],[6,null,null,null,6,null,\"31075664\"]],[31075665,[[null,null,14,[null,null,\"31075665\"]]],[6,null,null,null,6,null,\"31075665\"]]],[4,null,55],63],[1000,[[31075720,[[null,null,14,[null,null,\"31075720\"]]],[6,null,null,null,6,null,\"31075720\"]],[31075721,[[null,null,14,[null,null,\"31075721\"]]],[6,null,null,null,6,null,\"31075721\"]]],[4,null,55],63],[1000,[[31075735,[[null,null,14,[null,null,\"31075735\"]]],[6,null,null,null,6,null,\"31075735\"]],[31075736,[[null,null,14,[null,null,\"31075736\"]]],[6,null,null,null,6,null,\"31075736\"]]],[4,null,55],63],[100,[[31075757],[31075758,[[540827546,null,null,[1]]]]]],[1000,[[31075779,[[null,null,14,[null,null,\"31075779\"]]],[6,null,null,null,6,null,\"31075779\"]],[31075780,[[null,null,14,[null,null,\"31075780\"]]],[6,null,null,null,6,null,\"31075780\"]]],[4,null,55],63],[10,[[31075811],[31075812,[[540248731,null,null,[1]]]]]],[10,[[31075815],[31075816,[[538540803,null,null,[1]]]]]],[10,[[31075823],[31075824,[[529362570,null,null,[1]]]]]],[1000,[[31075831,[[null,null,14,[null,null,\"31075831\"]]],[6,null,null,null,6,null,\"31075831\"]],[31075832,[[null,null,14,[null,null,\"31075832\"]]],[6,null,null,null,6,null,\"31075832\"]]],[4,null,55],63],[1,[[42531513],[42531514,[[316,null,null,[1]]]]]],[1,[[42531644],[42531645,[[368,null,null,[1]]]],[42531646,[[369,null,null,[1]],[368,null,null,[1]]]]]],[50,[[42531705],[42531706]]],[1,[[42532242],[42532243,[[1256,null,null,[1]],[290,null,null,[1]]]]]],[1,[[42532262],[42532263,[[null,1263,null,[null,16]]]],[42532264,[[null,1263,null,[null,4294967296]]]],[42532265,[[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532266,[[null,1263,null,[null,4294967296]],[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532267,[[null,1263,null,[null,16]],[null,1265,null,[null,60]],[null,1264,null,[null,0.2]],[1266,null,null,[1]]]],[42532268,[[1266,null,null,[1]]]]]],[10,[[42532314],[42532315,[[1267,null,null,[1]]]],[42532316,[[1268,null,null,[1]]]],[42532317,[[1267,null,null,[1]],[1268,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[50,[[44772268],[44772269,[[1185,null,null,[1]]]]],null,76],[10,[[44776368],[44779257],[44784478]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],69],[10,[[44785292],[44785293,[[1239,null,null,[1]]]]]],[10,[[44785294],[44785295]]],[null,[[44786918],[44788443,[[1147,null,null,[1]]]]],null,54],[500,[[44788441],[44788442,[[1147,null,null,[1]]]]],null,54],[10,[[44792012],[44792013,[[1233,null,null,[1]],[1185,null,null,[1]]]]],null,76],[null,[[44795909],[44795910,[[1271,null,null,[1]]]],[44795911,[[1272,null,null,[1]]]],[44795912,[[1271,null,null,[1]],[1272,null,null,[1]]]]]],[10,[[44795921],[44795922,[[1222,null,null,[1]]]]]],[50,[[44796476],[44796477,[[null,null,null,[null,null,null,[\"en\",\"de\"]],null,1273]]]],null,75],[50,[[44796478],[44796479]],null,75]]],[17,[[10,[[31071260]]],[20,[[44788469,[[null,506871937,null,[null,44788469]]]],[44788470,[[1120,null,null,[1]],[501545959,null,null,[]],[null,506871937,null,[null,44788470]]]],[44788471,[[1120,null,null,[1]],[null,506871937,null,[null,44788471]]]]],[4,null,55],null,null,null,null,2,null,118,1],[10,[[44789815],[44789816],[44789817],[44789818]],null,null,null,null,22,null,null,101],[10,[[44789819],[44789820]],null,null,null,null,null,500,null,101],[1,[[44792954,[[506914611,null,null,[1]],[null,506871937,null,[null,44792954]]]],[44792955,[[1120,null,null,[1]],[506914611,null,null,[1]],[null,506871937,null,[null,44792955]]]]],[4,null,55],null,null,null,null,259,null,118,1],[14,[[44793253]],[2,[[4,null,55],[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]],[7,null,null,15,null,20230524]]],null,null,null,null,null,null,120,1],[14,[[44793254,[[null,1245,null,[null,60]]]]],[2,[[4,null,55],[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]],[7,null,null,15,null,20230524]]],null,null,null,null,15,null,120,1],[139,[[44793255,[[null,1245,null,[null,60]]],[4,null,71,null,null,null,null,[\"120\",\"14\"]]]],[2,[[4,null,55],[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]],[7,null,null,15,null,20230524]]],null,null,null,null,30,null,120,1],[14,[[44793256,[[null,1245,null,[null,600]]]]],[2,[[4,null,55],[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]],[7,null,null,15,null,20230524]]],null,null,null,null,170,null,120,1],[139,[[44793257,[[null,1245,null,[null,600]]],[4,null,71,null,null,null,null,[\"120\",\"14\"]]]],[2,[[4,null,55],[5,null,8,null,null,null,null,[\"localStorage\"]],[4,null,8,null,null,null,null,[\"localStorage\"]],[7,null,null,15,null,20230524]]],null,null,null,null,185,null,120,1],[196,[[44795337,[[1120,null,null,[1]],[45401989,null,null,[1]],[null,506871937,null,[null,44795337]],[160889229,null,null,[1]]],[12,null,null,null,2,null,\"smitmehta\\\\.com\/\"]]],[4,null,55],null,null,null,null,62,null,118,1],[10,[[44796200,[[1120,null,null,[1]],[null,506871937,null,[null,44796200]]]],[44796201,[[534095582,null,null,[1]],[1120,null,null,[1]],[501545959,null,null,[]],[null,506871937,null,[null,44796201]]]],[44796202,[[534095582,null,null,[1]],[1120,null,null,[1]],[null,506871937,null,[null,44796202]]]]],[4,null,55],null,null,null,null,616,null,118,1],[1,[[44796532,[[1120,null,null,[1]],[null,506871937,null,[null,44796532]]]],[44796533,[[null,506864295,null,[null,49]],[1120,null,null,[1]],[null,506871937,null,[null,44796533]]]],[44796534,[[null,506864295,null,[null,100]],[1120,null,null,[1]],[null,506871937,null,[null,44796534]]]],[44796535,[[null,506864295,null,[null,200]],[1120,null,null,[1]],[null,506871937,null,[null,44796535]]]]],[4,null,55],null,null,null,null,676,null,118,1]]]],null,null,[null,\"1000\",1,\"1000\"]],[1,[null,[[[[null,0,null,null,null,null,\"BODY\"],2,[\"10px\",\"10px\",1],[2],null,null,null,1],[[null,0,null,null,null,null,\"DIV#root\\u003eDIV.sc-ifAKCX.fpUzqF\\u003eDIV.sc-EHOje.jqvYPy\"],4,[\"16px\",\"10px\",1],[2],null,null,null,1],[[null,0,null,null,null,null,\"DIV#root\\u003eDIV.sc-ifAKCX.fpUzqF\"],4,[\"10px\",\"16px\",1],[2],null,null,null,1],[[null,0,null,null,null,null,\"BODY\"],3,[\"10px\",\"10px\",1],[2],null,null,null,1]]],[null,null,[1,2,7]]]],null,null,1,\"findtheinvisiblecow.com\",544349058,[44759875,44759926,44759837]]");
