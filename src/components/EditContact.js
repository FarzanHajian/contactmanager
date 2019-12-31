import React, { Component } from 'react'
import { Consumer } from '../context'
import TextInputGroup from './TextInputGroup'
import axios from 'axios'

class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    async componentDidMount(){
        const {id} = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        
        const contact = res.data;
        this.setState({
            name:contact.name,
            email:contact.email,
            phone:contact.phone
        });
    }

    onSubmit = async (dispatch, e) => {
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

        const {id} = this.props.match.params;
        const updContact = {
            name,
            email,
            phone
        }

        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updContact);
        dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

        this.setState({ name: '', email: '', phone: '', errors: {} })

        this.props.history.push('/');
    }

    onChanged = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        const { name, email, phone, errors } = this.state;

        return (
            <Consumer>
                {value =>
                    <div className="card mb-3" style={{ backgroundColor: 'lavender', border: 'solid gray' }}>
                        <div className="card-header">Edit Contact</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                                <TextInputGroup label="Name" name="name" value={name} placeholder="Enter name ..." onChange={this.onChanged} error={errors.name} />
                                <TextInputGroup label="Email" name="email" value={email} placeholder="Enter email ..." type="email" onChange={this.onChanged} error={errors.email} />
                                <TextInputGroup label="Phone" name="phone" value={phone} placeholder="Enter phone ..." onChange={this.onChanged} error={errors.phone} />
                                <input type="submit" value="Update Context" className="btn btn-block btn-light" />
                            </form>
                        </div>
                    </div>

                }
            </Consumer>
        );


    }
}

export default EditContact