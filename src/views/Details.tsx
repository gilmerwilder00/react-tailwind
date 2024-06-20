import { useParams } from "react-router-dom";
// import styles from "./Details.module.css";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
// import products from "../assets/products";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import Thumbs from "../components/Thumbs";
import Description from "../components/Description";
import Checkout from "../components/Checkout";
import Product from "../interfaces/Product";

import axios from "axios";
import { useEffect, useState } from "react";

function Details() {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);
  const [onsale, setOnSale] = useState<Product[]>([]);

  useEffect(() => {
    if (!id) return;
    axios("/products.json")
      .then((res) => {
        const products: Array<Product> = res.data;
        const detailProduct: Product | undefined = products.find((each) => each.id === id);
        detailProduct && setProduct(detailProduct);
        const filterProducts: Array<Product> = products.filter((each) => each.onsale);
        filterProducts.length > 0 && setOnSale(filterProducts);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      <NavBar />
      {!product && <Hero first="NOT" second="found" />}
      <main className="w-full flex justify-center  items-center p-[20px]">
        <div className=" w-full flex flex-wrap justify-center">
          {product && (
            <div id="details" className="flex justify-center flex-wrap">
              <Thumbs product={product} />
              <Description product={product} />
              <Checkout product={product} />
            </div>
          )}

          <div className=" w-full flex flex-col justify-center items-center m-[20px 0]  ">
            <h2 className=" text-center text-[40px]">Week Sale</h2>

            <div
              id="product-container"
              className=" w-full flex flex-col flex-wrap  justify-between items-center md:flex-row lg:w-[1024px]"
            >
              {onsale.map((each: Product) => (
                <ProductCard
                  key={each.id}
                  id={each.id}
                  title={each.title}
                  price={each.price}
                  colors={each.colors}
                  images={each.images}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Details;
