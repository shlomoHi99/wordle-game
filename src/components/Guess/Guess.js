import React from "react";
import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ answer, guess = "" }) {
  const guessChars = guess.toUpperCase().split("");
  const guessCheck = guess && checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(0, 5).map((_, index) => (
        <span
          className={`cell ${guessCheck?.[index]?.status || ""}`}
          key={index}
        >
          {guessChars[index] || ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
