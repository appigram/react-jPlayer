"use strict";

var _react = _interopRequireDefault(require("react"));

var _expect = _interopRequireDefault(require("expect"));

var _media = _interopRequireDefault(require("./media"));

var _eventsContainer = _interopRequireDefault(require("./events/eventsContainer"));

var _track = _interopRequireDefault(require("./track/track"));

var _componentSetup = _interopRequireDefault(require("../../util/specHelpers/componentSetup.spec"));

var _constants = require("../../util/constants");

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
  return (0, _componentSetup["default"])(_media["default"], _objectSpread({
    setCurrentMedia: _expect["default"].createSpy(),
    updateMediaStatus: _expect["default"].createSpy(),
    tracks: [],
    children: _react["default"].createElement("div", null)
  }, events, {}, props));
};

describe('Media', function () {
  describe('Events', function () {
    it('passes updateMediaStatus', function () {
      var _setup = setup(),
          props = _setup.props,
          wrapper = _setup.wrapper;

      (0, _expect["default"])(wrapper.prop('updateMediaStatus')).toBe(props.updateMediaStatus);
    });
    Object.keys(events).forEach(function (key) {
      it("passes ".concat(key, " to Events"), function () {
        var _setup2 = setup({
          require: require
        }),
            wrapper = _setup2.wrapper;

        (0, _expect["default"])(wrapper.prop(key)).toBe(events[key]);
      });
    });
  });
  it('renders children as a child of Events', function () {
    var _setup3 = setup(),
        wrapper = _setup3.wrapper;

    (0, _expect["default"])(wrapper.find(_eventsContainer["default"]).find(".".concat(_constants.classes.MEDIA)).exists()).toBe(true);
  });
  it('renders tracks as childrens child', function () {
    var tracks = [{
      "default": true,
      kind: 'subtitles',
      src: 'www.test.vrt',
      label: 'Video Subtitles',
      srclang: 'en'
    }];

    var _setup4 = setup({
      tracks: tracks
    }),
        wrapper = _setup4.wrapper;

    var mediaChildren = wrapper.find(".".concat(_constants.classes.MEDIA)).children();
    (0, _expect["default"])(mediaChildren.length).toBe(1);
    (0, _expect["default"])(mediaChildren.type()).toBe(_track["default"]);
  });
});