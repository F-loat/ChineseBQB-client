(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"113":function(e,t,n){},"24":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var r=n(1),a=n(20),o=n(2),i=n(125),c=n(135),u=n(138),s=n(136),l=n(137),p=n(31),f=(n(113),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}),g=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),m=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(n):void 0};var h=function(e){function SettingPage(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,SettingPage);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(SettingPage.__proto__||Object.getPrototypeOf(SettingPage)).call(this,e));return t.config={"navigationBarTitleText":"设置"},t.updateSetting=function(e){if(e){var n=t.state.setting;Object(a.d)("setting",n)}else t.setState({"setting":Object(p.a)()})},t.handleSettingChange=function(e,n){var r=t.state.setting;t.setState({"setting":f({},r,function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},e,n))},function(){return t.updateSetting(!0)})},t.state={"setting":Object(p.a)()},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(SettingPage,o["a"].Component),g(SettingPage,[{"key":"componentDidShow","value":function componentDidShow(){this.updateSetting()}},{"key":"render","value":function render(){var e=this,t=["zhaoolee/ChineseBQB","getActivity/EmojiPackage"],n=this.state.setting,a=n.repository,o=n.perLineBQB,p=n.showBQBTitle;return r.l.createElement(i.a,{"className":"setting"},r.l.createElement(u.a,null,r.l.createElement(i.a,{"className":"form-item"},r.l.createElement(c.a,{"value":t.indexOf(a),"mode":"selector","range":t,"onChange":function onChange(n){var r=n.detail;return e.handleSettingChange("repository",t[r.value])}},r.l.createElement(i.a,{"className":"form-item-title"},"表情包源：",a))),r.l.createElement(i.a,{"className":"form-item"},r.l.createElement(i.a,{"className":"form-item-title"},"每行图片数量"),r.l.createElement(s.a,{"min":1,"max":6,"activeColor":"#000","showValue":!0,"value":o,"onChange":function onChange(t){var n=t.value;return e.handleSettingChange("perLineBQB",n)}})),r.l.createElement(l.a,{"title":"展示图片标题","color":"#000","checked":p,"onChange":function onChange(t){return e.handleSettingChange("showBQBTitle",t)}})))}},{"key":"componentDidMount","value":function componentDidMount(){m(SettingPage.prototype.__proto__||Object.getPrototypeOf(SettingPage.prototype),"componentDidMount",this)&&m(SettingPage.prototype.__proto__||Object.getPrototypeOf(SettingPage.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){m(SettingPage.prototype.__proto__||Object.getPrototypeOf(SettingPage.prototype),"componentDidHide",this)&&m(SettingPage.prototype.__proto__||Object.getPrototypeOf(SettingPage.prototype),"componentDidHide",this).call(this)}}]),SettingPage}()},"31":function(e,t,n){"use strict";var r=n(20),a=n(6),o=n.n(a),i=n(21),c=n(124);function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,a){try{var o=t[r](a),i=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}var u,s,l=function smartLoading(e,t){return Object(i.b)({"title":e}),i.a},p=(u=_asyncToGenerator(o.a.mark(function _callee(e){var t,n,a,i;return o.a.wrap(function _callee$(o){for(;;)switch(o.prev=o.next){case 0:if(t=(e.method||"GET")+" "+e.url,n=Object(r.b)(t),a=l("加载中"),i=Object(c.a)(e).then(function(e){var n=e.data;return Object(r.c)({"key":t,"data":n}),a(),n}),o.t0=n,o.t0){o.next=9;break}return o.next=8,i;case 8:o.t0=o.sent;case 9:return o.abrupt("return",o.t0);case 10:case"end":return o.stop()}},_callee,void 0)})),function requestWithCache(e){return u.apply(this,arguments)}),f=(s=_asyncToGenerator(o.a.mark(function _callee2(e){var t,n,r;return o.a.wrap(function _callee2$(a){for(;;)switch(a.prev=a.next){case 0:return t=l("加载中"),a.next=3,Object(c.a)(e);case 3:return n=a.sent,r=n.data,t(),a.abrupt("return",r);case 7:case"end":return a.stop()}},_callee2,void 0)})),function requestWithoutCache(e){return s.apply(this,arguments)}),g=function request(e){return!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?p(e):f(e)};n.d(t,"c",function(){return h}),n.d(t,"b",function(){return d}),n.d(t,"a",function(){return v}),n.d(t,"d",function(){return g});var m=function getImageSrc(e,t){return"https://proxy.youngon.com.cn/github/raw/"+t+"/master/"+e},h=function parseTypes(e,t){return"string"==typeof e?function parseTextTypes(e,t){var n=e&&e.match(/\|.*已收录.*\|/g);if(!n)return[];var r=/.*master\/(.*?)\/(.*?) .*已收录(\d*)张/;return n.map(function(e){var n=e.match(r);if(!n)return{"name":"未命名","link":"","imgNum":0,"imgSrc":""};var a=n[1],o=a.replace(/^(\w)*/,"").replace(/BQB$/,""),i=n[2],c=Number(n[3]);return{"name":o,"link":"/pages/list/index?name="+a+"&title="+o,"imgSrc":m(a+"/"+i,t),"imgNum":c}}).filter(function(e){return!!e.imgNum}).sort(function(e,t){return t.imgNum-e.imgNum})}(e,t):Array.isArray(e)?function parseJsonTypes(e){return e.filter(function(e){return"dir"===e.type}).map(function(e){var t=e.name;return{"name":t,"link":"/pages/list/index?name="+t+"&title="+t}})}(e):[]},d=function parseImages(e,t){return"string"==typeof e?function parseTextImages(e,t){var n=e&&e.match(/\[.*?\]/g);if(!n)return[];var r=/.*master\/(.*)\/(.*)\]/;return n.map(function(e){var n=e.match(r);if(!n)return{"src":"","name":"未命名"};var a=n[1],o=n[2];return{"src":m(a+"/"+o,t),"name":o.replace(/\..*$/,"")}}).filter(function(e){return!!e.src})}(e,t):Array.isArray(e)?function parseJsonImages(e,t){return e.filter(function(e){return e.name.match(/\.(jpg|jpeg|gif|png)$/)}).map(function(e){return{"src":m(e.path,t),"name":e.name.replace(/\..*$/,"")}})}(e,t):[]},v=function getSetting(){var e=Object(r.b)("setting");return Object.assign({"repository":"zhaoolee/ChineseBQB","perLineBQB":4,"showBQBTitle":!1},e)}}}]);