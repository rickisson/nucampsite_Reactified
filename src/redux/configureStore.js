// SPLITING THE REDUCER
//The Redux createStore() function requires that all your reducers be combined into one single root reducer 
//to be used as an argument to createStore(). You will use the combineReducers() function for this. 
//Open configureStore.js and update it as follows: Now you can delete the reducer.js file

import {createStore, combineReducers,  applyMiddleware} from 'redux';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            campsites: Campsites,
            comments: Comments,
            partners: Partners,
            promotions: Promotions
        }),
        // for redux thunk and logger
        applyMiddleware(thunk, logger)
    );

    return store;
};