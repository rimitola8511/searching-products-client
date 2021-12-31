import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.scss";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Home from "./pages/Home";
import ProductsResults from "./pages/ProductsResults";
import SingleProduct from "./pages/SingleProduct";
import PageNotFound from "./pages/Error";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/items" element={<ProductsResults />}></Route>
          <Route path="/items/:id" element={<SingleProduct />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default App;
