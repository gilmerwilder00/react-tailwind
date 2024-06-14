import { useState, useRef, useEffect } from "react";
// import styles from "./Checkout.module.css";
import ProductProp from "../interfaces/ProductProp";
import Product from "../interfaces/Product";

// interface CheckoutProps{
//   product: Product
// }

export default function Checkout({ product }: ProductProp) {

  const [quantity, setQuantity] = useState(1);
  const [button, setButton] = useState(false);
  const unitsR = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let productsOnCart = [];
    if (localStorage.getItem("cart")) {
      productsOnCart = JSON.parse(localStorage.getItem("cart")??"[]");
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    const one = productsOnCart.find((item: Product) => item.id === product.id);
    if (one) {
      setQuantity(one.units);
      setButton(true);
    } else {
      setQuantity(1);
      setButton(false);
    }
  }, [product.id]);

  const manageCart = () => {
    let productsOnCart = [];
    if (localStorage.getItem("cart")) {
      productsOnCart = JSON.parse(localStorage.getItem("cart")??"[]");
    }
    const one: Product = productsOnCart.find((each: Product) => each.id === product.id);
    if (!one) {
      product.units = Number(unitsR.current?.value);
      productsOnCart.push(product);
      setButton(true);
    } else {
      productsOnCart = productsOnCart.filter( (each: Product) => each.id !== product.id );
      setButton(false);
    }
    localStorage.setItem("cart", JSON.stringify(productsOnCart));
  };


  return (
    <section
      className="w-[300px] p-[10px] m-[10px] flex flex-col 
                        sm:w-[340px] "
    >
      <div className="bg-[#ebebeb] p-[20px]  sm:p-[33px] rounded-[2px]">
        <span className="text-[#ff3b3c]">Total:</span>
        <h2 id="price" className="text-[28px] font-bold mt-[10px]">
          $ {(product.price * quantity).toLocaleString()}
        </h2>
        <p className="leading-[20.4px] break-words  ">
          Includes Country tax and AFIP collection
        </p>
        <ul className="p-0 list-none mb-[30px]">
          <li className="flex items-center mt-[20px]">
            <span className=" w-1/12 mr-[10px]">
              <img src="/truck.png" alt="Truck" />
            </span>
            <span className="w-11/12">
              Add the product to the cart to find out the shipping costs.
            </span>
          </li>
          <li className="flex items-center mt-[20px]">
            <span className="w-1/12 mr-[10px] grow">
              <img src="/plane.png" alt="Plane" />
            </span>
            <span className="w-11/12">
              Receive it in approximately 10 to 15 business days by selecting
              standard shipping.
            </span>
          </li>
        </ul>
        <div className="flex mb-[10px]">
          <div className="flex mb-[10px] w-full">
            <input
              className="h-[40px] rounded-[10px] border-none w-[62px] mr-[10px] px-[10px] box-border text-center"
              type="number"
              min="1"
              value={quantity}
              ref={unitsR}
              onChange={() => setQuantity(Number(unitsR.current?.value))}
            />
            <button
              type="button"
              className={
                button
                  ? "w-full bg-[#202020] text-white font-bold border-none h-[40px] rounded-[10px] hover:bg-[#404040] "
                  : "w-full bg-[#ff3b3c] text-white font-bold border-none h-[40px] rounded-[10px] hover:bg-[#ff5151] "
              }
              onClick={manageCart}
            >
              {button ? "Remove from cart" : "Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
