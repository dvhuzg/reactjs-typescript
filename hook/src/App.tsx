import React, { useState } from "react";
import _useState from "./Excersise/_useState";
import _useEffect from "./Excersise/_useEffect";
import "./App.css";
function App() {
  const [showUseState, setShowUseState] = useState(false);
  const [showUseEffect, setShowUseEffect] = useState(false);
  return (
    <div className="App">
      <h1>useState</h1>
      <button onClick={()=>setShowUseState(!showUseState)}>Show useState</button>
     {showUseState && <_useState />} 
      <p>----------------------------------------------</p>
      <h1>useEffect</h1>
      <button onClick={()=>setShowUseEffect(!showUseEffect)}>Show useState</button>
     {showUseEffect && <_useEffect />} 
      <p>----------------------------------------------</p>
    </div>
  );
}

export default App;
