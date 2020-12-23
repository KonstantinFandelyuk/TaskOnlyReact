import { makeAutoObservable } from "mobx";
// import { toJS } from "mobx";

class SwitchTheme {
  themeName = "light";
  constructor() {
    makeAutoObservable(this);
  }
  switchTheme() {
    if (this.themeName === "light") {
      this.themeName = "dark";
    } else {
      this.themeName = "light";
    }
  }
}
export default new SwitchTheme();
