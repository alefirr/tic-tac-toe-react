import React, { useState } from 'react';
import { Cell } from './Cell';

const EMPTY_CELLS = [null, null, null, null, null, null, null, null, null];

export const Board = () => {
  const [cells, setCells] = useState(EMPTY_CELLS);
  const [isXMove, setIsXMove] = useState(true);

  const resetGame = () => {
    setCells(EMPTY_CELLS);
  };

  const makeMove = (index) => {
    const cellsToChange = cells.slice();
    cellsToChange[index] = isXMove ? 'X' : 'O';
    setCells(cellsToChange);
    setIsXMove((prev) => !prev);
  };
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(cells);

  return (
    <div className="game">
      <div className="board">
        {cells.map((cellValue, index) => (
          <Cell
            key={`cell-${index}`}
            value={cellValue}
            makeMove={() => makeMove(index)}
            winner={winner}
          />
        ))}
      </div>
      <div className="control-panel">
        {winner ? (
          <p>Winner: {winner}</p>
        ) : (
          <p className="current-player-state">
            Current player: {isXMove ? 'X' : 'O'}
          </p>
        )}
        <button className="start-game-button" onClick={resetGame}>
          Start new game
        </button>
      </div>
    </div>
  );
};
