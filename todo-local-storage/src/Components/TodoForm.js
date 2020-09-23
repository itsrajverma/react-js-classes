import React,{useState} from "react";

import { Form,FormGroup,Input,InputGroup,InputGroupAddon,Button } from "reactstrap"

import { v4 } from "uuid";

const TodoForm = ({addTodos})=>{
    const [todoTitle,setTodoTitle] = useState("")

    const handleSubmit = e => {
         e.preventDefault();

         if(todoTitle === ""){
             return alert("Please Enter some value")
         }

         const todo = {
             title : todoTitle,
             id : v4()
         }

         addTodos(todo);

         setTodoTitle("")

    }

    return(
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                    type="text"
                    name="todo"
                    id="todo"
                    value={todoTitle}
                    onChange={e => setTodoTitle(e.target.value)}
                    placeholder="Enter your Todo"
                    />

                    <InputGroupAddon addonType="prepend">
                        <Button color="success">Add Todo</Button>
                    </InputGroupAddon>

                </InputGroup>
            </FormGroup>
        </Form>
    )
}
export default TodoForm;
