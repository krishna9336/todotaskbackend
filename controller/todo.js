import Todo from '../model/todo.js';

export const addTodo = async (req, res) => {
    try {
        const {title, description} = req.body
        const newTodo = await Todo.create({
            title,
            description,
            
        })
        console.log(newTodo);
        await newTodo.save();

        return res.status(200).json(newTodo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({}).sort({ 'createdAt': -1 })

        return res.status(200).json(todos);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}



export const updateTodo = async (req, res) => {
    try {
         const {title, description} = req.body
         const {id} = req.params
         const todo =await Todo.findByIdAndUpdate(id,{title, description})
        await todo.save()
        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)

        return res.status(200).json(todo);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}