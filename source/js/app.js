import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import combinedReducer from './reducers/combinedReducer'
import AuthoritySearchContainer from './containers/authoritySearchContainer'

let initialState = { authorities: [] }
let store = createStore(combinedReducer, initialState);


ReactDOM.render(
    <Provider store={store}>
        <AuthoritySearchContainer />
    </Provider>,
    document.getElementById('app')
);