import React from "react"
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import history from "../history";
const Headers = () => {
    let id = localStorage.getItem('id')

    const Logout = () => {
        localStorage.removeItem('id');
        history.push('/')
    }
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Link to="/">
                        <Navbar.Brand>
                            <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Sagara_Technology_Logo.png" width="100" height="60" className="d-inline-block align-top" />
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {!id ? (
                                <Link to="/login" data-rb-event-key="/login" className="nav-link">
                                    <Navbar.Text >Login</Navbar.Text>
                                </Link>
                            ) : (
                                <Link to="/" data-rb-event-key="/" className="nav-link">
                                    <Navbar.Text style={{ verticalAlign: 'middle' }} onClick={Logout}>
                                        Logout
                                        </Navbar.Text>
                                </Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Headers