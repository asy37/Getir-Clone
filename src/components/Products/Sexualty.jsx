import Products from "../../api/products.json";
import ProductItem from "../ui/ProductItem";

export const Sexualty = () => {
  return (
    <>
      <label className="text-sm font-bold text-boldcolor">Cinsellik</label>
      <ProductItem product={Products} />
    </>
  );
};
