import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { arrowFunctionExpression } from '@babel/types';

const initialFeedbackObjectState = {
    feeling: 0,
    understanding: 0,
    supported: 0,
    comments: ''
}

const feedbackReducer = (state = initialFeedbackObjectState, action) => {

    if (action.type === 'SET_FEELING') {
        return {
            ...state,
            feeling: action.payload
        }
    }

    if (action.type === 'SET_UNDERSTANDING') {
        return {
            ...state,
            understanding: action.payload
        }
    }

    if (action.type === 'SET_SUPPORTED') {
        return {
            ...state,
            supported: action.payload
        }
    }

    if (action.type === 'SET_COMMENTS') {
        return {
            ...state,
            comments: action.payload
        }
    }

    return state;
}

const allFeedbackReducer = (state = [], action) => {
    if(action.type === "SET_ALL_FEEDBACK") {
        return [
            ...action.payload
        ]
    }

    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
        allFeedbackReducer
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
