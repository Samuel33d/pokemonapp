import "animate.css";
import FormTrainer from "../components/FormTrainer";

const Home = () => {
  return (
    <main className="bg-[url('/images/bg-home.jpeg')] min-h-screen bg-cover  grid place-items-center bg-center p-2 md:px-40 py-20 md:pb-12 md:pt-32 transition-all overflow-hidden z-50">
      <section className="relative flex flex-col bg-white/60 rounded-[50px] border-8 border-[#443C3B] text-center gap-5  w-full justify-center items-center h-full ">
        <div className="min-w-[290px] py-[10rem] max-w-[500px] transition-all">
          <img
            className="absolute -top-[4.5rem] left-1/2 -translate-x-1/2 w-[230px] sm:w-[500px] sm:-top-[9rem] transition-all"
            src="/images/logo.png"
            alt=""
          />
          <h3 className="text-[32px] lg:text-[42px] font-bold mb-5 transition-all">
            Hello Trainer!
          </h3>

          <FormTrainer />
        </div>
        <img
          className="pokeBallStay absolute spin bottom-5 -right-[5rem] max-h-[150px] md:hidden transition-opacity"
          src="/images/pokedex.png"
          alt=""
        />
        <img
          className="pokeBallStay absolute spin -bottom-3 -right-[19.5rem] hidden md:block max-h-[400px] transition-opacity"
          src="/images/pokedex.png"
          alt=""
        />
      </section>

      <div className="fixed animHidden min-h-screen  bg-[#0090F3] top-0 left-0 w-screen grid place-items-center">
        <img
          className="pokeBall  w-[230px] md:w-[500px]"
          src="/images/logo.png"
          alt=""
        />
      </div>
    </main>
  );
};
export default Home;
