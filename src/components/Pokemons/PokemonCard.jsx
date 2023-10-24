import axios from "axios";
import { useEffect, useState } from "react";
import {
  POKEMON_TYPES,
  POKEMON_TYPES__BG,
  POKEMON_TYPES__BORDER,
} from "../../constants/pokedex";
import { Link } from "react-router-dom";
import PokemonCardStats from "./PokemonCardStats";

const PokemonCard = ({ pokemonInfo }) => {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    axios
      .get(pokemonInfo)
      .then(({ data }) => setPokemon(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Link
      to={`/pokedex/${pokemon?.id}`}
      className={`relative pokedexMain border-[10px] shadow-2xl ${
        POKEMON_TYPES__BORDER[pokemon?.types[0].type.name]
      } dark:bg-black/80 dark:text-white text-center capitalize rounded-lg overflow-hidden justify-center items-center gap-10 bg-white z-50 dark:border-0 dark:shadow-slate-500 dark:shadow-lg`}
    >
      <header
        className={`relative h-[125px] ${
          POKEMON_TYPES__BG[pokemon?.types[0].type.name]
        } `}
      >
        <img
          className={`absolute -bottom-14  left-1/2 -translate-x-1/2  w-[165px] z-50 ${
            pokemon?.sprites.other["official-artwork"].front_default === null
              ? "h-42 w-42 -top-1 rounded-full"
              : ""
          }`}
          src={
            pokemon?.sprites.other["official-artwork"].front_default === null
              ? "https://svgsilh.com/svg/1574006.svg"
              : pokemon?.sprites.other["official-artwork"].front_default
          }
          alt=""
        />
      </header>
      <div className=" flex flex-col pt-12 ">
        <h3
          className={`${
            POKEMON_TYPES[pokemon?.types[0].type.name]
          } textShadow font-bold text-2xl z-50`}
        >
          {pokemon?.name}
        </h3>
        <span>{pokemon?.types.map((type) => type.type.name).join(" / ")}</span>
        <span className="text-[#9F9F9F]  text-[14px] border-b pb-2">Types</span>
      </div>
      <ul className="grid grid-cols-2 py-5">
        {pokemon?.stats.slice(0, 4).map((stat) => (
          <PokemonCardStats
            key={stat.stat.name}
            stat={stat}
            pokemon={pokemon}
          />
        ))}
      </ul>
    </Link>
  );
};
export default PokemonCard;
