import { createStore , combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Hostels  } from './hostels';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            hostels:Hostels,
            ...createForms({
                feedback:InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
    
};