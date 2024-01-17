const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

router.get('/', todoController.getAllTodos);
router.get('/new', todoController.renderNewTodoForm);
router.post('/', todoController.createTodo);
router.get('/:id', todoController.getTodoById);
router.get('/:id/edit', todoController.renderEditTodoForm);
router.put('/:id', todoController.updateTodo);
router.post('/:id/delete', todoController.deleteTodo);
router.delete('/:id/delete', todoController.deleteTodo);
router.post('/:id', todoController.updateTodo);

module.exports = router;
