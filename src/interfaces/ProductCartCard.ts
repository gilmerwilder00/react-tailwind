import Product from "./Product";

export default interface ProductCartCard {
    id: string;
    title: string;
    image: string;
    description?: string ; 
    price: number;
    quantity: number; 
    color: string;
    units?:number;
    updateCart: (updatedProducts: Product[])=> void;
 }
