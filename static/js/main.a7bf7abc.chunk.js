(window["webpackJsonpmy-app"]=window["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return m})),n.d(t,"c",(function(){return f}));var a=n(57),r=n(0),o=n.n(r),c=n(23),l=n.n(c),i=n(93),s=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,c=n&&a;return o.a.createElement("div",{className:l.a.formControl+" "+(c?l.a.error:"")},o.a.createElement("div",null,r),c&&o.a.createElement("span",null,a))},u=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n,{className:l.a.textarea})))},m=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},f=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r))," ",c)}},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(36),r=n(13);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(n,!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={dialogs:[{id:"1",name:"Adriana"},{id:"2",name:"Roberto"},{id:"3",name:"Gabriela"},{id:"4",name:"Gerardo"},{id:"5",name:"Camila"},{id:"6",name:"Silvia"}],messages:[{id:"1",message:"hi"},{id:"2",message:"Hoy are you?"},{id:"3",message:"Yo"}]},i=function(e){return{type:"ADD-MESSAGE",newMessageBody:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n=t.newMessageBody;return c({},e,{messages:[].concat(Object(a.a)(e.messages),[{id:4,message:n}])});default:return e}}},137:function(e,t,n){e.exports=n.p+"static/media/preloader.cfec7f1a.gif"},139:function(e,t,n){e.exports=n.p+"static/media/avatar.0049a098.jpg"},166:function(e,t,n){e.exports=n(297)},171:function(e,t,n){},172:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){},23:function(e,t,n){e.exports={formControl:"FormsControls_formControl__1_eJJ",error:"FormsControls_error__3Bj7o",formSummaryError:"FormsControls_formSummaryError__18Me8",textarea:"FormsControls_textarea__FQuZ9",input:"FormsControls_input__Id7Vv",checkbox:"FormsControls_checkbox__r3VAk"}},27:function(e,t,n){e.exports={avatar:"ProfileInfo_avatar__MtgDS",contact:"ProfileInfo_contact__fOaRI",highBlock:"ProfileInfo_highBlock__dfr1v",btnEdit:"ProfileInfo_btnEdit__265Wj",textarea:"ProfileInfo_textarea__1KGdg",btnSave:"ProfileInfo_btnSave__nnO2B"}},296:function(e,t,n){},297:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),o=n(68),c=n.n(o),l=(n(171),n(30)),i=n(31),s=n(33),u=n(32),m=n(34),f=(n(172),n(5)),p=n.n(f),d=n(12),b=function(){return r.a.createElement("nav",{className:p.a.nav},r.a.createElement("ul",{className:p.a.ul},r.a.createElement("li",{className:p.a.item},r.a.createElement(d.b,{to:"/profile",activeClassName:p.a.active,className:p.a.a},r.a.createElement("i",{class:"fa fa-home","aria-hidden":"true"}),r.a.createElement("div",{className:p.a.name,"data-text":p.a.home},"Profile"))),r.a.createElement("li",{className:p.a.item},r.a.createElement(d.b,{to:"/dialogs",activeClassName:p.a.active,className:p.a.a},r.a.createElement("i",{class:"fa fa-comments-o","aria-hidden":"true"}),r.a.createElement("div",{className:p.a.name,"data-text":p.a.home},"Message"))),r.a.createElement("li",{className:p.a.item},r.a.createElement(d.b,{to:"/news",activeClassName:p.a.active,className:p.a.a},r.a.createElement("i",{class:"fa fa-globe","aria-hidden":"true"}),r.a.createElement("div",{className:p.a.name,"data-text":p.a.home},"News"))),r.a.createElement("li",{className:p.a.item},r.a.createElement(d.b,{to:"/music",activeClassName:p.a.active,className:p.a.a},r.a.createElement("i",{class:"fa fa-play","aria-hidden":"true"}),r.a.createElement("div",{className:p.a.name,"data-text":p.a.home},"Music"))),r.a.createElement("li",{className:p.a.item},r.a.createElement(d.b,{to:"/settings",activeClassName:p.a.active,className:p.a.a},r.a.createElement("i",{class:"fa fa-sliders","aria-hidden":"true"}),r.a.createElement("div",{className:p.a.name,"data-text":p.a.home},"Settings"))),r.a.createElement("li",{className:p.a.item},r.a.createElement(d.b,{to:"/users",activeClassName:p.a.active,className:p.a.a},r.a.createElement("i",{class:"fa fa-user-plus","aria-hidden":"true"}),r.a.createElement("div",{className:p.a.name,"data-text":p.a.home},"Users")))))},g=(n(177),function(e){return r.a.createElement("div",null,"Music")}),E=(n(178),function(e){return r.a.createElement("div",null,"Settings")}),h=(n(179),function(e){return r.a.createElement("div",null,r.a.createElement("div",null," Friends"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("img",{src:"https://i.pinimg.com/originals/09/4f/c6/094fc6adfddb1ba0fc6f73083e7c03bf.jpg"})),r.a.createElement("li",null,"\u043f\u0435\u0440\u0435\u0434\u0435\u043b\u0430\u0442\u044c"),r.a.createElement("li",null)))}),v=n(38),O=n(36),w=n(13);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y={news:[{id:"1",content:"Last month - June 2019 - 10th edition of ECMA-262 standard was officially published. What does it mean? - Well, ECMAScript 2019 is here!"},{id:"2",content:"The latest and greatest specification for JavaScript and other derivatives languages to follow."},{id:"3",content:"And while you may already have heard of some of its new features, we`ll recall all of them! Plus some ECMAScript details and a sneak-peak of what`s coming next!"}]},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-NEW":var n=t.newNewsText;return P({},e,{news:[].concat(Object(O.a)(e.news),[{id:5,content:n}]),newsText:""});default:return e}},S=n(56),N=n.n(S),k=function(e){return r.a.createElement("li",{className:N.a.news},e.content)},C=n(93),x=n(130),I=n(10),A=Object(x.a)({form:"profileAddNewPostForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(C.a,{placeholder:"Enter your news",name:"newNewsText",component:I.b})),r.a.createElement("div",null,r.a.createElement("button",{className:N.a.btnAddNew},"Add news")))})),T=function(e){var t=e.newsPage.news.map((function(e){return r.a.createElement(k,{content:e.content,id:e.id})}));return r.a.createElement("div",null,r.a.createElement("b",null,"News:"),r.a.createElement("div",null,r.a.createElement("div",{className:N.a.newsBlock},t),r.a.createElement("div",null,r.a.createElement(A,{onSubmit:function(t){e.addNew(t.newNewsText)}}))))},U=n(11),D=Object(U.b)((function(e){return{newsPage:e.newsPage}}),{addNew:function(e){return{type:"ADD-NEW",newNewsText:e}}})(T),F=n(7),L=n.n(F),B=n(15),M=n(135),R=n(22);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H={posts:[{id:"1",message:"Hi, how are you?",likesCount:13},{id:"2",message:"Can you help me with react?",likesCount:19},{id:"3",message:"Looking for a job",likesCount:121}],profile:null,status:"",photos:"3"},W=function(e){return{type:"SET_STATUS",status:e}},J=function(e){return function(){var t=Object(B.a)(L.a.mark((function t(n){var a;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,q.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n=t.newPostText;return G({},e,{newPostText:"",posts:[].concat(Object(O.a)(e.posts),[{id:6,message:n,likesCount:0}])});case"DELETE_POST":return G({},e,{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case"SET_USER_PROFILE":return G({},e,{profile:t.profile});case"SET_STATUS":return G({},e,{status:t.status});case"SAVE_PHOTO_SUCCESS":return G({},e,{profile:G({},e.profile,{photos:t.photos})});default:return e}},Z=M.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"ae4c3a01-1d12-4498-85df-24268c218e2b"}}),q={requestUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return Z.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return Z.post("follow/".concat(e))},unfollow:function(e){return Z.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object"),Y.getProfile(e)}},Y={getProfile:function(e){return Z.get("profile/"+e)},getStatus:function(e){return Z.get("/profile/status/"+e)},updateStatus:function(e){return Z.put("/profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),Z.put("/profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return Z.put("/profile",e)}},Q=function(){return Z.get("auth/me")},X=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return Z.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},K=function(){return Z.delete("auth/login")},$=function(){return Z.get("security/get-captcha-url")};function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var te=function(e,t,n,a){return e.map((function(e){return e[n]===t?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},a):e}))};function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},oe=function(e){return{type:"FOLLOW",userId:e}},ce=function(e){return{type:"UNFOLLOW",userId:e}},le=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},ie=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},se=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},ue=function(){var e=Object(B.a)(L.a.mark((function e(t,n,a,r){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(se(!0,n)),e.next=3,a(n);case 3:0==e.sent.data.resultCode&&t(r(n)),t(se(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return ae({},e,{users:te(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return ae({},e,{users:te(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return ae({},e,{users:t.users});case"SET_CURRENT_PAGE":return ae({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return ae({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return ae({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return ae({},e,{followingInProgress:t.isFetching?[].concat(Object(O.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},fe=n(57),pe=n(42),de=n(75),be=n.n(de),ge=n(136),Ee=n.n(ge),he=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,c=e.onPageChanged,l=e.portionSize,i=void 0===l?10:l,s=Math.ceil(t/n),u=[],m=1;m<=s;m++)u.push(m);var f=Math.ceil(s/i),p=Object(a.useState)(1),d=Object(pe.a)(p,2),b=d[0],g=d[1],E=(b-1)*i+1,h=b*i;return r.a.createElement("div",{className:be.a.paginator},b>=1&&r.a.createElement("button",{disabled:b<=1,onClick:function(){g(b-1)}},"prev"),u.filter((function(e){return e>=E&&e<=h})).map((function(e){return r.a.createElement("span",{className:Ee()(Object(w.a)({},be.a.selectedPage,o===e),be.a.pageNumber),key:e,onClick:function(t){c(e)}},e)})),f>b&&r.a.createElement("button",{onClick:function(){g(b+1)}},"next"))},ve=n(43),Oe=n.n(ve),we=n(73),_e=n.n(we),Pe=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,o=e.follow;return r.a.createElement("div",{className:Oe.a.userInfo},r.a.createElement("div",null,r.a.createElement(d.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:_e.a,className:Oe.a.avatar}))),r.a.createElement("div",{className:Oe.a.btnFollou},t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow")),r.a.createElement("div",{className:Oe.a.userName},r.a.createElement("div",null,"Name: ",t.name),r.a.createElement("div",null,"Status: ",t.status||"nope")))},ye=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,o=e.onPageChanged,c=e.users,l=Object(fe.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return r.a.createElement("div",null,r.a.createElement(he,{currentPage:t,totalItemsCount:n,pageSize:a,onPageChanged:o}),r.a.createElement("div",null,c.map((function(e){return r.a.createElement(Pe,{key:e.id,followingInProgress:l.followingInProgress,user:e,unfollow:l.unfollow,follow:l.follow})}))))},je=n(137),Se=n.n(je),Ne=function(e){return r.a.createElement("div",null,r.a.createElement("img",{src:Se.a}))},ke=n(8),Ce=n(138),xe=Object(Ce.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Ie=function(e){return e.usersPage.pageSize},Ae=function(e){return e.usersPage.totalUsersCount},Te=function(e){return e.usersPage.currentPage},Ue=function(e){return e.usersPage.isFetching},De=function(e){return e.usersPage.followingInProgress},Fe=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).onPageChanged=function(e){var t=n.props.pageSize;n.props.requestUsers(e,t)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement("div",{className:Oe.a.preloader},r.a.createElement(Ne,null)):null,r.a.createElement(ye,{users:this.props.users,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,unfollow:this.props.unfollow,follow:this.props.follow,toggleIsFetching:this.props.toggleIsFetching,followingInProgress:this.props.followingInProgress}))}}]),t}(r.a.Component),Le=Object(ke.d)(Object(U.b)((function(e){return{users:xe(e),pageSize:Ie(e),totalUsersCount:Ae(e),currentPage:Te(e),isFetching:Ue(e),followingInProgress:De(e)}}),{follow:function(e){return function(){var t=Object(B.a)(L.a.mark((function t(n){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ue(n,e,q.follow.bind(q),oe);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(B.a)(L.a.mark((function t(n){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ue(n,e,q.unfollow.bind(q),ce);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:le,toggleFollowingProgress:se,requestUsers:function(e,t){return function(){var n=Object(B.a)(L.a.mark((function n(a){var r;return L.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(ie(!0)),a(le(e)),n.next=4,q.requestUsers(e,t);case 4:r=n.sent,a(ie(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(Fe),Be=(n(296),n(50)),Me=n.n(Be),Re=n(76),ze=n.n(Re),Ge=n(139),He=n.n(Ge),We=r.a.memo((function(e){return r.a.createElement("div",{className:ze.a.item},r.a.createElement("img",{src:He.a}),e.message,r.a.createElement("div",{className:ze.a.post},r.a.createElement("i",{class:"fa fa-thumbs-up","aria-hidden":"true"}),e.likesCount,r.a.createElement("span",null," like")),r.a.createElement("div",{className:ze.a.line}))})),Je=n(41),Ve=Object(Je.a)(10),Ze=Object(x.a)({form:"profileAddNewPostForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",null,r.a.createElement(C.a,{className:Me.a.textarea,validate:[Je.b,Ve],name:"newPostText",component:I.b})),r.a.createElement("div",null,r.a.createElement("button",{className:Me.a.button},"Add post")))})),qe=r.a.memo((function(e){console.log("RENDER");var t=e.profilePage.posts.map((function(e){return r.a.createElement(We,{key:e.id,message:e.message,likesCount:e.likesCount})}));return r.a.createElement("div",{className:Me.a.postsBlock},r.a.createElement("h3",{className:Me.a.title},"My posts"),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(Ze,{onSubmit:function(t){e.addPost(t.newPostText)}}))),r.a.createElement("div",{className:Me.a.posts},t))})),Ye=n(27),Qe=n.n(Ye),Xe=function(e){var t=Object(a.useState)(!1),n=Object(pe.a)(t,2),o=n[0],c=n[1],l=Object(a.useState)(e.status),i=Object(pe.a)(l,2),s=i[0],u=i[1];Object(a.useEffect)((function(){u(e.status)}),[e.status]);return r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("b",null,"Status"),": ",r.a.createElement("span",{onDoubleClick:function(){c(!0)}},e.status||"NOPE")),o&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){u(e.currentTarget.value)},onBlur:function(){c(!1),e.updateStatus(s)},autoFocus:!0,value:s})))},Ke=n(23),$e=n.n(Ke),et=Object(x.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile,a=e.error;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement("button",{className:Qe.a.btnSave},"Save")),a&&r.a.createElement("div",{className:$e.a.formSummaryError},a),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,"Full name"),": ",Object(I.c)("Full name","fullName",[],I.a)),r.a.createElement("li",null,r.a.createElement("b",null,"About me"),": ",Object(I.c)("About me","aboutMe",[],I.b)),r.a.createElement("li",null,r.a.createElement("b",null,"Looking for a job"),": ",Object(I.c)("","lookingForAJob",[],I.a,{type:"checkbox"})),r.a.createElement("li",null,r.a.createElement("b",null,"My professionals skills"),": ",r.a.createElement("div",{className:Qe.a.field},Object(I.c)("My skills","lookingForAJobDescription",[],I.b))),r.a.createElement("li",null,r.a.createElement("b",null,"Contacts"),": ",Object.keys(n.contacts).map((function(e){return r.a.createElement("div",{key:e,className:Qe.a.contact},r.a.createElement("b",null,e,": ",Object(I.c)(e,"contacts."+e,[],I.a)))})))))})),tt=function(e){var t=e.profile,n=e.isOwner,a=e.goToEditMode;return r.a.createElement("div",null,r.a.createElement("div",null,n&&r.a.createElement("button",{className:Qe.a.btnEdit,onClick:a},"Edit")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("b",null,"Full name"),": ",t.fullName),r.a.createElement("li",null,r.a.createElement("b",null,"About me"),": ",t.aboutMe||" ---"),r.a.createElement("li",null,r.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&r.a.createElement("li",null,r.a.createElement("b",null,"My professionals skills"),": ",t.lookingForAJobDescription),r.a.createElement("li",null,r.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return r.a.createElement(nt,{key:e,contactTitle:e,contactValue:t.contacts[e]})})))))},nt=function(e){var t=e.contactTitle,n=e.contactValue;return""===n||null===n?null:r.a.createElement("div",{className:Qe.a.contact},r.a.createElement("b",null,t),": ",n)},at=function(e){var t=e.profile,n=e.status,o=e.updateStatus,c=e.isOwner,l=e.savePhoto,i=e.saveProfile,s=Object(a.useState)(!1),u=Object(pe.a)(s,2),m=u[0],f=u[1];if(!t)return r.a.createElement(Ne,null);return r.a.createElement("div",null,r.a.createElement("div",{className:Qe.a.description_block},r.a.createElement("div",{className:Qe.a.highBlock},r.a.createElement("div",null,r.a.createElement("img",{className:Qe.a.avatar,src:t.photos.large||_e.a}),c&&r.a.createElement("label",{for:"file"},"Choose avatar")),m?r.a.createElement(et,{initialValues:t,profile:t,onSubmit:function(e){i(e).then((function(){f(!1)}))}}):r.a.createElement(tt,{goToEditMode:function(){f(!0)},profile:t,isOwner:c})),c&&r.a.createElement("input",{type:"file",id:"file",onChange:function(e){e.target.files.length&&l(e.target.files[0])}}),r.a.createElement(Xe,{status:n,updateStatus:o})))},rt=Object(U.b)((function(e){return{profilePage:e.profilePage}}),{addPost:function(e){return{type:"ADD-POST",newPostText:e}}})(qe),ot=function(e){return r.a.createElement("div",null,r.a.createElement(at,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),r.a.createElement(rt,null))},ct=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement(ot,Object.assign({},this.props,{isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),t}(r.a.Component),lt=Object(ke.d)(Object(U.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:J,getStatus:function(e){return function(){var t=Object(B.a)(L.a.mark((function t(n){var a;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y.getStatus(e);case 2:a=t.sent,n(W(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(B.a)(L.a.mark((function t(n){return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(W(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(B.a)(L.a.mark((function t(n){var a;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Y.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(B.a)(L.a.mark((function t(n,a){var r,o;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,t.next=3,Y.saveProfile(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=8;break}n(J(r)),t.next=10;break;case 8:return n(Object(R.a)("edit-profile",{_error:o.data.messages[0]})),t.abrupt("return",Promise.reject(o.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),v.g)(ct),it=n(44),st=n.n(it),ut=function(e){return r.a.createElement("header",{className:st.a.header},r.a.createElement("div",{className:st.a.container},r.a.createElement(d.b,{to:"/"},r.a.createElement("img",{src:"https://img.icons8.com/ios/2x/react-native.png"})),r.a.createElement("div",{className:st.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login,"  ",r.a.createElement("button",{onClick:e.logout,className:st.a.exitBtn},"exit")):r.a.createElement("div",{className:st.a.loginBtnBlock},r.a.createElement(d.b,{to:"/login",className:st.a.loginBtn},"Login")))))};function mt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ft(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?mt(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var pt="react-network/auth/SET_USER_DATA",dt={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},bt=function(e,t,n,a){return{type:pt,payload:{userId:e,email:t,login:n,isAuth:a}}},gt=function(){return function(){var e=Object(B.a)(L.a.mark((function e(t){var n,a,r,o,c;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.login,c=a.email,t(bt(r,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Et=function(){return function(){var e=Object(B.a)(L.a.mark((function e(t){var n,a;return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$();case 2:n=e.sent,a=n.data.url,t({type:"react-network/auth/GET_CAPTCHA_URL_SECCESS",payload:{captchaUrl:a}});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ht=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pt:case"react-network/auth/GET_CAPTCHA_URL_SECCESS":return ft({},e,{},t.payload);default:return e}},vt=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(ut,this.props)}}]),t}(r.a.Component),Ot=Object(U.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(B.a)(L.a.mark((function e(t){return L.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K();case 2:0===e.sent.data.resultCode&&t(bt(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(vt),wt=n(98),_t=n.n(wt),Pt=Object(x.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",{className:$e.a.input},Object(I.c)("Email","email",[Je.b],I.a)),r.a.createElement("div",{className:$e.a.input},Object(I.c)("Password","password",[Je.b],I.a,{type:"password"})),r.a.createElement("div",{className:$e.a.checkbox},Object(I.c)(null,"rememberMe",[],I.a,{type:"checkbox"},"remember me")),a&&r.a.createElement("img",{src:a}),a&&Object(I.c)("Symbols","captcha",[Je.b],I.a,{}),n&&r.a.createElement("div",{className:$e.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),yt=Object(U.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,a){return function(){var r=Object(B.a)(L.a.mark((function r(o){var c,l;return L.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,X(e,t,n,a);case 2:if(0!==(c=r.sent).data.resultCode){r.next=7;break}o(gt()),r.next=14;break;case 7:if(10!==c.data.resultCode){r.next=12;break}return r.next=10,$();case 10:r.sent,o(Et());case 12:l=c.data.messages.length>0?c.data.messages[0]:"Some error",o(Object(R.a)("login",{_error:l}));case 14:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(v.a,{to:"/profile"}):r.a.createElement("div",{className:_t.a.loginBlock},r.a.createElement("div",null,r.a.createElement("h1",null,"LOGIN"),r.a.createElement(Pt,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})),r.a.createElement("div",{className:_t.a.loginInfo},r.a.createElement("p",null,"Hello if you haven`t account you can use:"),r.a.createElement("p",null,"Login: ",r.a.createElement("u",null,"free@samuraijs.com")),r.a.createElement("p",null,"Password: ",r.a.createElement("u",null,"free")),r.a.createElement("p",null,"my id: 1487 you can use ",r.a.createElement("u",null,"...profile/1487"))))}));function jt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function St(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?jt(n,!0).forEach((function(t){Object(w.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):jt(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Nt={initialized:!1},kt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Nt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return St({},e,{initialized:!0});default:return e}},Ct=n(129),xt=n(140),It=n(131),At=Object(ke.c)({profilePage:V,newsPage:j,dialogsPage:Ct.b,usersPage:me,auth:ht,form:It.a,app:kt}),Tt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ke.d,Ut=Object(ke.e)(At,Tt(Object(ke.a)(xt.a)));window.__store__=Ut;var Dt=Ut,Ft=r.a.lazy((function(){return n.e(3).then(n.bind(null,300))})),Lt=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).catchAllUnhandleErrors=function(e,t){},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandleErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandleErrors)}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",null,r.a.createElement(Ot,null),r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(b,null),r.a.createElement("div",{className:"app-wraper-content"},r.a.createElement(v.d,null,r.a.createElement(v.b,{exact:!0,path:"/",render:function(){return r.a.createElement(v.a,{to:"/profile"})}}),r.a.createElement(v.b,{path:"/dialogs",render:(e=Ft,function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(e,t))})}),r.a.createElement(v.b,{path:"/profile/:userId?",render:function(){return r.a.createElement(lt,null)}}),r.a.createElement(v.b,{path:"/news",render:function(){return r.a.createElement(D,null)}}),r.a.createElement(v.b,{path:"/music",render:function(){return r.a.createElement(g,null)}}),r.a.createElement(v.b,{path:"/settings",render:function(){return r.a.createElement(E,null)}}),r.a.createElement(v.b,{path:"/friends",render:function(){return r.a.createElement(h,null)}}),r.a.createElement(v.b,{path:"/users",render:function(){return r.a.createElement(Le,null)}}),r.a.createElement(v.b,{path:"/login",render:function(){return r.a.createElement(yt,null)}}),r.a.createElement(v.b,{path:"*",render:function(){return r.a.createElement("div",null,"404 NOT FOUND")}}))))):r.a.createElement(Ne,null);var e}}]),t}(r.a.Component),Bt=Object(ke.d)(Object(U.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(gt());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}),v.g)(Lt),Mt=function(e){return r.a.createElement(d.a,null,r.a.createElement(U.a,{store:Dt},r.a.createElement(Bt,null)))};c.a.render(r.a.createElement(Mt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},41:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"max length is ".concat(e," symbols")}}},43:function(e,t,n){e.exports={avatar:"Users_avatar__1WP5U",preloader:"Users_preloader__ToFaR",userInfo:"Users_userInfo__lujA5",btnFollou:"Users_btnFollou__17SWR"}},44:function(e,t,n){e.exports={header:"Header_header__1RC8r",loginBlock:"Header_loginBlock__2BTFH",container:"Header_container__2K3eO",exitBtn:"Header_exitBtn__JutkD",loginBtn:"Header_loginBtn__1BHhd",loginBtnBlock:"Header_loginBtnBlock__2Yb5L"}},5:function(e,t,n){e.exports={nav:"Navbar_nav__8-0-s",ul:"Navbar_ul__1gJEH",item:"Navbar_item__2bByP",active:"Navbar_active__2Fx7s",friends:"Navbar_friends__11O9C",avatar:"Navbar_avatar__ZVwOQ",a:"Navbar_a__3NC05",name:"Navbar_name__3a0zs"}},50:function(e,t,n){e.exports={button:"MyPosts_button__2-nZY",FormsControls_textarea__FQuZ9:"MyPosts_FormsControls_textarea__FQuZ9__2xavX",title:"MyPosts_title__3XO6T"}},56:function(e,t,n){e.exports={btnAddNew:"News_btnAddNew__OclnU",newsBlock:"News_newsBlock__22Saq"}},73:function(e,t,n){e.exports=n.p+"static/media/user.a60fdfaa.jpg"},75:function(e,t,n){e.exports={selectedPage:"Paginator_selectedPage__3DdOt",pages:"Paginator_pages__27S-7",paginator:"Paginator_paginator__1VpJV",pageNumber:"Paginator_pageNumber__2Wz7u"}},76:function(e,t,n){e.exports={item:"Post_item__jVVtY",post:"Post_post__3y9nu",line:"Post_line__1D9jb"}},98:function(e,t,n){e.exports={loginBlock:"Login_loginBlock__1epUZ",loginInfo:"Login_loginInfo__2bBSs"}}},[[166,1,2]]]);
//# sourceMappingURL=main.a7bf7abc.chunk.js.map