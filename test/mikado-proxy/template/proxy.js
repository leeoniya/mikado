export default{name:"proxy",key:"id",cache:true,tpl:{tag:"section",attr:{"data-id":["id"],"data-date":["date"],"data-index":["index"]},child:{tag:"div",child:[{tag:"div",class:"title",text:["title"]},{tag:"div",class:"content",text:["content"]},{tag:"div",class:"footer",text:["footer"]}],class:["classname"],style:"padding-right:10px;"}},fn:[function(data,view,index,_p){let _o,_v;_o=_p[0];_v=data.id;if(_o.c["_adata-id"]!==_v){_o.c["_adata-id"]=_v;_o.n[_v===false?"removeAttribute":"setAttribute"]("data-id",_v)}_v=data.date;if(_o.c["_adata-date"]!==_v){_o.c["_adata-date"]=_v;_o.n[_v===false?"removeAttribute":"setAttribute"]("data-date",_v)}_v=data.index;if(_o.c["_adata-index"]!==_v){_o.c["_adata-index"]=_v;_o.n[_v===false?"removeAttribute":"setAttribute"]("data-index",_v)}_o=_p[1];_v=data.classname;if(_o.c._c!==_v){_o.c._c=_v;_o.n.className=_v}_o=_p[2];_v=data.title;if(_o.c._t!==_v){_o.c._t=_v;_o.n.nodeValue=_v}_o=_p[3];_v=data.content;if(_o.c._t!==_v){_o.c._t=_v;_o.n.nodeValue=_v}_o=_p[4];_v=data.footer;if(_o.c._t!==_v){_o.c._t=_v;_o.n.nodeValue=_v}}]}