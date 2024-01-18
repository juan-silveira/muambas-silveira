import { Link } from "react-router-dom";
import { numberFormat } from "../../utils/numberFormat";
import './style.css';
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";
import Swal from "sweetalert2";

const Item = ({ item }) => {

    const name = item.name;
    const price = parseFloat(item.price);
    const imgUrl = item.imgUrl;
    // const stock = parseInt(item.stock);
    const quantity = parseInt(item.quantity);
    const cart = useContext(CartContext)

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

    function removeItem() {
        console.log("DELETE")
        const myCart = document.getElementById("cart");
        myCart.innerHTML = parseInt(myCart.innerText) - item.quantity;
        cart.removeFromCart(item.id)
        Toast.fire({
            icon: "success",
            title: "Item removido do carrinho!"
        });
    }

    return (
        <>

            <td><Link to={`/item/${item.id}`} ><img src={imgUrl} className="card-img-table" alt="produto" /></Link></td>
            <td>{name}</td>
            <td>{numberFormat(price)}</td>
            <td>{quantity}</td>
            <td className="fw-bold text-success">{numberFormat(quantity * price)}</td>
            <td><button className="btn btn-icon btn-danger" onClick={removeItem}><i className="bi bi-trash"></i></button></td>

        </>
    )
}

export default Item;