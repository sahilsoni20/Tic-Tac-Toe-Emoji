import React from "react";

const UserInput = ({ player, selectedEmoji, onNameChange }) => {
  const handleNameChange = (e) => {
    onNameChange(e.target.value);
  };

  return (
    <div className="user-input">
      <label>Player {player} </label>
      <input type="text" placeholder="your name" onChange={handleNameChange} />
      <span className="input-emoji">
        {selectedEmoji && (
          <i
            className={`em ${selectedEmoji}`}
            aria-label={selectedEmoji
              .replace("em-", "")
              .toUpperCase()
              .replace("_", " ")}
          ></i>
        )}
      </span>
    </div>
  );
};

export default UserInput;
