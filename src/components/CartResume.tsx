function CartResume(props) {
  const { price } = props
    
  return (
    <>
      <div className="bg-[#f2f2f2] rounded-[5px] p-[30px] m-[10px] h-[220px] break-words justify-between w-full  sm:w-[340px] flex flex-col">
        <div className="grow flex flex-col justify-between">
          <h2 className="flex justify-between">
            <span>Resumen</span>
            <span>del</span>
            <span>pedido</span>
          </h2>
          <div className="flex justify-between items-center">
            <h3>Total</h3>
            <strong className="text-[20px]">${price}</strong>
          </div>
          <small className="pb-[10px]">
            Incluye impuesto PAIS y percepción AFIP.
          </small>
        </div>
        <button
          className="w-full bg-[#ff3b3c] text-white font-bold border-none rounded-[10px]
          hover:bg-[ff5151]"
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
