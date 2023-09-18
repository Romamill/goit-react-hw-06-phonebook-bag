import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import './style-app.css';

function App() {
  const filteredContacts = useSelector(state => {
    const { contacts, filter } = state.contact;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div className="app-container">
      <div className="content-container">
        <h1>Phonebook</h1>
        <ContactForm />
        <ContactList contacts={filteredContacts} />
        <Filter />
      </div>
    </div>
  );
}

export default App;
