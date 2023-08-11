let menuBar = document. getElementById("menubar")
let mainNav = document. getElementById("mainNav")
let mainMenu = document. getElementById("mainMenu")

menuBar.addEventListener("clic", function(){
    if(mainMenu.classList.contains("main-menu")){
        mainMenu.classList.add("main-menu-block");
        mainMenu.classList.remove("main-meun")
    }
    else {
        mainMenu.classList.add("main-menu");
        mainMenu.classList.remove("main-meu-block");
    }
});