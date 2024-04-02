import Products from "../api/products";
import ProductItem from "../ui/ProductItem";
import { useState, useEffect } from "react";

export default function Favorites() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(Products);
  }, []);
  return (
    <div className="container mx-auto gap-y-1">
      <h3 className="mb-3 ml-3 text-sm font-semibold text-textcolor md:ml-0">Favoriler</h3>
      <div className="lg-grid-cols-6 grid grid-cols-3 gap-0.1 overflow-hidden rounded-lg md:grid-cols-4 xl:grid-cols-8 2xl:grid-cols-9">
        {products.length && products.map((product) => <ProductItem key={product.id} product={product} />)}
      </div>
    </div>
  );
}
