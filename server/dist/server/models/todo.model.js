'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Todo Schema
 */
var TodoSchema = new _mongoose2.default.Schema({
  text: { type: String, required: true, trim: true },
  completed: { type: Boolean, required: true }
});

TodoSchema.statics = {
  get: function get() {
    return this.find({});
  }
};

exports.default = _mongoose2.default.model('Todo', TodoSchema);
module.exports = exports['default'];
//# sourceMappingURL=todo.model.js.map
