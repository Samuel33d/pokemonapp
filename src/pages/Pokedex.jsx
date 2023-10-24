import { useState } from "react";
import { useSelector } from "react-redux";
import PokemonList from "../components/PokemonList";
import Header from "../components/Header";
import useFetchPokemonsByType from "../hooks/useFetchPokemonsByType";
import useFetchPokemonTypes from "../hooks/usePokemonTypes";
import FormPokemons from "../components/FormPokemons";
import Overlay from "../components/Overlay";

const Pokedex = () => {
  const trainerName = useSelector((store) => store.trainerName);
  const [pokemonName, setPokemonName] = useState("");
  const [currentType, setCurrentType] = useState("");
  const types = useFetchPokemonTypes();
  const pokemons = useFetchPokemonsByType(currentType);

  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName)
  );

  return (
    <main className="dark:bg-black/50 overflow-hidden items-center animVisible relative  min-h-screen">
      <Header />

      <section className="flex flex-col max-w-[1024px] mx-auto px-5 gap-10 py-10 ">
        <p className="font-medium md:text-2xl z-50 dark:text-white/90 ">
          <span className=" font-bold text-red-500 dark:text-red-600">
            Hi {trainerName}!{" "}
          </span>
          here you can find your favorite Pokemon!
        </p>

        <FormPokemons
          types={types}
          setPokemonName={setPokemonName}
          setCurrentType={setCurrentType}
        />
      </section>

      {pokemonsByName.length > 0 ? (
        <PokemonList pokemons={pokemonsByName} />
      ) : (
        <p className="text-center text-xl mt-10 px-5">
          There`s not Pokemons found. Try with other Pokemon Name or type
        </p>
      )}
      <Overlay/>
    </main>
  );
};
export default Pokedex;
