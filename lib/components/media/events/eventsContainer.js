"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _recompose = require("recompose");

var _reactJplayerUtils = require("react-jplayer-utils");

var _events = _interopRequireDefault(require("./events"));

var _urlNotSupportedError = _interopRequireDefault(require("../../../util/errorHandlers/urlNotSupportedError"));

var _actions = require("../../../actions/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapStateToProps = function mapStateToProps(_ref, _ref2) {
  var jPlayers = _ref.jPlayers;
  var id = _ref2.id;
  return {
    src: jPlayers[id].src,
    pauseOthersOnPlay: jPlayers[id].pauseOthersOnPlay,
    otherJPlayerIds: Object.keys(jPlayers).filter(function (key) {
      return key !== id;
    })
  };
};

var contextTypes = {
  internalEvents: _propTypes["default"].shape({
    onAbort: _propTypes["default"].func,
    onCanPlay: _propTypes["default"].func,
    onCanPlayThrough: _propTypes["default"].func,
    onDurationChange: _propTypes["default"].func,
    onEmptied: _propTypes["default"].func,
    onEncrypted: _propTypes["default"].func,
    onEnded: _propTypes["default"].func,
    onError: _propTypes["default"].func,
    onLoadedData: _propTypes["default"].func,
    onLoadedMetadata: _propTypes["default"].func,
    onLoadStart: _propTypes["default"].func,
    onPause: _propTypes["default"].func,
    onPlay: _propTypes["default"].func,
    onPlaying: _propTypes["default"].func,
    onProgress: _propTypes["default"].func,
    onRateChange: _propTypes["default"].func,
    onSeeked: _propTypes["default"].func,
    onSeeking: _propTypes["default"].func,
    onStalled: _propTypes["default"].func,
    onSuspend: _propTypes["default"].func,
    onTimeUpdate: _propTypes["default"].func,
    onVolumeChange: _propTypes["default"].func,
    onWaiting: _propTypes["default"].func
  })
};
var defaultProps = {
  internalEvents: {}
};

var mapEvents = function mapEvents(ownerProps) {
  var events = {};
  Object.keys(ownerProps.internalEvents).forEach(function (key) {
    events[key] = function (e) {
      ownerProps.internalEvents[key](e);
      ownerProps[key](e);
    };
  });
  return _objectSpread({}, ownerProps, {}, events);
};

var firstHandlers = {
  pauseOthers: function pauseOthers(props) {
    return function () {
      props.otherJPlayerIds.forEach(function (id) {
        return props.pause(id);
      });
    };
  }
};
var secondHandlers = {
  onDurationChange: function onDurationChange(props) {
    return function (e) {
      props.updateMediaStatus();
      props.onDurationChange(e);
    };
  },
  onEnded: function onEnded(props) {
    return function (e) {
      props.pause(props.id, 0);
      props.updateMediaStatus();
      props.onEnded(e);
    };
  },
  onError: function onError(props) {
    return function (e) {
      props.setOption(props.id, 'error', (0, _urlNotSupportedError["default"])(props.src));
      props.onError(e);
    };
  },
  onPlay: function onPlay(props) {
    return function (e) {
      if (props.pauseOthersOnPlay) {
        props.pauseOthers();
      }

      props.play(props.id);
      props.onPlay(e);
    };
  },
  onProgress: function onProgress(props) {
    return function (e) {
      var bufferedTimeRanges = [];

      for (var i = 0; i < e.currentTarget.buffered.length; i += 1) {
        bufferedTimeRanges.push({
          start: e.currentTarget.buffered.start(i),
          end: e.currentTarget.buffered.end(i)
        });
      }

      props.updateMediaStatus();
      props.setOption(props.id, 'bufferedTimeRanges', bufferedTimeRanges);
      props.onProgress(e);
    };
  },
  onSeeked: function onSeeked(props) {
    return function (e) {
      props.setOption(props.id, 'seeking', false);
      props.onSeeked(e);
    };
  },
  onSeeking: function onSeeking(props) {
    return function (e) {
      props.setOption(props.id, 'seeking', true);
      props.onSeeking(e);
    };
  },
  onTimeUpdate: function onTimeUpdate(props) {
    return function (e) {
      props.updateMediaStatus();
      props.onTimeUpdate(e);
    };
  }
};

var _default = (0, _recompose.compose)((0, _reactJplayerUtils.connectWithId)(mapStateToProps, {
  setOption: _actions.setOption,
  pause: _actions.pause,
  play: _actions.play
}), (0, _recompose.getContext)(contextTypes), (0, _recompose.defaultProps)(defaultProps), (0, _recompose.mapProps)(mapEvents), (0, _recompose.withHandlers)(firstHandlers), (0, _recompose.withHandlers)(secondHandlers))(_events["default"]);

exports["default"] = _default;