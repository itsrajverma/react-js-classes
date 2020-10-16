import React from "react";
import {
    Container,Form,Button,FormGroup,Label,Col,Row,Input,Card,CardBody,CardFooter,CardHeader
} from "reactstrap"



const Signin = () =>{
    return(
        <Container className="text-center">
            <Row>
                <Col lg={6} className="offset-lg-3 mt-5">
                    <Card>
                        <Form>
                            <CardHeader>Sign In Here</CardHeader>
                            <CardBody>
                                <FormGroup row>
                                    <Label for="email" sm={3}>Email</Label>
                                    <Col sm={9}>
                                        <Input type="email" name="email" id="email" placeholder="Enter Your Email" />
                                    </Col>

                                </FormGroup>

                                <FormGroup row>
                                    <Label for="password" sm={3}>Password</Label>
                                    <Col sm={9}>
                                        <Input type="password" name="password" id="password" placeholder="Enter Your password" />
                                    </Col>

                                </FormGroup>

                            </CardBody>
                            <CardFooter>
                                <Button type="submit" block color="primary">Sign In</Button>
                            </CardFooter>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Signin;
