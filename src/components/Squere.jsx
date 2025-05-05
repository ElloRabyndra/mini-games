export default function Square({ value, onSquereClick }) {
  return (
    <button className="text-white size-16 lg:size-20 bg-tertiary rounded-2xl hover:border-2 hover:border-main active:border-light text-2xl lg:text-4xl font-bold" onClick={onSquereClick}>
      {value}
    </button>
  );
}