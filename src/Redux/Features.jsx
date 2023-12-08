import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    slip: [],
    isLoggedIn: false,
    logout: []
};

// console.log("BetSlip", initialState.slip);

const features = createSlice({
    name: "Pier",
    initialState,
    reducers: {
      userData: (state, { payload }) => {
        state.user = payload;
        console.log("User Data:", payload);
      },
      isLoggedInUser: (state, { payload }) => {
        state.isLoggedIn = payload;
        console.log("Is Logged In?", payload);
      },
      logOut: (state) => {
        state.user = [];
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
      removeSingle: (state, { payload }) => {
        const updatedSlip = state.slip.filter(
          (item) => item.bettor !== payload.bettor
        );
        state.slip = updatedSlip;
      },
    },
  });
  

export const {
    userData,
    isLoggedInUser,
    logOut,
    betSlip,
    clearSlip,
    removeSingle,
} = features.actions;

export default features.reducer;
