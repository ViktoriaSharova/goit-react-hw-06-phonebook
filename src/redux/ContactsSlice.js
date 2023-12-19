import { nanoid } from 'nanoid';
import { createSlice } from '@reduxjs/toolkit';


const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filters: '',
  },
  reducers: {
    addNewContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(),
            name: name,
            number: number,
          },
        };
      },
    },
    deleteStoreContact(state, action) {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addNewContact, deleteStoreContact } = contactsSlice.actions;