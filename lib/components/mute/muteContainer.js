"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactJplayerUtils = require("@appigram/react-jplayer-utils");

var _actions = require("../../actions/actions");

var _mute = _interopRequireDefault(require("./mute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    muted: jPlayers[id].muted
  };
};

var mapDispatchToProps = {
  setMute: _actions.setMute
};

var _default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, mapDispatchToProps)(_mute["default"]);

exports["default"] = _default;