import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import AddContactForm from '../AddContactForm/AddContactForm';
import ContactList from '../ContactList/ContactList';
import {
  AppTitle,
  ContactsTitle,
  SearchTitle,
  SearchInput,
} from './App.styled.jsx';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const dataInStorage = localStorage.getItem('contacts');

    const parsedDataFromStorage = JSON.parse(dataInStorage);

    if (parsedDataFromStorage) {
      this.setState({ contacts: parsedDataFromStorage });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  updateContacts = ({ name, number }) => {
    return this.setState({
      contacts: [
        ...this.state.contacts,
        { name: name, id: nanoid(5), number: number },
      ],
    });
  };

  deleteContactHandler = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
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
        <AddContactForm
          contactsInBook={this.state.contacts}
          onSubmit={this.updateContacts}
        />
        <ContactsTitle>Contacts</ContactsTitle>
        <SearchTitle>Find contacts by name</SearchTitle>
        <SearchInput
          type="text"
          value={this.state.filter}
          onChange={this.handleFilter}
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContactHandler}
        />
      </div>
    );
  }
}

export default App;
