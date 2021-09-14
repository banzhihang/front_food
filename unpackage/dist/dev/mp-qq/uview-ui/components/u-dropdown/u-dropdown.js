(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uview-ui/components/u-dropdown/u-dropdown"],{

/***/ 442:
/*!*******************************************************************************************!*\
  !*** /Users/hahaha/Desktop/food/front_food/uview-ui/components/u-dropdown/u-dropdown.vue ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./u-dropdown.vue?vue&type=template&id=0340bb60&scoped=true& */ 443);
/* harmony import */ var _u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./u-dropdown.vue?vue&type=script&lang=js& */ 445);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./u-dropdown.vue?vue&type=style&index=0&id=0340bb60&scoped=true&lang=scss& */ 447);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0340bb60",
  null,
  false,
  _u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uview-ui/components/u-dropdown/u-dropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 443:
/*!**************************************************************************************************************************************!*\
  !*** /Users/hahaha/Desktop/food/front_food/uview-ui/components/u-dropdown/u-dropdown.vue?vue&type=template&id=0340bb60&scoped=true& ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-dropdown.vue?vue&type=template&id=0340bb60&scoped=true& */ 444);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_template_id_0340bb60_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 444:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/hahaha/Desktop/food/front_food/uview-ui/components/u-dropdown/u-dropdown.vue?vue&type=template&id=0340bb60&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    uIcon: function() {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-icon/u-icon */ "uview-ui/components/u-icon/u-icon").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-icon/u-icon.vue */ 143))
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
  var g0 = _vm.$u.addUnit(_vm.height)
  var g1 = _vm.$u.addUnit(_vm.titleSize)
  var g2 = _vm.$u.addUnit(_vm.menuIconSize)

  var s0 = _vm.__get_style([
    _vm.contentStyle,
    {
      transition: "opacity " + _vm.duration / 1000 + "s linear",
      top: _vm.$u.addUnit(_vm.height),
      height: _vm.contentHeight + "px"
    }
  ])

  var s1 = _vm.__get_style([_vm.popupStyle])

  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        g2: g2,
        s0: s0,
        s1: s1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 445:
/*!********************************************************************************************************************!*\
  !*** /Users/hahaha/Desktop/food/front_food/uview-ui/components/u-dropdown/u-dropdown.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-dropdown.vue?vue&type=script&lang=js& */ 446);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 446:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/hahaha/Desktop/food/front_food/uview-ui/components/u-dropdown/u-dropdown.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
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

