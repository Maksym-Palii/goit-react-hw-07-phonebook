import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import css from 'components/contactForm/ContactForm.module.css';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChangeName = evt => {
    setName(evt.target.value);
  };

  const handleChangeNumber = evt => {
    setNumber(evt.target.value);
  };

  //===== add contact to state =====

  const dispatch = useDispatch();

  const contactAdd = {
    name: name,
    phone: number,
  };

  const contactsStore = useSelector(getContacts);

  const addContactToServer = () => {
    if (contactsStore.find(obj => obj.name === contactAdd.name)) {
      toast.error(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(contactAdd));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    addContactToServer();
    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.text}>
        Name
        <input
          className={css.input}
          value={name}
          onChange={handleChangeName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.text}>
        Number
        <input
          className={css.input}
          value={number}
          onChange={handleChangeNumber}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
