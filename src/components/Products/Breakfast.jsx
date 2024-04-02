import Products from "../../api/products.json";
import ProductItem from "../ui/ProductItem";

export const Breakfast = () => {
  return (
    <>
      <label className="text-sm font-bold text-boldcolor">Kahvaltılık</label>
      <ProductItem product={Products} />
    </>
  );
};
