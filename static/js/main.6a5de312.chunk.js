(this.webpackJsonpbetflixclone=this.webpackJsonpbetflixclone||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(8),i=n.n(s),c=n(3),o=n.n(c),l=n(5),u=n(4),d=(n(23),"c3fe35ca9d8af96ad10ad92f0a2cae2a"),m=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://api.themoviedb.org/3").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j={getHomeList:function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/discover/tv?with_network=213&language=pt-br&api_key=".concat(d));case 2:return e.t0=e.sent,e.t1={slug:"originals",title:"Originais do Netflix",items:e.t0},e.next=6,m("/trending/all/week?language=pt-br&api_key=".concat(d));case 6:return e.t2=e.sent,e.t3={slug:"trending",title:"Recomendados para voc\xea",items:e.t2},e.next=10,m("/movie/top_rated?language=pt-br&api_key=".concat(d));case 10:return e.t4=e.sent,e.t5={slug:"toprated",title:"Em alta",items:e.t4},e.next=14,m("/discover/movie?with_genres=28&language=pt-br&api_key=".concat(d));case 14:return e.t6=e.sent,e.t7={slug:"action",title:"A\xe7\xe3o",items:e.t6},e.next=18,m("/discover/movie?with_genres=35&language=pt-br&api_key=".concat(d));case 18:return e.t8=e.sent,e.t9={slug:"comedy",title:"Com\xe9dia",items:e.t8},e.next=22,m("/discover/movie?with_genres=27&language=pt-br&api_key=".concat(d));case 22:return e.t10=e.sent,e.t11={slug:"horror",title:"Terror",items:e.t10},e.next=26,m("/discover/movie?with_genres=10749&language=pt-br&api_key=".concat(d));case 26:return e.t12=e.sent,e.t13={slug:"romance",title:"Romance",items:e.t12},e.next=30,m("/discover/movie?with_genres=99&language=pt-br&api_key=".concat(d));case 30:return e.t14=e.sent,e.t15={slug:"documentary",title:"Document\xe1rio",items:e.t14},e.abrupt("return",[e.t1,e.t3,e.t5,e.t7,e.t9,e.t11,e.t13,e.t15]);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getMovieInfo:function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={},!t){e.next=15;break}e.t0=n,e.next="movie"===e.t0?5:"tv"===e.t0?9:13;break;case 5:return e.next=7,m("movie/".concat(t,"?language=pt-br&api_key=").concat(d));case 7:case 11:return a=e.sent,e.abrupt("break",15);case 9:return e.next=11,m("/tv/".concat(t,"?language=pt-br&api_key=").concat(d));case 13:return a=null,e.abrupt("break",15);case 15:return e.abrupt("return",a);case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},b=(n(24),n(14)),g=n.n(b),h=n(16),f=n.n(h),p=n(1),v=function(e){var t=e.title,n=e.items,r=Object(a.useState)(-400),s=Object(u.a)(r,2),i=s[0],c=s[1];return Object(p.jsxs)("div",{className:"movieRow",children:[" ",Object(p.jsx)("h2",{children:t}),Object(p.jsx)("div",{className:"movieRow--left",onClick:function(){var e=i+Math.round(window.innerWidth/2);e>0&&(e=0),c(e)},children:Object(p.jsx)(g.a,{style:{fontsize:50}})}),Object(p.jsx)("div",{className:"movieRow--right",onClick:function(){var e=i-Math.round(window.innerWidth/2),t=150*n.results.length;window.innerWidth-t>e&&(e=window.innerWidth-t-60),c(e)},children:Object(p.jsx)(f.a,{style:{fontsize:50}})}),Object(p.jsxs)("div",{className:"movieRow--listarea",children:[" ",Object(p.jsxs)("div",{className:"movieRow--list",style:{marginLeft:i,width:150*n.results.length},children:[" ",n.results.lenght>0||n.results.map((function(e,t){return Object(p.jsx)("div",{className:"movieRow--item",children:Object(p.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:e.original_title})},t)}))]})]})]})},x=(n(31),function(e){var t=e.item,n=new Date(t.first_air_date),a=[];for(var r in t.genres)a.push(t.genres[r].name);var s=t.overview;return s.length>200&&(s=s.substring(0,200)+"..."),Object(p.jsx)("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")},children:Object(p.jsx)("div",{className:"featured--vertical",children:Object(p.jsxs)("div",{className:"featured--horizontal",children:[Object(p.jsx)("div",{className:"featured--name",children:t.original_name}),Object(p.jsxs)("div",{className:"featured--info",children:[Object(p.jsxs)("div",{className:"featured--points",children:[t.vote_average," pontos"]}),Object(p.jsx)("div",{className:"featured--year",children:n.getFullYear()}),Object(p.jsxs)("div",{className:"featured--seasons",children:[t.number_of_seasons," temporada",1!==t.number_of_seasons?"s":""]})]}),Object(p.jsx)("div",{className:"featured--description",children:s}),Object(p.jsxs)("div",{className:"featured--buttons",children:[Object(p.jsx)("a",{className:"featured--watchButton",children:"\u25ba Assistir"}),Object(p.jsx)("a",{className:"featured--mylistButton",children:"+ Minha Lista"})]}),Object(p.jsx)("div",{className:"fetured--genres",children:Object(p.jsxs)("strong",{children:["Generos: ",a.join(", ")]})})]})})})}),O=(n(32),function(e){var t=e.black;return Object(p.jsxs)("header",{className:t?"black":"",children:[" ",Object(p.jsx)("div",{className:"header--logo",children:Object(p.jsx)("a",{href:"/",children:Object(p.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"Netflix"})})}),Object(p.jsx)("div",{className:"header--user",children:Object(p.jsx)("a",{href:"/",children:Object(p.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"Usu\xe1rio"})})})]})}),w=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)(null),i=Object(u.a)(s,2),c=i[0],d=i[1],m=Object(a.useState)(!1),b=Object(u.a)(m,2),g=b[0],h=b[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,a,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.getHomeList();case 2:return t=e.sent,r(t),n=t.filter((function(e){return"originals"===e.slug})),a=Math.floor(Math.random()*(n[0].items.results.length-1)),s=n[0].items.results[a],e.next=9,j.getMovieInfo(s.id,"tv");case 9:i=e.sent,console.log(i),d(i);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(a.useEffect)((function(){var e=function(){window.scrollY>15?h(!0):h(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(p.jsxs)("div",{className:"page",children:[" ",Object(p.jsx)(O,{black:g}),c&&Object(p.jsx)(x,{item:c}),Object(p.jsx)("section",{className:"lists",children:n.map((function(e,t){return Object(p.jsx)(v,{title:e.title,items:e.items},t)}))}),Object(p.jsxs)("footer",{children:["Feito com ",Object(p.jsx)("span",{role:"img","aria-label":"cora\xe7\xe3o",children:"\u2764"})," pelo Dev ElianBeep Direitos de imagem para Netflix Dados pegados do site: Themoviedb.org"]}),n.length<=0&&Object(p.jsx)("div",{className:"loading",children:Object(p.jsx)("img",{src:"https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif",alt:"Carregando..."})})]})};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(w,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6a5de312.chunk.js.map