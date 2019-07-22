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

var mockSeekbar = function mockSeekbar(props) {
  return _react["default"].createElement("div", {
    onClick: function onClick() {
      return props.clickMoveBar(mockBar, mockClickEvent);
    },
    onTouchStart: function onTouchStart() {
      return props.touchMoveBar(mockBar, mockTouchEvent);
    }
  });
};

var SeekBarContainer = (0, _proxyquire["default"])('./seekBarContainer', {
  './seekBar': mockSeekbar
})["default"];

var setup = function setup(jPlayers, props) {
  return (0, _containerSetup["default"])(SeekBarContainer, jPlayers, props);
};

describe('SeekBarContainer', function () {
  var jPlayers;
  beforeEach(function () {
    jPlayers = _defineProperty({}, id, {
      src: 'www.test.com'
    });
  });
  describe('moveSeekbar', function () {
    it('onClick moves playHead', function () {
      var _setup = setup(jPlayers),
          wrapper = _setup.wrapper,
          store = _setup.store;

      wrapper.simulate('click');
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.playHeadPercent).toBe(100);
    });
    it('onTouch moves playHead', function () {
      var _setup2 = setup(jPlayers),
          wrapper = _setup2.wrapper,
          store = _setup2.store;

      wrapper.simulate('touchstart');
      var jPlayer = store.getState().jPlayers[id];
      (0, _expect["default"])(jPlayer.playHeadPercent).toBe(100);
    });
  });
});