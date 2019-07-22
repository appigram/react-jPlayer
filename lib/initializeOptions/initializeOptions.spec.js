"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _lodash = _interopRequireDefault(require("lodash.merge"));

var _initializeOptions = _interopRequireWildcard(require("./initializeOptions"));

var _constants = require("../util/constants");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('initializeOptions', function () {
  it('sets up initial jPlayer options correctly', function () {
    var jPlayerOptions = {
      id: 'TestPlayer',
      media: {
        sources: [{
          mp3: 'www.test.mp3'
        }]
      }
    };
    (0, _initializeOptions["default"])(jPlayerOptions);
    (0, _expect["default"])(_initializeOptions.initialState).toEqual(_defineProperty({}, jPlayerOptions.id, (0, _lodash["default"])({}, _constants.defaultStatus, _constants.defaultOptions, jPlayerOptions)));
  });
});