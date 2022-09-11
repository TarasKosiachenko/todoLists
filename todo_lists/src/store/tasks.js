const GET_TASKS = "GET_TASKS";
const ADD_TASK = "ADD_TASK";
const UPDATE_TASK = "UPDATE_TASK";
const DELETE_TASK = "DELETE_TASK";

export const tasks = (state = [], action) => {
  switch (action.type) {
    case GET_TASKS:
      return action.payload;
    case ADD_TASK:
      if (action.payload.shouldAddValue) {
        return [...state, action.payload];
      } else {
        return state;
      }
    case UPDATE_TASK:
      return state.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

export const getTasksCustomerAction = (payload) => ({
  type: GET_TASKS,
  payload,
});

export const addTasksCustomerAction = (payload) => ({
  type: ADD_TASK,
  payload,
});

export const updateTasksCustomerAction = (payload) => ({
  type: UPDATE_TASK,
  payload,
});

export const deleteTasksCustomerAction = (payload) => ({
  type: DELETE_TASK,
  payload,
});
