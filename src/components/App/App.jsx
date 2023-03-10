import { useEffect, useState } from 'react';
import { GlobalStyles } from '../App/GlobalStyles';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';
import { Container, Header, SubHeader } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const filteredName = filter.toLocaleLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase().includes(filteredName)
  );

  useEffect(() => {
    const parseContacts = JSON.parse(localStorage.getItem('contacts'));

    if (parseContacts === null) {
      setContacts([]);
    } else if (parseContacts.length !== 0) {
      setContacts(parseContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const contactsUpd = newContact => {
    setContacts(prevContactns => {
      return [newContact, ...prevContactns];
    });
  };

  return (
    <Container>
      <GlobalStyles />
      <Header>Phonebook</Header>
      <ContactForm contacts={contacts} contactsUpd={contactsUpd} />
      {contacts.length !== 0 ? (
        <>
          <SubHeader>Contacts</SubHeader>
          <Filter onHandleChange={e => setFilter(e.target.value)} />
          <ContactList
            filteredContacts={filteredContacts}
            onDeleteContact={id =>
              setContacts(contacts.filter(contact => contact.id !== id))
            }
          />
        </>
      ) : (
        <SubHeader>You have not any contacts</SubHeader>
      )}
    </Container>
  );
};

// class oldApp extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

// componentDidMount() {
// const parseContacts = JSON.parse(localStorage.getItem('contacts'));
// if (parseContacts) {
//   this.setState({
//     contacts: parseContacts,
//   });
// }
// }

//   componentDidUpdate(_, prevState) {
// if (prevState.contacts.length !== this.state.contacts.length) {
//   localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
// }
//   }

//   // handleChange = evt => {
//   //   const { name, value } = evt.target;
//   //   this.setState({ [name]: value });
//   // };

// contactsUpd = newContact => {
//   this.setState(({ contacts }) => {
//     return { contacts: [newContact, ...contacts] };
//   });
// };

//   // onContactDelete = id => {
//   //   this.setState(({ contacts }) => ({
//   //     contacts: contacts.filter(contact => contact.id !== id),
//   //   }));
//   // };

//   render() {
//     const { filter, contacts } = this.state;

//     const filteredName = filter.toLocaleLowerCase();
//     const filteredContacts = contacts.filter(contact =>
//       contact.name.toLocaleLowerCase().includes(filteredName)
//     );

//     return (
//       <Container>
//         <GlobalStyles />
//         <Header>Phonebook</Header>
//         <ContactForm contacts={contacts} contactsUpd={this.contactsUpd} />
//         {contacts.length !== 0 ? (
//           <>
//             <SubHeader>Contacts</SubHeader>
//             <Filter filter={filter} onHandleChange={this.handleChange} />
//             <ContactList
//               filteredContacts={filteredContacts}
//               onDeleteContact={this.onContactDelete}
//             />
//           </>
//         ) : (
//           <SubHeader>You have not any contacts</SubHeader>
//         )}
//       </Container>
//     );
//   }
// }
