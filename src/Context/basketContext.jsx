import React, { createContext, useContext, useState, useEffect } from "react";

const defaultValue = {};
const BasketContext = createContext(defaultValue);

export const useBasket = () => useContext(BasketContext);

export const BasketContextProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [productCounts, setProductCounts] = useState({});
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (basket.length > 0) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [basket]);
  console.log(basket);
  const values = {
    basket,
    setBasket,
    productCounts,
    setProductCounts,
    show,
    setShow,
  };

  return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>;
};
