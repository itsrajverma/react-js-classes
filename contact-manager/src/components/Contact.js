import React, {useContext} from "react";
import {Col, Row} from "reactstrap"
import {FaRegStar, FaStar} from "react-icons/fa";
import {MdDelete, MdEdit} from "react-icons/md";

import firebase from "firebase/app";
import {toast} from "react-toastify";
import {ContactContext} from "../context/Context";
import {CONTACT_TO_UPDATE} from "../context/action.types";
import { useHistory } from "react-router-dom"

const Contact = ({contact, contactKey}) => {

    const { dispatch } = useContext(ContactContext);

    const history = useHistory();

    // function to delete the contact from database
    const deleteContact = () => {
        firebase
            .database()
            .ref(`/contacts/${contactKey}`)
            .remove()
            .then(() => {
                toast("Deleted Successfully...", {type: "success"});
            }).catch(err => console.log(err))
    }

    // function to update contact(star) in firebase
    const updateImpContact = () => {
        firebase
            .database()
            .ref(`/contacts/${contactKey}`)
            .update({
                star: !contact.star
            })
            .then(() => {
                toast("Updated Successfully...", {type: "info"});
            }).catch(err => console.log(err))
    }


    // function to set update action in reducer
    const updateContact = () =>{

        dispatch({
            type : CONTACT_TO_UPDATE,
            payload : contact,
            key : contactKey
        })

        history.push("/contact/add")


    }


    return (
        <Row>
            <Col md={1} className="d-flex justify-content-center align-items-center">
                <div className="icon" onClick={()=>updateImpContact()}>
                    {contact.star ? (
                        <FaStar className="text-primary"/>
                    ) : (
                        <FaRegStar className="text-warning"/>
                    )}
                </div>
            </Col>

            <Col md={2} className="d-flex justify-content-center align-items-center">
                <img src={contact.picture} alt="" className="img-circle profile"/>
            </Col>

            <Col md={8}>
                <div className="text-primary">{contact.name}</div>
                <div className="text-secondary">{contact.phoneNumber}</div>
                <div className="text-success">{contact.email}</div>
                <div className="text-info">{contact.address}</div>
            </Col>

            <Col md={1} className="d-flex justify-content-center align-items-center">
                <MdDelete onClick={()=> deleteContact() } color="danger" className="text-danger icon"/>
                <MdEdit color="info" onClick={()=> updateContact() } className="text-info icon ml-2"/>
            </Col>

        </Row>
    )
}

export default Contact;
