import React from "react";

import { Container,ListGroup,ListGroupItem,Button,Card,CardBody,CardHeader,CardFooter,Row,Col } from "reactstrap"


const Cart = ({cartItem}) => {

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

                                <Button color="danger">Remove</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                )) }
            </ListGroup>

        </Container>
    )
}

export default Cart;
