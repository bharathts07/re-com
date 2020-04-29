import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
// allows the browser to cache the store based on some configuration
import { persistStore } from "redux-persist";

import rootReducer from "./root.reducer";

// add additional middleware as subsequent elements of the array
const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default { store, persistStore };
