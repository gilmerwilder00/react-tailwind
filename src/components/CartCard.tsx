import { useRef } from "react";
import Product from "../interfaces/Product";

// -----------------------------------
import { useDispatch } from "react-redux";
import { calculateTotal, calculateCantProductsCart } from "../store/actions/products";
//------------------------------------

interface productCardProps {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
  color: string;
}

function CartCard(props: productCardProps) {

  const { id, title, image, description, price, quantity, color } = props;

  const formatter = new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedPrice = formatter.format(price);
  const unitsR = useRef<HTMLInputElement>(null);
  // ----------------------------------------------------
  const dispatch = useDispatch();
  // ----------------------------------------------------

  const manageUnits = () => {
    const productsOnCart = localStorage.getItem("cart");
    let products = [];
    if (productsOnCart) {
      products = JSON.parse(productsOnCart);
    }
    const one = products?.find((each: Product) => each.id ===id);
    if (one) {
      one.units = Number(unitsR.current?.value);
      localStorage.setItem("cart", JSON.stringify(products));
      dispatch(calculateTotal({ products }));
      // ------------------------------------------------------------------
      const cantProductsOnCart = products.reduce((acc: number, product: Product) => acc + product.units , 0)
      // console.log(`la cantidad de productos antes de despachar desde carrito es: ${cantProductsOnCart}`);
      dispatch(calculateCantProductsCart({cantProducts : cantProductsOnCart}));
      // -----------------------------------------------------------------
    }
  };

  return (
    <>
      <article
        className="bg-[#f2f2f2] rounded-[5px] p-[20px] m-[20px] min-h-[220px] break-words flex justify-between w-full  sm:w-[600px] 
      lg:w-[680px] items-center flex-col sm:flex-row "
      >
        <img
          className=" hidden lg:inline-block  w-full lg:w-[100px] h-[100px] rounded-[5px] "
          src={image}
          alt={title}
        />

        <div className="flex flex-col justify-between gap-[5px] w-full sm:w-[340px] min-h-[100px] ">
          <strong>{title}</strong>

          <span className="whitespace-nowrap overflow-hidden truncate">
            {color}
          </span>

          <p className="whitespace-nowrap overflow-hidden truncate">
            {description}
          </p>

          <input
            id={id}
            className="w-[70px] h-[40px] rounded-[10px] border border-[#eaeaea] border-solid p-[5px]"
            type="number"
            name="quantity"
            defaultValue={quantity}
            ref={unitsR}
            min="1"
            onChange={manageUnits}
          />
        </div>

        <strong className="text-[20px]">AR$ {formattedPrice}</strong>
      </article>
    </>
  );
}

export default CartCard;
