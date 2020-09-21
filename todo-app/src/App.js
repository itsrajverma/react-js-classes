import React,{useReducer} from 'react';

import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import TodoContext from "./Context/TodoContext";
import todoReducer from './Context/reducer';
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";

const App = () => {
    const [todos,dispatch] = useReducer(todoReducer,[]);
    return(
        <TodoContext.Provider value={{ todos,dispatch }}>
            <Container fluid>
                <h1>Todo App with Context API</h1>
                <div className="col-md-6 offset-3">
                    <TodoForm/>
                    <Todos/>
                </div>
            </Container>
        </TodoContext.Provider>
    )
}


export default App;
