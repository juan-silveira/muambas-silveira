import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const ItemCount = (props) => {

    const count = props.count;
    const stock = props.stock;

    return (
        <>
            <div className="d-flex my-3 flex-column">
                <div className="form-group py-2">
                    <button className="btn btn-danger btn-icon" id="remove" onClick={props.removeItem} disabled={count === 0 ? true : false}><i className="bi bi-dash icon"></i></button>
                    <span className="mx-2" style={{ maxWidth: "50px" }}>{stock === 0 ? <span className="badge bg-danger p-2">ESGOTADO</span> : count}</span>
                    <button className="btn btn-primary btn-icon" id="add" onClick={props.addItem}  disabled={stock === 0 ? true : false}><i className="bi bi-plus icon"></i></button>
                </div>
                <div>
                    <button className="btn btn-success btn-icon" id="addToCart" onClick={props.onAdd} disabled={count === 0 ? true : false}>Add to Cart</button>
                </div>
                <div className="mt-2">
                    <Link to="/cart" className="btn btn-warning btn-icon">Finalizar Compra</Link>
                </div>
            </div>
        </>
    )
}

export default ItemCount;