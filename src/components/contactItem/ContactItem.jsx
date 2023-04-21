import css from 'components/contactItem/ContactItem.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  getContacts,
  getError,
  getFilterContacts,
  getIsLoading,
} from 'redux/selectors';
import { RotatingLines } from 'react-loader-spinner';

export const ContactItem = () => {
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilterContacts);

  const getVisibleContacts = () => {
    const normalizedFilter = contactsFilter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const renderContacts = getVisibleContacts();

  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  return (
    <>
      {renderContacts.map(({ id, name, phone }) => (
        <li className={css.item} key={id}>
          <p className={(css.text, css.name)}>{name}:</p>
          <p className={css.text}>{phone}</p>
          <button
            className={css.btn}
            type="button"
            disabled={isLoading}
            onClick={() => dispatch(deleteContact(id))}
          >
            {isLoading && !error && <RotatingLines width="12" />}Delete
          </button>
        </li>
      ))}
    </>
  );
};
