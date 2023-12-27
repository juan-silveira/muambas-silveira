import React from "react";
import './style.css';

const ItemCount = (props) => {

    const count = props.count;
    const stock = props.stock;

    return (
        <>
            <div className="form-group py-2">
                <button className="btn btn-outline-primary btn-icon" id="remove" onClick={props.removeItem} disabled={count === 0 ? true : false}><i className="bi bi-dash icon"></i></button>
                <span className="mx-2" style={{ maxWidth: "50px" }}>{stock === 0 ? <span className="badge bg-danger p-2">ESGOTADO</span> : count}</span>
                <button className="btn btn-outline-primary btn-icon" id="add" onClick={props.addItem} disabled={stock === 0 ? true : false}><i className="bi bi-plus icon"></i></button>
            </div>
        </>
    )
}

export default ItemCount;