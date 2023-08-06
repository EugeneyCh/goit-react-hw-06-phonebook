import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/users/selectors';
import { deleteContact } from 'redux/users/actions';
import css from './Contact.module.css';
// import { useRef } from 'react';

function Contact() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  //   console.log(contacts);
  const dispatch = useDispatch();
  // const contactIdRef = useRef();

  // const saveContactHandler = () => {
  //   const contactName = contactNameRef.current.value;
  //   const contactNumber = contactNumberRef.current.value;
  //   dispatch(
  //     addContact({ id: nanoid(), name: contactName, number: contactNumber })
  //   );
  // };

  const handleDeleteContact = id => {
    console.log('Delete contact');
    // const contactId = contactIdRef;
    console.log('contact Id must be here', id);
    dispatch(deleteContact(id));
  };
  console.log('Ready to render contacts', contacts);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContact = getVisibleContacts();
  return visibleContact.map(({ id, name, number }) => (
    <li key={id} className={css.contactRow}>
      {name}:{number}
      <button type="button" onClick={() => handleDeleteContact(id)}>
        Delete
      </button>
    </li>
  ));
}

export default Contact;

// onClick={() => onDeleteContact(id)}
