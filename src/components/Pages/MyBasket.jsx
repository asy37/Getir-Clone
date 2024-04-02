import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBasket } from "../../Context/basketContext";
import { ProductCount } from "../ui/ProductCount";
import { TotalPrice } from "../../hook/TotalPrice";
import clsx from "clsx";

export const MyBasket = () => {
  const { basket, setBasket, setProductCounts } = useBasket();
  const navigate = useNavigate();
  const totalPrice = TotalPrice();

  useEffect(() => {
    if (basket.length === 0) {
      navigate("/Drinks");
    }
  }, [basket, navigate]);

  const handleClearBasket = () => {
    setBasket([]);
    setProductCounts([]);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-bgcolor p-8 ">
      <div className="flex h-screen w-[1024px] items-start justify-between gap-4">
        <div className="w-full">
          <div className="flex w-full items-center justify-between py-2">
            <label className="text-lg font-semibold text-boldcolor">Sepetim</label>
            <button
              onClick={handleClearBasket}
              className="flex h-8 w-32 items-center rounded-lg p-1 text-sm font-semibold text-htext">
              <svg height="24" width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
                    stroke="#7849f7"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"></path>
                </g>
              </svg>
              Sepeti Temizle
            </button>
          </div>
          <div className="flex h-fit w-full flex-col gap-2 rounded-lg bg-white p-6 shadow-md">
            {basket.map((item, index) => {
              const { id, image, title, price } = item ?? {};

              return (
                <div
                  key={index}
                  className={clsx("flex h-20 w-full items-center justify-between gap-3 ", {
                    "border-b": index !== basket.length - 1,
                  })}>
                  <div className="flex items-center gap-3 py-3">
                    <div className="h-16 w-16 rounded-lg border p-2">
                      <img src={image} alt="" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-md font-semibold text-brand">₺ {price}</span>
                      <span className="text-md font-semibold">{title}</span>
                    </div>
                  </div>
                  <ProductCount i={index} id={id} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex w-[300px] flex-col items-center justify-center gap-8 py-2">
          <div className="flex w-full flex-col gap-3">
            <label className="text-lg font-semibold text-boldcolor">Sepet Toplamı</label>
            <div className="flex w-full justify-between  rounded-lg bg-white p-6 shadow-md">
              <label className="font-semibold">Sepet Tutarı</label>
              <label className="font-semibold text-textBasket">₺ {totalPrice}</label>
            </div>
          </div>
          <Link
            to="/MyBasket"
            className=" h-full w-full rounded-md bg-brand px-4 py-2 text-center text-white hover:bg-htext">
            Ödemeye Geç
          </Link>
        </div>
      </div>
    </div>
  );
};
