'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _todo = require('../controllers/todo.controller');

var _todo2 = _interopRequireDefault(_todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router(); // eslint-disable-line new-cap

/** POST /api/todos - return array of todos */
router.route('/').get(_todo2.default.getTodos);

exports.default = router;
module.exports = exports['default'];
//# sourceMappingURL=todo.route.js.map
