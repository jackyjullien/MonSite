"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DELAY = 1000;

var Horloge = function Horloge(container) {
    _classCallCheck(this, Horloge);

    // arrow function '=>" préserve le this
    this.interval = setInterval(function () {
        var now = new Date(); // portée restrictive sur le bloc local
        container.innerHTML = now.getHours() + "h " + now.getMinutes() + "m " + now.getSeconds() + "s";
    }, DELAY);
};

exports.default = Horloge;
//# sourceMappingURL=horloge.js.map
