import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

// here state = INITIAL_STATE assign a default value if nothing is passed to userReducer
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
