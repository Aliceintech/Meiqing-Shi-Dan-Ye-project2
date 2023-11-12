import React from 'react';
import Cell from './Cell';

const Row = ({ letters, clues }) => {

  return (
    <div className="row">
      {letters.map((letter, index) => {
        return <Cell key={index} letter={letter} status={clues[index].status} />;
      })}
    </div>
  );

};

export default Row;