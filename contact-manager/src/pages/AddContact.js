import React from "react";

import { Container,Form,FormGroup,Label,Input,Button,Spinner,Row,Col } from "reactstrap"

const AddContact = () => {
    return(
        <Container fluid className="mt-5">
            <Row>
                <Col md={6} className="offset-md-3 p-2">
                    <Form>

                        <div className="text-center">
                            <div>
                                <label htmlFor="imagepicker">
                                    <img src="" className="profile"/>
                                </label>
                                <input type="file" name="image" id="imagepicker" className="hidden" />
                            </div>
                        </div>

                        <FormGroup>
                            <Input type="text" name="name" id="name" placeholder="Enter your name" />
                        </FormGroup>

                        <FormGroup>
                            <Input type="email" name="email" id="email" placeholder="Enter your email" />
                        </FormGroup>

                        <FormGroup>
                            <Input type="number" name="number" id="number" placeholder="Enter your number" />
                        </FormGroup>

                        <FormGroup>
                            <Input type="textarea" name="area" id="area" placeholder="Enter your address" />
                        </FormGroup>

                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />
                                <span className="text-right">Mark as Star</span>
                            </Label>
                        </FormGroup>


                        <Button type="submit" color="primary" block className="text-uppercase">
                            ADD contact
                        </Button>

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddContact;
