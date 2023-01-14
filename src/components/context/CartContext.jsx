/* import React, { createContext, useContext, useState } from "react";

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const {cart, setCart} = useState([]);

    const addProduct = (item, quantity) => {
        if(isInCart(item.id)) {
            setCart(cart.map(product => {return product.id === item.id ? {...product, quantity: product.quantity + quantity} : product
            }))
        } else {
            setCart([...cart, {...item, quantity}])
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

export default CartProvider; */

import React, { createContext, useState } from "react";

export const CartContext = createContext([])

const CartContextProvider = ({children}) => {
    const {cart, setCart} = useState([]);

    const addProduct = (item, quantity) => {
        if(isInCart(item.id)) {
            let pos = cart.findIndex(x => x.id === item.id)
            cart[pos].quantity += quantity
            setCart([...cart])
        } else {
            setCart([...cart, {...item, quantity}])
        }
    } 

    const totalPrice = () => {return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0)}
    
    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.quantity, 0);
    }

    const clearCart = () => setCart([]);
    
    const isInCart = (id) => cart.some(product => product.id === id);

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));
    

    return (
        <CartContext.Provider value={{cart , addProduct, clearCart, removeProduct, cartTotal, totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider; 