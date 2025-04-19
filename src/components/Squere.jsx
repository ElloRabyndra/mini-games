export default function Square({ value, onSquereClick }) {
  return (
    <button className="text-white size-16 md:size-20 bg-tertiary rounded-2xl hover:border-2 hover:border-main active:border-light text-2xl md:text-4xl font-bold" onClick={onSquereClick}>
      {value}
    </button>
  );
}