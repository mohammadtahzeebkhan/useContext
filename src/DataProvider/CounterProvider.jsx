import React, { useState } from "react";
import { createContext } from "react";

const CounterContext=createContext();
const CounterProvider=({children})=>{

const [counter,setCounter]=useState(0)
return(
<CounterContext.Provider value={{counter,setCounter}}>
{children}

</CounterContext.Provider>


)


}
export {CounterProvider,CounterContext}