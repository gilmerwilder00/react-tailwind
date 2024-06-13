// import styles from "./Cart.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import { useState, useEffect } from "react";

function Cart() {
                                              
  const [productsOnCart, setProductsOnCart] = useState([]);

  const [cartTotal, setCartTotal] = useState(0);

  const totalPrice = productsOnCart.reduce((acc, e)=>acc+ e.price*e.units , 0);

  const calculateCartTotal = (products) => {
    const total = products.reduce((acc, product) => acc + product.price * product.units, 0);
    setCartTotal(total);
  };

  const updateCart = (updatedProducts) => {
    setProductsOnCart(updatedProducts);
    calculateCartTotal(updatedProducts);
    localStorage.setItem("cart", JSON.stringify(updatedProducts));
  };

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const products = JSON.parse(localStorage.getItem("cart"));
      setProductsOnCart(products); // esto causa que se renderice el componente Cart
    }
  },[]);

  return (
    <>
      <NavBar />
      <Hero first="mi" second="carrito" />

      <main className="w-full flex justify-center items-center p-[20px] lg:flex-row ">
        {/* <CartCard title="iPad 14 pro" color="black"  /> */}

        <section className="w-full flex flex-col justify-between lg:w-[1080px] lg:flex-row">

          <section className="w-full lg:w-2/3 flex flex-col justify-center items-center">
            {productsOnCart.map((product) => (
              <CartCard
                key={product.id}
                id={product.id}
                title={product.title}
                photo={product.images[0]}
                description={product.description}
                price={product.price}
                quantity={product.units}
                color={product.colors[0]}
                updateCart={updateCart}
              />
            ))}
          </section>
        
          <section className="w-full lg:w-1/3 flex justify-center items-center lg:justify-start lg:items-start">
            <CartResume price={totalPrice} />
          </section>
        
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Cart;
