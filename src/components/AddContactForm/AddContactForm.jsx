import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  Form,
  LabelName,
  InputName,
  SubmitButton,
} from './AddContactFormStyled.jsx';

const AddContactForm = ({ contactsInBook, onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid(7);
  const numberInputId = nanoid(7);

  const handleInputChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const nameToCheck = name;
    const doubledContact = contactsInBook.find(
      contact => contact.name === nameToCheck
    );

    if (doubledContact) {
      alert(nameToCheck + ' is already in contacts');
      reset();
      return;
    }

    onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <LabelName htmlFor={nameInputId}> Name </LabelName>
      <InputName
        id={nameInputId}
        type="text"
        name="name"
        placeholder="Natalie Tkachenko"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleInputChange}
      ></InputName>
      <LabelName htmlFor={numberInputId}> Phone Number</LabelName>
      <InputName
        id={numberInputId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleInputChange}
      />
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};

export default AddContactForm;

AddContactForm.propTypes = {
  contactsInBook:PropTypes.array,
  onSubmit: PropTypes.func,
}
