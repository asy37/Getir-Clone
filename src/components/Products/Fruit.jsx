import Products from "../../api/products.json";
import ProductItem from "../ui/ProductItem";

export const Fruit = () => {
  return (
    <>
      <label className="text-sm font-bold text-boldcolor">Meyve & Sebze</label>
      <ProductItem product={Products} />
    </>
  );
};
