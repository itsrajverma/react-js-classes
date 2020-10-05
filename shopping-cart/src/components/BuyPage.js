import React,{useState,useEffect} from "react";
import axios from "axios";

import { random,commerce } from "faker"

import {Container,Row,Col } from "reactstrap"
import Product from "./Product";

const apiKey = "563492ad6f91700001000001642ab5967f1c4b6bb18eeadc0418b65c";

const BuyPage = ({addToCart}) =>{
    const [product,setProduct] = useState([]);

    const fetchPhotos = async () => {
        const { data } = await axios.get('https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1',{
            headers : {
                'Authorization' : apiKey
            }
        });

        const { photos } = data;

        const allProducts = photos.map(photo=> ({
            smallImage : photo.src.medium,
            tinyImage : photo.src.tiny,
            productName : random.word(),
            price : commerce.price(),
            id : random.uuid(),
        }))


        setProduct(allProducts);

    }

    useEffect(()=>{
        fetchPhotos();
    },[]);

    return(
        <Container fluid>
            <h1 className="text-success text-center">Products</h1>


            <Row>
                { product.map(product=> (
                    <Col md={4} key={product.id}>
                        <Product addToCart={addToCart} product={product}/>
                    </Col>
                )) }
            </Row>

        </Container>
    )
}


export default BuyPage;
