import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = React.useState(false);
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [ballPosition, setBallPosition] = React.useState({
    left: "0px",
    top: "0px"
  });
  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);
    setBallPosition({ left: "0px", right: "0px" });
  };

  const startHandle = () => {
    setRenderBall(true);
  };

  const handleBallMovement = (event) => {
    const copyNew = { ...ballPosition };
    if (event.keyCode === 39) {
      copyNew.left = +copyNew.left.slice(0, -2) + 5 + "px";
    } else if (event.keyCode === 40) {
      copyNew.top = +copyNew.top.slice(0, -2) + 5 + "px";
    } else if (event.keyCode === 37) {
      copyNew.left = +copyNew.left.slice(0, -2) - 5 + "px";
    }
    if (event.keyCode === 38) {
      copyNew.top = +copyNew.top.slice(0, -2) - 5 + "px";
    }
    setBallPosition(copyNew);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleBallMovement);
    return () => {
      document.removeEventListener("keydown", handleBallMovement);
    };
  });

  const renderChoice = () => {
    if (renderBall === true) {
      return <div className="ball" style={ballPosition}></div>;
    } else {
      return (
        <button className="start" onClick={startHandle}>
          Start
        </button>
      );
    }
  };

  return (
    <div className="playground">
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
