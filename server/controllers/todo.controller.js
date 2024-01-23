import Todo from "../models/todo.model.js";

// create todo
export const createTodo = async (req, res) => {
  // const {title, completed} = req.body;
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ message: "Todo created successfully!" });
  } catch (error) {
    console.log(error.message);
  }
};

// get a todo
export const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    if (!todos) {
      res.status(403).json({ message: "No todo available" });
    } else {
      res.status(200).json(todos);
    }
  } catch (error) {
    console.log(error.message);
  }
};

// update a todo
export const updateTodo = async (req, res) => {
  const todoId = await Todo.findById(req.params.id);
  if (!todoId) {
    res.status(403).json({ message: "todo not found!" });
  }
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json({ message: "Todo updated successfully!" });
  } catch (error) {
    console.log(error.message);
  }
};
