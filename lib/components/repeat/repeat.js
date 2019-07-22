"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Repeat = function Repeat(_ref) {
  var loop = _ref.loop,
      children = _ref.children;
  return _react["default"].createElement("button", {
    className: _constants.classes.REPEAT,
    onClick: loop
  }, children);
};

Repeat.propTypes = {
  children: _propTypes["default"].node.isRequired,
  loop: _propTypes["default"].func.isRequired
};
var _default = Repeat;
exports["default"] = _default;