import express from 'express'
import { createTodo, getTodo } from '../controllers/todo.controller.js';

const router = express.Router()

router.post('/create', createTodo)
router.get('/get', getTodo)

export default router;