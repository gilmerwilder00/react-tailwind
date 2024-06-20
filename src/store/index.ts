import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./reducers/products";

// Se configuran los reductores
const store = configureStore({
    reducer:{
        products: productsReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;