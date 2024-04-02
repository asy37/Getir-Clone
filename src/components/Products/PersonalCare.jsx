import Products from "../../api/products.json";
import ProductItem from "../ui/ProductItem";

export const PersonalCare = () => {
  return (
    <>
      <label className="text-sm font-bold text-boldcolor">Kişisel Bakım</label>
      <ProductItem product={Products} />
    </>
  );
};
