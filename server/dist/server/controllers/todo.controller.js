'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _todo = require('../models/todo.model');

var _todo2 = _interopRequireDefault(_todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTodos(req, res, next) {
  _todo2.default.get().then(function (todos) {
    return res.json(todos);
  }).catch(function (err) {
    return next(err);
  });
}

exports.default = { getTodos: getTodos };
module.exports = exports['default'];
//# sourceMappingURL=todo.controller.js.map
