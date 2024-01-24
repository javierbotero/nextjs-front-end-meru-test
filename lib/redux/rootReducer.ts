/* Instruments */
import { productsSlice } from "./slices";
import { notificationsSlice } from "./slices";

export const reducer = {
  products: productsSlice.reducer,
  notifications: notificationsSlice.reducer
};
