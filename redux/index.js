import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
import auth from "./slices/auth/reducers";
import products from "./slices/products/reducers";
import payments from "./slices/payments/reducers";

export const store = configureStore({
    reducer: {
        auth,
        products,
        payments
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);