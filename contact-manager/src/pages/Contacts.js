import React from "react"
import { Container } from "reactstrap"
import { MdAdd } from "react-icons/md"

import { useHistory } from "react-router-dom";


const Contacts = () => {

    const history = useHistory();

    const addContact = () => {
        history.push("/contact/add");
    }

     return(
         <Container className="mt-4">
             <MdAdd className="fab icon" onClick={addContact} />
         </Container>
     )
}

export default Contacts;
