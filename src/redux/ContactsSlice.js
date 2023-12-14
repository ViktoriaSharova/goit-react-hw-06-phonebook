import { nanoid } from 'nanoid';
import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';

export const contactsSlice = createSlice({
  name: 'phonebook',
  initialState: {
    contacts: [],
    filters: '',
  },
  reducers: {
    addContacts: {
      prepare(data) {
        return {
          payload: {
            value: data,
            id: nanoid(),
          },
        };
      },
      reducer(state, action) {
        state.contacts = [...state.contacts, action.payload];
      },
    },
    filters(state, action) {
      state.filters = action.payload;
    },
    deleteStoreContact(state, action) {
      state.contacts = state.contacts.filter(
        item => item.id !== action.payload
      );
    },
  },
});
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const phonebookReduсer = contactsSlice.reducer;
export const { addContacts, filters, deleteStoreContact } = contactsSlice.actions;
export const persistedReducer = persistReducer(persistConfig, phonebookReduсer);