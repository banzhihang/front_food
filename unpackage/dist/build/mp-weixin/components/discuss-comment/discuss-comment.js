(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/discuss-comment/discuss-comment"],{"1c06":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(e("a34a")),o=e("5d11"),a=e("4018"),i=e("db06");function u(t){return t&&t.__esModule?t:{default:t}}function s(t){return p(t)||d(t)||l(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,n){if(t){if("string"===typeof t)return m(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?m(t,n):void 0}}function d(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function p(t){if(Array.isArray(t))return m(t)}function m(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function f(t,n,e,r,o,a,i){try{var u=t[a](i),s=u.value}catch(c){return void e(c)}u.done?n(s):Promise.resolve(s).then(r,o)}function v(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){f(a,r,o,i,u,"next",t)}function u(t){f(a,r,o,i,u,"throw",t)}i(void 0)}))}}var h=function(){e.e("components/discuss-reply/discuss-reply").then(function(){return resolve(e("d168"))}.bind(null,e)).catch(e.oe)},b={props:["link"],name:"discuss-comment",components:{reply:h},data:function(){return{loadText:{loadmore:"",loading:"",nomore:""},status:"loading",isShowLoad:!0,showEmpty:!1,customStyle:{borderStyle:"none",backgroundColor:"#F6F6F6",fontSize:"25rpx",padding:"30rpx 40rpx 30rpx 40rpx"},hoverStyle:{backgroundColor:"#1a56b4",color:"1a56b4"},commentList:[],nextUrl:null}},methods:{replyChild:function(t){this.$emit("reply",t)},replyThis:function(t){var n={commentId:t.commentId,index:t.index},e={kind:"回复",targetUserName:t.targetUserName,targetUserId:t.targetUser,extra:n};this.$emit("reply",e)},approvalHandle:function(t){var n=t.kind,e=t.revertIndex,r=t.index,o=this.commentList[r].revert[e];o.approval_number;"add"==n?(o.is_approval=!0,o.approval_number++):(o.is_approval=!1,o.approval_number--)},jumpReplyInfo:function(n){var e={id:n.id,user:n.user,user_nick_name:n.user_nick_name,user_head_portrait:n.user_head_portrait,content:n.content,is_approval:n.is_approval,revert_number:n.revert_number,approval_number:n.approval_number,add_time:n.add_time,is_author:n.is_author,all_revert_link:n.all_revert_link,approval_link:n.approval_link};t.navigateTo({url:"../../pages/discuss-info/disscuss-reply-page/disscuss-reply-page?data="+encodeURIComponent(JSON.stringify(e)),animationDuration:700})},getAllComment:function(t){var n=this;return v(r.default.mark((function e(){var o,a;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$http.get(t,{baseURL:""});case 2:o=e.sent,a=o.data,"3"==a.code?n.showEmpty=!0:(n.commentList=a.data.results,n.nextUrl=a.data.next),null!==n.nextUrl?n.isShowLoad=!1:(n.showEmpty?n.isShowLoad=!1:n.isShowLoad=!0,n.status="nomore");case 6:case"end":return e.stop()}}),e)})))()},getNext:function(){var t=this;return v(r.default.mark((function n(){var e,o;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.status="loading",t.isShowLoad=!0,n.next=4,t.$http.get(t.nextUrl,{baseURL:""});case 4:e=n.sent,o=e.data,t.commentList=[].concat(s(t.commentList),s(o.data.results)),t.nextUrl=o.data.next,null!==t.nextUrl?t.isShowLoad=!1:(t.isShowLoad=!0,t.status="nomore");case 9:case"end":return n.stop()}}),n)})))()},pullUp:function(){null!==this.nextUrl&&this.getNext()},insertComment:function(t){null===this.nextUrl&&(this.showEmpty=!1,this.commentList.push(t),this.isShowLoad=!0)},insertReply:function(t,n){var e=n.index,r=this.commentList[e];r.revert_number++,r.revert.length<2&&r.revert.push(t)},approvalComment:function(n){var e=this;return v(r.default.mark((function u(){var s,c,l,d,p,m,f;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(s=(0,i.checkLogin)(),s){r.next=3;break}return r.abrupt("return");case 3:return t.vibrateShort({}),c=e.commentList[n],l={comment:c.id},d=o.approvalUrl,p=(0,a.encrypt)(l),r.next=10,e.$http.post(d,p);case 10:m=r.sent,f=m.data,"0"!==f.code?t.showToast({title:"操作失败",icon:"error"}):e.alterApprovalStatus(n);case 13:case"end":return r.stop()}}),u)})))()},alterApprovalStatus:function(t){var n=this.commentList[t],e=n.is_approval;this.commentList[t].is_approval=!e,e?this.commentList[t].approval_number--:this.commentList[t].approval_number++}},created:function(){this.getAllComment(this.link)}};n.default=b}).call(this,e("543d")["default"])},2683:function(t,n,e){},"2a4a":function(t,n,e){"use strict";e.r(n);var r=e("1c06"),o=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=o.a},"2ce3":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}));var r={uniIcons:function(){return Promise.all([e.e("common/vendor"),e.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(e.bind(null,"17c2"))},uIcon:function(){return e.e("uview-ui/components/u-icon/u-icon").then(e.bind(null,"609f"))},discussReply:function(){return e.e("components/discuss-reply/discuss-reply").then(e.bind(null,"d168"))},uButton:function(){return e.e("uview-ui/components/u-button/u-button").then(e.bind(null,"24c4"))},uLoadmore:function(){return e.e("uview-ui/components/u-loadmore/u-loadmore").then(e.bind(null,"a746"))},uEmpty:function(){return e.e("uview-ui/components/u-empty/u-empty").then(e.bind(null,"70de"))}},o=function(){var t=this,n=t.$createElement;t._self._c},a=[]},"4b27":function(t,n,e){"use strict";e.r(n);var r=e("2ce3"),o=e("2a4a");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("cdff");var i,u=e("f0c5"),s=Object(u["a"])(o["default"],r["b"],r["c"],!1,null,"5b28e629",null,!1,r["a"],i);n["default"]=s.exports},cdff:function(t,n,e){"use strict";var r=e("2683"),o=e.n(r);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/discuss-comment/discuss-comment-create-component',
    {
        'components/discuss-comment/discuss-comment-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4b27"))
        })
    },
    [['components/discuss-comment/discuss-comment-create-component']]
]);