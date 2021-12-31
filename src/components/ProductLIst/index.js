import Product from "../Product";

const ProductList = ({ items }) => {
  return (
    <main>
      {!!items &&
        items.slice(0, 4).map((item) => <Product key={item.id} item={item} />)}
    </main>
  );
};

export default ProductList;
