import { useDispatch, useSelector } from 'react-redux';
import { deleteStoreContact } from '../../redux/ContactsSlice';
import { List, ListItem, ListItemBtn } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();

  const initialContacts = useSelector(state => state.contacts);
  const stateFilter = useSelector(state => state.filter);

  const visibleContacts = initialContacts.filter(contact => {
    const hasFilteredName = contact.name &&
    contact.name.toLowerCase().includes(stateFilter.toLowerCase());

    return hasFilteredName;
  });

  const deleteContact = contactId => {
    const action = deleteStoreContact(contactId);
    dispatch(action);
  };

  return (
    <>
      {visibleContacts.length > 0 && (
        <List>
          {visibleContacts.map(contact => (
            <ListItem key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <ListItemBtn onClick={() => deleteContact(contact.id)}>
                Delete
              </ListItemBtn>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};