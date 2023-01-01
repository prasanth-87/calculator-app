import React from "react"
import { useState } from "react";
import './App.css';

function App() {
  const [input,setInput]=useState('')
  const [result,setResult]=useState(0)
  const handler=(e)=>{
    setInput(e.target.value.replace(/\D/g, ''));
  }
  const handleClick=()=>{
    setResult(eval(input));
    setInput('');
  }
  const clearHnadle=()=>{
    setInput("")
    setResult(0)
  }
  return (
    <div>
      <h5>Calculator:{result}</h5>
      <div className="App">
      <center >
        <div className="input">
          <input className="rounded mt-2 p-1" type="text"  value={input} onChange={handler}/>
        </div>
        <div>
        <button onClick={()=>setInput(input+"(")}>(</button>
          <button onClick={()=>setInput(input+")")}>)</button>
          <button onClick={()=>setInput(input+"%")}>%</button>
          <button onClick={clearHnadle}>CE</button> <br/>

          <button onClick={()=>setInput(input+"7")}>7</button>
          <button onClick={()=>setInput(input+"8")}>8</button>
          <button onClick={()=>setInput(input+"9")}>9</button>
          <button onClick={()=>setInput(input+"/")}>/</button> <br/>

          <button onClick={()=>setInput(input+"4")}>4</button>
          <button onClick={()=>setInput(input+"5")}>5</button>
          <button onClick={()=>setInput(input+"6")}>6</button>
          <button onClick={()=>setInput(input+"*")}>*</button> <br/>

          <button onClick={()=>setInput(input+"1")}>1</button>
          <button onClick={()=>setInput(input+"2")}>2</button>
          <button onClick={()=>setInput(input+"3")}>3</button>
          <button onClick={()=>setInput(input+"-")}>-</button> <br/>

          <button onClick={()=>setInput(input+"0")}>0</button>
          <button onClick={()=>setInput(input+".")}>.</button>
          <button onClick={handleClick} >=</button>
          <button onClick={()=>setInput(input+"+")}>+</button>
        </div>
      </center>
    </div>
    </div>
  );
}

export default App;
