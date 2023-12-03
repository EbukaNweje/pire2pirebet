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
            state.slip.push(payload)
            console.log("betSlip", payload);
         },
    },
});

export const {
    userData,
    betSlip,
} = features.actions;

export default features.reducer;
