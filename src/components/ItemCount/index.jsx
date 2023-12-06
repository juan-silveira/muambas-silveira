const ItemCount = (props) => {

    const stock = props.stock;
    const initial = props.initial;

    


    return (
        <>
            <div className="form-group">
                <p className="text-center">Camiseta Preta</p>
                <button className="btn btn-outline-primary btn-icon" id="remove"><i className="bi bi-dash"></i></button>
                <input type="number" placeholder="1"/>
                <button className="btn btn-outline-primary btn-icon" id="add"><i className="bi bi-plus"></i></button>
            </div>
        </>
    )
}

export default ItemCount;