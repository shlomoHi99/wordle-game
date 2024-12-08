import React, { useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import { sample } from "../../utils";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import HappyBanner from "../HappyBanner";
import SadBanner from "../SadBanner";

function Game() {
  const [answer, setAnswer] = useState(() => sample(WORDS));
  const [guesses, setGuesses] = useState([]);
  const [gameLost, setGameLost] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const handleGuess = (guess) => {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) return;
    console.log({ guess });
    setGuesses((prevGuesses) => [
      ...prevGuesses,
      { guess, id: crypto.randomUUID() },
    ]);
    if (guess === answer) setGameWon(true);
    else if (guesses.length + 1 === NUM_OF_GUESSES_ALLOWED) setGameLost(true);
  };
  const resetGame = () => {
    setAnswer(sample(WORDS));
    setGuesses([]);
    setGameLost(false);
    setGameWon(false);
  };

  return (
    <>
      {(gameWon || gameLost) && (
        <button className="resetButton" onClick={resetGame}>
          reset game
        </button>
      )}
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput disabled={gameWon || gameLost} handleGuess={handleGuess} />
      {gameWon && <HappyBanner numOfGuesses={guesses.length} />}
      {gameLost && <SadBanner correctAnswer={answer} />}
    </>
  );
}

export default Game;
