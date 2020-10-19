import React, {useContext, useState} from "react";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row
} from "reactstrap";

import firebase from "firebase/app";
import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

const Signup = () =>{

    const context = useContext(UserContext)

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSignUp = (e) => {
        e.preventDefault();

        if(!email){
            toast("Please Enter Your Email Address",{
                type:"error"
            })
            return
        }

        if(!password){
            toast("Please Enter Your Password",{
                type:"error"
            })
            return
        }


        firebase.auth().createUserWithEmailAndPassword(email,password).then(res=>{
            console.log(res)
            context.setUser({email : res.user.email, uid : res.user.uid});
            toast("Registered Successfully...",{
                type:"success"
            })
        }).catch(error=>{
            console.log(error)
            toast(error.message,{
                type:"error"
            })
        })
    }


    if(context.user?.uid){
        return <Redirect to="/" />;
    }


    return(
        <Container className="text-center">
            <Row>
                <Col lg={6} className="offset-lg-3 mt-5">
                    <Card>
                        <Form onSubmit={handleSignUp}>
                            <CardHeader>Sign Up Here</CardHeader>
                            <CardBody>
                                <FormGroup row>
                                    <Label for="email" sm={3}>Email</Label>
                                    <Col sm={9}>
                                        <Input type="email" name="email" id="email" value={email} onChange={ e => setEmail(e.target.value)} placeholder="Enter Your Email" />
                                    </Col>

                                </FormGroup>

                                <FormGroup row>
                                    <Label for="password" sm={3}>Password</Label>
                                    <Col sm={9}>
                                        <Input type="password" name="password" value={password} onChange={ e => setPassword(e.target.value)} id="password" placeholder="Enter Your password" />
                                    </Col>

                                </FormGroup>

                            </CardBody>
                            <CardFooter>
                                <Button type="submit" block color="primary">Sign up</Button>
                            </CardFooter>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup;
