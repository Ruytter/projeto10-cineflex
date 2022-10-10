import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Horarios(props) {
  const { weekday, date, showtimes } = props.horario;
  return (
    <Divhorario>
      <div>
        <p>
          {weekday} - {date}
        </p>
      </div>
      <div>
        <Link to={`assentos/${showtimes[0].id}`}>
          <button>{showtimes[0].name}</button>
        </Link>
        <Link to={`assentos/${showtimes[1].id}`}>
          <button>{showtimes[1].name}</button>
        </Link>
      </div>
    </Divhorario>
  );
}
export default Horarios;
const Divhorario = styled.div`
  width: 375px;
  margin: 0 auto;
  p {
    font-weight: 400;
    font-size: 20px;
    color: #293845;
  }
  button {
    width: 83px;
    height: 43px;
    margin: 8px 5px;
    background: #e8833a;
    border-radius: 3px;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #ffffff;
  }
`;
