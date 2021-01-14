export const getMsg = async () => {
  try {
    const response = await fetch(`https://dashme-chat.b4a.io/classes/Chat`, {
      method: "GET",
      headers: {
        "X-Parse-Application-Id": `EJH8XBQKRqkx2Ocl4cWHsfAKQqjHnFFnmvyLtxzw`,
        "X-Parse-REST-API-Key": `s7xQGyymCsFiQb6U58OCegISB8Cu7Np6ivh3684z`,
      },
    });
    return await response.json();
  } catch (error) {
    console.log("error :>> ", error);
  }
};

export const addMsg = async (id, data) => {
  try {
    const response = await fetch(`https://dashme-chat.b4a.io/classes/Chat/${id}`, {
      method: "PUT",
      headers: {
        "X-Parse-Application-Id": `EJH8XBQKRqkx2Ocl4cWHsfAKQqjHnFFnmvyLtxzw`,
        "X-Parse-REST-API-Key": `s7xQGyymCsFiQb6U58OCegISB8Cu7Np6ivh3684z`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.log("error :>> ", error);
  }
};
