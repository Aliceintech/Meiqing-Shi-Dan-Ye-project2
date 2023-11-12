import React from 'react';

const Cell = ({ letter, status }) => {
  
  const statusToColor = {
    correct: 'green', 
    present: 'yellow',
    absent: 'grey',
  };

  const backgroundColor = statusToColor[status] || 'transparent';

  const style = {
    backgroundColor,
  };

  return (
    <div className="cell" style={style}>
      {letter.toUpperCase()}
    </div>
  );
};

export default Cell;