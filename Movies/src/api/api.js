import { apiKey } from "../api.env";
const API = `https://api.themoviedb.org/3`;
const LangRu = "ru-RU";
const DEFAULT_CATEGORY = "airing_today";
export const getData = async () => {
  try {
    const response = await fetch(
      `${API}/tv/${DEFAULT_CATEGORY}?api_key=${apiKey}&language=${LangRu}`,
    );
    return await response.json();
  } catch (error) {
    console.log("error :>> ", error);
  }
};
