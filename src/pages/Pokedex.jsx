import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PokemonList from "../components/PokemonList";
import Header from "../components/Header";

const Pokedex = () => {
  const trainerName = useSelector((store) => store.trainerName);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState("");
  const [types, setTypes] = useState([]);
  const [currentType, setCurrentType] = useState("");

  //! Seguir con el segundo filtro de las options(select)
  const pokemonsByName = pokemons.filter((pokemon) =>
    pokemon.name.includes(pokemonName)
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const pokemonName = e.target.pokemonName.value.toLowerCase().trim();
    setPokemonName(pokemonName);
  };

  const handleChangeType = (e) => {
    setCurrentType(e.target.value);
  };

  useEffect(() => {
    if (currentType === "") {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=1292")
        .then(({ data }) => setPokemons(data.results))
        .catch((err) => console.log(err));
    }
  }, [currentType]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then(({ data }) => setTypes(data.results))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (currentType !== "") {
      axios
        .get(`https://pokeapi.co/api/v2/type/${currentType}`)
        .then(({ data }) =>
          setPokemons(data.pokemon.map((pokemon) => pokemon.pokemon))
        )
        .catch((err) => console.log(err));
    }
  }, [currentType]);

  return (
    <main className="items-center animVisible relative">
      <Header />

      <section className="flex flex-col max-w-[1024px] mx-auto px-5 gap-10 py-10  ">
        <p className="font-medium md:text-2xl z-50">
          <span className="font-bold text-red-500">Hi {trainerName}! </span>
          here you can find your favorite Pokemon!
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:grid sm:grid-cols-[2fr,1fr] gap-5 transition-all"
        >
          <div className="grid grid-cols-[70%,30%] shadow-md border-2 sm:grid-cols-[1fr,auto] transition-all z-50 dark:border-black">
            <input
              className="p-2 px-4 rounded-sm outline-none  dark:bg-white/50 "
              type="text"
              placeholder="Search a pokemon"
              name="pokemonName"
            />
            <button className="p-3 px-4 bg-red-500 hover:bg-red-600 shadow-md font-bold text-white rounded-sm  ">
              Search
            </button>
          </div>
          <select
            onChange={handleChangeType}
            name="pokemonType"
            className="shadow-md p-3 outline-none z-50 border-2 dark:bg-white/50 dark:border-black"
          >
            <option className="" value="">
              All Types
            </option>
            {types.map((type) => (
              <option className="" key={type.url} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </form>
      </section>

      {pokemonsByName.length > 0 ? (
        <PokemonList pokemons={pokemonsByName} />
      ) : (
        <p className="text-center text-xl mt-10 px-5">
          There`s not Pokemons found. Try with other Pokemon Name or type
        </p>
      )}
      <div className="fixed bg-black/30 h-full w-full  top-0  rounded-sm hidden dark:block"></div>
    </main>
  );
};
export default Pokedex;
