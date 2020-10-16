import React from 'react';

import { BrowserRouter,Switch,Route } from "react-router-dom"

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"


import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const App = () => {

    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/signin" component={ Signin } />
                <Route exact path="/signup" component={ Signup } />
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}

export default App;
