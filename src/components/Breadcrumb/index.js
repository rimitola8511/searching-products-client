import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { normalize } from "../../utils/helpers";
import Container from "../Container";
import styles from "./index.module.scss";

const Breadcrumb = ({ categories }) => {
  const navigate = useNavigate();
  const isLastCategoryItem = (item) =>
    item === categories[categories.length - 1];

  const handleSearchByCategory = (category) => {
    if (category) navigate(`/items?search=${normalize(category)}`);
  };

  return (
    <Container>
      <nav>
        <ul className={styles.breadcrumb}>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          {!!categories &&
            categories.map((category) => (
              <li key={category}>
                <span
                  onClick={() =>
                    !isLastCategoryItem(category)
                      ? handleSearchByCategory(category)
                      : null
                  }
                >
                  {category}
                </span>
              </li>
            ))}
        </ul>
      </nav>
    </Container>
  );
};

export default Breadcrumb;
