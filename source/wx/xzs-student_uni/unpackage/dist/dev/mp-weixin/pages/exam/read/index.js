(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/exam/read/index"],{

/***/ 184:
/*!************************************************************************************************************!*\
  !*** H:/foxdown/xzs-mysql-master/source/wx/xzs-student_uni/main.js?{"page":"pages%2Fexam%2Fread%2Findex"} ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/exam/read/index.vue */ 185));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 185:
/*!***************************************************************************************!*\
  !*** H:/foxdown/xzs-mysql-master/source/wx/xzs-student_uni/pages/exam/read/index.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_e2a449c0_filter_modules_eyJmaWx0ZXIiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6Nzk5NiwiYXR0cnMiOnsibW9kdWxlIjoiZmlsdGVyIiwibGFuZyI6Ind4cyIsInNyYyI6Ii4uLy4uLy4uL3d4cy9leGFtLWZ1bi53eHMifSwiZW5kIjo3OTk2fX0_3D___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=e2a449c0&filter-modules=eyJmaWx0ZXIiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6Nzk5NiwiYXR0cnMiOnsibW9kdWxlIjoiZmlsdGVyIiwibGFuZyI6Ind4cyIsInNyYyI6Ii4uLy4uLy4uL3d4cy9leGFtLWZ1bi53eHMifSwiZW5kIjo3OTk2fX0%3D& */ 186);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 188);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ 190);
/* harmony import */ var _D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);
/* harmony import */ var _wxs_exam_fun_wxs_vue_type_custom_index_0_blockType_script_issuerPath_H_3A_5Cfoxdown_5Cxzs_mysql_master_5Csource_5Cwx_5Cxzs_student_uni_5Cpages_5Cexam_5Cread_5Cindex_vue_module_filter_lang_wxs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../wxs/exam-fun.wxs?vue&type=custom&index=0&blockType=script&issuerPath=H%3A%5Cfoxdown%5Cxzs-mysql-master%5Csource%5Cwx%5Cxzs-student_uni%5Cpages%5Cexam%5Cread%5Cindex.vue&module=filter&lang=wxs */ 192);

var renderjs





/* normalize component */

