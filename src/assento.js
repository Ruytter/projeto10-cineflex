import React, { useEffect } from "react";
import styled from "styled-components";
function Assento(props) {
  const {assento, selectedSeats, back} = props
  
  return (
    <Divassento>
          <button style={back} onClick={()=>selectedSeats(assento)}>
            <p>{assento}</p>
          </button>
    </Divassento>
  );
}
export default Assento;

const Divassento = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 17px;
  margin: 6px;
button {
  width: 25px;
  height: 25px;
  border-radius: 17px;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 0.04em; 
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
}
`
