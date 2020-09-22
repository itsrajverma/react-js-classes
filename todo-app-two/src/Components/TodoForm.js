import React,{ useState,useContext } from "react";
import { Form,FormGroup,InputGroup,Input,InputGroupAddon,Button } from "reactstrap"

import TodoContext from "../Context/TodoContext";
import {v4} from "uuid";
import {ADD_TODO} from "../Context/action.types";

const TodoForm = () => {
    const [todoTitle,setTodoTitle] = useState("");

    const { dispatch } = useContext(TodoContext);

    const handleSubmit = e => {
        e.preventDefault();

        if(todoTitle === ""){
            return alert("Please enter a Todo")
        }

        const todo = {
            todoTitle,
            id : v4()
        }

        dispatch({
            type : ADD_TODO,
            payload : todo
        })

        setTodoTitle("");



    }
    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input type="text" name="todo" id="todo"
                    placeholder="Enter Your Next Todo"
                    value={todoTitle}
                    onChange={ e => setTodoTitle(e.target.value) }
                    />
                    <InputGroupAddon addonType="prepend">
                        <Button color="warning">Add</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;
