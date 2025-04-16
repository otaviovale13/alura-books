import Header from "../components/Header";
import styled from "styled-components";
import Pesquisa from "../components/Pesquisa";
import UltimosLancamentos from "../components/UltimosLancamentos";

const AppContainer = styled.div`
    width: auto;
    height: auto;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home
