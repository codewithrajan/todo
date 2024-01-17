const Todo = require('../models/todoModel');

const todoController = {
  getAllTodos: async (req, res) => {
    try {
      const todos = await Todo.find();
      res.render('todos/index', { todos });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  renderNewTodoForm: (req, res) => {
    res.render('todos/new');
  },

  createTodo: async (req, res) => {
    try {
      await Todo.create(req.body);
      res.redirect('/todos');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  getTodoById: async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id);
      res.render('todos/show', { todo });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  renderEditTodoForm: async (req, res) => {
    try {
      const todo = await Todo.findById(req.params.id);
      // console.log(req.params.id);
      res.render('todos/edit', { todo });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  updateTodo: async (req, res) => {
    try {
      await Todo.findByIdAndUpdate(req.params.id, req.body);
      console.log(req.body);
      res.redirect('/todos/');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },

  deleteTodo: async (req, res) => {
    try {
      const r=await Todo.findByIdAndDelete(req.params.id);
      // console.log(r);
      // console.log(req.params.id);
      res.redirect('/todos/');
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  },
};

module.exports = todoController;
