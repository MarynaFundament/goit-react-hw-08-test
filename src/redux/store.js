import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'

import contactsReducer from "./contactsSlice"; 
import filtersReducer from "./filtersSlice"


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filtersReducer,
    },

 
      
})



