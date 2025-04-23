const hamburgerButton = document.getElementById("show-hamburger-menu");
const hamburgerMenu = document.getElementById("menu");
const print = console.log
hamburgerButton.onclick = (e) => {
    var seen = hamburgerMenu.style.visibility == "visible"
    hamburgerButton.style.transition = "1s";
    hamburgerMenu.style.transition = "1s";
    hamburgerMenu.style.marginTop = seen ? "10px" :"40px"
    hamburgerMenu.style.marginLeft = seen ? "10px" : "30px"
    hamburgerMenu.style.visibility = hamburgerMenu.style.visibility == "visible" ? "hidden" : "visible"
    hamburgerMenu.style.height = hamburgerMenu.style.height == "20px" ? "0px" : "20px"
    hamburgerButton.style.transform = hamburgerMenu.style.height != "20px" ? "rotate(0deg)" : "rotate(-90deg)";
    // hamburgerButton.style.visibility = hamburgerButton.style.visibility == "visible" ? "hidden" : "visible"
}
// hamburgerMenu.value = "#"
hamburgerMenu.onchange = (e) => {
    window.location.href = (e.target.value)
}