import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/Inicio1">Inicio</Link>
            <Link className="nav-link" to="/Pagina1">La Casa Blanca</Link>
            <Link className="nav-link" to="/Pagina2">Trofeos</Link>
            <Link className="nav-link" to="/Pagina3">Historia del Club</Link>
            <Link className="nav-link" to="/Pagina4">Socios y Afición</Link>
            <Link className="nav-link" to="/Pagina5">Cantera</Link>
            <Link className="nav-link" to="/Pagina6">Tienda Oficial</Link>
            <Link className="nav-link" to="/Pagina7">Eventos Especiales</Link>
            <Link className="nav-link" to="/Pagina8"> Contactos</Link>
            <Link className="nav-link" to="/Pagina9">Creditos</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
