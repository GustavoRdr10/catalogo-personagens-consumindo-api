import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: 250px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

const StyledImagem = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const StyledCardContent = styled.div`
  padding: 10px;
`;

const StyledTitulo = styled.h3`
  margin: 0;
  font-size: 20px;
  margin-bottom: 10px;
  text-align: center;
`;

const StyledBotao = styled.button`
  background-color: #4285f4;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
  margin-left: 5px;
  background-color: ${props => props.favoritado ? 'orange' : '#4285f4'};
`;

const StyledMensagem = styled.p`
  color: green;
  margin: 0;
  text-align: center;
`;

function CardPersonagem({ personagem, onClickPersonagem, onFavoritos }) {
  const { name, image } = personagem;

  const handleClick = () => {
    onClickPersonagem(personagem);
  };

  const [favoritado, setFavoritado] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const [botaoFavoritosOculto] = useState(false);

  const handleFavoritos = () => {
    if (!favoritado) {
      const isFavoritoExistente = onFavoritos(personagem);
      if (isFavoritoExistente) {
        setMensagem('Este(a) personagem já está na sua lista de favoritos!');
      } else {
        onFavoritos(personagem);
        setMensagem('Esta(e) personagem foi adicionado à sua lista de favoritos com sucesso!!!');
      }
      setFavoritado(true);
      setTimeout(() => {
        setMensagem('');
      }, 3000);
    }
  };  
  
  return (
    <StyledCard>
      <StyledImagem src={image} alt={name} />
      <StyledCardContent>
        <StyledTitulo>{name}</StyledTitulo>
        <StyledBotao onClick={handleClick}>Detalhes</StyledBotao>
        {!botaoFavoritosOculto && (
       <StyledBotao favoritado={favoritado} onClick={handleFavoritos}>
       Favoritos
     </StyledBotao>
        )}
        {mensagem && <StyledMensagem>{mensagem}</StyledMensagem>}
      </StyledCardContent>
    </StyledCard>
  );
}

export default CardPersonagem;
