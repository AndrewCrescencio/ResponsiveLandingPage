let toggleButton = document.getElementById('toggle-button');
let navbarLinks = document.getElementById('navbarLinks')
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

const dropdownButton = document.querySelectorAll('.dropdownButton');
const dropdownMenu = document.querySelectorAll('.footer__links__dropdown__links');

for (let i = 0; i < dropdownButton.length; i++) {
    dropdownButton[i].addEventListener("click", function() {
        dropdownMenu[i].classList.toggle("active");
    });
}

