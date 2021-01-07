import { useState } from 'react';
import Link from 'next/link';
import { APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth';
import Router from 'next/router';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <Navbar color="light" light expand="md">
                <Link href="/">
                    <NavLink className="font-weight-bold">{APP_NAME}</NavLink>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        {!isAuth() && (
                            <div style={{display: 'flex'}}>
                                <NavItem>
                                        <NavLink href="/signin">Signin</NavLink>
                                </NavItem>
                                <NavItem>
                                        <NavLink href="/signup">Signup</NavLink>
                                </NavItem>
                            </div>
                        )}

                        {isAuth() && isAuth().role === 0 && (
                            <NavItem>
                                <NavLink href="/user">
                                    {`Bienvenue ${isAuth().name}`}
                                </NavLink>
                            </NavItem>
                        )}

                        {isAuth() && isAuth().role === 1 && (
                            <NavItem>
                                <NavLink href="/admin">
                                    {`Bienvenue ${isAuth().name}`}
                                </NavLink>
                            </NavItem>
                        )}


                        {isAuth() && (
                            <NavItem>
                                    <NavLink onClick={()=> signout(()=> Router.replace(`/signin`))}>Se déconnecter</NavLink>
                            </NavItem>
                        )}

                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
