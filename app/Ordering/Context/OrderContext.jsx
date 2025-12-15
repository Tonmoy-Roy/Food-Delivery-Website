"use client";
import { createContext, useContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Burger');

  const addToBasket = (item) => {
    setBasket((prev) => {
      const exist = prev.find(p => p.id === item.id);
      if (exist) {
        return prev.map(p =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromBasket = (id) => {
    setBasket(prev => prev.filter(item => item.id !== id));
  };

  return (
    <OrderContext.Provider value={{ basket, addToBasket, removeFromBasket, selectedCategory, setSelectedCategory }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
