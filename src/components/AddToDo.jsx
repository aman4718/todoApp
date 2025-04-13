import { useState } from "react";
import './todo.css'
import { useTodos } from "../stores/stores";
const AddToDo = () => {
    const [input,setInput] =  useState();
    const {handleTodoList} = useTodos();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleTodoList(input);
        setInput('');
    } 
    return (
        <div className="card">
            <form onSubmit={(handleFormSubmit)}>
                <div className="form-group">
                    <input type="text" name="" placeholder="...Enter To Do" className="text-input" value={input} onChange={(e) => setInput(e.target.value)} />
                    <button  className="btn" type="submit">Add To Do</button>
                </div>
            </form>
        </div>
    )
}
export default AddToDo;