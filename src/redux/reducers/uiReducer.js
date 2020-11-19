import { CLEAR_ERRORS, LOADING_UI, SET_ERRORS } from "../types";

const initialstate = {
  loading: false,
  errors: null,
};

const uiReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    case LOADING_UI:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default uiReducer;
