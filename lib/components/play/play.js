"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Play = function Play(_ref) {
  var play = _ref.play,
      id = _ref.id,
      paused = _ref.paused,
      children = _ref.children;
  return _react["default"].createElement("button", {
    className: _constants.classes.PLAY,
    onClick: function onClick() {
      return play(id, paused);
    }
  }, children);
};

Play.propTypes = {
  children: _propTypes["default"].node.isRequired,
  play: _propTypes["default"].func.isRequired,
  id: _propTypes["default"].string.isRequired,
  paused: _propTypes["default"].bool.isRequired
};
var _default = Play;
exports["default"] = _default;