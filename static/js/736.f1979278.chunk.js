"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{736:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r,a=e(861),c=e(439),u=e(757),s=e.n(u),i=e(791),o=e(689),p=e(866),f=e(60),h=e(766),v=e(867).ZP.div(r||(r=(0,h.Z)(["\n     list-style: none;\n"]))),d=e(184),l=function(){var t=(0,o.UO)().movieId,n=(0,i.useState)([]),e=(0,c.Z)(n,2),r=e[0],u=e[1];return(0,i.useEffect)((function(){var n=function(){var n=(0,a.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.y)(t);case 3:e=n.sent,u(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]),(0,d.jsxs)(d.Fragment,{children:[0!==r.length&&(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Cast"}),(0,d.jsx)(v,{children:r.map((function(t){return(0,d.jsxs)("li",{children:[(0,d.jsx)("img",{width:"200px",height:"300px",src:t.profile_path?"https://image.tmdb.org/t/p/w300".concat(t.profile_path):"".concat(f),alt:t.name}),(0,d.jsx)("p",{children:t.name})]},t.id)}))})]}),0===r.length&&(0,d.jsx)("div",{children:"We don't have any cast for this movie."})]})}},866:function(t,n,e){e.d(n,{$e:function(){return p},Bt:function(){return h},Y5:function(){return o},wr:function(){return i},y:function(){return f}});var r=e(861),a=e(757),c=e.n(a),u=e(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s={params:{api_key:"4cb470234e4a9a78e40f288ec25b93f9",language:"en-US"}},i=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day",s);case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n),s);case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?query=".concat(n),s);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(n,"/credits?"),s);case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/reviews?"),s);case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},60:function(t,n,e){t.exports=e.p+"static/media/notfoundphoto.d6e56ade37b640c52824.jpg"}}]);
//# sourceMappingURL=736.f1979278.chunk.js.map