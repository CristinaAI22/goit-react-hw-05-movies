"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[71],{307:function(e,t,n){n.d(t,{Z:function(){return s}});n(791);var a=n(689),r="Button_buttonContainer__X5AJ-",i="Button_button__wiIYs",o=n(184);function s(){var e=(0,a.s0)();return(0,o.jsx)("div",{className:r,children:(0,o.jsxs)("button",{className:i,type:"button",onClick:function(){e(-1)},children:[(0,o.jsx)("span",{children:"\u2190"}),"GO BACK"]})})}},71:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(439),r=n(791),i=n(689),o=n(94),s=n(87),c=n(585),l={filmContainer:"MovieDetailsContent_filmContainer__py7Z9",detailsContainer:"MovieDetailsContent_detailsContainer__Kn0O4",title:"MovieDetailsContent_title__NsrO4",textCategory:"MovieDetailsContent_textCategory__nwxAc",text:"MovieDetailsContent_text__d2e5X",imageContainer:"MovieDetailsContent_imageContainer__VypPA",image:"MovieDetailsContent_image__LefFm",navContainer:"MovieDetailsContent_navContainer__oQs37",navCategory:"MovieDetailsContent_navCategory__jWLRr"},u=n(307),v=n(184),m=function(e){var t=e.movie,n=e.movieId,a=e.locationValue;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.Z,{}),t&&(0,v.jsx)("div",{className:l.mainContainer,children:(0,v.jsxs)("div",{className:l.filmContainer,children:[(0,v.jsx)("div",{className:l.imageContainer,children:(0,v.jsx)("img",{className:l.image,src:t.poster_path?c.yA+t.poster_path:"https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png",alt:t.title})}),(0,v.jsxs)("div",{className:l.detailsContainer,children:[(0,v.jsx)("h2",{className:l.title,children:t.title||t.name||t.original_title}),(0,v.jsxs)("p",{className:l.text,children:[(0,v.jsx)("span",{className:l.textCategory,children:"Rating: "}),t.vote_average.toFixed(1)]}),(0,v.jsxs)("p",{className:l.text,children:[(0,v.jsx)("span",{className:l.textCategory,children:"Overview: "}),t.overview]}),(0,v.jsxs)("p",{className:l.text,children:[(0,v.jsx)("span",{className:l.textCategory,children:"Genres: "}),t.genres.map((function(e){return e.name})).join(" ")]}),(0,v.jsxs)("div",{className:l.additionalContainer,children:[(0,v.jsx)("h3",{className:l.title,children:"Additional information"}),(0,v.jsxs)("nav",{className:l.navContainer,children:[(0,v.jsx)(s.OL,{className:l.navCategory,to:{pathname:"/movies/".concat(n,"/cast"),state:{from:a}},children:"Cast"}),(0,v.jsx)(s.OL,{className:l.navCategory,to:{pathname:"/movies/".concat(n,"/reviews"),state:{from:a}},children:"Reviews"})]})]})]})]})})]})};function p(){var e=(0,i.TH)(),t=(0,i.UO)().movieId,n=(0,r.useState)(null),s=(0,a.Z)(n,2),c=s[0],l=s[1],u=e.state;return e.state&&(u=e.state.from),(0,r.useEffect)((function(){(0,o.Yi)(t).then((function(e){l(e)}))}),[t]),(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{children:(0,v.jsx)(m,{movie:c,locationValue:u,movieId:t})})})}},585:function(e,t,n){n.d(t,{$h:function(){return a},_n:function(){return r},yA:function(){return i}});var a="53b2ac0d64cbeedea763734f4fe8a4ce",r="https://api.themoviedb.org/3",i="https://image.tmdb.org/t/p/w500"},94:function(e,t,n){n.d(t,{Hx:function(){return f},Yi:function(){return m},uV:function(){return d},wr:function(){return u}});var a=n(861),r=n(757),i=n.n(r),o=n(243),s=n(686),c=n.n(s),l=n(585);function u(){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(l._n,"/trending/all/day?api_key=").concat(l.$h));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),c().Notify.failure("Failed to fetch trending movies. Please try again later."),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(e){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)(i().mark((function e(t){var n,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(l._n,"/movie/").concat(t,"?api_key=").concat(l.$h,"&language=en-US"));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),c().Notify.failure("Failed to fetch movie details. Please try again later."),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var d=function(){var e=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Fetching movie cast for movieId:",t),e.next=4,o.Z.get("".concat(l._n,"/movie/").concat(t,"/credits?api_key=").concat(l.$h,"&language=en-US"));case 4:return n=e.sent,console.log("Response from API:",n),e.abrupt("return",n.data.cast);case 9:throw e.prev=9,e.t0=e.catch(0),console.error("Error fetching movie cast:",e.t0),c().Notify.failure("Failed to fetch movie cast. Please try again later."),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();function f(e){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(l._n,"/movie/").concat(t,"/reviews?api_key=").concat(l.$h,"&language=en-US"));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=71.414ed8b6.chunk.js.map