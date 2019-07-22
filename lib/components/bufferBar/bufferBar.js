"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BufferBar = function BufferBar(_ref) {
  var setCanvas = _ref.setCanvas;
  return _react["default"].createElement("canvas", {
    ref: setCanvas,
    className: _constants.classes.BUFFER_BAR
  });
};

BufferBar.propTypes = {
  setCanvas: _propTypes["default"].func.isRequired
};
var _default = BufferBar;
exports["default"] = _default;