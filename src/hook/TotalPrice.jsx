import { useBasket } from "../Context/basketContext";

export const TotalPrice = () => {
  const { basket, productCounts } = useBasket();
  const totalPrice = () => {
    let total = 0;
    basket?.forEach((item) => {
      const { id, price } = item;
      const count = productCounts[id] || 0;
      total += price * count;
    });
    return total.toFixed(2);
  };
  return totalPrice();
};
