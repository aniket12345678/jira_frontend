import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../slice/auth.slice";

const rootReducer = combineReducers({
    authSlice: authSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})