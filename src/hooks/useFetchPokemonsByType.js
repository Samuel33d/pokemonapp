import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchPokemonsByType = (currentType) => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        if (currentType === "") {
            axios
                .get("https://pokeapi.co/api/v2/pokemon?limit=1292")
                .then(({ data }) => setPokemons(data.results))
                .catch((err) => console.log(err));
        } else {
            axios
                .get(`https://pokeapi.co/api/v2/type/${currentType}`)
                .then(({ data }) => {
                    const pokemonList = data.pokemon.map((pokemon) => pokemon.pokemon);
                    setPokemons(pokemonList);
                })
                .catch((err) => console.log(err));
        }
    }, [currentType]);

    return pokemons;
};

export default useFetchPokemonsByType;