import { Route, Routes } from "react-router-dom";
import "./App.css";
import PokemonDetail from "./pages/PokemonDetails";
import Pokedex from "./pages/Pokedex";
import Home from "./pages/Home";
import PrivateRoutes from "./components/PrivateRoutes";
import Config from "./pages/Config";
import { useSelector } from "react-redux";


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
