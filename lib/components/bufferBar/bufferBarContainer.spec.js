"use strict";

var _react = _interopRequireDefault(require("react"));

var _expect = _interopRequireDefault(require("expect"));

var _proxyquire = _interopRequireDefault(require("proxyquire"));

var _containerSetup = _interopRequireDefault(require("../../util/specHelpers/containerSetup.spec"));

var _mockCanvasContext = _interopRequireDefault(require("../../util/specHelpers/mockData/mockCanvasContext.spec"));

var _actions = require("../../actions/actions");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

_proxyquire["default"].noCallThru();

var canvas;
var id = 'TestPlayer';
var bufferedTimeRanges = [{
  start: 0,
  end: 2
}, {
  start: 2,
  end: 4
}];

var mockBufferBar = function mockBufferBar(_ref) {
  var setCanvas = _ref.setCanvas;

  var mockSetCanvas = function mockSetCanvas(ref) {
    if (ref !== null) {
      _expect["default"].spyOn(ref, 'getContext').andReturn(_mockCanvasContext["default"]);
    }

    setCanvas(ref);
    canvas = ref;
  };

  return _react["default"].createElement("canvas", {
    ref: mockSetCanvas
  });
};

var BufferBarContainer = (0, _proxyquire["default"])('./bufferBarContainer', {
  './bufferBar': mockBufferBar
})["default"];

var setup = function setup(jPlayers, props) {
  return (0, _containerSetup["default"])(BufferBarContainer, jPlayers, props);
};

describe('BufferBarContainer', function () {
  var jPlayers;
  beforeEach(function () {
    jPlayers = _defineProperty({}, id, {});
  });
  describe('clearBuffer', function () {
    it('clears the buffer canvas if nothing in the buffer', function () {
      jPlayers[id].bufferedTimeRanges = bufferedTimeRanges;

      var _setup = setup(jPlayers),
          store = _setup.store;

      store.dispatch((0, _actions.setOption)(id, 'bufferedTimeRanges', []));
      (0, _expect["default"])(_mockCanvasContext["default"].clearRect).toHaveBeenCalledWith(0, 0, canvas.width, canvas.height);
    });
  });
  describe('fillBufferPartially', function () {
    var duration = 22;
    var bufferColour = '#00';
    it('fills buffer bar if buffering', function () {
      jPlayers[id].duration = duration;
      jPlayers[id].bufferColour = bufferColour;

      var _setup2 = setup(jPlayers),
          store = _setup2.store;

      store.dispatch((0, _actions.setOption)(id, 'bufferedTimeRanges', bufferedTimeRanges));
      (0, _expect["default"])(_mockCanvasContext["default"].fillRect.calls.length).toBe(bufferedTimeRanges.length);
      (0, _expect["default"])(_mockCanvasContext["default"].fillStyle).toBe(jPlayers[id].bufferColour);
    });
    it('doesnt fill the buffer bar if values are same as previous render', function () {
      jPlayers[id].duration = duration;
      jPlayers[id].bufferColour = bufferColour;
      jPlayers[id].bufferedTimeRanges = bufferedTimeRanges;

      var _setup3 = setup(jPlayers),
          store = _setup3.store;

      store.dispatch((0, _actions.setOption)(id, 'bufferedTimeRanges', bufferedTimeRanges));
      (0, _expect["default"])(_mockCanvasContext["default"].fillRect).toNotHaveBeenCalled();
    });
  });
  afterEach(function () {
    _mockCanvasContext["default"].resetSpies();
  });
});