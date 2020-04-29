import { UserActionTypes } from "./user.types";

// actions represent an object has 2 properties
//    1. a type(specific identifier)
//    2. a payload(optional)
// payload can be used to make transformations, set the state ,etc
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
