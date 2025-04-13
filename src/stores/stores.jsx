import { createContext, useContext, useState } from "react";

export const todoContext = createContext(null);
export const TodosProvider = ({children}) => {
    const [todos,setTodos] = useState(() => {
        let newTodos = localStorage.getItem('todos') || '[]';
        return JSON.parse(newTodos);
    });
    const handleTodoList = (task) => {
        if(!task){
            return;
        }
        setTodos((prev) => {
            const newTodos = [
                {
                    id:Math.random().toString(),
                    task:task,
                    completed:false,
                    createdAt:new Date()
                },
                ...prev
            ]
            localStorage.setItem('todos',JSON.stringify(newTodos));
            return newTodos;
        });
    }
    const handleToggleChange = (id) => {
        console.log(id)
        setTodos((prev)=> {
            const newTodos = prev.map((todos) => {
                if(todos.id === id){
                    return {...todos,completed:!todos.completed}
                }
                return todos;
            });
            localStorage.setItem('todos',JSON.stringify(newTodos));
            return newTodos;
        })
    }
    const handleDeleteTodo = (id) => {
       // console.log(id)
        setTodos((prev) => {
            const newTodos = prev.filter((task) => task.id !== id);
            localStorage.setItem('todos',JSON.stringify(newTodos));
            return newTodos;
        });
    }
    return(
        <todoContext.Provider value={{handleTodoList,todos,handleToggleChange,handleDeleteTodo
            
        }}>
            {children}
        </todoContext.Provider>
    )
}
export const useTodos = () => {
    const todosConsumer = useContext(todoContext);
    if(!todosConsumer){
        throw new Error("useTodos use outside service povider");
        
    }
    return todosConsumer;
}