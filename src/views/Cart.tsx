import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CartCard from "../components/CartCard";
import CartResume from "../components/CartResume";
import { useState, useEffect } from "react";
import Product from "../interfaces/Product";
import { useDispatch } from "react-redux";
import { calculateTotal } from "../store/actions/products";


function Cart() {
  const [productsOnCart, setProductsOnCart] = useState<Product[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      const products: Product[] = JSON.parse(
        localStorage.getItem("cart") ?? "[]"
      );
      setProductsOnCart(products);
      dispatch(calculateTotal({ products: products }));
    }
  }, []);

  return (
    <>
      <NavBar />
      <Hero first="mi" second="carrito" />

      <main className="w-full flex justify-center items-center p-[20px] lg:flex-row ">
        <section className="w-full flex flex-col justify-between lg:w-[1080px] lg:flex-row">
          <section className="w-full lg:w-2/3 flex flex-col justify-center items-center">
            {productsOnCart.map((each: Product) => (
              <CartCard
                key={each.id}
                id={each.id}
                title={each.title}
                image={each.images[0]}
                description={each.description}
                price={each.price}
                quantity={each.units}
                color={each.colors[0]}
              />
            ))}
          </section>

          <section className="w-full lg:w-1/3 flex justify-center items-center lg:justify-start lg:items-start ">
            <CartResume />
          </section>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Cart;
