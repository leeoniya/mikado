import*as e from"./observable.js";import{o as n}from"./observable.js";import t from"./htm.js";const o={},f=[],i="__g";function s(e,n,t,o){if(t){if(n){if(!o){const n=(o=t.previousSibling||e.lastChild)[i];if(n)for(o=o.previousSibling;o&&o[i]!==n;)o=o.previousSibling}let n;for(;o&&o!==t;)n=o.nextSibling,e.removeChild(o),o[i]=0,o=n}}else e.textContent=""}let r=0;function l(e,n,t,c){e=t&&t.parentNode||e;const u=typeof n;return n===c||(!n&&0!==n||!0===n?(s(e,c,t),c=null):c&&"string"!=typeof c||!("string"===u||"number"===u&&(n+=""))?"function"===u?o.subscribe(function(){c=l(e,n(),t,c)}):(s(e,c,t),n instanceof Node||(n=o.h(f,n)),11===n.nodeType&&n.firstChild!==n.lastChild&&(n.firstChild[i]=n.lastChild[i]=++r),e.insertBefore(n,t||null),c=n):(null!=c&&e.firstChild?t?(t.previousSibling||e.lastChild).data=n:e.firstChild.data=n:t?e.insertBefore(document.createTextNode(n),t):e.textContent=n,c=n)),c}function c(e,n){for(let n in e)o[n]=e[n];function t(){const e=f.slice.call(arguments);let t;function o(f){const i=typeof f;if(null==f);else if("string"===i)t?t.appendChild(document.createTextNode(f)):t=n?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f);else if(Array.isArray(f))t||(t=document.createDocumentFragment()),f.forEach(o);else if(f instanceof Node)t?t.appendChild(f):t=f;else if("object"===i)for(let e in f)u(e,f[e],t,n);else if("function"===i)if(t){const e=t.appendChild(document.createTextNode(""));f.$t?f.$t(1,l,t,""):l(t,f,e)}else t=f.apply(null,e.splice(0));else t.appendChild(document.createTextNode(""+f))}for(;e.length;)o(e.shift());return t}return o.h=t,t}function u(e,n,t,f,i){if("o"!==e[0]||"n"!==e[1]||n.$o)if("function"==typeof n)n.$t?n.$t(2,u,t,e):o.subscribe(()=>{u(e,n(),t,f,i)});else if(i)t.style.setProperty(e,n);else if(f||"data-"===e.slice(0,5)||"aria-"===e.slice(0,5))t.setAttribute(e,n);else if("style"===e)if("string"==typeof n)t.style.cssText=n;else for(e in n)u(e,n[e],t,f,!0);else if("attrs"===e)for(e in n)u(e,n[e],t,!0);else"class"===e&&(e+="Name"),t[e]=n;else!function(e,n,t){n=n.slice(2);const f=o.cleanup(()=>e.removeEventListener(n,a));t?e.addEventListener(n,a):f(),(e.t||(e.t={}))[n]=t}(t,e,n)}function a(e){return this.t[e.type](e)}const m=c(e),p=c(e,!0),d=n;function b(){return t.apply(m,arguments)}function g(){return t.apply(p,arguments)}export{o as api,c as context,m as h,p as hs,b as html,d as o,d as observable,g as svg};
