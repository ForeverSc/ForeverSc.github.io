(window.webpackJsonpfavor=window.webpackJsonpfavor||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t(16)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),l=t.n(c),i=(t(11),t(12),t(2)),o=t(1),s=(t(13),function(){return r.a.createElement("div",{className:"loading-mask"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),u=(t(14),t(15),function(e){var a=e.msg;return r.a.createElement("h3",null,a)}),m=function(e){var a=e.number,t=e.onClick,n=Object(o.c)({query:'{\n      viewer {\n        repository(name: "'.concat("ForeverSc.github.io",'") {\n          issue(number: ').concat(a,") {\n            title\n            publishedAt\n            bodyHTML\n          }\n        }\n      }\n    }")}),c=Object(i.a)(n,1)[0],l=c.fetching,m=c.data,d=c.error;if(l)return r.a.createElement(s,null);if(d)return r.a.createElement(u,{msg:d.message});var v=m.viewer.repository.issue,E=v.title,h=v.publishedAt,f=v.bodyHTML;return r.a.createElement("div",{className:"post",onClick:t},r.a.createElement("h1",null,E),r.a.createElement("i",{className:"post-time"},new Date(h).toDateString()),r.a.createElement("article",{className:"markdown-body",dangerouslySetInnerHTML:{__html:f+f+f}}))},d=function(){var e=Object(n.useState)(-1),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(o.c)({query:'{\n      viewer {\n        avatarUrl\n        login\n        url\n        repository(name: "'.concat("ForeverSc.github.io",'") {\n          issues(last: 10, states: OPEN) {\n            nodes {\n              title\n              number\n            }\n          }\n        }\n      }\n    }')}),d=Object(i.a)(l,1)[0],v=d.fetching,E=d.data,h=d.error;if(v)return r.a.createElement(s,null);if(h)return r.a.createElement(u,{msg:h.message});var f=E.viewer,b=f.avatarUrl,g=f.url,p=f.repository.issues.nodes;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Favor"),r.a.createElement("a",{href:g},r.a.createElement("img",{src:b,className:"avatar",alt:"avatar"}))),r.a.createElement("div",{className:"cards"},p.map(function(e){var a=e.number,t=e.title;return r.a.createElement("div",{className:"card",key:a,onClick:function(){return c(a)}},r.a.createElement("h5",{className:"card-header"},t))})),-1!==t&&r.a.createElement(m,{number:t,onClick:function(){return c(-1)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v="73ac9749da2d38d6a1fd763b6cb6a4dd483af9c6".split("").reverse().join(""),E=Object(o.b)({url:"https://api.github.com/graphql",fetchOptions:{headers:{Authorization:"Bearer ".concat(v)}}});l.a.render(r.a.createElement(o.a,{value:E},r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[6,1,2]]]);
//# sourceMappingURL=main.bea09d89.chunk.js.map