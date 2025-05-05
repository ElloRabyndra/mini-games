import Square from "./Squere";

export default function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();

    nextSquares[i] = xIsNext ? "X" : "O";

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = "";
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <section className="size-80 lg:size-96 p-4 bg-secondary rounded-2xl">
      <h1 className="text-center text-2xl lg:text-3xl font-bold">{status}</h1>
      <main className="p-4 flex flex-wrap justify-center items-center gap-4">
        <Square value={squares[0]} onSquereClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquereClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquereClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquereClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquereClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquereClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquereClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquereClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquereClick={() => handleClick(8)} />
      </main>
    </section>
  );
}

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
