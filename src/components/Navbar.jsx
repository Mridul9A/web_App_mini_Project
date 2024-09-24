import { Link } from "react-router-dom";
import '../styles/navbar.css';

const Navbar = ({ isAuthenticated, setIsAuthenticated }) => {

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/image/flame-1964066_1280.webp" alt="Logo" style={{ width: '80px' }} />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/products">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/solutions">Solutions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/community">Community</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/resources">Resources</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        {isAuthenticated ? (
                            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                        ) : (
                            <>
                                <Link to="/signin">
                                    <button className="btn btn-primary me-2">Sign In</button>
                                </Link>
                                <Link to="/register">
                                    <button className="btn btn-secondary">Registration</button>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
