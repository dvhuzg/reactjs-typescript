import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AddTask from "./pages/AddTask";
import ShowTaskList from "./pages/ShowTaskList";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ShowTaskList />} />
          <Route path="/add-new-task" element={<AddTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
