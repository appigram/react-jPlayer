"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _constants = require("../../../util/constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = function _default(jPlayer, additionalStates) {
  var _objectSpread2;

  for (var _len = arguments.length, additionalClasses = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    additionalClasses[_key - 2] = arguments[_key];
  }

  return _classnames["default"].apply(void 0, [_constants.classes.JPLAYER].concat(additionalClasses, [_objectSpread((_objectSpread2 = {}, _defineProperty(_objectSpread2, _constants.classes.states.AUDIO, !jPlayer.mediaSettings.video), _defineProperty(_objectSpread2, _constants.classes.states.VIDEO, jPlayer.mediaSettings.video), _defineProperty(_objectSpread2, _constants.classes.states.PLAYING, !jPlayer.paused), _defineProperty(_objectSpread2, _constants.classes.states.IDLE, jPlayer.currentTime === 0), _defineProperty(_objectSpread2, _constants.classes.states.FULL_SCREEN, jPlayer.fullScreen), _defineProperty(_objectSpread2, _constants.classes.states.MUTED, jPlayer.muted), _defineProperty(_objectSpread2, _constants.classes.states.VOLUME_LOW, !jPlayer.muted && jPlayer.volume < 0.5), _defineProperty(_objectSpread2, _constants.classes.states.VOLUME_HIGH, !jPlayer.muted && jPlayer.volume >= 0.5), _defineProperty(_objectSpread2, _constants.classes.states.SEEKING, jPlayer.seeking), _defineProperty(_objectSpread2, _constants.classes.states.LOOPED, jPlayer.loop), _defineProperty(_objectSpread2, _constants.classes.states.NO_BROWSER_SUPPORT, jPlayer.mediaSettings.nonSupported), _defineProperty(_objectSpread2, _constants.classes.states.NO_VOLUME_SUPPORT, !jPlayer.volumeSupported), _objectSpread2), additionalStates)]));
};

exports["default"] = _default;