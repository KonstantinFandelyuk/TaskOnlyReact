import { getAllUsers, userSingUp, userLogIn, getCurrentUser, getUserUpdate } from "../api/api";
import { action, makeAutoObservable } from "mobx";
import { toJS } from "mobx";

class UserAPI {
  sessionToken = this.sessionToken ? this.sessionToken : null;
  userData = {
    username: "",
    password: "",
  };
  currentUser = {};
  userRegistration = false;
  userAllList = [];
  userOnline = { isOnline: true, lastVisite: `${new Date().getDate()}.${new Date().getMonth()}` };

  constructor() {
    makeAutoObservable(this, {
      logging: action.bound,
      logOut: action.bound,
      updateCurrentUser: action.bound,
      fetchUserList: action.bound,
    });
  }

  getUserName(name) {
    this.userData = { ...this.userData, username: name };
  }

  getUserPassword(password) {
    this.userData = { ...this.userData, password: password };
  }

  async registrationUser() {
    if (this.userData.username && this.userData.password) {
      const data = await userSingUp(this.userData);
      console.log("userDdsdsdsata :>> ", toJS(data));
      if (!data.error) {
        this.userRegistration = true;
      } else {
        console.log("не все данные :>> ");
      }
    } else {
      console.log("не все данные :>> ");
    }
  }

  async logging() {
    if (this.userData.username && this.userData.password) {
      const data = await userLogIn(this.userData);
      if (!data.error) {
        this.sessionToken = data.sessionToken;
        this.currentUser = await getCurrentUser();
        sessionStorage.setItem("user_id", this.sessionToken);
        await getUserUpdate(this.userOnline);
      } else {
        alert("Вы ввели не корректно логин или пароль!");
      }
    } else {
      alert("Вы ввели не корректно логин или пароль!");
    }
  }

  async updateCurrentUser() {
    this.currentUser = await getCurrentUser();
  }

  async fetchUserList() {
    const data = await getAllUsers();
    let count = 1;
    this.userAllList = data.results.map((obj) => ({
      ...obj,
      order: count++,
    }));
  }

  async logOut() {
    sessionStorage.removeItem("user_id");
    this.userOnline = {
      isOnline: false,
      lastVisite: `${new Date().getDate()}.${new Date().getMonth()}`,
    };
    const data = await getUserUpdate(this.userOnline);
    window.location.href = "/login";
  }
}

export default new UserAPI();
