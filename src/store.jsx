import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import storage from "redux-persist/lib/storage";
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
// import trippyReducer from "./";
import features from '../src/Redux/Features'

const persistConfig = {
    key: "root",
    storage: storage,
};
//   export const rootReducers = combineReducers({
//     commerce: eCommerce,
//   })
const persistedReducer = persistReducer(persistConfig, features);

const store = configureStore({
    reducer: { Pier: persistedReducer },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});
setupListeners(store.dispatch);

export default store;