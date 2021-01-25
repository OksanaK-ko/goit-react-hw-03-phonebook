import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
    <ul className={s.ContactList}>
            {contacts.map(({id,name,number}) =>
                (<li className={s.ContactList_item} key={id}>
                {name}: {number}
                <button className={s.button} onClick={() => onDeleteContact(id)}>Delete</button>
                </li>))}
            </ul >
    
        )



ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;

