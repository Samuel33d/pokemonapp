const PokemonMoves = ({ move }) => {
  return (
    <li
      className="bg-[#E5E5E5] z-50 dark:text-white dark:bg-blue-900  movement p-2 px-3 rounded-3xl font-bold "
      key={move?.move.name}
    >
      {move?.move.name}
    </li>
  );
};
export default PokemonMoves;
