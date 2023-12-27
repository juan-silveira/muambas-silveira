import { Link } from 'react-router-dom';
import './style.css';
import { CartContextProvider } from '../../contexts/cartContext';

const CartWidget = () => {

    return (
        <>
            <CartContextProvider>
                <Link to="/cart" className="btn position-relative mb-3">
                    <span className="position-absolute translate-middle badge rounded-pill bg-danger cart-number" id="cart">
                        0
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    <i className="bi bi-cart h3"></i>
                </Link>
            </CartContextProvider>
        </>
    )
}

export default CartWidget;