import React, {useState} from 'react';



const GrandChild = (props) => {
    return(
        <div>
            <h3>Grand Child : { props.brand }</h3>
            <Child brand={props.brand}/>
        </div>
    )
}



const Child = (props) => {
    return(
        <div>
            <h2>Child : { props.brand }</h2>
        </div>
    )
}




const App = () => {

    const [brandName] = useState("Amazon");

    return(
        <div>
            <h1>Hello World</h1>
            <GrandChild brand={brandName}/>
        </div>
    )
}

export default App;
