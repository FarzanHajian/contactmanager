import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../context'

export default class Contacts extends Component {
    render() {
        return (
            <Consumer>
                {value => <React.Fragment>
                    {value.contacts.map(contact => {
                        const { id, name, email, phone } = contact;
                        return (
                            <Contact key={id} id={id} name={name} email={email} phone={phone} />
                        )
                    })}
                </React.Fragment>
                }
            </Consumer>
        )
    }
}
