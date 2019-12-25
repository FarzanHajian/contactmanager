import React, { Component } from 'react'
import Contact from './Contact'
import { Consumer } from '../context'

export default class Contacts extends Component {
    render() {
        const { searchname } = this.props.match.params;
        return (
            <Consumer>
                {value => 
                    <React.Fragment>
                        <h1 className="display-4 mb-2"><span className="text-danger">Contact</span> List</h1>
                        {value.contacts.map(contact => {
                            const { id, name, email, phone } = contact;
                            if (searchname) {
                                if (contact.name !== searchname) return null;
                            }
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
