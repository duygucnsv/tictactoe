import React, { useContext } from "react";

import { GameContext } from "../contexts/GameContext";

const Square = ({ value, index }) => {
  const { squares, setSquares, isXNext, setIsXNext, whoIsWinner, line } =
    useContext(GameContext);
  function handleClick() {
    if (whoIsWinner) return;
    if (squares[index]) return;
    const newSquares = [...squares];
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);
    setIsXNext(!isXNext);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      style={line && line.includes(index) ? { color: "white" } : {}}
    >
      {value}
    </button>
  );
}

export default Square