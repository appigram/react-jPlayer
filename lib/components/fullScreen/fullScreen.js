"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FullScreen = function FullScreen(_ref) {
  var setFullScreen = _ref.setFullScreen,
      id = _ref.id,
      fullScreen = _ref.fullScreen,
      children = _ref.children;
  return _react["default"].createElement("button", {
    className: _constants.classes.FULL_SCREEN,
    onClick: function onClick() {
      return setFullScreen(id, !fullScreen);
    }
  }, children);
};

FullScreen.propTypes = {
  children: _propTypes["default"].node.isRequired,
  setFullScreen: _propTypes["default"].func.isRequired,
  id: _propTypes["default"].string.isRequired,
  fullScreen: _propTypes["default"].bool.isRequired
};
var _default = FullScreen;
exports["default"] = _default;