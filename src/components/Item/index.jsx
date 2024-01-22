import { Link } from "react-router-dom";

const CartItem = ({ item }) => {

    const name = item.name;
    const price = parseFloat(item.price).toFixed(2);
    const imgUrl = item.imgUrl;
    // const stock = parseInt(item.stock);

    return (
        <>
            <div className="card text-center">
                <div className="card-header bg-white">
                    <img src={imgUrl} className="card-img-top" alt="produto" />
                </div>
                <div className="card-body d-flex align-content-between flex-wrap justify-content-center">
                    <div>
                    <h5 className="card-title">{name}</h5>
                    </div>
                    <Link to={`/item/${item.id}`} className="btn btn-outline-info mt-2"><span className="fw-bold">DETALHES</span></Link>
                </div>
                <div className="card-footer d-flex justify-content-around">
                    <span className="badge bg-primary">R$ {price}</span>
                    {/* <span className="badge bg-dark">Estoque: {stock}</span> */}
                </div>
            </div>
        </>
    )
}

export default CartItem;