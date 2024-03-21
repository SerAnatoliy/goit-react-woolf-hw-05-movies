"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[417],{417:function(n,e,r){r.r(e),r.d(e,{default:function(){return I}});var t,a,i,c,u,o,s=r(9439),p=r(7838),d=r(5515),f=r(2791),l=r(7689),h=r(4390),m=r(5462),v=r(168),Z=r(7924),g=(0,Z.ZP)("div")(t||(t=(0,v.Z)([""]))),x=(0,Z.ZP)("ul")(a||(a=(0,v.Z)(["\n  display: grid;\n  gap: 30px;\n  grid-template-columns: repeat(2, 1fr);\n\n  @media screen and (min-width: 768px) {\n    grid-template-columns: repeat(5, 1fr);\n  }\n\n  @media screen and (min-width: 1440px) {\n    grid-template-columns: repeat(8, 1fr);\n  }\n"]))),j=(0,Z.ZP)("li")(i||(i=(0,v.Z)([""]))),w=(0,Z.ZP)("img")(c||(c=(0,v.Z)(["\n  display: block;\n  height: 200px;\n  width: 100%;\n  object-fit: cover;\n"]))),y=(0,Z.ZP)("p")(u||(u=(0,v.Z)(["\n  margin-top: 10px;\n"]))),b=(0,Z.ZP)("p")(o||(o=(0,v.Z)(["\n  margin-top: 10px;\n"]))),k=r(184),I=function(){var n=(0,f.useState)([]),e=(0,s.Z)(n,2),r=e[0],t=e[1],a=(0,f.useState)(!1),i=(0,s.Z)(a,2),c=i[0],u=i[1],o=(0,f.useState)(null),v=(0,s.Z)(o,2),Z=v[0],I=v[1],P=(0,l.UO)().movieId;return(0,f.useEffect)((function(){u(!0),I(null),(0,h.IQ)(P).then((function(n){var e=n.cast;t(e)})).catch((function(n){I(n.message)})).finally((function(){u(!1)}))}),[P]),(0,k.jsx)(d.Z,{isLoading:c,error:Z,children:(0,k.jsx)(g,{children:r.length>0?(0,k.jsx)(x,{children:r.map((function(n){var e=n.cast_id,r=n.character,t=n.name,a=n.profile_path;return(0,k.jsxs)(j,{children:[(0,k.jsx)(w,{src:a?(0,m.o)(a):"".concat("/goit-react-woolf-hw-05-movies","/no-image.png"),alt:t}),(0,k.jsx)(y,{children:t}),(0,k.jsxs)(b,{children:["Character: ",r]})]},e)}))}):(0,k.jsx)(p.Z,{message:"There are no cast here"})})})}},7838:function(n,e,r){r.d(e,{Z:function(){return d}});var t,a,i=r(168),c=r(7924),u=(0,c.ZP)("div")(t||(t=(0,i.Z)(["\n  padding: 20px;\n"]))),o=(0,c.ZP)("p")(a||(a=(0,i.Z)(["\n  color: red;\n  font-size: 20px;\n"]))),s=r(2070),p=r(184),d=function(n){var e=n.message;return(0,p.jsx)(s.Z,{children:(0,p.jsx)(u,{children:(0,p.jsx)(o,{children:e})})})}},5515:function(n,e,r){r.d(e,{Z:function(){return p}});var t,a=r(7838),i=r(4137),c=r(168),u=(0,r(7924).ZP)("div")(t||(t=(0,c.Z)(["\n  /* position: fixed; */\n  /* top: 0; */\n  /* left: 0; */\n  /* width: 100vw; */\n  /* height: 100vh; */\n\n  padding: 20px;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),o=r(184),s=function(){return(0,o.jsx)(u,{children:(0,o.jsx)(i.iT,{visible:!0,height:"60",width:"60",color:"#a6a2c9",ariaLabel:"oval-loading",wrapperStyle:{},wrapperClass:""})})},p=function(n){var e=n.children,r=n.isLoading,t=n.error,i=void 0===t?null:t;return r?(0,o.jsx)(s,{}):i?(0,o.jsx)(a.Z,{message:i}):(0,o.jsx)(o.Fragment,{children:e})}},4390:function(n,e,r){r.d(e,{IQ:function(){return f},Jh:function(){return l},Pg:function(){return d},Zh:function(){return p},yE:function(){return s}});var t=r(5861),a=r(7757),i=r.n(a),c=r(5294),u=r(6210),o=c.Z.create({baseURL:u._n,headers:{Authorization:"Bearer ".concat(u.LA)},params:{language:"en-US"}}),s=function(){var n=(0,t.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/trending/movie/day");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/search/movie",{params:{include_adult:!1,query:e,page:1}});case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(e,"/credits"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/movie/".concat(e,"/reviews"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},6210:function(n,e,r){r.d(e,{LA:function(){return a},MH:function(){return i},_n:function(){return t}});var t="https://api.themoviedb.org/3",a="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOTEyNWYzNWZlZDhiZTgwMDE1MjFmYmM0ZDFjMWVmOCIsInN1YiI6IjY1ZmM5NmE5MTk3ZGU0MDE4NjE0YjRjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.On3GvzvjRikdcq2Q36daP21qTQjUrrPeY2i7seSO-TY",i="https://image.tmdb.org/t/p/w500"},5462:function(n,e,r){r.d(e,{o:function(){return a}});var t=r(6210),a=function(n){return t.MH+n}}}]);
//# sourceMappingURL=417.22c729ce.chunk.js.map