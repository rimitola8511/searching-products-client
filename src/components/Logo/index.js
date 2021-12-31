import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import styles from "./index.module.scss";

const Logo = () => {
  return (
    <Link to="/" aria-label="Volver al inicio" className={styles.logo}>
      <img src={logo} alt="Logo Mercado Libre" />
    </Link>
  );
};

export default Logo;
