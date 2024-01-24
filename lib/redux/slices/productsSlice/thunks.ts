import { API_URL } from "@/lib/helpers/utilities";
import { localFetch, checkResponse } from "@/lib/helpers/localFetch";

/* Instruments */
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";

import type { Product } from '@/lib/redux'

export const fetchProductsAsync = createAppAsyncThunk(
  "counter/fetchProducts",
  async () => {
    const response = await localFetch(`${API_URL}/products`)
    const data = await response.json()
    checkResponse(data)

    return data
  },
)

export const addProductAsync = createAppAsyncThunk(
  "counter/addProduct",
  async (product: Product) => {
    const response = await localFetch(
      `${API_URL}/products`, 'POST', {}, { product }
    )
    const data = await response.json()
    checkResponse(data)

    return data
  },
)
