import React from 'react'
import { createStore, combineReducers } from 'redux'
import testReducer from './reducers'

const store = createStore(testReducer)

export default store
