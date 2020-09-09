
import { LOGIN_FAIL, LOGIN_SUCCESS, AUTH_ERROR, REGISTER_FAIL, REGISTER_SUCCESS, UPDATE_AUTH, LOGOUT } from '../actions/types'

const initialState = {
    isAuthenticated: null,
    user: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                user: action.payload,
                isAuthenticated: true,
            };
        case UPDATE_AUTH:
            return {
                user: action.payload,
                isAuthenticated: true
            }
        case LOGOUT:
        case LOGIN_FAIL:
        case REGISTER_FAIL:
        case AUTH_ERROR:
            return {
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;;

    }

}

export default authReducer;