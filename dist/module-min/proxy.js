import{ProxyHandler}from"./type.js";import{Cache}from"./factory.js";import{tick}from"./profiler.js";const proxy=window.Proxy||function(){function a(a,b){for(const c in this.path=b.path,this.fn=b.fn,a)this.define(a,c,a[c]);return a._mkx=this,a}return a.prototype.define=function(a,b,c){const d=this;Object.defineProperty(a,b,{get:function(){return c},set:function(a){proxy_loop(d,c=a,b)}})},a}();export default function proxy_create(a,b,c){const d=a._mkx;if(d)return d.path=b,a;return new proxy(a,{path:b,fn:c,get,set})}function get(a,b){return!1,"_mkx"===b?this:a[b]}function set(a,b,c){return!1,proxy_loop(this,c,b),a[b]=c,!0}function proxy_loop(a,b,c){const d=a.fn[c];if(d)for(let c=0;c<d.length;c++){const e=d[c],f=e[0],g=a.path[e[1]];g.c&&g.c[f+(e[2]||"")]===b||(!1,g[f](e[2]||b,b))}}