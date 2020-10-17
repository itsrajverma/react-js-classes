import React, {useContext} from "react";

import { Row,Container,Col,Input,Button,InputGroup,InputGroupAddon } from "reactstrap"

import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

const Home = () =>{

    const context = useContext(UserContext);



    if(!context.user?.uid){
        return <Redirect to="/signin" />;
    }

    return(
        <Container>
            <Row className="mt-3">
                <Col md={5}>
                    <InputGroup>
                        <Input type="text" placeholder="Enter username"/>

                        <InputGroupAddon addonType="append">
                            <Button color="primary">
                                Fetch User
                            </Button>
                        </InputGroupAddon>

                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;
