import { Link } from "react-router-dom";
import { numberFormat } from "../../utils/numberFormat";
import './style.css';

const OrderItem = ({ item }) => {

    const name = item.name;
    const price = parseFloat(item.price);
    const imgUrl = item.imgUrl;
    const quantity = parseInt(item.quantity);

    return (
        <>

            <td>{item.id}</td>
            <td><Link to={`/item/${item.id}`} ><img src={imgUrl} className="card-img-table" alt="produto" /></Link></td>
            <td>{name}</td>
            <td>{numberFormat(price)}</td>
            <td>{quantity}</td>
            <td className="fw-bold text-success">{numberFormat(quantity * price)}</td>

        </>
    )
}

export default OrderItem;