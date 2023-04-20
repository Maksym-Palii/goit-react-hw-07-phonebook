import css from 'components/contactItem/ContactItem.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = () => {
  const contacts = useSelector(state => state.contacts);
  const contactsFilter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = contactsFilter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const renderContacts = getVisibleContacts();

  return (
    <>
      {renderContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p className={css.text}>
            {name}: {number}
          </p>
          <button
            className={css.btn}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </>
  );
};
