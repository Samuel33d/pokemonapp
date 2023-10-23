const paginationLogic = (currentPage, pokemons, POKEMONS_PER_PAGE) => {

    const VISIBLE_PAGES = 5;


    const totalPages = Math.ceil(pokemons.length / POKEMONS_PER_PAGE)

    const sliceEnd = POKEMONS_PER_PAGE * currentPage;
    const sliceStart = sliceEnd - POKEMONS_PER_PAGE;
    const pokemonsInPage = pokemons.slice(sliceStart, sliceEnd)

    let pages = [];


    const startPage = Math.max(1, currentPage - Math.floor(VISIBLE_PAGES / 2 + 1));
    const endPage = Math.min(totalPages, startPage + VISIBLE_PAGES - 1);

    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    const showNextSet = endPage < totalPages;


    return {
        pokemonsInPage,
        pages,
        showNextSet,
    }
}

export { paginationLogic }