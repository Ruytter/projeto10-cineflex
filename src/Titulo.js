import React from "react";
import styled from "styled-components";
function Titulo(props) {
  return <Divtitulo cor={props.cor} espessura={props.cor==="#247a6b"? "700": "400"}>{props.titulo}</Divtitulo>;
}
export default Titulo;
const Divtitulo = styled.div`
  height: 110px;
  font-weight: ${props => props.espessura};
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.04em;
  color: ${props => props.cor};
  display: flex;
  align-items: center;
  justify-content: center;
`
