import React, { Component } from 'react'
import Contact from './Contact'

export default class Contacts extends Component {
    state = {
        contacts: [
            { id: 1, name: 'Gholi Akbari', email: 'gh.akbari@gmail.com', phone: '333-444-5555' },
            { id: 2, name: 'Mamoot Sarvari', email: 'm.sarvari@gmail.com', phone: '333-454-5555' },
            { id: 3, name: 'Hooshi Vala', email: 'hooshivala@yahoo.com', phone: '333-123-5555' }
        ]
    }

    deleteContact = (contactId) => {
        const { contacts } = this.state;
        const newContacts = contacts.filter(c => c.id !== contactId);
        this.setState({ contacts: newContacts });
    }

    render() {
        return (
            <React.Fragment>
                {this.state.contacts.map(contact => {
                    const { id, name, email, phone } = contact;
                    return (<Contact key={id} name={name} email={email} phone={phone} deleteClickHandler={this.deleteContact.bind(this, contact.id)} />)
                })}
            </React.Fragment>
        )
    }
}
