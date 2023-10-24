import { POKEMON_TYPES } from "../../constants/pokedex";

const PokemonCardStats = ({ stat, pokemon }) => {
  return (
    <li
      className="z-50 flex flex-col text-sm text-[#9F9F9F]   uppercase p-1  "
      key={stat?.stat.name}
    >
      <span>{stat?.stat.name}</span>
      <span
        className={`textShadow font-bold  ${
          POKEMON_TYPES[pokemon?.types[0].type.name]
        } text-xl`}
      >
        {stat?.base_stat}
      </span>
    </li>
  );
};
export default PokemonCardStats;
