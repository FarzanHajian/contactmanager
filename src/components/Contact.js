import React, { Component } from 'react'
import propTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTimes, faCamera, faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Contact extends Component {
    state = {
        showDetails: true
    }
    static defaultProps = {
        name: 'Unkown User'
    }

    static propTypes = {
        name: propTypes.string.isRequired,
        email: propTypes.string,
        phone: propTypes.string
    }

    onShowDetails = () => this.setState({ showDetails: !this.state.showDetails });

    onDeleteClick = async (contactId, dispatch) => {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${contactId}`);
        dispatch({ type: 'DELETE_CONTACT', payload: contactId });
    }

    render() {
        const { id, name, email, phone } = this.props;
        const { showDetails } = this.state

        return (
            <div className="card card-body mb-3" style={{ backgroundColor: 'lightblue', border: 'solid gray' }}>
                <h4>
                    {name}
                    <FontAwesomeIcon icon={showDetails ? faCoffee : faCamera} onClick={this.onShowDetails} style={{ cursor: 'pointer' }} className="ml-2" />
                    <FontAwesomeIcon icon={faTimes} /*onClick={this.onDeleteClick.bind(this, id, value.dispatch)}*/
                        style={{ cursor: 'pointer', float: 'right', color: 'red' }} />
                    <Link to={`contact/edit/${id}`}>
                        <FontAwesomeIcon icon={faPencilAlt} style={{ cursor: 'pointer', float: 'right', color: 'black', marginRight: '1rem' }} />
                    </Link>
                </h4>
                {
                    showDetails ?
                        (<ul className="list-group">
                            <li className="list-group-item">Email: {email}</li>
                            <li className="list-group-item">Phone: {phone}</li>
                        </ul>
                        ) : null
                }

            </div>
        )
    }
}

export default Contact