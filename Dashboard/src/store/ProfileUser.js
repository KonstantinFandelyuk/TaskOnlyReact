import { getUserUpdate } from "../api/api";
import { makeAutoObservable, action } from "mobx";
import UserAPI from "./UserAPI";
// import { toJS } from "mobx";

class ProfileUser {
  constructor() {
    makeAutoObservable(this, { updateUserData: action });
  }

  async updateUserData(data) {
    const result = await getUserUpdate(data);
    UserAPI.updateCurrentUser();
  }
}
export default new ProfileUser();
