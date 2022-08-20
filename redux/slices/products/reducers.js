import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from "./actions";

const initialState = {
    loading: false,
    isSuccess: false,
    all_products: [],
    selectedProducts: []

}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setselectProducts(state, action) {
            if (!state.selectedProducts.some(el => el.id == action.payload.id)) {
                state.selectedProducts.push(action.payload)
            }
        },
        removeSelectedProducts(state, payload) {
            const findedIndex = state.selectedProducts.findIndex(item => item.id == payload.id)
            state.selectedProducts.splice(findedIndex - 1, 1)
        }
    },
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

export const { setselectProducts, removeSelectedProducts } = productsSlice.actions

export default productsSlice.reducer