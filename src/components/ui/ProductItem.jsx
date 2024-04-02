import { CiSquarePlus } from "react-icons/ci";
import { useBasket } from "../../Context/basketContext";

export default function ProductItem({ product }) {
  const { basket, setBasket, setProductCounts } = useBasket();

  const handleAddBasket = (product) => {
    setBasket([...basket, product]);
    const { id } = product;
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [id]: (prevCounts[id] || 0) + 1,
    }));
  };

  return (
    <div className="grid grid-cols-4">
      {product?.map((product, i) => {
        const { id, image, price, title, alt } = product ?? {};
        const isProductInBasket = basket.some((item) => item.id === id);

        return (
          <div key={i} className="relative rounded border border-bordercolor bg-white">
            <div className="flex flex-col items-center justify-center">
              <img className="" src={image} alt="" />
              <span className="text-sm font-semibold text-brand">{price} ₺</span>
              <span className="text-sm font-semibold text-brand">{title}</span>
              <span className="text-gray text-sm font-semibold">{alt}</span>
            </div>

            {!isProductInBasket && (
              <button
                onClick={() => handleAddBasket(product)}
                className="eas-in absolute right-3 top-3 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-white text-brand drop-shadow-lg transition hover:border-brand hover:text-brandyellow">
                <CiSquarePlus size={35} />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
