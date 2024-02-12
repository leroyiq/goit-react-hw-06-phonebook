import {  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Wrapper, Title } from './App.styled';
import toast, { Toaster } from 'react-hot-toast';
import { ContactForm, ContactList, Filter} from 'components';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { search } from 'redux/filterSlice';


export const App = () => {

  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();


  useEffect(() => {
    return window.localStorage.setItem(
      'contacts',
      JSON.stringify(contacts)
    );
  }, [contacts]);
  
  
  const handleChange = event => {
    const { value } = event.target;
    dispatch(search(value));
  };

  const handleFilter = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  };
  
  // add contact
  const onSubmit = ({ name, number }) => {
    const idContact = 'id-' + nanoid(3);
    dispatch(addContact({ id: idContact, name, number }) );
    toast.success('Successfully contact created!', {
      duration: 1500,
    });
  };
  
// delete contact
  const handleDelete = id => {
    dispatch(deleteContact(id));
    toast.success('Contact deleted!', {
      duration: 1500,
    });
  };

  return (
    <Wrapper>
      <Title>Phone Book</Title>
      <ContactForm addContact={onSubmit} onContacts={contacts} />
      <>
        {contacts.length > 0 && <Title>Contacts</Title> && (
          <Filter onFilter={filter} onChange={handleChange} />
        )}

        <ContactList
          contacts={handleFilter()}
          onDelete={handleDelete}
        />
      </>

      <Toaster />
    </Wrapper>
  );
}

