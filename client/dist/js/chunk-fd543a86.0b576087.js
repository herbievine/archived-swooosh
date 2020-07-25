(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd543a86"],{"36d4":function(t,e,n){},"41f2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"analytics"},[n("keep-alive",[n("GetURLInfo")],1),n("AnalyticsData")],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("label",{attrs:{for:"id"}},[t._v("Enter ID to get data:")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.data.id,expression:"data.id",modifiers:{trim:!0}}],staticClass:"id",class:t.error&&"id"===t.error.path?"error":"",attrs:{id:"id",type:"text",placeholder:"id"},domProps:{value:t.data.id},on:{input:function(e){e.target.composing||t.$set(t.data,"id",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),n("div",{staticClass:"content"},[n("Button",{attrs:{type:"submit",name:"Get analytics"},nativeOn:{submit:function(e){return t.submit(e)}}}),n("p",{class:t.error||t.getAnalyticsEvents.alert?"errorP":""},[t._v(" "+t._s(t.error?t.messages:t.getAnalyticsEvents.msg?t.getAnalyticsEvents.msg:t.success?"URL analytics available":"")+" ")])],1)])])},c=[],i=(n("99af"),n("d3b7"),n("ac1f"),n("5319"),n("96cf"),n("1da1")),o=n("5530"),l=n("8bd7"),u=n("2f62"),d={name:"GetURLInfo",components:{Button:l["a"]},data:function(){return{error:null,success:!1,data:{id:null}}},computed:Object(o["a"])(Object(o["a"])({},Object(u["c"])(["getAnalyticsEvents"])),{},{messages:function(){var t={rate:"Too many requests",unknown:"Something went wrong",typeError:"Missing fields",matches:"Invalid characters",notFound:"ID not found"};return t[this.error.type]}}),methods:Object(o["a"])({submit:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.error=null,t.success=!1,t.setAnalyticsEvents({}),t.data.id){e.next=7;break}return e.abrupt("return",t.error={type:"typeError"});case 7:if(/^[a-zA-Z0-9\-_]+$/gi.test(t.data.id)){e.next=9;break}return e.abrupt("return",t.error={type:"matches"});case 9:return e.next=11,window.location.origin.replace(/8081/g,"8080");case 11:return n=e.sent,r=new Headers,e.next=15,fetch("".concat(n,"/api/v1/analytics/").concat(t.data.id.toLowerCase()),{method:"GET",headers:Object(o["a"])(Object(o["a"])({},r),{},{"Content-Type":"application/json"})});case 15:return a=e.sent,e.next=18,a.json();case 18:s=e.sent,s.error&&(t.error=s.error),s.ok&&(t.success=!0,t.setSearchResult(s.data));case 21:case"end":return e.stop()}}),e)})))()}},Object(u["b"])({setSearchResult:"setSearchResult",setAnalyticsEvents:"setAnalyticsEvents"}))},f=d,p=(n("c67b"),n("2877")),h=Object(p["a"])(f,s,c,!1,null,"1903aeeb",null),m=h.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return Object.keys(t.getSearchResult).length>=1?n("div",{staticClass:"card"},[n("div",{staticClass:"header"},[n("HoverElement",{attrs:{keyword:"id",text:t.sanitize(t.getSearchResult.id),heading:"URL ID",data:[t.getSearchResult.id],float:"right"}}),n("HoverElement",{attrs:{keyword:"date",text:t.formatDate,heading:"URL created on",data:[t.getSearchResult.createdOn],float:"left"}})],1),n("div",{staticClass:"body"},[n("HoverElement",{attrs:{keyword:"main",text:t.cleanUrl(t.getSearchResult.shortUrl),heading:t.getSearchResult.shortUrl,data:["Redirects to:",t.getSearchResult.url],links:["Follow Link"],main:!0},on:{clicked:t.send}})],1),n("div",{staticClass:"footer"},[n("HoverElement",{attrs:{keyword:"clicks",text:t.getSearchResult.clicks+" clicks",heading:"Total clicks for "+t.sanitize(t.getSearchResult.id),data:[t.getSearchResult.clicks],float:"right"}}),n("HoverElement",{attrs:{keyword:"delete",text:"Delete",heading:"Are you sure?",links:["Yes","No"],float:"left"},on:{clicked:t.deleteURL}})],1)]):t._e()},g=[],b=(n("a15b"),n("fb6a"),n("3ca3"),n("1276"),n("498a"),n("ddb0"),n("2b3d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tip",class:"left"===t.float?"tip-left":"right"===t.float?"tip-right":""},[n("p",{class:t.main?"link":""},[t._v(t._s(t.text))]),n("div",{staticClass:"contents",style:t.main?"top: 25px !important":""},[t.heading?n("h3",[t._v(t._s(t.heading))]):t._e(),t._l(t.data,(function(e,r){return n("p",{key:r},[t._v(t._s(e))])})),n("div",t._l(t.links,(function(e,r){return n("h6",{key:r,on:{click:function(n){return t.onClick(e)}}},[t._v(" "+t._s(e)+" ")])})),0)],2)])}),y=[],k={name:"HoverElement",props:{keyword:{type:String,required:!0},text:{type:String,required:!0},data:{type:Array,required:!1},heading:{type:String,required:!1},links:{type:Array,required:!1},float:{type:String,required:!1},main:{type:Boolean,required:!1,default:!1}},methods:{onClick:function(t){this.$emit("clicked","".concat(this.keyword,"-").concat(t).toLowerCase())}}},R=k,w=(n("cfd7"),Object(p["a"])(R,b,y,!1,null,"66cb62d9",null)),E=w.exports,x={name:"AnalyticsData",components:{HoverElement:E},computed:Object(o["a"])(Object(o["a"])({},Object(u["c"])(["getSearchResult"])),{},{formatDate:function(){return this.getSearchResult.createdOn.split(",")[1].trim()}}),methods:Object(o["a"])({sanitize:function(t){return t.length>=14?"".concat(t.split("").slice(0,14).join(""),"..."):t},cleanUrl:function(t){var e=new URL(t),n=e.pathname.length>=10?"".concat(e.pathname.split("").slice(0,10).join(""),"..."):e.pathname;return"https://".concat(e.hostname).concat(n)},send:function(){window.open(this.getSearchResult.shortUrl)},deleteURL:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var r,a,s,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("delete-no"!==t){n.next=2;break}return n.abrupt("return",null);case 2:return n.next=4,window.location.origin.replace(/8081/g,"8080");case 4:return r=n.sent,a=new Headers,n.next=8,fetch("".concat(r,"/api/v1/delete/").concat(e.getSearchResult.id),{method:"DELETE",headers:Object(o["a"])(Object(o["a"])({},a),{},{"Content-Type":"application/json"})});case 8:return s=n.sent,n.next=11,s.json();case 11:c=n.sent,c.ok||e.setAnalyticsEvents({msg:"Sorry, an error occurred",alert:!0}),c.ok&&(e.setSearchResult({}),e.setAnalyticsEvents({msg:"URL deleted successfully",alert:!1}));case 14:case"end":return n.stop()}}),n)})))()}},Object(u["b"])({setSearchResult:"setSearchResult",setAnalyticsEvents:"setAnalyticsEvents"}))},S=x,j=(n("bdff"),Object(p["a"])(S,v,g,!1,null,"b9c955ae",null)),O=j.exports,_={name:"Analytics",components:{AnalyticsData:O,GetURLInfo:m}},A=_,C=(n("cf3b"),Object(p["a"])(A,r,a,!1,null,"a8f0c834",null));e["default"]=C.exports},"498a":function(t,e,n){"use strict";var r=n("23e7"),a=n("58a8").trim,s=n("c8d2");r({target:"String",proto:!0,forced:s("trim")},{trim:function(){return a(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),a=n("5899"),s="["+a+"]",c=RegExp("^"+s+s+"*"),i=RegExp(s+s+"*$"),o=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(i,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},"5a75":function(t,e,n){},"76f0":function(t,e,n){},a542:function(t,e,n){},bdff:function(t,e,n){"use strict";var r=n("76f0"),a=n.n(r);a.a},c67b:function(t,e,n){"use strict";var r=n("a542"),a=n.n(r);a.a},c8d2:function(t,e,n){var r=n("d039"),a=n("5899"),s="​᠎";t.exports=function(t){return r((function(){return!!a[t]()||s[t]()!=s||a[t].name!==t}))}},cf3b:function(t,e,n){"use strict";var r=n("36d4"),a=n.n(r);a.a},cfd7:function(t,e,n){"use strict";var r=n("5a75"),a=n.n(r);a.a}}]);
//# sourceMappingURL=chunk-fd543a86.0b576087.js.map