import {
  IconPlayerTrackNextFilled,
  IconPlayerTrackPrevFilled,
} from "@tabler/icons-react";

const PaginationBtns = ({
  lastPage,
  pagesInCurrentBlock,
  setCurrentPage,
  currentPage,
}) => {
  return (
    <section className="px-5 py-10  ">
      <ul className="flex flex-wrap justify-center items-center gap-0 sm:gap-3  ">
        {currentPage !== 1 && (
          <button
            className="h-8 w-8 z-50 dark:border-black sm:h-16 sm:w-16 transition-all rounded-md sm:text-xl shadow-lg border bg-red-500 hover:bg-red-600 dark:bg-red-700 hover:dark:bg-red-800 text-white  "
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <IconPlayerTrackPrevFilled className="mx-auto z-50 " size={15} />
          </button>
        )}
        {pagesInCurrentBlock.map((page) => (
          <li key={page} className="z-50 dark:border-black dark:text-white ">
            <button
              onClick={() => setCurrentPage(page)}
              className={`h-8  w-8 sm:h-16 sm:w-16 transition-all rounded-md sm:text-xl   ${
                page === currentPage &&
                " dark:border-black sm:h-16 sm:w-16 transition-all rounded-md sm:text-xl shadow-lg border bg-red-500 hover:bg-red-600 dark:bg-red-700 hover:dark:bg-red-800 text-white "
              }`}
            >
              {page}
            </button>
          </li>
        ))}

        {currentPage === lastPage ? (
          ""
        ) : (
          <button
            className="h-8 w-8 z-50 dark:border-black sm:h-16 sm:w-16 transition-all rounded-md sm:text-xl shadow-lg border bg-red-500 hover:bg-red-600 dark:bg-red-700 hover:dark:bg-red-800 text-white "
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <IconPlayerTrackNextFilled className="mx-auto z-50" size={15} />
          </button>
        )}
      </ul>
    </section>
  );
};
export default PaginationBtns;
