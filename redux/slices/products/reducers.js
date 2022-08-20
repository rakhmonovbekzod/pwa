import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from "./actions";

const initialState = {
    loading: false,
    isSuccess: false,
    all_products: [],

}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: {
        [fetchProducts.pending.type]: (state, action) => {
            state.loading = true
            state.isSuccess = false
        },
        [fetchProducts.fulfilled.type]: (state, action) => {
            state.loading = false
            state.all_products = action.payload.data
            state.isSuccess = true
        },
        [fetchProducts.rejected.type]: (state, action) => {
            state.loading = false
            state.isSuccess = false
        }
    }
})


export default productsSlice.reducer