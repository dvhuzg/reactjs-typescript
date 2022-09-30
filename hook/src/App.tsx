import React, { useState } from "react";
import "./App.css";
import _useState from "./Excersise/_useState";
import _useEffect from "./Excersise/_useEffect";
import _useEffect_1 from "./Excersise/_useEffect_1";
function App() {
  const [showUseState, setShowUseState] = useState(false);
  const [showUseEffect, setShowUseEffect] = useState(false);
  const [showUseEffect_1, setShowUseEffect_1] = useState(false);
  return (
    <div className="App">
      <h1>useState</h1>
      <button onClick={() => setShowUseState(!showUseState)}>
        Show useState
      </button>
      {showUseState && <_useState />}
      <p>----------------------------------------------</p>
      <h1>useEffect</h1>
      <button onClick={() => setShowUseEffect(!showUseEffect)}>
        Show useState
      </button>
      {showUseEffect && <_useEffect />}
      <p>----------------------------------------------</p>
      <h1>Preview data (useEffect)</h1>
      <button onClick={() => setShowUseEffect_1(!showUseEffect_1)}>
        Show useState
      </button>
      {showUseEffect_1 && <_useEffect_1 />}
      <p>----------------------------------------------</p>
    </div>
  );
}

export default App;
