/* Core */
import { createSlice } from "@reduxjs/toolkit";

/* Instruments */
import { fetchProductsAsync, addProductAsync } from "./thunks";

const initialState: ProductsSliceState = {
  value: [],
  status: "idle",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.value = action.payload
        }
        state.status = "idle";
      })
      .addCase(addProductAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProductAsync.fulfilled, (state, action) => {
        if (action.payload) {
          state.value.push(action.payload)
        }
        state.status = "idle";
      })
  },
});

/* Types */
export interface ProductsSliceState {
  value: Product[];
  status: "idle" | "loading" | "failed";
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}
