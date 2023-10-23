import { useEffect, useState } from "react";
import { paginationLogic } from "../utils/pagination";
import PokemonCard from "./PokemonCard";
import {
  IconPlayerTrackNextFilled,
  IconPlayerTrackPrevFilled,
} from "@tabler/icons-react";
import { useSelector } from "react-redux";

const Pagination = ({ pokemons }) => {
  const POKEMONS_PER_PAGE = useSelector((store) => store.pokemonsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const { pages, pokemonsInPage, showNextSet } = paginationLogic(
    currentPage,
    pokemons,
    POKEMONS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [pokemons]);

  return (
    <main className="max-w-[1024px] mx-auto py-10 transition-all">
      <section>
        <ul className="  grid sm:grid-cols-[repeat(auto-fit,300px)] gap-10  px-5 transition-all  ">
          {pokemonsInPage.map((pokemon) => (
            <PokemonCard key={pokemon.url} pokemonInfo={pokemon.url} />
          ))}
        </ul>
      </section>

      <section className="px-5 py-10  ">
        <ul className="flex flex-wrap justify-center items-center gap-1 sm:gap-3  ">
          {currentPage !== 1 && (
            <button
              className="h-10 w-10 z-50 sm:h-16 sm:w-16 transition-colors bg-red-500 hover:bg-red-600 rounded-md sm:text-xl shadow-lg border dark:border-black  text-white flex justify-between items-center"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <IconPlayerTrackPrevFilled className="mx-auto z-50 " size={15} />
            </button>
          )}
          {pages.map((page) => (
            <li key={page} className="z-50 dark:border-black dark:text-white">
              <button
                onClick={() => setCurrentPage(page)}
                className={`h-10 w-10 sm:h-16 sm:w-16 transition-colors rounded-md sm:text-xl   ${
                  page === currentPage && "bg-red-500 hover:bg-red-600 "
                }`}
              >
                {page}
              </button>
            </li>
          ))}

          {showNextSet && (
            <button
              className="h-10 w-10 z-50 dark:border-black sm:h-16 sm:w-16 transition-colors rounded-md sm:text-xl shadow-lg border bg-red-500 hover:bg-red-600 text-white "
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <IconPlayerTrackNextFilled className="mx-auto z-50" size={15} />
            </button>
          )}
        </ul>
      </section>
    </main>
  );
};
export default Pagination;
