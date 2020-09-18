import React,{Fragment} from 'react';
import Provider from "./provider";
import PackageContext from "./context"


const Agents = () => {
    return <AgentOne/>;
}


const AgentOne = () => {
    return <AgentTwo/>;
}

const AgentTwo = () => {
    return <AgentBond/>;
}

const AgentBond = () => {
    return (
        <PackageContext.Consumer>
            { context => (
                <Fragment>
                    <h2>Agent Information</h2>
                    <p>Mission Name : { context.data.name }</p>
                    <p>Agent No : { context.data.agent }</p>
                    <p>Mission Status : { context.data.accept }</p>
                    <button onClick={context.isMissionAccepted}>Click to Accept</button>
                </Fragment>
            ) }
        </PackageContext.Consumer>
    )
}

const App = () =>{
    return(
        <div>
            <h1>Context API</h1>
            <Provider>
                <Agents />
            </Provider>
        </div>
    )
}

export default App;
