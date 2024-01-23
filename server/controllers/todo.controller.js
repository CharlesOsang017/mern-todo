import Todo from "../models/todo.model.js";



export const createTodo = async (req, res) => {
  // const {title, completed} = req.body;
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json({ message: "Todo created successfully!" });
  } catch (error) {
    console.log(error.message);
  }
};
