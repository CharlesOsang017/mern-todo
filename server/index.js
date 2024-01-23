import express from 'express';
import mongoose from 'mongoose'
import dotenv from "dotenv"
import todoRouter from './routes/todo.route.js'

// fecthing from .env file
// const port = process.env.PORT
// const db = process.env.MONGO_DB

dotenv.config()
// initialize express app
const app = express()
app.use('/todo', todoRouter)

app.listen(process.env.PORT, () =>{
    console.log(`server is running on  ${process.env.PORT}`)
})

//connecting to DB
mongoose.connect(process.env.MONGO_DB_URI).then(()=>{
    console.log('connected to the database successfully!')
}).catch((err)=>{
    console.log(err.message)
})