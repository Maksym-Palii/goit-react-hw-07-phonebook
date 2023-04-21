import React, { useEffect } from 'react';

import { ContactForm } from 'components/contactForm/ContactForm';
import { Filter } from 'components/filter/Filter';
import { ContactList } from 'components/contactList/ContactList';
import { ContactItem } from 'components/contactItem/ContactItem';
import css from 'components/App.module.css';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm />

      <h2 className={css.title}>Contacts</h2>
      <div className={css.smalContainer}>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList>
          <ContactItem />
        </ContactList>
        <Toaster />
      </div>
    </div>
  );
};
