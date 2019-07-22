"use strict";

var _react = _interopRequireDefault(require("react"));

var _expect = _interopRequireDefault(require("expect"));

var _proxyquire = _interopRequireDefault(require("proxyquire"));

var _containerSetup = _interopRequireDefault(require("../../util/specHelpers/containerSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_proxyquire["default"].noCallThru();

var id = 'TestPlayer';

var mockTitle = function mockTitle() {
  return _react["default"].createElement("div", null);
};

var titleContainer = (0, _proxyquire["default"])('./titleContainer', {
  './title': mockTitle
})["default"];

var setup = function setup(jPlayers, props) {
  return (0, _containerSetup["default"])(titleContainer, jPlayers, props);
};

describe('TitleContainer', function () {
  var jPlayers;
  beforeEach(function () {
    jPlayers = _defineProperty({}, id, {
      media: {
        title: 'Bubble',
        artist: 'Kalimba'
      }
    });
  });
  it('passes in src', function () {
    var _setup = setup(jPlayers),
        wrapper = _setup.wrapper;

    (0, _expect["default"])(wrapper.find(mockTitle).prop('title')).toBe('Kalimba - Bubble');
  });
});