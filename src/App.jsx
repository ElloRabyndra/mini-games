import { useState } from "react";
import "./App.css";


function Squere({value, onSquereClick}) {
  return (
    <button className="size-16 md:size-20 bg-tertiary rounded-2xl hover:border-2 hover:border-main active:border-light text-2xl md:text-4xl font-bold" onClick={onSquereClick}> {value}</button>
  );
}

export default function Game() {
  const [squeres, setSqueres] = useState(Array(9).fill(null));
  const [isNext, setNext] = useState(true);

  function handleSquereClick(i) {
    if(squeres[i] || calculateWinner(squeres)) return;
    squeres[i] = isNext ? "X" : "O";
    setSqueres(squeres)
    setNext(!isNext);
  }

  return (
    <section className="size-80 md:size-96 p-4 bg-secondary rounded-2xl">
      <h1 className="text-center text-3xl md:text-4xl font-bold">Tic-Tac-Toe</h1>
      <div className="p-4 flex flex-wrap justify-center items-center gap-4">
      <Squere value={squeres[0]} onSquereClick={() => handleSquereClick(0)} />
      <Squere value={squeres[1]} onSquereClick={() => handleSquereClick(1)} />
      <Squere value={squeres[2]} onSquereClick={() => handleSquereClick(2)} />
      <Squere value={squeres[3]} onSquereClick={() => handleSquereClick(3)} />
      <Squere value={squeres[4]} onSquereClick={() => handleSquereClick(4)} />
      <Squere value={squeres[5]} onSquereClick={() => handleSquereClick(5)} />
      <Squere value={squeres[6]} onSquereClick={() => handleSquereClick(6)} />
      <Squere value={squeres[7]} onSquereClick={() => handleSquereClick(7)} />
      <Squere value={squeres[8]} onSquereClick={() => handleSquereClick(8)} />
      </div>
    </section>
  );
}


// Fungsi untuk menentukan pemenang
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return false;
}


