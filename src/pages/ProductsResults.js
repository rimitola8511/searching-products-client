import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "../plugins/axios";

import Head from "../components/Head";
import ProductList from "../components/ProductLIst";
import Breadcrumb from "../components/Breadcrumb";
import Loading from "../components/Loading";
import NotFound from "../components/NotFound/Index";
import { useCallback } from "react/cjs/react.development";

const Results = () => {
  const [status, setStatus] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get("search");

  const fetchData = useCallback(async () => {
    setStatus("loading");
    try {
      const { data } = await axios.get(`/items/search?q=${query}`);
      setProducts(data.items);
      setCategories(data.categories);
      setStatus("");
    } catch (error) {
      if (error.response.data.error) setStatus("notFound");
      else setStatus("");
    }
  }, [query]);

  useEffect(() => {
    fetchData();
  }, [fetchData, query]);

  if (status === "loading") return <Loading />;
  if (status === "notFound") return <NotFound />;

  return (
    <>
      <Head
        title="Resutados de tu busqueda | Mercado Libre"
        description={`${query}`}
      />
      {categories.length > 0 && <Breadcrumb categories={categories} />}
      {products.length > 0 && <ProductList items={products} />}
    </>
  );
};

export default Results;
