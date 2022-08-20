import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from "../../../services/helpers/api";

export const fetchPayments = createAsyncThunk(
    'payment/fetchPayments',
    async () => {
        try {
            const repsonse = await get('/payments')
            return repsonse
        } catch (error) {
            throw error
        }
    }

)