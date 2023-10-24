const PokemonAbilities = ({ ability }) => {
  return (
    <span
      className={`dark:border-0 dark:shadow-slate-500 dark:shadow-sm dark:bg-white dark:text-black py-1 px-4 border-2 rounded-sm shadow-md md:p-3  md:text-md  hover:scale-110 transition-all`}
      key={ability.ability.name}
    >
      {ability.ability.name}
    </span>
  );
};
export default PokemonAbilities;
