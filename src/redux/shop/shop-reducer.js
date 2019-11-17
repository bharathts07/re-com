import SHOP_DATA from "./shop.data.jsx";

const INITITAL_DATA = {
  collections: SHOP_DATA
};

const shopReducer = (state = INITITAL_DATA, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
