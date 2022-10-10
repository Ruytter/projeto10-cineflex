import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
function Filme(props) {
  const {id, posterURL}=props.filme
  return (
    <Link to={`sessao/${id}`}>
      <Divfilme>
        <img src={posterURL} alt="" />
      </Divfilme>
    </Link>
  );
}
export default Filme;
const Divfilme = styled.div`
  width: 129px;
  margin: 0 auto;
  img {
    width: 100%;
  }
`;
