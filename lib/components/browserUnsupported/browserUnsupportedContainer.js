"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactJplayerUtils = require("react-jplayer-utils");

var _browserUnsupported = _interopRequireDefault(require("./browserUnsupported"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    nonSupported: jPlayers[id].mediaSettings.nonSupported
  };
};

var _default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_browserUnsupported["default"]);

exports["default"] = _default;