import ShopItemTypes from "./shop.types";

export const updateCollections = (collectionsMap) => ({
  type: ShopItemTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});
