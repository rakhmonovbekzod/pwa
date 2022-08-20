import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from "../../../services/helpers/api";

export const fetchProducts = createAsyncThunk(
    'product/fetchProduct',
    async () => {
        try {
            const repsonse = await get('/products')
            return repsonse
        } catch (error) {
            throw error
        }
    }

)