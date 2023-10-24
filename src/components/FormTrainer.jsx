import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setTrainerName } from "../slices/trainerName.slice";

const FormTrainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const trainerName = e.target.trainerName.value;
    dispatch(setTrainerName(trainerName));

    navigate("/pokedex");
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center px-5 font-medium gap-10 min-w-[290px] lg:md:w-[500px] transition-all "
    >
      <input
        className="bg-transparent border-2
            placeholder:text-slate-700 text-[1.10rem] rounded-xl p-4 w-full border-[#004280] outline-none text-center lg:text-2xl transition-all shadow-lg"
        type="text"
        placeholder="Give me your name to start"
        name="trainerName"
      />
      <button
        className="p-[.6rem] px-10 bg-[#FF6B57] rounded-lg drop-shadow-2xl shadow-md hover:bg-[#f05946] transition-a font-bold lg:text-[1.1rem] "
        type="submit"
      >
        Click to start!
      </button>
    </form>
  );
};
export default FormTrainer;
