"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = express_1.Router();
router.get('/todos', todos_1.getTodos);
router.post('/add', todos_1.addTodo);
router.put('/edit/:id', todos_1.updateTodo);
router.delete('/delete/:id', todos_1.deleteTodo);
exports.default = router;
