import Link from 'next/link';
import {APP_NAME} from '../config';
import {signout, isAuth} from '../actions/auth';
import Router from 'next/router';


const Header = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">{APP_NAME}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
                            {!isAuth() && (
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/signin">Se connecter</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/signup">S'inscrire</a>
                                    </li>
                                </>
                            )}

                            {isAuth() && isAuth().role === 0 && (
                                <li className="nav-item">
                                    <a href="/user" className="nav-link">{`${isAuth().name}`}</a>
                                </li>
                            )}

                            {isAuth() && isAuth().role === 1 && (
                                <li className="nav-item">
                                    <a href="/admin" className="nav-link">{`${isAuth().name}`}</a>
                                </li>
                            )}

                            {isAuth() && (
                                <li className="nav-item">
                                    <a className="nav-link" onClick={()=> signout(()=> Router.replace(`/signin`))}>Se déconnecter</a>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
