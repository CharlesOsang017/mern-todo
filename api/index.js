import express from 'express';
import mongoose from 'mongoose'
import dotenv from "dotenv"
import todoRouter from './routes/todo.route.js'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));


app.use('/api/todo', todoRouter)


app.listen(process.env.PORT, () =>{
    console.log(`server is running on  ${process.env.PORT}`)
})

//connecting to DB
mongoose.connect(process.env.MONGO_DB_URI).then(()=>{
    console.log('connected to the database successfully!')
}).catch((err)=>{
    console.log(err.message)
})

// creating a middleware to handle error || success msg
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });