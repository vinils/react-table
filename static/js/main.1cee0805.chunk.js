/*! For license information please see main.1cee0805.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-table-example"]=this["webpackJsonpreact-table-example"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);n(8);var r=n(0),a=n.n(r),o=n(5),i=n.n(o),c=n(6),l=n.n(c),s=(n(15),n(1)),u=n(2),p=n(4),f=n(3);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function h(e,t){return e(t={exports:{}},t.exports),t.exports}var b="function"===typeof Symbol&&Symbol.for,y=b?Symbol.for("react.element"):60103,g=b?Symbol.for("react.portal"):60106,C=b?Symbol.for("react.fragment"):60107,x=b?Symbol.for("react.strict_mode"):60108,E=b?Symbol.for("react.profiler"):60114,v=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,O=b?Symbol.for("react.async_mode"):60111,j=b?Symbol.for("react.concurrent_mode"):60111,w=b?Symbol.for("react.forward_ref"):60112,S=b?Symbol.for("react.suspense"):60113,$=b?Symbol.for("react.suspense_list"):60120,_=b?Symbol.for("react.memo"):60115,P=b?Symbol.for("react.lazy"):60116,N=b?Symbol.for("react.block"):60121,T=b?Symbol.for("react.fundamental"):60117,F=b?Symbol.for("react.responder"):60118,A=b?Symbol.for("react.scope"):60119;function D(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case y:switch(e=e.type){case O:case j:case C:case E:case x:case S:return e;default:switch(e=e&&e.$$typeof){case k:case w:case P:case _:case v:return e;default:return t}}case g:return t}}}function B(e){return D(e)===j}var L={AsyncMode:O,ConcurrentMode:j,ContextConsumer:k,ContextProvider:v,Element:y,ForwardRef:w,Fragment:C,Lazy:P,Memo:_,Portal:g,Profiler:E,StrictMode:x,Suspense:S,isAsyncMode:function(e){return B(e)||D(e)===O},isConcurrentMode:B,isContextConsumer:function(e){return D(e)===k},isContextProvider:function(e){return D(e)===v},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===y},isForwardRef:function(e){return D(e)===w},isFragment:function(e){return D(e)===C},isLazy:function(e){return D(e)===P},isMemo:function(e){return D(e)===_},isPortal:function(e){return D(e)===g},isProfiler:function(e){return D(e)===E},isStrictMode:function(e){return D(e)===x},isSuspense:function(e){return D(e)===S},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===C||e===j||e===E||e===x||e===S||e===$||"object"===typeof e&&null!==e&&(e.$$typeof===P||e.$$typeof===_||e.$$typeof===v||e.$$typeof===k||e.$$typeof===w||e.$$typeof===T||e.$$typeof===F||e.$$typeof===A||e.$$typeof===N)},typeOf:D},R=(h((function(e,t){0})),h((function(e){e.exports=L})),Object.getOwnPropertySymbols),M=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;function q(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}})()&&Object.assign;var I="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function z(e,t,n,r,a){}z.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function W(){}function J(){}J.resetWarningCache=W;var U=h((function(e){e.exports=function(){function e(e,t,n,r,a,o){if(o!==I){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:J,resetWarningCache:W};return n.PropTypes=n,n}()})),V=function e(t){var n=!!t.highLight;return t.children.map((function(r,o){var i=t.style&&t.style.nthChild?t.style.nthChild:"#FFFFFF",c=t.id?t.id+o:o,l=t.rowMap?t.rowMap(r):r,s=t.getChilds?t.getChilds(r):[];return!t.filter||t.filter(r)?(n=!n,a.a.createElement(a.a.Fragment,{key:c},a.a.createElement(t.row,{key:c,style:n?{backgroundColor:i}:null},a.a.createElement(t.cols,{colsName:t.colsName,onClick:function(e){return t.onClick(r,e)}},l)),s.length>0?a.a.createElement(e,d({},t,{id:c+1,key:c+1,highLight:n}),s):null)):null}))};V.propTypes={row:U.func.isRequired,cols:U.func.isRequired};var G=function(e){return e.colsName&&e.colsName.length>0?e.colsName.map((function(t,n){return e.col(e.children[t],t,e.onClick)})):e.children.map((function(t,n){return e.col(t,n,e.onClick)}))};G.propTypes={children:U.object,col:U.func.isRequired,colsName:U.array};var Y=function(e,t,n){return void 0===t&&(t=null),void 0===n&&(n=null),a.a.createElement("td",{key:t,onClick:function(){return n?n(t):null}},e)},K=function(e){return G(d(d({},e),{},{col:Y}))},Q=function(e){return a.a.createElement("tr",e,e.children)},X=function(e){return a.a.createElement(V,d({},e,{row:Q,cols:K}),e.children)},Z=function(e){return a.a.createElement("tr",null,a.a.createElement(K,{onClick:e.onClick},e.children))},ee=function(e){return a.a.createElement("button",e,null===e.expanded?a.a.createElement("span",null,"\xa0"):e.expanded?"-":"+")};ee.propTypes={expanded:U.bool};var te=function(e){function t(t){var n;return(n=e.call(this,t)||this).expandLine=function(e){var t=[].concat(n.state.body);n.loop(t,(function(r){e===r&&r.hasChilds&&(r.showChilds=!r.showChilds,n.setState({body:t}))}))},n.expandAll=function(){var e=[].concat(n.state.body);n.expandDefault=!n.expandDefault,n.loop(e,(function(e){e.hasChilds&&(e.showChilds=n.expandDefault)})),n.setState({body:e})},n.mapLine=function(e){return d({expandButton:a.a.createElement(ee,{expanded:e.showChilds,onClick:function(){return n.expandLine(e)}})},e.originalData)},n.filter=function(e){if(!n.props.filter)return!0;var t=!1;return n.loop([e],(function(e){t=t||n.props.filter(e.originalData)})),t},n.expandDefault=null==t.expand||t.expand,n.originalData=t.children,n.initialBody=n.map(n.originalData),n.state={body:n.initialBody},n}m(t,e);var n=t.prototype;return n.componentWillReceiveProps=function(e){e.children&&e.children!==this.props.children&&(this.originalData=e.children,this.initialBody=this.map(this.originalData),this.setState({body:this.initialBody}))},n.getChilds=function(e){return e.showChilds?e.childs:[]},n.map=function(e){var t=this;return e.map((function(e){var n=t.props.getChilds(e),r=n.length>0;return{originalData:e,childs:t.map(n),hasChilds:r,showChilds:r?t.expandDefault:null}}))},n.loop=function(e,t){var n=this;e.forEach((function(e){if(t(e),e.childs.length>0)return n.loop(e.childs,t)}))},n.handleClick=function(e,t){},n.getHead=function(e,t,n){e.forEach((function(e){e&&(e.description?(t.push(e.description),e.name&&n.push(e.name)):t.push(e))}))},n.render=function(){var e=[{description:a.a.createElement(ee,{expanded:this.expandDefault,onClick:this.expandAll}),name:"expandButton"}].concat(this.props.head),t=[],n=[];return this.getHead(e,t,n),a.a.createElement("table",{style:this.props.style},a.a.createElement("thead",null,t?a.a.createElement(Z,null,t):null),a.a.createElement("tbody",null,a.a.createElement(X,d({},this.props,{style:this.props.style.row,getChilds:this.getChilds,colsName:n,rowMap:this.mapLine,onClick:this.handleClick,filter:this.filter}),this.state.body)))},t}(r.Component),ne=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleBodyClick=function(e,t){console.log(e,t),n.props.onClick&&n.props.onClick(e,t)},n.initialBody=t.children,n.state={body:n.initialBody},n}m(t,e);var n=t.prototype;return n.handleHeadClick=function(e){console.log(e)},n.getHead=function(e,t,n){e.forEach((function(e){e&&(e.description?(t.push(e.description),e.name&&n.push(e.name)):t.push(e))}))},n.render=function(){var e=this.props.head?this.props.head:[],t=[],n=[];return this.getHead(e,t,n),a.a.createElement("table",{style:this.props.style},a.a.createElement("thead",null,!t||t.length<=0?null:a.a.createElement(Z,{onClick:this.handleHeadClick},t)),a.a.createElement("tbody",null,a.a.createElement(X,d({},this.props,{onClick:this.handleBodyClick,colsName:n}),this.state.body)))},t}(r.Component);ne.propTypes={head:U.array};var re=ne,ae=[["texttext","texttext","texttext"],["texttext","texttext","texttext"],["texttext","texttext","texttext"],["texttext","texttext","texttext"]],oe=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(re,{style:{border:"1px solid black"}},ae)}}]),n}(r.Component),ie=[{description:"Name 1",name:"name1"},{description:"Name 2",name:"name2"},{description:"Name 3",name:"name3"}],ce={name1:"root1",name2:"aaaa",name3:"bbbbb",childs:[{name1:"nodeA",name2:"aaaa",name3:"bbbbb",childs:[{name1:"nodeAA",name2:"aaaa",name3:"bbbbb",childs:[]}]},{name1:"nodeB",name2:"aaaa",name3:"bbbbb",childs:[]}]},le=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(te,{style:{border:"1px solid black"},head:ie,getChilds:function(e){return e.childs}},[ce])}}]),n}(r.Component),se={name1:"root",name2:"aaaa",name3:"bbbbb",childs:[{name1:"nodeA",name2:"aaaa",name3:"bbbbb",childs:[{name1:"nodeAA",name2:"aaaa",name3:"bbbbb",childs:[]}]},{name1:"nodeB",name2:"aaaa",name3:"bbbbb",childs:[]}]},ue=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).handleFilterChange=function(e){e?r.setState({search:function(t){return t.name1.toLowerCase().indexOf(e.toLowerCase())>=0}}):r.setState({search:function(e){return!0}})},r.state={search:function(e){return!0}},r}return Object(u.a)(n,[{key:"getHead2",value:function(){var e=this;return[{name:"name1",description:a.a.createElement("div",null,a.a.createElement("span",null,"a"),a.a.createElement("br",null),a.a.createElement("input",{size:10,onChange:function(t){return e.handleFilterChange(t.target.value)}}))},{name:"name2",description:"b"},{name:"name3",description:"c"}]}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(te,{style:{border:"1px solid black"},head:this.getHead2(),getChilds:function(e){return e.childs},filter:this.state.search},[se]))}}]),n}(r.Component),pe=function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("center",null,a.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo"}),a.a.createElement("h1",{className:"App-title"},"React Table"))),a.a.createElement("a",{href:"https://github.com/vinils/react-table"},a.a.createElement("img",{style:{position:"absolute",top:0,left:0,border:0},src:"https://camo.githubusercontent.com/567c3a48d796e2fc06ea80409cc9dd82bf714434/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f6c6566745f6461726b626c75655f3132313632312e706e67",alt:"Fork me on GitHub","data-canonical-src":"https://s3.amazonaws.com/github/ribbons/forkme_left_darkblue_121621.png"})),a.a.createElement("br",null),a.a.createElement("center",null,a.a.createElement("div",null,a.a.createElement(oe,null),a.a.createElement("br",null),a.a.createElement(le,null),a.a.createElement("br",null),a.a.createElement(ue,null))))};i.a.render(a.a.createElement(pe,null),document.getElementById("root"))},6:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},7:function(e,t,n){e.exports=n(16)},8:function(e,t,n){}},[[7,1,2]]]);
//# sourceMappingURL=main.1cee0805.chunk.js.map