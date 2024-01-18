import { useContext, useEffect, useState } from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import Swal from "sweetalert2";

const ItemDetail = ({ item }) => {
    const cart = useContext(CartContext);
    const carrinho = cart.cart;
    const id = item.id;
    const name = item.name;
    const description = item.description;
    const price = parseFloat(item.price).toFixed(2);
    const imgUrl = item.imgUrl;
    const stock = parseInt(item.stock);
    const initial = 0;
    const [count, setCount] = useState(initial);
    const [currentStock, setCurrentStock] = useState(stock);

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

    useEffect(() => {

        if (carrinho.length > 0) {
            const refreshCart = carrinho.map(e => e.id)
            const index = refreshCart.indexOf(id)
            if (index > -1) {
                setCurrentStock(carrinho[index].stock)
            }
        }
    }, [carrinho, id])

    function removeItem() {
        if (count > initial) {
            return setCount(count - 1)
        }
    }

    function addItem() {
        if (count < currentStock) {
            return setCount(count + 1)
        }
    }

    function onAdd() {
        const myCart = document.getElementById("cart");
        myCart.innerHTML = parseInt(myCart.innerText) + count;
        setCurrentStock(currentStock - count);
        setCount(0);
        cart.addToCart(item, count)
        Toast.fire({
            icon: "success",
            title: "Item adicionado ao carrinho!"
          });
    }

    return (
        <>
            <div className="card text-center">
                <div className="card-body d-flex align-content-between flex-wrap justify-content-center">
                    <div className="row">
                        <div className="col-4">
                            <img src={imgUrl} className="card-img-top" alt="produto" />
                        </div>
                        <div className="col-8">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{description}.</p>
                            <span className="badge bg-primary">R$ {price}</span>
                            <span className="badge bg-dark">Estoque: {currentStock}</span>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-around">
                    <div className="d-flex my-3 flex-column">
                        <ItemCount stock={currentStock} count={count} removeItem={removeItem} addItem={addItem} onAdd={onAdd} />
                        <div>
                            <button className="btn btn-outline-success btn-icon" id="addToCart" onClick={onAdd} disabled={count === 0 ? true : false}>Comprar</button>
                        </div>
                        <div className="mt-2">
                            <Link to="/cart" className="btn btn-outline-warning btn-icon">Ir para o carrinho</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;