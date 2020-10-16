import React,{useState} from "react";
import {
    Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavLink,NavItem,NavbarText
} from "reactstrap"

import { Link } from "react-router-dom"

const Header = () => {

    const [isOpen,setIsOpen] = useState(false);

    const toggle =() => setIsOpen(!isOpen);

    return(
       <Navbar color="info" light expand="md">
           <NavbarBrand>
               <Link to="/" className="text-white" >GITHUB SEARCHER</Link>
           </NavbarBrand>
           <NavbarToggler onClick={toggle}/>
               <Collapse isOpen={isOpen} navbar>
                   <Nav className="ml-auto" navbar>
                       <NavItem>
                           <NavLink tag={Link} to="/signin" className="text-white">
                               Sign In
                           </NavLink>
                       </NavItem>

                       <NavItem>
                           <NavLink tag={Link} to="/signup" className="text-white">
                               Sign Up
                           </NavLink>
                       </NavItem>
                   </Nav>
               </Collapse>
       </Navbar>
    )
}

export default Header;
