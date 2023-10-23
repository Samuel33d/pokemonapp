import { Route, Routes } from "react-router-dom";
import "./App.css";
import PokemonDetail from "./pages/PokemonDetails";
import Pokedex from "./pages/Pokedex";
import Home from "./pages/Home";
import PrivateRoutes from "./components/PrivateRoutes";
import Config from "./pages/Config";
import { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <main className={isDarkMode ? "dark" : ""}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokemonDetail />} />
          <Route
            path="/config"
            element={
              <Config isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
