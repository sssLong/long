webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Vue = __webpack_require__(1);
	var VueRouter = __webpack_require__(2);

	var router = new VueRouter({
	    model: 'history',
	    routes: [{
	        path: '/',
	        component: __webpack_require__(3)
	    }, {
	        path: '/user/about',
	        component: __webpack_require__(5)
	    }, {
	        path: '/user/zhaopin',
	        component: __webpack_require__(7)
	    }, {
	        path: '/user/concact',
	        component: __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../pages/concact.vue\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
	    }]
	});

	new Vue({
	    el: '#nav',
	    router: router
	});

/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* template */
	var __vue_template__ = __webpack_require__(4)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\vue-spa\\static\\pages\\index.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-eb126898", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-eb126898", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] index.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function(){},staticRenderFns:[]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-eb126898", module.exports)
	  }
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* template */
	var __vue_template__ = __webpack_require__(6)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\vue-spa\\static\\pages\\about.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-6abef0ef", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-6abef0ef", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] about.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function(){},staticRenderFns:[]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6abef0ef", module.exports)
	  }
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* template */
	var __vue_template__ = __webpack_require__(8)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "E:\\vue-spa\\static\\pages\\recruitment.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-99c74804", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-99c74804", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] recruitment.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticClass: "banner5"
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-99c74804", module.exports)
	  }
	}

/***/ }
]);