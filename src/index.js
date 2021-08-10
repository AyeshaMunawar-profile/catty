import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App'
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import "tachyons";
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import {searchCatsReducer, requestCatsReducer} from './redux/reducers';

const logger = createLogger();
const rootReducer = combineReducers({searchCatsReducer, requestCatsReducer});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();