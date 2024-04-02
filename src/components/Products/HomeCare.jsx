import Products from "../../api/products.json";
import ProductItem from "../ui/ProductItem";

export const HomeCare = () => {
  return (
    <>
      <label className="text-sm font-bold text-boldcolor">Ev Bakım</label>
      <ProductItem product={Products} />
    </>
  );
};
