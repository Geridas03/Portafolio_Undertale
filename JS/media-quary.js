let mainNav = document.getElementById("mainNav")
let menuBar = document.getElementById("menuBar")
let mainMenu = document.getElementById("mainMenu");


menuBar.addEventListener("click", function() {
    if (mainMenu.classList.contains("main-menu")) {
        mainMenu.classList.add("main-menu-block");
        mainMenu.classList.remove("main-menu");
    }
    else {
        mainMenu.classList.add("main-menu");
        mainMenu.classList.remove("main-menu-block")
    }
    mainMenu.classList.remove("main-nav");
    mainMenu.classList.add("main-nav-2")
});
alert("Bienvenido")