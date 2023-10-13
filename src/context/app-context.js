import React, { useState, useEffect, createContext } from 'react';

export const AppContext = createContext([
    {},
    () => { }
]);

export const AppProvider = (props) => {

    const [cart, setCart] = useState({contents: {nodes: []}, total: 0});

    useEffect(() => {
        if (typeof window !== 'undefined') {
            let cartData = localStorage.getItem('woo-next-cart');
            cartData = cartData ? JSON.parse(cartData) : {contents: {nodes: []}, total: 0};
            setCart(cartData);
        }
    }, []);

    return (
        <AppContext.Provider value={[cart, setCart]}>
            {props.children}
        </AppContext.Provider>
    );
};
