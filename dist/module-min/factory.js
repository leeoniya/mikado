import{TemplateDOM,Template,MikadoOptions,NodeCache}from"./type.js";import Mikado,{includes}from"./mikado.js";import{listen}from"./event.js";import{tick}from"./profiler.js";export function create_path(a,b,c){const d=b.length,e=[],f={};for(let g,h,i,j,k,l=0,m=null;l<d;l++)g=b[l],h=g.v,h?(j=i=f[h],!j&&(i=resolve(a,h,f),j=i[0],i=i[1]||j)):j=i=a,c&&k!==i&&(k=i,i._mkc=m={}),!1,e[l]=new Cache(m,j,"");return a._mkp=e,e}function resolve(a,b,c){let d;for(let e=0,f=b.length,g="";e<f;e++){const f=b[e];g+=f,c[g]?a=c[g]:(">"===f?a=a.firstChild:"|"===f?(d=a,a=a.firstChild):"@"===f?(d=a,a=a.style):a=a.nextSibling,c[g]=a)}return[a,d]}export function construct(a,b,c,d,e,f){!1,f||(a.fullproxy=1);const g=e||(b.tag?b.svg?document.createElementNS("http://www.w3.org/2000/svg",b.tag):document.createElement(b.tag):document.createTextNode(b.text));let h,j;if((j=b.class)&&("object"==typeof j?(!1,c.push(new Cache(h={_c:""},g,d)),(j=j[0])?init_proxy(a,j,["_c",c.length-1]):a.fullproxy=0):!e&&(g.className=j)),j=b.attr)for(const b in j){let f=j[b];"object"==typeof f?(!1,h||c.push(new Cache(h={},g,d)),h["_a"+b]=!1,(f=f[0])?init_proxy(a,f,["_a",c.length-1,b]):a.fullproxy=0):!e&&g.setAttribute(b,f)}if(j=b.event)for(const a in j)e||g.setAttribute(a,j[a]),listen(a);if((j=b.style)&&("object"==typeof j?(!1,c.push(new Cache(h||(h={}),g.style,d+"@")),h._s="",(j=j[0])?init_proxy(a,j,["_s",c.length-1]):a.fullproxy=0):!e&&(g.style.cssText=j)),j=b.text){if("object"==typeof j){let f=g;j=j[0],b.tag?(d+="|",f=!e&&g.firstChild,!f&&(f=document.createTextNode(j),g.appendChild(f))):h={},(h||(h={}))._t=j,!1,c.push(new Cache(h,f,d)),j?init_proxy(a,j,["_t",c.length-1]):a.fullproxy=0}else e||(b.tag?g.textContent=j:g.nodeValue=j);}else if(j=b.child){if(e&&(e=e.firstChild,!e))return!1,null;j.constructor!==Array&&(j=[j]);for(let b,f=0,h=j.length;f<h;f++){b=j[f],d+=f?"+":">";const i=construct(a,b,c,d,e,1);if(!e)g.appendChild(i);else if(f<h-1&&(e=e.nextSibling,!e))return!1,null}}else if(j=b.html)"object"==typeof j?(!1,h||c.push(new Cache(h={},g,d)),h._h="",(j=j[0])?init_proxy(a,j,["_h",c.length-1]):a.fullproxy=0):!e&&(g.innerHTML=j);else if(j=b.inc){!1,!1,h||c.push(new Cache(null,g,d));let b;if("string"==typeof j){if(b=includes[j],!(b instanceof Mikado)){const a=b[0],c=b[1];c&&(c.async=!1,e&&(c.root=e,c.hydrate=!0)),includes[j]=b=new Mikado(a,c)}}else if(1!==j){const c=a.inc.length;j=j;const d={name:a.name+"|"+c,tpl:j,key:j.key,cache:j.cache,fn:a.tpl.fn},f={recycle:a.recycle,cache:a.cache,pool:a.pool,state:a.state,mount:g,hydrate:!!e};b=new Mikado(d,f)}1!==j&&a.inc.push(b)}return h&&(g._mkc=h),f||(g._mkp=c),g}function init_proxy(a,b,c){!1,a.proxy||(a.proxy={}),(a.proxy[b]||(a.proxy[b]=[])).push(c)}export function Cache(a,b,c){this.c=a,this.n=b,this.v=c}Cache.prototype._a=function(a,b){if(this.c){if(("undefined"!=typeof this.c["_a"+a]&&this.c["_a"+a])===b)return void 0;!1,!1,this.c["_a"+a]=b}!1===b?this.n.removeAttribute(a):this.n.setAttribute(a,b)},Cache.prototype._t=function(a){if(this.c){if(("undefined"==typeof this.c._t?"":this.c._t)===a)return void 0;!1,!1,this.c._t=a}this.n.nodeValue=a},Cache.prototype._c=function(a){if(this.c){if((this.c._c||"")===a)return void 0;!1,!1,this.c._c=a}this.n.className=a},Cache.prototype._s=function(a){if(this.c){if((this.c._s||"")===a)return void 0;!1,!1,this.c._s=a}this.n.cssText=a},Cache.prototype._h=function(a){if(this.c){if((this.c._h||"")===a)return void 0;!1,!1,this.c._h=a}this.n.innerHTML=a},Cache.prototype._a,Cache.prototype._t,Cache.prototype._s,Cache.prototype._c,Cache.prototype._h;