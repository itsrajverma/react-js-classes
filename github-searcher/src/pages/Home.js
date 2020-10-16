import React from "react";

import { Row,Container,Col,Input,Button,InputGroup,InputGroupAddon } from "reactstrap"

const Home = () =>{
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
