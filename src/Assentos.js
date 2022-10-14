import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Titulo from "./Titulo";
import Assento from "./assento";
import Footer from "./Footer";
import Reservar from "./Reservar";
import cores from "./cores";
import { useParams } from "react-router-dom";
function Assentos() {
  const { preto, verdeescuro } = cores;
  const { sectionId } = useParams();
  const [assentos, setAssentos] = useState([]);
  const [newback, setNewback] = useState([]);
  const [assentosselecionados, setAssentosselecionados] = useState([]);
  const [seats, setSeats] = useState([]);
  const back = [];
  const titulo = <p>Selecione o(s) assento(s)</p>;
  useEffect(() => {
    const URL = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sectionId}/seats`;
    const promisse = axios.get(URL);

    promisse.then((res) => {
      setAssentos(res.data);
    });

    promisse.catch((err) => {
      console.log(err.response.data);
    });
  }, []);

  if (assentos.length === 0) {
    return (
      <div id="loding">
        <img src="loading.gif" alt="loading" />
      </div>
    );
  }

  function selectedSeats(assento) {
    const back2 = [...newback];
    if (back2[assento - 1].backgroundColor !== "#FBE192") {
      if (back2[assento - 1].backgroundColor !== verdeescuro) {
        const selecionado = [...assentosselecionados];
        const seat = [...seats];
        selecionado.push(assentos.seats[assento - 1].id);
        seat.push(assentos.seats[assento - 1].name);
        setAssentosselecionados(selecionado);
        setSeats(seat);
        back2[assento - 1] = {
          backgroundColor: verdeescuro,
          border: "1px solid #0E7D71",
        };
        setNewback(back2);
      } else {
        const selecionado = assentosselecionados.filter(
          (id) => id !== assentos.seats[assento - 1].id
        );
        const seat = seats.filter(
          (name) => name !== assentos.seats[assento - 1].name
        );
        setAssentosselecionados(selecionado);
        setSeats(seat);
        back2[assento - 1] = {
          backgroundColor: "#C3CFD9",
          border: "1px solid #808F9D",
        };
        setNewback(back2);
      }
    }
  }
  if (back.length === 0) {
    assentos.seats.forEach((seat) => {
      if (seat.isAvailable) {
        back.push({
          backgroundColor: "#C3CFD9",
          border: "1px solid #808F9D",
        });
      } else {
        back.push({
          backgroundColor: "#FBE192",
          border: "1px solid #F7C52B",
        });
      }
    });
  }
  if (newback.length === 0) {
    setNewback(back);
  }
  console.log(assentos.name)
  return (
    <>
      <Divassentos>
        <Titulo titulo={titulo} cor={preto} />
        <div className="botoes_assentos">
          {assentos.seats.map((seat, index) => (
            <Assento
              key={seat.id}
              assento={seat.name}
              isAvailable={seat.isAvailable}
              selectedSeats={selectedSeats}
              back={newback[index]}
            />
          ))}
        </div>
      </Divassentos>
      <Divindicadores>
        <div>
          <button style={{ backgroundColor: verdeescuro }}></button>
          <p>Selecionado</p>
        </div>
        <div>
          <button style={{ backgroundColor: "#C3CFD9" }}></button>
          <p>Disponível</p>
        </div>
        <div>
          <button style={{ backgroundColor: "#FBE192" }}></button>
          <p>Indisponível</p>
        </div>
      </Divindicadores>
      <Reservar
        ids={assentosselecionados}
        day={assentos.day}
        movie={assentos.movie}
        hora={assentos.name}
        seats={seats}
      />
      <Footer
        posterURL={assentos.movie.posterURL}
        fTitle={assentos.movie.title}
        dia = {assentos.day.weekday}
        hora = {assentos.name}
      />
    </>
  );
}
export default Assentos;
const Divassentos = styled.div`
  width: 414px;
  margin: 0 auto;
  .botoes_assentos {
    width: 370px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
  }
`;
const Divindicadores = styled.div`
  width: 370px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    width: 25px;
    height: 25px;
    border-radius: 17px;
    background: #1aae9e;
    border: 1px solid #0e7d71;
  }
  p {
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.013em;
    color: #4e5a65;
  }
`;
