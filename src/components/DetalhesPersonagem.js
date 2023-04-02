import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledMensagem = styled.p`
  color: green;
  margin: 0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  max-width: 400px;
  margin-bottom: 20px;
`;

const Characteristic = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #4285f4;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
`;

const DetalhesPersonagem = ({ personagem, onFavoritos }) => {
  const [mensagem, setMensagem] = useState("");
  const [favoritos, setFavoritos] = useState([]);
  const [favoritosNomes, setFavoritosNomes] = useState([]);

  const handleClickFavoritos = () => {
    if (favoritosNomes.includes(personagem.name)) {
      setMensagem(`${personagem.name} já está nos favoritos!`);
    } else {
      setFavoritosNomes([...favoritosNomes, personagem.name]);
      setFavoritos([...favoritos, personagem]);
      onFavoritos(personagem);
      setMensagem(`${personagem.name} foi adicionado aos favoritos!`);
    }
  };

  return (
    <Wrapper>
      <Title>{personagem.name}</Title>
      <Image src={personagem.image} alt={personagem.name} />
      <Characteristic>Species: {personagem.species}</Characteristic>
      <Characteristic>Status: {personagem.status}</Characteristic>
      <Characteristic>Gender: {personagem.gender}</Characteristic>
      <Characteristic>Origin: {personagem.origin.name}</Characteristic>
      <Characteristic>Location: {personagem.location.name}</Characteristic>
      <Button onClick={handleClickFavoritos}>Favoritos</Button>
      {favoritosNomes.includes(personagem.name) && (
        <StyledMensagem>{mensagem}</StyledMensagem>
      )}
    </Wrapper>
  );
};

export default DetalhesPersonagem;
