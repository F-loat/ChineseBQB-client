(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"106":function(e,t,n){},"108":function(e,t,n){(function(t){for(var r=n(109),i="undefined"==typeof window?t:window,o=["moz","webkit"],a="AnimationFrame",s=i["request"+a],c=i["cancel"+a]||i["cancelRequest"+a],l=0;!s&&l<o.length;l++)s=i[o[l]+"Request"+a],c=i[o[l]+"Cancel"+a]||i[o[l]+"CancelRequest"+a];if(!s||!c){var u=0,f=0,p=[];s=function raf(e){if(0===p.length){var t=r(),n=Math.max(0,1e3/60-(t-u));u=n+t,setTimeout(function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(u)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return p.push({"handle":++f,"callback":e,"cancelled":!1}),f},c=function caf(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return s.call(i,e)},e.exports.cancel=function(){c.apply(i,arguments)},e.exports.polyfill=function(e){e||(e=i),e.requestAnimationFrame=s,e.cancelAnimationFrame=c}}).call(this,n(7))},"109":function(e,t,n){(function(t){(function(){var n,r,i,o,a,s;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:void 0!==t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,o=(n=function getNanoSeconds(){var e;return 1e9*(e=r())[0]+e[1]})(),s=1e9*t.uptime(),a=o-s):Date.now?(e.exports=function(){return Date.now()-i},i=Date.now()):(e.exports=function(){return(new Date).getTime()-i},i=(new Date).getTime())}).call(this)}).call(this,n(110))},"110":function(e,t){var n,r,i=e.exports={};function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(e){if(n===setTimeout)return setTimeout(e,0);if((n===defaultSetTimout||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){n=defaultSetTimout}try{r="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){r=defaultClearTimeout}}();var o,a=[],s=!1,c=-1;function cleanUpNextTick(){s&&o&&(s=!1,o.length?a=o.concat(a):c=-1,a.length&&drainQueue())}function drainQueue(){if(!s){var e=runTimeout(cleanUpNextTick);s=!0;for(var t=a.length;t;){for(o=a,a=[];++c<t;)o&&o[c].run();c=-1,t=a.length}o=null,s=!1,function runClearTimeout(e){if(r===clearTimeout)return clearTimeout(e);if((r===defaultClearTimeout||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new Item(e,t)),1!==a.length||s||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=noop,i.addListener=noop,i.once=noop,i.off=noop,i.removeListener=noop,i.removeAllListeners=noop,i.emit=noop,i.prependListener=noop,i.prependOnceListener=noop,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"134":function(e,t,n){"use strict";var r,i,o,a=n(1),s=n(108),c=n.n(s),l=function Loading(e){return a.l.createElement("div",{"className":"viewer-image-loading"})},u=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var f=function easeOutQuart(e,t,n,r){return-(n-t)*((e=e/r-1)*e*e*e-1)+t};function setScope(e,t,n){return e<t?t:e>n?n:e}function getDistanceBetweenTouches(e){if(e.touches.length<2)return 1;var t=e.touches[0].clientX,n=e.touches[0].clientY,r=e.touches[1].clientX,i=e.touches[1].clientY;return Math.sqrt(Math.pow(r-t,2)+Math.pow(i-n,2))}var p,h,d=(i=r=function(e){function ImageContainer(e,t){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ImageContainer);var n=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ImageContainer.__proto__||Object.getPrototypeOf(ImageContainer)).call(this,e,t));return o.call(n),n.actualHeight=0,n.actualWith=0,n.originHeight=0,n.originWidth=0,n.originScale=1,n.startLeft=0,n.startTop=0,n.startScale=1,n.onTouchStartTime=0,n.isTwoFingerMode=!1,n.oldPointLeft=0,n.oldPointTop=0,n._touchZoomDistanceStart=0,n.haveCallMoveFn=!1,n.diffX=0,n.diffY=0,n.animationID=0,n.animateStartTime=0,n.animateStartValue={"x":0,"y":0},n.animateFinalValue={"x":0,"y":0},n}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ImageContainer,a["e"]),u(ImageContainer,[{"key":"componentWillMount","value":function componentWillMount(){this.loadImg(this.props.src)}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.unloadImg(),this.animationID&&c.a.cancel(this.animationID)}},{"key":"render","value":function render(){var e=this.props,t=e.screenWidth,n=e.screenHeight,r=e.src,i=e.left,o=this.state,s=o.isLoaded,c=o.left,u=o.top,f=o.scale,p={"width":o.width,"height":o.height},h="translate3d("+c+"px, "+u+"px, 0) scale("+f+")";p.WebkitTransform=h,p.transform=h;var d={"left":i,"width":t,"height":n};return a.l.createElement("div",{"className":"viewer-image-container","onTouchStart":this.handleTouchStart,"onTouchMove":this.handleTouchMove,"onTouchEnd":this.handleTouchEnd,"style":d},s?a.l.createElement("img",{"src":r,"style":p,"alt":""}):a.l.createElement(l,null))}}]),ImageContainer}(),r.propTypes={"maxZoomNum":a.d.number.isRequired,"handleStart":a.d.func.isRequired,"handleMove":a.d.func.isRequired,"handleEnd":a.d.func.isRequired},r.contextTypes={"onClose":a.d.func},o=function _initialiseProps(){var e=this;this.state={"width":0,"height":0,"scale":1,"left":0,"top":0,"isLoaded":!1},this.onLoad=function(){e.actualWith=e.img.width,e.actualHeight=e.img.height;var t=e.props,n=t.screenHeight,r=t.screenWidth,i=0;e.originWidth=r,e.originHeight=e.actualHeight/e.actualWith*r,e.originScale=1,e.actualHeight/e.actualWith<n/r&&(i=parseInt((n-e.originHeight)/2,10)),e.originTop=i,e.setState({"width":e.originWidth,"height":e.originHeight,"scale":1,"left":0,"top":i,"isLoaded":!0})},this.onError=function(){e.setState({"isLoaded":!0})},this.loadImg=function(t){e.img=new Image,e.img.src=t,e.img.onload=e.onLoad,e.img.onerror=e.onError,e.setState({"isLoaded":!1})},this.unloadImg=function(){delete e.img.onerror,delete e.img.onload,delete e.img.src,delete e.img},this.handleTouchStart=function(t){switch(t.preventDefault(),t.stopPropagation(),e.animationID&&c.a.cancel(e.animationID),t.touches.length){case 1:var n=t.touches[0];e.startX=n.clientX,e.startY=n.clientY,e.diffX=0,e.diffY=0,e.startLeft=e.state.left,e.startTop=e.state.top,e.onTouchStartTime=(new Date).getTime(),e.haveCallMoveFn=!1;break;case 2:e.isTwoFingerMode=!0;var r=Math.abs(Math.round((t.touches[0].clientX+t.touches[1].clientX)/2)),i=Math.abs(Math.round((t.touches[0].clientY+t.touches[1].clientY)/2));e.startLeft=e.state.left,e.startTop=e.state.top,e.startScale=e.state.scale,e.oldPointLeft=r-e.startLeft,e.oldPointTop=i-e.startTop,e._touchZoomDistanceStart=getDistanceBetweenTouches(t)}},this.handleTouchMove=function(t){switch(t.preventDefault(),t.stopPropagation(),t.touches.length){case 1:var n=t.touches[0],r=n.clientX-e.startX,i=n.clientY-e.startY;if(e.diffX=r,e.diffY=i,Math.abs(r)<5&&Math.abs(i)<5)return;var o=e.state.scale,a=o*e.originWidth;if(Math.abs(r)>Math.abs(i)){if(e.state.scale===e.originScale&&Math.abs(r)>5)return e.haveCallMoveFn=!0,void e.callHandleMove(r);if(r<0&&e.startLeft<=e.originWidth-a)return e.haveCallMoveFn=!0,void e.callHandleMove(r);if(r>0&&e.startLeft>=0)return e.haveCallMoveFn=!0,void e.callHandleMove(r)}var s=e.props.screenHeight,c=o*e.originHeight,l=(s-c)/2,u=e.startLeft+r;(c>s||e.state.scale===e.originScale)&&(l=e.startTop+i),e.setState({"left":u,"top":l});break;case 2:e._touchZoomDistanceEnd=getDistanceBetweenTouches(t);var f=Math.sqrt(e._touchZoomDistanceEnd/e._touchZoomDistanceStart),p=f*e.startScale,h=e.startLeft+(1-f)*e.oldPointLeft,d=e.startTop+(1-f)*e.oldPointTop;e.setState({"left":h,"top":d,"scale":p})}},this.handleTouchEnd=function(t){if(t.preventDefault(),e.isTwoFingerMode){var n=t.touches.length;if(e.isTwoFingerMode=!1,1===n){var r=t.touches[0];e.startX=r.clientX,e.startY=r.clientY,e.diffX=0,e.diffY=0}e.setState(function(t,r){var i=setScope(t.scale,1,r.maxZoomNum),o=i*e.originWidth,a=i*e.originHeight,s=i/e.startScale,c=setScope(e.startLeft+(1-s)*e.oldPointLeft,e.originWidth-o,0),l=void 0;return l=a>r.screenHeight?setScope(e.startTop+(1-s)*e.oldPointTop,r.screenHeight-a,0):(r.screenHeight-a)/2,1===n&&(e.startLeft=c,e.startTop=l,e.startScale=i),{"left":c,"top":l,"scale":i}})}else{var i=(new Date).getTime()-e.onTouchStartTime,o=e.diffX,a=e.diffY;if(i<300&&Math.abs(o)<5&&Math.abs(a)<5)return void setTimeout(e.context.onClose,300);if(e.haveCallMoveFn)if(e.callHandleEnd(a<30))return void setTimeout(function(){e.setState({"scale":e.originScale,"left":0,"top":e.originTop})},1e3/3);var s=void 0,c=void 0,l=e.state.scale*e.originHeight;s=1e3*o/i+e.startLeft,c=1e3*a/i+e.startTop,e.state.scale===e.originScale&&(s=0,c=l>e.props.screenHeight?setScope(c,e.props.screenHeight-l,0):e.originTop),e.animateStartValue={"x":e.state.left,"y":e.state.top},e.animateFinalValue={"x":s,"y":c},e.animateStartTime=Date.now(),e.startAnimate()}},this.startAnimate=function(){e.animationID=c()(function(){var t=Date.now()-e.animateStartTime,n=void 0,r=void 0;t>1e3?e.setState(function(t,i){var o=t.scale*e.originWidth,a=t.scale*e.originHeight;return n=setScope(t.left,e.originWidth-o,0),r=a>i.screenHeight?setScope(t.top,i.screenHeight-a,0):(i.screenHeight-a)/2,{"left":n,"top":r}}):(n=f(t,e.animateStartValue.x,e.animateFinalValue.x,1e3),r=f(t,e.animateStartValue.y,e.animateFinalValue.y,1e3),e.setState({"left":n,"top":r}),e.startAnimate())})},this.callHandleMove=function(t){e.isCalledHandleStart||(e.isCalledHandleStart=!0,e.props.handleStart&&e.props.handleStart()),e.props.handleMove(t)},this.callHandleEnd=function(t){if(e.isCalledHandleStart&&(e.isCalledHandleStart=!1,e.props.handleEnd))return e.props.handleEnd(t)}},i),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();var v,w,b=200,y=(h=p=function(e){function ListContainer(e,t){!function ListContainer_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ListContainer);var n=function ListContainer_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ListContainer.__proto__||Object.getPrototypeOf(ListContainer)).call(this,e,t));return n.state={"left":0},n.easing=function(e){var t=e,r=n.props.screenWidth;return r/2.5*Math.sin(t/r*(Math.PI/2))+0},n.handleStart=function(){n.startLeft=n.state.left,n.startTime=(new Date).getTime(),n.isNeedSpring=!1},n.handleMove=function(e){var t=e;Math.abs(t)>n.props.screenWidth&&(t<0&&(t=-n.props.screenWidth),t>0&&(t=n.props.screenWidth)),n.state.left>=0&&t>0?t=n.easing(t):n.state.left<=-n.maxLeft&&t<0&&(t=-n.easing(-t)),n.setState({"left":n.startLeft+t})},n.handleEnd=function(e){var t=void 0,r=(new Date).getTime()-n.startTime;return(t=e&&r<b?n.state.left<n.startLeft?n.props.index+1:n.props.index-1:Math.abs(Math.round(n.state.left/n.perDistance)))<0?t=0:t>n.length-1&&(t=n.length-1),n.setState({"left":-n.perDistance*t}),n.isNeedSpring=!0,t!==n.props.index&&(n.props.changeIndex(t),!0)},n.isNeedSpring=!1,n}return function ListContainer_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ListContainer,a["e"]),g(ListContainer,[{"key":"getChildContext","value":function getChildContext(){return m({},this.context)}},{"key":"componentWillMount","value":function componentWillMount(){var e=this.props,t=e.screenWidth,n=e.urls,r=e.index,i=e.gap;this.length=n.length,this.perDistance=t+i,this.maxLeft=this.perDistance*(this.length-1),this.isNeedSpring=!1,this.setState({"left":-this.perDistance*r})}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){this.props.index!==e.index&&(this.isNeedSpring=!0,this.setState({"left":-this.perDistance*e.index}))}},{"key":"render","value":function render(){var e=this,t=this.props,n=t.maxZoomNum,r=t.screenWidth,i=t.screenHeight,o=t.urls,s=t.speed,c=this.state.left,l={};if(this.isNeedSpring){var u=s+"ms";l.WebkitTransitionDuration=u,l.transitionDuration=u}var f="translate3d("+c+"px, 0, 0)";return l.WebkitTransform=f,l.transform=f,a.l.createElement("div",{"className":"viewer-list-container","style":l},o.map(function(t,o){return a.l.createElement(d,{"key":o,"src":t,"maxZoomNum":n,"handleStart":e.handleStart,"handleMove":e.handleMove,"handleEnd":e.handleEnd,"left":e.perDistance*o,"screenWidth":r,"screenHeight":i})}))}}]),ListContainer}(),p.propTypes={"maxZoomNum":a.d.number.isRequired,"changeIndex":a.d.func.isRequired,"gap":a.d.number.isRequired,"speed":a.d.number.isRequired},h),T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}();function WrapViewer_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var S,C,W="undefined"!=typeof document&&document.documentElement.clientWidth,_="undefined"!=typeof document&&document.documentElement.clientHeight,M=(w=v=function(e){function WrapViewer(){var e,t,n;!function WrapViewer_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WrapViewer);for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];return t=n=WrapViewer_possibleConstructorReturn(this,(e=WrapViewer.__proto__||Object.getPrototypeOf(WrapViewer)).call.apply(e,[this].concat(i))),n.state={"index":0},n.changeIndex=function(e){n.setState({"index":e})},WrapViewer_possibleConstructorReturn(n,t)}return function WrapViewer_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(WrapViewer,a["b"]),x(WrapViewer,[{"key":"getChildContext","value":function getChildContext(){return T({},this.context)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.index;this.setState({"index":e})}},{"key":"render","value":function render(){var e=this.props,t=e.zIndex,n=e.urls,r=e.maxZoomNum,i=e.gap,o=e.speed,s=this.state.index;return a.l.createElement("div",{"className":"wx-image-viewer","style":{"zIndex":t}},a.l.createElement("div",{"className":"viewer-cover"}),a.l.createElement(y,{"screenWidth":W,"screenHeight":_,"changeIndex":this.changeIndex,"urls":n,"maxZoomNum":r,"gap":i,"speed":o,"index":s}))}}]),WrapViewer}(),v.propTypes={"index":a.d.number.isRequired,"urls":a.d.array.isRequired,"maxZoomNum":a.d.number.isRequired,"zIndex":a.d.number.isRequired,"gap":a.d.number.isRequired,"speed":a.d.number.isRequired},w),P=(n(106),function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}());var E=(C=S=function(e){function WxImageViewer(){return function WxImageViewer_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WxImageViewer),function WxImageViewer_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(WxImageViewer.__proto__||Object.getPrototypeOf(WxImageViewer)).apply(this,arguments))}return function WxImageViewer_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(WxImageViewer,a["b"]),P(WxImageViewer,[{"key":"getChildContext","value":function getChildContext(){return{"onClose":this.props.onClose}}},{"key":"render","value":function render(){return a.l.createPortal(a.l.createElement(M,this.props),document.body)}}]),WxImageViewer}(),S.propTypes={"maxZoomNum":a.d.number,"zIndex":a.d.number,"index":a.d.number,"urls":a.d.array.isRequired,"gap":a.d.number,"speed":a.d.number,"onClose":a.d.func.isRequired},S.childContextTypes={"onClose":a.d.func},S.defaultProps={"maxZoomNum":4,"zIndex":510,"index":0,"gap":10,"speed":300},C);t.a=function previewImage(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.urls,n=e.current,r=e.success,i=(e.fail,e.complete),o=document.createElement("div"),s=t.reduce(function(e,t,r){return t===n?r:e},-1),c={"urls":t,"onClose":function onClose(){Object(a.u)(o)}};return s>-1&&(c.index=s),a.l.render(a.l.createElement(E,c),o),function onSuccess(e){r&&r(e),i&&i(),Promise.resolve(e)}({"errMsg":"previewImage:ok"})}}}]);