import Todo from "../models/todo.model.js";
import { errorHandler } from "../utils/error.js";

// create todo
export const createTodo = async (req, res, next) => {
  // const {title, completed} = req.body;
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ message: "Todo created successfully!" });
  } catch (error) {
    next(error);
  }
};

// get a todo
export const getTodo = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    if (!todos) {
      return next(errorHandler(404, "Todo not found"));
    }   
      res.status(200).json(todos);
    
  } catch (error) {
    next(error);
  }
};

// update a todo
export const updateTodo = async (req, res, next) => {
  const todoId = await Todo.findById(req.params.id);
  if (!todoId) {
    return next(errorHandler(404, "Todo not found"));
  }

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedTodo);
  } catch (error) {
    next(error);
  }
};

// DELETE A tODO
export const deleteTodo = async (req, res, next) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    return next(errorHandler(404, "Todo not found"));
  }
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Todo deleted successfully!" });
  } catch (error) {
    next(error);
  }
};
