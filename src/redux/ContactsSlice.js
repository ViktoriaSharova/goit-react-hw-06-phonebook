import { nanoid } from 'nanoid';
// import storage from 'redux-persist/lib/storage';
import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';

// export const contactsSlice = createSlice({
//   name: 'phonebook',
//   initialState: {
//     contacts: [],
//     filters: '',
//   },
//   reducers: {
//     addNewContact: {
//       prepare(data) {
//         return {
//           payload: {
//             value: data,
//             id: nanoid(),
//           },
//         };
//       },
//       reducer(state, action) {
//         state.contacts = [...state.contacts, action.payload];
//       },
//     },
//     setFilters(state, action) {
//       state.filters = action.payload;
//     },
//     deleteStoreContact(state, action) {
//       state.contacts = state.contacts.filter(
//         item => item.id !== action.payload
//       );
//     },
//   },
// });
// const persistConfig = {
//   key: 'contacts',
//   storage,
//   whitelist: ['contacts'],
// };

// export const phonebookReducer = contactsSlice.reducer;
// export const { addNewContact, setFilters, deleteStoreContact } = contactsSlice.actions;
// export const persistedReducer = persistReducer(persistConfig, phonebookReducer);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filters: '',
  },
  reducers: {
    addNewContact: {
      reducer(state, action) {
        state.contacts.push(action.payload); // Обращаемся к полю contacts
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
      // Используем метод filter для обращения к массиву contacts
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addNewContact, deleteStoreContact } = contactsSlice.actions;