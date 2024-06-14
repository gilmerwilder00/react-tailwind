import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
// import Product from "../interfaces/Product";
// import Product from "../interfaces/ProductCard";
interface ProductCardProps {
  id: string;
  title:string;
  price:number;
  colors:string[];
  images:string[];  
}

export default function ProductCard(props: ProductCardProps) {
  const { id, title, price, colors, images } = props;
  return (
    <Link className={styles["product-card"]} to={"/details/" + id}>
      <img className={styles["product-img"]} src={images[0]} alt={title} />
      <div className={styles["product-info"]}>
        <span className={styles["product-title"]}>{title}</span>
        <span className={styles["product-description"]}>{colors[0]}</span>
        <div className={styles["product-price-block"]}>
          <span className={styles["product-price"]}>{price}</span>
          <span className={styles["product-discount"]}>50% Off</span>
        </div>
        <div className={styles["product-tax-policy"]}>
          Includes Country tax and AFIP collection
        </div>
      </div>
    </Link>
  );
}
