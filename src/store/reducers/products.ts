import { createReducer } from "@reduxjs/toolkit";
// import { captureText } from "../actions/products";
import { captureText, calculateTotal } from "../actions/products";
import Product from "../../interfaces/Product";

// const initialState = { text: "" };
const initialState = { text: "", total: 0 };

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
                    .addCase(
                        calculateTotal,
                        (state, action)=>{

                            const products = action.payload.products
                            //                [st1, st2, st3]
                            const subtotals = products.map((each:Product) => each.price * each.units);
                            const total = subtotals.reduce((acc: number, val: number) => acc + val);
                            
                            const newState = {
                                ...state,
                                total,
                            };

                            return newState;
                        }
                    )
);

export default productsReducer; 