import { ADD_WORD, DELETE_WORD, FETCH_WORDLIST, UPDATE_WORD } from '../actions/types';


const wordReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_WORDLIST:
            return action.words;

        case DELETE_WORD:
            return [...state].filter(word => word.id !== action.id);


        case ADD_WORD:
            return [...state, action.payload];
        case UPDATE_WORD:
            const res = [...state];
            for (let i = 0; i < res.length; i++) {
                if (res[i].id === action.word.id) {
                    res[i] = action.word;
                    break;
                }
            }
            return res;
        default:
            return state;

    }
}

export default wordReducer;