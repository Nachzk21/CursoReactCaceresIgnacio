import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <>
            <Navbar bg="warning" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">
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
                        <Nav.Link href="./pages/Contactos.contactos.jsx"><h5>Comida</h5></Nav.Link>
                        <Nav.Link href="#features"><h5>Contacto</h5></Nav.Link>
                        <Nav.Link href="#pricing"><h5>Nuestros locales</h5></Nav.Link>
                    </Nav>
                    <CartWidget></CartWidget>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;