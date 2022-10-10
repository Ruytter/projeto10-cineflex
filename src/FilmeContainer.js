import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Filme from "./Filme";
import Titulo from "./Titulo";
import styled from "styled-components";
import cores from "./cores";
// import { useParams } from "react-router-dom";

function FilmeContainer() {
  const { preto } = cores;
  // const { iimgId } = useParams();
  const [filmes, setFilmes] = useState([]);
  const titulo = <p>Selecione o filme</p>;

  useEffect(() => {
    const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
    const promisse = axios.get(URL);

    promisse.then((res) => {
      setFilmes(res.data);
    });

    promisse.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  if (filmes.length === 0) {
    return (
      <div id="loding">
        <img src="loading.gif" alt="loading" />
      </div>
    );
  }

  return (
    <>
      <Titulo titulo={titulo} cor={preto} />
      <Main>
        {filmes.map((filme) => (
          <div key={filme.id} className="filme_container">
            <Filme key={filme.id} filme={filme} />
          </div>
        ))}
      </Main>
    </>
  );
}

export default FilmeContainer;
const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .filme_container {
    padding: 8px;
  }
`;
