import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Horario from "./Horario";
import Titulo from "./Titulo";
import Footer from "./Footer";
import cores from "./cores";
function Sessao() {
  const { preto } = cores;
  const { movieId } = useParams();
  const [horarios, setHorarios] = useState([]);
  const titulo = <p>Selecione o horário</p>;
  const fTitle = <p>{horarios.title}</p>;
  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`;
    const promisse = axios.get(URL);

    promisse.then((res) => {
      setHorarios(res.data);
    });

    promisse.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  if (horarios.length === 0) {
    return (
      <div id="loding">
        <img src="loading.gif" alt="loading" />
      </div>
    );
  }
 
  return (
    <>
      <div className="sessao">
        <Titulo titulo={titulo} cor={preto} />
        {horarios.days.map((horario) => (
          <Horario key={horario.id} horario={horario} />
        ))}
      </div>
      <Footer posterURL={horarios.posterURL} fTitle={fTitle} />
    </>
  );
}
export default Sessao;
