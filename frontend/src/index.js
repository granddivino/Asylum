import React from 'react'
import ReactDOM from 'react-dom'
// A reduxProvider keeps track of store, which is a global state. and that allows us to access that store from anywhere in the app, 
// dont have to be in a parent component or child component
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import './index.css'
import App from './App'


ReactDOM.render(
    <App />
)