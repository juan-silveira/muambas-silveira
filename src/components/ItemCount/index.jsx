import React, { useState } from "react";

const ItemCount = (props) => {

    const stock = parseInt(props.stock);
    const initial = parseInt(props.initial);
    const [count, setCount] = useState(initial);

    function removeItem() {
        if (count > initial) {
            document.getElementById("cart").innerHTML = count - 1;
            return setCount(count - 1)
        }
    }

    function addItem() {
        if (count < stock) {
            document.getElementById("cart").innerHTML = count + 1;
            return setCount(count + 1)
        }
    }


    return (
        <>
            <div className="form-group border mt-3 py-2">
                <p className="text-center">Camiseta Preta</p>
                <button className="btn btn-outline-primary btn-icon" id="remove" onClick={removeItem}><i className="bi bi-dash"></i></button>
                <span className="mx-2" style={{ maxWidth: "50px" }}>{count}</span>
                <button className="btn btn-outline-primary btn-icon" id="add" onClick={addItem}><i className="bi bi-plus"></i></button>
            </div>
        </>
    )
}

export default ItemCount;