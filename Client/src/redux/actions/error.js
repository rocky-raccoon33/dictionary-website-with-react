import { GET_ERRORS, CLEAR_ERRORS } from './types'

export const returnErrors = (msg, status, id = null) => {
    return {
        tyep: GET_ERRORS,
        payload: { msg, status, id }
    }
}

export const clearErrors = () => {
    return {
        tyep: CLEAR_ERRORS
    }
}