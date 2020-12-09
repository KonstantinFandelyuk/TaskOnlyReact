import { makeAutoObservable } from "mobx";
// import { toJS } from "mobx";

class SwtichTheme {
  themeName = "light";
  constructor() {
    makeAutoObservable(this);
  }
  switchTheme() {
    // console.log("this.themeName ", this.themeName);
    if (this.themeName === "light") {
      this.themeName = "dark";
    } else {
      this.themeName = "light";
    }
  }
}
export default new SwtichTheme();
