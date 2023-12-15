import React, { useEffect, useState } from "react";

const ItemCount = (props) => {

    const stock = parseInt(props.stock);
    const initial = 1;
    const [count, setCount] = useState(initial);

    useEffect(() => {
        document.getElementById("cart").innerHTML = count;
    }, [count])


    function removeItem() {
        if (count > initial) {
            return setCount(count - 1)
        }
    }

    function addItem() {
        if (count < stock) {
            return setCount(count + 1)
        }
    }

    return (
        <>

            <div className="form-groupmt-3 py-2">
                <button className="btn btn-outline-primary btn-icon" id="remove" onClick={removeItem}><i className="bi bi-dash"></i></button>
                <span className="mx-2" style={{ maxWidth: "50px" }}>{count}</span>
                <button className="btn btn-outline-primary btn-icon" id="add" onClick={addItem}><i className="bi bi-plus"></i></button>
            </div>
        </>
    )
}

export default ItemCount;