import { useBasket } from "../../../Context/basketContext";
import { ProductCount } from "../../ui/ProductCount";

export const BasketProduct = () => {
  const { basket } = useBasket([]);

  return basket?.map((item, i) => {
    const { id, title, price } = item ?? {};

    return (
      <div key={i} className="flex h-[40px] justify-between py-4">
        <div>
          <div>{title}</div>
          <div>₺ {price}</div>
        </div>
        <div>
          <ProductCount i={i} id={id} />
        </div>
      </div>
    );
  });
};
