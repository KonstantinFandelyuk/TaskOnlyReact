const API = `https://boiling-refuge-66454.herokuapp.com/images`;

export const getPhotoApi = async () => {
  try {
    const response = await fetch(API);
    return await response.json();
  } catch (error) {
    console.log("error :>> ", error);
  }
};

export const getImageById = async (id) => {
  try {
    const response = await fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`);
    return await response.json();
  } catch (error) {
    console.log("error :>> ", error);
  }
};
