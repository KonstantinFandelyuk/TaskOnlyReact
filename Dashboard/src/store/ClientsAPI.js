import { makeAutoObservable } from "mobx";
import { getClientsList } from "../api/api";
// import { toJS } from "mobx";

class ClientsAPI {
  clients = [];
  constructor() {
    makeAutoObservable(this);
  }
  async checkClientsList() {
    const data = await getClientsList();
    this.clients = [...data.results];
  }
}

export default new ClientsAPI();
