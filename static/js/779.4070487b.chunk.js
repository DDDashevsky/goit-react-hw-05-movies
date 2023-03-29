"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{854:function(n,t,e){e.d(t,{a:function(){return c}});var r=e(5243),a=e(184),c=function(){return(0,a.jsx)(r.rj,{color:"#102fdfdd",height:100,width:100,wrapperClass:"Loader"})}},9779:function(n,t,e){e.r(t),e.d(t,{default:function(){return A}});var r,a,c,u,o,i,s,p,l=e(5861),d=e(9439),f=e(4687),h=e.n(f),g=e(2791),v=e(7689),x=e(854),Z=e(168),w=e(82),y=w.ZP.div(r||(r=(0,Z.Z)([""]))),m=w.ZP.p(a||(a=(0,Z.Z)([""]))),k=w.ZP.ul(c||(c=(0,Z.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 0;\n"]))),b=w.ZP.li(u||(u=(0,Z.Z)(["\n  list-style: none;\n  padding: 10px;\n  &:nth-child(2n + 1) {\n    background-color: lightgray;\n    border-radius: 10px;\n  }\n"]))),_=w.ZP.img(o||(o=(0,Z.Z)(["\n  width: 40px;\n  height: 40px;\n"]))),j=w.ZP.p(i||(i=(0,Z.Z)(["\n  font-size: 16px;\n  font-weight: 500;\n"]))),S=w.ZP.div(s||(s=(0,Z.Z)(["\n  display: flex;\n  gap: 30px;\n"]))),P=w.ZP.div(p||(p=(0,Z.Z)(["\n  width: 100%;\n  background-color: lightgray;\n  border-radius: 10px;\n  font-size: 18px;\n  font-weight: 500;\n  text-align: center;\n  padding: 30px;\n"]))),U=e(5984),C=e(8514),z=e(184),A=function(){var n=(0,v.UO)().id,t=(0,g.useState)(null),e=(0,d.Z)(t,2),r=e[0],a=e[1],c=(0,g.useState)("idle"),u=(0,d.Z)(c,2),o=u[0],i=u[1];return(0,g.useEffect)((function(){var t=new AbortController,e=function(){var e=(0,l.Z)(h().mark((function e(){var r;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,C.Hx)(n,{signal:t.signal});case 2:(r=e.sent)&&a(r),i("loaded");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,z.jsxs)(y,{children:["idle"===o&&(0,z.jsx)(x.a,{}),null!==r&&(0,z.jsxs)(k,{children:[0===r.length&&(0,z.jsx)(P,{children:"Sorry, no result"}),r.map((function(n){return(0,z.jsxs)(b,{children:[(0,z.jsxs)(S,{children:[(0,z.jsx)(_,{src:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"}),(0,z.jsx)(j,{children:n.author})]}),(0,z.jsx)(m,{children:n.content})]},(0,U.x0)())}))]})]})}},8514:function(n,t,e){e.d(t,{Hx:function(){return d},Xd:function(){return s},w8:function(){return p},wr:function(){return i},yW:function(){return l}});var r=e(5861),a=e(4687),c=e.n(a),u=e(1243),o="f5b8fda00d2f47b0eff33be89e14dda0";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("trending/movie/day?api_key=".concat(o,"&page=").concat(t),e);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t,e,r){var a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("search/movie?api_key=".concat(o,"&language=en-US&query=").concat(t,"&page=").concat(e,"&include_adult=false"),r);case 3:return a=n.sent,n.abrupt("return",a.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e,r){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"),e);case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("\nmovie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"),e);case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t,e){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"),e);case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}()},5984:function(n,t,e){e.d(t,{x0:function(){return r}});var r=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,t){return n+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=779.4070487b.chunk.js.map