import React from "react"
import styled from "styled-components"
function Header(){
    return(
        <Appheader>
        <h1>
        CINEFLEX
        </h1>
      </Appheader>
    )
}
export default Header
const Appheader = styled.header`
  width: 100%;
  height: 67px;
  background: #c3cfd9;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  color: #e8833a;
}
`