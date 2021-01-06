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
                                    <Link href="/signin">
                                        <NavLink>Signin</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/signup">
                                        <NavLink>Signup</NavLink>
                                    </Link>
                                </NavItem>
                            </div>
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
