import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT, GET_CONTACT, UPDATE_CONTACT } from '../actions/types'

const initialState = {
    contacts: [],
    contact: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            }
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(c => c.id !== action.payload)
            }
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        case GET_CONTACT:
            return {
                ...state,
                contact: action.payload
            }
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(c => c.id === action.payload.id ? (c = action.payload) : c)
            }
        default:
            return state;
    }
}