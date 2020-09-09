
import allReducers from './reducers/allReducers'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';




function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch (error) {
        console.log(error.message);
    }
}

function loadFromLocalStorage() {

    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (error) {
        console.log(error.message);
        return undefined;
    }
}

const persistedState = loadFromLocalStorage();


const middleware = [thunk];

const store = createStore(allReducers, persistedState, compose(
    applyMiddleware(...middleware)))

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;