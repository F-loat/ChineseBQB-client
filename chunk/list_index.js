(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"104":function(A,e,t){},"23":function(A,e,t){"use strict";t.r(e),t.d(e,"default",function(){return k});var n=t(6),r=t.n(n),o=t(1),a=t(21),i=t(139),c=t(19),s=t(134),u=t(130),l=t(131),p=t(132),f=t(8),m=t(128),h=t(2),g=t(125),d=t(129),b=t(103),y=t(31),v=t(33),w=t(35),B=t(43),E=t(46),P=t.n(E),O=(t(104),function(){function defineProperties(A,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(A,n.key,n)}}return function(A,e,t){return e&&defineProperties(A.prototype,e),t&&defineProperties(A,t),A}}()),j=function get(A,e,t){null===A&&(A=Function.prototype);var n=Object.getOwnPropertyDescriptor(A,e);if(void 0===n){var r=Object.getPrototypeOf(A);return null===r?void 0:get(r,e,t)}if("value"in n)return n.value;var o=n.get;return void 0!==o?o.call(t):void 0};function _asyncToGenerator(A){return function(){var e=A.apply(this,arguments);return new Promise(function(A,t){return function step(n,r){try{var o=e[n](r),a=o.value}catch(A){return void t(A)}if(!o.done)return Promise.resolve(a).then(function(A){step("next",A)},function(A){step("throw",A)});A(a)}("next")})}}var k=function(A){function ListPage(A){var e=this;!function _classCallCheck(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,ListPage);var t=function _possibleConstructorReturn(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e}(this,(ListPage.__proto__||Object.getPrototypeOf(ListPage)).call(this,A));return t.config={"navigationBarTitleText":"开源表情包","enablePullDownRefresh":!0},t.fetchImages=_asyncToGenerator(r.a.mark(function _callee(){var A,n,o;return r.a.wrap(function _callee$(e){for(;;)switch(e.prev=e.next){case 0:return A=t.$router.params.name,n=t.state.setting.repository,e.next=4,Object(y.d)({"url":v.d[n](A),"dataType":v.b[n],"responseType":v.e[n]});case 4:o=e.sent,t.images=Object(y.b)(o,n),t.urls=t.images.map(function(A){return A.src}),t.showMoreImages(!0);case 8:case"end":return e.stop()}},_callee,e)})),t.showMoreImages=function(A){var e=t.state,n=e.images,r=e.urls,o=e.perLoadNum,a=t.images.splice(0,o),i=t.urls.splice(0,o);A?t.setState({"images":a,"urls":i,"isLoad":!t.images.length}):t.setState({"images":n.concat(a),"urls":r.concat(i)})},t.downloadImages=_asyncToGenerator(r.a.mark(function _callee2(){var A,n,o,s,u=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return r.a.wrap(function _callee2$(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,A=t.state.images.concat(t.images),n=A[u].src,o=u+1,Object(a.b)({"title":"保存第"+o+"张中..."}),e.next=7,Object(i.a)({"url":n});case 7:return s=e.sent,e.next=10,Object(c.b)({"filePath":s.tempFilePath});case 10:o<A.length?t.downloadImages(o):Object(a.d)({"title":"保存完毕！","duration":5e3}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),Object(a.d)({"title":"请授予保存图片权限","icon":"none"});case 16:case"end":return e.stop()}},_callee2,e,[[0,13]])})),t.handleDownload=function(){Object(a.c)({"title":"批量下载","content":"是否批量下载本类型全部表情包","success":function success(A){return A.confirm&&t.downloadImages(0)}})},t.handlePreview=function(A){Object(s.a)({"urls":t.state.urls,"current":A})},t.randomImages=function(){var A=t.images.concat(t.state.images);t.images=A.sort(function(){return Math.random()>.5?-1:1}),t.urls=t.images.map(function(A){return A.src}),t.showMoreImages(!0),Object(u.a)({"scrollTop":0}),Object(a.d)({"title":"表情包已随机排序","icon":"none"})},t.updateSetting=function(){var A=Object(y.a)(),e=A.perLineBQB,n=Object(l.a)().windowHeight,r=Math.ceil(n*e/375)*e;t.setState({"setting":A,"perLoadNum":r})},t.state={"images":[],"urls":[],"setting":Object(y.a)(),"perLoadNum":30,"isLoad":!1},t}return function _inherits(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{"constructor":{"value":A,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}(ListPage,h["a"].Component),O(ListPage,[{"key":"componentDidMount","value":function componentDidMount(){var A=this.$router.params.title;A&&Object(p.a)({"title":decodeURIComponent(A)}),this.fetchImages()}},{"key":"componentDidShow","value":function componentDidShow(){this.updateSetting(),this._offReachBottom=Object(f.a)({"callback":this.onReachBottom,"ctx":this,"onReachBottomDistance":void 0}),this.pullDownRefreshRef&&this.pullDownRefreshRef.bindEvent()}},{"key":"onPullDownRefresh","value":function(){var A=_asyncToGenerator(r.a.mark(function _callee3(){return r.a.wrap(function _callee3$(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,this.fetchImages();case 2:Object(m.a)();case 3:case"end":return A.stop()}},_callee3,this)}));return function onPullDownRefresh(){return A.apply(this,arguments)}}()},{"key":"onReachBottom","value":function onReachBottom(){this.images.length&&this.showMoreImages()}},{"key":"onShareAppMessage","value":function onShareAppMessage(){return{"title":"开源表情包 - "+this.$router.params.title,"imageUrl":P.a}}},{"key":"render","value":function render(){var A=this,e=this.state,t=e.images,n=void 0===t?[]:t,r=e.isLoad,a=e.setting,i=a.perLineBQB,c=a.showBQBTitle,s="bqb-item-"+i;if(!n.length){var u=r?o.l.createElement(B.a,null):o.l.createElement(g.a,null);return o.l.createElement(d.a,{"onRefresh":this.onPullDownRefresh&&this.onPullDownRefresh.bind(this),"ref":function ref(e){e&&(A.pullDownRefreshRef=e)}},u)}var l=o.l.createElement(g.a,{"className":"list"},n.map(function(e){return o.l.createElement(w.a,{"key":e.src,"src":e.src,"name":e.name,"showTitle":c,"bqb-custom-class":s,"onClick":function onClick(){return A.handlePreview(e.src)}})}),o.l.createElement(b.a,{"className":"flat-btn random-btn","onClick":function onClick(){return A.handleDownload()},"onLongPress":function onLongPress(){return A.randomImages()}},o.l.createElement(g.a,{"className":"at-icon at-icon-download"})));return o.l.createElement(d.a,{"onRefresh":this.onPullDownRefresh&&this.onPullDownRefresh.bind(this),"ref":function ref(e){e&&(A.pullDownRefreshRef=e)}},l)}},{"key":"componentDidHide","value":function componentDidHide(){j(ListPage.prototype.__proto__||Object.getPrototypeOf(ListPage.prototype),"componentDidHide",this)&&j(ListPage.prototype.__proto__||Object.getPrototypeOf(ListPage.prototype),"componentDidHide",this).call(this),this._offReachBottom&&this._offReachBottom(),this.pullDownRefreshRef&&this.pullDownRefreshRef.unbindEvent()}}]),ListPage}()},"31":function(A,e,t){"use strict";var n=t(20),r=t(6),o=t.n(r),a=t(21),i=t(124);function _asyncToGenerator(A){return function(){var e=A.apply(this,arguments);return new Promise(function(A,t){return function step(n,r){try{var o=e[n](r),a=o.value}catch(A){return void t(A)}if(!o.done)return Promise.resolve(a).then(function(A){step("next",A)},function(A){step("throw",A)});A(a)}("next")})}}var c,s,u=function smartLoading(A,e){return Object(a.b)({"title":A}),a.a},l=(c=_asyncToGenerator(o.a.mark(function _callee(A){var e,t,r,a;return o.a.wrap(function _callee$(o){for(;;)switch(o.prev=o.next){case 0:if(e=(A.method||"GET")+" "+A.url,t=Object(n.b)(e),r=u("加载中"),a=Object(i.a)(A).then(function(A){var t=A.data;return Object(n.c)({"key":e,"data":t}),r(),t}),o.t0=t,o.t0){o.next=9;break}return o.next=8,a;case 8:o.t0=o.sent;case 9:return o.abrupt("return",o.t0);case 10:case"end":return o.stop()}},_callee,void 0)})),function requestWithCache(A){return c.apply(this,arguments)}),p=(s=_asyncToGenerator(o.a.mark(function _callee2(A){var e,t,n;return o.a.wrap(function _callee2$(r){for(;;)switch(r.prev=r.next){case 0:return e=u("加载中"),r.next=3,Object(i.a)(A);case 3:return t=r.sent,n=t.data,e(),r.abrupt("return",n);case 7:case"end":return r.stop()}},_callee2,void 0)})),function requestWithoutCache(A){return s.apply(this,arguments)}),f=function request(A){return!(arguments.length>1&&void 0!==arguments[1])||arguments[1]?l(A):p(A)};t.d(e,"c",function(){return h}),t.d(e,"b",function(){return g}),t.d(e,"a",function(){return d}),t.d(e,"d",function(){return f});var m=function getImageSrc(A,e){return"https://proxy.youngon.com.cn/github/raw/"+e+"/master/"+A},h=function parseTypes(A,e){return"string"==typeof A?function parseTextTypes(A,e){var t=A&&A.match(/\|.*已收录.*\|/g);if(!t)return[];var n=/.*master\/(.*?)\/(.*?) .*已收录(\d*)张/;return t.map(function(A){var t=A.match(n);if(!t)return{"name":"未命名","link":"","imgNum":0,"imgSrc":""};var r=t[1],o=r.replace(/^(\w)*/,"").replace(/BQB$/,""),a=t[2],i=Number(t[3]);return{"name":o,"link":"/pages/list/index?name="+r+"&title="+o,"imgSrc":m(r+"/"+a,e),"imgNum":i}}).filter(function(A){return!!A.imgNum}).sort(function(A,e){return e.imgNum-A.imgNum})}(A,e):Array.isArray(A)?function parseJsonTypes(A){return A.filter(function(A){return"dir"===A.type}).map(function(A){var e=A.name;return{"name":e,"link":"/pages/list/index?name="+e+"&title="+e}})}(A):[]},g=function parseImages(A,e){return"string"==typeof A?function parseTextImages(A,e){var t=A&&A.match(/\[.*?\]/g);if(!t)return[];var n=/.*master\/(.*)\/(.*)\]/;return t.map(function(A){var t=A.match(n);if(!t)return{"src":"","name":"未命名"};var r=t[1],o=t[2];return{"src":m(r+"/"+o,e),"name":o.replace(/\..*$/,"")}}).filter(function(A){return!!A.src})}(A,e):Array.isArray(A)?function parseJsonImages(A,e){return A.filter(function(A){return A.name.match(/\.(jpg|jpeg|gif|png)$/)}).map(function(A){return{"src":m(A.path,e),"name":A.name.replace(/\..*$/,"")}})}(A,e):[]},d=function getSetting(){var A=Object(n.b)("setting");return Object.assign({"repository":"zhaoolee/ChineseBQB","perLineBQB":4,"showBQBTitle":!1},A)}},"33":function(A,e,t){"use strict";t.d(e,"e",function(){return r}),t.d(e,"b",function(){return o}),t.d(e,"c",function(){return a}),t.d(e,"d",function(){return i}),t.d(e,"a",function(){return c});var n="https://proxy.youngon.com.cn/github",r={"zhaoolee/ChineseBQB":"text"},o={"zhaoolee/ChineseBQB":"其他","getActivity/EmojiPackage":"json"},a={"zhaoolee/ChineseBQB":"https://proxy.youngon.com.cn/github/raw/zhaoolee/ChineseBQB/master/README.md","getActivity/EmojiPackage":"https://proxy.youngon.com.cn/github/api/repos/getActivity/EmojiPackage/contents"},i={"zhaoolee/ChineseBQB":function zhaooleeChineseBQB(A){return n+"/raw/zhaoolee/ChineseBQB/master/source/_posts/"+A+".md"},"getActivity/EmojiPackage":function getActivityEmojiPackage(A){return n+"/api/repos/getActivity/EmojiPackage/contents/"+A}},c={"zhaoolee/ChineseBQB":"https://proxy.youngon.com.cn/github/raw/zhaoolee/ChineseBQB/master/README.md","getActivity/EmojiPackage":"https://proxy.youngon.com.cn/github/raw/getActivity/EmojiPackage/master/README.md"}},"35":function(A,e,t){"use strict";t.d(e,"a",function(){return l});var n=t(1),r=t(2),o=t(125),a=t(126),i=t(127),c=t(36),s=t.n(c),u=(t(37),function(){function defineProperties(A,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(A,n.key,n)}}return function(A,e,t){return e&&defineProperties(A.prototype,e),t&&defineProperties(A,t),A}}());var l=function(A){function BQBItem(){!function _classCallCheck(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,BQBItem);var A=function _possibleConstructorReturn(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e}(this,(BQBItem.__proto__||Object.getPrototypeOf(BQBItem)).apply(this,arguments));return A.handleImageLoad=function(){A.setState({"isLoad":!0})},A.handleIamgeError=function(){A.setState({"isError":!0})},A}return function _inherits(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{"constructor":{"value":A,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}(BQBItem,r["a"].Component),u(BQBItem,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(A){A.src!==this.props.src&&this.setState({"isLoad":!1,"isError":!1})}},{"key":"render","value":function render(){var A=this.state,e=A.isLoad,t=A.isError,r=this.props,c=r.num,u=r.src,l=r.name,p=r.showTitle,f=r.onClick,m=this.props["bqb-custom-class"]||"";return u?n.l.createElement(o.a,{"className":"bqb-item bqb-custom-class "+m,"onClick":f},n.l.createElement(o.a,{"className":"bqb-image-wrap"},n.l.createElement(a.a,{"className":"bqb-image "+(e?"":"hide"),"mode":"aspectFill","lazyLoad":!0,"src":t?s.a:u,"onLoad":this.handleImageLoad,"onError":this.handleIamgeError}),e?null:n.l.createElement(o.a,{"className":"bqb-image bqb-loading"}),c&&n.l.createElement(i.a,{"className":"bqb-num"},c,"张")),p&&n.l.createElement(i.a,{"className":"bqb-name"},l)):n.l.createElement(o.a,{"className":"bqb-item bqb-custom-class "+m,"onClick":f},n.l.createElement(o.a,{"className":"bqb-text"},l))}}]),BQBItem}();l.defaultProps={"showTitle":!0,"onClick":function onClick(){}},l.externalClasses=["bqb-custom-class"]},"36":function(A,e){A.exports="data:image/jpeg;base64,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"},"37":function(A,e,t){},"43":function(A,e,t){"use strict";t.d(e,"a",function(){return i});var n=t(1),r=t(2),o=t(127),a=(t(44),function(){function defineProperties(A,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(A,n.key,n)}}return function(A,e,t){return e&&defineProperties(A.prototype,e),t&&defineProperties(A,t),A}}());var i=function(A){function ErrTips(){return function _classCallCheck(A,e){if(!(A instanceof e))throw new TypeError("Cannot call a class as a function")}(this,ErrTips),function _possibleConstructorReturn(A,e){if(!A)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?A:e}(this,(ErrTips.__proto__||Object.getPrototypeOf(ErrTips)).apply(this,arguments))}return function _inherits(A,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);A.prototype=Object.create(e&&e.prototype,{"constructor":{"value":A,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(A,e):A.__proto__=e)}(ErrTips,r["a"].Component),a(ErrTips,[{"key":"render","value":function render(){var A=this.props.text;return n.l.createElement(o.a,{"className":"err-tips"},A)}}]),ErrTips}();i.defaultProps={"text":"数据加载或解析失败，\n请稍后重试或等待版本更新"}},"44":function(A,e,t){},"46":function(A,e,t){A.exports=t.p+"static/images/banner.png"}}]);