import styles from "./Cart.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

function Cart() {
  return (
    <>
      <NavBar />
      <Hero first="mi" second="carrito" />
      <main>
        <article className={styles["product-cart"]}>
          <img
            className={styles["product-img"]}
            src="https://i.postimg.cc/kX8PKZpq/ipad.jpg"
            alt="ipad"
          />
          <div className={styles["product-details"]}>
            <strong className={styles["product-title"]}>iPad Pro 13</strong>
            <span className={styles["product-description"]}>- Silver</span>
            <p className={styles["product-description"]}>
              The iPad Pro 13 is a stunning piece of technology, boasting a
              large 12.9-inch Retina display with ProMotion technology. With
              256GB of storage, this iPad provides ample space for all your
              files, apps, and multimedia content. The sleek and slim design,
              combined with the silver color, gives it a sophisticated look.
              Enjoy seamless connectivity with the WiFi feature. Capture your
              memorable moments with the high-quality camera and relive them on
              the impressive screen. Whether you're a professional artist,
              student, or just someone who appreciates cutting-edge technology,
              the iPad Pro 12.9 is a versatile device that meets all your needs.
            </p>
            <input
              className={styles["product-input"]}
              type="number"
              name="quantity"
              defaultValue="1"
              min="1"
              id="P7Q8R90"
            />
          </div>
          <strong className={styles["price"]}>AR$ $800000</strong>
        </article>
        <div className={styles["cart-resume"]}>
          <div className={styles["cart-data"]}>
            <h2 className={styles["cart-title"]}>
              <span>Resumen</span>
              <span>del</span>
              <span>pedido</span>
            </h2>
            <div className={styles["cart-total"]}>
              <h3>Total</h3>
              <strong className={styles["cart-price"]}>$800000</strong>
            </div>
            <small className={styles["cart-tax"]}>
              Incluye impuesto PAIS y percepción AFIP.
            </small>
          </div>
          <button className={styles["cart-btn"]} id="buy" type="button">
            COMPRAR
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Cart;
