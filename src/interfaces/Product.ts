
export default interface Product {
    id: string;
    title: string;
    description: string; //opcional
    price: number;
    quantity: number; //opcional
    images: Array<string>;
    colors: Array<string>;
    onsale?: boolean;
    units: number;
 }


