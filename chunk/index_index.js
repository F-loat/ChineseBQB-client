(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"27":function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return o});var r=function parseTypes(e){var t=e&&e.match(/\|.*已收录.*\|/g);if(!t)return[];var n=/.*master\/(.*)\/(.*)'.*已收录(\d*)张/;return t.map(function(e){var t=e.match(n);if(!t)return{"num":0};var r=t[1],o=r.replace(/^(\w)*/,"").replace(/BQB$/,""),a=t[2];return{"num":Number(t[3]),"name":o,"link":"/pages/list/index?name="+r+"&title="+o,"imgSrc":"https://raw.githubusercontent.com/zhaoolee/ChineseBQB/master/"+r+"/"+a}}).filter(function(e){return!!e.num}).sort(function(e,t){return t.num-e.num})},o=function parseImages(e){var t=e&&e.match(/\!\[.*\]/g);if(!t)return[];var n=/\!\[(.*master\/.*\/(.*))\]/;return t.map(function(e){var t=e.match(n);return t?{"src":t[1],"name":t[2].replace(/\..*$/,"")}:{"src":""}}).filter(function(e){return!!e.src})}},"28":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var r=n(1),o=n(2),a=n(99),i=n(100),c=(n(29),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var s=function(e){function Index(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,o["a"].Component),c(Index,[{"key":"render","value":function render(){var e=this.props,t=e.src,n=e.onClick;return t?r.k.createElement(a.a,{"className":"bqb-image","mode":"aspectFill","lazyLoad":!0,"src":t,"onClick":n}):r.k.createElement(i.a,{"className":"bqb-image","onClick":n})}}]),Index}();s.defaultProps={"onClick":function onClick(){}}},"29":function(e,t,n){},"76":function(e,t,n){},"98":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return w});var r=n(1),o=n(19),a=n(101),i=n(80),c=n(102),s=n(106),u=n(2),l=n(100),p=n(103),f=n(111),h=n(104),m=n(105),d=n(27),y=n(28),b=(n(76),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()),v=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0};function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var a=t[r](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}var w=function(e){function Index(e){var t=this;!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var n=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).call(this,e));return n.config={"navigationBarTitleText":"中国表情包","enablePullDownRefresh":!0},n.fetchTypes=_asyncToGenerator(regeneratorRuntime.mark(function _callee(){var e,r;return regeneratorRuntime.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return Object(o.b)({"title":"加载中"}),t.next=3,Object(a.a)({"url":"https://proxy.youngon.com.cn/github/raw/zhaoolee/ChineseBQB/master/README.md","dataType":"text","responseType":"text"});case 3:e=t.sent,r=e.data,Object(i.b)({"key":"readme","data":r}),n.types=Object(d.b)(r),n.showMoreTypes(!0),Object(o.a)();case 9:case"end":return t.stop()}},_callee,t)})),n.showMoreTypes=function(e){var t=n.state.types,r=n.types.splice(0,20);e?n.setState({"types":r,"loaded":!1}):n.setState({"types":t.concat(r)})},n.state={"types":[],"loaded":!1},n}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,u["a"].Component),b(Index,[{"key":"componentDidMount","value":function componentDidMount(){this.fetchTypes()}},{"key":"onPullDownRefresh","value":function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function _callee2(){return regeneratorRuntime.wrap(function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchTypes();case 2:Object(c.a)();case 3:case"end":return e.stop()}},_callee2,this)}));return function onPullDownRefresh(){return e.apply(this,arguments)}}()},{"key":"onReachBottom","value":function onReachBottom(){this.types.length?this.showMoreTypes():this.setState({"loaded":!0})}},{"key":"onShareAppMessage","value":function onShareAppMessage(){return{"title":"中国表情包"}}},{"key":"render","value":function render(){var e=this,t=this.state,n=t.types,o=void 0===n?[]:n,a=t.loaded;if(!o.length){var i=r.k.createElement(l.a,null);return r.k.createElement(p.a,{"onRefresh":this.onPullDownRefresh&&this.onPullDownRefresh.bind(this),"ref":function ref(t){t&&(e.pullDownRefreshRef=t)}},i)}var c=r.k.createElement(l.a,{"className":"list"},o.map(function(e){return r.k.createElement(f.a,{"className":"item type-item","key":e.imgSrc,"url":e.link},r.k.createElement(h.a,{"className":"type-num"},e.num,"张"),r.k.createElement(y.a,{"src":e.imgSrc}),r.k.createElement(h.a,{"className":"item-name"},e.name||"未命名"))}),a&&r.k.createElement(f.a,{"className":"item","url":"/pages/about/index"},r.k.createElement(h.a,{"className":"about-icon"},"关于"),r.k.createElement(h.a,{"className":"item-name"},"关于")),r.k.createElement(m.a,{"className":"flat-btn contact-btn","open-type":"contact"},"+"));return r.k.createElement(p.a,{"onRefresh":this.onPullDownRefresh&&this.onPullDownRefresh.bind(this),"ref":function ref(t){t&&(e.pullDownRefreshRef=t)}},c)}},{"key":"componentDidShow","value":function componentDidShow(){v(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this)&&v(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this).call(this),this._offReachBottom=Object(s.a)({"callback":this.onReachBottom,"ctx":this,"onReachBottomDistance":void 0}),this.pullDownRefreshRef&&this.pullDownRefreshRef.bindEvent()}},{"key":"componentDidHide","value":function componentDidHide(){v(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this)&&v(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this).call(this),this._offReachBottom&&this._offReachBottom(),this.pullDownRefreshRef&&this.pullDownRefreshRef.unbindEvent()}}]),Index}()}}]);