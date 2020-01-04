import {GET_CONTACTS} from '../actions/types'

const initialState = {
    contacts:
    [
        {
            id:1,
            name:"Hooshi Vala",
            email:"hooshi@vala.com",
            phone:"123432433"
        }
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS:
            return {
                ...state
            }
        default:
            return state;
    }
}