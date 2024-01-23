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
export const getTodo = async(req, res)=>{
    try {
        const todos = await Todo.find()
        if(!todos){
            res.status(403).json({message: 'No todo available'})
        }else{
            res.status(200).json(todos)
        }
    } catch (error) {
        console.log(error.message)
    }
}