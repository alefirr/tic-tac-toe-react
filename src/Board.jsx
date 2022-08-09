import React, { useState } from 'react';
import { Cell } from './Cell';

const EMPTY_CELLS = [null, null, null, null, null, null, null, null, null];

export const Board = () => {
  const [cells, setCells] = useState(EMPTY_CELLS);

  const resetGame = () => {
    setCells(EMPTY_CELLS);
  };

  return (
    <div className="game">
      <div className="board">
        {cells.map((el, index) => (
          <Cell key={`cell-${index}`} />
        ))}
      </div>
      <div className="control-panel">
        <p className="current-player-state">Current player</p>
        <button className="start-game-button" onClick={resetGame}>
          Start new game
        </button>
      </div>
    </div>
  );
};
