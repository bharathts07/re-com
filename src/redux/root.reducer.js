import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// use local storage for persisting as default (Alternatively can use session storage)
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

// specify the config
const persistConfig = {
  key: "root",
  storage,
  // contains the string name of any  of the reducers that you want to store
  // only thing that we want to store is the cart items
  whitelist: ["cart"],
};

// rootReducer is the base reducer object that represents the global state of the site
// they are like large json objects containing values for different properties
// It combines all the reducers available
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

// export modified persisted reducers
export default persistReducer(persistConfig, rootReducer);
