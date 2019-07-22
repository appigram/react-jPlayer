"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _recompose = require("recompose");

var _reactJplayerUtils = require("react-jplayer-utils");

var _actions = require("../../actions/actions");

var _animation = _interopRequireDefault(require("./animation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var timeoutIds = [];

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    fullScreen: jPlayers[id].fullScreen,
    paused: jPlayers[id].paused,
    startGuiFadeOut: jPlayers[id].startGuiFadeOut,
    guiFadeOut: jPlayers[id].guiFadeOut,
    guiFadeHoldTime: jPlayers[id].guiFadeHoldTime
  };
};

var handlers = {
  onMouseMove: function onMouseMove(props) {
    return function () {
      if (props.fullScreen) {
        props.setOption(props.id, 'startGuiFadeOut', false);
        timeoutIds.forEach(function (timeoutId) {
          return clearTimeout(timeoutId);
        });
      }
    };
  },
  fadeOutHandler: function fadeOutHandler(props) {
    return function () {
      props.setOption(props.id, 'guiFadeOut', true);
    };
  }
};
var lifecycle = {
  startFade: function startFade() {
    if (this.props.fullScreen && !this.props.paused && this.props.startGuiFadeOut) {
      timeoutIds.push(setTimeout(this.props.fadeOutHandler, this.props.guiFadeHoldTime));
    } else if (!this.props.startGuiFadeOut) {
      this.props.setOption(this.props.id, 'guiFadeOut', false);
    }
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.startGuiFadeOut !== this.props.startGuiFadeOut) {
      this.startFade();
    }
  }
};

var _default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setOption: _actions.setOption
}), (0, _recompose.withHandlers)(handlers), (0, _recompose.lifecycle)(lifecycle))(_animation["default"]);

exports["default"] = _default;