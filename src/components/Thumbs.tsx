import { useEffect, useState } from "react";
// import styles from "./Thumbs.module.css";
import ProductProp from "../interfaces/ProductProp.ts";

export default function Thumbnail({product}:ProductProp) {
  const [thumb, setThumb] = useState(product.images[0] || "/mock1.jpg");
  useEffect(() => setThumb(product.images[0]),[product.id]);
  return (
    <section className="w-[300px] p-[10px] m-[10px] flex sm:w-[340px]">
      <div className="w-[40px] mx-[10px]">
        {product.images.map((each) => (
          <img
            className="w-[40px] h-[30px] mb-[10px] object-cover"
            key={each}
            src={each}
            alt={product.title}
            onClick={() => setThumb(each)}
          />
        ))}
      </div>
      <img
        className= "w-[220px] h-[220px] object-cover sm:w-[280px] sm:h-[280px]"
        id="big-img"
        src={thumb}
        alt={product.title}
      />
    </section>
  );
}
