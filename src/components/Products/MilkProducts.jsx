import Products from "../../api/products.json";
import ProductItem from "../ui/ProductItem";

export const MilkProducts = () => {
  return (
    <>
      <label className="text-sm font-bold text-boldcolor">Süt Ürünleri</label>
      <ProductItem product={Products} />
    </>
  );
};
