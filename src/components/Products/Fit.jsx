import Products from "../../api/products.json";
import ProductItem from "../ui/ProductItem";

export const Fit = () => {
  return (
    <>
      <label className="text-sm font-bold text-boldcolor">Fit & Form</label>
      <ProductItem product={Products} />
    </>
  );
};
