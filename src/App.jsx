import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoutes from "./components/PrivateRoutes";
import Config from "./pages/Config";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import PokemonDetail from "./pages/PokemonDetails";

function App() {
  const isDarkMode = useSelector((store) => store.darkMode);

  return (
    <main className={isDarkMode ? "dark" : ""}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokemonDetail />} />
          <Route path="/config" element={<Config />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
