webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Vue = __webpack_require__(1);
	var VueRouter = __webpack_require__(2);
	Vue.use(VueRouter);
	var router = new VueRouter({
	    //model: 'history',
	    routes: [{
	        path: '/',
	        component: __webpack_require__(3)
	    }, {
	        path: '/user/about',
	        component: __webpack_require__(5)
	    }, {
	        path: '/user/zhaopin/php',
	        component: __webpack_require__(7),
	        children: [{
	            path: '/user/zhaopin/php',
	            component: __webpack_require__(10)
	        }, {
	            path: '/user/zhaopin/leader',
	            component: __webpack_require__(13)
	        }, {
	            path: '/user/zhaopin/market',
	            component: __webpack_require__(15)
	        }, {
	            path: '/user/zhaopin/git',
	            component: __webpack_require__(17)
	        }, {
	            path: '/user/zhaopin/buy',
	            component: __webpack_require__(19)
	        }]
	    }, {
	        path: '/user/contact',
	        component: __webpack_require__(21)
	    }, {
	        // 404 跳转到首页
	        path: '/*',
	        redirect: function redirect() {
	            return '/';
	        }
	    }]
	});

	window.app = new Vue({
	    el: '#box',
	    data: {
	        show: false
	    },
	    router: router,
	    created: function created() {},
	    methods: {
	        showChange: function showChange() {

	            if (this.show) {
	                this.show = false;
	            } else {
	                this.show = true;
	            }
	        }

	    }
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

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('div', {
	    staticClass: "banner"
	  }), " ", " ", " ", _h('div', {
	    staticClass: "ts_4",
	    staticStyle: {
	      "margin-top": "40px"
	    }
	  }, [_h('ul', [_h('li', {
	    staticClass: "t1"
	  }, [_h('div', {
	    staticStyle: {
	      "margin-top": "100px"
	    }
	  }, ["安全放心，优质新鲜"]), " ", _h('div', {
	    staticClass: "wz"
	  }, ["蔬果连夜直送冷库，确保新鲜\n                    ", _h('br'), "专业农产品检测确达安全标准", _h('br'), "完善的售后体系保障客户权益\n                "])]), " ", _h('li', {
	    staticClass: "t2"
	  }, [_h('div', {
	    staticStyle: {
	      "margin-top": "100px"
	    }
	  }, ["种类齐全，一键下单"]), " ", _h('div', {
	    staticClass: "wz"
	  }, ["自建仓库，储备种类达两千种", _h('br'), "覆盖海吉星有信西货场全品类\n                    ", _h('br'), "携手知名品牌，确保稳定供应\n                "])]), " ", _h('li', {
	    staticClass: "t3"
	  }, [_h('div', {
	    staticStyle: {
	      "margin-top": "100px"
	    }
	  }, ["闪电处理，准点到货"]), " ", _h('div', {
	    staticClass: "wz"
	  }, ["自动化分拣，精准迅速分装", _h('br'), "多仓库就近直发，高效发货", _h('br'), "专业的物流队伍，极速送达"])]), " ", _h('li', {
	    staticClass: "t4"
	  }, [_h('div', {
	    staticStyle: {
	      "margin-top": "100px"
	    }
	  }, ["省钱省力，享受经营"]), " ", _h('div', {
	    staticClass: "wz"
	  }, ["优惠实在，为您节省30%成本", _h('br'), "免费送货上门，为您节省人力", _h('br'), "消除采购烦恼，给您省心省事"])])])]), " ", " ", " ", _h('div', {
	    staticClass: "xiadan"
	  }, [_h('div', {
	    staticStyle: {
	      "margin": "0 auto",
	      "height": "44px",
	      "padding-top": "30px",
	      "width": "286px"
	    }
	  }, [_h('img', {
	    attrs: {
	      "src": "resource/website/images/b1.jpg"
	    }
	  })]), " ", _h('div', {
	    staticStyle: {
	      "margin": "30px auto 0px auto",
	      "height": "195px",
	      "width": "1200px"
	    }
	  }, [_h('img', {
	    attrs: {
	      "src": "resource/website/images/xiadan.jpg"
	    }
	  })])]), " ", " ", " ", _h('div', {
	    staticClass: "gongzuo"
	  }, [_h('div', {
	    staticStyle: {
	      "margin": "0 auto",
	      "height": "44px",
	      "padding-top": "60px",
	      "width": "286px"
	    }
	  }, [_h('img', {
	    attrs: {
	      "src": "resource/website/images/b2.jpg"
	    }
	  })]), " ", _h('div', {
	    staticStyle: {
	      "margin": "30px auto 0px auto",
	      "height": "155px",
	      "width": "1052px"
	    }
	  }, [_h('img', {
	    attrs: {
	      "src": "resource/website/images/gongzuo.jpg",
	      "width": "1052",
	      "height": "130"
	    }
	  })])]), " ", " ", " ", _h('div', {
	    staticClass: "cp"
	  }, [_h('div', {
	    staticStyle: {
	      "margin": "0 auto",
	      "height": "44px",
	      "padding-top": "30px",
	      "width": "286px"
	    }
	  }, [_h('img', {
	    attrs: {
	      "src": "resource/website/images/b3.jpg"
	    }
	  })]), " ", _h('div', {
	    staticStyle: {
	      "margin": "30px auto 0px auto",
	      "height": "195px",
	      "width": "1052px"
	    }
	  }, [_h('img', {
	    attrs: {
	      "src": "resource/website/images/cp.jpg",
	      "width": "1052",
	      "height": "387"
	    }
	  })])]), " ", " ", " ", _h('div', {
	    staticClass: "shili"
	  }, [_h('div', {
	    staticStyle: {
	      "margin": "0 auto",
	      "height": "44px",
	      "padding-top": "50px",
	      "width": "286px"
	    }
	  }, [_h('img', {
	    attrs: {
	      "src": "resource/website/images/b4.jpg",
	      "width": "286",
	      "height": "44"
	    }
	  })]), " ", _h('div', {
	    staticStyle: {
	      "margin": "10px auto 0px auto",
	      "height": "80px",
	      "width": "1052px",
	      "color": "#272727",
	      "line-height": "30px",
	      "font-size": "14px",
	      "text-indent": "30px"
	    }
	  }, [" 公司拥有专业化的物流配送中心，包括行业领先的专业化大型冷库、保鲜库、检测中心、分拣中心。具有多达200SKU的长期稳定供货能力，严格按照ISO:9001国际标准体系进行管理，实施专业定制的仓储管理系统、配送管理系统，确保提供长期安全、稳定、可靠的食材配送服务的能力。"]), " ", _h('div', {
	    staticClass: "tp"
	  }, [_h('ul', [_h('li', {
	    staticStyle: {
	      "margin-right": "18px"
	    }
	  }, [_h('img', {
	    attrs: {
	      "src": "resource/website/images/t1.jpg"
	    }
	  }), "冷库"]), " ", _h('li', {
	    staticStyle: {
	      "margin-right": "18px"
	    }
	  }, [_h('img', {
	    attrs: {
	      "src": "resource/website/images/t2.jpg"
	    }
	  }), "保鲜库"]), " ", _h('li', {
	    staticStyle: {
	      "margin-right": "18px"
	    }
	  }, [_h('img', {
	    attrs: {
	      "src": "resource/website/images/t3.jpg"
	    }
	  }), "分拣中心"]), " ", _h('li', [_h('img', {
	    attrs: {
	      "src": "resource/website/images/t4.jpg"
	    }
	  }), "配送中心"])])])])])
	}]}
	module.exports.render._withStripped = true
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

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('div', {
	    staticClass: "banner2"
	  }), " ", " ", " ", _h('div', {
	    staticClass: "about"
	  }, [_h('div', {
	    staticStyle: {
	      "margin": "0 auto",
	      "height": "44px",
	      "padding-top": "50px",
	      "width": "286px"
	    }
	  }, [_h('img', {
	    attrs: {
	      "src": "resource/website/images/about_bt.jpg"
	    }
	  })]), " ", _h('div', {
	    staticStyle: {
	      "margin": "0 auto",
	      "width": "1052px",
	      "height": "20px"
	    }
	  }, [_h('img', {
	    attrs: {
	      "src": "resource/website/images/fgx.jpg"
	    }
	  })]), " ", _h('div', {
	    staticStyle: {
	      "margin": "10px auto 0px auto",
	      "height": "530px",
	      "width": "1052px",
	      "color": "#272727",
	      "line-height": "30px",
	      "font-size": "14px"
	    }
	  }, ["        深圳市前海食材在线供应链控股有限公司成立于2015年5月，注册资金500万，由深圳市瀚康食品有限公司全资控股。前海食材在线供应链控股有限公司广州分公司也已于2016年6月正式成立。公司的核心团队来自世界五百强企业，具备丰富的电子商务平台运营经验、互联网运作经验。公司专注于发展餐饮商家食材配送，志在打造中国食材供应链互联网化第一品牌。上线以来备受用户好评，获得众多投资人青睐，目前已获得千万级天使投资。\n            ", _h('br'), "        公司旨在通过全面整合食材供应链,解决餐饮商最头疼的食材采购问题，提供全、优、快、省的食材配送服务；归集餐饮商家需求，利用大数据解决食材供应方的滞销浪费问题；同时帮助完善食材行业标准，推进食材生产流通链的透明化，让消费者吃得健康、吃得放心。\n            ", _h('br'), "         公司业务范围涵盖新鲜蔬菜、肉类、冷链冷冻类、调料、副食品、米面粮油等；拥有自己的生鲜仓储系统、物流配送体系；现阶段主要面向深圳市福田、龙华等地区，以中小餐馆为切入点，以50%的增长率迅速拓展市场。目前已为5000多家餐饮商家提供服务。\n        "])])])
	}]}
	module.exports.render._withStripped = true
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

	/* script */
	__vue_exports__ = __webpack_require__(8)

	/* template */
	var __vue_template__ = __webpack_require__(9)
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
/***/ function(module, exports) {

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

	module.exports = {

	    props: {
	        show: {
	            type: Boolean,
	            required: true
	        }
	    },
	    data: function () {
	        return {
	            jobs: [['PHP工程师', '/user/zhaopin/php'], ['总经理助理', '/user/zhaopin/leader'], ['拓展专员/市场推广/销售代表/业务员', '/user/zhaopin/market'], ['仓库管理员', '/user/zhaopin/git'], ['采购专员', '/user/zhaopin/buy']],
	            isActive: 0
	        };
	    },
	    methods: {
	        alertZhao: function () {

	            this.$emit('zhaopin');
	        },
	        closeZhao: function () {
	            this.$emit('zhaopin');
	        },
	        addActive: function (n) {
	            this.isActive = n;
	        }
	    },
	    created: function () {}
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    attrs: {
	      "id": "recu"
	    }
	  }, [_h('div', {
	    staticClass: "banner5"
	  }), " ", " ", " ", _h('div', {
	    staticClass: "_Contact",
	    staticStyle: {
	      "margin": "0px auto",
	      "width": "1052px"
	    }
	  }, [_vm._m(0), " ", _vm._m(1), " ", _h('div', {
	    staticStyle: {
	      "width": "100%",
	      "margin": "10px 0px"
	    }
	  }, [_h('div', {
	    staticStyle: {
	      "text-indent": "50px",
	      "color": "red",
	      "font-weight": "bold",
	      "font-size": "16px",
	      "margin-bottom": "20px"
	    },
	    attrs: {
	      "id": "statement"
	    }
	  }, [_h('a', {
	    staticStyle: {
	      "cursor": "pointer"
	    },
	    attrs: {
	      "name": "long"
	    },
	    on: {
	      "click": _vm.alertZhao
	    }
	  }, ["●    关于不法分子利用我公司名义以招聘事由实施诈骗的声明"])]), " ", _h('div', {
	    staticClass: "job"
	  }, [_h('div', {
	    staticClass: "fl"
	  }, [_h('h3', ["职位列表"]), " ", _h('ul', {
	    attrs: {
	      "id": "ul_nav"
	    }
	  }, [_vm._l((_vm.jobs), function(job, index) {
	    return _h('li', {
	      on: {
	        "click": function($event) {
	          _vm.addActive(index)
	        }
	      }
	    }, [_h('router-link', {
	      class: {
	        current: index == _vm.isActive
	      },
	      attrs: {
	        "to": job[1]
	      }
	    }, [_vm._s(job[0])])])
	  })])]), " ", _h('div', {
	    staticClass: "fr",
	    attrs: {
	      "id": "div_con"
	    }
	  }, [_h('router-view')]), " ", _h('div', {
	    staticClass: "clr"
	  })])])]), " ", " ", _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    staticClass: "mask",
	    attrs: {
	      "id": "mask"
	    }
	  }), " ", _h('div', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.show),
	      expression: "show"
	    }],
	    attrs: {
	      "id": "alert_wrap"
	    }
	  }, [_h('i', {
	    attrs: {
	      "id": "alert_close"
	    },
	    on: {
	      "click": _vm.closeZhao
	    }
	  }), " ", _h('iframe', {
	    staticClass: "statement-alert",
	    attrs: {
	      "id": "statement_alert",
	      "scrolling": "auto",
	      "src": "pages/statement.html"
	    }
	  })])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticStyle: {
	      "margin": "0 auto",
	      "height": "44px",
	      "padding-top": "50px",
	      "width": "358px"
	    }
	  }, [_h('img', {
	    attrs: {
	      "src": "resource/website/images/recruitment_bt.jpg"
	    }
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    staticStyle: {
	      "margin": "0 auto",
	      "width": "1052px",
	      "height": "20px"
	    }
	  }, [_h('img', {
	    attrs: {
	      "src": "resource/website/images/fgx.jpg"
	    }
	  })])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-99c74804", module.exports)
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* script */
	__vue_exports__ = __webpack_require__(11)

	/* template */
	var __vue_template__ = __webpack_require__(12)
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
	__vue_options__.__file = "E:\\vue-spa\\static\\pages\\recu\\php.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-83e3f0e2", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-83e3f0e2", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] php.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 11 */
/***/ function(module, exports) {

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
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	    created: function () {}
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    attrs: {
	      "id": "job_php"
	    }
	  }, [_h('h3', [_h('span', [_h('strong', ["职位名称："]), "PHP工程师"]), "最后更新时间：2016-07-27"]), " ", _h('div', {
	    staticClass: "main_centent"
	  }, [_h('div', {
	    staticClass: "job_tlist"
	  }, [_h('ul', [_h('li', [_h('strong', ["职位月薪："]), "10-20K"]), " ", _h('li', [_h('strong', ["发布日期："]), "2016-07-27"]), " ", _h('li', [_h('strong', ["工作经验："]), "2年左右"]), " ", _h('li', [_h('strong', ["招聘人数："]), "2人"]), " ", _h('li', [_h('strong', ["工作地点："]), "深圳-福田区 "]), " ", _h('li', [_h('strong', ["工作性质："]), "全职"]), " ", _h('li', [_h('strong', ["最低学历："]), "大专"]), " ", _h('li', [_h('strong', ["职位类别："]), "技术开发"])]), " ", _h('div', {
	    staticClass: "clr"
	  })]), " ", _h('div', {
	    staticClass: "tm"
	  }, [_h('strong', ["职位职能"])]), " ", _h('div', {
	    staticClass: "mainContent"
	  }, [_h('p'), " ", _h('p', [_h('span', {
	    staticStyle: {
	      "font-family": "'微软雅黑'",
	      "font-size": "16px"
	    }
	  }, [_h('span', {
	    staticStyle: {
	      "font-size": "14px",
	      "font-family": "'微软雅黑'"
	    }
	  }, [_h('strong', ["岗位职责："])]), " ", _h('br'), " ", _h('span', {
	    staticStyle: {
	      "font-size": "14px",
	      "font-family": "'微软雅黑'"
	    }
	  }, ["1、参与系统开发前期需求分析与设计；"]), " ", _h('br'), " ", _h('span', {
	    staticStyle: {
	      "font-size": "14px",
	      "font-family": "'微软雅黑'"
	    }
	  }, ["2、根据需求执行开发编码工作。"]), " ", _h('br'), " ", _h('span', {
	    staticStyle: {
	      "font-size": "14px",
	      "font-family": "'微软雅黑'"
	    }
	  }, [_h('strong', ["任职要求："])]), " ", _h('br'), " ", _h('span', {
	    staticStyle: {
	      "font-size": "14px",
	      "font-family": "'微软雅黑'"
	    }
	  }, ["1、计算机相关专业优先；"]), " ", _h('br'), " ", _h('span', {
	    staticStyle: {
	      "font-size": "14px",
	      "font-family": "'微软雅黑'"
	    }
	  }, ["2、二年以上PHP开发经验；"]), " ", _h('br'), " ", _h('span', {
	    staticStyle: {
	      "font-size": "14px",
	      "font-family": "'微软雅黑'"
	    }
	  }, ["3、熟练使用CI、ThinkPHP等常用框架；"]), " ", _h('br'), " ", _h('span', {
	    staticStyle: {
	      "font-size": "14px",
	      "font-family": "'微软雅黑'"
	    }
	  }, ["4、熟练使用MySql数据库，熟悉数据库性能优化； "]), " ", _h('br'), " ", _h('span', {
	    staticStyle: {
	      "font-size": "14px",
	      "font-family": "'微软雅黑'"
	    }
	  }, ["5、熟悉html、JavaScript、CSS；"]), " ", _h('br'), " ", _h('span', {
	    staticStyle: {
	      "font-size": "14px",
	      "font-family": "'微软雅黑'"
	    }
	  }, ["6、熟悉使用linux操作系统。"])])]), " ", _h('p', [_h('br'), " ", _h('span', {
	    staticStyle: {
	      "font-family": "SimHei",
	      "font-size": "16px"
	    }
	  }, [_h('span', {
	    staticStyle: {
	      "font-size": "14px",
	      "font-family": "'微软雅黑'"
	    }
	  })])]), " ", _h('p', [_h('br'), " ", _h('span', {
	    staticStyle: {
	      "font-family": "SimHei",
	      "font-size": "16px"
	    }
	  }, [_h('span', {
	    staticStyle: {
	      "font-size": "14px",
	      "font-family": "'微软雅黑'"
	    }
	  })])]), " ", _h('p', [_h('br'), " ", _h('span', {
	    staticStyle: {
	      "font-family": "SimHei",
	      "font-size": "16px"
	    }
	  }, [_h('span', {
	    staticStyle: {
	      "font-size": "14px",
	      "font-family": "'微软雅黑'"
	    }
	  })])]), " ", _h('p', [_h('br'), " ", _h('span', {
	    staticStyle: {
	      "font-family": "SimHei",
	      "font-size": "16px"
	    }
	  }, [_h('span', {
	    staticStyle: {
	      "font-size": "14px",
	      "font-family": "'微软雅黑'"
	    }
	  })])]), " ", _h('p', [_h('br'), " ", _h('span', {
	    staticStyle: {
	      "font-family": "SimHei",
	      "font-size": "16px"
	    }
	  }, [_h('span', {
	    staticStyle: {
	      "font-size": "14px",
	      "font-family": "'微软雅黑'"
	    }
	  })])]), " ", _h('p')]), " ", _h('div', {
	    staticClass: "job_apply"
	  }, [_h('a', {
	    attrs: {
	      "href": "mailto:shicaionline@163.com"
	    }
	  }, ["我要应聘"])]), " ", _h('div', {
	    staticClass: "clr"
	  })])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-83e3f0e2", module.exports)
	  }
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* template */
	var __vue_template__ = __webpack_require__(14)
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
	__vue_options__.__file = "E:\\vue-spa\\static\\pages\\recu\\leader.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-49c98742", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-49c98742", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] leader.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    attrs: {
	      "id": "job_cs"
	    }
	  }, [_h('h3', [_h('span', [_h('strong', ["职位名称："]), "总经理助理"]), "最后更新时间：2016-07-27"]), " ", _h('div', {
	    staticClass: "main_centent"
	  }, [_h('div', {
	    staticClass: "job_tlist"
	  }, [_h('ul', [_h('li', [_h('strong', ["职位月薪："]), "6-8K"]), " ", _h('li', [_h('strong', ["发布日期："]), "2016-07-27"]), " ", _h('li', [_h('strong', ["工作经验："]), "1年以上"]), " ", _h('li', [_h('strong', ["招聘人数："]), "1人"]), " ", _h('li', [_h('strong', ["工作地点："]), "深圳-福田区 "]), " ", _h('li', [_h('strong', ["工作性质："]), "全职"]), " ", _h('li', [_h('strong', ["最低学历："]), "本科"]), " ", _h('li', [_h('strong', ["职位类别："]), "总裁助理/总经理助理"])]), " ", _h('div', {
	    staticClass: "clr"
	  })]), " ", _h('div', {
	    staticClass: "tm"
	  }, [_h('strong', ["职位职能"])]), " ", _h('div', {
	    staticClass: "mainContent"
	  }, [_h('p'), " ", _h('p', [_h('span', {
	    staticStyle: {
	      "font-family": "SimHei",
	      "font-size": "16px"
	    }
	  }, [_h('span', {
	    staticStyle: {
	      "font-family": "'微软雅黑'",
	      "font-size": "14px"
	    }
	  }, [_h('strong', ["岗位职责："]), " ", _h('br'), "\n                                    1、协助经理处理公司日常运作事务以及各职能部门的协调、管理工作；", _h('br'), "\n                                    2、协助经理做好各项管理工作的布置、实施、检查、督促以及落实执行；", _h('br'), "\n                                    3、协助经理进行内、外部沟通，及时准确地传达信息和要求；", _h('br'), "\n                                    4、协助经理对公司业务数据进行收集统计、跟踪和分析，提供可参考的分析数据报告；", _h('br'), "\n                                    5、完成经理交代的其他事务性工作。\n                                    ", _h('br'), " ", _h('strong', ["任职要求："]), _h('br'), "\n                                    1、本科及以上学历，男女不限，24-28岁；", _h('br'), "\n                                    2、有互联网公司运营管理经验优先考虑,优秀应届毕业生也可考虑；", _h('br'), "\n                                    3、精通使用excel表格处理数据，对数据敏感，逻辑思维清晰，具有较强的数据能力和策划能力；", _h('br'), "\n                                    4、良好的职业形象，卓越的表达沟通能力、协调能力、适应能力和应变能力；", _h('br'), "\n                                    5、良好的心理素质，工作态度认真、积极主动、责任心强、仔细认真，能承受一定工作压力。", _h('br')]), " ", _h('span', {
	    staticStyle: {
	      "font-family": "'微软雅黑'",
	      "font-size": "14px"
	    }
	  })])]), " ", _h('p', [_h('br')]), " ", _h('p', [_h('br')]), " ", _h('p', [_h('br')]), " ", _h('p', [_h('br')]), " ", _h('p', [_h('br')]), " ", _h('p')]), " ", _h('div', {
	    staticClass: "job_apply"
	  }, [_h('a', {
	    attrs: {
	      "href": "mailto:shicaionline@163.com"
	    }
	  }, ["我要应聘"])]), " ", _h('div', {
	    staticClass: "clr"
	  })])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-49c98742", module.exports)
	  }
	}

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* template */
	var __vue_template__ = __webpack_require__(16)
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
	__vue_options__.__file = "E:\\vue-spa\\static\\pages\\recu\\market.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-455d04f5", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-455d04f5", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] market.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    attrs: {
	      "id": "job_run"
	    }
	  }, [_h('h3', [_h('span', [_h('strong', ["职位名称："]), "拓展专员/市场推广/销售代表/业务员"]), "最后更新时间：2016-07-27"]), " ", _h('div', {
	    staticClass: "main_centent"
	  }, [_h('div', {
	    staticClass: "job_tlist"
	  }, [_h('ul', [_h('li', [_h('strong', ["职位月薪："]), "6-8k"]), " ", _h('li', [_h('strong', ["发布日期："]), "2016-07-27"]), " ", _h('li', [_h('strong', ["工作经验："]), "不限"]), " ", _h('li', [_h('strong', ["招聘人数："]), "若干"]), " ", _h('li', [_h('strong', ["工作地点："]), "深圳-福田区 "]), " ", _h('li', [_h('strong', ["工作性质："]), "全职"]), " ", _h('li', [_h('strong', ["最低学历："]), "不限"]), " ", _h('li', [_h('strong', ["职位类别："]), "销售代表"])]), " ", _h('div', {
	    staticClass: "clr"
	  })]), " ", _h('div', {
	    staticClass: "tm"
	  }, [_h('strong', ["职位职能"])]), " ", _h('div', {
	    staticClass: "mainContent"
	  }, [_h('p'), " ", _h('p', [_h('span', {
	    staticStyle: {
	      "font-family": "SimHei",
	      "font-size": "16px"
	    }
	  }, [_h('span', {
	    staticStyle: {
	      "font-family": "'微软雅黑'",
	      "font-size": "14px"
	    }
	  }, [_h('strong', ["岗位职责："]), " ", _h('br'), "\n                                    1、负责公司产品的销售及推广；", _h('br'), "\n                                    2、协助餐饮商户完成加盟以及后期销售工作；", _h('br'), "\n                                    3、通过各种途径开发新餐饮商户，并维护区域现有加盟餐饮商户；", _h('br'), " 4、采用电话、上门拜访等方式接触区域内餐厅相关负责人并最终按照公司的要求达成签约目的；", _h('br'), "\n                                    5、管理维护客户关系以及客户间的长期战略合作计划；", _h('br'), "\n                                    6、负责辖区市场信息的收集及竞争对手的分析。", _h('br'), " ", _h('strong', ["任职要求："]), _h('br'), "\n                                    1、具备优秀的渠道开发和市场开拓能力；", _h('br'), "\n                                    2、有强烈的事业心和责任感，具备良好的人际交往、社会活动能力及公关谈判能力；", _h('br'), "\n                                    3、对工作有激情、执着、敬业, 思维清晰、活跃；", _h('br'), "\n                                    4、较好的谈吐，形象好，气质佳；", _h('br'), "\n                                    5、具有良好的团队协作精神，良好的协调、沟通和把握全局的能力；", _h('br'), "\n                                    6、思维敏锐，极富创新精神，环境适应能力强，抗压力能力强；", _h('br'), "\n                                    7、有销售工作经验者优先，欢迎优秀的应届毕业生加入。", _h('br')]), " ", _h('span', {
	    staticStyle: {
	      "font-family": "'微软雅黑'",
	      "font-size": "14px"
	    }
	  })]), " ", _h('span'), " ", _h('span', {
	    staticStyle: {
	      "font-family": "SimHei",
	      "font-size": "16px"
	    }
	  }, ["薪资待遇：3k—6K/月，6k—8k/月,8k—15k/月，多劳多得，另外有多重高额奖励机制（业绩奖、勤劳奖、年终奖、贡献奖、优秀奖），每年4次评级晋升加薪机会，欢迎勇于挑战的精英加入"])]), " ", _h('p', [_h('br')]), " ", _h('p', [_h('br')]), " ", _h('p', [_h('br')]), " ", _h('p', [_h('br')]), " ", _h('p', [_h('br')]), " ", _h('p')]), " ", _h('div', {
	    staticClass: "job_apply"
	  }, [_h('a', {
	    attrs: {
	      "href": "mailto:shicaionline@163.com"
	    }
	  }, ["我要应聘"])]), " ", _h('div', {
	    staticClass: "clr"
	  })])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-455d04f5", module.exports)
	  }
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* template */
	var __vue_template__ = __webpack_require__(18)
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
	__vue_options__.__file = "E:\\vue-spa\\static\\pages\\recu\\git.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3839ae2e", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3839ae2e", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] git.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    attrs: {
	      "id": "job_cpp"
	    }
	  }, [_h('h3', [_h('span', [_h('strong', ["职位名称："]), "仓库管理员"]), "最后更新时间：2016-07-27"]), " ", _h('div', {
	    staticClass: "main_centent"
	  }, [_h('div', {
	    staticClass: "job_tlist"
	  }, [_h('ul', [_h('li', [_h('strong', ["职位月薪："]), "3.5-5K"]), " ", _h('li', [_h('strong', ["发布日期："]), "2016-07-27"]), " ", _h('li', [_h('strong', ["工作经验："]), "1年以上"]), " ", _h('li', [_h('strong', ["招聘人数："]), "2人"]), " ", _h('li', [_h('strong', ["工作地点："]), "深圳-龙岗区 "]), " ", _h('li', [_h('strong', ["工作性质："]), "全职"]), " ", _h('li', [_h('strong', ["最低学历："]), "不限"]), " ", _h('li', [_h('strong', ["职位类别："]), "仓库/物料管理员"])]), " ", _h('div', {
	    staticClass: "clr"
	  })]), " ", _h('div', {
	    staticClass: "tm"
	  }, [_h('strong', ["职位职能"])]), " ", _h('div', {
	    staticClass: "mainContent"
	  }, [_h('p'), " ", _h('p', [_h('span', {
	    staticStyle: {
	      "font-family": "SimHei",
	      "font-size": "16px"
	    }
	  }, [_h('span', {
	    staticStyle: {
	      "font-family": "'微软雅黑'",
	      "font-size": "14px"
	    }
	  }, [_h('strong', ["岗位职责："]), " ", _h('br'), "\n                                    1、负责原材料商品进、销、存的工作；", _h('br'), "\n                                    2、能合理安排库容，商品有规律地分类摆放整齐，做到商品先进先出；", _h('br'), "\n                                    3、能保持良好的仓库环境，能及时对残次、近期商品跟踪；", _h('br'), "\n                                    4、准确统计库存，做到账物卡相符；", _h('br'), "\n                                    5、能完成上级领导临时交待的任务。", _h('br'), " ", _h('br'), " ", _h('strong', ["任职要求："]), _h('br'), "\n                                    1、有生鲜类快速消费品或食品类仓库工作经验者；", _h('br'), "\n                                    2、熟悉仓库进销存流程和进销存软件的操作；", _h('br'), "\n                                    3、吃苦耐劳，良好沟通能力和认真负责的工作态度；", _h('br'), "\n                                    4、有仓库工作经验，有超市仓库工作经验优先；", _h('br'), "\n                                    5、能接受夜班，上班时间：21:00—6:00，包住宿，年龄22-35岁。", _h('br')]), " ", _h('span', {
	    staticStyle: {
	      "font-family": "'微软雅黑'",
	      "font-size": "14px"
	    }
	  })])]), " ", _h('p', [_h('br')]), " ", _h('p', [_h('br')]), " ", _h('p', [_h('br')]), " ", _h('p', [_h('br')]), " ", _h('p', [_h('br')]), " ", _h('p')]), " ", _h('div', {
	    staticClass: "job_apply"
	  }, [_h('a', {
	    attrs: {
	      "href": "mailto:shicaionline@163.com"
	    }
	  }, ["我要应聘"])]), " ", _h('div', {
	    staticClass: "clr"
	  })])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3839ae2e", module.exports)
	  }
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* template */
	var __vue_template__ = __webpack_require__(20)
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
	__vue_options__.__file = "E:\\vue-spa\\static\\pages\\recu\\buy.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1fb6c4c6", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1fb6c4c6", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] buy.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', {
	    attrs: {
	      "id": "job_ui"
	    }
	  }, [_h('h3', [_h('span', [_h('strong', ["职位名称："]), "采购专员"]), "最后更新时间：2016-07-27"]), " ", _h('div', {
	    staticClass: "main_centent"
	  }, [_h('div', {
	    staticClass: "job_tlist"
	  }, [_h('ul', [_h('li', [_h('strong', ["职位月薪："]), "4.5-6K"]), " ", _h('li', [_h('strong', ["发布日期："]), "2016-07-27"]), " ", _h('li', [_h('strong', ["工作经验："]), "1-3年"]), " ", _h('li', [_h('strong', ["招聘人数："]), "2人"]), " ", _h('li', [_h('strong', ["工作地点："]), "深圳-龙岗区"]), " ", _h('li', [_h('strong', ["工作性质："]), "全职"]), " ", _h('li', [_h('strong', ["最低学历："]), "不限"]), " ", _h('li', [_h('strong', ["职位类别："]), "采购专员/助理"])]), " ", _h('div', {
	    staticClass: "clr"
	  })]), " ", _h('div', {
	    staticClass: "tm"
	  }, [_h('strong', ["职位职能"])]), " ", _h('div', {
	    staticClass: "mainContent"
	  }, [_h('p'), " ", _h('p', [_h('span', {
	    staticStyle: {
	      "font-family": "SimHei",
	      "font-size": "16px"
	    }
	  }, [_h('span', {
	    staticStyle: {
	      "font-family": "'微软雅黑'",
	      "font-size": "14px"
	    }
	  }, [_h('strong', ["岗位职责："]), " ", _h('br'), "\n                                    1、协助采购主管进行市场调查，分析价格变动，不断开发更适合的供应商；", _h('br'), "\n                                    2、严把采购质量关，选择样品供领导审核定样，对购进商品均须附有质保书或当场(委托)检验（部份农产品除外），协助有关部门妥善解决使用过程中出现的问题；", _h('br'), "\n                                    3、按照公司规定的采购流程进行采购操作，填写有关采购表格，提交采购分析和总结报告；", _h('br'), "\n                                    4、按时按质按量完成采购供应计划指标，积极开拓货源市场，货(价)比三家，选择物美价平的商品材料，尽量压低采购成本，完成下达的降低采购成本的责任指标；", _h('br'), "\n                                    5、对原料及商品进行质量控制，其质量应于需要要求一致，如质量出现问题应及时采取纠正措施；", _h('br'), "\n                                    6、完成采购部主管临时交办的其他任务。", _h('br'), " ", _h('br'), " ", _h('strong', ["任职要求："]), _h('br'), "\n                                    1、热爱互联网、热爱电子商务生鲜B2B行业；", _h('br'), "\n                                    2、有3年及以上生鲜采购及相关行业工作经验；", _h('br'), "\n                                    3、对农产品行业有浓厚的兴趣，致力于打通农产品的供应链；", _h('br'), "\n                                    4、接受夜班，持有驾驶证优先录用。", _h('br')]), " ", _h('span', {
	    staticStyle: {
	      "font-family": "'微软雅黑'",
	      "font-size": "14px"
	    }
	  })])]), " ", _h('p', [_h('br')]), " ", _h('p', [_h('br')]), " ", _h('p', [_h('br')]), " ", _h('p', [_h('br')]), " ", _h('p', [_h('br')]), " ", _h('p')]), " ", _h('div', {
	    staticClass: "job_apply"
	  }, [_h('a', {
	    attrs: {
	      "href": "mailto:shicaionline@163.com"
	    }
	  }, ["我要应聘"])]), " ", _h('div', {
	    staticClass: "clr"
	  })])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1fb6c4c6", module.exports)
	  }
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* template */
	var __vue_template__ = __webpack_require__(22)
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
	__vue_options__.__file = "E:\\vue-spa\\static\\pages\\contact.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-8d7974fc", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-8d7974fc", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] contact.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;
	  return _h('div', [_h('div', {
	    staticClass: "banner4"
	  }), " ", " ", " ", _h('div', {
	    staticClass: "Contact"
	  }, [_h('div', {
	    staticStyle: {
	      "margin": "0 auto",
	      "height": "44px",
	      "padding-top": "50px",
	      "width": "358px"
	    }
	  }, [_h('img', {
	    attrs: {
	      "src": "resource/website/images/contact_bt.jpg"
	    }
	  })]), " ", _h('div', {
	    staticStyle: {
	      "margin": "0 auto",
	      "width": "1052px",
	      "height": "20px"
	    }
	  }, [_h('img', {
	    attrs: {
	      "src": "resource/website/images/fgx.jpg"
	    }
	  })]), " ", _h('div', {
	    staticStyle: {
	      "margin": "0 auto",
	      "width": "1052px",
	      "height": "385px"
	    }
	  }, [_h('img', {
	    attrs: {
	      "src": "resource/website/images/map.jpg"
	    }
	  })]), " ", _h('div', {
	    staticStyle: {
	      "margin": "10px auto 0px auto",
	      "height": "130px",
	      "width": "1052px",
	      "color": "#666",
	      "line-height": "30px",
	      "font-size": "14px"
	    }
	  }, ["\n            总部：深圳市福田区益田路3008号皇都广场C座3612、2001室\n            ", _h('br'), " 电话：0755-83611883     传真：0755-83612199\n            ", _h('br'), " 邮编：518048     电子邮件：shicaionline@163.com\n            ", _h('br')])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-8d7974fc", module.exports)
	  }
	}

/***/ }
]);