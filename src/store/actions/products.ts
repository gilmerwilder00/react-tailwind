import { createAction } from "@reduxjs/toolkit";

const captureText = createAction(
    "captureText",
    (obj) => ({ payload: { text: obj.text } })
)

export { captureText };