import Products from "../../api/products.json";
import ProductItem from "../ui/ProductItem";

export const Baby = () => {
  return (
    <>
      <label className="text-sm font-bold text-boldcolor">Bebek</label>
      <ProductItem product={Products} />
    </>
  );
};
