function CartResume(props) {
  const { price } = props
  let formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  let formattedPrice = formatter.format(price); 
  // console.log(formattedNum);
  
  return (
    <>
      <div className="bg-[#f2f2f2] rounded-[5px] p-[20px] m-[20px] min-h-[220px] break-words justify-between w-full  sm:w-[340px] flex flex-col">
        <div className="grow flex flex-col justify-between">
          <h2 className="flex font-bold text-[20px]  sm:text-[22px]">
            Resumen del pedido
          </h2>
          <div className="flex justify-between items-center text-[20px]">
            <h3>Total</h3>
            <strong className="text-[20px]">${formattedPrice}</strong>
          </div>
          <small className="pb-[10px]">
            Incluye impuesto PAIS y percepción AFIP.
          </small>
        </div>
        <button
          className="w-full  h-[35px] sm:h-[40px] bg-[#ff3b3c] text-white font-bold border-none rounded-[10px] hover:bg-[ff5151]"
          id="buy"
          type="button"
        >
          COMPRAR
        </button>
      </div>
    </>
  );
}

export default CartResume;
