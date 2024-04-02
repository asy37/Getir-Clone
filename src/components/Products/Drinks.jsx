import Products from "../../api/products.json";
import ProductItem from "../ui/ProductItem";

export const Drinks = () => {
  return (
    <>
      <label className="text-sm font-bold text-boldcolor">İçecekler</label>
      <ProductItem product={Products} />
    </>
  );
};
