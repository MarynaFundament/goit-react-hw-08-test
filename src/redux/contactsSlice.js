import { createSlice, createSelector } from "@reduxjs/toolkit";

import { fetchContacts, deleteContact, addContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";

const contactsReducer = createSlice({
    name: "contacts",
    initialState: {
      items: [],
      loading: false,
      error: null
    },
 
 

    extraReducers: (builder) => {
      builder
        .addCase(fetchContacts.pending, (state) => {
          state.loading = true;
          state.error = false;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
          state.loading = false;
          state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, (state) => {
          state.loading = false;
          state.error = true;
        })
        .addCase(deleteContact.pending, (state) => {
          state.loading = true;
          state.error = false;
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
          state.loading = false;
          state.items = state.items.filter(contact => contact.id !== action.payload.id);
        })
        .addCase(deleteContact.rejected, (state) => {
          state.loading = false;
          state.error = true;
        })
        .addCase(addContact.pending, (state) => {
          state.loading = true;
          state.error = false;
        })
        .addCase(addContact.fulfilled, (state, action) => {
          state.loading = false;
          state.items.push(action.payload);
        })
        .addCase(addContact.rejected, (state) => {
          state.loading = false;
          state.error = true;
        });
    }
  });


  export default contactsReducer.reducer;

  export const selectContacts = state => state.contacts.items;
  export const selectLoading = state => state.contacts.loading;
  export const selectError = state => state.contacts.error;

  export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter], 
  (contacts, filterText ) => {
    return contacts.filter((el) => 
     el.name.toLowerCase().includes(filterText.toLowerCase()))
  })





