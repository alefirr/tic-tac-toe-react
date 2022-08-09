import React from 'react';

export const Cell = ({ value, makeMove, winner }) => {
  return (
    <button className="cell" onClick={makeMove} disabled={value || winner}>
      {value}
    </button>
  );
};
