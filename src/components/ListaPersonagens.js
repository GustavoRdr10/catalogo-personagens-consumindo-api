import React, { useState } from "react";
import styled from "styled-components";
import CardPersonagem from "./CardPersonagem";
import DetalhesPersonagem from "./DetalhesPersonagem";
import Modal from "react-modal";

const StyledListaPersonagens = styled.div`
  margin: 10px;

  h1 {
    font-size: 50px;
    font-weight: bold;
    color: #0077cc;
    margin: 10px 0;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const StyledInput = styled.input`
  margin: 10px;
  padding: 10px;
`;

const StyledInputWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledCardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
`;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ListaPersonagens({ personagens, onFavoritos }) {
  const [busca, setBusca] = useState("");
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false); 

  const handleBuscaChange = (event) => {
    setBusca(event.target.value);
  };

  const handleAbrirModal = (personagem) => {
    setPersonagemSelecionado(personagem);
    setModalIsOpen(true);
  };

  const handleFecharModal = () => {
    setPersonagemSelecionado(null);
    setModalIsOpen(false);
  };

  const personagensFiltrados = personagens.filter((personagem) =>
    personagem.name.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <StyledListaPersonagens>
      <h1>Catálogo de Personagens</h1>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleFecharModal}
        style={customStyles}
      >
        {personagemSelecionado && (
          <div>
            <button onClick={handleFecharModal}>X</button>
            <DetalhesPersonagem
              personagem={personagemSelecionado}
              onFavoritos={onFavoritos}
              onClickPersonagem={() => {}}
            />
          </div>
        )} 
      </Modal>
      <>
        <StyledInputWrapper>
          <StyledInput
            type="text"
            value={busca}
            onChange={handleBuscaChange}
            placeholder="Buscar personagens"
          />
        </StyledInputWrapper>
        <StyledCardsWrapper>
          {personagensFiltrados.map((personagem) => (
            <CardPersonagem
              key={personagem.id}
              personagem={personagem}
              onClickPersonagem={handleAbrirModal}
              onFavoritos={onFavoritos}
            />
          ))}
        </StyledCardsWrapper>
      </>
    </StyledListaPersonagens>
  );
}

export default ListaPersonagens;
