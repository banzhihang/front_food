(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/list/list"],{

/***/ 55:
/*!************************************************************************************!*\
  !*** /Users/hahaha/Desktop/food/front_food/main.js?{"page":"pages%2Flist%2Flist"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _list = _interopRequireDefault(__webpack_require__(/*! ./pages/list/list.vue */ 56));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_list.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 56:
/*!*****************************************************************!*\
  !*** /Users/hahaha/Desktop/food/front_food/pages/list/list.vue ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_7d5e07c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=7d5e07c6&scoped=true& */ 57);
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ 59);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _list_vue_vue_type_style_index_0_id_7d5e07c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.vue?vue&type=style&index=0&id=7d5e07c6&lang=scss&scoped=true& */ 61);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_7d5e07c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_7d5e07c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7d5e07c6",
  null,
  false,
  _list_vue_vue_type_template_id_7d5e07c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/list/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 57:
/*!************************************************************************************************************!*\
  !*** /Users/hahaha/Desktop/food/front_food/pages/list/list.vue?vue&type=template&id=7d5e07c6&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_7d5e07c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=template&id=7d5e07c6&scoped=true& */ 58);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_7d5e07c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_7d5e07c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_7d5e07c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_7d5e07c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 58:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/hahaha/Desktop/food/front_food/pages/list/list.vue?vue&type=template&id=7d5e07c6&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    unicloudDb: function() {
      return Promise.all(/*! import() | node-modules/@dcloudio/uni-cli-shared/components/unicloud-db */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/@dcloudio/uni-cli-shared/components/unicloud-db")]).then(__webpack_require__.bind(null, /*! @dcloudio/uni-cli-shared/components/unicloud-db.vue */ 108))
    },
    uniList: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-list/components/uni-list/uni-list */ "uni_modules/uni-list/components/uni-list/uni-list").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-list/components/uni-list/uni-list.vue */ 122))
    },
    uniListItem: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-list/components/uni-list-item/uni-list-item */ "uni_modules/uni-list/components/uni-list-item/uni-list-item").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-list/components/uni-list-item/uni-list-item.vue */ 129))
    },
    uniLoadMore: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-load-more/components/uni-load-more/uni-load-more */ "uni_modules/uni-load-more/components/uni-load-more/uni-load-more").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue */ 136))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 59:
/*!******************************************************************************************!*\
  !*** /Users/hahaha/Desktop/food/front_food/pages/list/list.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=script&lang=js& */ 60);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 60:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/hahaha/Desktop/food/front_food/pages/list/list.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  components: {},
  data: function data() {
    return {
      // 数据表名
      collection: 'opendb-mall-goods',
      // 查询字段，多个字段用 , 分割
      field: 'goods_thumb,name,goods_tip,tag,goods_price,comment_count,month_sell_count,shop_name',
      formData: {
        waterfall: false, // 布局方向切换
        status: 'loading' // 加载状态
      },
      tipShow: false // 是否显示顶部提示框
    };
  },
  onLoad: function onLoad() {},
  methods: {
    /**
              * 切换商品列表布局方向
              */
    select: function select() {
      this.formData.waterfall = !this.formData.waterfall;
    },

    load: function load(data, ended) {
      if (ended) {
        this.formData.status = 'noMore';
      }
    } },

  /**
          * 下拉刷新回调函数
          */
  onPullDownRefresh: function onPullDownRefresh() {var _this = this;
    this.formData.status = 'more';
    this.$refs.udb.loadData({ clear: true }, function () {
      _this.tipShow = true;
      clearTimeout(_this.timer);
      _this.timer = setTimeout(function () {
        _this.tipShow = false;
      }, 1000);
      uni.stopPullDownRefresh();
    });
  },
  /**
      * 上拉加载回调函数
      */
  onReachBottom: function onReachBottom() {
    this.$refs.udb.loadMore();
  } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 61:
