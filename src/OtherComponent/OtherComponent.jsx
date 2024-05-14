import React from "react";
import { useContext } from "react";
import { CounterContext } from "../DataProvider/CounterProvider";
 
const OtherComponent=()=>{

    const {counter,setCounter}=useContext(CounterContext)
    return(<>
    
<button onClick={(e)=>{setCounter(counter-1)}}>Decre------</button>
    
    
    </>)
}

export default OtherComponent;