import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import App from "./App";
import Starting from "./components/Starting";
import Result from "./components/Result";
function App1() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <h1>React Tile Matching Game</h1>
        <Routes>
          <Route
            path="/"
            element={
              isGameStarted ?
               <App /> : <Starting toggle={toggleGamePlay} />
            }
          />
         <Route path="/results" element={<Result />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App1;