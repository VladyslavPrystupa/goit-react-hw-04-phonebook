import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form, Label, Input, Button } from './ContactForm.styled';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  onContactAdd = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    const { contacts, contactsUpd } = this.props;

    const contact = {
      name,
      number,
      id: nanoid(10),
    };

    const namesOfContacts = contacts.map(({ name }) => name);
    if (namesOfContacts.includes(name)) {
      this.reset();
      return Notiflix.Notify.failure('you already have this contact name');
    }

    this.reset();

    contactsUpd(contact);
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.onContactAdd}>
        <Label>
          Name
          <Input
            onChange={this.handleChange}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            onChange={this.handleChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  contactsUpd: PropTypes.func.isRequired,
};
