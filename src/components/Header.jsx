
import { Container, Nav, Navbar } from 'react-bootstrap';
import { IoSchoolOutline } from 'react-icons/io5';

export const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <IoSchoolOutline size={30} style={{ marginRight: "10px" }} />
            Censo Escolar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/instituicaoensino">Instituição Ensino</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
