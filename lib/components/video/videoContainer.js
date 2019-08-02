"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactJplayerUtils = require("@appigram/react-jplayer-utils");

var _video = _interopRequireDefault(require("./video"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    require: jPlayers[id].mediaSettings.video
  };
};

var _default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_video["default"]);

exports["default"] = _default;