import { Link } from "react-router-dom";
import { useBasket } from "../../Context/basketContext";
import { BasketProduct } from "./BasketComponents/BasketProducts";
import { EmptyBasket } from "./BasketComponents/EmptyBasket";

export const Basket = () => {
  const { basket } = useBasket([]);
  const { productCounts } = useBasket({});
  const { show } = useBasket();

  const totalPrice = () => {
    let total = 0;
    basket?.forEach((item) => {
      const { id, price } = item;
      const count = productCounts[id] || 0;
      total += price * count;
    });
    return total.toFixed(2);
  };

  return (
    <div className="shadow-[0px 6px 16px rgba(93, 62, 188, 0.04)] min-h-[360px] w-[300px] ">
      <label className="text-sm font-bold text-boldcolor">Sepetim</label>
      <div
        className="flex h-fit max-h-[800px] w-full flex-col gap-4 overflow-auto rounded-lg border-2 border-brandyellow bg-white px-6 pb-6 pt-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}>
        {!show ? <EmptyBasket /> : <BasketProduct />}

        {show ? (
          <div className="group mt-8 flex h-[48px] w-full  items-center rounded-lg border-2 border-brand hover:border-htext hover:bg-htext">
            <Link
              to="/MyBasket"
              className=" h-full w-[163px] rounded-s-md bg-brand px-4 py-2 text-center text-white group-hover:bg-htext">
              Sepete Git
            </Link>
            <div className="h-full w-[85px] cursor-default rounded-e-lg bg-white py-3 pl-[18px] text-sm font-semibold text-brand">
              ₺ {totalPrice()}{" "}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