/*!***************************************************************************************************************************!*\
  !*** /Users/hahaha/Desktop/food/front_food/pages/list/list.vue?vue&type=style&index=0&id=7d5e07c6&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_id_7d5e07c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=style&index=0&id=7d5e07c6&lang=scss&scoped=true& */ 62);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_id_7d5e07c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_id_7d5e07c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_id_7d5e07c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_id_7d5e07c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_id_7d5e07c6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 62:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/hahaha/Desktop/food/front_food/pages/list/list.vue?vue&type=style&index=0&id=7d5e07c6&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[55,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vL1VzZXJzL2hhaGFoYS9EZXNrdG9wL2Zvb2QvZnJvbnRfZm9vZC9wYWdlcy9saXN0L2xpc3QudnVlPzkxMjciLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9oYWhhaGEvRGVza3RvcC9mb29kL2Zyb250X2Zvb2QvcGFnZXMvbGlzdC9saXN0LnZ1ZT9jZGFkIiwid2VicGFjazovLy8vVXNlcnMvaGFoYWhhL0Rlc2t0b3AvZm9vZC9mcm9udF9mb29kL3BhZ2VzL2xpc3QvbGlzdC52dWU/MzA5OSIsIndlYnBhY2s6Ly8vL1VzZXJzL2hhaGFoYS9EZXNrdG9wL2Zvb2QvZnJvbnRfZm9vZC9wYWdlcy9saXN0L2xpc3QudnVlPzM5NjAiLCJ1bmktYXBwOi8vL3BhZ2VzL2xpc3QvbGlzdC52dWUiLCJ3ZWJwYWNrOi8vLy9Vc2Vycy9oYWhhaGEvRGVza3RvcC9mb29kL2Zyb250X2Zvb2QvcGFnZXMvbGlzdC9saXN0LnZ1ZT9mMWEwIiwid2VicGFjazovLy8vVXNlcnMvaGFoYWhhL0Rlc2t0b3AvZm9vZC9mcm9udF9mb29kL3BhZ2VzL2xpc3QvbGlzdC52dWU/ZGYyMyJdLCJuYW1lcyI6WyJjcmVhdGVQYWdlIiwiUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztrREFBQTtBQUNBO0FBQ0EseUY7QUFDQUEsVUFBVSxDQUFDQyxhQUFELENBQVYsQzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE2SDtBQUM3SDtBQUN3RDtBQUNMO0FBQ3NDOzs7QUFHekY7QUFDZ047QUFDaE4sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLDJGQUFNO0FBQ1IsRUFBRSxvR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrRkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwrVEFFTjtBQUNQLEtBQUs7QUFDTDtBQUNBLGFBQWEsdVBBRU47QUFDUCxLQUFLO0FBQ0w7QUFDQSxhQUFhLHFSQUVOO0FBQ1AsS0FBSztBQUNMO0FBQ0EsYUFBYSxvU0FFTjtBQUNQO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaERBO0FBQUE7QUFBQTtBQUFBO0FBQWswQixDQUFnQixreUJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZ0V0MUI7QUFDQSxnQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBO0FBQ0EscUNBRkE7QUFHQTtBQUNBLGtHQUpBO0FBS0E7QUFDQSx3QkFEQSxFQUNBO0FBQ0EseUJBRkEsQ0FFQTtBQUZBLE9BTEE7QUFTQSxvQkFUQSxDQVNBO0FBVEE7QUFXQSxHQWRBO0FBZUEsUUFmQSxvQkFlQSxFQWZBO0FBZ0JBO0FBQ0E7OztBQUdBLFVBSkEsb0JBSUE7QUFDQTtBQUNBLEtBTkE7O0FBUUEsUUFSQSxnQkFRQSxJQVJBLEVBUUEsS0FSQSxFQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FaQSxFQWhCQTs7QUE4QkE7OztBQUdBLG1CQWpDQSwrQkFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLEVBRUEsSUFGQTtBQUdBO0FBQ0EsS0FQQTtBQVFBLEdBM0NBO0FBNENBOzs7QUFHQSxlQS9DQSwyQkErQ0E7QUFDQTtBQUNBLEdBakRBLEU7Ozs7Ozs7Ozs7Ozs7QUNoRUE7QUFBQTtBQUFBO0FBQUE7QUFBbWhELENBQWdCLG81Q0FBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQXZpRDtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL2xpc3QvbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9saXN0L2xpc3QudnVlJ1xuY3JlYXRlUGFnZShQYWdlKSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2Q1ZTA3YzYmc2NvcGVkPXRydWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ZDVlMDdjNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3ZDVlMDdjNlwiLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9saXN0L2xpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZDVlMDdjNiZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG50cnkge1xuICBjb21wb25lbnRzID0ge1xuICAgIHVuaWNsb3VkRGI6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGltcG9ydChcbiAgICAgICAgLyogd2VicGFja0NodW5rTmFtZTogXCJub2RlLW1vZHVsZXMvQGRjbG91ZGlvL3VuaS1jbGktc2hhcmVkL2NvbXBvbmVudHMvdW5pY2xvdWQtZGJcIiAqLyBcIkBkY2xvdWRpby91bmktY2xpLXNoYXJlZC9jb21wb25lbnRzL3VuaWNsb3VkLWRiLnZ1ZVwiXG4gICAgICApXG4gICAgfSxcbiAgICB1bmlMaXN0OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwidW5pX21vZHVsZXMvdW5pLWxpc3QvY29tcG9uZW50cy91bmktbGlzdC91bmktbGlzdFwiICovIFwiQC91bmlfbW9kdWxlcy91bmktbGlzdC9jb21wb25lbnRzL3VuaS1saXN0L3VuaS1saXN0LnZ1ZVwiXG4gICAgICApXG4gICAgfSxcbiAgICB1bmlMaXN0SXRlbTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInVuaV9tb2R1bGVzL3VuaS1saXN0L2NvbXBvbmVudHMvdW5pLWxpc3QtaXRlbS91bmktbGlzdC1pdGVtXCIgKi8gXCJAL3VuaV9tb2R1bGVzL3VuaS1saXN0L2NvbXBvbmVudHMvdW5pLWxpc3QtaXRlbS91bmktbGlzdC1pdGVtLnZ1ZVwiXG4gICAgICApXG4gICAgfSxcbiAgICB1bmlMb2FkTW9yZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gaW1wb3J0KFxuICAgICAgICAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInVuaV9tb2R1bGVzL3VuaS1sb2FkLW1vcmUvY29tcG9uZW50cy91bmktbG9hZC1tb3JlL3VuaS1sb2FkLW1vcmVcIiAqLyBcIkAvdW5pX21vZHVsZXMvdW5pLWxvYWQtbW9yZS9jb21wb25lbnRzL3VuaS1sb2FkLW1vcmUvdW5pLWxvYWQtbW9yZS52dWVcIlxuICAgICAgKVxuICAgIH1cbiAgfVxufSBjYXRjaCAoZSkge1xuICBpZiAoXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCJDYW5ub3QgZmluZCBtb2R1bGVcIikgIT09IC0xICYmXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCIudnVlXCIpICE9PSAtMVxuICApIHtcbiAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSlcbiAgICBjb25zb2xlLmVycm9yKFwiMS4g5o6S5p+l57uE5Lu25ZCN56ew5ou85YaZ5piv5ZCm5q2j56GuXCIpXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMi4g5o6S5p+l57uE5Lu25piv5ZCm56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM5paH5qGj77yaaHR0cHM6Ly91bmlhcHAuZGNsb3VkLm5ldC5jbi9jb2xsb2NhdGlvbi9wYWdlcz9pZD1lYXN5Y29tXCJcbiAgICApXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMy4g6Iul57uE5Lu25LiN56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM6ZyA5omL5Yqo5byV5YWl77yM5bm25ZyoIGNvbXBvbmVudHMg5Lit5rOo5YaM6K+l57uE5Lu2XCJcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgZVxuICB9XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxuXHQ8IS0tXG5cdOacrOmhtemdouaooeadv+aVmeeoi++8mmh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTI2NTFcblx0dW5pLWxpc3Qg5paH5qGj77yaaHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9wbHVnaW4/aWQ9MjRcblx0dW5pQ2xvdWQg5paH5qGj77yaaHR0cHM6Ly91bmlhcHAuZGNsb3VkLmlvL3VuaUNsb3VkL1JFQURNRVxuXHR1bmljbG91ZC1kYiDnu4Tku7bmlofmoaPvvJpodHRwczovL3VuaWFwcC5kY2xvdWQuaW8vdW5pQ2xvdWQvdW5pY2xvdWQtZGJcblx0REIgU2NoZW1hIOinhOiMg++8mmh0dHBzOi8vdW5pYXBwLmRjbG91ZC5uZXQuY24vdW5pQ2xvdWQvc2NoZW1hXG5cdCAtLT5cblx0PHZpZXcgY2xhc3M9XCJsaXN0XCI+XG5cdFx0PCEtLSDliLfmlrDpobXpnaLlkI7nmoTpobbpg6jmj5DnpLrmoYYgLS0+XG5cdFx0PCEtLSDlvZPliY3lvLnlh7rlhoXlrrnmsqHmnInlrp7pmYXpgLvovpEg77yM5Y+v5qC55o2u5b2T5YmN5Lia5Yqh5L+u5pS55by55Ye65o+Q56S6IC0tPlxuXHRcdDx2aWV3IGNsYXNzPVwidGlwc1wiIDpjbGFzcz1cInsgJ3RpcHMtYW5pJzogdGlwU2hvdyB9XCI+5Li65oKo5pu05paw5LqGMTDmnaHmnIDmlrDmlrDpl7vliqjmgIE8L3ZpZXc+XG5cdFx0PCEtLSDpobXpnaLliIbnsbvmoIfpopggLS0+XG5cdFx0PHVuaS1zZWN0aW9uIHRpdGxlPVwi5pyA54Ot5ZWG5ZOBXCIgdHlwZT1cImxpbmVcIj48YnV0dG9uIGNsYXNzPVwiYnV0dG9uLWJveFwiIEBjbGljaz1cInNlbGVjdFwiPuWIh+aNouinhuWbvjwvYnV0dG9uPjwvdW5pLXNlY3Rpb24+XG5cblx0XHQ8dW5pY2xvdWQtZGIgcmVmPVwidWRiXCIgdi1zbG90OmRlZmF1bHQ9XCJ7ZGF0YSwgbG9hZGluZywgZXJyb3IsIG9wdGlvbnN9XCIgOm9wdGlvbnM9XCJmb3JtRGF0YVwiIDpjb2xsZWN0aW9uPVwiY29sbGVjdGlvblwiIDpmaWVsZD1cImZpZWxkXCIgQGxvYWQ9XCJsb2FkXCI+XG5cdFx0XHQ8IS0tIOWfuuS6jiB1bmktbGlzdCDnmoTpobXpnaLluIPlsYAgLS0+XG5cdFx0XHQ8dW5pLWxpc3QgOmNsYXNzPVwieyAndW5pLWxpc3QtLXdhdGVyZmFsbCc6IG9wdGlvbnMud2F0ZXJmYWxsIH1cIj5cblx0XHRcdFx0PCEtLSDpgJrov4cgdW5pLWxpc3QtLXdhdGVyZmFsbCDnsbvlhrPlrprpobXpnaLluIPlsYDmlrnlkJEgLS0+XG5cdFx0XHRcdDwhLS0gdG8g5bGe5oCn5pC65bim5Y+C5pWw6Lez6L2s6K+m5oOF6aG16Z2i77yM5b2T5YmN5Y+q5Li65Y+C6ICDIC0tPlxuXHRcdFx0XHQ8dW5pLWxpc3QtaXRlbSA6Ym9yZGVyPVwiIW9wdGlvbnMud2F0ZXJmYWxsXCIgY2xhc3M9XCJ1bmktbGlzdC1pdGVtLS13YXRlcmZhbGxcIiB0aXRsZT1cIuiHquWumuS5ieWVhuWTgeWIl+ihqFwiIHYtZm9yPVwiaXRlbSBpbiBkYXRhXCJcblx0XHRcdFx0IDprZXk9XCJpdGVtLl9pZFwiIDp0bz1cIicvcGFnZXMvZGV0YWlsL2RldGFpbD9pZD0nK2l0ZW0uX2lkKycmdGl0bGU9JytpdGVtLm5hbWVcIj5cblx0XHRcdFx0XHQ8IS0tIOmAmui/h2hlYWRlcuaPkuanveWumuS5ieWIl+ihqOW3puS+p+WbvueJhyAtLT5cblx0XHRcdFx0XHQ8dGVtcGxhdGUgdi1zbG90OmhlYWRlcj5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLXRodW1iIHNob3AtcGljdHVyZVwiIDpjbGFzcz1cInsgJ3Nob3AtcGljdHVyZS1jb2x1bW4nOiBvcHRpb25zLndhdGVyZmFsbCB9XCI+XG5cdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5nb29kc190aHVtYlwiIG1vZGU9XCJhc3BlY3RGaWxsXCI+PC9pbWFnZT5cblx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdFx0XHRcdDx0ZW1wbGF0ZSB2LXNsb3Q6Ym9keT5cblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwic2hvcFwiPlxuXHRcdFx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS10aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktZWxsaXBzaXMtMlwiPnt7IGl0ZW0ubmFtZSB9fTwvdGV4dD5cblx0XHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdFx0PHZpZXc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInVuaS10YWcgaG90LXRhZ1wiPnt7IGl0ZW0uZ29vZHNfdGlwIH19PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgdi1mb3I9XCJ0YWcgaW4gaXRlbS50YWdcIiA6a2V5PVwidGFnXCIgY2xhc3M9XCJ1bmktdGFnXCI+e3sgdGFnIH19PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0XHQ8dmlldz5cblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInNob3AtcHJpY2VcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0PsKlPC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJzaG9wLXByaWNlLXRleHRcIj57eyBpdGVtLmdvb2RzX3ByaWNlIH19PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQ+LjAwPC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1ub3RlXCI+e3sgaXRlbS5jb21tZW50X2NvdW50IH195p2h6K+E6K66IOaciOmUgOmHjyB7eyBpdGVtLm1vbnRoX3NlbGxfY291bnQgfX08L3ZpZXc+XG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1bmktbm90ZSBlbGxpcHNpc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktZWxsaXBzaXMtMVwiPnt7IGl0ZW0uc2hvcF9uYW1lIH19PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktbGlua1wiPui/m+W6lyA+PC90ZXh0PlxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcdDwvdGVtcGxhdGU+XG5cdFx0XHRcdFx0PCEtLSDpgJrov4dib2R55o+S5qe95a6a5LmJ5ZWG5ZOB5biD5bGAIC0tPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L3VuaS1saXN0LWl0ZW0+XG5cdFx0XHQ8L3VuaS1saXN0PlxuXHRcdFx0PCEtLSDpgJrov4cgbG9hZE1vcmUg57uE5Lu25a6e546w5LiK5ouJ5Yqg6L295pWI5p6c77yM5aaC6ZyA6Ieq5a6a5LmJ5pi+56S65YaF5a6577yM5Y+v5Y+C6ICD77yaaHR0cHM6Ly9leHQuZGNsb3VkLm5ldC5jbi9wbHVnaW4/aWQ9MjkgLS0+XG5cdFx0XHQ8dW5pLWxvYWQtbW9yZSB2LWlmPVwibG9hZGluZyB8fCBvcHRpb25zLnN0YXR1cyA9PT0gJ25vTW9yZScgXCIgOnN0YXR1cz1cIm9wdGlvbnMuc3RhdHVzXCIgLz5cblx0XHQ8L3VuaWNsb3VkLWRiPlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcG9uZW50czoge30sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdC8vIOaVsOaNruihqOWQjVxuXHRcdFx0XHRjb2xsZWN0aW9uOiAnb3BlbmRiLW1hbGwtZ29vZHMnLFxuXHRcdFx0XHQvLyDmn6Xor6LlrZfmrrXvvIzlpJrkuKrlrZfmrrXnlKggLCDliIblibJcblx0XHRcdFx0ZmllbGQ6ICdnb29kc190aHVtYixuYW1lLGdvb2RzX3RpcCx0YWcsZ29vZHNfcHJpY2UsY29tbWVudF9jb3VudCxtb250aF9zZWxsX2NvdW50LHNob3BfbmFtZScsXG5cdFx0XHRcdGZvcm1EYXRhOiB7XG5cdFx0XHRcdFx0d2F0ZXJmYWxsOiBmYWxzZSwgLy8g5biD5bGA5pa55ZCR5YiH5o2iXG5cdFx0XHRcdFx0c3RhdHVzOiAnbG9hZGluZycsIC8vIOWKoOi9veeKtuaAgVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0aXBTaG93OiBmYWxzZSAvLyDmmK/lkKbmmL7npLrpobbpg6jmj5DnpLrmoYZcblx0XHRcdH07XG5cdFx0fSxcblx0XHRvbkxvYWQoKSB7fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHQvKipcblx0XHRcdCAqIOWIh+aNouWVhuWTgeWIl+ihqOW4g+WxgOaWueWQkVxuXHRcdFx0ICovXG5cdFx0XHRzZWxlY3QoKSB7XG5cdFx0XHRcdHRoaXMuZm9ybURhdGEud2F0ZXJmYWxsID0gIXRoaXMuZm9ybURhdGEud2F0ZXJmYWxsO1xuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0bG9hZChkYXRhLGVuZGVkKXtcblx0XHRcdFx0aWYoZW5kZWQpe1xuXHRcdFx0XHRcdHRoaXMuZm9ybURhdGEuc3RhdHVzID0gJ25vTW9yZSdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0LyoqXG5cdFx0ICog5LiL5ouJ5Yi35paw5Zue6LCD5Ye95pWwXG5cdFx0ICovXG5cdFx0b25QdWxsRG93blJlZnJlc2goKSB7XG5cdFx0XHR0aGlzLmZvcm1EYXRhLnN0YXR1cyA9ICdtb3JlJ1xuXHRcdFx0dGhpcy4kcmVmcy51ZGIubG9hZERhdGEoe2NsZWFyOnRydWV9LCgpPT57XG5cdFx0XHRcdHRoaXMudGlwU2hvdyA9IHRydWVcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXG5cdFx0XHRcdHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRcdFx0dGhpcy50aXBTaG93ICA9IGZhbHNlXG5cdFx0XHRcdH0sMTAwMClcblx0XHRcdFx0dW5pLnN0b3BQdWxsRG93blJlZnJlc2goKVxuXHRcdFx0fSlcblx0XHR9LFxuXHRcdC8qKlxuXHRcdCAqIOS4iuaLieWKoOi9veWbnuiwg+WHveaVsFxuXHRcdCAqL1xuXHRcdG9uUmVhY2hCb3R0b20oKSB7XG5cdFx0XHR0aGlzLiRyZWZzLnVkYi5sb2FkTW9yZSgpXG5cdFx0fSxcblx0fTtcbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cdEBpbXBvcnQgJy4uLy4uL2NvbW1vbi91bmktdWkuc2Nzcyc7XG5cblx0cGFnZSB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2VmZWZmNDtcblx0XHRtaW4taGVpZ2h0OiAxMDAlO1xuXHRcdGhlaWdodDogYXV0bztcblx0fVxuXG5cdC50aXBzIHtcblx0XHRjb2xvcjogIzY3YzIzYTtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0bGluZS1oZWlnaHQ6IDQwcHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmMGY5ZWI7XG5cdFx0aGVpZ2h0OiAwO1xuXHRcdG9wYWNpdHk6IDA7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcblx0fVxuXG5cdC50aXBzLWFuaSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHRcdGhlaWdodDogNDBweDtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cblx0LnNob3Age1xuXHRcdGZsZXg6IDE7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0fVxuXG5cdC5zaG9wLXBpY3R1cmUge1xuXHRcdHdpZHRoOiAxMTBweDtcblx0XHRoZWlnaHQ6IDExMHB4O1xuXHR9XG5cblx0LnNob3AtcGljdHVyZS1jb2x1bW4ge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTcwcHg7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0fVxuXG5cdC5zaG9wLXByaWNlIHtcblx0XHRtYXJnaW4tdG9wOiA1cHg7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdGNvbG9yOiAjZmY1YTVmO1xuXHR9XG5cblx0LnNob3AtcHJpY2UtdGV4dCB7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHR9XG5cblx0LmhvdC10YWcge1xuXHRcdGJhY2tncm91bmQ6ICNmZjVhNWY7XG5cdFx0Ym9yZGVyOiBub25lO1xuXHRcdGNvbG9yOiAjZmZmO1xuXHR9XG5cblx0LmJ1dHRvbi1ib3gge1xuXHRcdGhlaWdodDogMzBweDtcblx0XHRsaW5lLWhlaWdodDogMzBweDtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0YmFja2dyb3VuZDogIzAwN0FGRjtcblx0XHRjb2xvcjogI2ZmZjtcblx0fVxuXG5cdC51bmktbGluayB7XG5cdFx0ZmxleC1zaHJpbms6IDA7XG5cdH1cblxuXHQuZWxsaXBzaXMge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0fVxuXG5cdC51bmktZWxsaXBzaXMtMSB7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHR9XG5cblx0LnVuaS1lbGxpcHNpcy0yIHtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMjtcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuXHR9XG5cblxuXHQvLyDpu5jorqTliqDlhaUgc2NvcGVkIO+8jOaJgOS7peWklumdouWKoOS4gOWxguaPkOWNh+adg+mHjVxuXHQubGlzdCB7XG5cdFx0LnVuaS1saXN0LS13YXRlcmZhbGwge1xuXG5cdFx0XHQvKiAjaWZuZGVmIEg1IHx8IEFQUC1WVUUgKi9cblx0XHRcdC8vIOWwj+eoi+W6jyDnvJbor5HlkI7kvJrlpJrkuIDlsYLmoIfnrb7vvIzogIzlhbbku5blubPlj7DmsqHmnInvvIzmiYDku6XpnIDopoHnibnmrorlpITnkIbkuIDkuItcblx0XHRcdC9kZWVwLyAudW5pLWxpc3Qge1xuXHRcdFx0XHQvKiAjZW5kaWYgKi9cblx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRcdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdFx0XHRwYWRkaW5nOiA1cHg7XG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cblx0XHRcdFx0LyogI2lmZGVmIEg1IHx8IEFQUC1WVUUgKi9cblx0XHRcdFx0Ly8gaDUg5ZKMIGFwcC12dWUg5L2/55So5rex5bqm6YCJ5oup5Zmo77yM5Zug5Li66buY6K6k5L2/55So5LqGIHNjb3BlZCDvvIzmiYDku6XmoLflvI/kvJrml6Dms5Xnqb/pgI9cblx0XHRcdFx0L2RlZXAvXG5cdFx0XHRcdC8qICNlbmRpZiAqL1xuXHRcdFx0XHQudW5pLWxpc3QtaXRlbS0td2F0ZXJmYWxsIHtcblx0XHRcdFx0XHR3aWR0aDogNTAlO1xuXHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cblx0XHRcdFx0XHQudW5pLWxpc3QtaXRlbV9fY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDVweDtcblx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0LyogI2lmbmRlZiBINSB8fCBBUFAtVlVFICovXG5cdFx0XHR9XG5cblx0XHRcdC8qICNlbmRpZiAqL1xuXHRcdH1cblx0fVxuPC9zdHlsZT5cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2xpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2Q1ZTA3YzYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTgtb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS00IS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdkNWUwN2M2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2MzE1OTAyMzIzNzBcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==