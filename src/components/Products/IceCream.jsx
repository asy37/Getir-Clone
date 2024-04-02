import Products from "../../api/products.json";
import ProductItem from "../ui/ProductItem";

export const IceCream = () => {
  return (
    <>
      <label className="text-sm font-bold text-boldcolor">Dondurma</label>
      <ProductItem product={Products} />
    </>
  );
};
