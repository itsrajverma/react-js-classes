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

        const isAlreadyAdded = cartItem.findIndex((citem)=>{
            return citem.id == item.id;
        })

        console.log(isAlreadyAdded);

        if(isAlreadyAdded !== -1){
            toast("Item is Already Added in cart",{
                type:"error"
            })
           return ;
        }


        setCartItem([...cartItem,item])
    }

    const removeItem = item => {
        let result = cartItem.filter(singleItem => singleItem.id !== item.id);
        setCartItem(result);
    }

    const payNow = () => {
        setCartItem([]);

        toast("Purchase Complete",{
            type:"success"
        })
    }

    return(
        <Container fluid>
            <ToastContainer/>

            <Row>
                <Col md={8}>
                    <BuyPage addToCart={addToCart}/>
                </Col>
                <Col md={4}>
                    <Cart removeItem={removeItem} payNow={payNow} cartItem={cartItem}/>
                </Col>
            </Row>
        </Container>
    )
}


export default App;
