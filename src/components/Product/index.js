import { useNavigate } from "react-router-dom";
import Shipping from "../../images/shipping.png";
import styles from "./index.module.scss";

const Product = ({ item }) => {
  const navigate = useNavigate();
  const { id, picture, title, price, free_shipping, address } = item;

  const navigateProductDetail = () => {
    navigate(`/items/${id}`);
  };

  return (
    <article className={styles.item}>
      <div className={styles.item__figure} onClick={navigateProductDetail}>
        <div className={styles.item__thumbnail}>
          {picture && <img src={picture} alt={title} />}
        </div>
        <div className={styles.item__detail}>
          <div className={styles.detail__price}>
            <span className={styles.price__amount}>
              ${price.amount.toLocaleString("es-AR")}
            </span>
            <span className={styles.price__icon}>
              {free_shipping ? (
                <img
                  src={Shipping}
                  width="18"
                  height="18"
                  title="Envio gratis"
                  alt="Envío gratis"
                />
              ) : (
                ""
              )}
            </span>
          </div>
          <div className={styles.detail__name}>{title}</div>
        </div>
      </div>
      <div className={styles.item__location}>{address}</div>
    </article>
  );
};

export default Product;
