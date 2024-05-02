// store.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import storage from "redux-persist/lib/storage"; // Defaults to localStorage for web

import authReducer from "features/Auth/state/authSlice";
import postcodeReducer from "features/Nearby/state/postcodeSlice";
import NotificationMessageReducer from "shared/state/NotificationMessageSlice";
// Combine your reducers
const rootReducer = combineReducers({
  auth: authReducer,
  postcode: postcodeReducer,
  NotificationMessage: NotificationMessageReducer,
});

// Configure Redux Persist options
const persistConfig = {
  key: "root",
  storage, // storage engine to use
  whitelist: ["auth"], // list of reducers to persist
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
});

// Create the persisted store
export const persister = persistStore(store);
