"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _video = _interopRequireDefault(require("./video"));

var _mediaContainer = _interopRequireDefault(require("../media/mediaContainer"));

var _componentSetup = _interopRequireDefault(require("../../util/specHelpers/componentSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var events = {
  onAbort: _expect["default"].createSpy(),
  onCanPlay: _expect["default"].createSpy(),
  onCanPlayThrough: _expect["default"].createSpy(),
  onDurationChange: _expect["default"].createSpy(),
  onEmptied: _expect["default"].createSpy(),
  onEncrypted: _expect["default"].createSpy(),
  onEnded: _expect["default"].createSpy(),
  onError: _expect["default"].createSpy(),
  onLoadedData: _expect["default"].createSpy(),
  onLoadedMetadata: _expect["default"].createSpy(),
  onLoadStart: _expect["default"].createSpy(),
  onPause: _expect["default"].createSpy(),
  onPlay: _expect["default"].createSpy(),
  onPlaying: _expect["default"].createSpy(),
  onProgress: _expect["default"].createSpy(),
  onRateChange: _expect["default"].createSpy(),
  onSeeked: _expect["default"].createSpy(),
  onSeeking: _expect["default"].createSpy(),
  onStalled: _expect["default"].createSpy(),
  onSuspend: _expect["default"].createSpy(),
  onTimeUpdate: _expect["default"].createSpy(),
  onVolumeChange: _expect["default"].createSpy(),
  onWaiting: _expect["default"].createSpy()
};

var setup = function setup(props) {
  var values = (0, _componentSetup["default"])(_video["default"], _objectSpread({}, props));
  values.video = values.wrapper.dive();
  return values;
};

describe('Video', function () {
  describe('when video is required', function () {
    var require = true;
    it('renders video in Media', function () {
      var _setup = setup({
        require: require
      }),
          video = _setup.video;

      (0, _expect["default"])(video.find(_mediaContainer["default"]).find('video').exists()).toBe(true);
    });
    Object.keys(events).forEach(function (key) {
      it("passes ".concat(key, " to Media"), function () {
        var _setup2 = setup(_objectSpread({}, events, {
          require: require
        })),
            video = _setup2.video;

        (0, _expect["default"])(video.find(_mediaContainer["default"]).prop(key)).toBe(events[key]);
      });
    });
  });
  it('renders nothing if video is not required', function () {
    var _setup3 = setup(),
        video = _setup3.video;

    (0, _expect["default"])(video.type()).toBe(null);
  });
});