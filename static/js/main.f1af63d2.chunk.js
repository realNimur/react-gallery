(this.webpackJsonpfwt=this.webpackJsonpfwt||[]).push([[0],[,,,,,,,,,function(t,e,n){t.exports={dropdown:"styles_dropdown__3rlyM",open:"styles_open__3Y0A_",dropdown__header:"styles_dropdown__header__3zTUS",dropdown__header_white:"styles_dropdown__header_white__WyrTR","dropdown-content":"styles_dropdown-content__GO9KV",downList:"styles_downList__3vsHe","dropdown-content_created":"styles_dropdown-content_created__1JxZv",dropdown__btn:"styles_dropdown__btn__33hc_",dropdown__caption:"styles_dropdown__caption__1zpY1","dropdown-content__item_created":"styles_dropdown-content__item_created__3XOvh","dropdown-content__item":"styles_dropdown-content__item__2lVCq"}},,function(t,e,n){t.exports={"painting-item":"styles_painting-item__2cZLj","painting-item__description":"styles_painting-item__description__17dxi",fadeOutItem:"styles_fadeOutItem__3-9UX","painting-item__more":"styles_painting-item__more__3RT3H","painting-item__caption":"styles_painting-item__caption__1strE","painting-item__text":"styles_painting-item__text__15rf0","painting-item__text_bold":"styles_painting-item__text_bold__lq3eO"}},function(t,e,n){t.exports={"paginator-list":"styles_paginator-list__1Esuf","paginator-list__arrow":"styles_paginator-list__arrow__2aghi",disabled:"styles_disabled__3rlB9","paginator-list_white":"styles_paginator-list_white__30w-X"}},,,,,function(t,e,n){t.exports={header:"styles_header__3T6QT",header__logo:"styles_header__logo__P8m4m",header__brightness:"styles_header__brightness__1KTLT"}},function(t,e,n){t.exports={"paginator-list__item":"styles_paginator-list__item__3a7aA",active:"styles_active__3nkhQ","paginator-list__item_white":"styles_paginator-list__item_white__3iZ6d"}},function(t,e,n){t.exports={App:"styles_App__2eM0C",App_white:"styles_App_white__gdb7C",App__container:"styles_App__container__3h2uH"}},,,,function(t,e,n){t.exports={input:"styles_input__1T4xc",input_white:"styles_input_white__tyHJ1"}},function(t,e,n){t.exports={loader:"style_loader__fjclp",rotateLoader:"style_rotateLoader__2HEyU","loader-wrapper":"style_loader-wrapper__12kK3"}},,function(t,e,n){t.exports={"dropdown-content__item":"styles_dropdown-content__item__3SOkm","dropdown-content__item_created":"styles_dropdown-content__item_created__BQCAP"}},,function(t,e,n){t.exports={filter:"styles_filter__dthLZ"}},function(t,e,n){t.exports={"paintings-list":"styles_paintings-list__2gPf-"}},,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(16),i=n.n(r),o=n(4),s=n(10),l=n(6),_=n.n(l),u=n(5),d="SET_AUTHORS",p="SET_LOCATIONS",j="SET_QUERY_PAGE",b="SET_QUERY_AUTHOR",h="SET_QUERY_LOCATION",O="TOGGLE_COLOR_THEME",f="SET_TYPE_SHOW_LIST",g="SET_QUERY_LIMIT",m=function(t){return{type:j,payload:t}},w=function(t){return{type:f,payload:t}},x=function(){return{type:O}},C=n(26),y=n.n(C),v=n(1),L=function(t){var e=t.item,n=t.type,a=Object(o.b)(),c=Object(s.b)(),r=Object(u.a)(c,2),i=r[0],l=r[1],_=e.id,d=e.name,p=e.location,j=d||p;return Object(v.jsx)("button",{type:"button",onClick:function(){var t=new URLSearchParams(i),e="";"authors"===n?(e="authorId",a(function(t){return{type:b,payload:t}}(j))):"locations"===n&&(e="locationId",a(function(t){return{type:h,payload:t}}(j))),t.set(e,"".concat(_)),a(w("")),a(m(1)),l(t)},className:y.a["dropdown-content__item"],children:j})};L.defaultProps={item:{id:1,name:"John",location:"Moscow"}};var N=L,S=n(15),E=n(2),T=n(22),A=n.n(T),M=n(27),P="https://test-front.framework.team";function k(t,e){return I.apply(this,arguments)}function I(){return(I=Object(M.a)(A.a.mark((function t(e,n){var a,c,r,i,o;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a="",a="all"===n?"".concat(P,"/paintings?").concat(e):"".concat(P,"/").concat(e),t.next=4,fetch(a);case 4:if(!(c=t.sent).ok){t.next=10;break}return t.next=8,c.json();case 8:return r=t.sent,t.abrupt("return",r);case 10:throw i=c.status,o=c.statusText,new Error("".concat(i," : ").concat(o||"Failed to fetch"));case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function R(t,e){var n=Object(o.b)(),c=Object(o.c)((function(t){return t})),r=c.typeListShow,i=c.request,l=c[t],_=i.activeAuthor,j=i.activeLocation,b=Object(a.useState)(!1),h=Object(u.a)(b,2),O=h[0],f=h[1],g=Object(s.b)({}),x=Object(u.a)(g,2),C=x[0],y=x[1],v=Object(a.useState)(e),L=Object(u.a)(v,2),N=L[0],T=L[1],A=Object(a.useState)({from:"",before:"",typing:!1}),M=Object(u.a)(A,2),P=M[0],I=M[1],R="created"===t,q="authors"===t,U="locations"===t,Z=function(t,e){var a=new URLSearchParams(C);e?(a.get("_page")&&a.delete("_page"),n(m(1)),a.set(t,"".concat(e))):!e&&a.get(t)&&a.delete(t),y(a),I((function(t){return Object(E.a)(Object(E.a)({},t),{},{typing:!1})}))};return Object(a.useEffect)((function(){R||k(t,"type").then((function(t){q?n({type:d,payload:t}):U&&n(function(t){return{type:p,payload:t}}(t))})).catch((function(t){return T("".concat(t))}))}),[]),Object(a.useEffect)((function(){var t=JSON.parse(C.get("created_gte")),e=JSON.parse(C.get("created_lte"));t&&I((function(e){return Object(E.a)(Object(E.a)({},e),{},{from:t})})),e&&I((function(t){return Object(E.a)(Object(E.a)({},t),{},{before:e})}))}),[]),Object(a.useEffect)((function(){if(!R){var t=function(t,e){return t.filter((function(t){return t.id===e}))[0]};if(q){var e=JSON.parse(C.get("authorId"));e&&l&&l.length&&T(t(l,e).name)}else if(U){var n=JSON.parse(C.get("locationId"));n&&l&&l.length&&T(t(l,n).location)}}}),[_,j,l]),Object(a.useEffect)((function(){var t;return R&&P.typing&&(t=setTimeout((function(){return Z("created_gte",P.from)}),500)),function(){t&&clearTimeout(t)}}),[P.from]),Object(a.useEffect)((function(){var t;return R&&P.typing&&(t=setTimeout((function(){return Z("created_lte",P.before)}),500)),function(){t&&clearTimeout(t)}}),[P.before]),Object(a.useEffect)((function(){f(t===r)}),[r]),{showList:O,captionSelect:N,toggleShowList:function(){n(w(t))},isCreatedType:R,dateParam:P,handlerInput:function(t){I((function(e){var n;return Object(E.a)(Object(E.a)({},e),{},(n={},Object(S.a)(n,t.target.id,t.target.value),Object(S.a)(n,"typing",!0),n))}))}}}var q=n(9),U=n.n(q),Z=function(t){var e=t.type,n=t.caption,a=Object(o.c)((function(t){return t})),c=a[e],r=a.themeColor,i=R(e,n),s=i.showList,l=i.captionSelect,u=i.toggleShowList,d=i.isCreatedType,p=i.dateParam,j=i.handlerInput;return Object(v.jsxs)("div",{className:_()(U.a.dropdown,s&&U.a.open),children:[Object(v.jsxs)("div",{className:_()(U.a.dropdown__header,"white"===r&&U.a.dropdown__header_white),children:[Object(v.jsx)("p",{className:U.a.dropdown__caption,children:l}),Object(v.jsx)("button",{type:"button",className:U.a.dropdown__btn,onClick:u,children:Object(v.jsx)("svg",{width:"10",height:"6",preserveAspectRatio:"xMinYMin meet",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.3659e-08 1.09203 0L8.90797 6.73452e-07C9.87892 7.57113e-07 10.3652 1.15702 9.67861 1.8337Z",fill:"white",fillOpacity:"0.3"})})})]}),(c&&c.length>1||d)&&Object(v.jsxs)("ul",{className:_()(U.a["dropdown-content"],d&&U.a["dropdown-content_created"]),children:[!d&&c.map((function(t){return Object(v.jsx)(N,{type:e,item:t},t.id)})),d&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("li",{className:U.a["dropdown-content__item_created"],children:Object(v.jsx)("input",{type:"text",placeholder:"from",value:p.from,id:"from",onChange:j})}),Object(v.jsx)("li",{className:U.a["dropdown-content__item_created"],children:"\u2014"}),Object(v.jsx)("li",{className:U.a["dropdown-content__item_created"],children:Object(v.jsx)("input",{type:"text",placeholder:"before",value:p.before,id:"before",onChange:j})})]})]})]})};var H=n(23),B=n.n(H),J=function(){var t=function(){var t=Object(o.b)(),e=Object(s.b)({}),n=Object(u.a)(e,2),c=n[0],r=n[1],i=Object(a.useState)({text:"",typing:!1}),l=Object(u.a)(i,2),_=l[0],d=l[1];return Object(a.useEffect)((function(){var t=c.get("q");d(t?function(e){return Object(E.a)(Object(E.a)({},e),{},{text:t})}:function(t){return Object(E.a)(Object(E.a)({},t),{},{text:""})})}),[]),Object(a.useEffect)((function(){if(_.typing){var e=setTimeout((function(){var e=new URLSearchParams(c),n=_.text;n?(t(m(1)),e.set("q","".concat(n))):!n&&e.get("q")&&e.delete("q"),r(e),d((function(t){return Object(E.a)(Object(E.a)({},t),{},{typing:!1})}))}),500);return function(){return clearTimeout(e)}}return!1}),[_]),{value:_.text,onChange:function(t){d((function(e){return Object(E.a)(Object(E.a)({},e),{},{text:t.target.value,typing:!0})}))}}}(),e=t.value,n=t.onChange,c=Object(o.c)((function(t){return t.themeColor}));return Object(v.jsx)("input",{className:_()(B.a.input,"white"===c&&B.a.input_white),type:"text",placeholder:"Name",value:e,onChange:n})};function Y(){var t=Object(o.b)(),e=Object(s.b)({}),n=Object(u.a)(e,2),c=n[0],r=n[1],i=Object(o.c)((function(t){return t})).request.page;Object(a.useEffect)((function(){var t=new URLSearchParams(c);t.set("_page",i),r(t)}),[i]),Object(a.useEffect)((function(){var e=window.innerWidth;t({type:g,payload:e<768?6:e<1024?8:9})}),[]),Object(a.useEffect)((function(){var e=new URLSearchParams(c),n=Number(e.get("_page"));n>0&&i!==n&&t(m(n))}),[])}var V=n(28),Q=n.n(V),X=function(){return Y(),Object(v.jsxs)("div",{className:Q.a.filter,children:[Object(v.jsx)(J,{}),Object(v.jsx)(Z,{type:"authors",caption:"Authors"}),Object(v.jsx)(Z,{type:"locations",caption:"Locations"}),Object(v.jsx)(Z,{type:"created",caption:"Created"})]})},D=n.p+"static/media/logo.341392e0.svg",F=n(17),G=n.n(F),K=function(){var t=Object(o.b)(),e="white"===Object(o.c)((function(t){return t.themeColor}))?"black":"white";return Object(a.useEffect)((function(){"white"===localStorage.getItem("themeColor")&&t(x())}),[]),Object(v.jsxs)("header",{className:G.a.header,children:[Object(v.jsx)("a",{href:"/react-gallery",className:G.a.header__logo,children:Object(v.jsx)("img",{src:D,alt:"logo"})}),Object(v.jsx)("button",{type:"button",className:G.a.header__brightness,onClick:function(){localStorage.setItem("themeColor",e),t(x())},children:Object(v.jsx)("svg",{preserveAspectRatio:"xMinYMin meet",viewBox:"0 0 20 20",fill:e,xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M10 5.45455C7.49091 5.45455 5.45455 7.49091 5.45455 10C5.45455 12.5091 7.49091 14.5455 10 14.5455C12.5091 14.5455 14.5455 12.5091 14.5455 10C14.5455 7.49091 12.5091 5.45455 10 5.45455ZM0.909091 10.9091H2.72727C3.22727 10.9091 3.63636 10.5 3.63636 10C3.63636 9.5 3.22727 9.09091 2.72727 9.09091H0.909091C0.409091 9.09091 0 9.5 0 10C0 10.5 0.409091 10.9091 0.909091 10.9091ZM17.2727 10.9091H19.0909C19.5909 10.9091 20 10.5 20 10C20 9.5 19.5909 9.09091 19.0909 9.09091H17.2727C16.7727 9.09091 16.3636 9.5 16.3636 10C16.3636 10.5 16.7727 10.9091 17.2727 10.9091ZM9.09091 0.909091V2.72727C9.09091 3.22727 9.5 3.63636 10 3.63636C10.5 3.63636 10.9091 3.22727 10.9091 2.72727V0.909091C10.9091 0.409091 10.5 0 10 0C9.5 0 9.09091 0.409091 9.09091 0.909091ZM9.09091 17.2727V19.0909C9.09091 19.5909 9.5 20 10 20C10.5 20 10.9091 19.5909 10.9091 19.0909V17.2727C10.9091 16.7727 10.5 16.3636 10 16.3636C9.5 16.3636 9.09091 16.7727 9.09091 17.2727ZM4.53636 3.25455C4.18182 2.9 3.6 2.9 3.25455 3.25455C2.9 3.60909 2.9 4.19091 3.25455 4.53636L4.21818 5.5C4.57273 5.85455 5.15455 5.85455 5.5 5.5C5.84545 5.14545 5.85455 4.56364 5.5 4.21818L4.53636 3.25455ZM15.7818 14.5C15.4273 14.1455 14.8455 14.1455 14.5 14.5C14.1455 14.8545 14.1455 15.4364 14.5 15.7818L15.4636 16.7455C15.8182 17.1 16.4 17.1 16.7455 16.7455C17.1 16.3909 17.1 15.8091 16.7455 15.4636L15.7818 14.5ZM16.7455 4.53636C17.1 4.18182 17.1 3.6 16.7455 3.25455C16.3909 2.9 15.8091 2.9 15.4636 3.25455L14.5 4.21818C14.1455 4.57273 14.1455 5.15455 14.5 5.5C14.8545 5.84545 15.4364 5.85455 15.7818 5.5L16.7455 4.53636ZM5.5 15.7818C5.85455 15.4273 5.85455 14.8455 5.5 14.5C5.14545 14.1455 4.56364 14.1455 4.21818 14.5L3.25455 15.4636C2.9 15.8182 2.9 16.4 3.25455 16.7455C3.60909 17.0909 4.19091 17.1 4.53636 16.7455L5.5 15.7818Z"})})})]})},W=n(11),z=n.n(W),$=function(t){var e=t.imageUrl,n=t.name,a=t.location,c=t.author,r=t.created;return Object(v.jsx)("div",{className:z.a["painting-item"],style:{backgroundImage:"url(https://test-front.framework.team".concat(e,")")},children:Object(v.jsxs)("div",{className:z.a["painting-item__description"],children:[Object(v.jsx)("p",{className:z.a["painting-item__caption"],children:n}),Object(v.jsxs)("div",{className:z.a["painting-item__more"],children:[Object(v.jsxs)("p",{className:z.a["painting-item__text"],children:[Object(v.jsx)("span",{className:z.a["painting-item__text_bold"],children:"Author:"}),c]}),Object(v.jsxs)("p",{className:z.a["painting-item__text"],children:[Object(v.jsx)("span",{className:z.a["painting-item__text_bold"],children:"Created:"}),r]}),Object(v.jsxs)("p",{className:z.a["painting-item__text"],children:[Object(v.jsx)("span",{className:z.a["painting-item__text_bold"],children:"Location:"}),a]})]})]})})},tt=n(18),et=n.n(tt),nt=function(t){var e=t.text,n=Object(o.b)(),a=Object(o.c)((function(t){return t})),c=a.request,r=a.themeColor,i=c.page;return Object(v.jsx)("button",{type:"button",className:_()(et.a["paginator-list__item"],i===Number(e)&&et.a.active,"white"===r&&et.a["paginator-list__item_white"]),onClick:function(){var t;t=e,i!==Number(e)&&n(m(t))},children:e})},at=n(30);var ct=n(12),rt=n.n(ct),it=function(t){var e=t.totalPaintings,n=Object(o.b)(),a=Object(o.c)((function(t){return t})),c=a.limitPaintings,r=a.request,i=a.themeColor,s=r.page,l=function(t,e,n){var a=Math.ceil(t/e),c=Object(at.a)(Array.from({length:a},(function(t,e){return e+1})));if(1===n)c=c.slice(0,3);else if(n>1&&n+1<a)c=c.slice(n-2,n+1);else if(n+1>=a){var r=null;r=a-3>=0?a-3:a-2>=0?a-2:a-1>=0?a-1:0,c=c.slice(r,a)}return{pages:c,totalPages:a}}(e,c,s),u=l.pages,d=l.totalPages;return Object(v.jsxs)("ul",{className:_()(rt.a["paginator-list"],"white"===i&&rt.a["paginator-list_white"]),children:[Object(v.jsx)("button",{type:"button",className:_()(rt.a["paginator-list__arrow"],1===s&&rt.a.disabled),onClick:function(){return 1!==s&&n(m(1))},children:Object(v.jsx)("svg",{width:"14",height:"13",viewBox:"0 0 14 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M2.71401 6.49988L7.80231 1.62545C8.16797 1.275 8.16797 0.706895 7.80231 0.356587C7.43665 0.00613754 6.84368 0.00613754 6.47787 0.356587L0.727266 5.86567C0.544436 6.04091 0.453125 6.27034 0.453125 6.49988C0.453125 6.72951 0.544614 6.9591 0.727266 7.13426L6.47787 12.6433C6.84368 12.9939 7.43668 12.9939 7.80231 12.6433C8.16797 12.293 8.16797 11.7248 7.80231 11.3745L2.71401 6.49988ZM13.632 11.3745C13.9977 11.7248 13.9977 12.293 13.632 12.6433C13.2663 12.9939 12.6735 12.9939 12.3075 12.6433L6.55693 7.13428C6.3741 6.95913 6.28293 6.72953 6.28293 6.49991C6.28293 6.27037 6.37427 6.04077 6.55693 5.8657L12.3075 0.356587C12.6735 0.00613754 13.2663 0.00613754 13.632 0.356587C13.9977 0.706895 13.9977 1.27498 13.632 1.62545L8.54358 6.49988L13.632 11.3745Z",fill:"white",fillOpacity:"1"})})}),Object(v.jsx)("button",{type:"button",className:_()(rt.a["paginator-list__arrow"],1===s&&rt.a.disabled),onClick:function(){return 1!==s&&n(m(s-1))},children:Object(v.jsx)("svg",{width:"9",height:"13",viewBox:"0 0 9 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M0.932837 7.13428L6.73159 12.6433C7.10046 12.9939 7.69852 12.9939 8.06721 12.6433C8.43593 12.293 8.43593 11.7248 8.06721 11.3745L2.93621 6.49991L8.06706 1.62545C8.43578 1.275 8.43578 0.706895 8.06706 0.356587C7.69834 0.00613754 7.10031 0.00613754 6.73144 0.356587L0.932687 5.86567C0.748326 6.04091 0.65625 6.27034 0.65625 6.49988C0.65625 6.72953 0.748506 6.95913 0.932837 7.13428Z",fill:"white",fillOpacity:"1"})})}),u.map((function(t){return Object(v.jsx)(nt,{text:t},t)})),Object(v.jsx)("button",{type:"button",className:_()(rt.a["paginator-list__arrow"],s===d&&rt.a.disabled),onClick:function(){s!==d&&n(m(s+1))},children:Object(v.jsx)("svg",{width:"9",height:"13",viewBox:"0 0 9 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M8.06716 7.13428L2.26841 12.6433C1.89954 12.9939 1.30148 12.9939 0.932791 12.6433C0.56407 12.293 0.56407 11.7248 0.932791 11.3745L6.06379 6.49991L0.93294 1.62545C0.564219 1.275 0.564219 0.706895 0.93294 0.356587C1.30166 0.00613754 1.89969 0.00613754 2.26856 0.356587L8.06731 5.86567C8.25167 6.04091 8.34375 6.27034 8.34375 6.49988C8.34375 6.72953 8.25149 6.95913 8.06716 7.13428Z",fill:"white"})})}),Object(v.jsx)("button",{type:"button",className:_()(rt.a["paginator-list__arrow"],s===d&&rt.a.disabled),onClick:function(){s!==d&&n(m(d))},children:Object(v.jsx)("svg",{width:"14",height:"13",viewBox:"0 0 14 13",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(v.jsx)("path",{d:"M11.286 6.49988L6.19769 1.62545C5.83203 1.275 5.83203 0.706895 6.19769 0.356587C6.56335 0.00613754 7.15632 0.00613754 7.52213 0.356587L13.2727 5.86567C13.4556 6.04091 13.5469 6.27034 13.5469 6.49988C13.5469 6.72951 13.4554 6.9591 13.2727 7.13426L7.52213 12.6433C7.15632 12.9939 6.56332 12.9939 6.19769 12.6433C5.83203 12.293 5.83203 11.7248 6.19769 11.3745L11.286 6.49988ZM0.367995 11.3745C0.00233503 11.7248 0.00233503 12.293 0.367995 12.6433C0.733655 12.9939 1.32645 12.9939 1.69247 12.6433L7.44307 7.13428C7.6259 6.95913 7.71707 6.72953 7.71707 6.49991C7.71707 6.27037 7.62573 6.04077 7.44307 5.8657L1.69247 0.356587C1.32648 0.00613754 0.733655 0.00613754 0.367995 0.356587C0.00233503 0.706895 0.00233503 1.27498 0.367995 1.62545L5.45642 6.49988L0.367995 11.3745Z",fill:"white"})})})]})};it.defaultProps={totalPaintings:0};var ot=it,st=n(24),lt=n.n(st),_t=function(){var t=Object(o.c)((function(t){return t.themeColor}));return Object(v.jsxs)("div",{className:lt.a["loader-wrapper"],children:[Object(v.jsx)("div",{className:lt.a.loader,style:{borderColor:"white"===t?"black":"white"}}),Object(v.jsx)("p",{style:{textAlign:"center",color:"white"===t?"black":"white"},children:Object(v.jsx)("small",{children:"Loading..."})})]})},ut=function(){var t=Object(o.c)((function(t){return t.themeColor}));return Object(v.jsx)("div",{style:{color:"white"===t?"black":"white",textAlign:"center"},children:Object(v.jsx)("h2",{children:"Not Found"})})},dt=n(3);var pt=n(29),jt=n.n(pt),bt=function(){var t=Object(o.c)((function(t){return t})),e=t.authors,n=t.locations,c=t.limitPaintings,r=t.request.page,i=function(){var t=Object(a.useState)([]),e=Object(u.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)({fetching:!1,error:""}),i=Object(u.a)(r,2),o=i[0],s=i[1],l=Object(a.useState)("start"),_=Object(u.a)(l,2),d=_[0],p=_[1],j=Object(dt.c)().search;return Object(a.useEffect)((function(){var t=new URLSearchParams(j);if(t.get("_page")&&t.delete("_page"),d!==t.toString()){var e=t.toString();p(e),s((function(t){return Object(E.a)(Object(E.a)({},t),{},{fetching:!0})})),k(e,"all").then((function(t){return c(t)})).catch((function(t){s((function(e){return Object(E.a)(Object(E.a)({},e),{},{error:t.message})}))})).finally((function(){s((function(t){return Object(E.a)(Object(E.a)({},t),{},{fetching:!1})}))}))}}),[j]),{fetchRequestData:o,listPaintings:n}}(),s=i.fetchRequestData,l=i.listPaintings,_=function(t,e){return t.filter((function(t){return t.id===e}))[0]};return Object(v.jsxs)(v.Fragment,{children:[s.fetching?Object(v.jsx)(_t,{}):null,!s.fetching&&s.error?Object(v.jsx)("h2",{style:{color:"grey"},children:s.error}):null,(s.fetching||s.error?null:l&&0===l.length)&&Object(v.jsx)(ut,{}),!s.fetching&&!s.error&&l&&l.length>0&&(e.length>0||n.length>0)?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:jt.a["paintings-list"],children:l.slice(c*(r-1),r*c).map((function(t){var a=t.authorId,c=t.locationId,r=t.created,i=t.id,o=t.imageUrl,s=t.name,l=_(e,a),u=_(n,c);return l&&u?Object(v.jsx)($,{created:r,author:l.name,location:u.location,imageUrl:o,name:s},i):null}))}),Object(v.jsx)(ot,{totalPaintings:l.length})]}):null]})},ht=function(){return Object(v.jsx)(bt,{})},Ot=n(19),ft=n.n(Ot),gt=function(){var t=Object(o.c)((function(t){return t.themeColor}));return Object(v.jsx)(s.a,{children:Object(v.jsx)("div",{className:_()(ft.a.App,"white"===t&&ft.a.App_white),children:Object(v.jsxs)("div",{className:ft.a.App__container,children:[Object(v.jsx)(K,{}),Object(v.jsx)(X,{}),Object(v.jsx)(ht,{})]})})})},mt=n(31),wt={authors:[],locations:[],typeListShow:"",limitPaintings:"",themeColor:"black",request:{activeAuthor:"",activeLocation:"",page:1}},xt=Object(mt.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.type,a=e.payload;switch(n){case d:return Object(E.a)(Object(E.a)({},t),{},{authors:a});case p:return Object(E.a)(Object(E.a)({},t),{},{locations:a});case b:return Object(E.a)(Object(E.a)({},t),{},{request:Object(E.a)(Object(E.a)({},t.request),{},{activeAuthor:a})});case h:return Object(E.a)(Object(E.a)({},t),{},{request:Object(E.a)(Object(E.a)({},t.request),{},{activeLocation:a})});case j:return Object(E.a)(Object(E.a)({},t),{},{request:Object(E.a)(Object(E.a)({},t.request),{},{page:a})});case O:return Object(E.a)(Object(E.a)({},t),{},{themeColor:"white"===t.themeColor?"black":"white"});case f:return Object(E.a)(Object(E.a)({},t),{},{typeListShow:t.typeListShow===a?"":a});case g:return Object(E.a)(Object(E.a)({},t),{},{limitPaintings:a});default:return t}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n(44);i.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(o.a,{store:xt,children:Object(v.jsx)(gt,{})})}),document.getElementById("root"))}],[[45,1,2]]]);
//# sourceMappingURL=main.f1af63d2.chunk.js.map