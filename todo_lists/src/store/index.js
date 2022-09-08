import {applyMiddleware, combineReducers, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {tasksReduser} from "./tasksReduser"
import {todayTasksReduser} from "./todayTasksReduser"
import {dashboardReducer} from "./dashboardReducer"

const rootReducer = combineReducers({
    dashboardReducer,
    tasksReduser,
    todayTasksReduser
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))