import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchPokemonTypes = () => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        axios
            .get("https://pokeapi.co/api/v2/type/")
            .then(({ data }) => setTypes(data.results))
            .catch((err) => console.log(err));
    }, []);

    return types;
};

export default useFetchPokemonTypes;