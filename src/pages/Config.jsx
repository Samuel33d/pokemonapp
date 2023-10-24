import { IconArrowBack, IconMoon, IconSun } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FormConfig from "../components/FormConfig";
import Header from "../components/Header";
import Overlay from "../components/Overlay";
import { toggleDarkMode } from "../slices/darkMode.slice";

const Config = () => {
  const isDarkMode = useSelector((store) => store.darkMode);
  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    dispatch(toggleDarkMode());
  };



  return (
    <main>
      <Header />
      <section className="px-2">
        <section className="my-10 animVisible grid place-items-center min-h-full max-w-[500px] transition-all mx-auto  shadow-2xl font-medium  rounded-md text-xl p-5 gap-5 border-2 dark:bg-black/80 dark:text-white ">
          <h3 className="font-bold z-50">Options</h3>
          <FormConfig />
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
      </section>
      <Overlay />
    </main>
  );
};
export default Config;
