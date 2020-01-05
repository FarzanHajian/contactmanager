import React, { Component } from 'react'
import Contact from './Contact'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getContacts } from '../redux_stuffs/actions/contactActions'


class Contacts extends Component {
    componentDidMount() {
        this.props.getContacts();
    }

    render() {
        const { searchname } = this.props.match.params;
        const { contacts } = this.props;
        return (
            <React.Fragment>
                <h1 className="display-4 mb-2"><span className="text-danger">Contact</span> List</h1>
                {contacts.map(contact => {
                    const { id, name, email, phone } = contact;
                    if (searchname) {
                        if (contact.name !== searchname) return null;
                    }
                    return (
                        <Contact key={id} id={id} name={name} email={email} phone={phone} />
                    )
                })}
            </React.Fragment>
        )
    }
}

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired
};

const mapStateTopProps = (state) => ({
    contacts: state.contact.contacts
});

export default connect(mapStateTopProps, { getContacts })(Contacts);