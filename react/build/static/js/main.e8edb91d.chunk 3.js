(this["webpackJsonpreact-map-api"]=this["webpackJsonpreact-map-api"]||[]).push([[0],{33:function(e,t,n){e.exports=n(63)},38:function(e,t,n){},59:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(28),i=n.n(o),c=(n(38),n(10)),u=n(5),l=n(15),s=(n(41),n(17)),p=n.n(s),m=n(30),f=n(31),h=n.n(f),b=function(){var e=Object(m.a)(p.a.mark((function e(t,n,a,r){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h()({method:t,url:n,params:a});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}();n(59);var g=function(e){var t=e.mainSearchInput,n=e.goToViewPort,a=e.isMain;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:a?"mainBox":"mainBox notMain"},r.a.createElement("h2",null,"WOORI 42"),r.a.createElement("p",null,"\uc815\ubd80\uac00 \uac00\uc9c4 \ub09c\uc81c(\ucf54\ub85c\ub09819 \uc7ac\ub09c\uc0c1\ud669)\ub97c \uad6d\ubbfc\uacfc \ud568\uaed8 \uacf5\ub3d9\uc0dd\uc0b0\ubc29\uc2dd\uc73c\ub85c \ubb38\uc81c\ud574\uacb0 \ud574\ucee4\ud1a4"),r.a.createElement("p",null,"\uc544\ub798 \uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694."),r.a.createElement("input",{type:"text",onChange:t}),r.a.createElement("button",{onClick:function(){return n()},style:{background:"transparent"}},"button"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/42Seoul-Organization/WORI42"},"Github")," | Kakao Talk | Email")))},d=n(32);n.n(d).a.config();var E=function(){var e=Object(a.useState)({longitude:127.024612,latitude:37.5326,zoom:9,pitch:0,bearing:0,transitionInterpolator:new l.a({speed:1.2}),transitionDuration:1e3,searchInfo:"",isMain:!0}),t=Object(u.a)(e,2),n=t[0],o=t[1],i=Object(a.useCallback)((function(e){o(Object(c.a)({},n,{searchInfo:e.target.value}))}),[n]),s=Object(a.useCallback)((function(){b("get","https://maps.googleapis.com/maps/api/geocode/json",{address:n.searchInfo,key:"AIzaSyANDAneBO93G3a3mAzbUoiMcUGja8jxZAc"}).then((function(e){o(Object(c.a)({},n,{isMain:!1,latitude:e.data.results[0].geometry.location.lat,longitude:e.data.results[0].geometry.location.lng,zoom:11,transitionInterpolator:new l.a,transitionDuration:1e3}))})).catch((function(e){console.log(e)}))}),[n]);return Object(a.useEffect)((function(){if(n.isMain){var e=setInterval((function(){o(Object(c.a)({},n,{latitude:n.latitude+.01,longitude:n.longitude+.01}))}),100);return function(){return clearInterval(e)}}}),[n]),r.a.createElement(l.b,Object.assign({},n,{width:"100vw",height:"100vh",onViewportChange:function(e){return o(Object(c.a)({},n,{},e))},mapStyle:"mapbox://styles/mapbox/dark-v9",mapboxApiAccessToken:"pk.eyJ1Ijoia2FuZ2ptMiIsImEiOiJja2Ntc3lqNmswNGh4MnpvM2pmYXhpenAyIn0.TOSD-p656HE5pMv6T-7kKQ"}),r.a.createElement(g,{info:n,setInfo:o,mainSearchInput:i,goToViewPort:s,isMain:n.isMain}))};n(62);var v=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null))};i.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.e8edb91d.chunk.js.map