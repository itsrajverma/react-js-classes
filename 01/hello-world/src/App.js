import React from 'react';
import './style.css';
import Button from './components/Button';
function App(){
    return(
    <div>
        <h1 style={ {textAlign: 'center'} }>Hello World</h1>
        <Button name="Register"/>
        <Button name="Login"/>

        <Button name="Forget Password"/>
    </div>
    )
}

export default App;