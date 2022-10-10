import React from "react";
import "./App.css";
import FilmeContainer from "./FilmeContainer";
import Header from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sessao from "./Sessao";
import Assentos from "./Assentos";
import Concluido from "./Concluido";
import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <Appcontainer>
        <Header />
        <Routes>
            <Route path="/" element={<FilmeContainer />} />
            <Route path="/sessao/:movieId" element={<Sessao />} />
            <Route path="/sessao/:movieId/assentos/:sectionId" element={<Assentos />} />
            <Route path="/sessao/:movieId/assentos/:sectionId/concluido/:ids" element={<Concluido/>} />
        </Routes>
      </Appcontainer>
    </BrowserRouter>
  );
}

export default App;
 const Appcontainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
 `