(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"110":function(t,e,o){},"121":function(t,e,o){"use strict";o.r(e),o.d(e,"default",function(){return d});var n=o(1),r=o(123),i=o(19),a=o(2),u=o(109),c=o.n(u),p=o(114),l=o(122),s=o(96),f=(o(110),function(){function defineProperties(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,o){return e&&defineProperties(t.prototype,e),o&&defineProperties(t,o),t}}()),b=function get(t,e,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(void 0===n){var r=Object.getPrototypeOf(t);return null===r?void 0:get(r,e,o)}if("value"in n)return n.value;var i=n.get;return void 0!==i?i.call(o):void 0};var d=function(t){function About(t){!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,About);var e=function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(About.__proto__||Object.getPrototypeOf(About)).call(this,t));return e.config={"navigationBarTitleText":"关于"},e.rewardDeveloper=function(){var t=["https://github.com/F-loat/ChineseBQB-client/raw/master/images/tuyan.jpg","https://github.com/F-loat/ChineseBQB-client/raw/master/images/zhaozhao.jpg"],e=Math.random()>.5?0:1;Object(r.a)({"urls":t,"current":t[e]})},e.state={"readme":""},e}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{"constructor":{"value":t,"enumerable":!1,"writable":!0,"configurable":!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(About,a["a"].Component),f(About,[{"key":"componentDidMount","value":function componentDidMount(){var t=this;Object(i.b)({"key":"readme"}).then(function(e){var o=c()(e.data).replace(/<img/g,'<img style="max-width: 100%"');t.setState({"readme":o})})}},{"key":"render","value":function render(){var t=this;return n.l.createElement(p.a,{"className":"about"},n.l.createElement(l.a,{"nodes":this.state.readme}),n.l.createElement(s.a,{"className":"flat-btn reward-btn","onClick":function onClick(){return t.rewardDeveloper()}},"赏"))}},{"key":"componentDidShow","value":function componentDidShow(){b(About.prototype.__proto__||Object.getPrototypeOf(About.prototype),"componentDidShow",this)&&b(About.prototype.__proto__||Object.getPrototypeOf(About.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){b(About.prototype.__proto__||Object.getPrototypeOf(About.prototype),"componentDidHide",this)&&b(About.prototype.__proto__||Object.getPrototypeOf(About.prototype),"componentDidHide",this).call(this)}}]),About}()}}]);