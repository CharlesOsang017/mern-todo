import express from 'express'
import { createTodo, getTodo, updateTodo } from '../controllers/todo.controller.js';

const router = express.Router()

router.post('/create', createTodo)
router.get('/get', getTodo)
router.post('/update/:id', updateTodo)

export default router;