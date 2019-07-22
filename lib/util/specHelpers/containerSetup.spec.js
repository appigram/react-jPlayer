"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _enzyme = require("enzyme");

var _redux = require("redux");

var _reducer = _interopRequireDefault(require("../../reducer/reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(Container, jPlayers, props) {
  var state = {
    jPlayers: jPlayers
  };
  var store = (0, _redux.createStore)((0, _redux.combineReducers)({
    jPlayers: _reducer["default"]
  }), state);
  var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_reactRedux.Provider, {
    store: store
  }, _react["default"].createElement(Container, props)), {
    context: {
      id: 'TestPlayer'
    },
    childContextTypes: {
      id: _propTypes["default"].string
    }
  });
  return {
    wrapper: wrapper,
    props: props,
    store: store
  };
};

exports["default"] = _default;