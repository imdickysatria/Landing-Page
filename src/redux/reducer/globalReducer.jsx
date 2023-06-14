import ActionType from "./globalActionTyoe";

const globalState = {
  totalOrder: 0,
};

// Reducer
const rootReducer = (state = globalState, action) => {
  if (action.type === ActionType.HANDLE_PLUS) {
    return {
      ...state,
      totalOrder: state.totalOrder + 1,
    };
  }
  if (action.type === ActionType.HANDLE_MINUS) {
    let totalOrder = 0;
    if (state.totalOrder > 0) {
      totalOrder = state.totalOrder - 1;
    }
    return {
      ...state,
      totalOrder: totalOrder,
    };
  }
  return state;
};

export default rootReducer;
