import { createContext, useState } from "react";

export const CartContext = createContext([]);


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item]);
    }
    const removeFromCart = (item) => {
        const newCatalogue = cart.filter(
            (itemOnCatalogue) => itemOnCatalogue.name !== item.name        
            );
            setCart(newCatalogue)
    }
    return (
        <CartContext.Provider
            value={{cart,addToCart,removeFromCart}}>
                {children}
            </CartContext.Provider>
    )

};