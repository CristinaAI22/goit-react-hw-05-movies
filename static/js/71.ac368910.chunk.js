"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[71],{71:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(439),i=n(791),r=n(689),o=n(94),s=n(87),c=n(585),l={filmContainer:"MovieDetailsContent_filmContainer__py7Z9",detailsContainer:"MovieDetailsContent_detailsContainer__Kn0O4",title:"MovieDetailsContent_title__NsrO4",textCategory:"MovieDetailsContent_textCategory__nwxAc",text:"MovieDetailsContent_text__d2e5X",imageContainer:"MovieDetailsContent_imageContainer__VypPA",image:"MovieDetailsContent_image__LefFm",navContainer:"MovieDetailsContent_navContainer__oQs37",navCategory:"MovieDetailsContent_navCategory__jWLRr",buttonContainer:"MovieDetailsContent_buttonContainer__NFQY4",button:"MovieDetailsContent_button__mZb9E"},u=n(344),v=n(184),m=(0,i.lazy)((function(){return n.e(667).then(n.bind(n,667))})),d=(0,i.lazy)((function(){return n.e(357).then(n.bind(n,357))})),h=function(e){var t=e.movie,n=e.onGoBack,a=e.movieId,o=e.locationValue;return(0,v.jsx)(v.Fragment,{children:t&&(0,v.jsxs)("div",{className:l.mainContainer,children:[(0,v.jsx)("div",{className:l.buttonContainer,children:(0,v.jsxs)("button",{className:l.button,type:"button",onClick:n,children:[(0,v.jsx)("span",{children:"\u2190"}),"GO BACK"]})}),(0,v.jsxs)("div",{className:l.filmContainer,children:[(0,v.jsx)("div",{className:l.imageContainer,children:(0,v.jsx)("img",{className:l.image,src:c.yA+t.poster_path,alt:t.title})}),(0,v.jsxs)("div",{className:l.detailsContainer,children:[(0,v.jsx)("h2",{className:l.title,children:t.title||t.name||t.original_title}),(0,v.jsxs)("p",{className:l.text,children:[(0,v.jsx)("span",{className:l.textCategory,children:"Rating: "}),t.vote_average.toFixed(1)]}),(0,v.jsxs)("p",{className:l.text,children:[(0,v.jsx)("span",{className:l.textCategory,children:"Overview: "}),t.overview]}),(0,v.jsxs)("p",{className:l.text,children:[(0,v.jsx)("span",{className:l.textCategory,children:"Genres: "}),t.genres.map((function(e){return e.name})).join(" ")]})]})]}),(0,v.jsxs)("div",{className:l.additionalContainer,children:[(0,v.jsx)("h3",{className:l.title,children:"Additional information"}),(0,v.jsxs)("nav",{children:[(0,v.jsx)(s.OL,{to:{pathname:"/movies/".concat(a,"/cast"),state:{from:o}},children:"Cast"}),(0,v.jsx)(s.OL,{to:{pathname:"/movies/".concat(a,"/reviews"),state:{from:o}},children:"Reviews"})]}),(0,v.jsx)(i.Suspense,{fallback:(0,v.jsx)(u.Z,{}),children:(0,v.jsxs)(r.Z5,{children:[(0,v.jsx)(r.AW,{path:"/movies/:movieId/cast",element:(0,v.jsx)(m,{movieId:a})}),(0,v.jsx)(r.AW,{path:"/movies/:movieID/reviews",element:(0,v.jsx)(d,{movieId:a})})]})})]})]})})};function f(){var e=(0,r.s0)(),t=(0,r.TH)(),n=(0,r.UO)().movieId,s=(0,i.useState)(null),c=(0,a.Z)(s,2),l=c[0],u=c[1],m=t.state;t.state&&(m=t.state.from),(0,i.useEffect)((function(){(0,o.Yi)(n).then((function(e){u(e)}))}),[n]);return(0,v.jsx)("div",{children:(0,v.jsx)(h,{movie:l,onGoBack:function(){t.state?e("".concat(t.state.from.pathname).concat(t.state.from.search)):e("/")},locationValue:m,movieId:n})})}},585:function(e,t,n){n.d(t,{$h:function(){return a},_n:function(){return i},yA:function(){return r}});var a="53b2ac0d64cbeedea763734f4fe8a4ce",i="https://api.themoviedb.org/3",r="https://image.tmdb.org/t/p/w500"},94:function(e,t,n){n.d(t,{Yi:function(){return m},uV:function(){return h},wr:function(){return u}});var a=n(861),i=n(757),r=n.n(i),o=n(243),s=n(686),c=n.n(s),l=n(585);function u(){return v.apply(this,arguments)}function v(){return(v=(0,a.Z)(r().mark((function e(){var t,n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(l._n,"/trending/all/day?api_key=").concat(l.$h));case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),c().Notify.failure("Failed to fetch trending movies. Please try again later."),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return(d=(0,a.Z)(r().mark((function e(t){var n,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(l._n,"/movie/").concat(t,"?api_key=").concat(l.$h,"&language=en-US"));case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),c().Notify.failure("Failed to fetch movie details. Please try again later."),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}var h=function(){var e=(0,a.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("Fetching movie cast for movieId:",t),e.next=4,o.Z.get("".concat(l._n,"/movie/").concat(t,"/credits?api_key=").concat(l.$h,"&language=en-US"));case 4:return n=e.sent,console.log("Response from API:",n),e.abrupt("return",n.data.cast);case 9:throw e.prev=9,e.t0=e.catch(0),console.error("Error fetching movie cast:",e.t0),c().Notify.failure("Failed to fetch movie cast. Please try again later."),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=71.ac368910.chunk.js.map