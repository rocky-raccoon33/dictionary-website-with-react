import { ADD_MESSAGE, GET_MSGS } from '../actions/types'

const initialState = []

const msgsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return [...state, action.payload]
        case GET_MSGS:
            return [...action.payload]
        default:
            return state;
    }
}

export default msgsReducer;
