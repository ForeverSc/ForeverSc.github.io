webpackJsonp([1],{"95Iv":function(t,e){},LBW9:function(t,e){},NHnr:function(t,e,n){"use strict";function a(t){n("LBW9")}function r(t){return A.request(t)}function i(t){n("95Iv")}function o(t){n("mWYv")}Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),l={name:"app"},c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},u=[],v={render:c,staticRenderFns:u},d=v,p=n("VU/8"),h=a,f=p(l,d,!1,h,null,null),m=f.exports,_=n("/ocq"),g=n("Liek"),w={readOnlyToken:"token#b2f5d7cce10c71838838f179d41206e23f51f535"},L=w.readOnlyToken.split("#")[1],A=new g.GraphQLClient("https://api.github.com/graphql",{headers:{Authorization:"Bearer "+L}}),C={name:"loading",props:{show:{type:Boolean,default:!1}}},U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("div",{staticClass:"loading"},[t._m(0)]):t._e()},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner"},[n("div",{staticClass:"cube1"}),t._v(" "),n("div",{staticClass:"cube2"})])}],b={render:U,staticRenderFns:y},k=b,q=n("VU/8"),W=i,x=q(C,k,!1,W,null,null),B=x.exports,E={name:"Home",components:{Loading:B},data:function(){return{avatarUrl:"",login:"",url:"",showAvatar:!1,isLoading:!1}},created:function(){this.query()},methods:{query:function(){var t=this;this.isLoading=!0,r("{\n        viewer {\n          avatarUrl,\n          login,\n          url\n        }\n      }").then(function(e){if(t.isLoading=!1,e&&e.viewer){var n=e.viewer||{},a=n.avatarUrl,r=n.login,i=n.url;t.avatarUrl=a,t.login=r,t.url=i}})},handleAvatarLoad:function(){this.showAvatar=!0}}},H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("a",{attrs:{href:t.url}},[n("img",{directives:[{name:"show",rawName:"v-show",value:t.showAvatar,expression:"showAvatar"}],staticClass:"avatar",attrs:{src:t.avatarUrl},on:{load:t.handleAvatarLoad}})]),t._v(" "),n("p",{staticClass:"login"},[t._v(t._s(t.login))]),t._v(" "),n("p",[t._v("in construction ...")]),t._v(" "),n("loading",{attrs:{show:t.isLoading}})],1)},$=[],F={render:H,staticRenderFns:$},N=F,O=n("VU/8"),R=o,T=O(E,N,!1,R,null,null),V=T.exports;s.a.use(_.a);var I=new _.a({mode:"history",routes:[{path:"/",title:"Home",component:V}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:I,template:"<App/>",components:{App:m}})},mWYv:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ec541e60615039a81c7d.js.map