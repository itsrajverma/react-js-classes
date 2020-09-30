import React from "react";
import { Card,CardBody,CardTitle,CardText } from "reactstrap"
import { FaEnvelope,FaMapMarkedAlt,FaPhone } from "react-icons/fa"
const UserCard = ({details}) => {
    return(
        <Card>
            <CardBody className="text-center">
                <img height="150" width="150"
                     src={details.picture?.large}
                     className="rounded-circle img-thumbnail border-danger" />

                <CardTitle className="text-primary">
                    <h1>
                        <span className="pr-2">{ details.name?.title }</span>
                        <span> { details.name?.first }</span>
                        <span> { details.name?.last }</span>
                    </h1>
                </CardTitle>

                <CardText>
                    <FaMapMarkedAlt/>
                    { details.location?.street.number }, { details.location?.street.name }
                     { details.location?.city }
                     { details.location?.state }
                     { details.location?.country }
                    <br/>
                   <p> <FaPhone/> { details.phone }</p>
                   <p> <FaEnvelope/> { details.email }</p>

                </CardText>
            </CardBody>
        </Card>
    )
}

export default UserCard;
