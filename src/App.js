import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ListaPersonagens from './components/ListaPersonagens';
import DetalhesPersonagem from './components/DetalhesPersonagem';
import FavoritosModal from './components/FavoritosModal';
import { fetchPersonagens } from './utils/Api';

const StyledFavoritosButton = styled.button`
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 25px;
  margin-left: 30px;
  align-self: flex-start;
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const [personagens, setPersonagens] = useState([]);
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const [modalFavoritosAberto, setModalFavoritosAberto] = useState(false);

  useEffect(() => {
    fetchPersonagens().then(setPersonagens);
  }, []);

  const handleClick = (personagem) => {
    setPersonagemSelecionado(personagem);
  };

  const handleFavoritar = (personagem) => {
    if (!favoritos.some((fav) => fav.id === personagem.id)) {
      setFavoritos([...favoritos, personagem]);
    }
  };

  const handleAbrirModalFavoritos = () => setModalFavoritosAberto(true);

  const handleFecharModalFavoritos = () => setModalFavoritosAberto(false);

  const handleUpdateFavoritos = setFavoritos;

  return (
    <StyledApp>
      <StyledFavoritosButton onClick={handleAbrirModalFavoritos}>
        Favoritos
      </StyledFavoritosButton>
      {modalFavoritosAberto && (
        <FavoritosModal
          favoritos={favoritos}
          onUpdateFavoritos={handleUpdateFavoritos}
          onClose={handleFecharModalFavoritos}
        />
      )}
      <ListaPersonagens
        personagens={personagens}
        onClickPersonagem={handleClick}
        onFavoritos={handleFavoritar}
      />
      {personagemSelecionado && (
        <DetalhesPersonagem
          personagem={personagemSelecionado}
          onFavoritos={handleFavoritar}
        />
      )}
    </StyledApp>
  );
}

export default App;
