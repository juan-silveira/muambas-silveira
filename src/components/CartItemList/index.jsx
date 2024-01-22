import { useContext } from "react";
import CartItem from "../CartItem";
import { CartContext } from "../../contexts/cartContext";
import { numberFormat } from "../../utils/numberFormat";
import { Link } from "react-router-dom";
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import Swal from "sweetalert2";

const CartItemList = () => {

    const cartReset = useContext(CartContext)
    const cart = useContext(CartContext).cart

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    function sendOrder() {
        const items = cart.map(({id, imgUrl, name, price, quantity}) => {
            return {id, imgUrl, name, price, quantity}
        })
        const order = {
            buyer: { name: "Juan", phone: "1111", email: "teste@teste.com" },
            items: items,
            total: cart.map(p => p.price * p.quantity).reduce((accumulator, currentValue) => accumulator + currentValue)
        }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((info) => {
            Swal.fire({
                icon: "info",
                title: `Seu pedido tem o id: ${info["_key"].path.segments[1]}`
            });
        })
        Toast.fire({
            icon: "success",
            title: "Pedido realizado com sucesso!"
        });

        cartReset.clearCart();
        const myCart = document.getElementById("cart");
        myCart.innerHTML = 0;
    }

    return (
        <>
            <div className="row text-center">
                {cart.length === 0 ?
                 <> 
                    <div>Sem produtos no carrinho!</div>
                    <Link to="/" className="btn btn-warning fw-bold mt-3">Voltar</Link> 
                </>
                : 
                <>
                <table className="table table-hover table-responsive">
                    <thead>
                        <tr className="text-center">
                            <th scope="col">Produto</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Preço/Un</th>
                            <th scope="col">Quantidade</th>
                            <th scope="col" className="fw-bold">TOTAL</th>
                            <th scope="col"><i className="bi bi-gear"></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((p) => {
                               return <>
                                        <tr className="text-center align-middle" key={`item-${p.id}`}>
                                            <CartItem item={p} />
                                        </tr>
                                      </> 
                        })}
                        <tr className="align-middle">
                            <td colSpan={4} className="fw-bold text-end">TOTAL:</td>
                            <td className="fs-5 fw-bold">{numberFormat(cart.map(p => p.price * p.quantity).reduce((accumulator, currentValue) => accumulator + currentValue))}</td>
                            <td></td>
                        </tr>
                    </tbody>


                </table>
                <button className="btn btn-warning fw-bold" onClick={sendOrder}>Finalizar Compra</button>
                </>
                }
            </div>

        </>
    )
}

export default CartItemList;