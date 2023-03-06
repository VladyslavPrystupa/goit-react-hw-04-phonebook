import PropTypes from 'prop-types';
import { Contact, Button, ContactName } from './ContactListItem.styled';
import { AiOutlineUser } from 'react-icons/ai';
export const ContactListItem = ({ filteredContacts, onDeleteContact }) => {
  return filteredContacts.map(contact => {
    return (
      <Contact key={contact.id}>
        <AiOutlineUser size={20} />
        <ContactName>
          {contact.name}: {contact.number}
        </ContactName>
        <Button type="button" onClick={() => onDeleteContact(contact.id)}>
          Delete
        </Button>
      </Contact>
    );
  });
};

ContactListItem.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
