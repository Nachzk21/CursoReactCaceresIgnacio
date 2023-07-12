import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

function NavBar() {
    return (
        <>
            <Navbar bg="info" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/img/SinTacc.png"
                            width="40"
                            height="45"
                            className="d-inline-block align-top"
                        />{' '}
                        Sintaxis
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                <CartWidget></CartWidget>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;