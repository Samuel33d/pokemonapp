import { useEffect, useState } from "react";
import axios from "axios";

const useFetchPokemonsDetails = (id) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(({ data }) => setPokemon(data))
            .catch((err) => console.log(err));

        window.scrollTo(0, 0);
    }, [id]);

    return pokemon;
}

export default useFetchPokemonsDetails;