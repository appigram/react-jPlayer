"use strict";

var _react = _interopRequireDefault(require("react"));

var _expect = _interopRequireDefault(require("expect"));

var _proxyquire = _interopRequireDefault(require("proxyquire"));

var _containerSetup = _interopRequireDefault(require("../../util/specHelpers/containerSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_proxyquire["default"].noCallThru();

var id = 'TestPlayer';

var mockCurrentTime = function mockCurrentTime() {
  return _react["default"].createElement("div", null);
};

var currentTimeContainer = (0, _proxyquire["default"])('./currentTimeContainer', {
  './currentTime': mockCurrentTime
})["default"];

var setup = function setup(jPlayers, props) {
  return (0, _containerSetup["default"])(currentTimeContainer, jPlayers, props);
};

describe('CurrentTimeContainer', function () {
  var jPlayers;
  beforeEach(function () {
    jPlayers = _defineProperty({}, id, {
      currentTimeText: '2:20'
    });
  });
  it('passes in currentTimeText', function () {
    var _setup = setup(jPlayers),
        wrapper = _setup.wrapper;

    (0, _expect["default"])(wrapper.find(mockCurrentTime).prop('currentTimeText')).toBe('2:20');
  });
});