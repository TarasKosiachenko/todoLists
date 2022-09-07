const defaultState = {
    tasks: [],
}

const GET_TASKS = 'GET_TASKS'
const ADD_TASK = 'ADD_TASK'
const UPDATE_TASK = 'UPDATE_TASK'
const DELETE_TASK = 'DELETE_TASK'

export const tasksReduser = (state = defaultState, action) => {
    switch (action.type) {
        case GET_TASKS:
            return { ...state, tasks: [...action.payload] }
        case ADD_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] }
        case UPDATE_TASK:
            return { ...state, tasks: [...state.tasks, action.payload] }
        case DELETE_TASK:
            return { ...state, tasks: state.tasks - action.payload }
        default:
            return state
    }
}

export const getTasksCustomerAction = (payload) => ({ type: GET_TASKS, payload })

export const addTasksCustomerAction = (payload) => ({ type: ADD_TASK, payload })