import express from 'express';
import dotenv from "dotenv"



dotenv.config()
// initialize express app
const app = express()
const port = process.env.PORT;

app.listen(port, () =>{
    console.log(`server is running on  ${port}`)
})