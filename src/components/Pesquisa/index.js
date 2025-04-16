import Input from "../Input";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getLivros } from "../../servicos/livros";
import { postFavorito } from "../../servicos/favoritos";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
  height: auto;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;

  @media (max-width: 530px) {
    font-size: 26px;
  }

  @media (max-width: 430px) {
    font-size: 16px;
  }
`;

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;

  @media (max-width: 530px) {
    font-size: 10px;
  }

  @media (max-width: 430px) {
    font-size: 8px;
  }
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
    width: 200px;
  }
  img {
    width: 100px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const [livros, setLivros] = useState([]);
  const [buscou, setBuscou] = useState(false);

  useEffect(() => {
    fetchLivros();
  }, []);

  async function fetchLivros() {
    const livrosAPI = await getLivros();
    setLivros(livrosAPI);
    setLivrosPesquisados(livrosAPI);
  }

  async function insertFavorito(id) {
    await postFavorito(id)
    alert(`Livro de id:${id} inserido!`)
  }

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.toLowerCase().includes(textoDigitado.toLowerCase())
          );
          setLivrosPesquisados(resultadoPesquisa);
          setBuscou(true);
        }}
      />
      {buscou &&
        Array.isArray(livrosPesquisados) &&
        livrosPesquisados.map((livro, index) => (
          <Resultado onClick={() => insertFavorito(livro.id)} key={index}>
            <p>{livro.nome}</p>
          </Resultado>
        ))}
    </PesquisaContainer>
  );
}

export default Pesquisa;
