const defaultState = {
    todayTasks: [],
}

const GET_TODAY_TASKS = 'GET_TODAY_TASKS'
const ADD_TASK = 'ADD_TASK'
const UPDATE_TASK = 'UPDATE_TASK'
const DELETE_TASK = 'DELETE_TASK'

export const todayTasksReduser = (state = defaultState, action) => {
    switch (action.type) {
        case GET_TODAY_TASKS:
            return { ...state, todayTasks: [...action.payload] }
        case ADD_TASK:
            return { ...state, todayTasks: [...state.todayTasks, action.payload] }
        case UPDATE_TASK:
            return { ...state, todayTasks: state.todayTasks.filter(task => task.id !== action.payload.id) }
        case DELETE_TASK:
            return { ...state, todayTasks: state.todayTasks.filter(task => task.id !== action.payload) }
        default:
            return state
    }
}

export const getTodayTasksCustomerAction = (payload) => ({ type: GET_TODAY_TASKS, payload })