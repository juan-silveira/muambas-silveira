import { createContext, useState } from "react";
import { Produtos } from "../produtos";

export const CartContext = createContext(
    []
)

export function CartContextProvider({ children }) {
    const [products, setProducts] = useState(Produtos)
    const [cart, setCart] = useState([])
    var index = -1;

    function addToCart(item, count) {
        cart.forEach((element, i) => {
            if(element.id === item.id)
            index = i
        });

        const idArray = cart.map(e=> e.id);
        const indexOf = idArray.indexOf(item.id);

        if(index > -1){
            const newCart = cart.map((e,i) => {
                if(indexOf === i){
                    return  { ...e, quantity: e.quantity ? e.quantity + count : count, stock: e.stock - count }
                }
                return e
            })
            setCart(newCart)
        } else{
            setCart([...cart, { ...item, quantity: count, stock: item.stock - count }])
        }
    }

    function removeFromCart(id) {
        const idArray = cart.map(e=> e.id);
        console.log("IDARRAY: ", idArray);
        const indexOf = idArray.indexOf(id);
        console.log("INDEXOF: ", indexOf);
        const newCart = cart.splice(indexOf, 1)
        console.log("NEWCART: ", newCart);
        setProducts(newCart);
    }

    function clear() {
        setCart([])
    }
    
    return (
        <CartContext.Provider value={{ cart, products, addToCart, removeFromCart, clear }}>
            {children}
        </CartContext.Provider>
    )
}