import React from "react";

import { Card,CardBody,CardImg,CardText,CardTitle,Button } from "reactstrap"


const Product = ({product,addToCart}) => {
       return(
           <Card className="mt-2 mb-1">
               <CardImg top height={250} width="100%" src={product.smallImage} />
               <CardBody className="text-center">
                   <CardTitle>{product.productName}</CardTitle>
                   <CardText className="secondary">
                       Price: Rs. { product.price }
                   </CardText>
                   <Button color="success" onClick={()=> addToCart(product) }>Buy Now</Button>
               </CardBody>
           </Card>
       )
}

export default Product;
