import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialStateContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactId = () => {
  return nanoid(3);
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,

  reducers: {
    addContact: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: contactId(),
            name,
            number,
          },
        };
      },
    },

    deleteContact(state, action) {
      // const index = state.findIndex(contact => contact.id === action.payload);
      // state.splice(index, 1);

      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
