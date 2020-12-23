import { action, makeAutoObservable } from "mobx";
import UserAPI from "./UserAPI";
// import { toJS } from "mobx";

class DndUpdater {
  constructor() {
    makeAutoObservable(this, { updateUserListInMsg: action.bound });
  }
  updateUserListInMsg(item) {
    UserAPI.userAllList = item;
  }
}
export default new DndUpdater();
