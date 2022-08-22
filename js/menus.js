export default class Menus {
  constructor() {}
  boot() {
    this.toggleNavbarMenu();
  }
  toggleNavbarMenu() {
    const hamburguerBtn = document.getElementById("hamburguerBtn");
    const navbar = document.getElementById("navbar");
    hamburguerBtn.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });

    const dropdownButton = document.querySelectorAll(".dropdownButton");
    const dropdownMenu = document.querySelectorAll(
      ".footer__links__dropdown__links"
    );

    for (let i = 0; i < dropdownButton.length; i++) {
      dropdownButton[i].addEventListener("click", function () {
        dropdownMenu[i].classList.toggle("active");
      });
    }
  }
  // menusToggle() {
  //   const toggleButton = document.getElementById("toggle-button");
  //   const navbarLinks = document.getElementById("navbarLinks");
  //   toggleButton.addEventListener("click", () => {
  //     navbarLinks.classList.toggle("active");
  //   });

  //   const dropdownButton = document.querySelectorAll(".dropdownButton");
  //   const dropdownMenu = document.querySelectorAll(
  //     ".footer__links__dropdown__links"
  //   );

  //   for (let i = 0; i < dropdownButton.length; i++) {
  //     dropdownButton[i].addEventListener("click", function () {
  //       dropdownMenu[i].classList.toggle("active");
  //     });
  //   }
  // }
}
