"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _initializeOptions = _interopRequireDefault(require("../initializeOptions/initializeOptions"));

var _reducer = _interopRequireDefault(require("./reducer"));

var _constants = require("../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mockMedia = function mockMedia(mediaType) {
  var media = document.createElement(mediaType);

  _expect["default"].spyOn(document, 'createElement').andReturn(media);

  _expect["default"].spyOn(media, 'canPlayType').andReturn('probably');
};

var id = 'TestPlayer';
describe('reducer', function () {
  var state;
  beforeEach(function () {
    state = _defineProperty({}, id, {});
  });
  afterEach(function () {
    _expect["default"].restoreSpies();
  });
  it('should return the state if action is invalid', function () {
    (0, _expect["default"])((0, _reducer["default"])(state, '@@jPlayer-test')).toEqual(state);
  });
  it('should return initial state if the state is not specified', function () {
    var jPlayerOptions = {
      id: id
    };
    (0, _initializeOptions["default"])(jPlayerOptions);
    (0, _expect["default"])((0, _reducer["default"])(undefined, '@@jPlayer-test')).toEqual(_defineProperty({}, id, _objectSpread({}, _constants.defaultStatus, {}, _constants.defaultOptions, {}, jPlayerOptions)));
  });
  it('does focus on current player if keyEnabled true', function () {
    state[id].keyEnabled = true;
    state.SecondPlayer = {
      focused: true
    };
    var newState = (0, _reducer["default"])(state, {
      type: _constants.actionNames.SET_OPTION,
      id: id,
      key: 'preload',
      value: 'auto'
    });
    (0, _expect["default"])(newState[id].focused).toBe(true);
    (0, _expect["default"])(newState.SecondPlayer.focused).toNotBe(true);
  });
  it('focuses on first keyEnabled player if current keyEnabled is false', function () {
    state[id].keyEnabled = false;
    state.SecondPlayer = {
      keyEnabled: true
    };
    var newState = (0, _reducer["default"])(state, {
      type: _constants.actionNames.SET_OPTION,
      id: id,
      key: 'preload',
      value: 'auto'
    });
    (0, _expect["default"])(newState[id].focused).toNotBe(true);
    (0, _expect["default"])(newState.SecondPlayer.focused).toBe(true);
  });
  describe('SET_OPTION', function () {
    it('should handle generic value', function () {
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.SET_OPTION,
        id: id,
        key: 'preload',
        value: 'auto'
      });
      (0, _expect["default"])(newState[id]).toEqual({
        preload: 'auto'
      });
    });
    it('should handle media', function () {
      mockMedia('audio');
      var src = 'test.mp3';
      var media = {
        sources: {
          mp3: src
        }
      };
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.SET_OPTION,
        id: id,
        key: 'media',
        value: media
      });
      (0, _expect["default"])(newState[id].media).toBe(media);
    });
    it('should handle no media', function () {
      var media = {};
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.SET_OPTION,
        id: id,
        key: 'media',
        value: media
      });
      (0, _expect["default"])(newState[id]).toEqual(_objectSpread({}, _constants.defaultStatus, {
        media: _constants.defaultOptions.media
      }));
    });
    it('should handle playHeadPercent', function () {
      var percent = 22.3;
      var src = 'test.mp3';
      state[id].src = src;
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.SET_OPTION,
        id: id,
        key: 'playHeadPercent',
        value: percent
      });
      (0, _expect["default"])(newState[id]).toEqual({
        playHeadPercent: percent,
        src: src
      });
    });
    it('should handle volume', function () {
      var volume = 0.23;
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.SET_OPTION,
        id: id,
        key: 'volume',
        value: volume
      });
      (0, _expect["default"])(newState[id]).toEqual({
        volume: volume,
        muted: false
      });
    });
    it('should handle muted', function () {
      var mute = true;
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.SET_OPTION,
        id: id,
        key: 'muted',
        value: mute
      });
      (0, _expect["default"])(newState[id]).toEqual({
        muted: mute
      });
    });
  });
  describe('SET_MEDIA', function () {
    it('should handle media', function () {
      mockMedia('audio');
      var src = 'test.mp3';
      var media = {
        sources: {
          mp3: src
        }
      };
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.SET_MEDIA,
        id: id,
        media: media
      });
      (0, _expect["default"])(newState[id]).toEqual(_objectSpread({}, _constants.defaultStatus, {
        mediaSettings: {
          formats: [{
            supplied: 'mp3',
            supported: 'probably'
          }],
          video: false,
          nonSupported: false
        },
        media: media,
        video: false,
        src: src,
        error: undefined
      }));
    });
    it('should handle non supported format', function () {
      mockMedia('audio');
      var media = {
        sources: {
          xxx: 'test.xxx'
        }
      };
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.SET_MEDIA,
        id: id,
        media: media
      });
      (0, _expect["default"])(newState[id].error).toExist();
    });
  });
  describe('CLEAR_MEDIA', function () {
    it('should reset the status', function () {
      var src = 'test.mp3';
      state[id].src = src;
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.CLEAR_MEDIA,
        id: id
      });
      (0, _expect["default"])(newState[id]).toEqual(_objectSpread({}, _constants.defaultStatus, {
        media: _constants.defaultOptions.media
      }));
    });
  });
  describe('PLAY', function () {
    it('should handle with src and no custom time', function () {
      var src = 'test.mp3';
      state[id].src = src;
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.PLAY,
        id: id
      });
      (0, _expect["default"])(newState[id]).toEqual({
        paused: false,
        src: src,
        newTime: null
      });
    });
    it('should handle with src and custom time', function () {
      var time = 23;
      var src = 'test.mp3';
      state[id].src = src;
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.PLAY,
        id: id,
        time: time
      });
      (0, _expect["default"])(newState[id]).toEqual({
        paused: false,
        src: src,
        newTime: time
      });
    });
    it('should handle with no src', function () {
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.PLAY,
        id: id
      });
      (0, _expect["default"])(newState[id].error).toExist();
    });
  });
  describe('PAUSE', function () {
    it('should handle with src and no custom time', function () {
      var src = 'test.mp3';
      state[id].src = src;
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.PAUSE,
        id: id
      });
      (0, _expect["default"])(newState[id]).toEqual({
        paused: true,
        src: src,
        newTime: null
      });
    });
    it('should handle with src and custom time', function () {
      var time = 23;
      var src = 'test.mp3';
      state[id].src = src;
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.PAUSE,
        id: id,
        time: time
      });
      (0, _expect["default"])(newState[id]).toEqual({
        paused: true,
        src: src,
        newTime: time
      });
    });
    it('should handle PAUSE with no src', function () {
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.PAUSE,
        id: id
      });
      (0, _expect["default"])(newState[id].error).toExist();
    });
  });
  describe('PLAY_HEAD', function () {
    it('should handle with src', function () {
      var percent = 22;
      var src = 'test.mp3';
      state[id].src = src;
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.PLAY_HEAD,
        id: id,
        percent: percent
      });
      (0, _expect["default"])(newState[id]).toEqual({
        playHeadPercent: percent,
        src: src
      });
    });
    it('should handle with no src', function () {
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.PLAY_HEAD,
        id: id
      });
      (0, _expect["default"])(newState[id].error).toExist();
    });
  });
  describe('VOLUME', function () {
    it('muted should be true when volume <= 0', function () {
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.VOLUME,
        id: id,
        volume: -10
      });
      (0, _expect["default"])(newState[id]).toEqual({
        volume: 0,
        muted: true
      });
    });
    it('muted should be false when volume >= 0', function () {
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.VOLUME,
        id: id,
        volume: 10
      });
      (0, _expect["default"])(newState[id]).toEqual({
        volume: 1,
        muted: false
      });
    });
  });
  describe('MUTE', function () {
    it('should set muted', function () {
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.MUTE,
        id: id,
        mute: true
      });
      (0, _expect["default"])(newState[id]).toEqual({
        muted: true
      });
    });
  });
  describe('FOCUS', function () {
    it('does not focus if keyEnabled not true', function () {
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.FOCUS,
        id: id
      });
      (0, _expect["default"])(newState[id]).toEqual({});
    });
    it('other player keeps focused if keyEnabled not true', function () {
      state.SecondPlayer = {
        keyEnabled: true,
        focused: true
      };
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.FOCUS,
        id: id
      });
      (0, _expect["default"])(newState.SecondPlayer).toEqual({
        keyEnabled: true,
        focused: true
      });
    });
    it('does focus if keyEnabled true', function () {
      state[id].keyEnabled = true;
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.FOCUS,
        id: id
      });
      (0, _expect["default"])(newState[id]).toEqual({
        focused: true,
        keyEnabled: true
      });
    });
    it('sets all other jPlayers focused to false if keyEnabled true', function () {
      state.SecondPlayer = {
        keyEnabled: true
      };
      state[id].keyEnabled = true;
      var newState = (0, _reducer["default"])(state, {
        type: _constants.actionNames.FOCUS,
        id: id
      });
      (0, _expect["default"])(newState.SecondPlayer).toEqual({
        keyEnabled: true,
        focused: false
      });
    });
  });
});