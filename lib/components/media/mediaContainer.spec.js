"use strict";

var _react = _interopRequireDefault(require("react"));

var _expect = _interopRequireDefault(require("expect"));

var _proxyquire = _interopRequireDefault(require("proxyquire"));

var _containerSetup = _interopRequireDefault(require("../../util/specHelpers/containerSetup.spec"));

var _actions = require("../../actions/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_proxyquire["default"].noCallThru();

var mockCurrentMedia;
var id = 'TestPlayer';

var mockMedia = function mockMedia(_ref) {
  var setCurrentMedia = _ref.setCurrentMedia;

  var mockRef = function mockRef() {
    setCurrentMedia(mockCurrentMedia);
  };

  return _react["default"].createElement("audio", {
    ref: mockRef
  });
};

var MediaContainer = (0, _proxyquire["default"])('./mediaContainer', {
  './media': mockMedia
})["default"];

var setup = function setup(jPlayers, props) {
  return (0, _containerSetup["default"])(MediaContainer, jPlayers, _objectSpread({
    children: _react["default"].createElement("audio", null)
  }, props));
};

describe('MediaContainer', function () {
  var jPlayers;
  beforeEach(function () {
    jPlayers = _defineProperty({}, id, {
      src: 'www.test.com',
      playHeadPercent: 0,
      paused: false,
      loop: false,
      autoplay: false,
      defaultPlaybackRate: 0,
      muted: false,
      plabackRate: 0,
      preload: 'auto',
      volume: 0,
      media: {
        tracks: [{
          src: 'www.test.vrt'
        }]
      }
    });
    mockCurrentMedia = {
      seekable: {
        length: 1,
        end: _expect["default"].createSpy().andReturn(100)
      },
      pause: _expect["default"].createSpy(),
      play: _expect["default"].createSpy()
    };
  });
  describe('onLoad', function () {
    it('sets src if src not null', function () {
      setup(jPlayers);
      (0, _expect["default"])(mockCurrentMedia.src).toBe(jPlayers[id].src);
    });
    it('doesnt set src if src null', function () {
      jPlayers[id].src = null;
      setup(jPlayers);
      (0, _expect["default"])(mockCurrentMedia.src).toBe(undefined);
    });
    it('sets other media values on load', function () {
      setup(jPlayers);
      (0, _expect["default"])(mockCurrentMedia.defaultPlaybackRate).toBe(jPlayers[id].defaultPlaybackRate);
      (0, _expect["default"])(mockCurrentMedia.playbackRate).toBe(jPlayers[id].playbackRate);
      (0, _expect["default"])(mockCurrentMedia.preload).toBe(jPlayers[id].preload);
      (0, _expect["default"])(mockCurrentMedia.volume).toBe(jPlayers[id].volume);
      (0, _expect["default"])(mockCurrentMedia.muted).toBe(jPlayers[id].muted);
      (0, _expect["default"])(mockCurrentMedia.autoplay).toBe(jPlayers[id].autoplay);
      (0, _expect["default"])(mockCurrentMedia.loop).toBe(jPlayers[id].loop);
    });
  });
  describe('onUpdate', function () {
    it('updates media src if src changes', function () {
      var mediaElement = document.createElement('audio');
      var media = {
        sources: {
          mp3: 'www.test.mp3'
        }
      };

      var _setup = setup(jPlayers),
          store = _setup.store;

      _expect["default"].spyOn(document, 'createElement').andReturn(mediaElement);

      _expect["default"].spyOn(mediaElement, 'canPlayType').andReturn('probably');

      store.dispatch((0, _actions.setMedia)(id, media));
      (0, _expect["default"])(mockCurrentMedia.src).toBe(media.sources.mp3);
    });
    it('updates other media values on change', function () {
      var _setup2 = setup(jPlayers),
          store = _setup2.store;

      store.dispatch((0, _actions.setOption)(id, 'defaultPlaybackRate', 0.3));
      store.dispatch((0, _actions.setOption)(id, 'playbackRate', 0.45));
      store.dispatch((0, _actions.setOption)(id, 'preload', true));
      store.dispatch((0, _actions.setVolume)(id, 0.77));
      store.dispatch((0, _actions.setMute)(id, true));
      store.dispatch((0, _actions.setOption)(id, 'autoplay', true));
      store.dispatch((0, _actions.setOption)(id, 'loop', true));
      (0, _expect["default"])(mockCurrentMedia.defaultPlaybackRate).toBe(0.3);
      (0, _expect["default"])(mockCurrentMedia.playbackRate).toBe(0.45);
      (0, _expect["default"])(mockCurrentMedia.preload).toBe(true);
      (0, _expect["default"])(mockCurrentMedia.volume).toBe(0.77);
      (0, _expect["default"])(mockCurrentMedia.muted).toBe(true);
      (0, _expect["default"])(mockCurrentMedia.autoplay).toBe(true);
      (0, _expect["default"])(mockCurrentMedia.loop).toBe(true);
    });
    it('updates the media time on new time change', function () {
      var _setup3 = setup(jPlayers),
          store = _setup3.store;

      store.dispatch((0, _actions.setOption)(id, 'newTime', 222));
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(mockCurrentMedia.currentTime).toBe(222);
      (0, _expect["default"])(jPlayer.newTime).toBe(null);
    });
    describe('updateMediaTimeAfterSeeking', function () {
      it("when the media is seekable it updates currentTime \n          and currentPercentRelative", function () {
        var _setup4 = setup(jPlayers),
            store = _setup4.store;

        store.dispatch((0, _actions.setPlayHead)(id, 22));
        var jPlayer = store.getState().jPlayers[id];
        (0, _expect["default"])(mockCurrentMedia.currentTime).toBe(22);
        (0, _expect["default"])(jPlayer.currentPercentRelative).toBe(22);
      });
      it("when the media has an infinitly seekable \n          it does not update the currentTime and currentPercentRelative", function () {
        var _setup5 = setup(jPlayers),
            store = _setup5.store;

        mockCurrentMedia.seekable.end = _expect["default"].createSpy().andReturn(Infinity);
        store.dispatch((0, _actions.setPlayHead)(id, 22));
        var jPlayer = store.getState().jPlayers[id];
        (0, _expect["default"])(mockCurrentMedia.currentTime).toNotBe(22);
        (0, _expect["default"])(jPlayer.currentPercentRelative).toNotBe(22);
      });
    });
    describe('updateMediaPlayState', function () {
      it('pauses the media when paused', function () {
        var _setup6 = setup(jPlayers),
            store = _setup6.store;

        store.dispatch((0, _actions.pause)(id));
        (0, _expect["default"])(mockCurrentMedia.pause).toHaveBeenCalled();
      });
      it('plays the media when paused is not true', function () {
        jPlayers[id].paused = true;

        var _setup7 = setup(jPlayers),
            store = _setup7.store;

        store.dispatch((0, _actions.play)(id));
        (0, _expect["default"])(mockCurrentMedia.play).toHaveBeenCalled();
      });
    });
  });
  afterEach(function () {
    _expect["default"].restoreSpies();
  });
});