"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactJplayerUtils = require("@appigram/react-jplayer-utils");

var _duration = _interopRequireDefault(require("./duration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    durationText: jPlayers[id].durationText
  };
};

var _default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_duration["default"]);

exports["default"] = _default;