/**
 * dropdown 下拉菜单
 * @description 该组件一般用于向下展开菜单，同时可切换多个选项卡的场景
 * @tutorial http://uviewui.com/components/dropdown.html
 * @property {String} active-color 标题和选项卡选中的颜色（默认#2979ff）
 * @property {String} inactive-color 标题和选项卡未选中的颜色（默认#606266）
 * @property {Boolean} close-on-click-mask 点击遮罩是否关闭菜单（默认true）
 * @property {Boolean} close-on-click-self 点击当前激活项标题是否关闭菜单（默认true）
 * @property {String | Number} duration 选项卡展开和收起的过渡时间，单位ms（默认300）
 * @property {String | Number} height 标题菜单的高度，单位任意（默认80）
 * @property {String | Number} border-radius 菜单展开内容下方的圆角值，单位任意（默认0）
 * @property {Boolean} border-bottom 标题菜单是否显示下边框（默认false）
 * @property {String | Number} title-size 标题的字体大小，单位任意，数值默认为rpx单位（默认28）
 * @event {Function} open 下拉菜单被打开时触发
 * @event {Function} close 下拉菜单被关闭时触发
 * @example <u-dropdown></u-dropdown>
 */var _default =
{
  name: 'u-dropdown',
  props: {
    // 菜单标题和选项的激活态颜色
    activeColor: {
      type: String,
      default: '#2979ff' },

    // 菜单标题和选项的未激活态颜色
    inactiveColor: {
      type: String,
      default: '#606266' },

    // 点击遮罩是否关闭菜单
    closeOnClickMask: {
      type: Boolean,
      default: true },

    // 点击当前激活项标题是否关闭菜单
    closeOnClickSelf: {
      type: Boolean,
      default: true },

    // 过渡时间
    duration: {
      type: [Number, String],
      default: 300 },

    // 标题菜单的高度，单位任意，数值默认为rpx单位
    height: {
      type: [Number, String],
      default: 80 },

    // 是否显示下边框
    borderBottom: {
      type: Boolean,
      default: false },

    // 标题的字体大小
    titleSize: {
      type: [Number, String],
      default: 28 },

    // 下拉出来的内容部分的圆角值
    borderRadius: {
      type: [Number, String],
      default: 0 },

    // 菜单右侧的icon图标
    menuIcon: {
      type: String,
      default: 'arrow-down' },

    // 菜单右侧图标的大小
    menuIconSize: {
      type: [Number, String],
      default: 26 } },


  data: function data() {
    return {
      showDropdown: true, // 是否打开下来菜单,
      menuList: [], // 显示的菜单
      active: false, // 下拉菜单的状态
      // 当前是第几个菜单处于激活状态，小程序中此处不能写成false或者""，否则后续将current赋值为0，
      // 无能的TX没有使用===而是使用==判断，导致程序认为前后二者没有变化，从而不会触发视图更新
      current: 99999,
      // 外层内容的样式，初始时处于底层，且透明
      contentStyle: {
        zIndex: -1,
        opacity: 0 },

      // 让某个菜单保持高亮的状态
      highlightIndex: 99999,
      contentHeight: 0 };

  },
  computed: {
    // 下拉出来部分的样式
    popupStyle: function popupStyle() {
      var style = {};
      // 进行Y轴位移，展开状态时，恢复原位。收齐状态时，往上位移100%，进行隐藏
      style.transform = "translateY(".concat(this.active ? 0 : '-100%', ")");
      style['transition-duration'] = this.duration / 1000 + 's';
      style.borderRadius = "0 0 ".concat(this.$u.addUnit(this.borderRadius), " ").concat(this.$u.addUnit(this.borderRadius));
      return style;
    } },

  created: function created() {
    // 引用所有子组件(u-dropdown-item)的this，不能在data中声明变量，否则在微信小程序会造成循环引用而报错
    this.children = [];
  },
  mounted: function mounted() {
    this.getContentHeight();
  },
  methods: {
    init: function init() {
      // 当某个子组件内容变化时，触发父组件的init，父组件再让每一个子组件重新初始化一遍
      // 以保证数据的正确性
      this.menuList = [];
      this.children.map(function (child) {
        child.init();
      });
    },
    // 点击菜单
    menuClick: function menuClick(index) {var _this = this;
      // 判断是否被禁用
      if (this.menuList[index].disabled) return;
      // 如果点击时的索引和当前激活项索引相同，意味着点击了激活项，需要收起下拉菜单
      if (index === this.current && this.closeOnClickSelf) {
        this.close();
        // 等动画结束后，再移除下拉菜单中的内容，否则直接移除，也就没有下拉菜单收起的效果了
        setTimeout(function () {
          _this.children[index].active = false;
        }, this.duration);
        return;
      }
      this.open(index);
    },
    // 打开下拉菜单
    open: function open(index) {
      // 重置高亮索引，否则会造成多个菜单同时高亮
      // this.highlightIndex = 9999;
      // 展开时，设置下拉内容的样式
      this.contentStyle = {
        zIndex: 11 };

      // 标记展开状态以及当前展开项的索引
      this.active = true;
      this.current = index;
      // 历遍所有的子元素，将索引匹配的项标记为激活状态，因为子元素是通过v-if控制切换的
      // 之所以不是因display: none，是因为nvue没有display这个属性
      this.children.map(function (val, idx) {
        val.active = index == idx ? true : false;
      });
      this.$emit('open', this.current);
    },
    // 设置下拉菜单处于收起状态
    close: function close() {
      this.$emit('close', this.current);
      // 设置为收起状态，同时current归位，设置为空字符串
      this.active = false;
      this.current = 99999;
      // 下拉内容的样式进行调整，不透明度设置为0
      this.contentStyle = {
        zIndex: -1,
        opacity: 0 };

    },
    // 点击遮罩
    maskClick: function maskClick() {
      // 如果不允许点击遮罩，直接返回
      if (!this.closeOnClickMask) return;
      this.close();
    },
    // 外部手动设置某个菜单高亮
    highlight: function highlight() {var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      this.highlightIndex = index !== undefined ? index : 99999;
    },
    // 获取下拉菜单内容的高度
    getContentHeight: function getContentHeight() {var _this2 = this;
      // 这里的原理为，因为dropdown组件是相对定位的，它的下拉出来的内容，必须给定一个高度
      // 才能让遮罩占满菜单一下，直到屏幕底部的高度
      // this.$u.sys()为uView封装的获取设备信息的方法
      var windowHeight = this.$u.sys().windowHeight;
      this.$uGetRect('.u-dropdown__menu').then(function (res) {
        // 这里获取的是dropdown的尺寸，在H5上，uniapp获取尺寸是有bug的(以前提出修复过，后来又出现了此bug，目前hx2.8.11版本)
        // H5端bug表现为元素尺寸的top值为导航栏底部到到元素的上边沿的距离，但是元素的bottom值确是导航栏顶部到元素底部的距离
        // 二者是互相矛盾的，本质原因是H5端导航栏非原生，uni的开发者大意造成
        // 这里取菜单栏的botton值合理的，不能用res.top，否则页面会造成滚动
        _this2.contentHeight = windowHeight - res.bottom;
      });
    } } };exports.default = _default;

/***/ }),

