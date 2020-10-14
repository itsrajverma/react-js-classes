import React from "react";

import { Container,ListGroup,ListGroupItem,Button,Card,CardBody,CardHeader,CardFooter,Row,Col } from "reactstrap"


const Cart = ({cartItem,removeItem,payNow}) => {

    let amount = 0;

    cartItem.forEach((item)=>{
        amount = parseFloat(amount) + parseFloat(item.price);
    })

    return(
        <Container fluid>
            <h1 className="text-success text-center">Your Cart</h1>

            <ListGroup>
                { cartItem.map(item=>(
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img height={80} src={item.tinyImage}/>
                            </Col>
                            <Col className="text-center">
                                <div className="text-primary">
                                    {  item.productName }
                                </div>
                                <span>Price : Rs. { item.price }</span>

                                <Button onClick={()=> removeItem(item) } color="danger">Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                )) }
            </ListGroup>


            {
                cartItem.length >= 1 ? (
                    <Card className="text-center mt-3">
                        <CardHeader>Grand Total</CardHeader>
                        <CardBody>
                            Your amount for {cartItem.length} product is {amount}
                        </CardBody>
                        <CardFooter>
                            <Button color="success" onClick={payNow} >Pay Now</Button>
                        </CardFooter>
                    </Card>
                ) : ( <h3 className="text-warning">Cart is Empty</h3>)
            }

        </Container>
    )
}

export default Cart;
