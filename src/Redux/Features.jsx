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
      userData: (state, { payload }) => {
        state.userData = payload;
        console.log("User Data:", payload);
      },
      betSlip: (state, { payload }) => {
        const existingOddsIndex = state.slip.findIndex(
          (item) => item.bettor === payload.bettor
        );
  
        if (existingOddsIndex !== -1) {
          // If the bettor's odds already exist, update the existing odds with the new odds
        //   alert("bettor already exist")
          state.slip[existingOddsIndex].oddsSelected = payload.oddsSelected;
        } else {
          // If the bettor's odds don't exist, add the new odds to the slip array
          state.slip.push(payload);
        }
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
