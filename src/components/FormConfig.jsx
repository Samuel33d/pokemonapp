import { useDispatch, useSelector } from "react-redux";
import { setPokemonsPerPage } from "../slices/pokemonsPerPage.slice";

const FormConfig = () => {
  const pokemonsPerPage = useSelector((store) => store.pokemonsPerPage);
  const dispatch = useDispatch();

  const handleChangePokemonsPerPage = (e) => {
    const POKEMONS_PER_PAGE = e.target.value;
    dispatch(setPokemonsPerPage(POKEMONS_PER_PAGE));
  };

  return (
    <form
      onChange={handleChangePokemonsPerPage}
      className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center z-50"
    >
      <span className="justify-self-center z-50">Pokemon per page: </span>
      <select className="shadow-md border-2 p-3 outline-none w-48 text-black rounded-md dark:border-black  dark:bg-black/80 dark:text-white">
        <option value={pokemonsPerPage}>Default value</option>
        <option value="20">20</option>
        <option value="16">16</option>
        <option value="12">12</option>
        <option value="8">8</option>
        <option value="4">4</option>
      </select>
    </form>
  );
};
export default FormConfig;
