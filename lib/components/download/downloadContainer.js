"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactJplayerUtils = require("@appigram/react-jplayer-utils");

var _download = _interopRequireDefault(require("./download"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    free: jPlayers[id].media.free,
    url: jPlayers[id].src
  };
};

var _default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps)(_download["default"]);

exports["default"] = _default;