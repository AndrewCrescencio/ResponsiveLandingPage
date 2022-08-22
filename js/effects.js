export default class Effects {
  boot() {
    this.wowJs();
  }
  wowJs() {
    new WOW().init();
  }
}
