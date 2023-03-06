import { ContactListItem } from '../ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';
export const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <List>
      <ContactListItem
        filteredContacts={filteredContacts}
        onDeleteContact={onDeleteContact}
      />
    </List>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
