"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Mute = function Mute(_ref) {
  var setMute = _ref.setMute,
      id = _ref.id,
      muted = _ref.muted,
      children = _ref.children;
  return _react["default"].createElement("button", {
    className: _constants.classes.MUTE,
    onClick: function onClick() {
      return setMute(id, !muted);
    }
  }, children);
};

Mute.propTypes = {
  id: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node.isRequired,
  setMute: _propTypes["default"].func.isRequired,
  muted: _propTypes["default"].bool.isRequired
};
var _default = Mute;
exports["default"] = _default;