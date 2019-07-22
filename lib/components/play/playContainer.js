"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactJplayerUtils = require("react-jplayer-utils");

var _actions = require("../../actions/actions");

var _play2 = _interopRequireDefault(require("./play"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    paused: jPlayers[id].paused
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    play: function play(id, paused) {
      if (paused) {
        dispatch((0, _actions.play)(id));
      } else {
        dispatch((0, _actions.pause)(id));
      }
    }
  };
};

var _default = (0, _reactJplayerUtils.connectWithId)(mapStateToProps, mapDispatchToProps)(_play2["default"]);

exports["default"] = _default;