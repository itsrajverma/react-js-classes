import React from 'react';
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import AppSection from "./components/AppSection";
import Footer from "./components/Footer";
import CardSection from "./components/CardSection";

const App = () => {
    return (
        <div>
            <Header/>
            <Jumbotron/>
            <AppSection/>
            <CardSection/>
            <Footer/>
        </div>
    )
}

export default App;
