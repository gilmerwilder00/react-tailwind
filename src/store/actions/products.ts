import { createAction } from "@reduxjs/toolkit";

const captureText = createAction(
    "captureText",
    (obj) => ({ payload: { text: obj.text } })
)

const calculateTotal = createAction(
    "calculateTotal",
    (obj) => ({ payload: { products: obj.products } })
);
 
 export { captureText, calculateTotal };
 