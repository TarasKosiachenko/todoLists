import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { tasks } from "./tasks"
import { todayTasks } from "./todayTasks"
import { dashboardReducer } from "./dashboardReducer"

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tasks,
    todayTasks
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))