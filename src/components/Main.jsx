
import { Container, Row, Card, Badge } from 'react-bootstrap';
import dados from '../datasets/escolas_pb_2025.json';

export const Main = () => {
  const top30 = dados.slice(0, 3);

  return (
    <Container className="mt-5">
      <div className="text-center mb-5">
        <h1 className="text-primary fw-bold"> Censo escolar 2025</h1>
        <p className="text-muted">As 3 Instituições de Ensino com maior número de matrículas da Região</p>
      </div>

      <Row className="justify-content-center gap-3 my-4">
        {top30.map((escola, index) => (
          
          <Card key={escola.co_entidade} style={{ width: '18rem' }} className="shadow-sm border-1 rounded-3">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-3">
                    {/* Badge indicando a posição no pódio */}
                    <Badge bg='black' className="p-2 fs-6">
                      {index + 1}º Lugar
                    </Badge>
              </div>
              <div className="mt-3 pt-2 border-top">
                <Card.Title className="fw-bold text-dark fs-5 mb-2">
                  {escola.no_entidade}
                </Card.Title>
                
                <Card.Subtitle className="mb-2 text-muted">
                  <strong>Município:</strong> {escola.no_municipio}

                </Card.Subtitle>
                <Card.Text>
                  
                </Card.Text>
                <div className="mt-3 pt-2 border-top">
                  <Card.Text className="fw-bold text-primary text-decoration-none">
                  {escola.qt_mat_bas.toLocaleString('pt-BR')} Matrículas
                  </Card.Text>
                  
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};