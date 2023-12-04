import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    slip: []
};

// console.log("BetSlip", initialState.slip);

const features = createSlice({
    name: "Pier",
    initialState,
    reducers: {
        userData: (state, {payload}) => {
            state.userData = payload
            console.log("User Data:", payload);
        },
        betSlip: (state, { payload }) => {
            const existingOddsIndex = state.slip.findIndex(
                (item) => item.team1 === payload.team1 && item.team2 === payload.team2
            );

            if (existingOddsIndex !== -1) {
                state.slip[existingOddsIndex] = payload;
            } else {
                state.slip.push(payload);
            }
            console.log("Updated betSlip:", state.slip);
        },
        clearSlip: (state) => {
            state.slip = [];
        },
    },
});

export const {
    userData,
    betSlip,
    clearSlip,
} = features.actions;

export default features.reducer;
