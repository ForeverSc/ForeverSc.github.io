webpackJsonp([1],{"95Iv":function(e,n){},LBW9:function(e,n){},NHnr:function(e,n,t){"use strict";function a(e){t("LBW9")}function r(e){return L.request(e)}function i(e){t("95Iv")}function o(e){t("mWYv")}Object.defineProperty(n,"__esModule",{value:!0});var s=t("7+uW"),l={name:"app"},c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],v={render:c,staticRenderFns:u},d=v,p=t("VU/8"),h=a,f=p(l,d,!1,h,null,null),m=f.exports,_=t("/ocq"),g=t("Liek"),w={readOnlyToken:"cd8f74e1bc67250fe7596128f78107cc386c0768"},L=new g.GraphQLClient("https://api.github.com/graphql",{headers:{Authorization:"Bearer "+w.readOnlyToken}}),A={name:"loading",props:{show:{type:Boolean,default:!1}}},C=function(){var e=this,n=e.$createElement,t=e._self._c||n;return e.show?t("div",{staticClass:"loading"},[e._m(0)]):e._e()},U=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"spinner"},[t("div",{staticClass:"cube1"}),e._v(" "),t("div",{staticClass:"cube2"})])}],y={render:C,staticRenderFns:U},b=y,q=t("VU/8"),W=i,k=q(A,b,!1,W,null,null),x=k.exports,B={name:"Home",components:{Loading:x},data:function(){return{avatarUrl:"",login:"",url:"",showAvatar:!1,isLoading:!1}},created:function(){this.query()},methods:{query:function(){var e=this;this.isLoading=!0,r("{\n        viewer {\n          avatarUrl,\n          login,\n          url\n        }\n      }").then(function(n){if(e.isLoading=!1,n&&n.viewer){var t=n.viewer||{},a=t.avatarUrl,r=t.login,i=t.url;e.avatarUrl=a,e.login=r,e.url=i}})},handleAvatarLoad:function(){this.showAvatar=!0}}},E=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("a",{attrs:{href:e.url}},[t("img",{directives:[{name:"show",rawName:"v-show",value:e.showAvatar,expression:"showAvatar"}],staticClass:"avatar",attrs:{src:e.avatarUrl},on:{load:e.handleAvatarLoad}})]),e._v(" "),t("p",{staticClass:"login"},[e._v(e._s(e.login))]),e._v(" "),t("p",[e._v("in construction ...")]),e._v(" "),t("loading",{attrs:{show:e.isLoading}})],1)},H=[],$={render:E,staticRenderFns:H},F=$,N=t("VU/8"),O=o,R=N(B,F,!1,O,null,null),T=R.exports;s.a.use(_.a);var V=new _.a({mode:"history",routes:[{path:"/",title:"Home",component:T}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:V,template:"<App/>",components:{App:m}})},mWYv:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.42700821b124141a4c01.js.map