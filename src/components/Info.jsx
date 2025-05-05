export default function Info({ history, jumpTo }) {
  const moves = history.map((squares, move) => {
    let description = "";
    if (move > 0) {
      description = "Move " + move;
    } else {
      description = "Game start";
    }

    return (
      <li
        key={move}
        className="p-2 text-center bg-tertiary rounded-2xl hover:border-1 hover:border-main"
      >
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  const [gameStart, ...movesWithoutStart] = moves;

  return (
    <section className="bg-secondary w-80 lg:w-64 h-max mx-auto p-4 rounded-2xl space-y-3 lg:absolute top-0 -right-72">
      <h1 className="text-center text-xl md:text-2xl font-bold">
        Game History
      </h1>
      <ol className="space-y-2 text-sm">
        <header>{gameStart}</header>
        <main className="grid grid-cols-3 gap-2">
        {movesWithoutStart}
        </main>
      </ol>
    </section>
  );
}
