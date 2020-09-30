import React,{ useState,useEffect } from 'react';


import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Container,Row,Col } from "reactstrap"

import axios from "axios";
import UserCard from "./UserCard";

const App = () =>{
    const [detail,setDetail] = useState({});

    const fetchDetails = async () => {

        const { data } = await axios.get("https://randomuser.me/api/");

        const userDetails = data.results[0];

        setDetail(userDetails);

    }

    useEffect(()=>{
        fetchDetails()
    },[])


    return(
        <Container fluid className="p-4 bg-primary App">
            <Row>
                <Col md={4} className="offset-md-4 mt-4">
                    <UserCard details={detail} />
                </Col>
            </Row>
        </Container>
    )

}

export default App;
