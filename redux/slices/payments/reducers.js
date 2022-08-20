import { createSlice } from '@reduxjs/toolkit';
import { fetchPayments } from "./actions";

const initialState = {
    loading: false,
    isSuccess: false,
    payments: [],

}

export const paymentsSlice = createSlice({
    name: 'payments',
    initialState,
    extraReducers: {
        [fetchPayments.pending.type]: (state, action) => {
            state.loading = true
            state.isSuccess = false
        },
        [fetchPayments.fulfilled.type]: (state, action) => {
            state.loading = false
            state.isSuccess = true
            state.payments = action.payload.data
        },
        [fetchPayments.rejected.type]: (state, action) => {
            state.loading = false
            state.isSuccess = false
        }
    }
})


export default paymentsSlice.reducer