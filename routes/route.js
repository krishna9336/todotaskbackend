import express, { Router } from 'express';


import { addTodo, getAllTodos, updateTodo, deleteTodo } from '../controller/todo.js';

const route = express.Router();


route.post('/todos', addTodo)
route.get('/todos', getAllTodos);
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo);


export default route;