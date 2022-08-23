import React from "react";

import GameContextProvider from "../contexts/GameContext";
import Board from "../components/Board";

const App = () => {
  return (
    <GameContextProvider>
      <Board />
    </GameContextProvider>
  );
};

export default App;
