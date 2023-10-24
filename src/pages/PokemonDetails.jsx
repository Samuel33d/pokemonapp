import { useParams } from "react-router-dom";
import Header from "../components/Header";
import PokemonAbilities from "../components/PokemonAbilities";
import PokemonMoves from "../components/PokemonMoves";
import PokemonStats from "../components/PokemonStats";
import PokemonType from "../components/PokemonType";
import {
  POKEMON_TYPES,
  POKEMON_TYPES__BG,
  POKEMON_TYPES__BORDER,
} from "../constants/pokedex";
import useFetchPokemonsDetails from "../hooks/useFetchPokemonsDetails";

const PokemonDetail = () => {
  const { id } = useParams();
  const pokemon = useFetchPokemonsDetails(id);

  return (
    <main>
      <Header />

      <section className="animVisible max-w-[1024px] mt-20 lg:mt-24 mb-10 mx-auto grid place-items-center px-2  text-center ">
        <article
          className={`${
            POKEMON_TYPES__BORDER[pokemon?.types[0].type.name]
          } w-[300px] sm:w-[400px] md:w-[500px] lg:w-[950px] border-2 capitalize rounded-[4px] transition-all shadow-lg bg-white z-50 `}
        >
          <header
            className={`relative h-[80px] md:h-[120px] ${
              POKEMON_TYPES__BG[pokemon?.types[0].type.name]
            } `}
          >
            <img
              className="absolute -top-20 md:-top-24 w-[150px]  left-1/2 -translate-x-1/2  md:w-[200px] lg:w-[220px]  transition-all  "
              src={pokemon?.sprites.other["official-artwork"].front_default}
              alt=""
            />
          </header>

          <section className="relative flex flex-col gap-3 mt-3 md:mt-8  mx-auto">
            <span
              className={`${
                POKEMON_TYPES[pokemon?.types[0].type.name]
              } font-bold text-md  border w-fit mx-auto px-3 py-1 mb-6 sm: lg:text-[2rem] `}
            >
              #{pokemon?.id}
            </span>
            <h3
              className={`absolute left-1/2 -translate-x-1/2 -bottom-4 bg-white dark:transparent   px-6 ${
                POKEMON_TYPES[pokemon?.types[0].type.name]
              } font-bold text-2xl  sm:text-[2rem]`}
            >
              {pokemon?.name}
            </h3>
          </section>

          <section className=" pb-5 border-t-2  w-[90%] md:w-[80%]  mx-auto py-5 flex justify-center  gap-10 font-medium text-[#0F0F2D] md:pt-14 md:pb-0">
            <div className="flex flex-col">
              <span className="text-[17px] sm:text-[16px]">Weight</span>
              <span className="text-[17px] sm:text-[24px] font-bold">
                {pokemon?.weight}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] sm:text-[16px]">Height</span>
              <span className="text-[17px] sm:text-[24px] font-bold">
                {pokemon?.height}
              </span>
            </div>
          </section>

          <section className=" flex flex-col lg:grid  lg:grid-cols-2 sm:place-items-center justify-center items-center  w-[90%] md:w-[80%] mx-auto gap-5 pb-10 border-b-2 ">
            <div className="flex flex-col justify-center gap-3 text-sm font-bold text-white md:my-5 lg:my-10 md:gap-5">
              <h4 className="md:text-[22px] text-black text-[16px]">Type</h4>
              <div className="flex gap-2">
                {pokemon?.types.map((type) => (
                  <PokemonType type={type} key={type.type.name} />
                ))}
              </div>
            </div>
            <div className="flex flex-col   gap-3 text-sm font-bold my-5 mb-8  md:my-5 lg:my-10  md:gap-5">
              <h4 className="md:text-[22px]  text-black  text-[16px]">
                Skills
              </h4>
              <div className="flex gap-2">
                {pokemon?.abilities.map((ability) => (
                  <PokemonAbilities
                    ability={ability}
                    key={ability.ability.name}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="relative ">
            <h4 className="absolute font-bold left-4  md:left-8 lg:left-[4.5rem] -top-5  px-5 bg-white text-2xl  sm:text-[2rem] ">
              Stats
            </h4>
            <ul className="w-[80%] mx-auto py-10 flex flex-col gap-5 font-bold md:text-lg">
              {pokemon?.stats.map((stat) => (
                <PokemonStats stat={stat} key={stat.stat.name} />
              ))}
            </ul>
          </section>
        </article>
      </section>

      <section
        className={`${
          POKEMON_TYPES__BORDER[pokemon?.types[0].type.name]
        } w-[300px] sm:w-[400px] md:w-[500px] lg:w-[950px] border-2 capitalize rounded-[4px]  shadow-lg mx-auto  sm:px-10 lg:px-24 sm:py-5  px-8 py-3 my-5`}
      >
        <h4 className=" font-bold text-2xl sm:text-[2rem] mb-5 ">Movements</h4>
        <ul className="flex flex-wrap gap-3 transition-all ">
          {pokemon?.moves.slice(0, 30).map((move) => (
            <PokemonMoves move={move} key={move.move.name} />
          ))}
        </ul>
      </section>
      <div className="fixed bg-black/30 h-full w-full  top-0  rounded-sm hidden dark:block -z-50"></div>
    </main>
  );
};
export default PokemonDetail;
