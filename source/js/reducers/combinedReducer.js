import { combineReducers } from 'redux'

import { authorities } from './authoritiesReducer.js'


const combinedReducer = combineReducers({
    authorities
})

export default combinedReducer