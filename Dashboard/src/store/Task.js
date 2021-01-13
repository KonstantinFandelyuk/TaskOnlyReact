import { action, makeAutoObservable } from "mobx";
import { getBoard, updateTask } from "../api/boardApi";
// import { toJS } from "mobx";

class Task {
  taskList = [];
  constructor() {
    makeAutoObservable(this, {
      fetchBoard: action.bound,
      addNewTask: action.bound,
    });
  }

  async fetchBoard() {
    const response = await getBoard();
    this.taskList = [...response.results];
  }

  addNewTask(item, taskName) {
    const taskBoard = [];
    taskBoard.push(...item.taskBoard, {
      id: Math.ceil(Math.random(new Date().getTime()) * (5 - 100) + 88),
      title: taskName,
    });
    updateTask(item.objectId, { taskBoard });
    this.fetchBoard();
  }
}

export default new Task();
