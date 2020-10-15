import React from 'react';

import { BrowserRouter,Switch,Route } from "react-router-dom"

import './App.css';

import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

const App = () => {

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/signin" component={ Signin } />
                <Route exact path="/signup" component={ Signup } />
            </Switch>
        </BrowserRouter>
    )
}

export default App;
