import wordReducer from './wordReducer';
import authReducer from './authReducer'
import usersReducer from './usersReducer'
import errorReducer from './authReducer'
import msgsReducer from './msgsReducer'
import eventsReducer from './eventsReducer'

import { combineReducers } from 'redux';
const allReducers =
    combineReducers({
        events: eventsReducer,
        msgs: msgsReducer,
        users: usersReducer,
        wordlist: wordReducer,
        auth: authReducer,
        error: errorReducer
    });

export default allReducers;