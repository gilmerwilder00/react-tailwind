// import styles from "./Cart.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";

function Cart() {
  return (
    <>
      <NavBar />
      <Hero first="mi" second="carrito" />

      <main className="w-full flex flex-col justify-center items-center p-[20px] lg:flex-row ">
        <CartCard title="iPad 14 pro" color="black"  />
        <CartResume price="800000"/>
      </main>

      <Footer />
    </>
  );
}

export default Cart;
