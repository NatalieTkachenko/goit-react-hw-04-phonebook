import React from 'react';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import AddContactForm from '../AddContactForm/AddContactForm';
import ContactList from '../ContactList/ContactList';
import {
  AppTitle,
  ContactsTitle,
  SearchTitle,
  SearchInput,
} from './App.styled.jsx';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const updateContacts = (name, number) => {
    return setContacts([
      ...contacts,
      { name: name, id: nanoid(5), number: number },
    ]);
  };

  const deleteContactHandler = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        height: '100vh',
        padding: 60,
        fontSize: 40,
        color: '#010101',
      }}
    >
      <AppTitle>Phonebook 📓</AppTitle>
      <AddContactForm contactsInBook={contacts} onSubmit={updateContacts} />
      <ContactsTitle>Contacts</ContactsTitle>
      <SearchTitle>Find contacts by name</SearchTitle>
      <SearchInput type="text" value={filter} onChange={handleFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContactHandler}
      />
    </div>
  );
};

export default App;
