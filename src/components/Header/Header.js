import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
function Header() {
    return (
        <div>
            <Navbar collapseOnSelect
                    className="color-nav"
                    expand="lg" 
                    variant="dark">
                <Navbar.Brand as={Link}
                              to="/"
                              style={{fontSize: "xx-large", marginLeft: "100px"}}>
                                  <strong style={{fontWeight:"900"}}>
                                      Books
                                  </strong>
                                  Reviews
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="container-fluid">
                        <Nav.Link className="ml-auto Nav_link"
                                  to="/" 
                                  exact as={Link}>
                                      HOME
                        </Nav.Link>
                        <NavDropdown className="Nav_link" title="Books" active id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/books" active>Books</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="Nav_link"  as={Link} to="/reviews" >REVIEWS</Nav.Link>
                        <Nav.Link  className="Nav_link"  as={Link} to="/news" >NEWS</Nav.Link>
                        <Nav.Link  className="Nav_link"  as={Link} to="/contacts" >CONTACTS</Nav.Link>
                        <Nav.Link  className="Nav_link">
                            <FontAwesomeIcon icon={faSearch}/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Header;