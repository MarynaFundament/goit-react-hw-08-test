import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'

import contactsReducer from "./contactsSlice"; 
import filtersReducer from "./filtersSlice"
import authReducer from "./auth/slice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        contacts: contactsReducer,
        filter: filtersReducer,
    },

 
      
})



