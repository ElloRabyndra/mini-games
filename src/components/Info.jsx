export default function Info({ history, jumpTo }) {
  const moves = history.map((squares, move) => {
    let description = "";
    if (move > 0) {
      description = "Move #" + move;
    } else {
      description = "Game start";
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return <ol>{moves}</ol>;
}
