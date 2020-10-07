import { API_KEY } from "./api_key";
const API = `https://api.themoviedb.org/3`;

export const getData = async (category = "airing_today", lang = "ru-RU") => {
  try {
    const response = await fetch(`${API}/tv/${category}?api_key=${API_KEY}&language=${lang}`);
    return await response.json();
  } catch (error) {
    console.log("error :>> ", error);
  }
};

export const getDescriptionData = async (id, lang = "ru-RU") => {
  try {
    const response = await fetch(`${API}/tv/${id}?api_key=${API_KEY}&language=${lang}`);
    return await response.json();
  } catch (error) {
    console.log("error :>> ", error);
  }
};
