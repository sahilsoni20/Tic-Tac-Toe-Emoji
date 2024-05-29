import React, { useState } from "react";
import UserInput from "../src/Components/UserInput";
import EmojiSelector from "../src/Components/EmojiSelector";
import TicTacToe from "./Components/TicTacToe";
import "./App.css";

const App = () => {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");
  const [player1Emoji, setPlayer1Emoji] = useState("em-x");
  const [player2Emoji, setPlayer2Emoji] = useState("em-o");
  const [activePlayer, setActivePlayer] = useState(1);
  const [gameStarted, setGameStarted] = useState(false);
  const [winner, setWinner] = useState(null);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleNameChange = (player, name) => {
    if (player === 1) {
      setPlayer1Name(name);
    } else if (player === 2) {
      setPlayer2Name(name);
    }
  };

  const handleEmojiChange = (player, emoji) => {
    if (player === 1) {
      setPlayer1Emoji(emoji);
    } else if (player === 2) {
      setPlayer2Emoji(emoji);
    }
  };

  const handlePlayButton = () => {
    if (player1Name && player2Name) {
      setGameStarted(true);
    }
  };

  const handleGameEnd = (winner) => {
    setWinner(winner);
    setShowOverlay(true);
  };

  const resetGame = () => {
    setPlayer1Name("");
    setPlayer2Name("");
    setPlayer1Emoji("");
    setPlayer2Emoji("");
    setGameStarted(false);
    setWinner(null);
    setShowOverlay(false);
  };

  return (
    <div className="emoji-container">
      {!gameStarted && (
        <div>
          <h2>Tic-Tac-Toe Emojis</h2>
          <UserInput
            player={1}
            selectedEmoji={player1Emoji}
            onNameChange={(name) => handleNameChange(1, name)}
            onEmojiChange={(emoji) => handleEmojiChange(1, emoji)}
          />
          <UserInput
            player={2}
            selectedEmoji={player2Emoji}
            onNameChange={(name) => handleNameChange(2, name)}
            onEmojiChange={(emoji) => handleEmojiChange(2, emoji)}
          />
          <EmojiSelector
            onEmojiClick={(emoji) => handleEmojiChange(activePlayer, emoji)}
            activeEmoji={activePlayer === 1 ? player1Emoji : player2Emoji}
            setActivePlayer={setActivePlayer}
            activePlayer={activePlayer}
          />
          <button
            className="play-btn"
            onClick={handlePlayButton}
            disabled={!player1Name || !player2Name}
          >
            Play !!
          </button>
        </div>
      )}
      {gameStarted && (
        <TicTacToe
          player1Name={player1Name}
          player2Name={player2Name}
          player1Emoji={
            <i
              className={`em ${player1Emoji}`}
              aria-label={player1Emoji
                .replace("em-", "")
                .toUpperCase()
                .replace("_", " ")}
            ></i>
          }
          player2Emoji={
            <i
              className={`em ${player2Emoji}`}
              aria-label={player2Emoji
                .replace("em-", "")
                .toUpperCase()
                .replace("_", " ")}
            ></i>
          }
          onGameEnd={handleGameEnd}
        />
      )}
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            {winner === "draw" ? (
              <p>It's a draw!</p>
            ) : (
              <p>The Winner is {winner === 1 ? player1Name : player2Name} !</p>
            )}
            <button onClick={resetGame}>Play Again</button>
          </div>
        </div>
      )}
      <p className="footer">By Sahil Soni</p>
    </div>
  );
};

export default App;
