import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

// import contactsReducer from "./contactsSlice"; 
// import filtersReducer from "./filtersSlice"
import authReducer from "./auth/slice"
import { tasksReducer } from './tasks/slice';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

export const store = configureStore({
    reducer: {
        auth: authReducer,
        tasks: tasksReducer,
      
        // contacts: contactsReducer,
        // filter: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
 
      
})



