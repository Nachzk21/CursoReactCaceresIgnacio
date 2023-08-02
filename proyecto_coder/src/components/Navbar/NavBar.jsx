import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
    return (
        <>
            <Navbar bg="warning" data-bs-theme="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt=""
                            src="/img/SinTacc.png"
                            width="40"
                            height="45"
                            className="d-inline-block "
                        />{' '}
                        Sintaxis
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="" as={Link} to="/comida"><h5>Comida</h5></Nav.Link>
                        <Nav.Link href="#features"><h5>Contacto</h5></Nav.Link>
                        <Nav.Link href="#pricing"><h5>Nuestros locales</h5></Nav.Link>
                        <h5><NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/categoria/hamburguesas" >
                                Hamburguesas
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/categoria/entrepanes">
                                Entre panes
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/categoria/veggie">
                                Veggie
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/comida">
                                Todos los productos
                            </NavDropdown.Item>
                        </NavDropdown></h5>
                    </Nav>
                    <CartWidget></CartWidget>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;