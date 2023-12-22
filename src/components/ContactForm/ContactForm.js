import { Formik } from 'formik';
import {
  FormWrapper,
  FormField,
  FormLabel,
  FormBtn,
} from './ContactForm.styled';

import * as Yup from 'yup';
import { useSelector, useDispatch } from 'react-redux';
import { addNewContact } from '../../redux/ContactsSlice';

const contactsSheme = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const initialContacts = useSelector(state => state.contacts);

const addContact = value => {
  if (Array.isArray(initialContacts.contacts)) {
    const hasName = initialContacts.contacts.some(
      contact => contact.name === value.name
    );
    if (hasName) {
      alert(`${value.name} is already in contacts.`);
      return;
    } else {
      const action = addNewContact(value);
      dispatch(action);
    }
  } else {
    console.error("initialContacts.contacts is not an array");
  }
};

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={contactsSheme}
      onSubmit={(values, actions) => {
        addContact(values);
        actions.resetForm();
      }}
    >
      <FormWrapper>
      <div>
        <FormLabel>
          Name
          <FormField name="name" />
        </FormLabel>
        </div>
        <div>
        <FormLabel>
          Number
          <FormField name="number" />
          </FormLabel>
          </div>
        <FormBtn type="submit">Add contact</FormBtn>
      </FormWrapper>
    </Formik>
  );
};