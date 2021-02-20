import React from 'react'
import ReactDOM from 'react-dom'

//ALL below for redux
// A reduxProvider keeps track of store, which is a global state. and that allows us to access that store from anywhere in the app, 
// dont have to be in a parent component or child component
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { reducers } from './reducers'

import './index.css'
import App from './App'

//Store declaration for Redux
const store = createStore(reducers, compose(applyMiddleware(thunk)))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
)