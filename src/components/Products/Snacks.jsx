import Products from "../../api/products.json";
import ProductItem from "../ui/ProductItem";

export const Snacks = () => {
  return (
    <>
      <label className="text-sm font-bold text-boldcolor">Atıştırmalık</label>
      <ProductItem product={Products} />
    </>
  );
};
