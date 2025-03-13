import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { createTodo } from '../redux/TodoSlice'
import { TodoType } from "../types/Types";


function TodoCreate() {
    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState<string>(" ");

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert('Please make todo!')
            return;
        }
        const payload: TodoType = {
            id: Math.floor(Math.random() * 9999),
            content: newTodo
        }
        dispatch(createTodo(payload))


    }
    return (
        <div className="todo-create">
            <h1 className="header"> MAKE A TODO LIST !</h1>
            <input
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
                className="todo-input" type="text" placeholder='Create a Todo' />
            <button onClick={handleCreateTodo} className="todo-button"> Create</button>
        </div>
    )
}

export default TodoCreate