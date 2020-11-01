import React,{ useContext } from "react";
import { Row,Col } from "reactstrap"
import { FaRegStar,FaStar } from "react-icons/fa";
import { MdEdit,MdDelete } from "react-icons/md";

const Contact = ({contact,contactKey}) => {
    return(
        <Row>
            <Col md={1} className="d-flex justify-content-center align-items-center">
                <div className="icon">
                    { contact.star ? (
                        <FaStar className="text-primary"/>
                    ) : (
                        <FaRegStar className="text-warning"/>
                    ) }
                </div>
            </Col>

            <Col md={2} className="d-flex justify-content-center align-items-center">
                <img src={contact.picture} alt="" className="img-circle profile" />
            </Col>

            <Col md={8}>
                <div className="text-primary">{contact.name}</div>
                <div className="text-secondary">{contact.phoneNumber}</div>
                <div className="text-success">{contact.email}</div>
                <div className="text-info">{contact.address}</div>
            </Col>

            <Col md={1}  className="d-flex justify-content-center align-items-center">
                <MdDelete color="danger" className="text-danger icon" />
                <MdEdit color="info" className="text-info icon ml-2" />
            </Col>

        </Row>
    )
}

export default Contact;
