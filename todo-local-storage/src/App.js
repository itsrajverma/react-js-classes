import React,{ useState,useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

import { Container } from "reactstrap"
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

const App = () => {
    const [todos,setTodos] = useState([]);

    useEffect(()=>{
        const localTodos = localStorage.getItem("todos");
        console.log(localTodos);
        if(localTodos){
            setTodos(JSON.parse(localTodos));
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos))
    },[todos])

    const addTodos = (todo) => {
        setTodos([...todos,todo]);
    }

    const markComplete = (id) => {
        setTodos(todos.filter(todo=> todo.id !== id))
    }

    return(
        <Container fluid>
            <h1>Todo With Local Storage</h1>
            <div className="col-md-6 offset-3">
                <TodoForm addTodos={addTodos}/>
                <Todos todos={todos} markComplete={markComplete} />
            </div>
        </Container>
    )
}

export default App;
