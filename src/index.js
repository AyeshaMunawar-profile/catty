import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App'
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import {createLogger} from "redux-logger"
import { searchCatsReducer } from './redux/reducers';
import "tachyons";

const logger = createLogger();
const store = createStore(searchCatsReducer, applyMiddleware(logger));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();