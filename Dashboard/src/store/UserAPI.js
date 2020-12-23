import { getAllUsers, userSingUp, userLogIn, getCurrentUser, getUserUpdate } from "../api/api";
import { action, makeAutoObservable } from "mobx";
// import { toJS } from "mobx";

class UserAPI {
  sessionToken = this.sessionToken ? this.sessionToken : null;
  userData = {
    username: "",
    password: "",
  };
  currentUser = {};
  userAllList = [];
  userOnline = { isOnline: true, lastVisite: `${new Date().getDate()}.${new Date().getMonth()}` };

  constructor() {
    makeAutoObservable(this, {
      logging: action.bound,
      logOut: action.bound,
      updateCurrentUser: action.bound,
      getUserList: action.bound,
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
      this.sessionToken = data.sessionToken;
    } else {
      console.log("не все данные :>> ");
    }
  }

  async logging() {
    if (this.userData.username && this.userData.password) {
      const data = await userLogIn(this.userData);
      this.sessionToken = data.sessionToken;
      this.currentUser = await getCurrentUser();
      sessionStorage.setItem("user_id", this.sessionToken);
      await getUserUpdate(this.userOnline);
    } else {
      console.log("не все данные :>> ");
    }
  }

  async updateCurrentUser() {
    this.currentUser = await getCurrentUser();
  }

  async getUserList() {
    const data = await getAllUsers();
    this.userAllList = [...data.results];
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
