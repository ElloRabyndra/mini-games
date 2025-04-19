/* eslint-disable react/prop-types */
import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // const moves = history.map((squares, move) => {
  //   let description = '';
  //   if (move > 0) {
  //     description = 'Move #' + move;
  //   } else {
  //     description = 'Game start';
  //   }

  //   return (
  //     <li key={move}>
  //       <button onClick={() => jumpTo(move)}>{description}</button>
  //     </li>
  //   );
  // });

  return (
    <main className="game">
      <header>
        <h1 className="m-4 text-center text-4xl md:text-5xl font-bold ">
          Tic-Tac-Toe
        </h1>
      </header>
      <section className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </section>
      <section className="game-info">{/* <ol>{moves}</ol> */}</section>
    </main>
  );
}
