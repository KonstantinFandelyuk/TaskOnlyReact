import { API_KEY } from "./api_key";
const API = `https://api.themoviedb.org/3`;
const LangRu = "ru-RU";
const DEFAULT_CATEGORY = "airing_today";

export const getData = async () => {
  try {
    const response = await fetch(
      `${API}/tv/${DEFAULT_CATEGORY}?api_key=${API_KEY}&language=${LangRu}`,
    );
    return await response.json();
  } catch (error) {
    console.log("error :>> ", error);
  }
};

export const getDescriptionData = async (id) => {
  try {
    const response = await fetch(`${API}/tv/${id}?api_key=${API_KEY}&language=${LangRu}`);
    return await response.json();
  } catch (error) {
    console.log("error :>> ", error);
  }
};
