"use strict";

var _react = _interopRequireDefault(require("react"));

var _expect = _interopRequireDefault(require("expect"));

var _proxyquire = _interopRequireDefault(require("proxyquire"));

var _containerSetup = _interopRequireDefault(require("../../util/specHelpers/containerSetup.spec"));

var _constants = require("../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_proxyquire["default"].noCallThru();

var id = 'TestPlayer';

var mockJPlayer = function mockJPlayer(_ref) {
  var onMouseMoveCapture = _ref.onMouseMoveCapture;
  return _react["default"].createElement("div", {
    onMouseMoveCapture: onMouseMoveCapture
  });
};

var JPlayerContainer = (0, _proxyquire["default"])('./jPlayerContainer', {
  './jPlayer': mockJPlayer,
  './states/states': function statesStates() {
    return 'jp-test';
  }
})["default"];

var setup = function setup(jPlayers, props) {
  return (0, _containerSetup["default"])(JPlayerContainer, jPlayers, _objectSpread({
    id: id,
    children: _react["default"].createElement("div", null)
  }, props));
};

describe('JPlayerContainer', function () {
  var jPlayers;
  beforeEach(function () {
    jPlayers = _defineProperty({}, id, {
      fullScreen: false,
      paused: false,
      startGuiFadeOut: false,
      media: _constants.defaultOptions.media
    });
  });
  it('sets media on load', function () {
    jPlayers[id].media = {
      title: 'testTitle',
      sources: [{
        mp3: 'www.test.com'
      }]
    };

    var _setup = setup(jPlayers),
        store = _setup.store;

    var jPlayer = store.getState().jPlayers.TestPlayer;
    (0, _expect["default"])(jPlayer.media).toBe(jPlayers[id].media);
  });
  it('sets volumeSupported on load', function () {
    var _setup2 = setup(jPlayers),
        store = _setup2.store;

    var jPlayer = store.getState().jPlayers.TestPlayer;
    (0, _expect["default"])(jPlayer.volumeSupported).toBe(true);
  });
  describe('onMouseMoveCapture', function () {
    it('sets startGuiFadeOut to false if fullScreen and paused', function () {
      jPlayers[id].fullScreen = true;
      jPlayers[id].paused = true;

      var _setup3 = setup(jPlayers),
          store = _setup3.store,
          wrapper = _setup3.wrapper;

      wrapper.simulate('mousemove');
      var jPlayer = store.getState().jPlayers.TestPlayer;
      (0, _expect["default"])(jPlayer.startGuiFadeOut).toBe(false);
    });
    it('sets startGuiFadeOut to false if fullScreen, !paused and startGuiFadeOut', function () {
      jPlayers[id].fullScreen = true;
      jPlayers[id].startGuiFadeOut = true;

      var _setup4 = setup(jPlayers),
          store = _setup4.store,
          wrapper = _setup4.wrapper;

      wrapper.simulate('mousemove');
      var jPlayer = store.getState().jPlayers.TestPlayer;
      (0, _expect["default"])(jPlayer.startGuiFadeOut).toBe(false);
    });
    it('sets startGuiFadeOut to true if fullScreen, !paused and !startGuiFadeOut', function () {
      jPlayers[id].fullScreen = true;

      var _setup5 = setup(jPlayers),
          store = _setup5.store,
          wrapper = _setup5.wrapper;

      wrapper.simulate('mousemove');
      var jPlayer = store.getState().jPlayers.TestPlayer;
      (0, _expect["default"])(jPlayer.startGuiFadeOut).toBe(true);
    });
  });
});