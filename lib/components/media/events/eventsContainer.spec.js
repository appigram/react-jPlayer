"use strict";

var _react = _interopRequireDefault(require("react"));

var _expect = _interopRequireDefault(require("expect"));

var _proxyquire = _interopRequireDefault(require("proxyquire"));

var _eventsContainer = _interopRequireDefault(require("./eventsContainer"));

var _urlNotSupportedError = _interopRequireDefault(require("../../../util/errorHandlers/urlNotSupportedError"));

var _containerSetup = _interopRequireDefault(require("../../../util/specHelpers/containerSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_proxyquire["default"].noCallThru();

var id = 'TestPlayer';
var events = {
  onAbort: _expect["default"].createSpy(),
  onCanPlay: _expect["default"].createSpy(),
  onCanPlayThrough: _expect["default"].createSpy(),
  onDurationChange: _expect["default"].createSpy(),
  onEmptied: _expect["default"].createSpy(),
  onEncrypted: _expect["default"].createSpy(),
  onEnded: _expect["default"].createSpy(),
  onError: _expect["default"].createSpy(),
  onLoadedData: _expect["default"].createSpy(),
  onLoadedMetadata: _expect["default"].createSpy(),
  onLoadStart: _expect["default"].createSpy(),
  onPause: _expect["default"].createSpy(),
  onPlay: _expect["default"].createSpy(),
  onPlaying: _expect["default"].createSpy(),
  onProgress: _expect["default"].createSpy(),
  onRateChange: _expect["default"].createSpy(),
  onSeeked: _expect["default"].createSpy(),
  onSeeking: _expect["default"].createSpy(),
  onStalled: _expect["default"].createSpy(),
  onSuspend: _expect["default"].createSpy(),
  onTimeUpdate: _expect["default"].createSpy(),
  onVolumeChange: _expect["default"].createSpy(),
  onWaiting: _expect["default"].createSpy()
};

var setup = function setup(jPlayers, props) {
  return (0, _containerSetup["default"])(_eventsContainer["default"], jPlayers, _objectSpread({
    children: _react["default"].createElement("audio", null),
    updateMediaStatus: _expect["default"].createSpy()
  }, events, {}, props));
};

describe('EventsContainer', function () {
  var jPlayers;
  beforeEach(function () {
    jPlayers = _defineProperty({}, id, {});
  });
  describe('onDurationChange', function () {
    it('updates the media status', function () {
      var _setup = setup(jPlayers),
          wrapper = _setup.wrapper,
          props = _setup.props;

      wrapper.simulate('durationchange');
      (0, _expect["default"])(props.updateMediaStatus).toHaveBeenCalled();
    });
    it('calls the users onDurationChange', function () {
      var _setup2 = setup(jPlayers),
          wrapper = _setup2.wrapper,
          props = _setup2.props;

      wrapper.simulate('durationchange');
      (0, _expect["default"])(props.onDurationChange).toHaveBeenCalled();
      (0, _expect["default"])(props.onDurationChange.calls[0].arguments[0].type).toBe('durationchange');
    });
  });
  describe('onEnded', function () {
    it('pauses the media', function () {
      jPlayers[id].src = 'test.com';

      var _setup3 = setup(jPlayers),
          store = _setup3.store,
          wrapper = _setup3.wrapper;

      wrapper.simulate('ended');
      var testPlayer = store.getState().jPlayers.TestPlayer;
      (0, _expect["default"])(testPlayer.paused).toBe(true);
    });
    it('updates the media status', function () {
      var _setup4 = setup(jPlayers),
          wrapper = _setup4.wrapper,
          props = _setup4.props;

      wrapper.simulate('ended');
      (0, _expect["default"])(props.updateMediaStatus).toHaveBeenCalled();
    });
    it('calls the users onEnded', function () {
      var _setup5 = setup(jPlayers),
          wrapper = _setup5.wrapper,
          props = _setup5.props;

      wrapper.simulate('ended');
      (0, _expect["default"])(props.onEnded).toHaveBeenCalled();
      (0, _expect["default"])(props.onEnded.calls[0].arguments[0].type).toBe('ended');
    });
  });
  describe('onError', function () {
    it('sets the error to urlNotSupported', function () {
      jPlayers[id].src = 'test.com';

      var _setup6 = setup(jPlayers),
          store = _setup6.store,
          wrapper = _setup6.wrapper;

      wrapper.simulate('error');
      var testPlayer = store.getState().jPlayers.TestPlayer;
      (0, _expect["default"])(testPlayer.error).toEqual((0, _urlNotSupportedError["default"])(jPlayers[id].src));
    });
    it('calls the users onError', function () {
      var _setup7 = setup(jPlayers),
          wrapper = _setup7.wrapper,
          props = _setup7.props;

      wrapper.simulate('error');
      (0, _expect["default"])(props.onError).toHaveBeenCalled();
      (0, _expect["default"])(props.onError.calls[0].arguments[0].type).toBe('error');
    });
  });
  describe('onPlay', function () {
    it('plays the media', function () {
      jPlayers[id].src = 'test.com';

      var _setup8 = setup(jPlayers),
          store = _setup8.store,
          wrapper = _setup8.wrapper;

      wrapper.simulate('play');
      var testPlayer = store.getState().jPlayers.TestPlayer;
      (0, _expect["default"])(testPlayer.paused).toBe(false);
    });
    it('calls the users onPlay', function () {
      var _setup9 = setup(jPlayers),
          wrapper = _setup9.wrapper,
          props = _setup9.props;

      wrapper.simulate('play');
      (0, _expect["default"])(props.onPlay).toHaveBeenCalled();
      (0, _expect["default"])(props.onPlay.calls[0].arguments[0].type).toBe('play');
    });
    it('pauses the other jPlayers if pauseOthersOnPlay is true', function () {
      jPlayers[id].pauseOthersOnPlay = true;
      jPlayers.SecondTestPlayer = {
        paused: false,
        src: 'test2.com'
      };

      var _setup10 = setup(jPlayers),
          wrapper = _setup10.wrapper,
          store = _setup10.store;

      wrapper.simulate('play');
      var secondTestPlayer = store.getState().jPlayers.SecondTestPlayer;
      (0, _expect["default"])(secondTestPlayer.paused).toBe(true);
    });
    it('doesnt pause the other jPlayers if pauseOthersOnPlay is not true', function () {
      jPlayers.SecondTestPlayer = {
        paused: false,
        src: 'test2.com'
      };

      var _setup11 = setup(jPlayers),
          wrapper = _setup11.wrapper,
          store = _setup11.store;

      wrapper.simulate('play');
      var secondTestPlayer = store.getState().jPlayers.SecondTestPlayer;
      (0, _expect["default"])(secondTestPlayer.paused).toBe(false);
    });
  });
  describe('onProgress', function () {
    it('updates the media status', function () {
      var _setup12 = setup(jPlayers),
          wrapper = _setup12.wrapper,
          props = _setup12.props;

      wrapper.simulate('progress');
      (0, _expect["default"])(props.updateMediaStatus).toHaveBeenCalled();
    });
    it('calls the users onProgress', function () {
      var _setup13 = setup(jPlayers),
          wrapper = _setup13.wrapper,
          props = _setup13.props;

      wrapper.simulate('progress');
      (0, _expect["default"])(props.onProgress).toHaveBeenCalled();
      (0, _expect["default"])(props.onProgress.calls[0].arguments[0].type).toBe('progress');
    });
  });
  describe('onSeeked', function () {
    it('sets the seeking to false', function () {
      var _setup14 = setup(jPlayers),
          wrapper = _setup14.wrapper,
          store = _setup14.store;

      wrapper.simulate('seeked');
      var testPlayer = store.getState().jPlayers.TestPlayer;
      (0, _expect["default"])(testPlayer.seeking).toBe(false);
    });
    it('calls the users onSeeked', function () {
      var _setup15 = setup(jPlayers),
          wrapper = _setup15.wrapper,
          props = _setup15.props;

      wrapper.simulate('seeked');
      (0, _expect["default"])(props.onSeeked).toHaveBeenCalled();
      (0, _expect["default"])(props.onSeeked.calls[0].arguments[0].type).toBe('seeked');
    });
  });
  describe('onSeeking', function () {
    it('sets the seeking to true', function () {
      var _setup16 = setup(jPlayers),
          wrapper = _setup16.wrapper,
          store = _setup16.store;

      wrapper.simulate('seeking');
      var testPlayer = store.getState().jPlayers.TestPlayer;
      (0, _expect["default"])(testPlayer.seeking).toBe(true);
    });
    it('calls the users onSeeking', function () {
      var _setup17 = setup(jPlayers),
          wrapper = _setup17.wrapper,
          props = _setup17.props;

      wrapper.simulate('seeking');
      (0, _expect["default"])(props.onSeeking).toHaveBeenCalled();
      (0, _expect["default"])(props.onSeeking.calls[0].arguments[0].type).toBe('seeking');
    });
  });
  describe('onTimeUpdate', function () {
    it('updates the media status', function () {
      var _setup18 = setup(jPlayers),
          wrapper = _setup18.wrapper,
          props = _setup18.props;

      wrapper.simulate('timeupdate');
      (0, _expect["default"])(props.updateMediaStatus).toHaveBeenCalled();
    });
    it('calls the users onTimeUpdate', function () {
      var _setup19 = setup(jPlayers),
          wrapper = _setup19.wrapper,
          props = _setup19.props;

      wrapper.simulate('timeupdate');
      (0, _expect["default"])(props.onTimeUpdate).toHaveBeenCalled();
      (0, _expect["default"])(props.onTimeUpdate.calls[0].arguments[0].type).toBe('timeupdate');
    });
  });
  afterEach(function () {
    Object.keys(events).forEach(function (key) {
      return events[key].reset();
    });
  });
});