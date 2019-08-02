"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _recompose = require("recompose");

var _reactJplayerUtils = require("@appigram/react-jplayer-utils");

var _states = _interopRequireDefault(require("./states/states"));

var _jPlayer = _interopRequireDefault(require("./jPlayer"));

var _actions = require("../../actions/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var mapStateToProps = function mapStateToProps(_ref, ownProps) {
  var jPlayers = _ref.jPlayers;
  var id = ownProps.id,
      keyBindings = ownProps.keyBindings,
      children = ownProps.children,
      className = ownProps.className;
  return {
    media: jPlayers[id].media,
    fullScreen: jPlayers[id].fullScreen,
    paused: jPlayers[id].paused,
    startGuiFadeOut: jPlayers[id].startGuiFadeOut,
    keyBindings: keyBindings,
    id: id,
    children: children,
    className: (0, _states["default"])(jPlayers[id], ownProps.states, className)
  };
};

var handlers = {
  onMouseMoveCapture: function onMouseMoveCapture(props) {
    return function () {
      if (props.fullScreen) {
        if (props.paused || props.startGuiFadeOut) {
          props.setOption(props.id, 'startGuiFadeOut', false);
        } else {
          props.setOption(props.id, 'startGuiFadeOut', true);
        }
      }
    };
  }
};
var lifecycle = {
  componentDidMount: function componentDidMount() {
    if (Object.keys(this.props.media.sources).length > 0) {
      this.props.setMedia(this.props.id, this.props.media);
    }

    this.props.setOption(this.props.id, 'volumeSupported', (0, _reactJplayerUtils.canSetVolume)());
  }
};

var _default = (0, _recompose.compose)((0, _recompose.withContext)({
  id: _propTypes["default"].string
}, function (_ref2) {
  var id = _ref2.id;
  return {
    id: id
  };
}), (0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setMedia: _actions.setMedia,
  setOption: _actions.setOption
}), (0, _recompose.withHandlers)(handlers), (0, _recompose.lifecycle)(lifecycle))(_jPlayer["default"]);

exports["default"] = _default;