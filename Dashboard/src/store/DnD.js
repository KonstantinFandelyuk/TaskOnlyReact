import { makeAutoObservable } from "mobx";
import UserAPI from "./UserAPI";
// import { toJS } from "mobx";

class DndUpdater {
  constructor() {
    makeAutoObservable(this);
  }
  updateUserListInMsg(item) {
    UserAPI.userAllList = item;
  }
}
export default new DndUpdater();
