import Products from "../../api/products.json";
import ProductItem from "../ui/ProductItem";

export const Oven = () => {
  return (
    <>
      <label className="text-sm font-bold text-boldcolor">Fırından</label>
      <ProductItem product={Products} />
    </>
  );
};
