import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, DeleteBtn } from './ContactList.styled.jsx';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name}: {contact.number}
          <DeleteBtn type="button" onClick={() => onDeleteContact(contact.id)}>
            Delete
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
