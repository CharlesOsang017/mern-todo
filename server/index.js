import express from 'express';


// initialize express app
const app = express()

app.listen(3000, (req, res)=>{
    console.log(`server is running on port 3000`)
})