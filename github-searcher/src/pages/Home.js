import React, {useContext, useState} from "react";

import { Row,Container,Col,Input,Button,InputGroup,InputGroupAddon } from "reactstrap"

import axios from "axios";

import { UserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";
import UserCard from "../components/UserCard";
import Repos from "../components/Repos";

const Home = () =>{

    const context = useContext(UserContext);

    const [query,setQuery] = useState("");
    const [user,setUser] = useState(null);

    const fetchDetails = async () => {
        const { data } = await axios.get(`https://api.github.com/users/${query}`);
        setUser(data);
    }


    if(!context.user?.uid){
        return <Redirect to="/signin" />;
    }

    return(
        <Container className="mb-5">
            <Row className="mt-3">
                <Col md={5}>
                    <InputGroup>
                        <Input type="text" value={query} onChange={e => setQuery(e.target.value) } placeholder="Enter username"/>

                        <InputGroupAddon addonType="append">
                            <Button color="primary" onClick={fetchDetails} >
                                Fetch User
                            </Button>
                        </InputGroupAddon>

                    </InputGroup>

                    { user ? <UserCard user={user} /> : null }

                </Col>

                <Col md={7}>
                    { user ? <Repos repos_url={user.repos_url} /> : null }
                </Col>

            </Row>
        </Container>
    )
}

export default Home;
