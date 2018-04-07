(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["FakeVue"] = factory();
	else
		root["FakeVue"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1)['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(2);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _index2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = FakeVue;

	var _index = __webpack_require__(3);

	var _index2 = __webpack_require__(5);

	var _index3 = _interopRequireDefault(_index2);

	var _watcher = __webpack_require__(6);

	var _watcher2 = _interopRequireDefault(_watcher);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var uid = 0;

	function FakeVue(options) {
	    this._uid = uid++;
	    this.$options = options;
	    this.$methods = options.methods;
	    this._watch = options.watch;
	    this._data = options.data;
	    this._el = document.querySelector(options.el);
	    this._ob = (0, _index.observe)(options.data); //监听对象的每个属性
	    this._proxy();
	    new _index3.default(options.el, this); //解析dom, 订阅watcher并触发首次页面更新
	}

	//代理，把数据和函数代理到vm上
	FakeVue.prototype._proxy = function () {
	    var _this = this;

	    this._data && Object.keys(this._data).forEach(function (key) {
	        _this._dataProxy(key);
	    });
	    this.$methods && Object.keys(this.$methods).forEach(function (fnName) {
	        _this[fnName] = _this.$methods[fnName];
	    });
	    this._watch && Object.keys(this._watch).forEach(function (watchExp) {
	        _this.$watch(watchExp, _this._watch[watchExp]);
	    }); //必须在observe后调用
	};

	//将_data中的数据代理到vm上，方便this直接调用
	//vm.prop === vm._data.prop
	FakeVue.prototype._dataProxy = function (key) {
	    var self = this;
	    Object.defineProperty(self, key, {
	        configurable: true,
	        enumerable: true,
	        get: function proxyGetter() {
	            return self._data[key];
	        },
	        set: function proxySetter(val) {
	            self._data[key] = val;
	        }
	    });
	};

	FakeVue.prototype.$watch = function (exp, cb) {
	    new _watcher2.default(this, exp, cb);
	};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	exports.Observer = Observer;
	exports.observe = observe;

	var _dep = __webpack_require__(4);

	var _dep2 = _interopRequireDefault(_dep);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Observer(data) {
	    this.data = data;
	    this.observeAll(data);
	}

	function observe(data) {
	    if (!data || (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
	        return;
	    }
	    return new Observer(data);
	}

	/**
	 * 为对象的属性定义get和set具体方法，实现属性响应
	 */
	Observer.prototype.defineReactive = function (data, key, val) {
	    var dep = new _dep2.default(); //新增一个订阅中心
	    Object.defineProperty(data, key, {
	        enumerable: true,
	        configurable: true,
	        get: function get() {
	            if (_dep2.default.target) {
	                //如果当前存在一个target watcher
	                dep.depend(); //则将这个dep实例加入到target watcher中
	            }
	            return val;
	        },
	        set: function set(newVal) {
	            if (newVal === val) {
	                return;
	            }
	            val = newVal;
	            dep.notify(); //触发所有已订阅的更新
	        }
	    });
	};

	/**
	 * 遍历data中的每个属性,将其定义为响应式属性
	 */
	Observer.prototype.observeAll = function (data) {
	    var _this = this;

	    if (!data || (typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
	        throw new Error('vm is not a object');
	    }
	    Object.keys(data).forEach(function (key) {
	        _this.defineReactive(data, key, data[key]);
	    });
	};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = Dep;
	var uid = 0;

	/**
	 * 订阅中心
	 */
	function Dep() {
	  this.id = uid++;
	  this.subs = [];
	}

	/**
	 * 在运行时，每次只有一个目标订阅者watcher
	 */
	Dep.target = null;

	/**
	 * 增加一个订阅者watcher
	 */
	Dep.prototype.addSub = function (sub) {
	  this.subs.push(sub);
	};

	/**
	 * 把订阅中心dep传入到target watcher中，比较depIds后再判定时候增加订阅
	 */
	Dep.prototype.depend = function () {
	  Dep.target.addDep(this);
	};

	/**
	 * 遍历触发已订阅的更新
	 */
	Dep.prototype.notify = function () {
	  this.subs.forEach(function (sub) {
	    sub.update(); //触发watcher的update方法，进行数据更新
	  });
	};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = Compiler;

	var _watcher = __webpack_require__(6);

	var _watcher2 = _interopRequireDefault(_watcher);

	var _updater = __webpack_require__(7);

	var _updater2 = _interopRequireDefault(_updater);

	var _util = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Compiler(el, vm, watcher) {
	    this.$vm = vm;
	    this.$el = document.querySelector(el);
	    this.$watcher = watcher;

	    if (this.$el) {
	        this._initCompile(this.$el);
	    }
	}

	Compiler.prototype._initCompile = function (el) {
	    var _this = this;

	    var childNodes = el.childNodes || [];

	    //循环遍历子节点
	    (0, _util.toRealArray)(childNodes).forEach(function (node) {
	        var textContent = node.textContent,
	            attributes = node.attributes;

	        if ((0, _util.isTextNode)(node)) {
	            if ((0, _util.trim)(textContent)) {
	                _this._compileTextContent(node, (0, _util.trim)(textContent));
	            }
	        }

	        if ((0, _util.isElementNode)(node)) {
	            if (attributes) {
	                _this._compileAttributes(node, attributes);
	            }
	            _this._initCompile(node);
	        }
	    });
	};

	Compiler.prototype._compileTextContent = function (node, textContent) {
	    var reg = /\{\{(.*)\}\}/;

	    if (reg.test(textContent)) {
	        var expOrFn = RegExp.$1;
	        bindWatcher(node, this.$vm, expOrFn, _updater2.default.text);
	    }
	};

	Compiler.prototype._compileAttributes = function (node, attributes) {
	    var _this2 = this;

	    (0, _util.toRealArray)(attributes).forEach(function (attr) {
	        var name = attr.name,
	            value = attr.value,
	            dirReg = /^fv\-(.*)$/,
	            onReg = /^@(.*)$/;

	        if (dirReg.test(name)) {
	            //指令
	            var dir = RegExp.$1;
	            var expOrFn = value;

	            Dirs[dir](node, _this2.$vm, expOrFn);
	        }

	        if (onReg.test(name)) {
	            //事件
	            var eventName = RegExp.$1;
	            var _expOrFn = value;

	            bindEventHandler(node, eventName, _this2.$vm, _expOrFn);
	        }
	    });
	};

	//指令集合，如fv-model, fv-show
	var Dirs = {
	    model: function model(node, vm, expOrFn) {
	        bindWatcher(node, vm, expOrFn, _updater2.default.model);

	        var value = getValue(vm, expOrFn);
	        node.addEventListener('input', function (event) {
	            var newValue = event.target.value;
	            if (value === newValue) {
	                return;
	            }
	            setValue(vm, expOrFn, newValue);
	            value = newValue;
	        });
	    },
	    show: function show(node, vm, expOrFn) {
	        bindWatcher(node, vm, expOrFn, _updater2.default.show);
	    }
	};

	//dom和watcher关联
	function bindWatcher(node, vm, expOrFn, updater) {
	    updater(node, getValue(vm, expOrFn)); //触发首次数据替换
	    new _watcher2.default(vm, expOrFn, function (val) {
	        //为其设置相应的watcher
	        updater(node, val);
	    });
	}

	//为node绑定事件
	function bindEventHandler(node, eventName, vm, expOrFn) {
	    var fn = vm.$methods[expOrFn];
	    node.addEventListener(eventName, fn.bind(vm));
	}

	function getValue(vm, expOrFn) {
	    return vm.$options.data[expOrFn];
	}

	function setValue(vm, expOrFn, value) {
	    vm.$options.data[expOrFn] = value;
	}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = Watcher;

	var _dep = __webpack_require__(4);

	var _dep2 = _interopRequireDefault(_dep);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function Watcher(vm, exp, cb) {
	    this.vm = vm;
	    this.exp = exp; //compiler中解析到的表达式，如{{text}}中text
	    this.cb = cb; //数据更新回调函数
	    this.depIds = {}; //依赖对象id，防止重复
	    this.value = this.get();
	}

	/**
	 * 获取vm中对应exp的值
	 */
	Watcher.prototype.get = function () {
	    _dep2.default.target = this;
	    // observer中已经定义了对象属性的get，这里因为已经设置过了一次代理
	    // 等同于访问this.vm.$options.data[this.exp]的值
	    var value = this.vm[this.exp]; //此处触发了observer中声明的get
	    _dep2.default.target = null;
	    return value;
	};

	/**
	 * 更新数据
	 */
	Watcher.prototype.update = function () {
	    var val = this.get();
	    var oldVal = this.value;
	    if (val !== oldVal) {
	        this.value = val;
	        this.cb.call(this.vm, val);
	    }
	};

	/**
	 * 为订阅中心dep增加新的watcher订阅者
	 */
	Watcher.prototype.addDep = function (dep) {
	    //Observer中每定义一个属性，就会创建一个dep实例，属性和dep实例是一一对应的
	    //假如当前watcher的depIds中不存在该dep的id，则说明该属性是新属性，需要加入该watcher订阅者
	    //通过depIds保证了每个watcher只会添加进每个属性的subs订阅数组中一次，确保唯一性
	    if (!this.depIds.hasOwnProperty(dep.id)) {
	        dep.addSub(this);
	        this.depIds[dep.id] = dep;
	    }
	};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    text: function text(node, value) {
	        var reg = /\{\{(.*)\}\}/;
	        if (reg.test(value)) {
	            node.textContent = node.textContent.replace(reg, value);
	        } else {
	            node.textContent = value;
	        }
	    },
	    model: function model(node, value) {
	        node.value = value;
	    },
	    show: function show(node, value) {
	        if (!value) {
	            node.style.visibility = 'hidden';
	        } else {
	            node.style.visibility = 'visible';
	        }
	    }
	};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dom = __webpack_require__(9);

	Object.keys(_dom).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _dom[key];
	    }
	  });
	});

	var _lang = __webpack_require__(10);

	Object.keys(_lang).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _lang[key];
	    }
	  });
	});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.trimNodes = trimNodes;
	exports.isTextNode = isTextNode;
	exports.isElementNode = isElementNode;

	var _lang = __webpack_require__(10);

	function trimNodes(nodes) {
	    nodes = (0, _lang.toRealArray)(nodes);

	    return nodes.filter(function (node) {
	        return node.nodeType === 1;
	    });
	}

	function isTextNode(node) {
	    return node.nodeType === 3;
	}

	function isElementNode(node) {
	    return node.nodeType === 1;
	}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.trim = trim;
	exports.toRealArray = toRealArray;
	function trim(str) {
	    return str.replace(/\s/g, '');
	}

	function toRealArray(nodes) {
	    return [].slice.call(nodes);
	}

/***/ })
/******/ ])
});
;