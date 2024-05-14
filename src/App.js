import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import { CounterContext } from './DataProvider/CounterProvider';
import OtherComponent from './OtherComponent/OtherComponent';
function App() {
  const {counter,setCounter}=useContext(CounterContext)
  return (
    <div className="App">
      <h1>Counter:{counter}</h1>
      <button onClick={(e)=>{setCounter(counter+1)}}>Increase ++</button>
     <OtherComponent/>
    </div>
  );
}

export default App;
