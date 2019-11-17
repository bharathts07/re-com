import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

// converting from objects to arrays
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParams =>
  createSelector(
    [selectCollection],
    collections => collections[collectionUrlParams]
  );
