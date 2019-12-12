import React, { Component } from 'react'
import propTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTimes, faCamera } from '@fortawesome/free-solid-svg-icons'

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
        phone: propTypes.string,
        deleteClickHandler: propTypes.func.isRequired
    }

    onShowDetails = () => this.setState({ showDetails: !this.state.showDetails });

    onDeleteClick=()=>{
        this.props.deleteClickHandler()
    }

    render() {
        const { name, email, phone } = this.props;
        const { showDetails } = this.state

        return (
            <div className="card card-body mb-3" style={{ backgroundColor: 'lightblue', border: 'solid gray' }}>
                <h4>
                    {name}
                    <FontAwesomeIcon icon={showDetails ? faCoffee : faCamera} onClick={this.onShowDetails} style={{ cursor: 'pointer' }} className="ml-2" />
                    <FontAwesomeIcon icon={faTimes} onClick={this.onDeleteClick} style={{ cursor: 'pointer', float: 'right', color: 'red' }} />
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