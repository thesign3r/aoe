parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kjac":[function(require,module,exports) {

},{}],"DAQU":[function(require,module,exports) {
"use strict";function t(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function e(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?t(Object(i),!0).forEach(function(t){n(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,require("./aoe.scss");var s=function(){function t(){r(this,t),this.options={attributes:{delay:"data-aoe-delay",speed:"data-aoe-speed"},observer:{root:null,threshold:[0,.5],shift:"0px"},once:!0,speed:null,delay:null,timing:null},this.currentAnimation=null,this.items=document.querySelectorAll("[data-aoe]")}return o(t,[{key:"begin",value:function(){var t=this;this.items.forEach(function(e){t.setAttributes(e),t.createObserver(e)})}},{key:"setAttributes",value:function(t){t.style.animationDuration=(t.getAttribute(this.options.attributes.speed)||this.options.speed)+"ms",t.style.animationDelay=(t.getAttribute(this.options.attributes.delay)||this.options.delay)+"ms",t.style.animationTimingFunction=this.options.timing}},{key:"createObserver",value:function(t){var e={root:this.options.observer.root,rootMargin:this.options.observer.shift,threshold:this.options.observer.threshold};new IntersectionObserver(this.handleIntersect.bind(this),e).observe(t)}},{key:"handleIntersect",value:function(t){var e=this;t.forEach(function(t){t.intersectionRatio>.5&&e.animateItem(t.target,"in"),0==t.intersectionRatio&&0==e.options.once&&e.animateItem(t.target,"out")})}},{key:"animateItem",value:function(t,e){return this.currentAnimation=t.getAttribute("data-aoe"),"in"===e?t.classList.add(this.currentAnimation):t.classList.remove(this.currentAnimation)}},{key:"init",value:function(t){if(!window.IntersectionObserver)return document.body.classList.add("no-aoe"),void console.warn("Your browser does not support IntersectionObserver! https://github.com/w3c/IntersectionObserver/tree/master/polyfill");t&&t!==this.options&&(this.options=e({},this.options,{},t)),this.begin()}}]),t}();exports.default=s;
},{"./aoe.scss":"kjac"}]},{},["DAQU"], null)
//# sourceMappingURL=/aoe.js.map