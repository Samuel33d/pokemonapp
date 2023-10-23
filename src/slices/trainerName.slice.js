import { createSlice } from "@reduxjs/toolkit";

const trainerNameSlice = createSlice({
    name: "trainerName",
    initialState: "",
    reducers: {
        setTrainerName: (state, action) => {
            const isDarkMode = action.payload
            return isDarkMode
        }
    }
})

export const { setTrainerName } = trainerNameSlice.actions

export default trainerNameSlice.reducer