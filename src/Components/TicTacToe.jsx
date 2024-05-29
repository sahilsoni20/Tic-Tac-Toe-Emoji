import React, { useState, useEffect } from "react";

const TicTacToe = ({
  player1Name,
  player2Name,
  player1Emoji,
  player2Emoji,
  onGameEnd,
}) => {
  const [activePlayer, setActivePlayer] = useState(1);
  const [winner, setWinner] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));

  const handleClick = (index) => {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = activePlayer === 1 ? player1Emoji : player2Emoji;
      setBoard(newBoard);
      checkWinner(newBoard);
      setActivePlayer(activePlayer === 1 ? 2 : 1);
    }
  };

  const checkWinner = (board) => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(activePlayer);
        return;
      }
    }

    if (!board.includes(null) && !winner) {
      setWinner("draw");
    }
  };

  useEffect(() => {
    console.log("TicTacToe component rendered");
    if (winner) {
      onGameEnd(winner);
    }
  }, [winner, onGameEnd]);

  const renderSquare = (index) => {
    return (
      <div className={"square"} onClick={() => handleClick(index)}>
        {board[index]}
      </div>
    );
  };

  return (
    <div>
      <div className="user-info">
        <div className="player-1">
          <span className="Player1-emoji">{player1Emoji}</span>
          <p>{player1Name}</p>
        </div>
        <div className="player-2">
          <span className="Player2-emoji">{player2Emoji}</span>
          <p>{player2Name}</p>
        </div>
      </div>
      <div className="game-board">
        {board.map((square, index) => (
          <div key={index} className={"board-row"}>
            {renderSquare(index)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
