import { Link } from "react-router-dom";
import styled from "styled-components";

const Opcao = styled.li`
    max-width: 120px;
    font-size: 16px;
    display: flex;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 30px;
    cursor: pointer;

    @media (max-width: 878px) {
        font-size: 10px;
    }

    @media (max-width: 706px) {
        font-size: 10px;
        max-width: 10px;
    }
`

const Opcoes = styled.ul`
    display: flex;
`

const texto0pcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE',];

function OpcoesHeader() {
    return(
        <Opcoes>
          { texto0pcoes.map( (texto) => (
            <Link to={`/${texto.toLocaleLowerCase()}`}><Opcao><p>{texto}</p></Opcao></Link>
          ) ) }
        </Opcoes>
    )
}

export default OpcoesHeader