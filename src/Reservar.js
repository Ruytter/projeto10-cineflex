import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function Reservar(props) {
  const{ids, day, movie, hora, seats}=props
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const navigate = useNavigate();
  let dia = day.date.replaceAll("/", ".");
  function concluirReserva(e) {
     e.preventDefault();
     if(ids.length === 0){
     return alert ("Selecione pelo menos um assento")
     }
     const URL =
          "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";
    const body = {
      ids: ids,
      name:name,
      cpf: cpf
    };
    const promise = axios.post(URL, body);
    promise.then((data) => {
    navigate(`concluido/${movie.title}/${dia}/${hora}/${name}/${cpf}/${seats}`);
     });
    promise.catch((err) => {
      console.log(err);
    });
  }
  return (
    <Reservarassento>
      <form onSubmit={concluirReserva}>
        <div>
          <label htmlFor="nome">Nome do comprador</label>
          <input
            id="nome"
            nome="nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cpf">CPF do comprador</label>
          <input
            id="cpf"
            nome="cpf"
            type="number"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>
        <div className="submit_reserva">
            <button type="submit" >Reservar assento(s)</button>
        </div>
      </form>
    </Reservarassento>
  );
}
export default Reservar;
const Reservarassento = styled.div`
  width: 375px;
  margin: 0 auto;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  input {
    width: 327px;
    height: 51px;
    margin: 3px 0 10px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
  }
  .submit_reserva {
    padding: 30px;
    display: flex;
    justify-content: center;
  }
  button {
    width: 225px;
    height: 42px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    background: #e8833a;
    color: #ffffff;
    border-radius: 3px;
    border: none;
  }
`;
