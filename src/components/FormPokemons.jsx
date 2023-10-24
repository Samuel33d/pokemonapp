const FormPokemons = ({ setPokemonName, setCurrentType, types }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const pokemonName = e.target.pokemonName.value.toLowerCase().trim();
    setPokemonName(pokemonName);
  };

  const handleChangeType = (e) => {
    setCurrentType(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex  flex-col sm:grid sm:grid-cols-[2fr,1fr] gap-5 transition-all  "
    >
      <div className=" grid dark:border-black grid-cols-[70%,30%] shadow-md border-2 sm:grid-cols-[1fr,auto] transition-all z-50 rounded-md">
        <input
          className="p-2 px-4  outline-none  dark:bg-black/80 dark:text-white  rounded-none "
          type="text"
          placeholder="Search a pokemon"
          name="pokemonName"
        />
        <button className="p-3 px-4 bg-red-500 hover:bg-red-600 hover:dark:bg-red-800 dark:bg-red-700 shadow-md font-bold text-white">
          Search
        </button>
      </div>
      <select
        onChange={handleChangeType}
        name="pokemonType"
        className="shadow-md dark:bg-black/80 dark:text-white dark:border-black p-3 outline-none z-50 border-2 rounded-md"
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
  );
};
export default FormPokemons;
