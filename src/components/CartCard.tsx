import { useRef } from "react";

function CartCard(props) {
  const { id, title, photo, description, price, quantity, color, updateCart } = props;
  // const { id, title, photo, description, price, quantity, color } = props;

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formattedPrice = formatter.format(price); 

//              {current:null}
  const units = useRef();

  console.log(units);
  

  const manageUnits = () => {
    // console.log("dentro de manage units");
    let productsOnCart = JSON.parse(localStorage.getItem("cart") ?? "[]");
    const one = productsOnCart.find((each) => each.id === id);
    one.units = Number(units.current.value);
    localStorage.setItem("cart", JSON.stringify(productsOnCart));
    updateCart(productsOnCart);
  };

  return (
    <>
      <article className="bg-[#f2f2f2] rounded-[5px] p-[20px] m-[20px] min-h-[220px] break-words flex justify-between w-full  sm:w-[600px] lg:w-[680px] items-center flex-col sm:flex-row ">
        <img
          className=" hidden lg:inline-block  w-full lg:w-[100px] h-[100px] rounded-[5px] "
          src={photo}
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
            ref={units}
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
