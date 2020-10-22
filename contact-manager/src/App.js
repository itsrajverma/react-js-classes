import React,{useReducer,useEffect}  from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

import { Container } from "reactstrap"

import { BrowserRouter,Switch,Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";



import { firebaseConfig } from "./utils/config";
import firebase from "firebase/app";
import "firebase/database"
import "firebase/storage"

firebase.initializeApp(firebaseConfig)

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Contacts from "./pages/Contacts";




const App = () => {
    return(
        <BrowserRouter>
            <ToastContainer/>
                <Header/>
                <Container>
                    <Switch>
                        <Route exact path="/" component={Contacts} />
                    </Switch>
                </Container>
                <Footer/>
        </BrowserRouter>
    )
}

export default App;
