import React from "react";
import { useLocation } from "react-router-dom";


const Result = ({ time,turns }) => {
    console.log(turns);
  return (
    <div className="result-popup">
      <h2>Game Over</h2>
      <p>Elapsed Time: {time} seconds</p>
      <p>Total Moves: {turns}</p>
    </div>
  );
};

export default Result;