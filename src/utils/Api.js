import axios from 'axios';

export const fetchPersonagens = async () => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character/');
    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};
