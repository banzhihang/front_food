(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0cde":function(t,e,n){"use strict";n.r(e);var o=n("eed2"),a=n("658f");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("1eeb");var i,u=n("f0c5"),c=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"74ddde08",null,!1,o["a"],i);e["default"]=c.exports},"1eeb":function(t,e,n){"use strict";var o=n("e6b1"),a=n.n(o);a.a},2060:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(n("a34a")),a=n("f1ac");function r(t){return t&&t.__esModule?t:{default:t}}function i(t,e,n,o,a,r,i){try{var u=t[r](i),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(o,a)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var r=t.apply(e,n);function u(t){i(r,o,a,u,c,"next",t)}function c(t){i(r,o,a,u,c,"throw",t)}u(void 0)}))}}var c={props:{locationStr:{type:String}},name:"locationUi",data:function(){return{locationName:"北京市朝阳区",needGetNameFromBackend:!0}},methods:{getLocationShowName:function(t){return t.length>8?t.slice(0,8)+"...":t},getUserLocation:function(){var e=this;t.authorize({scope:"scope.userLocation",success:function(){t.getLocation({success:function(){var t=u(o.default.mark((function t(n){return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.location=n.latitude.toString()+","+n.longitude.toString(),e.getLocationName();case 2:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}(),fail:function(){var t=u(o.default.mark((function t(){return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getLocationName(),console.log("获取定位失败失败");case 2:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}()})},fail:function(){(0,a.getUserInfoFail)()}})},getLocationName:function(){var t=this;return u(o.default.mark((function e(){var n,a,r;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="/location",e.next=3,t.$http.get(n,{params:{location:t.locationStr}});case 3:a=e.sent,r=a.data,t.locationName=r.data.address_name;case 6:case"end":return e.stop()}}),e)})))()},chooseLocation:function(){var e=this;t.authorize({scope:"scope.userLocation",success:function(n){t.chooseLocation({success:function(t){console.log(t),t.name?(e.needGetNameFromBackend=!1,e.locationName=t.name):(e.needGetNameFromBackend=!0,e.locationName="."),e.$emit("chooseLocation",t)}})},fail:function(t){(0,a.getUserInfoFail)()}})}},watch:{locationStr:{immediate:!0,handler:function(t,e){""!==t&&this.needGetNameFromBackend&&this.getLocationName()}}}};e.default=c}).call(this,n("543d")["default"])},"237a":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var o={uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"609f"))}},a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.getLocationShowName(t.locationName));t.$mp.data=Object.assign({},{$root:{m0:n}})},r=[]},3421:function(t,e,n){"use strict";n.r(e);var o=n("2060"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=a.a},"3bcc":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=l(n("a34a")),a=l(n("944c")),r=l(n("ff02")),i=n("5d11"),u=n("4018"),c=n("db06"),s=n("f1ac");function l(t){return t&&t.__esModule?t:{default:t}}function f(t){return h(t)||p(t)||m(t)||d()}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(t,e){if(t){if("string"===typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}function p(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function h(t){if(Array.isArray(t))return v(t)}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function w(t,e,n,o,a,r,i){try{var u=t[r](i),c=u.value}catch(s){return void n(s)}u.done?e(c):Promise.resolve(c).then(o,a)}function b(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var r=t.apply(e,n);function i(t){w(r,o,a,i,u,"next",t)}function u(t){w(r,o,a,i,u,"throw",t)}i(void 0)}))}}var g=function(){Promise.all([n.e("common/vendor"),n.e("components/food-list/food-list")]).then(function(){return resolve(n("4c6e"))}.bind(null,n)).catch(n.oe)},x={mixins:[a.default],data:function(){return{upOption:{use:!0,auto:!1,page:{num:0,size:6,time:null},empty:{use:!0,icon:null,tip:"暂无相关数据",btnText:"",fixed:!1,top:"100rpx",zIndex:99}},downOption:{auto:!0,autoShowLoading:!0,offset:120,outOffsetRate:.5},customStyle:{borderStyle:"none",backgroundColor:"#F6F6F6",fontSize:"25rpx"},keyword:"",distanceValue:"默认",distanceText:"默认",sortValue:"score",sortText:"最高评分",distance:[{label:"默认",value:"默认"},{label:"< 500m",value:"0.5km"},{label:"< 1km",value:"1km"},{label:"< 3km",value:"3km"},{label:"< 5km",value:"5km"},{label:"< 10km",value:"10km"}],sort:[{label:"最高评分",value:"score"},{label:"最多评分",value:"vote_number"},{label:"最新发布",value:"add_time"}],distanceDict:{"默认":"默认","1km":"< 1km","3km":"< 3km","5km":"< 5km","10km":"< 10km","0.5km":"< 500m"},sortDict:{score:"最高评分",vote_number:"最多评分",add_time:"最新发布"},foods:[],nextUrl:"",haveNext:!1,location:"",showEmpty:!1,showNoAuth:!1}},components:{foodList:g,locationUi:r.default},methods:{init:function(t){this.mescroll=t},getFoodData:function(){var t=this;return b(o.default.mark((function e(){var n,a,r,i,u,c;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.showNoAuth=!1,n=t.sortValue,a=t.distanceValue,r=0,i=15,e.next=7,t.$http.get("/search/filter",{params:{location:t.location,sort:n,distance:a,from_point:r,size:i}});case 7:u=e.sent,c=u.data,t.foods=c.data.filter_res,0===t.foods.length?t.showEmptyUi():t.showResultUi(),t.nextUrl=c.data.next,t.haveNext=c.data.has_next;case 13:case"end":return e.stop()}}),e)})))()},firstSyncData:function(){var e=this;""===e.location?t.authorize({scope:"scope.userLocation",success:function(n){t.getLocation({success:function(){var t=b(o.default.mark((function t(n){return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.location=n.latitude.toString()+","+n.longitude.toString(),e.dumpUpStart();case 2:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}(),fail:function(){var t=b(o.default.mark((function t(){return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.showNoAuth=!0,(0,s.getLocationFail)(),e.mescroll.endErr();case 3:case"end":return t.stop()}}),t)})));function n(){return t.apply(this,arguments)}return n}()})},fail:function(){(0,s.getUserInfoFail)(),e.showNoAuth=!0,e.mescroll.endErr()}}):e.dumpUpStart()},getNext:function(t){var e=this;return b(o.default.mark((function t(){var n,a;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get(e.nextUrl,{baseURL:""});case 2:n=t.sent,a=n.data,e.foods=[].concat(f(e.foods),f(a.data.filter_res)),e.nextUrl=a.data.next,e.haveNext=a.data.has_next,a.data.filter_res.length,e.mescroll.endSuccess(100,e.haveNext);case 9:case"end":return t.stop()}}),t)})))()},changeLocation:function(t){var e=this;return b(o.default.mark((function n(){return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.location=t.latitude.toString()+","+t.longitude.toString(),e.mescroll.triggerDownScroll();case 2:case"end":return n.stop()}}),n)})))()},dumpUpStart:function(){var t=this;return b(o.default.mark((function e(){return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getFoodData();case 2:t.mescroll.endSuccess(100,t.haveNext);case 3:case"end":return e.stop()}}),e)})))()},changeSelectDistance:function(t){this.distanceText=this.distanceDict[t],this.dumpUpStart()},changeSelectSort:function(t){this.sortText=this.sortDict[t],this.dumpUpStart()},jumpFoodPush:function(){var e={location:this.location},n=encodeURIComponent(JSON.stringify(e));t.navigateTo({url:"/pages/food-push/food-push?item="+n,animationDuration:700,animationType:"slide-in-bottom"})},jumpToSearch:function(){var e={location:this.location},n=encodeURIComponent(JSON.stringify(e));t.navigateTo({url:"/pages/index/search?item="+n,animationDuration:700,animationType:"slide-in-bottom"})},showEmptyUi:function(){this.showEmpty=!0,this.mescroll.optUp.use=!1},showResultUi:function(){this.showEmpty=!1,this.mescroll.optUp.use=!0},wantEatHandle:function(t){var e=(0,c.checkLogin)();if(e){var n=this.foods[t],o={food:n.id};this.subPostData(o,i.wantEatUrl,t)}},subPostData:function(e,n,a){var r=this;return b(o.default.mark((function i(){var c,s,l,f;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return t.showLoading({title:"标记中",mask:!0}),c=n,s=(0,u.encrypt)(e),o.next=5,r.$http.post(c,s);case 5:l=o.sent,l.data,t.hideLoading(),f=r,t.showToast({title:"标记成功",success:function(){var t=f.foods[a];t.is_want_eated=2}});case 10:case"end":return o.stop()}}),i)})))()}}};e.default=x}).call(this,n("543d")["default"])},"658f":function(t,e,n){"use strict";n.r(e);var o=n("3bcc"),a=n.n(o);for(var r in o)"default"!==r&&function(t){n.d(e,t,(function(){return o[t]}))}(r);e["default"]=a.a},7804:function(t,e,n){"use strict";(function(t){n("1111");o(n("66fd"));var e=o(n("0cde"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},da2a:function(t,e,n){},e6b1:function(t,e,n){},eed2:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return o}));var o={uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,"ec29"))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"609f"))},uDropdown:function(){return n.e("uview-ui/components/u-dropdown/u-dropdown").then(n.bind(null,"a9104"))},uDropdownItem:function(){return n.e("uview-ui/components/u-dropdown-item/u-dropdown-item").then(n.bind(null,"5d67"))},mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/mescroll-uni/components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"0b23"))},foodList:function(){return Promise.all([n.e("common/vendor"),n.e("components/food-list/food-list")]).then(n.bind(null,"4c6e"))},uEmpty:function(){return n.e("uview-ui/components/u-empty/u-empty").then(n.bind(null,"70de"))},uImage:function(){return n.e("uview-ui/components/u-image/u-image").then(n.bind(null,"4381"))}},a=function(){var t=this,e=t.$createElement;t._self._c},r=[]},f86f:function(t,e,n){"use strict";var o=n("da2a"),a=n.n(o);a.a},ff02:function(t,e,n){"use strict";n.r(e);var o=n("237a"),a=n("3421");for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);n("f86f");var i,u=n("f0c5"),c=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"21b17cd4",null,!1,o["a"],i);e["default"]=c.exports}},[["7804","common/runtime","common/vendor"]]]);