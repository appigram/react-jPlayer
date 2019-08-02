"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactJplayerUtils = require("@appigram/react-jplayer-utils");

var _actions = require("../../actions/actions");

var _fullScreen = _interopRequireDefault(require("./fullScreen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    fullScreen: jPlayers[id].fullScreen
  };
};

var mapDispatchToProps = {
  setFullScreen: function setFullScreen(id, fullScreen) {
    return (0, _actions.setOption)(id, 'fullScreen', fullScreen);
  }
};

var _default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, mapDispatchToProps)(_fullScreen["default"]);

exports["default"] = _default;