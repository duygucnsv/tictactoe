import React, { useContext } from "react";

import { GameContext } from "../contexts/GameContext";

const Winner = () => {
  const { whoIsWinner } = useContext(GameContext);

  return <h1>{whoIsWinner ? `The Winner is: ${whoIsWinner} 🏆🎉` : ""}</h1>;
};

export default Winner;
