
import { Card, Badge } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';
import './Main.css';
import dados from '../datasets/escolas_pb_2025.json';
import { Carrossel } from './Carrosel';


export const Main = () => {
  const top30 = dados.slice(0, 3);
  let itens = [
    {
      imgSrc:
        'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      legenda: 'Criança estudando feliz na escola.',
      titulo: 'Estudo no IFPB desde cedo!',
      descricao: 'Aluno estudano no IFPB e adorando aulas de Algoritmos.',
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      legenda: 'Crianças sendo mais felizes na escola.',
      titulo: 'Faça atividades físicas na Escola',
      descricao: 'Turma com boa saúde.',
    },
  ];

  return (
    
    <main className="flex-grow-1 py-4">
      <Container>
        <Carrossel itensCarrossels={itens}></Carrossel>
        
        <Row >
          <Col >
            <Container >
              <div className="text-center mb-5">
                <h1 className="text-primary fw-bold"> Censo escolar 2025</h1>
                <p >As 3 escolas com maior número de matrículas</p>
              </div>

              <Row className="justify-content-center gap-3 my-4">
                {top30.map(({co_entidade, no_entidade, no_municipio, qt_mat_bas}, index) => (
                  <Card key={co_entidade} style={{ width: '18rem' }} className="shadow-sm border-1 rounded-3">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center mb-3">
                            <Badge bg='black' className="p-2 fs-6">
                              {index + 1}º Lugar</Badge>
                      </div>
                      <div className="mt-3 pt-2 border-top">
                        <Card.Title className="fw-bold text-dark fs-5 mb-2">
                          {no_entidade}
                        </Card.Title>
                        
                        <Card.Subtitle className="mb-2 text-muted">
                          <strong>Município:</strong> {no_municipio}
                        </Card.Subtitle>
                        <Card.Text>
                          

                        </Card.Text>
                        <div className="mt-3 pt-2 border-top">
                          <Card.Text className="fw-bold text-primary text-decoration-none">
                          {qt_mat_bas} Matrículas
                          </Card.Text>
                          
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </main>

  );

};