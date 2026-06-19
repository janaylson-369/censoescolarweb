import { useEffect, useState } from "react";
import { Container, Table } from 'react-bootstrap';
import dados from "../datasets/escolas_pb_2025.json";

const InstituicaoEnsino = () => {

    const [instituicoes, setInstituicoes] = useState([]);

    useEffect(() => {
        const dadoLocal = localStorage.getItem("instituicoes");

        if (!dadoLocal) {
            const top30 = dados.slice(0, 30);
            localStorage.setItem("instituicoes", JSON.stringify(top30));
            setInstituicoes(top30);
        } else {
            setInstituicoes(JSON.parse(dadoLocal));
        }
    }, []);
    
    


    return (
    <Container className ="pb-5">
    <h1 className="text-center my-4">Instituições de Ensino</h1>

    <Table striped bordered hover>
        <thead>
            <tr>
                <th>Posição</th>
                <th>Código</th>
                <th>Nome</th>
                <th>Quantidade de Matrículas</th>
                <th>Município</th>
            </tr>
        </thead>
        {instituicoes.map(
        ({ co_entidade, no_entidade, no_municipio, qt_mat_bas }, i) => (
            
            <tbody key={i}>
                <tr >
                    <td>{i + 1}° Lugar</td>
                    <td>{co_entidade}</td>
                    <td>{no_entidade}</td>
                    <td>{qt_mat_bas}</td>
                    <td>{no_municipio}</td>
                </tr>
                
            </tbody>
        ),
        )}
            
    </Table>
    </Container>
    );
};

export default InstituicaoEnsino;
