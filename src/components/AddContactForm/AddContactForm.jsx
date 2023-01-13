import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  Form,
  LabelName,
  InputName,
  SubmitButton,
} from './AddContactFormStyled.jsx';

class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = nanoid(7);
  numberInputId = nanoid(7);

  handleInputChange = e => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    console.log(this.state.name);
    console.log(e.currentTarget.value);
  };

  handleSubmit = e => {
    e.preventDefault();
    const nameToCheck = this.state.name;
    const doubledContact = this.props.contactsInBook.find(
      contact => contact.name === nameToCheck
    );

    if (doubledContact) {
      alert(nameToCheck + ' is already in contacts');
      this.reset();
      return;
    }

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <LabelName htmlFor={this.nameInputId}> Name </LabelName>
        <InputName
          id={this.nameInputId}
          type="text"
          name="name"
          placeholder="Natalie Tkachenko"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handleInputChange}
        ></InputName>
        <LabelName htmlFor={this.numberInputId}> Phone Number</LabelName>
        <InputName
          id={this.numberInputId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handleInputChange}
        />
        <SubmitButton type="submit">Add contact</SubmitButton>
      </Form>
    );
  }
}

export default AddContactForm;
