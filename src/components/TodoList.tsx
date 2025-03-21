import { RootState } from "../redux/store"
import { TodoType } from "../types/Types"
import Todo from "./Todo"
import { useSelector } from "react-redux"

function TodoList() {
    const { todos } = useSelector((state: RootState) => state.todo)
    return (
        <div>
            {todos && todos.map((todo: TodoType) => (
                <Todo key={todo.id} todoProps={todo} />
            ))}

        </div>
    )
}

export default TodoList