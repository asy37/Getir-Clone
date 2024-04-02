import Products from "../../api/products.json";
import ProductItem from "../ui/ProductItem";

export const Food = () => {
  return (
    <>
      <label className="text-sm font-bold text-boldcolor">Yemek</label>
      <ProductItem product={Products} />
    </>
  );
};
