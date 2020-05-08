(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{14:function(e,a,t){e.exports=t(44)},20:function(e,a,t){},21:function(e,a,t){},22:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){},25:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),c=t.n(r);t(19),t(20);var o=function(e){return l.a.createElement("div",{className:"wrapper"},e.children)};t(21);var m=function(){return l.a.createElement("nav",{className:"navbar navbar-dark"},l.a.createElement("a",{className:"navbar-brand",href:"/#"},l.a.createElement("svg",{className:"bi bi-people",width:"3em",height:"3em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.995-.944v-.002.002zM7.022 13h7.956a.274.274 0 00.014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 00.022.004zm7.973.056v-.002.002zM11 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zM6.936 9.28a5.88 5.88 0 00-1.23-.247A7.35 7.35 0 005 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 015 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 116 0 3 3 0 01-6 0zm3-2a2 2 0 100 4 2 2 0 000-4z",clipRule:"evenodd"})),l.a.createElement("span",{className:"title"},"Expendable Humanoid Tracker")))};t(22);var s=function(){return l.a.createElement("div",{className:"jumbotron jumbotron-fluid"},l.a.createElement("div",{className:"container textContainer"},l.a.createElement("h1",{className:"display-4 mainText"},"Keeping track of the humanoids you ",l.a.createElement("em",null,l.a.createElement("strong",null,"Need"))," "),l.a.createElement("p",{className:"lead mt-5"},"Use our newly created Expendable Humanoid Tracker to deal with all the annoying things that went into tracking your expendables! Search for the humanoid you want in our patent pending searchbar. Even sort humanoids in alphabetical order!  (It's crazy I know)")))},i=t(2);t(23);var u=function(e){var a=e.name,t=e.imgSrc,n=e.location,r=e.status;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row cardRow"},l.a.createElement("div",{className:"col-md-3 profileImgContainer"},l.a.createElement("img",{src:t,className:"card-img-top profileImg",alt:"Profile"})),l.a.createElement("div",{className:"col-md-3 name"},l.a.createElement("h4",null,a)),l.a.createElement("div",{className:"col-md-3 email"},l.a.createElement("p",null,n)),l.a.createElement("div",{className:"col-md-3 phoneNum"},l.a.createElement("p",null,r))))};t(24);var d=function(e){return l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Employee Search"),l.a.createElement("input",{onChange:e.handleInputChange,type:"text",className:"form-control",name:"employeeSearch","aria-describedby":"emailHelp"})))};t(25);function p(e){return l.a.createElement("button",{className:"sortButton",onClick:e.handleOnClick},e.children,l.a.createElement("span",{className:"sortIcon"},l.a.createElement("svg",{className:"bi bi-chevron-down",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z",clipRule:"evenodd"}))))}var E=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-3 sortLabels"},l.a.createElement("p",null," Image")),l.a.createElement("div",{className:"col-3 sortLabels"},l.a.createElement(p,{handleOnClick:e.handleOnClick}," Name ")),l.a.createElement("div",{className:"col-3 sortLabels"},l.a.createElement("p",null," Location")),l.a.createElement("div",{className:"col-3 sortLabels"},l.a.createElement("p",null," Status"))))},h=t(13),v=t.n(h),f=function(e){return v.a.get("https://rickandmortyapi.com/api/character/?species=human&page="+e)};t(43);function b(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(t,n){if(!t.hasOwnProperty(e)||!n.hasOwnProperty(e))return 0;var l="string"===typeof t[e]?t[e].toUpperCase():t[e],r="string"===typeof n[e]?n[e].toUpperCase():n[e],c=0;return l>r?c=1:l<r&&(c=-1),"desc"===a?-1*c:c}}var g=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)([]),o=Object(i.a)(c,2),m=o[0],s=o[1],p=Object(n.useState)(""),h=Object(i.a)(p,2),v=h[0],g=h[1],N=Object(n.useState)("asc"),w=Object(i.a)(N,2),y=w[0],C=w[1];return Object(n.useEffect)((function(){f(1).then((function(e){r(e.data.results)}))}),[]),Object(n.useEffect)((function(){var e=t.filter((function(e){return e.name.toLowerCase().includes(v)}));s(e.map((function(e){return l.a.createElement(u,{key:e.id,imgSrc:e.image,name:e.name,location:e.location.name,status:e.status})})))}),[t,v]),l.a.createElement("div",{className:"employeeCardContainer"},l.a.createElement(d,{handleInputChange:function(e){g(e.target.value.toLowerCase())}}),l.a.createElement(E,{handleOnClick:function(e){r("asc"===y?(C("desc"),t.slice(0).sort(b("name","asc"))):(C("asc"),t.slice(0).sort(b("name","desc"))))}}),m)};var N=function(){return l.a.createElement(o,null,l.a.createElement(m,null),l.a.createElement(s,null),l.a.createElement(g,null))};c.a.render(l.a.createElement(N,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.550200da.chunk.js.map