"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var Animate = _interopRequire(require("./Animate"));

var Loop = _interopRequire(require("./Loop"));

var VueAnimation = Animate;
VueAnimation.Loop = Loop;

module.exports = VueAnimation;