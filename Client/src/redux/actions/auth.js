import {
    LOGIN_FAIL, LOGIN_SUCCESS, UPDATE_AUTH
} from './types';

//Check token  && load user


export const loadSuccess = (dispatch, user) => {
    dispatch({ type: LOGIN_SUCCESS, payload: user });
}

export const loadFail = (dispatch) => {
    dispatch({ type: LOGIN_FAIL });
}

export const updateAuth = (dispatch, payload) => {
    dispatch({ type: UPDATE_AUTH, payload });
}
