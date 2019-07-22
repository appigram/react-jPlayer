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

var mockVolumeBar = function mockVolumeBar(props) {
  return _react["default"].createElement("div", {
    onClick: function onClick() {
      return props.clickMoveBar(mockBar, mockClickEvent);
    },
    onTouchStart: function onTouchStart() {
      return props.touchMoveBar(mockBar, mockTouchEvent);
    }
  });
};

var VolumeBarContainer = (0, _proxyquire["default"])('./volumeBarContainer', {
  './volumeBar': mockVolumeBar
})["default"];

var setup = function setup(jPlayers, props) {
  return (0, _containerSetup["default"])(VolumeBarContainer, jPlayers, props);
};

describe('VolumeBarContainer', function () {
  var jPlayers;
  beforeEach(function () {
    jPlayers = _defineProperty({}, id, {});
  });
  describe('moveVolumeBar', function () {
    it('verticalVolume when true gives expected output', function () {
      jPlayers[id].verticalVolume = true;

      var _setup = setup(jPlayers),
          wrapper = _setup.wrapper,
          store = _setup.store;

      wrapper.simulate('click');
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.volume).toBe(0.6);
    });
    it('onClick moves moveVolumeBar', function () {
      var _setup2 = setup(jPlayers),
          wrapper = _setup2.wrapper,
          store = _setup2.store;

      wrapper.simulate('click');
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.volume).toBe(1);
    });
    it('onTouch moves moveVolumeBar', function () {
      var _setup3 = setup(jPlayers),
          wrapper = _setup3.wrapper,
          store = _setup3.store;

      wrapper.simulate('touchstart');
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.volume).toBe(1);
    });
  });
});