import { createReducer } from "@reduxjs/toolkit";
import { captureText } from "../actions/products";

const initialState = { text: "" };

const productsReducer = createReducer(
    initialState,
    (build) => build.addCase(
        captureText, 
        (state, action) => {
                const newState = {
                    ...state,
                    text: action.payload.text,
                };

        return newState;
        }
    )
);

export default productsReducer; 