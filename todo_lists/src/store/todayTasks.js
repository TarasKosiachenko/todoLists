const GET_TODAY_TASKS = 'GET_TODAY_TASKS'
const ADD_TASK = 'ADD_TASK'
const UPDATE_TASK = 'UPDATE_TASK'
const DELETE_TASK = 'DELETE_TASK'

export const todayTasks = (state = [], action) => {
    switch (action.type) {
        case GET_TODAY_TASKS:
            return action.payload
        case ADD_TASK:
            return [...state, action.payload]
        case UPDATE_TASK:
            return state.map(task => task.id === action.payload.id ? action.payload : task)
        case DELETE_TASK:
            return state.filter(task => task.id !== action.payload)
        default:
            return state
    }
}

export const getTodayTasksCustomerAction = (payload) => ({ type: GET_TODAY_TASKS, payload })