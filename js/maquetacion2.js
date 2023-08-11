let mainNav = document.getElementById("mainNav")
let menuBar = document.getElementById("menuBar")
let mainMenu = document.getElementById("mainMenu");


menuBar.addEventListener("click", function() {
    if (mainMenu.classList.contains("main-menu-pc")) {
        mainMenu.classList.add("main-menu-block");
        mainMenu.classList.remove("main-menu-pc");
        mainMenu.classList.remove("main-menu-block-hidden");
    }
    else {
        mainMenu.classList.add("main-menu-pc");
        mainMenu.classList.add("main-menu-block-hidden");
        mainMenu.classList.remove("main-menu-block");
    }
    mainMenu.classList.remove("main-nav");
    mainMenu.classList.add("main-nav-2");
});