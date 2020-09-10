import { DELETE_EVENT, GET_EVENTS, ADD_EVENT } from './types';

export const addEvent = async (dispatch, payload) => {
    try {
        const response = await fetch("http://18.140.113.11:8080/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        })
        dispatch({ type: ADD_EVENT, payload })
    } catch (error) {
        console.error(error.message);
    }
}

export const deleteEvent = async (dispatch, payload) => {
    try {
        const response = await fetch(`http://18.140.113.11:8080/events/${payload}`,
            { method: "DELETE" }
        )
        dispatch({ type: DELETE_EVENT, payload });

    } catch (error) {
        console.error(error.message);
    }
}

export const fetchEvents = async (dispatch) => {
    try {
        const response = await fetch("http://18.140.113.11:8080/events");
        const payload = await response.json();
        dispatch({ type: GET_EVENTS, payload })
    } catch (error) {
        dispatch({ type: GET_EVENTS, payload: [] });
        console.log(error.message);
    }
}

