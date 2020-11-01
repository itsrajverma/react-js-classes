import React,{useReducer,useEffect}  from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css";

import { Container } from "reactstrap"

import { BrowserRouter,Switch,Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";


// firebase config call here
import { firebaseConfig } from "./utils/config";
import firebase from "firebase/app";
import "firebase/database"
import "firebase/storage"

// context api call here
import reducer from "./context/reducer";
import { ContactContext } from "./context/Context";
import { SET_LOADING,SET_CONTACT } from "./context/action.types";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Contacts from "./pages/Contacts";
import AddContact from "./pages/AddContact";


firebase.initializeApp(firebaseConfig);


const initialState = {
    isLoading : false,
    contacts : []
}




const App = () => {

    const [state,dispatch] = useReducer(reducer,initialState);

    const getContacts = async () => {
        dispatch({
            type : SET_LOADING,
            payload : true
        })

        const contactsRef =  await firebase.database().ref("/contacts");
        contactsRef.on("value",snapshot=>{

            dispatch({
                type : SET_CONTACT,
                payload : snapshot.val()
            })

            dispatch({
                type : SET_LOADING,
                payload : false
            })


        })


    }

    useEffect(()=>{
        getContacts();
    },[])

    return(
        <BrowserRouter>
            <ContactContext.Provider value={{state,dispatch}}>
            <ToastContainer/>
                <Header/>
                <Container>
                    <Switch>
                        <Route exact path="/" component={Contacts} />
                        <Route exact path="/contact/add" component={AddContact} />
                    </Switch>
                </Container>
                <Footer/>
            </ContactContext.Provider>
        </BrowserRouter>
    )
}

export default App;
