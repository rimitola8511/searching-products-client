import { useState } from "react";
import { productStatus } from "../../utils/constanst";
import styles from "./index.module.scss";

const ProductDetail = ({ item }) => {
  const [readMore, setReadMore] = useState(false);
  const { picture, title, price, condition, sold_quantity, description } = item;
  return (
    <main className={styles.detailContainer}>
      <div className={styles.detail__figure}>
        {picture && <img src={picture} alt={title} />}
        <div className={styles.figure__description}>
          <h2>Descripción</h2>
          {description ? (
            <p>
              {readMore ? description : `${description.substring(0, 400)}...`}
              {description.length > 400 && (
                <button onClick={() => setReadMore(!readMore)}>
                  {readMore ? " ver menos" : " ver más"}
                </button>
              )}
            </p>
          ) : (
            "El producto no tiene descripción"
          )}
        </div>
      </div>
      <div className={styles.detail__summary}>
        <div className={styles.summary__status}>
          <span>
            {productStatus[condition]} - {`${sold_quantity} vendidos`}
          </span>
        </div>
        <div className={styles.summary__title}>
          <h4>{title}</h4>
        </div>
        <div className={styles.summary__price}>
          ${price.amount.toLocaleString("es-AR")}
          <span>{price.decimals === 0 ? "00" : price.decimals}</span>
        </div>
        <div className={styles.summary__button}>
          <button>Comprar</button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
