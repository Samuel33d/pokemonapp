import { createSlice } from "@reduxjs/toolkit";

const pokemonsPerPageSlice = createSlice({
    name: "pokemonsPerPage",
    initialState: "20",
    reducers: {
        setPokemonsPerPage: (state, action) => {
            const newValue = action.payload
            return newValue
        }
    }
})

export const { setPokemonsPerPage } = pokemonsPerPageSlice.actions

export default pokemonsPerPageSlice.reducer

