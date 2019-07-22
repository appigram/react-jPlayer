"use strict";

var _react = _interopRequireDefault(require("react"));

var _expect = _interopRequireDefault(require("expect"));

var _proxyquire = _interopRequireDefault(require("proxyquire"));

var _containerSetup = _interopRequireDefault(require("../../util/specHelpers/containerSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_proxyquire["default"].noCallThru();

var id = 'TestPlayer';

var mockVideo = function mockVideo() {
  return _react["default"].createElement("video", null);
};

var videoContainer = (0, _proxyquire["default"])('./videoContainer', {
  './video': mockVideo
})["default"];

var setup = function setup(jPlayers, props) {
  return (0, _containerSetup["default"])(videoContainer, jPlayers, props);
};

describe('VideoContainer', function () {
  var jPlayers;
  beforeEach(function () {
    jPlayers = _defineProperty({}, id, {
      mediaSettings: {}
    });
  });
  describe('require', function () {
    it('is true when video is true', function () {
      jPlayers[id].mediaSettings.video = true;

      var _setup = setup(jPlayers),
          wrapper = _setup.wrapper;

      (0, _expect["default"])(wrapper.find(mockVideo).prop('require')).toBe(true);
    });
    it('is falsy when video is falsy', function () {
      var _setup2 = setup(jPlayers),
          wrapper = _setup2.wrapper;

      (0, _expect["default"])(wrapper.find(mockVideo).prop('require')).toBeFalsy();
    });
  });
});