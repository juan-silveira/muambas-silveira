import { createContext, useState } from "react";
import { Produtos } from "../produtos";

export const CartContext = createContext(
    []
)

export function CartContextProvider({ children }) {
    const [products, setProducts] = useState(Produtos)
    const [cart, setCart] = useState([])
    
    function addToCart(item, count) {
        let index = -1;

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

        setProducts((prevProducts) => {
            const updateProducts = prevProducts.map((p) => {
                if (p.id === item.id) {
                    return {...p, stock: p.stock - count};
                }
                return p;
            })
            return updateProducts;
        })
    }

    function removeFromCart(id) {
        const idArray = cart.map(e=> e.id);
        const indexOf = idArray.indexOf(id);
        const newCart = cart.splice(indexOf, 1)
        setProducts(newCart);

        setProducts((prevProducts) => {
            const updateProducts = prevProducts.map((p) => {
                if (p.id === id) {
                    return {...p, stock: p.stock + cart[indexOf].quantity};
                }
                return p;
            })
            return updateProducts;
        })
    }

    function clearCart() {
        setCart([])
    }
    
    return (
        <CartContext.Provider value={{ cart, products, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}