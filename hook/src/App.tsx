import { useState } from "react";
import "./App.css";
import _useState from "./Excersise/_useState";
import _useEffect from "./Excersise/_useEffect";
import _useEffect_1 from "./Excersise/_useEffect_1";
import _useEffect_2 from "./Excersise/_useEffect_2";
import _useRef from "./Excersise/_useRef";
import _useCallback from "./Excersise/_useCallback";
import _useMemo from "./Excersise/_useMemo";
import _useReducer from "./Excersise/_useReducer";
function App() {
  const [showUseState, setShowUseState] = useState(false);
  const [showUseEffect, setShowUseEffect] = useState(false);
  const [showUseEffect_1, setShowUseEffect_1] = useState(false);
  const [showUseEffect_2, setShowUseEffect_2] = useState(false);
  const [showUseRef, setShowUseRef] = useState(false);
  const [showUseCallback, setShowUseCallback] = useState(false);
  const [showUseMemo, setShowUseMemo] = useState(false);
  const [showUseReducer, setShowUseReducer] = useState(false);
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
        Show useState_1
      </button>
      {showUseEffect_1 && <_useEffect_1 />}
      <p>----------------------------------------------</p>
      <h1>Fake chat app (useEffect)</h1>
      <button onClick={() => setShowUseEffect_2(!showUseEffect_2)}>
        Show useState_2
      </button>
      {showUseEffect_2 && <_useEffect_2 />}
      <p>----------------------------------------------</p>

      <h1>useRef</h1>
      <button onClick={() => setShowUseRef(!showUseRef)}>Show useRef</button>
      {showUseRef && <_useRef />}
      <p>----------------------------------------------</p>
      <h1>useCallback</h1>
      <button onClick={() => setShowUseCallback(!showUseCallback)}>
        Show useCallback
      </button>
      {showUseCallback && <_useCallback />}
      <p>----------------------------------------------</p>
      <h1>useMemo</h1>
      <button onClick={() => setShowUseMemo(!showUseMemo)}>Show useMemo</button>
      {showUseMemo && <_useMemo />}
      <p>----------------------------------------------</p>
      <h1>useReducer</h1>
      <button onClick={() => setShowUseReducer(!showUseReducer)}>
        Show useReducer
      </button>
      {showUseReducer && <_useReducer />}
      <p>----------------------------------------------</p>
    </div>
  );
}

export default App;
