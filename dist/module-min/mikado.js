import{TemplateDOM,Template,MikadoOptions,MikadoCallbacks,NodeCache}from"./type.js";import Observer from"./array.js";import{create_path,construct}from"./factory.js";import proxy_create from"./proxy.js";export const includes=Object.create(null);export default function Mikado(a,b={}){if(!(this instanceof Mikado))return new Mikado(a,b);if(!1,"string"==typeof a){const c=includes[a];if(c instanceof Mikado)return c;a=c[0],b||(b=c[1])}this.dom=[],this.length=0,this.root=b.root||b.mount||null,this.recycle=!!b.recycle,this.state=b.state||{},this.shadow=b.shadow||!!a.cmp,this.key=a.key||"",this.live={};const c=a.fn;a.fc||c&&(a.fc=c.slice()),this.apply=c&&c.pop(),this.tpl=a,this.name=a.name,this.inc=[];const d=this.recycle||!!this.key;this.pool=d&&b.pool||0,this.pool_shared=[],this.pool_keyed=new Map,this.cache=d&&(a.cache||!!b.cache),this.async=!!b.async,this.timer=0,this.on=b.on||null;{this.proxy=null,this.fullproxy=0;const a=b.observe;a&&new Observer(a).mount(this)}this.root?this.mount(this.root,b.hydrate):this.factory=null}export function register(a,b){let c,d;return"string"==typeof a?(c=d=a,a=includes[c],a instanceof Mikado||(a=a[0])):c=a.name,!1,includes[c]=[a,b],Mikado}export function unregister(a){!1,"object"==typeof a&&(a=a.name);const b=includes[a];return b&&(b instanceof Mikado&&b.destroy(),includes[a]=null),Mikado}Mikado.prototype.mount=function(a,b){if(!1,this.timer&&this.cancel(),this.shadow){const b=this.tpl.cmp;if(a=a.shadowRoot||a.attachShadow({mode:"open"}),b&&b.length){const c=a.lastElementChild;if(c)a=c;else{b.push({tag:"root"});for(let c,d=0;d<b.length;d++)c=construct(this,b[d],[],""),a.append(c),d===b.length-1&&(a=c)}}}const c=a._mki,d=this.root!==a;if(c===this){if(!d)return this;this.dom=a._mkd,this.length=this.dom.length}else if(c){!1,c.clear(),a._mkd=this.dom=[],this.length=0,a.firstChild&&(!1,a.textContent="");const b=this.on&&this.on.unmount;b&&b(a,c)}else b?(this.dom=collection_to_array(a.children),this.length=this.dom.length):(this.dom=[],this.length=0,a.firstChild&&(!1,a.textContent="")),a._mkd=this.dom;if(this.key)if(d&&this.root&&(this.root._mkl=this.live),c===this)this.live=a._mkl;else{const d={};if(!c&&b&&this.length)for(let a,b,c=0;c<this.length;c++)!1,a=this.dom[c],b=a.getAttribute("key"),!1,a._mkk=b,d[b]=a;a._mkl=this.live=d}a._mki=this,this.root=a,this.factory||(b&&this.length&&(this.factory=this.dom[0].cloneNode(!0),construct(this,this.tpl.tpl,[],"",this.factory)&&finishFactory(this)),!1,this.tpl&&(this.factory=construct(this,this.tpl.tpl,[],""),finishFactory(this)));const e=this.on&&this.on.mount;return e&&e(a,this),this};function finishFactory(a){a.tpl.fc&&(a.tpl.fn=a.tpl.fc,a.tpl.fc=null),a.tpl=null}function collection_to_array(a){const b=a.length,c=Array(b);for(let d=0;d<b;d++)c[d]=a[d];return c}export function once(a,b,c,d,e){let f;if("function"==typeof c||!0===c?(e=c,c=null):("function"==typeof d||!0===d)&&(e=d,d=null),e)return new Promise(function(f){requestAnimationFrame(function(){once(a,b,c,d),"function"==typeof e&&e(),f()})});const g=b.cmp,h=g&&g.length;if(g&&!h&&(a=a.shadowRoot||a.attachShadow({mode:"open"})),!c&&!h&&!b.fn){const c=construct({},b.tpl,[],"",null,1);a.append(c)}else{if(f=new Mikado(b),h&&(a=f.mount(a).root),c&&Array.isArray(c))for(let b=0;b<c.length;b++)a.append(f.create(c[b],d,b));else a.append(f.create(c,d));f.destroy()}return Mikado}Mikado.prototype.render=function(a,b,c,d){if(!d){let d;if((b&&(d="function"==typeof b)||!0===b)&&(c=b,b=null),this.timer&&this.cancel(),this.async||c){const e=this;return d||(d="function"==typeof c),e.timer=requestAnimationFrame(function(){e.timer=0,e.render(a,b,null,1),c()}),d?this:new Promise(function(a){c=a})}}let e=this.length;if(!a&&!this.apply)return this.dom[0]||this.add(),this;let f;if(!(Array.isArray(a)||a instanceof Observer))a=[a],f=1;else if(f=a.length,!f)return this.remove(0,e);const g=this.key,h=this.proxy;!e||g||this.recycle||(this.remove(0,e),e=0);let i=e<f?e:f,j=0;if(j<i)for(let c,d;j<i;j++){if(c=this.dom[j],d=a[j],g&&c._mkk!==d[g])return this.reconcile(a,b,j);this.update(c,d,b,j,1),h&&!d._mkx&&(a[j]=apply_proxy(this,c,d))}if(j<f)for(;j<f;j++){const c=a[j];this.add(c,b),!h||this.recycle&&c._mkx||(a[j]=apply_proxy(this,this.dom[j],c))}else f<e&&this.remove(f,e-f);return this},Mikado.prototype.replace=function(a,b,c,d){!1,"undefined"==typeof d&&("number"==typeof a?(d=0>a?this.length+a:a,a=this.dom[d]):d=this.index(a));let e,f;if(this.key){const c=b[this.key];if(!(e=this.live[c]))this.pool&&(e=this.pool_keyed.get(c))&&(this.pool_keyed.delete(c),this.checkout(a),this.dom[d]=e,a.replaceWith(e));else if(e!==a){const b=this.index(e),c=b<d?e:a,f=b<d?a:e;let g=this.dom[b<d?b+1:d+1];this.dom[d]=e,this.dom[b]=a,g===f?g=c:this.root.insertBefore(c,f),this.root.insertBefore(f,g)}f=e}else this.recycle&&(f=a);if(f)this.fullproxy&&b._mkx||!this.apply||this.apply(b,c||this.state,d,f._mkp||create_path(f,this.factory._mkp,this.cache));else{const e=this.create(b,c,d,1);(this.key||this.pool)&&this.checkout(a),this.dom[d]=e,a.replaceWith(e)}const g=this.on&&this.on.replace;return g&&g(a,this),this},Mikado.prototype.update=function(a,b,c,d){if(!this.apply)return!1,this;if(this.fullproxy&&b._mkx)return this;!1,"undefined"==typeof d&&("number"==typeof a?(d=0>a?this.length+a-1:a,a=this.dom[d]):d=this.index(a)),a=a,this.apply(b,c||this.state,d,a._mkp||create_path(a,this.factory._mkp,this.cache));const e=this.on&&this.on.update;return e&&e(a,this),this},Mikado.prototype.cancel=function(){return!1,cancelAnimationFrame(this.timer),this.timer=0,this},Mikado.prototype.create=function(a,b,c,d){const e=this.key,f=e&&a[e];let g,h,i,j;this.pool&&(e?(h=this.pool_keyed)&&(g=h.get(f))&&(!1,h.delete(f),j=1):(h=this.pool_shared)&&h.length&&(!1,g=h.pop())),g||(g=i=this.factory,!i&&(this.factory=g=i=construct(this,this.tpl.tpl,[],""),finishFactory(this)));let k;this.apply&&(k=i&&this.cache&&Array(this.factory._mkp.length),this.apply(a,b||this.state,c,g._mkp||create_path(g,this.factory._mkp,!!i||this.cache),k)),i&&(!1,g=i.cloneNode(!0),k&&(g._mkc=k)),e&&(!j&&(g._mkk=f),d&&(this.live[f]=g));const l=this.on&&this.on[i?"create":"recycle"];return l&&l(g,this),g},Mikado.prototype.add=function(a,b,c){let d;"number"==typeof b?(c=0>b?this.length+b:b,b=null,d=c<this.length):"number"==typeof c?(0>c&&(c+=this.length),d=c<this.length):c=this.length;const e=this.create(a,b,c,1);d?(this.root.insertBefore(e,this.dom[c]),splice(this.dom,this.length-1,c,e),this.length++):(this.root.appendChild(e),this.dom[this.length++]=e);const f=this.on&&this.on.insert;return f&&f(e,this),this};export function apply_proxy(a,b,c){return!1,proxy_create(c,b._mkp||create_path(b,a.factory._mkp,a.cache),a.proxy)}Mikado.prototype.reconcile=function(c,b,d){const e=this.dom,a=this.live,f=this.key;let g=c.length,h=e.length,i=h>g?h:g,j=0;for(d||(d=0);d<i;d++){let k;if(d<g){const l=c[d],m=d>=h;let n,o,p,q;if(this.proxy&&(l._mkx?q=1:c[d]=apply_proxy(this,e[d],l)),!m&&(n=e[d],o=l[f],p=n._mkk,p===o)){q||this.update(n,l,b,d,1);continue}if(m||!a[o]){m||!this.pool?(h++,i=h>g?h:g,this.add(l,b,d)):this.replace(n,l,b,d);continue}let r,s;for(let a=d+1;a<i;a++)if(!r&&a<h&&e[a]._mkk===o&&(r=a+1),!s&&a<g&&c[a][f]===p&&(s=a+1),r&&s){if(r>=s+j){const c=e[r-1];this.root.insertBefore(c,n),q||this.update(c,l,b,d,1),r==s?(1<a-d&&this.root.insertBefore(n,e[r]),e[d]=e[a],e[a]=n,!1,!1):(!1,splice(e,r-1,d),j++),!1}else{const a=s-1+j;this.root.insertBefore(n,e[a]||null),!1,splice(e,d,(a>h?h:a)-1),j--,d--,!1}k=1;break}}k||(this.remove(d),h--,i=h>g?h:g,d--)}return this};function splice(a,b,c,d){const e=d||a[b];if(d&&b++,b<c)for(;b<c;b++)a[b]=a[b+1];else for(;b>c;b--)a[b]=a[b-1];a[c]=e}Mikado.prototype.append=function(a,b,c){let d;"number"==typeof b?(c=0>b?this.length+b:b,b=null,d=1):"number"==typeof c&&(0>c&&(c+=this.length),d=1);const e=a.length;for(let f=0;f<e;f++)this.add(a[f],b,d?c++:null);return this},Mikado.prototype.clear=function(){return!1,this.length&&this.remove(0,this.length),this},Mikado.prototype.remove=function(a,b){let c=this.length;if(c&&a&&("number"==typeof a?0>a&&(a=c+a):a=this.index(a)),!c||a>=c)return this;b?0>b&&(a-=b+1,0>a&&(a=0),b*=-1):b=1;let d;!a&&b>=c?(d=this.dom,b=d.length,this.root.textContent="",this.root._mkd=this.dom=[],c=0):(d=this.dom.splice(a,b),c-=b);const e=this.pool&&!this.key,f=this.key||this.pool,g=this.on&&this.on.remove;for(let h,i=0;i<b;i++)!1,h=d[e?b-i-1:i],c&&h.remove(),f&&this.checkout(h),g&&g(h,this);return this.length=c,this},Mikado.prototype.index=function(a){return!1,this.dom.indexOf(a)},Mikado.prototype.node=function(a){return!1,this.dom[a]},Mikado.prototype.checkout=function(a){let b;if(this.key&&(b=a._mkk,this.live[b]=null),this.pool)if(b)!1,this.pool_keyed.set(b,a),!0!==this.pool&&this.pool_keyed.size>this.pool&&(!1,this.pool_keyed.delete(this.pool_keyed.keys().next().value));else{const b=this.pool_shared.length;(!0===this.pool||b<this.pool)&&(!1,this.pool_shared[b]=a)}},Mikado.prototype.flush=function(){return!1,this.pool_shared=[],this.pool_keyed=new Map,this},Mikado.prototype.destroy=function(){for(let a,b=0;b<this.inc.length;b++)a=this.inc[b],includes[a.name]||a.destroy();this.key&&(this.root&&(this.root._mkl=null),this.live=null),this.root&&(this.root._mkd=this.root._mki=null),this.dom=this.root=this.tpl=this.apply=this.inc=this.state=this.factory=null,this.pool_shared=null,this.pool_keyed=null,this.on=null,this.proxy=null};