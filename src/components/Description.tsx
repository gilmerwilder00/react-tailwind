// import styles from "./Description.module.css"
import ProductProp from "../interfaces/ProductProp"

export default function Description({ product }:ProductProp) {
    return <section className="w-[300px] p-[10px] m-[10px] flex flex-col
                               sm:w-[340px] ">
    <h1 className="text-black text-[28px] font-bold break-words mt-0 ">{product.title}</h1>
    <form className="mt-[30px]">
      <fieldset className="border-none p-0 flex flex-col ">
        <label className=" text-black text-[12px] font-bold" htmlFor="color">
          Color
        </label>
        <select className="w-full h-[40px] bg-white rounded-[10px] border border-solid border-[#eaeaea]
                           my-[10px] p-[10px] box-border " id="color">
          {product.colors.map((each) => (
            <option key={each} value="Silver">
              {each}
            </option>
          ))}
        </select>
      </fieldset>
    </form>
    <div className="mt-[30px] leading-[20px] ">
      <span className="text-black text-[12px] font-bold ">Descripción</span>
      <p>{product.description}</p>
    </div>
  </section>
  }
  