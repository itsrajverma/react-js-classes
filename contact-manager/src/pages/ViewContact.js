import React, {useContext, useEffect} from "react";

import { Container,Row,Col,Card,CardBody,CardTitle,CardSubtitle } from "reactstrap"
import {ContactContext} from "../context/Context";

import { FaEnvelope,FaMapMarkerAlt,FaPhone } from "react-icons/fa"

const ViewContact = () => {

    const { state } = useContext(ContactContext)

    const { contact } = state;

    return(
        <Container>
            <Row className="mt-5 mb-5">
                <Col md={5} className="offset-md-3">
                    <Card className="pt-3 pb-5">
                        <CardBody className="text-center">
                            <img src={contact?.picture} height="150" width="150" className="border-danger profile " />

                            <CardTitle className="text-primary mt-3">
                                <h1>{ contact?.name }</h1>
                            </CardTitle>

                            <CardSubtitle>
                                <h3>
                                    <FaPhone className="mr-2"/>
                                    { contact?.phoneNumber }
                                </h3>
                            </CardSubtitle>

                            <a className="btn btn-primary btn-block"
                            href={`mailto: ${contact?.email}`}
                            >
                                <FaEnvelope className="icon mr-2" />
                                { contact?.email }
                            </a>

                            <a className="btn btn-primary btn-block"
                            target="_blank"
                            href={`https://www.google.com/maps/place/${contact?.address}`}
                            >
                                <FaMapMarkerAlt className="icon mr-2"/>
                                { contact?.address }
                            </a>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ViewContact;
