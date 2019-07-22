"use strict";

var _react = _interopRequireDefault(require("react"));

var _expect = _interopRequireDefault(require("expect"));

var _proxyquire = _interopRequireDefault(require("proxyquire"));

var _containerSetup = _interopRequireDefault(require("../../util/specHelpers/containerSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_proxyquire["default"].noCallThru();

var id = 'TestPlayer';
var mockBar = {
  getBoundingClientRect: function getBoundingClientRect() {
    return {
      width: 20,
      height: 200,
      top: 20,
      left: 0
    };
  }
};
var mockClickEvent = {
  clientX: 20,
  clientY: 100,
  preventDefault: _expect["default"].createSpy()
};
var mockTouchEvent = {
  touches: [{
    clientX: 20,
    clientY: 100
  }],
  preventDefault: _expect["default"].createSpy()
};

var mockPlaybackRateBar = function mockPlaybackRateBar(props) {
  return _react["default"].createElement("div", {
    onClick: function onClick() {
      return props.clickMoveBar(mockBar, mockClickEvent);
    },
    onTouchStart: function onTouchStart() {
      return props.touchMoveBar(mockBar, mockTouchEvent);
    }
  });
};

var PlaybackRateBarContainer = (0, _proxyquire["default"])('./playbackRateBarContainer', {
  './playbackRateBar': mockPlaybackRateBar
})["default"];

var setup = function setup(jPlayers, props) {
  return (0, _containerSetup["default"])(PlaybackRateBarContainer, jPlayers, props);
};

describe('PlaybackRateBarContainer', function () {
  var jPlayers;
  beforeEach(function () {
    jPlayers = _defineProperty({}, id, {
      maxPlaybackRate: 1,
      minPlaybackRate: 0
    });
  });
  describe('movePlaybackRate', function () {
    it('verticalPlaybackRate when true gives expected output', function () {
      jPlayers[id].verticalPlaybackRate = true;

      var _setup = setup(jPlayers),
          wrapper = _setup.wrapper,
          store = _setup.store;

      wrapper.simulate('click');
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.playbackRate).toBe(0.6);
    });
    it('onClick moves playbackRate', function () {
      var _setup2 = setup(jPlayers),
          wrapper = _setup2.wrapper,
          store = _setup2.store;

      wrapper.simulate('click');
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.playbackRate).toBe(1);
    });
    it('onTouch moves playbackRate', function () {
      var _setup3 = setup(jPlayers),
          wrapper = _setup3.wrapper,
          store = _setup3.store;

      wrapper.simulate('touchstart');
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.playbackRate).toBe(1);
    });
  });
});