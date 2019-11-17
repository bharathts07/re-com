import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  ladies: 4,
  mens: 5
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollection = correlctionUrlParam =>
  createSelector(
    [selectCollection],
    collections =>
      collections.find(
        collection => collection.Id === COLLECTION_ID_MAP[correlctionUrlParam]
      )
  );
