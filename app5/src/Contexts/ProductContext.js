import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products] = useState({
    Electronics: ['Phone', 'Laptop'],
    Clothing: ['T-shirt', 'Jeans']
  });
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
