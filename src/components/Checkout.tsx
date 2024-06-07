import { useState, useRef, useEffect } from "react";
import styles from "./Checkout.module.css";

export default function Checkout({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [button, setButton] = useState(false);
  const units = useRef(1);
  useEffect(() => {
    let productsOnCart = [];
    if (localStorage.getItem("cart")) {
      productsOnCart = JSON.parse(localStorage.getItem("cart"));
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    const one = productsOnCart.find((item) => item.id === product.id);
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
      productsOnCart = JSON.parse(localStorage.getItem("cart"));
    }
    const one = productsOnCart.find((each) => each.id === product.id);
    if (!one) {
      product.units = Number(units.current.value);
      productsOnCart.push(product);
      setButton(true);
    } else {
      productsOnCart = productsOnCart.filter((each) => each.id !== product.id);
      setButton(false);
    }
    localStorage.setItem("cart", JSON.stringify(productsOnCart));
  };
  return (
    <section className={styles["product-checkout-block"]}>
      <div className={styles["checkout-container"]}>
        <span className={styles["checkout-total-label"]}>Total:</span>
        <h2 id="price" className={styles["checkout-total-price"]}>
          $ {(product.price * quantity).toLocaleString()}
        </h2>
        <p className={styles["checkout-description"]}>
          Includes Country tax and AFIP collection
        </p>
        <ul className={styles["checkout-policy-list"]}>
          <li>
            <span className={styles["policy-icon"]}>
              <img src="/truck.png" alt="Truck" />
            </span>
            <span className={styles["policy-desc"]}></span>
          </li>
          <li>
            <span className={styles["policy-icon"]}>
              <img src="/plane.png" alt="Plane" />
            </span>
            <span className={styles["policy-desc"]}>
              Add the product to the cart to know the shipping costs
            </span>
          </li>
        </ul>
        <div className={styles["checkout-process"]}>
          <div className={styles["top"]}>
            <input
              type="number"
              min="1"
              value={quantity}
              ref={units}
              onChange={() => setQuantity(Number(units.current.value))}
            />
            <button
              type="button"
              className={button ? styles["remove-btn"] : styles["cart-btn"]}
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
