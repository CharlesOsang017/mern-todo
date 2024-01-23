import express from 'express'
import { createTodo, getTodo, updateTodo, deleteTodo } from '../controllers/todo.controller.js';

const router = express.Router()

router.post('/create', createTodo)
router.get('/get', getTodo)
router.post('/update/:id', updateTodo)
router.delete('/delete/:id', deleteTodo)

export default router;