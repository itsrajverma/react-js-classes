import React, {useContext, useState} from "react";

import {Form, FormGroup, Input, InputGroup,InputGroupAddon,Button} from 'reactstrap';
import TodoContext from "../Context/TodoContext";
import {v4} from "uuid";
import {ADD_TODO} from "../Context/action.types";

const TodoForm = () => {
    const [todotitle, setTodoTitle] = useState("");
    const {dispatch} = useContext(TodoContext);

    const handleSubmit = e => {
        e.preventDefault();
        if(todotitle === ""){
            return alert("please enter todo")
        }

        const todo = {
            todotitle,
            id : v4()
        }

        dispatch({
            type : ADD_TODO,
            payload : todo
        })

        setTodoTitle("");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input type="text" name="todo" id="todo" placeholder="Enter Your Next Task" value={todotitle}
                           onChange={e => setTodoTitle(e.target.value)}/>
                    <InputGroupAddon addonType="prepend">
                        <Button color="warning">
                         Add
                        </Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm;
