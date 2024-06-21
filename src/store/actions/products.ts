import { createAction } from "@reduxjs/toolkit";

const captureText = createAction(
    "captureText",
    (obj) => ({ payload: { text: obj.text } })
)

const calculateTotal = createAction(
    "calculateTotal",
    (obj) => ({ payload: { products: obj.products } })
);

const calculateCantProductsCart = createAction(
    "obtainCantProductsCart",
    (obj) =>({payload: {cantProducts: obj.cantProducts}})
)

// const calculateCantProductsCart = (obj) => ({
//     type: "calculateCantProductsCart",
//     payload:{ cantProducts: obj.cantProducts },
// });

// Invocación de la función: 

//  calculateCantProductsCart( 
//   { 
//     cantProducts: 1
//   }
// )

// Lo que devuelve la función: 

// {
//     type: "calculateCantProductsCart"
//     payload: { 
//               cantProducts: 1
//              }
// }


 
 export { captureText, calculateTotal, calculateCantProductsCart };
 