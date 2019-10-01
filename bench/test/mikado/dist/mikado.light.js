/**!
 * Mikado.js v0.4.3 (Light)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/mikado
 */
(function(){'use strict';var k;var l={reuse:!0,prefetch:!0,cache:!0,pool:!0},v={},y={},A={},B={};function C(a,b,d){a.nodeType||(d=b,b=a,a=null);b||(d=a);a?this.mount(a):(this.f=this.b=null,this.length=0);this.init(b,d)}var E=C.register=function(a,b){b||(b=a,a=b.n);y[a]=b;return C},F=C.new=function(a,b,d){return new C(a,b,d)};k=C.prototype;k.mount=function(a){this.f!==a&&(this.f=a,G(this),this.b=a._d||(a._d=H(a.children)),this.length=this.b.length);return this};
k.sync=function(a){this.f._d=this.b=H(this.f.children);this.length=this.b.length;if(a&&this.cache)for(a=0;a<this.length;a++)this.b[a].$=null;return this};k.index=function(a){return a._i};k.node=function(a){return this.b[a]};k.init=function(a,b){this.B=b=b?Object.assign({},this.B||l,b):l;"string"===typeof a?a=y[a]:E(a);this.A=b.reuse;this.state=b.state||v;this.cache=b.cache;this.u=this.A&&b.pool;this.l!==a&&(this.l=a.n,this.o=this.g=null,this.m=a.d,this.w=b.prefetch&&I(this,a),G(this));return this};
C.once=function(a,b,d,c,g){F(a,b).render(d,c,g).destroy(!0);return C};function G(a){if(a.f){var b=a.f._t;b!==a.l&&(a.f._t=a.l,b&&a.clear())}}function H(a){for(var b=a.length,d=Array(b),c=0,g;c<b;c++)g=a[c],g._i=c,d[c]=g;return d}k=C.prototype;k.create=function(a,b,d){var c;this.u&&(c=B[this.l])&&c.length?(c=c.pop(),this.m||this.o(c._p||J(this,c),c.$,a,d,b)):(c=this.w,c||(this.w=c=I(this,y[this.l])),this.m||this.o(c._p,c.$,a,d,b),c=c.cloneNode(!0));return c};
k.render=function(a,b){if(this.m)this.b[0]||this.add();else{var d=this.length;if(a){var c=a.length;"undefined"===typeof c&&(a=[a],c=1)}if(!c)return this.clear();this.A||(this.clear(c),d=0);var g=d<c?d:c,e=0;if(g)for(;e<g;e++)this.update(this.b[e],a&&a[e],b,e);if(e<c)for(a||(a=this.store);e<c;e++)this.add(a[e],b);else if(c<d)for(a=this.b.splice(c),this.length=c,c=a.length,this.u&&(b=B[this.l],this.cache&&K(a),B[this.l]=b&&b.length?b.concat(a):a),b=0;b<c;b++)this.f.removeChild(a[b])}return this};
k.add=function(a,b){var d=this.length;a=this.create(a,b,d);a._i=d;this.f.appendChild(a);this.b[d]=a;this.length++;return this};k.clear=function(a){if(this.u&&this.length){var b=B[this.l];this.cache&&K(this.b);B[this.l]=b&&b.length?b.concat(this.b):this.b}this.f._d=this.b=a?Array(a):[];this.f.textContent="";this.length=0;return this};k.destroy=function(a){a&&this.unload();this.w=this.o=this.g=this.l=this.f=this.b=null;this.length=0};
k.append=function(a,b){for(var d=a.length,c=0;c<d;c++)this.add(a[c],b);return this};k.remove=function(a,b){if("number"===typeof a){var d=a;0>d&&(d=this.length+d-1)}else d=a._i;0>b&&(1>b&&(d-=b+1,0>d&&(d=0)),b*=-1,a=this.b[d]);var c=this.b.splice(d,b||1),g=this.u,e;g&&(e=B[this.l]||(B[this.l]=[]));if(b&&--b){this.length-=b;for(var m;0<b;)m=c[b--],g&&(e[e.length]=m),this.f.removeChild(m)}g&&(e[e.length]=a);this.f.removeChild(a);this.length--;for(a=d;a<this.length;a++)this.b[a]._i=a;return this};
k.replace=function(a,b,d,c){"undefined"===typeof c&&(c=a._i);b=this.create(b,d,c);b._i=c;this.f.replaceChild(b,a);this.b[c]=b;return this};k.update=function(a,b,d,c){this.o(a._p||J(this,a),a.$,b,c,d);return this};
function J(a,b){for(var d=a.g.length,c={},g=Array(d),e=0;e<d;e++){var m=a.g[e],w=e,h;if(!(h=c[m])){h=b;for(var p="",t=0;t<m.length;t++){var n=m[t];p+=n;c[p]?h=c[p]:(">"===n?h=h.firstElementChild:"+"===n?h=h.nextElementSibling:"|"===n&&(h=h.firstChild),c[p]=h)}}g[w]=h}b._p=g;b.$={};return g}var L;
function I(a,b,d,c,g){var e=A[b.n+(a.cache?"$":"")];if(e)return a.o=e.o,a.m=e.m,a.v=e.v,a.proxy=e.proxy,a.g=e.g,e.node;e=document.createElement(b.t||"div");d||(d=0,c="&",L="",a.g=[],e._p=g=[],e.$={});var m=b.s,w=b.i,h=b.x,p=b.h,t=b.a,n=b.c,u=b.j,f=a.g.length,q=0,r="";u&&(r+=";"+u,-1<r.indexOf("self")&&(a.g[f]=c,g[f]=e,q=2));n&&("object"===typeof n?(n=n[0],r+=a.cache?";v="+n+";if(s._c"+f+"!==v){s._c"+f+"=v;self.className=v}":";self.className="+n,a.g[f]=c,g[f]=e,q++):e.className=n);if(t){var z;t&&(z=
Object.keys(t));for(n=0;n<z.length;n++){u=z[n];var x=void 0;!t||(x=t[u]);if("object"===typeof x){x=x[0];r+=a.cache?";v="+x+";if(s['_a_"+u+f+"']!==v){s['_a_"+u+f+"']=v;self.setAttribute('"+u+"',v)}":";self.setAttribute('"+u+"',"+x+")";var D=!0;q++}else e.setAttribute(u,x)}D&&(a.g[f]=c,g[f]=e)}m&&("string"===typeof m?e.style.cssText=m:m.length&&(m=m[0],r+=a.cache?";v="+m+";if(s._cs"+f+"!==v){s._cs"+f+"=v;(self._s||(self._s=self.style)).cssText=v}":";self.style.cssText="+m,a.g[f]=c,g[f]=e,q++));w||(h?
(c+="|",(z="object"===typeof h)&&(h=h[0]),D=document.createTextNode(h),z&&(q&&(M(q,r,f,a.cache),r="",f++),r+=a.cache?";v="+h+";if(s._x"+f+"!==v){s._x"+f+"=v;self.nodeValue=v}":";self.nodeValue="+h,a.g[f]=c,g[f]=D,q++),e.appendChild(D)):p&&("object"===typeof p?(p=p[0],r+=a.cache?";v="+p+";if(s._h"+f+"!==v){s._h"+f+"=v;self.innerHTML=v}":";self.innerHTML="+p,a.g[f]=c,g[f]=e,q++):e.innerHTML=p));q&&(a.m=!1,M(q,r,f,a.cache));if(w)if(w.length)for(h=">",f=0;f<w.length;f++)f&&(h+="+"),q=w[f],e.appendChild(I(a,
q,d+f+1,c+h,g));else e.appendChild(I(a,w,d+1,c+">",g));d||(!a.m&&L&&(a.o=Function("p","s","data","index","view",'"use strict";var self,v'+L)),A[b.n+(a.cache?"$":"")]={o:a.o,m:a.m,v:a.v,proxy:a.proxy,g:a.g,node:e});return e}function M(a,b,d,c){L=c||1<a?L+(";self=p["+d+"]"+b):L+b.replace(/self/g,"p["+d+"]")}C.prototype.unload=function(a){a?"object"===typeof a&&(a=a.n):a=this.l;a&&(y[a]=null,A[a]=null,A[a+"$"]=null,B[a]=null)};C.unregister=C.unload=C.prototype.unload;
function K(a){for(var b=a.length,d=b/2|0,c=0,g;c<d;c++)g=a[c],a[c]=a[b-c-1],a[b-c-1]=g};(function(){var a=this||window,b;(b=a.define)&&b.amd?b([],function(){return C}):(b=a.modules)?b.mikado=C:"object"===typeof a.exports?a.module.exports=C:a.Mikado=C})();}).call(this);
