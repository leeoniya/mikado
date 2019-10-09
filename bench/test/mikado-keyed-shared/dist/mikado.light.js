/**!
 * Mikado.js v0.6.15 (Light)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/mikado
 */
(function(){'use strict';var n;var t={reuse:!0,prefetch:!0,pool:!0,cache:!0},x={},y={},A={},B={},C={};function E(a,b,e){a.nodeType||(e=b,b=a,a=null);b||(e=a);a?this.mount(a):(this.f=this.b=null,this.length=0);this.init(b,e)}var F=E.register=function(a,b){b||(b=a,a=b.n);y[a]=b;return E},G=E.new=function(a,b,e){return new E(a,b,e)};
E.prototype.mount=function(a){if(this.f!==a){this.key&&this.f&&(this.f._o=this.l,this.l=a._o||{});this.f=a;H(this);var b;if(!(b=a._d)){b=a.children;for(var e=b.length,c=Array(e),f=0,d;f<e;f++)d=b[f],d._i=f,c[f]=d;b=a._d=c}this.b=b;this.length=this.b.length}return this};E.prototype.index=function(a){return a._i};E.prototype.node=function(a){return this.b[a]};
E.prototype.init=function(a,b){"string"===typeof a?a=y[a]:(b||!a||a.n||(b=a,a=null),a?F(a):a=y[this.o]);this.C=b=b?Object.assign({},this.C||t,b):t;this.B=b.reuse;this.state=b.state||x;this.cache=b.cache;var e=a.n;this.o!==e&&(this.o=e,this.u=a.d,this.v=this.g=null,this.A=b.prefetch&&I(this,a),H(this),this.l=(this.key=a.k)&&{},this.m=this.B&&b.pool&&(B[e]||(B[e]=[])),this.w=this.key&&(b.keep||this.m)&&(C[e]||(C[e]={})));return this};
E.once=function(a,b,e,c,f){var d=G(a,b);if(f){var g=f;f=function(){d.destroy(!0);g()}}d.render(e,c,f);f||d.destroy(!0);return E};function H(a){if(a.f){var b=a.f._t;b!==a.o&&(a.f._t=a.o,b&&(a.key&&(a.l={}),a.length=0,a.remove(0,a.length)))}}n=E.prototype;
n.create=function(a,b,e){var c=this.key,f=c&&a[c],d,g;if(c&&((g=this.w)&&(d=g[f])||(d=this.l[f])))if(g){if(g[f]=null,g=this.m){var m=d._n;d._n=null;var h=g.pop();h!==d&&(h._n=m,g[m]=h)}}else c=!1;else if((d=this.m)&&d.length)d=d.pop(),g&&(d._n=null,g[d._k]=null);else var l=d=this.A||(this.A=I(this,y[this.o]));this.apply(d,a,b,e);l&&(d=l.cloneNode(!0));c&&(d._k=f,this.l[f]=d);return d};n.apply=function(a,b,e,c){if(!this.u)return c||0===c||(c=a._i),this.v(a._p||J(this,a),a.$,b,c,e)};
n.render=function(a,b){if(this.u)this.b[0]||this.add();else{if(!a)return!1;var e=this.length;var c=a.length;"undefined"===typeof c&&(a=[a],c=1);if(!c)return this.remove(0,e);var f=this.key;f||this.B||(this.remove(0,e,c),e=0);var d=e<c?e:c,g=0;if(g<d)for(;g<d;g++){var m=this.b[g],h=a[g],l=void 0;if(f&&m._k!==(l=h[this.key]))if(l=this.l[l]){var q=l._i;l._i=g;m._i=q;this.b[g]=l;this.b[q]=m;this.f.insertBefore(l,m);this.update(l,h,b,g)}else this.replace(m,h,b,g);else this.update(m,h,b,g)}if(g<c)for(;g<
c;g++)this.add(a[g],b);else c<e&&this.remove(c,e-c)}return this};n.add=function(a,b,e,c){if(!c)if("number"===typeof b){e=b;b=null;var f=!0}else if(e||0===e)f=!0;e=c||f?e:this.length;a=this.create(a,b,e);a._i=e;if(f)for(this.f.insertBefore(a,this.b[e]||null),this.b.splice(e,0,a),this.length++;++e<this.length;)this.b[e]._i=e;else c?this.f.replaceChild(a,c):(this.f.appendChild(a),this.length++),this.b[e]=a;return this};n.clear=function(){return this.remove(0,this.length)};
n.destroy=function(a){a&&this.unload();this.A=this.v=this.g=this.o=this.f=this.b=null;this.length=0;this.l={}};n.append=function(a,b,e){if("number"===typeof b){e=b;b=null;var c=!0}else c=e||0===e;for(var f=a.length,d=0;d<f;d++)this.add(a[d],b,c?e++:null);return this};
n.remove=function(a,b,e){var c=this.length;"object"===typeof a?a=a._i:0>a&&(a=c+a-1);if(!c||a>=c)return this;0>b?(1>b&&(a-=b+1,0>a&&(a=0)),b*=-1):b||(b=1);if(b>=c){var f=this.b;b=f.length;this.f.textContent="";this.f._d=this.b=e?Array(e):[];c=0}else f=this.b.splice(a,b),c-=b;this.length=c;if(this.m){e=this.m.length;if(this.cache&&1<b&&!this.key){var d=f;for(var g=d.length,m=g/2|0,h=0,l;h<m;h++)l=d[h],d[h]=d[g-h-1],d[g-h-1]=l}d=e+1;B[this.o]=this.m=e?this.m.concat(f):f}e=this.key;g=this.w;for(m=0;m<
b;m++)h=f[m],c&&this.f.removeChild(h),e&&(l=h._k,this.l[l]=null,g&&(g[l]=h,d&&(h._n=d+m-1)));if(a<c)for(;a<c;a++)this.b[a]._i=a;return this};n.replace=function(a,b,e,c){"undefined"===typeof c&&(c=a._i);this.add(b,e,c,a);this.key&&(b=a._k,this.l[b]=null,this.w&&(this.w[b]=a));this.m&&(b=this.m,this.key&&(a._n=b.length),b[b.length]=a);return this};
n.update=function(a,b,e,c){"undefined"===typeof c&&("number"===typeof a?(c=a,a=this.b[a]):c=a._i);if(this.key){var f=a._k,d=b[this.key];f!==d&&(this.l[f]=null,this.l[d]=a,a._k=d)}return this.apply(a,b,e,c)};function J(a,b){for(var e=a.g.length,c={},f=Array(e),d=0;d<e;d++){var g=a.g[d],m=d,h;if(!(h=c[g])){h=b;for(var l="",q=0;q<g.length;q++){var p=g[q];l+=p;c[l]?h=c[l]:(">"===p?h=h.firstElementChild:"+"===p?h=h.nextElementSibling:"|"===p&&(h=h.firstChild),c[l]=h)}}f[m]=h}b._p=f;b.$={};return f}var K;
function I(a,b,e,c,f){var d=A[b.n+(a.cache?"$":"")];if(d)return a.v=d.v,a.u=d.u,a.g=d.g,d.node;d=document.createElement(b.t||"div");e||(e=0,c="&",K="",a.g=[],d._p=f=[],d.$={});var g=b.s,m=b.i,h=b.x,l=b.h,q=b.a,p=b.c,v=b.j,k=a.g.length,r=0,u="";v&&(u+=";"+v,-1<u.indexOf("self")&&(a.g[k]=c,f[k]=d,r=2));p&&("object"===typeof p?(p=p[0],u+=a.cache?";v="+p+";if(s._c"+k+"!==v){s._c"+k+"=v;self.className=v}":";self.className="+p,a.g[k]=c,f[k]=d,r++):d.className=p);if(q){var z;q&&(z=Object.keys(q));for(p=
0;p<z.length;p++){v=z[p];var w=void 0;!q||(w=q[v]);if("object"===typeof w){w=w[0];u+=a.cache?";v="+w+";if(s['_a_"+v+k+"']!==v){s['_a_"+v+k+"']=v;self.setAttribute('"+v+"',v)}":";self.setAttribute('"+v+"',"+w+")";var D=!0;r++}else d.setAttribute(v,w)}D&&(a.g[k]=c,f[k]=d)}g&&("string"===typeof g?d.style.cssText=g:g.length&&(g=g[0],u+=a.cache?";v="+g+";if(s._cs"+k+"!==v){s._cs"+k+"=v;(self._s||(self._s=self.style)).cssText=v}":";self.style.cssText="+g,a.g[k]=c,f[k]=d,r++));m||(h?(c+="|",(z="object"===
typeof h)&&(h=h[0]),D=document.createTextNode(h),z&&(r&&(L(r,u,k,a.cache),u="",k++),u+=a.cache?";v="+h+";if(s._x"+k+"!==v){s._x"+k+"=v;self.nodeValue=v}":";self.nodeValue="+h,a.g[k]=c,f[k]=D,r++),d.appendChild(D)):l&&("object"===typeof l?(l=l[0],u+=a.cache?";v="+l+";if(s._h"+k+"!==v){s._h"+k+"=v;self.innerHTML=v}":";self.innerHTML="+l,a.g[k]=c,f[k]=d,r++):d.innerHTML=l));r&&(a.u=!1,L(r,u,k,a.cache));if(m)if(m.length)for(h=">",k=0;k<m.length;k++)k&&(h+="+"),r=m[k],d.appendChild(I(a,r,e+k+1,c+h,f));
else d.appendChild(I(a,m,e+1,c+">",f));e||(!a.u&&K&&(a.v=Function("p","s","data","index","view",'"use strict";var self,v'+K)),A[b.n+(a.cache?"$":"")]={v:a.v,u:a.u,g:a.g,node:d});return d}function L(a,b,e,c){K=c||1<a?K+(";self=p["+e+"]"+b):K+b.replace(/self/g,"p["+e+"]")}E.prototype.unload=function(a){a?"object"===typeof a&&(a=a.n):a=this.o;a&&(y[a]=A[a]=null,B[a]=[],C[a]={},A[a+"$"]=null)};E.unregister=E.unload=E.prototype.unload;(function(){var a=this||window,b;(b=a.define)&&b.amd?b([],function(){return E}):(b=a.modules)?b.mikado=E:"object"===typeof a.exports?a.module.exports=E:a.Mikado=E})();}).call(this);
