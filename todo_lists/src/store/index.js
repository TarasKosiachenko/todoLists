import {applyMiddleware, combineReducers, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {tasksReduser} from "./tasksReduser"
import {listsReduser} from "./dashboardReducer"

const rootReducer = combineReducers({
    listsReduser,
    tasksReduser
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))