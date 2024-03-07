import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const LogoComponent = () => {
  const logoStyle = {
    width: '75px',
    height: '22.5px',
    objectFit: 'cover',
  };

  return (
    <Navbar.Brand href="#">
      <img className='logo ms-5' src="./assets/images/Logo.svg" alt="Logo" style={logoStyle} />
      <span>&#8482;</span>
    </Navbar.Brand>
  );
};

const NavLinks = () => {
  return (
    <Nav className="ms-auto">
      <Nav.Link href="#" className=' me-4' >Crypto taxes</Nav.Link>
      <Nav.Link href="#" className=' me-4' >Free Tools</Nav.Link>
      <Nav.Link href="#" className=' me-4' >Resource center</Nav.Link>
    </Nav>
  );
};

const GetStartedButton = () => {
  return (
    <Button
      className='px-4 me-5'
      variant="primary"
      size="lg"
      style={{ background: 'linear-gradient(to right, #2870EA, #1B4AEF)' }}
    >
      Get Started
    </Button>
  );
};

const NavbarComponent = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3 navbar" sticky="top">
      <Container fluid>
        <LogoComponent />
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <NavLinks />
          <GetStartedButton />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
