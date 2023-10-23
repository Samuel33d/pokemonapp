import { IconArrowBack, IconSettings } from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";

const Header = () => {
  const urlActual = window.location.href;
  const { id } = useParams();

  return (
    <header className="relative w-full flex justify-center">
      <img
        className="w-full h-[120px] sm:max-h-[200px] sm:h-auto transition-all "
        src="/images/headerBg.png"
        alt=""
      />
      <div className="absolute -top-4  w-full flex items-center justify-between px-3 lg:w-[1000px] mx-auto z-50 ">
        <img
          className="w-[200px] lg:w-[320px] -top-4  transition-all"
          src="/images/logo.png"
          alt=""
        />
        {urlActual.endsWith(id) ? (
          <Link
            className=" bg-[#316AB2]  hover:bg-blue-500 shadow-md shadow-black border-2 border-black  h-12 w-12 sm:h-16 sm:w-16 rounded-[100%] flex flex-col justify-center items-center text-white animVisible transition-all md:mr-2"
            to="/pokedex"
          >
            <IconArrowBack size={40} />
          </Link>
        ) : (
          <Link
            className={`${
              urlActual.endsWith("config") ? "hidden" : "visible"
            } bg-[#316AB2]  hover:bg-blue-500 shadow-md shadow-black border-2 border-black  h-12 w-12 sm:h-16 sm:w-16 rounded-[100%] flex flex-col justify-center items-center text-white animVisible transition-all md:mr-2`}
            to="/config"
          >
            <IconSettings size={40} />
          </Link>
        )}
      </div>
    </header>
  );
};
export default Header;
