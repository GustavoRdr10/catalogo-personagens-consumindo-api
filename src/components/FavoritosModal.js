import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
`;

const ClearButton = styled(StyledButton)`
  background-color: #ff5c5c;
  margin-right: 10px;
  margin-left: 0;
`;

const StyledMessage = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-height: 100px;
  overflow-y: auto;
`;

const CenteredDiv = styled.div`
  text-align: center;
`;

function FavoritosModal({ favoritos, onClose, onUpdateFavoritos }) {
  const [favoritosList, setFavoritosList] = useState(favoritos);
  const [deletado, setDeletado] = useState(false);

  useEffect(() => {
    setFavoritosList(favoritos);
  }, [favoritos]);

  const handleClearClick = () => {
    setFavoritosList([]);
    setDeletado(true);
    onUpdateFavoritos([]);

    setTimeout(() => {
      setDeletado(false);
    }, 3000);
  };

  return (
    <Card>
      {favoritosList.length > 0 ? (
        <h2>Personagens Favoritos</h2>
      ) : null}
      {!deletado && favoritosList.length === 0 && (
        <StyledMessage>Adicione um favorito!!!!</StyledMessage>
      )}
      {favoritosList.length > 0 && (
        <ul>
          {favoritosList.map((personagem) => (
            <li key={personagem.id}>{personagem.name}</li>
          ))}
        </ul>
      )}
      {deletado && <StyledMessage>Personagem(ns) deletado(s) com sucesso!!!</StyledMessage>}
      <CenteredDiv>
        {favoritosList.length > 0 && (
          <StyledButton onClick={handleClearClick}>Limpar</StyledButton>
        )}
        <ClearButton onClick={onClose}>Fechar</ClearButton>
      </CenteredDiv>
    </Card>
  );
  
}

export default FavoritosModal;
