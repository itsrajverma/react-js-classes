import React, {useState} from 'react';

import { BrowserRouter,Switch,Route } from "react-router-dom"

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css"

import { UserContext } from "./context/UserContext";


import firebase from "firebase/app";
import "firebase/auth"



import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Header from "./layout/Header";
import Footer from "./layout/Footer";



// init firebase
import firebaseConfig from "./config/firebaseConfig";

firebase.initializeApp(firebaseConfig);

const App = () => {

    const [user,setUser] = useState(null);

    return(
        <BrowserRouter>
            <ToastContainer/>
            <UserContext.Provider value={{ user,setUser }}>
            <Header/>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/signin" component={ Signin } />
                <Route exact path="/signup" component={ Signup } />
            </Switch>
            <Footer/>
            </UserContext.Provider>
        </BrowserRouter>
    )
}

export default App;
