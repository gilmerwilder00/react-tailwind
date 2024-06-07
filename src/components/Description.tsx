import styles from "./Description.module.css"

export default function Description({ product }) {
    return <section className={styles["product-description-block"]}>
    <h1 className={styles["product-title"]}>{product.title}</h1>
    <form className={styles["product-selector"]}>
      <fieldset className={styles["product-fieldset"]}>
        <label className={styles["product-label"]} htmlFor="color">
          Color
        </label>
        <select className={styles["product-select"]} id="color">
          {product.colors.map((each) => (
            <option key={each} value="Silver">
              {each}
            </option>
          ))}
        </select>
      </fieldset>
    </form>
    <div className={styles["product-description"]}>
      <span className={styles["product-label"]}>Descripción</span>
      <p>{product.description}</p>
    </div>
  </section>
  }
  