var component = Object(_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_e2a449c0_filter_modules_eyJmaWx0ZXIiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6Nzk5NiwiYXR0cnMiOnsibW9kdWxlIjoiZmlsdGVyIiwibGFuZyI6Ind4cyIsInNyYyI6Ii4uLy4uLy4uL3d4cy9leGFtLWZ1bi53eHMifSwiZW5kIjo3OTk2fX0_3D___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_e2a449c0_filter_modules_eyJmaWx0ZXIiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6Nzk5NiwiYXR0cnMiOnsibW9kdWxlIjoiZmlsdGVyIiwibGFuZyI6Ind4cyIsInNyYyI6Ii4uLy4uLy4uL3d4cy9leGFtLWZ1bi53eHMifSwiZW5kIjo3OTk2fX0_3D___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_vue_vue_type_template_id_e2a449c0_filter_modules_eyJmaWx0ZXIiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6Nzk5NiwiYXR0cnMiOnsibW9kdWxlIjoiZmlsdGVyIiwibGFuZyI6Ind4cyIsInNyYyI6Ii4uLy4uLy4uL3d4cy9leGFtLWZ1bi53eHMifSwiZW5kIjo3OTk2fX0_3D___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

/* custom blocks */

if (typeof _wxs_exam_fun_wxs_vue_type_custom_index_0_blockType_script_issuerPath_H_3A_5Cfoxdown_5Cxzs_mysql_master_5Csource_5Cwx_5Cxzs_student_uni_5Cpages_5Cexam_5Cread_5Cindex_vue_module_filter_lang_wxs__WEBPACK_IMPORTED_MODULE_4__["default"] === 'function') Object(_wxs_exam_fun_wxs_vue_type_custom_index_0_blockType_script_issuerPath_H_3A_5Cfoxdown_5Cxzs_mysql_master_5Csource_5Cwx_5Cxzs_student_uni_5Cpages_5Cexam_5Cread_5Cindex_vue_module_filter_lang_wxs__WEBPACK_IMPORTED_MODULE_4__["default"])(component)

component.options.__file = "pages/exam/read/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 186:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** H:/foxdown/xzs-mysql-master/source/wx/xzs-student_uni/pages/exam/read/index.vue?vue&type=template&id=e2a449c0&filter-modules=eyJmaWx0ZXIiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6Nzk5NiwiYXR0cnMiOnsibW9kdWxlIjoiZmlsdGVyIiwibGFuZyI6Ind4cyIsInNyYyI6Ii4uLy4uLy4uL3d4cy9leGFtLWZ1bi53eHMifSwiZW5kIjo3OTk2fX0%3D& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_e2a449c0_filter_modules_eyJmaWx0ZXIiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6Nzk5NiwiYXR0cnMiOnsibW9kdWxlIjoiZmlsdGVyIiwibGFuZyI6Ind4cyIsInNyYyI6Ii4uLy4uLy4uL3d4cy9leGFtLWZ1bi53eHMifSwiZW5kIjo3OTk2fX0_3D___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=e2a449c0&filter-modules=eyJmaWx0ZXIiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6Nzk5NiwiYXR0cnMiOnsibW9kdWxlIjoiZmlsdGVyIiwibGFuZyI6Ind4cyIsInNyYyI6Ii4uLy4uLy4uL3d4cy9leGFtLWZ1bi53eHMifSwiZW5kIjo3OTk2fX0%3D& */ 187);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_e2a449c0_filter_modules_eyJmaWx0ZXIiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6Nzk5NiwiYXR0cnMiOnsibW9kdWxlIjoiZmlsdGVyIiwibGFuZyI6Ind4cyIsInNyYyI6Ii4uLy4uLy4uL3d4cy9leGFtLWZ1bi53eHMifSwiZW5kIjo3OTk2fX0_3D___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_e2a449c0_filter_modules_eyJmaWx0ZXIiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6Nzk5NiwiYXR0cnMiOnsibW9kdWxlIjoiZmlsdGVyIiwibGFuZyI6Ind4cyIsInNyYyI6Ii4uLy4uLy4uL3d4cy9leGFtLWZ1bi53eHMifSwiZW5kIjo3OTk2fX0_3D___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_e2a449c0_filter_modules_eyJmaWx0ZXIiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6Nzk5NiwiYXR0cnMiOnsibW9kdWxlIjoiZmlsdGVyIiwibGFuZyI6Ind4cyIsInNyYyI6Ii4uLy4uLy4uL3d4cy9leGFtLWZ1bi53eHMifSwiZW5kIjo3OTk2fX0_3D___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_e2a449c0_filter_modules_eyJmaWx0ZXIiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6Nzk5NiwiYXR0cnMiOnsibW9kdWxlIjoiZmlsdGVyIiwibGFuZyI6Ind4cyIsInNyYyI6Ii4uLy4uLy4uL3d4cy9leGFtLWZ1bi53eHMifSwiZW5kIjo3OTk2fX0_3D___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 187:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/foxdown/xzs-mysql-master/source/wx/xzs-student_uni/pages/exam/read/index.vue?vue&type=template&id=e2a449c0&filter-modules=eyJmaWx0ZXIiOnsidHlwZSI6InNjcmlwdCIsImNvbnRlbnQiOiIiLCJzdGFydCI6Nzk5NiwiYXR0cnMiOnsibW9kdWxlIjoiZmlsdGVyIiwibGFuZyI6Ind4cyIsInNyYyI6Ii4uLy4uLy4uL3d4cy9leGFtLWZ1bi53eHMifSwiZW5kIjo3OTk2fX0%3D& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 188:
/*!****************************************************************************************************************!*\
  !*** H:/foxdown/xzs-mysql-master/source/wx/xzs-student_uni/pages/exam/read/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 189);
/* harmony import */ var _D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 189:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/foxdown/xzs-mysql-master/source/wx/xzs-student_uni/pages/exam/read/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








































































































































var _util = __webpack_require__(/*! ../../../utils/util.js */ 173);var iPanel = function iPanel() {__webpack_require__.e(/*! require.ensure | component/iView/panel/index */ "component/iView/panel/index").then((function () {return resolve(__webpack_require__(/*! @/component/iView/panel/index */ 258));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var iCellGroup = function iCellGroup() {__webpack_require__.e(/*! require.ensure | component/iView/cell-group/index */ "component/iView/cell-group/index").then((function () {return resolve(__webpack_require__(/*! @/component/iView/cell-group/index */ 265));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var iCell = function iCell() {__webpack_require__.e(/*! require.ensure | component/iView/cell/index */ "component/iView/cell/index").then((function () {return resolve(__webpack_require__(/*! @/component/iView/cell/index */ 272));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var iRadioGroup = function iRadioGroup() {__webpack_require__.e(/*! require.ensure | component/iView/radio-group/index */ "component/iView/radio-group/index").then((function () {return resolve(__webpack_require__(/*! @/component/iView/radio-group/index */ 342));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var iRadio = function iRadio() {__webpack_require__.e(/*! require.ensure | component/iView/radio/index */ "component/iView/radio/index").then((function () {return resolve(__webpack_require__(/*! @/component/iView/radio/index */ 349));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var iRow = function iRow() {__webpack_require__.e(/*! require.ensure | component/iView/row/index */ "component/iView/row/index").then((function () {return resolve(__webpack_require__(/*! @/component/iView/row/index */ 356));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var iCol = function iCol() {__webpack_require__.e(/*! require.ensure | component/iView/col/index */ "component/iView/col/index").then((function () {return resolve(__webpack_require__(/*! @/component/iView/col/index */ 363));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var iInput = function iInput() {__webpack_require__.e(/*! require.ensure | component/iView/input/index */ "component/iView/input/index").then((function () {return resolve(__webpack_require__(/*! @/component/iView/input/index */ 314));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var iActionSheet = function iActionSheet() {__webpack_require__.e(/*! require.ensure | component/iView/action-sheet/index */ "component/iView/action-sheet/index").then((function () {return resolve(__webpack_require__(/*! @/component/iView/action-sheet/index */ 370));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var iModal = function iModal() {__webpack_require__.e(/*! require.ensure | component/iView/modal/index */ "component/iView/modal/index").then((function () {return resolve(__webpack_require__(/*! @/component/iView/modal/index */ 377));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var iMessage = function iMessage() {__webpack_require__.e(/*! require.ensure | component/iView/message/index */ "component/iView/message/index").then((function () {return resolve(__webpack_require__(/*! @/component/iView/message/index */ 293));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var iSpin = function iSpin() {__webpack_require__.e(/*! require.ensure | component/iView/spin/index */ "component/iView/spin/index").then((function () {return resolve(__webpack_require__(/*! @/component/iView/spin/index */ 300));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var iRate = function iRate() {__webpack_require__.e(/*! require.ensure | component/iView/rate/index */ "component/iView/rate/index").then((function () {return resolve(__webpack_require__(/*! @/component/iView/rate/index */ 384));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};
var app = getApp();var _default =
{
  components: {
    iPanel: iPanel,
    iCellGroup: iCellGroup,
    iCell: iCell,
    iRadioGroup: iRadioGroup,
    iRadio: iRadio,
    iRow: iRow,
    iCol: iCol,
    iInput: iInput,
    iActionSheet: iActionSheet,
    iModal: iModal,
    iMessage: iMessage,
    iSpin: iSpin,
    iRate: iRate },

  data: function data() {
    return {
      spinShow: false,
      paperId: null,

      paper: {
        name: '',
        titleItems: [] },


      answer: {
        score: '',
        doTime: '',

        answerItems: [
        {
          content: '' }],



        contentArray: {} },


      timer: null,
      doTime: 0,
      remainTime: 0,
      remainTimeStr: '',
      modalShow: false,
      result: 0,
      timeOutShow: false,

      titleItem: {
        name: '',
        questionItems: [],
        id: '' },


      questionItem: {
        questionType: 0,
        itemOrder: '',
        title: '',
        items: [],
        prefix: '',
        score: '',
        difficult: '',
        analyze: '',
        correct: '',
        correctArray: '' },


      radioItem: {
        prefix: '',
        content: '' },


      filter: {
        indexOf: '' },


      inputItem: {
        prefix: '' } };


  },
  onLoad: function onLoad(options) {
    var paperId = options.id;
    var that = this;
    that.setData({
      spinShow: true });

    app.globalData.
    formPost('/api/wx/student/exampaper/answer/read/' + paperId, null).
    then(function (res) {
      that.setData({
        spinShow: false });


      if (res.code === 1) {
        that.setData({
          paper: res.response.paper,
          answer: res.response.answer,
          paperId: paperId });

      }
    }).
    catch(function (e) {
      that.setData({
        spinShow: false });

      app.globalData.message(e, 'error');
    });
  },
  onUnload: function onUnload() {
    clearInterval(this.timer);
  },
  methods: {
    returnRecord: function returnRecord() {
      uni.reLaunch({
        url: '/pages/record/index' });

    },

    timeOut: function timeOut() {
      clearInterval(this.timer);
      this.setData({
        timeOutShow: true });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 190:
/*!************************************************************************************************************************!*\
  !*** H:/foxdown/xzs-mysql-master/source/wx/xzs-student_uni/pages/exam/read/index.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=style&index=0&lang=css& */ 191);
/* harmony import */ var _D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 191:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!H:/foxdown/xzs-mysql-master/source/wx/xzs-student_uni/pages/exam/read/index.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 192:
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** H:/foxdown/xzs-mysql-master/source/wx/xzs-student_uni/wxs/exam-fun.wxs?vue&type=custom&index=0&blockType=script&issuerPath=H%3A%5Cfoxdown%5Cxzs-mysql-master%5Csource%5Cwx%5Cxzs-student_uni%5Cpages%5Cexam%5Cread%5Cindex.vue&module=filter&lang=wxs ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_filter_loader_index_js_exam_fun_wxs_vue_type_custom_index_0_blockType_script_issuerPath_H_3A_5Cfoxdown_5Cxzs_mysql_master_5Csource_5Cwx_5Cxzs_student_uni_5Cpages_5Cexam_5Cread_5Cindex_vue_module_filter_lang_wxs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-filter-loader!./exam-fun.wxs?vue&type=custom&index=0&blockType=script&issuerPath=H%3A%5Cfoxdown%5Cxzs-mysql-master%5Csource%5Cwx%5Cxzs-student_uni%5Cpages%5Cexam%5Cread%5Cindex.vue&module=filter&lang=wxs */ 193);
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_D_Zidan_SoftWare_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_filter_loader_index_js_exam_fun_wxs_vue_type_custom_index_0_blockType_script_issuerPath_H_3A_5Cfoxdown_5Cxzs_mysql_master_5Csource_5Cwx_5Cxzs_student_uni_5Cpages_5Cexam_5Cread_5Cindex_vue_module_filter_lang_wxs__WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ 193:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-filter-loader!H:/foxdown/xzs-mysql-master/source/wx/xzs-student_uni/wxs/exam-fun.wxs?vue&type=custom&index=0&blockType=script&issuerPath=H%3A%5Cfoxdown%5Cxzs-mysql-master%5Csource%5Cwx%5Cxzs-student_uni%5Cpages%5Cexam%5Cread%5Cindex.vue&module=filter&lang=wxs ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (Component) {
       if(!Component.options.wxsCallMethods){
         Component.options.wxsCallMethods = []
       }
       
     });

/***/ })

},[[184,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/exam/read/index.js.map