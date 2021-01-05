import { action, makeAutoObservable } from "mobx";
import { getBoard, updateTask } from "../api/boardApi";
// import { toJS } from "mobx";

class Task {
  taskList = [];
  taskName = "";
  constructor() {
    makeAutoObservable(this, {
      fetchBoard: action.bound,
      addNewTask: action.bound,
    });
  }

  enterTaskName(value) {
    this.taskName = value;
  }

  async fetchBoard() {
    const response = await getBoard();
    this.taskList = [...response.results];
  }

  async addNewTask(item) {
    const taskBoard = [];
    taskBoard.push(...item.taskBoard, {
      id: Math.ceil(Math.random(new Date().getTime()) * (5 - 100) + 88),
      title: this.taskName,
    });
    updateTask(item.objectId, { taskBoard });
    await this.fetchBoard();
    this.taskName = "";
  }
}

export default new Task();
