import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app'


// NOTE Prepare redux
// import create Store for react redux
import { createStore, applyMiddleware } from "redux"
// import provider
import { Provider } from "react-redux"
// import combined reducers
import allReducers from "./reducers"
import ReduxThunk from 'redux-thunk'



let globalState = createStore(allReducers, applyMiddleware(ReduxThunk))
globalState.subscribe(() => console.log("Global State : ", globalState.getState()))



ReactDOM.render(
    <Provider store={globalState}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);