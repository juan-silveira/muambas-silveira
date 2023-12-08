import CartWidget from "../CartWidget";

const NavBar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="./logo192.png" alt="logo" height={"30px"} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Início</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Eletrônicos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Esportes e Lazer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Casa e Jardim</a>
                            </li>
                        </ul>
                        <CartWidget />
                        <a className="btn btn-primary" href="#">Login</a>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;