/***/ 447:
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/hahaha/Desktop/food/front_food/uview-ui/components/u-dropdown/u-dropdown.vue?vue&type=style&index=0&id=0340bb60&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./u-dropdown.vue?vue&type=style&index=0&id=0340bb60&scoped=true&lang=scss& */ 448);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_u_dropdown_vue_vue_type_style_index_0_id_0340bb60_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 448:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/hahaha/Desktop/food/front_food/uview-ui/components/u-dropdown/u-dropdown.vue?vue&type=style&index=0&id=0340bb60&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vL1VzZXJzL2hhaGFoYS9EZXNrdG9wL2Zvb2QvZnJvbnRfZm9vZC91dmlldy11aS9jb21wb25lbnRzL3UtZHJvcGRvd24vdS1kcm9wZG93bi52dWU/ZGU3ZSIsIndlYnBhY2s6Ly8vL1VzZXJzL2hhaGFoYS9EZXNrdG9wL2Zvb2QvZnJvbnRfZm9vZC91dmlldy11aS9jb21wb25lbnRzL3UtZHJvcGRvd24vdS1kcm9wZG93bi52dWU/NjcxYyIsIndlYnBhY2s6Ly8vL1VzZXJzL2hhaGFoYS9EZXNrdG9wL2Zvb2QvZnJvbnRfZm9vZC91dmlldy11aS9jb21wb25lbnRzL3UtZHJvcGRvd24vdS1kcm9wZG93bi52dWU/ODUwYiIsIndlYnBhY2s6Ly8vL1VzZXJzL2hhaGFoYS9EZXNrdG9wL2Zvb2QvZnJvbnRfZm9vZC91dmlldy11aS9jb21wb25lbnRzL3UtZHJvcGRvd24vdS1kcm9wZG93bi52dWU/ZGU0YiIsInVuaS1hcHA6Ly8vdXZpZXctdWkvY29tcG9uZW50cy91LWRyb3Bkb3duL3UtZHJvcGRvd24udnVlIiwid2VicGFjazovLy8vVXNlcnMvaGFoYWhhL0Rlc2t0b3AvZm9vZC9mcm9udF9mb29kL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1kcm9wZG93bi91LWRyb3Bkb3duLnZ1ZT9iZDVlIiwid2VicGFjazovLy8vVXNlcnMvaGFoYWhhL0Rlc2t0b3AvZm9vZC9mcm9udF9mb29kL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1kcm9wZG93bi91LWRyb3Bkb3duLnZ1ZT84ZmZmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUk7QUFDbkk7QUFDOEQ7QUFDTDtBQUNzQzs7O0FBRy9GO0FBQ21OO0FBQ25OLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdU1BRU47QUFDUDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQUE7QUFBQTtBQUFBO0FBQXUxQixDQUFnQix3eUJBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNvQzMyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQSxvQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsd0JBRkEsRUFGQTs7QUFNQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQVBBOztBQVdBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG1CQUZBLEVBWkE7O0FBZ0JBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG1CQUZBLEVBakJBOztBQXFCQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxrQkFGQSxFQXRCQTs7QUEwQkE7QUFDQTtBQUNBLDRCQURBO0FBRUEsaUJBRkEsRUEzQkE7O0FBK0JBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG9CQUZBLEVBaENBOztBQW9DQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxpQkFGQSxFQXJDQTs7QUF5Q0E7QUFDQTtBQUNBLDRCQURBO0FBRUEsZ0JBRkEsRUExQ0E7O0FBOENBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLDJCQUZBLEVBL0NBOztBQW1EQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxpQkFGQSxFQXBEQSxFQUZBOzs7QUEyREEsTUEzREEsa0JBMkRBO0FBQ0E7QUFDQSx3QkFEQSxFQUNBO0FBQ0Esa0JBRkEsRUFFQTtBQUNBLG1CQUhBLEVBR0E7QUFDQTtBQUNBO0FBQ0Esb0JBTkE7QUFPQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxrQkFGQSxFQVJBOztBQVlBO0FBQ0EsMkJBYkE7QUFjQSxzQkFkQTs7QUFnQkEsR0E1RUE7QUE2RUE7QUFDQTtBQUNBLGNBRkEsd0JBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVRBLEVBN0VBOztBQXdGQSxTQXhGQSxxQkF3RkE7QUFDQTtBQUNBO0FBQ0EsR0EzRkE7QUE0RkEsU0E1RkEscUJBNEZBO0FBQ0E7QUFDQSxHQTlGQTtBQStGQTtBQUNBLFFBREEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBLEtBUkE7QUFTQTtBQUNBLGFBVkEscUJBVUEsS0FWQSxFQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsRUFFQSxhQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0F2QkE7QUF3QkE7QUFDQSxRQXpCQSxnQkF5QkEsS0F6QkEsRUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQURBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0EsS0F6Q0E7QUEwQ0E7QUFDQSxTQTNDQSxtQkEyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGtCQUZBOztBQUlBLEtBckRBO0FBc0RBO0FBQ0EsYUF2REEsdUJBdURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0EzREE7QUE0REE7QUFDQSxhQTdEQSx1QkE2REE7QUFDQTtBQUNBLEtBL0RBO0FBZ0VBO0FBQ0Esb0JBakVBLDhCQWlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FOQTtBQU9BLEtBN0VBLEVBL0ZBLEU7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUFBO0FBQUE7QUFBQTtBQUFvakQsQ0FBZ0IsMDVDQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBeGtEO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoidXZpZXctdWkvY29tcG9uZW50cy91LWRyb3Bkb3duL3UtZHJvcGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3UtZHJvcGRvd24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAzNDBiYjYwJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdS1kcm9wZG93bi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3UtZHJvcGRvd24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3UtZHJvcGRvd24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDM0MGJiNjAmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDM0MGJiNjBcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidXZpZXctdWkvY29tcG9uZW50cy91LWRyb3Bkb3duL3UtZHJvcGRvd24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3BhZ2UtbWV0YS5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi91LWRyb3Bkb3duLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMzQwYmI2MCZzY29wZWQ9dHJ1ZSZcIiIsInZhciBjb21wb25lbnRzXG50cnkge1xuICBjb21wb25lbnRzID0ge1xuICAgIHVJY29uOiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwidXZpZXctdWkvY29tcG9uZW50cy91LWljb24vdS1pY29uXCIgKi8gXCJAL3V2aWV3LXVpL2NvbXBvbmVudHMvdS1pY29uL3UtaWNvbi52dWVcIlxuICAgICAgKVxuICAgIH1cbiAgfVxufSBjYXRjaCAoZSkge1xuICBpZiAoXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCJDYW5ub3QgZmluZCBtb2R1bGVcIikgIT09IC0xICYmXG4gICAgZS5tZXNzYWdlLmluZGV4T2YoXCIudnVlXCIpICE9PSAtMVxuICApIHtcbiAgICBjb25zb2xlLmVycm9yKGUubWVzc2FnZSlcbiAgICBjb25zb2xlLmVycm9yKFwiMS4g5o6S5p+l57uE5Lu25ZCN56ew5ou85YaZ5piv5ZCm5q2j56GuXCIpXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMi4g5o6S5p+l57uE5Lu25piv5ZCm56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM5paH5qGj77yaaHR0cHM6Ly91bmlhcHAuZGNsb3VkLm5ldC5jbi9jb2xsb2NhdGlvbi9wYWdlcz9pZD1lYXN5Y29tXCJcbiAgICApXG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiMy4g6Iul57uE5Lu25LiN56ym5ZCIIGVhc3ljb20g6KeE6IyD77yM6ZyA5omL5Yqo5byV5YWl77yM5bm25ZyoIGNvbXBvbmVudHMg5Lit5rOo5YaM6K+l57uE5Lu2XCJcbiAgICApXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgZVxuICB9XG59XG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgdmFyIGcwID0gX3ZtLiR1LmFkZFVuaXQoX3ZtLmhlaWdodClcbiAgdmFyIGcxID0gX3ZtLiR1LmFkZFVuaXQoX3ZtLnRpdGxlU2l6ZSlcbiAgdmFyIGcyID0gX3ZtLiR1LmFkZFVuaXQoX3ZtLm1lbnVJY29uU2l6ZSlcblxuICB2YXIgczAgPSBfdm0uX19nZXRfc3R5bGUoW1xuICAgIF92bS5jb250ZW50U3R5bGUsXG4gICAge1xuICAgICAgdHJhbnNpdGlvbjogXCJvcGFjaXR5IFwiICsgX3ZtLmR1cmF0aW9uIC8gMTAwMCArIFwicyBsaW5lYXJcIixcbiAgICAgIHRvcDogX3ZtLiR1LmFkZFVuaXQoX3ZtLmhlaWdodCksXG4gICAgICBoZWlnaHQ6IF92bS5jb250ZW50SGVpZ2h0ICsgXCJweFwiXG4gICAgfVxuICBdKVxuXG4gIHZhciBzMSA9IF92bS5fX2dldF9zdHlsZShbX3ZtLnBvcHVwU3R5bGVdKVxuXG4gIF92bS4kbXAuZGF0YSA9IE9iamVjdC5hc3NpZ24oXG4gICAge30sXG4gICAge1xuICAgICAgJHJvb3Q6IHtcbiAgICAgICAgZzA6IGcwLFxuICAgICAgICBnMTogZzEsXG4gICAgICAgIGcyOiBnMixcbiAgICAgICAgczA6IHMwLFxuICAgICAgICBzMTogczFcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3UtZHJvcGRvd24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3UtZHJvcGRvd24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IGNsYXNzPVwidS1kcm9wZG93blwiPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1LWRyb3Bkb3duX19tZW51XCIgOnN0eWxlPVwie1xyXG5cdFx0XHRoZWlnaHQ6ICR1LmFkZFVuaXQoaGVpZ2h0KVxyXG5cdFx0fVwiIDpjbGFzcz1cIntcclxuXHRcdFx0J3UtYm9yZGVyLWJvdHRvbSc6IGJvcmRlckJvdHRvbVxyXG5cdFx0fVwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInUtZHJvcGRvd25fX21lbnVfX2l0ZW1cIiB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gbWVudUxpc3RcIiA6a2V5PVwiaW5kZXhcIiBAdGFwLnN0b3A9XCJtZW51Q2xpY2soaW5kZXgpXCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJ1LWZsZXhcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidS1kcm9wZG93bl9fbWVudV9faXRlbV9fdGV4dFwiIDpzdHlsZT1cIntcclxuXHRcdFx0XHRcdFx0Y29sb3I6IGl0ZW0uZGlzYWJsZWQgPyAnI2MwYzRjYycgOiAoaW5kZXggPT09IGN1cnJlbnQgfHwgaGlnaGxpZ2h0SW5kZXggPT0gaW5kZXgpID8gYWN0aXZlQ29sb3IgOiBpbmFjdGl2ZUNvbG9yLFxyXG5cdFx0XHRcdFx0XHRmb250U2l6ZTogJHUuYWRkVW5pdCh0aXRsZVNpemUpXHJcblx0XHRcdFx0XHR9XCI+e3tpdGVtLnRpdGxlfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInUtZHJvcGRvd25fX21lbnVfX2l0ZW1fX2Fycm93XCIgOmNsYXNzPVwie1xyXG5cdFx0XHRcdFx0XHQndS1kcm9wZG93bl9fbWVudV9faXRlbV9fYXJyb3ctLXJvdGF0ZSc6IGluZGV4ID09PSBjdXJyZW50XHJcblx0XHRcdFx0XHR9XCI+XHJcblx0XHRcdFx0XHRcdDx1LWljb24gOmN1c3RvbS1zdHlsZT1cIntkaXNwbGF5OiAnZmxleCd9XCIgOm5hbWU9XCJtZW51SWNvblwiIDpzaXplPVwiJHUuYWRkVW5pdChtZW51SWNvblNpemUpXCIgOmNvbG9yPVwiaW5kZXggPT09IGN1cnJlbnQgfHwgaGlnaGxpZ2h0SW5kZXggPT0gaW5kZXggPyBhY3RpdmVDb2xvciA6ICcjYzBjNGNjJ1wiPjwvdS1pY29uPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJ1LWRyb3Bkb3duX19jb250ZW50XCIgOnN0eWxlPVwiW2NvbnRlbnRTdHlsZSwge1xyXG5cdFx0XHR0cmFuc2l0aW9uOiBgb3BhY2l0eSAke2R1cmF0aW9uIC8gMTAwMH1zIGxpbmVhcmAsXHJcblx0XHRcdHRvcDogJHUuYWRkVW5pdChoZWlnaHQpLFxyXG5cdFx0XHRoZWlnaHQ6IGNvbnRlbnRIZWlnaHQgKyAncHgnXHJcblx0XHR9XVwiXHJcblx0XHQgQHRhcD1cIm1hc2tDbGlja1wiIEB0b3VjaG1vdmUuc3RvcC5wcmV2ZW50PlxyXG5cdFx0XHQ8dmlldyBAdGFwLnN0b3AucHJldmVudCBjbGFzcz1cInUtZHJvcGRvd25fX2NvbnRlbnRfX3BvcHVwXCIgOnN0eWxlPVwiW3BvcHVwU3R5bGVdXCI+XHJcblx0XHRcdFx0PHNsb3Q+PC9zbG90PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwidS1kcm9wZG93bl9fY29udGVudF9fbWFza1wiPjwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8qKlxyXG5cdCAqIGRyb3Bkb3duIOS4i+aLieiPnOWNlVxyXG5cdCAqIEBkZXNjcmlwdGlvbiDor6Xnu4Tku7bkuIDoiKznlKjkuo7lkJHkuIvlsZXlvIDoj5zljZXvvIzlkIzml7blj6/liIfmjaLlpJrkuKrpgInpobnljaHnmoTlnLrmma9cclxuXHQgKiBAdHV0b3JpYWwgaHR0cDovL3V2aWV3dWkuY29tL2NvbXBvbmVudHMvZHJvcGRvd24uaHRtbFxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBhY3RpdmUtY29sb3Ig5qCH6aKY5ZKM6YCJ6aG55Y2h6YCJ5Lit55qE6aKc6Imy77yI6buY6K6kIzI5NzlmZu+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBpbmFjdGl2ZS1jb2xvciDmoIfpopjlkozpgInpobnljaHmnKrpgInkuK3nmoTpopzoibLvvIjpu5jorqQjNjA2MjY277yJXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBjbG9zZS1vbi1jbGljay1tYXNrIOeCueWHu+mBrue9qeaYr+WQpuWFs+mXreiPnOWNle+8iOm7mOiupHRydWXvvIlcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGNsb3NlLW9uLWNsaWNrLXNlbGYg54K55Ye75b2T5YmN5r+A5rS76aG55qCH6aKY5piv5ZCm5YWz6Zet6I+c5Y2V77yI6buY6K6kdHJ1Ze+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIHwgTnVtYmVyfSBkdXJhdGlvbiDpgInpobnljaHlsZXlvIDlkozmlLbotbfnmoTov4fmuKHml7bpl7TvvIzljZXkvY1tc++8iOm7mOiupDMwMO+8iVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nIHwgTnVtYmVyfSBoZWlnaHQg5qCH6aKY6I+c5Y2V55qE6auY5bqm77yM5Y2V5L2N5Lu75oSP77yI6buY6K6kODDvvIlcclxuXHQgKiBAcHJvcGVydHkge1N0cmluZyB8IE51bWJlcn0gYm9yZGVyLXJhZGl1cyDoj5zljZXlsZXlvIDlhoXlrrnkuIvmlrnnmoTlnIbop5LlgLzvvIzljZXkvY3ku7vmhI/vvIjpu5jorqQw77yJXHJcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBib3JkZXItYm90dG9tIOagh+mimOiPnOWNleaYr+WQpuaYvuekuuS4i+i+ueahhu+8iOm7mOiupGZhbHNl77yJXHJcblx0ICogQHByb3BlcnR5IHtTdHJpbmcgfCBOdW1iZXJ9IHRpdGxlLXNpemUg5qCH6aKY55qE5a2X5L2T5aSn5bCP77yM5Y2V5L2N5Lu75oSP77yM5pWw5YC86buY6K6k5Li6cnB45Y2V5L2N77yI6buY6K6kMjjvvIlcclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBvcGVuIOS4i+aLieiPnOWNleiiq+aJk+W8gOaXtuinpuWPkVxyXG5cdCAqIEBldmVudCB7RnVuY3Rpb259IGNsb3NlIOS4i+aLieiPnOWNleiiq+WFs+mXreaXtuinpuWPkVxyXG5cdCAqIEBleGFtcGxlIDx1LWRyb3Bkb3duPjwvdS1kcm9wZG93bj5cclxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAndS1kcm9wZG93bicsXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHQvLyDoj5zljZXmoIfpopjlkozpgInpobnnmoTmv4DmtLvmgIHpopzoibJcclxuXHRcdFx0YWN0aXZlQ29sb3I6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJyMyOTc5ZmYnXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOiPnOWNleagh+mimOWSjOmAiemhueeahOacqua/gOa0u+aAgeminOiJslxyXG5cdFx0XHRpbmFjdGl2ZUNvbG9yOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcjNjA2MjY2J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vpga7nvanmmK/lkKblhbPpl63oj5zljZVcclxuXHRcdFx0Y2xvc2VPbkNsaWNrTWFzazoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDngrnlh7vlvZPliY3mv4DmtLvpobnmoIfpopjmmK/lkKblhbPpl63oj5zljZVcclxuXHRcdFx0Y2xvc2VPbkNsaWNrU2VsZjoge1xyXG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXHJcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDov4fmuKHml7bpl7RcclxuXHRcdFx0ZHVyYXRpb246IHtcclxuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDMwMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmoIfpopjoj5zljZXnmoTpq5jluqbvvIzljZXkvY3ku7vmhI/vvIzmlbDlgLzpu5jorqTkuLpycHjljZXkvY1cclxuXHRcdFx0aGVpZ2h0OiB7XHJcblx0XHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiA4MFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmK/lkKbmmL7npLrkuIvovrnmoYZcclxuXHRcdFx0Ym9yZGVyQm90dG9tOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmoIfpopjnmoTlrZfkvZPlpKflsI9cclxuXHRcdFx0dGl0bGVTaXplOiB7XHJcblx0XHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAyOFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDkuIvmi4nlh7rmnaXnmoTlhoXlrrnpg6jliIbnmoTlnIbop5LlgLxcclxuXHRcdFx0Ym9yZGVyUmFkaXVzOiB7XHJcblx0XHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcclxuXHRcdFx0XHRkZWZhdWx0OiAwXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOiPnOWNleWPs+S+p+eahGljb27lm77moIdcclxuXHRcdFx0bWVudUljb246IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJ2Fycm93LWRvd24nXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOiPnOWNleWPs+S+p+Wbvuagh+eahOWkp+Wwj1xyXG5cdFx0XHRtZW51SWNvblNpemU6IHtcclxuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDI2XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHNob3dEcm9wZG93bjogdHJ1ZSwgLy8g5piv5ZCm5omT5byA5LiL5p2l6I+c5Y2VLFxyXG5cdFx0XHRcdG1lbnVMaXN0OiBbXSwgLy8g5pi+56S655qE6I+c5Y2VXHJcblx0XHRcdFx0YWN0aXZlOiBmYWxzZSwgLy8g5LiL5ouJ6I+c5Y2V55qE54q25oCBXHJcblx0XHRcdFx0Ly8g5b2T5YmN5piv56ys5Yeg5Liq6I+c5Y2V5aSE5LqO5r+A5rS754q25oCB77yM5bCP56iL5bqP5Lit5q2k5aSE5LiN6IO95YaZ5oiQZmFsc2XmiJbogIVcIlwi77yM5ZCm5YiZ5ZCO57ut5bCGY3VycmVudOi1i+WAvOS4ujDvvIxcclxuXHRcdFx0XHQvLyDml6Dog73nmoRUWOayoeacieS9v+eUqD09PeiAjOaYr+S9v+eUqD095Yik5pat77yM5a+86Ie056iL5bqP6K6k5Li65YmN5ZCO5LqM6ICF5rKh5pyJ5Y+Y5YyW77yM5LuO6ICM5LiN5Lya6Kem5Y+R6KeG5Zu+5pu05pawXHJcblx0XHRcdFx0Y3VycmVudDogOTk5OTksXHJcblx0XHRcdFx0Ly8g5aSW5bGC5YaF5a6555qE5qC35byP77yM5Yid5aeL5pe25aSE5LqO5bqV5bGC77yM5LiU6YCP5piOXHJcblx0XHRcdFx0Y29udGVudFN0eWxlOiB7XHJcblx0XHRcdFx0XHR6SW5kZXg6IC0xLFxyXG5cdFx0XHRcdFx0b3BhY2l0eTogMFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0Ly8g6K6p5p+Q5Liq6I+c5Y2V5L+d5oyB6auY5Lqu55qE54q25oCBXHJcblx0XHRcdFx0aGlnaGxpZ2h0SW5kZXg6IDk5OTk5LFxyXG5cdFx0XHRcdGNvbnRlbnRIZWlnaHQ6IDBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNvbXB1dGVkOiB7XHJcblx0XHRcdC8vIOS4i+aLieWHuuadpemDqOWIhueahOagt+W8j1xyXG5cdFx0XHRwb3B1cFN0eWxlKCkge1xyXG5cdFx0XHRcdGxldCBzdHlsZSA9IHt9O1xyXG5cdFx0XHRcdC8vIOi/m+ihjFnovbTkvY3np7vvvIzlsZXlvIDnirbmgIHml7bvvIzmgaLlpI3ljp/kvY3jgILmlLbpvZDnirbmgIHml7bvvIzlvoDkuIrkvY3np7sxMDAl77yM6L+b6KGM6ZqQ6JePXHJcblx0XHRcdFx0c3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVkoJHt0aGlzLmFjdGl2ZSA/IDAgOiAnLTEwMCUnfSlgXHJcblx0XHRcdFx0c3R5bGVbJ3RyYW5zaXRpb24tZHVyYXRpb24nXSA9IHRoaXMuZHVyYXRpb24gLyAxMDAwICsgJ3MnO1xyXG5cdFx0XHRcdHN0eWxlLmJvcmRlclJhZGl1cyA9IGAwIDAgJHt0aGlzLiR1LmFkZFVuaXQodGhpcy5ib3JkZXJSYWRpdXMpfSAke3RoaXMuJHUuYWRkVW5pdCh0aGlzLmJvcmRlclJhZGl1cyl9YDtcclxuXHRcdFx0XHRyZXR1cm4gc3R5bGU7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHQvLyDlvJXnlKjmiYDmnInlrZDnu4Tku7YodS1kcm9wZG93bi1pdGVtKeeahHRoaXPvvIzkuI3og73lnKhkYXRh5Lit5aOw5piO5Y+Y6YeP77yM5ZCm5YiZ5Zyo5b6u5L+h5bCP56iL5bqP5Lya6YCg5oiQ5b6q546v5byV55So6ICM5oql6ZSZXHJcblx0XHRcdHRoaXMuY2hpbGRyZW4gPSBbXTtcclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHR0aGlzLmdldENvbnRlbnRIZWlnaHQoKTtcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGluaXQoKSB7XHJcblx0XHRcdFx0Ly8g5b2T5p+Q5Liq5a2Q57uE5Lu25YaF5a655Y+Y5YyW5pe277yM6Kem5Y+R54i257uE5Lu255qEaW5pdO+8jOeItue7hOS7tuWGjeiuqeavj+S4gOS4quWtkOe7hOS7tumHjeaWsOWIneWni+WMluS4gOmBjVxyXG5cdFx0XHRcdC8vIOS7peS/neivgeaVsOaNrueahOato+ehruaAp1xyXG5cdFx0XHRcdHRoaXMubWVudUxpc3QgPSBbXTtcclxuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLm1hcChjaGlsZCA9PiB7XHJcblx0XHRcdFx0XHRjaGlsZC5pbml0KCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g54K55Ye76I+c5Y2VXHJcblx0XHRcdG1lbnVDbGljayhpbmRleCkge1xyXG5cdFx0XHRcdC8vIOWIpOaWreaYr+WQpuiiq+emgeeUqFxyXG5cdFx0XHRcdGlmICh0aGlzLm1lbnVMaXN0W2luZGV4XS5kaXNhYmxlZCkgcmV0dXJuO1xyXG5cdFx0XHRcdC8vIOWmguaenOeCueWHu+aXtueahOe0ouW8leWSjOW9k+WJjea/gOa0u+mhuee0ouW8leebuOWQjO+8jOaEj+WRs+edgOeCueWHu+S6hua/gOa0u+mhue+8jOmcgOimgeaUtui1t+S4i+aLieiPnOWNlVxyXG5cdFx0XHRcdGlmIChpbmRleCA9PT0gdGhpcy5jdXJyZW50ICYmIHRoaXMuY2xvc2VPbkNsaWNrU2VsZikge1xyXG5cdFx0XHRcdFx0dGhpcy5jbG9zZSgpO1xyXG5cdFx0XHRcdFx0Ly8g562J5Yqo55S757uT5p2f5ZCO77yM5YaN56e76Zmk5LiL5ouJ6I+c5Y2V5Lit55qE5YaF5a6577yM5ZCm5YiZ55u05o6l56e76Zmk77yM5Lmf5bCx5rKh5pyJ5LiL5ouJ6I+c5Y2V5pS26LW355qE5pWI5p6c5LqGXHJcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy5jaGlsZHJlbltpbmRleF0uYWN0aXZlID0gZmFsc2U7XHJcblx0XHRcdFx0XHR9LCB0aGlzLmR1cmF0aW9uKVxyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLm9wZW4oaW5kZXgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmiZPlvIDkuIvmi4noj5zljZVcclxuXHRcdFx0b3BlbihpbmRleCkge1xyXG5cdFx0XHRcdC8vIOmHjee9rumrmOS6rue0ouW8le+8jOWQpuWImeS8mumAoOaIkOWkmuS4quiPnOWNleWQjOaXtumrmOS6rlxyXG5cdFx0XHRcdC8vIHRoaXMuaGlnaGxpZ2h0SW5kZXggPSA5OTk5O1xyXG5cdFx0XHRcdC8vIOWxleW8gOaXtu+8jOiuvue9ruS4i+aLieWGheWuueeahOagt+W8j1xyXG5cdFx0XHRcdHRoaXMuY29udGVudFN0eWxlID0ge1xyXG5cdFx0XHRcdFx0ekluZGV4OiAxMSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8g5qCH6K6w5bGV5byA54q25oCB5Lul5Y+K5b2T5YmN5bGV5byA6aG555qE57Si5byVXHJcblx0XHRcdFx0dGhpcy5hY3RpdmUgPSB0cnVlO1xyXG5cdFx0XHRcdHRoaXMuY3VycmVudCA9IGluZGV4O1xyXG5cdFx0XHRcdC8vIOWOhumBjeaJgOacieeahOWtkOWFg+e0oO+8jOWwhue0ouW8leWMuemFjeeahOmhueagh+iusOS4uua/gOa0u+eKtuaAge+8jOWboOS4uuWtkOWFg+e0oOaYr+mAmui/h3YtaWbmjqfliLbliIfmjaLnmoRcclxuXHRcdFx0XHQvLyDkuYvmiYDku6XkuI3mmK/lm6BkaXNwbGF5OiBub25l77yM5piv5Zug5Li6bnZ1ZeayoeaciWRpc3BsYXnov5nkuKrlsZ7mgKdcclxuXHRcdFx0XHR0aGlzLmNoaWxkcmVuLm1hcCgodmFsLCBpZHgpID0+IHtcclxuXHRcdFx0XHRcdHZhbC5hY3RpdmUgPSBpbmRleCA9PSBpZHggPyB0cnVlIDogZmFsc2U7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdvcGVuJywgdGhpcy5jdXJyZW50KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6K6+572u5LiL5ouJ6I+c5Y2V5aSE5LqO5pS26LW354q25oCBXHJcblx0XHRcdGNsb3NlKCkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2Nsb3NlJywgdGhpcy5jdXJyZW50KTtcclxuXHRcdFx0XHQvLyDorr7nva7kuLrmlLbotbfnirbmgIHvvIzlkIzml7ZjdXJyZW505b2S5L2N77yM6K6+572u5Li656m65a2X56ym5LiyXHJcblx0XHRcdFx0dGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnQgPSA5OTk5OTtcclxuXHRcdFx0XHQvLyDkuIvmi4nlhoXlrrnnmoTmoLflvI/ov5vooYzosIPmlbTvvIzkuI3pgI/mmI7luqborr7nva7kuLowXHJcblx0XHRcdFx0dGhpcy5jb250ZW50U3R5bGUgPSB7XHJcblx0XHRcdFx0XHR6SW5kZXg6IC0xLFxyXG5cdFx0XHRcdFx0b3BhY2l0eTogMFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g54K55Ye76YGu572pXHJcblx0XHRcdG1hc2tDbGljaygpIHtcclxuXHRcdFx0XHQvLyDlpoLmnpzkuI3lhYHorrjngrnlh7vpga7nvanvvIznm7TmjqXov5Tlm55cclxuXHRcdFx0XHRpZiAoIXRoaXMuY2xvc2VPbkNsaWNrTWFzaykgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuY2xvc2UoKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5aSW6YOo5omL5Yqo6K6+572u5p+Q5Liq6I+c5Y2V6auY5LquXHJcblx0XHRcdGhpZ2hsaWdodChpbmRleCA9IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdHRoaXMuaGlnaGxpZ2h0SW5kZXggPSBpbmRleCAhPT0gdW5kZWZpbmVkID8gaW5kZXggOiA5OTk5OTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6I635Y+W5LiL5ouJ6I+c5Y2V5YaF5a6555qE6auY5bqmXHJcblx0XHRcdGdldENvbnRlbnRIZWlnaHQoKSB7XHJcblx0XHRcdFx0Ly8g6L+Z6YeM55qE5Y6f55CG5Li677yM5Zug5Li6ZHJvcGRvd27nu4Tku7bmmK/nm7jlr7nlrprkvY3nmoTvvIzlroPnmoTkuIvmi4nlh7rmnaXnmoTlhoXlrrnvvIzlv4Xpobvnu5nlrprkuIDkuKrpq5jluqZcclxuXHRcdFx0XHQvLyDmiY3og73orqnpga7nvanljaDmu6Hoj5zljZXkuIDkuIvvvIznm7TliLDlsY/luZXlupXpg6jnmoTpq5jluqZcclxuXHRcdFx0XHQvLyB0aGlzLiR1LnN5cygp5Li6dVZpZXflsIHoo4XnmoTojrflj5borr7lpIfkv6Hmga/nmoTmlrnms5VcclxuXHRcdFx0XHRsZXQgd2luZG93SGVpZ2h0ID0gdGhpcy4kdS5zeXMoKS53aW5kb3dIZWlnaHQ7XHJcblx0XHRcdFx0dGhpcy4kdUdldFJlY3QoJy51LWRyb3Bkb3duX19tZW51JykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0Ly8g6L+Z6YeM6I635Y+W55qE5pivZHJvcGRvd27nmoTlsLrlr7jvvIzlnKhINeS4iu+8jHVuaWFwcOiOt+WPluWwuuWvuOaYr+aciWJ1Z+eahCjku6XliY3mj5Dlh7rkv67lpI3ov4fvvIzlkI7mnaXlj4jlh7rnjrDkuobmraRidWfvvIznm67liY1oeDIuOC4xMeeJiOacrClcclxuXHRcdFx0XHRcdC8vIEg156uvYnVn6KGo546w5Li65YWD57Sg5bC65a+455qEdG9w5YC85Li65a+86Iiq5qCP5bqV6YOo5Yiw5Yiw5YWD57Sg55qE5LiK6L655rK/55qE6Led56a777yM5L2G5piv5YWD57Sg55qEYm90dG9t5YC856Gu5piv5a+86Iiq5qCP6aG26YOo5Yiw5YWD57Sg5bqV6YOo55qE6Led56a7XHJcblx0XHRcdFx0XHQvLyDkuozogIXmmK/kupLnm7jnn5vnm77nmoTvvIzmnKzotKjljp/lm6DmmK9INeerr+WvvOiIquagj+mdnuWOn+eUn++8jHVuaeeahOW8gOWPkeiAheWkp+aEj+mAoOaIkFxyXG5cdFx0XHRcdFx0Ly8g6L+Z6YeM5Y+W6I+c5Y2V5qCP55qEYm90dG9u5YC85ZCI55CG55qE77yM5LiN6IO955SocmVzLnRvcO+8jOWQpuWImemhtemdouS8mumAoOaIkOa7muWKqFxyXG5cdFx0XHRcdFx0dGhpcy5jb250ZW50SGVpZ2h0ID0gd2luZG93SGVpZ2h0IC0gcmVzLmJvdHRvbTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuXHRAaW1wb3J0IFwiLi4vLi4vbGlicy9jc3Mvc3R5bGUuY29tcG9uZW50cy5zY3NzXCI7XHJcblxyXG5cdC51LWRyb3Bkb3duIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblx0XHQmX19tZW51IHtcclxuXHRcdFx0QGluY2x1ZGUgdnVlLWZsZXg7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0ei1pbmRleDogMTE7XHJcblx0XHRcdGhlaWdodDogODBycHg7XHJcblxyXG5cdFx0XHQmX19pdGVtIHtcclxuXHRcdFx0XHRmbGV4OiAxO1xyXG5cdFx0XHRcdEBpbmNsdWRlIHZ1ZS1mbGV4O1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cdFx0XHRcdCZfX3RleHQge1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdFx0XHRcdGNvbG9yOiAkdS1jb250ZW50LWNvbG9yO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0Jl9fYXJyb3cge1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDZycHg7XHJcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzO1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0XHRcdEBpbmNsdWRlIHZ1ZS1mbGV4O1xyXG5cclxuXHRcdFx0XHRcdCYtLXJvdGF0ZSB7XHJcblx0XHRcdFx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Jl9fY29udGVudCB7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0ei1pbmRleDogODtcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGxlZnQ6IDBweDtcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRcclxuXHJcblx0XHRcdCZfX21hc2sge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHR6LWluZGV4OiA5O1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjMpO1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRcdGJvdHRvbTogMDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Jl9fcG9wdXAge1xyXG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHR6LWluZGV4OiAxMDtcclxuXHRcdFx0XHR0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKDAsIC0xMDAlLCAwKTtcclxuXHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdH1cclxuPC9zdHlsZT5cclxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS04LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtNCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTUhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vdS1kcm9wZG93bi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wMzQwYmI2MCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS04LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMS01IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL3UtZHJvcGRvd24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDM0MGJiNjAmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTYzMTU5NDU2NDk5NVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uview-ui/components/u-dropdown/u-dropdown-create-component',
    {
        'uview-ui/components/u-dropdown/u-dropdown-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(442))
        })
    },
    [['uview-ui/components/u-dropdown/u-dropdown-create-component']]
]);
