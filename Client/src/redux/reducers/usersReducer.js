
import { CREATE_USER, GET_USERS, UPDATE_USER } from '../actions/types'


const initialState = [];

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return [...state, action.payload];
        case GET_USERS:
            return [...action.payload];
        case UPDATE_USER:
            return state.map(x => {
                if (x.name === action.payload.name)
                    x = Object.assign({}, action.payload);
                return x;
            });
        default:
            return state;

    }

}

export default usersReducer;