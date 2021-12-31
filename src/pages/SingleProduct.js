import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../plugins/axios";

import Head from "../components/Head";
import ProductDetails from "../components/ProductDetails";
import Breadcrumb from "../components/Breadcrumb";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound/Index";
import { useCallback } from "react/cjs/react.development";

const Results = () => {
  const { id } = useParams();
  const [status, setStatus] = useState("");
  const [product, setProduct] = useState({});
  const [categories, setCartegories] = useState([]);

  const fetchData = useCallback(async () => {
    setStatus("loading");
    try {
      const { data: productData } = await axios.get(`/items/${id}`);
      const { data: categoryData } = await axios.get(
        `/categories/${productData.item.category_id}`
      );
      if (categoryData.categories.length)
        categoryData.categories.push(productData.item.title);
      setProduct(productData.item);
      setCartegories(categoryData.categories);
      setStatus("");
    } catch (error) {
      if (error.response.data.error) setStatus("notFound");
      else setStatus("");
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData, id]);

  if (status === "loading") return <Loading />;
  if (status === "notFound") return <NotFound />;

  return (
    <>
      <Head
        title="Detalles del producto | Mercado Libre"
        description={product.description}
      />
      {categories.length > 0 && <Breadcrumb categories={categories} />}
      {Object.keys(product).length > 0 && <ProductDetails item={product} />}
    </>
  );
};

export default Results;
