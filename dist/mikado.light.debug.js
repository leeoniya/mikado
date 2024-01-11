/**!
 * Mikado.js v0.8.212 (Light/Debug)
 * Copyright 2019-2024 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/mikado
 */
(function(){'use strict';
var h;
function p(a) {
  const b = window.profiler || (window.profiler = {});
  b[a] || (b[a] = 0);
  b[a]++;
}
;function q(a, b, c) {
  p("factory.path");
  const e = b.length, f = [], l = {};
  for (let g = 0, m, r, n, v, B, y = null; g < e; g++) {
    m = b[g];
    if (r = m.v) {
      if (v = n = l[r], !v) {
        let u = void 0;
        var d = a, k = r;
        p("factory.resolve");
        for (let z = 0, C = k.length, t = ""; z < C; z++) {
          const w = k[z];
          t += w;
          l[t] ? d = l[t] : (">" === w ? d = d.firstChild : "|" === w ? (u = d, d = d.firstChild) : "@" === w ? (u = d, d = d.style) : d = d.nextSibling, l[t] = d);
        }
        n = [d, u];
        v = n[0];
        n = n[1] || v;
      }
    } else {
      v = n = a;
    }
    c && B !== n && (B = n, n._mkc = y = {});
    p("cache.create");
    f[g] = new x(y, v, "");
  }
  return a._mkp = f;
}
function A(a, b, c, e, f, l) {
  p("factory.construct");
  const d = f || (b.tag ? b.svg ? document.createElementNS("http://www.w3.org/2000/svg", b.tag) : document.createElement(b.tag) : document.createTextNode(b.text));
  let k, g;
  if (g = b.class) {
    "object" === typeof g ? (p("cache.create"), c.push(new x(k = {_c:""}, d, e))) : f || (d.className = g);
  }
  if (g = b.attr) {
    for (const m in g) {
      let r = g[m];
      "object" === typeof r ? (p("cache.create"), k || c.push(new x(k = {}, d, e)), k["_a" + m] = !1) : f || d.setAttribute(m, r);
    }
  }
  if (g = b.style) {
    "object" === typeof g ? (p("cache.create"), c.push(new x(k || (k = {}), d.style, e + "@")), k._s = "") : f || (d.style.cssText = g);
  }
  if (g = b.text) {
    "object" === typeof g ? (a = d, g = g[0], b.tag ? (e += "|", a = !f && d.firstChild, a || (a = document.createTextNode(g), d.appendChild(a))) : k = {}, (k || (k = {}))._t = g, p("cache.create"), c.push(new x(k, a, e))) : f || (b.tag ? d.textContent = g : d.nodeValue = g);
  } else if (g = b.child) {
    if (f && (f = f.firstChild, !f)) {
      return console.warn("Hydration failed of template '" + a.name + "' because the existing DOM structure was incompatible. Falls back to factory construction instead."), null;
    }
    g.constructor !== Array && (g = [g]);
    for (let m = 0, r, n = g.length; m < n; m++) {
      if (r = g[m], e = m ? e + "+" : e + ">", b = A(a, r, c, e, f, 1), f) {
        if (m < n - 1 && (f = f.nextSibling, !f)) {
          return console.warn("Hydration failed of template '" + a.name + "' because the existing DOM structure was incompatible. Falls back to factory construction instead."), null;
        }
      } else {
        d.appendChild(b);
      }
    }
  } else if (g = b.html) {
    "object" === typeof g ? (p("cache.create"), k || c.push(new x(k = {}, d, e)), k._h = "") : f || (d.innerHTML = g);
  } else if (g = b.inc) {
    p("cache.create");
    p("template.include");
    k || c.push(new x(null, d, e));
    let m;
    if ("string" === typeof g) {
      m = D[g];
      if (!m) {
        throw Error("The partial template '" + g + "' which is included by the root template '" + a.name + "' was not registered. When using named includes make sure you register all your includes by Mikado.register(tpl) before instantiating the Mikado view instance.");
      }
      if (!(m instanceof E)) {
        e = m[0];
        if (b = m[1]) {
          b.async = !1, f && (b.root = f, b.hydrate = !0);
        }
        D[g] = m = new E(e, b);
      }
    } else if (1 !== g) {
      e = a.inc.length;
      if (!a.tpl.fn.length) {
        throw Error("The template '" + a.name + "|" + e + "' has conflicts. It should provide a handler entry, but wasn't found.");
      }
      m = new E({name:a.name + "|" + e, tpl:g, key:g.key, cache:g.cache, fn:a.tpl.fn}, {recycle:a.recycle, cache:a.cache, pool:a.pool, state:a.state, mount:d, hydrate:!!f});
    }
    1 !== g && a.inc.push(m);
  }
  k && (d._mkc = k);
  l || (d._mkp = c);
  return d;
}
function x(a, b, c) {
  this.c = a;
  this.n = b;
  this.v = c;
}
h = x.prototype;
h._a = function(a, b) {
  if (this.c) {
    if (this.c["_a" + a] === b) {
      p("cache.match");
      return;
    }
    p("cache.miss");
    p("cache.attr");
    this.c["_a" + a] = b;
  }
  !1 !== b ? this.n.setAttribute(a, b) : this.n.removeAttribute(a);
};
h._t = function(a) {
  if (this.c) {
    if (this.c._t === a) {
      p("cache.match");
      return;
    }
    p("cache.miss");
    p("cache.text");
    this.c._t = a;
  }
  this.n.nodeValue = a;
};
h._c = function(a) {
  if (this.c) {
    if (this.c._c === a) {
      p("cache.match");
      return;
    }
    p("cache.miss");
    p("cache.class");
    this.c._c = a;
  }
  this.n.className = a;
};
h._s = function(a) {
  if (this.c) {
    if (this.c._s === a) {
      p("cache.match");
      return;
    }
    p("cache.miss");
    p("cache.style");
    this.c._s = a;
  }
  this.n.cssText = a;
};
h._h = function(a) {
  if (this.c) {
    if (this.c._h === a) {
      p("cache.match");
      return;
    }
    p("cache.miss");
    p("cache.html");
    this.c._h = a;
  }
  this.n.innerHTML = a;
};
const D = Object.create(null);
function E(a, b = {}) {
  if (!(this instanceof E)) {
    return new E(a, b);
  }
  p("mikado.new");
  if ("string" === typeof a) {
    var c = D[a];
    if (!c) {
      throw Error("The template '" + a + "' is not registered.");
    }
    if (c instanceof E) {
      return c;
    }
    a = c[0];
    b || (b = c[1]);
  }
  if (!a) {
    throw Error("Initialization Error: Template is not defined.");
  }
  if (!a.tpl) {
    throw Error("Initialization Error: Template isn't supported.");
  }
  this.g = [];
  this.length = 0;
  this.root = b.root || b.mount || null;
  this.recycle = !!b.recycle;
  this.state = b.state || {};
  this.shadow = b.shadow || !!a.cmp;
  this.key = a.key || "";
  this.j = {};
  c = a.fn;
  a.m || c && (a.m = c.slice());
  this.apply = c && c.pop();
  this.tpl = a;
  this.name = a.name;
  this.inc = [];
  this.pool = (this.key || this.recycle) && b.pool || 0;
  this.l = [];
  this.i = new Map();
  this.cache = a.cache || !!b.cache;
  this.root ? this.mount(this.root, b.hydrate) : this.h = null;
}
h = E.prototype;
h.mount = function(a, b) {
  p("view.mount");
  if (!a) {
    throw Error("No target was passed to .mount()");
  }
  this.shadow && (a = a.shadowRoot || a.attachShadow({mode:"open"}));
  const c = a._mki;
  var e = this.root !== a;
  if (c === this) {
    if (!e) {
      return this;
    }
    this.g = a._mkd;
    this.length = this.g.length;
  } else if (c) {
    p("mikado.unmount"), c.clear(), a._mkd = this.g = [], this.length = 0, a.firstChild && (p("mount.reset"), a.textContent = "");
  } else {
    if (b) {
      var f = a.children;
      p("collection_to_array");
      const l = f.length, d = Array(l);
      for (let k = 0; k < l; k++) {
        d[k] = f[k];
      }
      this.g = d;
      this.length = this.g.length;
    } else {
      this.g = [], this.length = 0, a.firstChild && (p("mount.reset"), a.textContent = "");
    }
    a._mkd = this.g;
  }
  if (this.key) {
    if (e && this.root && (this.root._mkl = this.j), c === this) {
      this.j = a._mkl;
    } else {
      e = {};
      if (!c && b && this.length) {
        for (let l = 0, d, k; l < this.length; l++) {
          d = this.g[l], k = d.getAttribute("key"), d._mkk = k, e[k] = d;
        }
      }
      a._mkl = this.j = e;
    }
  }
  a._mki = this;
  this.root = a;
  this.h || (b && this.length && (this.h = this.g[0].cloneNode(!0), A(this, this.tpl.tpl, [], "", this.h) && F(this)), this.tpl && (this.h = A(this, this.tpl.tpl, [], ""), F(this)));
  return this;
};
function F(a) {
  a.tpl.m && (a.tpl.fn = a.tpl.m, a.tpl.m = null);
  a.tpl = null;
}
h.render = function(a, b) {
  if (!this.root) {
    throw Error("Template was not mounted or root was not found.");
  }
  if (this.root._mki !== this) {
    throw Error("Another template is already assigned to this root. Please use '.mount(root_element)' before calling '.render()' to switch the context of a template.");
  }
  p("view.render");
  var c = this.length;
  if (!a) {
    return this.apply ? console.warn("When calling .render() by passing no data nothing will happen!") : this.g[0] || this.add(), this;
  }
  if (Array.isArray(a)) {
    var e = a.length;
    if (!e) {
      return this.remove(0, c);
    }
  } else {
    a = [a], e = 1;
  }
  var f = this.key;
  !c || f || this.recycle || (this.remove(0, c), c = 0);
  var l = c < e ? c : e, d = 0;
  if (d < l) {
    for (let m, r; d < l; d++) {
      m = this.g[d];
      r = a[d];
      if (f && m._mkk !== r[f]) {
        p("view.reconcile");
        c = this.g;
        e = this.j;
        f = this.key;
        l = a.length;
        let n = c.length, v = n > l ? n : l, B = 0;
        for (d || (d = 0); d < v; d++) {
          var k = void 0;
          if (d < l) {
            const y = a[d];
            var g = d >= n;
            let u, z, C;
            if (!g && (u = c[d], z = y[f], C = u._mkk, C === z)) {
              this.update(u, y, b, d, 1);
              continue;
            }
            if (g || !e[z]) {
              g || !this.pool ? (n++, v = n > l ? n : l, this.add(y, b, d)) : this.replace(u, y, b, d);
              continue;
            }
            let t, w;
            for (g = d + 1; g < v; g++) {
              if (!t && g < n && c[g]._mkk === z && (t = g + 1), !w && g < l && a[g][f] === C && (w = g + 1), t && w) {
                t >= w ? (k = c[t - 1], this.root.insertBefore(k, u), this.update(k, y, b, d, 1), t === w ? (1 < g - d && this.root.insertBefore(u, c[t]), c[d] = c[g], (c[g] = u) || console.error("Error"), p("view.reconcile.steps")) : (G(c, t - 1, d), B++)) : (k = w - 1 + B, this.root.insertBefore(u, c[k] || null), G(c, d, (k > n ? n : k) - 1), B--, d--);
                p("view.reconcile.steps");
                k = 1;
                break;
              }
            }
          }
          k || (this.remove(d), n--, v = n > l ? n : l, d--);
        }
        return this;
      }
      this.update(m, r, b, d, 1);
    }
  }
  if (d < e) {
    for (; d < e; d++) {
      this.add(a[d], b);
    }
  } else {
    e < c && this.remove(e, c - e);
  }
  return this;
};
h.replace = function(a, b, c, e) {
  p("view.replace");
  "undefined" === typeof e && ("number" === typeof a ? (e = 0 > a ? this.length + a : a, a = this.g[e]) : e = this.index(a));
  var f;
  if (this.key) {
    var l = b[this.key];
    if (f = this.j[l]) {
      if (f !== a) {
        var d = this.index(f);
        this.g[e] = f;
        this.g[d] = a;
        l = d < e ? f : a;
        d = d < e ? a : f;
        const k = l.nextElementSibling;
        this.root.insertBefore(l, d);
        k !== d && this.root.insertBefore(d, k);
      }
    } else {
      this.pool && (f = this.i.get(l)) && (this.i.delete(l), H(this, a), this.g[e] = f, a.replaceWith(f));
    }
  } else {
    this.recycle && (f = a);
  }
  f ? !this.apply || this.apply(b, c || this.state, e, f._mkp || q(f, this.h._mkp, this.cache)) : (b = this.create(b, c, e, 1), (this.key || this.pool) && H(this, a), this.g[e] = b, a.replaceWith(b));
  return this;
};
h.update = function(a, b, c, e) {
  p("view.update");
  if (!this.apply) {
    return console.warn("The template '" + this.name + "' is a static template and should not be updated. Alternatively you can use .replace() to switch contents."), this;
  }
  "undefined" === typeof e && ("number" === typeof a ? (e = 0 > a ? this.length + a - 1 : a, a = this.g[e]) : e = this.index(a));
  this.apply(b, c || this.state, e, a._mkp || q(a, this.h._mkp, this.cache));
  return this;
};
h.create = function(a, b, c, e) {
  p("view.create");
  let f = this.key;
  const l = f && a[f];
  let d, k, g, m;
  f && this.pool && (k = this.i) && (d = k.get(l)) ? (p("pool.out"), m = 1, k.delete(l)) : (!f || this.recycle) && this.pool && (k = this.l) && k.length ? (p("pool.out"), d = k.pop()) : (d = g = this.h, g || (this.h = d = g = A(this, this.tpl.tpl, [], ""), F(this)));
  this.apply && this.apply(a, b || this.state, c, d._mkp || q(d, this.h._mkp, !!g || this.cache));
  g && (p("factory.clone"), d = d.cloneNode(!0));
  f && (m || (d._mkk = l), e && (this.j[l] = d));
  return d;
};
h.add = function(a, b, c) {
  p("view.add");
  let e;
  "number" === typeof b ? (c = 0 > b ? this.length + b : b, b = null, e = c < this.length) : "number" === typeof c ? (0 > c && (c += this.length), e = c < this.length) : c = this.length;
  a = this.create(a, b, c, 1);
  e ? (this.root.insertBefore(a, this.g[c]), G(this.g, this.length - 1, c, a), this.length++) : (this.root.appendChild(a), this.g[this.length++] = a);
  return this;
};
function G(a, b, c, e) {
  p("splice");
  const f = e || a[b];
  e && b++;
  if (b < c) {
    for (; b < c; b++) {
      a[b] = a[b + 1];
    }
  } else {
    for (; b > c; b--) {
      a[b] = a[b - 1];
    }
  }
  a[c] = f;
}
h.append = function(a, b, c) {
  p("view.append");
  let e;
  "number" === typeof b ? (c = 0 > b ? this.length + b : b, b = null, e = 1) : "number" === typeof c && (0 > c && (c += this.length), e = 1);
  const f = a.length;
  for (let l = 0; l < f; l++) {
    this.add(a[l], b, e ? c++ : null);
  }
  return this;
};
h.clear = function() {
  p("view.clear");
  this.length && this.remove(0, this.length);
  return this;
};
h.remove = function(a, b) {
  let c = this.length;
  c && a && ("number" !== typeof a ? a = this.index(a) : 0 > a && (a = c + a));
  if (!c || a >= c) {
    return this;
  }
  b ? 0 > b && (a -= b + 1, 0 > a && (a = 0), b *= -1) : b = 1;
  !a && b >= c ? (a = this.g, b = a.length, this.root.textContent = "", this.root._mkd = this.g = [], c = 0) : (a = this.g.splice(a, b), c -= b);
  const e = this.pool && !this.key, f = this.key || this.pool;
  for (let l = 0, d; l < b; l++) {
    p("view.remove"), d = a[e ? b - l - 1 : l], c && d.remove(), f && H(this, d);
  }
  this.length = c;
  return this;
};
h.index = function(a) {
  p("view.index");
  return this.g.indexOf(a);
};
h.node = function(a) {
  p("view.node");
  return this.g[a];
};
function H(a, b) {
  p("view.checkout");
  if (a.key) {
    var c = b._mkk;
    a.j[c] = null;
  }
  if (a.pool) {
    if (c) {
      p("pool.in"), a.i.set(c, b), !0 !== a.pool && a.i.size > a.pool && (p("pool.resize"), a.i.delete(a.i.keys().next().value));
    } else {
      if (c = a.l.length, !0 === a.pool || c < a.pool) {
        p("pool.in"), a.l[c] = b;
      }
    }
  }
}
h.flush = function() {
  p("view.flush");
  this.l = [];
  this.i = new Map();
  return this;
};
h.destroy = function() {
  p("view.destroy");
  for (let a = 0, b; a < this.inc.length; a++) {
    b = this.inc[a], D[b.name] || b.destroy();
  }
  this.key && (this.root && (this.root._mkl = null), this.j = null);
  this.root && (this.root._mkd = this.root._mki = null);
  this.i = this.l = this.g = this.root = this.tpl = this.apply = this.inc = this.state = this.h = null;
};
E.once = function(a, b, c, e) {
  if (!a) {
    throw Error("Root element is not defined.");
  }
  if (!b) {
    throw Error("Template is not defined.");
  }
  p("mikado.once");
  if (c || b.fn) {
    b = new E(b);
    if (c && Array.isArray(c)) {
      for (let f = 0; f < c.length; f++) {
        a.append(b.create(c[f], e, f));
      }
    } else {
      a.append(b.create(c, e));
    }
    b.destroy();
  } else {
    c = A({}, b.tpl, [], "", null, 1), a.append(c);
  }
  return E;
};
E.register = function(a, b) {
  p("mikado.register");
  let c, e;
  if ("string" === typeof a) {
    if (c = e = a, a = D[c], a instanceof E || (a = a[0]), !a) {
      throw Error("The template '" + c + "' was not found.");
    }
  } else {
    c = a.name;
  }
  D[c] && (e ? console.info("The template '" + c + "' was replaced by a new definition.") : console.warn("The template '" + c + "' was already registered and is getting overwritten. When this isn't your intention, then please check your template names about uniqueness and collision!"));
  D[c] = [a, b];
  return E;
};
E.unregister = function(a) {
  p("mikado.unregister");
  "object" === typeof a && (a = a.name);
  const b = D[a];
  b && (b instanceof E && b.destroy(), D[a] = null);
  return E;
};
const I = window;
let J;
(J = I.define) && J.amd ? J([], function() {
  return E;
}) : "object" === typeof I.exports ? I.exports = E : I.Mikado = E;
}).call(this);
