import { Container, Row, Col, Nav } from "react-bootstrap";

import {
  IoHomeOutline,
  IoPersonOutline,
  IoMailOutline,
  IoSchoolOutline,
} from "react-icons/io5";

export const Footer = () => {
  return (
    <footer
      className="bg-opacity-70 text-light bg-dark py-4 mt-5 "
      style={{ marginTop: "10px" }}
    >

      <Container >
        <Row>
          {/* Coluna esquerda */}
          <Col xs={8} md={6}>
            <IoSchoolOutline size={30} style={{ marginRight: "10px" }} />
            Censo Escolar
          </Col>

          {/* Coluna direita */}
          <Col xs={8} md={6}>

            <Nav className="flex-column">
              <Nav.Link
                href="/"
                className="text-light d-flex align-items-center gap-2 mb-2"
              >
                <IoHomeOutline size={32} />
                Home
              </Nav.Link>

              <Nav.Link
                href="/sobre"
                className="text-light d-flex align-items-center gap-2 mb-2"
              >
                <IoPersonOutline size={32} />
                Sobre
              </Nav.Link>

              <Nav.Link
                href="/contato"
                className="text-light d-flex align-items-center gap-2"
              >
                <IoMailOutline size={32} />
                Contato
              </Nav.Link>
            </Nav>
          </Col>
        </Row>

        <hr className="border-secondary my-4" />

        {/* Rodapé inferior */}
        <Row>
          <Col className="text-center">
            © {new Date().getFullYear()} Censo Escolar - IFPB - Todos os
            direitos reservados.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
