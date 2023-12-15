import ItemCount from "../ItemCount";

const ItemDetail = ({ item }) => {

    const name = item.name;
    const description = item.description;
    const price = parseFloat(item.price).toFixed(2);
    const imgUrl = item.imgUrl;
    const stock = parseInt(item.stock);

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
                            <span className="badge bg-dark">Estoque: {stock}</span>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-around">
                    <ItemCount stock={stock} />
                </div>
            </div>
        </>
    )
}

export default ItemDetail;