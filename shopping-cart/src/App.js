import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import { Container,Row,Col } from "reactstrap"

import { ToastContainer,toast } from "react-toastify";
import BuyPage from "./components/BuyPage";
import Cart from "./components/Cart";

const App = () => {

    const [cartItem,setCartItem] = useState([]);


    const addToCart = item => {
        setCartItem([...cartItem,item])
    }

    return(
        <Container fluid>
            <ToastContainer/>

            <Row>
                <Col md={8}>
                    <BuyPage addToCart={addToCart}/>
                </Col>
                <Col md={4}>
                    <Cart cartItem={cartItem}/>
                </Col>
            </Row>
        </Container>
    )
}


export default App;
