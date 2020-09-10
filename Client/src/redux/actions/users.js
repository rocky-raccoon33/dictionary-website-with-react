import { CREATE_USER, GET_USERS, UPDATE_USER } from './types'
import { updateAuth } from './auth'


export const addUser = (dispatch, payload) => {
    dispatch({ type: CREATE_USER, payload })
}

export const getUsers = (dispatch, payload) => {
    dispatch({ type: GET_USERS, payload })
}

export const updateUser = async (dispatch, payload) => {
    try {
        const response = await fetch("http://localhost:8080/users", {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
        dispatch({ type: UPDATE_USER, payload })
        updateAuth(dispatch, payload);
    } catch (error) {
        console.error(error.message);
    }

}