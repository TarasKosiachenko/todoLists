const defaultState = {
    lists: [],
}

const GET_LISTS = 'GET_LISTS'

export const listsReduser = (state = defaultState, action) => {
    switch (action.type) {
        case GET_LISTS:
            return { ...state, lists: [...action.payload] }
        default:
            return state
    }
}

export const getListsCustomerAction = (payload) => ({type: GET_LISTS, payload})