import { Outlet } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user-selector";
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from "../../store/user/user-action";

const HeaderFooter = () => {

    const dispatch = useDispatch();
    const user = useSelector(selectCurrentUser);

    const logout = () => {
        dispatch(removeUser());
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand m-3" href="/">E-commerce</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse flex justify-content-around navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/products">Products</a>
                        </li>
                        {
                            user && (
                                <li className="nav-item">
                                    <span className="nav-link">{user.name}</span>
                                </li>
                            )
                        }
                        
                        {
                            user && (
                                <li className="nav-item">
                                    <button type="submit" className="nav-link bg-light border-0" onClick={logout}>LogOut</button>
                                </li>
                            )
                        }

                        {
                            !user && (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/login">Login</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/register">Register</a>
                                    </li>
                                </>
                            )
                        }
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">Cart</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0 d-flex" method="get" action="/products">
                        <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" name='search' />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <Outlet />

            <div className="border-top">
                <div className="container">
                    <footer className="py-3 my-4">
                        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                            <li className="nav-item"><a href="/products" className="nav-link px-2 text-muted">Products</a></li>
                            <li className="nav-item"><a href="/login" className="nav-link px-2 text-muted">Login</a></li>
                            <li className="nav-item"><a href="/register" className="nav-link px-2 text-muted">Register</a></li>
                        </ul>
                        <p className="text-center text-muted">&copy; 2022 Company, Inc</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default HeaderFooter;