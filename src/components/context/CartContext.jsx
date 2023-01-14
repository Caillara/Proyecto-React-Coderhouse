import React, { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const {cart, setCart} = useState([]);

    const addProduct = (item, quantity) => {
        if(isInCart(item.id)) {
            setCart(cart.map(product => {return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }))
        }
    } 

    const totalPrice = () => {return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0)}
    
    const totalProduct = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    const clearCart = () => setCart([]);
    

    const isInCart = (id) => cart.find(product => product.id === id);


    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));
    

    return (
        <CartContext.Provider value={{removeProduct, isInCart, clearCart, totalProduct, totalPrice, addProduct, cart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;