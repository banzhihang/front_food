(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/food-push/food-push"],{"0d69":function(e,t,n){"use strict";n.r(t);var o=n("3093"),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=r.a},"16eb":function(e,t,n){"use strict";var o=n("a55a"),r=n.n(o);r.a},3093:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(n("a34a")),r=l(n("8164")),a=n("5d11"),u=n("541f"),i=n("4018"),c=n("db06"),s=n("f1ac");function l(e){return e&&e.__esModule?e:{default:e}}function f(e,t,n,o,r,a,u){try{var i=e[a](u),c=i.value}catch(s){return void n(s)}i.done?t(c):Promise.resolve(c).then(o,r)}function d(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function u(e){f(a,o,r,u,i,"next",e)}function i(e){f(a,o,r,u,i,"throw",e)}u(void 0)}))}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m={options:{styleIsolation:"shared"},data:function(){return{customStyle1:p({borderColor:"#f3eff6",height:"120rpx",width:"120rpx"},"height","50rpx"),customStyle2:p({borderColor:"#3363D1",backgroundColor:"#3363D1",height:"120rpx",width:"120rpx"},"height","50rpx"),navCustomStyle:{color:"#000000",fontSize:"32rpx"},restaurantNameCustomStyle:{color:"#8C8C8C",fontSize:"28rpx",width:"100%"},titleCustomStyle:{fontSize:"35rpx"},descCustomStyle:{fontSize:"32rpx"},locationName:"",imageList:[],foodName:"",desc:"",restaurantName:"",location:"",showError:!1,errInfo:[],errDict:{name:"美食名称",desc:"美食描述",restaurant_name:"餐厅名称",address:"美食地点",image:"美食照片"},action:"https://up-z2.qiniup.com",formData:{token:""}}},methods:{getShowLocationName:function(e){return e.length>15?e.substr(0,15)+"...":e},chooseLocation:function(){var t=this;e.authorize({scope:"scope.userLocation",success:function(n){e.chooseLocation({success:function(e){t.location=e.latitude.toString()+","+e.longitude.toString(),t.locationName=e.address},fail:function(){(0,s.getLocationFail)()}})},fail:function(e){(0,s.getUserInfoFail)()}})},getLocationNameFromIndex:function(){var e=this;return d(o.default.mark((function t(){var n,r,a;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="/location",t.next=3,e.$http.get(n,{params:{location:e.location}});case 3:r=t.sent,a=r.data,e.locationName=a.data.address_name;case 6:case"end":return t.stop()}}),t)})))()},closeError:function(){this.errInfo=[]},submitFood:function(){var e=this;return d(o.default.mark((function t(){var n,u,i,s,l,f;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=(0,c.checkLogin)(),n){t.next=3;break}return t.abrupt("return");case 3:u=e.$refs.uUpload.lists.filter((function(e){return 100==e.progress})),u.forEach((function(t){var n=a.photoDomain+t.response.key;e.imageList.push(n)})),i={name:e.foodName.replace(/\s+/g,""),desc:e.desc.replace(/\s+/g,""),address:e.locationName,restaurant_name:e.restaurantName.replace(/\s+/g,""),location:e.location,image:e.imageList},s={name:{type:"string",max:10,min:2,required:!0,message:"美食名称最少两个字"},desc:{type:"string",max:200,min:4,required:!0,message:"美食描述最少四个字"},address:{type:"string",max:100,min:4,required:!0,message:"美食地点最少四个字"},restaurant_name:{type:"string",max:20,min:2,required:!0,message:"餐厅名称最少2个字"},image:{type:"array",max:20,min:4,required:!0,message:"需要至少四张照片"}},l=new r.default(s),f=e,l.validate(i,(function(t,n){if(t){for(var o in t){var r={name:f.errDict[t[o].field],value:t[o].message};f.errInfo.push(r)}return f.showError=!0,void(f.imageList=[])}e.subPostData(i)}));case 10:case"end":return t.stop()}}),t)})))()},subPostData:function(t){var n=this;return d(o.default.mark((function r(){var u,c,s;return o.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return e.showLoading({title:"发布中",mask:!0}),u=a.foodPushUrl,c=(0,i.encrypt)(t),o.next=5,n.$http.post(u,c);case 5:s=o.sent,s.data,e.hideLoading(),e.showToast({title:"已提交审核",success:function(){setTimeout((function(){e.navigateBack({})}),1500)}});case 9:case"end":return o.stop()}}),r)})))()},chooseReady:function(e){var t=this;return d(o.default.mark((function e(){var n;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,u.getUploadToken)();case 2:n=e.sent,console.log(n,"token"),t.formData.token=n,setTimeout((function(){t.$refs.uUpload.upload()}),500);case 6:case"end":return e.stop()}}),e)})))()}},onLoad:function(e){var t=JSON.parse(decodeURIComponent(e.item));this.location=t.location,this.getLocationNameFromIndex(),(0,c.checkLogin)()}};t.default=m}).call(this,n("543d")["default"])},"576d":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return o}));var o={uToast:function(){return n.e("uview-ui/components/u-toast/u-toast").then(n.bind(null,"3126"))},uNavbar:function(){return n.e("uview-ui/components/u-navbar/u-navbar").then(n.bind(null,"ec29"))},uButton:function(){return n.e("uview-ui/components/u-button/u-button").then(n.bind(null,"24c4"))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("uview-ui/components/u-input/u-input")]).then(n.bind(null,"b7ef"))},uLine:function(){return n.e("uview-ui/components/u-line/u-line").then(n.bind(null,"1d42"))},uUpload:function(){return n.e("uview-ui/components/u-upload/u-upload").then(n.bind(null,"cbe6"))},uIcon:function(){return n.e("uview-ui/components/u-icon/u-icon").then(n.bind(null,"609f"))},uPopup:function(){return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null,"55b4"))},uAlertTips:function(){return n.e("uview-ui/components/u-alert-tips/u-alert-tips").then(n.bind(null,"e03d"))}},r=function(){var e=this,t=e.$createElement,n=(e._self._c,e.getShowLocationName(e.locationName));e.$mp.data=Object.assign({},{$root:{m0:n}})},a=[]},"7a6c":function(e,t,n){"use strict";n.r(t);var o=n("576d"),r=n("0d69");for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n("16eb");var u,i=n("f0c5"),c=Object(i["a"])(r["default"],o["b"],o["c"],!1,null,"480572db",null,!1,o["a"],u);t["default"]=c.exports},"7f6e":function(e,t,n){"use strict";(function(e){n("1111");o(n("66fd"));var t=o(n("7a6c"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},a55a:function(e,t,n){}},[["7f6e","common/runtime","common/vendor"]]]);