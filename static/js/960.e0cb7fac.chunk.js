"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[960],{7838:function(n,t,e){e.d(t,{Z:function(){return f}});var r,i,a=e(168),u=e(7924),o=(0,u.ZP)("div")(r||(r=(0,a.Z)(["\n  padding: 20px;\n"]))),c=(0,u.ZP)("p")(i||(i=(0,a.Z)(["\n  color: red;\n  font-size: 20px;\n"]))),s=e(2070),d=e(184),f=function(n){var t=n.message;return(0,d.jsx)(s.Z,{children:(0,d.jsx)(o,{children:(0,d.jsx)(c,{children:t})})})}},9956:function(n,t,e){e.d(t,{X:function(){return o},l:function(){return c}});var r,i,a=e(168),u=e(7924),o=(0,u.ZP)("h1")(r||(r=(0,a.Z)([""]))),c=(0,u.ZP)("div")(i||(i=(0,a.Z)(["\n  margin-top: 20px;\n"])))},5515:function(n,t,e){e.d(t,{Z:function(){return d}});var r,i=e(7838),a=e(4137),u=e(168),o=(0,e(7924).ZP)("div")(r||(r=(0,u.Z)(["\n  /* position: fixed; */\n  /* top: 0; */\n  /* left: 0; */\n  /* width: 100vw; */\n  /* height: 100vh; */\n\n  padding: 20px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),c=e(184),s=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(a.iT,{visible:!0,height:"60",width:"60",color:"#a6a2c9",ariaLabel:"oval-loading",wrapperStyle:{},wrapperClass:""})})},d=function(n){var t=n.children,e=n.isLoading,r=n.error,a=void 0===r?null:r;return e?(0,c.jsx)(s,{}):a?(0,c.jsx)(i.Z,{message:a}):(0,c.jsx)(c.Fragment,{children:t})}},9049:function(n,t,e){e.d(t,{Z:function(){return x}});var r,i,a,u=e(168),o=e(7924),c=e(1087),s=(0,o.ZP)("ul")(r||(r=(0,u.Z)(["\n  padding-left: 30px;\n"]))),d=(0,o.ZP)("li")(i||(i=(0,u.Z)(["\n  border-bottom: 1px solid lightgray;\n"]))),f=(0,o.ZP)(c.Link)(a||(a=(0,u.Z)(["\n  display: block;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 16px;\n  font-weight: 700;\n  color: gray;\n\n  transition: color 300ms ease-in-out;\n\n  &:hover {\n    color: red;\n  }\n"]))),l=e(7689),p=e(184),h=function(n){var t=n.title,e=n.href,r=(0,l.TH)();return(0,p.jsx)(f,{to:e,state:{from:r},children:t})},x=function(n){var t=n.list;return(0,p.jsx)(s,{children:t.map((function(n){var t=n.id,e=n.title;return(0,p.jsx)(d,{children:(0,p.jsx)(h,{href:"/movies/".concat(t),title:e})},t)}))})}},5903:function(n,t,e){e.d(t,{Z:function(){return o}});var r,i=e(168),a=(0,e(7924).ZP)("section")(r||(r=(0,i.Z)(["\n  padding-top: 40px;\n  padding-bottom: 40px;\n"]))),u=e(184),o=function(n){var t=n.children;return(0,u.jsx)(a,{children:t})}},3960:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r,i,a,u=e(9439),o=e(2070),c=e(9049),s=e(5903),d=e(5515),f=e(7838),l=e(9956),p=e(2791),h=e(1087),x=e(4390),v=e(168),Z=e(7924),m=(0,Z.ZP)("form")(r||(r=(0,v.Z)(["\n  display: flex;\n"]))),g=(0,Z.ZP)("input")(i||(i=(0,v.Z)(["\n  font-size: 20px;\n  padding: 8px 20px;\n  border: 1px solid gray;\n  outline: none;\n"]))),j=(0,Z.ZP)("button")(a||(a=(0,v.Z)(["\n  padding: 0 12px;\n  display: block;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid gray;\n  border-left: none;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.03);\n  }\n"]))),y=e(4330),b=e(184),w=function(n){var t=n.onSubmit;return(0,b.jsxs)(m,{autoComplete:"off",onSubmit:function(n){n.preventDefault(),t(n.target.elements.searchMovie.value)},children:[(0,b.jsx)(g,{type:"text",name:"searchMovie"}),(0,b.jsx)(j,{type:"submit",children:(0,b.jsx)(y.FKI,{size:16})})]})},k=function(){var n=(0,p.useState)(null),t=(0,u.Z)(n,2),e=t[0],r=t[1],i=(0,p.useState)(null),a=(0,u.Z)(i,2),v=a[0],Z=a[1],m=(0,p.useState)(!1),g=(0,u.Z)(m,2),j=g[0],y=g[1],k=(0,h.useSearchParams)(),P=(0,u.Z)(k,2),I=P[0],z=P[1],M=I.get("query");(0,p.useEffect)((function(){y(!0),Z(null),(0,x.Zh)(M).then((function(n){var t=n.results;r(t)})).catch((function(n){Z(n.message)})).finally((function(){y(!1)}))}),[M]);if(e)return(0,b.jsx)(s.Z,{children:(0,b.jsxs)(o.Z,{children:[(0,b.jsx)(w,{onSubmit:function(n){z(""===n?{}:{query:n})}}),M&&(0,b.jsx)(d.Z,{isLoading:j,error:v,children:(0,b.jsx)(l.l,{children:e.length>0?(0,b.jsx)(c.Z,{list:e}):(0,b.jsx)(f.Z,{message:"Found nothing"})})})]})})},P=function(){return(0,b.jsx)(k,{})}},4390:function(n,t,e){e.d(t,{IQ:function(){return l},Jh:function(){return p},Pg:function(){return f},Zh:function(){return d},yE:function(){return s}});var r=e(5861),i=e(7757),a=e.n(i),u=e(5294),o=e(6210),c=u.Z.create({baseURL:o._n,headers:{Authorization:"Bearer ".concat(o.LA)},params:{language:"en-US"}}),s=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/movie/day");case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie",{params:{include_adult:!1,query:t,page:1}});case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},6210:function(n,t,e){e.d(t,{LA:function(){return i},MH:function(){return a},_n:function(){return r}});var r="https://api.themoviedb.org/3",i="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTEyNWYzNWZlZDhiZTgwMDE1MjFmYmM0ZDFjMWVmOCIsInN1YiI6IjY1ZmM5NmE5MTk3ZGU0MDE4NjE0YjRjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.On3GvzvjRikdcq2Q36daP21qTQjUrrPeY2i7seSO-TY",a="https://image.tmdb.org/t/p/w500"}}]);
//# sourceMappingURL=960.e0cb7fac.chunk.js.map