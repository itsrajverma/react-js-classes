import React,{useState} from "react";

import PackageContext from './context';

const Provider = props => {

    const [mission,setMission] = useState({
        name : "Go to Russia",
        agent : "007",
        accept : "Not Accepted"
    });

    return(
        <PackageContext.Provider value={{
            data : mission,
            isMissionAccepted : ()=>{
                setMission({...mission,accept :"Accepted"})
            }
        }}>
            { props.children }
        </PackageContext.Provider>
    )

}

export default Provider;
