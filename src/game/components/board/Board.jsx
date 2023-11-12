import React from 'react';
import Row from './Row';
import { useGame } from '../../GameContext';
import './board.css';

const Board = ({ difficulty }) => {  
  const numRows = difficulty === 'hard' ? 5 : 6;
  const numCols = difficulty === 'hard' ? 7 : 6;

  const { currentGuess, guesses, guessesWithClues } = useGame();

  const currentRowClues = Array(numCols).fill({ letter: '', status: 'empty' });
  currentGuess.split('').forEach((letter, index) => {
    currentRowClues[index] = { letter: letter, status: 'current' };
  });

  const rows = guessesWithClues.map((item, index) => (
    <Row key={index} letters={item.guess.split('')} clues={item.clues} />
  ));

  if (guessesWithClues.length < numRows) {
    rows.push(
      <Row key={guessesWithClues.length} letters={currentRowClues.map(clue => clue.letter)} clues={currentRowClues.map(clue => clue.status)} />
    );
  }

  while (rows.length < numRows) {
    const emptyClues = Array(numCols).fill({ letter: '', status: 'empty' });
    rows.push(
      <Row key={rows.length} letters={emptyClues.map(clue => clue.letter)} clues={emptyClues.map(clue => clue.status)} />
    );
  }

  return (
    <div className="board">
      {rows}
    </div>
  );
}

export default Board;