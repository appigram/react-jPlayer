"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _timeDisplayContainer = _interopRequireDefault(require("./timeDisplayContainer"));

var _actions = require("../../../actions/actions");

var _constants = require("../../../util/constants");

var _containerSetup = _interopRequireDefault(require("../../../util/specHelpers/containerSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var id = 'TestPlayer';

var setup = function setup(jPlayers, props) {
  return (0, _containerSetup["default"])(_timeDisplayContainer["default"], jPlayers, props);
};

describe('TimeDisplayContainer', function () {
  var jPlayers;
  beforeEach(function () {
    jPlayers = _defineProperty({}, id, {
      currentTime: 10,
      duration: 20,
      showRemainingDuration: false,
      timeFormats: _constants.defaultOptions.timeFormats
    });
  });
  describe('setDurationText', function () {
    it('converts and formats durationText to duration', function () {
      var _setup = setup(jPlayers),
          store = _setup.store;

      store.dispatch((0, _actions.setOption)(id, 'duration', 222));
      var jPlayer = store.getState().jPlayers.TestPlayer;
      (0, _expect["default"])(jPlayer.durationText).toBe('03:42');
    });
    it('updates durationText when timeformats changes', function () {
      var _setup2 = setup(jPlayers),
          store = _setup2.store;

      var newTimeFormats = _objectSpread({}, _constants.defaultOptions.timeFormats, {
        sepMin: '-'
      });

      store.dispatch((0, _actions.setOption)(id, 'timeFormats', newTimeFormats));
      var jPlayer = store.getState().jPlayers.TestPlayer;
      (0, _expect["default"])(jPlayer.durationText).toBe('00-20');
    });
    it('updates durationText when currentTime changes', function () {
      var _setup3 = setup(jPlayers),
          store = _setup3.store;

      store.dispatch((0, _actions.setOption)(id, 'currentTime', 13));
      var jPlayer = store.getState().jPlayers.TestPlayer;
      (0, _expect["default"])(jPlayer.durationText).toBe('00:20');
    });
    describe('when showRemainingDuration is true', function () {
      it('converts and formats durationText correctly to remaining time when is time remaining', function () {
        var _setup4 = setup(jPlayers),
            store = _setup4.store;

        store.dispatch((0, _actions.setOption)(id, 'showRemainingDuration', true));
        var jPlayer = store.getState().jPlayers.TestPlayer;
        (0, _expect["default"])(jPlayer.durationText).toBe('-00:10');
      });
      it('converts and formats durationText to time when no time remaining', function () {
        jPlayers[id].currentTime = 20;

        var _setup5 = setup(jPlayers),
            store = _setup5.store;

        store.dispatch((0, _actions.setOption)(id, 'showRemainingDuration', true));
        var jPlayer = store.getState().jPlayers.TestPlayer;
        (0, _expect["default"])(jPlayer.durationText).toBe('00:00');
      });
    });
  });
  describe('setCurrentTimeText', function () {
    it('converts and formats currentTimeText to currentTime', function () {
      var _setup6 = setup(jPlayers),
          store = _setup6.store;

      store.dispatch((0, _actions.setOption)(id, 'currentTime', 17));
      var jPlayer = store.getState().jPlayers.TestPlayer;
      (0, _expect["default"])(jPlayer.currentTimeText).toBe('00:17');
    });
    it('updates currentTimeText when timeformats changes', function () {
      var _setup7 = setup(jPlayers),
          store = _setup7.store;

      var newTimeFormats = _objectSpread({}, _constants.defaultOptions.timeFormats, {
        sepMin: '-'
      });

      store.dispatch((0, _actions.setOption)(id, 'timeFormats', newTimeFormats));
      var jPlayer = store.getState().jPlayers.TestPlayer;
      (0, _expect["default"])(jPlayer.currentTimeText).toBe('00-10');
    });
  });
});