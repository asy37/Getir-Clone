import Products from "../../api/products.json";
import ProductItem from "../ui/ProductItem";

export const Pets = () => {
  return (
    <>
      <label className="text-sm font-bold text-boldcolor">Evcil Hayvan</label>
      <ProductItem product={Products} />
    </>
  );
};
