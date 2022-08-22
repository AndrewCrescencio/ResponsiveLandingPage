import "../scss/styles.scss";
import Menus from "./menus";
import Effects from "./effects";

const menus = new Menus();
const effects = new Effects();

class App {
  constructor(menus, effects) {
    this.menus = menus;
    this.effects = effects;
  }

  boot() {
    this.menus.boot();
    this.effects.boot();
  }
}

const app = new App(menus, effects).boot();
