import { createSelector } from "reselect";

const selectUser = (state) => state.user;

// A selector takes a state as input and returns a small portion or another state
// pulled out or a component as a result of some operation
// reselect provides creteSelector function used for memoization
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
