import { createReducer } from "@reduxjs/toolkit";
import { captureText, calculateTotal, calculateCantProductsCart } from "../actions/products";
import Product from "../../interfaces/Product";


const initialState = { 
    text: "", 
    total: 0 ,
    cantProducts: 0, // Inicialmente 0, se actualizará desde localStorage si existe
};

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
                            const subtotals = products.map((each:Product) => each.price * each.units);
                            const total = subtotals.reduce((acc: number, val: number) => acc + val);
                            
                            const newState = {
                                ...state,
                                total,
                            };

                            return newState;
                        }
                    )
                    .addCase( // se agregar un nuevo caso para la accion  obtainCantProductsCart
                        calculateCantProductsCart,
                        (state, action) =>{
                            const newState = {
                                ...state,
                                cantProducts: action.payload.cantProducts,
                            };    
                            return newState;    
                        }
                    )
);

export default productsReducer; 

// const productsReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case captureText.type:
//         return {
//           ...state,
//           text: action.payload.text,
//         };
  
//       case calculateTotal.type:
//         const products = action.payload.products;
//         const subtotals = products.map((product) => product.price * product.quantity);
//         const total = subtotals.reduce((acc, subtotal) => acc + subtotal, 0);
//         return {
//           ...state,
//           total,
//         };
  
//       case calculateCantProductsCart.type:
//         return {
//           ...state,
//           cantProducts: action.payload.cantProducts,
//         };
  
//       default:
//         return state;
//       }
//   };


