import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "http://localhost:4001/api/items/search?q=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      const { items, categories } = data;
      if (items) {
        setProducts(items);
        setCategories(categories);
      } else {
        setProducts([]);
        setCategories([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm) fetchItems();
  }, [searchTerm, fetchItems]);

  return (
    <AppContext.Provider
      value={{ loading, products, searchTerm, setSearchTerm, categories }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
