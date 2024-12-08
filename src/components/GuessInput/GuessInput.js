import React, { useState } from "react";

function GuessInput({ disabled, handleGuess }) {
  const [guess, setGuess] = useState("");

  const handleGuessChange = (event) => {
    const value = event.target.value;
    if (!/^[a-zA-Z]{0,5}$/.test(value)) return;
    setGuess(value.toUpperCase());
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    if (guess.length !== 5) return;
    handleGuess(guess);
    setGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleGuessSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleGuessChange}
      />
    </form>
  );
}

export default GuessInput;
