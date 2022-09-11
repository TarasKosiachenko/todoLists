const defaultState = {
  today: 0,
  lists: [],
  openedTasks: [],
};

const GET_LISTS = "GET_LISTS";

const INCREMENT_COUNTER = "INCREMENT_COUNTER";
const DECREMENT_COUNTER = "DECREMENT_COUNTER";

export const dashboard = (state = defaultState, action) => {
  switch (action.type) {
    case GET_LISTS:
      return {
        ...state,
        today: action.payload.today,
        lists: action.payload.list,
        openedTasks: action.payload.openedTasks,
      };
    case INCREMENT_COUNTER:
      return {
        ...state,
        lists: state.lists.map((el) => {
          return el.id === +action.payload
            ? { ...el, undone: el.undone + 1 }
            : el;
        }),
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        lists: state.lists.map((el) => {
          return el.id === +action.payload
            ? { ...el, undone: el.undone - 1 }
            : el;
        }),
      };
    default:
      return state;
  }
};

export const getListsCustomerAction = (payload) => ({
  type: GET_LISTS,
  payload,
});

export const incrementCounterAction = (payload) => ({
  type: INCREMENT_COUNTER,
  payload,
});

export const decrementCounterAction = (payload) => ({
  type: DECREMENT_COUNTER,
  payload,
});
