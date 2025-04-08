const hamburgerButton = document.getElementById("show-hamburger-menu");
const hamburgerMenu = document.getElementById("hamburger-menu");
const print = console.log
hamburgerButton.onclick = (e) => {
    hamburgerMenu.style.visibility = hamburgerMenu.style.visibility == "visible" ? "hidden" : "visible"
    hamburgerMenu.style.height = hamburgerMenu.style.height == "100px" ? "0px" : "100px"
    // hamburgerButton.style.visibility = hamburgerButton.style.visibility == "visible" ? "hidden" : "visible"
}