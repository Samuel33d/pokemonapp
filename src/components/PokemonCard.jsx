import axios from "axios";
import { useEffect, useState } from "react";
import {
  POKEMON_TYPES,
  POKEMON_TYPES__BG,
  POKEMON_TYPES__BORDER,
} from "../constants/pokedex";
import { Link } from "react-router-dom";

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
      }  text-center capitalize rounded-lg overflow-hidden justify-center items-center gap-10  dark:bg-white/80 z-50 `}
    >
      <header
        className={`relative h-[125px] ${
          POKEMON_TYPES__BG[pokemon?.types[0].type.name]
        } `}
      >
        <img
          className="absolute -bottom-14  left-1/2 -translate-x-1/2  w-[165px] z-50"
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>
      <div className=" flex flex-col pt-12 ">
        <h3
          className={`${
            POKEMON_TYPES[pokemon?.types[0].type.name]
          } font-bold text-2xl z-50`}
        >
          {pokemon?.name}
        </h3>
        <span>{pokemon?.types.map((type) => type.type.name).join(" / ")}</span>
        <span className="text-[#9F9F9F]  text-[14px]">Types</span>
      </div>
      <ul className="grid grid-cols-2 py-5">
        {pokemon?.stats.slice(0, 4).map((stat) => (
          <li
            className="z-50 flex flex-col text-sm text-[#9F9F9F]   uppercase p-1  "
            key={stat?.stat.name}
          >
            <span>{stat?.stat.name}</span>
            <span
              className={`font-bold  ${
                POKEMON_TYPES[pokemon?.types[0].type.name]
              } text-xl`}
            >
              {stat?.base_stat}
            </span>
          </li>
        ))}
      </ul>
    </Link>
  );
};
export default PokemonCard;
