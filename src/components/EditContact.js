import React, { Component } from 'react'
import TextInputGroup from './TextInputGroup'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getContact, updateContact } from '../redux_stuffs/actions/contactActions'

class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getContact(id);
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextState) {
        const { name, email, phone } = nextProps.contact;
        this.setState({ name, email, phone }); 
    }

    onSubmit = async (e) => {
        e.preventDefault();

        const { name, email, phone } = this.state;

        if (name === '') {
            this.setState({ errors: { name: 'Name is required' } })
            return;
        }
        if (email === '') {
            this.setState({ errors: { email: 'Email is required' } })
            return;
        }
        if (phone === '') {
            this.setState({ errors: { phone: 'Phone is required' } })
            return;
        }

        const { id } = this.props.match.params;
        const updContact = {
            id,
            name,
            email,
            phone
        }
        this.props.updateContact(updContact);

        this.setState({ name: '', email: '', phone: '', errors: {} })
        this.props.history.push('/');
    }

    onChanged = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        const { name, email, phone, errors } = this.state;

        return (
            <div className="card mb-3" style={{ backgroundColor: 'lavender', border: 'solid gray' }}>
                <div className="card-header">Edit Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <TextInputGroup label="Name" name="name" value={name} placeholder="Enter name ..." onChange={this.onChanged} error={errors.name} />
                        <TextInputGroup label="Email" name="email" value={email} placeholder="Enter email ..." type="email" onChange={this.onChanged} error={errors.email} />
                        <TextInputGroup label="Phone" name="phone" value={phone} placeholder="Enter phone ..." onChange={this.onChanged} error={errors.phone} />
                        <input type="submit" value="Update Context" className="btn btn-block btn-light" />
                    </form>
                </div>
            </div>
        );
    }
}

EditContact.propTypes = {
    contact: PropTypes.object.isRequired,
    getContact: PropTypes.func.isRequired,
    updateContact: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    contact: state.contact.contact
})

export default connect(mapStateToProps, { getContact, updateContact })(EditContact);