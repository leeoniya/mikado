/**!
 * Mikado.js v0.6.2 (Light)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/mikado
 */
(function(){'use strict';var p;var t={reuse:!0,prefetch:!0,pool:!0,cache:!0},x={},y={},A={},B={},C={};function E(a,b,d){a.nodeType||(d=b,b=a,a=null);b||(d=a);a?this.mount(a):(this.f=this.b=null,this.length=0);this.init(b,d)}var F=E.register=function(a,b){b||(b=a,a=b.n);y[a]=b;return E},G=E.new=function(a,b,d){return new E(a,b,d)};
E.prototype.mount=function(a){if(this.f!==a){this.key&&this.f&&(this.f._o=this.l,this.l=a._o||{});this.f=a;H(this);var b;if(!(b=a._d)){b=a.children;for(var d=b.length,e=Array(d),f=0,c;f<d;f++)c=b[f],c._i=f,e[f]=c;b=a._d=e}this.b=b;this.length=this.b.length}return this};E.prototype.index=function(a){return a._i};E.prototype.node=function(a){return this.b[a]};
E.prototype.init=function(a,b){"string"===typeof a?a=y[a]:(b||!a||a.n||(b=a,a=null),a?F(a):a=y[this.o]);this.C=b=b?Object.assign({},this.C||t,b):t;this.B=b.reuse;this.state=b.state||x;this.cache=b.cache;var d=a.n;this.o!==d&&(this.o=d,this.u=a.d,this.v=this.g=null,this.A=b.prefetch&&I(this,a),H(this),this.l=(this.key=a.k)&&{},this.m=this.B&&b.pool&&(B[d]||(B[d]=[])),this.w=this.key&&(b.keep||this.m)&&(C[d]||(C[d]={})),this.size=this.m&&b.size);return this};
E.once=function(a,b,d,e,f){var c=G(a,b);if(f){var g=f;f=function(){c.destroy(!0);g()}}c.render(d,e,f);f||c.destroy(!0);return E};function H(a){if(a.f){var b=a.f._t;b!==a.o&&(a.f._t=a.o,b&&(a.key&&(a.l={}),a.length=0,a.remove(0,a.length)))}}p=E.prototype;
p.create=function(a,b,d){var e=this.key,f=e&&a[e],c,g;if(e&&((g=this.w)&&(c=g[f])||(c=this.l[f])))if(g){if(g[f]=null,g=this.m){var l=c._n;c._n=null;var h=g.pop();h!==c&&(h._n=l,g[l]=h)}}else e=!1;else if((c=this.m)&&c.length)c=c.pop(),g&&(c._n=null,g[c._k]=null);else var m=c=this.A||(this.A=I(this,y[this.o]));this.apply(c,a,b,d);m&&(c=m.cloneNode(!0));e&&(c._k=f,this.l[f]=c);return c};p.apply=function(a,b,d,e){if(!this.u)return e||0===e||(e=a._i),this.v(a._p||J(this,a),a.$,b,e,d)};
p.render=function(a,b){if(this.u)this.b[0]||this.add();else{if(!a)return!1;var d=this.length;var e=a.length;"undefined"===typeof e&&(a=[a],e=1);if(!e)return this.remove(0,d);var f=this.key;f||this.B||(this.remove(0,d,e),d=0);var c=d<e?d:e,g=0;if(g<c)for(;g<c;g++){var l=this.b[g],h=a[g],m=void 0;if(f&&l._k!==(m=h[this.key]))if(m=this.l[m]){var u=b,n=g,q=m._i;m._i=n;l._i=q;this.b[n]=m;this.b[q]=l;this.f.insertBefore(m,l);this.update(m,h,u,n)}else this.replace(l,h,b,g);else this.update(l,h,b,g)}if(g<
e)for(;g<e;g++)this.add(a[g],b);else e<d&&this.remove(e,d-e)}return this};p.add=function(a,b,d,e){if(!e)if("number"===typeof b){d=b;b=null;var f=!0}else if(d||0===d)f=!0;d=e||f?d:this.length;a=this.create(a,b,d);a._i=d;if(f)for(this.f.insertBefore(a,this.b[d]||null),this.b.splice(d,0,a),this.length++;++d<this.length;)this.b[d]._i=d;else e?this.f.replaceChild(a,e):(this.f.appendChild(a),this.length++),this.b[d]=a;return this};p.clear=function(){return this.remove(0,this.length)};
p.destroy=function(a){a&&this.unload();this.A=this.v=this.g=this.o=this.f=this.b=null;this.length=0;this.l={}};p.append=function(a,b,d){if("number"===typeof b){d=b;b=null;var e=!0}else e=d||0===d;for(var f=a.length,c=0;c<f;c++)this.add(a[c],b,e?d++:null);return this};
p.remove=function(a,b,d){var e=this.length;"object"===typeof a?a=a._i:0>a&&(a=e+a-1);if(!e||a>=e)return this;0>b?(1>b&&(a-=b+1,0>a&&(a=0)),b*=-1):b||(b=1);if(b>=e){var f=this.b;b=f.length;this.f.textContent="";this.f._d=this.b=d?Array(d):[];e=0}else f=this.b.splice(a,b),e-=b;this.length=e;if(a<e)for(;a<e;a++)this.b[a]._i=a;var c;if(this.m){a=this.m.length;if(c=this.size){if(a>=c)return this;a+b>c&&(f.splice(c-a),b=f.length)}if(this.cache&&1<b&&!this.key){c=f;d=c.length;for(var g=d/2|0,l=0,h;l<g;l++)h=
c[l],c[l]=c[d-l-1],c[d-l-1]=h}c=a+1;B[this.o]=this.m=a?this.m.concat(f):f}a=this.key;d=this.w;for(g=0;g<b;g++)l=f[g],e&&this.f.removeChild(l),a&&(h=l._k,this.l[h]=null,d&&(d[h]=l,c&&(l._n=c+g-1)));return this};p.replace=function(a,b,d,e){"undefined"===typeof e&&(e=a._i);this.add(b,d,e,a);this.key&&(b=a._k,this.l[b]=null,this.w&&(this.w[b]=a));this.m&&(b=this.m,this.key&&(a._n=b.length),b[b.length]=a);return this};
p.update=function(a,b,d,e){"undefined"===typeof e&&("number"===typeof a?(e=a,a=this.b[a]):e=a._i);if(this.key){var f=a._k,c=b[this.key];f!==c&&(this.l[f]=null,this.l[c]=a,a._k=c)}return this.apply(a,b,d,e)};function J(a,b){for(var d=a.g.length,e={},f=Array(d),c=0;c<d;c++){var g=a.g[c],l=c,h;if(!(h=e[g])){h=b;for(var m="",u=0;u<g.length;u++){var n=g[u];m+=n;e[m]?h=e[m]:(">"===n?h=h.firstElementChild:"+"===n?h=h.nextElementSibling:"|"===n&&(h=h.firstChild),e[m]=h)}}f[l]=h}b._p=f;b.$={};return f}var K;
function I(a,b,d,e,f){var c=A[b.n+(a.cache?"$":"")];if(c)return a.v=c.v,a.u=c.u,a.g=c.g,c.node;c=document.createElement(b.t||"div");d||(d=0,e="&",K="",a.g=[],c._p=f=[],c.$={});var g=b.s,l=b.i,h=b.x,m=b.h,u=b.a,n=b.c,q=b.j,k=a.g.length,r=0,v="";q&&(v+=";"+q,-1<v.indexOf("self")&&(a.g[k]=e,f[k]=c,r=2));n&&("object"===typeof n?(n=n[0],v+=a.cache?";v="+n+";if(s._c"+k+"!==v){s._c"+k+"=v;self.className=v}":";self.className="+n,a.g[k]=e,f[k]=c,r++):c.className=n);if(u){var z;u&&(z=Object.keys(u));for(n=
0;n<z.length;n++){q=z[n];var w=void 0;!u||(w=u[q]);if("object"===typeof w){w=w[0];v+=a.cache?";v="+w+";if(s['_a_"+q+k+"']!==v){s['_a_"+q+k+"']=v;self.setAttribute('"+q+"',v)}":";self.setAttribute('"+q+"',"+w+")";var D=!0;r++}else c.setAttribute(q,w)}D&&(a.g[k]=e,f[k]=c)}g&&("string"===typeof g?c.style.cssText=g:g.length&&(g=g[0],v+=a.cache?";v="+g+";if(s._cs"+k+"!==v){s._cs"+k+"=v;(self._s||(self._s=self.style)).cssText=v}":";self.style.cssText="+g,a.g[k]=e,f[k]=c,r++));l||(h?(e+="|",(z="object"===
typeof h)&&(h=h[0]),D=document.createTextNode(h),z&&(r&&(L(r,v,k,a.cache),v="",k++),v+=a.cache?";v="+h+";if(s._x"+k+"!==v){s._x"+k+"=v;self.nodeValue=v}":";self.nodeValue="+h,a.g[k]=e,f[k]=D,r++),c.appendChild(D)):m&&("object"===typeof m?(m=m[0],v+=a.cache?";v="+m+";if(s._h"+k+"!==v){s._h"+k+"=v;self.innerHTML=v}":";self.innerHTML="+m,a.g[k]=e,f[k]=c,r++):c.innerHTML=m));r&&(a.u=!1,L(r,v,k,a.cache));if(l)if(l.length)for(h=">",k=0;k<l.length;k++)k&&(h+="+"),r=l[k],c.appendChild(I(a,r,d+k+1,e+h,f));
else c.appendChild(I(a,l,d+1,e+">",f));d||(!a.u&&K&&(a.v=Function("p","s","data","index","view",'"use strict";var self,v'+K)),A[b.n+(a.cache?"$":"")]={v:a.v,u:a.u,g:a.g,node:c});return c}function L(a,b,d,e){K=e||1<a?K+(";self=p["+d+"]"+b):K+b.replace(/self/g,"p["+d+"]")}E.prototype.unload=function(a){a?"object"===typeof a&&(a=a.n):a=this.o;a&&(y[a]=A[a]=null,B[a]=[],C[a]={},A[a+"$"]=null)};E.unregister=E.unload=E.prototype.unload;(function(){var a=this||window,b;(b=a.define)&&b.amd?b([],function(){return E}):(b=a.modules)?b.mikado=E:"object"===typeof a.exports?a.module.exports=E:a.Mikado=E})();}).call(this);
