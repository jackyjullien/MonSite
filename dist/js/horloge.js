"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var DELAY=1e3,Horloge=function a(b){_classCallCheck(this,a),this.interval=setInterval(function(){var a=new Date;b.innerHTML=a.getHours()+"h "+a.getMinutes()+"m "+a.getSeconds()+"s"},DELAY)};exports.default=Horloge;