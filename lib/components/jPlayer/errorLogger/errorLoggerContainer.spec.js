"use strict";

var _expect = _interopRequireDefault(require("expect"));

var _actions = require("../../../actions/actions");

var _errorLoggerContainer = _interopRequireDefault(require("./errorLoggerContainer"));

var _containerSetup = _interopRequireDefault(require("../../../util/specHelpers/containerSetup.spec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var id = 'TestPlayer';

var setup = function setup(jPlayers, props) {
  return (0, _containerSetup["default"])(_errorLoggerContainer["default"], jPlayers, props);
};

describe('ErrorLoggerContainer', function () {
  var jPlayers;
  var mockConsoleError;
  beforeEach(function () {
    mockConsoleError = _expect["default"].spyOn(console, 'error');
    jPlayers = _defineProperty({}, id, {
      mediaSettings: {}
    });
  });
  it('logs error to console', function () {
    var _setup = setup(jPlayers),
        store = _setup.store;

    var error = {
      context: 'testContext',
      message: 'testMessage',
      hint: 'testHint'
    };
    store.dispatch((0, _actions.setOption)(id, 'error', error));
    (0, _expect["default"])(mockConsoleError).toHaveBeenCalledWith(error);
  });
  afterEach(function () {
    mockConsoleError.restore();
  });
});