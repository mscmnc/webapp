(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,n){e.exports=n(77)},44:function(e,t,n){},46:function(e,t,n){},67:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);n(34);var a=n(0),r=n.n(a),c=n(29),o=n.n(c),l=n(6),u=n(9),i=n(31),s=(n(44),n(3)),d=n(4),p=n(7),h=n(5),m=n(8),b=n(13),f=n(19),E=(n(46),n(20)),y=n.n(E),v="".concat("98838b687c48f8031d545141888438688df899a3c2a300b2cdef43be15b93ae5"),O=function(e){return{type:"SEARCH_SUCCESS",data:e,loading:!1}},j=function(e){return{type:"SEARCH_FAIL",error:e,loading:!1}},g=function(e){return function(t){t({type:"SEARCH_START"}),y()({method:"GET",url:"https://api.unsplash.com/search/photos/?client_id="+v,params:{per_page:"12",orientation:"landscape",query:e}}).then(function(e){t(O(e.data.results))}).catch(function(e){t(j(e))})}},S=n(12),w=function(e){return r.a.createElement("input",{type:e.type,placeholder:e.placeholder,id:e.id,onChange:e.changed,value:e.value})},k=function(e){return r.a.createElement("button",{type:e.type,onClick:e.onClick,disabled:e.disabled},e.title)},C=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).search=function(e){e.preventDefault(),n.props.onInitGetResultsBySearch(n.state.search),n.setState({search:""})},n.saveQuery=function(){n.props.onSaveQuery(n.state.search),n.setState({search:""})},n.state={search:""},n.searchChange=n.searchChange.bind(Object(S.a)(Object(S.a)(n))),n}return Object(m.a)(t,e),Object(d.a)(t,[{key:"searchChange",value:function(e){this.setState({search:e.target.value}),this.setState({emptyValue:!0})}},{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("div",{className:"webapp-header--search"},r.a.createElement(w,{type:"text",placeholder:"Search",id:"SearchInput",value:this.state.search,changed:this.searchChange})),r.a.createElement("div",{className:"webapp-header--buttons"},r.a.createElement("div",{className:"buttons-search"},r.a.createElement(k,{title:"Search",type:"submit",disabled:!this.state.search,onClick:this.search})),r.a.createElement("div",{className:"buttons-save"},r.a.createElement(k,{title:"Save",type:"button",disabled:!this.state.search,onClick:this.saveQuery}))))}}]),t}(a.Component),_=Object(l.b)(null,function(e){return{onInitGetResultsBySearch:function(t){return e(g(t))},onSaveQuery:function(t){return e({type:"SAVE_QUERY",savedQuery:t})}}})(C),Q=function(e){return r.a.createElement("li",{className:"webapp-bottom-imageGrid-img"},r.a.createElement("img",{src:e.url,alt:"Unsplash photos"}),r.a.createElement("a",{href:e.user,target:"_blank",rel:"noopener noreferrer"},"Photo by ",e.name),r.a.createElement("br",null),r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"See it on Unsplash"))},R=function(){return r.a.createElement("div",{className:"webapp-bottom-imageGrid--noImg"},r.a.createElement("h6",null,"There are no photos by your keyword. Please try another"))},I=(n(67),function(){return r.a.createElement("div",{className:"lds-dual-ring"})}),N=function(){return r.a.createElement("div",{className:"webapp-bottom-imageGrid--noImg"},r.a.createElement("h6",null,"Error! Please try again!"))},A=(n(21),function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=r.a.createElement(I,null);return e=this.props.loading||null!=this.props.error?this.props.loading?r.a.createElement(I,null):r.a.createElement(N,null):this.props.data.length>0?this.props.data.map(function(e){return r.a.createElement(Q,{key:e.id,url:e.urls.small,user:e.user.links.html,name:e.user.name,link:e.links.html})}):r.a.createElement(R,null),r.a.createElement("ul",{className:"webapp-bottom-imageGrid"},e,null)}}]),t}(a.Component)),T=Object(l.b)(function(e){return{data:e.data,loading:e.loading,error:e.error}})(A),G=function(e){return r.a.createElement("svg",{onClick:e.onClick,className:"removeButton",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"13",height:"13",viewBox:"0 0 32 32"},r.a.createElement("path",{d:"M31.708 25.708c-0-0-0-0-0-0l-9.708-9.708 9.708-9.708c0-0 0-0 0-0 0.105-0.105 0.18-0.227 0.229-0.357 0.133-0.356 0.057-0.771-0.229-1.057l-4.586-4.586c-0.286-0.286-0.702-0.361-1.057-0.229-0.13 0.048-0.252 0.124-0.357 0.228 0 0-0 0-0 0l-9.708 9.708-9.708-9.708c-0-0-0-0-0-0-0.105-0.104-0.227-0.18-0.357-0.228-0.356-0.133-0.771-0.057-1.057 0.229l-4.586 4.586c-0.286 0.286-0.361 0.702-0.229 1.057 0.049 0.13 0.124 0.252 0.229 0.357 0 0 0 0 0 0l9.708 9.708-9.708 9.708c-0 0-0 0-0 0-0.104 0.105-0.18 0.227-0.229 0.357-0.133 0.355-0.057 0.771 0.229 1.057l4.586 4.586c0.286 0.286 0.702 0.361 1.057 0.229 0.13-0.049 0.252-0.124 0.357-0.229 0-0 0-0 0-0l9.708-9.708 9.708 9.708c0 0 0 0 0 0 0.105 0.105 0.227 0.18 0.357 0.229 0.356 0.133 0.771 0.057 1.057-0.229l4.586-4.586c0.286-0.286 0.362-0.702 0.229-1.057-0.049-0.13-0.124-0.252-0.229-0.357z",fill:"#aaa"}))},U=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("li",{onClick:function(){return e.props.onSearchByQuery(e.props.query)},key:this.props.key},this.props.query,r.a.createElement(G,{onClick:function(){return e.props.onDeleteQuery(e.props.delId)}}))}}]),t}(a.Component),q=Object(l.b)(null,function(e){return{onDeleteQuery:function(t){return e({type:"DELETE_QUERY",delId:t})},onSearchByQuery:function(t){return e(g(t))}}})(U),B=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"webapp-bottom-queries"},r.a.createElement("ul",null,this.props.savedQueries.map(function(e){return r.a.createElement(q,{key:e.id,query:e.query,delId:e.id})})))}}]),t}(a.Component),D=Object(l.b)(function(e){return{savedQueries:e.savedQuery}})(B),H=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onInitGetRandom()}},{key:"render",value:function(){return r.a.createElement("div",{className:"webapp"},r.a.createElement("div",{className:"webapp-header"},r.a.createElement(_,null)),r.a.createElement("div",{className:"webapp-bottom"},r.a.createElement(T,null),r.a.createElement(D,null)))}}]),t}(a.Component),L=Object(l.b)(null,function(e){return{onInitGetRandom:function(){return e(function(e){e({type:"SEARCH_START"}),y()({method:"GET",url:"https://api.unsplash.com/photos/random/?client_id="+v,params:{count:"12",orientation:"landscape"}}).then(function(t){e(O(t.data))}).catch(function(t){e(j(t))})})},onInitGetResultsbySearch:function(t){return e(g(t))}}})(H);b.b.add(f.b,f.a);var x=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement(L,null)}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=n(11),V=n(32),Y=n.n(V),M={data:null,query:null,loading:!0,savedQuery:[],error:null},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_START":return Object(P.a)({},e,{loading:!0});case"SEARCH_SUCCESS":return Object(P.a)({},e,{data:t.data,loading:!1});case"SEARCH_FAIL":return Object(P.a)({},e,{error:t.error,loading:!1});case"SAVE_QUERY":return Object(P.a)({},e,{savedQuery:e.savedQuery.concat({id:Y.a.generate(),query:t.savedQuery})});case"DELETE_QUERY":var n=e.savedQuery.filter(function(e){return e.id!==t.delId});return Object(P.a)({},e,{savedQuery:n});default:return e}},J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c,W=Object(u.d)(F,J(Object(u.a)(i.a))),X=r.a.createElement(l.a,{store:W},r.a.createElement(x,null));o.a.render(X,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.8e877d93.chunk.js.map