import { useSearchParams } from "react-router-dom";
import { useTodos } from "../stores/stores";
const Todo = () => {
    const [searchParms] = useSearchParams();
    const todosData = searchParms.get('todo');
    const {todos,handleToggleChange,handleDeleteTodo} = useTodos();
    let filterData = todos;
    if(todosData === 'active'){
        filterData = filterData.filter((data) => !data.completed);
    }
    if(todosData === 'completed'){
        filterData = filterData.filter((data) => data.completed);
    }
    // console.log('getData',filterData)
    return (
        <>
            {
                filterData.map((todos) => {
                   return <div className="todo-item" key={todos.id}>
                   <div className="todo-left">
                       <input type="checkbox" id={`todo-checkbox-${todos.id}`} className="checkBox-todo" checked={todos.completed} onChange={() => handleToggleChange(todos.id)}/>
                       <label htmlFor="todo-checkbox" className="todo-label">{todos.task}</label>
                            </div>
                            {
                                todos.completed && (
                                    <button onClick={() => handleDeleteTodo(todos.id)} className="delete-btn">Delete</button>
                                )
                            }
                    </div>
                })
            }
            </>
    );
}
export default Todo;