import { API_KEY } from './api_key';
const API = `https://api.themoviedb.org/3`;

export const getData = async (category, lang, page) => {
  try {
    const response = await fetch(
      `${API}/tv/${category}?api_key=${API_KEY}&language=${lang}&page=${page}`,
    );
    return await response.json();
  } catch (error) {
    console.log('error :>> ', error);
  }
};

export const getDescriptionData = async (id, lang) => {
  try {
    const response = await fetch(`${API}/tv/${id}?api_key=${API_KEY}&language=${lang}`);
    return await response.json();
  } catch (error) {
    console.log('error :>> ', error);
  }
};

export const getSearchResult = async (query, lang) => {
  try {
    const response = await fetch(
      `${API}/search/tv?api_key=${API_KEY}&query=${query}&language=${lang}`,
    );
    return await response.json();
  } catch (error) {
    console.log('error :>> ', error);
  }
};

export const getPersonalActor = async (lang, page) => {
  try {
    const response = await fetch(
      `${API}/person/popular?api_key=${API_KEY}&language=${lang}&page=${page}`,
    );
    return await response.json();
  } catch (error) {
    console.log('error :>> ', error);
  }
};
