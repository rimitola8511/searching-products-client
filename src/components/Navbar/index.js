import Container from "../Container";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.nav__center}>
          <Logo />
          <SearchBar />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
