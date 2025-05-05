/* eslint-disable react/prop-types */
import { useState } from "react";
import "./css/App.css";
import Board from "./components/Board";
import Info from "./components/info";

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

  return (
    <main className="game">
      <header>
        <h1 className="m-2 lg:m-5 text-center text-3xl lg:text-5xl font-bold ">
          Tic-Tac-Toe
        </h1>
      </header>
      <section className="relative space-y-5">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <Info history={history} jumpTo={jumpTo} />
      </section>
    </main>
  );
}
