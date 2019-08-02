"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactJplayerUtils = require("@appigram/react-jplayer-utils");

var _recompose = require("recompose");

var _actions = require("../../actions/actions");

var _repeat = _interopRequireDefault(require("./repeat"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    loop: jPlayers[id].loop
  };
};

var handlers = {
  loop: function loop(props) {
    return function () {
      return props.setOption(props.id, 'loop', !props.loop);
    };
  }
};

var _default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setOption: _actions.setOption
}), (0, _recompose.withHandlers)(handlers))(_repeat["default"]);

exports["default"] = _default;