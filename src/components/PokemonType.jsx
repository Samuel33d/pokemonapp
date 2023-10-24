import { POKEMON_TYPES__BG_SPAN } from "../constants/pokedex";
const PokemonType = ({ type }) => {
  return (
    <span
      key={type.type.name}
      className={` ${
        POKEMON_TYPES__BG_SPAN[type.type.name]
      } px-4 shadow-md py-1 md:px-10 md:py-3 rounded-sm  border md:text-md hover:scale-110 transition-all`}
    >
      {type.type.name}
    </span>
  );
};
export default PokemonType;
