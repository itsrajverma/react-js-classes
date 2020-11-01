import React, {useContext} from "react"
import { Container,Spinner,ListGroup,ListGroupItem } from "reactstrap"
import { MdAdd } from "react-icons/md"

import { useHistory } from "react-router-dom";
import {ContactContext} from "../context/Context";
import Contact from "../components/Contact";



const Contacts = () => {

    const { state,dispatch } = useContext(ContactContext);

    const { contacts,isLoading } = state;

    const history = useHistory();

    const addContact = () => {
        history.push("/contact/add");
    }


    if(isLoading){
        return (
            <div className="center">
                <Spinner color="primary"/>
                <div className="text-primary">Loading....</div>
            </div>
        )
    }


     return(
         <Container className="mt-4">

             { contacts.length === 0 && !isLoading ? (
                 <div className="center text-large text-primary">
                     No Contact found in firebase
                 </div>
             ) : (
                 <ListGroup>
                     {Object.entries(contacts).map(([key,value])=>(
                         <ListGroupItem key={key}>
                             <Contact contact={value} contactKey={key} />
                         </ListGroupItem>
                     ))}
                 </ListGroup>
             ) }

             <MdAdd className="fab icon" onClick={addContact} />
         </Container>
     )
}

export default Contacts;
