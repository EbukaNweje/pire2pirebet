import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    slip: []
};

const features = createSlice({
    name: "Pier",
    initialState,
    reducers: {
        userData: (state, {payload}) => {
            state.userData = payload
            console.log("User Data:", payload);
        },
        betSlip: (state, {payload})=>{
            state.slip.push({
                team1: payload.team1,
                team2: payload.team2,
                odds: payload.odds,
            });
            console.log("betSlip", payload.userPick.team1);
         },
    },
});

export const {
    userData,
    betSlip,
} = features.actions;

export default features.reducer;
