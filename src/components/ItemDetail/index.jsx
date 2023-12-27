import { useContext, useEffect, useState } from "react";
import ItemCount from "../ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";

const ItemDetail = ({ item }) => {
    const cart = useContext(CartContext);
    const name = item.name;
    const description = item.description;
    const price = parseFloat(item.price).toFixed(2);
    const imgUrl = item.imgUrl;
    const stock = parseInt(item.stock);
    const initial = 1;
    const [count, setCount] = useState(initial);
    const [currentStock, setCurrentStock] = useState(stock);

    useEffect(() => {
        console.log(cart.cart)
    },[cart])

    function removeItem() {
        if (count >= initial) {
            return setCount(count - 1)
        }
    }

    function addItem() {
        if (count < currentStock) {
            return setCount(count + 1)
        }
    }

    function onAdd() {
        const carrinho = document.getElementById("cart");
        carrinho.innerHTML = parseInt(carrinho.innerText) + count;
        setCurrentStock(currentStock - count);
        setCount(0);
        cart.addToCart(item, count)
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
                            <Link to="/cart" className="btn btn-outline-warning btn-icon">Finalizar Compra</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;