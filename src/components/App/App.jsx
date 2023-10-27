import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Wrapper, Title } from './App.styled';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/slice/filterSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact);
  const filter = useSelector(state => state.filter);
  console.log(contacts);
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem('contacts')) || initContacts;
  // });

  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   return window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const handleChange = event => {
    const { value } = event.target;
    dispatch(filterContacts(value));
  };

  const onSubmit = ({ name, number }) => {
    // const idContact = 'id-' + nanoid(3);
    // setContacts(prevState => [...prevState, { id: idContact, name, number }]);

    toast.success('Successfully contact created!', {
      duration: 1500,
    });
  };

  const handleFilter = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(normalizedFilter));
  };

  const handleDelete = id => {
    // setContacts(prevState => prevState.filter(contact => contact.id !== id));
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

        <ContactList contacts={handleFilter()} onDelete={handleDelete} />
      </>

      <Toaster />
    </Wrapper>
  );
};
