import React from 'react';
import { Navbar,NavbarBrand,NavbarText } from "reactstrap"
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <Navbar color="primary" light>
            <NavbarBrand tag={Link} to="/" className="text-white">
                Contact APP
            </NavbarBrand>

            <NavbarText className="text-white float-right">
                A Simple Contact App with Firebase
            </NavbarText>
        </Navbar>
    )
}

export default Header;
