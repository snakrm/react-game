// import React from 'react'
// export default function Dice({player1,setPlayer1}) {

import React, { useEffect } from "react";
// import { rollTheDice, resetTheDice } from "./Function";

export default function Section() {
  const [player1, setPlayer1] = React.useState({
    title: "Player 1",
    score: 0,
    image: "/Dice6.jpeg",
    isWinner: false,
  });
  const [player2, setPlayer2] = React.useState({
    title: "Player 2",
    score: 0,
    image: "/Dice6.jpeg",
    isWinner: false,
  });

  const [status, setStatus] = React.useState({
    title: "Start rolling",
  });

  // useEffect (() => {
  //   if (player1.score>=25 || player2.score>=25)

  // },[player1.score,player2.score])

  const [winnerScore, setWinnerScore] = React.useState(25);

  useEffect(() => {
    console.log("use effect running...")
    if (player1.score >= winnerScore || player2.score >= winnerScore) {
      if (player1.score == player2.score) setStatus({title: "Draw !!"});
      else if (player1.score > player2.score) setStatus({title:"Player 1 wins !!"});
      else {
        setStatus({title:"Player 2 wins !! "});
      }
    }
  }, [player1.score, player2.score]);

  const resetTheDice = () => {
    
    setPlayer1((prev) => ({
      ...prev,
      score: 0,
      image: "/Dice6.jpeg",
    }));
    setPlayer2((prev) => ({
      ...prev,
      score: 0,
      image: "/Dice6.jpeg",
    }));
    setStatus((prev) => ({
      ...prev,
      title: "Start rolling",
    }));
  };

  const rollTheDice = () => {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    // setPlayer1(prevState => {...prevState, existingKey: 'new value'})

    setPlayer1((prev) => ({
      ...prev,
      score: player1.score + randomNumber1,
      image: `/Dice${randomNumber1}.jpeg`,
    }));
    setPlayer2((prev) => ({
      ...prev,
      score: player2.score + randomNumber2,
      image: `/Dice${randomNumber2}.jpeg`,
    }));
    setStatus((prev) => ({
      ...prev,
      title: "Rolling",
    }));
  };

  return (
    <div className=" pt-12 ">
      <h1 className="text-5xl">Let's Play</h1>
      <div className="bg-black">
        <div className="dice ml-32 pt-5 pb-10">
          <p className="text-lg pb-10">{player1.title}</p>
          <img className="pb-8" src={player1.image} />
          <p id="">{player1.score}</p>
        </div>

        <div className="dice pl-10 pt-5 pb-10">
          <p className=" text-lg pb-10">{player2.title}</p>
          <img className="pb-8" src={player2.image} />
          <p id="">{player2.score}</p>
        </div>
      </div>
      <p id="result">{status.title}</p>

      <div className="container bottom">
        <button
          disabled={player1.score >= 25 || player2.score >= 25}
          id="myBtn"
          type="button"
          className="ml-5 px-12 py-5 rounded bg-slate-400 butn "
          onClick={() => rollTheDice()}
        >
          Roll the Dice
        </button>
      </div>
      <div className="container bottom">
        <button type="button" className="ml-5 px-12 py-4 rounded bg-slate-400 butn " onClick={resetTheDice}>
          Reset
        </button>
      </div>
    </div>
  );
}
