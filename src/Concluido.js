import React from "react";
import Titulo from "./Titulo";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import cores from "./cores";
import Seat from "./Seats";
function Concluido() {
  const { filme, dia, hora, nome, cpf, assentos } = useParams();
  const seats = assentos.split(",")
  const {verdeclaro}= cores
  const navigate = useNavigate()
  const titulo = (
    <p>
      Pedido feito
      <br />
      com sucesso!
    </p>
  );
  let diaD = dia.replaceAll(".", "/");

  return (
    <Divconcluido>
      <Titulo titulo={titulo} cor={verdeclaro} />
      <div>
        <h2>Filme e sessão</h2>
        <h4>
          {filme} <br />
          {diaD} {hora}
        </h4>
      </div>
      <div>
        <h2>Ingressos</h2>
        <h4>
         {seats.map((seat, index) => (
            <Seat
              key={index}
              seat={seat}
            />
          ))} 
        </h4>
      </div>
      <div>
        <h2>Comprador</h2>
        <h4>
          Nome: {nome} <br />
          CPF: {cpf}
        </h4>
      </div>
      <div className="concluido_button">
        <button onClick={()=> navigate("/")}>Voltar pra Home</button>
      </div>
    </Divconcluido>
  );
}
export default Concluido;
const Divconcluido = styled.div`
  width: 375px;
  margin: 0 auto;
h2 {
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.04em;
  color: #293845;
}
h4 {
  margin: 4px 0 20px;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.04em;
  color: #293845;
}
.concluido_button {
  padding: 30px;
  display: flex;
  justify-content: center;
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
}
`
