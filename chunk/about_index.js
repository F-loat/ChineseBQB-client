(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"121":function(e,t,n){},"25":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return d});var r=n(6),o=n.n(r),a=n(1),i=n(134),u=n(2),c=n(120),s=n.n(c),p=n(125),f=n(133),l=n(103),m=n(31),h=n(33),g=(n(121),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()),y=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0};var d=function(e){function AboutPage(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AboutPage);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AboutPage.__proto__||Object.getPrototypeOf(AboutPage)).call(this,e));return t.config={"navigationBarTitleText":"关于"},t.rewardDeveloper=function(){var e=["https://github.com/F-loat/ChineseBQB-client/raw/master/images/tuyan.jpg","https://github.com/F-loat/ChineseBQB-client/raw/master/images/zhaozhao.jpg"],t=Math.random()>.5?0:1;Object(i.a)({"urls":e,"current":e[t]})},t.updateSetting=function(){var e=Object(m.a)();t.setState({"setting":e},function(){t.fetchAbout()})},t.state={"readme":"","setting":Object(m.a)()},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AboutPage,u["a"].Component),g(AboutPage,[{"key":"fetchAbout","value":function(){var e=function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var a=t[r](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}(o.a.mark(function _callee(){var e,t,n;return o.a.wrap(function _callee$(r){for(;;)switch(r.prev=r.next){case 0:return e=this.state.setting.repository,r.next=3,Object(m.d)({"url":h.a[e],"dataType":"其他","responseType":"text"});case 3:t=r.sent,n=s()(t).replace(/raw\.githubusercontent\.com/g,"proxy.youngon.com.cn/github/raw").replace(/<img/g,'<img style="max-width: 100%"'),this.setState({"readme":n});case 6:case"end":return r.stop()}},_callee,this)}));return function fetchAbout(){return e.apply(this,arguments)}}()},{"key":"componentDidMount","value":function componentDidMount(){this.fetchAbout()}},{"key":"componentDidShow","value":function componentDidShow(){this.updateSetting()}},{"key":"render","value":function render(){var e=this;return a.l.createElement(p.a,{"className":"about"},a.l.createElement(f.a,{"nodes":this.state.readme}),a.l.createElement(l.a,{"className":"flat-btn reward-btn","onClick":function onClick(){return e.rewardDeveloper()}},"赏"))}},{"key":"componentDidHide","value":function componentDidHide(){y(AboutPage.prototype.__proto__||Object.getPrototypeOf(AboutPage.prototype),"componentDidHide",this)&&y(AboutPage.prototype.__proto__||Object.getPrototypeOf(AboutPage.prototype),"componentDidHide",this).call(this)}}]),AboutPage}()},"31":function(e,t,n){"use strict";var r=n(20),o=n(6),a=n.n(o),i=n(21),u=n(124);function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function step(r,o){try{var a=t[r](o),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){step("next",e)},function(e){step("throw",e)});e(i)}("next")})}}var c,s,p=function smartLoading(e,t){return Object(i.b)({"title":e}),i.a},f=(c=_asyncToGenerator(a.a.mark(function _callee(e){var t,n,o,i;return a.a.wrap(function _callee$(a){for(;;)switch(a.prev=a.next){case 0:if(t=(e.method||"GET")+" "+e.url,n=Object(r.b)(t),o=p("加载中"),i=Object(u.a)(e).then(function(e){var n=e.data;return Object(r.c)({"key":t,"data":n}),o(),n}),a.t0=n,a.t0){a.next=9;break}return a.next=8,i;case 8:a.t0=a.sent;case 9:return a.abrupt("return",a.t0);case 10:case"end":return a.stop()}},_callee,void 0)})),function requestWithCache(e){return c.apply(this,arguments)}),l=(s=_asyncToGenerator(a.a.mark(function _callee2(e){var t,n,r;return a.a.wrap(function _callee2$(o){for(;;)switch(o.prev=o.next){case 0:return t=p("加载中"),o.next=3,Object(u.a)(e);case 3:return n=o.sent,r=n.data,t(),o.abrupt("return",r);case 7:case"end":return o.stop()}},_callee2,void 0)})),function requestWithoutCache(e){return s.apply(this,arguments)}),m=function request(e){return!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?f(e):l(e)};n.d(t,"c",function(){return g}),n.d(t,"b",function(){return y}),n.d(t,"a",function(){return d}),n.d(t,"d",function(){return m});var h=function getImageSrc(e,t){return"https://proxy.youngon.com.cn/github/raw/"+t+"/master/"+e},g=function parseTypes(e,t){return"string"==typeof e?function parseTextTypes(e,t){var n=e&&e.match(/\|.*已收录.*\|/g);if(!n)return[];var r=/.*master\/(.*?)\/(.*?) .*已收录(\d*)张/;return n.map(function(e){var n=e.match(r);if(!n)return{"name":"未命名","link":"","imgNum":0,"imgSrc":""};var o=n[1],a=o.replace(/^(\w)*/,"").replace(/BQB$/,""),i=n[2],u=Number(n[3]);return{"name":a,"link":"/pages/list/index?name="+o+"&title="+a,"imgSrc":h(o+"/"+i,t),"imgNum":u}}).filter(function(e){return!!e.imgNum}).sort(function(e,t){return t.imgNum-e.imgNum})}(e,t):Array.isArray(e)?function parseJsonTypes(e){return e.filter(function(e){return"dir"===e.type}).map(function(e){var t=e.name;return{"name":t,"link":"/pages/list/index?name="+t+"&title="+t}})}(e):[]},y=function parseImages(e,t){return"string"==typeof e?function parseTextImages(e,t){var n=e&&e.match(/\[.*?\]/g);if(!n)return[];var r=/.*master\/(.*)\/(.*)\]/;return n.map(function(e){var n=e.match(r);if(!n)return{"src":"","name":"未命名"};var o=n[1],a=n[2];return{"src":h(o+"/"+a,t),"name":a.replace(/\..*$/,"")}}).filter(function(e){return!!e.src})}(e,t):Array.isArray(e)?function parseJsonImages(e,t){return e.filter(function(e){return e.name.match(/\.(jpg|jpeg|gif|png)$/)}).map(function(e){return{"src":h(e.path,t),"name":e.name.replace(/\..*$/,"")}})}(e,t):[]},d=function getSetting(){var e=Object(r.b)("setting");return Object.assign({"repository":"zhaoolee/ChineseBQB","perLineBQB":4,"showBQBTitle":!1},e)}},"33":function(e,t,n){"use strict";n.d(t,"e",function(){return o}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return u}),n.d(t,"a",function(){return c});var r="https://proxy.youngon.com.cn/github",o={"zhaoolee/ChineseBQB":"text"},a={"zhaoolee/ChineseBQB":"其他","getActivity/EmojiPackage":"json"},i={"zhaoolee/ChineseBQB":"https://proxy.youngon.com.cn/github/raw/zhaoolee/ChineseBQB/master/README.md","getActivity/EmojiPackage":"https://proxy.youngon.com.cn/github/api/repos/getActivity/EmojiPackage/contents"},u={"zhaoolee/ChineseBQB":function zhaooleeChineseBQB(e){return r+"/raw/zhaoolee/ChineseBQB/master/source/_posts/"+e+".md"},"getActivity/EmojiPackage":function getActivityEmojiPackage(e){return r+"/api/repos/getActivity/EmojiPackage/contents/"+e}},c={"zhaoolee/ChineseBQB":"https://proxy.youngon.com.cn/github/raw/zhaoolee/ChineseBQB/master/README.md","getActivity/EmojiPackage":"https://proxy.youngon.com.cn/github/raw/getActivity/EmojiPackage/master/README.md"}}}]);