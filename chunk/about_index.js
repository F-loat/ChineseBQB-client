(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"23":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return h});var o=n(1),r=n(110),i=n(20),a=n(2),c=n(98),p=n.n(c),u=n(101),l=n(109),s=n(107),d=(n(99),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}()),f=function get(e,t,n){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,t);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:get(r,t,n)}if("value"in o)return o.value;var i=o.get;return void 0!==i?i.call(n):void 0};var h=function(e){function Index(e){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Index);var t=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Index.__proto__||Object.getPrototypeOf(Index)).call(this,e));return t.config={"navigationBarTitleText":"关于"},t.rewardDeveloper=function(){var e=["https://github.com/F-loat/ChineseBQB-client/raw/master/images/tuyan.jpg","https://github.com/F-loat/ChineseBQB-client/raw/master/images/zhaozhao.jpg"],t=Math.random()>.5?0:1;Object(r.a)({"urls":e,"current":e[t]})},t.state={"readme":""},t}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Index,a["a"].Component),d(Index,[{"key":"componentDidMount","value":function componentDidMount(){var e=this;Object(i.b)({"key":"readme"}).then(function(t){var n=p()(t.data).replace(/<img/g,'<img style="max-width: 100%"');e.setState({"readme":n})})}},{"key":"render","value":function render(){var e=this;return o.k.createElement(u.a,{"className":"about"},o.k.createElement(l.a,{"nodes":this.state.readme}),o.k.createElement(s.a,{"className":"flat-btn reward-btn","onClick":function onClick(){return e.rewardDeveloper()}},"赏"))}},{"key":"componentDidShow","value":function componentDidShow(){f(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this)&&f(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){f(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this)&&f(Index.prototype.__proto__||Object.getPrototypeOf(Index.prototype),"componentDidHide",this).call(this)}}]),Index}()},"99":function(e,t,n){}}]);