import UserAPI from "../store/UserAPI";
import { toJS } from "mobx";

export const userSingUp = async (data) => {
  try {
    const response = await fetch(`https://parseapi.back4app.com/users`, {
      method: "POST",
      headers: {
        "X-Parse-Application-Id": `EJH8XBQKRqkx2Ocl4cWHsfAKQqjHnFFnmvyLtxzw`,
        "X-Parse-REST-API-Key": `s7xQGyymCsFiQb6U58OCegISB8Cu7Np6ivh3684z`,
        "X-Parse-Revocable-Session": 1,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.log("error :>> ", error);
  }
};

export const userLogIn = async (data) => {
  try {
    const response = await fetch(
      `https://parseapi.back4app.com/login?username=${data.username}&password=${data.password}`,
      {
        method: "GET",
        headers: {
          "X-Parse-Application-Id": `EJH8XBQKRqkx2Ocl4cWHsfAKQqjHnFFnmvyLtxzw`,
          "X-Parse-REST-API-Key": `s7xQGyymCsFiQb6U58OCegISB8Cu7Np6ivh3684z`,
          "X-Parse-Revocable-Session": 1,
        },
      },
    );
    return await response.json();
  } catch (error) {
    console.log("Ошибка, вы ввели не корректные данные");
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await fetch(`https://parseapi.back4app.com/users/me`, {
      headers: {
        "X-Parse-Application-Id": `EJH8XBQKRqkx2Ocl4cWHsfAKQqjHnFFnmvyLtxzw`,
        "X-Parse-REST-API-Key": `s7xQGyymCsFiQb6U58OCegISB8Cu7Np6ivh3684z`,
        "X-Parse-Session-Token": `${UserAPI.sessionToken}`,
      },
    });
    return await response.json();
  } catch (error) {
    console.log("error :>> ", error);
  }
};

export const getAllUsers = async () => {
  try {
    const response = await fetch(`https://parseapi.back4app.com/users`, {
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

export const getUserUpdate = async (data) => {
  try {
    const response = await fetch(
      `https://parseapi.back4app.com/users/${UserAPI.currentUser.objectId}`,
      {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "X-Parse-Application-Id": `EJH8XBQKRqkx2Ocl4cWHsfAKQqjHnFFnmvyLtxzw`,
          "X-Parse-REST-API-Key": `s7xQGyymCsFiQb6U58OCegISB8Cu7Np6ivh3684z`,
          "X-Parse-Session-Token": UserAPI.sessionToken,
          "Content-Type": "application/json",
        },
      },
    );
    return await response.json();
  } catch (error) {
    console.log("error :>> ", error);
  }
};

export const getClientsList = async () => {
  try {
    const response = await fetch(`https://parseapi.back4app.com/classes/Clients`, {
      headers: {
        "X-Parse-Application-Id": `EJH8XBQKRqkx2Ocl4cWHsfAKQqjHnFFnmvyLtxzw`,
        "X-Parse-REST-API-Key": `s7xQGyymCsFiQb6U58OCegISB8Cu7Np6ivh3684z`,
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    console.log("error :>> ", error);
  }
};
