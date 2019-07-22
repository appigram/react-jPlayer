"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactJplayerUtils = require("react-jplayer-utils");

var _initializeOptions = require("../initializeOptions/initializeOptions");

var _constants = require("../util/constants");

var _urlNotSetError = _interopRequireDefault(require("../util/errorHandlers/urlNotSetError"));

var _noFormatSupportedError = _interopRequireDefault(require("../util/errorHandlers/noFormatSupportedError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var updateFormats = function updateFormats(sources) {
  var formats = [];
  Object.keys(sources).forEach(function (supplied) {
    var canPlayType;

    try {
      // Some legacy browsers don't have canPlayType property
      canPlayType = document.createElement(_constants.formats[supplied].MEDIA).canPlayType(_constants.formats[supplied].CODEC);
    } catch (error) {
      canPlayType = '';
    }

    formats.push({
      supplied: supplied,
      supported: canPlayType
    });
  });
  return formats;
};

var clearMedia = function clearMedia() {
  return _objectSpread({}, _constants.defaultStatus, {
    media: _constants.defaultOptions.media
  });
};

var setMedia = function setMedia(_, _ref) {
  var media = _ref.media;
  var video;
  var src;
  var nonSupported = true;
  var error;
  var formats = updateFormats(media.sources);
  formats.forEach(function (format) {
    if (format.supported && nonSupported) {
      video = _constants.formats[format.supplied].MEDIA === 'video';
      src = media.sources[format.supplied];
      nonSupported = false;
    }
  });

  if (nonSupported) {
    error = (0, _noFormatSupportedError["default"])("media.sources: '".concat(Object.keys(media.sources).join(', '), "'"));
  }

  return _objectSpread({}, clearMedia(), {
    mediaSettings: {
      formats: formats,
      video: video,
      nonSupported: nonSupported
    },
    media: media,
    video: video,
    src: src,
    paused: true,
    error: error
  });
};

var play = function play(jPlayer, _ref2) {
  var time = _ref2.time;

  if (jPlayer.src) {
    return {
      paused: false,
      newTime: !isNaN(time) ? time : null
    };
  }

  return {
    error: (0, _urlNotSetError["default"])(play.name)
  };
};

var pause = function pause(jPlayer, _ref3) {
  var time = _ref3.time;

  if (jPlayer.src) {
    return {
      paused: true,
      newTime: !isNaN(time) ? time : null
    };
  }

  return {
    error: (0, _urlNotSetError["default"])(pause.name)
  };
};

var setPlayHead = function setPlayHead(jPlayer, _ref4) {
  var percent = _ref4.percent;
  var limitedPercent = (0, _reactJplayerUtils.limitValue)(percent, 0, 100);

  if (jPlayer.src) {
    return {
      playHeadPercent: limitedPercent
    };
  }

  return {
    error: (0, _urlNotSetError["default"])(setPlayHead.name)
  };
};

var setVolume = function setVolume(_, _ref5) {
  var volume = _ref5.volume;
  return {
    volume: (0, _reactJplayerUtils.limitValue)(volume, 0, 1),
    muted: volume <= 0
  };
};

var setMute = function setMute(_, _ref6) {
  var mute = _ref6.mute;
  return {
    muted: mute
  };
};

var setOption = function setOption(jPlayer, _ref7) {
  var key = _ref7.key,
      value = _ref7.value;

  switch (key) {
    case 'media':
      {
        if (Object.keys(value).some(function (v) {
          return v;
        })) {
          return setMedia(jPlayer, {
            media: value
          });
        }

        return clearMedia();
      }

    case 'playHeadPercent':
      return setPlayHead(jPlayer, {
        percent: value
      });

    case 'volume':
      return setVolume(jPlayer, {
        volume: value
      });

    case 'muted':
      return setMute(jPlayer, {
        mute: value
      });

    default:
      return _defineProperty({}, key, value);
  }
};

var focus = function focus(state, id) {
  var newState = _objectSpread({}, state);

  if (newState[id].keyEnabled) {
    Object.keys(newState).forEach(function (key) {
      if (key === id) {
        newState[key].focused = true;
      } else {
        newState[key].focused = false;
      }
    });
  }

  return newState;
};

var focusOnFirstKeyEnabledPlayer = function focusOnFirstKeyEnabledPlayer(state) {
  var firstKeyEnabledPlayer = Object.keys(state).filter(function (key) {
    return state[key].keyEnabled;
  }).shift();

  if (state[firstKeyEnabledPlayer] !== undefined) {
    var focusedPlayer = _objectSpread({}, state[firstKeyEnabledPlayer], {
      focused: true
    });

    return _objectSpread({}, state, _defineProperty({}, firstKeyEnabledPlayer, focusedPlayer));
  }

  return state;
};

var updateJPlayer = function updateJPlayer(state, action, fn) {
  var value = fn(state[action.id], action);
  var newState = state[action.id].keyEnabled ? focus(state, action.id) : focusOnFirstKeyEnabledPlayer(state);
  var jPlayer = newState[action.id];
  return _objectSpread({}, newState, _defineProperty({}, action.id, _objectSpread({}, jPlayer, {}, value)));
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _initializeOptions.initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var updateValue = function updateValue(fn) {
    return updateJPlayer(state, action, fn);
  };

  switch (action.type) {
    case _constants.actionNames.SET_MEDIA:
      return updateValue(setMedia);

    case _constants.actionNames.CLEAR_MEDIA:
      return updateValue(clearMedia);

    case _constants.actionNames.PLAY:
      return updateValue(play);

    case _constants.actionNames.PAUSE:
      return updateValue(pause);

    case _constants.actionNames.PLAY_HEAD:
      return updateValue(setPlayHead);

    case _constants.actionNames.VOLUME:
      return updateValue(setVolume);

    case _constants.actionNames.MUTE:
      return updateValue(setMute);

    case _constants.actionNames.SET_OPTION:
      return updateValue(setOption);

    case _constants.actionNames.FOCUS:
      return focus(state, action.id);

    default:
      return state;
  }
};

var _default = reducer;
exports["default"] = _default;