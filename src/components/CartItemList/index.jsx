import { useContext } from "react";
import CartItem from "../CartItem";
import { CartContext } from "../../contexts/cartContext";
import { numberFormat } from "../../utils/numberFormat";
import { Link } from "react-router-dom";

const CartItemList = () => {

    const cart = useContext(CartContext).cart

    // useEffect(() => {
    //     console.log("CART ITEMS: ", cart)
    // }, [cart])

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
                        {cart.map((p, i) => {
                        return <>
                            <tr key={`produto-${i}`} className="text-center align-middle">
                                <CartItem item={p} key={`produto-${p.id}`} />
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
                <button className="btn btn-warning fw-bold">Finalizar Compra</button>
                </>
                }
            </div>

        </>
    )
}

export default CartItemList;