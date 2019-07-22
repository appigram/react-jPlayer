"use strict";

var _react = _interopRequireDefault(require("react"));

var _expect = _interopRequireDefault(require("expect"));

var _proxyquire = _interopRequireDefault(require("proxyquire"));

var _containerSetup = _interopRequireDefault(require("../../util/specHelpers/containerSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_proxyquire["default"].noCallThru();

var id = 'TestPlayer';

var mockDownload = function mockDownload() {
  return _react["default"].createElement("div", null);
};

var downloadContainer = (0, _proxyquire["default"])('./downloadContainer', {
  './download': mockDownload
})["default"];

var setup = function setup(jPlayers, props) {
  return (0, _containerSetup["default"])(downloadContainer, jPlayers, props);
};

describe('DownloadContainer', function () {
  var jPlayers;
  beforeEach(function () {
    jPlayers = _defineProperty({}, id, {
      media: {
        free: true
      },
      src: 'test.com'
    });
  });
  it('passes in free', function () {
    var _setup = setup(jPlayers),
        wrapper = _setup.wrapper;

    (0, _expect["default"])(wrapper.find(mockDownload).prop('free')).toBe(true);
  });
  it('passes in url', function () {
    var _setup2 = setup(jPlayers),
        wrapper = _setup2.wrapper;

    (0, _expect["default"])(wrapper.find(mockDownload).prop('url')).toBe('test.com');
  });
});