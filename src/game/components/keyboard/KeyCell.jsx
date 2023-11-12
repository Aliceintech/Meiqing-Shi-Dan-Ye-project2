import React from 'react';

const KeyCell = ({ letter, onKeyClick, onEnter, onDelete }) => {
  const handleClick = () => {
    if (letter === 'ENTER') {
      onEnter && onEnter();
    } else if (letter === 'DELETE') {
      onDelete && onDelete();
    } else {
      onKeyClick && onKeyClick(letter);
    }
  };


  return (
    <button onClick={handleClick}>
      {letter}
    </button>
  );
};

export default KeyCell;