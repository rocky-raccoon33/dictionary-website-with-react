import { ADD_MESSAGE, GET_MSGS } from './types'


export const addMsg = async (dispatch, payload) => {
    try {
        const response = await fetch("http://localhost:8080/messages", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })

        dispatch({ type: ADD_MESSAGE, payload });

    } catch (error) {
        console.log(error.message);
    }
}



