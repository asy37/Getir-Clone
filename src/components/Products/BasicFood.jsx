import Products from "../../api/products.json";
import ProductItem from "../ui/ProductItem";

export const BasicFood = () => {
  return (
    <>
      <label className="text-sm font-bold text-boldcolor">Temel Gıda</label>
      <ProductItem product={Products} />
    </>
  );
};
