const defaultState = {
    today: 0,
    lists: [],
    openedTasks: []
}

const GET_LISTS = 'GET_LISTS'

export const dashboardReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_LISTS:
            return {
                ...state,
                today: action.payload.today,
                lists: action.payload.list,
                openedTasks: action.payload.openedTasks,
            }
        default:
            return state
    }
}

export const getListsCustomerAction = (payload) => ({ type: GET_LISTS, payload })