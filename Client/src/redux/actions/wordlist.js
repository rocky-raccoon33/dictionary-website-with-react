import { ADD_WORD, FETCH_WORDLIST, DELETE_WORD, UPDATE_WORD } from './types'

const addWord = async (dispatch, payload) => {
    try {
        const response = await fetch("http://54.151.249.232:8080/words", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        dispatch({ type: ADD_WORD, payload })

    } catch (error) {
        console.error(error.message);
    }
}

const fetchWords = (words) => {
    return {
        type: FETCH_WORDLIST,
        words
    }
}

const deleteWord = (id) => {
    return {
        type: DELETE_WORD,
        id
    }
}

const updateWord = (word) => {
    return {
        type: UPDATE_WORD,
        word
    }
}

export { deleteWord, fetchWords, addWord, updateWord }