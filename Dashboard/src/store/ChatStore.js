import { makeAutoObservable, action } from "mobx";
import { addMsg, getMsg } from "../api/chatApi";
import { getCurrentUser } from "../api/api";
import { toJS } from "mobx";

class ChatStore {
  openChat = false;
  msgList = [];
  activeUserId = "";
  currentUserId = "";
  currentUserName = "";
  userMsg = "";
  constructor() {
    makeAutoObservable(this, {
      fetchMsg: action.bound,
      sendMsg: action.bound,
    });
  }

  async openChatHandler(value) {
    this.openChat = value;
    const result = await getCurrentUser();
    this.currentUserId = result.objectId;
    this.currentUserName = result.username;
  }

  getUserId(value) {
    this.activeUserId = value.objectId;
  }

  getUserMsg(value) {
    this.userMsg = value;
  }

  async fetchMsg() {
    const data = await getMsg();
    this.msgList = [...data.results];
  }

  async sendMsg(id, value) {
    await addMsg(id, value);
    this.fetchMsg();
    this.userMsg = "";
  }
}

export default new ChatStore();
