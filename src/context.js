import React, { Component } from 'react'

const Context = React.createContext()

const reducer = (state, action) => {
    switch (action.type) {
        case "DELETE_CONTACT":
            return {
                ...state,
                contacts: state.contacts.filter(c => c.id !== action.payload)
            };
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts: [
            { id: 1, name: 'Gholi Akbari', email: 'gh.akbari@gmail.com', phone: '333-444-5555' },
            { id: 2, name: 'Mamoot Sarvari', email: 'm.sarvari@gmail.com', phone: '333-454-5555' },
            { id: 3, name: 'Hooshi Vala', email: 'hooshivala@yahoo.com', phone: '333-123-5555' }
        ],
        dispatch: action => this.setState(state => reducer(state, action))
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer
