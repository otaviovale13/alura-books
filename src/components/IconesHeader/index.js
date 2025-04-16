import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";
import styled from "styled-components";

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`

const IconeImg = styled.img`
    @media (max-width: 878px) {
        width: 20px;
    }
`

const Icones = styled.ul`
    display: flex;
    align-items: center;

    @media (max-width: 706px) {
        display: none;
    }
`

const icones = [perfil, sacola];

function IconesHeader() {
    return(
        <Icones>
          {icones.map((icone) => (
            <Icone>
              <IconeImg src={icone}></IconeImg>
            </Icone>
          ))}
        </Icones>
    )
}

export default IconesHeader;