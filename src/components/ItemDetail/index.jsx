import { useState } from "react";
import ItemCount from "../ItemCount";

const ItemDetail = ({ item }) => {

    const name = item.name;
    const description = item.description;
    const price = parseFloat(item.price).toFixed(2);
    const imgUrl = item.imgUrl;
    const stock = parseInt(item.stock);
    const initial = 1;
    const [count, setCount] = useState(initial);
    const [currentStock, setCurrentStock] = useState(stock);

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
                    <ItemCount stock={currentStock} count={count} removeItem={removeItem} addItem={addItem} onAdd={onAdd}/>
                </div>
            </div>
        </>
    )
}

export default ItemDetail;