import { useEffect, useState } from "react";
import { paginationLogic } from "../utils/pagination";
import PokemonCard from "./Pokemons/PokemonCard";

import { useSelector } from "react-redux";
import PaginationBtns from "./PaginationBtns";

const Pagination = ({ pokemons }) => {
  const POKEMONS_PER_PAGE = useSelector((store) => store.pokemonsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const { itemsInCurrentPage, lastPage, pagesInCurrentBlock } = paginationLogic(
    currentPage,
    pokemons,
    POKEMONS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [pokemons]);

  return (
    <main className="max-w-[1024px] mx-auto py-10 transition-all">
      <PaginationBtns
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <section>
        <ul className="  grid sm:grid-cols-[repeat(auto-fit,minmax(301px,1fr))] gap-10 sm:gap-5  px-5 transition-all  ">
          {itemsInCurrentPage.map((pokemon) => (
            <PokemonCard key={pokemon.url} pokemonInfo={pokemon.url} />
          ))}
        </ul>
      </section>
      <PaginationBtns
        lastPage={lastPage}
        pagesInCurrentBlock={pagesInCurrentBlock}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </main>
  );
};
export default Pagination;
