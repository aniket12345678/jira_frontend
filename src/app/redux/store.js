import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../slice/auth.slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage
}

const rootReducer = combineReducers({
    authSlice: authSlice.reducer
})
const mainReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: mainReducer,
    middleware: (getMiddleware) => getMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store);