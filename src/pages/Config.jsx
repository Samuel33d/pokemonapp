import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import { setPokemonsPerPage } from "../slices/pokemonsPerPage.slice";
import { Link } from "react-router-dom";
import { IconArrowBack, IconMoon, IconSun } from "@tabler/icons-react";
import { toggleDarkMode } from "../slices/darkMode.slice";

const Config = () => {
  const pokemonsPerPage = useSelector((store) => store.pokemonsPerPage);
  const isDarkMode = useSelector((store) => store.darkMode);

  const dispatch = useDispatch();

  const handleChangePokemonsPerPage = (e) => {
    const POKEMONS_PER_PAGE = e.target.value;
    dispatch(setPokemonsPerPage(POKEMONS_PER_PAGE));
  };

  const handleChangeTheme = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <>
      <Header />
      <main className="px-2">
        <section className="my-10 animVisible grid place-items-center min-h-full max-w-[500px] transition-all mx-auto  shadow-2xl font-medium  rounded-md text-xl p-5 gap-5 dark:bg-black/40 dark:text-white border-2 dark:border-black ">
          <h3 className="font-bold z-50">Options</h3>

          <form
            onChange={handleChangePokemonsPerPage}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center z-50"
          >
            <span className="justify-self-center z-50">Pokemon per page: </span>
            <select className="shadow-md border-2 p-3 outline-none w-48 text-neutral-950 rounded-md dark:border-black ">
              <option value={pokemonsPerPage}>Default value</option>
              <option value="20">20</option>
              <option value="16">16</option>
              <option value="12">12</option>
              <option value="8">8</option>
              <option value="4">4</option>
            </select>
          </form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center z-50">
            <span className="justify-self-center">Theme mode:</span>
            <button
              onClick={handleChangeTheme}
              className={`h-16 w-16 mx-auto p-3  rounded-full flex justify-center items-center border-2 shadow-md ${
                isDarkMode ? "bg-[#316AB2] border-black text-white" : ""
              }`}
            >
              {isDarkMode ? <IconMoon size={50} /> : <IconSun size={50} />}
            </button>
          </div>
          <Link
            className=" bg-[#316AB2]  hover:bg-blue-500 shadow-md shadow-black border-2 border-black  h-12 w-12 sm:h-16 sm:w-16 rounded-[100%] flex flex-col justify-center items-center text-white animVisible transition-all md:mr-2 justify-self-end z-50"
            to="/pokedex"
          >
            <IconArrowBack size={40} />
          </Link>
        </section>
      </main>
      <div className="fixed bg-black/30 h-full w-full  top-0  rounded-sm hidden dark:block"></div>
    </>
  );
};
export default Config;
