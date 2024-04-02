import Products from "../../api/products.json";
import ProductItem from "../ui/ProductItem";

export const HomeLife = () => {
  return (
    <>
      <label className="text-sm font-bold text-boldcolor">Ev Yaşam</label>
      <ProductItem product={Products} />
    </>
  );
};
