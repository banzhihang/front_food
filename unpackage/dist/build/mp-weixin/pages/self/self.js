(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/self/self"],{"0868":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(e("a34a")),u=e("db06"),a=e("f1ac"),i=e("5d11");function r(n){return n&&n.__esModule?n:{default:n}}function c(n,t,e,o,u,a,i){try{var r=n[a](i),c=r.value}catch(f){return void e(f)}r.done?t(c):Promise.resolve(c).then(o,u)}function f(n){return function(){var t=this,e=arguments;return new Promise((function(o,u){var a=n.apply(t,e);function i(n){c(a,o,u,i,r,"next",n)}function r(n){c(a,o,u,i,r,"throw",n)}i(void 0)}))}}var s={data:function(){return{showLoading:!0,userInfo:{},location:"",haveToken:!1,customStyle:{height:"80rpx",width:"430rpx",backgroundColor:"#1a5abf",color:"#FFFFFF",fontSize:"30rpx"}}},methods:{jumpToMyContent:function(t,e){var o="";o="想吃"===t?this.userInfo.my_want_link:"吃过"===t?this.userInfo.my_eated_link:this.userInfo.my_push_link,o=o+"?location="+this.location;var u={link:o,title:t},a=encodeURIComponent(JSON.stringify(u));n.navigateTo({url:"/pages/self/my-content?item="+a,animationDuration:700})},getLocation:function(){var t=this;""===t.location?n.authorize({scope:"scope.userLocation",success:function(e){n.getLocation({success:function(){var n=f(o.default.mark((function n(e){var u;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:u=e.latitude.toString()+","+e.longitude.toString(),t.location=u,t.syncData();case 3:case"end":return n.stop()}}),n)})));function e(t){return n.apply(this,arguments)}return e}(),fail:function(){(0,a.getLocationFail)()}})},fail:function(){(0,a.getUserInfoFail)()}}):this.syncData()},syncData:function(){var n=this;return f(o.default.mark((function t(){var e,u;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$http.get(i.userDataUrl);case 2:e=t.sent,u=e.data,n.userInfo=u.data,n.nextUrl=u.data.next,n.showLoading=!1;case 7:case"end":return t.stop()}}),t)})))()},jumpLogin:function(){n.navigateTo({url:"/pages/self/login"})}},onShow:function(){var n=(0,u.checkLogin)(!0);n?(this.haveToken=!0,this.getLocation()):(this.haveToken=!1,this.showLoading=!1)}};t.default=s}).call(this,e("543d")["default"])},"318f":function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return o}));var o={myLoading:function(){return e.e("components/my-loading/my-loading").then(e.bind(null,"f09b"))},uAvatar:function(){return e.e("uview-ui/components/u-avatar/u-avatar").then(e.bind(null,"df23"))},uCard:function(){return e.e("uview-ui/components/u-card/u-card").then(e.bind(null,"b1f2"))},uIcon:function(){return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null,"609f"))},uImage:function(){return e.e("uview-ui/components/u-image/u-image").then(e.bind(null,"4381"))},uButton:function(){return e.e("uview-ui/components/u-button/u-button").then(e.bind(null,"24c4"))}},u=function(){var n=this,t=n.$createElement;n._self._c},a=[]},"469a":function(n,t,e){},"8c6f":function(n,t,e){"use strict";e.r(t);var o=e("318f"),u=e("fa1f");for(var a in u)"default"!==a&&function(n){e.d(t,n,(function(){return u[n]}))}(a);e("b5e0");var i,r=e("f0c5"),c=Object(r["a"])(u["default"],o["b"],o["c"],!1,null,"20d58eda",null,!1,o["a"],i);t["default"]=c.exports},b5e0:function(n,t,e){"use strict";var o=e("469a"),u=e.n(o);u.a},d688:function(n,t,e){"use strict";(function(n){e("1111");o(e("66fd"));var t=o(e("8c6f"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},fa1f:function(n,t,e){"use strict";e.r(t);var o=e("0868"),u=e.n(o);for(var a in o)"default"!==a&&function(n){e.d(t,n,(function(){return o[n]}))}(a);t["default"]=u.a}},[["d688","common/runtime","common/vendor"]]]);