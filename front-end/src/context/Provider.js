import PropTypes from 'prop-types';
import React, { createContext, useMemo, useState, useEffect } from 'react';
import { getProducts } from '../services/userApi';

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    getProducts().then((data) => {
      const replace = data.map(({ id, name, price, urlImage }) => ({
        id,
        name,
        price,
        urlImage,
      }));
      setProducts(replace);
    });
  }, []);

  const context = useMemo(
    () => ({
      user,
      setUser,
      cart,
      setCart,
      totalPrice,
      setTotalPrice,
      products,
      setProducts,
      totalCart,
      setTotalCart,
    }),
    [user, setUser, cart, setCart, totalPrice,
      setTotalPrice, products, setProducts, totalCart, setTotalCart],
  );

  return (
    <AppContext.Provider value={ context }>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppContextProvider');
  }
  return context;
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
