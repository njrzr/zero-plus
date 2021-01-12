let menu = document.querySelector(".menu");
let navbar = document.querySelector(".navbar");
let navlink = document.getElementsByClassName("navlink");

menu.addEventListener("click", () => {
  navbar.classList.toggle("navbar-show");
  menu.classList.toggle("menu-click");
})

for(let i = 0;i < navlink.length;i++) {
  navlink[i].addEventListener("click", () => {
    navbar.classList.toggle("navbar-show");
    menu.classList.toggle("menu-click");
  })
}

