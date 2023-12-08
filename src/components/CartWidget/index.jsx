import './style.css';

const CartWidget = () => {

    return (
        <>
            <a href="#cart" className="btn position-relative mb-3">
                <span className="position-absolute translate-middle badge rounded-pill bg-danger cart-number" id="cart">
                    1
                    <span className="visually-hidden">unread messages</span>
                </span>
                <i className="bi bi-cart h3"></i>
            </a>
        </>
    )
}

export default CartWidget;