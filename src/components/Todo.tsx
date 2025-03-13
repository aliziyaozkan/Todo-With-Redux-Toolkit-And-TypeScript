import { MdOutlineCancel } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { editTodoById, removeTodoById } from "../redux/TodoSlice";
import { ImCheckboxChecked } from "react-icons/im";
import { useState } from "react";
interface TodoProps {
    todoProps: TodoType
}

function Todo({ todoProps }: TodoProps) {
    const { id, content } = todoProps;
    const dispatch = useDispatch();
    const [edit, setEdit] = useState<boolean>(false);
    const [newTodo, setNewTodo] = useState<string>(content);
    const handleRemove = () => {
        dispatch(removeTodoById(id))
    }
    const handleUpdate = () => {
        const payload: TodoType = {
            id: id,
            content: newTodo
        }
        dispatch(editTodoById(payload))
        setEdit(false);
    }
    return (

        <div className="todo-list">

            <div className="todo-material">
                {edit ? <input
                    style={{
                        outline: 'none', border: 'none', borderBottom: '1px solid white',
                        backgroundColor: 'rgb(112, 110, 110)', color: 'white', fontSize: '700', width: '350px',
                        borderRadius: '10px'
                    }}
                    value={newTodo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
                    type="text" /> : <div> {content}</div>}
            </div>
            <div className="todo-icons">
                <MdOutlineCancel onClick={handleRemove} style={{ marginRight: '5px', color: 'red' }} />
                {edit ? <ImCheckboxChecked onClick={handleUpdate}
                    style={{ color: 'green', cursor: 'pointer' }} /> : <FaRegEdit onClick={() => setEdit(true)} style={{ color: 'gold' }} />}
            </div>
        </div>

    )
}

export default Todo