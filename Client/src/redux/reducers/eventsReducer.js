import { ADD_EVENT, DELETE_EVENT, GET_EVENTS } from '../actions/types'

const initialState = []

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT:
            return [action.payload, ...state];

        case DELETE_EVENT:
            return [...state].filter(event => event.id !== action.payload);

        case GET_EVENTS:
            return [...action.payload]

        default:
            return state;
    }
}


export default eventsReducer;